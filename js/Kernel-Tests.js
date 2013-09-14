smalltalk.addPackage('Kernel-Tests');
smalltalk.addClass('BlockClosureTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testCanClearInterval",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st($Error())._new())._signal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._valueWithInterval_((0)))._clearInterval();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testCanClearInterval",{},smalltalk.BlockClosureTest)})},
args: [],
source: "testCanClearInterval\x0a\x09self shouldnt: [([Error new signal] valueWithInterval: 0) clearInterval] raise: Error",
messageSends: ["shouldnt:raise:", "clearInterval", "valueWithInterval:", "signal", "new"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCanClearTimeout",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st($Error())._new())._signal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._valueWithTimeout_((0)))._clearTimeout();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testCanClearTimeout",{},smalltalk.BlockClosureTest)})},
args: [],
source: "testCanClearTimeout\x0a\x09self shouldnt: [([Error new signal] valueWithTimeout: 0) clearTimeout] raise: Error",
messageSends: ["shouldnt:raise:", "clearTimeout", "valueWithTimeout:", "signal", "new"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCompiledSource",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st((function(){
return smalltalk.withContext(function($ctx2) {
return (1).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._compiledSource())._includesSubString_("function"));
return self}, function($ctx1) {$ctx1.fill(self,"testCompiledSource",{},smalltalk.BlockClosureTest)})},
args: [],
source: "testCompiledSource\x0a\x09self assert: ([1+1] compiledSource includesSubString: 'function')",
messageSends: ["assert:", "includesSubString:", "compiledSource", "+"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCurrySelf",
category: 'tests',
fn: function (){
var self=this;
var curriedMethod,array;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
curriedMethod=_st(_st((function(selfarg,x){
return smalltalk.withContext(function($ctx2) {
return _st(selfarg)._at_(x);
}, function($ctx2) {$ctx2.fillBlock({selfarg:selfarg,x:x},$ctx1)})}))._currySelf())._asCompiledMethod_("foo:");
array=[(3), (1), (4)];
_st(_st($ClassBuilder())._new())._installMethod_forClass_category_(curriedMethod,$Array(),"**test helper");
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._assert_equals_(_st(array)._foo_((2)),(1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($Array())._removeCompiledMethod_(curriedMethod);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testCurrySelf",{curriedMethod:curriedMethod,array:array},smalltalk.BlockClosureTest)})},
args: [],
source: "testCurrySelf\x0a\x09| curriedMethod array |\x0a\x09curriedMethod := [ :selfarg :x | selfarg at: x ] currySelf asCompiledMethod: 'foo:'.\x0a\x09array := #(3 1 4).\x0a\x09ClassBuilder new installMethod: curriedMethod forClass: Array category: '**test helper'.\x0a\x09[ self assert: (array foo: 2) equals: 1 ]\x0a\x09ensure: [ Array removeCompiledMethod: curriedMethod ]",
messageSends: ["asCompiledMethod:", "currySelf", "at:", "installMethod:forClass:category:", "new", "ensure:", "removeCompiledMethod:", "assert:equals:", "foo:"],
referencedClasses: ["Array", "ClassBuilder"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEnsure",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st((function(){
return smalltalk.withContext(function($ctx2) {
return (3);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return (4);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testEnsure",{},smalltalk.BlockClosureTest)})},
args: [],
source: "testEnsure\x0a\x09self assert: ([3] ensure: [4]) equals: 3",
messageSends: ["assert:equals:", "ensure:"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEnsureRaises",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st($Error())._new())._signal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx3) {
return true;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testEnsureRaises",{},smalltalk.BlockClosureTest)})},
args: [],
source: "testEnsureRaises\x0a\x09self should: [[Error new signal] ensure: [true]] raise: Error",
messageSends: ["should:raise:", "ensure:", "signal", "new"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testExceptionSemantics",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._timeout_((100));
_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
self._assert_(true);
_st($Error())._signal();
self._deny_(true);
return self._finished();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx3) {
return self._finished();
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((0));
return self}, function($ctx1) {$ctx1.fill(self,"testExceptionSemantics",{},smalltalk.BlockClosureTest)})},
args: [],
source: "testExceptionSemantics\x0a\x09\x22See https://github.com/NicolasPetton/amber/issues/314\x22\x0a\x09self timeout: 100.\x0a\x09\x0a\x09(self async: [\x0a\x09\x09[\x0a\x09\x09\x09self assert: true.\x0a\x09\x09\x09Error signal.\x0a\x09\x09\x09\x22The following should *not* be run\x22\x0a\x09\x09\x09self deny: true.\x0a\x09\x09\x09self finished.\x0a\x09\x09] on: Error do: [ :ex | self finished ]\x0a\x09]) valueWithTimeout: 0",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "on:do:", "finished", "assert:", "signal", "deny:"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNewWithValues",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	function theTestPrototype() {this.name = "theTestPrototype";}
	function theTestConstructor(arg1, arg2, arg3) {}
	theTestConstructor.prototype = new theTestPrototype;

	var theWrappedConstructor = _st(theTestConstructor);
	var theResult = theWrappedConstructor._newWithValues_([1, 2, 3]);
	self._assert_equals_(Object.getPrototypeOf(theResult).name, 'theTestPrototype');

	"newWithValues: cannot help if the argument list is wrong, and should warn that a mistake was made."
	function constructionShouldFail() {var anotherResult = theWrappedConstructor._newWithValues_('This is so wrong');}
	self._should_raise_(_st(constructionShouldFail), smalltalk.Error);;
return self}, function($ctx1) {$ctx1.fill(self,"testNewWithValues",{},smalltalk.BlockClosureTest)})},
args: [],
source: "testNewWithValues\x0a<\x0a\x09function theTestPrototype() {this.name = \x22theTestPrototype\x22;}\x0a\x09function theTestConstructor(arg1, arg2, arg3) {}\x0a\x09theTestConstructor.prototype = new theTestPrototype;\x0a\x0a\x09var theWrappedConstructor = _st(theTestConstructor);\x0a\x09var theResult = theWrappedConstructor._newWithValues_([1, 2, 3]);\x0a\x09self._assert_equals_(Object.getPrototypeOf(theResult).name, 'theTestPrototype');\x0a\x0a\x09\x22newWithValues: cannot help if the argument list is wrong, and should warn that a mistake was made.\x22\x0a\x09function constructionShouldFail() {var anotherResult = theWrappedConstructor._newWithValues_('This is so wrong');}\x0a\x09self._should_raise_(_st(constructionShouldFail), smalltalk.Error);\x0a>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNumArgs",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._numArgs(),(0));
self._assert_equals_(_st((function(a,b){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}))._numArgs(),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testNumArgs",{},smalltalk.BlockClosureTest)})},
args: [],
source: "testNumArgs\x0a\x09self assert: [] numArgs equals: 0.\x0a\x09self assert: [:a :b | ] numArgs equals: 2",
messageSends: ["assert:equals:", "numArgs"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testOnDo",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Error())._new())._signal();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
return true;
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testOnDo",{},smalltalk.BlockClosureTest)})},
args: [],
source: "testOnDo\x0a\x09self assert: ([Error new signal] on: Error do: [:ex | true])",
messageSends: ["assert:", "on:do:", "signal", "new"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValue",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st((function(){
return smalltalk.withContext(function($ctx2) {
return (1).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._value(),(2));
self._assert_equals_(_st((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}))._value_((2)),(3));
self._assert_equals_(_st((function(x,y){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(y);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1)})}))._value_value_((2),(4)),(8));
self._assert_equals_(_st((function(a,b,c){
return smalltalk.withContext(function($ctx2) {
return (1);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})}))._value(),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testValue",{},smalltalk.BlockClosureTest)})},
args: [],
source: "testValue\x0a\x09self assert: ([1+1] value) equals: 2.\x0a\x09self assert: ([:x | x +1] value: 2) equals: 3.\x0a\x09self assert: ([:x :y | x*y] value: 2 value: 4) equals: 8.\x0a\x0a\x09\x22Arguments are optional in Amber. This isn't ANSI compliant.\x22\x0a\x0a\x09self assert: ([:a :b :c | 1] value) equals: 1",
messageSends: ["assert:equals:", "value", "+", "value:", "value:value:", "*"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValueWithPossibleArguments",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st((function(){
return smalltalk.withContext(function($ctx2) {
return (1);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithPossibleArguments_([(3), (4)]),(1));
self._assert_equals_(_st((function(a){
return smalltalk.withContext(function($ctx2) {
return _st(a).__plus((4));
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1)})}))._valueWithPossibleArguments_([(3), (4)]),(7));
self._assert_equals_(_st((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(a).__plus(b);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}))._valueWithPossibleArguments_([(3), (4), (5)]),(7));
return self}, function($ctx1) {$ctx1.fill(self,"testValueWithPossibleArguments",{},smalltalk.BlockClosureTest)})},
args: [],
source: "testValueWithPossibleArguments\x0a\x09self assert: ([1] valueWithPossibleArguments: #(3 4)) equals: 1.\x0a\x09self assert: ([:a | a + 4] valueWithPossibleArguments: #(3 4)) equals: 7.\x0a\x09self assert: ([:a :b | a + b] valueWithPossibleArguments: #(3 4 5)) equals: 7.",
messageSends: ["assert:equals:", "valueWithPossibleArguments:", "+"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWhileFalse",
category: 'tests',
fn: function (){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { 
i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(i).__gt((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._assert_equals_(i,(6));
i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
i;
return _st(i).__gt((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse();
self._assert_equals_(i,(6));
return self}, function($ctx1) {$ctx1.fill(self,"testWhileFalse",{i:i},smalltalk.BlockClosureTest)})},
args: [],
source: "testWhileFalse\x0a\x09| i |\x0a\x09i := 0.\x0a\x09[i > 5] whileFalse: [i := i + 1].\x0a\x09self assert: i equals: 6.\x0a\x0a\x09i := 0.\x0a\x09[i := i + 1. i > 5] whileFalse.\x0a\x09self assert: i equals: 6",
messageSends: ["whileFalse:", "+", ">", "assert:equals:", "whileFalse"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWhileTrue",
category: 'tests',
fn: function (){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { 
i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(i).__lt((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._assert_equals_(i,(5));
i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
i;
return _st(i).__lt((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue();
self._assert_equals_(i,(5));
return self}, function($ctx1) {$ctx1.fill(self,"testWhileTrue",{i:i},smalltalk.BlockClosureTest)})},
args: [],
source: "testWhileTrue\x0a\x09| i |\x0a\x09i := 0.\x0a\x09[i < 5] whileTrue: [i := i + 1].\x0a\x09self assert: i equals: 5.\x0a\x0a\x09i := 0.\x0a\x09[i := i + 1. i < 5] whileTrue.\x0a\x09self assert: i equals: 5",
messageSends: ["whileTrue:", "+", "<", "assert:equals:", "whileTrue"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);



smalltalk.addClass('BooleanTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._deny_((0).__eq(false));
self._deny_(false.__eq((0)));
self._deny_("".__eq(false));
self._deny_(false.__eq(""));
self._assert_(true.__eq(true));
self._deny_(false.__eq(true));
self._deny_(true.__eq(false));
self._assert_(false.__eq(false));
self._assert_(_st(true._yourself()).__eq(true));
self._assert_(_st(true._yourself()).__eq(true._yourself()));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{},smalltalk.BooleanTest)})},
args: [],
source: "testEquality\x0a\x09\x22We're on top of JS...just be sure to check the basics!\x22\x0a\x0a\x09self deny: 0 = false.\x0a\x09self deny: false = 0.\x0a\x09self deny: '' = false.\x0a\x09self deny: false = ''.\x0a\x0a\x09self assert: (true = true).\x0a\x09self deny: false = true.\x0a\x09self deny: true = false.\x0a\x09self assert: (false = false).\x0a\x0a\x09\x22JS may do some type coercing after sending a message\x22\x0a\x09self assert: (true yourself = true).\x0a\x09self assert: (true yourself = true yourself)",
messageSends: ["deny:", "=", "assert:", "yourself"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._deny_((0).__eq_eq(false));
self._deny_(false.__eq_eq((0)));
self._deny_("".__eq_eq(false));
self._deny_(false.__eq_eq(""));
self._assert_(true.__eq_eq(true));
self._deny_(false.__eq_eq(true));
self._deny_(true.__eq_eq(false));
self._assert_(false.__eq_eq(false));
self._assert_(_st(true._yourself()).__eq_eq(true));
self._assert_(_st(true._yourself()).__eq_eq(true._yourself()));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},smalltalk.BooleanTest)})},
args: [],
source: "testIdentity\x0a\x09\x22We're on top of JS...just be sure to check the basics!\x22\x0a\x0a\x09self deny: 0 == false.\x0a\x09self deny: false == 0.\x0a\x09self deny: '' == false.\x0a\x09self deny: false == ''.\x0a\x0a\x09self assert: true == true.\x0a\x09self deny: false == true.\x0a\x09self deny: true == false.\x0a\x09self assert: false == false.\x0a\x0a\x09\x22JS may do some type coercing after sending a message\x22\x0a\x09self assert: true yourself == true.\x0a\x09self assert: true yourself == true yourself",
messageSends: ["deny:", "==", "assert:", "yourself"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfTrueIfFalse",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16;
$1=self;
if(smalltalk.assert(true)){
$2="alternative block";
};
_st($1)._assert_equals_($2,"alternative block");
$3=self;
if(! smalltalk.assert(true)){
$4="alternative block";
};
_st($3)._assert_equals_($4,nil);
$5=self;
if(smalltalk.assert(false)){
$6="alternative block";
};
_st($5)._assert_equals_($6,nil);
$7=self;
if(! smalltalk.assert(false)){
$8="alternative block";
};
_st($7)._assert_equals_($8,"alternative block");
$9=self;
if(smalltalk.assert(false)){
$10="alternative block";
} else {
$10="alternative block2";
};
_st($9)._assert_equals_($10,"alternative block2");
$11=self;
if(smalltalk.assert(false)){
$12="alternative block2";
} else {
$12="alternative block";
};
_st($11)._assert_equals_($12,"alternative block");
$13=self;
if(smalltalk.assert(true)){
$14="alternative block";
} else {
$14="alternative block2";
};
_st($13)._assert_equals_($14,"alternative block");
$15=self;
if(smalltalk.assert(true)){
$16="alternative block2";
} else {
$16="alternative block";
};
_st($15)._assert_equals_($16,"alternative block2");
return self}, function($ctx1) {$ctx1.fill(self,"testIfTrueIfFalse",{},smalltalk.BooleanTest)})},
args: [],
source: "testIfTrueIfFalse\x0a\x0a\x09self assert: (true ifTrue: ['alternative block']) equals: 'alternative block'.\x0a\x09self assert: (true ifFalse: ['alternative block']) equals: nil.\x0a\x0a\x09self assert: (false ifTrue: ['alternative block']) equals: nil.\x0a\x09self assert: (false ifFalse: ['alternative block']) equals: 'alternative block'.\x0a\x0a\x09self assert: (false ifTrue: ['alternative block'] ifFalse: ['alternative block2']) equals: 'alternative block2'.\x0a\x09self assert: (false ifFalse: ['alternative block'] ifTrue: ['alternative block2']) equals: 'alternative block'.\x0a\x0a\x09self assert: (true ifTrue: ['alternative block'] ifFalse: ['alternative block2']) equals: 'alternative block'.\x0a\x09self assert: (true ifFalse: ['alternative block'] ifTrue: ['alternative block2']) equals: 'alternative block2'.",
messageSends: ["assert:equals:", "ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfTrueIfFalseWithBoxing",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$5,$7,$9,$8,$10,$12,$11,$13,$15,$14,$16,$18,$17,$19,$21,$20,$22,$24,$23;
$1=self;
$3=true._yourself();
if(smalltalk.assert($3)){
$2="alternative block";
};
_st($1)._assert_equals_($2,"alternative block");
$4=self;
$6=true._yourself();
if(! smalltalk.assert($6)){
$5="alternative block";
};
_st($4)._assert_equals_($5,nil);
$7=self;
$9=false._yourself();
if(smalltalk.assert($9)){
$8="alternative block";
};
_st($7)._assert_equals_($8,nil);
$10=self;
$12=false._yourself();
if(! smalltalk.assert($12)){
$11="alternative block";
};
_st($10)._assert_equals_($11,"alternative block");
$13=self;
$15=false._yourself();
if(smalltalk.assert($15)){
$14="alternative block";
} else {
$14="alternative block2";
};
_st($13)._assert_equals_($14,"alternative block2");
$16=self;
$18=false._yourself();
if(smalltalk.assert($18)){
$17="alternative block2";
} else {
$17="alternative block";
};
_st($16)._assert_equals_($17,"alternative block");
$19=self;
$21=true._yourself();
if(smalltalk.assert($21)){
$20="alternative block";
} else {
$20="alternative block2";
};
_st($19)._assert_equals_($20,"alternative block");
$22=self;
$24=true._yourself();
if(smalltalk.assert($24)){
$23="alternative block2";
} else {
$23="alternative block";
};
_st($22)._assert_equals_($23,"alternative block2");
return self}, function($ctx1) {$ctx1.fill(self,"testIfTrueIfFalseWithBoxing",{},smalltalk.BooleanTest)})},
args: [],
source: "testIfTrueIfFalseWithBoxing\x0a\x0a\x09self assert: (true yourself ifTrue: ['alternative block']) equals: 'alternative block'.\x0a\x09self assert: (true yourself ifFalse: ['alternative block']) equals: nil.\x0a\x0a\x09self assert: (false yourself ifTrue: ['alternative block']) equals: nil.\x0a\x09self assert: (false yourself ifFalse: ['alternative block']) equals: 'alternative block'.\x0a\x0a\x09self assert: (false yourself ifTrue: ['alternative block'] ifFalse: ['alternative block2']) equals: 'alternative block2'.\x0a\x09self assert: (false yourself ifFalse: ['alternative block'] ifTrue: ['alternative block2']) equals: 'alternative block'.\x0a\x0a\x09self assert: (true yourself ifTrue: ['alternative block'] ifFalse: ['alternative block2']) equals: 'alternative block'.\x0a\x09self assert: (true yourself ifFalse: ['alternative block'] ifTrue: ['alternative block2']) equals: 'alternative block2'.",
messageSends: ["assert:equals:", "ifTrue:", "yourself", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLogic",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=self;
_st($1)._assert_(true.__and(true));
_st($1)._deny_(true.__and(false));
_st($1)._deny_(false.__and(true));
$2=_st($1)._deny_(false.__and(false));
$3=self;
_st($3)._assert_(true.__or(true));
_st($3)._assert_(true.__or(false));
_st($3)._assert_(false.__or(true));
$4=_st($3)._deny_(false.__or(false));
$5=self;
_st($5)._assert_(true.__and((1).__gt((0))));
_st($5)._deny_(_st((1).__gt((0))).__and(false));
$6=_st($5)._deny_(_st((1).__gt((0))).__and((1).__gt((2))));
$7=self;
_st($7)._assert_(false.__or((1).__gt((0))));
_st($7)._assert_(_st((1).__gt((0))).__or(false));
$8=_st($7)._assert_(_st((1).__gt((0))).__or((1).__gt((2))));
return self}, function($ctx1) {$ctx1.fill(self,"testLogic",{},smalltalk.BooleanTest)})},
args: [],
source: "testLogic\x0a\x09\x22Trivial logic table\x22\x0a\x09self assert: (true & true);\x0a\x09\x09deny: (true & false);\x0a\x09\x09deny: (false & true);\x0a\x09\x09deny: (false & false).\x0a\x09self assert: (true | true);\x0a\x09\x09assert: (true | false);\x0a\x09\x09assert: (false | true);\x0a\x09\x09deny: (false | false).\x0a\x09\x22Checking that expressions work fine too\x22\x0a\x09self assert: (true & (1 > 0));\x0a\x09\x09deny: ((1 > 0) & false);\x0a\x09\x09deny: ((1 > 0) & (1 > 2)).\x0a\x09self assert: (false | (1 > 0));\x0a\x09\x09assert: ((1 > 0) | false);\x0a\x09\x09assert: ((1 > 0) | (1 > 2))",
messageSends: ["assert:", "&", "deny:", "|", ">"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLogicKeywords",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=self;
_st($1)._assert_(true._and_((function(){
return smalltalk.withContext(function($ctx2) {
return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st($1)._deny_(true._and_((function(){
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st($1)._deny_(false._and_((function(){
return smalltalk.withContext(function($ctx2) {
return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$2=_st($1)._deny_(false._and_((function(){
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$3=self;
_st($3)._assert_(true._or_((function(){
return smalltalk.withContext(function($ctx2) {
return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st($3)._assert_(true._or_((function(){
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st($3)._assert_(false._or_((function(){
return smalltalk.withContext(function($ctx2) {
return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$4=_st($3)._deny_(false._or_((function(){
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$5=self;
_st($5)._assert_(true._and_((function(){
return smalltalk.withContext(function($ctx2) {
return (1).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st($5)._deny_(_st((1).__gt((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$6=_st($5)._deny_(_st((1).__gt((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return (1).__gt((2));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$7=self;
_st($7)._assert_(false._or_((function(){
return smalltalk.withContext(function($ctx2) {
return (1).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st($7)._assert_(_st((1).__gt((0)))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$8=_st($7)._assert_(_st((1).__gt((0)))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return (1).__gt((2));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testLogicKeywords",{},smalltalk.BooleanTest)})},
args: [],
source: "testLogicKeywords\x0a\x09\x22Trivial logic table\x22\x0a\x09self\x0a\x09\x09assert: (true and: [ true]);\x0a\x09\x09deny: (true and: [ false ]);\x0a\x09\x09deny: (false and: [ true ]);\x0a\x09\x09deny: (false and: [ false ]).\x0a\x09self\x0a\x09\x09assert: (true or: [ true ]);\x0a\x09\x09assert: (true or: [ false ]);\x0a\x09\x09assert: (false or: [ true ]);\x0a\x09\x09deny: (false or: [ false ]).\x0a\x09\x09\x0a\x09\x22Checking that expressions work fine too\x22\x0a\x09self\x0a\x09\x09assert: (true and: [ 1 > 0 ]);\x0a\x09\x09deny: ((1 > 0) and: [ false ]);\x0a\x09\x09deny: ((1 > 0) and: [ 1 > 2 ]).\x0a\x09self\x0a\x09\x09assert: (false or: [ 1 > 0 ]);\x0a\x09\x09assert: ((1 > 0) or: [ false ]);\x0a\x09\x09assert: ((1 > 0) or: [ 1 > 2 ])",
messageSends: ["assert:", "and:", "deny:", "or:", ">"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonBooleanError",
category: 'tests',
fn: function (){
var self=this;
function $NonBooleanReceiver(){return smalltalk.NonBooleanReceiver||(typeof NonBooleanReceiver=="undefined"?nil:NonBooleanReceiver)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
if(smalltalk.assert("")){
} else {
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$NonBooleanReceiver());
return self}, function($ctx1) {$ctx1.fill(self,"testNonBooleanError",{},smalltalk.BooleanTest)})},
args: [],
source: "testNonBooleanError\x0a\x09self should: [ '' ifTrue: [] ifFalse: [] ] raise: NonBooleanReceiver",
messageSends: ["should:raise:", "ifTrue:ifFalse:"],
referencedClasses: ["NonBooleanReceiver"]
}),
smalltalk.BooleanTest);



smalltalk.addClass('ClassBuilderTest', smalltalk.TestCase, ['builder', 'theClass'], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@builder"]=_st($ClassBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ClassBuilderTest)})},
args: [],
source: "setUp\x0a\x09builder := ClassBuilder new",
messageSends: ["new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
category: 'running',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st($Smalltalk())._current())._removeClass_(self["@theClass"]);
self["@theClass"]=nil;
self["@theClass"];
};
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.ClassBuilderTest)})},
args: [],
source: "tearDown\x0a\x09theClass ifNotNil: [Smalltalk current removeClass: theClass. theClass := nil]",
messageSends: ["ifNotNil:", "removeClass:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testClassCopy",
category: 'tests',
fn: function (){
var self=this;
function $ObjectMock(){return smalltalk.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=_st(self["@builder"])._copyClass_named_($ObjectMock(),"ObjectMock2");
self._assert_(_st(_st(self["@theClass"])._superclass()).__eq_eq(_st($ObjectMock())._superclass()));
self._assert_(_st(_st(self["@theClass"])._instanceVariableNames()).__eq_eq(_st($ObjectMock())._instanceVariableNames()));
self._assert_equals_(_st(self["@theClass"])._name(),"ObjectMock2");
self._assert_(_st(_st(self["@theClass"])._package()).__eq_eq(_st($ObjectMock())._package()));
self._assert_equals_(_st(_st(self["@theClass"])._methodDictionary())._keys(),_st(_st($ObjectMock())._methodDictionary())._keys());
return self}, function($ctx1) {$ctx1.fill(self,"testClassCopy",{},smalltalk.ClassBuilderTest)})},
args: [],
source: "testClassCopy\x0a\x09theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09self assert: theClass superclass == ObjectMock superclass.\x0a\x09self assert: theClass instanceVariableNames == ObjectMock instanceVariableNames.\x0a\x09self assert: theClass name equals: 'ObjectMock2'.\x0a\x09self assert: theClass package == ObjectMock package.\x0a\x09self assert: theClass methodDictionary keys equals: ObjectMock methodDictionary keys",
messageSends: ["copyClass:named:", "assert:", "==", "superclass", "instanceVariableNames", "assert:equals:", "name", "package", "keys", "methodDictionary"],
referencedClasses: ["ObjectMock"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testClassMigration",
category: 'tests',
fn: function (){
var self=this;
var instance,oldClass;
function $ObjectMock(){return smalltalk.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ObjectMock2(){return smalltalk.ObjectMock2||(typeof ObjectMock2=="undefined"?nil:ObjectMock2)}
return smalltalk.withContext(function($ctx1) { 
oldClass=_st(self["@builder"])._copyClass_named_($ObjectMock(),"ObjectMock2");
instance=_st(_st(_st($Smalltalk())._current())._at_("ObjectMock2"))._new();
_st($ObjectMock())._subclass_instanceVariableNames_package_(_st(_st($Smalltalk())._current())._at_("ObjectMock2"),"","Kernel-Tests");
self._deny_(_st(oldClass).__eq_eq($ObjectMock2()));
self._assert_(_st(_st($ObjectMock2())._superclass()).__eq_eq($ObjectMock()));
self._assert_(_st(_st($ObjectMock2())._instanceVariableNames())._isEmpty());
self._assert_equals_(_st($ObjectMock2())._selectors(),_st(oldClass)._selectors());
self._assert_equals_(_st($ObjectMock2())._comment(),_st(oldClass)._comment());
self._assert_equals_(_st(_st($ObjectMock2())._package())._name(),"Kernel-Tests");
self._deny_(_st(_st(instance)._class()).__eq_eq($ObjectMock2()));
self._assert_(_st(_st(_st($Smalltalk())._current())._at_(_st(_st(instance)._class())._name()))._isNil());
_st(_st($Smalltalk())._current())._removeClass_($ObjectMock2());
return self}, function($ctx1) {$ctx1.fill(self,"testClassMigration",{instance:instance,oldClass:oldClass},smalltalk.ClassBuilderTest)})},
args: [],
source: "testClassMigration\x0a\x09| instance oldClass |\x0a\x09\x0a\x09oldClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09instance := (Smalltalk current at: 'ObjectMock2') new.\x0a\x09\x0a\x09\x22Change the superclass of ObjectMock2\x22\x0a\x09ObjectMock subclass: (Smalltalk current at: 'ObjectMock2')\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: 'Kernel-Tests'.\x0a\x09\x0a\x09self deny: oldClass == ObjectMock2.\x0a\x09\x0a\x09self assert: ObjectMock2 superclass == ObjectMock.\x0a\x09self assert: ObjectMock2 instanceVariableNames isEmpty.\x0a\x09self assert: ObjectMock2 selectors equals: oldClass selectors.\x0a\x09self assert: ObjectMock2 comment equals: oldClass comment.\x0a\x09self assert: ObjectMock2 package name equals: 'Kernel-Tests'.\x0a\x09\x0a\x09self deny: instance class == ObjectMock2.\x0a\x09\x22Commeting this out. Tests implementation detail.\x22\x0a\x09\x22self assert: instance class name equals: 'OldObjectMock2'.\x22\x0a\x09\x0a\x09self assert: (Smalltalk current at: instance class name) isNil.\x0a\x09\x0a\x09Smalltalk current removeClass: ObjectMock2",
messageSends: ["copyClass:named:", "new", "at:", "current", "subclass:instanceVariableNames:package:", "deny:", "==", "assert:", "superclass", "isEmpty", "instanceVariableNames", "assert:equals:", "selectors", "comment", "name", "package", "class", "isNil", "removeClass:"],
referencedClasses: ["ObjectMock", "Smalltalk", "ObjectMock2"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testClassMigrationWithClassInstanceVariables",
category: 'tests',
fn: function (){
var self=this;
function $ObjectMock(){return smalltalk.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
function $ObjectMock2(){return smalltalk.ObjectMock2||(typeof ObjectMock2=="undefined"?nil:ObjectMock2)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@builder"])._copyClass_named_($ObjectMock(),"ObjectMock2");
_st(_st($ObjectMock2())._class())._instanceVariableNames_("foo bar");
_st($ObjectMock())._subclass_instanceVariableNames_package_(_st(_st($Smalltalk())._current())._at_("ObjectMock2"),"","Kernel-Tests");
self._assert_equals_(_st(_st($ObjectMock2())._class())._instanceVariableNames(),["foo", "bar"]);
_st(_st($Smalltalk())._current())._removeClass_($ObjectMock2());
return self}, function($ctx1) {$ctx1.fill(self,"testClassMigrationWithClassInstanceVariables",{},smalltalk.ClassBuilderTest)})},
args: [],
source: "testClassMigrationWithClassInstanceVariables\x0a\x09\x0a\x09builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09ObjectMock2 class instanceVariableNames: 'foo bar'.\x0a\x09\x0a\x09\x22Change the superclass of ObjectMock2\x22\x0a\x09ObjectMock subclass: (Smalltalk current at: 'ObjectMock2')\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: 'Kernel-Tests'.\x0a\x09\x0a\x09self assert: ObjectMock2 class instanceVariableNames equals: #('foo' 'bar').\x0a\x09\x0a\x09Smalltalk current removeClass: ObjectMock2",
messageSends: ["copyClass:named:", "instanceVariableNames:", "class", "subclass:instanceVariableNames:package:", "at:", "current", "assert:equals:", "instanceVariableNames", "removeClass:"],
referencedClasses: ["ObjectMock", "ObjectMock2", "Smalltalk"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testClassMigrationWithSubclasses",
category: 'tests',
fn: function (){
var self=this;
function $ObjectMock(){return smalltalk.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
function $ObjectMock2(){return smalltalk.ObjectMock2||(typeof ObjectMock2=="undefined"?nil:ObjectMock2)}
function $ObjectMock3(){return smalltalk.ObjectMock3||(typeof ObjectMock3=="undefined"?nil:ObjectMock3)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ObjectMock4(){return smalltalk.ObjectMock4||(typeof ObjectMock4=="undefined"?nil:ObjectMock4)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@builder"])._copyClass_named_($ObjectMock(),"ObjectMock2");
_st($ObjectMock2())._subclass_instanceVariableNames_package_("ObjectMock3","","Kernel-Tests");
_st($ObjectMock3())._subclass_instanceVariableNames_package_("ObjectMock4","","Kernel-Tests");
_st($ObjectMock())._subclass_instanceVariableNames_package_(_st(_st($Smalltalk())._current())._at_("ObjectMock2"),"","Kernel-Tests");
self._assert_(_st(_st($ObjectMock())._subclasses())._includes_($ObjectMock2()));
self._assert_(_st(_st($ObjectMock2())._subclasses())._includes_($ObjectMock3()));
self._assert_(_st(_st($ObjectMock3())._subclasses())._includes_($ObjectMock4()));
_st(_st($ObjectMock())._allSubclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Smalltalk())._current())._removeClass_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testClassMigrationWithSubclasses",{},smalltalk.ClassBuilderTest)})},
args: [],
source: "testClassMigrationWithSubclasses\x0a\x09\x0a\x09builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09ObjectMock2 subclass: 'ObjectMock3' instanceVariableNames: '' package: 'Kernel-Tests'.\x0a\x09ObjectMock3 subclass: 'ObjectMock4' instanceVariableNames: '' package: 'Kernel-Tests'.\x0a\x09\x0a\x09\x22Change the superclass of ObjectMock2\x22\x0a\x09ObjectMock subclass: (Smalltalk current at: 'ObjectMock2')\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: 'Kernel-Tests'.\x0a\x09\x0a\x09self assert: (ObjectMock subclasses includes: ObjectMock2).\x0a\x09self assert: (ObjectMock2 subclasses includes: ObjectMock3).\x0a\x09self assert: (ObjectMock3 subclasses includes: ObjectMock4).\x0a\x09\x0a\x09ObjectMock allSubclasses do: [ :each | Smalltalk current removeClass: each ]",
messageSends: ["copyClass:named:", "subclass:instanceVariableNames:package:", "at:", "current", "assert:", "includes:", "subclasses", "do:", "removeClass:", "allSubclasses"],
referencedClasses: ["ObjectMock", "ObjectMock2", "ObjectMock3", "Smalltalk", "ObjectMock4"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInstanceVariableNames",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@builder"])._instanceVariableNamesFor_("  hello   world   "),["hello", "world"]);
return self}, function($ctx1) {$ctx1.fill(self,"testInstanceVariableNames",{},smalltalk.ClassBuilderTest)})},
args: [],
source: "testInstanceVariableNames\x0a\x09self assert: (builder instanceVariableNamesFor: '  hello   world   ') equals: #('hello' 'world')",
messageSends: ["assert:equals:", "instanceVariableNamesFor:"],
referencedClasses: []
}),
smalltalk.ClassBuilderTest);



smalltalk.addClass('CollectionTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "assertSameContents:as:",
category: 'convenience',
fn: function (aCollection,anotherCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(aCollection)._size()).__eq(_st(anotherCollection)._size()));
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._assert_(_st(_st(aCollection)._occurrencesOf_(each)).__eq(_st(anotherCollection)._occurrencesOf_(each)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"assertSameContents:as:",{aCollection:aCollection,anotherCollection:anotherCollection},smalltalk.CollectionTest)})},
args: ["aCollection", "anotherCollection"],
source: "assertSameContents: aCollection as: anotherCollection\x0a\x09self assert: (aCollection size = anotherCollection size).\x0a\x09aCollection do: [ :each |\x0a\x09\x09self assert: ((aCollection occurrencesOf: each) = (anotherCollection occurrencesOf: each)) ]",
messageSends: ["assert:", "=", "size", "do:", "occurrencesOf:"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._withAll_(self._defaultValues());
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.CollectionTest)})},
args: [],
source: "collection\x0a\x09^ self collectionClass withAll: self defaultValues",
messageSends: ["withAll:", "defaultValues", "collectionClass"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._collectionClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.CollectionTest)})},
args: [],
source: "collectionClass\x0a\x09^ self class collectionClass",
messageSends: ["collectionClass", "class"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._withAll_(["a", "b", "c", (1), (2), (1), "a"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},smalltalk.CollectionTest)})},
args: [],
source: "collectionWithDuplicates\x0a\x09^ self collectionClass withAll: #('a' 'b' 'c' 1 2 1 'a')",
messageSends: ["withAll:", "collectionClass"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultValues",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[(1), (2), (3), (-4)];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultValues",{},smalltalk.CollectionTest)})},
args: [],
source: "defaultValues\x0a\x09^ #(1 2 3 -4)",
messageSends: [],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "isCollectionReadOnly",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isCollectionReadOnly",{},smalltalk.CollectionTest)})},
args: [],
source: "isCollectionReadOnly\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsArray",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assertSameContents_as_(self._collection(),_st(self._collection())._asArray());
return self}, function($ctx1) {$ctx1.fill(self,"testAsArray",{},smalltalk.CollectionTest)})},
args: [],
source: "testAsArray\x0a\x09self\x0a\x09\x09assertSameContents: self collection\x0a\x09\x09as: self collection asArray",
messageSends: ["assertSameContents:as:", "collection", "asArray"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsOrderedCollection",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assertSameContents_as_(self._collection(),_st(self._collection())._asOrderedCollection());
return self}, function($ctx1) {$ctx1.fill(self,"testAsOrderedCollection",{},smalltalk.CollectionTest)})},
args: [],
source: "testAsOrderedCollection\x0a\x09self\x0a\x09\x09assertSameContents: self collection\x0a\x09\x09as: self collection asOrderedCollection",
messageSends: ["assertSameContents:as:", "collection", "asOrderedCollection"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsSet",
category: 'tests',
fn: function (){
var self=this;
var c,set;
return smalltalk.withContext(function($ctx1) { 
c=self._collectionWithDuplicates();
set=_st(c)._asSet();
self._assert_equals_(_st(set)._size(),(5));
_st(c)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._assert_(_st(set)._includes_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testAsSet",{c:c,set:set},smalltalk.CollectionTest)})},
args: [],
source: "testAsSet\x0a\x09| c set |\x0a\x09c := self collectionWithDuplicates.\x0a\x09set := c asSet.\x0a\x09self assert: set size equals: 5.\x0a\x09c do: [ :each |\x0a\x09\x09self assert: (set includes: each) ]",
messageSends: ["collectionWithDuplicates", "asSet", "assert:equals:", "size", "do:", "assert:", "includes:"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCollect",
category: 'tests',
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
newCollection=[(1), (2), (3), (4)];
self._assertSameContents_as_(_st(self._collection())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._abs();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{newCollection:newCollection},smalltalk.CollectionTest)})},
args: [],
source: "testCollect\x0a\x09| newCollection |\x0a\x09newCollection := #(1 2 3 4).\x0a\x09self\x0a\x09\x09assertSameContents: (self collection collect: [ :each |\x0a\x09\x09\x09each abs ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "collect:", "abs", "collection"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDetect",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__lt((0));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),(-4));
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each).__eq((6));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testDetect",{},smalltalk.CollectionTest)})},
args: [],
source: "testDetect\x0a\x09self assert: (self collection detect: [ :each | each < 0 ]) equals: -4.\x0a\x09self\x0a\x09\x09should: [ self collection detect: [ :each | each = 6 ] ]\x0a\x09\x09raise: Error",
messageSends: ["assert:equals:", "detect:", "<", "collection", "should:raise:", "="],
referencedClasses: ["Error"]
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDo",
category: 'tests',
fn: function (){
var self=this;
var newCollection;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
newCollection=_st($OrderedCollection())._new();
_st(self._collection())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._assertSameContents_as_(self._collection(),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testDo",{newCollection:newCollection},smalltalk.CollectionTest)})},
args: [],
source: "testDo\x0a\x09| newCollection |\x0a\x09newCollection := OrderedCollection new.\x0a\x09self collection do: [ :each |\x0a\x09\x09newCollection add: each ].\x0a\x09self\x0a\x09\x09assertSameContents: self collection\x0a\x09\x09as: newCollection",
messageSends: ["new", "do:", "add:", "collection", "assertSameContents:as:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIsEmpty",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self._collectionClass())._new())._isEmpty());
self._deny_(_st(self._collection())._isEmpty());
return self}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{},smalltalk.CollectionTest)})},
args: [],
source: "testIsEmpty\x0a\x09self assert: self collectionClass new isEmpty.\x0a\x09self deny: self collection isEmpty",
messageSends: ["assert:", "isEmpty", "new", "collectionClass", "deny:", "collection"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSelect",
category: 'tests',
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
newCollection=[(2), (-4)];
self._assertSameContents_as_(_st(self._collection())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._even();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testSelect",{newCollection:newCollection},smalltalk.CollectionTest)})},
args: [],
source: "testSelect\x0a\x09| newCollection |\x0a\x09newCollection := #(2 -4).\x0a\x09self\x0a\x09\x09assertSameContents: (self collection select: [ :each |\x0a\x09\x09\x09each even ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "select:", "even", "collection"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(_st(self._collectionClass())._new())._size(),(0));
self._assert_equals_(_st(self._collection())._size(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{},smalltalk.CollectionTest)})},
args: [],
source: "testSize\x0a\x09self assert: self collectionClass new size equals: 0.\x0a\x09self assert: self collection size equals: 4",
messageSends: ["assert:equals:", "size", "new", "collectionClass", "collection"],
referencedClasses: []
}),
smalltalk.CollectionTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return nil;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.CollectionTest.klass)})},
args: [],
source: "collectionClass\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.CollectionTest.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.CollectionTest.klass)})},
args: [],
source: "isAbstract\x0a\x09^ self collectionClass isNil",
messageSends: ["isNil", "collectionClass"],
referencedClasses: []
}),
smalltalk.CollectionTest.klass);


smalltalk.addClass('IndexableCollectionTest', smalltalk.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._collection())._at_((4)),(-4));
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._collection())._at_((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},smalltalk.IndexableCollectionTest)})},
args: [],
source: "testAt\x0a\x09self assert: (self collection at: 4) equals: -4.\x0a\x09self should: [ self collection at: 5 ] raise: Error",
messageSends: ["assert:equals:", "at:", "collection", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfAbsent",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._collection())._at_ifAbsent_(_st(_st(self._collection())._size()).__plus((1)),(function(){
return smalltalk.withContext(function($ctx2) {
return "none";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"none");
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{},smalltalk.IndexableCollectionTest)})},
args: [],
source: "testAtIfAbsent\x0a\x09self assert: (self collection at: (self collection size + 1) ifAbsent: [ 'none' ]) equals: 'none'",
messageSends: ["assert:equals:", "at:ifAbsent:", "+", "size", "collection"],
referencedClasses: []
}),
smalltalk.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContains",
category: 'tests',
fn: function (){
var self=this;
var collection;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
collection=self._collection();
self._assert_(_st(self._collection())._contains_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st(self._collection())._first());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
self._deny_(_st(self._collection())._contains_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st($Object())._new());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testContains",{collection:collection},smalltalk.IndexableCollectionTest)})},
args: [],
source: "testContains\x0a\x09| collection |\x0a\x09collection := self collection.\x0a\x09\x0a\x09self assert: (self collection contains: [ :each | each = self collection first ]).\x0a\x09self deny: (self collection contains: [ :each | each = Object new ])",
messageSends: ["collection", "assert:", "contains:", "=", "first", "deny:", "new"],
referencedClasses: ["Object"]
}),
smalltalk.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIndexOf",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._collection())._indexOf_((2)),(2));
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._collection())._indexOf_((999));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
self._assert_equals_(_st(self._collection())._indexOf_ifAbsent_((999),(function(){
return smalltalk.withContext(function($ctx2) {
return "sentinel";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"sentinel");
return self}, function($ctx1) {$ctx1.fill(self,"testIndexOf",{},smalltalk.IndexableCollectionTest)})},
args: [],
source: "testIndexOf\x0a\x09self assert: (self collection indexOf: 2) equals: 2.\x0a\x09self should: [ self collection indexOf: 999 ] raise: Error.\x0a\x09self assert: (self collection indexOf: 999 ifAbsent: [ 'sentinel' ]) equals: 'sentinel'",
messageSends: ["assert:equals:", "indexOf:", "collection", "should:raise:", "indexOf:ifAbsent:"],
referencedClasses: ["Error"]
}),
smalltalk.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWithIndexDo",
category: 'tests',
fn: function (){
var self=this;
var collection;
return smalltalk.withContext(function($ctx1) { 
collection=self._collection();
_st(self._collection())._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return self._assert_equals_(_st(collection)._at_(index),each);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testWithIndexDo",{collection:collection},smalltalk.IndexableCollectionTest)})},
args: [],
source: "testWithIndexDo\x0a\x09| collection |\x0a\x09collection := self collection.\x0a\x09\x0a\x09self collection withIndexDo: [ :each :index |\x0a\x09\x09self assert: (collection at: index) equals: each ]",
messageSends: ["collection", "withIndexDo:", "assert:equals:", "at:"],
referencedClasses: []
}),
smalltalk.IndexableCollectionTest);



smalltalk.addClass('HashedCollectionTest', smalltalk.IndexableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["b".__minus_gt((1)),"a".__minus_gt((2)),"c".__minus_gt((3)),"d".__minus_gt((-4))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.HashedCollectionTest)})},
args: [],
source: "collection\x0a\x09^ #{ 'b' -> 1. 'a' -> 2. 'c' -> 3. 'd' -> -4 }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["b".__minus_gt((1)),"a".__minus_gt((2)),"c".__minus_gt((3)),"d".__minus_gt((-4)),"e".__minus_gt((1)),"f".__minus_gt((2)),"g".__minus_gt((10))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},smalltalk.HashedCollectionTest)})},
args: [],
source: "collectionWithDuplicates\x0a\x09^ #{ 'b' -> 1. 'a' -> 2. 'c' -> 3. 'd' -> -4. 'e' -> 1. 'f' -> 2. 'g' -> 10 }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsDictionary",
category: 'tests',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st(self._collectionClass())._new())._asDictionary())._isMemberOf_($Dictionary()));
return self}, function($ctx1) {$ctx1.fill(self,"testAsDictionary",{},smalltalk.HashedCollectionTest)})},
args: [],
source: "testAsDictionary\x0aself assert: ( self collectionClass new asDictionary isMemberOf: Dictionary ).",
messageSends: ["assert:", "isMemberOf:", "asDictionary", "new", "collectionClass"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._collection())._at_("a"),(2));
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._collection())._at_((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},smalltalk.HashedCollectionTest)})},
args: [],
source: "testAt\x0a\x09self assert: (self collection at: 'a') equals: 2.\x0a\x09self should: [ self collection at: 5 ] raise: Error",
messageSends: ["assert:equals:", "at:", "collection", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContains",
category: 'tests',
fn: function (){
var self=this;
var collection;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
collection=self._collection();
self._assert_(_st(self._collection())._contains_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st(_st(self._collection())._values())._first());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
self._deny_(_st(self._collection())._contains_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st($Object())._new());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testContains",{collection:collection},smalltalk.HashedCollectionTest)})},
args: [],
source: "testContains\x0a\x09| collection |\x0a\x09collection := self collection.\x0a\x09\x0a\x09self assert: (self collection contains: [ :each | each = self collection values first ]).\x0a\x09self deny: (self collection contains: [ :each | each = Object new ])",
messageSends: ["collection", "assert:", "contains:", "=", "first", "values", "deny:", "new"],
referencedClasses: ["Object"]
}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFrom",
category: 'tests',
fn: function (){
var self=this;
var associations;
return smalltalk.withContext(function($ctx1) { 
associations=["a".__minus_gt((1)),"b".__minus_gt((2))];
self._assertSameContents_as_(_st(_st(self._class())._collectionClass())._from_(associations),smalltalk.HashedCollection._from_(["a".__minus_gt((1)),"b".__minus_gt((2))]));
return self}, function($ctx1) {$ctx1.fill(self,"testFrom",{associations:associations},smalltalk.HashedCollectionTest)})},
args: [],
source: "testFrom\x0a\x22Accept a collection of associations.\x22\x0a| associations |\x0aassociations := { 'a' -> 1. 'b' -> 2 }.\x0aself assertSameContents: ( self class collectionClass from: associations ) as: #{ 'a' -> 1. 'b' -> 2 }.",
messageSends: ["->", "assertSameContents:as:", "from:", "collectionClass", "class"],
referencedClasses: []
}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIndexOf",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._collection())._indexOf_((2)),"a");
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._collection())._indexOf_((999));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
self._assert_equals_(_st(self._collection())._indexOf_ifAbsent_((999),(function(){
return smalltalk.withContext(function($ctx2) {
return "sentinel";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"sentinel");
return self}, function($ctx1) {$ctx1.fill(self,"testIndexOf",{},smalltalk.HashedCollectionTest)})},
args: [],
source: "testIndexOf\x0a\x09self assert: (self collection indexOf: 2) equals: 'a'.\x0a\x09self should: [ self collection indexOf: 999 ] raise: Error.\x0a\x09self assert: (self collection indexOf: 999 ifAbsent: [ 'sentinel' ]) equals: 'sentinel'",
messageSends: ["assert:equals:", "indexOf:", "collection", "should:raise:", "indexOf:ifAbsent:"],
referencedClasses: ["Error"]
}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNewFromPairs",
category: 'tests',
fn: function (){
var self=this;
var flattenedAssociations;
return smalltalk.withContext(function($ctx1) { 
flattenedAssociations=["a",(1),"b",(2)];
self._assertSameContents_as_(_st(_st(self._class())._collectionClass())._newFromPairs_(flattenedAssociations),smalltalk.HashedCollection._from_(["a".__minus_gt((1)),"b".__minus_gt((2))]));
return self}, function($ctx1) {$ctx1.fill(self,"testNewFromPairs",{flattenedAssociations:flattenedAssociations},smalltalk.HashedCollectionTest)})},
args: [],
source: "testNewFromPairs\x0a\x22Accept an array in which all odd indexes are keys and evens are values.\x22\x0a| flattenedAssociations |\x0aflattenedAssociations := { 'a'. 1. 'b'. 2 }.\x0aself assertSameContents: ( self class collectionClass newFromPairs: flattenedAssociations ) as: #{ 'a' -> 1. 'b' -> 2 }.",
messageSends: ["assertSameContents:as:", "newFromPairs:", "collectionClass", "class", "->"],
referencedClasses: []
}),
smalltalk.HashedCollectionTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$HashedCollection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.HashedCollectionTest.klass)})},
args: [],
source: "collectionClass\x0a\x09^ HashedCollection",
messageSends: [],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HashedCollectionTest.klass);


