smalltalk.addPackage('Kernel-Tests');
smalltalk.addClass('BlockClosureTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCanClearInterval",
smalltalk.method({
selector: "testCanClearInterval",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st((smalltalk.Error || Error))._new())._signal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._valueWithInterval_((0)))._clearInterval();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testCanClearInterval",{},smalltalk.BlockClosureTest)})},
messageSends: ["shouldnt:raise:", "clearInterval", "valueWithInterval:", "signal", "new"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testCanClearTimeout",
smalltalk.method({
selector: "testCanClearTimeout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st((smalltalk.Error || Error))._new())._signal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._valueWithTimeout_((0)))._clearTimeout();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testCanClearTimeout",{},smalltalk.BlockClosureTest)})},
messageSends: ["shouldnt:raise:", "clearTimeout", "valueWithTimeout:", "signal", "new"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testCompiledSource",
smalltalk.method({
selector: "testCompiledSource",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st((function(){
return smalltalk.withContext(function($ctx2) {return _st((1)).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._compiledSource())._includesSubString_("function"));
return self}, function($ctx1) {$ctx1.fill(self,"testCompiledSource",{},smalltalk.BlockClosureTest)})},
messageSends: ["assert:", "includesSubString:", "compiledSource", "+"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testCurrySelf",
smalltalk.method({
selector: "testCurrySelf",
fn: function (){
var self=this;
var curriedMethod,array;
return smalltalk.withContext(function($ctx1) { curriedMethod=_st(_st((function(selfarg,x){
return smalltalk.withContext(function($ctx2) {return _st(selfarg)._at_(x);
}, function($ctx2) {$ctx2.fillBlock({selfarg:selfarg,x:x},$ctx1)})}))._currySelf())._asCompiledMethod_("foo:");
array=[(3), (1), (4)];
_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._installMethod_forClass_category_(curriedMethod,(smalltalk.Array || Array),"**test helper");
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._assert_equals_(_st(array)._foo_((2)),(1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.Array || Array))._removeCompiledMethod_(curriedMethod);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testCurrySelf",{curriedMethod:curriedMethod,array:array},smalltalk.BlockClosureTest)})},
messageSends: ["asCompiledMethod:", "currySelf", "at:", "installMethod:forClass:category:", "new", "ensure:", "removeCompiledMethod:", "assert:equals:", "foo:"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testEnsure",
smalltalk.method({
selector: "testEnsure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((function(){
return smalltalk.withContext(function($ctx2) {return (3);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {return (4);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testEnsure",{},smalltalk.BlockClosureTest)})},
messageSends: ["assert:equals:", "ensure:"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testEnsureRaises",
smalltalk.method({
selector: "testEnsureRaises",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st((smalltalk.Error || Error))._new())._signal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx3) {return true;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testEnsureRaises",{},smalltalk.BlockClosureTest)})},
messageSends: ["should:raise:", "ensure:", "signal", "new"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testExceptionSemantics",
smalltalk.method({
selector: "testExceptionSemantics",
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"testExceptionSemantics",{},smalltalk.BlockClosureTest)})},
messageSends: ["timeout:", "valueWithTimeout:", "async:", "on:do:", "finished", "assert:", "signal", "deny:"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testNumArgs",
smalltalk.method({
selector: "testNumArgs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._numArgs(),(0));
_st(self)._assert_equals_(_st((function(a,b){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}))._numArgs(),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testNumArgs",{},smalltalk.BlockClosureTest)})},
messageSends: ["assert:equals:", "numArgs"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testOnDo",
smalltalk.method({
selector: "testOnDo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.Error || Error))._new())._signal();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(ex){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testOnDo",{},smalltalk.BlockClosureTest)})},
messageSends: ["assert:", "on:do:", "signal", "new"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testValue",
smalltalk.method({
selector: "testValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((function(){
return smalltalk.withContext(function($ctx2) {return _st((1)).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._value(),(2));
_st(self)._assert_equals_(_st((function(x){
return smalltalk.withContext(function($ctx2) {return _st(x).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}))._value_((2)),(3));
_st(self)._assert_equals_(_st((function(x,y){
return smalltalk.withContext(function($ctx2) {return _st(x).__star(y);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1)})}))._value_value_((2),(4)),(8));
_st(self)._assert_equals_(_st((function(a,b,c){
return smalltalk.withContext(function($ctx2) {return (1);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})}))._value(),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testValue",{},smalltalk.BlockClosureTest)})},
messageSends: ["assert:equals:", "value", "+", "value:", "value:value:", "*"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testValueWithPossibleArguments",
smalltalk.method({
selector: "testValueWithPossibleArguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((function(){
return smalltalk.withContext(function($ctx2) {return (1);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithPossibleArguments_([(3), (4)]),(1));
_st(self)._assert_equals_(_st((function(a){
return smalltalk.withContext(function($ctx2) {return _st(a).__plus((4));
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1)})}))._valueWithPossibleArguments_([(3), (4)]),(7));
_st(self)._assert_equals_(_st((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(a).__plus(b);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}))._valueWithPossibleArguments_([(3), (4), (5)]),(7));
return self}, function($ctx1) {$ctx1.fill(self,"testValueWithPossibleArguments",{},smalltalk.BlockClosureTest)})},
messageSends: ["assert:equals:", "valueWithPossibleArguments:", "+"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testWhileFalse",
smalltalk.method({
selector: "testWhileFalse",
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
_st(self)._assert_equals_(i,(6));
i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {i=_st(i).__plus((1));
i;
return _st(i).__gt((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse();
_st(self)._assert_equals_(i,(6));
return self}, function($ctx1) {$ctx1.fill(self,"testWhileFalse",{i:i},smalltalk.BlockClosureTest)})},
messageSends: ["whileFalse:", "+", ">", "assert:equals:", "whileFalse"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testWhileTrue",
smalltalk.method({
selector: "testWhileTrue",
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
_st(self)._assert_equals_(i,(5));
i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {i=_st(i).__plus((1));
i;
return _st(i).__lt((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue();
_st(self)._assert_equals_(i,(5));
return self}, function($ctx1) {$ctx1.fill(self,"testWhileTrue",{i:i},smalltalk.BlockClosureTest)})},
messageSends: ["whileTrue:", "+", "<", "assert:equals:", "whileTrue"]}),
smalltalk.BlockClosureTest);



smalltalk.addClass('BooleanTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{},smalltalk.BooleanTest)})},
messageSends: ["deny:", "=", "assert:", "yourself"]}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},smalltalk.BooleanTest)})},
messageSends: ["deny:", "==", "assert:", "yourself"]}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testIfTrueIfFalse",
smalltalk.method({
selector: "testIfTrueIfFalse",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16;
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
messageSends: ["assert:equals:", "ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"]}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testIfTrueIfFalseWithBoxing",
smalltalk.method({
selector: "testIfTrueIfFalseWithBoxing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4,$6,$5,$7,$9,$8,$10,$12,$11,$13,$15,$14,$16,$18,$17,$19,$21,$20,$22,$24,$23;
$1=self;
$3=_st(true)._yourself();
if(smalltalk.assert($3)){
$2="alternative block";
};
_st($1)._assert_equals_($2,"alternative block");
$4=self;
$6=_st(true)._yourself();
if(! smalltalk.assert($6)){
$5="alternative block";
};
_st($4)._assert_equals_($5,nil);
$7=self;
$9=_st(false)._yourself();
if(smalltalk.assert($9)){
$8="alternative block";
};
_st($7)._assert_equals_($8,nil);
$10=self;
$12=_st(false)._yourself();
if(! smalltalk.assert($12)){
$11="alternative block";
};
_st($10)._assert_equals_($11,"alternative block");
$13=self;
$15=_st(false)._yourself();
if(smalltalk.assert($15)){
$14="alternative block";
} else {
$14="alternative block2";
};
_st($13)._assert_equals_($14,"alternative block2");
$16=self;
$18=_st(false)._yourself();
if(smalltalk.assert($18)){
$17="alternative block2";
} else {
$17="alternative block";
};
_st($16)._assert_equals_($17,"alternative block");
$19=self;
$21=_st(true)._yourself();
if(smalltalk.assert($21)){
$20="alternative block";
} else {
$20="alternative block2";
};
_st($19)._assert_equals_($20,"alternative block");
$22=self;
$24=_st(true)._yourself();
if(smalltalk.assert($24)){
$23="alternative block2";
} else {
$23="alternative block";
};
_st($22)._assert_equals_($23,"alternative block2");
return self}, function($ctx1) {$ctx1.fill(self,"testIfTrueIfFalseWithBoxing",{},smalltalk.BooleanTest)})},
messageSends: ["assert:equals:", "ifTrue:", "yourself", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"]}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testLogic",
smalltalk.method({
selector: "testLogic",
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
return self}, function($ctx1) {$ctx1.fill(self,"testLogic",{},smalltalk.BooleanTest)})},
messageSends: ["assert:", "&", "deny:", "|", ">"]}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testLogicKeywords",
smalltalk.method({
selector: "testLogicKeywords",
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
return self}, function($ctx1) {$ctx1.fill(self,"testLogicKeywords",{},smalltalk.BooleanTest)})},
messageSends: ["assert:", "and:", "deny:", "or:", ">"]}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testNonBooleanError",
smalltalk.method({
selector: "testNonBooleanError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {if(smalltalk.assert("")){
} else {
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.NonBooleanReceiver || NonBooleanReceiver));
return self}, function($ctx1) {$ctx1.fill(self,"testNonBooleanError",{},smalltalk.BooleanTest)})},
messageSends: ["should:raise:", "ifTrue:ifFalse:"]}),
smalltalk.BooleanTest);



smalltalk.addClass('ClassBuilderTest', smalltalk.TestCase, ['builder', 'theClass'], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@builder"]=_st((smalltalk.ClassBuilder || ClassBuilder))._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ClassBuilderTest)})},
messageSends: ["new"]}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.ClassBuilderTest)})},
messageSends: ["ifNotNil:", "removeClass:", "current"]}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testClassCopy",
smalltalk.method({
selector: "testClassCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=_st(self["@builder"])._copyClass_named_((smalltalk.ObjectMock || ObjectMock),"ObjectMock2");
_st(self)._assert_(_st(_st(self["@theClass"])._superclass()).__eq_eq(_st((smalltalk.ObjectMock || ObjectMock))._superclass()));
_st(self)._assert_(_st(_st(self["@theClass"])._instanceVariableNames()).__eq_eq(_st((smalltalk.ObjectMock || ObjectMock))._instanceVariableNames()));
_st(self)._assert_equals_(_st(self["@theClass"])._name(),"ObjectMock2");
_st(self)._assert_(_st(_st(self["@theClass"])._package()).__eq_eq(_st((smalltalk.ObjectMock || ObjectMock))._package()));
_st(self)._assert_equals_(_st(_st(self["@theClass"])._methodDictionary())._keys(),_st(_st((smalltalk.ObjectMock || ObjectMock))._methodDictionary())._keys());
return self}, function($ctx1) {$ctx1.fill(self,"testClassCopy",{},smalltalk.ClassBuilderTest)})},
messageSends: ["copyClass:named:", "assert:", "==", "superclass", "instanceVariableNames", "assert:equals:", "name", "package", "keys", "methodDictionary"]}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testClassMigration",
smalltalk.method({
selector: "testClassMigration",
fn: function (){
var self=this;
var instance,oldClass;
return smalltalk.withContext(function($ctx1) { oldClass=_st(self["@builder"])._copyClass_named_((smalltalk.ObjectMock || ObjectMock),"ObjectMock2");
instance=_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_("ObjectMock2"))._new();
_st((smalltalk.ObjectMock || ObjectMock))._subclass_instanceVariableNames_package_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_("ObjectMock2"),"","Kernel-Tests");
_st(self)._deny_(_st(oldClass).__eq_eq((smalltalk.ObjectMock2 || ObjectMock2)));
_st(self)._assert_(_st(_st((smalltalk.ObjectMock2 || ObjectMock2))._superclass()).__eq_eq((smalltalk.ObjectMock || ObjectMock)));
_st(self)._assert_(_st(_st((smalltalk.ObjectMock2 || ObjectMock2))._instanceVariableNames())._isEmpty());
_st(self)._assert_equals_(_st((smalltalk.ObjectMock2 || ObjectMock2))._selectors(),_st(oldClass)._selectors());
_st(self)._assert_equals_(_st((smalltalk.ObjectMock2 || ObjectMock2))._comment(),_st(oldClass)._comment());
_st(self)._assert_equals_(_st(_st((smalltalk.ObjectMock2 || ObjectMock2))._package())._name(),"Kernel-Tests");
_st(self)._deny_(_st(_st(instance)._class()).__eq_eq((smalltalk.ObjectMock2 || ObjectMock2)));
_st(self)._assert_(_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(_st(_st(instance)._class())._name()))._isNil());
_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._removeClass_((smalltalk.ObjectMock2 || ObjectMock2));
return self}, function($ctx1) {$ctx1.fill(self,"testClassMigration",{instance:instance,oldClass:oldClass},smalltalk.ClassBuilderTest)})},
messageSends: ["copyClass:named:", "new", "at:", "current", "subclass:instanceVariableNames:package:", "deny:", "==", "assert:", "superclass", "isEmpty", "instanceVariableNames", "assert:equals:", "selectors", "comment", "name", "package", "class", "isNil", "removeClass:"]}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testClassMigrationWithClassInstanceVariables",
smalltalk.method({
selector: "testClassMigrationWithClassInstanceVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@builder"])._copyClass_named_((smalltalk.ObjectMock || ObjectMock),"ObjectMock2");
_st(_st((smalltalk.ObjectMock2 || ObjectMock2))._class())._instanceVariableNames_("foo bar");
_st((smalltalk.ObjectMock || ObjectMock))._subclass_instanceVariableNames_package_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_("ObjectMock2"),"","Kernel-Tests");
_st(self)._assert_equals_(_st(_st((smalltalk.ObjectMock2 || ObjectMock2))._class())._instanceVariableNames(),["foo", "bar"]);
_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._removeClass_((smalltalk.ObjectMock2 || ObjectMock2));
return self}, function($ctx1) {$ctx1.fill(self,"testClassMigrationWithClassInstanceVariables",{},smalltalk.ClassBuilderTest)})},
messageSends: ["copyClass:named:", "instanceVariableNames:", "class", "subclass:instanceVariableNames:package:", "at:", "current", "assert:equals:", "instanceVariableNames", "removeClass:"]}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testClassMigrationWithSubclasses",
smalltalk.method({
selector: "testClassMigrationWithSubclasses",
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"testClassMigrationWithSubclasses",{},smalltalk.ClassBuilderTest)})},
messageSends: ["copyClass:named:", "subclass:instanceVariableNames:package:", "at:", "current", "assert:", "includes:", "subclasses", "do:", "removeClass:", "allSubclasses"]}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testInstanceVariableNames",
smalltalk.method({
selector: "testInstanceVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@builder"])._instanceVariableNamesFor_("  hello   world   "),["hello", "world"]);
return self}, function($ctx1) {$ctx1.fill(self,"testInstanceVariableNames",{},smalltalk.ClassBuilderTest)})},
messageSends: ["assert:equals:", "instanceVariableNamesFor:"]}),
smalltalk.ClassBuilderTest);



