smalltalk.addPackage('Kernel-Tests', {});
smalltalk.addClass('StringTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
'_testJoin',
smalltalk.method({
selector: 'testJoin',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("hello%2Cworld"), smalltalk.send(unescape("%2C"), "_join_", [["hello", "world"]])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
'_testStreamContents',
smalltalk.method({
selector: 'testStreamContents',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", ["hello"]);smalltalk.send($rec, "_space", []);return smalltalk.send($rec, "_nextPutAll_", ["world"]);})(aStream);})])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
'_testIncludesSubString',
smalltalk.method({
selector: 'testIncludesSubString',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send("amber", "_includesSubString_", ["ber"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("amber", "_includesSubString_", ["zork"])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
'_testEquality',
smalltalk.method({
selector: 'testEquality',
fn: function (){
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
'_testCopyWithoutAll',
smalltalk.method({
selector: 'testCopyWithoutAll',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send(unescape("*hello*%20*world*"), "_copyWithoutAll_", [unescape("*")])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
'_testAt',
smalltalk.method({
selector: 'testAt',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_", [(1)]), "__eq", ["h"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_", [(5)]), "__eq", ["o"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_ifAbsent_", [(6), (function(){return nil;})]), "__eq", [nil])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
'_testAtPut',
smalltalk.method({
selector: 'testAtPut',
fn: function (){
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send("hello", "_at_put_", [(1), "a"]);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.StringTest);



smalltalk.addClass('DictionaryTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
'_testPrintString',
smalltalk.method({
selector: 'testPrintString',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("a%20Dictionary%28%27firstname%27%20-%3E%20%27James%27%20%2C%20%27lastname%27%20-%3E%20%27Bond%27%29"), (function($rec){smalltalk.send($rec, "_at_put_", ["firstname", "James"]);smalltalk.send($rec, "_at_put_", ["lastname", "Bond"]);return smalltalk.send($rec, "_printString", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []))]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
'_testEquality',
smalltalk.method({
selector: 'testEquality',
fn: function (){
var self=this;
var d1=nil;
var d2=nil;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), "__eq", [smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])])]);
d1=(function($rec){smalltalk.send($rec, "_at_put_", [(1), (2)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
d2=(function($rec){smalltalk.send($rec, "_at_put_", [(1), (2)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(self, "_assert_", [smalltalk.send(d1, "__eq", [d2])]);
d2=(function($rec){smalltalk.send($rec, "_at_put_", [(1), (3)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(self, "_deny_", [smalltalk.send(d1, "__eq", [d2])]);
d2=(function($rec){smalltalk.send($rec, "_at_put_", [(2), (2)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(self, "_deny_", [smalltalk.send(d1, "__eq", [d2])]);
d2=(function($rec){smalltalk.send($rec, "_at_put_", [(1), (2)]);smalltalk.send($rec, "_at_put_", [(3), (4)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(self, "_deny_", [smalltalk.send(d1, "__eq", [d2])]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
'_testDynamicDictionaries',
smalltalk.method({
selector: 'testDynamicDictionaries',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.Dictionary._fromPairs_([smalltalk.send((1), "__minus_gt", ["hello"]),smalltalk.send((2), "__minus_gt", ["world"])]), "__eq", [smalltalk.send((smalltalk.Dictionary || Dictionary), "_with_with_", [smalltalk.send((1), "__minus_gt", ["hello"]), smalltalk.send((2), "__minus_gt", ["world"])])])]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
'_testAccessing',
smalltalk.method({
selector: 'testAccessing',
fn: function (){
var self=this;
var d=nil;
d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
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
'_testSize',
smalltalk.method({
selector: 'testSize',
fn: function (){
var self=this;
var d=nil;
d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_size", []), "__eq", [(0)])]);
smalltalk.send(d, "_at_put_", [(1), (2)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_size", []), "__eq", [(1)])]);
smalltalk.send(d, "_at_put_", [(2), (3)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_size", []), "__eq", [(2)])]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
'_testValues',
smalltalk.method({
selector: 'testValues',
fn: function (){
var self=this;
var d=nil;
d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(d, "_at_put_", [(1), (2)]);
smalltalk.send(d, "_at_put_", [(2), (3)]);
smalltalk.send(d, "_at_put_", [(3), (4)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_values", []), "__eq", [[(2), (3), (4)]])]);
return self;}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
'_testKeys',
smalltalk.method({
selector: 'testKeys',
fn: function (){
var self=this;
var d=nil;
d=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(d, "_at_put_", [(1), (2)]);
smalltalk.send(d, "_at_put_", [(2), (3)]);
smalltalk.send(d, "_at_put_", [(3), (4)]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_keys", []), "__eq", [[(1), (2), (3)]])]);
return self;}
}),
smalltalk.DictionaryTest);



smalltalk.addClass('BooleanTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
'_testLogic',
smalltalk.method({
selector: 'testLogic',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_&", [true])]);smalltalk.send($rec, "_deny_", [smalltalk.send(true, "_&", [false])]);smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_&", [true])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_&", [false])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_|", [true])]);smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_|", [false])]);smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_|", [true])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_|", [false])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_&", [(1) > (0)])]);smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_&", [false])]);return smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_&", [(1) > (2)])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_|", [(1) > (0)])]);smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_|", [false])]);return smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_|", [(1) > (2)])]);})(self);
return self;}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
'_testEquality',
smalltalk.method({
selector: 'testEquality',
fn: function (){
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
'_testLogicKeywords',
smalltalk.method({
selector: 'testLogicKeywords',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_and_", [(function(){return true;})])]);smalltalk.send($rec, "_deny_", [smalltalk.send(true, "_and_", [(function(){return false;})])]);smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_and_", [(function(){return true;})])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_and_", [(function(){return false;})])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_or_", [(function(){return true;})])]);smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_or_", [(function(){return false;})])]);smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_or_", [(function(){return true;})])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_or_", [(function(){return false;})])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_and_", [(function(){return (1) > (0);})])]);smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_and_", [(function(){return false;})])]);return smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_and_", [(function(){return (1) > (2);})])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_or_", [(function(){return (1) > (0);})])]);smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_or_", [(function(){return false;})])]);return smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_or_", [(function(){return (1) > (2);})])]);})(self);
return self;}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
'_testIfTrueIfFalse',
smalltalk.method({
selector: 'testIfTrueIfFalse',
fn: function (){
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
'_testIdentity',
smalltalk.method({
selector: 'testIdentity',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(true, "__eq_eq", [true])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq_eq", [true])]);
smalltalk.send(self, "_assert_", [smalltalk.send(true, "__eq_eq", [smalltalk.send(true, "_yourself", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq_eq", [smalltalk.send(true, "_yourself", [])])]);
smalltalk.send(self, "_deny_", [smalltalk.send(true, "__eq_eq", [false])]);
return self;}
}),
smalltalk.BooleanTest);



smalltalk.addClass('NumberTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
'_testPrintShowingDecimalPlaces',
smalltalk.method({
selector: 'testPrintShowingDecimalPlaces',
fn: function (){
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
'_testEquality',
smalltalk.method({
selector: 'testEquality',
fn: function (){
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
'_testArithmetic',
smalltalk.method({
selector: 'testArithmetic',
fn: function (){
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
'_testRounded',
smalltalk.method({
selector: 'testRounded',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_rounded", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.212), "_rounded", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.51), "_rounded", []), "__eq", [(4)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
'_testNegated',
smalltalk.method({
selector: 'testNegated',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_negated", []), "__eq", [(-3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((-3), "_negated", []), "__eq", [(3)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
'_testComparison',
smalltalk.method({
selector: 'testComparison',
fn: function (){
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
'_testTruncated',
smalltalk.method({
selector: 'testTruncated',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_truncated", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.212), "_truncated", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.51), "_truncated", []), "__eq", [(3)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
'_testCopying',
smalltalk.method({
selector: 'testCopying',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_copy", []), "__eq_eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_deepCopy", []), "__eq_eq", [(1)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
'_testMinMax',
smalltalk.method({
selector: 'testMinMax',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((2), "_max_", [(5)]), (5)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((2), "_min_", [(5)]), (2)]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
'_testIdentity',
smalltalk.method({
selector: 'testIdentity',
fn: function (){
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
'_testSqrt',
smalltalk.method({
selector: 'testSqrt',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((4), "_sqrt", []), "__eq", [(2)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((16), "_sqrt", []), "__eq", [(4)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
'_testSquared',
smalltalk.method({
selector: 'testSquared',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((4), "_squared", []), "__eq", [(16)])]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
'_testTimesRepeat',
smalltalk.method({
selector: 'testTimesRepeat',
fn: function (){
var self=this;
var i=nil;
i=(0);
smalltalk.send((0), "_timesRepeat_", [(function(){return i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]);
smalltalk.send(self, "_assert_equals_", [i, (0)]);
smalltalk.send((5), "_timesRepeat_", [(function(){return i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]);
smalltalk.send(self, "_assert_equals_", [i, (5)]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
'_testTo',
smalltalk.method({
selector: 'testTo',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((1), "_to_", [(5)]), [(1), (2), (3), (4), (5)]]);
return self;}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
'_testToBy',
smalltalk.method({
selector: 'testToBy',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((0), "_to_by_", [(6), (2)]), [(0), (2), (4), (6)]]);
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send((1), "_to_by_", [(4), (0)]);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.NumberTest);



smalltalk.addClass('JSObjectProxyTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
'_testMethodWithArguments',
smalltalk.method({
selector: 'testMethodWithArguments',
fn: function (){
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
'_testYourself',
smalltalk.method({
selector: 'testYourself',
fn: function (){
var self=this;
var body=nil;
body=(function($rec){smalltalk.send($rec, "_addClass_", ["amber"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send("body", "_asJQuery", []));
smalltalk.send(self, "_assert_", [smalltalk.send(body, "_hasClass_", ["amber"])]);
smalltalk.send(body, "_removeClass_", ["amber"]);
smalltalk.send(self, "_deny_", [smalltalk.send(body, "_hasClass_", ["amber"])]);
return self;}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
'_testPropertyThatReturnsEmptyString',
smalltalk.method({
selector: 'testPropertyThatReturnsEmptyString',
fn: function (){
var self=this;
document.location.hash = '';
smalltalk.send(self, "_assert_equals_", ["", smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash", [])]);
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash_", ["test"]);
smalltalk.send(self, "_assert_equals_", [unescape("%23test"), smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash", [])]);
return self;}
}),
smalltalk.JSObjectProxyTest);



smalltalk.addClass('PackageTest', smalltalk.TestCase, ['zorkPackage', 'grulPackage', 'backUpCommitPathJs', 'backUpCommitPathSt'], 'Kernel-Tests');
smalltalk.addMethod(
'_setUp',
smalltalk.method({
selector: 'setUp',
fn: function (){
var self=this;
self['@backUpCommitPathJs']=smalltalk.send((smalltalk.Package || Package), "_defaultCommitPathJs", []);
self['@backUpCommitPathSt']=smalltalk.send((smalltalk.Package || Package), "_defaultCommitPathSt", []);
smalltalk.send((smalltalk.Package || Package), "_resetCommitPaths", []);
self['@zorkPackage']=smalltalk.send(smalltalk.send((smalltalk.Package || Package), "_new", []), "_name_", ["Zork"]);
self['@grulPackage']=(function($rec){smalltalk.send($rec, "_name_", ["Grul"]);smalltalk.send($rec, "_commitPathJs_", [unescape("server/grul/js")]);smalltalk.send($rec, "_commitPathSt_", [unescape("grul/st")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Package || Package), "_new", []));
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
'_tearDown',
smalltalk.method({
selector: 'tearDown',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_defaultCommitPathJs_", [self['@backUpCommitPathJs']]);return smalltalk.send($rec, "_defaultCommitPathSt_", [self['@backUpCommitPathSt']]);})((smalltalk.Package || Package));
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
'_testGrulCommitPathStShouldBeGrulSt',
smalltalk.method({
selector: 'testGrulCommitPathStShouldBeGrulSt',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("grul/st"), smalltalk.send(self['@grulPackage'], "_commitPathSt", [])]);
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
'_testZorkCommitPathStShouldBeSt',
smalltalk.method({
selector: 'testZorkCommitPathStShouldBeSt',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["st", smalltalk.send(self['@zorkPackage'], "_commitPathSt", [])]);
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
'_testZorkCommitPathJsShouldBeJs',
smalltalk.method({
selector: 'testZorkCommitPathJsShouldBeJs',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["js", smalltalk.send(self['@zorkPackage'], "_commitPathJs", [])]);
return self;}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
'_testGrulCommitPathJsShouldBeServerGrulJs',
smalltalk.method({
selector: 'testGrulCommitPathJsShouldBeServerGrulJs',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("server/grul/js"), smalltalk.send(self['@grulPackage'], "_commitPathJs", [])]);
return self;}
}),
smalltalk.PackageTest);



smalltalk.addClass('PackageWithDefaultCommitPathChangedTest', smalltalk.PackageTest, [], 'Kernel-Tests');
smalltalk.addMethod(
'_setUp',
smalltalk.method({
selector: 'setUp',
fn: function (){
var self=this;
smalltalk.send(self, "_setUp", [], smalltalk.PackageTest);
(function($rec){smalltalk.send($rec, "_defaultCommitPathJs_", [unescape("javascripts/")]);return smalltalk.send($rec, "_defaultCommitPathSt_", [unescape("smalltalk/")]);})((smalltalk.Package || Package));
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
'_testGrulCommitPathJsShouldBeServerGrulJs',
smalltalk.method({
selector: 'testGrulCommitPathJsShouldBeServerGrulJs',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("server/grul/js"), smalltalk.send(self['@grulPackage'], "_commitPathJs", [])]);
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
'_testGrulCommitPathStShouldBeGrulSt',
smalltalk.method({
selector: 'testGrulCommitPathStShouldBeGrulSt',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("grul/st"), smalltalk.send(self['@grulPackage'], "_commitPathSt", [])]);
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
'_testZorkCommitPathJsShouldBeJavascript',
smalltalk.method({
selector: 'testZorkCommitPathJsShouldBeJavascript',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("javascripts/"), smalltalk.send(self['@zorkPackage'], "_commitPathJs", [])]);
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
'_testZorkCommitPathStShouldBeSmalltalk',
smalltalk.method({
selector: 'testZorkCommitPathStShouldBeSmalltalk',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("smalltalk/"), smalltalk.send(self['@zorkPackage'], "_commitPathSt", [])]);
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);


smalltalk.addMethod(
'_shouldInheritSelectors',
smalltalk.method({
selector: 'shouldInheritSelectors',
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest.klass);


smalltalk.addClass('BlockClosureTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
'_testValue',
smalltalk.method({
selector: 'testValue',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return (1) + (1);}), "_value", []), (2)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(x){return ((($receiver = x).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));}), "_value_", [(2)]), (3)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(x, y){return ((($receiver = x).klass === smalltalk.Number) ? $receiver *y : smalltalk.send($receiver, "__star", [y]));}), "_value_value_", [(2), (4)]), (8)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a, b, c){return (1);}), "_value", []), (1)]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
'_testOnDo',
smalltalk.method({
selector: 'testOnDo',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((function(){return smalltalk.send(smalltalk.send((smalltalk.Error || Error), "_new", []), "_signal", []);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return true;})])]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
'_testEnsure',
smalltalk.method({
selector: 'testEnsure',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((function(){return smalltalk.send((smalltalk.Error || Error), "_new", []);}), "_ensure_", [(function(){return true;})])]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
'_testNumArgs',
smalltalk.method({
selector: 'testNumArgs',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return nil;}), "_numArgs", []), (0)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a, b){return nil;}), "_numArgs", []), (2)]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
'_testValueWithPossibleArguments',
smalltalk.method({
selector: 'testValueWithPossibleArguments',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return (1);}), "_valueWithPossibleArguments_", [[(3), (4)]]), (1)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a){return ((($receiver = a).klass === smalltalk.Number) ? $receiver +(4) : smalltalk.send($receiver, "__plus", [(4)]));}), "_valueWithPossibleArguments_", [[(3), (4)]]), (7)]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(a, b){return ((($receiver = a).klass === smalltalk.Number) ? $receiver +b : smalltalk.send($receiver, "__plus", [b]));}), "_valueWithPossibleArguments_", [[(3), (4), (5)]]), (7)]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
'_testWhileTrue',
smalltalk.method({
selector: 'testWhileTrue',
fn: function (){
var self=this;
var i=nil;
i=(0);
(function(){while((function(){return ((($receiver = i).klass === smalltalk.Number) ? $receiver <(5) : smalltalk.send($receiver, "__lt", [(5)]));})()) {(function(){return i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()}})();
smalltalk.send(self, "_assert_equals_", [i, (5)]);
i=(0);
(function(){while((function(){i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return ((($receiver = i).klass === smalltalk.Number) ? $receiver <(5) : smalltalk.send($receiver, "__lt", [(5)]));})()) {}})();
smalltalk.send(self, "_assert_equals_", [i, (5)]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
'_testWhileFalse',
smalltalk.method({
selector: 'testWhileFalse',
fn: function (){
var self=this;
var i=nil;
i=(0);
(function(){while(!(function(){return ((($receiver = i).klass === smalltalk.Number) ? $receiver >(5) : smalltalk.send($receiver, "__gt", [(5)]));})()) {(function(){return i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()}})();
smalltalk.send(self, "_assert_equals_", [i, (6)]);
i=(0);
(function(){while(!(function(){i=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return ((($receiver = i).klass === smalltalk.Number) ? $receiver >(5) : smalltalk.send($receiver, "__gt", [(5)]));})()) {}})();
smalltalk.send(self, "_assert_equals_", [i, (6)]);
return self;}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
'_testCompiledSource',
smalltalk.method({
selector: 'testCompiledSource',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send((function(){return (1) + (1);}), "_compiledSource", []), unescape("function%20%28%29%7Breturn%20%281%29%20+%20%281%29%3B%7D")]);
return self;}
}),
smalltalk.BlockClosureTest);



smalltalk.addClass('ObjectTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
'_testEquality',
smalltalk.method({
selector: 'testEquality',
fn: function (){
var self=this;
var o=nil;
o=smalltalk.send((smalltalk.Object || Object), "_new", []);
smalltalk.send(self, "_deny_", [smalltalk.send(o, "__eq", [smalltalk.send((smalltalk.Object || Object), "_new", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq", [o])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o, "_yourself", []), "__eq", [o])]);
smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq", [smalltalk.send(o, "_yourself", [])])]);
return self;}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
'_testIdentity',
smalltalk.method({
selector: 'testIdentity',
fn: function (){
var self=this;
var o=nil;
o=smalltalk.send((smalltalk.Object || Object), "_new", []);
smalltalk.send(self, "_deny_", [smalltalk.send(o, "__eq_eq", [smalltalk.send((smalltalk.Object || Object), "_new", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq_eq", [o])]);
return self;}
}),
smalltalk.ObjectTest);



