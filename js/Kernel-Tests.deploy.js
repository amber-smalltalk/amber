smalltalk.addPackage('Kernel-Tests', {});
smalltalk.addClass('ArrayTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAtIfAbsent",
smalltalk.method({
selector: "testAtIfAbsent",
fn: function ArrayTest_testAtIfAbsent(){
var self=this;
var array=nil;
(array=["hello", "world"]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(array, "_at_", [(1)]), "hello"]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(array, "_at_", [(2)]), "world"]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(array, "_at_ifAbsent_", [(2), (function(){return "not found";})]), "world"]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(array, "_at_ifAbsent_", [(0), (function(){return "not found";})]), "not found"]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(array, "_at_ifAbsent_", [(-10), (function(){return "not found";})]), "not found"]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(array, "_at_ifAbsent_", [(3), (function(){return "not found";})]), "not found"]);
return self;}
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testFirstN",
smalltalk.method({
selector: "testFirstN",
fn: function ArrayTest_testFirstN(){
var self=this;
smalltalk.send(self, "_assert_equals_", [[(1),(2),(3)], smalltalk.send([(1),(2),(3),(4),(5)], "_first_", [(3)])]);
return self;}
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testIfEmpty",
smalltalk.method({
selector: "testIfEmpty",
fn: function ArrayTest_testIfEmpty(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["zork", smalltalk.send("", "_ifEmpty_", [(function(){return "zork";})])]);
return self;}
}),
smalltalk.ArrayTest);