smalltalk.addClass('CollectionTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_assertSameContents_as_",
smalltalk.method({
selector: "assertSameContents:as:",
fn: function (aCollection,anotherCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st(aCollection)._size()).__eq(_st(anotherCollection)._size()));
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._assert_(_st(_st(aCollection)._occurrencesOf_(each)).__eq(_st(anotherCollection)._occurrencesOf_(each)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"assertSameContents:as:",{aCollection:aCollection,anotherCollection:anotherCollection},smalltalk.CollectionTest)})},
messageSends: ["assert:", "=", "size", "do:", "occurrencesOf:"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._collectionClass())._withAll_(_st(self)._defaultValues());
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.CollectionTest)})},
messageSends: ["withAll:", "defaultValues", "collectionClass"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._collectionClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.CollectionTest)})},
messageSends: ["collectionClass", "class"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._collectionClass())._withAll_(["a", "b", "c", (1), (2), (1), "a"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},smalltalk.CollectionTest)})},
messageSends: ["withAll:", "collectionClass"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_defaultValues",
smalltalk.method({
selector: "defaultValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return [(1), (2), (3), (-4)];
}, function($ctx1) {$ctx1.fill(self,"defaultValues",{},smalltalk.CollectionTest)})},
messageSends: []}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_isCollectionReadOnly",
smalltalk.method({
selector: "isCollectionReadOnly",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isCollectionReadOnly",{},smalltalk.CollectionTest)})},
messageSends: []}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsArray",
smalltalk.method({
selector: "testAsArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assertSameContents_as_(_st(self)._collection(),_st(_st(self)._collection())._asArray());
return self}, function($ctx1) {$ctx1.fill(self,"testAsArray",{},smalltalk.CollectionTest)})},
messageSends: ["assertSameContents:as:", "collection", "asArray"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsOrderedCollection",
smalltalk.method({
selector: "testAsOrderedCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assertSameContents_as_(_st(self)._collection(),_st(_st(self)._collection())._asOrderedCollection());
return self}, function($ctx1) {$ctx1.fill(self,"testAsOrderedCollection",{},smalltalk.CollectionTest)})},
messageSends: ["assertSameContents:as:", "collection", "asOrderedCollection"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsSet",
smalltalk.method({
selector: "testAsSet",
fn: function (){
var self=this;
var c,set;
return smalltalk.withContext(function($ctx1) { c=_st(self)._collectionWithDuplicates();
set=_st(c)._asSet();
_st(self)._assert_equals_(_st(set)._size(),(5));
_st(c)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._assert_(_st(set)._includes_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testAsSet",{c:c,set:set},smalltalk.CollectionTest)})},
messageSends: ["collectionWithDuplicates", "asSet", "assert:equals:", "size", "do:", "assert:", "includes:"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection=[(1), (2), (3), (4)];
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._abs();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{newCollection:newCollection},smalltalk.CollectionTest)})},
messageSends: ["assertSameContents:as:", "collect:", "abs", "collection"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st(self)._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__lt((0));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),(-4));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(each).__eq((6));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testDetect",{},smalltalk.CollectionTest)})},
messageSends: ["assert:equals:", "detect:", "<", "collection", "should:raise:", "="]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testDo",
smalltalk.method({
selector: "testDo",
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
_st(_st(self)._collection())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(newCollection)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._assertSameContents_as_(_st(self)._collection(),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testDo",{newCollection:newCollection},smalltalk.CollectionTest)})},
messageSends: ["new", "do:", "add:", "collection", "assertSameContents:as:"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testIsEmpty",
smalltalk.method({
selector: "testIsEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st(_st(self)._collectionClass())._new())._isEmpty());
_st(self)._deny_(_st(_st(self)._collection())._isEmpty());
return self}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{},smalltalk.CollectionTest)})},
messageSends: ["assert:", "isEmpty", "new", "collectionClass", "deny:", "collection"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection=[(2), (-4)];
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._even();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testSelect",{newCollection:newCollection},smalltalk.CollectionTest)})},
messageSends: ["assertSameContents:as:", "select:", "even", "collection"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st(_st(self)._collectionClass())._new())._size(),(0));
_st(self)._assert_equals_(_st(_st(self)._collection())._size(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{},smalltalk.CollectionTest)})},
messageSends: ["assert:equals:", "size", "new", "collectionClass", "collection"]}),
smalltalk.CollectionTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return nil;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.CollectionTest.klass)})},
messageSends: []}),
smalltalk.CollectionTest.klass);

