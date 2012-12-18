smalltalk.addPackage('Kernel-Tests', {});
smalltalk.addClass('BlockClosureTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCompiledSource",
smalltalk.method({
selector: "testCompiledSource",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st((function(){
return _st((1)).__plus((1));
}))._compiledSource())._includesSubString_("function"));
return self}, self, "testCompiledSource", [], smalltalk.BlockClosureTest)}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testEnsure",
smalltalk.method({
selector: "testEnsure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st((function(){
return _st((smalltalk.Error || Error))._new();
}))._ensure_((function(){
return true;
})));
return self}, self, "testEnsure", [], smalltalk.BlockClosureTest)}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testNumArgs",
smalltalk.method({
selector: "testNumArgs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st((function(){
}))._numArgs(),(0));
_st(self)._assert_equals_(_st((function(a,b){
}))._numArgs(),(2));
return self}, self, "testNumArgs", [], smalltalk.BlockClosureTest)}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testOnDo",
smalltalk.method({
selector: "testOnDo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st((function(){
return _st(_st((smalltalk.Error || Error))._new())._signal();
}))._on_do_((smalltalk.Error || Error),(function(ex){
return true;
})));
return self}, self, "testOnDo", [], smalltalk.BlockClosureTest)}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testValue",
smalltalk.method({
selector: "testValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st((function(){
return _st((1)).__plus((1));
}))._value(),(2));
_st(self)._assert_equals_(_st((function(x){
return _st(x).__plus((1));
}))._value_((2)),(3));
_st(self)._assert_equals_(_st((function(x,y){
return _st(x).__star(y);
}))._value_value_((2),(4)),(8));
_st(self)._assert_equals_(_st((function(a,b,c){
return (1);
}))._value(),(1));
return self}, self, "testValue", [], smalltalk.BlockClosureTest)}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testValueWithPossibleArguments",
smalltalk.method({
selector: "testValueWithPossibleArguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st((function(){
return (1);
}))._valueWithPossibleArguments_([(3), (4)]),(1));
_st(self)._assert_equals_(_st((function(a){
return _st(a).__plus((4));
}))._valueWithPossibleArguments_([(3), (4)]),(7));
_st(self)._assert_equals_(_st((function(a,b){
return _st(a).__plus(b);
}))._valueWithPossibleArguments_([(3), (4), (5)]),(7));
return self}, self, "testValueWithPossibleArguments", [], smalltalk.BlockClosureTest)}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testWhileFalse",
smalltalk.method({
selector: "testWhileFalse",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var i;
i=(0);
_st((function(){
return _st(i).__gt((5));
}))._whileFalse_((function(){
i=_st(i).__plus((1));
return i;
}));
_st(self)._assert_equals_(i,(6));
i=(0);
_st((function(){
i=_st(i).__plus((1));
i;
return _st(i).__gt((5));
}))._whileFalse();
_st(self)._assert_equals_(i,(6));
return self}, self, "testWhileFalse", [], smalltalk.BlockClosureTest)}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testWhileTrue",
smalltalk.method({
selector: "testWhileTrue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var i;
i=(0);
_st((function(){
return _st(i).__lt((5));
}))._whileTrue_((function(){
i=_st(i).__plus((1));
return i;
}));
_st(self)._assert_equals_(i,(5));
i=(0);
_st((function(){
i=_st(i).__plus((1));
i;
return _st(i).__lt((5));
}))._whileTrue();
_st(self)._assert_equals_(i,(5));
return self}, self, "testWhileTrue", [], smalltalk.BlockClosureTest)}
}),
smalltalk.BlockClosureTest);



smalltalk.addClass('BooleanTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._deny_(_st((0)).__eq(false));
_st(self)._deny_(_st(false).__eq((0)));
_st(self)._deny_(_st("").__eq(false));
_st(self)._deny_(_st(false).__eq(""));
_st(self)._assert_(_st(true).__eq(true));
_st(self)._deny_(_st(false).__eq(true));
_st(self)._deny_(_st(true).__eq(false));
_st(self)._assert_(_st(false).__eq(false));
_st(self)._assert_(_st(_st(true)._yourself()).__eq(true));
_st(self)._assert_(_st(_st(true)._yourself()).__eq(_st(true)._yourself()));
return self}, self, "testEquality", [], smalltalk.BooleanTest)}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._deny_(_st((0)).__eq_eq(false));
_st(self)._deny_(_st(false).__eq_eq((0)));
_st(self)._deny_(_st("").__eq_eq(false));
_st(self)._deny_(_st(false).__eq_eq(""));
_st(self)._assert_(_st(true).__eq_eq(true));
_st(self)._deny_(_st(false).__eq_eq(true));
_st(self)._deny_(_st(true).__eq_eq(false));
_st(self)._assert_(_st(false).__eq_eq(false));
_st(self)._assert_(_st(_st(true)._yourself()).__eq_eq(true));
_st(self)._assert_(_st(_st(true)._yourself()).__eq_eq(_st(true)._yourself()));
return self}, self, "testIdentity", [], smalltalk.BooleanTest)}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testIfTrueIfFalse",
smalltalk.method({
selector: "testIfTrueIfFalse",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2,$3,$4,$5,$6,$7,$8;
if(smalltalk.assert(true)){
$1="alternative block";
};
_st(self)._assert_(_st($1).__eq("alternative block"));
if(! smalltalk.assert(true)){
$2="alternative block";
};
_st(self)._assert_(_st($2).__eq(nil));
if(smalltalk.assert(false)){
$3="alternative block";
};
_st(self)._assert_(_st($3).__eq(nil));
if(! smalltalk.assert(false)){
$4="alternative block";
};
_st(self)._assert_(_st($4).__eq("alternative block"));
if(smalltalk.assert(false)){
$5="alternative block";
} else {
$5="alternative block2";
};
_st(self)._assert_(_st($5).__eq("alternative block2"));
if(smalltalk.assert(false)){
$6="alternative block2";
} else {
$6="alternative block";
};
_st(self)._assert_(_st($6).__eq("alternative block"));
if(smalltalk.assert(true)){
$7="alternative block";
} else {
$7="alternative block2";
};
_st(self)._assert_(_st($7).__eq("alternative block"));
if(smalltalk.assert(true)){
$8="alternative block2";
} else {
$8="alternative block";
};
_st(self)._assert_(_st($8).__eq("alternative block2"));
return self}, self, "testIfTrueIfFalse", [], smalltalk.BooleanTest)}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testLogic",
smalltalk.method({
selector: "testLogic",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2,$3,$4;
_st(self)._assert_(_st(true).__and(true));
_st(self)._deny_(_st(true).__and(false));
_st(self)._deny_(_st(false).__and(true));
$1=_st(self)._deny_(_st(false).__and(false));
_st(self)._assert_(_st(true).__or(true));
_st(self)._assert_(_st(true).__or(false));
_st(self)._assert_(_st(false).__or(true));
$2=_st(self)._deny_(_st(false).__or(false));
_st(self)._assert_(_st(true).__and(_st((1)).__gt((0))));
_st(self)._deny_(_st(_st((1)).__gt((0))).__and(false));
$3=_st(self)._deny_(_st(_st((1)).__gt((0))).__and(_st((1)).__gt((2))));
_st(self)._assert_(_st(false).__or(_st((1)).__gt((0))));
_st(self)._assert_(_st(_st((1)).__gt((0))).__or(false));
$4=_st(self)._assert_(_st(_st((1)).__gt((0))).__or(_st((1)).__gt((2))));
return self}, self, "testLogic", [], smalltalk.BooleanTest)}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testLogicKeywords",
smalltalk.method({
selector: "testLogicKeywords",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2,$3,$4;
_st(self)._assert_(_st(true)._and_((function(){
return true;
})));
_st(self)._deny_(_st(true)._and_((function(){
return false;
})));
_st(self)._deny_(_st(false)._and_((function(){
return true;
})));
$1=_st(self)._deny_(_st(false)._and_((function(){
return false;
})));
_st(self)._assert_(_st(true)._or_((function(){
return true;
})));
_st(self)._assert_(_st(true)._or_((function(){
return false;
})));
_st(self)._assert_(_st(false)._or_((function(){
return true;
})));
$2=_st(self)._deny_(_st(false)._or_((function(){
return false;
})));
_st(self)._assert_(_st(true)._and_((function(){
return _st((1)).__gt((0));
})));
_st(self)._deny_(_st(_st((1)).__gt((0)))._and_((function(){
return false;
})));
$3=_st(self)._deny_(_st(_st((1)).__gt((0)))._and_((function(){
return _st((1)).__gt((2));
})));
_st(self)._assert_(_st(false)._or_((function(){
return _st((1)).__gt((0));
})));
_st(self)._assert_(_st(_st((1)).__gt((0)))._or_((function(){
return false;
})));
$4=_st(self)._assert_(_st(_st((1)).__gt((0)))._or_((function(){
return _st((1)).__gt((2));
})));
return self}, self, "testLogicKeywords", [], smalltalk.BooleanTest)}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testNonBooleanError",
smalltalk.method({
selector: "testNonBooleanError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._should_raise_((function(){
if(smalltalk.assert("")){
} else {
};
}),(smalltalk.NonBooleanReceiver || NonBooleanReceiver));
return self}, self, "testNonBooleanError", [], smalltalk.BooleanTest)}
}),
smalltalk.BooleanTest);



