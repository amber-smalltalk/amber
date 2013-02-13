smalltalk.addPackage('SUnit-Tests', {});
smalltalk.addClass('ExampleSetTest', smalltalk.TestCase, ['empty', 'full'], 'SUnit-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@empty"]=_st((smalltalk.Set || Set))._new();
self["@full"]=_st((smalltalk.Set || Set))._with_with_((5),smalltalk.symbolFor("abc"));
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{}, smalltalk.ExampleSetTest)})}
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testAdd",
smalltalk.method({
selector: "testAdd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@empty"])._add_((5));
_st(self)._assert_(_st(self["@empty"])._includes_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"testAdd",{}, smalltalk.ExampleSetTest)})}
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testGrow",
smalltalk.method({
selector: "testGrow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@empty"])._addAll_(_st((1))._to_((100)));
_st(self)._assert_(_st(_st(self["@empty"])._size()).__eq((100)));
return self}, function($ctx1) {$ctx1.fill(self,"testGrow",{}, smalltalk.ExampleSetTest)})}
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testIllegal",
smalltalk.method({
selector: "testIllegal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@empty"])._at_((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@empty"])._at_put_((5),smalltalk.symbolFor("abc"));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testIllegal",{}, smalltalk.ExampleSetTest)})}
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testIncludes",
smalltalk.method({
selector: "testIncludes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(self["@full"])._includes_((5)));
_st(self)._assert_(_st(self["@full"])._includes_(smalltalk.symbolFor("abc")));
return self}, function($ctx1) {$ctx1.fill(self,"testIncludes",{}, smalltalk.ExampleSetTest)})}
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testOccurrences",
smalltalk.method({
selector: "testOccurrences",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st(self["@empty"])._occurrencesOf_((0))).__eq((0)));
_st(self)._assert_(_st(_st(self["@full"])._occurrencesOf_((5))).__eq((1)));
_st(self["@full"])._add_((5));
_st(self)._assert_(_st(_st(self["@full"])._occurrencesOf_((5))).__eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testOccurrences",{}, smalltalk.ExampleSetTest)})}
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testRemove",
smalltalk.method({
selector: "testRemove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@full"])._remove_((5));
_st(self)._assert_(_st(self["@full"])._includes_(smalltalk.symbolFor("abc")));
_st(self)._deny_(_st(self["@full"])._includes_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"testRemove",{}, smalltalk.ExampleSetTest)})}
}),
smalltalk.ExampleSetTest);