smalltalk.addClass('DictionaryTest', smalltalk.HashedCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_((1),(1));
_st($2)._at_put_("a",(2));
_st($2)._at_put_(true,(3));
_st($2)._at_put_((4),(-4));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.DictionaryTest)})},
args: [],
source: "collection\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 4 put: -4;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_((1),(1));
_st($2)._at_put_("a",(2));
_st($2)._at_put_(true,(3));
_st($2)._at_put_((4),(-4));
_st($2)._at_put_("b",(1));
_st($2)._at_put_((3),(3));
_st($2)._at_put_(false,(12));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},smalltalk.DictionaryTest)})},
args: [],
source: "collectionWithDuplicates\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 4 put: -4;\x0a\x09\x09at: 'b' put: 1;\x0a\x09\x09at: 3 put: 3;\x0a\x09\x09at: false put: 12;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAccessing",
category: 'tests',
fn: function (){
var self=this;
var d;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
d=_st($Dictionary())._new();
_st(d)._at_put_("hello","world");
self._assert_equals_(_st(d)._at_("hello"),"world");
self._assert_equals_(_st(d)._at_ifAbsent_("hello",(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"world");
self._deny_(_st(_st(d)._at_ifAbsent_("foo",(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))).__eq("world"));
self._assert_(_st(d)._includesKey_("hello"));
self._deny_(_st(d)._includesKey_("foo"));
_st(d)._at_put_((1),(2));
self._assert_equals_(_st(d)._at_((1)),(2));
_st(d)._at_put_((1).__at((3)),(3));
self._assert_equals_(_st(d)._at_((1).__at((3))),(3));
self._assert_(_st(d)._includesKey_((1).__at((3))));
self._deny_(_st(d)._includesKey_((3).__at((1))));
return self}, function($ctx1) {$ctx1.fill(self,"testAccessing",{d:d},smalltalk.DictionaryTest)})},
args: [],
source: "testAccessing\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x0a\x09d at: 'hello' put: 'world'.\x0a\x09self assert: (d at: 'hello') equals: 'world'.\x0a\x09self assert: (d at: 'hello' ifAbsent: [nil]) equals: 'world'.\x0a\x09self deny: (d at: 'foo' ifAbsent: [nil]) = 'world'.\x0a\x0a\x09self assert: (d includesKey: 'hello').\x0a\x09self deny: (d includesKey: 'foo').\x0a\x0a\x09d at: 1 put: 2.\x0a\x09self assert: (d at: 1) equals: 2.\x0a\x0a\x09d at: 1@3 put: 3.\x0a\x09self assert: (d at: 1@3) equals: 3.\x0a\x0a\x09self assert: (d includesKey: 1@3).\x0a\x09self deny: (d includesKey: 3@1)",
messageSends: ["new", "at:put:", "assert:equals:", "at:", "at:ifAbsent:", "deny:", "=", "assert:", "includesKey:", "@"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsHashedCollection",
category: 'tests',
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st(self._collectionClass())._new())._asHashedCollection())._isMemberOf_($HashedCollection()));
return self}, function($ctx1) {$ctx1.fill(self,"testAsHashedCollection",{},smalltalk.DictionaryTest)})},
args: [],
source: "testAsHashedCollection\x0aself assert: ( self collectionClass new asHashedCollection isMemberOf: HashedCollection ).",
messageSends: ["assert:", "isMemberOf:", "asHashedCollection", "new", "collectionClass"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicDictionaries",
category: 'tests',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(smalltalk.HashedCollection._from_(["hello".__minus_gt((1))]))._asDictionary(),_st($Dictionary())._with_("hello".__minus_gt((1))));
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaries",{},smalltalk.DictionaryTest)})},
args: [],
source: "testDynamicDictionaries\x0a\x09self assert: #{'hello' -> 1} asDictionary equals: (Dictionary with: 'hello' -> 1)",
messageSends: ["assert:equals:", "asDictionary", "->", "with:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function (){
var self=this;
var d1,d2;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
self._assert_(_st(_st($Dictionary())._new()).__eq(_st($Dictionary())._new()));
$1=_st($Dictionary())._new();
_st($1)._at_put_((1),(2));
$2=_st($1)._yourself();
d1=$2;
$3=_st($Dictionary())._new();
_st($3)._at_put_((1),(2));
$4=_st($3)._yourself();
d2=$4;
self._assert_(_st(d1).__eq(d2));
$5=_st($Dictionary())._new();
_st($5)._at_put_((1),(3));
$6=_st($5)._yourself();
d2=$6;
self._deny_(_st(d1).__eq(d2));
$7=_st($Dictionary())._new();
_st($7)._at_put_((2),(2));
$8=_st($7)._yourself();
d2=$8;
self._deny_(_st(d1).__eq(d2));
$9=_st($Dictionary())._new();
_st($9)._at_put_((1),(2));
_st($9)._at_put_((3),(4));
$10=_st($9)._yourself();
d2=$10;
self._deny_(_st(d1).__eq(d2));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{d1:d1,d2:d2},smalltalk.DictionaryTest)})},
args: [],
source: "testEquality\x0a\x09| d1 d2 |\x0a\x0a\x09self assert: (Dictionary new = Dictionary new).\x0a\x09\x09\x0a\x09d1 := Dictionary new at: 1 put: 2; yourself.\x0a\x09d2 := Dictionary new at: 1 put: 2; yourself.\x0a\x09self assert: (d1 = d2).\x0a\x0a\x09d2 := Dictionary new at: 1 put: 3; yourself.\x0a\x09self deny: d1 = d2.\x0a\x0a\x09d2 := Dictionary new at: 2 put: 2; yourself.\x0a\x09self deny: d1 = d2.\x0a\x0a\x09d2 := Dictionary new at: 1 put: 2; at: 3 put: 4; yourself.\x0a\x09self deny: d1 = d2.",
messageSends: ["assert:", "=", "new", "at:put:", "yourself", "deny:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfAbsent",
category: 'tests',
fn: function (){
var self=this;
var d,visited;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
visited=false;
d=_st($Dictionary())._new();
_st(d)._at_ifAbsent_("hello",(function(){
return smalltalk.withContext(function($ctx2) {
visited=true;
return visited;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._assert_(visited);
return self}, function($ctx1) {$ctx1.fill(self,"testIfAbsent",{d:d,visited:visited},smalltalk.DictionaryTest)})},
args: [],
source: "testIfAbsent\x0a\x0a\x09| d visited |\x0a\x09visited := false.\x0a\x09d := Dictionary new.\x0a\x0a\x09d at: 'hello' ifAbsent: [ visited := true ].\x0a\x09self assert: visited.",
messageSends: ["new", "at:ifAbsent:", "assert:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfPresent",
category: 'tests',
fn: function (){
var self=this;
var d,visited,absent;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
visited=false;
d=_st($Dictionary())._new();
_st(d)._at_put_("hello","world");
_st(d)._at_ifPresent_("hello",(function(value){
return smalltalk.withContext(function($ctx2) {
visited=value;
return visited;
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
self._assert_equals_(visited,"world");
absent=_st(d)._at_ifPresent_("bye",(function(value){
return smalltalk.withContext(function($ctx2) {
visited=value;
return visited;
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
self._assert_(_st(absent)._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testIfPresent",{d:d,visited:visited,absent:absent},smalltalk.DictionaryTest)})},
args: [],
source: "testIfPresent\x0a\x0a\x09| d visited absent |\x0a\x09visited := false.\x0a\x09d := Dictionary new.\x0a\x09d at: 'hello' put: 'world'.\x0a\x0a\x09d at: 'hello' ifPresent: [ :value | visited := value ].\x0a\x09self assert: visited equals: 'world'.\x0a\x0a\x09absent := d at: 'bye' ifPresent: [ :value | visited := value ].\x0a\x09self assert: absent isNil.",
messageSends: ["new", "at:put:", "at:ifPresent:", "assert:equals:", "assert:", "isNil"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfPresentIfAbsent",
category: 'tests',
fn: function (){
var self=this;
var d,visited;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
visited=false;
d=_st($Dictionary())._new();
_st(d)._at_put_("hello","world");
_st(d)._at_ifPresent_ifAbsent_("hello",(function(value){
return smalltalk.withContext(function($ctx2) {
visited=value;
return visited;
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
visited=true;
return visited;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._assert_equals_(visited,"world");
_st(d)._at_ifPresent_ifAbsent_("buy",(function(value){
return smalltalk.withContext(function($ctx2) {
visited=value;
return visited;
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
visited=true;
return visited;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._assert_(visited);
return self}, function($ctx1) {$ctx1.fill(self,"testIfPresentIfAbsent",{d:d,visited:visited},smalltalk.DictionaryTest)})},
args: [],
source: "testIfPresentIfAbsent\x0a\x0a\x09| d visited |\x0a\x09visited := false.\x0a\x09d := Dictionary new.\x0a\x09d at: 'hello' put: 'world'.\x0a\x0a\x09d at: 'hello' ifPresent: [ :value | visited := value ] ifAbsent: [ visited := true ].\x0a\x09self assert: visited equals: 'world'.\x0a\x0a\x09d at: 'buy' ifPresent: [ :value | visited := value ] ifAbsent: [ visited := true ].\x0a\x09self assert: visited.",
messageSends: ["new", "at:put:", "at:ifPresent:ifAbsent:", "assert:equals:", "assert:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testKeys",
category: 'tests',
fn: function (){
var self=this;
var d;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
d=_st($Dictionary())._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
self._assert_equals_(_st(d)._keys(),[(1), (2), (3)]);
return self}, function($ctx1) {$ctx1.fill(self,"testKeys",{d:d},smalltalk.DictionaryTest)})},
args: [],
source: "testKeys\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x09d at: 1 put: 2.\x0a\x09d at: 2 put: 3.\x0a\x09d at: 3 put: 4.\x0a\x0a\x09self assert: d keys equals: #(1 2 3)",
messageSends: ["new", "at:put:", "assert:equals:", "keys"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPointKey",
category: 'tests',
fn: function (){
var self=this;
var d;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
d=_st($Dictionary())._new();
_st(d)._at_put_((1).__at((1)),"foo");
self._assert_equals_(_st(d)._at_((1).__at((1))),"foo");
_st(d)._at_put_((1).__at((1)),"bar");
self._assert_equals_(_st(d)._at_((1).__at((1))),"bar");
_st(d)._removeKey_((1).__at((1)));
self._assert_equals_(_st(d)._at_ifAbsent_((1).__at((1)),(function(){
return smalltalk.withContext(function($ctx2) {
return "baz";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"baz");
self._deny_(_st(d)._includesKey_((1).__at((1))));
return self}, function($ctx1) {$ctx1.fill(self,"testPointKey",{d:d},smalltalk.DictionaryTest)})},
args: [],
source: "testPointKey\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x09\x0a\x09d at: 1@1 put: 'foo'.\x0a\x09self assert: (d at: 1@1) equals: 'foo'.\x0a\x09d at: 1@1 put: 'bar'.\x0a\x09self assert: (d at: 1@1) equals: 'bar'.\x0a\x09d removeKey: 1@1.\x0a\x09self assert: (d at: 1@1 ifAbsent: [ 'baz' ]) equals: 'baz'.\x0a\x09self deny: (d includesKey: 1@1)",
messageSends: ["new", "at:put:", "@", "assert:equals:", "at:", "removeKey:", "at:ifAbsent:", "deny:", "includesKey:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrintString",
category: 'tests',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Dictionary())._new();
_st($1)._at_put_("firstname","James");
_st($1)._at_put_("lastname","Bond");
$2=_st($1)._printString();
self._assert_equals_($2,"a Dictionary ('firstname' -> 'James' , 'lastname' -> 'Bond')");
return self}, function($ctx1) {$ctx1.fill(self,"testPrintString",{},smalltalk.DictionaryTest)})},
args: [],
source: "testPrintString\x0a\x09self\x0a\x09\x09assert: (Dictionary new\x0a\x09\x09\x09\x09\x09\x09\x09at:'firstname' put: 'James';\x0a\x09\x09\x09\x09\x09\x09\x09at:'lastname' put: 'Bond';\x0a\x09\x09\x09\x09\x09\x09\x09printString)\x0a\x09\x09equals: 'a Dictionary (''firstname'' -> ''James'' , ''lastname'' -> ''Bond'')'",
messageSends: ["assert:equals:", "at:put:", "new", "printString"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveKey",
category: 'tests',
fn: function (){
var self=this;
var d,key;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
d=_st($Dictionary())._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
key=(2);
self._assert_equals_(_st(d)._keys(),[(1), (2), (3)]);
_st(d)._removeKey_(key);
self._assert_equals_(_st(d)._keys(),[(1), (3)]);
self._assert_equals_(_st(d)._values(),[(2), (4)]);
self._deny_(_st(d)._includesKey_((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveKey",{d:d,key:key},smalltalk.DictionaryTest)})},
args: [],
source: "testRemoveKey\x0a\x09| d key |\x0a\x0a\x09d := Dictionary new.\x0a\x09d at: 1 put: 2.\x0a\x09d at: 2 put: 3.\x0a\x09d at: 3 put: 4.\x0a\x0a\x09key := 2.\x0a\x0a\x09self assert: d keys equals: #(1 2 3).\x0a\x0a\x09d removeKey: key.\x0a\x09self assert: d keys equals: #(1 3).\x0a\x09self assert: d values equals: #(2 4).\x0a\x09self deny: (d includesKey: 2)",
messageSends: ["new", "at:put:", "assert:equals:", "keys", "removeKey:", "values", "deny:", "includesKey:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveKeyIfAbsent",
category: 'tests',
fn: function (){
var self=this;
var d,key;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
d=_st($Dictionary())._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
key=(2);
self._assert_equals_(_st(d)._removeKey_(key),(3));
key=(3);
self._assert_equals_(_st(d)._removeKey_ifAbsent_(key,(function(){
return smalltalk.withContext(function($ctx2) {
return (42);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),(4));
key="why";
self._assert_equals_(_st(d)._removeKey_ifAbsent_(key,(function(){
return smalltalk.withContext(function($ctx2) {
return (42);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),(42));
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveKeyIfAbsent",{d:d,key:key},smalltalk.DictionaryTest)})},
args: [],
source: "testRemoveKeyIfAbsent\x0a\x09| d key |\x0a\x0a\x09d := Dictionary new.\x0a\x09d at: 1 put: 2.\x0a\x09d at: 2 put: 3.\x0a\x09d at: 3 put: 4.\x0a\x0a\x09key := 2.\x0a\x09self assert: (d removeKey: key) equals: 3.\x0a\x0a\x09key := 3.\x0a\x09self assert: (d removeKey: key ifAbsent: [42]) equals: 4.\x0a\x0a\x09key := 'why'.\x0a\x09self assert: (d removeKey: key ifAbsent: [42] ) equals: 42.",
messageSends: ["new", "at:put:", "assert:equals:", "removeKey:", "removeKey:ifAbsent:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function (){
var self=this;
var d;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
d=_st($Dictionary())._new();
self._assert_equals_(_st(d)._size(),(0));
_st(d)._at_put_((1),(2));
self._assert_equals_(_st(d)._size(),(1));
_st(d)._at_put_((2),(3));
self._assert_equals_(_st(d)._size(),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{d:d},smalltalk.DictionaryTest)})},
args: [],
source: "testSize\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x09self assert: d size equals: 0.\x0a\x0a\x09d at: 1 put: 2.\x0a\x09self assert: d size equals: 1.\x0a\x0a\x09d at: 2 put: 3.\x0a\x09self assert: d size equals: 2.",
messageSends: ["new", "assert:equals:", "size", "at:put:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValues",
category: 'tests',
fn: function (){
var self=this;
var d;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
d=_st($Dictionary())._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
self._assert_equals_(_st(d)._values(),[(2), (3), (4)]);
return self}, function($ctx1) {$ctx1.fill(self,"testValues",{d:d},smalltalk.DictionaryTest)})},
args: [],
source: "testValues\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x09d at: 1 put: 2.\x0a\x09d at: 2 put: 3.\x0a\x09d at: 3 put: 4.\x0a\x0a\x09self assert: d values equals: #(2 3 4)",
messageSends: ["new", "at:put:", "assert:equals:", "values"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Dictionary();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.DictionaryTest.klass)})},
args: [],
source: "collectionClass\x0a\x09^ Dictionary",
messageSends: [],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest.klass);


smalltalk.addClass('SequenceableCollectionTest', smalltalk.IndexableCollectionTest, [], 'Kernel-Tests');


smalltalk.addClass('ArrayTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfAbsent",
category: 'tests',
fn: function (){
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { 
array=["hello", "world"];
self._assert_equals_(_st(array)._at_((1)),"hello");
self._assert_equals_(_st(array)._at_((2)),"world");
self._assert_equals_(_st(array)._at_ifAbsent_((2),(function(){
return smalltalk.withContext(function($ctx2) {
return "not found";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"world");
self._assert_equals_(_st(array)._at_ifAbsent_((0),(function(){
return smalltalk.withContext(function($ctx2) {
return "not found";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"not found");
self._assert_equals_(_st(array)._at_ifAbsent_((-10),(function(){
return smalltalk.withContext(function($ctx2) {
return "not found";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"not found");
self._assert_equals_(_st(array)._at_ifAbsent_((3),(function(){
return smalltalk.withContext(function($ctx2) {
return "not found";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"not found");
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{array:array},smalltalk.ArrayTest)})},
args: [],
source: "testAtIfAbsent\x0a\x09| array |\x0a\x09array := #('hello' 'world').\x0a\x09self assert: (array at: 1) equals: 'hello'.\x0a\x09self assert: (array at: 2) equals: 'world'.\x0a\x09self assert: (array at: 2 ifAbsent: ['not found']) equals: 'world'.\x0a\x09self assert: (array at: 0 ifAbsent: ['not found']) equals: 'not found'.\x0a\x09self assert: (array at: -10 ifAbsent: ['not found']) equals: 'not found'.\x0a\x09self assert: (array at: 3 ifAbsent: ['not found']) equals: 'not found'.",
messageSends: ["assert:equals:", "at:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFirstN",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st([(1),(2),(3),(4),(5)])._first_((3)),[(1),(2),(3)]);
return self}, function($ctx1) {$ctx1.fill(self,"testFirstN",{},smalltalk.ArrayTest)})},
args: [],
source: "testFirstN\x0a\x09self assert: ({1. 2. 3. 4. 5} first: 3) equals: {1. 2. 3}",
messageSends: ["assert:equals:", "first:"],
referencedClasses: []
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfEmpty",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(""._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return "zork";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"zork");
return self}, function($ctx1) {$ctx1.fill(self,"testIfEmpty",{},smalltalk.ArrayTest)})},
args: [],
source: "testIfEmpty\x0a\x09self assert: ( '' ifEmpty: ['zork'] ) equals: 'zork'",
messageSends: ["assert:equals:", "ifEmpty:"],
referencedClasses: []
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrintString",
category: 'tests',
fn: function (){
var self=this;
var array;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
array=_st($Array())._new();
self._assert_equals_(_st(array)._printString(),"an Array ()");
$1=array;
_st($1)._add_((1));
$2=_st($1)._add_((3));
self._assert_equals_(_st(array)._printString(),"an Array (1 3)");
_st(array)._add_("foo");
self._assert_equals_(_st(array)._printString(),"an Array (1 3 'foo')");
$3=array;
_st($3)._remove_((1));
$4=_st($3)._remove_((3));
self._assert_equals_(_st(array)._printString(),"an Array ('foo')");
_st(array)._addLast_((3));
self._assert_equals_(_st(array)._printString(),"an Array ('foo' 3)");
_st(array)._addLast_((3));
self._assert_equals_(_st(array)._printString(),"an Array ('foo' 3 3)");
return self}, function($ctx1) {$ctx1.fill(self,"testPrintString",{array:array},smalltalk.ArrayTest)})},
args: [],
source: "testPrintString\x0a\x09| array |\x0a\x09array := Array new.\x0a\x09self assert: array printString equals: 'an Array ()'.\x0a\x09array add: 1; add: 3.\x0a\x09self assert: array printString equals: 'an Array (1 3)'.\x0a\x09array add: 'foo'.\x0a\x09self assert: array printString equals: 'an Array (1 3 ''foo'')'.\x0a\x09array remove: 1; remove: 3.\x0a\x09self assert: array printString equals: 'an Array (''foo'')'.\x0a\x09array addLast: 3.\x0a\x09self assert: array printString equals: 'an Array (''foo'' 3)'.\x0a\x09array addLast: 3.\x0a\x09self assert: array printString equals: 'an Array (''foo'' 3 3)'.",
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:", "addLast:"],
referencedClasses: ["Array"]
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveFromTo",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_([(1), (2), (3), (4)]._removeFrom_to_((1),(3)),[(4)]);
self._assert_equals_([(1), (2), (3), (4)]._removeFrom_to_((2),(3)),[(1), (4)]);
self._assert_equals_([(1), (2), (3), (4)]._removeFrom_to_((2),(4)),[(1)]);
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveFromTo",{},smalltalk.ArrayTest)})},
args: [],
source: "testRemoveFromTo\x0a\x09\x0a\x09self assert: (#(1 2 3 4) removeFrom: 1 to: 3) equals: #(4).\x0a\x09self assert: (#(1 2 3 4) removeFrom: 2 to: 3) equals: #(1 4).\x0a\x09self assert: (#(1 2 3 4) removeFrom: 2 to: 4) equals: #(1)",
messageSends: ["assert:equals:", "removeFrom:to:"],
referencedClasses: []
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveIndex",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_([(1), (2), (3), (4)]._removeIndex_((2)),[(1), (3), (4)]);
self._assert_equals_([(1), (2), (3), (4)]._removeIndex_((1)),[(2), (3), (4)]);
self._assert_equals_(["hello"]._removeIndex_((1)),[]);
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveIndex",{},smalltalk.ArrayTest)})},
args: [],
source: "testRemoveIndex\x0a\x09\x0a\x09self assert: (#(1 2 3 4) removeIndex: 2) equals: #(1 3 4).\x0a\x09self assert: (#(1 2 3 4) removeIndex: 1) equals: #(2 3 4).\x0a\x09self assert: (#('hello') removeIndex: 1) equals: #()",
messageSends: ["assert:equals:", "removeIndex:"],
referencedClasses: []
}),
smalltalk.ArrayTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Array();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.ArrayTest.klass)})},
args: [],
source: "collectionClass\x0a\x09^ Array",
messageSends: [],
referencedClasses: ["Array"]
}),
smalltalk.ArrayTest.klass);


smalltalk.addClass('StringTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "hello";
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.StringTest)})},
args: [],
source: "collection\x0a\x09^'hello'",
messageSends: [],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "abbaerte";
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},smalltalk.StringTest)})},
args: [],
source: "collectionWithDuplicates\x0a\x09^ 'abbaerte'",
messageSends: [],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAddRemove",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return "hello"._add_("a");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return "hello"._remove_("h");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testAddRemove",{},smalltalk.StringTest)})},
args: [],
source: "testAddRemove\x0a\x09self should: ['hello' add: 'a'] raise: Error.\x0a\x09self should: ['hello' remove: 'h'] raise: Error",
messageSends: ["should:raise:", "add:", "remove:"],
referencedClasses: ["Error"]
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsArray",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("hello"._asArray(),["h", "e", "l", "l", "o"]);
return self}, function($ctx1) {$ctx1.fill(self,"testAsArray",{},smalltalk.StringTest)})},
args: [],
source: "testAsArray\x0a\x09self assert: 'hello' asArray equals: #('h' 'e' 'l' 'l' 'o').",
messageSends: ["assert:equals:", "asArray"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("hello"._at_((1)),"h");
self._assert_equals_("hello"._at_((5)),"o");
self._assert_equals_("hello"._at_ifAbsent_((6),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},smalltalk.StringTest)})},
args: [],
source: "testAt\x0a\x09self assert: ('hello' at: 1) equals: 'h'.\x0a\x09self assert: ('hello' at: 5) equals: 'o'.\x0a\x09self assert: ('hello' at: 6 ifAbsent: [nil]) equals: nil",
messageSends: ["assert:equals:", "at:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtPut",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return "hello"._at_put_((1),"a");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testAtPut",{},smalltalk.StringTest)})},
args: [],
source: "testAtPut\x0a\x09\x22String instances are read-only\x22\x0a\x09self should: ['hello' at: 1 put: 'a'] raise: Error",
messageSends: ["should:raise:", "at:put:"],
referencedClasses: ["Error"]
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCollect",
category: 'tests',
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
newCollection="hheelllloo";
self._assertSameContents_as_(_st(self._collection())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__comma(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{newCollection:newCollection},smalltalk.StringTest)})},
args: [],
source: "testCollect\x0a\x09| newCollection |\x0a\x09newCollection := 'hheelllloo'.\x0a\x09self\x0a\x09\x09assertSameContents: (self collection collect: [ :each |\x0a\x09\x09\x09each, each ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "collect:", ",", "collection"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCopyWithoutAll",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("*hello* *world*"._copyWithoutAll_("*"),"hello world");
return self}, function($ctx1) {$ctx1.fill(self,"testCopyWithoutAll",{},smalltalk.StringTest)})},
args: [],
source: "testCopyWithoutAll\x0a\x09self\x0a\x09\x09assert: ('*hello* *world*' copyWithoutAll: '*')\x0a\x09\x09equals: 'hello world'",
messageSends: ["assert:equals:", "copyWithoutAll:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDetect",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq("h");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),"h");
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each).__eq((6));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testDetect",{},smalltalk.StringTest)})},
args: [],
source: "testDetect\x0a\x09self assert: (self collection detect: [ :each | each = 'h' ]) equals: 'h'.\x0a\x09self\x0a\x09\x09should: [ self collection detect: [ :each | each = 6 ] ]\x0a\x09\x09raise: Error",
messageSends: ["assert:equals:", "detect:", "=", "collection", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("hello","hello");
self._deny_("hello".__eq("world"));
self._deny_("hello".__eq([]._at_ifAbsent_((1),(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))));
self._assert_equals_("hello","hello"._yourself());
self._assert_equals_("hello"._yourself(),"hello");
self._deny_("".__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{},smalltalk.StringTest)})},
args: [],
source: "testEquality\x0a\x09self assert: 'hello' equals: 'hello'.\x0a\x09self deny: 'hello' = 'world'.\x0a\x09\x0a\x09\x22Test for issue 459\x22\x0a\x09self deny: 'hello' = (#() at: 1 ifAbsent: [ ]).\x0a\x0a\x09self assert: 'hello' equals: 'hello' yourself.\x0a\x09self assert: 'hello' yourself equals: 'hello'.\x0a\x0a\x09\x22test JS falsy value\x22\x0a\x09self deny: '' = 0",
messageSends: ["assert:equals:", "deny:", "=", "at:ifAbsent:", "yourself"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_("hello".__eq_eq("hello"));
self._deny_("hello".__eq_eq("world"));
self._assert_("hello".__eq_eq("hello"._yourself()));
self._assert_(_st("hello"._yourself()).__eq_eq("hello"));
self._deny_("".__eq_eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},smalltalk.StringTest)})},
args: [],
source: "testIdentity\x0a\x09self assert: 'hello' == 'hello'.\x0a\x09self deny: 'hello' == 'world'.\x0a\x0a\x09self assert: 'hello' == 'hello' yourself.\x0a\x09self assert: 'hello' yourself == 'hello'.\x0a\x0a\x09\x22test JS falsy value\x22\x0a\x09self deny: '' == 0",
messageSends: ["assert:", "==", "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIncludesSubString",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_("amber"._includesSubString_("ber"));
self._deny_("amber"._includesSubString_("zork"));
return self}, function($ctx1) {$ctx1.fill(self,"testIncludesSubString",{},smalltalk.StringTest)})},
args: [],
source: "testIncludesSubString\x0a\x09self assert: ('amber' includesSubString: 'ber').\x0a\x09self deny: ('amber' includesSubString: 'zork').",
messageSends: ["assert:", "includesSubString:", "deny:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIndexOf",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._collection())._indexOf_("e"),(2));
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._collection())._indexOf_((999));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
self._assert_equals_(_st(self._collection())._indexOf_ifAbsent_((999),(function(){
return smalltalk.withContext(function($ctx2) {
return "sentinel";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"sentinel");
return self}, function($ctx1) {$ctx1.fill(self,"testIndexOf",{},smalltalk.StringTest)})},
args: [],
source: "testIndexOf\x0a\x09self assert: (self collection indexOf: 'e') equals: 2.\x0a\x09self should: [ self collection indexOf: 999 ] raise: Error.\x0a\x09self assert: (self collection indexOf: 999 ifAbsent: [ 'sentinel' ]) equals: 'sentinel'",
messageSends: ["assert:equals:", "indexOf:", "collection", "should:raise:", "indexOf:ifAbsent:"],
referencedClasses: ["Error"]
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testJoin",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(","._join_(["hello", "world"]),"hello,world");
return self}, function($ctx1) {$ctx1.fill(self,"testJoin",{},smalltalk.StringTest)})},
args: [],
source: "testJoin\x0a\x09self assert: (',' join: #('hello' 'world')) equals: 'hello,world'",
messageSends: ["assert:equals:", "join:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSelect",
category: 'tests',
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
newCollection="o";
self._assertSameContents_as_(_st(self._collection())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq("o");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testSelect",{newCollection:newCollection},smalltalk.StringTest)})},
args: [],
source: "testSelect\x0a\x09| newCollection |\x0a\x09newCollection := 'o'.\x0a\x09self\x0a\x09\x09assertSameContents: (self collection select: [ :each |\x0a\x09\x09\x09each = 'o' ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "select:", "=", "collection"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("smalltalk"._size(),(9));
self._assert_equals_(""._size(),(0));
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{},smalltalk.StringTest)})},
args: [],
source: "testSize\x0a\x09self assert: 'smalltalk' size equals: 9.\x0a\x09self assert: '' size equals: 0",
messageSends: ["assert:equals:", "size"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testStreamContents",
category: 'tests',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._assert_equals_(_st($String())._streamContents_((function(aStream){
return smalltalk.withContext(function($ctx2) {
$1=aStream;
_st($1)._nextPutAll_("hello");
_st($1)._space();
$2=_st($1)._nextPutAll_("world");
return $2;
}, function($ctx2) {$ctx2.fillBlock({aStream:aStream},$ctx1)})})),"hello world");
return self}, function($ctx1) {$ctx1.fill(self,"testStreamContents",{},smalltalk.StringTest)})},
args: [],
source: "testStreamContents\x0a\x09self\x0a\x09\x09assert: (String streamContents: [ :aStream |\x0a\x09\x09\x09aStream\x0a\x09\x09\x09\x09nextPutAll: 'hello'; space;\x0a\x09\x09\x09\x09nextPutAll: 'world' ])\x0a\x09\x09equals: 'hello world'",
messageSends: ["assert:equals:", "streamContents:", "nextPutAll:", "space"],
referencedClasses: ["String"]
}),
smalltalk.StringTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$String();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.StringTest.klass)})},
args: [],
source: "collectionClass\x0a\x09^ String",
messageSends: [],
referencedClasses: ["String"]
}),
smalltalk.StringTest.klass);