smalltalk.addClass('ClassBuilderTest', smalltalk.TestCase, ['builder', 'theClass'], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { self["@builder"]=_st((smalltalk.ClassBuilder || ClassBuilder))._new();
return self}, self, "setUp", [], smalltalk.ClassBuilderTest)}
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { if(($receiver = self["@theClass"]) == nil || $receiver == undefined){
self["@theClass"];
} else {
_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._removeClass_(self["@theClass"]);
self["@theClass"]=nil;
self["@theClass"];
};
return self}, self, "tearDown", [], smalltalk.ClassBuilderTest)}
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testClassCopy",
smalltalk.method({
selector: "testClassCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { self["@theClass"]=_st(self["@builder"])._copyClass_named_((smalltalk.ObjectMock || ObjectMock),"ObjectMock2");
_st(self)._assert_(_st(_st(self["@theClass"])._superclass()).__eq_eq(_st((smalltalk.ObjectMock || ObjectMock))._superclass()));
_st(self)._assert_(_st(_st(self["@theClass"])._instanceVariableNames()).__eq_eq(_st((smalltalk.ObjectMock || ObjectMock))._instanceVariableNames()));
_st(self)._assert_equals_(_st(self["@theClass"])._name(),"ObjectMock2");
_st(self)._assert_(_st(_st(self["@theClass"])._package()).__eq_eq(_st((smalltalk.ObjectMock || ObjectMock))._package()));
_st(self)._assert_equals_(_st(_st(self["@theClass"])._methodDictionary())._keys(),_st(_st((smalltalk.ObjectMock || ObjectMock))._methodDictionary())._keys());
return self}, self, "testClassCopy", [], smalltalk.ClassBuilderTest)}
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testInstanceVariableNames",
smalltalk.method({
selector: "testInstanceVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st(self["@builder"])._instanceVariableNamesFor_("  hello   world   "),["hello", "world"]);
return self}, self, "testInstanceVariableNames", [], smalltalk.ClassBuilderTest)}
}),
smalltalk.ClassBuilderTest);



smalltalk.addClass('CollectionTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_assertSameContents_as_",
smalltalk.method({
selector: "assertSameContents:as:",
fn: function (aCollection,anotherCollection){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st(aCollection)._size()).__eq(_st(anotherCollection)._size()));
_st(aCollection)._do_((function(each){
return _st(self)._assert_(_st(_st(aCollection)._occurrencesOf_(each)).__eq(_st(anotherCollection)._occurrencesOf_(each)));
}));
return self}, self, "assertSameContents:as:", [aCollection,anotherCollection], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._collectionClass())._withAll_(_st(self)._defaultValues());
return $1;
}, self, "collection", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._class())._collectionClass();
return $1;
}, self, "collectionClass", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._collectionClass())._withAll_(["a", "b", "c", (1), (2), (1), "a"]);
return $1;
}, self, "collectionWithDuplicates", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_defaultValues",
smalltalk.method({
selector: "defaultValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return [(1), (2), (3), (-4)];
}, self, "defaultValues", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_isCollectionReadOnly",
smalltalk.method({
selector: "isCollectionReadOnly",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return false;
}, self, "isCollectionReadOnly", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsArray",
smalltalk.method({
selector: "testAsArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assertSameContents_as_(_st(self)._collection(),_st(_st(self)._collection())._asArray());
return self}, self, "testAsArray", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsOrderedCollection",
smalltalk.method({
selector: "testAsOrderedCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assertSameContents_as_(_st(self)._collection(),_st(_st(self)._collection())._asOrderedCollection());
return self}, self, "testAsOrderedCollection", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsSet",
smalltalk.method({
selector: "testAsSet",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var c;
var set;
c=_st(self)._collectionWithDuplicates();
set=_st(c)._asSet();
_st(self)._assert_(_st(_st(set)._size()).__eq((5)));
_st(c)._do_((function(each){
return _st(self)._assert_(_st(set)._includes_(each));
}));
return self}, self, "testAsSet", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var newCollection;
newCollection=[(1), (2), (3), (4)];
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._collect_((function(each){
return _st(each)._abs();
})),newCollection);
return self}, self, "testCollect", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st(_st(self)._collection())._detect_((function(each){
return _st(each).__lt((0));
}))).__eq((-4)));
_st(self)._should_raise_((function(){
return _st(_st(self)._collection())._detect_((function(each){
return _st(each).__eq((6));
}));
}),(smalltalk.Error || Error));
return self}, self, "testDetect", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testDo",
smalltalk.method({
selector: "testDo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var newCollection;
newCollection=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
_st(_st(self)._collection())._do_((function(each){
return _st(newCollection)._add_(each);
}));
_st(self)._assertSameContents_as_(_st(self)._collection(),newCollection);
return self}, self, "testDo", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testIsEmpty",
smalltalk.method({
selector: "testIsEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st(_st(self)._collectionClass())._new())._isEmpty());
_st(self)._deny_(_st(_st(self)._collection())._isEmpty());
return self}, self, "testIsEmpty", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var newCollection;
newCollection=[(2), (-4)];
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._select_((function(each){
return _st(each)._even();
})),newCollection);
return self}, self, "testSelect", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st(_st(_st(self)._collectionClass())._new())._size()).__eq((0)));
_st(self)._assert_(_st(_st(_st(self)._collection())._size()).__eq((4)));
return self}, self, "testSize", [], smalltalk.CollectionTest)}
}),
smalltalk.CollectionTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return nil;
}, self, "collectionClass", [], smalltalk.CollectionTest.klass)}
}),
smalltalk.CollectionTest.klass);

