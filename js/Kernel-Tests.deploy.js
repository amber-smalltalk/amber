smalltalk.addPackage('Kernel-Tests');
smalltalk.addClass('BlockClosureTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testCanClearInterval",
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
messageSends: ["shouldnt:raise:", "clearInterval", "valueWithInterval:", "signal", "new"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCanClearTimeout",
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
messageSends: ["shouldnt:raise:", "clearTimeout", "valueWithTimeout:", "signal", "new"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCompiledSource",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st((function(){
return smalltalk.withContext(function($ctx2) {
return (1).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._compiledSource())._includesSubString_("function"));
return self}, function($ctx1) {$ctx1.fill(self,"testCompiledSource",{},smalltalk.BlockClosureTest)})},
messageSends: ["assert:", "includesSubString:", "compiledSource", "+"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCurrySelf",
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
messageSends: ["asCompiledMethod:", "currySelf", "at:", "installMethod:forClass:category:", "new", "ensure:", "removeCompiledMethod:", "assert:equals:", "foo:"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEnsure",
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
messageSends: ["assert:equals:", "ensure:"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEnsureRaises",
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
messageSends: ["should:raise:", "ensure:", "signal", "new"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testExceptionSemantics",
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
messageSends: ["timeout:", "valueWithTimeout:", "async:", "on:do:", "finished", "assert:", "signal", "deny:"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNewWithValues",
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
messageSends: []}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNumArgs",
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
messageSends: ["assert:equals:", "numArgs"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testOnDo",
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
messageSends: ["assert:", "on:do:", "signal", "new"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValue",
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
messageSends: ["assert:equals:", "value", "+", "value:", "value:value:", "*"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValueWithPossibleArguments",
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
messageSends: ["assert:equals:", "valueWithPossibleArguments:", "+"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWhileFalse",
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
messageSends: ["whileFalse:", "+", ">", "assert:equals:", "whileFalse"]}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWhileTrue",
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
messageSends: ["whileTrue:", "+", "<", "assert:equals:", "whileTrue"]}),
smalltalk.BlockClosureTest);



smalltalk.addClass('BooleanTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
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
messageSends: ["deny:", "=", "assert:", "yourself"]}),
smalltalk.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIdentity",
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
messageSends: ["deny:", "==", "assert:", "yourself"]}),
smalltalk.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfTrueIfFalse",
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
messageSends: ["assert:equals:", "ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"]}),
smalltalk.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfTrueIfFalseWithBoxing",
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
messageSends: ["assert:equals:", "ifTrue:", "yourself", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"]}),
smalltalk.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLogic",
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
messageSends: ["assert:", "&", "deny:", "|", ">"]}),
smalltalk.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLogicKeywords",
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
messageSends: ["assert:", "and:", "deny:", "or:", ">"]}),
smalltalk.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonBooleanError",
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
messageSends: ["should:raise:", "ifTrue:ifFalse:"]}),
smalltalk.BooleanTest);



smalltalk.addClass('ClassBuilderTest', smalltalk.TestCase, ['builder', 'theClass'], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@builder"]=_st($ClassBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ClassBuilderTest)})},
messageSends: ["new"]}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
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
messageSends: ["ifNotNil:", "removeClass:", "current"]}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testClassCopy",
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
messageSends: ["copyClass:named:", "assert:", "==", "superclass", "instanceVariableNames", "assert:equals:", "name", "package", "keys", "methodDictionary"]}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testClassMigration",
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
messageSends: ["copyClass:named:", "new", "at:", "current", "subclass:instanceVariableNames:package:", "deny:", "==", "assert:", "superclass", "isEmpty", "instanceVariableNames", "assert:equals:", "selectors", "comment", "name", "package", "class", "isNil", "removeClass:"]}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testClassMigrationWithClassInstanceVariables",
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
messageSends: ["copyClass:named:", "instanceVariableNames:", "class", "subclass:instanceVariableNames:package:", "at:", "current", "assert:equals:", "instanceVariableNames", "removeClass:"]}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testClassMigrationWithSubclasses",
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
messageSends: ["copyClass:named:", "subclass:instanceVariableNames:package:", "at:", "current", "assert:", "includes:", "subclasses", "do:", "removeClass:", "allSubclasses"]}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInstanceVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@builder"])._instanceVariableNamesFor_("  hello   world   "),["hello", "world"]);
return self}, function($ctx1) {$ctx1.fill(self,"testInstanceVariableNames",{},smalltalk.ClassBuilderTest)})},
messageSends: ["assert:equals:", "instanceVariableNamesFor:"]}),
smalltalk.ClassBuilderTest);



