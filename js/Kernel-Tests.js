smalltalk.addPackage('Kernel-Tests', {});
smalltalk.addClass('StringTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testJoin'),
smalltalk.method({
selector: unescape('testJoin'),
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
unescape('_testStreamContents'),
smalltalk.method({
selector: unescape('testStreamContents'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", ["hello"]);smalltalk.send($rec, "_space", []);return smalltalk.send($rec, "_nextPutAll_", ["world"]);})(aStream);})])]);
return self;},
args: [],
source: unescape('testStreamContents%0A%09self%20%0A%09%09assert%3A%20%27hello%20world%27%20%0A%09%09equals%3A%20%28String%20streamContents%3A%20%5B%3AaStream%7C%20aStream%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20%27hello%27%3B%20space%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20%27world%27%5D%29'),
messageSends: ["assert:equals:", "streamContents:", "nextPutAll:", "space"],
referencedClasses: ["String"]
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testIncludesSubString'),
smalltalk.method({
selector: unescape('testIncludesSubString'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send("amber", "_includesSubString_", ["ber"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("amber", "_includesSubString_", ["zork"])]);
return self;},
args: [],
source: unescape('testIncludesSubString%0A%09self%20assert%3A%20%28%27amber%27%20includesSubString%3A%20%27ber%27%29.%0A%09self%20deny%3A%20%28%27amber%27%20includesSubString%3A%20%27zork%27%29.'),
messageSends: ["assert:", "includesSubString:", "deny:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq", ["hello"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("hello", "__eq", ["world"])]);
smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq", [smalltalk.send("hello", "_yourself", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_yourself", []), "__eq", ["hello"])]);
smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq", [(0)])]);
return self;},
args: [],
source: unescape('testEquality%0A%09self%20assert%3A%20%27hello%27%20%3D%20%27hello%27.%0A%09self%20deny%3A%20%27hello%27%20%3D%20%27world%27.%0A%0A%09self%20assert%3A%20%27hello%27%20%20%3D%20%27hello%27%20yourself.%0A%09self%20assert%3A%20%27hello%27%20yourself%20%3D%20%27hello%27.%0A%0A%09%22test%20JS%20falsy%20value%22%0A%09self%20deny%3A%20%27%27%20%3D%200'),
messageSends: ["assert:", unescape("%3D"), "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
unescape('_testCopyWithoutAll'),
smalltalk.method({
selector: unescape('testCopyWithoutAll'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send(unescape("*hello*%20*world*"), "_copyWithoutAll_", [unescape("*")])]);
return self;},
args: [],
source: unescape('testCopyWithoutAll%0A%09self%20%0A%09%09assert%3A%20%27hello%20world%27%20%0A%09%09equals%3A%20%28%27*hello*%20*world*%27%20copyWithoutAll%3A%20%27*%27%29'),
messageSends: ["assert:equals:", "copyWithoutAll:"],
referencedClasses: []
}),
smalltalk.StringTest);



