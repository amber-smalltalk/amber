smalltalk.addPackage('Kernel-Tests', {});
smalltalk.addClass('ArrayTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testFirstN'),
smalltalk.method({
selector: unescape('testFirstN'),
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [[(1),(2),(3)], smalltalk.send([(1),(2),(3),(4),(5)], "_first_", [(3)])]);
return self;}
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
unescape('_testIfEmpty'),
smalltalk.method({
selector: unescape('testIfEmpty'),
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["zork", smalltalk.send("", "_ifEmpty_", [(function(){return "zork";})])]);
return self;}
}),
smalltalk.ArrayTest);



smalltalk.addClass('BlockClosureTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testCompiledSource'),
smalltalk.method({
selector: unescape('testCompiledSource'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((function(){return (1) + (1);}), "_compiledSource", []), "_includesSubString_", ["function"])]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testEnsure'),
smalltalk.method({
selector: unescape('testEnsure'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((function(){return smalltalk.send((smalltalk.Error || Error), "_new", []);}), "_ensure_", [(function(){return true;})])]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testNumArgs'),
smalltalk.method({
selector: unescape('testNumArgs'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return nil;}), "_numArgs", []), (0)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a, b){return nil;}), "_numArgs", []), (2)]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testOnDo'),
smalltalk.method({
selector: unescape('testOnDo'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((function(){return smalltalk.send(smalltalk.send((smalltalk.Error || Error), "_new", []), "_signal", []);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return true;})])]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testValue'),
smalltalk.method({
selector: unescape('testValue'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return (1) + (1);}), "_value", []), (2)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(x){return ((($receiver = x).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));}), "_value_", [(2)]), (3)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(x, y){return ((($receiver = x).klass === smalltalk.Number) ? $receiver *y : smalltalk.send($receiver, "__star", [y]));}), "_value_value_", [(2), (4)]), (8)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a, b, c){return (1);}), "_value", []), (1)]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testValueWithPossibleArguments'),
smalltalk.method({
selector: unescape('testValueWithPossibleArguments'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return (1);}), "_valueWithPossibleArguments_", [[(3), (4)]]), (1)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a){return ((($receiver = a).klass === smalltalk.Number) ? $receiver +(4) : smalltalk.send($receiver, "__plus", [(4)]));}), "_valueWithPossibleArguments_", [[(3), (4)]]), (7)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a, b){return ((($receiver = a).klass === smalltalk.Number) ? $receiver +b : smalltalk.send($receiver, "__plus", [b]));}), "_valueWithPossibleArguments_", [[(3), (4), (5)]]), (7)]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testWhileFalse'),
smalltalk.method({
selector: unescape('testWhileFalse'),
fn: function () {
var self=this;
var i=nil;
(i=(0));
(function(){while(!(function(){return ((($receiver = i).klass === smalltalk.Number) ? $receiver >(5) : smalltalk.send($receiver, "__gt", [(5)]));})()) {(function(){return (i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})()}})();
smalltalk.send(self, "_assert_equals_", [i, (6)]);
(i=(0));
(function(){while(!(function(){(i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return ((($receiver = i).klass === smalltalk.Number) ? $receiver >(5) : smalltalk.send($receiver, "__gt", [(5)]));})()) {}})();
smalltalk.send(self, "_assert_equals_", [i, (6)]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
unescape('_testWhileTrue'),
smalltalk.method({
selector: unescape('testWhileTrue'),
fn: function () {
var self=this;
var i=nil;
(i=(0));
(function(){while((function(){return ((($receiver = i).klass === smalltalk.Number) ? $receiver <(5) : smalltalk.send($receiver, "__lt", [(5)]));})()) {(function(){return (i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})()}})();
smalltalk.send(self, "_assert_equals_", [i, (5)]);
(i=(0));
(function(){while((function(){(i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return ((($receiver = i).klass === smalltalk.Number) ? $receiver <(5) : smalltalk.send($receiver, "__lt", [(5)]));})()) {}})();
smalltalk.send(self, "_assert_equals_", [i, (5)]);
return self;}
}),
smalltalk.BlockClosureTest);



smalltalk.addClass('BooleanTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
fn: function () {
var self=this;
smalltalk.send(self, "_deny_", [smalltalk.send((0), "__eq", [false])]);
smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq", [(0)])]);
smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq", [false])]);
smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq", [""])]);
smalltalk.send(self, "_assert_", [smalltalk.send(true, "__eq", [true])]);
smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq", [true])]);
smalltalk.send(self, "_deny_", [smalltalk.send(true, "__eq", [false])]);
smalltalk.send(self, "_assert_", [smalltalk.send(false, "__eq", [false])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq", [true])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq", [smalltalk.send(true, "_yourself", [])])]);
return self;}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
unescape('_testIfTrueIfFalse'),
smalltalk.method({
selector: unescape('testIfTrueIfFalse'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = true).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "alternative block";})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return "alternative block";})])), "__eq", ["alternative block"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = true).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return "alternative block";})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return "alternative block";})])), "__eq", [nil])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = false).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "alternative block";})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return "alternative block";})])), "__eq", [nil])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = false).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return "alternative block";})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return "alternative block";})])), "__eq", ["alternative block"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = false).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "alternative block";})() : (function(){return "alternative block2";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "alternative block";}), (function(){return "alternative block2";})])), "__eq", ["alternative block2"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = false).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return "alternative block";})() : (function(){return "alternative block2";})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return "alternative block";}), (function(){return "alternative block2";})])), "__eq", ["alternative block"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = true).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "alternative block";})() : (function(){return "alternative block2";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "alternative block";}), (function(){return "alternative block2";})])), "__eq", ["alternative block"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = true).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return "alternative block";})() : (function(){return "alternative block2";})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return "alternative block";}), (function(){return "alternative block2";})])), "__eq", ["alternative block2"])]);
return self;}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
unescape('_testLogic'),
smalltalk.method({
selector: unescape('testLogic'),
fn: function () {
var self=this;
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_&", [true])]);smalltalk.send($rec, "_deny_", [smalltalk.send(true, "_&", [false])]);smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_&", [true])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_&", [false])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_|", [true])]);smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_|", [false])]);smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_|", [true])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_|", [false])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_&", [(1) > (0)])]);smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_&", [false])]);return smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_&", [(1) > (2)])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_|", [(1) > (0)])]);smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_|", [false])]);return smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_|", [(1) > (2)])]);})(self);
return self;}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
unescape('_testLogicKeywords'),
smalltalk.method({
selector: unescape('testLogicKeywords'),
fn: function () {
var self=this;
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_and_", [(function(){return true;})])]);smalltalk.send($rec, "_deny_", [smalltalk.send(true, "_and_", [(function(){return false;})])]);smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_and_", [(function(){return true;})])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_and_", [(function(){return false;})])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_or_", [(function(){return true;})])]);smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_or_", [(function(){return false;})])]);smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_or_", [(function(){return true;})])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_or_", [(function(){return false;})])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_and_", [(function(){return (1) > (0);})])]);smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_and_", [(function(){return false;})])]);return smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_and_", [(function(){return (1) > (2);})])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_or_", [(function(){return (1) > (0);})])]);smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_or_", [(function(){return false;})])]);return smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_or_", [(function(){return (1) > (2);})])]);})(self);
return self;}
}),
smalltalk.BooleanTest);