smalltalk.addMethod(
"_isAbstract",
smalltalk.method({
selector: "isAbstract",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._collectionClass())._isNil();
return $1;
}, self, "isAbstract", [], smalltalk.CollectionTest.klass)}
}),
smalltalk.CollectionTest.klass);


smalltalk.addClass('HashedCollectionTest', smalltalk.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("a").__minus_gt((1)),_st("b").__minus_gt((2)),_st("c").__minus_gt((3)),_st("d").__minus_gt((-4))]);
return $1;
}, self, "collection", [], smalltalk.HashedCollectionTest)}
}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("a").__minus_gt((1)),_st("b").__minus_gt((2)),_st("c").__minus_gt((3)),_st("d").__minus_gt((-4)),_st("e").__minus_gt((1)),_st("f").__minus_gt((2)),_st("g").__minus_gt((10))]);
return $1;
}, self, "collectionWithDuplicates", [], smalltalk.HashedCollectionTest)}
}),
smalltalk.HashedCollectionTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return (smalltalk.HashedCollection || HashedCollection);
}, self, "collectionClass", [], smalltalk.HashedCollectionTest.klass)}
}),
smalltalk.HashedCollectionTest.klass);


smalltalk.addClass('DictionaryTest', smalltalk.HashedCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st((smalltalk.Dictionary || Dictionary))._new();
_st($2)._at_put_((1),(1));
_st($2)._at_put_("a",(2));
_st($2)._at_put_(true,(3));
_st($2)._at_put_((4),(-4));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "collection", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
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
}, self, "collectionWithDuplicates", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testAccessing",
smalltalk.method({
selector: "testAccessing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var d;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_("hello","world");
_st(self)._assert_(_st(_st(d)._at_("hello")).__eq("world"));
_st(self)._assert_(_st(_st(d)._at_ifAbsent_("hello",(function(){
return nil;
}))).__eq("world"));
_st(self)._deny_(_st(_st(d)._at_ifAbsent_("foo",(function(){
return nil;
}))).__eq("world"));
_st(d)._at_put_((1),(2));
_st(self)._assert_(_st(_st(d)._at_((1))).__eq((2)));
_st(d)._at_put_(_st((1)).__at((3)),(3));
_st(self)._assert_(_st(_st(d)._at_(_st((1)).__at((3)))).__eq((3)));
return self}, self, "testAccessing", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testDynamicDictionaries",
smalltalk.method({
selector: "testDynamicDictionaries",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st(smalltalk.HashedCollection._fromPairs_([_st("hello").__minus_gt((1))]))._asDictionary()).__eq(_st((smalltalk.Dictionary || Dictionary))._with_(_st("hello").__minus_gt((1)))));
return self}, self, "testDynamicDictionaries", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
var d1;
var d2;
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
return self}, self, "testEquality", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfAbsent",
smalltalk.method({
selector: "testIfAbsent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var d;
var visited;
visited=false;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_ifAbsent_("hello",(function(){
visited=true;
return visited;
}));
_st(self)._assert_(visited);
return self}, self, "testIfAbsent", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfPresent",
smalltalk.method({
selector: "testIfPresent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var d;
var visited;
var absent;
visited=false;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_("hello","world");
_st(d)._at_ifPresent_("hello",(function(value){
visited=value;
return visited;
}));
_st(self)._assert_(_st(visited).__eq("world"));
absent=_st(d)._at_ifPresent_("bye",(function(value){
visited=value;
return visited;
}));
_st(self)._assert_(_st(absent)._isNil());
return self}, self, "testIfPresent", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfPresentIfAbsent",
smalltalk.method({
selector: "testIfPresentIfAbsent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var d;
var visited;
visited=false;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_("hello","world");
_st(d)._at_ifPresent_ifAbsent_("hello",(function(value){
visited=value;
return visited;
}),(function(){
visited=true;
return visited;
}));
_st(self)._assert_(_st(visited).__eq("world"));
_st(d)._at_ifPresent_ifAbsent_("buy",(function(value){
visited=value;
return visited;
}),(function(){
visited=true;
return visited;
}));
_st(self)._assert_(visited);
return self}, self, "testIfPresentIfAbsent", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testKeys",
smalltalk.method({
selector: "testKeys",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var d;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
_st(self)._assert_(_st(_st(d)._keys()).__eq([(1), (2), (3)]));
return self}, self, "testKeys", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
$1=_st((smalltalk.Dictionary || Dictionary))._new();
_st($1)._at_put_("firstname","James");
_st($1)._at_put_("lastname","Bond");
$2=_st($1)._printString();
_st(self)._assert_equals_("a Dictionary('firstname'->'James' , 'lastname'->'Bond')",$2);
return self}, self, "testPrintString", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testRemoveKey",
smalltalk.method({
selector: "testRemoveKey",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var d;
var key;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
key=(2);
_st(self)._assert_(_st(_st(d)._keys()).__eq([(1), (2), (3)]));
_st(d)._removeKey_(key);
_st(self)._assert_(_st(_st(d)._keys()).__eq([(1), (3)]));
_st(self)._assert_(_st(_st(d)._values()).__eq([(2), (4)]));
_st(self)._deny_(_st(d)._includesKey_((2)));
return self}, self, "testRemoveKey", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testRemoveKeyIfAbsent",
smalltalk.method({
selector: "testRemoveKeyIfAbsent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var d;
var key;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
key=(2);
_st(self)._assert_(_st(_st(d)._removeKey_(key)).__eq((3)));
key=(3);
_st(self)._assert_(_st(_st(d)._removeKey_ifAbsent_(key,(function(){
return (42);
}))).__eq((4)));
key="why";
_st(self)._assert_(_st(_st(d)._removeKey_ifAbsent_(key,(function(){
return (42);
}))).__eq((42)));
return self}, self, "testRemoveKeyIfAbsent", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var d;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(self)._assert_(_st(_st(d)._size()).__eq((0)));
_st(d)._at_put_((1),(2));
_st(self)._assert_(_st(_st(d)._size()).__eq((1)));
_st(d)._at_put_((2),(3));
_st(self)._assert_(_st(_st(d)._size()).__eq((2)));
return self}, self, "testSize", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testValues",
smalltalk.method({
selector: "testValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var d;
d=_st((smalltalk.Dictionary || Dictionary))._new();
_st(d)._at_put_((1),(2));
_st(d)._at_put_((2),(3));
_st(d)._at_put_((3),(4));
_st(self)._assert_(_st(_st(d)._values()).__eq([(2), (3), (4)]));
return self}, self, "testValues", [], smalltalk.DictionaryTest)}
}),
smalltalk.DictionaryTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return (smalltalk.Dictionary || Dictionary);
}, self, "collectionClass", [], smalltalk.DictionaryTest.klass)}
}),
smalltalk.DictionaryTest.klass);