smalltalk.addClass('DictionaryTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testPrintString'),
smalltalk.method({
selector: unescape('testPrintString'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("a%20Dictionary%28%27firstname%27%20-%3E%20%27James%27%20%2C%20%27lastname%27%20-%3E%20%27Bond%27%29"), (function($rec){smalltalk.send($rec, "_at_put_", ["firstname", "James"]);smalltalk.send($rec, "_at_put_", ["lastname", "Bond"]);return smalltalk.send($rec, "_printString", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []))]);
return self;},
args: [],
source: unescape('testPrintString%0A%09self%0A%09%09assert%3A%20%27a%20Dictionary%28%27%27firstname%27%27%20-%3E%20%27%27James%27%27%20%2C%20%27%27lastname%27%27%20-%3E%20%27%27Bond%27%27%29%27%20%0A%09%09equals%3A%20%28Dictionary%20new%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09at%3A%27firstname%27%20put%3A%20%27James%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09at%3A%27lastname%27%20put%3A%20%27Bond%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09printString%29'),
messageSends: ["assert:equals:", "at:put:", "printString", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
category: 'tests',
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
return self;},
args: [],
source: unescape('testEquality%0A%09%7C%20d1%20d2%20%7C%0A%0A%09self%20assert%3A%20Dictionary%20new%20%3D%20Dictionary%20new.%0A%09%09%0A%09d1%20%3A%3D%20Dictionary%20new%20at%3A%201%20put%3A%202%3B%20yourself.%0A%09d2%20%3A%3D%20Dictionary%20new%20at%3A%201%20put%3A%202%3B%20yourself.%0A%09self%20assert%3A%20d1%20%3D%20d2.%0A%0A%09d2%20%3A%3D%20Dictionary%20new%20at%3A%201%20put%3A%203%3B%20yourself.%0A%09self%20deny%3A%20d1%20%3D%20d2.%0A%0A%09d2%20%3A%3D%20Dictionary%20new%20at%3A%202%20put%3A%202%3B%20yourself.%0A%09self%20deny%3A%20d1%20%3D%20d2.%0A%0A%09d2%20%3A%3D%20Dictionary%20new%20at%3A%201%20put%3A%202%3B%20at%3A%203%20put%3A%204%3B%20yourself.%0A%09self%20deny%3A%20d1%20%3D%20d2.'),
messageSends: ["assert:", unescape("%3D"), "new", "at:put:", "yourself", "deny:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
unescape('_testDynamicDictionaries'),
smalltalk.method({
selector: unescape('testDynamicDictionaries'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.Dictionary._fromPairs_([smalltalk.send((1), "__minus_gt", ["hello"]),smalltalk.send((2), "__minus_gt", ["world"])]), "__eq", [smalltalk.send((smalltalk.Dictionary || Dictionary), "_with_with_", [smalltalk.send((1), "__minus_gt", ["hello"]), smalltalk.send((2), "__minus_gt", ["world"])])])]);
return self;},
args: [],
source: unescape('testDynamicDictionaries%0A%09self%20assert%3A%20%23%7B1%20-%3E%20%27hello%27.%202%20-%3E%20%27world%27%7D%20%3D%20%28Dictionary%20with%3A%201%20-%3E%20%27hello%27%20with%3A%202%20-%3E%20%27world%27%29'),
messageSends: ["assert:", unescape("%3D"), unescape("-%3E"), "with:with:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);



smalltalk.addClass('BooleanTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testLogic'),
smalltalk.method({
selector: unescape('testLogic'),
category: 'not yet classified',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_&", [true])]);smalltalk.send($rec, "_deny_", [smalltalk.send(true, "_&", [false])]);smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_&", [true])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_&", [false])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_|", [true])]);smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_|", [false])]);smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_|", [true])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_|", [false])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_&", [(1) > (0)])]);smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_&", [false])]);return smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_&", [(1) > (2)])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_|", [(1) > (0)])]);smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_|", [false])]);return smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_|", [(1) > (2)])]);})(self);
return self;},
args: [],
source: unescape('testLogic%0A%20%0A%09%22Trivial%20logic%20table%22%0A%09self%20assert%3A%20%28true%20%26%20true%29%3B%20deny%3A%20%28true%20%26%20false%29%3B%20deny%3A%20%28false%20%26%20true%29%3B%20deny%3A%20%28false%20%26%20false%29.%0A%09self%20assert%3A%20%28true%20%7C%20true%29%3B%20assert%3A%20%28true%20%7C%20false%29%3B%20assert%3A%20%28false%20%7C%20true%29%3B%20deny%3A%20%28false%20%7C%20false%29.%0A%20%20%20%20%20%20%20%20%22Checking%20that%20expressions%20work%20fine%20too%22%0A%09self%20assert%3A%20%28true%20%26%20%281%20%3E%200%29%29%3B%20deny%3A%20%28%281%20%3E%200%29%20%26%20false%29%3B%20deny%3A%20%28%281%20%3E%200%29%20%26%20%281%20%3E%202%29%29.%0A%20%20%20%20%20%20%20%20self%20assert%3A%20%28false%20%7C%20%281%20%3E%200%29%29%3B%20assert%3A%20%28%281%20%3E%200%29%20%7C%20false%29%3B%20assert%3A%20%28%281%20%3E%200%29%20%7C%20%281%20%3E%202%29%29'),
messageSends: ["assert:", unescape("%26"), "deny:", unescape("%7C"), unescape("%3E")],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
category: 'not yet classified',
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
return self;},
args: [],
source: unescape('testEquality%0A%09%22We%27re%20on%20top%20of%20JS...just%20be%20sure%20to%20check%20the%20basics%21%22%0A%0A%09self%20deny%3A%200%20%3D%20false.%20%0A%09self%20deny%3A%20false%20%3D%200.%0A%09self%20deny%3A%20%27%27%20%3D%20false.%0A%09self%20deny%3A%20false%20%3D%20%27%27.%0A%0A%09self%20assert%3A%20true%20%3D%20true.%0A%09self%20deny%3A%20false%20%3D%20true.%0A%09self%20deny%3A%20true%20%3D%20false.%0A%09self%20assert%3A%20false%20%3D%20false.%0A%0A%09%22JS%20may%20do%20some%20type%20coercing%20after%20sending%20a%20message%22%0A%09self%20assert%3A%20true%20yourself%20%3D%20true.%0A%09self%20assert%3A%20true%20yourself%20%3D%20true%20yourself'),
messageSends: ["deny:", unescape("%3D"), "assert:", "yourself"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
unescape('_testLogicKeywords'),
smalltalk.method({
selector: unescape('testLogicKeywords'),
category: 'not yet classified',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_and_", [(function(){return true;})])]);smalltalk.send($rec, "_deny_", [smalltalk.send(true, "_and_", [(function(){return false;})])]);smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_and_", [(function(){return true;})])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_and_", [(function(){return false;})])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_or_", [(function(){return true;})])]);smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_or_", [(function(){return false;})])]);smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_or_", [(function(){return true;})])]);return smalltalk.send($rec, "_deny_", [smalltalk.send(false, "_or_", [(function(){return false;})])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(true, "_and_", [(function(){return (1) > (0);})])]);smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_and_", [(function(){return false;})])]);return smalltalk.send($rec, "_deny_", [smalltalk.send((1) > (0), "_and_", [(function(){return (1) > (2);})])]);})(self);
(function($rec){smalltalk.send($rec, "_assert_", [smalltalk.send(false, "_or_", [(function(){return (1) > (0);})])]);smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_or_", [(function(){return false;})])]);return smalltalk.send($rec, "_assert_", [smalltalk.send((1) > (0), "_or_", [(function(){return (1) > (2);})])]);})(self);
return self;},
args: [],
source: unescape('testLogicKeywords%0A%20%0A%09%22Trivial%20logic%20table%22%0A%09self%20%0A%09%09assert%3A%20%28true%20and%3A%20%5B%20true%5D%29%3B%20%0A%09%09deny%3A%20%28true%20and%3A%20%5B%20false%20%5D%29%3B%20%0A%09%09deny%3A%20%28false%20and%3A%20%5B%20true%20%5D%29%3B%20%0A%09%09deny%3A%20%28false%20and%3A%20%5B%20false%20%5D%29.%0A%09self%20%0A%09%09assert%3A%20%28true%20or%3A%20%5B%20true%20%5D%29%3B%20%0A%09%09assert%3A%20%28true%20or%3A%20%5B%20false%20%5D%29%3B%20%0A%09%09assert%3A%20%28false%20or%3A%20%5B%20true%20%5D%29%3B%20%0A%09%09deny%3A%20%28false%20or%3A%20%5B%20false%20%5D%29.%0A%20%20%20%20%20%20%20%20%0A%09%22Checking%20that%20expressions%20work%20fine%20too%22%0A%09self%20%0A%09%09assert%3A%20%28true%20and%3A%20%5B%201%20%3E%200%20%5D%29%3B%20%0A%09%09deny%3A%20%28%281%20%3E%200%29%20and%3A%20%5B%20false%20%5D%29%3B%20%0A%09%09deny%3A%20%28%281%20%3E%200%29%20and%3A%20%5B%201%20%3E%202%20%5D%29.%0A%20%20%20%20%20%20%20%20self%20%0A%09%09assert%3A%20%28false%20or%3A%20%5B%201%20%3E%200%20%5D%29%3B%20%0A%09%09assert%3A%20%28%281%20%3E%200%29%20or%3A%20%5B%20false%20%5D%29%3B%20%0A%09%09assert%3A%20%28%281%20%3E%200%29%20or%3A%20%5B%201%20%3E%202%20%5D%29'),
messageSends: ["assert:", "and:", "deny:", "or:", unescape("%3E")],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
unescape('_testIfTrueIfFalse'),
smalltalk.method({
selector: unescape('testIfTrueIfFalse'),
category: 'not yet classified',
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
return self;},
args: [],
source: unescape('testIfTrueIfFalse%0A%20%0A%09self%20assert%3A%20%28true%20ifTrue%3A%20%5B%27alternative%20block%27%5D%29%20%3D%20%27alternative%20block%27.%0A%09self%20assert%3A%20%28true%20ifFalse%3A%20%5B%27alternative%20block%27%5D%29%20%3D%20nil.%0A%0A%09self%20assert%3A%20%28false%20ifTrue%3A%20%5B%27alternative%20block%27%5D%29%20%3D%20nil.%0A%09self%20assert%3A%20%28false%20ifFalse%3A%20%5B%27alternative%20block%27%5D%29%20%3D%20%27alternative%20block%27.%0A%0A%09self%20assert%3A%20%28false%20ifTrue%3A%20%5B%27alternative%20block%27%5D%20ifFalse%3A%20%5B%27alternative%20block2%27%5D%29%20%3D%20%27alternative%20block2%27.%0A%09self%20assert%3A%20%28false%20ifFalse%3A%20%5B%27alternative%20block%27%5D%20ifTrue%3A%20%5B%27alternative%20block2%27%5D%29%20%3D%20%27alternative%20block%27.%0A%0A%09self%20assert%3A%20%28true%20ifTrue%3A%20%5B%27alternative%20block%27%5D%20ifFalse%3A%20%5B%27alternative%20block2%27%5D%29%20%3D%20%27alternative%20block%27.%0A%09self%20assert%3A%20%28true%20ifFalse%3A%20%5B%27alternative%20block%27%5D%20ifTrue%3A%20%5B%27alternative%20block2%27%5D%29%20%3D%20%27alternative%20block2%27.'),
messageSends: ["assert:", unescape("%3D"), "ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"],
referencedClasses: []
}),
smalltalk.BooleanTest);