smalltalk.addClass('ClassBuilderTest', smalltalk.TestCase, ['builder', 'theClass'], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
fn: function () {
var self=this;
(self['@builder']=smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []));
return self;}
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
unescape('_tearDown'),
smalltalk.method({
selector: unescape('tearDown'),
fn: function () {
var self=this;
(($receiver = self['@theClass']) != nil && $receiver != undefined) ? (function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_removeClass_", [self['@theClass']]);return (self['@theClass']=nil);})() : nil;
return self;}
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
unescape('_testClassCopy'),
smalltalk.method({
selector: unescape('testClassCopy'),
fn: function () {
var self=this;
(self['@theClass']=smalltalk.send(self['@builder'], "_copyClass_named_", [(smalltalk.ObjectMock || ObjectMock), "ObjectMock2"]));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@theClass'], "_superclass", []), "__eq_eq", [smalltalk.send((smalltalk.ObjectMock || ObjectMock), "_superclass", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@theClass'], "_instanceVariableNames", []), "__eq_eq", [smalltalk.send((smalltalk.ObjectMock || ObjectMock), "_instanceVariableNames", [])])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@theClass'], "_name", []), "ObjectMock2"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@theClass'], "_package", []), "__eq_eq", [smalltalk.send((smalltalk.ObjectMock || ObjectMock), "_package", [])])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self['@theClass'], "_methodDictionary", []), "_keys", []), smalltalk.send(smalltalk.send((smalltalk.ObjectMock || ObjectMock), "_methodDictionary", []), "_keys", [])]);
return self;}
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
unescape('_testInstanceVariableNames'),
smalltalk.method({
selector: unescape('testInstanceVariableNames'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@builder'], "_instanceVariableNamesFor_", ["  hello   world   "]), ["hello", "world"]]);
return self;}
}),
smalltalk.ClassBuilderTest);