smalltalk.addClass('SequenceableCollectionTest', smalltalk.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st(_st(self)._collection())._at_((4))).__eq((-4)));
_st(self)._should_raise_((function(){
return _st(_st(self)._collection())._at_((5));
}),(smalltalk.Error || Error));
return self}, self, "testAt", [], smalltalk.SequenceableCollectionTest)}
}),
smalltalk.SequenceableCollectionTest);

smalltalk.addMethod(
"_testAtIfAbsent",
smalltalk.method({
selector: "testAtIfAbsent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st(_st(self)._collection())._at_ifAbsent_(_st(_st(_st(self)._collection())._size()).__plus((1)),(function(){
return "none";
}))).__eq("none"));
return self}, self, "testAtIfAbsent", [], smalltalk.SequenceableCollectionTest)}
}),
smalltalk.SequenceableCollectionTest);



smalltalk.addClass('ArrayTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAtIfAbsent",
smalltalk.method({
selector: "testAtIfAbsent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var array;
array=["hello", "world"];
_st(self)._assert_equals_(_st(array)._at_((1)),"hello");
_st(self)._assert_equals_(_st(array)._at_((2)),"world");
_st(self)._assert_equals_(_st(array)._at_ifAbsent_((2),(function(){
return "not found";
})),"world");
_st(self)._assert_equals_(_st(array)._at_ifAbsent_((0),(function(){
return "not found";
})),"not found");
_st(self)._assert_equals_(_st(array)._at_ifAbsent_((-10),(function(){
return "not found";
})),"not found");
_st(self)._assert_equals_(_st(array)._at_ifAbsent_((3),(function(){
return "not found";
})),"not found");
return self}, self, "testAtIfAbsent", [], smalltalk.ArrayTest)}
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testFirstN",
smalltalk.method({
selector: "testFirstN",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_([(1),(2),(3)],_st([(1),(2),(3),(4),(5)])._first_((3)));
return self}, self, "testFirstN", [], smalltalk.ArrayTest)}
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testIfEmpty",
smalltalk.method({
selector: "testIfEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_("zork",_st("")._ifEmpty_((function(){
return "zork";
})));
return self}, self, "testIfEmpty", [], smalltalk.ArrayTest)}
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
var array;
array=_st((smalltalk.Array || Array))._new();
_st(self)._assert_equals_("a Array ()",_st(array)._printString());
_st(array)._add_((1));
$1=_st(array)._add_((3));
_st(self)._assert_equals_("a Array (1 3)",_st(array)._printString());
_st(array)._add_("foo");
_st(self)._assert_equals_("a Array (1 3 'foo')",_st(array)._printString());
_st(array)._remove_((1));
$2=_st(array)._remove_((3));
_st(self)._assert_equals_("a Array ('foo')",_st(array)._printString());
_st(array)._addLast_((3));
_st(self)._assert_equals_("a Array ('foo' 3)",_st(array)._printString());
_st(array)._addLast_((3));
_st(self)._assert_equals_("a Array ('foo' 3 3)",_st(array)._printString());
return self}, self, "testPrintString", [], smalltalk.ArrayTest)}
}),
smalltalk.ArrayTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return (smalltalk.Array || Array);
}, self, "collectionClass", [], smalltalk.ArrayTest.klass)}
}),
smalltalk.ArrayTest.klass);


smalltalk.addClass('StringTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return "hello";
}, self, "collection", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return "abbaerte";
}, self, "collectionWithDuplicates", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAddRemove",
smalltalk.method({
selector: "testAddRemove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._should_raise_((function(){
return _st("hello")._add_("a");
}),(smalltalk.Error || Error));
_st(self)._should_raise_((function(){
return _st("hello")._remove_("h");
}),(smalltalk.Error || Error));
return self}, self, "testAddRemove", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAsArray",
smalltalk.method({
selector: "testAsArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st("hello")._asArray()).__eq(["h", "e", "l", "l", "o"]));
return self}, self, "testAsArray", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st("hello")._at_((1))).__eq("h"));
_st(self)._assert_(_st(_st("hello")._at_((5))).__eq("o"));
_st(self)._assert_(_st(_st("hello")._at_ifAbsent_((6),(function(){
return nil;
}))).__eq(nil));
return self}, self, "testAt", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAtPut",
smalltalk.method({
selector: "testAtPut",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._should_raise_((function(){
return _st("hello")._at_put_((1),"a");
}),(smalltalk.Error || Error));
return self}, self, "testAtPut", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var newCollection;
newCollection="hheelllloo";
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._collect_((function(each){
return _st(each).__comma(each);
})),newCollection);
return self}, self, "testCollect", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testCopyWithoutAll",
smalltalk.method({
selector: "testCopyWithoutAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_("hello world",_st("*hello* *world*")._copyWithoutAll_("*"));
return self}, self, "testCopyWithoutAll", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st(_st(self)._collection())._detect_((function(each){
return _st(each).__eq("h");
}))).__eq("h"));
_st(self)._should_raise_((function(){
return _st(_st(self)._collection())._detect_((function(each){
return _st(each).__eq((6));
}));
}),(smalltalk.Error || Error));
return self}, self, "testDetect", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st("hello").__eq("hello"));
_st(self)._deny_(_st("hello").__eq("world"));
_st(self)._assert_(_st("hello").__eq(_st("hello")._yourself()));
_st(self)._assert_(_st(_st("hello")._yourself()).__eq("hello"));
_st(self)._deny_(_st("").__eq((0)));
return self}, self, "testEquality", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st("hello").__eq_eq("hello"));
_st(self)._deny_(_st("hello").__eq_eq("world"));
_st(self)._assert_(_st("hello").__eq_eq(_st("hello")._yourself()));
_st(self)._assert_(_st(_st("hello")._yourself()).__eq_eq("hello"));
_st(self)._deny_(_st("").__eq_eq((0)));
return self}, self, "testIdentity", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testIncludesSubString",
smalltalk.method({
selector: "testIncludesSubString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st("amber")._includesSubString_("ber"));
_st(self)._deny_(_st("amber")._includesSubString_("zork"));
return self}, self, "testIncludesSubString", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testJoin",
smalltalk.method({
selector: "testJoin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_("hello,world",_st(",")._join_(["hello", "world"]));
return self}, self, "testJoin", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var newCollection;
newCollection="o";
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._select_((function(each){
return _st(each).__eq("o");
})),newCollection);
return self}, self, "testSelect", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st("smalltalk")._size(),(9));
_st(self)._assert_equals_(_st("")._size(),(0));
return self}, self, "testSize", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testStreamContents",
smalltalk.method({
selector: "testStreamContents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
_st(self)._assert_equals_("hello world",_st((smalltalk.String || String))._streamContents_((function(aStream){
_st(aStream)._nextPutAll_("hello");
_st(aStream)._space();
$1=_st(aStream)._nextPutAll_("world");
return $1;
})));
return self}, self, "testStreamContents", [], smalltalk.StringTest)}
}),
smalltalk.StringTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return (smalltalk.String || String);
}, self, "collectionClass", [], smalltalk.StringTest.klass)}
}),
smalltalk.StringTest.klass);