smalltalk.addClass('NumberTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testPrintShowingDecimalPlaces'),
smalltalk.method({
selector: unescape('testPrintShowingDecimalPlaces'),
category: 'tests',
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

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
category: 'tests',
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
return self;},
args: [],
source: unescape('testEquality%0A%09self%20assert%3A%201%20%3D%201.%0A%09self%20assert%3A%200%20%3D%200.%0A%09self%20deny%3A%201%20%3D%200.%0A%0A%09self%20assert%3A%201%20yourself%20%3D%201.%0A%09self%20assert%3A%201%20%3D%201%20yourself.%0A%09self%20assert%3A%201%20yourself%20%3D%201%20yourself.%0A%09%0A%09self%20deny%3A%200%20%3D%20false.%0A%09self%20deny%3A%20false%20%3D%200.%0A%09self%20deny%3A%20%27%27%20%3D%200.%0A%09self%20deny%3A%200%20%3D%20%27%27'),
messageSends: ["assert:", unescape("%3D"), "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testArithmetic'),
smalltalk.method({
selector: unescape('testArithmetic'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((1.5) + (1), "__eq", [(2.5)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((2) - (1), "__eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((-2) - (1), "__eq", [(-3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((12) / (2), "__eq", [(6)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((3) * (4), "__eq", [(12)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(((($receiver = (1) + (2)).klass === smalltalk.Number) ? $receiver *(3) : smalltalk.send($receiver, "__star", [(3)])), "__eq", [(9)])]);
smalltalk.send(self, "_assert_", [smalltalk.send((1) + (2) * (3), "__eq", [(7)])]);
return self;},
args: [],
source: unescape('testArithmetic%0A%09%0A%09%22We%20rely%20on%20JS%20here%2C%20so%20we%20won%27t%20test%20complex%20behavior%2C%20just%20check%20if%20%0A%09message%20sends%20are%20corrects%22%0A%0A%09self%20assert%3A%201.5%20+%201%20%3D%202.5.%0A%09self%20assert%3A%202%20-%201%20%3D%201.%0A%09self%20assert%3A%20-2%20-%201%20%3D%20-3.%0A%09self%20assert%3A%2012%20/%202%20%3D%206.%0A%09self%20assert%3A%203%20*%204%20%3D%2012.%0A%0A%09%22Simple%20parenthesis%20and%20execution%20order%22%0A%0A%09self%20assert%3A%201%20+%202%20*%203%20%3D%209.%0A%09self%20assert%3A%201%20+%20%282%20*%203%29%20%3D%207'),
messageSends: ["assert:", unescape("%3D"), unescape("+"), unescape("-"), unescape("/"), unescape("*")],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testRounded'),
smalltalk.method({
selector: unescape('testRounded'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_rounded", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.212), "_rounded", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.51), "_rounded", []), "__eq", [(4)])]);
return self;},
args: [],
source: unescape('testRounded%0A%09%0A%09self%20assert%3A%203%20rounded%20%3D%203.%0A%09self%20assert%3A%203.212%20rounded%20%3D%203.%0A%09self%20assert%3A%203.51%20rounded%20%3D%204'),
messageSends: ["assert:", unescape("%3D"), "rounded"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testNegated'),
smalltalk.method({
selector: unescape('testNegated'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_negated", []), "__eq", [(-3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((-3), "_negated", []), "__eq", [(3)])]);
return self;},
args: [],
source: unescape('testNegated%0A%09self%20assert%3A%203%20negated%20%3D%20-3.%0A%09self%20assert%3A%20-3%20negated%20%3D%203'),
messageSends: ["assert:", unescape("%3D"), "negated"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testComparison'),
smalltalk.method({
selector: unescape('testComparison'),
category: 'tests',
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
return self;},
args: [],
source: unescape('testComparison%0A%0A%09self%20assert%3A%203%20%3E%202.%0A%09self%20assert%3A%202%20%3C%203.%0A%09%0A%09self%20deny%3A%203%20%3C%202.%0A%09self%20deny%3A%202%20%3E%203.%0A%0A%09self%20assert%3A%203%20%3E%3D%203.%0A%09self%20assert%3A%203.1%20%3E%3D%203.%0A%09self%20assert%3A%203%20%3C%3D%203.%0A%09self%20assert%3A%203%20%3C%3D%203.1'),
messageSends: ["assert:", unescape("%3E"), unescape("%3C"), "deny:", unescape("%3E%3D"), unescape("%3C%3D")],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testTruncated'),
smalltalk.method({
selector: unescape('testTruncated'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3), "_truncated", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.212), "_truncated", []), "__eq", [(3)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((3.51), "_truncated", []), "__eq", [(3)])]);
return self;},
args: [],
source: unescape('testTruncated%0A%09%0A%09self%20assert%3A%203%20truncated%20%3D%203.%0A%09self%20assert%3A%203.212%20truncated%20%3D%203.%0A%09self%20assert%3A%203.51%20truncated%20%3D%203'),
messageSends: ["assert:", unescape("%3D"), "truncated"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
unescape('_testCopying'),
smalltalk.method({
selector: unescape('testCopying'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_copy", []), "__eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((1), "_deepCopy", []), "__eq", [(1)])]);
return self;},
args: [],
source: unescape('testCopying%0A%09self%20assert%3A%201%20copy%20%3D%201.%0A%09self%20assert%3A%201%20deepCopy%20%3D%201'),
messageSends: ["assert:", unescape("%3D"), "copy", "deepCopy"],
referencedClasses: []
}),
smalltalk.NumberTest);



smalltalk.addClass('JSObjectProxyTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
unescape('_testMethodWithArguments'),
smalltalk.method({
selector: unescape('testMethodWithArguments'),
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_hasClass_", ["amber"])]);
smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["amber"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_hasClass_", ["amber"])]);
smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["amber"]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_hasClass_", ["amber"])]);
return self;},
args: [],
source: unescape('testMethodWithArguments%0A%09self%20deny%3A%20%28%27body%27%20asJQuery%20hasClass%3A%20%27amber%27%29.%0A%0A%09%27body%27%20asJQuery%20addClass%3A%20%27amber%27.%0A%09self%20assert%3A%20%28%27body%27%20asJQuery%20hasClass%3A%20%27amber%27%29.%0A%0A%09%27body%27%20asJQuery%20removeClass%3A%20%27amber%27.%0A%09self%20deny%3A%20%28%27body%27%20asJQuery%20hasClass%3A%20%27amber%27%29.'),
messageSends: ["deny:", "hasClass:", "asJQuery", "addClass:", "assert:", "removeClass:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
unescape('_testYourself'),
smalltalk.method({
selector: unescape('testYourself'),
category: 'tests',
fn: function (){
var self=this;
var body=nil;
body=(function($rec){smalltalk.send($rec, "_addClass_", ["amber"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send("body", "_asJQuery", []));
smalltalk.send(self, "_assert_", [smalltalk.send(body, "_hasClass_", ["amber"])]);
smalltalk.send(body, "_removeClass_", ["amber"]);
smalltalk.send(self, "_deny_", [smalltalk.send(body, "_hasClass_", ["amber"])]);
return self;},
args: [],
source: unescape('testYourself%0A%09%7Cbody%7C%0A%09body%20%3A%3D%20%27body%27%20asJQuery%0A%09%09%09%09addClass%3A%20%27amber%27%3B%0A%09%09%09%09yourself.%0A%0A%09self%20assert%3A%20%28body%20hasClass%3A%20%27amber%27%29.%0A%0A%09body%20removeClass%3A%20%27amber%27.%0A%09self%20deny%3A%20%28body%20hasClass%3A%20%27amber%27%29.'),
messageSends: ["addClass:", "yourself", "asJQuery", "assert:", "hasClass:", "removeClass:", "deny:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
unescape('_testPropertyThatReturnsEmptyString'),
smalltalk.method({
selector: unescape('testPropertyThatReturnsEmptyString'),
category: 'tests',
fn: function (){
var self=this;
document.location.hash = '';
smalltalk.send(self, "_assert_equals_", ["", smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash", [])]);
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash_", ["test"]);
smalltalk.send(self, "_assert_equals_", [unescape("%23test"), smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash", [])]);
return self;},
args: [],
source: unescape('testPropertyThatReturnsEmptyString%0A%09%3Cdocument.location.hash%20%3D%20%27%27%3E.%0A%09self%20assert%3A%20%27%27%20equals%3A%20document%20location%20hash.%0A%0A%09document%20location%20hash%3A%20%27test%27.%0A%09self%20assert%3A%20%27%23test%27%20equals%3A%20document%20location%20hash.'),
messageSends: ["assert:equals:", "hash", "location", "hash:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);