smalltalk.addClass('SUnitAsyncTest', smalltalk.TestCase, ['flag'], 'SUnit-Tests');
smalltalk.addMethod(
"_fakeError",
smalltalk.method({
selector: "fakeError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@flag"]="bad";
_st(self)._timeout_((10));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {self["@flag"]="ok";
self["@flag"];
return _st(self)._error_("Intentional");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"fakeError",{}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeErrorFailingInTearDown",
smalltalk.method({
selector: "fakeErrorFailingInTearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@flag"]="bad";
_st(self)._timeout_((10));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._error_("Intentional");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"fakeErrorFailingInTearDown",{}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeFailure",
smalltalk.method({
selector: "fakeFailure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@flag"]="bad";
_st(self)._timeout_((10));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {self["@flag"]="ok";
self["@flag"];
return _st(self)._assert_(false);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"fakeFailure",{}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeMultipleTimeoutFailing",
smalltalk.method({
selector: "fakeMultipleTimeoutFailing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._timeout_((100));
_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._timeout_((5));
return _st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._finished();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})})))._valueWithTimeout_((10));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutFailing",{}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeMultipleTimeoutPassing",
smalltalk.method({
selector: "fakeMultipleTimeoutPassing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._timeout_((10));
_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._timeout_((20));
return _st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._finished();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})})))._valueWithTimeout_((10));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutPassing",{}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeTimeout",
smalltalk.method({
selector: "fakeTimeout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._timeout_((4));
_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"fakeTimeout",{}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@flag"]="ok";
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_sortedSelectors_",
smalltalk.method({
selector: "sortedSelectors:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aCollection)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._selector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._sorted();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sortedSelectors:",{aCollection:aCollection}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_("ok",self["@flag"]);
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testAsyncErrorsAndFailures",
smalltalk.method({
selector: "testAsyncErrorsAndFailures",
fn: function (){
var self=this;
var suite,runner,result,assertBlock;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$6,$5,$3;
suite=_st(["fakeError", "fakeErrorFailingInTearDown", "fakeFailure", "testPass"])._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._class())._selector_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
runner=_st((smalltalk.TestSuiteRunner || TestSuiteRunner))._on_(suite);
_st(self)._timeout_((200));
result=_st(runner)._result();
assertBlock=_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._assert_equals_(["fakeError"],_st(self)._sortedSelectors_(_st(result)._errors()));
_st(self)._assert_equals_(["fakeErrorFailingInTearDown", "fakeFailure"],_st(self)._sortedSelectors_(_st(result)._failures()));
return _st(self)._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(runner)._announcer();
$2=(smalltalk.ResultAnnouncement || ResultAnnouncement);
$3=(function(ann){
return smalltalk.withContext(function($ctx2) {$4=_st(_st(ann)._result()).__eq_eq(result);
$5=(function(){
return smalltalk.withContext(function($ctx3) {$6=_st(_st(result)._runs()).__eq(_st(result)._total());
return _st($6)._ifTrue_(assertBlock);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})});
return _st($4)._ifTrue_($5);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})});
_st($1)._on_do_($2,$3);
_st(runner)._run();
return self}, function($ctx1) {$ctx1.fill(self,"testAsyncErrorsAndFailures",{suite:suite,runner:runner,result:result,assertBlock:assertBlock}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testAsyncNeedsTimeout",
smalltalk.method({
selector: "testAsyncNeedsTimeout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._async_((function(){
return smalltalk.withContext(function($ctx3) {}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
_st(self)._timeout_((0));
_st(self)._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._async_((function(){
return smalltalk.withContext(function($ctx3) {}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
_st(self)._finished();
return self}, function($ctx1) {$ctx1.fill(self,"testAsyncNeedsTimeout",{}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testFinishedNeedsTimeout",
smalltalk.method({
selector: "testFinishedNeedsTimeout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
_st(self)._timeout_((0));
_st(self)._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.Error || Error));
return self}, function($ctx1) {$ctx1.fill(self,"testFinishedNeedsTimeout",{}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testIsAsyncReturnsCorrectValues",
smalltalk.method({
selector: "testIsAsyncReturnsCorrectValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._deny_(_st(self)._isAsync());
_st(self)._timeout_((0));
_st(self)._assert_(_st(self)._isAsync());
_st(self)._finished();
_st(self)._deny_(_st(self)._isAsync());
return self}, function($ctx1) {$ctx1.fill(self,"testIsAsyncReturnsCorrectValues",{}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testPass",
smalltalk.method({
selector: "testPass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@flag"]="bad";
_st(self)._timeout_((10));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._assert_(true);
_st(self)._finished();
self["@flag"]="ok";
return self["@flag"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"testPass",{}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testTimeouts",
smalltalk.method({
selector: "testTimeouts",
fn: function (){
var self=this;
var suite,runner,result,assertBlock;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$6,$5,$3;
suite=_st(["fakeTimeout", "fakeMultipleTimeoutFailing", "fakeMultipleTimeoutPassing", "testPass"])._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._class())._selector_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
runner=_st((smalltalk.TestSuiteRunner || TestSuiteRunner))._on_(suite);
_st(self)._timeout_((200));
result=_st(runner)._result();
assertBlock=_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._assert_(_st(_st(result)._errors())._isEmpty());
_st(self)._assert_equals_(["fakeMultipleTimeoutFailing", "fakeTimeout"],_st(self)._sortedSelectors_(_st(result)._failures()));
return _st(self)._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(runner)._announcer();
$2=(smalltalk.ResultAnnouncement || ResultAnnouncement);
$3=(function(ann){
return smalltalk.withContext(function($ctx2) {$4=_st(_st(ann)._result()).__eq_eq(result);
$5=(function(){
return smalltalk.withContext(function($ctx3) {$6=_st(_st(result)._runs()).__eq(_st(result)._total());
return _st($6)._ifTrue_(assertBlock);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})});
return _st($4)._ifTrue_($5);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})});
_st($1)._on_do_($2,$3);
_st(runner)._run();
return self}, function($ctx1) {$ctx1.fill(self,"testTimeouts",{suite:suite,runner:runner,result:result,assertBlock:assertBlock}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testTwoAsyncPassesWithFinishedOnlyOneIsRun",
smalltalk.method({
selector: "testTwoAsyncPassesWithFinishedOnlyOneIsRun",
fn: function (){
var self=this;
var x;
return smalltalk.withContext(function($ctx1) { self["@flag"]="bad";
_st(self)._timeout_((10));
x=(0);
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._finished();
self["@flag"]="ok";
self["@flag"];
x=_st(x).__plus((1));
x;
return _st(self)._assert_equals_((1),x);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((0));
self["@flag"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {_st(self)._finished();
self["@flag"]="ok";
self["@flag"];
x=_st(x).__plus((1));
x;
return _st(self)._assert_equals_((1),x);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((0));
return self}, function($ctx1) {$ctx1.fill(self,"testTwoAsyncPassesWithFinishedOnlyOneIsRun",{x:x}, smalltalk.SUnitAsyncTest)})}
}),
smalltalk.SUnitAsyncTest);