smalltalk.addClass('ConsoleTranscriptTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testShow",
category: 'tests',
fn: function (){
var self=this;
var originalTranscript;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $ConsoleTranscript(){return smalltalk.ConsoleTranscript||(typeof ConsoleTranscript=="undefined"?nil:ConsoleTranscript)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
originalTranscript=_st($Transcript())._current();
_st($Transcript())._register_(_st($ConsoleTranscript())._new());
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($Transcript())._show_("Hello console!");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($Transcript())._show_(console);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
_st($Transcript())._register_(originalTranscript);
return self}, function($ctx1) {$ctx1.fill(self,"testShow",{originalTranscript:originalTranscript},smalltalk.ConsoleTranscriptTest)})},
args: [],
source: "testShow\x0a| originalTranscript |\x0aoriginalTranscript := Transcript current.\x0aTranscript register: ConsoleTranscript new.\x0a\x0aself shouldnt: [ Transcript show: 'Hello console!' ] raise: Error.\x0aself shouldnt: [ Transcript show: console ] raise: Error.\x0a\x0aTranscript register: originalTranscript.",
messageSends: ["current", "register:", "new", "shouldnt:raise:", "show:"],
referencedClasses: ["Transcript", "ConsoleTranscript", "Error"]
}),
smalltalk.ConsoleTranscriptTest);