smalltalk.addClass('SymbolTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return smalltalk.symbolFor("hello");
}, self, "collection", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return smalltalk.symbolFor("phhaaarorra");
}, self, "collectionWithDuplicates", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAsString",
smalltalk.method({
selector: "testAsString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st(smalltalk.symbolFor("hello"))._asString(),"hello");
return self}, self, "testAsString", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAsSymbol",
smalltalk.method({
selector: "testAsSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq_eq(_st(smalltalk.symbolFor("hello"))._asSymbol()));
return self}, self, "testAsSymbol", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._at_((1))).__eq("h"));
_st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._at_((5))).__eq("o"));
_st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._at_ifAbsent_((6),(function(){
return nil;
}))).__eq(nil));
return self}, self, "testAt", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAtPut",
smalltalk.method({
selector: "testAtPut",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._should_raise_((function(){
return _st("hello")._at_put_((1),"a");
}),(smalltalk.Error || Error));
return self}, self, "testAtPut", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var newCollection;
newCollection=smalltalk.symbolFor("hheelllloo");
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._collect_((function(each){
return _st(each).__comma(each);
})),newCollection);
return self}, self, "testCollect", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testComparing",
smalltalk.method({
selector: "testComparing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(smalltalk.symbolFor("ab")).__gt(smalltalk.symbolFor("aa")));
_st(self)._deny_(_st(smalltalk.symbolFor("ab")).__gt(smalltalk.symbolFor("ba")));
_st(self)._assert_(_st(smalltalk.symbolFor("ab")).__lt(smalltalk.symbolFor("ba")));
_st(self)._deny_(_st(smalltalk.symbolFor("bb")).__lt(smalltalk.symbolFor("ba")));
_st(self)._assert_(_st(smalltalk.symbolFor("ab")).__gt_eq(smalltalk.symbolFor("aa")));
_st(self)._deny_(_st(smalltalk.symbolFor("ab")).__gt_eq(smalltalk.symbolFor("ba")));
_st(self)._assert_(_st(smalltalk.symbolFor("ab")).__lt_eq(smalltalk.symbolFor("ba")));
_st(self)._deny_(_st(smalltalk.symbolFor("bb")).__lt_eq(smalltalk.symbolFor("ba")));
return self}, self, "testComparing", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._copy()).__eq_eq(smalltalk.symbolFor("hello")));
_st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._deepCopy()).__eq_eq(smalltalk.symbolFor("hello")));
return self}, self, "testCopying", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st(_st(self)._collection())._detect_((function(each){
return _st(each).__eq("h");
}))).__eq("h"));
_st(self)._should_raise_((function(){
return _st(_st(self)._collection())._detect_((function(each){
return _st(each).__eq("z");
}));
}),(smalltalk.Error || Error));
return self}, self, "testDetect", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq(smalltalk.symbolFor("hello")));
_st(self)._deny_(_st(smalltalk.symbolFor("hello")).__eq(smalltalk.symbolFor("world")));
_st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq(_st(smalltalk.symbolFor("hello"))._yourself()));
_st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._yourself()).__eq(smalltalk.symbolFor("hello")));
_st(self)._deny_(_st(smalltalk.symbolFor("hello")).__eq("hello"));
_st(self)._deny_(_st("hello").__eq(smalltalk.symbolFor("hello")));
return self}, self, "testEquality", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq_eq(smalltalk.symbolFor("hello")));
_st(self)._deny_(_st(smalltalk.symbolFor("hello")).__eq_eq(smalltalk.symbolFor("world")));
_st(self)._assert_(_st(smalltalk.symbolFor("hello")).__eq(_st(smalltalk.symbolFor("hello"))._yourself()));
_st(self)._assert_(_st(_st(smalltalk.symbolFor("hello"))._yourself()).__eq(_st(_st(smalltalk.symbolFor("hello"))._asString())._asSymbol()));
return self}, self, "testIdentity", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIsEmpty",
smalltalk.method({
selector: "testIsEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._deny_(_st(_st(self)._collection())._isEmpty());
_st(self)._assert_(_st(_st("")._asSymbol())._isEmpty());
return self}, self, "testIsEmpty", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIsSymbolIsString",
smalltalk.method({
selector: "testIsSymbolIsString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(smalltalk.symbolFor("hello"))._isSymbol());
_st(self)._deny_(_st("hello")._isSymbol());
_st(self)._deny_(_st(smalltalk.symbolFor("hello"))._isString());
_st(self)._assert_(_st("hello")._isString());
return self}, self, "testIsSymbolIsString", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var newCollection;
newCollection="o";
_st(self)._assertSameContents_as_(_st(_st(self)._collection())._select_((function(each){
return _st(each).__eq("o");
})),newCollection);
return self}, self, "testSelect", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st(smalltalk.symbolFor("a"))._size(),(1));
_st(self)._assert_equals_(_st(smalltalk.symbolFor("aaaaa"))._size(),(5));
return self}, self, "testSize", [], smalltalk.SymbolTest)}
}),
smalltalk.SymbolTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return (smalltalk.Symbol || Symbol);
}, self, "collectionClass", [], smalltalk.SymbolTest.klass)}
}),
smalltalk.SymbolTest.klass);


smalltalk.addClass('JSObjectProxyTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_jsObject",
smalltalk.method({
selector: "jsObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: ''};
;
return self}, self, "jsObject", [], smalltalk.JSObjectProxyTest)}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testDNU",
smalltalk.method({
selector: "testDNU",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._should_raise_((function(){
return _st(_st(self)._jsObject())._foo();
}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
return self}, self, "testDNU", [], smalltalk.JSObjectProxyTest)}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testMessageSend",
smalltalk.method({
selector: "testMessageSend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st(_st(self)._jsObject())._a(),(1));
_st(self)._assert_equals_(_st(_st(self)._jsObject())._b(),(2));
_st(self)._assert_equals_(_st(_st(self)._jsObject())._c_((3)),(3));
return self}, self, "testMessageSend", [], smalltalk.JSObjectProxyTest)}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testMethodWithArguments",
smalltalk.method({
selector: "testMethodWithArguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st(_st(self)._jsObject())._c_((1)),(1));
return self}, self, "testMethodWithArguments", [], smalltalk.JSObjectProxyTest)}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testPrinting",
smalltalk.method({
selector: "testPrinting",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st(_st(self)._jsObject())._printString()).__eq("[object Object]"));
return self}, self, "testPrinting", [], smalltalk.JSObjectProxyTest)}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testPropertyThatReturnsEmptyString",
smalltalk.method({
selector: "testPropertyThatReturnsEmptyString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var object;
object=_st(self)._jsObject();
_st(self)._assert_equals_("",_st(object)._d());
_st(object)._d_("hello");
_st(self)._assert_equals_("hello",_st(object)._d());
return self}, self, "testPropertyThatReturnsEmptyString", [], smalltalk.JSObjectProxyTest)}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testYourself",
smalltalk.method({
selector: "testYourself",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
var object;
$1=_st(self)._jsObject();
_st($1)._d_("test");
$2=_st($1)._yourself();
object=$2;
_st(self)._assert_equals_(_st(object)._d(),"test");
return self}, self, "testYourself", [], smalltalk.JSObjectProxyTest)}
}),
smalltalk.JSObjectProxyTest);