smalltalk.addMethod(
"_isAbstract",
smalltalk.method({
selector: "isAbstract",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._collectionClass())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.CollectionTest.klass)})},
messageSends: ["isNil", "collectionClass"]}),
smalltalk.CollectionTest.klass);


smalltalk.addClass('HashedCollectionTest', smalltalk.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("b").__minus_gt((1)),_st("a").__minus_gt((2)),_st("c").__minus_gt((3)),_st("d").__minus_gt((-4))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.HashedCollectionTest)})},
messageSends: ["->"]}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("b").__minus_gt((1)),_st("a").__minus_gt((2)),_st("c").__minus_gt((3)),_st("d").__minus_gt((-4)),_st("e").__minus_gt((1)),_st("f").__minus_gt((2)),_st("g").__minus_gt((10))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},smalltalk.HashedCollectionTest)})},
messageSends: ["->"]}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
"_testIndexOf",
smalltalk.method({
selector: "testIndexOf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st(self)._collection())._indexOf_((2)),"a");
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._collection())._indexOf_((999));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
_st(self)._assert_equals_(_st(_st(self)._collection())._indexOf_ifAbsent_((999),(function(){
return smalltalk.withContext(function($ctx2) {return "sentinel";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"sentinel");
return self}, function($ctx1) {$ctx1.fill(self,"testIndexOf",{},smalltalk.HashedCollectionTest)})},
messageSends: ["assert:equals:", "indexOf:", "collection", "should:raise:", "indexOf:ifAbsent:"]}),
smalltalk.HashedCollectionTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.HashedCollection || HashedCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.HashedCollectionTest.klass)})},
messageSends: []}),
smalltalk.HashedCollectionTest.klass);