smalltalk.addClass('CollectionTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "assertSameContents:as:",
fn: function (aCollection,anotherCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(aCollection)._size()).__eq(_st(anotherCollection)._size()));
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._assert_(_st(_st(aCollection)._occurrencesOf_(each)).__eq(_st(anotherCollection)._occurrencesOf_(each)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"assertSameContents:as:",{aCollection:aCollection,anotherCollection:anotherCollection},smalltalk.CollectionTest)})},
messageSends: ["assert:", "=", "size", "do:", "occurrencesOf:"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._withAll_(self._defaultValues());
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.CollectionTest)})},
messageSends: ["withAll:", "defaultValues", "collectionClass"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._collectionClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.CollectionTest)})},
messageSends: ["collectionClass", "class"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._withAll_(["a", "b", "c", (1), (2), (1), "a"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},smalltalk.CollectionTest)})},
messageSends: ["withAll:", "collectionClass"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[(1), (2), (3), (-4)];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultValues",{},smalltalk.CollectionTest)})},
messageSends: []}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "isCollectionReadOnly",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isCollectionReadOnly",{},smalltalk.CollectionTest)})},
messageSends: []}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assertSameContents_as_(self._collection(),_st(self._collection())._asArray());
return self}, function($ctx1) {$ctx1.fill(self,"testAsArray",{},smalltalk.CollectionTest)})},
messageSends: ["assertSameContents:as:", "collection", "asArray"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsOrderedCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assertSameContents_as_(self._collection(),_st(self._collection())._asOrderedCollection());
return self}, function($ctx1) {$ctx1.fill(self,"testAsOrderedCollection",{},smalltalk.CollectionTest)})},
messageSends: ["assertSameContents:as:", "collection", "asOrderedCollection"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsSet",
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
messageSends: ["collectionWithDuplicates", "asSet", "assert:equals:", "size", "do:", "assert:", "includes:"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCollect",
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
messageSends: ["assertSameContents:as:", "collect:", "abs", "collection"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDetect",
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
messageSends: ["assert:equals:", "detect:", "<", "collection", "should:raise:", "="]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDo",
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
messageSends: ["new", "do:", "add:", "collection", "assertSameContents:as:"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIsEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self._collectionClass())._new())._isEmpty());
self._deny_(_st(self._collection())._isEmpty());
return self}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{},smalltalk.CollectionTest)})},
messageSends: ["assert:", "isEmpty", "new", "collectionClass", "deny:", "collection"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSelect",
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
messageSends: ["assertSameContents:as:", "select:", "even", "collection"]}),
smalltalk.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(_st(self._collectionClass())._new())._size(),(0));
self._assert_equals_(_st(self._collection())._size(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{},smalltalk.CollectionTest)})},
messageSends: ["assert:equals:", "size", "new", "collectionClass", "collection"]}),
smalltalk.CollectionTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return nil;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.CollectionTest.klass)})},
messageSends: []}),
smalltalk.CollectionTest.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.CollectionTest.klass)})},
messageSends: ["isNil", "collectionClass"]}),
smalltalk.CollectionTest.klass);


smalltalk.addClass('IndexableCollectionTest', smalltalk.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAt",
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
messageSends: ["assert:equals:", "at:", "collection", "should:raise:"]}),
smalltalk.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfAbsent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._collection())._at_ifAbsent_(_st(_st(self._collection())._size()).__plus((1)),(function(){
return smalltalk.withContext(function($ctx2) {
return "none";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"none");
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{},smalltalk.IndexableCollectionTest)})},
messageSends: ["assert:equals:", "at:ifAbsent:", "+", "size", "collection"]}),
smalltalk.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContains",
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
messageSends: ["collection", "assert:", "contains:", "=", "first", "deny:", "new"]}),
smalltalk.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIndexOf",
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
messageSends: ["assert:equals:", "indexOf:", "collection", "should:raise:", "indexOf:ifAbsent:"]}),
smalltalk.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWithIndexDo",
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
messageSends: ["collection", "withIndexDo:", "assert:equals:", "at:"]}),
smalltalk.IndexableCollectionTest);



smalltalk.addClass('HashedCollectionTest', smalltalk.IndexableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["b".__minus_gt((1)),"a".__minus_gt((2)),"c".__minus_gt((3)),"d".__minus_gt((-4))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.HashedCollectionTest)})},
messageSends: ["->"]}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["b".__minus_gt((1)),"a".__minus_gt((2)),"c".__minus_gt((3)),"d".__minus_gt((-4)),"e".__minus_gt((1)),"f".__minus_gt((2)),"g".__minus_gt((10))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},smalltalk.HashedCollectionTest)})},
messageSends: ["->"]}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsDictionary",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st(self._collectionClass())._new())._asDictionary())._isMemberOf_($Dictionary()));
return self}, function($ctx1) {$ctx1.fill(self,"testAsDictionary",{},smalltalk.HashedCollectionTest)})},
messageSends: ["assert:", "isMemberOf:", "asDictionary", "new", "collectionClass"]}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAt",
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
messageSends: ["assert:equals:", "at:", "collection", "should:raise:"]}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContains",
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
messageSends: ["collection", "assert:", "contains:", "=", "first", "values", "deny:", "new"]}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFrom",
fn: function (){
var self=this;
var associations;
return smalltalk.withContext(function($ctx1) { 
associations=["a".__minus_gt((1)),"b".__minus_gt((2))];
self._assertSameContents_as_(_st(_st(self._class())._collectionClass())._from_(associations),smalltalk.HashedCollection._from_(["a".__minus_gt((1)),"b".__minus_gt((2))]));
return self}, function($ctx1) {$ctx1.fill(self,"testFrom",{associations:associations},smalltalk.HashedCollectionTest)})},
messageSends: ["->", "assertSameContents:as:", "from:", "collectionClass", "class"]}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIndexOf",
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
messageSends: ["assert:equals:", "indexOf:", "collection", "should:raise:", "indexOf:ifAbsent:"]}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNewFromPairs",
fn: function (){
var self=this;
var flattenedAssociations;
return smalltalk.withContext(function($ctx1) { 
flattenedAssociations=["a",(1),"b",(2)];
self._assertSameContents_as_(_st(_st(self._class())._collectionClass())._newFromPairs_(flattenedAssociations),smalltalk.HashedCollection._from_(["a".__minus_gt((1)),"b".__minus_gt((2))]));
return self}, function($ctx1) {$ctx1.fill(self,"testNewFromPairs",{flattenedAssociations:flattenedAssociations},smalltalk.HashedCollectionTest)})},
messageSends: ["assertSameContents:as:", "newFromPairs:", "collectionClass", "class", "->"]}),
smalltalk.HashedCollectionTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$HashedCollection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.HashedCollectionTest.klass)})},
messageSends: []}),
smalltalk.HashedCollectionTest.klass);