smalltalk.addClass('NumberTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAbs",
smalltalk.method({
selector: "testAbs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st((4))._abs()).__eq((4)));
_st(self)._assert_(_st(_st((-4))._abs()).__eq((4)));
return self}, self, "testAbs", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testArithmetic",
smalltalk.method({
selector: "testArithmetic",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st((1.5)).__plus((1))).__eq((2.5)));
_st(self)._assert_(_st(_st((2)).__minus((1))).__eq((1)));
_st(self)._assert_(_st(_st((-2)).__minus((1))).__eq((-3)));
_st(self)._assert_(_st(_st((12)).__slash((2))).__eq((6)));
_st(self)._assert_(_st(_st((3)).__star((4))).__eq((12)));
_st(self)._assert_(_st(_st(_st((1)).__plus((2))).__star((3))).__eq((9)));
_st(self)._assert_(_st(_st((1)).__plus(_st((2)).__star((3)))).__eq((7)));
return self}, self, "testArithmetic", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testComparison",
smalltalk.method({
selector: "testComparison",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st((3)).__gt((2)));
_st(self)._assert_(_st((2)).__lt((3)));
_st(self)._deny_(_st((3)).__lt((2)));
_st(self)._deny_(_st((2)).__gt((3)));
_st(self)._assert_(_st((3)).__gt_eq((3)));
_st(self)._assert_(_st((3.1)).__gt_eq((3)));
_st(self)._assert_(_st((3)).__lt_eq((3)));
_st(self)._assert_(_st((3)).__lt_eq((3.1)));
return self}, self, "testComparison", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st((1))._copy()).__eq_eq((1)));
_st(self)._assert_(_st(_st((1))._deepCopy()).__eq_eq((1)));
return self}, self, "testCopying", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st((1)).__eq((1)));
_st(self)._assert_(_st((0)).__eq((0)));
_st(self)._deny_(_st((1)).__eq((0)));
_st(self)._assert_(_st(_st((1))._yourself()).__eq((1)));
_st(self)._assert_(_st((1)).__eq(_st((1))._yourself()));
_st(self)._assert_(_st(_st((1))._yourself()).__eq(_st((1))._yourself()));
_st(self)._deny_(_st((0)).__eq(false));
_st(self)._deny_(_st(false).__eq((0)));
_st(self)._deny_(_st("").__eq((0)));
_st(self)._deny_(_st((0)).__eq(""));
return self}, self, "testEquality", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st((1)).__eq_eq((1)));
_st(self)._assert_(_st((0)).__eq_eq((0)));
_st(self)._deny_(_st((1)).__eq_eq((0)));
_st(self)._assert_(_st(_st((1))._yourself()).__eq_eq((1)));
_st(self)._assert_(_st((1)).__eq_eq(_st((1))._yourself()));
_st(self)._assert_(_st(_st((1))._yourself()).__eq_eq(_st((1))._yourself()));
_st(self)._deny_(_st((1)).__eq_eq((2)));
return self}, self, "testIdentity", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testMinMax",
smalltalk.method({
selector: "testMinMax",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st((2))._max_((5)),(5));
_st(self)._assert_equals_(_st((2))._min_((5)),(2));
return self}, self, "testMinMax", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testNegated",
smalltalk.method({
selector: "testNegated",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st((3))._negated()).__eq((-3)));
_st(self)._assert_(_st(_st((-3))._negated()).__eq((3)));
return self}, self, "testNegated", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testPrintShowingDecimalPlaces",
smalltalk.method({
selector: "testPrintShowingDecimalPlaces",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_("23.00",_st((23))._printShowingDecimalPlaces_((2)));
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
return self}, self, "testPrintShowingDecimalPlaces", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testRounded",
smalltalk.method({
selector: "testRounded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st((3))._rounded()).__eq((3)));
_st(self)._assert_(_st(_st((3.212))._rounded()).__eq((3)));
_st(self)._assert_(_st(_st((3.51))._rounded()).__eq((4)));
return self}, self, "testRounded", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testSqrt",
smalltalk.method({
selector: "testSqrt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st((4))._sqrt()).__eq((2)));
_st(self)._assert_(_st(_st((16))._sqrt()).__eq((4)));
return self}, self, "testSqrt", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testSquared",
smalltalk.method({
selector: "testSquared",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st((4))._squared()).__eq((16)));
return self}, self, "testSquared", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTimesRepeat",
smalltalk.method({
selector: "testTimesRepeat",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var i;
i=(0);
_st((0))._timesRepeat_((function(){
i=_st(i).__plus((1));
return i;
}));
_st(self)._assert_equals_(i,(0));
_st((5))._timesRepeat_((function(){
i=_st(i).__plus((1));
return i;
}));
_st(self)._assert_equals_(i,(5));
return self}, self, "testTimesRepeat", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTo",
smalltalk.method({
selector: "testTo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st((1))._to_((5)),[(1), (2), (3), (4), (5)]);
return self}, self, "testTo", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testToBy",
smalltalk.method({
selector: "testToBy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st((0))._to_by_((6),(2)),[(0), (2), (4), (6)]);
_st(self)._should_raise_((function(){
return _st((1))._to_by_((4),(0));
}),(smalltalk.Error || Error));
return self}, self, "testToBy", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTruncated",
smalltalk.method({
selector: "testTruncated",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st((3))._truncated()).__eq((3)));
_st(self)._assert_(_st(_st((3.212))._truncated()).__eq((3)));
_st(self)._assert_(_st(_st((3.51))._truncated()).__eq((3)));
return self}, self, "testTruncated", [], smalltalk.NumberTest)}
}),
smalltalk.NumberTest);



smalltalk.addClass('ObjectMock', smalltalk.Object, ['foo', 'bar'], 'Kernel-Tests');
smalltalk.addMethod(
"_foo",
smalltalk.method({
selector: "foo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@foo"];
}, self, "foo", [], smalltalk.ObjectMock)}
}),
smalltalk.ObjectMock);

smalltalk.addMethod(
"_foo_",
smalltalk.method({
selector: "foo:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { self["@foo"]=anObject;
return self}, self, "foo:", [anObject], smalltalk.ObjectMock)}
}),
smalltalk.ObjectMock);



