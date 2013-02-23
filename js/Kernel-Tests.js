smalltalk.addPackage('Kernel-Tests', {});
smalltalk.addClass('BlockClosureTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCanClearInterval",
smalltalk.method({
selector: "testCanClearInterval",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st((smalltalk.Error || Error))._new())._signal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._valueWithInterval_((0)))._clearInterval();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testCanClearInterval",{}, smalltalk.BlockClosureTest)});},
args: [],
source: "testCanClearInterval\x0a\x09self shouldnt: [([Error new signal] valueWithInterval: 0) clearInterval] raise: Error",
messageSends: ["shouldnt:raise:", "clearInterval", "valueWithInterval:", "signal", "new"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testCanClearTimeout",
smalltalk.method({
selector: "testCanClearTimeout",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st((smalltalk.Error || Error))._new())._signal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._valueWithTimeout_((0)))._clearTimeout();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testCanClearTimeout",{}, smalltalk.BlockClosureTest)});},
args: [],
source: "testCanClearTimeout\x0a\x09self shouldnt: [([Error new signal] valueWithTimeout: 0) clearTimeout] raise: Error",
messageSends: ["shouldnt:raise:", "clearTimeout", "valueWithTimeout:", "signal", "new"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testCompiledSource",
smalltalk.method({
selector: "testCompiledSource",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st((function(){
return smalltalk.withContext(function($ctx2) {return _st((1)).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._compiledSource())._includesSubString_("function"));
return self}, function($ctx1) {$ctx1.fill(self,"testCompiledSource",{}, smalltalk.BlockClosureTest)});},
args: [],
source: "testCompiledSource\x0a\x09self assert: ([1+1] compiledSource includesSubString: 'function')",
messageSends: ["assert:", "includesSubString:", "compiledSource", "+"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testCurrySelf",
smalltalk.method({
selector: "testCurrySelf",
category: 'tests',
fn: function () {
var self=this;
var curriedMethod,array;
return smalltalk.withContext(function($ctx1) { curriedMethod=_st(_st((function(selfarg,x){
return smalltalk.withContext(function($ctx2) {return _st(selfarg)._at_(x);
}, function($ctx2) {$ctx2.fillBlock({selfarg:selfarg,x:x},$ctx1)})}))._currySelf())._asCompiledMethod_("foo:");
array=[(3), (1), (4)];
_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._installMethod_forClass_category_(curriedMethod,(smalltalk.Array || Array),"**test helper");
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._assert_equals_((1),_st(array)._foo_((2)));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.Array || Array))._removeCompiledMethod_(curriedMethod);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testCurrySelf",{curriedMethod:curriedMethod,array:array}, smalltalk.BlockClosureTest)});},
args: [],
source: "testCurrySelf\x0a\x09| curriedMethod array |\x0a    curriedMethod := [ :selfarg :x | selfarg at: x ] currySelf asCompiledMethod: 'foo:'.\x0a    array := #(3 1 4).\x0a    ClassBuilder new installMethod: curriedMethod forClass: Array category: '**test helper'.\x0a    [ self assert: 1 equals: (array foo: 2) ]\x0a    ensure: [ Array removeCompiledMethod: curriedMethod ]",
messageSends: ["asCompiledMethod:", "currySelf", "at:", "installMethod:forClass:category:", "new", "ensure:", "removeCompiledMethod:", "assert:equals:", "foo:"],
referencedClasses: ["Array", "ClassBuilder"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testEnsure",
smalltalk.method({
selector: "testEnsure",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((3),_st((function(){
return smalltalk.withContext(function($ctx2) {return (3);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {return (4);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testEnsure",{}, smalltalk.BlockClosureTest)});},
args: [],
source: "testEnsure\x0a\x09self assert: 3 equals: ([3] ensure: [4])",
messageSends: ["assert:equals:", "ensure:"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testEnsureRaises",
smalltalk.method({
selector: "testEnsureRaises",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st((smalltalk.Error || Error))._new())._signal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx3) {return true;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testEnsureRaises",{}, smalltalk.BlockClosureTest)});},
args: [],
source: "testEnsureRaises\x0a\x09self should: [[Error new signal] ensure: [true]] raise: Error",
messageSends: ["should:raise:", "ensure:", "signal", "new"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testExceptionSemantics",
smalltalk.method({
selector: "testExceptionSemantics",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._timeout_((100));
_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {return _st((function(){
return smalltalk.withContext(function($ctx3) {_st(self)._assert_(true);
_st((smalltalk.Error || Error))._signal();
_st(self)._deny_(true);
return _st(self)._finished();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(ex){
return smalltalk.withContext(function($ctx3) {return _st(self)._finished();
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((0));
return self}, function($ctx1) {$ctx1.fill(self,"testExceptionSemantics",{}, smalltalk.BlockClosureTest)});},
args: [],
source: "testExceptionSemantics\x0a\x09\x22See https://github.com/NicolasPetton/amber/issues/314\x22\x0a    self timeout: 100.\x0a    \x0a    (self async:  [ \x0a    \x09[ \x0a        \x09self assert: true. \x0a            Error signal. \x0a            \x22The following should *not* be run\x22\x0a            self deny: true.\x0a            self finished.\x0a  \x09\x09] on: Error do: [ :ex | self finished ] \x0a\x09]) valueWithTimeout: 0",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "on:do:", "finished", "assert:", "signal", "deny:"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testNumArgs",
smalltalk.method({
selector: "testNumArgs",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((0),_st((function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._numArgs());
_st(self)._assert_equals_((2),_st((function(a,b){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}))._numArgs());
return self}, function($ctx1) {$ctx1.fill(self,"testNumArgs",{}, smalltalk.BlockClosureTest)})},
args: [],
source: "testNumArgs\x0a\x09self assert: 0 equals: [] numArgs.\x0a\x09self assert: 2 equals: [:a :b | ] numArgs",
messageSends: ["assert:equals:", "numArgs"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testOnDo",
smalltalk.method({
selector: "testOnDo",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.Error || Error))._new())._signal();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(ex){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testOnDo",{}, smalltalk.BlockClosureTest)});},
args: [],
source: "testOnDo\x0a\x09self assert: ([Error new signal] on: Error do: [:ex | true])",
messageSends: ["assert:", "on:do:", "signal", "new"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testValue",
smalltalk.method({
selector: "testValue",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((2),_st((function(){
return smalltalk.withContext(function($ctx2) {return _st((1)).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._value());
_st(self)._assert_equals_((3),_st((function(x){
return smalltalk.withContext(function($ctx2) {return _st(x).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}))._value_((2)));
_st(self)._assert_equals_((8),_st((function(x,y){
return smalltalk.withContext(function($ctx2) {return _st(x).__star(y);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1)})}))._value_value_((2),(4)));
_st(self)._assert_equals_((1),_st((function(a,b,c){
return smalltalk.withContext(function($ctx2) {return (1);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})}))._value());
return self}, function($ctx1) {$ctx1.fill(self,"testValue",{}, smalltalk.BlockClosureTest)})},
args: [],
source: "testValue\x0a\x09self assert: 2 equals: ([1+1] value).\x0a\x09self assert: 3 equals: ([:x | x +1] value: 2).\x0a\x09self assert: 8 equals: ([:x :y | x*y] value: 2 value: 4).\x0a\x0a\x09\x22Arguments are optional in Amber. This isn't ANSI compliant.\x22\x0a\x0a\x09self assert: 1 equals: ([:a :b :c | 1] value)",
messageSends: ["assert:equals:", "value", "+", "value:", "value:value:", "*"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testValueWithPossibleArguments",
smalltalk.method({
selector: "testValueWithPossibleArguments",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((1),_st((function(){
return smalltalk.withContext(function($ctx2) {return (1);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithPossibleArguments_([(3), (4)]));
_st(self)._assert_equals_((7),_st((function(a){
return smalltalk.withContext(function($ctx2) {return _st(a).__plus((4));
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1)})}))._valueWithPossibleArguments_([(3), (4)]));
_st(self)._assert_equals_((7),_st((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(a).__plus(b);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}))._valueWithPossibleArguments_([(3), (4), (5)]));
return self}, function($ctx1) {$ctx1.fill(self,"testValueWithPossibleArguments",{}, smalltalk.BlockClosureTest)})},
args: [],
source: "testValueWithPossibleArguments\x0a\x09self assert: 1 equals: ([1] valueWithPossibleArguments: #(3 4)).\x0a\x09self assert: 7 equals: ([:a | a + 4] valueWithPossibleArguments: #(3 4)).\x0a\x09self assert: 7 equals: ([:a :b | a + b] valueWithPossibleArguments: #(3 4 5))",
messageSends: ["assert:equals:", "valueWithPossibleArguments:", "+"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testWhileFalse",
smalltalk.method({
selector: "testWhileFalse",
category: 'tests',
fn: function (){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(i).__gt((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._assert_equals_((6),i);
i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {i=_st(i).__plus((1));
i;
return _st(i).__gt((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse();
_st(self)._assert_equals_((6),i);
return self}, function($ctx1) {$ctx1.fill(self,"testWhileFalse",{i:i}, smalltalk.BlockClosureTest)})},
args: [],
source: "testWhileFalse\x0a\x09| i |\x0a\x09i := 0.\x0a\x09[i > 5] whileFalse: [i := i + 1].\x0a\x09self assert: 6 equals: i.\x0a\x0a\x09i := 0.\x0a\x09[i := i + 1. i > 5] whileFalse.\x0a\x09self assert: 6 equals: i",
messageSends: ["whileFalse:", "+", ">", "assert:equals:", "whileFalse"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testWhileTrue",
smalltalk.method({
selector: "testWhileTrue",
category: 'tests',
fn: function (){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(i).__lt((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._assert_equals_((5),i);
i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {i=_st(i).__plus((1));
i;
return _st(i).__lt((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue();
_st(self)._assert_equals_((5),i);
return self}, function($ctx1) {$ctx1.fill(self,"testWhileTrue",{i:i}, smalltalk.BlockClosureTest)})},
args: [],
source: "testWhileTrue\x0a\x09| i |\x0a\x09i := 0.\x0a\x09[i < 5] whileTrue: [i := i + 1].\x0a\x09self assert: 5 equals: i.\x0a\x0a\x09i := 0.\x0a\x09[i := i + 1. i < 5] whileTrue.\x0a\x09self assert: 5 equals: i",
messageSends: ["whileTrue:", "+", "<", "assert:equals:", "whileTrue"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);



smalltalk.addClass('BooleanTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._deny_(_st((0)).__eq(false));
_st(self)._deny_(_st(false).__eq((0)));
_st(self)._deny_(_st("").__eq(false));
_st(self)._deny_(_st(false).__eq(""));
_st(self)._assert_(_st(true).__eq(true));
_st(self)._deny_(_st(false).__eq(true));
_st(self)._deny_(_st(true).__eq(false));
_st(self)._assert_(_st(false).__eq(false));
_st(self)._assert_(_st(_st(true)._yourself()).__eq(true));
_st(self)._assert_(_st(_st(true)._yourself()).__eq(_st(true)._yourself()));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{}, smalltalk.BooleanTest)});},
args: [],
source: "testEquality\x0a\x09\x22We're on top of JS...just be sure to check the basics!\x22\x0a\x0a\x09self deny: 0 = false. \x0a\x09self deny: false = 0.\x0a\x09self deny: '' = false.\x0a\x09self deny: false = ''.\x0a\x0a\x09self assert: true = true.\x0a\x09self deny: false = true.\x0a\x09self deny: true = false.\x0a\x09self assert: false = false.\x0a\x0a\x09\x22JS may do some type coercing after sending a message\x22\x0a\x09self assert: true yourself = true.\x0a\x09self assert: true yourself = true yourself",
messageSends: ["deny:", "=", "assert:", "yourself"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._deny_(_st((0)).__eq_eq(false));
_st(self)._deny_(_st(false).__eq_eq((0)));
_st(self)._deny_(_st("").__eq_eq(false));
_st(self)._deny_(_st(false).__eq_eq(""));
_st(self)._assert_(_st(true).__eq_eq(true));
_st(self)._deny_(_st(false).__eq_eq(true));
_st(self)._deny_(_st(true).__eq_eq(false));
_st(self)._assert_(_st(false).__eq_eq(false));
_st(self)._assert_(_st(_st(true)._yourself()).__eq_eq(true));
_st(self)._assert_(_st(_st(true)._yourself()).__eq_eq(_st(true)._yourself()));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{}, smalltalk.BooleanTest)});},
args: [],
source: "testIdentity\x0a\x09\x22We're on top of JS...just be sure to check the basics!\x22\x0a\x0a\x09self deny: 0 == false. \x0a\x09self deny: false == 0.\x0a\x09self deny: '' == false.\x0a\x09self deny: false == ''.\x0a\x0a\x09self assert: true == true.\x0a\x09self deny: false == true.\x0a\x09self deny: true == false.\x0a\x09self assert: false == false.\x0a\x0a\x09\x22JS may do some type coercing after sending a message\x22\x0a\x09self assert: true yourself == true.\x0a\x09self assert: true yourself == true yourself",
messageSends: ["deny:", "==", "assert:", "yourself"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testIfTrueIfFalse",
smalltalk.method({
selector: "testIfTrueIfFalse",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16;
$1=self;
if(smalltalk.assert(true)){
$2="alternative block";
};
_st($1)._assert_equals_("alternative block",$2);
$3=self;
if(! smalltalk.assert(true)){
$4="alternative block";
};
_st($3)._assert_equals_(nil,$4);
$5=self;
if(smalltalk.assert(false)){
$6="alternative block";
};
_st($5)._assert_equals_(nil,$6);
$7=self;
if(! smalltalk.assert(false)){
$8="alternative block";
};
_st($7)._assert_equals_("alternative block",$8);
$9=self;
if(smalltalk.assert(false)){
$10="alternative block";
} else {
$10="alternative block2";
};
_st($9)._assert_equals_("alternative block2",$10);
$11=self;
if(smalltalk.assert(false)){
$12="alternative block2";
} else {
$12="alternative block";
};
_st($11)._assert_equals_("alternative block",$12);
$13=self;
if(smalltalk.assert(true)){
$14="alternative block";
} else {
$14="alternative block2";
};
_st($13)._assert_equals_("alternative block",$14);
$15=self;
if(smalltalk.assert(true)){
$16="alternative block2";
} else {
$16="alternative block";
};
_st($15)._assert_equals_("alternative block2",$16);
return self}, function($ctx1) {$ctx1.fill(self,"testIfTrueIfFalse",{}, smalltalk.BooleanTest)})},
args: [],
source: "testIfTrueIfFalse\x0a \x0a\x09self assert: 'alternative block' equals: (true ifTrue: ['alternative block']).\x0a\x09self assert: nil equals: (true ifFalse: ['alternative block']).\x0a\x0a\x09self assert: nil equals: (false ifTrue: ['alternative block']).\x0a\x09self assert: 'alternative block' equals: (false ifFalse: ['alternative block']).\x0a\x0a\x09self assert: 'alternative block2' equals: (false ifTrue: ['alternative block'] ifFalse: ['alternative block2']).\x0a\x09self assert: 'alternative block' equals: (false ifFalse: ['alternative block'] ifTrue: ['alternative block2']).\x0a\x0a\x09self assert: 'alternative block' equals: (true ifTrue: ['alternative block'] ifFalse: ['alternative block2']).\x0a\x09self assert: 'alternative block2' equals: (true ifFalse: ['alternative block'] ifTrue: ['alternative block2'])",
messageSends: ["assert:equals:", "ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testIfTrueIfFalseWithBoxing",
smalltalk.method({
selector: "testIfTrueIfFalseWithBoxing",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4,$6,$5,$7,$9,$8,$10,$12,$11,$13,$15,$14,$16,$18,$17,$19,$21,$20,$22,$24,$23;
$1=self;
$3=_st(true)._yourself();
if(smalltalk.assert($3)){
$2="alternative block";
};
_st($1)._assert_equals_("alternative block",$2);
$4=self;
$6=_st(true)._yourself();
if(! smalltalk.assert($6)){
$5="alternative block";
};
_st($4)._assert_equals_(nil,$5);
$7=self;
$9=_st(false)._yourself();
if(smalltalk.assert($9)){
$8="alternative block";
};
_st($7)._assert_equals_(nil,$8);
$10=self;
$12=_st(false)._yourself();
if(! smalltalk.assert($12)){
$11="alternative block";
};
_st($10)._assert_equals_("alternative block",$11);
$13=self;
$15=_st(false)._yourself();
if(smalltalk.assert($15)){
$14="alternative block";
} else {
$14="alternative block2";
};
_st($13)._assert_equals_("alternative block2",$14);
$16=self;
$18=_st(false)._yourself();
if(smalltalk.assert($18)){
$17="alternative block2";
} else {
$17="alternative block";
};
_st($16)._assert_equals_("alternative block",$17);
$19=self;
$21=_st(true)._yourself();
if(smalltalk.assert($21)){
$20="alternative block";
} else {
$20="alternative block2";
};
_st($19)._assert_equals_("alternative block",$20);
$22=self;
$24=_st(true)._yourself();
if(smalltalk.assert($24)){
$23="alternative block2";
} else {
$23="alternative block";
};
_st($22)._assert_equals_("alternative block2",$23);
return self}, function($ctx1) {$ctx1.fill(self,"testIfTrueIfFalseWithBoxing",{}, smalltalk.BooleanTest)})},
args: [],
source: "testIfTrueIfFalseWithBoxing\x0a \x0a\x09self assert: 'alternative block' equals: (true yourself ifTrue: ['alternative block']).\x0a\x09self assert: nil equals: (true yourself ifFalse: ['alternative block']).\x0a\x0a\x09self assert: nil equals: (false yourself ifTrue: ['alternative block']).\x0a\x09self assert: 'alternative block' equals: (false yourself ifFalse: ['alternative block']).\x0a\x0a\x09self assert: 'alternative block2' equals: (false yourself ifTrue: ['alternative block'] ifFalse: ['alternative block2']).\x0a\x09self assert: 'alternative block' equals: (false yourself ifFalse: ['alternative block'] ifTrue: ['alternative block2']).\x0a\x0a\x09self assert: 'alternative block' equals: (true yourself ifTrue: ['alternative block'] ifFalse: ['alternative block2']).\x0a\x09self assert: 'alternative block2' equals: (true yourself ifFalse: ['alternative block'] ifTrue: ['alternative block2'])",
messageSends: ["assert:equals:", "ifTrue:", "yourself", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testLogic",
smalltalk.method({
selector: "testLogic",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8;
$1=self;
_st($1)._assert_(_st(true).__and(true));
_st($1)._deny_(_st(true).__and(false));
_st($1)._deny_(_st(false).__and(true));
$2=_st($1)._deny_(_st(false).__and(false));
$3=self;
_st($3)._assert_(_st(true).__or(true));
_st($3)._assert_(_st(true).__or(false));
_st($3)._assert_(_st(false).__or(true));
$4=_st($3)._deny_(_st(false).__or(false));
$5=self;
_st($5)._assert_(_st(true).__and(_st((1)).__gt((0))));
_st($5)._deny_(_st(_st((1)).__gt((0))).__and(false));
$6=_st($5)._deny_(_st(_st((1)).__gt((0))).__and(_st((1)).__gt((2))));
$7=self;
_st($7)._assert_(_st(false).__or(_st((1)).__gt((0))));
_st($7)._assert_(_st(_st((1)).__gt((0))).__or(false));
$8=_st($7)._assert_(_st(_st((1)).__gt((0))).__or(_st((1)).__gt((2))));
return self}, function($ctx1) {$ctx1.fill(self,"testLogic",{}, smalltalk.BooleanTest)})},
args: [],
source: "testLogic\x0a\x09\x22Trivial logic table\x22\x0a\x09self assert: (true & true);\x0a    \x09deny: (true & false);\x0a        deny: (false & true);\x0a        deny: (false & false).\x0a\x09self assert: (true | true);\x0a    \x09assert: (true | false);\x0a        assert: (false | true);\x0a        deny: (false | false).\x0a        \x22Checking that expressions work fine too\x22\x0a\x09self assert: (true & (1 > 0));\x0a    \x09deny: ((1 > 0) & false);\x0a        deny: ((1 > 0) & (1 > 2)).\x0a    self assert: (false | (1 > 0));\x0a    \x09assert: ((1 > 0) | false);\x0a        assert: ((1 > 0) | (1 > 2))",
messageSends: ["assert:", "&", "deny:", "|", ">"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testLogicKeywords",
smalltalk.method({
selector: "testLogicKeywords",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8;
$1=self;
_st($1)._assert_(_st(true)._and_((function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st($1)._deny_(_st(true)._and_((function(){
return smalltalk.withContext(function($ctx2) {return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st($1)._deny_(_st(false)._and_((function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$2=_st($1)._deny_(_st(false)._and_((function(){
return smalltalk.withContext(function($ctx2) {return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$3=self;
_st($3)._assert_(_st(true)._or_((function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st($3)._assert_(_st(true)._or_((function(){
return smalltalk.withContext(function($ctx2) {return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st($3)._assert_(_st(false)._or_((function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$4=_st($3)._deny_(_st(false)._or_((function(){
return smalltalk.withContext(function($ctx2) {return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$5=self;
_st($5)._assert_(_st(true)._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st((1)).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st($5)._deny_(_st(_st((1)).__gt((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$6=_st($5)._deny_(_st(_st((1)).__gt((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st((1)).__gt((2));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$7=self;
_st($7)._assert_(_st(false)._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st((1)).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st($7)._assert_(_st(_st((1)).__gt((0)))._or_((function(){
return smalltalk.withContext(function($ctx2) {return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
$8=_st($7)._assert_(_st(_st((1)).__gt((0)))._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st((1)).__gt((2));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testLogicKeywords",{}, smalltalk.BooleanTest)})},
args: [],
source: "testLogicKeywords\x0a\x09\x22Trivial logic table\x22\x0a\x09self \x0a\x09\x09assert: (true and: [ true]); \x0a\x09\x09deny: (true and: [ false ]); \x0a\x09\x09deny: (false and: [ true ]); \x0a\x09\x09deny: (false and: [ false ]).\x0a\x09self \x0a\x09\x09assert: (true or: [ true ]); \x0a\x09\x09assert: (true or: [ false ]); \x0a\x09\x09assert: (false or: [ true ]); \x0a\x09\x09deny: (false or: [ false ]).\x0a        \x0a\x09\x22Checking that expressions work fine too\x22\x0a\x09self \x0a\x09\x09assert: (true and: [ 1 > 0 ]); \x0a\x09\x09deny: ((1 > 0) and: [ false ]); \x0a\x09\x09deny: ((1 > 0) and: [ 1 > 2 ]).\x0a        self \x0a\x09\x09assert: (false or: [ 1 > 0 ]); \x0a\x09\x09assert: ((1 > 0) or: [ false ]); \x0a\x09\x09assert: ((1 > 0) or: [ 1 > 2 ])",
messageSends: ["assert:", "and:", "deny:", "or:", ">"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testNonBooleanError",
smalltalk.method({
selector: "testNonBooleanError",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self;
$2=(function(){
return smalltalk.withContext(function($ctx2) {if(smalltalk.assert("")){
} else {
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st($1)._should_raise_($2,(smalltalk.NonBooleanReceiver || NonBooleanReceiver));
return self}, function($ctx1) {$ctx1.fill(self,"testNonBooleanError",{}, smalltalk.BooleanTest)});},
args: [],
source: "testNonBooleanError\x0a    self should: [ '' ifTrue: [] ifFalse: [] ] raise: NonBooleanReceiver",
messageSends: ["should:raise:", "ifTrue:ifFalse:"],
referencedClasses: ["NonBooleanReceiver"]
}),
smalltalk.BooleanTest);



smalltalk.addClass('ClassBuilderTest', smalltalk.TestCase, ['builder', 'theClass'], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@builder"]=_st((smalltalk.ClassBuilder || ClassBuilder))._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{}, smalltalk.ClassBuilderTest)});},
args: [],
source: "setUp\x0a\x09builder := ClassBuilder new",
messageSends: ["new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'running',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._removeClass_(self["@theClass"]);
self["@theClass"]=nil;
self["@theClass"];
};
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{}, smalltalk.ClassBuilderTest)});},
args: [],
source: "tearDown\x0a\x09theClass ifNotNil: [Smalltalk current removeClass: theClass. theClass := nil]",
messageSends: ["ifNotNil:", "removeClass:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testClassCopy",
smalltalk.method({
selector: "testClassCopy",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=_st(self["@builder"])._copyClass_named_((smalltalk.ObjectMock || ObjectMock),"ObjectMock2");
_st(self)._assert_(_st(_st(self["@theClass"])._superclass()).__eq_eq(_st((smalltalk.ObjectMock || ObjectMock))._superclass()));
_st(self)._assert_(_st(_st(self["@theClass"])._instanceVariableNames()).__eq_eq(_st((smalltalk.ObjectMock || ObjectMock))._instanceVariableNames()));
_st(self)._assert_equals_("ObjectMock2",_st(self["@theClass"])._name());
_st(self)._assert_(_st(_st(self["@theClass"])._package()).__eq_eq(_st((smalltalk.ObjectMock || ObjectMock))._package()));
_st(self)._assert_equals_(_st(_st((smalltalk.ObjectMock || ObjectMock))._methodDictionary())._keys(),_st(_st(self["@theClass"])._methodDictionary())._keys());
return self}, function($ctx1) {$ctx1.fill(self,"testClassCopy",{}, smalltalk.ClassBuilderTest)})},
args: [],
source: "testClassCopy\x0a\x09theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09self assert: theClass superclass == ObjectMock superclass.\x0a\x09self assert: theClass instanceVariableNames == ObjectMock instanceVariableNames.\x0a\x09self assert: 'ObjectMock2' equals: theClass name.\x0a\x09self assert: theClass package == ObjectMock package.\x0a\x09self assert: ObjectMock methodDictionary keys equals: theClass methodDictionary keys",
messageSends: ["copyClass:named:", "assert:", "==", "superclass", "instanceVariableNames", "assert:equals:", "name", "package", "keys", "methodDictionary"],
referencedClasses: ["ObjectMock"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testClassMigration",
smalltalk.method({
selector: "testClassMigration",
category: 'running',
fn: function (){
var self=this;
var instance,oldClass;
return smalltalk.withContext(function($ctx1) { oldClass=_st(self["@builder"])._copyClass_named_((smalltalk.ObjectMock || ObjectMock),"ObjectMock2");
instance=_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_("ObjectMock2"))._new();
_st((smalltalk.ObjectMock || ObjectMock))._subclass_instanceVariableNames_package_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_("ObjectMock2"),"","Kernel-Tests");
_st(self)._deny_(_st(oldClass).__eq_eq((smalltalk.ObjectMock2 || ObjectMock2)));
_st(self)._assert_(_st(_st((smalltalk.ObjectMock2 || ObjectMock2))._superclass()).__eq_eq((smalltalk.ObjectMock || ObjectMock)));
_st(self)._assert_(_st(_st((smalltalk.ObjectMock2 || ObjectMock2))._instanceVariableNames())._isEmpty());
_st(self)._assert_equals_(_st(oldClass)._selectors(),_st((smalltalk.ObjectMock2 || ObjectMock2))._selectors());
_st(self)._assert_equals_(_st(oldClass)._comment(),_st((smalltalk.ObjectMock2 || ObjectMock2))._comment());
_st(self)._assert_equals_("Kernel-Tests",_st(_st((smalltalk.ObjectMock2 || ObjectMock2))._package())._name());
_st(self)._deny_(_st(_st(instance)._class()).__eq_eq((smalltalk.ObjectMock2 || ObjectMock2)));
_st(self)._assert_equals_("OldObjectMock2",_st(_st(instance)._class())._name());
_st(self)._assert_(_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_("OldObjectMock2"))._isNil());
_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._removeClass_((smalltalk.ObjectMock2 || ObjectMock2));
return self}, function($ctx1) {$ctx1.fill(self,"testClassMigration",{instance:instance,oldClass:oldClass}, smalltalk.ClassBuilderTest)})},
args: [],
source: "testClassMigration\x0a\x09| instance oldClass |\x0a    \x0a    oldClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a    instance := (Smalltalk  current at: 'ObjectMock2') new.\x0a    \x0a    \x22Change the superclass of ObjectMock2\x22\x0a    ObjectMock subclass: (Smalltalk current at: 'ObjectMock2')\x0a    \x09instanceVariableNames: ''\x0a        package: 'Kernel-Tests'.\x0a    \x0a    self deny: oldClass == ObjectMock2.\x0a    \x0a\x09self assert: ObjectMock2 superclass == ObjectMock.\x0a\x09self assert: ObjectMock2 instanceVariableNames isEmpty.\x0a\x09self assert: oldClass selectors equals: ObjectMock2 selectors.\x0a    self assert: oldClass comment equals: ObjectMock2 comment.\x0a    self assert: 'Kernel-Tests' equals: ObjectMock2 package name.\x0a    \x0a\x09self deny: instance class == ObjectMock2.\x0a    self assert: 'OldObjectMock2' equals: instance class name.\x0a    \x0a    self assert: (Smalltalk current at: 'OldObjectMock2') isNil.\x0a    \x0a    Smalltalk current removeClass: ObjectMock2",
messageSends: ["copyClass:named:", "new", "at:", "current", "subclass:instanceVariableNames:package:", "deny:", "==", "assert:", "superclass", "isEmpty", "instanceVariableNames", "assert:equals:", "selectors", "comment", "name", "package", "class", "isNil", "removeClass:"],
referencedClasses: ["ObjectMock", "Smalltalk", "ObjectMock2"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testClassMigrationWithClassInstanceVariables",
smalltalk.method({
selector: "testClassMigrationWithClassInstanceVariables",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@builder"])._copyClass_named_((smalltalk.ObjectMock || ObjectMock),"ObjectMock2");
_st(_st((smalltalk.ObjectMock2 || ObjectMock2))._class())._instanceVariableNames_("foo bar");
_st((smalltalk.ObjectMock || ObjectMock))._subclass_instanceVariableNames_package_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_("ObjectMock2"),"","Kernel-Tests");
_st(self)._assert_equals_(["foo", "bar"],_st(_st((smalltalk.ObjectMock2 || ObjectMock2))._class())._instanceVariableNames());
_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._removeClass_((smalltalk.ObjectMock2 || ObjectMock2));
return self}, function($ctx1) {$ctx1.fill(self,"testClassMigrationWithClassInstanceVariables",{}, smalltalk.ClassBuilderTest)})},
args: [],
source: "testClassMigrationWithClassInstanceVariables\x0a    \x0a    builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a    ObjectMock2 class instanceVariableNames: 'foo bar'.\x0a    \x0a    \x22Change the superclass of ObjectMock2\x22\x0a    ObjectMock subclass: (Smalltalk current at: 'ObjectMock2')\x0a    \x09instanceVariableNames: ''\x0a        package: 'Kernel-Tests'.\x0a    \x0a    self assert: #('foo' 'bar') equals: ObjectMock2 class instanceVariableNames.\x0a    \x0a    Smalltalk current removeClass: ObjectMock2",
messageSends: ["copyClass:named:", "instanceVariableNames:", "class", "subclass:instanceVariableNames:package:", "at:", "current", "assert:equals:", "instanceVariableNames", "removeClass:"],
referencedClasses: ["ObjectMock", "ObjectMock2", "Smalltalk"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testClassMigrationWithSubclasses",
smalltalk.method({
selector: "testClassMigrationWithSubclasses",
category: 'running',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@builder"])._copyClass_named_((smalltalk.ObjectMock || ObjectMock),"ObjectMock2");
_st((smalltalk.ObjectMock2 || ObjectMock2))._subclass_instanceVariableNames_package_("ObjectMock3","","Kernel-Tests");
_st((smalltalk.ObjectMock3 || ObjectMock3))._subclass_instanceVariableNames_package_("ObjectMock4","","Kernel-Tests");
_st((smalltalk.ObjectMock || ObjectMock))._subclass_instanceVariableNames_package_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_("ObjectMock2"),"","Kernel-Tests");
_st(self)._assert_(_st(_st((smalltalk.ObjectMock || ObjectMock))._subclasses())._includes_((smalltalk.ObjectMock2 || ObjectMock2)));
_st(self)._assert_(_st(_st((smalltalk.ObjectMock2 || ObjectMock2))._subclasses())._includes_((smalltalk.ObjectMock3 || ObjectMock3)));
_st(self)._assert_(_st(_st((smalltalk.ObjectMock3 || ObjectMock3))._subclasses())._includes_((smalltalk.ObjectMock4 || ObjectMock4)));
_st(_st((smalltalk.ObjectMock || ObjectMock))._allSubclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.Smalltalk || Smalltalk))._current())._removeClass_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testClassMigrationWithSubclasses",{}, smalltalk.ClassBuilderTest)});},
args: [],
source: "testClassMigrationWithSubclasses\x0a    \x0a    builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a    ObjectMock2 subclass: 'ObjectMock3' instanceVariableNames: '' package: 'Kernel-Tests'.\x0a    ObjectMock3 subclass: 'ObjectMock4' instanceVariableNames: '' package: 'Kernel-Tests'.\x0a    \x0a    \x22Change the superclass of ObjectMock2\x22\x0a    ObjectMock subclass: (Smalltalk current at: 'ObjectMock2')\x0a    \x09instanceVariableNames: ''\x0a        package: 'Kernel-Tests'.\x0a    \x0a    self assert: (ObjectMock subclasses includes: ObjectMock2).\x0a    self assert: (ObjectMock2 subclasses includes: ObjectMock3).\x0a    self assert: (ObjectMock3 subclasses includes: ObjectMock4).\x0a    \x0a    ObjectMock allSubclasses do: [ :each | Smalltalk current removeClass: each ]",
messageSends: ["copyClass:named:", "subclass:instanceVariableNames:package:", "at:", "current", "assert:", "includes:", "subclasses", "do:", "removeClass:", "allSubclasses"],
referencedClasses: ["ObjectMock", "ObjectMock2", "ObjectMock3", "Smalltalk", "ObjectMock4"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testInstanceVariableNames",
smalltalk.method({
selector: "testInstanceVariableNames",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(["hello", "world"],_st(self["@builder"])._instanceVariableNamesFor_("  hello   world   "));
return self}, function($ctx1) {$ctx1.fill(self,"testInstanceVariableNames",{}, smalltalk.ClassBuilderTest)})},
args: [],
source: "testInstanceVariableNames\x0a\x09self assert: #('hello' 'world') equals: (builder instanceVariableNamesFor: '  hello   world   ')",
messageSends: ["assert:equals:", "instanceVariableNamesFor:"],
referencedClasses: []
}),
smalltalk.ClassBuilderTest);



smalltalk.addClass('CollectionTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_assertSameContents_as_",
smalltalk.method({
selector: "assertSameContents:as:",
category: 'convenience',
fn: function (aCollection, anotherCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st(aCollection)._size()).__eq(_st(anotherCollection)._size()));
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._assert_(_st(_st(aCollection)._occurrencesOf_(each)).__eq(_st(anotherCollection)._occurrencesOf_(each)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"assertSameContents:as:",{aCollection:aCollection,anotherCollection:anotherCollection}, smalltalk.CollectionTest)});},
args: ["aCollection", "anotherCollection"],
source: "assertSameContents: aCollection \x09as: anotherCollection\x0a\x09self assert: aCollection size = anotherCollection size.\x0a\x09aCollection do: [ :each |\x0a\x09\x09self assert: (aCollection occurrencesOf: each) = (anotherCollection occurrencesOf: each) ]",
messageSends: ["assert:", "=", "size", "do:", "occurrencesOf:"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._collectionClass())._withAll_(_st(self)._defaultValues());
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{}, smalltalk.CollectionTest)});},
args: [],
source: "collection\x0a\x09^ self collectionClass withAll: self defaultValues",
messageSends: ["withAll:", "defaultValues", "collectionClass"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._collectionClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{}, smalltalk.CollectionTest)});},
args: [],
source: "collectionClass\x0a\x09^ self class collectionClass",
messageSends: ["collectionClass", "class"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._collectionClass())._withAll_(["a", "b", "c", (1), (2), (1), "a"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{}, smalltalk.CollectionTest)});},
args: [],
source: "collectionWithDuplicates\x0a\x09^ self collectionClass withAll: #('a' 'b' 'c' 1 2 1 'a')",
messageSends: ["withAll:", "collectionClass"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_defaultValues",
smalltalk.method({
selector: "defaultValues",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return [(1), (2), (3), (-4)];
}, function($ctx1) {$ctx1.fill(self,"defaultValues",{}, smalltalk.CollectionTest)});},
args: [],
source: "defaultValues\x0a\x09^ #(1 2 3 -4)",
messageSends: [],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_isCollectionReadOnly",
smalltalk.method({
selector: "isCollectionReadOnly",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isCollectionReadOnly",{}, smalltalk.CollectionTest)});},
args: [],
source: "isCollectionReadOnly\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsArray",
smalltalk.method({
selector: "testAsArray",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assertSameContents_as_(_st(self)._collection(),_st(_st(self)._collection())._asArray());
return self}, function($ctx1) {$ctx1.fill(self,"testAsArray",{}, smalltalk.CollectionTest)});},
args: [],
source: "testAsArray\x0a\x09self \x0a\x09\x09assertSameContents: self collection \x0a\x09\x09as: self collection asArray",
messageSends: ["assertSameContents:as:", "collection", "asArray"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsOrderedCollection",
smalltalk.method({
selector: "testAsOrderedCollection",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assertSameContents_as_(_st(self)._collection(),_st(_st(self)._collection())._asOrderedCollection());
return self}, function($ctx1) {$ctx1.fill(self,"testAsOrderedCollection",{}, smalltalk.CollectionTest)});},
args: [],
source: "testAsOrderedCollection\x0a\x09self \x0a\x09\x09assertSameContents: self collection \x0a\x09\x09as: self collection asOrderedCollection",
messageSends: ["assertSameContents:as:", "collection", "asOrderedCollection"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsSet",
smalltalk.method({
selector: "testAsSet",
category: 'tests',
fn: function () {
var self=this;
var c,set;
return smalltalk.withContext(function($ctx1) { c=_st(self)._collectionWithDuplicates();
set=_st(c)._asSet();
_st(self)._assert_(_st(_st(set)._size()).__eq((5)));
_st(c)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._assert_(_st(set)._includes_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testAsSet",{c:c,set:set}, smalltalk.CollectionTest)});},
args: [],
source: "testAsSet\x0a\x09| c set |\x0a\x09c := self collectionWithDuplicates.\x0a\x09set := c asSet.\x0a\x09self assert: set size = 5.\x0a\x09c do: [ :each |\x0a\x09\x09self assert: (set includes: each) ]",
messageSends: ["collectionWithDuplicates", "asSet", "assert:", "=", "size", "do:", "includes:"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
category: 'tests',
fn: function () {
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection=[(1), (2), (3), (4)];
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._abs();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{newCollection:newCollection}, smalltalk.CollectionTest)});},
args: [],
source: "testCollect\x0a\x09| newCollection |\x0a\x09newCollection :=  #(1 2 3 4).\x0a\x09self \x0a\x09\x09assertSameContents: (self collection collect: [ :each |\x0a\x09\x09\x09each abs ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "collect:", "abs", "collection"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((-4),_st(_st(self)._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__lt((0));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(each).__eq((6));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testDetect",{}, smalltalk.CollectionTest)})},
args: [],
source: "testDetect\x0a\x09self assert: -4 equals: (self collection detect: [ :each | each < 0 ]).\x0a\x09self \x0a\x09\x09should: [ self collection detect: [ :each | each = 6 ] ]\x0a\x09\x09raise: Error",
messageSends: ["assert:equals:", "detect:", "<", "collection", "should:raise:", "="],
referencedClasses: ["Error"]
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testDo",
smalltalk.method({
selector: "testDo",
category: 'tests',
fn: function () {
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
_st(_st(self)._collection())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(newCollection)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._assertSameContents_as_(_st(self)._collection(),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testDo",{newCollection:newCollection}, smalltalk.CollectionTest)});},
args: [],
source: "testDo\x0a\x09| newCollection |\x0a\x09newCollection := OrderedCollection new.\x0a\x09self collection do: [ :each |\x0a\x09\x09newCollection add: each ].\x0a\x09self \x0a\x09\x09assertSameContents: self collection \x0a\x09\x09as: newCollection",
messageSends: ["new", "do:", "add:", "collection", "assertSameContents:as:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testIsEmpty",
smalltalk.method({
selector: "testIsEmpty",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st(_st(self)._collectionClass())._new())._isEmpty());
_st(self)._deny_(_st(_st(self)._collection())._isEmpty());
return self}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{}, smalltalk.CollectionTest)});},
args: [],
source: "testIsEmpty\x0a\x09self assert: self collectionClass new isEmpty.\x0a\x09self deny: self collection isEmpty",
messageSends: ["assert:", "isEmpty", "new", "collectionClass", "deny:", "collection"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
category: 'tests',
fn: function () {
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection=[(2), (-4)];
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._even();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testSelect",{newCollection:newCollection}, smalltalk.CollectionTest)});},
args: [],
source: "testSelect\x0a\x09| newCollection |\x0a\x09newCollection := #(2 -4).\x0a\x09self \x0a\x09\x09assertSameContents: (self collection select: [ :each |\x0a\x09\x09\x09each even ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "select:", "even", "collection"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((0),_st(_st(_st(self)._collectionClass())._new())._size());
_st(self)._assert_equals_((4),_st(_st(self)._collection())._size());
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{}, smalltalk.CollectionTest)})},
args: [],
source: "testSize\x0a\x09self assert: 0 equals: self collectionClass new size.\x0a\x09self assert: 4 equals: self collection size",
messageSends: ["assert:equals:", "size", "new", "collectionClass", "collection"],
referencedClasses: []
}),
smalltalk.CollectionTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return nil;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{}, smalltalk.CollectionTest.klass)});},
args: [],
source: "collectionClass\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.CollectionTest.klass);

smalltalk.addMethod(
"_isAbstract",
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._collectionClass())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{}, smalltalk.CollectionTest.klass)});},
args: [],
source: "isAbstract\x0a\x09^ self collectionClass isNil",
messageSends: ["isNil", "collectionClass"],
referencedClasses: []
}),
smalltalk.CollectionTest.klass);


smalltalk.addClass('HashedCollectionTest', smalltalk.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("a").__minus_gt((1)),_st("b").__minus_gt((2)),_st("c").__minus_gt((3)),_st("d").__minus_gt((-4))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{}, smalltalk.HashedCollectionTest)});},
args: [],
source: "collection\x0a\x09^ #{ 'a' -> 1. 'b' -> 2. 'c' -> 3. 'd' -> -4 }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("a").__minus_gt((1)),_st("b").__minus_gt((2)),_st("c").__minus_gt((3)),_st("d").__minus_gt((-4)),_st("e").__minus_gt((1)),_st("f").__minus_gt((2)),_st("g").__minus_gt((10))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{}, smalltalk.HashedCollectionTest)});},
args: [],
source: "collectionWithDuplicates\x0a\x09^ #{ 'a' -> 1. 'b' -> 2. 'c' -> 3. 'd' -> -4. 'e' -> 1. 'f' -> 2. 'g' -> 10 }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.HashedCollectionTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.HashedCollection || HashedCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{}, smalltalk.HashedCollectionTest.klass)});},
args: [],
source: "collectionClass\x0a\x09^ HashedCollection",
messageSends: [],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HashedCollectionTest.klass);


smalltalk.addClass('DictionaryTest', smalltalk.HashedCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.Dictionary || Dictionary))._new();
_st($2)._at_put_((1),(1));
_st($2)._at_put_("a",(2));
_st($2)._at_put_(true,(3));
_st($2)._at_put_((4),(-4));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{}, smalltalk.DictionaryTest)});},
args: [],
source: "collection\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 4 put: -4;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.Dictionary || Dictionary))._new();
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
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{}, smalltalk.DictionaryTest)});},
args: [],
source: "collectionWithDuplicates\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 4 put: -4;\x0a\x09\x09at: 'b' put: 1;\x0a\x09\x09at: 3 put: 3;\x0a\x09\x09at: false put: 12;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testAccessing",
smalltalk.method({
selector: "testAccessing",
category: 'tests',
fn: function (){
var self=this;
var d;
return smalltalk.withContext(function($ctx1) { d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_("hello","world");
_st(self)._assert_equals_("world",_st(d)._at_("hello"));
_st(self)._assert_equals_("world",_st(d)._at_ifAbsent_("hello",(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st(self)._deny_(_st("world").__eq_eq(_st(d)._at_ifAbsent_("foo",(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))));
_st(d)._at_put_((1),(2));
_st(self)._assert_equals_((2),_st(d)._at_((1)));
_st(d)._at_put_(_st((1)).__at((3)),(3));
_st(self)._assert_equals_((3),_st(d)._at_(_st((1)).__at((3))));
return self}, function($ctx1) {$ctx1.fill(self,"testAccessing",{d:d}, smalltalk.DictionaryTest)})},
args: [],
source: "testAccessing\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x0a\x09d at: 'hello' put: 'world'.\x0a\x09self assert: 'world' equals: (d at: 'hello').\x0a\x09self assert: 'world' equals: (d at: 'hello' ifAbsent: [nil]).\x0a\x09self deny: 'world' == (d at: 'foo' ifAbsent: [nil]).\x0a\x0a\x09d at: 1 put: 2.\x0a\x09self assert: 2 equals: (d at: 1).\x0a\x0a\x09d at: 1@3 put: 3.\x0a\x09self assert: 3 equals: (d at: 1@3)",
messageSends: ["new", "at:put:", "assert:equals:", "at:", "at:ifAbsent:", "deny:", "==", "@"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testDynamicDictionaries",
smalltalk.method({
selector: "testDynamicDictionaries",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st(smalltalk.HashedCollection._fromPairs_([_st("hello").__minus_gt((1))]))._asDictionary()).__eq(_st((smalltalk.Dictionary || Dictionary))._with_(_st("hello").__minus_gt((1)))));
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaries",{}, smalltalk.DictionaryTest)});},
args: [],
source: "testDynamicDictionaries\x0a\x09self assert: #{'hello' -> 1} asDictionary = (Dictionary with: 'hello' -> 1)",
messageSends: ["assert:", "=", "with:", "->", "asDictionary"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function () {
var self=this;
var d1,d2;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
_st(self)._assert_(_st(_st((smalltalk.Dictionary || Dictionary))._new()).__eq(_st((smalltalk.Dictionary || Dictionary))._new()));
$1=_st((smalltalk.Dictionary || Dictionary))._new();
_st($1)._at_put_((1),(2));
$2=_st($1)._yourself();
d1=$2;
$3=_st((smalltalk.Dictionary || Dictionary))._new();
_st($3)._at_put_((1),(2));
$4=_st($3)._yourself();
d2=$4;
_st(self)._assert_(_st(d1).__eq(d2));
$5=_st((smalltalk.Dictionary || Dictionary))._new();
_st($5)._at_put_((1),(3));
$6=_st($5)._yourself();
d2=$6;
_st(self)._deny_(_st(d1).__eq(d2));
$7=_st((smalltalk.Dictionary || Dictionary))._new();
_st($7)._at_put_((2),(2));
$8=_st($7)._yourself();
d2=$8;
_st(self)._deny_(_st(d1).__eq(d2));
$9=_st((smalltalk.Dictionary || Dictionary))._new();
_st($9)._at_put_((1),(2));
_st($9)._at_put_((3),(4));
$10=_st($9)._yourself();
d2=$10;
_st(self)._deny_(_st(d1).__eq(d2));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{d1:d1,d2:d2}, smalltalk.DictionaryTest)});},
args: [],
source: "testEquality\x0a\x09| d1 d2 |\x0a\x0a\x09self assert: Dictionary new = Dictionary new.\x0a\x09\x09\x0a\x09d1 := Dictionary new at: 1 put: 2; yourself.\x0a\x09d2 := Dictionary new at: 1 put: 2; yourself.\x0a\x09self assert: d1 = d2.\x0a\x0a\x09d2 := Dictionary new at: 1 put: 3; yourself.\x0a\x09self deny: d1 = d2.\x0a\x0a\x09d2 := Dictionary new at: 2 put: 2; yourself.\x0a\x09self deny: d1 = d2.\x0a\x0a\x09d2 := Dictionary new at: 1 put: 2; at: 3 put: 4; yourself.\x0a\x09self deny: d1 = d2.",
messageSends: ["assert:", "=", "new", "at:put:", "yourself", "deny:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfAbsent",
smalltalk.method({
selector: "testIfAbsent",
category: 'tests',
fn: function () {
var self=this;
var d,visited;
return smalltalk.withContext(function($ctx1) { visited=false;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_ifAbsent_("hello",(function(){
return smalltalk.withContext(function($ctx2) {visited=true;
return visited;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._assert_(visited);
return self}, function($ctx1) {$ctx1.fill(self,"testIfAbsent",{d:d,visited:visited}, smalltalk.DictionaryTest)});},
args: [],
source: "testIfAbsent\x0a\x0a\x09| d visited |\x0a\x09visited := false.\x0a\x09d := Dictionary new.\x0a\x0a\x09d at: 'hello' ifAbsent: [ visited := true ].\x0a\x09self assert: visited.",
messageSends: ["new", "at:ifAbsent:", "assert:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfPresent",
smalltalk.method({
selector: "testIfPresent",
category: 'tests',
fn: function () {
var self=this;
var d,visited,absent;
return smalltalk.withContext(function($ctx1) { visited=false;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_("hello","world");
_st(d)._at_ifPresent_("hello",(function(value){
return smalltalk.withContext(function($ctx2) {visited=value;
return visited;
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
_st(self)._assert_(_st(visited).__eq("world"));
absent=_st(d)._at_ifPresent_("bye",(function(value){
return smalltalk.withContext(function($ctx2) {visited=value;
return visited;
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
_st(self)._assert_(_st(absent)._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testIfPresent",{d:d,visited:visited,absent:absent}, smalltalk.DictionaryTest)});},
args: [],
source: "testIfPresent\x0a\x0a\x09| d visited absent |\x0a\x09visited := false.\x0a\x09d := Dictionary new.\x0a\x09d at: 'hello' put: 'world'.\x0a\x0a\x09d at: 'hello' ifPresent: [ :value | visited := value ].\x0a\x09self assert: visited = 'world'.\x0a\x0a\x09absent := d at: 'bye' ifPresent: [ :value | visited := value ].\x0a\x09self assert: absent isNil.",
messageSends: ["new", "at:put:", "at:ifPresent:", "assert:", "=", "isNil"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfPresentIfAbsent",
smalltalk.method({
selector: "testIfPresentIfAbsent",
category: 'tests',
fn: function () {
var self=this;
var d,visited;
return smalltalk.withContext(function($ctx1) { visited=false;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_("hello","world");
_st(d)._at_ifPresent_ifAbsent_("hello",(function(value){
return smalltalk.withContext(function($ctx2) {visited=value;
return visited;
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {visited=true;
return visited;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._assert_(_st(visited).__eq("world"));
_st(d)._at_ifPresent_ifAbsent_("buy",(function(value){
return smalltalk.withContext(function($ctx2) {visited=value;
return visited;
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {visited=true;
return visited;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._assert_(visited);
return self}, function($ctx1) {$ctx1.fill(self,"testIfPresentIfAbsent",{d:d,visited:visited}, smalltalk.DictionaryTest)});},
args: [],
source: "testIfPresentIfAbsent\x0a\x0a\x09| d visited |\x0a\x09visited := false.\x0a\x09d := Dictionary new.\x0a\x09d at: 'hello' put: 'world'.\x0a\x0a\x09d at: 'hello' ifPresent: [ :value | visited := value ] ifAbsent: [ visited := true ].\x0a\x09self assert: visited = 'world'.\x0a\x0a\x09d at: 'buy' ifPresent: [ :value | visited := value ] ifAbsent: [ visited := true ].\x0a\x09self assert: visited.",
messageSends: ["new", "at:put:", "at:ifPresent:ifAbsent:", "assert:", "="],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testKeys",
smalltalk.method({
selector: "testKeys",
category: 'tests',
fn: function () {
var self=this;
var d;
return smalltalk.withContext(function($ctx1) { d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
_st(self)._assert_(_st(_st(d)._keys()).__eq([(1), (2), (3)]));
return self}, function($ctx1) {$ctx1.fill(self,"testKeys",{d:d}, smalltalk.DictionaryTest)});},
args: [],
source: "testKeys\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x09d at: 1 put: 2.\x0a\x09d at: 2 put: 3.\x0a\x09d at: 3 put: 4.\x0a\x0a\x09self assert: d keys = #(1 2 3)",
messageSends: ["new", "at:put:", "assert:", "=", "keys"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.Dictionary || Dictionary))._new();
_st($1)._at_put_("firstname","James");
_st($1)._at_put_("lastname","Bond");
$2=_st($1)._printString();
_st(self)._assert_equals_("a Dictionary('firstname'->'James' , 'lastname'->'Bond')",$2);
return self}, function($ctx1) {$ctx1.fill(self,"testPrintString",{}, smalltalk.DictionaryTest)});},
args: [],
source: "testPrintString\x0a\x09self\x0a\x09\x09assert: 'a Dictionary(''firstname''->''James'' , ''lastname''->''Bond'')' \x0a\x09\x09equals: (Dictionary new \x0a                         \x09at:'firstname' put: 'James';\x0a                        \x09at:'lastname' put: 'Bond';\x0a                        \x09printString)",
messageSends: ["assert:equals:", "at:put:", "new", "printString"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testRemoveKey",
smalltalk.method({
selector: "testRemoveKey",
category: 'tests',
fn: function () {
var self=this;
var d,key;
return smalltalk.withContext(function($ctx1) { d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
key=(2);
_st(self)._assert_(_st(_st(d)._keys()).__eq([(1), (2), (3)]));
_st(d)._removeKey_(key);
_st(self)._assert_(_st(_st(d)._keys()).__eq([(1), (3)]));
_st(self)._assert_(_st(_st(d)._values()).__eq([(2), (4)]));
_st(self)._deny_(_st(d)._includesKey_((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveKey",{d:d,key:key}, smalltalk.DictionaryTest)});},
args: [],
source: "testRemoveKey\x0a    | d key |\x0a\x0a    d := Dictionary new.\x0a    d at: 1 put: 2.\x0a    d at: 2 put: 3.\x0a    d at: 3 put: 4.\x0a\x0a    key := 2.\x0a\x0a    self assert: d keys = #(1 2 3).\x0a\x0a    d removeKey: key.\x0a    self assert: d keys = #(1 3).\x0a    self assert: d values = #(2 4).\x0a    self deny: (d includesKey: 2)",
messageSends: ["new", "at:put:", "assert:", "=", "keys", "removeKey:", "values", "deny:", "includesKey:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testRemoveKeyIfAbsent",
smalltalk.method({
selector: "testRemoveKeyIfAbsent",
category: 'tests',
fn: function (){
var self=this;
var d,key;
return smalltalk.withContext(function($ctx1) { d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
key=(2);
_st(self)._assert_equals_((3),_st(d)._removeKey_(key));
key=(3);
_st(self)._assert_equals_((4),_st(d)._removeKey_ifAbsent_(key,(function(){
return smalltalk.withContext(function($ctx2) {return (42);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
key="why";
_st(self)._assert_equals_((42),_st(d)._removeKey_ifAbsent_(key,(function(){
return smalltalk.withContext(function($ctx2) {return (42);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveKeyIfAbsent",{d:d,key:key}, smalltalk.DictionaryTest)})},
args: [],
source: "testRemoveKeyIfAbsent\x0a    | d key |\x0a\x0a    d := Dictionary new.\x0a    d at: 1 put: 2.\x0a    d at: 2 put: 3.\x0a    d at: 3 put: 4.\x0a\x0a    key := 2.\x0a    self assert: 3 equals: (d removeKey: key).\x0a\x0a    key := 3.\x0a    self assert: 4 equals: (d removeKey: key ifAbsent: [42]).\x0a\x0a    key := 'why'.\x0a    self assert: 42 equals: (d removeKey: key ifAbsent: [42] ).",
messageSends: ["new", "at:put:", "assert:equals:", "removeKey:", "removeKey:ifAbsent:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function (){
var self=this;
var d;
return smalltalk.withContext(function($ctx1) { d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(self)._assert_equals_((0),_st(d)._size());
_st(d)._at_put_((1),(2));
_st(self)._assert_equals_((1),_st(d)._size());
_st(d)._at_put_((2),(3));
_st(self)._assert_equals_((2),_st(d)._size());
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{d:d}, smalltalk.DictionaryTest)})},
args: [],
source: "testSize\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x09self assert: 0 equals: d size.\x0a\x0a\x09d at: 1 put: 2.\x0a\x09self assert: 1 equals: d size.\x0a\x0a\x09d at: 2 put: 3.\x0a\x09self assert: 2 equals: d size.",
messageSends: ["new", "assert:equals:", "size", "at:put:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testValues",
smalltalk.method({
selector: "testValues",
category: 'tests',
fn: function (){
var self=this;
var d;
return smalltalk.withContext(function($ctx1) { d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
_st(self)._assert_equals_([(2), (3), (4)],_st(d)._values());
return self}, function($ctx1) {$ctx1.fill(self,"testValues",{d:d}, smalltalk.DictionaryTest)})},
args: [],
source: "testValues\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x09d at: 1 put: 2.\x0a\x09d at: 2 put: 3.\x0a\x09d at: 3 put: 4.\x0a\x0a\x09self assert: #(2 3 4) equals: d values",
messageSends: ["new", "at:put:", "assert:equals:", "values"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.Dictionary || Dictionary);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{}, smalltalk.DictionaryTest.klass)});},
args: [],
source: "collectionClass\x0a\x09^ Dictionary",
messageSends: [],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest.klass);


smalltalk.addClass('SequenceableCollectionTest', smalltalk.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((-4),_st(_st(self)._collection())._at_((4)));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._collection())._at_((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{}, smalltalk.SequenceableCollectionTest)})},
args: [],
source: "testAt\x0a\x09self assert: -4 equals: (self collection at: 4).\x0a\x09self should: [ self collection at: 5 ] raise: Error",
messageSends: ["assert:equals:", "at:", "collection", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.SequenceableCollectionTest);

smalltalk.addMethod(
"_testAtIfAbsent",
smalltalk.method({
selector: "testAtIfAbsent",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("none",_st(_st(self)._collection())._at_ifAbsent_(_st(_st(_st(self)._collection())._size()).__plus((1)),(function(){
return smalltalk.withContext(function($ctx2) {return "none";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{}, smalltalk.SequenceableCollectionTest)})},
args: [],
source: "testAtIfAbsent\x0a\x09self assert: 'none' equals: (self collection at: (self collection size + 1) ifAbsent: [ 'none' ])",
messageSends: ["assert:equals:", "at:ifAbsent:", "+", "size", "collection"],
referencedClasses: []
}),
smalltalk.SequenceableCollectionTest);



smalltalk.addClass('ArrayTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAtIfAbsent",
smalltalk.method({
selector: "testAtIfAbsent",
category: 'testing',
fn: function (){
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { array=["hello", "world"];
_st(self)._assert_equals_("hello",_st(array)._at_((1)));
_st(self)._assert_equals_("world",_st(array)._at_((2)));
_st(self)._assert_equals_("world",_st(array)._at_ifAbsent_((2),(function(){
return smalltalk.withContext(function($ctx2) {return "not found";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st(self)._assert_equals_("not found",_st(array)._at_ifAbsent_((0),(function(){
return smalltalk.withContext(function($ctx2) {return "not found";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st(self)._assert_equals_("not found",_st(array)._at_ifAbsent_((-10),(function(){
return smalltalk.withContext(function($ctx2) {return "not found";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st(self)._assert_equals_("not found",_st(array)._at_ifAbsent_((3),(function(){
return smalltalk.withContext(function($ctx2) {return "not found";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{array:array}, smalltalk.ArrayTest)})},
args: [],
source: "testAtIfAbsent\x0a\x09| array |\x0a\x09array := #('hello' 'world').\x0a\x09self assert: 'hello' equals: (array at: 1).\x0a\x09self assert: 'world' equals: (array at: 2).\x0a\x09self assert: 'world' equals: (array at: 2 ifAbsent: ['not found']).\x0a\x09self assert: 'not found' equals: (array at: 0 ifAbsent: ['not found']).\x0a\x09self assert: 'not found' equals: (array at: -10 ifAbsent: ['not found']).\x0a\x09self assert: 'not found' equals: (array at: 3 ifAbsent: ['not found']).",
messageSends: ["assert:equals:", "at:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testFirstN",
smalltalk.method({
selector: "testFirstN",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_([(1),(2),(3)],_st([(1),(2),(3),(4),(5)])._first_((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testFirstN",{}, smalltalk.ArrayTest)});},
args: [],
source: "testFirstN\x0a\x09self assert: {1. 2. 3} equals: ({1. 2. 3. 4. 5} first: 3).",
messageSends: ["assert:equals:", "first:"],
referencedClasses: []
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testIfEmpty",
smalltalk.method({
selector: "testIfEmpty",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("zork",_st("")._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {return "zork";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testIfEmpty",{}, smalltalk.ArrayTest)});},
args: [],
source: "testIfEmpty\x0a\x09self assert: 'zork' equals: ( '' ifEmpty: ['zork'] )",
messageSends: ["assert:equals:", "ifEmpty:"],
referencedClasses: []
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
category: 'testing',
fn: function () {
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
array=_st((smalltalk.Array || Array))._new();
_st(self)._assert_equals_("a Array ()",_st(array)._printString());
$1=array;
_st($1)._add_((1));
$2=_st($1)._add_((3));
_st(self)._assert_equals_("a Array (1 3)",_st(array)._printString());
_st(array)._add_("foo");
_st(self)._assert_equals_("a Array (1 3 'foo')",_st(array)._printString());
$3=array;
_st($3)._remove_((1));
$4=_st($3)._remove_((3));
_st(self)._assert_equals_("a Array ('foo')",_st(array)._printString());
_st(array)._addLast_((3));
_st(self)._assert_equals_("a Array ('foo' 3)",_st(array)._printString());
_st(array)._addLast_((3));
_st(self)._assert_equals_("a Array ('foo' 3 3)",_st(array)._printString());
return self}, function($ctx1) {$ctx1.fill(self,"testPrintString",{array:array}, smalltalk.ArrayTest)});},
args: [],
source: "testPrintString\x0a\x09| array |\x0a\x09array := Array new.\x0a\x09self assert: 'a Array ()' equals: ( array printString ).\x0a\x09array add: 1; add: 3.\x0a\x09self assert: 'a Array (1 3)' equals: ( array printString ).\x0a\x09array add: 'foo'.\x0a\x09self assert: 'a Array (1 3 ''foo'')' equals: ( array printString ).\x0a\x09array remove: 1; remove: 3.\x0a\x09self assert: 'a Array (''foo'')' equals: ( array printString ).\x0a\x09array addLast: 3.\x0a\x09self assert: 'a Array (''foo'' 3)' equals: ( array printString ).\x0a\x09array addLast: 3.\x0a\x09self assert: 'a Array (''foo'' 3 3)' equals: ( array printString ).",
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:", "addLast:"],
referencedClasses: ["Array"]
}),
smalltalk.ArrayTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.Array || Array);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{}, smalltalk.ArrayTest.klass)});},
args: [],
source: "collectionClass\x0a\x09^ Array",
messageSends: [],
referencedClasses: ["Array"]
}),
smalltalk.ArrayTest.klass);


smalltalk.addClass('StringTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return "hello";
}, function($ctx1) {$ctx1.fill(self,"collection",{}, smalltalk.StringTest)});},
args: [],
source: "collection\x0a\x09^'hello'",
messageSends: [],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return "abbaerte";
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{}, smalltalk.StringTest)});},
args: [],
source: "collectionWithDuplicates\x0a\x09^ 'abbaerte'",
messageSends: [],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAddRemove",
smalltalk.method({
selector: "testAddRemove",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st("hello")._add_("a");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st("hello")._remove_("h");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testAddRemove",{}, smalltalk.StringTest)});},
args: [],
source: "testAddRemove\x0a\x09self should: ['hello' add: 'a'] raise: Error.\x0a\x09self should: ['hello' remove: 'h'] raise: Error",
messageSends: ["should:raise:", "add:", "remove:"],
referencedClasses: ["Error"]
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAsArray",
smalltalk.method({
selector: "testAsArray",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(["h", "e", "l", "l", "o"],_st("hello")._asArray());
return self}, function($ctx1) {$ctx1.fill(self,"testAsArray",{}, smalltalk.StringTest)})},
args: [],
source: "testAsArray\x0a\x09self assert: #('h' 'e' 'l' 'l' 'o') equals: 'hello' asArray.",
messageSends: ["assert:equals:", "asArray"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("h",_st("hello")._at_((1)));
_st(self)._assert_equals_("o",_st("hello")._at_((5)));
_st(self)._assert_equals_(nil,_st("hello")._at_ifAbsent_((6),(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{}, smalltalk.StringTest)})},
args: [],
source: "testAt\x0a\x09self assert: 'h' equals: ('hello' at: 1).\x0a\x09self assert: 'o' equals: ('hello' at: 5).\x0a\x09self assert: nil equals: ('hello' at: 6 ifAbsent: [nil])",
messageSends: ["assert:equals:", "at:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAtPut",
smalltalk.method({
selector: "testAtPut",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st("hello")._at_put_((1),"a");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testAtPut",{}, smalltalk.StringTest)});},
args: [],
source: "testAtPut\x0a\x09\x22String instances are read-only\x22\x0a\x09self should: ['hello' at: 1 put: 'a'] raise: Error",
messageSends: ["should:raise:", "at:put:"],
referencedClasses: ["Error"]
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
category: 'tests',
fn: function () {
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection="hheelllloo";
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__comma(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{newCollection:newCollection}, smalltalk.StringTest)});},
args: [],
source: "testCollect\x0a\x09| newCollection |\x0a\x09newCollection := 'hheelllloo'.\x0a\x09self \x0a\x09\x09assertSameContents: (self collection collect: [ :each |\x0a\x09\x09\x09each, each ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "collect:", ",", "collection"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testCopyWithoutAll",
smalltalk.method({
selector: "testCopyWithoutAll",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("hello world",_st("*hello* *world*")._copyWithoutAll_("*"));
return self}, function($ctx1) {$ctx1.fill(self,"testCopyWithoutAll",{}, smalltalk.StringTest)});},
args: [],
source: "testCopyWithoutAll\x0a\x09self \x0a\x09\x09assert: 'hello world' \x0a\x09\x09equals: ('*hello* *world*' copyWithoutAll: '*')",
messageSends: ["assert:equals:", "copyWithoutAll:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("h",_st(_st(self)._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__eq("h");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(each).__eq((6));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testDetect",{}, smalltalk.StringTest)})},
args: [],
source: "testDetect\x0a\x09self assert: 'h' equals: (self collection detect: [ :each | each = 'h' ]).\x0a\x09self \x0a\x09\x09should: [ self collection detect: [ :each | each = 6 ] ]\x0a\x09\x09raise: Error",
messageSends: ["assert:equals:", "detect:", "=", "collection", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st("hello").__eq("hello"));
_st(self)._deny_(_st("hello").__eq("world"));
_st(self)._assert_(_st("hello").__eq(_st("hello")._yourself()));
_st(self)._assert_(_st(_st("hello")._yourself()).__eq("hello"));
_st(self)._deny_(_st("").__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{}, smalltalk.StringTest)});},
args: [],
source: "testEquality\x0a\x09self assert: 'hello' = 'hello'.\x0a\x09self deny: 'hello' = 'world'.\x0a\x0a\x09self assert: 'hello'  = 'hello' yourself.\x0a\x09self assert: 'hello' yourself = 'hello'.\x0a\x0a\x09\x22test JS falsy value\x22\x0a\x09self deny: '' = 0",
messageSends: ["assert:", "=", "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st("hello").__eq_eq("hello"));
_st(self)._deny_(_st("hello").__eq_eq("world"));
_st(self)._assert_(_st("hello").__eq_eq(_st("hello")._yourself()));
_st(self)._assert_(_st(_st("hello")._yourself()).__eq_eq("hello"));
_st(self)._deny_(_st("").__eq_eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{}, smalltalk.StringTest)});},
args: [],
source: "testIdentity\x0a\x09self assert: 'hello' == 'hello'.\x0a\x09self deny: 'hello' == 'world'.\x0a\x0a\x09self assert: 'hello' == 'hello' yourself.\x0a\x09self assert: 'hello' yourself == 'hello'.\x0a\x0a\x09\x22test JS falsy value\x22\x0a\x09self deny: '' == 0",
messageSends: ["assert:", "==", "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testIncludesSubString",
smalltalk.method({
selector: "testIncludesSubString",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st("amber")._includesSubString_("ber"));
_st(self)._deny_(_st("amber")._includesSubString_("zork"));
return self}, function($ctx1) {$ctx1.fill(self,"testIncludesSubString",{}, smalltalk.StringTest)});},
args: [],
source: "testIncludesSubString\x0a\x09self assert: ('amber' includesSubString: 'ber').\x0a\x09self deny: ('amber' includesSubString: 'zork').",
messageSends: ["assert:", "includesSubString:", "deny:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testJoin",
smalltalk.method({
selector: "testJoin",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("hello,world",_st(",")._join_(["hello", "world"]));
return self}, function($ctx1) {$ctx1.fill(self,"testJoin",{}, smalltalk.StringTest)});},
args: [],
source: "testJoin\x0a\x09self assert: 'hello,world' equals: (',' join: #('hello' 'world'))",
messageSends: ["assert:equals:", "join:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
category: 'tests',
fn: function () {
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection="o";
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__eq("o");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testSelect",{newCollection:newCollection}, smalltalk.StringTest)});},
args: [],
source: "testSelect\x0a\x09| newCollection |\x0a\x09newCollection := 'o'.\x0a\x09self \x0a\x09\x09assertSameContents: (self collection select: [ :each |\x0a\x09\x09\x09each = 'o' ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "select:", "=", "collection"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((9),_st("smalltalk")._size());
_st(self)._assert_equals_((0),_st("")._size());
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{}, smalltalk.StringTest)})},
args: [],
source: "testSize\x0a\x09self assert: 9 equals: 'smalltalk' size.\x0a\x09self assert: 0 equals: '' size",
messageSends: ["assert:equals:", "size"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testStreamContents",
smalltalk.method({
selector: "testStreamContents",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._assert_equals_("hello world",_st((smalltalk.String || String))._streamContents_((function(aStream){
return smalltalk.withContext(function($ctx2) {$1=aStream;
_st($1)._nextPutAll_("hello");
_st($1)._space();
$2=_st($1)._nextPutAll_("world");
return $2;
}, function($ctx2) {$ctx2.fillBlock({aStream:aStream},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testStreamContents",{}, smalltalk.StringTest)});},
args: [],
source: "testStreamContents\x0a\x09self \x0a\x09\x09assert: 'hello world' \x0a\x09\x09equals: (String streamContents: [ :aStream | \x0a\x09\x09\x09aStream \x0a\x09\x09\x09\x09nextPutAll: 'hello'; space; \x0a\x09\x09\x09\x09nextPutAll: 'world' ])",
messageSends: ["assert:equals:", "streamContents:", "nextPutAll:", "space"],
referencedClasses: ["String"]
}),
smalltalk.StringTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.String || String);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{}, smalltalk.StringTest.klass)});},
args: [],
source: "collectionClass\x0a\x09^ String",
messageSends: [],
referencedClasses: ["String"]
}),
smalltalk.StringTest.klass);


smalltalk.addClass('SymbolTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.symbolFor("hello");
}, function($ctx1) {$ctx1.fill(self,"collection",{}, smalltalk.SymbolTest)});},
args: [],
source: "collection\x0a\x09^ #hello",
messageSends: [],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.symbolFor("phhaaarorra");
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{}, smalltalk.SymbolTest)});},
args: [],
source: "collectionWithDuplicates\x0a\x09^ #phhaaarorra",
messageSends: [],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAsString",
smalltalk.method({
selector: "testAsString",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("hello",_st(smalltalk.symbolFor("hello"))._asString());
return self}, function($ctx1) {$ctx1.fill(self,"testAsString",{}, smalltalk.SymbolTest)})},
args: [],
source: "testAsString\x0a\x09self assert: 'hello' equals: #hello asString",
messageSends: ["assert:equals:", "asString"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAsSymbol",
smalltalk.method({
selector: "testAsSymbol",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq_eq(_st(smalltalk.symbolFor("hello"))._asSymbol()));
return self}, function($ctx1) {$ctx1.fill(self,"testAsSymbol",{}, smalltalk.SymbolTest)});},
args: [],
source: "testAsSymbol\x0a\x09self assert: #hello == #hello asSymbol",
messageSends: ["assert:", "==", "asSymbol"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("h",_st(smalltalk.symbolFor("hello"))._at_((1)));
_st(self)._assert_equals_("o",_st(smalltalk.symbolFor("hello"))._at_((5)));
_st(self)._assert_equals_(nil,_st(smalltalk.symbolFor("hello"))._at_ifAbsent_((6),(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{}, smalltalk.SymbolTest)})},
args: [],
source: "testAt\x0a\x09self assert: 'h' equals: (#hello at: 1).\x0a\x09self assert: 'o' equals: (#hello at: 5).\x0a\x09self assert: nil equals: (#hello at: 6 ifAbsent: [nil])",
messageSends: ["assert:equals:", "at:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAtPut",
smalltalk.method({
selector: "testAtPut",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st("hello")._at_put_((1),"a");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testAtPut",{}, smalltalk.SymbolTest)});},
args: [],
source: "testAtPut\x0a\x09\x22Symbol instances are read-only\x22\x0a\x09self should: ['hello' at: 1 put: 'a'] raise: Error",
messageSends: ["should:raise:", "at:put:"],
referencedClasses: ["Error"]
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
category: 'tests',
fn: function () {
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection=smalltalk.symbolFor("hheelllloo");
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__comma(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{newCollection:newCollection}, smalltalk.SymbolTest)});},
args: [],
source: "testCollect\x0a\x09| newCollection |\x0a\x09newCollection := #hheelllloo.\x0a\x09self \x0a\x09\x09assertSameContents: (self collection collect: [ :each |\x0a\x09\x09\x09each, each ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "collect:", ",", "collection"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testComparing",
smalltalk.method({
selector: "testComparing",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(smalltalk.symbolFor("ab")).__gt(smalltalk.symbolFor("aa")));
_st(self)._deny_(_st(smalltalk.symbolFor("ab")).__gt(smalltalk.symbolFor("ba")));
_st(self)._assert_(_st(smalltalk.symbolFor("ab")).__lt(smalltalk.symbolFor("ba")));
_st(self)._deny_(_st(smalltalk.symbolFor("bb")).__lt(smalltalk.symbolFor("ba")));
_st(self)._assert_(_st(smalltalk.symbolFor("ab")).__gt_eq(smalltalk.symbolFor("aa")));
_st(self)._deny_(_st(smalltalk.symbolFor("ab")).__gt_eq(smalltalk.symbolFor("ba")));
_st(self)._assert_(_st(smalltalk.symbolFor("ab")).__lt_eq(smalltalk.symbolFor("ba")));
_st(self)._deny_(_st(smalltalk.symbolFor("bb")).__lt_eq(smalltalk.symbolFor("ba")));
return self}, function($ctx1) {$ctx1.fill(self,"testComparing",{}, smalltalk.SymbolTest)});},
args: [],
source: "testComparing\x0a\x09self assert: #ab > #aa.\x0a\x09self deny: #ab > #ba.\x0a\x0a\x09self assert: #ab < #ba.\x0a\x09self deny: #bb < #ba.\x0a\x0a\x09self assert: #ab >= #aa.\x0a\x09self deny: #ab >= #ba.\x0a\x0a\x09self assert: #ab <= #ba.\x0a\x09self deny: #bb <= #ba",
messageSends: ["assert:", ">", "deny:", "<", ">=", "<="],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._copy()).__eq_eq(smalltalk.symbolFor("hello")));
_st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._deepCopy()).__eq_eq(smalltalk.symbolFor("hello")));
return self}, function($ctx1) {$ctx1.fill(self,"testCopying",{}, smalltalk.SymbolTest)});},
args: [],
source: "testCopying\x0a\x09self assert: #hello copy == #hello.\x0a\x09self assert: #hello deepCopy == #hello",
messageSends: ["assert:", "==", "copy", "deepCopy"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("h",_st(_st(self)._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__eq("h");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(each).__eq("z");
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testDetect",{}, smalltalk.SymbolTest)})},
args: [],
source: "testDetect\x0a\x09self assert: 'h' equals: (self collection detect: [ :each | each = 'h' ]).\x0a\x09self \x0a\x09\x09should: [ self collection detect: [ :each | each = 'z' ] ]\x0a\x09\x09raise: Error",
messageSends: ["assert:equals:", "detect:", "=", "collection", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq(smalltalk.symbolFor("hello")));
_st(self)._deny_(_st(smalltalk.symbolFor("hello")).__eq(smalltalk.symbolFor("world")));
_st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq(_st(smalltalk.symbolFor("hello"))._yourself()));
_st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._yourself()).__eq(smalltalk.symbolFor("hello")));
_st(self)._deny_(_st(smalltalk.symbolFor("hello")).__eq("hello"));
_st(self)._deny_(_st("hello").__eq(smalltalk.symbolFor("hello")));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{}, smalltalk.SymbolTest)});},
args: [],
source: "testEquality\x0a\x09self assert: #hello = #hello.\x0a\x09self deny: #hello = #world.\x0a\x0a\x09self assert: #hello  = #hello yourself.\x0a\x09self assert: #hello yourself = #hello.\x0a\x0a\x09self deny: #hello  = 'hello'.\x0a\x09self deny: 'hello' = #hello.",
messageSends: ["assert:", "=", "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq_eq(smalltalk.symbolFor("hello")));
_st(self)._deny_(_st(smalltalk.symbolFor("hello")).__eq_eq(smalltalk.symbolFor("world")));
_st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq(_st(smalltalk.symbolFor("hello"))._yourself()));
_st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._yourself()).__eq(_st(_st(smalltalk.symbolFor("hello"))._asString())._asSymbol()));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{}, smalltalk.SymbolTest)});},
args: [],
source: "testIdentity\x0a\x09self assert: #hello == #hello.\x0a\x09self deny: #hello == #world.\x0a\x0a\x09self assert: #hello  = #hello yourself.\x0a\x09self assert: #hello yourself = #hello asString asSymbol",
messageSends: ["assert:", "==", "deny:", "=", "yourself", "asSymbol", "asString"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIsEmpty",
smalltalk.method({
selector: "testIsEmpty",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._deny_(_st(_st(self)._collection())._isEmpty());
_st(self)._assert_(_st(_st("")._asSymbol())._isEmpty());
return self}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{}, smalltalk.SymbolTest)});},
args: [],
source: "testIsEmpty\x0a\x09self deny: self collection isEmpty.\x0a\x09self assert: '' asSymbol isEmpty",
messageSends: ["deny:", "isEmpty", "collection", "assert:", "asSymbol"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIsSymbolIsString",
smalltalk.method({
selector: "testIsSymbolIsString",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(smalltalk.symbolFor("hello"))._isSymbol());
_st(self)._deny_(_st("hello")._isSymbol());
_st(self)._deny_(_st(smalltalk.symbolFor("hello"))._isString());
_st(self)._assert_(_st("hello")._isString());
return self}, function($ctx1) {$ctx1.fill(self,"testIsSymbolIsString",{}, smalltalk.SymbolTest)});},
args: [],
source: "testIsSymbolIsString\x0a\x09self assert: #hello isSymbol.\x0a\x09self deny: 'hello' isSymbol.\x0a\x09self deny: #hello isString.\x0a\x09self assert: 'hello' isString",
messageSends: ["assert:", "isSymbol", "deny:", "isString"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
category: 'tests',
fn: function () {
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection="o";
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__eq("o");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testSelect",{newCollection:newCollection}, smalltalk.SymbolTest)});},
args: [],
source: "testSelect\x0a\x09| newCollection |\x0a\x09newCollection := 'o'.\x0a\x09self \x0a\x09\x09assertSameContents: (self collection select: [ :each |\x0a\x09\x09\x09each = 'o' ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "select:", "=", "collection"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((1),_st(smalltalk.symbolFor("a"))._size());
_st(self)._assert_equals_((5),_st(smalltalk.symbolFor("aaaaa"))._size());
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{}, smalltalk.SymbolTest)})},
args: [],
source: "testSize\x0a\x09self assert: 1 equals: #a size.\x0a\x09self assert: 5 equals: #aaaaa size",
messageSends: ["assert:equals:", "size"],
referencedClasses: []
}),
smalltalk.SymbolTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.Symbol || Symbol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{}, smalltalk.SymbolTest.klass)});},
args: [],
source: "collectionClass\x0a\x09^ Symbol",
messageSends: [],
referencedClasses: ["Symbol"]
}),
smalltalk.SymbolTest.klass);


smalltalk.addClass('JSObjectProxyTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_jsObject",
smalltalk.method({
selector: "jsObject",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: '', 'e': null, 'f': undefined};
return self}, function($ctx1) {$ctx1.fill(self,"jsObject",{}, smalltalk.JSObjectProxyTest)})},
args: [],
source: "jsObject\x0a\x09<return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: '', 'e': null, 'f': undefined}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testAtIfAbsent",
smalltalk.method({
selector: "testAtIfAbsent",
category: 'tests',
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { testObject=_st(self)._jsObject();
_st(self)._assert_equals_("Property does not exist",_st(testObject)._at_ifAbsent_("abc",(function(){
return smalltalk.withContext(function($ctx2) {return "Property does not exist";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st(self)._assert_equals_(nil,_st(testObject)._at_ifAbsent_("e",(function(){
return smalltalk.withContext(function($ctx2) {return "Property does not exist";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st(self)._assert_equals_((1),_st(testObject)._at_ifAbsent_("a",(function(){
return smalltalk.withContext(function($ctx2) {return "Property does not exist";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
_st(self)._assert_equals_(nil,_st(testObject)._at_ifAbsent_("f",(function(){
return smalltalk.withContext(function($ctx2) {return "Property does not exist";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{testObject:testObject}, smalltalk.JSObjectProxyTest)})},
args: [],
source: "testAtIfAbsent\x0a\x09| testObject |\x0a    testObject := self jsObject.\x0a\x09self assert: 'Property does not exist' equals: (testObject at: 'abc' ifAbsent: ['Property does not exist']).\x0a\x09self assert: nil equals: (testObject at: 'e' ifAbsent: ['Property does not exist']).\x0a    self assert: 1 equals: (testObject at: 'a' ifAbsent: ['Property does not exist']).\x0a    self assert: nil equals: (testObject at: 'f' ifAbsent: ['Property does not exist']).",
messageSends: ["jsObject", "assert:equals:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testDNU",
smalltalk.method({
selector: "testDNU",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._jsObject())._foo();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
return self}, function($ctx1) {$ctx1.fill(self,"testDNU",{}, smalltalk.JSObjectProxyTest)});},
args: [],
source: "testDNU\x0a\x09self should: [self jsObject foo] raise: MessageNotUnderstood",
messageSends: ["should:raise:", "foo", "jsObject"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testMessageSend",
smalltalk.method({
selector: "testMessageSend",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((1),_st(_st(self)._jsObject())._a());
_st(self)._assert_equals_((2),_st(_st(self)._jsObject())._b());
_st(self)._assert_equals_((3),_st(_st(self)._jsObject())._c_((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSend",{}, smalltalk.JSObjectProxyTest)})},
args: [],
source: "testMessageSend\x0a\x0a\x09self assert: 1 equals: self jsObject a.\x0a\x09self assert: 2 equals: self jsObject b.\x0a\x09self assert: 3 equals: (self jsObject c: 3)",
messageSends: ["assert:equals:", "a", "jsObject", "b", "c:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testMethodWithArguments",
smalltalk.method({
selector: "testMethodWithArguments",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((1),_st(_st(self)._jsObject())._c_((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testMethodWithArguments",{}, smalltalk.JSObjectProxyTest)})},
args: [],
source: "testMethodWithArguments\x0a\x09self assert: 1 equals: (self jsObject c: 1)",
messageSends: ["assert:equals:", "c:", "jsObject"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testPrinting",
smalltalk.method({
selector: "testPrinting",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st(_st(self)._jsObject())._printString()).__eq("[object Object]"));
return self}, function($ctx1) {$ctx1.fill(self,"testPrinting",{}, smalltalk.JSObjectProxyTest)});},
args: [],
source: "testPrinting\x0a\x09self assert: self jsObject printString = '[object Object]'",
messageSends: ["assert:", "=", "printString", "jsObject"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testPropertyThatReturnsEmptyString",
smalltalk.method({
selector: "testPropertyThatReturnsEmptyString",
category: 'tests',
fn: function () {
var self=this;
var object;
return smalltalk.withContext(function($ctx1) { object=_st(self)._jsObject();
_st(self)._assert_equals_("",_st(object)._d());
_st(object)._d_("hello");
_st(self)._assert_equals_("hello",_st(object)._d());
return self}, function($ctx1) {$ctx1.fill(self,"testPropertyThatReturnsEmptyString",{object:object}, smalltalk.JSObjectProxyTest)});},
args: [],
source: "testPropertyThatReturnsEmptyString\x0a\x09| object |\x0a\x0a\x09object := self jsObject.\x0a\x09self assert: '' equals: object d.\x0a\x0a\x09object d: 'hello'.\x0a\x09self assert: 'hello' equals: object d",
messageSends: ["jsObject", "assert:equals:", "d", "d:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testPropertyThatReturnsUndefined",
smalltalk.method({
selector: "testPropertyThatReturnsUndefined",
category: 'tests',
fn: function () {
var self=this;
var object;
return smalltalk.withContext(function($ctx1) { object=_st(self)._jsObject();
_st(self)._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(object)._e();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._assert_(_st(_st(object)._e())._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testPropertyThatReturnsUndefined",{object:object}, smalltalk.JSObjectProxyTest)});},
args: [],
source: "testPropertyThatReturnsUndefined\x0a\x09| object |\x0a\x0a\x09object := self jsObject.\x0a\x09self shouldnt: [ object e ]  raise: MessageNotUnderstood.\x0a    self assert: object e isNil",
messageSends: ["jsObject", "shouldnt:raise:", "e", "assert:", "isNil"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testValue",
smalltalk.method({
selector: "testValue",
category: 'tests',
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { testObject=_st(self)._jsObject();
_st(self)._assert_equals_("[object Object]",_st(_st(testObject)._value())._printString());
_st(testObject)._at_put_("value","aValue");
_st(self)._assert_equals_("aValue",_st(testObject)._value());
return self}, function($ctx1) {$ctx1.fill(self,"testValue",{testObject:testObject}, smalltalk.JSObjectProxyTest)})},
args: [],
source: "testValue\x0a\x09| testObject |\x0a    testObject := self jsObject.\x0a\x09self assert: '[object Object]' equals: testObject value printString.\x0a    testObject at: 'value' put: 'aValue'.\x0a\x09self assert: 'aValue' equals: testObject value",
messageSends: ["jsObject", "assert:equals:", "printString", "value", "at:put:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testYourself",
smalltalk.method({
selector: "testYourself",
category: 'tests',
fn: function (){
var self=this;
var object;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._jsObject();
_st($1)._d_("test");
$2=_st($1)._yourself();
object=$2;
_st(self)._assert_equals_("test",_st(object)._d());
return self}, function($ctx1) {$ctx1.fill(self,"testYourself",{object:object}, smalltalk.JSObjectProxyTest)})},
args: [],
source: "testYourself\x0a\x09| object |\x0a\x09object := self jsObject\x0a\x09\x09d: 'test';\x0a\x09\x09yourself.\x0a\x0a\x09self assert: 'test' equals: object d",
messageSends: ["d:", "jsObject", "yourself", "assert:equals:", "d"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);



smalltalk.addClass('JavaScriptExceptionTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCatchingException",
smalltalk.method({
selector: "testCatchingException",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._throwException();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(error){
return smalltalk.withContext(function($ctx2) {return _st(self)._assert_(_st(_st(error)._exception()).__eq("test"));
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testCatchingException",{}, smalltalk.JavaScriptExceptionTest)});},
args: [],
source: "testCatchingException\x0a\x09[ self throwException ]\x0a  \x09\x09on: Error\x0a        do: [ :error | \x0a\x09\x09\x09self assert: error exception = 'test' ]",
messageSends: ["on:do:", "assert:", "=", "exception", "throwException"],
referencedClasses: ["Error"]
}),
smalltalk.JavaScriptExceptionTest);

smalltalk.addMethod(
"_testRaisingException",
smalltalk.method({
selector: "testRaisingException",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._throwException();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.JavaScriptException || JavaScriptException));
return self}, function($ctx1) {$ctx1.fill(self,"testRaisingException",{}, smalltalk.JavaScriptExceptionTest)});},
args: [],
source: "testRaisingException\x0a\x09self should: [ self throwException ] raise: JavaScriptException",
messageSends: ["should:raise:", "throwException"],
referencedClasses: ["JavaScriptException"]
}),
smalltalk.JavaScriptExceptionTest);

smalltalk.addMethod(
"_throwException",
smalltalk.method({
selector: "throwException",
category: 'helpers',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { throw 'test';
return self}, function($ctx1) {$ctx1.fill(self,"throwException",{}, smalltalk.JavaScriptExceptionTest)});},
args: [],
source: "throwException\x0a\x09<throw 'test'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JavaScriptExceptionTest);



smalltalk.addClass('NumberTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAbs",
smalltalk.method({
selector: "testAbs",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st((4))._abs()).__eq((4)));
_st(self)._assert_(_st(_st((-4))._abs()).__eq((4)));
return self}, function($ctx1) {$ctx1.fill(self,"testAbs",{}, smalltalk.NumberTest)});},
args: [],
source: "testAbs\x0a\x09self assert: 4 abs = 4.\x0a\x09self assert: -4 abs = 4",
messageSends: ["assert:", "=", "abs"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testArithmetic",
smalltalk.method({
selector: "testArithmetic",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st((1.5)).__plus((1))).__eq((2.5)));
_st(self)._assert_(_st(_st((2)).__minus((1))).__eq((1)));
_st(self)._assert_(_st(_st((-2)).__minus((1))).__eq((-3)));
_st(self)._assert_(_st(_st((12)).__slash((2))).__eq((6)));
_st(self)._assert_(_st(_st((3)).__star((4))).__eq((12)));
_st(self)._assert_(_st(_st(_st((1)).__plus((2))).__star((3))).__eq((9)));
_st(self)._assert_(_st(_st((1)).__plus(_st((2)).__star((3)))).__eq((7)));
return self}, function($ctx1) {$ctx1.fill(self,"testArithmetic",{}, smalltalk.NumberTest)});},
args: [],
source: "testArithmetic\x0a\x09\x0a\x09\x22We rely on JS here, so we won't test complex behavior, just check if \x0a\x09message sends are corrects\x22\x0a\x0a\x09self assert: 1.5 + 1 = 2.5.\x0a\x09self assert: 2 - 1 = 1.\x0a\x09self assert: -2 - 1 = -3.\x0a\x09self assert: 12 / 2 = 6.\x0a\x09self assert: 3 * 4 = 12.\x0a\x0a\x09\x22Simple parenthesis and execution order\x22\x0a\x0a\x09self assert: 1 + 2 * 3 = 9.\x0a\x09self assert: 1 + (2 * 3) = 7",
messageSends: ["assert:", "=", "+", "-", "/", "*"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testComparison",
smalltalk.method({
selector: "testComparison",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st((3)).__gt((2)));
_st(self)._assert_(_st((2)).__lt((3)));
_st(self)._deny_(_st((3)).__lt((2)));
_st(self)._deny_(_st((2)).__gt((3)));
_st(self)._assert_(_st((3)).__gt_eq((3)));
_st(self)._assert_(_st((3.1)).__gt_eq((3)));
_st(self)._assert_(_st((3)).__lt_eq((3)));
_st(self)._assert_(_st((3)).__lt_eq((3.1)));
return self}, function($ctx1) {$ctx1.fill(self,"testComparison",{}, smalltalk.NumberTest)});},
args: [],
source: "testComparison\x0a\x0a\x09self assert: 3 > 2.\x0a\x09self assert: 2 < 3.\x0a\x09\x0a\x09self deny: 3 < 2.\x0a\x09self deny: 2 > 3.\x0a\x0a\x09self assert: 3 >= 3.\x0a\x09self assert: 3.1 >= 3.\x0a\x09self assert: 3 <= 3.\x0a\x09self assert: 3 <= 3.1",
messageSends: ["assert:", ">", "<", "deny:", ">=", "<="],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st((1))._copy()).__eq_eq((1)));
_st(self)._assert_(_st(_st((1))._deepCopy()).__eq_eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testCopying",{}, smalltalk.NumberTest)});},
args: [],
source: "testCopying\x0a\x09self assert: 1 copy == 1.\x0a\x09self assert: 1 deepCopy == 1",
messageSends: ["assert:", "==", "copy", "deepCopy"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st((1)).__eq((1)));
_st(self)._assert_(_st((0)).__eq((0)));
_st(self)._deny_(_st((1)).__eq((0)));
_st(self)._assert_(_st(_st((1))._yourself()).__eq((1)));
_st(self)._assert_(_st((1)).__eq(_st((1))._yourself()));
_st(self)._assert_(_st(_st((1))._yourself()).__eq(_st((1))._yourself()));
_st(self)._deny_(_st((0)).__eq(false));
_st(self)._deny_(_st(false).__eq((0)));
_st(self)._deny_(_st("").__eq((0)));
_st(self)._deny_(_st((0)).__eq(""));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{}, smalltalk.NumberTest)});},
args: [],
source: "testEquality\x0a\x09self assert: 1 = 1.\x0a\x09self assert: 0 = 0.\x0a\x09self deny: 1 = 0.\x0a\x0a\x09self assert: 1 yourself = 1.\x0a\x09self assert: 1 = 1 yourself.\x0a\x09self assert: 1 yourself = 1 yourself.\x0a\x09\x0a\x09self deny: 0 = false.\x0a\x09self deny: false = 0.\x0a\x09self deny: '' = 0.\x0a\x09self deny: 0 = ''",
messageSends: ["assert:", "=", "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testHexNumbers",
smalltalk.method({
selector: "testHexNumbers",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st((9)).__eq((9)));
_st(self)._assert_(_st(_st((10))._truncated()).__eq((10)));
_st(self)._assert_(_st(_st((11))._truncated()).__eq((11)));
_st(self)._assert_(_st(_st((12))._truncated()).__eq((12)));
_st(self)._assert_(_st(_st((13))._truncated()).__eq((13)));
_st(self)._assert_(_st(_st((14))._truncated()).__eq((14)));
_st(self)._assert_(_st(_st((15))._truncated()).__eq((15)));
return self}, function($ctx1) {$ctx1.fill(self,"testHexNumbers",{}, smalltalk.NumberTest)});},
args: [],
source: "testHexNumbers\x0a\x0a\x09self assert: 16r9 = 9.\x0a\x09self assert: 16rA truncated = 10.\x0a\x09self assert: 16rB truncated = 11.\x0a\x09self assert: 16rC truncated = 12.\x0a\x09self assert: 16rD truncated = 13.\x0a\x09self assert: 16rE truncated = 14.\x0a\x09self assert: 16rF truncated = 15",
messageSends: ["assert:", "=", "truncated"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st((1)).__eq_eq((1)));
_st(self)._assert_(_st((0)).__eq_eq((0)));
_st(self)._deny_(_st((1)).__eq_eq((0)));
_st(self)._assert_(_st(_st((1))._yourself()).__eq_eq((1)));
_st(self)._assert_(_st((1)).__eq_eq(_st((1))._yourself()));
_st(self)._assert_(_st(_st((1))._yourself()).__eq_eq(_st((1))._yourself()));
_st(self)._deny_(_st((1)).__eq_eq((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{}, smalltalk.NumberTest)});},
args: [],
source: "testIdentity\x0a\x09self assert: 1 == 1.\x0a\x09self assert: 0 == 0.\x0a\x09self deny: 1 == 0.\x0a\x0a\x09self assert: 1 yourself == 1.\x0a\x09self assert: 1 == 1 yourself.\x0a\x09self assert: 1 yourself == 1 yourself.\x0a\x09\x0a\x09self deny: 1 == 2",
messageSends: ["assert:", "==", "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testInvalidHexNumbers",
smalltalk.method({
selector: "testInvalidHexNumbers",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rG();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rg();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rH();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rh();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rI();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._ri();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rJ();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rj();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rK();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rk();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rL();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rl();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rM();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rm();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rN();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rn();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rO();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._ro();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rP();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rp();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rQ();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rq();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rR();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rr();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rS();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rs();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rT();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rU();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._ru();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rV();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rv();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rW();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rw();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rX();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rx();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rY();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._ry();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rZ();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((16))._rz();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((11259375))._Z();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
return self}, function($ctx1) {$ctx1.fill(self,"testInvalidHexNumbers",{}, smalltalk.NumberTest)});},
args: [],
source: "testInvalidHexNumbers\x0a\x0a\x09self should: [16rG] raise: MessageNotUnderstood.\x0a   \x09self should: [16rg] raise: MessageNotUnderstood.\x0a\x09self should: [16rH] raise: MessageNotUnderstood.\x0a   \x09self should: [16rh] raise: MessageNotUnderstood.\x0a\x09self should: [16rI] raise: MessageNotUnderstood.\x0a   \x09self should: [16ri] raise: MessageNotUnderstood.\x0a\x09self should: [16rJ] raise: MessageNotUnderstood.\x0a   \x09self should: [16rj] raise: MessageNotUnderstood.\x0a\x09self should: [16rK] raise: MessageNotUnderstood.\x0a   \x09self should: [16rk] raise: MessageNotUnderstood.\x0a\x09self should: [16rL] raise: MessageNotUnderstood.\x0a   \x09self should: [16rl] raise: MessageNotUnderstood.\x0a\x09self should: [16rM] raise: MessageNotUnderstood.\x0a   \x09self should: [16rm] raise: MessageNotUnderstood.\x0a\x09self should: [16rN] raise: MessageNotUnderstood.\x0a   \x09self should: [16rn] raise: MessageNotUnderstood.\x0a\x09self should: [16rO] raise: MessageNotUnderstood.\x0a   \x09self should: [16ro] raise: MessageNotUnderstood.\x0a\x09self should: [16rP] raise: MessageNotUnderstood.\x0a   \x09self should: [16rp] raise: MessageNotUnderstood.\x0a\x09self should: [16rQ] raise: MessageNotUnderstood.\x0a   \x09self should: [16rq] raise: MessageNotUnderstood.\x0a\x09self should: [16rR] raise: MessageNotUnderstood.\x0a   \x09self should: [16rr] raise: MessageNotUnderstood.\x0a\x09self should: [16rS] raise: MessageNotUnderstood.\x0a   \x09self should: [16rs] raise: MessageNotUnderstood.\x0a\x09self should: [16rT] raise: MessageNotUnderstood.\x0a   \x09self should: [16rt] raise: MessageNotUnderstood.\x0a\x09self should: [16rU] raise: MessageNotUnderstood.\x0a   \x09self should: [16ru] raise: MessageNotUnderstood.\x0a\x09self should: [16rV] raise: MessageNotUnderstood.\x0a   \x09self should: [16rv] raise: MessageNotUnderstood.\x0a\x09self should: [16rW] raise: MessageNotUnderstood.\x0a   \x09self should: [16rw] raise: MessageNotUnderstood.\x0a\x09self should: [16rX] raise: MessageNotUnderstood.\x0a   \x09self should: [16rx] raise: MessageNotUnderstood.\x0a\x09self should: [16rY] raise: MessageNotUnderstood.\x0a   \x09self should: [16ry] raise: MessageNotUnderstood.\x0a\x09self should: [16rZ] raise: MessageNotUnderstood.\x0a   \x09self should: [16rz] raise: MessageNotUnderstood.\x0a    self should: [16rABcdEfZ] raise: MessageNotUnderstood.",
messageSends: ["should:raise:", "rG", "rg", "rH", "rh", "rI", "ri", "rJ", "rj", "rK", "rk", "rL", "rl", "rM", "rm", "rN", "rn", "rO", "ro", "rP", "rp", "rQ", "rq", "rR", "rr", "rS", "rs", "rT", "rt", "rU", "ru", "rV", "rv", "rW", "rw", "rX", "rx", "rY", "ry", "rZ", "rz", "Z"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testMinMax",
smalltalk.method({
selector: "testMinMax",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((5),_st((2))._max_((5)));
_st(self)._assert_equals_((2),_st((2))._min_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"testMinMax",{}, smalltalk.NumberTest)})},
args: [],
source: "testMinMax\x0a\x09\x0a\x09self assert: 5 equals: (2 max: 5).\x0a\x09self assert: 2 equals: (2 min: 5)",
messageSends: ["assert:equals:", "max:", "min:"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testNegated",
smalltalk.method({
selector: "testNegated",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st((3))._negated()).__eq((-3)));
_st(self)._assert_(_st(_st((-3))._negated()).__eq((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testNegated",{}, smalltalk.NumberTest)});},
args: [],
source: "testNegated\x0a\x09self assert: 3 negated = -3.\x0a\x09self assert: -3 negated = 3",
messageSends: ["assert:", "=", "negated"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testPrintShowingDecimalPlaces",
smalltalk.method({
selector: "testPrintShowingDecimalPlaces",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("23.00",_st((23))._printShowingDecimalPlaces_((2)));
_st(self)._assert_equals_("23.57",_st((23.5698))._printShowingDecimalPlaces_((2)));
_st(self)._assert_equals_("-234.56700",_st(_st((234.567))._negated())._printShowingDecimalPlaces_((5)));
_st(self)._assert_equals_("23",_st((23.4567))._printShowingDecimalPlaces_((0)));
_st(self)._assert_equals_("24",_st((23.5567))._printShowingDecimalPlaces_((0)));
_st(self)._assert_equals_("-23",_st(_st((23.4567))._negated())._printShowingDecimalPlaces_((0)));
_st(self)._assert_equals_("-24",_st(_st((23.5567))._negated())._printShowingDecimalPlaces_((0)));
_st(self)._assert_equals_("100000000.0",_st((100000000))._printShowingDecimalPlaces_((1)));
_st(self)._assert_equals_("0.98000",_st((0.98))._printShowingDecimalPlaces_((5)));
_st(self)._assert_equals_("-0.98",_st(_st((0.98))._negated())._printShowingDecimalPlaces_((2)));
_st(self)._assert_equals_("2.57",_st((2.567))._printShowingDecimalPlaces_((2)));
_st(self)._assert_equals_("-2.57",_st((-2.567))._printShowingDecimalPlaces_((2)));
_st(self)._assert_equals_("0.00",_st((0))._printShowingDecimalPlaces_((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testPrintShowingDecimalPlaces",{}, smalltalk.NumberTest)});},
args: [],
source: "testPrintShowingDecimalPlaces\x0a\x09self assert: '23.00' equals: (23 printShowingDecimalPlaces: 2).\x0a\x09self assert: '23.57' equals: (23.5698 printShowingDecimalPlaces: 2).\x0a\x09self assert: '-234.56700' equals:( 234.567 negated printShowingDecimalPlaces: 5).\x0a\x09self assert: '23' equals: (23.4567 printShowingDecimalPlaces: 0).\x0a\x09self assert: '24' equals: (23.5567 printShowingDecimalPlaces: 0).\x0a\x09self assert: '-23' equals: (23.4567 negated printShowingDecimalPlaces: 0).\x0a\x09self assert: '-24' equals: (23.5567 negated printShowingDecimalPlaces: 0).\x0a\x09self assert: '100000000.0' equals: (100000000 printShowingDecimalPlaces: 1).\x0a\x09self assert: '0.98000' equals: (0.98 printShowingDecimalPlaces: 5).\x0a\x09self assert: '-0.98' equals: (0.98 negated printShowingDecimalPlaces: 2).\x0a\x09self assert: '2.57' equals: (2.567 printShowingDecimalPlaces: 2).\x0a\x09self assert: '-2.57' equals: (-2.567 printShowingDecimalPlaces: 2).\x0a\x09self assert: '0.00' equals: (0 printShowingDecimalPlaces: 2).",
messageSends: ["assert:equals:", "printShowingDecimalPlaces:", "negated"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testRounded",
smalltalk.method({
selector: "testRounded",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st((3))._rounded()).__eq((3)));
_st(self)._assert_(_st(_st((3.212))._rounded()).__eq((3)));
_st(self)._assert_(_st(_st((3.51))._rounded()).__eq((4)));
return self}, function($ctx1) {$ctx1.fill(self,"testRounded",{}, smalltalk.NumberTest)});},
args: [],
source: "testRounded\x0a\x09\x0a\x09self assert: 3 rounded = 3.\x0a\x09self assert: 3.212 rounded = 3.\x0a\x09self assert: 3.51 rounded = 4",
messageSends: ["assert:", "=", "rounded"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testSqrt",
smalltalk.method({
selector: "testSqrt",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st((4))._sqrt()).__eq((2)));
_st(self)._assert_(_st(_st((16))._sqrt()).__eq((4)));
return self}, function($ctx1) {$ctx1.fill(self,"testSqrt",{}, smalltalk.NumberTest)});},
args: [],
source: "testSqrt\x0a\x09\x0a\x09self assert: 4 sqrt = 2.\x0a\x09self assert: 16 sqrt = 4",
messageSends: ["assert:", "=", "sqrt"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testSquared",
smalltalk.method({
selector: "testSquared",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st((4))._squared()).__eq((16)));
return self}, function($ctx1) {$ctx1.fill(self,"testSquared",{}, smalltalk.NumberTest)});},
args: [],
source: "testSquared\x0a\x09\x0a\x09self assert: 4 squared = 16",
messageSends: ["assert:", "=", "squared"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTimesRepeat",
smalltalk.method({
selector: "testTimesRepeat",
category: 'tests',
fn: function (){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { i=(0);
_st((0))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._assert_equals_((0),i);
_st((5))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._assert_equals_((5),i);
return self}, function($ctx1) {$ctx1.fill(self,"testTimesRepeat",{i:i}, smalltalk.NumberTest)})},
args: [],
source: "testTimesRepeat\x0a\x09| i |\x0a\x0a\x09i := 0.\x0a\x090 timesRepeat: [i := i + 1].\x0a\x09self assert: 0 equals: i.\x0a\x0a\x095 timesRepeat: [i := i + 1].\x0a\x09self assert: 5 equals: i",
messageSends: ["timesRepeat:", "+", "assert:equals:"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTo",
smalltalk.method({
selector: "testTo",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_([(1), (2), (3), (4), (5)],_st((1))._to_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"testTo",{}, smalltalk.NumberTest)})},
args: [],
source: "testTo\x0a\x09self assert: #(1 2 3 4 5) equals: (1 to: 5)",
messageSends: ["assert:equals:", "to:"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testToBy",
smalltalk.method({
selector: "testToBy",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_([(0), (2), (4), (6)],_st((0))._to_by_((6),(2)));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((1))._to_by_((4),(0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testToBy",{}, smalltalk.NumberTest)})},
args: [],
source: "testToBy\x0a\x09self assert: #(0 2 4 6) equals: (0 to: 6 by: 2).\x0a\x0a\x09self should: [1 to: 4 by: 0] raise: Error",
messageSends: ["assert:equals:", "to:by:", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTruncated",
smalltalk.method({
selector: "testTruncated",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st((3))._truncated()).__eq((3)));
_st(self)._assert_(_st(_st((3.212))._truncated()).__eq((3)));
_st(self)._assert_(_st(_st((3.51))._truncated()).__eq((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testTruncated",{}, smalltalk.NumberTest)});},
args: [],
source: "testTruncated\x0a\x09\x0a\x09self assert: 3 truncated = 3.\x0a\x09self assert: 3.212 truncated = 3.\x0a\x09self assert: 3.51 truncated = 3",
messageSends: ["assert:", "=", "truncated"],
referencedClasses: []
}),
smalltalk.NumberTest);



smalltalk.addClass('ObjectMock', smalltalk.Object, ['foo', 'bar'], 'Kernel-Tests');
smalltalk.ObjectMock.comment="ObjectMock is there only to perform tests on classes."
smalltalk.addMethod(
"_foo",
smalltalk.method({
selector: "foo",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@foo"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"foo",{}, smalltalk.ObjectMock)});},
args: [],
source: "foo\x0a\x09^foo",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectMock);

smalltalk.addMethod(
"_foo_",
smalltalk.method({
selector: "foo:",
category: 'not yet classified',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@foo"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"foo:",{anObject:anObject}, smalltalk.ObjectMock)});},
args: ["anObject"],
source: "foo: anObject\x0a\x09foo := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectMock);



smalltalk.addClass('ObjectTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_notDefined",
smalltalk.method({
selector: "notDefined",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return undefined;;
return self}, function($ctx1) {$ctx1.fill(self,"notDefined",{}, smalltalk.ObjectTest)});},
args: [],
source: "notDefined\x0a\x09<return undefined;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testBasicAccess",
smalltalk.method({
selector: "testBasicAccess",
category: 'tests',
fn: function (){
var self=this;
var o;
return smalltalk.withContext(function($ctx1) { o=_st((smalltalk.Object || Object))._new();
_st(o)._basicAt_put_("a",(1));
_st(self)._assert_equals_((1),_st(o)._basicAt_("a"));
_st(self)._assert_equals_(nil,_st(o)._basicAt_("b"));
return self}, function($ctx1) {$ctx1.fill(self,"testBasicAccess",{o:o}, smalltalk.ObjectTest)})},
args: [],
source: "testBasicAccess\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09o basicAt: 'a' put: 1.\x0a\x09self assert: 1 equals: (o basicAt: 'a').\x0a\x09self assert: nil equals: (o basicAt: 'b')",
messageSends: ["new", "basicAt:put:", "assert:equals:", "basicAt:"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testBasicPerform",
smalltalk.method({
selector: "testBasicPerform",
category: 'tests',
fn: function (){
var self=this;
var o;
return smalltalk.withContext(function($ctx1) { o=_st((smalltalk.Object || Object))._new();
_st(o)._basicAt_put_("func",(function(){
return smalltalk.withContext(function($ctx2) {return "hello";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(o)._basicAt_put_("func2",(function(a){
return smalltalk.withContext(function($ctx2) {return _st(a).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1)})}));
_st(self)._assert_equals_("hello",_st(o)._basicPerform_("func"));
_st(self)._assert_equals_((4),_st(o)._basicPerform_withArguments_("func2",[(3)]));
return self}, function($ctx1) {$ctx1.fill(self,"testBasicPerform",{o:o}, smalltalk.ObjectTest)})},
args: [],
source: "testBasicPerform\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09o basicAt: 'func' put: ['hello'].\x09\x0a\x09o basicAt: 'func2' put: [:a | a + 1].\x0a\x0a\x09self assert: 'hello' equals: (o basicPerform: 'func').\x0a\x09self assert: 4 equals: (o basicPerform: 'func2' withArguments: #(3))",
messageSends: ["new", "basicAt:put:", "+", "assert:equals:", "basicPerform:", "basicPerform:withArguments:"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testDNU",
smalltalk.method({
selector: "testDNU",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.Object || Object))._new())._foo();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
return self}, function($ctx1) {$ctx1.fill(self,"testDNU",{}, smalltalk.ObjectTest)});},
args: [],
source: "testDNU\x0a\x09self should: [Object new foo] raise: MessageNotUnderstood",
messageSends: ["should:raise:", "foo", "new"],
referencedClasses: ["Object", "MessageNotUnderstood"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function () {
var self=this;
var o;
return smalltalk.withContext(function($ctx1) { o=_st((smalltalk.Object || Object))._new();
_st(self)._deny_(_st(o).__eq(_st((smalltalk.Object || Object))._new()));
_st(self)._assert_(_st(o).__eq(o));
_st(self)._assert_(_st(_st(o)._yourself()).__eq(o));
_st(self)._assert_(_st(o).__eq(_st(o)._yourself()));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{o:o}, smalltalk.ObjectTest)});},
args: [],
source: "testEquality\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09self deny: o = Object new.\x0a\x09self assert: o = o.\x0a\x09self assert: o yourself = o.\x0a\x09self assert: o = o yourself",
messageSends: ["new", "deny:", "=", "assert:", "yourself"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testHalt",
smalltalk.method({
selector: "testHalt",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.Object || Object))._new())._halt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testHalt",{}, smalltalk.ObjectTest)});},
args: [],
source: "testHalt\x0a\x09self should: [Object new halt] raise: Error",
messageSends: ["should:raise:", "halt", "new"],
referencedClasses: ["Object", "Error"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function () {
var self=this;
var o;
return smalltalk.withContext(function($ctx1) { o=_st((smalltalk.Object || Object))._new();
_st(self)._deny_(_st(o).__eq_eq(_st((smalltalk.Object || Object))._new()));
_st(self)._assert_(_st(o).__eq_eq(o));
_st(self)._assert_(_st(_st(o)._yourself()).__eq_eq(o));
_st(self)._assert_(_st(o).__eq_eq(_st(o)._yourself()));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{o:o}, smalltalk.ObjectTest)});},
args: [],
source: "testIdentity\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09self deny: o == Object new.\x0a\x09self assert: o == o.\x0a\x09self assert: o yourself == o.\x0a\x09self assert: o == o yourself",
messageSends: ["new", "deny:", "==", "assert:", "yourself"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testIfNil",
smalltalk.method({
selector: "testIfNil",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$4,$3,$2,$5,$8,$7,$6,$9,$12,$11,$10;
_st(self)._deny_(_st(_st((smalltalk.Object || Object))._new())._isNil());
$1=self;
$4=_st((smalltalk.Object || Object))._new();
if(($receiver = $4) == nil || $receiver == undefined){
$3=true;
} else {
$3=$4;
};
$2=_st($3).__eq(true);
_st($1)._deny_($2);
$5=self;
$8=_st((smalltalk.Object || Object))._new();
if(($receiver = $8) == nil || $receiver == undefined){
$7=$8;
} else {
$7=true;
};
$6=_st($7).__eq(true);
_st($5)._assert_($6);
$9=self;
$12=_st((smalltalk.Object || Object))._new();
if(($receiver = $12) == nil || $receiver == undefined){
$11=false;
} else {
$11=true;
};
$10=_st($11).__eq(true);
_st($9)._assert_($10);
_st(self)._assert_(_st(_st(_st((smalltalk.Object || Object))._new())._ifNotNil_ifNil_((function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))).__eq(true));
return self}, function($ctx1) {$ctx1.fill(self,"testIfNil",{}, smalltalk.ObjectTest)});},
args: [],
source: "testIfNil\x0a\x09self deny: Object new isNil.\x0a\x09self deny: (Object new ifNil: [true]) = true.\x0a\x09self assert: (Object new ifNotNil: [true]) = true.\x0a\x0a\x09self assert: (Object new ifNil: [false] ifNotNil: [true]) = true.\x0a\x09self assert: (Object new ifNotNil: [true] ifNil: [false]) = true",
messageSends: ["deny:", "isNil", "new", "=", "ifNil:", "assert:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testInstVars",
smalltalk.method({
selector: "testInstVars",
category: 'tests',
fn: function (){
var self=this;
var o;
return smalltalk.withContext(function($ctx1) { o=_st((smalltalk.ObjectMock || ObjectMock))._new();
_st(self)._assert_equals_(nil,_st(o)._instVarAt_(smalltalk.symbolFor("foo")));
_st(o)._instVarAt_put_(smalltalk.symbolFor("foo"),(1));
_st(self)._assert_equals_((1),_st(o)._instVarAt_(smalltalk.symbolFor("foo")));
_st(self)._assert_equals_((1),_st(o)._instVarAt_("foo"));
return self}, function($ctx1) {$ctx1.fill(self,"testInstVars",{o:o}, smalltalk.ObjectTest)})},
args: [],
source: "testInstVars\x0a\x09| o |\x0a\x09o := ObjectMock new.\x0a\x09self assert: nil equals: (o instVarAt: #foo).\x0a\x0a\x09o instVarAt: #foo put: 1.\x0a\x09self assert: 1 equals: (o instVarAt: #foo).\x0a\x09self assert: 1 equals: (o instVarAt: 'foo')",
messageSends: ["new", "assert:equals:", "instVarAt:", "instVarAt:put:"],
referencedClasses: ["ObjectMock"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testNilUndefined",
smalltalk.method({
selector: "testNilUndefined",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(nil).__eq(_st(self)._notDefined()));
return self}, function($ctx1) {$ctx1.fill(self,"testNilUndefined",{}, smalltalk.ObjectTest)});},
args: [],
source: "testNilUndefined\x0a\x09\x22nil in Smalltalk is the undefined object in JS\x22\x0a\x0a\x09self assert: nil = self notDefined",
messageSends: ["assert:", "=", "notDefined"],
referencedClasses: []
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testYourself",
smalltalk.method({
selector: "testYourself",
category: 'tests',
fn: function () {
var self=this;
var o;
return smalltalk.withContext(function($ctx1) { o=_st((smalltalk.ObjectMock || ObjectMock))._new();
_st(self)._assert_(_st(_st(o)._yourself()).__eq_eq(o));
return self}, function($ctx1) {$ctx1.fill(self,"testYourself",{o:o}, smalltalk.ObjectTest)});},
args: [],
source: "testYourself\x0a\x09| o |\x0a\x09o := ObjectMock new.\x0a\x09self assert: o yourself == o",
messageSends: ["new", "assert:", "==", "yourself"],
referencedClasses: ["ObjectMock"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testidentityHash",
smalltalk.method({
selector: "testidentityHash",
category: 'tests',
fn: function () {
var self=this;
var o1,o2;
return smalltalk.withContext(function($ctx1) { o1=_st((smalltalk.Object || Object))._new();
o2=_st((smalltalk.Object || Object))._new();
_st(self)._assert_(_st(_st(o1)._identityHash()).__eq_eq(_st(o1)._identityHash()));
_st(self)._deny_(_st(_st(o1)._identityHash()).__eq_eq(_st(o2)._identityHash()));
return self}, function($ctx1) {$ctx1.fill(self,"testidentityHash",{o1:o1,o2:o2}, smalltalk.ObjectTest)});},
args: [],
source: "testidentityHash\x0a\x09| o1 o2 |\x0a\x09\x0a\x09o1 := Object new.\x0a\x09o2 := Object new.\x0a\x0a\x09self assert: o1 identityHash == o1 identityHash.\x0a\x09self deny: o1 identityHash == o2 identityHash",
messageSends: ["new", "assert:", "==", "identityHash", "deny:"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);



smalltalk.addClass('PackageTest', smalltalk.TestCase, ['zorkPackage', 'grulPackage', 'backUpCommitPathJs', 'backUpCommitPathSt'], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
self["@backUpCommitPathJs"]=_st((smalltalk.Package || Package))._defaultCommitPathJs();
self["@backUpCommitPathSt"]=_st((smalltalk.Package || Package))._defaultCommitPathSt();
_st((smalltalk.Package || Package))._resetCommitPaths();
self["@zorkPackage"]=_st(_st((smalltalk.Package || Package))._new())._name_("Zork");
$1=_st((smalltalk.Package || Package))._new();
_st($1)._name_("Grul");
_st($1)._commitPathJs_("server/grul/js");
_st($1)._commitPathSt_("grul/st");
$2=_st($1)._yourself();
self["@grulPackage"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{}, smalltalk.PackageTest)});},
args: [],
source: "setUp\x0a\x09backUpCommitPathJs := Package defaultCommitPathJs.\x0a\x09backUpCommitPathSt := Package defaultCommitPathSt.\x0a\x0a\x09Package resetCommitPaths.\x0a\x0a\x09zorkPackage := Package new name: 'Zork'.\x0a\x09grulPackage := Package new \x0a\x09\x09\x09\x09\x09name: 'Grul';\x0a\x09\x09\x09\x09\x09commitPathJs: 'server/grul/js';\x0a\x09\x09\x09\x09\x09commitPathSt: 'grul/st';\x0a\x09\x09\x09\x09\x09yourself",
messageSends: ["defaultCommitPathJs", "defaultCommitPathSt", "resetCommitPaths", "name:", "new", "commitPathJs:", "commitPathSt:", "yourself"],
referencedClasses: ["Package"]
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'running',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=(smalltalk.Package || Package);
_st($1)._defaultCommitPathJs_(self["@backUpCommitPathJs"]);
$2=_st($1)._defaultCommitPathSt_(self["@backUpCommitPathSt"]);
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{}, smalltalk.PackageTest)});},
args: [],
source: "tearDown\x0a\x09 Package \x0a\x09\x09defaultCommitPathJs: backUpCommitPathJs;\x0a\x09\x09defaultCommitPathSt: backUpCommitPathSt",
messageSends: ["defaultCommitPathJs:", "defaultCommitPathSt:"],
referencedClasses: ["Package"]
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testGrulCommitPathJsShouldBeServerGrulJs",
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("server/grul/js",_st(self["@grulPackage"])._commitPathJs());
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathJsShouldBeServerGrulJs",{}, smalltalk.PackageTest)});},
args: [],
source: "testGrulCommitPathJsShouldBeServerGrulJs\x0a\x09self assert: 'server/grul/js' equals: grulPackage commitPathJs",
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testGrulCommitPathStShouldBeGrulSt",
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("grul/st",_st(self["@grulPackage"])._commitPathSt());
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathStShouldBeGrulSt",{}, smalltalk.PackageTest)});},
args: [],
source: "testGrulCommitPathStShouldBeGrulSt\x0a\x09self assert: 'grul/st' equals: grulPackage commitPathSt",
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testZorkCommitPathJsShouldBeJs",
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJs",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("js",_st(self["@zorkPackage"])._commitPathJs());
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathJsShouldBeJs",{}, smalltalk.PackageTest)});},
args: [],
source: "testZorkCommitPathJsShouldBeJs\x0a\x09self assert: 'js' equals: zorkPackage commitPathJs",
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testZorkCommitPathStShouldBeSt",
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSt",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("st",_st(self["@zorkPackage"])._commitPathSt());
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathStShouldBeSt",{}, smalltalk.PackageTest)});},
args: [],
source: "testZorkCommitPathStShouldBeSt\x0a\x09self assert: 'st' equals: zorkPackage commitPathSt",
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageTest);



smalltalk.addClass('PackageWithDefaultCommitPathChangedTest', smalltalk.PackageTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
smalltalk.PackageTest.fn.prototype._setUp.apply(_st(self), []);
$1=(smalltalk.Package || Package);
_st($1)._defaultCommitPathJs_("javascripts/");
$2=_st($1)._defaultCommitPathSt_("smalltalk/");
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{}, smalltalk.PackageWithDefaultCommitPathChangedTest)});},
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x0a\x09Package\x0a\x09\x09defaultCommitPathJs: 'javascripts/';\x0a\x09\x09defaultCommitPathSt: 'smalltalk/'.",
messageSends: ["setUp", "defaultCommitPathJs:", "defaultCommitPathSt:"],
referencedClasses: ["Package"]
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testGrulCommitPathJsShouldBeServerGrulJs",
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("server/grul/js",_st(self["@grulPackage"])._commitPathJs());
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathJsShouldBeServerGrulJs",{}, smalltalk.PackageWithDefaultCommitPathChangedTest)});},
args: [],
source: "testGrulCommitPathJsShouldBeServerGrulJs\x0a\x09self assert: 'server/grul/js' equals: grulPackage commitPathJs",
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testGrulCommitPathStShouldBeGrulSt",
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("grul/st",_st(self["@grulPackage"])._commitPathSt());
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathStShouldBeGrulSt",{}, smalltalk.PackageWithDefaultCommitPathChangedTest)});},
args: [],
source: "testGrulCommitPathStShouldBeGrulSt\x0a\x09self assert: 'grul/st' equals: grulPackage commitPathSt",
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testZorkCommitPathJsShouldBeJavascript",
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJavascript",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("javascripts/",_st(self["@zorkPackage"])._commitPathJs());
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathJsShouldBeJavascript",{}, smalltalk.PackageWithDefaultCommitPathChangedTest)});},
args: [],
source: "testZorkCommitPathJsShouldBeJavascript\x0a\x09self assert: 'javascripts/' equals: zorkPackage commitPathJs",
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testZorkCommitPathStShouldBeSmalltalk",
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSmalltalk",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("smalltalk/",_st(self["@zorkPackage"])._commitPathSt());
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathStShouldBeSmalltalk",{}, smalltalk.PackageWithDefaultCommitPathChangedTest)});},
args: [],
source: "testZorkCommitPathStShouldBeSmalltalk\x0a\x09self assert: 'smalltalk/' equals: zorkPackage commitPathSt",
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);


smalltalk.addMethod(
"_shouldInheritSelectors",
smalltalk.method({
selector: "shouldInheritSelectors",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"shouldInheritSelectors",{}, smalltalk.PackageWithDefaultCommitPathChangedTest.klass)});},
args: [],
source: "shouldInheritSelectors\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest.klass);


smalltalk.addClass('PointTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAccessing",
smalltalk.method({
selector: "testAccessing",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((3),_st(_st((smalltalk.Point || Point))._x_y_((3),(4)))._x());
_st(self)._assert_equals_((4),_st(_st((smalltalk.Point || Point))._x_y_((3),(4)))._y());
_st(self)._assert_equals_((3),_st(_st(_st((smalltalk.Point || Point))._new())._x_((3)))._x());
_st(self)._assert_equals_((4),_st(_st(_st((smalltalk.Point || Point))._new())._y_((4)))._y());
return self}, function($ctx1) {$ctx1.fill(self,"testAccessing",{}, smalltalk.PointTest)})},
args: [],
source: "testAccessing\x0a\x09self assert: 3 equals: (Point x: 3 y: 4) x.\x0a\x09self assert: 4 equals: (Point x: 3 y: 4) y.\x0a\x09self assert: 3 equals: (Point new x: 3) x.\x0a\x09self assert: 4 equals: (Point new y: 4) y",
messageSends: ["assert:equals:", "x", "x:y:", "y", "x:", "new", "y:"],
referencedClasses: ["Point"]
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testArithmetic",
smalltalk.method({
selector: "testArithmetic",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((smalltalk.Point || Point))._x_y_((9),(16)),_st(_st((3)).__at((4))).__star(_st((3)).__at((4))));
_st(self)._assert_equals_(_st((smalltalk.Point || Point))._x_y_((6),(8)),_st(_st((3)).__at((4))).__plus(_st((3)).__at((4))));
_st(self)._assert_equals_(_st((smalltalk.Point || Point))._x_y_((0),(0)),_st(_st((3)).__at((4))).__minus(_st((3)).__at((4))));
_st(self)._assert_equals_(_st((smalltalk.Point || Point))._x_y_((2),(2)),_st(_st((6)).__at((8))).__slash(_st((3)).__at((4))));
return self}, function($ctx1) {$ctx1.fill(self,"testArithmetic",{}, smalltalk.PointTest)})},
args: [],
source: "testArithmetic\x0a\x09self assert: (Point x: 9 y: 16) equals: 3@4 * (3@4 ).\x0a\x09self assert: (Point x: 6 y: 8) equals: 3@4 + (3@4 ).\x0a\x09self assert: (Point x: 0 y: 0) equals: 3@4 - (3@4 ).\x0a\x09self assert: (Point x: 2 y: 2) equals: 6@8 / (3@4 )",
messageSends: ["assert:equals:", "x:y:", "*", "@", "+", "-", "/"],
referencedClasses: ["Point"]
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((3)).__at((4)),_st((smalltalk.Point || Point))._x_y_((3),(4)));
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{}, smalltalk.PointTest)});},
args: [],
source: "testAt\x0a\x09self assert: 3@4 equals: (Point x: 3 y: 4)",
messageSends: ["assert:equals:", "@", "x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testEgality",
smalltalk.method({
selector: "testEgality",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st((3)).__at((4))).__eq(_st((3)).__at((4))));
_st(self)._deny_(_st(_st((3)).__at((5))).__eq(_st((3)).__at((6))));
return self}, function($ctx1) {$ctx1.fill(self,"testEgality",{}, smalltalk.PointTest)});},
args: [],
source: "testEgality\x0a\x09self assert: 3@4 = (3@4).\x0a\x09self deny: 3@5 = (3@6)",
messageSends: ["assert:", "=", "@", "deny:"],
referencedClasses: []
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testTranslateBy",
smalltalk.method({
selector: "testTranslateBy",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((3)).__at((4)),_st(_st((3)).__at((3)))._translateBy_(_st((0)).__at((1))));
_st(self)._assert_equals_(_st((3)).__at((2)),_st(_st((3)).__at((3)))._translateBy_(_st((0)).__at(_st((1))._negated())));
_st(self)._assert_equals_(_st((5)).__at((6)),_st(_st((3)).__at((3)))._translateBy_(_st((2)).__at((3))));
_st(self)._assert_equals_(_st((0)).__at((3)),_st(_st((3)).__at((3)))._translateBy_(_st(_st((3))._negated()).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testTranslateBy",{}, smalltalk.PointTest)});},
args: [],
source: "testTranslateBy\x0a\x09self assert: 3@4 equals: (3@3 translateBy: 0@1).\x0a\x09self assert: 3@2 equals: (3@3 translateBy: 0@1 negated).\x0a\x09self assert: 5@6 equals: (3@3 translateBy: 2@3).\x0a\x09self assert: 0@3 equals: (3@3 translateBy: 3 negated @0).",
messageSends: ["assert:equals:", "@", "translateBy:", "negated"],
referencedClasses: []
}),
smalltalk.PointTest);



smalltalk.addClass('RandomTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_textNext",
smalltalk.method({
selector: "textNext",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st((10000))._timesRepeat_((function(){
var current,next;
return smalltalk.withContext(function($ctx2) {next=_st(_st((smalltalk.Random || Random))._new())._next();
next;
_st(self)._assert_(_st(next).__gt_eq((0)));
_st(self)._assert_(_st(next).__lt((1)));
_st(self)._deny_(_st(current).__eq(next));
return _st(next).__eq(current);
}, function($ctx2) {$ctx2.fillBlock({current:current,next:next},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"textNext",{}, smalltalk.RandomTest)});},
args: [],
source: "textNext\x0a\x0a\x0910000 timesRepeat: [\x0a\x09\x09\x09| current next | \x0a\x09\x09\x09next := Random new next.\x0a\x09\x09\x09self assert: (next >= 0).\x0a\x09\x09\x09self assert: (next < 1).\x0a\x09\x09\x09self deny: current = next.\x0a\x09\x09\x09next = current]",
messageSends: ["timesRepeat:", "next", "new", "assert:", ">=", "<", "deny:", "="],
referencedClasses: ["Random"]
}),
smalltalk.RandomTest);



smalltalk.addClass('SetTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAddRemove",
smalltalk.method({
selector: "testAddRemove",
category: 'tests',
fn: function () {
var self=this;
var set;
return smalltalk.withContext(function($ctx1) { set=_st((smalltalk.Set || Set))._new();
_st(self)._assert_(_st(set)._isEmpty());
_st(set)._add_((3));
_st(self)._assert_(_st(set)._includes_((3)));
_st(set)._add_((5));
_st(self)._assert_(_st(set)._includes_((5)));
_st(set)._remove_((3));
_st(self)._deny_(_st(set)._includes_((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testAddRemove",{set:set}, smalltalk.SetTest)});},
args: [],
source: "testAddRemove\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09\x0a\x09self assert: set isEmpty.\x0a\x0a\x09set add: 3.\x0a\x09self assert: (set includes: 3).\x0a\x0a\x09set add: 5.\x0a\x09self assert: (set includes: 5).\x0a\x0a\x09set remove: 3.\x0a\x09self deny: (set includes: 3)",
messageSends: ["new", "assert:", "isEmpty", "add:", "includes:", "remove:", "deny:"],
referencedClasses: ["Set"]
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.Set || Set))._new())._at_put_((1),(2));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{}, smalltalk.SetTest)});},
args: [],
source: "testAt\x0a\x09self should: [Set new at: 1 put: 2] raise: Error",
messageSends: ["should:raise:", "at:put:", "new"],
referencedClasses: ["Set", "Error"]
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st([(0), (2)])._asSet(),_st(_st([(5), (6), (8)])._asSet())._collect_((function(x){
return smalltalk.withContext(function($ctx2) {return _st(x).__backslash_backslash((3));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{}, smalltalk.SetTest)})},
args: [],
source: "testCollect\x0a\x09self assert: #(0 2) asSet equals: (#(5 6 8) asSet collect: [ :x | x \x5c\x5c 3 ])",
messageSends: ["assert:equals:", "asSet", "collect:", "\x5c\x5c"],
referencedClasses: []
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testComparing",
smalltalk.method({
selector: "testComparing",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st([(0), (2)])._asSet(),_st([(0), (2)])._asSet());
_st(self)._assert_equals_(_st([(2), (0)])._asSet(),_st([(0), (2)])._asSet());
_st(self)._deny_(_st(_st([(0), (2), (3)])._asSet()).__eq(_st([(0), (2)])._asSet()));
_st(self)._deny_(_st(_st([(1), (2)])._asSet()).__eq(_st([(0), (2)])._asSet()));
return self}, function($ctx1) {$ctx1.fill(self,"testComparing",{}, smalltalk.SetTest)});},
args: [],
source: "testComparing\x0a\x09self assert: #(0 2) asSet equals: #(0 2) asSet.\x0a    self assert: #(2 0) asSet equals: #(0 2) asSet.\x0a    self deny: #(0 2 3) asSet = #(0 2) asSet.\x0a    self deny: #(1 2) asSet = #(0 2) asSet",
messageSends: ["assert:equals:", "asSet", "deny:", "="],
referencedClasses: []
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
category: 'tests',
fn: function () {
var self=this;
var set;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
set=_st((smalltalk.Set || Set))._new();
_st(self)._assert_equals_("a Set ()",_st(set)._printString());
$1=set;
_st($1)._add_((1));
$2=_st($1)._add_((3));
_st(self)._assert_equals_("a Set (1 3)",_st(set)._printString());
_st(set)._add_("foo");
_st(self)._assert_equals_("a Set (1 3 'foo')",_st(set)._printString());
$3=set;
_st($3)._remove_((1));
$4=_st($3)._remove_((3));
_st(self)._assert_equals_("a Set ('foo')",_st(set)._printString());
_st(set)._add_((3));
_st(self)._assert_equals_("a Set ('foo' 3)",_st(set)._printString());
_st(set)._add_((3));
_st(self)._assert_equals_("a Set ('foo' 3)",_st(set)._printString());
return self}, function($ctx1) {$ctx1.fill(self,"testPrintString",{set:set}, smalltalk.SetTest)});},
args: [],
source: "testPrintString\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09self assert: 'a Set ()' equals: ( set printString ).\x0a\x09set add: 1; add: 3.\x0a\x09self assert: 'a Set (1 3)' equals: ( set printString ).\x0a\x09set add: 'foo'.\x0a\x09self assert: 'a Set (1 3 ''foo'')' equals: ( set printString ).\x0a\x09set remove: 1; remove: 3.\x0a\x09self assert: 'a Set (''foo'')' equals: ( set printString ).\x0a\x09set add: 3.\x0a\x09self assert: 'a Set (''foo'' 3)' equals: ( set printString ).\x0a\x09set add: 3.\x0a\x09self assert: 'a Set (''foo'' 3)' equals: ( set printString ).",
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:"],
referencedClasses: ["Set"]
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((0),_st(_st((smalltalk.Set || Set))._new())._size());
_st(self)._assert_equals_((4),_st(_st((smalltalk.Set || Set))._withAll_([(1), (2), (3), (4)]))._size());
_st(self)._assert_equals_((1),_st(_st((smalltalk.Set || Set))._withAll_([(1), (1), (1), (1)]))._size());
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{}, smalltalk.SetTest)})},
args: [],
source: "testSize\x0a\x09self assert: 0 equals: Set new size.\x0a\x09self assert: 4 equals: (Set withAll: #(1 2 3 4)) size.\x0a\x09self assert: 1 equals: (Set withAll: #(1 1 1 1)) size",
messageSends: ["assert:equals:", "size", "new", "withAll:"],
referencedClasses: ["Set"]
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testUnicity",
smalltalk.method({
selector: "testUnicity",
category: 'tests',
fn: function (){
var self=this;
var set;
return smalltalk.withContext(function($ctx1) { set=_st((smalltalk.Set || Set))._new();
_st(set)._add_((21));
_st(set)._add_("hello");
_st(set)._add_((21));
_st(self)._assert_(_st(_st(set)._size()).__eq((2)));
_st(set)._add_("hello");
_st(self)._assert_(_st(_st(set)._size()).__eq((2)));
_st(self)._assert_equals_([(21), "hello"],_st(set)._asArray());
return self}, function($ctx1) {$ctx1.fill(self,"testUnicity",{set:set}, smalltalk.SetTest)})},
args: [],
source: "testUnicity\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09set add: 21.\x0a\x09set add: 'hello'.\x0a\x0a\x09set add: 21.\x0a\x09self assert: set size = 2.\x0a\x09\x0a\x09set add: 'hello'.\x0a\x09self assert: set size = 2.\x0a\x0a\x09self assert: #(21 'hello') equals: set asArray",
messageSends: ["new", "add:", "assert:", "=", "size", "assert:equals:", "asArray"],
referencedClasses: ["Set"]
}),
smalltalk.SetTest);



smalltalk.addClass('UndefinedTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(nil,_st(nil)._copy());
return self}, function($ctx1) {$ctx1.fill(self,"testCopying",{}, smalltalk.UndefinedTest)})},
args: [],
source: "testCopying\x0a\x09self assert: nil equals: nil copy",
messageSends: ["assert:equals:", "copy"],
referencedClasses: []
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testDeepCopy",
smalltalk.method({
selector: "testDeepCopy",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st(nil)._deepCopy()).__eq(nil));
return self}, function($ctx1) {$ctx1.fill(self,"testDeepCopy",{}, smalltalk.UndefinedTest)});},
args: [],
source: "testDeepCopy\x0a\x09self assert: nil deepCopy = nil",
messageSends: ["assert:", "=", "deepCopy"],
referencedClasses: []
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testIfNil",
smalltalk.method({
selector: "testIfNil",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$5,$4,$6,$7;
$1=self;
if(($receiver = nil) == nil || $receiver == undefined){
$2=true;
} else {
$2=nil;
};
_st($1)._assert_equals_(true,$2);
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
_st($6)._assert_equals_(true,$7);
_st(self)._deny_(_st(_st(nil)._ifNotNil_ifNil_((function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))).__eq(true));
return self}, function($ctx1) {$ctx1.fill(self,"testIfNil",{}, smalltalk.UndefinedTest)})},
args: [],
source: "testIfNil\x0a\x09self assert: true equals: (nil ifNil: [true]).\x0a\x09self deny: (nil ifNotNil: [true]) = true.\x0a\x09self assert: true equals: (nil ifNil: [true] ifNotNil: [false]).\x0a\x09self deny: (nil ifNotNil: [true] ifNil: [false]) = true",
messageSends: ["assert:equals:", "ifNil:", "deny:", "=", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"],
referencedClasses: []
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testIsNil",
smalltalk.method({
selector: "testIsNil",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(nil)._isNil());
_st(self)._deny_(_st(nil)._notNil());
return self}, function($ctx1) {$ctx1.fill(self,"testIsNil",{}, smalltalk.UndefinedTest)})},
args: [],
source: "testIsNil\x0a\x09self assert: nil isNil.\x0a\x09self deny: nil notNil.",
messageSends: ["assert:", "isNil", "deny:", "notNil"],
referencedClasses: []
}),
smalltalk.UndefinedTest);