smalltalk.addClass('DictionaryTest', smalltalk.HashedCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
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
messageSends: ["at:put:", "new", "yourself"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
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
messageSends: ["at:put:", "new", "yourself"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAccessing",
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
messageSends: ["new", "at:put:", "assert:equals:", "at:", "at:ifAbsent:", "deny:", "=", "assert:", "includesKey:", "@"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsHashedCollection",
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st(self._collectionClass())._new())._asHashedCollection())._isMemberOf_($HashedCollection()));
return self}, function($ctx1) {$ctx1.fill(self,"testAsHashedCollection",{},smalltalk.DictionaryTest)})},
messageSends: ["assert:", "isMemberOf:", "asHashedCollection", "new", "collectionClass"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicDictionaries",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(smalltalk.HashedCollection._from_(["hello".__minus_gt((1))]))._asDictionary(),_st($Dictionary())._with_("hello".__minus_gt((1))));
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaries",{},smalltalk.DictionaryTest)})},
messageSends: ["assert:equals:", "asDictionary", "->", "with:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
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
messageSends: ["assert:", "=", "new", "at:put:", "yourself", "deny:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfAbsent",
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
messageSends: ["new", "at:ifAbsent:", "assert:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfPresent",
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
messageSends: ["new", "at:put:", "at:ifPresent:", "assert:equals:", "assert:", "isNil"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfPresentIfAbsent",
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
messageSends: ["new", "at:put:", "at:ifPresent:ifAbsent:", "assert:equals:", "assert:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testKeys",
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
messageSends: ["new", "at:put:", "assert:equals:", "keys"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPointKey",
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
messageSends: ["new", "at:put:", "@", "assert:equals:", "at:", "removeKey:", "at:ifAbsent:", "deny:", "includesKey:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrintString",
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
messageSends: ["assert:equals:", "at:put:", "new", "printString"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveKey",
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
messageSends: ["new", "at:put:", "assert:equals:", "keys", "removeKey:", "values", "deny:", "includesKey:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveKeyIfAbsent",
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
messageSends: ["new", "at:put:", "assert:equals:", "removeKey:", "removeKey:ifAbsent:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSize",
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
messageSends: ["new", "assert:equals:", "size", "at:put:"]}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValues",
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
messageSends: ["new", "at:put:", "assert:equals:", "values"]}),
smalltalk.DictionaryTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Dictionary();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.DictionaryTest.klass)})},
messageSends: []}),
smalltalk.DictionaryTest.klass);


smalltalk.addClass('SequenceableCollectionTest', smalltalk.IndexableCollectionTest, [], 'Kernel-Tests');


smalltalk.addClass('ArrayTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfAbsent",
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
messageSends: ["assert:equals:", "at:", "at:ifAbsent:"]}),
smalltalk.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFirstN",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st([(1),(2),(3),(4),(5)])._first_((3)),[(1),(2),(3)]);
return self}, function($ctx1) {$ctx1.fill(self,"testFirstN",{},smalltalk.ArrayTest)})},
messageSends: ["assert:equals:", "first:"]}),
smalltalk.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(""._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return "zork";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"zork");
return self}, function($ctx1) {$ctx1.fill(self,"testIfEmpty",{},smalltalk.ArrayTest)})},
messageSends: ["assert:equals:", "ifEmpty:"]}),
smalltalk.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrintString",
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
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:", "addLast:"]}),
smalltalk.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveFromTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_([(1), (2), (3), (4)]._removeFrom_to_((1),(3)),[(4)]);
self._assert_equals_([(1), (2), (3), (4)]._removeFrom_to_((2),(3)),[(1), (4)]);
self._assert_equals_([(1), (2), (3), (4)]._removeFrom_to_((2),(4)),[(1)]);
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveFromTo",{},smalltalk.ArrayTest)})},
messageSends: ["assert:equals:", "removeFrom:to:"]}),
smalltalk.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_([(1), (2), (3), (4)]._removeIndex_((2)),[(1), (3), (4)]);
self._assert_equals_([(1), (2), (3), (4)]._removeIndex_((1)),[(2), (3), (4)]);
self._assert_equals_(["hello"]._removeIndex_((1)),[]);
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveIndex",{},smalltalk.ArrayTest)})},
messageSends: ["assert:equals:", "removeIndex:"]}),
smalltalk.ArrayTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Array();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.ArrayTest.klass)})},
messageSends: []}),
smalltalk.ArrayTest.klass);


