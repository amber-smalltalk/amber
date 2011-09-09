smalltalk.addClass('StringTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
'_testJoin',
smalltalk.method({
selector: 'testJoin',
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("hello%2Cworld"), smalltalk.send(unescape("%2C"), "_join_", [["hello", "world"]])]);
return self;},
args: [],
source: unescape('testJoin%0A%09self%20assert%3A%20%27hello%2Cworld%27%20equals%3A%20%28%27%2C%27%20join%3A%20%23%28%27hello%27%20%27world%27%29%29'),
messageSends: ["assert:equals:", "join:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
'_testStreamContents',
smalltalk.method({
selector: 'testStreamContents',
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", ["hello"]);smalltalk.send($rec, "_space", []);return smalltalk.send($rec, "_nextPutAll_", ["world"]);})(aStream);})])]);
return self;},
args: [],
source: unescape('testStreamContents%0A%09self%20%0A%09%09assert%3A%20%27hello%20world%27%20%0A%09%09equals%3A%20%28String%20streamContents%3A%20%5B%3AaStream%7C%20aStream%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20%27hello%27%3B%20space%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20%27world%27%5D%29'),
messageSends: ["assert:equals:", "streamContents:", "nextPutAll:", "space"],
referencedClasses: [smalltalk.String]
}),
smalltalk.StringTest);

smalltalk.addMethod(
'_testIncludesSubString',
smalltalk.method({
selector: 'testIncludesSubString',
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send("jtalk", "_includesSubString_", ["alk"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("jtalk", "_includesSubString_", ["zork"])]);
return self;},
args: [],
source: unescape('testIncludesSubString%0A%09self%20assert%3A%20%28%27jtalk%27%20includesSubString%3A%20%27alk%27%29.%0A%09self%20deny%3A%20%28%27jtalk%27%20includesSubString%3A%20%27zork%27%29.'),
messageSends: ["assert:", "includesSubString:", "deny:"],
referencedClasses: []
}),
smalltalk.StringTest);



smalltalk.addClass('DictionaryTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
'_testPrintString',
smalltalk.method({
selector: 'testPrintString',
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("a%20Dictionary%28%27firstname%27%20-%3E%20%27James%27%20%2C%20%27lastname%27%20-%3E%20%27Bond%27%29"), (function($rec){smalltalk.send($rec, "_at_put_", ["firstname", "James"]);smalltalk.send($rec, "_at_put_", ["lastname", "Bond"]);return smalltalk.send($rec, "_printString", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []))]);
return self;},
args: [],
source: unescape('testPrintString%0A%09self%20%0A%09%09assert%3A%20%27a%20Dictionary%28%27%27firstname%27%27%20-%3E%20%27%27James%27%27%20%2C%20%27%27lastname%27%27%20-%3E%20%27%27Bond%27%27%29%27%20%0A%09%09equals%3A%20%28Dictionary%20new%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09at%3A%27firstname%27%20put%3A%20%27James%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09at%3A%27lastname%27%20put%3A%20%27Bond%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09printString%29'),
messageSends: ["assert:equals:", "at:put:", "printString", "new"],
referencedClasses: [smalltalk.Dictionary]
}),
smalltalk.DictionaryTest);



smalltalk.addClass('BooleanTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
'_testLogic',
smalltalk.method({
selector: 'testLogic',
category: 'not yet classified',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_&", [true])]);smalltalk.send($rec, "_deny_", [smalltalk.send(true, "_&", [false])]);smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_&", [true])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_&", [false])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_|", [true])]);smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_|", [false])]);smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_|", [true])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_|", [false])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_&", [(1) > (0)])]);smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_&", [false])]);return smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_&", [(1) > (2)])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_|", [(1) > (0)])]);smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_|", [false])]);return smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_|", [(1) > (2)])]);})(self);
return self;},
args: [],
source: unescape('testLogic%0A%0A%09%22Trivial%20logic%20table%22%0A%09self%20assert%3A%20%28true%20%26%20true%29%3B%20deny%3A%20%28true%20%26%20false%29%3B%20deny%3A%20%28false%20%26%20true%29%3B%20deny%3A%20%28false%20%26%20false%29.%0A%09self%20assert%3A%20%28true%20%7C%20true%29%3B%20assert%3A%20%28true%20%7C%20false%29%3B%20assert%3A%20%28false%20%7C%20true%29%3B%20deny%3A%20%28false%20%7C%20false%29.%0A%20%20%20%20%20%20%20%20%22Checking%20that%20expressions%20work%20fine%20too%22%0A%09self%20assert%3A%20%28true%20%26%20%281%20%3E%200%29%29%3B%20deny%3A%20%28%281%20%3E%200%29%20%26%20false%29%3B%20deny%3A%20%28%281%20%3E%200%29%20%26%20%281%20%3E%202%29%29.%0A%20%20%20%20%20%20%20%20self%20assert%3A%20%28false%20%7C%20%281%20%3E%200%29%29%3B%20assert%3A%20%28%281%20%3E%200%29%20%7C%20false%29%3B%20assert%3A%20%28%281%20%3E%200%29%20%7C%20%281%20%3E%202%29%29'),
messageSends: ["assert:", unescape("%26"), "deny:", unescape("%7C"), unescape("%3E")],
referencedClasses: []
}),
smalltalk.BooleanTest);



smalltalk.addClass('NumberTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
'_testPrintShowingDecimalPlaces',
smalltalk.method({
selector: 'testPrintShowingDecimalPlaces',
category: 'not yet classified',
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
return self;},
args: [],
source: unescape('testPrintShowingDecimalPlaces%0A%09self%20assert%3A%20%2723.00%27%20equals%3A%20%2823%20printShowingDecimalPlaces%3A%202%29.%0A%09self%20assert%3A%20%2723.57%27%20equals%3A%20%2823.5698%20printShowingDecimalPlaces%3A%202%29.%0A%09self%20assert%3A%20%27-234.56700%27%20equals%3A%28%20234.567%20negated%20printShowingDecimalPlaces%3A%205%29.%0A%09self%20assert%3A%20%2723%27%20equals%3A%20%2823.4567%20printShowingDecimalPlaces%3A%200%29.%0A%09self%20assert%3A%20%2724%27%20equals%3A%20%2823.5567%20printShowingDecimalPlaces%3A%200%29.%0A%09self%20assert%3A%20%27-23%27%20equals%3A%20%2823.4567%20negated%20printShowingDecimalPlaces%3A%200%29.%0A%09self%20assert%3A%20%27-24%27%20equals%3A%20%2823.5567%20negated%20printShowingDecimalPlaces%3A%200%29.%0A%09self%20assert%3A%20%27100000000.0%27%20equals%3A%20%28100000000%20printShowingDecimalPlaces%3A%201%29.%0A%09self%20assert%3A%20%270.98000%27%20equals%3A%20%280.98%20printShowingDecimalPlaces%3A%205%29.%0A%09self%20assert%3A%20%27-0.98%27%20equals%3A%20%280.98%20negated%20printShowingDecimalPlaces%3A%202%29.%0A%09self%20assert%3A%20%272.57%27%20equals%3A%20%282.567%20printShowingDecimalPlaces%3A%202%29.%0A%09self%20assert%3A%20%27-2.57%27%20equals%3A%20%28-2.567%20printShowingDecimalPlaces%3A%202%29.%0A%09self%20assert%3A%20%270.00%27%20equals%3A%20%280%20printShowingDecimalPlaces%3A%202%29.'),
messageSends: ["assert:equals:", "printShowingDecimalPlaces:", "negated"],
referencedClasses: []
}),
smalltalk.NumberTest);



