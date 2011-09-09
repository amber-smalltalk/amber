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
smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send(smalltalk.String, "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", ["hello"]);smalltalk.send($rec, "_space", []);return smalltalk.send($rec, "_nextPutAll_", ["world"]);})(aStream);})])]);
return self;}
}),
smalltalk.StringTest);

smalltalk.addMethod(
'_testIncludesSubString',
smalltalk.method({
selector: 'testIncludesSubString',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send("jtalk", "_includesSubString_", ["alk"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("jtalk", "_includesSubString_", ["zork"])]);
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
smalltalk.send(self, "_assert_equals_", [unescape("a%20Dictionary%28%27firstname%27%20-%3E%20%27James%27%20%2C%20%27lastname%27%20-%3E%20%27Bond%27%29"), (function($rec){smalltalk.send($rec, "_at_put_", ["firstname", "James"]);smalltalk.send($rec, "_at_put_", ["lastname", "Bond"]);return smalltalk.send($rec, "_printString", []);})(smalltalk.send(smalltalk.Dictionary, "_new", []))]);
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