smalltalk.addClass('StringTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "hello";
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.StringTest)})},
messageSends: []}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "abbaerte";
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},smalltalk.StringTest)})},
messageSends: []}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAddRemove",
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
messageSends: ["should:raise:", "add:", "remove:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("hello"._asArray(),["h", "e", "l", "l", "o"]);
return self}, function($ctx1) {$ctx1.fill(self,"testAsArray",{},smalltalk.StringTest)})},
messageSends: ["assert:equals:", "asArray"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAt",
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
messageSends: ["assert:equals:", "at:", "at:ifAbsent:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtPut",
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return "hello"._at_put_((1),"a");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testAtPut",{},smalltalk.StringTest)})},
messageSends: ["should:raise:", "at:put:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCollect",
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
messageSends: ["assertSameContents:as:", "collect:", ",", "collection"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCopyWithoutAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("*hello* *world*"._copyWithoutAll_("*"),"hello world");
return self}, function($ctx1) {$ctx1.fill(self,"testCopyWithoutAll",{},smalltalk.StringTest)})},
messageSends: ["assert:equals:", "copyWithoutAll:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDetect",
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
messageSends: ["assert:equals:", "detect:", "=", "collection", "should:raise:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
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
messageSends: ["assert:equals:", "deny:", "=", "at:ifAbsent:", "yourself"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_("hello".__eq_eq("hello"));
self._deny_("hello".__eq_eq("world"));
self._assert_("hello".__eq_eq("hello"._yourself()));
self._assert_(_st("hello"._yourself()).__eq_eq("hello"));
self._deny_("".__eq_eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},smalltalk.StringTest)})},
messageSends: ["assert:", "==", "deny:", "yourself"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIncludesSubString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_("amber"._includesSubString_("ber"));
self._deny_("amber"._includesSubString_("zork"));
return self}, function($ctx1) {$ctx1.fill(self,"testIncludesSubString",{},smalltalk.StringTest)})},
messageSends: ["assert:", "includesSubString:", "deny:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIndexOf",
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
messageSends: ["assert:equals:", "indexOf:", "collection", "should:raise:", "indexOf:ifAbsent:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testJoin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(","._join_(["hello", "world"]),"hello,world");
return self}, function($ctx1) {$ctx1.fill(self,"testJoin",{},smalltalk.StringTest)})},
messageSends: ["assert:equals:", "join:"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSelect",
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
messageSends: ["assertSameContents:as:", "select:", "=", "collection"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("smalltalk"._size(),(9));
self._assert_equals_(""._size(),(0));
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{},smalltalk.StringTest)})},
messageSends: ["assert:equals:", "size"]}),
smalltalk.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testStreamContents",
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
messageSends: ["assert:equals:", "streamContents:", "nextPutAll:", "space"]}),
smalltalk.StringTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$String();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.StringTest.klass)})},
messageSends: []}),
smalltalk.StringTest.klass);


smalltalk.addClass('ConsoleTranscriptTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testShow",
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
messageSends: ["current", "register:", "new", "shouldnt:raise:", "show:"]}),
smalltalk.ConsoleTranscriptTest);