smalltalk.addClass('JSObjectProxyTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "jsObject",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: '', 'e': null, 'f': undefined};
return self}, function($ctx1) {$ctx1.fill(self,"jsObject",{},smalltalk.JSObjectProxyTest)})},
args: [],
source: "jsObject\x0a\x09<return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: '', 'e': null, 'f': undefined}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfAbsent",
category: 'tests',
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { 
testObject=self._jsObject();
self._assert_equals_(_st(testObject)._at_ifAbsent_("abc",(function(){
return smalltalk.withContext(function($ctx2) {
return "Property does not exist";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"Property does not exist");
self._assert_equals_(_st(testObject)._at_ifAbsent_("e",(function(){
return smalltalk.withContext(function($ctx2) {
return "Property does not exist";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),nil);
self._assert_equals_(_st(testObject)._at_ifAbsent_("a",(function(){
return smalltalk.withContext(function($ctx2) {
return "Property does not exist";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),(1));
self._assert_equals_(_st(testObject)._at_ifAbsent_("f",(function(){
return smalltalk.withContext(function($ctx2) {
return "Property does not exist";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{testObject:testObject},smalltalk.JSObjectProxyTest)})},
args: [],
source: "testAtIfAbsent\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09self assert: (testObject at: 'abc' ifAbsent: ['Property does not exist']) equals: 'Property does not exist'.\x0a\x09self assert: (testObject at: 'e' ifAbsent: ['Property does not exist']) equals: nil.\x0a\x09self assert: (testObject at: 'a' ifAbsent: ['Property does not exist']) equals: 1.\x0a\x09self assert: (testObject at: 'f' ifAbsent: ['Property does not exist']) equals: nil.",
messageSends: ["jsObject", "assert:equals:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfPresent",
category: 'tests',
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { 
testObject=self._jsObject();
self._assert_equals_(_st(testObject)._at_ifPresent_("abc",(function(x){
return smalltalk.withContext(function($ctx2) {
return "hello ".__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})),nil);
self._assert_equals_(_st(testObject)._at_ifPresent_("e",(function(x){
return smalltalk.withContext(function($ctx2) {
return "hello ".__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})),"hello nil");
self._assert_equals_(_st(testObject)._at_ifPresent_("a",(function(x){
return smalltalk.withContext(function($ctx2) {
return "hello ".__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})),"hello 1");
self._assert_equals_(_st(testObject)._at_ifPresent_("f",(function(x){
return smalltalk.withContext(function($ctx2) {
return "hello ".__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})),"hello nil");
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfPresent",{testObject:testObject},smalltalk.JSObjectProxyTest)})},
args: [],
source: "testAtIfPresent\x0a\x09| testObject |\x0a\x09\x0a\x09testObject := self jsObject.\x0a\x09\x0a\x09self assert: (testObject at: 'abc' ifPresent: [ :x | 'hello ',x asString ]) equals: nil.\x0a\x09self assert: (testObject at: 'e' ifPresent: [:x | 'hello ',x asString ]) equals: 'hello nil'.\x0a\x09self assert: (testObject at: 'a' ifPresent: [:x | 'hello ',x asString ]) equals: 'hello 1'.\x0a\x09self assert: (testObject at: 'f' ifPresent: [:x | 'hello ',x asString ]) equals: 'hello nil'.",
messageSends: ["jsObject", "assert:equals:", "at:ifPresent:", ",", "asString"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfPresentIfAbsent",
category: 'tests',
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { 
testObject=self._jsObject();
self._assert_equals_(_st(testObject)._at_ifPresent_ifAbsent_("abc",(function(x){
return smalltalk.withContext(function($ctx2) {
return "hello ".__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return "not present";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"not present");
self._assert_equals_(_st(testObject)._at_ifPresent_ifAbsent_("e",(function(x){
return smalltalk.withContext(function($ctx2) {
return "hello ".__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return "not present";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"hello nil");
self._assert_equals_(_st(testObject)._at_ifPresent_ifAbsent_("a",(function(x){
return smalltalk.withContext(function($ctx2) {
return "hello ".__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return "not present";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"hello 1");
self._assert_equals_(_st(testObject)._at_ifPresent_ifAbsent_("f",(function(x){
return smalltalk.withContext(function($ctx2) {
return "hello ".__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return "not present";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"hello nil");
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfPresentIfAbsent",{testObject:testObject},smalltalk.JSObjectProxyTest)})},
args: [],
source: "testAtIfPresentIfAbsent\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09self assert: (testObject at: 'abc' ifPresent: [:x|'hello ',x asString] ifAbsent: ['not present']) equals: 'not present'.\x0a\x09self assert: (testObject at: 'e' ifPresent: [:x|'hello ',x asString] ifAbsent: ['not present']) equals: 'hello nil'.\x0a\x09self assert: (testObject at: 'a' ifPresent: [:x|'hello ',x asString] ifAbsent: ['not present']) equals: 'hello 1'.\x0a\x09self assert: (testObject at: 'f' ifPresent: [:x|'hello ',x asString] ifAbsent: ['not present']) equals: 'hello nil'.",
messageSends: ["jsObject", "assert:equals:", "at:ifPresent:ifAbsent:", ",", "asString"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDNU",
category: 'tests',
fn: function (){
var self=this;
function $MessageNotUnderstood(){return smalltalk.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._jsObject())._foo();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
return self}, function($ctx1) {$ctx1.fill(self,"testDNU",{},smalltalk.JSObjectProxyTest)})},
args: [],
source: "testDNU\x0a\x09self should: [self jsObject foo] raise: MessageNotUnderstood",
messageSends: ["should:raise:", "foo", "jsObject"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSend",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._jsObject())._a(),(1));
self._assert_equals_(_st(self._jsObject())._b(),(2));
self._assert_equals_(_st(self._jsObject())._c_((3)),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSend",{},smalltalk.JSObjectProxyTest)})},
args: [],
source: "testMessageSend\x0a\x0a\x09self assert: self jsObject a equals: 1.\x0a\x09self assert: self jsObject b equals: 2.\x0a\x09self assert: (self jsObject c: 3) equals: 3",
messageSends: ["assert:equals:", "a", "jsObject", "b", "c:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMethodWithArguments",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._jsObject())._c_((1)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testMethodWithArguments",{},smalltalk.JSObjectProxyTest)})},
args: [],
source: "testMethodWithArguments\x0a\x09self assert: (self jsObject c: 1) equals: 1",
messageSends: ["assert:equals:", "c:", "jsObject"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrinting",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._jsObject())._printString(),"[object Object]");
return self}, function($ctx1) {$ctx1.fill(self,"testPrinting",{},smalltalk.JSObjectProxyTest)})},
args: [],
source: "testPrinting\x0a\x09self assert: self jsObject printString equals: '[object Object]'",
messageSends: ["assert:equals:", "printString", "jsObject"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPropertyThatReturnsEmptyString",
category: 'tests',
fn: function (){
var self=this;
var object;
return smalltalk.withContext(function($ctx1) { 
object=self._jsObject();
self._assert_equals_(_st(object)._d(),"");
_st(object)._d_("hello");
self._assert_equals_(_st(object)._d(),"hello");
return self}, function($ctx1) {$ctx1.fill(self,"testPropertyThatReturnsEmptyString",{object:object},smalltalk.JSObjectProxyTest)})},
args: [],
source: "testPropertyThatReturnsEmptyString\x0a\x09| object |\x0a\x0a\x09object := self jsObject.\x0a\x09self assert: object d equals: ''.\x0a\x0a\x09object d: 'hello'.\x0a\x09self assert: object d equals: 'hello'",
messageSends: ["jsObject", "assert:equals:", "d", "d:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPropertyThatReturnsUndefined",
category: 'tests',
fn: function (){
var self=this;
var object;
function $MessageNotUnderstood(){return smalltalk.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
object=self._jsObject();
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(object)._e();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._assert_(_st(_st(object)._e())._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testPropertyThatReturnsUndefined",{object:object},smalltalk.JSObjectProxyTest)})},
args: [],
source: "testPropertyThatReturnsUndefined\x0a\x09| object |\x0a\x0a\x09object := self jsObject.\x0a\x09self shouldnt: [ object e ] raise: MessageNotUnderstood.\x0a\x09self assert: object e isNil",
messageSends: ["jsObject", "shouldnt:raise:", "e", "assert:", "isNil"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValue",
category: 'tests',
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { 
testObject=self._jsObject();
self._assert_equals_(_st(_st(testObject)._value())._printString(),"[object Object]");
_st(testObject)._at_put_("value","aValue");
self._assert_equals_(_st(testObject)._value(),"aValue");
return self}, function($ctx1) {$ctx1.fill(self,"testValue",{testObject:testObject},smalltalk.JSObjectProxyTest)})},
args: [],
source: "testValue\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09self assert: testObject value printString equals: '[object Object]'.\x0a\x09testObject at: 'value' put: 'aValue'.\x0a\x09self assert: testObject value equals: 'aValue'",
messageSends: ["jsObject", "assert:equals:", "printString", "value", "at:put:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testYourself",
category: 'tests',
fn: function (){
var self=this;
var object;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._jsObject();
_st($1)._d_("test");
$2=_st($1)._yourself();
object=$2;
self._assert_equals_(_st(object)._d(),"test");
return self}, function($ctx1) {$ctx1.fill(self,"testYourself",{object:object},smalltalk.JSObjectProxyTest)})},
args: [],
source: "testYourself\x0a\x09| object |\x0a\x09object := self jsObject\x0a\x09\x09d: 'test';\x0a\x09\x09yourself.\x0a\x0a\x09self assert: object d equals: 'test'",
messageSends: ["d:", "jsObject", "yourself", "assert:equals:", "d"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);



smalltalk.addClass('JavaScriptExceptionTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testCatchingException",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._throwException();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(error){
return smalltalk.withContext(function($ctx2) {
return self._assert_(_st(_st(error)._exception()).__eq("test"));
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testCatchingException",{},smalltalk.JavaScriptExceptionTest)})},
args: [],
source: "testCatchingException\x0a\x09[ self throwException ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :error |\x0a\x09\x09\x09self assert: error exception = 'test' ]",
messageSends: ["on:do:", "assert:", "=", "exception", "throwException"],
referencedClasses: ["Error"]
}),
smalltalk.JavaScriptExceptionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRaisingException",
category: 'tests',
fn: function (){
var self=this;
function $JavaScriptException(){return smalltalk.JavaScriptException||(typeof JavaScriptException=="undefined"?nil:JavaScriptException)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return self._throwException();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$JavaScriptException());
return self}, function($ctx1) {$ctx1.fill(self,"testRaisingException",{},smalltalk.JavaScriptExceptionTest)})},
args: [],
source: "testRaisingException\x0a\x09self should: [ self throwException ] raise: JavaScriptException",
messageSends: ["should:raise:", "throwException"],
referencedClasses: ["JavaScriptException"]
}),
smalltalk.JavaScriptExceptionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "throwException",
category: 'helpers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
throw 'test';
return self}, function($ctx1) {$ctx1.fill(self,"throwException",{},smalltalk.JavaScriptExceptionTest)})},
args: [],
source: "throwException\x0a\x09<throw 'test'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JavaScriptExceptionTest);



smalltalk.addClass('MessageSendTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testValue",
category: 'tests',
fn: function (){
var self=this;
var messageSend;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
function $MessageSend(){return smalltalk.MessageSend||(typeof MessageSend=="undefined"?nil:MessageSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MessageSend())._new();
_st($1)._receiver_(_st($Object())._new());
_st($1)._selector_("asString");
$2=_st($1)._yourself();
messageSend=$2;
self._assert_equals_(_st(messageSend)._value(),"an Object");
return self}, function($ctx1) {$ctx1.fill(self,"testValue",{messageSend:messageSend},smalltalk.MessageSendTest)})},
args: [],
source: "testValue\x0a\x09| messageSend |\x0a\x09\x0a\x09messageSend := MessageSend new\x0a\x09\x09receiver: Object new;\x0a\x09\x09selector: #asString;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09self assert: messageSend value equals: 'an Object'",
messageSends: ["receiver:", "new", "selector:", "yourself", "assert:equals:", "value"],
referencedClasses: ["Object", "MessageSend"]
}),
smalltalk.MessageSendTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValueWithArguments",
category: 'tests',
fn: function (){
var self=this;
var messageSend;
function $MessageSend(){return smalltalk.MessageSend||(typeof MessageSend=="undefined"?nil:MessageSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MessageSend())._new();
_st($1)._receiver_((2));
_st($1)._selector_("+");
$2=_st($1)._yourself();
messageSend=$2;
self._assert_equals_(_st(messageSend)._value_((3)),(5));
self._assert_equals_(_st(messageSend)._valueWithPossibleArguments_([(4)]),(6));
return self}, function($ctx1) {$ctx1.fill(self,"testValueWithArguments",{messageSend:messageSend},smalltalk.MessageSendTest)})},
args: [],
source: "testValueWithArguments\x0a\x09| messageSend |\x0a\x09\x0a\x09messageSend := MessageSend new\x0a\x09\x09receiver: 2;\x0a\x09\x09selector: '+';\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09self assert: (messageSend value: 3) equals: 5.\x0a\x09\x0a\x09self assert: (messageSend valueWithPossibleArguments: #(4)) equals: 6",
messageSends: ["receiver:", "new", "selector:", "yourself", "assert:equals:", "value:", "valueWithPossibleArguments:"],
referencedClasses: ["MessageSend"]
}),
smalltalk.MessageSendTest);



smalltalk.addClass('NumberTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAbs",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((4)._abs(),(4));
self._assert_equals_((-4)._abs(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testAbs",{},smalltalk.NumberTest)})},
args: [],
source: "testAbs\x0a\x09self assert: 4 abs equals: 4.\x0a\x09self assert: -4 abs equals: 4",
messageSends: ["assert:equals:", "abs"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testArithmetic",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((1.5).__plus((1)),(2.5));
self._assert_equals_((2).__minus((1)),(1));
self._assert_equals_((-2).__minus((1)),(-3));
self._assert_equals_((12).__slash((2)),(6));
self._assert_equals_((3).__star((4)),(12));
self._assert_equals_(_st((1).__plus((2))).__star((3)),(9));
self._assert_equals_((1).__plus((2).__star((3))),(7));
return self}, function($ctx1) {$ctx1.fill(self,"testArithmetic",{},smalltalk.NumberTest)})},
args: [],
source: "testArithmetic\x0a\x09\x0a\x09\x22We rely on JS here, so we won't test complex behavior, just check if\x0a\x09message sends are corrects\x22\x0a\x0a\x09self assert: 1.5 + 1 equals: 2.5.\x0a\x09self assert: 2 - 1 equals: 1.\x0a\x09self assert: -2 - 1 equals: -3.\x0a\x09self assert: 12 / 2 equals: 6.\x0a\x09self assert: 3 * 4 equals: 12.\x0a\x0a\x09\x22Simple parenthesis and execution order\x22\x0a\x09self assert: 1 + 2 * 3 equals: 9.\x0a\x09self assert: 1 + (2 * 3) equals: 7",
messageSends: ["assert:equals:", "+", "-", "/", "*"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testComparison",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_((3).__gt((2)));
self._assert_((2).__lt((3)));
self._deny_((3).__lt((2)));
self._deny_((2).__gt((3)));
self._assert_((3).__gt_eq((3)));
self._assert_((3.1).__gt_eq((3)));
self._assert_((3).__lt_eq((3)));
self._assert_((3).__lt_eq((3.1)));
return self}, function($ctx1) {$ctx1.fill(self,"testComparison",{},smalltalk.NumberTest)})},
args: [],
source: "testComparison\x0a\x0a\x09self assert: 3 > 2.\x0a\x09self assert: 2 < 3.\x0a\x09\x0a\x09self deny: 3 < 2.\x0a\x09self deny: 2 > 3.\x0a\x0a\x09self assert: 3 >= 3.\x0a\x09self assert: 3.1 >= 3.\x0a\x09self assert: 3 <= 3.\x0a\x09self assert: 3 <= 3.1",
messageSends: ["assert:", ">", "<", "deny:", ">=", "<="],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCopying",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st((1)._copy()).__eq_eq((1)));
self._assert_(_st((1)._deepCopy()).__eq_eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testCopying",{},smalltalk.NumberTest)})},
args: [],
source: "testCopying\x0a\x09self assert: 1 copy == 1.\x0a\x09self assert: 1 deepCopy == 1",
messageSends: ["assert:", "==", "copy", "deepCopy"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_((1).__eq((1)));
self._assert_((0).__eq((0)));
self._deny_((1).__eq((0)));
self._assert_(_st((1)._yourself()).__eq((1)));
self._assert_((1).__eq((1)._yourself()));
self._assert_(_st((1)._yourself()).__eq((1)._yourself()));
self._deny_((0).__eq(false));
self._deny_(false.__eq((0)));
self._deny_("".__eq((0)));
self._deny_((0).__eq(""));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{},smalltalk.NumberTest)})},
args: [],
source: "testEquality\x0a\x09self assert: (1 = 1).\x0a\x09self assert: (0 = 0).\x0a\x09self deny: (1 = 0).\x0a\x0a\x09self assert: (1 yourself = 1).\x0a\x09self assert: (1 = 1 yourself).\x0a\x09self assert: (1 yourself = 1 yourself).\x0a\x09\x0a\x09self deny: 0 = false.\x0a\x09self deny: false = 0.\x0a\x09self deny: '' = 0.\x0a\x09self deny: 0 = ''",
messageSends: ["assert:", "=", "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHexNumbers",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((9),(9));
self._assert_equals_((10)._truncated(),(10));
self._assert_equals_((11)._truncated(),(11));
self._assert_equals_((12)._truncated(),(12));
self._assert_equals_((13)._truncated(),(13));
self._assert_equals_((14)._truncated(),(14));
self._assert_equals_((15)._truncated(),(15));
return self}, function($ctx1) {$ctx1.fill(self,"testHexNumbers",{},smalltalk.NumberTest)})},
args: [],
source: "testHexNumbers\x0a\x0a\x09self assert: 16r9 equals: 9.\x0a\x09self assert: 16rA truncated equals: 10.\x0a\x09self assert: 16rB truncated equals: 11.\x0a\x09self assert: 16rC truncated equals: 12.\x0a\x09self assert: 16rD truncated equals: 13.\x0a\x09self assert: 16rE truncated equals: 14.\x0a\x09self assert: 16rF truncated equals: 15",
messageSends: ["assert:equals:", "truncated"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_((1).__eq_eq((1)));
self._assert_((0).__eq_eq((0)));
self._deny_((1).__eq_eq((0)));
self._assert_(_st((1)._yourself()).__eq_eq((1)));
self._assert_((1).__eq_eq((1)._yourself()));
self._assert_(_st((1)._yourself()).__eq_eq((1)._yourself()));
self._deny_((1).__eq_eq((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},smalltalk.NumberTest)})},
args: [],
source: "testIdentity\x0a\x09self assert: 1 == 1.\x0a\x09self assert: 0 == 0.\x0a\x09self deny: 1 == 0.\x0a\x0a\x09self assert: 1 yourself == 1.\x0a\x09self assert: 1 == 1 yourself.\x0a\x09self assert: 1 yourself == 1 yourself.\x0a\x09\x0a\x09self deny: 1 == 2",
messageSends: ["assert:", "==", "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInvalidHexNumbers",
category: 'tests',
fn: function (){
var self=this;
function $MessageNotUnderstood(){return smalltalk.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rG();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rg();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rH();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rh();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rI();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._ri();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rJ();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rj();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rK();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rk();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rL();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rl();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rM();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rm();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rN();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rn();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rO();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._ro();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rP();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rp();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rQ();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rq();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rR();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rr();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rS();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rs();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rT();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rU();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._ru();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rV();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rv();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rW();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rw();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rX();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rx();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rY();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._ry();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rZ();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rz();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (11259375)._Z();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
return self}, function($ctx1) {$ctx1.fill(self,"testInvalidHexNumbers",{},smalltalk.NumberTest)})},
args: [],
source: "testInvalidHexNumbers\x0a\x0a\x09self should: [16rG] raise: MessageNotUnderstood.\x0a\x09self should: [16rg] raise: MessageNotUnderstood.\x0a\x09self should: [16rH] raise: MessageNotUnderstood.\x0a\x09self should: [16rh] raise: MessageNotUnderstood.\x0a\x09self should: [16rI] raise: MessageNotUnderstood.\x0a\x09self should: [16ri] raise: MessageNotUnderstood.\x0a\x09self should: [16rJ] raise: MessageNotUnderstood.\x0a\x09self should: [16rj] raise: MessageNotUnderstood.\x0a\x09self should: [16rK] raise: MessageNotUnderstood.\x0a\x09self should: [16rk] raise: MessageNotUnderstood.\x0a\x09self should: [16rL] raise: MessageNotUnderstood.\x0a\x09self should: [16rl] raise: MessageNotUnderstood.\x0a\x09self should: [16rM] raise: MessageNotUnderstood.\x0a\x09self should: [16rm] raise: MessageNotUnderstood.\x0a\x09self should: [16rN] raise: MessageNotUnderstood.\x0a\x09self should: [16rn] raise: MessageNotUnderstood.\x0a\x09self should: [16rO] raise: MessageNotUnderstood.\x0a\x09self should: [16ro] raise: MessageNotUnderstood.\x0a\x09self should: [16rP] raise: MessageNotUnderstood.\x0a\x09self should: [16rp] raise: MessageNotUnderstood.\x0a\x09self should: [16rQ] raise: MessageNotUnderstood.\x0a\x09self should: [16rq] raise: MessageNotUnderstood.\x0a\x09self should: [16rR] raise: MessageNotUnderstood.\x0a\x09self should: [16rr] raise: MessageNotUnderstood.\x0a\x09self should: [16rS] raise: MessageNotUnderstood.\x0a\x09self should: [16rs] raise: MessageNotUnderstood.\x0a\x09self should: [16rT] raise: MessageNotUnderstood.\x0a\x09self should: [16rt] raise: MessageNotUnderstood.\x0a\x09self should: [16rU] raise: MessageNotUnderstood.\x0a\x09self should: [16ru] raise: MessageNotUnderstood.\x0a\x09self should: [16rV] raise: MessageNotUnderstood.\x0a\x09self should: [16rv] raise: MessageNotUnderstood.\x0a\x09self should: [16rW] raise: MessageNotUnderstood.\x0a\x09self should: [16rw] raise: MessageNotUnderstood.\x0a\x09self should: [16rX] raise: MessageNotUnderstood.\x0a\x09self should: [16rx] raise: MessageNotUnderstood.\x0a\x09self should: [16rY] raise: MessageNotUnderstood.\x0a\x09self should: [16ry] raise: MessageNotUnderstood.\x0a\x09self should: [16rZ] raise: MessageNotUnderstood.\x0a\x09self should: [16rz] raise: MessageNotUnderstood.\x0a\x09self should: [16rABcdEfZ] raise: MessageNotUnderstood.",
messageSends: ["should:raise:", "rG", "rg", "rH", "rh", "rI", "ri", "rJ", "rj", "rK", "rk", "rL", "rl", "rM", "rm", "rN", "rn", "rO", "ro", "rP", "rp", "rQ", "rq", "rR", "rr", "rS", "rs", "rT", "rt", "rU", "ru", "rV", "rv", "rW", "rw", "rX", "rx", "rY", "ry", "rZ", "rz", "Z"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMinMax",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((2)._max_((5)),(5));
self._assert_equals_((2)._min_((5)),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testMinMax",{},smalltalk.NumberTest)})},
args: [],
source: "testMinMax\x0a\x09\x0a\x09self assert: (2 max: 5) equals: 5.\x0a\x09self assert: (2 min: 5) equals: 2",
messageSends: ["assert:equals:", "max:", "min:"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNegated",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((3)._negated(),(-3));
self._assert_equals_((-3)._negated(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testNegated",{},smalltalk.NumberTest)})},
args: [],
source: "testNegated\x0a\x09self assert: 3 negated equals: -3.\x0a\x09self assert: -3 negated equals: 3",
messageSends: ["assert:equals:", "negated"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrintShowingDecimalPlaces",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((23)._printShowingDecimalPlaces_((2)),"23.00");
self._assert_equals_((23.5698)._printShowingDecimalPlaces_((2)),"23.57");
self._assert_equals_(_st((234.567)._negated())._printShowingDecimalPlaces_((5)),"-234.56700");
self._assert_equals_((23.4567)._printShowingDecimalPlaces_((0)),"23");
self._assert_equals_((23.5567)._printShowingDecimalPlaces_((0)),"24");
self._assert_equals_(_st((23.4567)._negated())._printShowingDecimalPlaces_((0)),"-23");
self._assert_equals_(_st((23.5567)._negated())._printShowingDecimalPlaces_((0)),"-24");
self._assert_equals_((100000000)._printShowingDecimalPlaces_((1)),"100000000.0");
self._assert_equals_((0.98)._printShowingDecimalPlaces_((5)),"0.98000");
self._assert_equals_(_st((0.98)._negated())._printShowingDecimalPlaces_((2)),"-0.98");
self._assert_equals_((2.567)._printShowingDecimalPlaces_((2)),"2.57");
self._assert_equals_((-2.567)._printShowingDecimalPlaces_((2)),"-2.57");
self._assert_equals_((0)._printShowingDecimalPlaces_((2)),"0.00");
return self}, function($ctx1) {$ctx1.fill(self,"testPrintShowingDecimalPlaces",{},smalltalk.NumberTest)})},
args: [],
source: "testPrintShowingDecimalPlaces\x0a\x09self assert: (23 printShowingDecimalPlaces: 2) equals: '23.00'.\x0a\x09self assert: (23.5698 printShowingDecimalPlaces: 2) equals: '23.57'.\x0a\x09self assert: (234.567 negated printShowingDecimalPlaces: 5) equals: '-234.56700'.\x0a\x09self assert: (23.4567 printShowingDecimalPlaces: 0) equals: '23'.\x0a\x09self assert: (23.5567 printShowingDecimalPlaces: 0) equals: '24'.\x0a\x09self assert: (23.4567 negated printShowingDecimalPlaces: 0) equals: '-23'.\x0a\x09self assert: (23.5567 negated printShowingDecimalPlaces: 0) equals: '-24'.\x0a\x09self assert: (100000000 printShowingDecimalPlaces: 1) equals: '100000000.0'.\x0a\x09self assert: (0.98 printShowingDecimalPlaces: 5) equals: '0.98000'.\x0a\x09self assert: (0.98 negated printShowingDecimalPlaces: 2) equals: '-0.98'.\x0a\x09self assert: (2.567 printShowingDecimalPlaces: 2) equals: '2.57'.\x0a\x09self assert: (-2.567 printShowingDecimalPlaces: 2) equals: '-2.57'.\x0a\x09self assert: (0 printShowingDecimalPlaces: 2) equals: '0.00'.",
messageSends: ["assert:equals:", "printShowingDecimalPlaces:", "negated"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRounded",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((3)._rounded(),(3));
self._assert_equals_((3.212)._rounded(),(3));
self._assert_equals_((3.51)._rounded(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testRounded",{},smalltalk.NumberTest)})},
args: [],
source: "testRounded\x0a\x09\x0a\x09self assert: 3 rounded equals: 3.\x0a\x09self assert: 3.212 rounded equals: 3.\x0a\x09self assert: 3.51 rounded equals: 4",
messageSends: ["assert:equals:", "rounded"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSqrt",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((4)._sqrt(),(2));
self._assert_equals_((16)._sqrt(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testSqrt",{},smalltalk.NumberTest)})},
args: [],
source: "testSqrt\x0a\x09\x0a\x09self assert: 4 sqrt equals: 2.\x0a\x09self assert: 16 sqrt equals: 4",
messageSends: ["assert:equals:", "sqrt"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSquared",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((4)._squared(),(16));
return self}, function($ctx1) {$ctx1.fill(self,"testSquared",{},smalltalk.NumberTest)})},
args: [],
source: "testSquared\x0a\x09\x0a\x09self assert: 4 squared equals: 16",
messageSends: ["assert:equals:", "squared"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTimesRepeat",
category: 'tests',
fn: function (){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { 
i=(0);
(0)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._assert_equals_(i,(0));
(5)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._assert_equals_(i,(5));
return self}, function($ctx1) {$ctx1.fill(self,"testTimesRepeat",{i:i},smalltalk.NumberTest)})},
args: [],
source: "testTimesRepeat\x0a\x09| i |\x0a\x0a\x09i := 0.\x0a\x090 timesRepeat: [i := i + 1].\x0a\x09self assert: i equals: 0.\x0a\x0a\x095 timesRepeat: [i := i + 1].\x0a\x09self assert: i equals: 5",
messageSends: ["timesRepeat:", "+", "assert:equals:"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTo",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((1)._to_((5)),[(1), (2), (3), (4), (5)]);
return self}, function($ctx1) {$ctx1.fill(self,"testTo",{},smalltalk.NumberTest)})},
args: [],
source: "testTo\x0a\x09self assert: (1 to: 5) equals: #(1 2 3 4 5)",
messageSends: ["assert:equals:", "to:"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testToBy",
category: 'tests',
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((0)._to_by_((6),(2)),[(0), (2), (4), (6)]);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (1)._to_by_((4),(0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testToBy",{},smalltalk.NumberTest)})},
args: [],
source: "testToBy\x0a\x09self assert: (0 to: 6 by: 2) equals: #(0 2 4 6).\x0a\x0a\x09self should: [1 to: 4 by: 0] raise: Error",
messageSends: ["assert:equals:", "to:by:", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTruncated",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((3)._truncated(),(3));
self._assert_equals_((3.212)._truncated(),(3));
self._assert_equals_((3.51)._truncated(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testTruncated",{},smalltalk.NumberTest)})},
args: [],
source: "testTruncated\x0a\x09\x0a\x09self assert: 3 truncated equals: 3.\x0a\x09self assert: 3.212 truncated equals: 3.\x0a\x09self assert: 3.51 truncated equals: 3",
messageSends: ["assert:equals:", "truncated"],
referencedClasses: []
}),
smalltalk.NumberTest);



smalltalk.addClass('ObjectMock', smalltalk.Object, ['foo', 'bar'], 'Kernel-Tests');
smalltalk.ObjectMock.comment="ObjectMock is there only to perform tests on classes.";
smalltalk.addMethod(
smalltalk.method({
selector: "foo",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@foo"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"foo",{},smalltalk.ObjectMock)})},
args: [],
source: "foo\x0a\x09^foo",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectMock);

smalltalk.addMethod(
smalltalk.method({
selector: "foo:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@foo"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"foo:",{anObject:anObject},smalltalk.ObjectMock)})},
args: ["anObject"],
source: "foo: anObject\x0a\x09foo := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectMock);



smalltalk.addClass('ObjectMock2', smalltalk.ObjectMock, [], 'Kernel-Tests');
smalltalk.ObjectMock2.comment="ObjectMock is there only to perform tests on classes.";
smalltalk.addMethod(
smalltalk.method({
selector: "foo",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@foo"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"foo",{},smalltalk.ObjectMock2)})},
args: [],
source: "foo\x0a\x09^foo",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectMock2);

smalltalk.addMethod(
smalltalk.method({
selector: "foo:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@foo"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"foo:",{anObject:anObject},smalltalk.ObjectMock2)})},
args: ["anObject"],
source: "foo: anObject\x0a\x09foo := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectMock2);



smalltalk.addClass('ObjectMock3', smalltalk.ObjectMock2, [], 'Kernel-Tests');


smalltalk.addClass('ObjectMock4', smalltalk.ObjectMock3, [], 'Kernel-Tests');


smalltalk.addClass('ObjectTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "notDefined",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return undefined;;
return self}, function($ctx1) {$ctx1.fill(self,"notDefined",{},smalltalk.ObjectTest)})},
args: [],
source: "notDefined\x0a\x09<return undefined;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasicAccess",
category: 'tests',
fn: function (){
var self=this;
var o;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
o=_st($Object())._new();
_st(o)._basicAt_put_("a",(1));
self._assert_equals_(_st(o)._basicAt_("a"),(1));
self._assert_equals_(_st(o)._basicAt_("b"),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testBasicAccess",{o:o},smalltalk.ObjectTest)})},
args: [],
source: "testBasicAccess\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09o basicAt: 'a' put: 1.\x0a\x09self assert: (o basicAt: 'a') equals: 1.\x0a\x09self assert: (o basicAt: 'b') equals: nil",
messageSends: ["new", "basicAt:put:", "assert:equals:", "basicAt:"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasicPerform",
category: 'tests',
fn: function (){
var self=this;
var o;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
o=_st($Object())._new();
_st(o)._basicAt_put_("func",(function(){
return smalltalk.withContext(function($ctx2) {
return "hello";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(o)._basicAt_put_("func2",(function(a){
return smalltalk.withContext(function($ctx2) {
return _st(a).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1)})}));
self._assert_equals_(_st(o)._basicPerform_("func"),"hello");
self._assert_equals_(_st(o)._basicPerform_withArguments_("func2",[(3)]),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testBasicPerform",{o:o},smalltalk.ObjectTest)})},
args: [],
source: "testBasicPerform\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09o basicAt: 'func' put: ['hello'].\x0a\x09o basicAt: 'func2' put: [:a | a + 1].\x0a\x0a\x09self assert: (o basicPerform: 'func') equals: 'hello'.\x0a\x09self assert: (o basicPerform: 'func2' withArguments: #(3)) equals: 4",
messageSends: ["new", "basicAt:put:", "+", "assert:equals:", "basicPerform:", "basicPerform:withArguments:"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDNU",
category: 'tests',
fn: function (){
var self=this;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
function $MessageNotUnderstood(){return smalltalk.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Object())._new())._foo();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
return self}, function($ctx1) {$ctx1.fill(self,"testDNU",{},smalltalk.ObjectTest)})},
args: [],
source: "testDNU\x0a\x09self should: [Object new foo] raise: MessageNotUnderstood",
messageSends: ["should:raise:", "foo", "new"],
referencedClasses: ["Object", "MessageNotUnderstood"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function (){
var self=this;
var o;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
o=_st($Object())._new();
self._deny_(_st(o).__eq(_st($Object())._new()));
self._assert_(_st(o).__eq(o));
self._assert_(_st(_st(o)._yourself()).__eq(o));
self._assert_(_st(o).__eq(_st(o)._yourself()));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{o:o},smalltalk.ObjectTest)})},
args: [],
source: "testEquality\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09self deny: o = Object new.\x0a\x09self assert: (o = o).\x0a\x09self assert: (o yourself = o).\x0a\x09self assert: (o = o yourself)",
messageSends: ["new", "deny:", "=", "assert:", "yourself"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHalt",
category: 'tests',
fn: function (){
var self=this;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Object())._new())._halt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testHalt",{},smalltalk.ObjectTest)})},
args: [],
source: "testHalt\x0a\x09self should: [Object new halt] raise: Error",
messageSends: ["should:raise:", "halt", "new"],
referencedClasses: ["Object", "Error"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function (){
var self=this;
var o;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
o=_st($Object())._new();
self._deny_(_st(o).__eq_eq(_st($Object())._new()));
self._assert_(_st(o).__eq_eq(o));
self._assert_(_st(_st(o)._yourself()).__eq_eq(o));
self._assert_(_st(o).__eq_eq(_st(o)._yourself()));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{o:o},smalltalk.ObjectTest)})},
args: [],
source: "testIdentity\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09self deny: o == Object new.\x0a\x09self assert: o == o.\x0a\x09self assert: o yourself == o.\x0a\x09self assert: o == o yourself",
messageSends: ["new", "deny:", "==", "assert:", "yourself"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfNil",
category: 'tests',
fn: function (){
var self=this;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$5,$7,$6,$8,$10,$9,$11,$13,$12;
self._deny_(_st(_st($Object())._new())._isNil());
$1=self;
$4=_st($Object())._new();
if(($receiver = $4) == nil || $receiver == undefined){
$3=true;
} else {
$3=$4;
};
$2=_st($3).__eq(true);
_st($1)._deny_($2);
$5=self;
$7=_st($Object())._new();
if(($receiver = $7) == nil || $receiver == undefined){
$6=$7;
} else {
$6=true;
};
_st($5)._assert_equals_($6,true);
$8=self;
$10=_st($Object())._new();
if(($receiver = $10) == nil || $receiver == undefined){
$9=false;
} else {
$9=true;
};
_st($8)._assert_equals_($9,true);
$11=self;
$13=_st($Object())._new();
if(($receiver = $13) == nil || $receiver == undefined){
$12=false;
} else {
$12=true;
};
_st($11)._assert_equals_($12,true);
return self}, function($ctx1) {$ctx1.fill(self,"testIfNil",{},smalltalk.ObjectTest)})},
args: [],
source: "testIfNil\x0a\x09self deny: Object new isNil.\x0a\x09self deny: (Object new ifNil: [true]) = true.\x0a\x09self assert: (Object new ifNotNil: [true]) equals: true.\x0a\x0a\x09self assert: (Object new ifNil: [false] ifNotNil: [true]) equals: true.\x0a\x09self assert: (Object new ifNotNil: [true] ifNil: [false]) equals: true",
messageSends: ["deny:", "isNil", "new", "=", "ifNil:", "assert:equals:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInstVars",
category: 'tests',
fn: function (){
var self=this;
var o;
function $ObjectMock(){return smalltalk.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
return smalltalk.withContext(function($ctx1) { 
o=_st($ObjectMock())._new();
self._assert_equals_(_st(o)._instVarAt_("foo"),nil);
_st(o)._instVarAt_put_("foo",(1));
self._assert_equals_(_st(o)._instVarAt_("foo"),(1));
self._assert_equals_(_st(o)._instVarAt_("foo"),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testInstVars",{o:o},smalltalk.ObjectTest)})},
args: [],
source: "testInstVars\x0a\x09| o |\x0a\x09o := ObjectMock new.\x0a\x09self assert: (o instVarAt: #foo) equals: nil.\x0a\x0a\x09o instVarAt: #foo put: 1.\x0a\x09self assert: (o instVarAt: #foo) equals: 1.\x0a\x09self assert: (o instVarAt: 'foo') equals: 1",
messageSends: ["new", "assert:equals:", "instVarAt:", "instVarAt:put:"],
referencedClasses: ["ObjectMock"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNilUndefined",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._notDefined(),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testNilUndefined",{},smalltalk.ObjectTest)})},
args: [],
source: "testNilUndefined\x0a\x09\x22nil in Smalltalk is the undefined object in JS\x22\x0a\x0a\x09self assert: self notDefined equals: nil",
messageSends: ["assert:equals:", "notDefined"],
referencedClasses: []
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testYourself",
category: 'tests',
fn: function (){
var self=this;
var o;
function $ObjectMock(){return smalltalk.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
return smalltalk.withContext(function($ctx1) { 
o=_st($ObjectMock())._new();
self._assert_(_st(_st(o)._yourself()).__eq_eq(o));
return self}, function($ctx1) {$ctx1.fill(self,"testYourself",{o:o},smalltalk.ObjectTest)})},
args: [],
source: "testYourself\x0a\x09| o |\x0a\x09o := ObjectMock new.\x0a\x09self assert: o yourself == o",
messageSends: ["new", "assert:", "==", "yourself"],
referencedClasses: ["ObjectMock"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testidentityHash",
category: 'tests',
fn: function (){
var self=this;
var o1,o2;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
o1=_st($Object())._new();
o2=_st($Object())._new();
self._assert_(_st(_st(o1)._identityHash()).__eq_eq(_st(o1)._identityHash()));
self._deny_(_st(_st(o1)._identityHash()).__eq_eq(_st(o2)._identityHash()));
return self}, function($ctx1) {$ctx1.fill(self,"testidentityHash",{o1:o1,o2:o2},smalltalk.ObjectTest)})},
args: [],
source: "testidentityHash\x0a\x09| o1 o2 |\x0a\x09\x0a\x09o1 := Object new.\x0a\x09o2 := Object new.\x0a\x0a\x09self assert: o1 identityHash == o1 identityHash.\x0a\x09self deny: o1 identityHash == o2 identityHash",
messageSends: ["new", "assert:", "==", "identityHash", "deny:"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);



smalltalk.addClass('PackageTest', smalltalk.TestCase, ['zorkPackage', 'grulPackage', 'backUpCommitPathJs', 'backUpCommitPathSt'], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@backUpCommitPathJs"]=_st($Package())._defaultCommitPathJs();
self["@backUpCommitPathSt"]=_st($Package())._defaultCommitPathSt();
_st($Package())._resetCommitPaths();
self["@zorkPackage"]=_st(_st($Package())._new())._name_("Zork");
$1=_st($Package())._new();
_st($1)._name_("Grul");
_st($1)._commitPathJs_("server/grul/js");
_st($1)._commitPathSt_("grul/st");
$2=_st($1)._yourself();
self["@grulPackage"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.PackageTest)})},
args: [],
source: "setUp\x0a\x09backUpCommitPathJs := Package defaultCommitPathJs.\x0a\x09backUpCommitPathSt := Package defaultCommitPathSt.\x0a\x0a\x09Package resetCommitPaths.\x0a\x0a\x09zorkPackage := Package new name: 'Zork'.\x0a\x09grulPackage := Package new\x0a\x09\x09\x09\x09\x09name: 'Grul';\x0a\x09\x09\x09\x09\x09commitPathJs: 'server/grul/js';\x0a\x09\x09\x09\x09\x09commitPathSt: 'grul/st';\x0a\x09\x09\x09\x09\x09yourself",
messageSends: ["defaultCommitPathJs", "defaultCommitPathSt", "resetCommitPaths", "name:", "new", "commitPathJs:", "commitPathSt:", "yourself"],
referencedClasses: ["Package"]
}),
smalltalk.PackageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
category: 'running',
fn: function (){
var self=this;
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=$Package();
_st($1)._defaultCommitPathJs_(self["@backUpCommitPathJs"]);
$2=_st($1)._defaultCommitPathSt_(self["@backUpCommitPathSt"]);
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.PackageTest)})},
args: [],
source: "tearDown\x0a\x09Package\x0a\x09\x09defaultCommitPathJs: backUpCommitPathJs;\x0a\x09\x09defaultCommitPathSt: backUpCommitPathSt",
messageSends: ["defaultCommitPathJs:", "defaultCommitPathSt:"],
referencedClasses: ["Package"]
}),
smalltalk.PackageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@grulPackage"])._commitPathJs(),"server/grul/js");
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathJsShouldBeServerGrulJs",{},smalltalk.PackageTest)})},
args: [],
source: "testGrulCommitPathJsShouldBeServerGrulJs\x0a\x09self assert: grulPackage commitPathJs equals: 'server/grul/js'",
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@grulPackage"])._commitPathSt(),"grul/st");
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathStShouldBeGrulSt",{},smalltalk.PackageTest)})},
args: [],
source: "testGrulCommitPathStShouldBeGrulSt\x0a\x09self assert: grulPackage commitPathSt equals: 'grul/st'",
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJs",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@zorkPackage"])._commitPathJs(),"js");
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathJsShouldBeJs",{},smalltalk.PackageTest)})},
args: [],
source: "testZorkCommitPathJsShouldBeJs\x0a\x09self assert: zorkPackage commitPathJs equals: 'js'",
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSt",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@zorkPackage"])._commitPathSt(),"st");
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathStShouldBeSt",{},smalltalk.PackageTest)})},
args: [],
source: "testZorkCommitPathStShouldBeSt\x0a\x09self assert: zorkPackage commitPathSt equals: 'st'",
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageTest);



smalltalk.addClass('PackageWithDefaultCommitPathChangedTest', smalltalk.PackageTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.PackageWithDefaultCommitPathChangedTest.superclass.fn.prototype._setUp.apply(_st(self), []);
$1=$Package();
_st($1)._defaultCommitPathJs_("javascripts/");
$2=_st($1)._defaultCommitPathSt_("smalltalk/");
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x0a\x09Package\x0a\x09\x09defaultCommitPathJs: 'javascripts/';\x0a\x09\x09defaultCommitPathSt: 'smalltalk/'.",
messageSends: ["setUp", "defaultCommitPathJs:", "defaultCommitPathSt:"],
referencedClasses: ["Package"]
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@grulPackage"])._commitPathJs(),"server/grul/js");
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathJsShouldBeServerGrulJs",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
args: [],
source: "testGrulCommitPathJsShouldBeServerGrulJs\x0a\x09self assert: grulPackage commitPathJs equals: 'server/grul/js'",
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@grulPackage"])._commitPathSt(),"grul/st");
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathStShouldBeGrulSt",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
args: [],
source: "testGrulCommitPathStShouldBeGrulSt\x0a\x09self assert: grulPackage commitPathSt equals: 'grul/st'",
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJavascript",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@zorkPackage"])._commitPathJs(),"javascripts/");
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathJsShouldBeJavascript",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
args: [],
source: "testZorkCommitPathJsShouldBeJavascript\x0a\x09self assert: zorkPackage commitPathJs equals: 'javascripts/'",
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSmalltalk",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@zorkPackage"])._commitPathSt(),"smalltalk/");
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathStShouldBeSmalltalk",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
args: [],
source: "testZorkCommitPathStShouldBeSmalltalk\x0a\x09self assert: zorkPackage commitPathSt equals: 'smalltalk/'",
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);


smalltalk.addMethod(
smalltalk.method({
selector: "shouldInheritSelectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"shouldInheritSelectors",{},smalltalk.PackageWithDefaultCommitPathChangedTest.klass)})},
args: [],
source: "shouldInheritSelectors\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest.klass);


smalltalk.addClass('PointTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAccessing",
category: 'tests',
fn: function (){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(_st($Point())._x_y_((3),(4)))._x(),(3));
self._assert_equals_(_st(_st($Point())._x_y_((3),(4)))._y(),(4));
self._assert_equals_(_st(_st(_st($Point())._new())._x_((3)))._x(),(3));
self._assert_equals_(_st(_st(_st($Point())._new())._y_((4)))._y(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testAccessing",{},smalltalk.PointTest)})},
args: [],
source: "testAccessing\x0a\x09self assert: (Point x: 3 y: 4) x equals: 3.\x0a\x09self assert: (Point x: 3 y: 4) y equals: 4.\x0a\x09self assert: (Point new x: 3) x equals: 3.\x0a\x09self assert: (Point new y: 4) y equals: 4",
messageSends: ["assert:equals:", "x", "x:y:", "y", "x:", "new", "y:"],
referencedClasses: ["Point"]
}),
smalltalk.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testArithmetic",
category: 'tests',
fn: function (){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st((3).__at((4))).__star((3).__at((4))),_st($Point())._x_y_((9),(16)));
self._assert_equals_(_st((3).__at((4))).__plus((3).__at((4))),_st($Point())._x_y_((6),(8)));
self._assert_equals_(_st((3).__at((4))).__minus((3).__at((4))),_st($Point())._x_y_((0),(0)));
self._assert_equals_(_st((6).__at((8))).__slash((3).__at((4))),_st($Point())._x_y_((2),(2)));
return self}, function($ctx1) {$ctx1.fill(self,"testArithmetic",{},smalltalk.PointTest)})},
args: [],
source: "testArithmetic\x0a\x09self assert: 3@4 * (3@4 ) equals: (Point x: 9 y: 16).\x0a\x09self assert: 3@4 + (3@4 ) equals: (Point x: 6 y: 8).\x0a\x09self assert: 3@4 - (3@4 ) equals: (Point x: 0 y: 0).\x0a\x09self assert: 6@8 / (3@4 ) equals: (Point x: 2 y: 2)",
messageSends: ["assert:equals:", "*", "@", "x:y:", "+", "-", "/"],
referencedClasses: ["Point"]
}),
smalltalk.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function (){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((3).__at((4)),_st($Point())._x_y_((3),(4)));
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},smalltalk.PointTest)})},
args: [],
source: "testAt\x0a\x09self assert: 3@4 equals: (Point x: 3 y: 4)",
messageSends: ["assert:equals:", "@", "x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEgality",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st((3).__at((4))).__eq((3).__at((4))));
self._deny_(_st((3).__at((5))).__eq((3).__at((6))));
return self}, function($ctx1) {$ctx1.fill(self,"testEgality",{},smalltalk.PointTest)})},
args: [],
source: "testEgality\x0a\x09self assert: (3@4 = (3@4)).\x0a\x09self deny: 3@5 = (3@6)",
messageSends: ["assert:", "=", "@", "deny:"],
referencedClasses: []
}),
smalltalk.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTranslateBy",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st((3).__at((3)))._translateBy_((0).__at((1))),(3).__at((4)));
self._assert_equals_(_st((3).__at((3)))._translateBy_((0).__at((1)._negated())),(3).__at((2)));
self._assert_equals_(_st((3).__at((3)))._translateBy_((2).__at((3))),(5).__at((6)));
self._assert_equals_(_st((3).__at((3)))._translateBy_(_st((3)._negated()).__at((0))),(0).__at((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testTranslateBy",{},smalltalk.PointTest)})},
args: [],
source: "testTranslateBy\x0a\x09self assert: (3@3 translateBy: 0@1) equals: 3@4.\x0a\x09self assert: (3@3 translateBy: 0@1 negated) equals: 3@2.\x0a\x09self assert: (3@3 translateBy: 2@3) equals: 5@6.\x0a\x09self assert: (3@3 translateBy: 3 negated @0) equals: 0@3.",
messageSends: ["assert:equals:", "translateBy:", "@", "negated"],
referencedClasses: []
}),
smalltalk.PointTest);



smalltalk.addClass('RandomTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "textNext",
category: 'tests',
fn: function (){
var self=this;
function $Random(){return smalltalk.Random||(typeof Random=="undefined"?nil:Random)}
return smalltalk.withContext(function($ctx1) { 
(10000)._timesRepeat_((function(){
var current,next;
return smalltalk.withContext(function($ctx2) {
next=_st(_st($Random())._new())._next();
next;
self._assert_(_st(next).__gt_eq((0)));
self._assert_(_st(next).__lt((1)));
self._deny_(_st(current).__eq(next));
return _st(next).__eq(current);
}, function($ctx2) {$ctx2.fillBlock({current:current,next:next},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"textNext",{},smalltalk.RandomTest)})},
args: [],
source: "textNext\x0a\x0a\x0910000 timesRepeat: [\x0a\x09\x09\x09| current next |\x0a\x09\x09\x09next := Random new next.\x0a\x09\x09\x09self assert: (next >= 0).\x0a\x09\x09\x09self assert: (next < 1).\x0a\x09\x09\x09self deny: current = next.\x0a\x09\x09\x09next = current]",
messageSends: ["timesRepeat:", "next", "new", "assert:", ">=", "<", "deny:", "="],
referencedClasses: ["Random"]
}),
smalltalk.RandomTest);



smalltalk.addClass('SetTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAddRemove",
category: 'tests',
fn: function (){
var self=this;
var set;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
set=_st($Set())._new();
self._assert_(_st(set)._isEmpty());
_st(set)._add_((3));
self._assert_(_st(set)._includes_((3)));
_st(set)._add_((5));
self._assert_(_st(set)._includes_((5)));
_st(set)._remove_((3));
self._deny_(_st(set)._includes_((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testAddRemove",{set:set},smalltalk.SetTest)})},
args: [],
source: "testAddRemove\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09\x0a\x09self assert: set isEmpty.\x0a\x0a\x09set add: 3.\x0a\x09self assert: (set includes: 3).\x0a\x0a\x09set add: 5.\x0a\x09self assert: (set includes: 5).\x0a\x0a\x09set remove: 3.\x0a\x09self deny: (set includes: 3)",
messageSends: ["new", "assert:", "isEmpty", "add:", "includes:", "remove:", "deny:"],
referencedClasses: ["Set"]
}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Set())._new())._at_put_((1),(2));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},smalltalk.SetTest)})},
args: [],
source: "testAt\x0a\x09self should: [Set new at: 1 put: 2] raise: Error",
messageSends: ["should:raise:", "at:put:", "new"],
referencedClasses: ["Set", "Error"]
}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCollect",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st([(5), (6), (8)]._asSet())._collect_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__backslash_backslash((3));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})),[(0), (2)]._asSet());
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{},smalltalk.SetTest)})},
args: [],
source: "testCollect\x0a\x09self assert: (#(5 6 8) asSet collect: [ :x | x \x5c\x5c 3 ]) equals: #(0 2) asSet",
messageSends: ["assert:equals:", "collect:", "\x5c\x5c", "asSet"],
referencedClasses: []
}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testComparing",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_([(0), (2)]._asSet(),[(0), (2)]._asSet());
self._assert_equals_([(2), (0)]._asSet(),[(0), (2)]._asSet());
self._deny_(_st([(0), (2), (3)]._asSet()).__eq([(0), (2)]._asSet()));
self._deny_(_st([(1), (2)]._asSet()).__eq([(0), (2)]._asSet()));
return self}, function($ctx1) {$ctx1.fill(self,"testComparing",{},smalltalk.SetTest)})},
args: [],
source: "testComparing\x0a\x09self assert: #(0 2) asSet equals: #(0 2) asSet.\x0a\x09self assert: #(2 0) asSet equals: #(0 2) asSet.\x0a\x09self deny: #(0 2 3) asSet = #(0 2) asSet.\x0a\x09self deny: #(1 2) asSet = #(0 2) asSet",
messageSends: ["assert:equals:", "asSet", "deny:", "="],
referencedClasses: []
}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrintString",
category: 'tests',
fn: function (){
var self=this;
var set;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
set=_st($Set())._new();
self._assert_equals_(_st(set)._printString(),"a Set ()");
$1=set;
_st($1)._add_((1));
$2=_st($1)._add_((3));
self._assert_equals_(_st(set)._printString(),"a Set (1 3)");
_st(set)._add_("foo");
self._assert_equals_(_st(set)._printString(),"a Set (1 3 'foo')");
$3=set;
_st($3)._remove_((1));
$4=_st($3)._remove_((3));
self._assert_equals_(_st(set)._printString(),"a Set ('foo')");
_st(set)._add_((3));
self._assert_equals_(_st(set)._printString(),"a Set ('foo' 3)");
_st(set)._add_((3));
self._assert_equals_(_st(set)._printString(),"a Set ('foo' 3)");
return self}, function($ctx1) {$ctx1.fill(self,"testPrintString",{set:set},smalltalk.SetTest)})},
args: [],
source: "testPrintString\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09self assert: set printString equals: 'a Set ()'.\x0a\x09set add: 1; add: 3.\x0a\x09self assert: set printString equals: 'a Set (1 3)'.\x0a\x09set add: 'foo'.\x0a\x09self assert: set printString equals: 'a Set (1 3 ''foo'')'.\x0a\x09set remove: 1; remove: 3.\x0a\x09self assert: set printString equals: 'a Set (''foo'')'.\x0a\x09set add: 3.\x0a\x09self assert: set printString equals: 'a Set (''foo'' 3)'.\x0a\x09set add: 3.\x0a\x09self assert: set printString equals: 'a Set (''foo'' 3)'",
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:"],
referencedClasses: ["Set"]
}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(_st($Set())._new())._size(),(0));
self._assert_equals_(_st(_st($Set())._withAll_([(1), (2), (3), (4)]))._size(),(4));
self._assert_equals_(_st(_st($Set())._withAll_([(1), (1), (1), (1)]))._size(),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{},smalltalk.SetTest)})},
args: [],
source: "testSize\x0a\x09self assert: Set new size equals: 0.\x0a\x09self assert: (Set withAll: #(1 2 3 4)) size equals: 4.\x0a\x09self assert: (Set withAll: #(1 1 1 1)) size equals: 1",
messageSends: ["assert:equals:", "size", "new", "withAll:"],
referencedClasses: ["Set"]
}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnboxedObjects",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(_st(["foo"._yourself(),"foo"._yourself()])._asSet())._asArray(),["foo"]);
return self}, function($ctx1) {$ctx1.fill(self,"testUnboxedObjects",{},smalltalk.SetTest)})},
args: [],
source: "testUnboxedObjects\x0a\x09self assert: {'foo' yourself. 'foo' yourself} asSet asArray equals: #('foo')",
messageSends: ["assert:equals:", "asArray", "asSet", "yourself"],
referencedClasses: []
}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnicity",
category: 'tests',
fn: function (){
var self=this;
var set;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
set=_st($Set())._new();
_st(set)._add_((21));
_st(set)._add_("hello");
_st(set)._add_((21));
self._assert_equals_(_st(set)._size(),(2));
_st(set)._add_("hello");
self._assert_equals_(_st(set)._size(),(2));
self._assert_equals_(_st(set)._asArray(),[(21), "hello"]);
return self}, function($ctx1) {$ctx1.fill(self,"testUnicity",{set:set},smalltalk.SetTest)})},
args: [],
source: "testUnicity\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09set add: 21.\x0a\x09set add: 'hello'.\x0a\x0a\x09set add: 21.\x0a\x09self assert: set size equals: 2.\x0a\x09\x0a\x09set add: 'hello'.\x0a\x09self assert: set size equals: 2.\x0a\x0a\x09self assert: set asArray equals: #(21 'hello')",
messageSends: ["new", "add:", "assert:equals:", "size", "asArray"],
referencedClasses: ["Set"]
}),
smalltalk.SetTest);