smalltalk.addClass('BlockClosureTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCompiledSource",
smalltalk.method({
selector: "testCompiledSource",
fn: function BlockClosureTest_testCompiledSource(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((function(){return (1) + (1);}), "_compiledSource", []), "_includesSubString_", ["function"])]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testEnsure",
smalltalk.method({
selector: "testEnsure",
fn: function BlockClosureTest_testEnsure(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((function(){return smalltalk.send((smalltalk.Error || Error), "_new", []);}), "_ensure_", [(function(){return true;})])]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testNumArgs",
smalltalk.method({
selector: "testNumArgs",
fn: function BlockClosureTest_testNumArgs(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return nil;}), "_numArgs", []), (0)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a, b){return nil;}), "_numArgs", []), (2)]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testOnDo",
smalltalk.method({
selector: "testOnDo",
fn: function BlockClosureTest_testOnDo(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((function(){return smalltalk.send(smalltalk.send((smalltalk.Error || Error), "_new", []), "_signal", []);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return true;})])]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testValue",
smalltalk.method({
selector: "testValue",
fn: function BlockClosureTest_testValue(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return (1) + (1);}), "_value", []), (2)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(x){return ((($receiver = x).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));}), "_value_", [(2)]), (3)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(x, y){return ((($receiver = x).klass === smalltalk.Number) ? $receiver *y : smalltalk.send($receiver, "__star", [y]));}), "_value_value_", [(2), (4)]), (8)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a, b, c){return (1);}), "_value", []), (1)]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testValueWithPossibleArguments",
smalltalk.method({
selector: "testValueWithPossibleArguments",
fn: function BlockClosureTest_testValueWithPossibleArguments(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return (1);}), "_valueWithPossibleArguments_", [[(3), (4)]]), (1)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a){return ((($receiver = a).klass === smalltalk.Number) ? $receiver +(4) : smalltalk.send($receiver, "__plus", [(4)]));}), "_valueWithPossibleArguments_", [[(3), (4)]]), (7)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a, b){return ((($receiver = a).klass === smalltalk.Number) ? $receiver +b : smalltalk.send($receiver, "__plus", [b]));}), "_valueWithPossibleArguments_", [[(3), (4), (5)]]), (7)]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testWhileFalse",
smalltalk.method({
selector: "testWhileFalse",
fn: function BlockClosureTest_testWhileFalse(){
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
"_testWhileTrue",
smalltalk.method({
selector: "testWhileTrue",
fn: function BlockClosureTest_testWhileTrue(){
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
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function BooleanTest_testEquality(){
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
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function BooleanTest_testIdentity(){
var self=this;
smalltalk.send(self, "_deny_", [smalltalk.send((0), "__eq_eq", [false])]);
smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq_eq", [(0)])]);
smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq_eq", [false])]);
smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq_eq", [""])]);
smalltalk.send(self, "_assert_", [smalltalk.send(true, "__eq_eq", [true])]);
smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq_eq", [true])]);
smalltalk.send(self, "_deny_", [smalltalk.send(true, "__eq_eq", [false])]);
smalltalk.send(self, "_assert_", [smalltalk.send(false, "__eq_eq", [false])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq_eq", [true])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq_eq", [smalltalk.send(true, "_yourself", [])])]);
return self;}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testIfTrueIfFalse",
smalltalk.method({
selector: "testIfTrueIfFalse",
fn: function BooleanTest_testIfTrueIfFalse(){
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
"_testLogic",
smalltalk.method({
selector: "testLogic",
fn: function BooleanTest_testLogic(){
var self=this;
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_&", [true])]);smalltalk.send($rec, "_deny_", [smalltalk.send(true, "_&", [false])]);smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_&", [true])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_&", [false])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_|", [true])]);smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_|", [false])]);smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_|", [true])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_|", [false])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_&", [(1) > (0)])]);smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_&", [false])]);return smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_&", [(1) > (2)])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_|", [(1) > (0)])]);smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_|", [false])]);return smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_|", [(1) > (2)])]);})(self);
return self;}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testLogicKeywords",
smalltalk.method({
selector: "testLogicKeywords",
fn: function BooleanTest_testLogicKeywords(){
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
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function ClassBuilderTest_setUp(){
var self=this;
(self['@builder']=smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []));
return self;}
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function ClassBuilderTest_tearDown(){
var self=this;
(($receiver = self['@theClass']) != nil && $receiver != undefined) ? (function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_removeClass_", [self['@theClass']]);return (self['@theClass']=nil);})() : nil;
return self;}
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testClassCopy",
smalltalk.method({
selector: "testClassCopy",
fn: function ClassBuilderTest_testClassCopy(){
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
"_testInstanceVariableNames",
smalltalk.method({
selector: "testInstanceVariableNames",
fn: function ClassBuilderTest_testInstanceVariableNames(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@builder'], "_instanceVariableNamesFor_", ["  hello   world   "]), ["hello", "world"]]);
return self;}
}),
smalltalk.ClassBuilderTest);



smalltalk.addClass('DictionaryTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAccessing",
smalltalk.method({
selector: "testAccessing",
fn: function DictionaryTest_testAccessing(){
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
"_testDynamicDictionaries",
smalltalk.method({
selector: "testDynamicDictionaries",
fn: function DictionaryTest_testDynamicDictionaries(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.HashedCollection._fromPairs_([smalltalk.send("hello", "__minus_gt", [(1)])]), "_asDictionary", []), "__eq", [smalltalk.send((smalltalk.Dictionary || Dictionary), "_with_", [smalltalk.send("hello", "__minus_gt", [(1)])])])]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function DictionaryTest_testEquality(){
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
"_testKeys",
smalltalk.method({
selector: "testKeys",
fn: function DictionaryTest_testKeys(){
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
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
fn: function DictionaryTest_testPrintString(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["a Dictionary('firstname' -> 'James' , 'lastname' -> 'Bond')", (function($rec){smalltalk.send($rec, "_at_put_", ["firstname", "James"]);smalltalk.send($rec, "_at_put_", ["lastname", "Bond"]);return smalltalk.send($rec, "_printString", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []))]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testRemoveKey",
smalltalk.method({
selector: "testRemoveKey",
fn: function DictionaryTest_testRemoveKey(){
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
"_testRemoveKeyIfAbsent",
smalltalk.method({
selector: "testRemoveKeyIfAbsent",
fn: function DictionaryTest_testRemoveKeyIfAbsent(){
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
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function DictionaryTest_testSize(){
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
"_testValues",
smalltalk.method({
selector: "testValues",
fn: function DictionaryTest_testValues(){
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
"_jsObject",
smalltalk.method({
selector: "jsObject",
fn: function JSObjectProxyTest_jsObject(){
var self=this;
return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}};
return self;}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testDNU",
smalltalk.method({
selector: "testDNU",
fn: function JSObjectProxyTest_testDNU(){
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(smalltalk.send(self, "_jsObject", []), "_foo", []);}), (smalltalk.MessageNotUnderstood || MessageNotUnderstood)]);
return self;}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testMessageSend",
smalltalk.method({
selector: "testMessageSend",
fn: function JSObjectProxyTest_testMessageSend(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_a", []), (1)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_b", []), (2)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_c_", [(3)]), (3)]);
return self;}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testMethodWithArguments",
smalltalk.method({
selector: "testMethodWithArguments",
fn: function JSObjectProxyTest_testMethodWithArguments(){
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
"_testPrinting",
smalltalk.method({
selector: "testPrinting",
fn: function JSObjectProxyTest_testPrinting(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_jsObject", []), "_printString", []), "__eq", ["[object Object]"])]);
return self;}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testPropertyThatReturnsEmptyString",
smalltalk.method({
selector: "testPropertyThatReturnsEmptyString",
fn: function JSObjectProxyTest_testPropertyThatReturnsEmptyString(){
var self=this;
document.location.hash = '';
smalltalk.send(self, "_assert_equals_", ["", smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash", [])]);
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash_", ["test"]);
smalltalk.send(self, "_assert_equals_", ["#test", smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash", [])]);
return self;}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testYourself",
smalltalk.method({
selector: "testYourself",
fn: function JSObjectProxyTest_testYourself(){
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
"_testArithmetic",
smalltalk.method({
selector: "testArithmetic",
fn: function NumberTest_testArithmetic(){
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
"_testComparison",
smalltalk.method({
selector: "testComparison",
fn: function NumberTest_testComparison(){
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
"_testCopying",
smalltalk.method({
selector: "testCopying",
fn: function NumberTest_testCopying(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_copy", []), "__eq_eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_deepCopy", []), "__eq_eq", [(1)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function NumberTest_testEquality(){
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
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function NumberTest_testIdentity(){
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
"_testMinMax",
smalltalk.method({
selector: "testMinMax",
fn: function NumberTest_testMinMax(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((2), "_max_", [(5)]), (5)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((2), "_min_", [(5)]), (2)]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testNegated",
smalltalk.method({
selector: "testNegated",
fn: function NumberTest_testNegated(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_negated", []), "__eq", [(-3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((-3), "_negated", []), "__eq", [(3)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testPrintShowingDecimalPlaces",
smalltalk.method({
selector: "testPrintShowingDecimalPlaces",
fn: function NumberTest_testPrintShowingDecimalPlaces(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["23.00", smalltalk.send((23), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", ["23.57", smalltalk.send((23.5698), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", ["-234.56700", smalltalk.send(smalltalk.send((234.567), "_negated", []), "_printShowingDecimalPlaces_", [(5)])]);
smalltalk.send(self, "_assert_equals_", ["23", smalltalk.send((23.4567), "_printShowingDecimalPlaces_", [(0)])]);
smalltalk.send(self, "_assert_equals_", ["24", smalltalk.send((23.5567), "_printShowingDecimalPlaces_", [(0)])]);
smalltalk.send(self, "_assert_equals_", ["-23", smalltalk.send(smalltalk.send((23.4567), "_negated", []), "_printShowingDecimalPlaces_", [(0)])]);
smalltalk.send(self, "_assert_equals_", ["-24", smalltalk.send(smalltalk.send((23.5567), "_negated", []), "_printShowingDecimalPlaces_", [(0)])]);
smalltalk.send(self, "_assert_equals_", ["100000000.0", smalltalk.send((100000000), "_printShowingDecimalPlaces_", [(1)])]);
smalltalk.send(self, "_assert_equals_", ["0.98000", smalltalk.send((0.98), "_printShowingDecimalPlaces_", [(5)])]);
smalltalk.send(self, "_assert_equals_", ["-0.98", smalltalk.send(smalltalk.send((0.98), "_negated", []), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", ["2.57", smalltalk.send((2.567), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", ["-2.57", smalltalk.send((-2.567), "_printShowingDecimalPlaces_", [(2)])]);
smalltalk.send(self, "_assert_equals_", ["0.00", smalltalk.send((0), "_printShowingDecimalPlaces_", [(2)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testRounded",
smalltalk.method({
selector: "testRounded",
fn: function NumberTest_testRounded(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_rounded", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.212), "_rounded", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.51), "_rounded", []), "__eq", [(4)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testSqrt",
smalltalk.method({
selector: "testSqrt",
fn: function NumberTest_testSqrt(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((4), "_sqrt", []), "__eq", [(2)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((16), "_sqrt", []), "__eq", [(4)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testSquared",
smalltalk.method({
selector: "testSquared",
fn: function NumberTest_testSquared(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((4), "_squared", []), "__eq", [(16)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTimesRepeat",
smalltalk.method({
selector: "testTimesRepeat",
fn: function NumberTest_testTimesRepeat(){
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
"_testTo",
smalltalk.method({
selector: "testTo",
fn: function NumberTest_testTo(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((1), "_to_", [(5)]), [(1), (2), (3), (4), (5)]]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testToBy",
smalltalk.method({
selector: "testToBy",
fn: function NumberTest_testToBy(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((0), "_to_by_", [(6), (2)]), [(0), (2), (4), (6)]]);
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send((1), "_to_by_", [(4), (0)]);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTruncated",
smalltalk.method({
selector: "testTruncated",
fn: function NumberTest_testTruncated(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_truncated", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.212), "_truncated", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.51), "_truncated", []), "__eq", [(3)])]);
return self;}
}),
smalltalk.NumberTest);



smalltalk.addClass('ObjectMock', smalltalk.Object, ['foo', 'bar'], 'Kernel-Tests');
smalltalk.addMethod(
"_foo",
smalltalk.method({
selector: "foo",
fn: function ObjectMock_foo(){
var self=this;
return self['@foo'];
return self;}
}),
smalltalk.ObjectMock);

smalltalk.addMethod(
"_foo_",
smalltalk.method({
selector: "foo:",
fn: function ObjectMock_foo_(anObject){
var self=this;
(self['@foo']=anObject);
return self;}
}),
smalltalk.ObjectMock);



smalltalk.addClass('ObjectTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testBasicAccess",
smalltalk.method({
selector: "testBasicAccess",
fn: function ObjectTest_testBasicAccess(){
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
"_testBasicPerform",
smalltalk.method({
selector: "testBasicPerform",
fn: function ObjectTest_testBasicPerform(){
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
"_testDNU",
smalltalk.method({
selector: "testDNU",
fn: function ObjectTest_testDNU(){
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_new", []), "_foo", []);}), (smalltalk.MessageNotUnderstood || MessageNotUnderstood)]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function ObjectTest_testEquality(){
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
"_testHalt",
smalltalk.method({
selector: "testHalt",
fn: function ObjectTest_testHalt(){
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_new", []), "_halt", []);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function ObjectTest_testIdentity(){
var self=this;
var o=nil;
(o=smalltalk.send((smalltalk.Object || Object), "_new", []));
smalltalk.send(self, "_deny_", [smalltalk.send(o, "__eq_eq", [smalltalk.send((smalltalk.Object || Object), "_new", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq_eq", [o])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o, "_yourself", []), "__eq_eq", [o])]);
smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq_eq", [smalltalk.send(o, "_yourself", [])])]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testIfNil",
smalltalk.method({
selector: "testIfNil",
fn: function ObjectTest_testIfNil(){
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
"_testInstVars",
smalltalk.method({
selector: "testInstVars",
fn: function ObjectTest_testInstVars(){
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
"_testNilUndefined",
smalltalk.method({
selector: "testNilUndefined",
fn: function ObjectTest_testNilUndefined(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(nil, "__eq", [(typeof undefined == 'undefined' ? nil : undefined)])]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testYourself",
smalltalk.method({
selector: "testYourself",
fn: function ObjectTest_testYourself(){
var self=this;
var o=nil;
(o=smalltalk.send((smalltalk.ObjectMock || ObjectMock), "_new", []));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o, "_yourself", []), "__eq_eq", [o])]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testidentityHash",
smalltalk.method({
selector: "testidentityHash",
fn: function ObjectTest_testidentityHash(){
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
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function PackageTest_setUp(){
var self=this;
(self['@backUpCommitPathJs']=smalltalk.send((smalltalk.Package || Package), "_defaultCommitPathJs", []));
(self['@backUpCommitPathSt']=smalltalk.send((smalltalk.Package || Package), "_defaultCommitPathSt", []));
smalltalk.send((smalltalk.Package || Package), "_resetCommitPaths", []);
(self['@zorkPackage']=smalltalk.send(smalltalk.send((smalltalk.Package || Package), "_new", []), "_name_", ["Zork"]));
(self['@grulPackage']=(function($rec){smalltalk.send($rec, "_name_", ["Grul"]);smalltalk.send($rec, "_commitPathJs_", ["server/grul/js"]);smalltalk.send($rec, "_commitPathSt_", ["grul/st"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Package || Package), "_new", [])));
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function PackageTest_tearDown(){
var self=this;
(function($rec){smalltalk.send($rec, "_defaultCommitPathJs_", [self['@backUpCommitPathJs']]);return smalltalk.send($rec, "_defaultCommitPathSt_", [self['@backUpCommitPathSt']]);})((smalltalk.Package || Package));
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testGrulCommitPathJsShouldBeServerGrulJs",
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
fn: function PackageTest_testGrulCommitPathJsShouldBeServerGrulJs(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["server/grul/js", smalltalk.send(self['@grulPackage'], "_commitPathJs", [])]);
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testGrulCommitPathStShouldBeGrulSt",
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
fn: function PackageTest_testGrulCommitPathStShouldBeGrulSt(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["grul/st", smalltalk.send(self['@grulPackage'], "_commitPathSt", [])]);
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testZorkCommitPathJsShouldBeJs",
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJs",
fn: function PackageTest_testZorkCommitPathJsShouldBeJs(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["js", smalltalk.send(self['@zorkPackage'], "_commitPathJs", [])]);
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testZorkCommitPathStShouldBeSt",
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSt",
fn: function PackageTest_testZorkCommitPathStShouldBeSt(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["st", smalltalk.send(self['@zorkPackage'], "_commitPathSt", [])]);
return self;}
}),
smalltalk.PackageTest);



smalltalk.addClass('PackageWithDefaultCommitPathChangedTest', smalltalk.PackageTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function PackageWithDefaultCommitPathChangedTest_setUp(){
var self=this;
smalltalk.send(self, "_setUp", [], smalltalk.PackageWithDefaultCommitPathChangedTest.superclass || nil);
(function($rec){smalltalk.send($rec, "_defaultCommitPathJs_", ["javascripts/"]);return smalltalk.send($rec, "_defaultCommitPathSt_", ["smalltalk/"]);})((smalltalk.Package || Package));
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testGrulCommitPathJsShouldBeServerGrulJs",
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
fn: function PackageWithDefaultCommitPathChangedTest_testGrulCommitPathJsShouldBeServerGrulJs(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["server/grul/js", smalltalk.send(self['@grulPackage'], "_commitPathJs", [])]);
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testGrulCommitPathStShouldBeGrulSt",
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
fn: function PackageWithDefaultCommitPathChangedTest_testGrulCommitPathStShouldBeGrulSt(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["grul/st", smalltalk.send(self['@grulPackage'], "_commitPathSt", [])]);
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testZorkCommitPathJsShouldBeJavascript",
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJavascript",
fn: function PackageWithDefaultCommitPathChangedTest_testZorkCommitPathJsShouldBeJavascript(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["javascripts/", smalltalk.send(self['@zorkPackage'], "_commitPathJs", [])]);
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testZorkCommitPathStShouldBeSmalltalk",
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSmalltalk",
fn: function PackageWithDefaultCommitPathChangedTest_testZorkCommitPathStShouldBeSmalltalk(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["smalltalk/", smalltalk.send(self['@zorkPackage'], "_commitPathSt", [])]);
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);


smalltalk.addMethod(
"_shouldInheritSelectors",
smalltalk.method({
selector: "shouldInheritSelectors",
fn: function PackageWithDefaultCommitPathChangedTest_class_shouldInheritSelectors(){
var self=this;
return false;
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest.klass);


smalltalk.addClass('PointTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAccessing",
smalltalk.method({
selector: "testAccessing",
fn: function PointTest_testAccessing(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send((smalltalk.Point || Point), "_x_y_", [(3), (4)]), "_x", []), (3)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send((smalltalk.Point || Point), "_x_y_", [(3), (4)]), "_y", []), (4)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Point || Point), "_new", []), "_x_", [(3)]), "_x", []), (3)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Point || Point), "_new", []), "_y_", [(4)]), "_y", []), (4)]);
return self;}
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testArithmetic",
smalltalk.method({
selector: "testArithmetic",
fn: function PointTest_testArithmetic(){
var self=this;
smalltalk.send(self, "_assert_equals_", [((($receiver = smalltalk.send((3), "__at", [(4)])).klass === smalltalk.Number) ? $receiver *smalltalk.send((3), "__at", [(4)]) : smalltalk.send($receiver, "__star", [smalltalk.send((3), "__at", [(4)])])), smalltalk.send((smalltalk.Point || Point), "_x_y_", [(9), (16)])]);
smalltalk.send(self, "_assert_equals_", [((($receiver = smalltalk.send((3), "__at", [(4)])).klass === smalltalk.Number) ? $receiver +smalltalk.send((3), "__at", [(4)]) : smalltalk.send($receiver, "__plus", [smalltalk.send((3), "__at", [(4)])])), smalltalk.send((smalltalk.Point || Point), "_x_y_", [(6), (8)])]);
smalltalk.send(self, "_assert_equals_", [((($receiver = smalltalk.send((3), "__at", [(4)])).klass === smalltalk.Number) ? $receiver -smalltalk.send((3), "__at", [(4)]) : smalltalk.send($receiver, "__minus", [smalltalk.send((3), "__at", [(4)])])), smalltalk.send((smalltalk.Point || Point), "_x_y_", [(0), (0)])]);
smalltalk.send(self, "_assert_equals_", [((($receiver = smalltalk.send((6), "__at", [(8)])).klass === smalltalk.Number) ? $receiver /smalltalk.send((3), "__at", [(4)]) : smalltalk.send($receiver, "__slash", [smalltalk.send((3), "__at", [(4)])])), smalltalk.send((smalltalk.Point || Point), "_x_y_", [(2), (2)])]);
return self;}
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function PointTest_testAt(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((3), "__at", [(4)]), smalltalk.send((smalltalk.Point || Point), "_x_y_", [(3), (4)])]);
return self;}
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testEgality",
smalltalk.method({
selector: "testEgality",
fn: function PointTest_testEgality(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "__at", [(4)]), "__eq", [smalltalk.send((3), "__at", [(4)])])]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send((3), "__at", [(5)]), "__eq", [smalltalk.send((3), "__at", [(6)])])]);
return self;}
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testTranslateBy",
smalltalk.method({
selector: "testTranslateBy",
fn: function PointTest_testTranslateBy(){
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
"_textNext",
smalltalk.method({
selector: "textNext",
fn: function RandomTest_textNext(){
var self=this;
smalltalk.send((10000), "_timesRepeat_", [(function(){var current=nil;
var next=nil;
(next=smalltalk.send(smalltalk.send((smalltalk.Random || Random), "_new", []), "_next", []));smalltalk.send(self, "_assert_", [((($receiver = next).klass === smalltalk.Number) ? $receiver >=(0) : smalltalk.send($receiver, "__gt_eq", [(0)]))]);smalltalk.send(self, "_assert_", [((($receiver = next).klass === smalltalk.Number) ? $receiver <(1) : smalltalk.send($receiver, "__lt", [(1)]))]);smalltalk.send(self, "_deny_", [smalltalk.send(current, "__eq", [next])]);return smalltalk.send(next, "__eq", [current]);})]);
return self;}
}),
smalltalk.RandomTest);



smalltalk.addClass('SetTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAddRemove",
smalltalk.method({
selector: "testAddRemove",
fn: function SetTest_testAddRemove(){
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
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function SetTest_testAt(){
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.Set || Set), "_new", []), "_at_put_", [(1), (2)]);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function SetTest_testSize(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send((smalltalk.Set || Set), "_new", []), "_size", []), (0)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send((smalltalk.Set || Set), "_withAll_", [[(1), (2), (3), (4)]]), "_size", []), (4)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send((smalltalk.Set || Set), "_withAll_", [[(1), (1), (1), (1)]]), "_size", []), (1)]);
return self;}
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testUnicity",
smalltalk.method({
selector: "testUnicity",
fn: function SetTest_testUnicity(){
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
"_testAddRemove",
smalltalk.method({
selector: "testAddRemove",
fn: function StringTest_testAddRemove(){
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send("hello", "_add_", ["a"]);}), (smalltalk.Error || Error)]);
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send("hello", "_remove_", ["h"]);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAsArray",
smalltalk.method({
selector: "testAsArray",
fn: function StringTest_testAsArray(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_asArray", []), "__eq", [["h", "e", "l", "l", "o"]])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function StringTest_testAt(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_", [(1)]), "__eq", ["h"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_", [(5)]), "__eq", ["o"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_ifAbsent_", [(6), (function(){return nil;})]), "__eq", [nil])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAtPut",
smalltalk.method({
selector: "testAtPut",
fn: function StringTest_testAtPut(){
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send("hello", "_at_put_", [(1), "a"]);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testCopyWithoutAll",
smalltalk.method({
selector: "testCopyWithoutAll",
fn: function StringTest_testCopyWithoutAll(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send("*hello* *world*", "_copyWithoutAll_", ["*"])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function StringTest_testEquality(){
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
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function StringTest_testIdentity(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq_eq", ["hello"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("hello", "__eq_eq", ["world"])]);
smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq_eq", [smalltalk.send("hello", "_yourself", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_yourself", []), "__eq_eq", ["hello"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq_eq", [(0)])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testIncludesSubString",
smalltalk.method({
selector: "testIncludesSubString",
fn: function StringTest_testIncludesSubString(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send("amber", "_includesSubString_", ["ber"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("amber", "_includesSubString_", ["zork"])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testJoin",
smalltalk.method({
selector: "testJoin",
fn: function StringTest_testJoin(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["hello,world", smalltalk.send(",", "_join_", [["hello", "world"]])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function StringTest_testSize(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send("smalltalk", "_size", []), (9)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send("", "_size", []), (0)]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testStreamContents",
smalltalk.method({
selector: "testStreamContents",
fn: function StringTest_testStreamContents(){
var self=this;
smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", ["hello"]);smalltalk.send($rec, "_space", []);return smalltalk.send($rec, "_nextPutAll_", ["world"]);})(aStream);})])]);
return self;}
}),
smalltalk.StringTest);



smalltalk.addClass('SymbolTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAsString",
smalltalk.method({
selector: "testAsString",
fn: function SymbolTest_testAsString(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.symbolFor("hello"), "_asString", []), "hello"]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAsSymbol",
smalltalk.method({
selector: "testAsSymbol",
fn: function SymbolTest_testAsSymbol(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq_eq", [smalltalk.send(smalltalk.symbolFor("hello"), "_asSymbol", [])])]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function SymbolTest_testAt(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_at_", [(1)]), "__eq", ["h"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_at_", [(5)]), "__eq", ["o"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_at_ifAbsent_", [(6), (function(){return nil;})]), "__eq", [nil])]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAtPut",
smalltalk.method({
selector: "testAtPut",
fn: function SymbolTest_testAtPut(){
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send("hello", "_at_put_", [(1), "a"]);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testComparing",
smalltalk.method({
selector: "testComparing",
fn: function SymbolTest_testComparing(){
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
"_testCopying",
smalltalk.method({
selector: "testCopying",
fn: function SymbolTest_testCopying(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_copy", []), "__eq_eq", [smalltalk.symbolFor("hello")])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_deepCopy", []), "__eq_eq", [smalltalk.symbolFor("hello")])]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function SymbolTest_testEquality(){
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
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function SymbolTest_testIdentity(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq_eq", [smalltalk.symbolFor("hello")])]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq_eq", [smalltalk.symbolFor("world")])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", [smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", []), "__eq", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_asString", []), "_asSymbol", [])])]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIsSymbolIsString",
smalltalk.method({
selector: "testIsSymbolIsString",
fn: function SymbolTest_testIsSymbolIsString(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "_isSymbol", [])]);
smalltalk.send(self, "_deny_", [smalltalk.send("hello", "_isSymbol", [])]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "_isString", [])]);
smalltalk.send(self, "_assert_", [smalltalk.send("hello", "_isString", [])]);
return self;}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function SymbolTest_testSize(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.symbolFor("a"), "_size", []), (1)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.symbolFor("aaaaa"), "_size", []), (5)]);
return self;}
}),
smalltalk.SymbolTest);



smalltalk.addClass('UndefinedTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
fn: function UndefinedTest_testCopying(){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(nil, "_copy", []), nil]);
return self;}
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testDeepCopy",
smalltalk.method({
selector: "testDeepCopy",
fn: function UndefinedTest_testDeepCopy(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(nil, "_deepCopy", []), "__eq", [nil])]);
return self;}
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testIfNil",
smalltalk.method({
selector: "testIfNil",
fn: function UndefinedTest_testIfNil(){
var self=this;
smalltalk.send(self, "_assert_equals_", [(($receiver = nil) == nil || $receiver == undefined) ? (function(){return true;})() : $receiver, true]);
smalltalk.send(self, "_deny_", [smalltalk.send((($receiver = nil) != nil && $receiver != undefined) ? (function(){return true;})() : nil, "__eq", [true])]);
smalltalk.send(self, "_assert_equals_", [(($receiver = nil) == nil || $receiver == undefined) ? (function(){return true;})() : (function(){return false;})(), true]);
smalltalk.send(self, "_deny_", [smalltalk.send((($receiver = nil) == nil || $receiver == undefined) ? (function(){return false;})() : (function(){return true;})(), "__eq", [true])]);
return self;}
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testIsNil",
smalltalk.method({
selector: "testIsNil",
fn: function UndefinedTest_testIsNil(){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(nil, "_isNil", [])]);
smalltalk.send(self, "_deny_", [smalltalk.send(nil, "_notNil", [])]);
return self;}
}),
smalltalk.UndefinedTest);