smalltalk.addClass('JSObjectProxyTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "jsObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: '', 'e': null, 'f': undefined};
return self}, function($ctx1) {$ctx1.fill(self,"jsObject",{},smalltalk.JSObjectProxyTest)})},
messageSends: []}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfAbsent",
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
messageSends: ["jsObject", "assert:equals:", "at:ifAbsent:"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfPresent",
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
messageSends: ["jsObject", "assert:equals:", "at:ifPresent:", ",", "asString"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfPresentIfAbsent",
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
messageSends: ["jsObject", "assert:equals:", "at:ifPresent:ifAbsent:", ",", "asString"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDNU",
fn: function (){
var self=this;
function $MessageNotUnderstood(){return smalltalk.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._jsObject())._foo();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$MessageNotUnderstood());
return self}, function($ctx1) {$ctx1.fill(self,"testDNU",{},smalltalk.JSObjectProxyTest)})},
messageSends: ["should:raise:", "foo", "jsObject"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._jsObject())._a(),(1));
self._assert_equals_(_st(self._jsObject())._b(),(2));
self._assert_equals_(_st(self._jsObject())._c_((3)),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSend",{},smalltalk.JSObjectProxyTest)})},
messageSends: ["assert:equals:", "a", "jsObject", "b", "c:"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMethodWithArguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._jsObject())._c_((1)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testMethodWithArguments",{},smalltalk.JSObjectProxyTest)})},
messageSends: ["assert:equals:", "c:", "jsObject"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrinting",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._jsObject())._printString(),"[object Object]");
return self}, function($ctx1) {$ctx1.fill(self,"testPrinting",{},smalltalk.JSObjectProxyTest)})},
messageSends: ["assert:equals:", "printString", "jsObject"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPropertyThatReturnsEmptyString",
fn: function (){
var self=this;
var object;
return smalltalk.withContext(function($ctx1) { 
object=self._jsObject();
self._assert_equals_(_st(object)._d(),"");
_st(object)._d_("hello");
self._assert_equals_(_st(object)._d(),"hello");
return self}, function($ctx1) {$ctx1.fill(self,"testPropertyThatReturnsEmptyString",{object:object},smalltalk.JSObjectProxyTest)})},
messageSends: ["jsObject", "assert:equals:", "d", "d:"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPropertyThatReturnsUndefined",
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
messageSends: ["jsObject", "shouldnt:raise:", "e", "assert:", "isNil"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValue",
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { 
testObject=self._jsObject();
self._assert_equals_(_st(_st(testObject)._value())._printString(),"[object Object]");
_st(testObject)._at_put_("value","aValue");
self._assert_equals_(_st(testObject)._value(),"aValue");
return self}, function($ctx1) {$ctx1.fill(self,"testValue",{testObject:testObject},smalltalk.JSObjectProxyTest)})},
messageSends: ["jsObject", "assert:equals:", "printString", "value", "at:put:"]}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testYourself",
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
messageSends: ["d:", "jsObject", "yourself", "assert:equals:", "d"]}),
smalltalk.JSObjectProxyTest);



smalltalk.addClass('JavaScriptExceptionTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testCatchingException",
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
messageSends: ["on:do:", "assert:", "=", "exception", "throwException"]}),
smalltalk.JavaScriptExceptionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRaisingException",
fn: function (){
var self=this;
function $JavaScriptException(){return smalltalk.JavaScriptException||(typeof JavaScriptException=="undefined"?nil:JavaScriptException)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return self._throwException();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$JavaScriptException());
return self}, function($ctx1) {$ctx1.fill(self,"testRaisingException",{},smalltalk.JavaScriptExceptionTest)})},
messageSends: ["should:raise:", "throwException"]}),
smalltalk.JavaScriptExceptionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "throwException",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
throw 'test';
return self}, function($ctx1) {$ctx1.fill(self,"throwException",{},smalltalk.JavaScriptExceptionTest)})},
messageSends: []}),
smalltalk.JavaScriptExceptionTest);



smalltalk.addClass('MessageSendTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testValue",
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
messageSends: ["receiver:", "new", "selector:", "yourself", "assert:equals:", "value"]}),
smalltalk.MessageSendTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValueWithArguments",
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
messageSends: ["receiver:", "new", "selector:", "yourself", "assert:equals:", "value:", "valueWithPossibleArguments:"]}),
smalltalk.MessageSendTest);



smalltalk.addClass('NumberTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAbs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((4)._abs(),(4));
self._assert_equals_((-4)._abs(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testAbs",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "abs"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testArithmetic",
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
messageSends: ["assert:equals:", "+", "-", "/", "*"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testComparison",
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
messageSends: ["assert:", ">", "<", "deny:", ">=", "<="]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCopying",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st((1)._copy()).__eq_eq((1)));
self._assert_(_st((1)._deepCopy()).__eq_eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testCopying",{},smalltalk.NumberTest)})},
messageSends: ["assert:", "==", "copy", "deepCopy"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
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
messageSends: ["assert:", "=", "deny:", "yourself"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHexNumbers",
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
messageSends: ["assert:equals:", "truncated"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIdentity",
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
messageSends: ["assert:", "==", "deny:", "yourself"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInvalidHexNumbers",
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
messageSends: ["should:raise:", "rG", "rg", "rH", "rh", "rI", "ri", "rJ", "rj", "rK", "rk", "rL", "rl", "rM", "rm", "rN", "rn", "rO", "ro", "rP", "rp", "rQ", "rq", "rR", "rr", "rS", "rs", "rT", "rt", "rU", "ru", "rV", "rv", "rW", "rw", "rX", "rx", "rY", "ry", "rZ", "rz", "Z"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMinMax",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((2)._max_((5)),(5));
self._assert_equals_((2)._min_((5)),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testMinMax",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "max:", "min:"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNegated",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((3)._negated(),(-3));
self._assert_equals_((-3)._negated(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testNegated",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "negated"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrintShowingDecimalPlaces",
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
messageSends: ["assert:equals:", "printShowingDecimalPlaces:", "negated"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRounded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((3)._rounded(),(3));
self._assert_equals_((3.212)._rounded(),(3));
self._assert_equals_((3.51)._rounded(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testRounded",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "rounded"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSqrt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((4)._sqrt(),(2));
self._assert_equals_((16)._sqrt(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testSqrt",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "sqrt"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSquared",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((4)._squared(),(16));
return self}, function($ctx1) {$ctx1.fill(self,"testSquared",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "squared"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTimesRepeat",
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
messageSends: ["timesRepeat:", "+", "assert:equals:"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((1)._to_((5)),[(1), (2), (3), (4), (5)]);
return self}, function($ctx1) {$ctx1.fill(self,"testTo",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "to:"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testToBy",
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
messageSends: ["assert:equals:", "to:by:", "should:raise:"]}),
smalltalk.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTruncated",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((3)._truncated(),(3));
self._assert_equals_((3.212)._truncated(),(3));
self._assert_equals_((3.51)._truncated(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testTruncated",{},smalltalk.NumberTest)})},
messageSends: ["assert:equals:", "truncated"]}),
smalltalk.NumberTest);



smalltalk.addClass('ObjectMock', smalltalk.Object, ['foo', 'bar'], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "foo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@foo"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"foo",{},smalltalk.ObjectMock)})},
messageSends: []}),
smalltalk.ObjectMock);

smalltalk.addMethod(
smalltalk.method({
selector: "foo:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@foo"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"foo:",{anObject:anObject},smalltalk.ObjectMock)})},
messageSends: []}),
smalltalk.ObjectMock);



smalltalk.addClass('ObjectMock2', smalltalk.ObjectMock, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "foo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@foo"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"foo",{},smalltalk.ObjectMock2)})},
messageSends: []}),
smalltalk.ObjectMock2);

smalltalk.addMethod(
smalltalk.method({
selector: "foo:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@foo"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"foo:",{anObject:anObject},smalltalk.ObjectMock2)})},
messageSends: []}),
smalltalk.ObjectMock2);