smalltalk.addClass('StreamTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._collectionClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.StreamTest)})},
args: [],
source: "collectionClass\x0a\x09^ self class collectionClass",
messageSends: ["collectionClass", "class"],
referencedClasses: []
}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "newCollection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCollection",{},smalltalk.StreamTest)})},
args: [],
source: "newCollection\x0a\x09^ self collectionClass new",
messageSends: ["new", "collectionClass"],
referencedClasses: []
}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "newStream",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._collectionClass())._new())._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newStream",{},smalltalk.StreamTest)})},
args: [],
source: "newStream\x0a\x09^ self collectionClass new stream",
messageSends: ["stream", "new", "collectionClass"],
referencedClasses: []
}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtStartAtEnd",
category: 'tests',
fn: function (){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
stream=self._newStream();
self._assert_(_st(stream)._atStart());
self._assert_(_st(stream)._atEnd());
_st(stream)._nextPutAll_(self._newCollection());
self._assert_(_st(stream)._atEnd());
self._deny_(_st(stream)._atStart());
_st(stream)._position_((1));
self._deny_(_st(stream)._atEnd());
self._deny_(_st(stream)._atStart());
return self}, function($ctx1) {$ctx1.fill(self,"testAtStartAtEnd",{stream:stream},smalltalk.StreamTest)})},
args: [],
source: "testAtStartAtEnd\x0a\x09| stream |\x0a\x09\x0a\x09stream := self newStream.\x0a\x09self assert: stream atStart.\x0a\x09self assert: stream atEnd.\x0a\x09\x0a\x09stream nextPutAll: self newCollection.\x0a\x09self assert: stream atEnd.\x0a\x09self deny: stream atStart.\x0a\x09\x0a\x09stream position: 1.\x0a\x09self deny: stream atEnd.\x0a\x09self deny: stream atStart",
messageSends: ["newStream", "assert:", "atStart", "atEnd", "nextPutAll:", "newCollection", "deny:", "position:"],
referencedClasses: []
}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContents",
category: 'tests',
fn: function (){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
stream=self._newStream();
_st(stream)._nextPutAll_(self._newCollection());
self._assert_equals_(_st(stream)._contents(),self._newCollection());
return self}, function($ctx1) {$ctx1.fill(self,"testContents",{stream:stream},smalltalk.StreamTest)})},
args: [],
source: "testContents\x0a\x09| stream |\x0a\x09\x0a\x09stream := self newStream.\x0a\x09stream nextPutAll: self newCollection.\x0a\x09\x0a\x09self assert: stream contents equals: self newCollection",
messageSends: ["newStream", "nextPutAll:", "newCollection", "assert:equals:", "contents"],
referencedClasses: []
}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIsEmpty",
category: 'tests',
fn: function (){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
stream=self._newStream();
self._assert_(_st(stream)._isEmpty());
_st(stream)._nextPutAll_(self._newCollection());
self._deny_(_st(stream)._isEmpty());
return self}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{stream:stream},smalltalk.StreamTest)})},
args: [],
source: "testIsEmpty\x0a\x09| stream |\x0a\x09\x0a\x09stream := self newStream.\x0a\x09self assert: stream isEmpty.\x0a\x09\x0a\x09stream nextPutAll: self newCollection.\x0a\x09self deny: stream isEmpty",
messageSends: ["newStream", "assert:", "isEmpty", "nextPutAll:", "newCollection", "deny:"],
referencedClasses: []
}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPosition",
category: 'tests',
fn: function (){
var self=this;
var collection,stream;
return smalltalk.withContext(function($ctx1) { 
collection=self._newCollection();
stream=self._newStream();
_st(stream)._nextPutAll_(collection);
self._assert_equals_(_st(stream)._position(),_st(collection)._size());
_st(stream)._position_((0));
self._assert_equals_(_st(stream)._position(),(0));
_st(stream)._next();
self._assert_equals_(_st(stream)._position(),(1));
_st(stream)._next();
self._assert_equals_(_st(stream)._position(),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testPosition",{collection:collection,stream:stream},smalltalk.StreamTest)})},
args: [],
source: "testPosition\x0a\x09| collection stream |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09stream nextPutAll: collection.\x0a\x09self assert: stream position equals: collection size.\x0a\x09\x0a\x09stream position: 0.\x0a\x09self assert: stream position equals: 0.\x0a\x09\x0a\x09stream next.\x0a\x09self assert: stream position equals: 1.\x0a\x09\x0a\x09stream next.\x0a\x09self assert: stream position equals: 2",
messageSends: ["newCollection", "newStream", "nextPutAll:", "assert:equals:", "position", "size", "position:", "next"],
referencedClasses: []
}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testReading",
category: 'tests',
fn: function (){
var self=this;
var stream,collection;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
collection=self._newCollection();
stream=self._newStream();
$1=stream;
_st($1)._nextPutAll_(collection);
$2=_st($1)._position_((0));
_st(collection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._assert_equals_(_st(stream)._next(),each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._assert_(_st(_st(stream)._next())._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testReading",{stream:stream,collection:collection},smalltalk.StreamTest)})},
args: [],
source: "testReading\x0a\x09| stream collection |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09stream \x0a\x09\x09nextPutAll: collection;\x0a\x09\x09position: 0.\x0a\x09\x0a\x09collection do: [ :each |\x0a\x09\x09self assert: stream next equals: each ].\x0a\x09\x09\x0a\x09self assert: stream next isNil",
messageSends: ["newCollection", "newStream", "nextPutAll:", "position:", "do:", "assert:equals:", "next", "assert:", "isNil"],
referencedClasses: []
}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testStreamContents",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"testStreamContents",{},smalltalk.StreamTest)})},
args: [],
source: "testStreamContents",
messageSends: [],
referencedClasses: []
}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWrite",
category: 'tests',
fn: function (){
var self=this;
var stream,collection;
return smalltalk.withContext(function($ctx1) { 
collection=self._newCollection();
stream=self._newStream();
_st(collection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(stream).__lt_lt(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._assert_equals_(_st(stream)._contents(),collection);
return self}, function($ctx1) {$ctx1.fill(self,"testWrite",{stream:stream,collection:collection},smalltalk.StreamTest)})},
args: [],
source: "testWrite\x0a\x09| stream collection |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09collection do: [ :each | stream << each ].\x0a\x09self assert: stream contents equals: collection",
messageSends: ["newCollection", "newStream", "do:", "<<", "assert:equals:", "contents"],
referencedClasses: []
}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWriting",
category: 'tests',
fn: function (){
var self=this;
var stream,collection;
return smalltalk.withContext(function($ctx1) { 
collection=self._newCollection();
stream=self._newStream();
_st(collection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._nextPut_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._assert_equals_(_st(stream)._contents(),collection);
stream=self._newStream();
_st(stream)._nextPutAll_(collection);
self._assert_equals_(_st(stream)._contents(),collection);
return self}, function($ctx1) {$ctx1.fill(self,"testWriting",{stream:stream,collection:collection},smalltalk.StreamTest)})},
args: [],
source: "testWriting\x0a\x09| stream collection |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09collection do: [ :each | stream nextPut: each ].\x0a\x09self assert: stream contents equals: collection.\x0a\x09\x0a\x09stream := self newStream.\x0a\x09stream nextPutAll: collection.\x0a\x09self assert: stream contents equals: collection",
messageSends: ["newCollection", "newStream", "do:", "nextPut:", "assert:equals:", "contents", "nextPutAll:"],
referencedClasses: []
}),
smalltalk.StreamTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return nil;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.StreamTest.klass)})},
args: [],
source: "collectionClass\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.StreamTest.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.StreamTest.klass)})},
args: [],
source: "isAbstract\x0a\x09^ self collectionClass isNil",
messageSends: ["isNil", "collectionClass"],
referencedClasses: []
}),
smalltalk.StreamTest.klass);