smalltalk.addClass('DictionaryTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testAccessing'),
smalltalk.method({
selector: unescape('testAccessing'),
fn: function () {
var self=this;
var d=nil;
(d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(d, "_at_put_", ["hello", "world"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_at_", ["hello"]), "__eq", ["world"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_at_ifAbsent_", ["hello", (function(){return nil;})]), "__eq", ["world"])]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(d, "_at_ifAbsent_", ["foo", (function(){return nil;})]), "__eq", ["world"])]);
smalltalk.send(d, "_at_put_", [(1), (2)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_at_", [(1)]), "__eq", [(2)])]);
smalltalk.send(d, "_at_put_", [smalltalk.send((1), "__at", [(3)]), (3)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_at_", [smalltalk.send((1), "__at", [(3)])]), "__eq", [(3)])]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testDynamicDictionaries'),
smalltalk.method({
selector: unescape('testDynamicDictionaries'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.HashedCollection._fromPairs_([smalltalk.send("hello", "__minus_gt", [(1)])]), "_asDictionary", []), "__eq", [smalltalk.send((smalltalk.Dictionary || Dictionary), "_with_", [smalltalk.send("hello", "__minus_gt", [(1)])])])]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
fn: function () {
var self=this;
var d1=nil;
var d2=nil;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), "__eq", [smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])])]);
(d1=(function($rec){smalltalk.send($rec, "_at_put_", [(1), (2)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
(d2=(function($rec){smalltalk.send($rec, "_at_put_", [(1), (2)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send(self, "_assert_", [smalltalk.send(d1, "__eq", [d2])]);
(d2=(function($rec){smalltalk.send($rec, "_at_put_", [(1), (3)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send(self, "_deny_", [smalltalk.send(d1, "__eq", [d2])]);
(d2=(function($rec){smalltalk.send($rec, "_at_put_", [(2), (2)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send(self, "_deny_", [smalltalk.send(d1, "__eq", [d2])]);
(d2=(function($rec){smalltalk.send($rec, "_at_put_", [(1), (2)]);smalltalk.send($rec, "_at_put_", [(3), (4)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send(self, "_deny_", [smalltalk.send(d1, "__eq", [d2])]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testKeys'),
smalltalk.method({
selector: unescape('testKeys'),
fn: function () {
var self=this;
var d=nil;
(d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(d, "_at_put_", [(1), (2)]);
smalltalk.send(d, "_at_put_", [(2), (3)]);
smalltalk.send(d, "_at_put_", [(3), (4)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_keys", []), "__eq", [[(1), (2), (3)]])]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testPrintString'),
smalltalk.method({
selector: unescape('testPrintString'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("a%20Dictionary%28%27firstname%27%20-%3E%20%27James%27%20%2C%20%27lastname%27%20-%3E%20%27Bond%27%29"), (function($rec){smalltalk.send($rec, "_at_put_", ["firstname", "James"]);smalltalk.send($rec, "_at_put_", ["lastname", "Bond"]);return smalltalk.send($rec, "_printString", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []))]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testRemoveKey'),
smalltalk.method({
selector: unescape('testRemoveKey'),
fn: function (){
var self=this;
var d=nil;
var key=nil;
(d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(d, "_at_put_", [(1), (2)]);
smalltalk.send(d, "_at_put_", [(2), (3)]);
smalltalk.send(d, "_at_put_", [(3), (4)]);
(key=(2));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_keys", []), "__eq", [[(1), (2), (3)]])]);
smalltalk.send(d, "_removeKey_", [key]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_keys", []), "__eq", [[(1), (3)]])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_values", []), "__eq", [[(2), (4)]])]);
smalltalk.send(self, "_deny_", [smalltalk.send(d, "_includesKey_", [(2)])]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testRemoveKeyIfAbsent'),
smalltalk.method({
selector: unescape('testRemoveKeyIfAbsent'),
fn: function (){
var self=this;
var d=nil;
var key=nil;
(d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(d, "_at_put_", [(1), (2)]);
smalltalk.send(d, "_at_put_", [(2), (3)]);
smalltalk.send(d, "_at_put_", [(3), (4)]);
(key=(2));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_removeKey_", [key]), "__eq", [(3)])]);
(key=(3));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_removeKey_ifAbsent_", [key, (function(){return (42);})]), "__eq", [(4)])]);
(key="why");
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_removeKey_ifAbsent_", [key, (function(){return (42);})]), "__eq", [(42)])]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testSize'),
smalltalk.method({
selector: unescape('testSize'),
fn: function () {
var self=this;
var d=nil;
(d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_size", []), "__eq", [(0)])]);
smalltalk.send(d, "_at_put_", [(1), (2)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_size", []), "__eq", [(1)])]);
smalltalk.send(d, "_at_put_", [(2), (3)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_size", []), "__eq", [(2)])]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testValues'),
smalltalk.method({
selector: unescape('testValues'),
fn: function () {
var self=this;
var d=nil;
(d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(d, "_at_put_", [(1), (2)]);
smalltalk.send(d, "_at_put_", [(2), (3)]);
smalltalk.send(d, "_at_put_", [(3), (4)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_values", []), "__eq", [[(2), (3), (4)]])]);
return self;}
}),
smalltalk.DictionaryTest);



smalltalk.addClass('JSObjectProxyTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_jsObject'),
smalltalk.method({
selector: unescape('jsObject'),
fn: function () {
var self=this;
return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}};
return self;}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
unescape('_testDNU'),
smalltalk.method({
selector: unescape('testDNU'),
fn: function () {
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(smalltalk.send(self, "_jsObject", []), "_foo", []);}), (smalltalk.MessageNotUnderstood || MessageNotUnderstood)]);
return self;}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
unescape('_testMessageSend'),
smalltalk.method({
selector: unescape('testMessageSend'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_a", []), (1)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_b", []), (2)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_c_", [(3)]), (3)]);
return self;}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
unescape('_testMethodWithArguments'),
smalltalk.method({
selector: unescape('testMethodWithArguments'),
fn: function () {
var self=this;
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_hasClass_", ["amber"])]);
smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["amber"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_hasClass_", ["amber"])]);
smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["amber"]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_hasClass_", ["amber"])]);
return self;}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
unescape('_testPrinting'),
smalltalk.method({
selector: unescape('testPrinting'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_jsObject", []), "_printString", []), "__eq", [unescape("%5Bobject%20Object%5D")])]);
return self;}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
unescape('_testPropertyThatReturnsEmptyString'),
smalltalk.method({
selector: unescape('testPropertyThatReturnsEmptyString'),
fn: function () {
var self=this;
document.location.hash = '';
smalltalk.send(self, "_assert_equals_", ["", smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash", [])]);
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash_", ["test"]);
smalltalk.send(self, "_assert_equals_", [unescape("%23test"), smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash", [])]);
return self;}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
unescape('_testYourself'),
smalltalk.method({
selector: unescape('testYourself'),
fn: function () {
var self=this;
var body=nil;
(body=(function($rec){smalltalk.send($rec, "_addClass_", ["amber"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send("body", "_asJQuery", [])));
smalltalk.send(self, "_assert_", [smalltalk.send(body, "_hasClass_", ["amber"])]);
smalltalk.send(body, "_removeClass_", ["amber"]);
smalltalk.send(self, "_deny_", [smalltalk.send(body, "_hasClass_", ["amber"])]);
return self;}
}),
smalltalk.JSObjectProxyTest);



smalltalk.addClass('NumberTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testArithmetic'),
smalltalk.method({
selector: unescape('testArithmetic'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((1.5) + (1), "__eq", [(2.5)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((2) - (1), "__eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((-2) - (1), "__eq", [(-3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((12) / (2), "__eq", [(6)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((3) * (4), "__eq", [(12)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = (1) + (2)).klass === smalltalk.Number) ? $receiver *(3) : smalltalk.send($receiver, "__star", [(3)])), "__eq", [(9)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((1) + (2) * (3), "__eq", [(7)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testComparison'),
smalltalk.method({
selector: unescape('testComparison'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [(3) > (2)]);
smalltalk.send(self, "_assert_", [(2) < (3)]);
smalltalk.send(self, "_deny_", [(3) < (2)]);
smalltalk.send(self, "_deny_", [(2) > (3)]);
smalltalk.send(self, "_assert_", [(3) >= (3)]);
smalltalk.send(self, "_assert_", [(3.1) >= (3)]);
smalltalk.send(self, "_assert_", [(3) <= (3)]);
smalltalk.send(self, "_assert_", [(3) <= (3.1)]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testCopying'),
smalltalk.method({
selector: unescape('testCopying'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_copy", []), "__eq_eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_deepCopy", []), "__eq_eq", [(1)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((1), "__eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((0), "__eq", [(0)])]);
smalltalk.send(self, "_deny_", [smalltalk.send((1), "__eq", [(0)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_yourself", []), "__eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((1), "__eq", [smalltalk.send((1), "_yourself", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_yourself", []), "__eq", [smalltalk.send((1), "_yourself", [])])]);
smalltalk.send(self, "_deny_", [smalltalk.send((0), "__eq", [false])]);
smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq", [(0)])]);
smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq", [(0)])]);
smalltalk.send(self, "_deny_", [smalltalk.send((0), "__eq", [""])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testIdentity'),
smalltalk.method({
selector: unescape('testIdentity'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((1), "__eq_eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((0), "__eq_eq", [(0)])]);
smalltalk.send(self, "_deny_", [smalltalk.send((1), "__eq_eq", [(0)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_yourself", []), "__eq_eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((1), "__eq_eq", [smalltalk.send((1), "_yourself", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_yourself", []), "__eq_eq", [smalltalk.send((1), "_yourself", [])])]);
smalltalk.send(self, "_deny_", [smalltalk.send((1), "__eq_eq", [(2)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testMinMax'),
smalltalk.method({
selector: unescape('testMinMax'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((2), "_max_", [(5)]), (5)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((2), "_min_", [(5)]), (2)]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testNegated'),
smalltalk.method({
selector: unescape('testNegated'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_negated", []), "__eq", [(-3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((-3), "_negated", []), "__eq", [(3)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testPrintShowingDecimalPlaces'),
smalltalk.method({
selector: unescape('testPrintShowingDecimalPlaces'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", ["23.00", smalltalk.send((23), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", ["23.57", smalltalk.send((23.5698), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", [unescape("-234.56700"), smalltalk.send(smalltalk.send((234.567), "_negated", []), "_printShowingDecimalPlaces_", [(5)])]);
smalltalk.send(self, "_assert_equals_", ["23", smalltalk.send((23.4567), "_printShowingDecimalPlaces_", [(0)])]);
smalltalk.send(self, "_assert_equals_", ["24", smalltalk.send((23.5567), "_printShowingDecimalPlaces_", [(0)])]);
smalltalk.send(self, "_assert_equals_", [unescape("-23"), smalltalk.send(smalltalk.send((23.4567), "_negated", []), "_printShowingDecimalPlaces_", [(0)])]);
smalltalk.send(self, "_assert_equals_", [unescape("-24"), smalltalk.send(smalltalk.send((23.5567), "_negated", []), "_printShowingDecimalPlaces_", [(0)])]);
smalltalk.send(self, "_assert_equals_", ["100000000.0", smalltalk.send((100000000), "_printShowingDecimalPlaces_", [(1)])]);
smalltalk.send(self, "_assert_equals_", ["0.98000", smalltalk.send((0.98), "_printShowingDecimalPlaces_", [(5)])]);
smalltalk.send(self, "_assert_equals_", [unescape("-0.98"), smalltalk.send(smalltalk.send((0.98), "_negated", []), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", ["2.57", smalltalk.send((2.567), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", [unescape("-2.57"), smalltalk.send((-2.567), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", ["0.00", smalltalk.send((0), "_printShowingDecimalPlaces_", [(2)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testRounded'),
smalltalk.method({
selector: unescape('testRounded'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_rounded", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.212), "_rounded", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.51), "_rounded", []), "__eq", [(4)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testSqrt'),
smalltalk.method({
selector: unescape('testSqrt'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((4), "_sqrt", []), "__eq", [(2)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((16), "_sqrt", []), "__eq", [(4)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testSquared'),
smalltalk.method({
selector: unescape('testSquared'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((4), "_squared", []), "__eq", [(16)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testTimesRepeat'),
smalltalk.method({
selector: unescape('testTimesRepeat'),
fn: function () {
var self=this;
var i=nil;
(i=(0));
smalltalk.send((0), "_timesRepeat_", [(function(){return (i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})]);
smalltalk.send(self, "_assert_equals_", [i, (0)]);
smalltalk.send((5), "_timesRepeat_", [(function(){return (i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})]);
smalltalk.send(self, "_assert_equals_", [i, (5)]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testTo'),
smalltalk.method({
selector: unescape('testTo'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((1), "_to_", [(5)]), [(1), (2), (3), (4), (5)]]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testToBy'),
smalltalk.method({
selector: unescape('testToBy'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((0), "_to_by_", [(6), (2)]), [(0), (2), (4), (6)]]);
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send((1), "_to_by_", [(4), (0)]);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testTruncated'),
smalltalk.method({
selector: unescape('testTruncated'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_truncated", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.212), "_truncated", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.51), "_truncated", []), "__eq", [(3)])]);
return self;}
}),
smalltalk.NumberTest);



smalltalk.addClass('ObjectMock', smalltalk.Object, ['foo', 'bar'], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_foo'),
smalltalk.method({
selector: unescape('foo'),
fn: function () {
var self=this;
return self['@foo'];
return self;}
}),
smalltalk.ObjectMock);

smalltalk.addMethod(
unescape('_foo_'),
smalltalk.method({
selector: unescape('foo%3A'),
fn: function (anObject) {
var self=this;
(self['@foo']=anObject);
return self;}
}),
smalltalk.ObjectMock);



smalltalk.addClass('ObjectTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testBasicAccess'),
smalltalk.method({
selector: unescape('testBasicAccess'),
fn: function () {
var self=this;
var o=nil;
(o=smalltalk.send((smalltalk.Object || Object), "_new", []));
smalltalk.send(o, "_basicAt_put_", ["a", (1)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_basicAt_", ["a"]), (1)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_basicAt_", ["b"]), nil]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
unescape('_testBasicPerform'),
smalltalk.method({
selector: unescape('testBasicPerform'),
fn: function () {
var self=this;
var o=nil;
(o=smalltalk.send((smalltalk.Object || Object), "_new", []));
smalltalk.send(o, "_basicAt_put_", ["func", (function(){return "hello";})]);
smalltalk.send(o, "_basicAt_put_", ["func2", (function(a){return ((($receiver = a).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_basicPerform_", ["func"]), "hello"]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_basicPerform_withArguments_", ["func2", [(3)]]), (4)]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
unescape('_testDNU'),
smalltalk.method({
selector: unescape('testDNU'),
fn: function () {
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_new", []), "_foo", []);}), (smalltalk.MessageNotUnderstood || MessageNotUnderstood)]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
fn: function () {
var self=this;
var o=nil;
(o=smalltalk.send((smalltalk.Object || Object), "_new", []));
smalltalk.send(self, "_deny_", [smalltalk.send(o, "__eq", [smalltalk.send((smalltalk.Object || Object), "_new", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq", [o])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o, "_yourself", []), "__eq", [o])]);
smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq", [smalltalk.send(o, "_yourself", [])])]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
unescape('_testHalt'),
smalltalk.method({
selector: unescape('testHalt'),
fn: function () {
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_new", []), "_halt", []);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
unescape('_testIdentity'),
smalltalk.method({
selector: unescape('testIdentity'),
fn: function () {
var self=this;
var o=nil;
(o=smalltalk.send((smalltalk.Object || Object), "_new", []));
smalltalk.send(self, "_deny_", [smalltalk.send(o, "__eq_eq", [smalltalk.send((smalltalk.Object || Object), "_new", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq_eq", [o])]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
unescape('_testIfNil'),
smalltalk.method({
selector: unescape('testIfNil'),
fn: function () {
var self=this;
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_new", []), "_isNil", [])]);
smalltalk.send(self, "_deny_", [smalltalk.send((($receiver = smalltalk.send((smalltalk.Object || Object), "_new", [])) == nil || $receiver == undefined) ? (function(){return true;})() : $receiver, "__eq", [true])]);
smalltalk.send(self, "_assert_", [smalltalk.send((($receiver = smalltalk.send((smalltalk.Object || Object), "_new", [])) != nil && $receiver != undefined) ? (function(){return true;})() : nil, "__eq", [true])]);
smalltalk.send(self, "_assert_", [smalltalk.send((($receiver = smalltalk.send((smalltalk.Object || Object), "_new", [])) == nil || $receiver == undefined) ? (function(){return false;})() : (function(){return true;})(), "__eq", [true])]);
smalltalk.send(self, "_assert_", [smalltalk.send((($receiver = smalltalk.send((smalltalk.Object || Object), "_new", [])) == nil || $receiver == undefined) ? (function(){return false;})() : (function(){return true;})(), "__eq", [true])]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
unescape('_testInstVars'),
smalltalk.method({
selector: unescape('testInstVars'),
fn: function () {
var self=this;
var o=nil;
(o=smalltalk.send((smalltalk.ObjectMock || ObjectMock), "_new", []));
smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_instVarAt_", [smalltalk.symbolFor("foo")]), nil]);
smalltalk.send(o, "_instVarAt_put_", [smalltalk.symbolFor("foo"), (1)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_instVarAt_", [smalltalk.symbolFor("foo")]), (1)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_instVarAt_", ["foo"]), (1)]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
unescape('_testNilUndefined'),
smalltalk.method({
selector: unescape('testNilUndefined'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(nil, "__eq", [(typeof undefined == 'undefined' ? nil : undefined)])]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
unescape('_testYourself'),
smalltalk.method({
selector: unescape('testYourself'),
fn: function () {
var self=this;
var o=nil;
(o=smalltalk.send((smalltalk.ObjectMock || ObjectMock), "_new", []));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o, "_yourself", []), "__eq_eq", [o])]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
unescape('_testidentityHash'),
smalltalk.method({
selector: unescape('testidentityHash'),
fn: function () {
var self=this;
var o1=nil;
var o2=nil;
(o1=smalltalk.send((smalltalk.Object || Object), "_new", []));
(o2=smalltalk.send((smalltalk.Object || Object), "_new", []));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o1, "_identityHash", []), "__eq_eq", [smalltalk.send(o1, "_identityHash", [])])]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(o1, "_identityHash", []), "__eq_eq", [smalltalk.send(o2, "_identityHash", [])])]);
return self;}
}),
smalltalk.ObjectTest);



smalltalk.addClass('PackageTest', smalltalk.TestCase, ['zorkPackage', 'grulPackage', 'backUpCommitPathJs', 'backUpCommitPathSt'], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
fn: function () {
var self=this;
(self['@backUpCommitPathJs']=smalltalk.send((smalltalk.Package || Package), "_defaultCommitPathJs", []));
(self['@backUpCommitPathSt']=smalltalk.send((smalltalk.Package || Package), "_defaultCommitPathSt", []));
smalltalk.send((smalltalk.Package || Package), "_resetCommitPaths", []);
(self['@zorkPackage']=smalltalk.send(smalltalk.send((smalltalk.Package || Package), "_new", []), "_name_", ["Zork"]));
(self['@grulPackage']=(function($rec){smalltalk.send($rec, "_name_", ["Grul"]);smalltalk.send($rec, "_commitPathJs_", [unescape("server/grul/js")]);smalltalk.send($rec, "_commitPathSt_", [unescape("grul/st")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Package || Package), "_new", [])));
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
unescape('_tearDown'),
smalltalk.method({
selector: unescape('tearDown'),
fn: function () {
var self=this;
(function($rec){smalltalk.send($rec, "_defaultCommitPathJs_", [self['@backUpCommitPathJs']]);return smalltalk.send($rec, "_defaultCommitPathSt_", [self['@backUpCommitPathSt']]);})((smalltalk.Package || Package));
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
unescape('_testGrulCommitPathJsShouldBeServerGrulJs'),
smalltalk.method({
selector: unescape('testGrulCommitPathJsShouldBeServerGrulJs'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("server/grul/js"), smalltalk.send(self['@grulPackage'], "_commitPathJs", [])]);
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
unescape('_testGrulCommitPathStShouldBeGrulSt'),
smalltalk.method({
selector: unescape('testGrulCommitPathStShouldBeGrulSt'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("grul/st"), smalltalk.send(self['@grulPackage'], "_commitPathSt", [])]);
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
unescape('_testZorkCommitPathJsShouldBeJs'),
smalltalk.method({
selector: unescape('testZorkCommitPathJsShouldBeJs'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", ["js", smalltalk.send(self['@zorkPackage'], "_commitPathJs", [])]);
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
unescape('_testZorkCommitPathStShouldBeSt'),
smalltalk.method({
selector: unescape('testZorkCommitPathStShouldBeSt'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", ["st", smalltalk.send(self['@zorkPackage'], "_commitPathSt", [])]);
return self;}
}),
smalltalk.PackageTest);



smalltalk.addClass('PackageWithDefaultCommitPathChangedTest', smalltalk.PackageTest, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
fn: function () {
var self=this;
smalltalk.send(self, "_setUp", [], smalltalk.PackageTest);
(function($rec){smalltalk.send($rec, "_defaultCommitPathJs_", [unescape("javascripts/")]);return smalltalk.send($rec, "_defaultCommitPathSt_", [unescape("smalltalk/")]);})((smalltalk.Package || Package));
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
unescape('_testGrulCommitPathJsShouldBeServerGrulJs'),
smalltalk.method({
selector: unescape('testGrulCommitPathJsShouldBeServerGrulJs'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("server/grul/js"), smalltalk.send(self['@grulPackage'], "_commitPathJs", [])]);
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
unescape('_testGrulCommitPathStShouldBeGrulSt'),
smalltalk.method({
selector: unescape('testGrulCommitPathStShouldBeGrulSt'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("grul/st"), smalltalk.send(self['@grulPackage'], "_commitPathSt", [])]);
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
unescape('_testZorkCommitPathJsShouldBeJavascript'),
smalltalk.method({
selector: unescape('testZorkCommitPathJsShouldBeJavascript'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("javascripts/"), smalltalk.send(self['@zorkPackage'], "_commitPathJs", [])]);
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
unescape('_testZorkCommitPathStShouldBeSmalltalk'),
smalltalk.method({
selector: unescape('testZorkCommitPathStShouldBeSmalltalk'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("smalltalk/"), smalltalk.send(self['@zorkPackage'], "_commitPathSt", [])]);
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);


smalltalk.addMethod(
unescape('_shouldInheritSelectors'),
smalltalk.method({
selector: unescape('shouldInheritSelectors'),
fn: function () {
var self=this;
return false;
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest.klass);


smalltalk.addClass('PointTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testAccessing'),
smalltalk.method({
selector: unescape('testAccessing'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send((smalltalk.Point || Point), "_x_y_", [(3), (4)]), "_x", []), (3)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send((smalltalk.Point || Point), "_x_y_", [(3), (4)]), "_y", []), (4)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Point || Point), "_new", []), "_x_", [(3)]), "_x", []), (3)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Point || Point), "_new", []), "_y_", [(4)]), "_y", []), (4)]);
return self;}
}),
smalltalk.PointTest);

smalltalk.addMethod(
unescape('_testArithmetic'),
smalltalk.method({
selector: unescape('testArithmetic'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [((($receiver = smalltalk.send((3), "__at", [(4)])).klass === smalltalk.Number) ? $receiver *smalltalk.send((3), "__at", [(4)]) : smalltalk.send($receiver, "__star", [smalltalk.send((3), "__at", [(4)])])), smalltalk.send((smalltalk.Point || Point), "_x_y_", [(9), (16)])]);
smalltalk.send(self, "_assert_equals_", [((($receiver = smalltalk.send((3), "__at", [(4)])).klass === smalltalk.Number) ? $receiver +smalltalk.send((3), "__at", [(4)]) : smalltalk.send($receiver, "__plus", [smalltalk.send((3), "__at", [(4)])])), smalltalk.send((smalltalk.Point || Point), "_x_y_", [(6), (8)])]);
smalltalk.send(self, "_assert_equals_", [((($receiver = smalltalk.send((3), "__at", [(4)])).klass === smalltalk.Number) ? $receiver -smalltalk.send((3), "__at", [(4)]) : smalltalk.send($receiver, "__minus", [smalltalk.send((3), "__at", [(4)])])), smalltalk.send((smalltalk.Point || Point), "_x_y_", [(0), (0)])]);
smalltalk.send(self, "_assert_equals_", [((($receiver = smalltalk.send((6), "__at", [(8)])).klass === smalltalk.Number) ? $receiver /smalltalk.send((3), "__at", [(4)]) : smalltalk.send($receiver, "__slash", [smalltalk.send((3), "__at", [(4)])])), smalltalk.send((smalltalk.Point || Point), "_x_y_", [(2), (2)])]);
return self;}
}),
smalltalk.PointTest);

smalltalk.addMethod(
unescape('_testAt'),
smalltalk.method({
selector: unescape('testAt'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((3), "__at", [(4)]), smalltalk.send((smalltalk.Point || Point), "_x_y_", [(3), (4)])]);
return self;}
}),
smalltalk.PointTest);

smalltalk.addMethod(
unescape('_testEgality'),
smalltalk.method({
selector: unescape('testEgality'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "__at", [(4)]), "__eq", [smalltalk.send((3), "__at", [(4)])])]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send((3), "__at", [(5)]), "__eq", [smalltalk.send((3), "__at", [(6)])])]);
return self;}
}),
smalltalk.PointTest);

smalltalk.addMethod(
unescape('_testTranslateBy'),
smalltalk.method({
selector: unescape('testTranslateBy'),
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((3), "__at", [(4)]), smalltalk.send(smalltalk.send((3), "__at", [(3)]), "_translateBy_", [smalltalk.send((0), "__at", [(1)])])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((3), "__at", [(2)]), smalltalk.send(smalltalk.send((3), "__at", [(3)]), "_translateBy_", [smalltalk.send((0), "__at", [smalltalk.send((1), "_negated", [])])])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((5), "__at", [(6)]), smalltalk.send(smalltalk.send((3), "__at", [(3)]), "_translateBy_", [smalltalk.send((2), "__at", [(3)])])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((0), "__at", [(3)]), smalltalk.send(smalltalk.send((3), "__at", [(3)]), "_translateBy_", [smalltalk.send(smalltalk.send((3), "_negated", []), "__at", [(0)])])]);
return self;}
}),
smalltalk.PointTest);



smalltalk.addClass('RandomTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_textNext'),
smalltalk.method({
selector: unescape('textNext'),
fn: function () {
var self=this;
smalltalk.send((10000), "_timesRepeat_", [(function(){var current=nil;
var next=nil;
(next=smalltalk.send(smalltalk.send((smalltalk.Random || Random), "_new", []), "_next", []));smalltalk.send(self, "_assert_", [((($receiver = next).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)]))]);smalltalk.send(self, "_assert_", [((($receiver = next).klass === smalltalk.Number) ? $receiver <(1) : smalltalk.send($receiver, "__lt", [(1)]))]);smalltalk.send(self, "_deny_", [smalltalk.send(current, "__eq", [next])]);return smalltalk.send(next, "__eq", [current]);})]);
return self;}
}),
smalltalk.RandomTest);



smalltalk.addClass('SetTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testAddRemove'),
smalltalk.method({
selector: unescape('testAddRemove'),
fn: function () {
var self=this;
var set=nil;
(set=smalltalk.send((smalltalk.Set || Set), "_new", []));
smalltalk.send(self, "_assert_", [smalltalk.send(set, "_isEmpty", [])]);
smalltalk.send(set, "_add_", [(3)]);
smalltalk.send(self, "_assert_", [smalltalk.send(set, "_includes_", [(3)])]);
smalltalk.send(set, "_add_", [(5)]);
smalltalk.send(self, "_assert_", [smalltalk.send(set, "_includes_", [(5)])]);
smalltalk.send(set, "_remove_", [(3)]);
smalltalk.send(self, "_deny_", [smalltalk.send(set, "_includes_", [(3)])]);
return self;}
}),
smalltalk.SetTest);

smalltalk.addMethod(
unescape('_testAt'),
smalltalk.method({
selector: unescape('testAt'),
fn: function () {
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.Set || Set), "_new", []), "_at_put_", [(1), (2)]);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.SetTest);

smalltalk.addMethod(
unescape('_testSize'),
smalltalk.method({
selector: unescape('testSize'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send((smalltalk.Set || Set), "_new", []), "_size", []), (0)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send((smalltalk.Set || Set), "_withAll_", [[(1), (2), (3), (4)]]), "_size", []), (4)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send((smalltalk.Set || Set), "_withAll_", [[(1), (1), (1), (1)]]), "_size", []), (1)]);
return self;}
}),
smalltalk.SetTest);

smalltalk.addMethod(
unescape('_testUnicity'),
smalltalk.method({
selector: unescape('testUnicity'),
fn: function () {
var self=this;
var set=nil;
(set=smalltalk.send((smalltalk.Set || Set), "_new", []));
smalltalk.send(set, "_add_", [(21)]);
smalltalk.send(set, "_add_", ["hello"]);
smalltalk.send(set, "_add_", [(21)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(set, "_size", []), "__eq", [(2)])]);
smalltalk.send(set, "_add_", ["hello"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(set, "_size", []), "__eq", [(2)])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(set, "_asArray", []), [(21), "hello"]]);
return self;}
}),
smalltalk.SetTest);



smalltalk.addClass('StringTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testAddRemove'),
smalltalk.method({
selector: unescape('testAddRemove'),
fn: function () {
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send("hello", "_add_", ["a"]);}), (smalltalk.Error || Error)]);
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send("hello", "_remove_", ["h"]);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testAsArray'),
smalltalk.method({
selector: unescape('testAsArray'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_asArray", []), "__eq", [["h", "e", "l", "l", "o"]])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testAt'),
smalltalk.method({
selector: unescape('testAt'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_", [(1)]), "__eq", ["h"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_", [(5)]), "__eq", ["o"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_ifAbsent_", [(6), (function(){return nil;})]), "__eq", [nil])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testAtPut'),
smalltalk.method({
selector: unescape('testAtPut'),
fn: function () {
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send("hello", "_at_put_", [(1), "a"]);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testCopyWithoutAll'),
smalltalk.method({
selector: unescape('testCopyWithoutAll'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send(unescape("*hello*%20*world*"), "_copyWithoutAll_", [unescape("*")])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq", ["hello"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("hello", "__eq", ["world"])]);
smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq", [smalltalk.send("hello", "_yourself", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_yourself", []), "__eq", ["hello"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq", [(0)])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testIncludesSubString'),
smalltalk.method({
selector: unescape('testIncludesSubString'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send("amber", "_includesSubString_", ["ber"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("amber", "_includesSubString_", ["zork"])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testJoin'),
smalltalk.method({
selector: unescape('testJoin'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("hello%2Cworld"), smalltalk.send(unescape("%2C"), "_join_", [["hello", "world"]])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testSize'),
smalltalk.method({
selector: unescape('testSize'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send("smalltalk", "_size", []), (9)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send("", "_size", []), (0)]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testStreamContents'),
smalltalk.method({
selector: unescape('testStreamContents'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", ["hello"]);smalltalk.send($rec, "_space", []);return smalltalk.send($rec, "_nextPutAll_", ["world"]);})(aStream);})])]);
return self;}
}),
smalltalk.StringTest);



smalltalk.addClass('SymbolTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testAsString'),
smalltalk.method({
selector: unescape('testAsString'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.symbolFor("hello"), "_asString", []), "hello"]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
unescape('_testAsSymbol'),
smalltalk.method({
selector: unescape('testAsSymbol'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq_eq", [smalltalk.send(smalltalk.symbolFor("hello"), "_asSymbol", [])])]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
unescape('_testAt'),
smalltalk.method({
selector: unescape('testAt'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_at_", [(1)]), "__eq", ["h"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_at_", [(5)]), "__eq", ["o"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_at_ifAbsent_", [(6), (function(){return nil;})]), "__eq", [nil])]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
unescape('_testAtPut'),
smalltalk.method({
selector: unescape('testAtPut'),
fn: function () {
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send("hello", "_at_put_", [(1), "a"]);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
unescape('_testComparing'),
smalltalk.method({
selector: unescape('testComparing'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [((($receiver = smalltalk.symbolFor("ab")).klass === smalltalk.Number) ? $receiver >smalltalk.symbolFor("aa") : smalltalk.send($receiver, "__gt", [smalltalk.symbolFor("aa")]))]);
smalltalk.send(self, "_deny_", [((($receiver = smalltalk.symbolFor("ab")).klass === smalltalk.Number) ? $receiver >smalltalk.symbolFor("ba") : smalltalk.send($receiver, "__gt", [smalltalk.symbolFor("ba")]))]);
smalltalk.send(self, "_assert_", [((($receiver = smalltalk.symbolFor("ab")).klass === smalltalk.Number) ? $receiver <smalltalk.symbolFor("ba") : smalltalk.send($receiver, "__lt", [smalltalk.symbolFor("ba")]))]);
smalltalk.send(self, "_deny_", [((($receiver = smalltalk.symbolFor("bb")).klass === smalltalk.Number) ? $receiver <smalltalk.symbolFor("ba") : smalltalk.send($receiver, "__lt", [smalltalk.symbolFor("ba")]))]);
smalltalk.send(self, "_assert_", [((($receiver = smalltalk.symbolFor("ab")).klass === smalltalk.Number) ? $receiver >=smalltalk.symbolFor("aa") : smalltalk.send($receiver, "__gt_eq", [smalltalk.symbolFor("aa")]))]);
smalltalk.send(self, "_deny_", [((($receiver = smalltalk.symbolFor("ab")).klass === smalltalk.Number) ? $receiver >=smalltalk.symbolFor("ba") : smalltalk.send($receiver, "__gt_eq", [smalltalk.symbolFor("ba")]))]);
smalltalk.send(self, "_assert_", [((($receiver = smalltalk.symbolFor("ab")).klass === smalltalk.Number) ? $receiver <=smalltalk.symbolFor("ba") : smalltalk.send($receiver, "__lt_eq", [smalltalk.symbolFor("ba")]))]);
smalltalk.send(self, "_deny_", [((($receiver = smalltalk.symbolFor("bb")).klass === smalltalk.Number) ? $receiver <=smalltalk.symbolFor("ba") : smalltalk.send($receiver, "__lt_eq", [smalltalk.symbolFor("ba")]))]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
unescape('_testCopying'),
smalltalk.method({
selector: unescape('testCopying'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_copy", []), "__eq_eq", [smalltalk.symbolFor("hello")])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_deepCopy", []), "__eq_eq", [smalltalk.symbolFor("hello")])]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", [smalltalk.symbolFor("hello")])]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", [smalltalk.symbolFor("world")])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", [smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", []), "__eq", [smalltalk.symbolFor("hello")])]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", ["hello"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("hello", "__eq", [smalltalk.symbolFor("hello")])]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
unescape('_testIdentity'),
smalltalk.method({
selector: unescape('testIdentity'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq_eq", [smalltalk.symbolFor("hello")])]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq_eq", [smalltalk.symbolFor("world")])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", [smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", []), "__eq", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_asString", []), "_asSymbol", [])])]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
unescape('_testIsSymbolIsString'),
smalltalk.method({
selector: unescape('testIsSymbolIsString'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "_isSymbol", [])]);
smalltalk.send(self, "_deny_", [smalltalk.send("hello", "_isSymbol", [])]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "_isString", [])]);
smalltalk.send(self, "_assert_", [smalltalk.send("hello", "_isString", [])]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
unescape('_testSize'),
smalltalk.method({
selector: unescape('testSize'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.symbolFor("a"), "_size", []), (1)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.symbolFor("aaaaa"), "_size", []), (5)]);
return self;}
}),
smalltalk.SymbolTest);



smalltalk.addClass('UndefinedTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testCopying'),
smalltalk.method({
selector: unescape('testCopying'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(nil, "_copy", []), nil]);
return self;}
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
unescape('_testDeepCopy'),
smalltalk.method({
selector: unescape('testDeepCopy'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(nil, "_deepCopy", []), "__eq", [nil])]);
return self;}
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
unescape('_testIfNil'),
smalltalk.method({
selector: unescape('testIfNil'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_equals_", [(($receiver = nil) == nil || $receiver == undefined) ? (function(){return true;})() : $receiver, true]);
smalltalk.send(self, "_deny_", [smalltalk.send((($receiver = nil) != nil && $receiver != undefined) ? (function(){return true;})() : nil, "__eq", [true])]);
smalltalk.send(self, "_assert_equals_", [(($receiver = nil) == nil || $receiver == undefined) ? (function(){return true;})() : (function(){return false;})(), true]);
smalltalk.send(self, "_deny_", [smalltalk.send((($receiver = nil) == nil || $receiver == undefined) ? (function(){return false;})() : (function(){return true;})(), "__eq", [true])]);
return self;}
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
unescape('_testIsNil'),
smalltalk.method({
selector: unescape('testIsNil'),
fn: function () {
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(nil, "_isNil", [])]);
smalltalk.send(self, "_deny_", [smalltalk.send(nil, "_notNil", [])]);
return self;}
}),
smalltalk.UndefinedTest);