smalltalk.addClass('ObjectMock3', smalltalk.ObjectMock2, [], 'Kernel-Tests');


smalltalk.addClass('ObjectMock4', smalltalk.ObjectMock3, [], 'Kernel-Tests');


smalltalk.addClass('ObjectTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "notDefined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return undefined;;
return self}, function($ctx1) {$ctx1.fill(self,"notDefined",{},smalltalk.ObjectTest)})},
messageSends: []}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasicAccess",
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
messageSends: ["new", "basicAt:put:", "assert:equals:", "basicAt:"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasicPerform",
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
messageSends: ["new", "basicAt:put:", "+", "assert:equals:", "basicPerform:", "basicPerform:withArguments:"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDNU",
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
messageSends: ["should:raise:", "foo", "new"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
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
messageSends: ["new", "deny:", "=", "assert:", "yourself"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHalt",
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
messageSends: ["should:raise:", "halt", "new"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIdentity",
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
messageSends: ["new", "deny:", "==", "assert:", "yourself"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfNil",
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
messageSends: ["deny:", "isNil", "new", "=", "ifNil:", "assert:equals:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInstVars",
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
messageSends: ["new", "assert:equals:", "instVarAt:", "instVarAt:put:"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNilUndefined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._notDefined(),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testNilUndefined",{},smalltalk.ObjectTest)})},
messageSends: ["assert:equals:", "notDefined"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testYourself",
fn: function (){
var self=this;
var o;
function $ObjectMock(){return smalltalk.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
return smalltalk.withContext(function($ctx1) { 
o=_st($ObjectMock())._new();
self._assert_(_st(_st(o)._yourself()).__eq_eq(o));
return self}, function($ctx1) {$ctx1.fill(self,"testYourself",{o:o},smalltalk.ObjectTest)})},
messageSends: ["new", "assert:", "==", "yourself"]}),
smalltalk.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testidentityHash",
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
messageSends: ["new", "assert:", "==", "identityHash", "deny:"]}),
smalltalk.ObjectTest);



smalltalk.addClass('PackageTest', smalltalk.TestCase, ['zorkPackage', 'grulPackage', 'backUpCommitPathJs', 'backUpCommitPathSt'], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
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
messageSends: ["defaultCommitPathJs", "defaultCommitPathSt", "resetCommitPaths", "name:", "new", "commitPathJs:", "commitPathSt:", "yourself"]}),
smalltalk.PackageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=$Package();
_st($1)._defaultCommitPathJs_(self["@backUpCommitPathJs"]);
$2=_st($1)._defaultCommitPathSt_(self["@backUpCommitPathSt"]);
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.PackageTest)})},
messageSends: ["defaultCommitPathJs:", "defaultCommitPathSt:"]}),
smalltalk.PackageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@grulPackage"])._commitPathJs(),"server/grul/js");
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathJsShouldBeServerGrulJs",{},smalltalk.PackageTest)})},
messageSends: ["assert:equals:", "commitPathJs"]}),
smalltalk.PackageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@grulPackage"])._commitPathSt(),"grul/st");
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathStShouldBeGrulSt",{},smalltalk.PackageTest)})},
messageSends: ["assert:equals:", "commitPathSt"]}),
smalltalk.PackageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@zorkPackage"])._commitPathJs(),"js");
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathJsShouldBeJs",{},smalltalk.PackageTest)})},
messageSends: ["assert:equals:", "commitPathJs"]}),
smalltalk.PackageTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@zorkPackage"])._commitPathSt(),"st");
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathStShouldBeSt",{},smalltalk.PackageTest)})},
messageSends: ["assert:equals:", "commitPathSt"]}),
smalltalk.PackageTest);