smalltalk.addClass('DictionaryTest', smalltalk.HashedCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.DictionaryTest)})},
messageSends: ["at:put:", "new", "yourself"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},smalltalk.DictionaryTest)})},
messageSends: ["at:put:", "new", "yourself"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testAccessing",
smalltalk.method({
selector: "testAccessing",
fn: function (){
var self=this;
var d;
return smalltalk.withContext(function($ctx1) { d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_("hello","world");
_st(self)._assert_equals_(_st(d)._at_("hello"),"world");
_st(self)._assert_equals_(_st(d)._at_ifAbsent_("hello",(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"world");
_st(self)._deny_(_st(_st(d)._at_ifAbsent_("foo",(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))).__eq("world"));
_st(self)._assert_(_st(d)._includesKey_("hello"));
_st(self)._deny_(_st(d)._includesKey_("foo"));
_st(d)._at_put_((1),(2));
_st(self)._assert_equals_(_st(d)._at_((1)),(2));
_st(d)._at_put_(_st((1)).__at((3)),(3));
_st(self)._assert_equals_(_st(d)._at_(_st((1)).__at((3))),(3));
_st(self)._assert_(_st(d)._includesKey_(_st((1)).__at((3))));
_st(self)._deny_(_st(d)._includesKey_(_st((3)).__at((1))));
return self}, function($ctx1) {$ctx1.fill(self,"testAccessing",{d:d},smalltalk.DictionaryTest)})},
messageSends: ["new", "at:put:", "assert:equals:", "at:", "at:ifAbsent:", "deny:", "=", "assert:", "includesKey:", "@"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testDynamicDictionaries",
smalltalk.method({
selector: "testDynamicDictionaries",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(smalltalk.HashedCollection._fromPairs_([_st("hello").__minus_gt((1))]))._asDictionary(),_st((smalltalk.Dictionary || Dictionary))._with_(_st("hello").__minus_gt((1))));
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaries",{},smalltalk.DictionaryTest)})},
messageSends: ["assert:equals:", "asDictionary", "->", "with:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{d1:d1,d2:d2},smalltalk.DictionaryTest)})},
messageSends: ["assert:", "=", "new", "at:put:", "yourself", "deny:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfAbsent",
smalltalk.method({
selector: "testIfAbsent",
fn: function (){
var self=this;
var d,visited;
return smalltalk.withContext(function($ctx1) { visited=false;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_ifAbsent_("hello",(function(){
return smalltalk.withContext(function($ctx2) {visited=true;
return visited;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._assert_(visited);
return self}, function($ctx1) {$ctx1.fill(self,"testIfAbsent",{d:d,visited:visited},smalltalk.DictionaryTest)})},
messageSends: ["new", "at:ifAbsent:", "assert:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfPresent",
smalltalk.method({
selector: "testIfPresent",
fn: function (){
var self=this;
var d,visited,absent;
return smalltalk.withContext(function($ctx1) { visited=false;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_("hello","world");
_st(d)._at_ifPresent_("hello",(function(value){
return smalltalk.withContext(function($ctx2) {visited=value;
return visited;
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
_st(self)._assert_equals_(visited,"world");
absent=_st(d)._at_ifPresent_("bye",(function(value){
return smalltalk.withContext(function($ctx2) {visited=value;
return visited;
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
_st(self)._assert_(_st(absent)._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testIfPresent",{d:d,visited:visited,absent:absent},smalltalk.DictionaryTest)})},
messageSends: ["new", "at:put:", "at:ifPresent:", "assert:equals:", "assert:", "isNil"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfPresentIfAbsent",
smalltalk.method({
selector: "testIfPresentIfAbsent",
fn: function (){
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
_st(self)._assert_equals_(visited,"world");
_st(d)._at_ifPresent_ifAbsent_("buy",(function(value){
return smalltalk.withContext(function($ctx2) {visited=value;
return visited;
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {visited=true;
return visited;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._assert_(visited);
return self}, function($ctx1) {$ctx1.fill(self,"testIfPresentIfAbsent",{d:d,visited:visited},smalltalk.DictionaryTest)})},
messageSends: ["new", "at:put:", "at:ifPresent:ifAbsent:", "assert:equals:", "assert:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testKeys",
smalltalk.method({
selector: "testKeys",
fn: function (){
var self=this;
var d;
return smalltalk.withContext(function($ctx1) { d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
_st(self)._assert_equals_(_st(d)._keys(),[(1), (2), (3)]);
return self}, function($ctx1) {$ctx1.fill(self,"testKeys",{d:d},smalltalk.DictionaryTest)})},
messageSends: ["new", "at:put:", "assert:equals:", "keys"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testPointKey",
smalltalk.method({
selector: "testPointKey",
fn: function (){
var self=this;
var d;
return smalltalk.withContext(function($ctx1) { d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_(_st((1)).__at((1)),"foo");
_st(self)._assert_equals_(_st(d)._at_(_st((1)).__at((1))),"foo");
_st(d)._at_put_(_st((1)).__at((1)),"bar");
_st(self)._assert_equals_(_st(d)._at_(_st((1)).__at((1))),"bar");
_st(d)._removeKey_(_st((1)).__at((1)));
_st(self)._assert_equals_(_st(d)._at_ifAbsent_(_st((1)).__at((1)),(function(){
return smalltalk.withContext(function($ctx2) {return "baz";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"baz");
_st(self)._deny_(_st(d)._includesKey_(_st((1)).__at((1))));
return self}, function($ctx1) {$ctx1.fill(self,"testPointKey",{d:d},smalltalk.DictionaryTest)})},
messageSends: ["new", "at:put:", "@", "assert:equals:", "at:", "removeKey:", "at:ifAbsent:", "deny:", "includesKey:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.Dictionary || Dictionary))._new();
_st($1)._at_put_("firstname","James");
_st($1)._at_put_("lastname","Bond");
$2=_st($1)._printString();
_st(self)._assert_equals_($2,"a Dictionary('firstname'->'James' , 'lastname'->'Bond')");
return self}, function($ctx1) {$ctx1.fill(self,"testPrintString",{},smalltalk.DictionaryTest)})},
messageSends: ["assert:equals:", "at:put:", "new", "printString"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testRemoveKey",
smalltalk.method({
selector: "testRemoveKey",
fn: function (){
var self=this;
var d,key;
return smalltalk.withContext(function($ctx1) { d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
key=(2);
_st(self)._assert_equals_(_st(d)._keys(),[(1), (2), (3)]);
_st(d)._removeKey_(key);
_st(self)._assert_equals_(_st(d)._keys(),[(1), (3)]);
_st(self)._assert_equals_(_st(d)._values(),[(2), (4)]);
_st(self)._deny_(_st(d)._includesKey_((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveKey",{d:d,key:key},smalltalk.DictionaryTest)})},
messageSends: ["new", "at:put:", "assert:equals:", "keys", "removeKey:", "values", "deny:", "includesKey:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testRemoveKeyIfAbsent",
smalltalk.method({
selector: "testRemoveKeyIfAbsent",
fn: function (){
var self=this;
var d,key;
return smalltalk.withContext(function($ctx1) { d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
key=(2);
_st(self)._assert_equals_(_st(d)._removeKey_(key),(3));
key=(3);
_st(self)._assert_equals_(_st(d)._removeKey_ifAbsent_(key,(function(){
return smalltalk.withContext(function($ctx2) {return (42);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),(4));
key="why";
_st(self)._assert_equals_(_st(d)._removeKey_ifAbsent_(key,(function(){
return smalltalk.withContext(function($ctx2) {return (42);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),(42));
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveKeyIfAbsent",{d:d,key:key},smalltalk.DictionaryTest)})},
messageSends: ["new", "at:put:", "assert:equals:", "removeKey:", "removeKey:ifAbsent:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function (){
var self=this;
var d;
return smalltalk.withContext(function($ctx1) { d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(self)._assert_equals_(_st(d)._size(),(0));
_st(d)._at_put_((1),(2));
_st(self)._assert_equals_(_st(d)._size(),(1));
_st(d)._at_put_((2),(3));
_st(self)._assert_equals_(_st(d)._size(),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{d:d},smalltalk.DictionaryTest)})},
messageSends: ["new", "assert:equals:", "size", "at:put:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testValues",
smalltalk.method({
selector: "testValues",
fn: function (){
var self=this;
var d;
return smalltalk.withContext(function($ctx1) { d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
_st(self)._assert_equals_(_st(d)._values(),[(2), (3), (4)]);
return self}, function($ctx1) {$ctx1.fill(self,"testValues",{d:d},smalltalk.DictionaryTest)})},
messageSends: ["new", "at:put:", "assert:equals:", "values"]}),
smalltalk.DictionaryTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.Dictionary || Dictionary);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.DictionaryTest.klass)})},
messageSends: []}),
smalltalk.DictionaryTest.klass);


smalltalk.addClass('SequenceableCollectionTest', smalltalk.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st(self)._collection())._at_((4)),(-4));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._collection())._at_((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},smalltalk.SequenceableCollectionTest)})},
messageSends: ["assert:equals:", "at:", "collection", "should:raise:"]}),
smalltalk.SequenceableCollectionTest);

smalltalk.addMethod(
"_testAtIfAbsent",
smalltalk.method({
selector: "testAtIfAbsent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st(self)._collection())._at_ifAbsent_(_st(_st(_st(self)._collection())._size()).__plus((1)),(function(){
return smalltalk.withContext(function($ctx2) {return "none";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"none");
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{},smalltalk.SequenceableCollectionTest)})},
messageSends: ["assert:equals:", "at:ifAbsent:", "+", "size", "collection"]}),
smalltalk.SequenceableCollectionTest);



smalltalk.addClass('ArrayTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAtIfAbsent",
smalltalk.method({
selector: "testAtIfAbsent",
fn: function (){
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { array=["hello", "world"];
_st(self)._assert_equals_(_st(array)._at_((1)),"hello");
_st(self)._assert_equals_(_st(array)._at_((2)),"world");
_st(self)._assert_equals_(_st(array)._at_ifAbsent_((2),(function(){
return smalltalk.withContext(function($ctx2) {return "not found";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"world");
_st(self)._assert_equals_(_st(array)._at_ifAbsent_((0),(function(){
return smalltalk.withContext(function($ctx2) {return "not found";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"not found");
_st(self)._assert_equals_(_st(array)._at_ifAbsent_((-10),(function(){
return smalltalk.withContext(function($ctx2) {return "not found";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"not found");
_st(self)._assert_equals_(_st(array)._at_ifAbsent_((3),(function(){
return smalltalk.withContext(function($ctx2) {return "not found";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"not found");
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{array:array},smalltalk.ArrayTest)})},
messageSends: ["assert:equals:", "at:", "at:ifAbsent:"]}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testFirstN",
smalltalk.method({
selector: "testFirstN",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st([(1),(2),(3),(4),(5)])._first_((3)),[(1),(2),(3)]);
return self}, function($ctx1) {$ctx1.fill(self,"testFirstN",{},smalltalk.ArrayTest)})},
messageSends: ["assert:equals:", "first:"]}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testIfEmpty",
smalltalk.method({
selector: "testIfEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st("")._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {return "zork";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"zork");
return self}, function($ctx1) {$ctx1.fill(self,"testIfEmpty",{},smalltalk.ArrayTest)})},
messageSends: ["assert:equals:", "ifEmpty:"]}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
fn: function (){
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
array=_st((smalltalk.Array || Array))._new();
_st(self)._assert_equals_(_st(array)._printString(),"a Array ()");
$1=array;
_st($1)._add_((1));
$2=_st($1)._add_((3));
_st(self)._assert_equals_(_st(array)._printString(),"a Array (1 3)");
_st(array)._add_("foo");
_st(self)._assert_equals_(_st(array)._printString(),"a Array (1 3 'foo')");
$3=array;
_st($3)._remove_((1));
$4=_st($3)._remove_((3));
_st(self)._assert_equals_(_st(array)._printString(),"a Array ('foo')");
_st(array)._addLast_((3));
_st(self)._assert_equals_(_st(array)._printString(),"a Array ('foo' 3)");
_st(array)._addLast_((3));
_st(self)._assert_equals_(_st(array)._printString(),"a Array ('foo' 3 3)");
return self}, function($ctx1) {$ctx1.fill(self,"testPrintString",{array:array},smalltalk.ArrayTest)})},
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:", "addLast:"]}),
smalltalk.ArrayTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.Array || Array);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.ArrayTest.klass)})},
messageSends: []}),
smalltalk.ArrayTest.klass);


smalltalk.addClass('StringTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "hello";
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.StringTest)})},
messageSends: []}),
smalltalk.StringTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "abbaerte";
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},smalltalk.StringTest)})},
messageSends: []}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAddRemove",
smalltalk.method({
selector: "testAddRemove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st("hello")._add_("a");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st("hello")._remove_("h");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testAddRemove",{},smalltalk.StringTest)})},
messageSends: ["should:raise:", "add:", "remove:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAsArray",
smalltalk.method({
selector: "testAsArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st("hello")._asArray(),["h", "e", "l", "l", "o"]);
return self}, function($ctx1) {$ctx1.fill(self,"testAsArray",{},smalltalk.StringTest)})},
messageSends: ["assert:equals:", "asArray"]}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st("hello")._at_((1)),"h");
_st(self)._assert_equals_(_st("hello")._at_((5)),"o");
_st(self)._assert_equals_(_st("hello")._at_ifAbsent_((6),(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},smalltalk.StringTest)})},
messageSends: ["assert:equals:", "at:", "at:ifAbsent:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAtPut",
smalltalk.method({
selector: "testAtPut",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st("hello")._at_put_((1),"a");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testAtPut",{},smalltalk.StringTest)})},
messageSends: ["should:raise:", "at:put:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection="hheelllloo";
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__comma(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{newCollection:newCollection},smalltalk.StringTest)})},
messageSends: ["assertSameContents:as:", "collect:", ",", "collection"]}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testCopyWithoutAll",
smalltalk.method({
selector: "testCopyWithoutAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st("*hello* *world*")._copyWithoutAll_("*"),"hello world");
return self}, function($ctx1) {$ctx1.fill(self,"testCopyWithoutAll",{},smalltalk.StringTest)})},
messageSends: ["assert:equals:", "copyWithoutAll:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st(self)._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__eq("h");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),"h");
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(each).__eq((6));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testDetect",{},smalltalk.StringTest)})},
messageSends: ["assert:equals:", "detect:", "=", "collection", "should:raise:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("hello","hello");
_st(self)._deny_(_st("hello").__eq("world"));
_st(self)._assert_equals_("hello",_st("hello")._yourself());
_st(self)._assert_equals_(_st("hello")._yourself(),"hello");
_st(self)._deny_(_st("").__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{},smalltalk.StringTest)})},
messageSends: ["assert:equals:", "deny:", "=", "yourself"]}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st("hello").__eq_eq("hello"));
_st(self)._deny_(_st("hello").__eq_eq("world"));
_st(self)._assert_(_st("hello").__eq_eq(_st("hello")._yourself()));
_st(self)._assert_(_st(_st("hello")._yourself()).__eq_eq("hello"));
_st(self)._deny_(_st("").__eq_eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},smalltalk.StringTest)})},
messageSends: ["assert:", "==", "deny:", "yourself"]}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testIncludesSubString",
smalltalk.method({
selector: "testIncludesSubString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st("amber")._includesSubString_("ber"));
_st(self)._deny_(_st("amber")._includesSubString_("zork"));
return self}, function($ctx1) {$ctx1.fill(self,"testIncludesSubString",{},smalltalk.StringTest)})},
messageSends: ["assert:", "includesSubString:", "deny:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testJoin",
smalltalk.method({
selector: "testJoin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(",")._join_(["hello", "world"]),"hello,world");
return self}, function($ctx1) {$ctx1.fill(self,"testJoin",{},smalltalk.StringTest)})},
messageSends: ["assert:equals:", "join:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection="o";
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__eq("o");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testSelect",{newCollection:newCollection},smalltalk.StringTest)})},
messageSends: ["assertSameContents:as:", "select:", "=", "collection"]}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st("smalltalk")._size(),(9));
_st(self)._assert_equals_(_st("")._size(),(0));
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{},smalltalk.StringTest)})},
messageSends: ["assert:equals:", "size"]}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testStreamContents",
smalltalk.method({
selector: "testStreamContents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._assert_equals_(_st((smalltalk.String || String))._streamContents_((function(aStream){
return smalltalk.withContext(function($ctx2) {$1=aStream;
_st($1)._nextPutAll_("hello");
_st($1)._space();
$2=_st($1)._nextPutAll_("world");
return $2;
}, function($ctx2) {$ctx2.fillBlock({aStream:aStream},$ctx1)})})),"hello world");
return self}, function($ctx1) {$ctx1.fill(self,"testStreamContents",{},smalltalk.StringTest)})},
messageSends: ["assert:equals:", "streamContents:", "nextPutAll:", "space"]}),
smalltalk.StringTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.String || String);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.StringTest.klass)})},
messageSends: []}),
smalltalk.StringTest.klass);


smalltalk.addClass('SymbolTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.symbolFor("hello");
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.SymbolTest)})},
messageSends: []}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.symbolFor("phhaaarorra");
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},smalltalk.SymbolTest)})},
messageSends: []}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAsString",
smalltalk.method({
selector: "testAsString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(smalltalk.symbolFor("hello"))._asString(),"hello");
return self}, function($ctx1) {$ctx1.fill(self,"testAsString",{},smalltalk.SymbolTest)})},
messageSends: ["assert:equals:", "asString"]}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAsSymbol",
smalltalk.method({
selector: "testAsSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq_eq(_st(smalltalk.symbolFor("hello"))._asSymbol()));
return self}, function($ctx1) {$ctx1.fill(self,"testAsSymbol",{},smalltalk.SymbolTest)})},
messageSends: ["assert:", "==", "asSymbol"]}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(smalltalk.symbolFor("hello"))._at_((1)),"h");
_st(self)._assert_equals_(_st(smalltalk.symbolFor("hello"))._at_((5)),"o");
_st(self)._assert_equals_(_st(smalltalk.symbolFor("hello"))._at_ifAbsent_((6),(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},smalltalk.SymbolTest)})},
messageSends: ["assert:equals:", "at:", "at:ifAbsent:"]}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAtPut",
smalltalk.method({
selector: "testAtPut",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st("hello")._at_put_((1),"a");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testAtPut",{},smalltalk.SymbolTest)})},
messageSends: ["should:raise:", "at:put:"]}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection=smalltalk.symbolFor("hheelllloo");
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__comma(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{newCollection:newCollection},smalltalk.SymbolTest)})},
messageSends: ["assertSameContents:as:", "collect:", ",", "collection"]}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testComparing",
smalltalk.method({
selector: "testComparing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(smalltalk.symbolFor("ab")).__gt(smalltalk.symbolFor("aa")));
_st(self)._deny_(_st(smalltalk.symbolFor("ab")).__gt(smalltalk.symbolFor("ba")));
_st(self)._assert_(_st(smalltalk.symbolFor("ab")).__lt(smalltalk.symbolFor("ba")));
_st(self)._deny_(_st(smalltalk.symbolFor("bb")).__lt(smalltalk.symbolFor("ba")));
_st(self)._assert_(_st(smalltalk.symbolFor("ab")).__gt_eq(smalltalk.symbolFor("aa")));
_st(self)._deny_(_st(smalltalk.symbolFor("ab")).__gt_eq(smalltalk.symbolFor("ba")));
_st(self)._assert_(_st(smalltalk.symbolFor("ab")).__lt_eq(smalltalk.symbolFor("ba")));
_st(self)._deny_(_st(smalltalk.symbolFor("bb")).__lt_eq(smalltalk.symbolFor("ba")));
return self}, function($ctx1) {$ctx1.fill(self,"testComparing",{},smalltalk.SymbolTest)})},
messageSends: ["assert:", ">", "deny:", "<", ">=", "<="]}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._copy()).__eq_eq(smalltalk.symbolFor("hello")));
_st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._deepCopy()).__eq_eq(smalltalk.symbolFor("hello")));
return self}, function($ctx1) {$ctx1.fill(self,"testCopying",{},smalltalk.SymbolTest)})},
messageSends: ["assert:", "==", "copy", "deepCopy"]}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st(self)._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__eq("h");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),"h");
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(each).__eq("z");
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testDetect",{},smalltalk.SymbolTest)})},
messageSends: ["assert:equals:", "detect:", "=", "collection", "should:raise:"]}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq(smalltalk.symbolFor("hello")));
_st(self)._deny_(_st(smalltalk.symbolFor("hello")).__eq(smalltalk.symbolFor("world")));
_st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq(_st(smalltalk.symbolFor("hello"))._yourself()));
_st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._yourself()).__eq(smalltalk.symbolFor("hello")));
_st(self)._deny_(_st(smalltalk.symbolFor("hello")).__eq("hello"));
_st(self)._deny_(_st("hello").__eq(smalltalk.symbolFor("hello")));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{},smalltalk.SymbolTest)})},
messageSends: ["assert:", "=", "deny:", "yourself"]}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq_eq(smalltalk.symbolFor("hello")));
_st(self)._deny_(_st(smalltalk.symbolFor("hello")).__eq_eq(smalltalk.symbolFor("world")));
_st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq(_st(smalltalk.symbolFor("hello"))._yourself()));
_st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._yourself()).__eq(_st(_st(smalltalk.symbolFor("hello"))._asString())._asSymbol()));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},smalltalk.SymbolTest)})},
messageSends: ["assert:", "==", "deny:", "=", "yourself", "asSymbol", "asString"]}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIsEmpty",
smalltalk.method({
selector: "testIsEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._deny_(_st(_st(self)._collection())._isEmpty());
_st(self)._assert_(_st(_st("")._asSymbol())._isEmpty());
return self}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{},smalltalk.SymbolTest)})},
messageSends: ["deny:", "isEmpty", "collection", "assert:", "asSymbol"]}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIsSymbolIsString",
smalltalk.method({
selector: "testIsSymbolIsString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(smalltalk.symbolFor("hello"))._isSymbol());
_st(self)._deny_(_st("hello")._isSymbol());
_st(self)._deny_(_st(smalltalk.symbolFor("hello"))._isString());
_st(self)._assert_(_st("hello")._isString());
return self}, function($ctx1) {$ctx1.fill(self,"testIsSymbolIsString",{},smalltalk.SymbolTest)})},
messageSends: ["assert:", "isSymbol", "deny:", "isString"]}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { newCollection="o";
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__eq("o");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testSelect",{newCollection:newCollection},smalltalk.SymbolTest)})},
messageSends: ["assertSameContents:as:", "select:", "=", "collection"]}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(smalltalk.symbolFor("a"))._size(),(1));
_st(self)._assert_equals_(_st(smalltalk.symbolFor("aaaaa"))._size(),(5));
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{},smalltalk.SymbolTest)})},
messageSends: ["assert:equals:", "size"]}),
smalltalk.SymbolTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.Symbol || Symbol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.SymbolTest.klass)})},
messageSends: []}),
smalltalk.SymbolTest.klass);