smalltalk.addClass('ObjectTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testBasicAccess",
smalltalk.method({
selector: "testBasicAccess",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var o;
o=_st((smalltalk.Object || Object))._new();
_st(o)._basicAt_put_("a",(1));
_st(self)._assert_equals_(_st(o)._basicAt_("a"),(1));
_st(self)._assert_equals_(_st(o)._basicAt_("b"),nil);
return self}, self, "testBasicAccess", [], smalltalk.ObjectTest)}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testBasicPerform",
smalltalk.method({
selector: "testBasicPerform",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var o;
o=_st((smalltalk.Object || Object))._new();
_st(o)._basicAt_put_("func",(function(){
return "hello";
}));
_st(o)._basicAt_put_("func2",(function(a){
return _st(a).__plus((1));
}));
_st(self)._assert_equals_(_st(o)._basicPerform_("func"),"hello");
_st(self)._assert_equals_(_st(o)._basicPerform_withArguments_("func2",[(3)]),(4));
return self}, self, "testBasicPerform", [], smalltalk.ObjectTest)}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testDNU",
smalltalk.method({
selector: "testDNU",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._should_raise_((function(){
return _st(_st((smalltalk.Object || Object))._new())._foo();
}),(smalltalk.MessageNotUnderstood || MessageNotUnderstood));
return self}, self, "testDNU", [], smalltalk.ObjectTest)}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var o;
o=_st((smalltalk.Object || Object))._new();
_st(self)._deny_(_st(o).__eq(_st((smalltalk.Object || Object))._new()));
_st(self)._assert_(_st(o).__eq(o));
_st(self)._assert_(_st(_st(o)._yourself()).__eq(o));
_st(self)._assert_(_st(o).__eq(_st(o)._yourself()));
return self}, self, "testEquality", [], smalltalk.ObjectTest)}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testHalt",
smalltalk.method({
selector: "testHalt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._should_raise_((function(){
return _st(_st((smalltalk.Object || Object))._new())._halt();
}),(smalltalk.Error || Error));
return self}, self, "testHalt", [], smalltalk.ObjectTest)}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var o;
o=_st((smalltalk.Object || Object))._new();
_st(self)._deny_(_st(o).__eq_eq(_st((smalltalk.Object || Object))._new()));
_st(self)._assert_(_st(o).__eq_eq(o));
_st(self)._assert_(_st(_st(o)._yourself()).__eq_eq(o));
_st(self)._assert_(_st(o).__eq_eq(_st(o)._yourself()));
return self}, self, "testIdentity", [], smalltalk.ObjectTest)}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testIfNil",
smalltalk.method({
selector: "testIfNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$1,$4,$3,$6,$5;
_st(self)._deny_(_st(_st((smalltalk.Object || Object))._new())._isNil());
$2=_st((smalltalk.Object || Object))._new();
if(($receiver = $2) == nil || $receiver == undefined){
$1=true;
} else {
$1=$2;
};
_st(self)._deny_(_st($1).__eq(true));
$4=_st((smalltalk.Object || Object))._new();
if(($receiver = $4) == nil || $receiver == undefined){
$3=$4;
} else {
$3=true;
};
_st(self)._assert_(_st($3).__eq(true));
$6=_st((smalltalk.Object || Object))._new();
if(($receiver = $6) == nil || $receiver == undefined){
$5=false;
} else {
$5=true;
};
_st(self)._assert_(_st($5).__eq(true));
_st(self)._assert_(_st(_st(_st((smalltalk.Object || Object))._new())._ifNotNil_ifNil_((function(){
return true;
}),(function(){
return false;
}))).__eq(true));
return self}, self, "testIfNil", [], smalltalk.ObjectTest)}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testInstVars",
smalltalk.method({
selector: "testInstVars",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var o;
o=_st((smalltalk.ObjectMock || ObjectMock))._new();
_st(self)._assert_equals_(_st(o)._instVarAt_(smalltalk.symbolFor("foo")),nil);
_st(o)._instVarAt_put_(smalltalk.symbolFor("foo"),(1));
_st(self)._assert_equals_(_st(o)._instVarAt_(smalltalk.symbolFor("foo")),(1));
_st(self)._assert_equals_(_st(o)._instVarAt_("foo"),(1));
return self}, self, "testInstVars", [], smalltalk.ObjectTest)}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testNilUndefined",
smalltalk.method({
selector: "testNilUndefined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var notDefined;
notDefined=_st(window)._at_("__this_is_undefined");
_st(self)._assert_(_st(nil).__eq(notDefined));
return self}, self, "testNilUndefined", [], smalltalk.ObjectTest)}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testYourself",
smalltalk.method({
selector: "testYourself",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var o;
o=_st((smalltalk.ObjectMock || ObjectMock))._new();
_st(self)._assert_(_st(_st(o)._yourself()).__eq_eq(o));
return self}, self, "testYourself", [], smalltalk.ObjectTest)}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testidentityHash",
smalltalk.method({
selector: "testidentityHash",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var o1;
var o2;
o1=_st((smalltalk.Object || Object))._new();
o2=_st((smalltalk.Object || Object))._new();
_st(self)._assert_(_st(_st(o1)._identityHash()).__eq_eq(_st(o1)._identityHash()));
_st(self)._deny_(_st(_st(o1)._identityHash()).__eq_eq(_st(o2)._identityHash()));
return self}, self, "testidentityHash", [], smalltalk.ObjectTest)}
}),
smalltalk.ObjectTest);



smalltalk.addClass('PackageTest', smalltalk.TestCase, ['zorkPackage', 'grulPackage', 'backUpCommitPathJs', 'backUpCommitPathSt'], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
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
return self}, self, "setUp", [], smalltalk.PackageTest)}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
_st((smalltalk.Package || Package))._defaultCommitPathJs_(self["@backUpCommitPathJs"]);
$1=_st((smalltalk.Package || Package))._defaultCommitPathSt_(self["@backUpCommitPathSt"]);
return self}, self, "tearDown", [], smalltalk.PackageTest)}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testGrulCommitPathJsShouldBeServerGrulJs",
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_("server/grul/js",_st(self["@grulPackage"])._commitPathJs());
return self}, self, "testGrulCommitPathJsShouldBeServerGrulJs", [], smalltalk.PackageTest)}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testGrulCommitPathStShouldBeGrulSt",
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_("grul/st",_st(self["@grulPackage"])._commitPathSt());
return self}, self, "testGrulCommitPathStShouldBeGrulSt", [], smalltalk.PackageTest)}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testZorkCommitPathJsShouldBeJs",
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_("js",_st(self["@zorkPackage"])._commitPathJs());
return self}, self, "testZorkCommitPathJsShouldBeJs", [], smalltalk.PackageTest)}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testZorkCommitPathStShouldBeSt",
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_("st",_st(self["@zorkPackage"])._commitPathSt());
return self}, self, "testZorkCommitPathStShouldBeSt", [], smalltalk.PackageTest)}
}),
smalltalk.PackageTest);



smalltalk.addClass('PackageWithDefaultCommitPathChangedTest', smalltalk.PackageTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
smalltalk.PackageTest.fn.prototype._setUp.apply(_st(self), []);
_st((smalltalk.Package || Package))._defaultCommitPathJs_("javascripts/");
$1=_st((smalltalk.Package || Package))._defaultCommitPathSt_("smalltalk/");
return self}, self, "setUp", [], smalltalk.PackageWithDefaultCommitPathChangedTest)}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testGrulCommitPathJsShouldBeServerGrulJs",
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_("server/grul/js",_st(self["@grulPackage"])._commitPathJs());
return self}, self, "testGrulCommitPathJsShouldBeServerGrulJs", [], smalltalk.PackageWithDefaultCommitPathChangedTest)}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testGrulCommitPathStShouldBeGrulSt",
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_("grul/st",_st(self["@grulPackage"])._commitPathSt());
return self}, self, "testGrulCommitPathStShouldBeGrulSt", [], smalltalk.PackageWithDefaultCommitPathChangedTest)}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testZorkCommitPathJsShouldBeJavascript",
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_("javascripts/",_st(self["@zorkPackage"])._commitPathJs());
return self}, self, "testZorkCommitPathJsShouldBeJavascript", [], smalltalk.PackageWithDefaultCommitPathChangedTest)}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testZorkCommitPathStShouldBeSmalltalk",
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSmalltalk",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_("smalltalk/",_st(self["@zorkPackage"])._commitPathSt());
return self}, self, "testZorkCommitPathStShouldBeSmalltalk", [], smalltalk.PackageWithDefaultCommitPathChangedTest)}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);


smalltalk.addMethod(
"_shouldInheritSelectors",
smalltalk.method({
selector: "shouldInheritSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return false;
}, self, "shouldInheritSelectors", [], smalltalk.PackageWithDefaultCommitPathChangedTest.klass)}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest.klass);