smalltalk.addClass('PackageWithDefaultCommitPathChangedTest', smalltalk.PackageTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
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
messageSends: ["setUp", "defaultCommitPathJs:", "defaultCommitPathSt:"]}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@grulPackage"])._commitPathJs(),"server/grul/js");
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathJsShouldBeServerGrulJs",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
messageSends: ["assert:equals:", "commitPathJs"]}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@grulPackage"])._commitPathSt(),"grul/st");
return self}, function($ctx1) {$ctx1.fill(self,"testGrulCommitPathStShouldBeGrulSt",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
messageSends: ["assert:equals:", "commitPathSt"]}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@zorkPackage"])._commitPathJs(),"javascripts/");
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathJsShouldBeJavascript",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
messageSends: ["assert:equals:", "commitPathJs"]}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSmalltalk",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@zorkPackage"])._commitPathSt(),"smalltalk/");
return self}, function($ctx1) {$ctx1.fill(self,"testZorkCommitPathStShouldBeSmalltalk",{},smalltalk.PackageWithDefaultCommitPathChangedTest)})},
messageSends: ["assert:equals:", "commitPathSt"]}),
smalltalk.PackageWithDefaultCommitPathChangedTest);


smalltalk.addMethod(
smalltalk.method({
selector: "shouldInheritSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"shouldInheritSelectors",{},smalltalk.PackageWithDefaultCommitPathChangedTest.klass)})},
messageSends: []}),
smalltalk.PackageWithDefaultCommitPathChangedTest.klass);


smalltalk.addClass('PointTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAccessing",
fn: function (){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(_st($Point())._x_y_((3),(4)))._x(),(3));
self._assert_equals_(_st(_st($Point())._x_y_((3),(4)))._y(),(4));
self._assert_equals_(_st(_st(_st($Point())._new())._x_((3)))._x(),(3));
self._assert_equals_(_st(_st(_st($Point())._new())._y_((4)))._y(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testAccessing",{},smalltalk.PointTest)})},
messageSends: ["assert:equals:", "x", "x:y:", "y", "x:", "new", "y:"]}),
smalltalk.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testArithmetic",
fn: function (){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st((3).__at((4))).__star((3).__at((4))),_st($Point())._x_y_((9),(16)));
self._assert_equals_(_st((3).__at((4))).__plus((3).__at((4))),_st($Point())._x_y_((6),(8)));
self._assert_equals_(_st((3).__at((4))).__minus((3).__at((4))),_st($Point())._x_y_((0),(0)));
self._assert_equals_(_st((6).__at((8))).__slash((3).__at((4))),_st($Point())._x_y_((2),(2)));
return self}, function($ctx1) {$ctx1.fill(self,"testArithmetic",{},smalltalk.PointTest)})},
messageSends: ["assert:equals:", "*", "@", "x:y:", "+", "-", "/"]}),
smalltalk.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAt",
fn: function (){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((3).__at((4)),_st($Point())._x_y_((3),(4)));
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},smalltalk.PointTest)})},
messageSends: ["assert:equals:", "@", "x:y:"]}),
smalltalk.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEgality",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st((3).__at((4))).__eq((3).__at((4))));
self._deny_(_st((3).__at((5))).__eq((3).__at((6))));
return self}, function($ctx1) {$ctx1.fill(self,"testEgality",{},smalltalk.PointTest)})},
messageSends: ["assert:", "=", "@", "deny:"]}),
smalltalk.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTranslateBy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st((3).__at((3)))._translateBy_((0).__at((1))),(3).__at((4)));
self._assert_equals_(_st((3).__at((3)))._translateBy_((0).__at((1)._negated())),(3).__at((2)));
self._assert_equals_(_st((3).__at((3)))._translateBy_((2).__at((3))),(5).__at((6)));
self._assert_equals_(_st((3).__at((3)))._translateBy_(_st((3)._negated()).__at((0))),(0).__at((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testTranslateBy",{},smalltalk.PointTest)})},
messageSends: ["assert:equals:", "translateBy:", "@", "negated"]}),
smalltalk.PointTest);



smalltalk.addClass('RandomTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "textNext",
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
messageSends: ["timesRepeat:", "next", "new", "assert:", ">=", "<", "deny:", "="]}),
smalltalk.RandomTest);