smalltalk.addClass('JSObjectProxyTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_jsObject",
smalltalk.method({
selector: "jsObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: '', 'e': null, 'f': undefined};
return self}, function($ctx1) {$ctx1.fill(self,"jsObject",{},smalltalk.JSObjectProxyTest)})},
messageSends: []}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testAtIfAbsent",
smalltalk.method({
selector: "testAtIfAbsent",
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { testObject=_st(self)._jsObject();
_st(self)._assert_equals_(_st(testObject)._at_ifAbsent_("abc",(function(){
return smalltalk.withContext(function($ctx2) {return "Property does not exist";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"Property does not exist");
_st(self)._assert_equals_(_st(testObject)._at_ifAbsent_("e",(function(){
return smalltalk.withContext(function($ctx2) {return "Property does not exist";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),nil);
_st(self)._assert_equals_(_st(testObject)._at_ifAbsent_("a",(function(){
return smalltalk.withContext(function($ctx2) {return "Property does not exist";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),(1));
_st(self)._assert_equals_(_st(testObject)._at_ifAbsent_("f",(function(){
return smalltalk.withContext(function($ctx2) {return "Property does not exist";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{testObject:testObject},smalltalk.JSObjectProxyTest)})},
messageSends: ["jsObject", "assert:equals:", "at:ifAbsent:"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testAtIfPresent",
smalltalk.method({
selector: "testAtIfPresent",
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { testObject=_st(self)._jsObject();
_st(self)._assert_equals_(_st(testObject)._at_ifPresent_("abc",(function(x){
return smalltalk.withContext(function($ctx2) {return _st("hello ").__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})),nil);
_st(self)._assert_equals_(_st(testObject)._at_ifPresent_("e",(function(x){
return smalltalk.withContext(function($ctx2) {return _st("hello ").__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})),"hello nil");
_st(self)._assert_equals_(_st(testObject)._at_ifPresent_("a",(function(x){
return smalltalk.withContext(function($ctx2) {return _st("hello ").__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})),"hello 1");
_st(self)._assert_equals_(_st(testObject)._at_ifPresent_("f",(function(x){
return smalltalk.withContext(function($ctx2) {return _st("hello ").__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})),"hello nil");
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfPresent",{testObject:testObject},smalltalk.JSObjectProxyTest)})},
messageSends: ["jsObject", "assert:equals:", "at:ifPresent:", ",", "asString"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testAtIfPresentIfAbsent",
smalltalk.method({
selector: "testAtIfPresentIfAbsent",
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { testObject=_st(self)._jsObject();
_st(self)._assert_equals_(_st(testObject)._at_ifPresent_ifAbsent_("abc",(function(x){
return smalltalk.withContext(function($ctx2) {return _st("hello ").__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return "not present";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"not present");
_st(self)._assert_equals_(_st(testObject)._at_ifPresent_ifAbsent_("e",(function(x){
return smalltalk.withContext(function($ctx2) {return _st("hello ").__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return "not present";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"hello nil");
_st(self)._assert_equals_(_st(testObject)._at_ifPresent_ifAbsent_("a",(function(x){
return smalltalk.withContext(function($ctx2) {return _st("hello ").__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return "not present";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"hello 1");
_st(self)._assert_equals_(_st(testObject)._at_ifPresent_ifAbsent_("f",(function(x){
return smalltalk.withContext(function($ctx2) {return _st("hello ").__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return "not present";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"hello nil");
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfPresentIfAbsent",{testObject:testObject},smalltalk.JSObjectProxyTest)})},
messageSends: ["jsObject", "assert:equals:", "at:ifPresent:ifAbsent:", ",", "asString"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testDNU",
smalltalk.method({
selector: "testDNU",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._jsObject())._foo();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
return self}, function($ctx1) {$ctx1.fill(self,"testDNU",{},smalltalk.JSObjectProxyTest)})},
messageSends: ["should:raise:", "foo", "jsObject"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testMessageSend",
smalltalk.method({
selector: "testMessageSend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st(self)._jsObject())._a(),(1));
_st(self)._assert_equals_(_st(_st(self)._jsObject())._b(),(2));
_st(self)._assert_equals_(_st(_st(self)._jsObject())._c_((3)),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSend",{},smalltalk.JSObjectProxyTest)})},
messageSends: ["assert:equals:", "a", "jsObject", "b", "c:"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testMethodWithArguments",
smalltalk.method({
selector: "testMethodWithArguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st(self)._jsObject())._c_((1)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testMethodWithArguments",{},smalltalk.JSObjectProxyTest)})},
messageSends: ["assert:equals:", "c:", "jsObject"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testPrinting",
smalltalk.method({
selector: "testPrinting",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st(self)._jsObject())._printString(),"[object Object]");
return self}, function($ctx1) {$ctx1.fill(self,"testPrinting",{},smalltalk.JSObjectProxyTest)})},
messageSends: ["assert:equals:", "printString", "jsObject"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testPropertyThatReturnsEmptyString",
smalltalk.method({
selector: "testPropertyThatReturnsEmptyString",
fn: function (){
var self=this;
var object;
return smalltalk.withContext(function($ctx1) { object=_st(self)._jsObject();
_st(self)._assert_equals_(_st(object)._d(),"");
_st(object)._d_("hello");
_st(self)._assert_equals_(_st(object)._d(),"hello");
return self}, function($ctx1) {$ctx1.fill(self,"testPropertyThatReturnsEmptyString",{object:object},smalltalk.JSObjectProxyTest)})},
messageSends: ["jsObject", "assert:equals:", "d", "d:"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testPropertyThatReturnsUndefined",
smalltalk.method({
selector: "testPropertyThatReturnsUndefined",
fn: function (){
var self=this;
var object;
return smalltalk.withContext(function($ctx1) { object=_st(self)._jsObject();
_st(self)._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(object)._e();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
_st(self)._assert_(_st(_st(object)._e())._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testPropertyThatReturnsUndefined",{object:object},smalltalk.JSObjectProxyTest)})},
messageSends: ["jsObject", "shouldnt:raise:", "e", "assert:", "isNil"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testValue",
smalltalk.method({
selector: "testValue",
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { testObject=_st(self)._jsObject();
_st(self)._assert_equals_(_st(_st(testObject)._value())._printString(),"[object Object]");
_st(testObject)._at_put_("value","aValue");
_st(self)._assert_equals_(_st(testObject)._value(),"aValue");
return self}, function($ctx1) {$ctx1.fill(self,"testValue",{testObject:testObject},smalltalk.JSObjectProxyTest)})},
messageSends: ["jsObject", "assert:equals:", "printString", "value", "at:put:"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testYourself",
smalltalk.method({
selector: "testYourself",
fn: function (){
var self=this;
var object;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._jsObject();
_st($1)._d_("test");
$2=_st($1)._yourself();
object=$2;
_st(self)._assert_equals_(_st(object)._d(),"test");
return self}, function($ctx1) {$ctx1.fill(self,"testYourself",{object:object},smalltalk.JSObjectProxyTest)})},
messageSends: ["d:", "jsObject", "yourself", "assert:equals:", "d"]}),
smalltalk.JSObjectProxyTest);



smalltalk.addClass('JavaScriptExceptionTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCatchingException",
smalltalk.method({
selector: "testCatchingException",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._throwException();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(error){
return smalltalk.withContext(function($ctx2) {return _st(self)._assert_(_st(_st(error)._exception()).__eq("test"));
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testCatchingException",{},smalltalk.JavaScriptExceptionTest)})},
messageSends: ["on:do:", "assert:", "=", "exception", "throwException"]}),
smalltalk.JavaScriptExceptionTest);

smalltalk.addMethod(
"_testRaisingException",
smalltalk.method({
selector: "testRaisingException",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._throwException();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.JavaScriptException || JavaScriptException));
return self}, function($ctx1) {$ctx1.fill(self,"testRaisingException",{},smalltalk.JavaScriptExceptionTest)})},
messageSends: ["should:raise:", "throwException"]}),
smalltalk.JavaScriptExceptionTest);

smalltalk.addMethod(
"_throwException",
smalltalk.method({
selector: "throwException",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { throw 'test';
return self}, function($ctx1) {$ctx1.fill(self,"throwException",{},smalltalk.JavaScriptExceptionTest)})},
messageSends: []}),
smalltalk.JavaScriptExceptionTest);



smalltalk.addClass('NumberTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAbs",
smalltalk.method({
selector: "testAbs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((4))._abs(),(4));
_st(self)._assert_equals_(_st((-4))._abs(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testAbs",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "abs"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testArithmetic",
smalltalk.method({
selector: "testArithmetic",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((1.5)).__plus((1)),(2.5));
_st(self)._assert_equals_(_st((2)).__minus((1)),(1));
_st(self)._assert_equals_(_st((-2)).__minus((1)),(-3));
_st(self)._assert_equals_(_st((12)).__slash((2)),(6));
_st(self)._assert_equals_(_st((3)).__star((4)),(12));
_st(self)._assert_equals_(_st(_st((1)).__plus((2))).__star((3)),(9));
_st(self)._assert_equals_(_st((1)).__plus(_st((2)).__star((3))),(7));
return self}, function($ctx1) {$ctx1.fill(self,"testArithmetic",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "+", "-", "/", "*"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testComparison",
smalltalk.method({
selector: "testComparison",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st((3)).__gt((2)));
_st(self)._assert_(_st((2)).__lt((3)));
_st(self)._deny_(_st((3)).__lt((2)));
_st(self)._deny_(_st((2)).__gt((3)));
_st(self)._assert_(_st((3)).__gt_eq((3)));
_st(self)._assert_(_st((3.1)).__gt_eq((3)));
_st(self)._assert_(_st((3)).__lt_eq((3)));
_st(self)._assert_(_st((3)).__lt_eq((3.1)));
return self}, function($ctx1) {$ctx1.fill(self,"testComparison",{},smalltalk.NumberTest)})},
messageSends: ["assert:", ">", "<", "deny:", ">=", "<="]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st((1))._copy()).__eq_eq((1)));
_st(self)._assert_(_st(_st((1))._deepCopy()).__eq_eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testCopying",{},smalltalk.NumberTest)})},
messageSends: ["assert:", "==", "copy", "deepCopy"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{},smalltalk.NumberTest)})},
messageSends: ["assert:", "=", "deny:", "yourself"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testHexNumbers",
smalltalk.method({
selector: "testHexNumbers",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_((9),(9));
_st(self)._assert_equals_(_st((10))._truncated(),(10));
_st(self)._assert_equals_(_st((11))._truncated(),(11));
_st(self)._assert_equals_(_st((12))._truncated(),(12));
_st(self)._assert_equals_(_st((13))._truncated(),(13));
_st(self)._assert_equals_(_st((14))._truncated(),(14));
_st(self)._assert_equals_(_st((15))._truncated(),(15));
return self}, function($ctx1) {$ctx1.fill(self,"testHexNumbers",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "truncated"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st((1)).__eq_eq((1)));
_st(self)._assert_(_st((0)).__eq_eq((0)));
_st(self)._deny_(_st((1)).__eq_eq((0)));
_st(self)._assert_(_st(_st((1))._yourself()).__eq_eq((1)));
_st(self)._assert_(_st((1)).__eq_eq(_st((1))._yourself()));
_st(self)._assert_(_st(_st((1))._yourself()).__eq_eq(_st((1))._yourself()));
_st(self)._deny_(_st((1)).__eq_eq((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},smalltalk.NumberTest)})},
messageSends: ["assert:", "==", "deny:", "yourself"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testInvalidHexNumbers",
smalltalk.method({
selector: "testInvalidHexNumbers",
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"testInvalidHexNumbers",{},smalltalk.NumberTest)})},
messageSends: ["should:raise:", "rG", "rg", "rH", "rh", "rI", "ri", "rJ", "rj", "rK", "rk", "rL", "rl", "rM", "rm", "rN", "rn", "rO", "ro", "rP", "rp", "rQ", "rq", "rR", "rr", "rS", "rs", "rT", "rt", "rU", "ru", "rV", "rv", "rW", "rw", "rX", "rx", "rY", "ry", "rZ", "rz", "Z"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testMinMax",
smalltalk.method({
selector: "testMinMax",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((2))._max_((5)),(5));
_st(self)._assert_equals_(_st((2))._min_((5)),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testMinMax",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "max:", "min:"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testNegated",
smalltalk.method({
selector: "testNegated",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((3))._negated(),(-3));
_st(self)._assert_equals_(_st((-3))._negated(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testNegated",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "negated"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testPrintShowingDecimalPlaces",
smalltalk.method({
selector: "testPrintShowingDecimalPlaces",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((23))._printShowingDecimalPlaces_((2)),"23.00");
_st(self)._assert_equals_(_st((23.5698))._printShowingDecimalPlaces_((2)),"23.57");
_st(self)._assert_equals_(_st(_st((234.567))._negated())._printShowingDecimalPlaces_((5)),"-234.56700");
_st(self)._assert_equals_(_st((23.4567))._printShowingDecimalPlaces_((0)),"23");
_st(self)._assert_equals_(_st((23.5567))._printShowingDecimalPlaces_((0)),"24");
_st(self)._assert_equals_(_st(_st((23.4567))._negated())._printShowingDecimalPlaces_((0)),"-23");
_st(self)._assert_equals_(_st(_st((23.5567))._negated())._printShowingDecimalPlaces_((0)),"-24");
_st(self)._assert_equals_(_st((100000000))._printShowingDecimalPlaces_((1)),"100000000.0");
_st(self)._assert_equals_(_st((0.98))._printShowingDecimalPlaces_((5)),"0.98000");
_st(self)._assert_equals_(_st(_st((0.98))._negated())._printShowingDecimalPlaces_((2)),"-0.98");
_st(self)._assert_equals_(_st((2.567))._printShowingDecimalPlaces_((2)),"2.57");
_st(self)._assert_equals_(_st((-2.567))._printShowingDecimalPlaces_((2)),"-2.57");
_st(self)._assert_equals_(_st((0))._printShowingDecimalPlaces_((2)),"0.00");
return self}, function($ctx1) {$ctx1.fill(self,"testPrintShowingDecimalPlaces",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "printShowingDecimalPlaces:", "negated"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testRounded",
smalltalk.method({
selector: "testRounded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((3))._rounded(),(3));
_st(self)._assert_equals_(_st((3.212))._rounded(),(3));
_st(self)._assert_equals_(_st((3.51))._rounded(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testRounded",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "rounded"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testSqrt",
smalltalk.method({
selector: "testSqrt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((4))._sqrt(),(2));
_st(self)._assert_equals_(_st((16))._sqrt(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testSqrt",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "sqrt"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testSquared",
smalltalk.method({
selector: "testSquared",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((4))._squared(),(16));
return self}, function($ctx1) {$ctx1.fill(self,"testSquared",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "squared"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTimesRepeat",
smalltalk.method({
selector: "testTimesRepeat",
fn: function (){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { i=(0);
_st((0))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._assert_equals_(i,(0));
_st((5))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._assert_equals_(i,(5));
return self}, function($ctx1) {$ctx1.fill(self,"testTimesRepeat",{i:i},smalltalk.NumberTest)})},
messageSends: ["timesRepeat:", "+", "assert:equals:"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTo",
smalltalk.method({
selector: "testTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((1))._to_((5)),[(1), (2), (3), (4), (5)]);
return self}, function($ctx1) {$ctx1.fill(self,"testTo",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "to:"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testToBy",
smalltalk.method({
selector: "testToBy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((0))._to_by_((6),(2)),[(0), (2), (4), (6)]);
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st((1))._to_by_((4),(0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testToBy",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "to:by:", "should:raise:"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTruncated",
smalltalk.method({
selector: "testTruncated",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((3))._truncated(),(3));
_st(self)._assert_equals_(_st((3.212))._truncated(),(3));
_st(self)._assert_equals_(_st((3.51))._truncated(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testTruncated",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "truncated"]}),
smalltalk.NumberTest);



smalltalk.addClass('ObjectMock', smalltalk.Object, ['foo', 'bar'], 'Kernel-Tests');
smalltalk.addMethod(
"_foo",
smalltalk.method({
selector: "foo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@foo"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"foo",{},smalltalk.ObjectMock)})},
messageSends: []}),
smalltalk.ObjectMock);

smalltalk.addMethod(
"_foo_",
smalltalk.method({
selector: "foo:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@foo"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"foo:",{anObject:anObject},smalltalk.ObjectMock)})},
messageSends: []}),
smalltalk.ObjectMock);



smalltalk.addClass('ObjectTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_notDefined",
smalltalk.method({
selector: "notDefined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return undefined;;
return self}, function($ctx1) {$ctx1.fill(self,"notDefined",{},smalltalk.ObjectTest)})},
messageSends: []}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testBasicAccess",
smalltalk.method({
selector: "testBasicAccess",
fn: function (){
var self=this;
var o;
return smalltalk.withContext(function($ctx1) { o=_st((smalltalk.Object || Object))._new();
_st(o)._basicAt_put_("a",(1));
_st(self)._assert_equals_(_st(o)._basicAt_("a"),(1));
_st(self)._assert_equals_(_st(o)._basicAt_("b"),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testBasicAccess",{o:o},smalltalk.ObjectTest)})},
messageSends: ["new", "basicAt:put:", "assert:equals:", "basicAt:"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testBasicPerform",
smalltalk.method({
selector: "testBasicPerform",
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
_st(self)._assert_equals_(_st(o)._basicPerform_("func"),"hello");
_st(self)._assert_equals_(_st(o)._basicPerform_withArguments_("func2",[(3)]),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testBasicPerform",{o:o},smalltalk.ObjectTest)})},
messageSends: ["new", "basicAt:put:", "+", "assert:equals:", "basicPerform:", "basicPerform:withArguments:"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testDNU",
smalltalk.method({
selector: "testDNU",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.Object || Object))._new())._foo();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
return self}, function($ctx1) {$ctx1.fill(self,"testDNU",{},smalltalk.ObjectTest)})},
messageSends: ["should:raise:", "foo", "new"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function (){
var self=this;
var o;
return smalltalk.withContext(function($ctx1) { o=_st((smalltalk.Object || Object))._new();
_st(self)._deny_(_st(o).__eq(_st((smalltalk.Object || Object))._new()));
_st(self)._assert_(_st(o).__eq(o));
_st(self)._assert_(_st(_st(o)._yourself()).__eq(o));
_st(self)._assert_(_st(o).__eq(_st(o)._yourself()));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{o:o},smalltalk.ObjectTest)})},
messageSends: ["new", "deny:", "=", "assert:", "yourself"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testHalt",
smalltalk.method({
selector: "testHalt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.Object || Object))._new())._halt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testHalt",{},smalltalk.ObjectTest)})},
messageSends: ["should:raise:", "halt", "new"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function (){
var self=this;
var o;
return smalltalk.withContext(function($ctx1) { o=_st((smalltalk.Object || Object))._new();
_st(self)._deny_(_st(o).__eq_eq(_st((smalltalk.Object || Object))._new()));
_st(self)._assert_(_st(o).__eq_eq(o));
_st(self)._assert_(_st(_st(o)._yourself()).__eq_eq(o));
_st(self)._assert_(_st(o).__eq_eq(_st(o)._yourself()));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{o:o},smalltalk.ObjectTest)})},
messageSends: ["new", "deny:", "==", "assert:", "yourself"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testIfNil",
smalltalk.method({
selector: "testIfNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$4,$3,$2,$5,$7,$6,$8,$10,$9;
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
$7=_st((smalltalk.Object || Object))._new();
if(($receiver = $7) == nil || $receiver == undefined){
$6=$7;
} else {
$6=true;
};
_st($5)._assert_equals_($6,true);
$8=self;
$10=_st((smalltalk.Object || Object))._new();
if(($receiver = $10) == nil || $receiver == undefined){
$9=false;
} else {
$9=true;
};
_st($8)._assert_equals_($9,true);
_st(self)._assert_equals_(_st(_st((smalltalk.Object || Object))._new())._ifNotNil_ifNil_((function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),true);
return self}, function($ctx1) {$ctx1.fill(self,"testIfNil",{},smalltalk.ObjectTest)})},
messageSends: ["deny:", "isNil", "new", "=", "ifNil:", "assert:equals:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testInstVars",
smalltalk.method({
selector: "testInstVars",
fn: function (){
var self=this;
var o;
return smalltalk.withContext(function($ctx1) { o=_st((smalltalk.ObjectMock || ObjectMock))._new();
_st(self)._assert_equals_(_st(o)._instVarAt_(smalltalk.symbolFor("foo")),nil);
_st(o)._instVarAt_put_(smalltalk.symbolFor("foo"),(1));
_st(self)._assert_equals_(_st(o)._instVarAt_(smalltalk.symbolFor("foo")),(1));
_st(self)._assert_equals_(_st(o)._instVarAt_("foo"),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testInstVars",{o:o},smalltalk.ObjectTest)})},
messageSends: ["new", "assert:equals:", "instVarAt:", "instVarAt:put:"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testNilUndefined",
smalltalk.method({
selector: "testNilUndefined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self)._notDefined(),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testNilUndefined",{},smalltalk.ObjectTest)})},
messageSends: ["assert:equals:", "notDefined"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testYourself",
smalltalk.method({
selector: "testYourself",
fn: function (){
var self=this;
var o;
return smalltalk.withContext(function($ctx1) { o=_st((smalltalk.ObjectMock || ObjectMock))._new();
_st(self)._assert_(_st(_st(o)._yourself()).__eq_eq(o));
return self}, function($ctx1) {$ctx1.fill(self,"testYourself",{o:o},smalltalk.ObjectTest)})},
messageSends: ["new", "assert:", "==", "yourself"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testidentityHash",
smalltalk.method({
selector: "testidentityHash",
fn: function (){
var self=this;
var o1,o2;
return smalltalk.withContext(function($ctx1) { o1=_st((smalltalk.Object || Object))._new();
o2=_st((smalltalk.Object || Object))._new();
_st(self)._assert_(_st(_st(o1)._identityHash()).__eq_eq(_st(o1)._identityHash()));
_st(self)._deny_(_st(_st(o1)._identityHash()).__eq_eq(_st(o2)._identityHash()));
return self}, function($ctx1) {$ctx1.fill(self,"testidentityHash",{o1:o1,o2:o2},smalltalk.ObjectTest)})},
messageSends: ["new", "assert:", "==", "identityHash", "deny:"]}),
smalltalk.ObjectTest);



smalltalk.addClass('PackageTest', smalltalk.TestCase, ['zorkPackage', 'grulPackage', 'backUpCommitPathJs', 'backUpCommitPathSt'], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.PackageTest)})},
messageSends: ["defaultCommitPathJs", "defaultCommitPathSt", "resetCommitPaths", "name:", "new", "commitPathJs:", "commitPathSt:", "yourself"]}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=(smalltalk.Package || Package);
_st($1)._defaultCommitPathJs_(self["@backUpCommitPathJs"]);
$2=_st($1)._defaultCommitPathSt_(self["@backUpCommitPathSt"]);
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.PackageTest)})},
messageSends: ["defaultCommitPathJs:", "defaultCommitPathSt:"]}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testGrulCommitPathJsShouldBeServerGrulJs",
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@grulPackage"])._commitPathJs(),"server/grul/js");
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathJsShouldBeServerGrulJs",{},smalltalk.PackageTest)})},
messageSends: ["assert:equals:", "commitPathJs"]}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testGrulCommitPathStShouldBeGrulSt",
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@grulPackage"])._commitPathSt(),"grul/st");
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathStShouldBeGrulSt",{},smalltalk.PackageTest)})},
messageSends: ["assert:equals:", "commitPathSt"]}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testZorkCommitPathJsShouldBeJs",
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@zorkPackage"])._commitPathJs(),"js");
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathJsShouldBeJs",{},smalltalk.PackageTest)})},
messageSends: ["assert:equals:", "commitPathJs"]}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testZorkCommitPathStShouldBeSt",
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@zorkPackage"])._commitPathSt(),"st");
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathStShouldBeSt",{},smalltalk.PackageTest)})},
messageSends: ["assert:equals:", "commitPathSt"]}),
smalltalk.PackageTest);



smalltalk.addClass('PackageWithDefaultCommitPathChangedTest', smalltalk.PackageTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
smalltalk.PackageTest.fn.prototype._setUp.apply(_st(self), []);
$1=(smalltalk.Package || Package);
_st($1)._defaultCommitPathJs_("javascripts/");
$2=_st($1)._defaultCommitPathSt_("smalltalk/");
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
messageSends: ["setUp", "defaultCommitPathJs:", "defaultCommitPathSt:"]}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testGrulCommitPathJsShouldBeServerGrulJs",
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@grulPackage"])._commitPathJs(),"server/grul/js");
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathJsShouldBeServerGrulJs",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
messageSends: ["assert:equals:", "commitPathJs"]}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testGrulCommitPathStShouldBeGrulSt",
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@grulPackage"])._commitPathSt(),"grul/st");
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathStShouldBeGrulSt",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
messageSends: ["assert:equals:", "commitPathSt"]}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testZorkCommitPathJsShouldBeJavascript",
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@zorkPackage"])._commitPathJs(),"javascripts/");
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathJsShouldBeJavascript",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
messageSends: ["assert:equals:", "commitPathJs"]}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testZorkCommitPathStShouldBeSmalltalk",
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSmalltalk",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@zorkPackage"])._commitPathSt(),"smalltalk/");
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathStShouldBeSmalltalk",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
messageSends: ["assert:equals:", "commitPathSt"]}),
smalltalk.PackageWithDefaultCommitPathChangedTest);


smalltalk.addMethod(
"_shouldInheritSelectors",
smalltalk.method({
selector: "shouldInheritSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"shouldInheritSelectors",{},smalltalk.PackageWithDefaultCommitPathChangedTest.klass)})},
messageSends: []}),
smalltalk.PackageWithDefaultCommitPathChangedTest.klass);


smalltalk.addClass('PointTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAccessing",
smalltalk.method({
selector: "testAccessing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st((smalltalk.Point || Point))._x_y_((3),(4)))._x(),(3));
_st(self)._assert_equals_(_st(_st((smalltalk.Point || Point))._x_y_((3),(4)))._y(),(4));
_st(self)._assert_equals_(_st(_st(_st((smalltalk.Point || Point))._new())._x_((3)))._x(),(3));
_st(self)._assert_equals_(_st(_st(_st((smalltalk.Point || Point))._new())._y_((4)))._y(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testAccessing",{},smalltalk.PointTest)})},
messageSends: ["assert:equals:", "x", "x:y:", "y", "x:", "new", "y:"]}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testArithmetic",
smalltalk.method({
selector: "testArithmetic",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st((3)).__at((4))).__star(_st((3)).__at((4))),_st((smalltalk.Point || Point))._x_y_((9),(16)));
_st(self)._assert_equals_(_st(_st((3)).__at((4))).__plus(_st((3)).__at((4))),_st((smalltalk.Point || Point))._x_y_((6),(8)));
_st(self)._assert_equals_(_st(_st((3)).__at((4))).__minus(_st((3)).__at((4))),_st((smalltalk.Point || Point))._x_y_((0),(0)));
_st(self)._assert_equals_(_st(_st((6)).__at((8))).__slash(_st((3)).__at((4))),_st((smalltalk.Point || Point))._x_y_((2),(2)));
return self}, function($ctx1) {$ctx1.fill(self,"testArithmetic",{},smalltalk.PointTest)})},
messageSends: ["assert:equals:", "*", "@", "x:y:", "+", "-", "/"]}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st((3)).__at((4)),_st((smalltalk.Point || Point))._x_y_((3),(4)));
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},smalltalk.PointTest)})},
messageSends: ["assert:equals:", "@", "x:y:"]}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testEgality",
smalltalk.method({
selector: "testEgality",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st((3)).__at((4))).__eq(_st((3)).__at((4))));
_st(self)._deny_(_st(_st((3)).__at((5))).__eq(_st((3)).__at((6))));
return self}, function($ctx1) {$ctx1.fill(self,"testEgality",{},smalltalk.PointTest)})},
messageSends: ["assert:", "=", "@", "deny:"]}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testTranslateBy",
smalltalk.method({
selector: "testTranslateBy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st((3)).__at((3)))._translateBy_(_st((0)).__at((1))),_st((3)).__at((4)));
_st(self)._assert_equals_(_st(_st((3)).__at((3)))._translateBy_(_st((0)).__at(_st((1))._negated())),_st((3)).__at((2)));
_st(self)._assert_equals_(_st(_st((3)).__at((3)))._translateBy_(_st((2)).__at((3))),_st((5)).__at((6)));
_st(self)._assert_equals_(_st(_st((3)).__at((3)))._translateBy_(_st(_st((3))._negated()).__at((0))),_st((0)).__at((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testTranslateBy",{},smalltalk.PointTest)})},
messageSends: ["assert:equals:", "translateBy:", "@", "negated"]}),
smalltalk.PointTest);



smalltalk.addClass('RandomTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_textNext",
smalltalk.method({
selector: "textNext",
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"textNext",{},smalltalk.RandomTest)})},
messageSends: ["timesRepeat:", "next", "new", "assert:", ">=", "<", "deny:", "="]}),
smalltalk.RandomTest);



smalltalk.addClass('SetTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAddRemove",
smalltalk.method({
selector: "testAddRemove",
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"testAddRemove",{set:set},smalltalk.SetTest)})},
messageSends: ["new", "assert:", "isEmpty", "add:", "includes:", "remove:", "deny:"]}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.Set || Set))._new())._at_put_((1),(2));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},smalltalk.SetTest)})},
messageSends: ["should:raise:", "at:put:", "new"]}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st([(5), (6), (8)])._asSet())._collect_((function(x){
return smalltalk.withContext(function($ctx2) {return _st(x).__backslash_backslash((3));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})),_st([(0), (2)])._asSet());
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{},smalltalk.SetTest)})},
messageSends: ["assert:equals:", "collect:", "\x5c\x5c", "asSet"]}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testComparing",
smalltalk.method({
selector: "testComparing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st([(0), (2)])._asSet(),_st([(0), (2)])._asSet());
_st(self)._assert_equals_(_st([(2), (0)])._asSet(),_st([(0), (2)])._asSet());
_st(self)._deny_(_st(_st([(0), (2), (3)])._asSet()).__eq(_st([(0), (2)])._asSet()));
_st(self)._deny_(_st(_st([(1), (2)])._asSet()).__eq(_st([(0), (2)])._asSet()));
return self}, function($ctx1) {$ctx1.fill(self,"testComparing",{},smalltalk.SetTest)})},
messageSends: ["assert:equals:", "asSet", "deny:", "="]}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
fn: function (){
var self=this;
var set;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
set=_st((smalltalk.Set || Set))._new();
_st(self)._assert_equals_(_st(set)._printString(),"a Set ()");
$1=set;
_st($1)._add_((1));
$2=_st($1)._add_((3));
_st(self)._assert_equals_(_st(set)._printString(),"a Set (1 3)");
_st(set)._add_("foo");
_st(self)._assert_equals_(_st(set)._printString(),"a Set (1 3 'foo')");
$3=set;
_st($3)._remove_((1));
$4=_st($3)._remove_((3));
_st(self)._assert_equals_(_st(set)._printString(),"a Set ('foo')");
_st(set)._add_((3));
_st(self)._assert_equals_(_st(set)._printString(),"a Set ('foo' 3)");
_st(set)._add_((3));
_st(self)._assert_equals_(_st(set)._printString(),"a Set ('foo' 3)");
return self}, function($ctx1) {$ctx1.fill(self,"testPrintString",{set:set},smalltalk.SetTest)})},
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:"]}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(_st((smalltalk.Set || Set))._new())._size(),(0));
_st(self)._assert_equals_(_st(_st((smalltalk.Set || Set))._withAll_([(1), (2), (3), (4)]))._size(),(4));
_st(self)._assert_equals_(_st(_st((smalltalk.Set || Set))._withAll_([(1), (1), (1), (1)]))._size(),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{},smalltalk.SetTest)})},
messageSends: ["assert:equals:", "size", "new", "withAll:"]}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testUnicity",
smalltalk.method({
selector: "testUnicity",
fn: function (){
var self=this;
var set;
return smalltalk.withContext(function($ctx1) { set=_st((smalltalk.Set || Set))._new();
_st(set)._add_((21));
_st(set)._add_("hello");
_st(set)._add_((21));
_st(self)._assert_equals_(_st(set)._size(),(2));
_st(set)._add_("hello");
_st(self)._assert_equals_(_st(set)._size(),(2));
_st(self)._assert_equals_(_st(set)._asArray(),[(21), "hello"]);
return self}, function($ctx1) {$ctx1.fill(self,"testUnicity",{set:set},smalltalk.SetTest)})},
messageSends: ["new", "add:", "assert:equals:", "size", "asArray"]}),
smalltalk.SetTest);



smalltalk.addClass('UndefinedTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(nil)._copy(),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testCopying",{},smalltalk.UndefinedTest)})},
messageSends: ["assert:equals:", "copy"]}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testDeepCopy",
smalltalk.method({
selector: "testDeepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st(nil)._deepCopy()).__eq(nil));
return self}, function($ctx1) {$ctx1.fill(self,"testDeepCopy",{},smalltalk.UndefinedTest)})},
messageSends: ["assert:", "=", "deepCopy"]}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testIfNil",
smalltalk.method({
selector: "testIfNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$5,$4,$6,$7;
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
_st(self)._deny_(_st(_st(nil)._ifNotNil_ifNil_((function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))).__eq(true));
return self}, function($ctx1) {$ctx1.fill(self,"testIfNil",{},smalltalk.UndefinedTest)})},
messageSends: ["assert:equals:", "ifNil:", "deny:", "=", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"]}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testIsNil",
smalltalk.method({
selector: "testIsNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(nil)._isNil());
_st(self)._deny_(_st(nil)._notNil());
return self}, function($ctx1) {$ctx1.fill(self,"testIsNil",{},smalltalk.UndefinedTest)})},
messageSends: ["assert:", "isNil", "deny:", "notNil"]}),
smalltalk.UndefinedTest);