smalltalk.addClass('PointTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAccessing",
smalltalk.method({
selector: "testAccessing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st(_st((smalltalk.Point || Point))._x_y_((3),(4)))._x(),(3));
_st(self)._assert_equals_(_st(_st((smalltalk.Point || Point))._x_y_((3),(4)))._y(),(4));
_st(self)._assert_equals_(_st(_st(_st((smalltalk.Point || Point))._new())._x_((3)))._x(),(3));
_st(self)._assert_equals_(_st(_st(_st((smalltalk.Point || Point))._new())._y_((4)))._y(),(4));
return self}, self, "testAccessing", [], smalltalk.PointTest)}
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testArithmetic",
smalltalk.method({
selector: "testArithmetic",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st(_st((3)).__at((4))).__star(_st((3)).__at((4))),_st((smalltalk.Point || Point))._x_y_((9),(16)));
_st(self)._assert_equals_(_st(_st((3)).__at((4))).__plus(_st((3)).__at((4))),_st((smalltalk.Point || Point))._x_y_((6),(8)));
_st(self)._assert_equals_(_st(_st((3)).__at((4))).__minus(_st((3)).__at((4))),_st((smalltalk.Point || Point))._x_y_((0),(0)));
_st(self)._assert_equals_(_st(_st((6)).__at((8))).__slash(_st((3)).__at((4))),_st((smalltalk.Point || Point))._x_y_((2),(2)));
return self}, self, "testArithmetic", [], smalltalk.PointTest)}
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st((3)).__at((4)),_st((smalltalk.Point || Point))._x_y_((3),(4)));
return self}, self, "testAt", [], smalltalk.PointTest)}
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testEgality",
smalltalk.method({
selector: "testEgality",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st((3)).__at((4))).__eq(_st((3)).__at((4))));
_st(self)._deny_(_st(_st((3)).__at((5))).__eq(_st((3)).__at((6))));
return self}, self, "testEgality", [], smalltalk.PointTest)}
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testTranslateBy",
smalltalk.method({
selector: "testTranslateBy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st((3)).__at((4)),_st(_st((3)).__at((3)))._translateBy_(_st((0)).__at((1))));
_st(self)._assert_equals_(_st((3)).__at((2)),_st(_st((3)).__at((3)))._translateBy_(_st((0)).__at(_st((1))._negated())));
_st(self)._assert_equals_(_st((5)).__at((6)),_st(_st((3)).__at((3)))._translateBy_(_st((2)).__at((3))));
_st(self)._assert_equals_(_st((0)).__at((3)),_st(_st((3)).__at((3)))._translateBy_(_st(_st((3))._negated()).__at((0))));
return self}, self, "testTranslateBy", [], smalltalk.PointTest)}
}),
smalltalk.PointTest);



smalltalk.addClass('RandomTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_textNext",
smalltalk.method({
selector: "textNext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st((10000))._timesRepeat_((function(){
var current;
var next;
next=_st(_st((smalltalk.Random || Random))._new())._next();
next;
_st(self)._assert_(_st(next).__gt_eq((0)));
_st(self)._assert_(_st(next).__lt((1)));
_st(self)._deny_(_st(current).__eq(next));
return _st(next).__eq(current);
}));
return self}, self, "textNext", [], smalltalk.RandomTest)}
}),
smalltalk.RandomTest);



smalltalk.addClass('SetTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAddRemove",
smalltalk.method({
selector: "testAddRemove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var set;
set=_st((smalltalk.Set || Set))._new();
_st(self)._assert_(_st(set)._isEmpty());
_st(set)._add_((3));
_st(self)._assert_(_st(set)._includes_((3)));
_st(set)._add_((5));
_st(self)._assert_(_st(set)._includes_((5)));
_st(set)._remove_((3));
_st(self)._deny_(_st(set)._includes_((3)));
return self}, self, "testAddRemove", [], smalltalk.SetTest)}
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._should_raise_((function(){
return _st(_st((smalltalk.Set || Set))._new())._at_put_((1),(2));
}),(smalltalk.Error || Error));
return self}, self, "testAt", [], smalltalk.SetTest)}
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
var set;
set=_st((smalltalk.Set || Set))._new();
_st(self)._assert_equals_("a Set ()",_st(set)._printString());
_st(set)._add_((1));
$1=_st(set)._add_((3));
_st(self)._assert_equals_("a Set (1 3)",_st(set)._printString());
_st(set)._add_("foo");
_st(self)._assert_equals_("a Set (1 3 'foo')",_st(set)._printString());
_st(set)._remove_((1));
$2=_st(set)._remove_((3));
_st(self)._assert_equals_("a Set ('foo')",_st(set)._printString());
_st(set)._add_((3));
_st(self)._assert_equals_("a Set ('foo' 3)",_st(set)._printString());
_st(set)._add_((3));
_st(self)._assert_equals_("a Set ('foo' 3)",_st(set)._printString());
return self}, self, "testPrintString", [], smalltalk.SetTest)}
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st(_st((smalltalk.Set || Set))._new())._size(),(0));
_st(self)._assert_equals_(_st(_st((smalltalk.Set || Set))._withAll_([(1), (2), (3), (4)]))._size(),(4));
_st(self)._assert_equals_(_st(_st((smalltalk.Set || Set))._withAll_([(1), (1), (1), (1)]))._size(),(1));
return self}, self, "testSize", [], smalltalk.SetTest)}
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testUnicity",
smalltalk.method({
selector: "testUnicity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var set;
set=_st((smalltalk.Set || Set))._new();
_st(set)._add_((21));
_st(set)._add_("hello");
_st(set)._add_((21));
_st(self)._assert_(_st(_st(set)._size()).__eq((2)));
_st(set)._add_("hello");
_st(self)._assert_(_st(_st(set)._size()).__eq((2)));
_st(self)._assert_equals_(_st(set)._asArray(),[(21), "hello"]);
return self}, self, "testUnicity", [], smalltalk.SetTest)}
}),
smalltalk.SetTest);



smalltalk.addClass('UndefinedTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_equals_(_st(nil)._copy(),nil);
return self}, self, "testCopying", [], smalltalk.UndefinedTest)}
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testDeepCopy",
smalltalk.method({
selector: "testDeepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(_st(nil)._deepCopy()).__eq(nil));
return self}, self, "testDeepCopy", [], smalltalk.UndefinedTest)}
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testIfNil",
smalltalk.method({
selector: "testIfNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2,$3;
if(($receiver = nil) == nil || $receiver == undefined){
$1=true;
} else {
$1=nil;
};
_st(self)._assert_equals_($1,true);
if(($receiver = nil) == nil || $receiver == undefined){
$2=nil;
} else {
$2=true;
};
_st(self)._deny_(_st($2).__eq(true));
if(($receiver = nil) == nil || $receiver == undefined){
$3=true;
} else {
$3=false;
};
_st(self)._assert_equals_($3,true);
_st(self)._deny_(_st(_st(nil)._ifNotNil_ifNil_((function(){
return true;
}),(function(){
return false;
}))).__eq(true));
return self}, self, "testIfNil", [], smalltalk.UndefinedTest)}
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testIsNil",
smalltalk.method({
selector: "testIsNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(nil)._isNil());
_st(self)._deny_(_st(nil)._notNil());
return self}, self, "testIsNil", [], smalltalk.UndefinedTest)}
}),
smalltalk.UndefinedTest);