smalltalk.addClass('SetTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAddRemove",
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
messageSends: ["new", "assert:", "isEmpty", "add:", "includes:", "remove:", "deny:"]}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAt",
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
messageSends: ["should:raise:", "at:put:", "new"]}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCollect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st([(5), (6), (8)]._asSet())._collect_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__backslash_backslash((3));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})),[(0), (2)]._asSet());
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{},smalltalk.SetTest)})},
messageSends: ["assert:equals:", "collect:", "\x5c\x5c", "asSet"]}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testComparing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_([(0), (2)]._asSet(),[(0), (2)]._asSet());
self._assert_equals_([(2), (0)]._asSet(),[(0), (2)]._asSet());
self._deny_(_st([(0), (2), (3)]._asSet()).__eq([(0), (2)]._asSet()));
self._deny_(_st([(1), (2)]._asSet()).__eq([(0), (2)]._asSet()));
return self}, function($ctx1) {$ctx1.fill(self,"testComparing",{},smalltalk.SetTest)})},
messageSends: ["assert:equals:", "asSet", "deny:", "="]}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrintString",
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
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:"]}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSize",
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(_st($Set())._new())._size(),(0));
self._assert_equals_(_st(_st($Set())._withAll_([(1), (2), (3), (4)]))._size(),(4));
self._assert_equals_(_st(_st($Set())._withAll_([(1), (1), (1), (1)]))._size(),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{},smalltalk.SetTest)})},
messageSends: ["assert:equals:", "size", "new", "withAll:"]}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnboxedObjects",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(_st(["foo"._yourself(),"foo"._yourself()])._asSet())._asArray(),["foo"]);
return self}, function($ctx1) {$ctx1.fill(self,"testUnboxedObjects",{},smalltalk.SetTest)})},
messageSends: ["assert:equals:", "asArray", "asSet", "yourself"]}),
smalltalk.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnicity",
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
messageSends: ["new", "add:", "assert:equals:", "size", "asArray"]}),
smalltalk.SetTest);



smalltalk.addClass('StreamTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._collectionClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.StreamTest)})},
messageSends: ["collectionClass", "class"]}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "newCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCollection",{},smalltalk.StreamTest)})},
messageSends: ["new", "collectionClass"]}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "newStream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._collectionClass())._new())._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newStream",{},smalltalk.StreamTest)})},
messageSends: ["stream", "new", "collectionClass"]}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtStartAtEnd",
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
messageSends: ["newStream", "assert:", "atStart", "atEnd", "nextPutAll:", "newCollection", "deny:", "position:"]}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContents",
fn: function (){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
stream=self._newStream();
_st(stream)._nextPutAll_(self._newCollection());
self._assert_equals_(_st(stream)._contents(),self._newCollection());
return self}, function($ctx1) {$ctx1.fill(self,"testContents",{stream:stream},smalltalk.StreamTest)})},
messageSends: ["newStream", "nextPutAll:", "newCollection", "assert:equals:", "contents"]}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIsEmpty",
fn: function (){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
stream=self._newStream();
self._assert_(_st(stream)._isEmpty());
_st(stream)._nextPutAll_(self._newCollection());
self._deny_(_st(stream)._isEmpty());
return self}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{stream:stream},smalltalk.StreamTest)})},
messageSends: ["newStream", "assert:", "isEmpty", "nextPutAll:", "newCollection", "deny:"]}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPosition",
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
messageSends: ["newCollection", "newStream", "nextPutAll:", "assert:equals:", "position", "size", "position:", "next"]}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testReading",
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
messageSends: ["newCollection", "newStream", "nextPutAll:", "position:", "do:", "assert:equals:", "next", "assert:", "isNil"]}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testStreamContents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"testStreamContents",{},smalltalk.StreamTest)})},
messageSends: []}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWrite",
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
messageSends: ["newCollection", "newStream", "do:", "<<", "assert:equals:", "contents"]}),
smalltalk.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWriting",
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
messageSends: ["newCollection", "newStream", "do:", "nextPut:", "assert:equals:", "contents", "nextPutAll:"]}),
smalltalk.StreamTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return nil;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.StreamTest.klass)})},
messageSends: []}),
smalltalk.StreamTest.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.StreamTest.klass)})},
messageSends: ["isNil", "collectionClass"]}),
smalltalk.StreamTest.klass);


smalltalk.addClass('ArrayStreamTest', smalltalk.StreamTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "newCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[true,(1),(3).__at((4)),"foo"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCollection",{},smalltalk.ArrayStreamTest)})},
messageSends: ["@"]}),
smalltalk.ArrayStreamTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Array();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.ArrayStreamTest.klass)})},
messageSends: []}),
smalltalk.ArrayStreamTest.klass);


smalltalk.addClass('StringStreamTest', smalltalk.StreamTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "newCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "hello world";
}, function($ctx1) {$ctx1.fill(self,"newCollection",{},smalltalk.StringStreamTest)})},
messageSends: []}),
smalltalk.StringStreamTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$String();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},smalltalk.StringStreamTest.klass)})},
messageSends: []}),
smalltalk.StringStreamTest.klass);


smalltalk.addClass('UndefinedTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testCopying",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(nil._copy(),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testCopying",{},smalltalk.UndefinedTest)})},
messageSends: ["assert:equals:", "copy"]}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDeepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(nil._deepCopy()).__eq(nil));
return self}, function($ctx1) {$ctx1.fill(self,"testDeepCopy",{},smalltalk.UndefinedTest)})},
messageSends: ["assert:", "=", "deepCopy"]}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfNil",
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
messageSends: ["assert:equals:", "ifNil:", "deny:", "=", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"]}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIsNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(nil._isNil());
self._deny_(nil._notNil());
return self}, function($ctx1) {$ctx1.fill(self,"testIsNil",{},smalltalk.UndefinedTest)})},
messageSends: ["assert:", "isNil", "deny:", "notNil"]}),
smalltalk.UndefinedTest);