smalltalk.addClass('ArrayStreamTest', smalltalk.StreamTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "newCollection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[true,(1),(3).__at((4)),"foo"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCollection",{},smalltalk.ArrayStreamTest)})},
args: [],
source: "newCollection\x0a\x09^ { true. 1. 3@4. 'foo' }",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.ArrayStreamTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Array();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.ArrayStreamTest.klass)})},
args: [],
source: "collectionClass\x0a\x09^ Array",
messageSends: [],
referencedClasses: ["Array"]
}),
smalltalk.ArrayStreamTest.klass);


smalltalk.addClass('StringStreamTest', smalltalk.StreamTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "newCollection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "hello world";
}, function($ctx1) {$ctx1.fill(self,"newCollection",{},smalltalk.StringStreamTest)})},
args: [],
source: "newCollection\x0a\x09^ 'hello world'",
messageSends: [],
referencedClasses: []
}),
smalltalk.StringStreamTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$String();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.StringStreamTest.klass)})},
args: [],
source: "collectionClass\x0a\x09^ String",
messageSends: [],
referencedClasses: ["String"]
}),
smalltalk.StringStreamTest.klass);


smalltalk.addClass('UndefinedTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testCopying",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(nil._copy(),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testCopying",{},smalltalk.UndefinedTest)})},
args: [],
source: "testCopying\x0a\x09self assert: nil copy equals: nil",
messageSends: ["assert:equals:", "copy"],
referencedClasses: []
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDeepCopy",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(nil._deepCopy()).__eq(nil));
return self}, function($ctx1) {$ctx1.fill(self,"testDeepCopy",{},smalltalk.UndefinedTest)})},
args: [],
source: "testDeepCopy\x0a\x09self assert: nil deepCopy = nil",
messageSends: ["assert:", "=", "deepCopy"],
referencedClasses: []
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfNil",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4,$6,$7,$8,$10,$9;
$1=self;
if(($receiver = nil) == nil || $receiver == undefined){
$2=true;
} else {
$2=nil;
};
_st($1)._assert_equals_($2,true);
$3=self;
if(($receiver = nil) == nil || $receiver == undefined){
$5=nil;
} else {
$5=true;
};
$4=_st($5).__eq(true);
_st($3)._deny_($4);
$6=self;
if(($receiver = nil) == nil || $receiver == undefined){
$7=true;
} else {
$7=false;
};
_st($6)._assert_equals_($7,true);
$8=self;
if(($receiver = nil) == nil || $receiver == undefined){
$10=false;
} else {
$10=true;
};
$9=_st($10).__eq(true);
_st($8)._deny_($9);
return self}, function($ctx1) {$ctx1.fill(self,"testIfNil",{},smalltalk.UndefinedTest)})},
args: [],
source: "testIfNil\x0a\x09self assert: (nil ifNil: [true]) equals: true.\x0a\x09self deny: (nil ifNotNil: [true]) = true.\x0a\x09self assert: (nil ifNil: [true] ifNotNil: [false]) equals: true.\x0a\x09self deny: (nil ifNotNil: [true] ifNil: [false]) = true",
messageSends: ["assert:equals:", "ifNil:", "deny:", "=", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"],
referencedClasses: []
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIsNil",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(nil._isNil());
self._deny_(nil._notNil());
return self}, function($ctx1) {$ctx1.fill(self,"testIsNil",{},smalltalk.UndefinedTest)})},
args: [],
source: "testIsNil\x0a\x09self assert: nil isNil.\x0a\x09self deny: nil notNil.",
messageSends: ["assert:", "isNil", "deny:", "notNil"],
referencedClasses: []
}),
smalltalk.UndefinedTest);



