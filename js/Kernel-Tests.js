smalltalk.addPackage('Kernel-Tests', {});
smalltalk.addClass('BlockClosureTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCompiledSource",
smalltalk.method({
selector: "testCompiledSource",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(function () {return smalltalk.send(1, "__plus", [1]);}, "_compiledSource", []), "_includesSubString_", ["function"])]);
    return self;
},
args: [],
source: "testCompiledSource\x0a\x09self assert: ([1+1] compiledSource includesSubString: 'function')",
messageSends: ["assert:", "includesSubString:", "compiledSource", "+"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testEnsure",
smalltalk.method({
selector: "testEnsure",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(function () {return smalltalk.send(smalltalk.Error || Error, "_new", []);}, "_ensure_", [function () {return true;}])]);
    return self;
},
args: [],
source: "testEnsure\x0a\x09self assert: ([Error new] ensure: [true])",
messageSends: ["assert:", "ensure:", "new"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testNumArgs",
smalltalk.method({
selector: "testNumArgs",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function () {}, "_numArgs", []), 0]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function (a, b) {}, "_numArgs", []), 2]);
    return self;
},
args: [],
source: "testNumArgs\x0a\x09self assert: [] numArgs equals: 0.\x0a\x09self assert: [:a :b | ] numArgs equals: 2",
messageSends: ["assert:equals:", "numArgs"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testOnDo",
smalltalk.method({
selector: "testOnDo",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(function () {return smalltalk.send(smalltalk.send(smalltalk.Error || Error, "_new", []), "_signal", []);}, "_on_do_", [smalltalk.Error || Error, function (ex) {return true;}])]);
    return self;
},
args: [],
source: "testOnDo\x0a\x09self assert: ([Error new signal] on: Error do: [:ex | true])",
messageSends: ["assert:", "on:do:", "signal", "new"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testValue",
smalltalk.method({
selector: "testValue",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function () {return smalltalk.send(1, "__plus", [1]);}, "_value", []), 2]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function (x) {return smalltalk.send(x, "__plus", [1]);}, "_value_", [2]), 3]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function (x, y) {return smalltalk.send(x, "__star", [y]);}, "_value_value_", [2, 4]), 8]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function (a, b, c) {return 1;}, "_value", []), 1]);
    return self;
},
args: [],
source: "testValue\x0a\x09self assert: ([1+1] value) equals: 2.\x0a\x09self assert: ([:x | x +1] value: 2) equals: 3.\x0a\x09self assert: ([:x :y | x*y] value: 2 value: 4) equals: 8. \x0a\x0a\x09\x22Arguments are optional in Amber. This isn't ANSI compliant.\x22\x0a\x0a\x09self assert: ([:a :b :c | 1] value) equals: 1",
messageSends: ["assert:equals:", "value", "+", "value:", "value:value:", "*"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testValueWithPossibleArguments",
smalltalk.method({
selector: "testValueWithPossibleArguments",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function () {return 1;}, "_valueWithPossibleArguments_", [[3, 4]]), 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function (a) {return smalltalk.send(a, "__plus", [4]);}, "_valueWithPossibleArguments_", [[3, 4]]), 7]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function (a, b) {return smalltalk.send(a, "__plus", [b]);}, "_valueWithPossibleArguments_", [[3, 4, 5]]), 7]);
    return self;
},
args: [],
source: "testValueWithPossibleArguments\x0a\x09self assert: ([1] valueWithPossibleArguments: #(3 4)) equals: 1.\x0a\x09self assert: ([:a | a + 4] valueWithPossibleArguments: #(3 4)) equals: 7.\x0a\x09self assert: ([:a :b | a + b] valueWithPossibleArguments: #(3 4 5)) equals: 7.",
messageSends: ["assert:equals:", "valueWithPossibleArguments:", "+"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testWhileFalse",
smalltalk.method({
selector: "testWhileFalse",
category: 'tests',
fn: function () {
    var self = this;
    var i;
    i = 0;
    smalltalk.send(function () {return smalltalk.send(i, "__gt", [5]);}, "_whileFalse_", [function () {i = smalltalk.send(i, "__plus", [1]);return i;}]);
    smalltalk.send(self, "_assert_equals_", [i, 6]);
    i = 0;
    smalltalk.send(function () {i = smalltalk.send(i, "__plus", [1]);i;return smalltalk.send(i, "__gt", [5]);}, "_whileFalse", []);
    smalltalk.send(self, "_assert_equals_", [i, 6]);
    return self;
},
args: [],
source: "testWhileFalse\x0a\x09| i |\x0a\x09i := 0.\x0a\x09[i > 5] whileFalse: [i := i + 1].\x0a\x09self assert: i equals: 6.\x0a\x0a\x09i := 0.\x0a\x09[i := i + 1. i > 5] whileFalse.\x0a\x09self assert: i equals: 6",
messageSends: ["whileFalse:", "+", ">", "assert:equals:", "whileFalse"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testWhileTrue",
smalltalk.method({
selector: "testWhileTrue",
category: 'tests',
fn: function () {
    var self = this;
    var i;
    i = 0;
    smalltalk.send(function () {return smalltalk.send(i, "__lt", [5]);}, "_whileTrue_", [function () {i = smalltalk.send(i, "__plus", [1]);return i;}]);
    smalltalk.send(self, "_assert_equals_", [i, 5]);
    i = 0;
    smalltalk.send(function () {i = smalltalk.send(i, "__plus", [1]);i;return smalltalk.send(i, "__lt", [5]);}, "_whileTrue", []);
    smalltalk.send(self, "_assert_equals_", [i, 5]);
    return self;
},
args: [],
source: "testWhileTrue\x0a\x09| i |\x0a\x09i := 0.\x0a\x09[i < 5] whileTrue: [i := i + 1].\x0a\x09self assert: i equals: 5.\x0a\x0a\x09i := 0.\x0a\x09[i := i + 1. i < 5] whileTrue.\x0a\x09self assert: i equals: 5",
messageSends: ["whileTrue:", "+", "<", "assert:equals:", "whileTrue"],
referencedClasses: []
}),
smalltalk.BlockClosureTest);



smalltalk.addClass('BooleanTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_deny_", [smalltalk.send(0, "__eq", [false])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq", [0])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq", [false])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq", [""])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(true, "__eq", [true])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq", [true])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(true, "__eq", [false])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(false, "__eq", [false])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq", [true])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq", [smalltalk.send(true, "_yourself", [])])]);
    return self;
},
args: [],
source: "testEquality\x0a\x09\x22We're on top of JS...just be sure to check the basics!\x22\x0a\x0a\x09self deny: 0 = false. \x0a\x09self deny: false = 0.\x0a\x09self deny: '' = false.\x0a\x09self deny: false = ''.\x0a\x0a\x09self assert: true = true.\x0a\x09self deny: false = true.\x0a\x09self deny: true = false.\x0a\x09self assert: false = false.\x0a\x0a\x09\x22JS may do some type coercing after sending a message\x22\x0a\x09self assert: true yourself = true.\x0a\x09self assert: true yourself = true yourself",
messageSends: ["deny:", "=", "assert:", "yourself"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_deny_", [smalltalk.send(0, "__eq_eq", [false])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq_eq", [0])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq_eq", [false])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq_eq", [""])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(true, "__eq_eq", [true])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq_eq", [true])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(true, "__eq_eq", [false])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(false, "__eq_eq", [false])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq_eq", [true])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(true, "_yourself", []), "__eq_eq", [smalltalk.send(true, "_yourself", [])])]);
    return self;
},
args: [],
source: "testIdentity\x0a\x09\x22We're on top of JS...just be sure to check the basics!\x22\x0a\x0a\x09self deny: 0 == false. \x0a\x09self deny: false == 0.\x0a\x09self deny: '' == false.\x0a\x09self deny: false == ''.\x0a\x0a\x09self assert: true == true.\x0a\x09self deny: false == true.\x0a\x09self deny: true == false.\x0a\x09self assert: false == false.\x0a\x0a\x09\x22JS may do some type coercing after sending a message\x22\x0a\x09self assert: true yourself == true.\x0a\x09self assert: true yourself == true yourself",
messageSends: ["deny:", "==", "assert:", "yourself"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testIfTrueIfFalse",
smalltalk.method({
selector: "testIfTrueIfFalse",
category: 'tests',
fn: function () {
    var self = this;
    var $1, $2, $3, $4, $5, $6, $7, $8;
    if (smalltalk.assert(true)) {
        $1 = "alternative block";
    }
    smalltalk.send(self, "_assert_", [smalltalk.send($1, "__eq", ["alternative block"])]);
    if (!smalltalk.assert(true)) {
        $2 = "alternative block";
    }
    smalltalk.send(self, "_assert_", [smalltalk.send($2, "__eq", [nil])]);
    if (smalltalk.assert(false)) {
        $3 = "alternative block";
    }
    smalltalk.send(self, "_assert_", [smalltalk.send($3, "__eq", [nil])]);
    if (!smalltalk.assert(false)) {
        $4 = "alternative block";
    }
    smalltalk.send(self, "_assert_", [smalltalk.send($4, "__eq", ["alternative block"])]);
    if (smalltalk.assert(false)) {
        $5 = "alternative block";
    } else {
        $5 = "alternative block2";
    }
    smalltalk.send(self, "_assert_", [smalltalk.send($5, "__eq", ["alternative block2"])]);
    if (smalltalk.assert(false)) {
        $6 = "alternative block2";
    } else {
        $6 = "alternative block";
    }
    smalltalk.send(self, "_assert_", [smalltalk.send($6, "__eq", ["alternative block"])]);
    if (smalltalk.assert(true)) {
        $7 = "alternative block";
    } else {
        $7 = "alternative block2";
    }
    smalltalk.send(self, "_assert_", [smalltalk.send($7, "__eq", ["alternative block"])]);
    if (smalltalk.assert(true)) {
        $8 = "alternative block2";
    } else {
        $8 = "alternative block";
    }
    smalltalk.send(self, "_assert_", [smalltalk.send($8, "__eq", ["alternative block2"])]);
    return self;
},
args: [],
source: "testIfTrueIfFalse\x0a \x0a\x09self assert: (true ifTrue: ['alternative block']) = 'alternative block'.\x0a\x09self assert: (true ifFalse: ['alternative block']) = nil.\x0a\x0a\x09self assert: (false ifTrue: ['alternative block']) = nil.\x0a\x09self assert: (false ifFalse: ['alternative block']) = 'alternative block'.\x0a\x0a\x09self assert: (false ifTrue: ['alternative block'] ifFalse: ['alternative block2']) = 'alternative block2'.\x0a\x09self assert: (false ifFalse: ['alternative block'] ifTrue: ['alternative block2']) = 'alternative block'.\x0a\x0a\x09self assert: (true ifTrue: ['alternative block'] ifFalse: ['alternative block2']) = 'alternative block'.\x0a\x09self assert: (true ifFalse: ['alternative block'] ifTrue: ['alternative block2']) = 'alternative block2'.",
messageSends: ["assert:", "=", "ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testLogic",
smalltalk.method({
selector: "testLogic",
category: 'tests',
fn: function () {
    var self = this;
    var $1, $2, $3, $4;
    smalltalk.send(self, "_assert_", [smalltalk.send(true, "_&", [true])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(true, "_&", [false])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(false, "_&", [true])]);
    $1 = smalltalk.send(self, "_deny_", [smalltalk.send(false, "_&", [false])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(true, "_|", [true])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(true, "_|", [false])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(false, "_|", [true])]);
    $2 = smalltalk.send(self, "_deny_", [smalltalk.send(false, "_|", [false])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(true, "_&", [smalltalk.send(1, "__gt", [0])])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(1, "__gt", [0]), "_&", [false])]);
    $3 = smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(1, "__gt", [0]), "_&", [smalltalk.send(1, "__gt", [2])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(false, "_|", [smalltalk.send(1, "__gt", [0])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1, "__gt", [0]), "_|", [false])]);
    $4 = smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1, "__gt", [0]), "_|", [smalltalk.send(1, "__gt", [2])])]);
    return self;
},
args: [],
source: "testLogic\x0a \x0a\x09\x22Trivial logic table\x22\x0a\x09self assert: (true & true); deny: (true & false); deny: (false & true); deny: (false & false).\x0a\x09self assert: (true | true); assert: (true | false); assert: (false | true); deny: (false | false).\x0a        \x22Checking that expressions work fine too\x22\x0a\x09self assert: (true & (1 > 0)); deny: ((1 > 0) & false); deny: ((1 > 0) & (1 > 2)).\x0a        self assert: (false | (1 > 0)); assert: ((1 > 0) | false); assert: ((1 > 0) | (1 > 2))",
messageSends: ["assert:", "&", "deny:", "|", ">"],
referencedClasses: []
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testLogicKeywords",
smalltalk.method({
selector: "testLogicKeywords",
category: 'tests',
fn: function () {
    var self = this;
    var $1, $2, $3, $4;
    smalltalk.send(self, "_assert_", [smalltalk.send(true, "_and_", [function () {return true;}])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(true, "_and_", [function () {return false;}])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(false, "_and_", [function () {return true;}])]);
    $1 = smalltalk.send(self, "_deny_", [smalltalk.send(false, "_and_", [function () {return false;}])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(true, "_or_", [function () {return true;}])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(true, "_or_", [function () {return false;}])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(false, "_or_", [function () {return true;}])]);
    $2 = smalltalk.send(self, "_deny_", [smalltalk.send(false, "_or_", [function () {return false;}])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(true, "_and_", [function () {return smalltalk.send(1, "__gt", [0]);}])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(1, "__gt", [0]), "_and_", [function () {return false;}])]);
    $3 = smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(1, "__gt", [0]), "_and_", [function () {return smalltalk.send(1, "__gt", [2]);}])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(false, "_or_", [function () {return smalltalk.send(1, "__gt", [0]);}])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1, "__gt", [0]), "_or_", [function () {return false;}])]);
    $4 = smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1, "__gt", [0]), "_or_", [function () {return smalltalk.send(1, "__gt", [2]);}])]);
    return self;
},
args: [],
source: "testLogicKeywords\x0a \x0a\x09\x22Trivial logic table\x22\x0a\x09self \x0a\x09\x09assert: (true and: [ true]); \x0a\x09\x09deny: (true and: [ false ]); \x0a\x09\x09deny: (false and: [ true ]); \x0a\x09\x09deny: (false and: [ false ]).\x0a\x09self \x0a\x09\x09assert: (true or: [ true ]); \x0a\x09\x09assert: (true or: [ false ]); \x0a\x09\x09assert: (false or: [ true ]); \x0a\x09\x09deny: (false or: [ false ]).\x0a        \x0a\x09\x22Checking that expressions work fine too\x22\x0a\x09self \x0a\x09\x09assert: (true and: [ 1 > 0 ]); \x0a\x09\x09deny: ((1 > 0) and: [ false ]); \x0a\x09\x09deny: ((1 > 0) and: [ 1 > 2 ]).\x0a        self \x0a\x09\x09assert: (false or: [ 1 > 0 ]); \x0a\x09\x09assert: ((1 > 0) or: [ false ]); \x0a\x09\x09assert: ((1 > 0) or: [ 1 > 2 ])",
messageSends: ["assert:", "and:", "deny:", "or:", ">"],
referencedClasses: []
}),
smalltalk.BooleanTest);



smalltalk.addClass('ClassBuilderTest', smalltalk.TestCase, ['builder', 'theClass'], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
    var self = this;
    self['@builder'] = smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []);
    return self;
},
args: [],
source: "setUp\x0a\x09builder := ClassBuilder new",
messageSends: ["new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'running',
fn: function () {
    var self = this;
    if (($receiver = self['@theClass']) == nil || $receiver == undefined) {
        self['@theClass'];
    } else {
        smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_removeClass_", [self['@theClass']]);
        self['@theClass'] = nil;
        self['@theClass'];
    }
    return self;
},
args: [],
source: "tearDown\x0a\x09theClass ifNotNil: [Smalltalk current removeClass: theClass. theClass := nil]",
messageSends: ["ifNotNil:", "removeClass:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testClassCopy",
smalltalk.method({
selector: "testClassCopy",
category: 'running',
fn: function () {
    var self = this;
    self['@theClass'] = smalltalk.send(self['@builder'], "_copyClass_named_", [smalltalk.ObjectMock || ObjectMock, "ObjectMock2"]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@theClass'], "_superclass", []), "__eq_eq", [smalltalk.send(smalltalk.ObjectMock || ObjectMock, "_superclass", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@theClass'], "_instanceVariableNames", []), "__eq_eq", [smalltalk.send(smalltalk.ObjectMock || ObjectMock, "_instanceVariableNames", [])])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@theClass'], "_name", []), "ObjectMock2"]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@theClass'], "_package", []), "__eq_eq", [smalltalk.send(smalltalk.ObjectMock || ObjectMock, "_package", [])])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self['@theClass'], "_methodDictionary", []), "_keys", []), smalltalk.send(smalltalk.send(smalltalk.ObjectMock || ObjectMock, "_methodDictionary", []), "_keys", [])]);
    return self;
},
args: [],
source: "testClassCopy\x0a\x09theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09self assert: theClass superclass == ObjectMock superclass.\x0a\x09self assert: theClass instanceVariableNames == ObjectMock instanceVariableNames.\x0a\x09self assert: theClass name equals: 'ObjectMock2'.\x0a\x09self assert: theClass package == ObjectMock package.\x0a\x09self assert: theClass methodDictionary keys equals: ObjectMock methodDictionary keys",
messageSends: ["copyClass:named:", "assert:", "==", "superclass", "instanceVariableNames", "assert:equals:", "name", "package", "keys", "methodDictionary"],
referencedClasses: ["ObjectMock"]
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testInstanceVariableNames",
smalltalk.method({
selector: "testInstanceVariableNames",
category: 'running',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@builder'], "_instanceVariableNamesFor_", ["  hello   world   "]), ["hello", "world"]]);
    return self;
},
args: [],
source: "testInstanceVariableNames\x0a\x09self assert: (builder instanceVariableNamesFor: '  hello   world   ') equals: #('hello' 'world')",
messageSends: ["assert:equals:", "instanceVariableNamesFor:"],
referencedClasses: []
}),
smalltalk.ClassBuilderTest);



smalltalk.addClass('CollectionTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_assertSameContents_as_",
smalltalk.method({
selector: "assertSameContents:as:",
category: 'convenience',
fn: function (aCollection, anotherCollection) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(aCollection, "_size", []), "__eq", [smalltalk.send(anotherCollection, "_size", [])])]);
    smalltalk.send(aCollection, "_do_", [function (each) {return smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(aCollection, "_occurrencesOf_", [each]), "__eq", [smalltalk.send(anotherCollection, "_occurrencesOf_", [each])])]);}]);
    return self;
},
args: ["aCollection", "anotherCollection"],
source: "assertSameContents: aCollection \x09as: anotherCollection\x0a\x09self assert: aCollection size = anotherCollection size.\x0a\x09aCollection do: [ :each |\x0a\x09\x09self assert: (aCollection occurrencesOf: each) = (anotherCollection occurrencesOf: each) ]",
messageSends: ["assert:", "=", "size", "do:", "occurrencesOf:"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_collectionClass", []), "_withAll_", [smalltalk.send(self, "_defaultValues", [])]);
    return $1;
},
args: [],
source: "collection\x0a\x09^ self collectionClass withAll: self defaultValues",
messageSends: ["withAll:", "defaultValues", "collectionClass"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_collectionClass", []);
    return $1;
},
args: [],
source: "collectionClass\x0a\x09^ self class collectionClass",
messageSends: ["collectionClass", "class"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_collectionClass", []), "_withAll_", [["a", "b", "c", 1, 2, 1, "a"]]);
    return $1;
},
args: [],
source: "collectionWithDuplicates\x0a\x09^ self collectionClass withAll: #('a' 'b' 'c' 1 2 1 'a')",
messageSends: ["withAll:", "collectionClass"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_defaultValues",
smalltalk.method({
selector: "defaultValues",
category: 'accessing',
fn: function () {
    var self = this;
    return [1, 2, 3, -4];
},
args: [],
source: "defaultValues\x0a\x09^ #(1 2 3 -4)",
messageSends: [],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_isCollectionReadOnly",
smalltalk.method({
selector: "isCollectionReadOnly",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isCollectionReadOnly\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsArray",
smalltalk.method({
selector: "testAsArray",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(self, "_collection", []), smalltalk.send(smalltalk.send(self, "_collection", []), "_asArray", [])]);
    return self;
},
args: [],
source: "testAsArray\x0a\x09self \x0a\x09\x09assertSameContents: self collection \x0a\x09\x09as: self collection asArray",
messageSends: ["assertSameContents:as:", "collection", "asArray"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsOrderedCollection",
smalltalk.method({
selector: "testAsOrderedCollection",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(self, "_collection", []), smalltalk.send(smalltalk.send(self, "_collection", []), "_asOrderedCollection", [])]);
    return self;
},
args: [],
source: "testAsOrderedCollection\x0a\x09self \x0a\x09\x09assertSameContents: self collection \x0a\x09\x09as: self collection asOrderedCollection",
messageSends: ["assertSameContents:as:", "collection", "asOrderedCollection"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsSet",
smalltalk.method({
selector: "testAsSet",
category: 'tests',
fn: function () {
    var self = this;
    var c;
    var set;
    c = smalltalk.send(self, "_collectionWithDuplicates", []);
    set = smalltalk.send(c, "_asSet", []);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(set, "_size", []), "__eq", [5])]);
    smalltalk.send(c, "_do_", [function (each) {return smalltalk.send(self, "_assert_", [smalltalk.send(set, "_includes_", [each])]);}]);
    return self;
},
args: [],
source: "testAsSet\x0a\x09| c set |\x0a\x09c := self collectionWithDuplicates.\x0a\x09set := c asSet.\x0a\x09self assert: set size = 5.\x0a\x09c do: [ :each |\x0a\x09\x09self assert: (set includes: each) ]",
messageSends: ["collectionWithDuplicates", "asSet", "assert:", "=", "size", "do:", "includes:"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
category: 'tests',
fn: function () {
    var self = this;
    var newCollection;
    newCollection = [1, 2, 3, 4];
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_collect_", [function (each) {return smalltalk.send(each, "_abs", []);}]), newCollection]);
    return self;
},
args: [],
source: "testCollect\x0a\x09| newCollection |\x0a\x09newCollection :=  #(1 2 3 4).\x0a\x09self \x0a\x09\x09assertSameContents: (self collection collect: [ :each |\x0a\x09\x09\x09each abs ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "collect:", "abs", "collection"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_detect_", [function (each) {return smalltalk.send(each, "__lt", [0]);}]), "__eq", [-4])]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(self, "_collection", []), "_detect_", [function (each) {return smalltalk.send(each, "__eq", [6]);}]);}, smalltalk.Error || Error]);
    return self;
},
args: [],
source: "testDetect\x0a\x09self assert: (self collection detect: [ :each | each < 0 ]) = -4.\x0a\x09self \x0a\x09\x09should: [ self collection detect: [ :each | each = 6 ] ]\x0a\x09\x09raise: Error",
messageSends: ["assert:", "=", "detect:", "<", "collection", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testDo",
smalltalk.method({
selector: "testDo",
category: 'tests',
fn: function () {
    var self = this;
    var newCollection;
    newCollection = smalltalk.send(smalltalk.OrderedCollection || OrderedCollection, "_new", []);
    smalltalk.send(smalltalk.send(self, "_collection", []), "_do_", [function (each) {return smalltalk.send(newCollection, "_add_", [each]);}]);
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(self, "_collection", []), newCollection]);
    return self;
},
args: [],
source: "testDo\x0a\x09| newCollection |\x0a\x09newCollection := OrderedCollection new.\x0a\x09self collection do: [ :each |\x0a\x09\x09newCollection add: each ].\x0a\x09self \x0a\x09\x09assertSameContents: self collection \x0a\x09\x09as: newCollection",
messageSends: ["new", "do:", "add:", "collection", "assertSameContents:as:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testIsEmpty",
smalltalk.method({
selector: "testIsEmpty",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collectionClass", []), "_new", []), "_isEmpty", [])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_isEmpty", [])]);
    return self;
},
args: [],
source: "testIsEmpty\x0a\x09self assert: self collectionClass new isEmpty.\x0a\x09self deny: self collection isEmpty",
messageSends: ["assert:", "isEmpty", "new", "collectionClass", "deny:", "collection"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
category: 'tests',
fn: function () {
    var self = this;
    var newCollection;
    newCollection = [2, -4];
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_select_", [function (each) {return smalltalk.send(each, "_even", []);}]), newCollection]);
    return self;
},
args: [],
source: "testSelect\x0a\x09| newCollection |\x0a\x09newCollection := #(2 -4).\x0a\x09self \x0a\x09\x09assertSameContents: (self collection select: [ :each |\x0a\x09\x09\x09each even ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "select:", "even", "collection"],
referencedClasses: []
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_collectionClass", []), "_new", []), "_size", []), "__eq", [0])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_size", []), "__eq", [4])]);
    return self;
},
args: [],
source: "testSize\x0a\x09self assert: self collectionClass new size = 0.\x0a\x09self assert: self collection size = 4",
messageSends: ["assert:", "=", "size", "new", "collectionClass", "collection"],
referencedClasses: []
}),
smalltalk.CollectionTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
    var self = this;
    return nil;
},
args: [],
source: "collectionClass\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.CollectionTest.klass);

smalltalk.addMethod(
"_isAbstract",
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_collectionClass", []), "_isNil", []);
    return $1;
},
args: [],
source: "isAbstract\x0a\x09^ self collectionClass isNil",
messageSends: ["isNil", "collectionClass"],
referencedClasses: []
}),
smalltalk.CollectionTest.klass);


smalltalk.addClass('HashedCollectionTest', smalltalk.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.HashedCollection._fromPairs_([smalltalk.send("a", "__minus_gt", [1]), smalltalk.send("b", "__minus_gt", [2]), smalltalk.send("c", "__minus_gt", [3]), smalltalk.send("d", "__minus_gt", [-4])]);
    return $1;
},
args: [],
source: "collection\x0a\x09^ #{ 'a' -> 1. 'b' -> 2. 'c' -> 3. 'd' -> -4 }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.HashedCollection._fromPairs_([smalltalk.send("a", "__minus_gt", [1]), smalltalk.send("b", "__minus_gt", [2]), smalltalk.send("c", "__minus_gt", [3]), smalltalk.send("d", "__minus_gt", [-4]), smalltalk.send("e", "__minus_gt", [1]), smalltalk.send("f", "__minus_gt", [2]), smalltalk.send("g", "__minus_gt", [10])]);
    return $1;
},
args: [],
source: "collectionWithDuplicates\x0a\x09^ #{ 'a' -> 1. 'b' -> 2. 'c' -> 3. 'd' -> -4. 'e' -> 1. 'f' -> 2. 'g' -> 10 }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.HashedCollectionTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.HashedCollection || HashedCollection;
},
args: [],
source: "collectionClass\x0a\x09^ HashedCollection",
messageSends: [],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HashedCollectionTest.klass);


smalltalk.addClass('DictionaryTest', smalltalk.HashedCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send($2, "_at_put_", [1, 1]);
    smalltalk.send($2, "_at_put_", ["a", 2]);
    smalltalk.send($2, "_at_put_", [true, 3]);
    smalltalk.send($2, "_at_put_", [4, -4]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: [],
source: "collection\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 4 put: -4;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send($2, "_at_put_", [1, 1]);
    smalltalk.send($2, "_at_put_", ["a", 2]);
    smalltalk.send($2, "_at_put_", [true, 3]);
    smalltalk.send($2, "_at_put_", [4, -4]);
    smalltalk.send($2, "_at_put_", ["b", 1]);
    smalltalk.send($2, "_at_put_", [3, 3]);
    smalltalk.send($2, "_at_put_", [false, 12]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: [],
source: "collectionWithDuplicates\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 4 put: -4;\x0a\x09\x09at: 'b' put: 1;\x0a\x09\x09at: 3 put: 3;\x0a\x09\x09at: false put: 12;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testAccessing",
smalltalk.method({
selector: "testAccessing",
category: 'tests',
fn: function () {
    var self = this;
    var d;
    d = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(d, "_at_put_", ["hello", "world"]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_at_", ["hello"]), "__eq", ["world"])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_at_ifAbsent_", ["hello", function () {return nil;}]), "__eq", ["world"])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(d, "_at_ifAbsent_", ["foo", function () {return nil;}]), "__eq", ["world"])]);
    smalltalk.send(d, "_at_put_", [1, 2]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_at_", [1]), "__eq", [2])]);
    smalltalk.send(d, "_at_put_", [smalltalk.send(1, "__at", [3]), 3]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_at_", [smalltalk.send(1, "__at", [3])]), "__eq", [3])]);
    return self;
},
args: [],
source: "testAccessing\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x0a\x09d at: 'hello' put: 'world'.\x0a\x09self assert: (d at: 'hello') = 'world'.\x0a\x09self assert: (d at: 'hello' ifAbsent: [nil]) = 'world'.\x0a\x09self deny: (d at: 'foo' ifAbsent: [nil]) = 'world'.\x0a\x0a\x09d at: 1 put: 2.\x0a\x09self assert: (d at: 1) = 2.\x0a\x0a\x09d at: 1@3 put: 3.\x0a\x09self assert: (d at: 1@3) = 3",
messageSends: ["new", "at:put:", "assert:", "=", "at:", "at:ifAbsent:", "deny:", "@"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testDynamicDictionaries",
smalltalk.method({
selector: "testDynamicDictionaries",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.HashedCollection._fromPairs_([smalltalk.send("hello", "__minus_gt", [1])]), "_asDictionary", []), "__eq", [smalltalk.send(smalltalk.Dictionary || Dictionary, "_with_", [smalltalk.send("hello", "__minus_gt", [1])])])]);
    return self;
},
args: [],
source: "testDynamicDictionaries\x0a\x09self assert: #{'hello' -> 1} asDictionary = (Dictionary with: 'hello' -> 1)",
messageSends: ["assert:", "=", "with:", "->", "asDictionary"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function () {
    var self = this;
    var $1, $2, $3, $4, $5, $6, $7, $8, $9, $10;
    var d1;
    var d2;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []), "__eq", [smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", [])])]);
    $1 = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send($1, "_at_put_", [1, 2]);
    $2 = smalltalk.send($1, "_yourself", []);
    d1 = $2;
    $3 = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send($3, "_at_put_", [1, 2]);
    $4 = smalltalk.send($3, "_yourself", []);
    d2 = $4;
    smalltalk.send(self, "_assert_", [smalltalk.send(d1, "__eq", [d2])]);
    $5 = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send($5, "_at_put_", [1, 3]);
    $6 = smalltalk.send($5, "_yourself", []);
    d2 = $6;
    smalltalk.send(self, "_deny_", [smalltalk.send(d1, "__eq", [d2])]);
    $7 = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send($7, "_at_put_", [2, 2]);
    $8 = smalltalk.send($7, "_yourself", []);
    d2 = $8;
    smalltalk.send(self, "_deny_", [smalltalk.send(d1, "__eq", [d2])]);
    $9 = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send($9, "_at_put_", [1, 2]);
    smalltalk.send($9, "_at_put_", [3, 4]);
    $10 = smalltalk.send($9, "_yourself", []);
    d2 = $10;
    smalltalk.send(self, "_deny_", [smalltalk.send(d1, "__eq", [d2])]);
    return self;
},
args: [],
source: "testEquality\x0a\x09| d1 d2 |\x0a\x0a\x09self assert: Dictionary new = Dictionary new.\x0a\x09\x09\x0a\x09d1 := Dictionary new at: 1 put: 2; yourself.\x0a\x09d2 := Dictionary new at: 1 put: 2; yourself.\x0a\x09self assert: d1 = d2.\x0a\x0a\x09d2 := Dictionary new at: 1 put: 3; yourself.\x0a\x09self deny: d1 = d2.\x0a\x0a\x09d2 := Dictionary new at: 2 put: 2; yourself.\x0a\x09self deny: d1 = d2.\x0a\x0a\x09d2 := Dictionary new at: 1 put: 2; at: 3 put: 4; yourself.\x0a\x09self deny: d1 = d2.",
messageSends: ["assert:", "=", "new", "at:put:", "yourself", "deny:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfAbsent",
smalltalk.method({
selector: "testIfAbsent",
category: 'tests',
fn: function () {
    var self = this;
    var d;
    var visited;
    visited = false;
    d = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(d, "_at_ifAbsent_", ["hello", function () {visited = true;return visited;}]);
    smalltalk.send(self, "_assert_", [visited]);
    return self;
},
args: [],
source: "testIfAbsent\x0a\x0a\x09| d visited |\x0a\x09visited := false.\x0a\x09d := Dictionary new.\x0a\x0a\x09d at: 'hello' ifAbsent: [ visited := true ].\x0a\x09self assert: visited.",
messageSends: ["new", "at:ifAbsent:", "assert:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfPresent",
smalltalk.method({
selector: "testIfPresent",
category: 'tests',
fn: function () {
    var self = this;
    var d;
    var visited;
    var absent;
    visited = false;
    d = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(d, "_at_put_", ["hello", "world"]);
    smalltalk.send(d, "_at_ifPresent_", ["hello", function (value) {visited = value;return visited;}]);
    smalltalk.send(self, "_assert_", [smalltalk.send(visited, "__eq", ["world"])]);
    absent = smalltalk.send(d, "_at_ifPresent_", ["bye", function (value) {visited = value;return visited;}]);
    smalltalk.send(self, "_assert_", [smalltalk.send(absent, "_isNil", [])]);
    return self;
},
args: [],
source: "testIfPresent\x0a\x0a\x09| d visited absent |\x0a\x09visited := false.\x0a\x09d := Dictionary new.\x0a\x09d at: 'hello' put: 'world'.\x0a\x0a\x09d at: 'hello' ifPresent: [ :value | visited := value ].\x0a\x09self assert: visited = 'world'.\x0a\x0a\x09absent := d at: 'bye' ifPresent: [ :value | visited := value ].\x0a\x09self assert: absent isNil.\x0a",
messageSends: ["new", "at:put:", "at:ifPresent:", "assert:", "=", "isNil"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfPresentIfAbsent",
smalltalk.method({
selector: "testIfPresentIfAbsent",
category: 'tests',
fn: function () {
    var self = this;
    var d;
    var visited;
    visited = false;
    d = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(d, "_at_put_", ["hello", "world"]);
    smalltalk.send(d, "_at_ifPresent_ifAbsent_", ["hello", function (value) {visited = value;return visited;}, function () {visited = true;return visited;}]);
    smalltalk.send(self, "_assert_", [smalltalk.send(visited, "__eq", ["world"])]);
    smalltalk.send(d, "_at_ifPresent_ifAbsent_", ["buy", function (value) {visited = value;return visited;}, function () {visited = true;return visited;}]);
    smalltalk.send(self, "_assert_", [visited]);
    return self;
},
args: [],
source: "testIfPresentIfAbsent\x0a\x0a\x09| d visited |\x0a\x09visited := false.\x0a\x09d := Dictionary new.\x0a\x09d at: 'hello' put: 'world'.\x0a\x0a\x09d at: 'hello' ifPresent: [ :value | visited := value ] ifAbsent: [ visited := true ].\x0a\x09self assert: visited = 'world'.\x0a\x0a\x09d at: 'buy' ifPresent: [ :value | visited := value ] ifAbsent: [ visited := true ].\x0a\x09self assert: visited.",
messageSends: ["new", "at:put:", "at:ifPresent:ifAbsent:", "assert:", "="],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testKeys",
smalltalk.method({
selector: "testKeys",
category: 'tests',
fn: function () {
    var self = this;
    var d;
    d = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(d, "_at_put_", [1, 2]);
    smalltalk.send(d, "_at_put_", [2, 3]);
    smalltalk.send(d, "_at_put_", [3, 4]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_keys", []), "__eq", [[1, 2, 3]])]);
    return self;
},
args: [],
source: "testKeys\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x09d at: 1 put: 2.\x0a\x09d at: 2 put: 3.\x0a\x09d at: 3 put: 4.\x0a\x0a\x09self assert: d keys = #(1 2 3)",
messageSends: ["new", "at:put:", "assert:", "=", "keys"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
category: 'tests',
fn: function () {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send($1, "_at_put_", ["firstname", "James"]);
    smalltalk.send($1, "_at_put_", ["lastname", "Bond"]);
    $2 = smalltalk.send($1, "_printString", []);
    smalltalk.send(self, "_assert_equals_", ["a Dictionary('firstname'->'James' , 'lastname'->'Bond')", $2]);
    return self;
},
args: [],
source: "testPrintString\x0a\x09self\x0a\x09\x09assert: 'a Dictionary(''firstname''->''James'' , ''lastname''->''Bond'')' \x0a\x09\x09equals: (Dictionary new \x0a                         \x09at:'firstname' put: 'James';\x0a                        \x09at:'lastname' put: 'Bond';\x0a                        \x09printString)",
messageSends: ["assert:equals:", "at:put:", "new", "printString"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testRemoveKey",
smalltalk.method({
selector: "testRemoveKey",
category: 'tests',
fn: function () {
    var self = this;
    var d;
    var key;
    d = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(d, "_at_put_", [1, 2]);
    smalltalk.send(d, "_at_put_", [2, 3]);
    smalltalk.send(d, "_at_put_", [3, 4]);
    key = 2;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_keys", []), "__eq", [[1, 2, 3]])]);
    smalltalk.send(d, "_removeKey_", [key]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_keys", []), "__eq", [[1, 3]])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_values", []), "__eq", [[2, 4]])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(d, "_includesKey_", [2])]);
    return self;
},
args: [],
source: "testRemoveKey\x0a    | d key |\x0a\x0a    d := Dictionary new.\x0a    d at: 1 put: 2.\x0a    d at: 2 put: 3.\x0a    d at: 3 put: 4.\x0a\x0a    key := 2.\x0a\x0a    self assert: d keys = #(1 2 3).\x0a\x0a    d removeKey: key.\x0a    self assert: d keys = #(1 3).\x0a    self assert: d values = #(2 4).\x0a    self deny: (d includesKey: 2)",
messageSends: ["new", "at:put:", "assert:", "=", "keys", "removeKey:", "values", "deny:", "includesKey:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testRemoveKeyIfAbsent",
smalltalk.method({
selector: "testRemoveKeyIfAbsent",
category: 'tests',
fn: function () {
    var self = this;
    var d;
    var key;
    d = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(d, "_at_put_", [1, 2]);
    smalltalk.send(d, "_at_put_", [2, 3]);
    smalltalk.send(d, "_at_put_", [3, 4]);
    key = 2;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_removeKey_", [key]), "__eq", [3])]);
    key = 3;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_removeKey_ifAbsent_", [key, function () {return 42;}]), "__eq", [4])]);
    key = "why";
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_removeKey_ifAbsent_", [key, function () {return 42;}]), "__eq", [42])]);
    return self;
},
args: [],
source: "testRemoveKeyIfAbsent\x0a    | d key |\x0a\x0a    d := Dictionary new.\x0a    d at: 1 put: 2.\x0a    d at: 2 put: 3.\x0a    d at: 3 put: 4.\x0a\x0a    key := 2.\x0a    self assert: (d removeKey: key) = 3.\x0a\x0a    key := 3.\x0a    self assert: (d removeKey: key ifAbsent: [42]) = 4.\x0a\x0a    key := 'why'.\x0a    self assert: (d removeKey: key ifAbsent: [42] ) = 42.",
messageSends: ["new", "at:put:", "assert:", "=", "removeKey:", "removeKey:ifAbsent:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function () {
    var self = this;
    var d;
    d = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_size", []), "__eq", [0])]);
    smalltalk.send(d, "_at_put_", [1, 2]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_size", []), "__eq", [1])]);
    smalltalk.send(d, "_at_put_", [2, 3]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_size", []), "__eq", [2])]);
    return self;
},
args: [],
source: "testSize\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x09self assert: d size = 0.\x0a\x0a\x09d at: 1 put: 2.\x0a\x09self assert: d size = 1.\x0a\x0a\x09d at: 2 put: 3.\x0a\x09self assert: d size = 2.",
messageSends: ["new", "assert:", "=", "size", "at:put:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testValues",
smalltalk.method({
selector: "testValues",
category: 'tests',
fn: function () {
    var self = this;
    var d;
    d = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(d, "_at_put_", [1, 2]);
    smalltalk.send(d, "_at_put_", [2, 3]);
    smalltalk.send(d, "_at_put_", [3, 4]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_values", []), "__eq", [[2, 3, 4]])]);
    return self;
},
args: [],
source: "testValues\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x09d at: 1 put: 2.\x0a\x09d at: 2 put: 3.\x0a\x09d at: 3 put: 4.\x0a\x0a\x09self assert: d values = #(2 3 4)",
messageSends: ["new", "at:put:", "assert:", "=", "values"],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.Dictionary || Dictionary;
},
args: [],
source: "collectionClass\x0a\x09^ Dictionary",
messageSends: [],
referencedClasses: ["Dictionary"]
}),
smalltalk.DictionaryTest.klass);


smalltalk.addClass('SequenceableCollectionTest', smalltalk.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [4]), "__eq", [-4])]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [5]);}, smalltalk.Error || Error]);
    return self;
},
args: [],
source: "testAt\x0a\x09self assert: (self collection at: 4) = -4.\x0a\x09self should: [ self collection at: 5 ] raise: Error",
messageSends: ["assert:", "=", "at:", "collection", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.SequenceableCollectionTest);

smalltalk.addMethod(
"_testAtIfAbsent",
smalltalk.method({
selector: "testAtIfAbsent",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_at_ifAbsent_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_size", []), "__plus", [1]), function () {return "none";}]), "__eq", ["none"])]);
    return self;
},
args: [],
source: "testAtIfAbsent\x0a\x09self assert: (self collection at: (self collection size + 1) ifAbsent: [ 'none' ]) = 'none'",
messageSends: ["assert:", "=", "at:ifAbsent:", "+", "size", "collection"],
referencedClasses: []
}),
smalltalk.SequenceableCollectionTest);



smalltalk.addClass('ArrayTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAtIfAbsent",
smalltalk.method({
selector: "testAtIfAbsent",
category: 'testing',
fn: function () {
    var self = this;
    var array;
    array = ["hello", "world"];
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(array, "_at_", [1]), "hello"]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(array, "_at_", [2]), "world"]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(array, "_at_ifAbsent_", [2, function () {return "not found";}]), "world"]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(array, "_at_ifAbsent_", [0, function () {return "not found";}]), "not found"]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(array, "_at_ifAbsent_", [-10, function () {return "not found";}]), "not found"]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(array, "_at_ifAbsent_", [3, function () {return "not found";}]), "not found"]);
    return self;
},
args: [],
source: "testAtIfAbsent\x0a\x09| array |\x0a\x09array := #('hello' 'world').\x0a\x09self assert: (array at: 1) equals: 'hello'.\x0a\x09self assert: (array at: 2) equals: 'world'.\x0a\x09self assert: (array at: 2 ifAbsent: ['not found']) equals: 'world'.\x0a\x09self assert: (array at: 0 ifAbsent: ['not found']) equals: 'not found'.\x0a\x09self assert: (array at: -10 ifAbsent: ['not found']) equals: 'not found'.\x0a\x09self assert: (array at: 3 ifAbsent: ['not found']) equals: 'not found'.",
messageSends: ["assert:equals:", "at:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testFirstN",
smalltalk.method({
selector: "testFirstN",
category: 'testing',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [[1, 2, 3], smalltalk.send([1, 2, 3, 4, 5], "_first_", [3])]);
    return self;
},
args: [],
source: "testFirstN\x0a\x09self assert: {1. 2. 3} equals: ({1. 2. 3. 4. 5} first: 3).",
messageSends: ["assert:equals:", "first:"],
referencedClasses: []
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testIfEmpty",
smalltalk.method({
selector: "testIfEmpty",
category: 'testing',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["zork", smalltalk.send("", "_ifEmpty_", [function () {return "zork";}])]);
    return self;
},
args: [],
source: "testIfEmpty\x0a\x09self assert: 'zork' equals: ( '' ifEmpty: ['zork'] )",
messageSends: ["assert:equals:", "ifEmpty:"],
referencedClasses: []
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
category: 'testing',
fn: function () {
    var self = this;
    var $1, $2;
    var array;
    array = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(self, "_assert_equals_", ["a Array ()", smalltalk.send(array, "_printString", [])]);
    smalltalk.send(array, "_add_", [1]);
    $1 = smalltalk.send(array, "_add_", [3]);
    smalltalk.send(self, "_assert_equals_", ["a Array (1 3)", smalltalk.send(array, "_printString", [])]);
    smalltalk.send(array, "_add_", ["foo"]);
    smalltalk.send(self, "_assert_equals_", ["a Array (1 3 'foo')", smalltalk.send(array, "_printString", [])]);
    smalltalk.send(array, "_remove_", [1]);
    $2 = smalltalk.send(array, "_remove_", [3]);
    smalltalk.send(self, "_assert_equals_", ["a Array ('foo')", smalltalk.send(array, "_printString", [])]);
    smalltalk.send(array, "_addLast_", [3]);
    smalltalk.send(self, "_assert_equals_", ["a Array ('foo' 3)", smalltalk.send(array, "_printString", [])]);
    smalltalk.send(array, "_addLast_", [3]);
    smalltalk.send(self, "_assert_equals_", ["a Array ('foo' 3 3)", smalltalk.send(array, "_printString", [])]);
    return self;
},
args: [],
source: "testPrintString\x0a\x09| array |\x0a\x09array := Array new.\x0a\x09self assert: 'a Array ()' equals: ( array printString ).\x0a\x09array add: 1; add: 3.\x0a\x09self assert: 'a Array (1 3)' equals: ( array printString ).\x0a\x09array add: 'foo'.\x0a\x09self assert: 'a Array (1 3 ''foo'')' equals: ( array printString ).\x0a\x09array remove: 1; remove: 3.\x0a\x09self assert: 'a Array (''foo'')' equals: ( array printString ).\x0a\x09array addLast: 3.\x0a\x09self assert: 'a Array (''foo'' 3)' equals: ( array printString ).\x0a\x09array addLast: 3.\x0a\x09self assert: 'a Array (''foo'' 3 3)' equals: ( array printString ).",
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:", "addLast:"],
referencedClasses: ["Array"]
}),
smalltalk.ArrayTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.Array || Array;
},
args: [],
source: "collectionClass\x0a\x09^ Array",
messageSends: [],
referencedClasses: ["Array"]
}),
smalltalk.ArrayTest.klass);


smalltalk.addClass('StringTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function () {
    var self = this;
    return "hello";
},
args: [],
source: "collection\x0a\x09^'hello'",
messageSends: [],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function () {
    var self = this;
    return "abbaerte";
},
args: [],
source: "collectionWithDuplicates\x0a\x09^ 'abbaerte'",
messageSends: [],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAddRemove",
smalltalk.method({
selector: "testAddRemove",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send("hello", "_add_", ["a"]);}, smalltalk.Error || Error]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send("hello", "_remove_", ["h"]);}, smalltalk.Error || Error]);
    return self;
},
args: [],
source: "testAddRemove\x0a\x09self should: ['hello' add: 'a'] raise: Error.\x0a\x09self should: ['hello' remove: 'h'] raise: Error",
messageSends: ["should:raise:", "add:", "remove:"],
referencedClasses: ["Error"]
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAsArray",
smalltalk.method({
selector: "testAsArray",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_asArray", []), "__eq", [["h", "e", "l", "l", "o"]])]);
    return self;
},
args: [],
source: "testAsArray\x0a\x09self assert: 'hello' asArray = #('h' 'e' 'l' 'l' 'o').",
messageSends: ["assert:", "=", "asArray"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_", [1]), "__eq", ["h"])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_", [5]), "__eq", ["o"])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_ifAbsent_", [6, function () {return nil;}]), "__eq", [nil])]);
    return self;
},
args: [],
source: "testAt\x0a\x09self assert: ('hello' at: 1) = 'h'.\x0a\x09self assert: ('hello' at: 5) = 'o'.\x0a\x09self assert: ('hello' at: 6 ifAbsent: [nil]) = nil",
messageSends: ["assert:", "=", "at:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAtPut",
smalltalk.method({
selector: "testAtPut",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send("hello", "_at_put_", [1, "a"]);}, smalltalk.Error || Error]);
    return self;
},
args: [],
source: "testAtPut\x0a\x09\x22String instances are read-only\x22\x0a\x09self should: ['hello' at: 1 put: 'a'] raise: Error",
messageSends: ["should:raise:", "at:put:"],
referencedClasses: ["Error"]
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
category: 'tests',
fn: function () {
    var self = this;
    var newCollection;
    newCollection = "hheelllloo";
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_collect_", [function (each) {return smalltalk.send(each, "__comma", [each]);}]), newCollection]);
    return self;
},
args: [],
source: "testCollect\x0a\x09| newCollection |\x0a\x09newCollection := 'hheelllloo'.\x0a\x09self \x0a\x09\x09assertSameContents: (self collection collect: [ :each |\x0a\x09\x09\x09each, each ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "collect:", ",", "collection"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testCopyWithoutAll",
smalltalk.method({
selector: "testCopyWithoutAll",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send("*hello* *world*", "_copyWithoutAll_", ["*"])]);
    return self;
},
args: [],
source: "testCopyWithoutAll\x0a\x09self \x0a\x09\x09assert: 'hello world' \x0a\x09\x09equals: ('*hello* *world*' copyWithoutAll: '*')",
messageSends: ["assert:equals:", "copyWithoutAll:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_detect_", [function (each) {return smalltalk.send(each, "__eq", ["h"]);}]), "__eq", ["h"])]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(self, "_collection", []), "_detect_", [function (each) {return smalltalk.send(each, "__eq", [6]);}]);}, smalltalk.Error || Error]);
    return self;
},
args: [],
source: "testDetect\x0a\x09self assert: (self collection detect: [ :each | each = 'h' ]) = 'h'.\x0a\x09self \x0a\x09\x09should: [ self collection detect: [ :each | each = 6 ] ]\x0a\x09\x09raise: Error",
messageSends: ["assert:", "=", "detect:", "collection", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq", ["hello"])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("hello", "__eq", ["world"])]);
    smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq", [smalltalk.send("hello", "_yourself", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_yourself", []), "__eq", ["hello"])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq", [0])]);
    return self;
},
args: [],
source: "testEquality\x0a\x09self assert: 'hello' = 'hello'.\x0a\x09self deny: 'hello' = 'world'.\x0a\x0a\x09self assert: 'hello'  = 'hello' yourself.\x0a\x09self assert: 'hello' yourself = 'hello'.\x0a\x0a\x09\x22test JS falsy value\x22\x0a\x09self deny: '' = 0",
messageSends: ["assert:", "=", "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq_eq", ["hello"])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("hello", "__eq_eq", ["world"])]);
    smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq_eq", [smalltalk.send("hello", "_yourself", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_yourself", []), "__eq_eq", ["hello"])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq_eq", [0])]);
    return self;
},
args: [],
source: "testIdentity\x0a\x09self assert: 'hello' == 'hello'.\x0a\x09self deny: 'hello' == 'world'.\x0a\x0a\x09self assert: 'hello' == 'hello' yourself.\x0a\x09self assert: 'hello' yourself == 'hello'.\x0a\x0a\x09\x22test JS falsy value\x22\x0a\x09self deny: '' == 0",
messageSends: ["assert:", "==", "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testIncludesSubString",
smalltalk.method({
selector: "testIncludesSubString",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send("amber", "_includesSubString_", ["ber"])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("amber", "_includesSubString_", ["zork"])]);
    return self;
},
args: [],
source: "testIncludesSubString\x0a\x09self assert: ('amber' includesSubString: 'ber').\x0a\x09self deny: ('amber' includesSubString: 'zork').",
messageSends: ["assert:", "includesSubString:", "deny:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testJoin",
smalltalk.method({
selector: "testJoin",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["hello,world", smalltalk.send(",", "_join_", [["hello", "world"]])]);
    return self;
},
args: [],
source: "testJoin\x0a\x09self assert: 'hello,world' equals: (',' join: #('hello' 'world'))",
messageSends: ["assert:equals:", "join:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
category: 'tests',
fn: function () {
    var self = this;
    var newCollection;
    newCollection = "o";
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_select_", [function (each) {return smalltalk.send(each, "__eq", ["o"]);}]), newCollection]);
    return self;
},
args: [],
source: "testSelect\x0a\x09| newCollection |\x0a\x09newCollection := 'o'.\x0a\x09self \x0a\x09\x09assertSameContents: (self collection select: [ :each |\x0a\x09\x09\x09each = 'o' ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "select:", "=", "collection"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send("smalltalk", "_size", []), 9]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send("", "_size", []), 0]);
    return self;
},
args: [],
source: "testSize\x0a\x09self assert: 'smalltalk' size equals: 9.\x0a\x09self assert: '' size equals: 0",
messageSends: ["assert:equals:", "size"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testStreamContents",
smalltalk.method({
selector: "testStreamContents",
category: 'tests',
fn: function () {
    var self = this;
    var $1;
    smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send(smalltalk.String || String, "_streamContents_", [function (aStream) {smalltalk.send(aStream, "_nextPutAll_", ["hello"]);smalltalk.send(aStream, "_space", []);$1 = smalltalk.send(aStream, "_nextPutAll_", ["world"]);return $1;}])]);
    return self;
},
args: [],
source: "testStreamContents\x0a\x09self \x0a\x09\x09assert: 'hello world' \x0a\x09\x09equals: (String streamContents: [ :aStream | \x0a\x09\x09\x09aStream \x0a\x09\x09\x09\x09nextPutAll: 'hello'; space; \x0a\x09\x09\x09\x09nextPutAll: 'world' ])",
messageSends: ["assert:equals:", "streamContents:", "nextPutAll:", "space"],
referencedClasses: ["String"]
}),
smalltalk.StringTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.String || String;
},
args: [],
source: "collectionClass\x0a\x09^ String",
messageSends: [],
referencedClasses: ["String"]
}),
smalltalk.StringTest.klass);


smalltalk.addClass('SymbolTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.symbolFor("hello");
},
args: [],
source: "collection\x0a\x09^ #hello",
messageSends: [],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.symbolFor("phhaaarorra");
},
args: [],
source: "collectionWithDuplicates\x0a\x09^ #phhaaarorra",
messageSends: [],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAsString",
smalltalk.method({
selector: "testAsString",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.symbolFor("hello"), "_asString", []), "hello"]);
    return self;
},
args: [],
source: "testAsString\x0a\x09self assert: #hello asString equals: 'hello'",
messageSends: ["assert:equals:", "asString"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAsSymbol",
smalltalk.method({
selector: "testAsSymbol",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq_eq", [smalltalk.send(smalltalk.symbolFor("hello"), "_asSymbol", [])])]);
    return self;
},
args: [],
source: "testAsSymbol\x0a\x09self assert: #hello == #hello asSymbol",
messageSends: ["assert:", "==", "asSymbol"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_at_", [1]), "__eq", ["h"])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_at_", [5]), "__eq", ["o"])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_at_ifAbsent_", [6, function () {return nil;}]), "__eq", [nil])]);
    return self;
},
args: [],
source: "testAt\x0a\x09self assert: (#hello at: 1) = 'h'.\x0a\x09self assert: (#hello at: 5) = 'o'.\x0a\x09self assert: (#hello at: 6 ifAbsent: [nil]) = nil",
messageSends: ["assert:", "=", "at:", "at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAtPut",
smalltalk.method({
selector: "testAtPut",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send("hello", "_at_put_", [1, "a"]);}, smalltalk.Error || Error]);
    return self;
},
args: [],
source: "testAtPut\x0a\x09\x22Symbol instances are read-only\x22\x0a\x09self should: ['hello' at: 1 put: 'a'] raise: Error",
messageSends: ["should:raise:", "at:put:"],
referencedClasses: ["Error"]
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
category: 'tests',
fn: function () {
    var self = this;
    var newCollection;
    newCollection = smalltalk.symbolFor("hheelllloo");
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_collect_", [function (each) {return smalltalk.send(each, "__comma", [each]);}]), newCollection]);
    return self;
},
args: [],
source: "testCollect\x0a\x09| newCollection |\x0a\x09newCollection := #hheelllloo.\x0a\x09self \x0a\x09\x09assertSameContents: (self collection collect: [ :each |\x0a\x09\x09\x09each, each ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "collect:", ",", "collection"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testComparing",
smalltalk.method({
selector: "testComparing",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("ab"), "__gt", [smalltalk.symbolFor("aa")])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("ab"), "__gt", [smalltalk.symbolFor("ba")])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("ab"), "__lt", [smalltalk.symbolFor("ba")])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("bb"), "__lt", [smalltalk.symbolFor("ba")])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("ab"), "__gt_eq", [smalltalk.symbolFor("aa")])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("ab"), "__gt_eq", [smalltalk.symbolFor("ba")])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("ab"), "__lt_eq", [smalltalk.symbolFor("ba")])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("bb"), "__lt_eq", [smalltalk.symbolFor("ba")])]);
    return self;
},
args: [],
source: "testComparing\x0a\x09self assert: #ab > #aa.\x0a\x09self deny: #ab > #ba.\x0a\x0a\x09self assert: #ab < #ba.\x0a\x09self deny: #bb < #ba.\x0a\x0a\x09self assert: #ab >= #aa.\x0a\x09self deny: #ab >= #ba.\x0a\x0a\x09self assert: #ab <= #ba.\x0a\x09self deny: #bb <= #ba",
messageSends: ["assert:", ">", "deny:", "<", ">=", "<="],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_copy", []), "__eq_eq", [smalltalk.symbolFor("hello")])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_deepCopy", []), "__eq_eq", [smalltalk.symbolFor("hello")])]);
    return self;
},
args: [],
source: "testCopying\x0a\x09self assert: #hello copy == #hello.\x0a\x09self assert: #hello deepCopy == #hello",
messageSends: ["assert:", "==", "copy", "deepCopy"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_detect_", [function (each) {return smalltalk.send(each, "__eq", ["h"]);}]), "__eq", ["h"])]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(self, "_collection", []), "_detect_", [function (each) {return smalltalk.send(each, "__eq", ["z"]);}]);}, smalltalk.Error || Error]);
    return self;
},
args: [],
source: "testDetect\x0a\x09self assert: (self collection detect: [ :each | each = 'h' ]) = 'h'.\x0a\x09self \x0a\x09\x09should: [ self collection detect: [ :each | each = 'z' ] ]\x0a\x09\x09raise: Error",
messageSends: ["assert:", "=", "detect:", "collection", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", [smalltalk.symbolFor("hello")])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", [smalltalk.symbolFor("world")])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", [smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", []), "__eq", [smalltalk.symbolFor("hello")])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", ["hello"])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("hello", "__eq", [smalltalk.symbolFor("hello")])]);
    return self;
},
args: [],
source: "testEquality\x0a\x09self assert: #hello = #hello.\x0a\x09self deny: #hello = #world.\x0a\x0a\x09self assert: #hello  = #hello yourself.\x0a\x09self assert: #hello yourself = #hello.\x0a\x0a\x09self deny: #hello  = 'hello'.\x0a\x09self deny: 'hello' = #hello.",
messageSends: ["assert:", "=", "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq_eq", [smalltalk.symbolFor("hello")])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq_eq", [smalltalk.symbolFor("world")])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", [smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", []), "__eq", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_asString", []), "_asSymbol", [])])]);
    return self;
},
args: [],
source: "testIdentity\x0a\x09self assert: #hello == #hello.\x0a\x09self deny: #hello == #world.\x0a\x0a\x09self assert: #hello  = #hello yourself.\x0a\x09self assert: #hello yourself = #hello asString asSymbol",
messageSends: ["assert:", "==", "deny:", "=", "yourself", "asSymbol", "asString"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIsEmpty",
smalltalk.method({
selector: "testIsEmpty",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_isEmpty", [])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("", "_asSymbol", []), "_isEmpty", [])]);
    return self;
},
args: [],
source: "testIsEmpty\x0a\x09self deny: self collection isEmpty.\x0a\x09self assert: '' asSymbol isEmpty",
messageSends: ["deny:", "isEmpty", "collection", "assert:", "asSymbol"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIsSymbolIsString",
smalltalk.method({
selector: "testIsSymbolIsString",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "_isSymbol", [])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("hello", "_isSymbol", [])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "_isString", [])]);
    smalltalk.send(self, "_assert_", [smalltalk.send("hello", "_isString", [])]);
    return self;
},
args: [],
source: "testIsSymbolIsString\x0a\x09self assert: #hello isSymbol.\x0a\x09self deny: 'hello' isSymbol.\x0a\x09self deny: #hello isString.\x0a\x09self assert: 'hello' isString",
messageSends: ["assert:", "isSymbol", "deny:", "isString"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
category: 'tests',
fn: function () {
    var self = this;
    var newCollection;
    newCollection = "o";
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_select_", [function (each) {return smalltalk.send(each, "__eq", ["o"]);}]), newCollection]);
    return self;
},
args: [],
source: "testSelect\x0a\x09| newCollection |\x0a\x09newCollection := 'o'.\x0a\x09self \x0a\x09\x09assertSameContents: (self collection select: [ :each |\x0a\x09\x09\x09each = 'o' ])\x0a\x09\x09as: newCollection",
messageSends: ["assertSameContents:as:", "select:", "=", "collection"],
referencedClasses: []
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.symbolFor("a"), "_size", []), 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.symbolFor("aaaaa"), "_size", []), 5]);
    return self;
},
args: [],
source: "testSize\x0a\x09self assert: #a size equals: 1.\x0a\x09self assert: #aaaaa size equals: 5",
messageSends: ["assert:equals:", "size"],
referencedClasses: []
}),
smalltalk.SymbolTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.Symbol || Symbol;
},
args: [],
source: "collectionClass\x0a\x09^ Symbol",
messageSends: [],
referencedClasses: ["Symbol"]
}),
smalltalk.SymbolTest.klass);


smalltalk.addClass('JSObjectProxyTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_jsObject",
smalltalk.method({
selector: "jsObject",
category: 'accessing',
fn: function () {
    var self = this;
    return jsObject = {a: 1, b: function () {return 2;}, c: function (object) {return object;}, d: ""};
    return self;
},
args: [],
source: "jsObject\x0a\x09<return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: ''}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testDNU",
smalltalk.method({
selector: "testDNU",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(self, "_jsObject", []), "_foo", []);}, smalltalk.MessageNotUnderstood || MessageNotUnderstood]);
    return self;
},
args: [],
source: "testDNU\x0a\x09self should: [self jsObject foo] raise: MessageNotUnderstood",
messageSends: ["should:raise:", "foo", "jsObject"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testMessageSend",
smalltalk.method({
selector: "testMessageSend",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_a", []), 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_b", []), 2]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_c_", [3]), 3]);
    return self;
},
args: [],
source: "testMessageSend\x0a\x0a\x09self assert: self jsObject a equals: 1.\x0a\x09self assert: self jsObject b equals: 2.\x0a\x09self assert: (self jsObject c: 3) equals: 3",
messageSends: ["assert:equals:", "a", "jsObject", "b", "c:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testMethodWithArguments",
smalltalk.method({
selector: "testMethodWithArguments",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_c_", [1]), 1]);
    return self;
},
args: [],
source: "testMethodWithArguments\x0a\x09self assert: (self jsObject c: 1) equals: 1",
messageSends: ["assert:equals:", "c:", "jsObject"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testPrinting",
smalltalk.method({
selector: "testPrinting",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_jsObject", []), "_printString", []), "__eq", ["[object Object]"])]);
    return self;
},
args: [],
source: "testPrinting\x0a\x09self assert: self jsObject printString = '[object Object]'",
messageSends: ["assert:", "=", "printString", "jsObject"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testPropertyThatReturnsEmptyString",
smalltalk.method({
selector: "testPropertyThatReturnsEmptyString",
category: 'tests',
fn: function () {
    var self = this;
    var object;
    object = smalltalk.send(self, "_jsObject", []);
    smalltalk.send(self, "_assert_equals_", ["", smalltalk.send(object, "_d", [])]);
    smalltalk.send(object, "_d_", ["hello"]);
    smalltalk.send(self, "_assert_equals_", ["hello", smalltalk.send(object, "_d", [])]);
    return self;
},
args: [],
source: "testPropertyThatReturnsEmptyString\x0a\x09| object |\x0a\x0a\x09object := self jsObject.\x0a\x09self assert: '' equals: object d.\x0a\x0a\x09object d: 'hello'.\x0a\x09self assert: 'hello' equals: object d",
messageSends: ["jsObject", "assert:equals:", "d", "d:"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testYourself",
smalltalk.method({
selector: "testYourself",
category: 'tests',
fn: function () {
    var self = this;
    var $1, $2;
    var object;
    $1 = smalltalk.send(self, "_jsObject", []);
    smalltalk.send($1, "_d_", ["test"]);
    $2 = smalltalk.send($1, "_yourself", []);
    object = $2;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(object, "_d", []), "test"]);
    return self;
},
args: [],
source: "testYourself\x0a\x09| object |\x0a\x09object := self jsObject\x0a\x09\x09d: 'test';\x0a\x09\x09yourself.\x0a\x0a\x09self assert: object d equals: 'test'",
messageSends: ["d:", "jsObject", "yourself", "assert:equals:", "d"],
referencedClasses: []
}),
smalltalk.JSObjectProxyTest);



smalltalk.addClass('NumberTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAbs",
smalltalk.method({
selector: "testAbs",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(4, "_abs", []), "__eq", [4])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(-4, "_abs", []), "__eq", [4])]);
    return self;
},
args: [],
source: "testAbs\x0a\x09self assert: 4 abs = 4.\x0a\x09self assert: -4 abs = 4",
messageSends: ["assert:", "=", "abs"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testArithmetic",
smalltalk.method({
selector: "testArithmetic",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1.5, "__plus", [1]), "__eq", [2.5])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(2, "__minus", [1]), "__eq", [1])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(-2, "__minus", [1]), "__eq", [-3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(12, "__slash", [2]), "__eq", [6])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3, "__star", [4]), "__eq", [12])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(1, "__plus", [2]), "__star", [3]), "__eq", [9])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1, "__plus", [smalltalk.send(2, "__star", [3])]), "__eq", [7])]);
    return self;
},
args: [],
source: "testArithmetic\x0a\x09\x0a\x09\x22We rely on JS here, so we won't test complex behavior, just check if \x0a\x09message sends are corrects\x22\x0a\x0a\x09self assert: 1.5 + 1 = 2.5.\x0a\x09self assert: 2 - 1 = 1.\x0a\x09self assert: -2 - 1 = -3.\x0a\x09self assert: 12 / 2 = 6.\x0a\x09self assert: 3 * 4 = 12.\x0a\x0a\x09\x22Simple parenthesis and execution order\x22\x0a\x0a\x09self assert: 1 + 2 * 3 = 9.\x0a\x09self assert: 1 + (2 * 3) = 7",
messageSends: ["assert:", "=", "+", "-", "/", "*"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testComparison",
smalltalk.method({
selector: "testComparison",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(3, "__gt", [2])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(2, "__lt", [3])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(3, "__lt", [2])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(2, "__gt", [3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(3, "__gt_eq", [3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(3.1, "__gt_eq", [3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(3, "__lt_eq", [3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(3, "__lt_eq", [3.1])]);
    return self;
},
args: [],
source: "testComparison\x0a\x0a\x09self assert: 3 > 2.\x0a\x09self assert: 2 < 3.\x0a\x09\x0a\x09self deny: 3 < 2.\x0a\x09self deny: 2 > 3.\x0a\x0a\x09self assert: 3 >= 3.\x0a\x09self assert: 3.1 >= 3.\x0a\x09self assert: 3 <= 3.\x0a\x09self assert: 3 <= 3.1",
messageSends: ["assert:", ">", "<", "deny:", ">=", "<="],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1, "_copy", []), "__eq_eq", [1])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1, "_deepCopy", []), "__eq_eq", [1])]);
    return self;
},
args: [],
source: "testCopying\x0a\x09self assert: 1 copy == 1.\x0a\x09self assert: 1 deepCopy == 1",
messageSends: ["assert:", "==", "copy", "deepCopy"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(1, "__eq", [1])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(0, "__eq", [0])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(1, "__eq", [0])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1, "_yourself", []), "__eq", [1])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(1, "__eq", [smalltalk.send(1, "_yourself", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1, "_yourself", []), "__eq", [smalltalk.send(1, "_yourself", [])])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(0, "__eq", [false])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(false, "__eq", [0])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq", [0])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(0, "__eq", [""])]);
    return self;
},
args: [],
source: "testEquality\x0a\x09self assert: 1 = 1.\x0a\x09self assert: 0 = 0.\x0a\x09self deny: 1 = 0.\x0a\x0a\x09self assert: 1 yourself = 1.\x0a\x09self assert: 1 = 1 yourself.\x0a\x09self assert: 1 yourself = 1 yourself.\x0a\x09\x0a\x09self deny: 0 = false.\x0a\x09self deny: false = 0.\x0a\x09self deny: '' = 0.\x0a\x09self deny: 0 = ''",
messageSends: ["assert:", "=", "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(1, "__eq_eq", [1])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(0, "__eq_eq", [0])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(1, "__eq_eq", [0])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1, "_yourself", []), "__eq_eq", [1])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(1, "__eq_eq", [smalltalk.send(1, "_yourself", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1, "_yourself", []), "__eq_eq", [smalltalk.send(1, "_yourself", [])])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(1, "__eq_eq", [2])]);
    return self;
},
args: [],
source: "testIdentity\x0a\x09self assert: 1 == 1.\x0a\x09self assert: 0 == 0.\x0a\x09self deny: 1 == 0.\x0a\x0a\x09self assert: 1 yourself == 1.\x0a\x09self assert: 1 == 1 yourself.\x0a\x09self assert: 1 yourself == 1 yourself.\x0a\x09\x0a\x09self deny: 1 == 2",
messageSends: ["assert:", "==", "deny:", "yourself"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testMinMax",
smalltalk.method({
selector: "testMinMax",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(2, "_max_", [5]), 5]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(2, "_min_", [5]), 2]);
    return self;
},
args: [],
source: "testMinMax\x0a\x09\x0a\x09self assert: (2 max: 5) equals: 5.\x0a\x09self assert: (2 min: 5) equals: 2",
messageSends: ["assert:equals:", "max:", "min:"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testNegated",
smalltalk.method({
selector: "testNegated",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3, "_negated", []), "__eq", [-3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(-3, "_negated", []), "__eq", [3])]);
    return self;
},
args: [],
source: "testNegated\x0a\x09self assert: 3 negated = -3.\x0a\x09self assert: -3 negated = 3",
messageSends: ["assert:", "=", "negated"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testPrintShowingDecimalPlaces",
smalltalk.method({
selector: "testPrintShowingDecimalPlaces",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["23.00", smalltalk.send(23, "_printShowingDecimalPlaces_", [2])]);
    smalltalk.send(self, "_assert_equals_", ["23.57", smalltalk.send(23.5698, "_printShowingDecimalPlaces_", [2])]);
    smalltalk.send(self, "_assert_equals_", ["-234.56700", smalltalk.send(smalltalk.send(234.567, "_negated", []), "_printShowingDecimalPlaces_", [5])]);
    smalltalk.send(self, "_assert_equals_", ["23", smalltalk.send(23.4567, "_printShowingDecimalPlaces_", [0])]);
    smalltalk.send(self, "_assert_equals_", ["24", smalltalk.send(23.5567, "_printShowingDecimalPlaces_", [0])]);
    smalltalk.send(self, "_assert_equals_", ["-23", smalltalk.send(smalltalk.send(23.4567, "_negated", []), "_printShowingDecimalPlaces_", [0])]);
    smalltalk.send(self, "_assert_equals_", ["-24", smalltalk.send(smalltalk.send(23.5567, "_negated", []), "_printShowingDecimalPlaces_", [0])]);
    smalltalk.send(self, "_assert_equals_", ["100000000.0", smalltalk.send(100000000, "_printShowingDecimalPlaces_", [1])]);
    smalltalk.send(self, "_assert_equals_", ["0.98000", smalltalk.send(0.98, "_printShowingDecimalPlaces_", [5])]);
    smalltalk.send(self, "_assert_equals_", ["-0.98", smalltalk.send(smalltalk.send(0.98, "_negated", []), "_printShowingDecimalPlaces_", [2])]);
    smalltalk.send(self, "_assert_equals_", ["2.57", smalltalk.send(2.567, "_printShowingDecimalPlaces_", [2])]);
    smalltalk.send(self, "_assert_equals_", ["-2.57", smalltalk.send(-2.567, "_printShowingDecimalPlaces_", [2])]);
    smalltalk.send(self, "_assert_equals_", ["0.00", smalltalk.send(0, "_printShowingDecimalPlaces_", [2])]);
    return self;
},
args: [],
source: "testPrintShowingDecimalPlaces\x0a\x09self assert: '23.00' equals: (23 printShowingDecimalPlaces: 2).\x0a\x09self assert: '23.57' equals: (23.5698 printShowingDecimalPlaces: 2).\x0a\x09self assert: '-234.56700' equals:( 234.567 negated printShowingDecimalPlaces: 5).\x0a\x09self assert: '23' equals: (23.4567 printShowingDecimalPlaces: 0).\x0a\x09self assert: '24' equals: (23.5567 printShowingDecimalPlaces: 0).\x0a\x09self assert: '-23' equals: (23.4567 negated printShowingDecimalPlaces: 0).\x0a\x09self assert: '-24' equals: (23.5567 negated printShowingDecimalPlaces: 0).\x0a\x09self assert: '100000000.0' equals: (100000000 printShowingDecimalPlaces: 1).\x0a\x09self assert: '0.98000' equals: (0.98 printShowingDecimalPlaces: 5).\x0a\x09self assert: '-0.98' equals: (0.98 negated printShowingDecimalPlaces: 2).\x0a\x09self assert: '2.57' equals: (2.567 printShowingDecimalPlaces: 2).\x0a\x09self assert: '-2.57' equals: (-2.567 printShowingDecimalPlaces: 2).\x0a\x09self assert: '0.00' equals: (0 printShowingDecimalPlaces: 2).",
messageSends: ["assert:equals:", "printShowingDecimalPlaces:", "negated"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testRounded",
smalltalk.method({
selector: "testRounded",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3, "_rounded", []), "__eq", [3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3.212, "_rounded", []), "__eq", [3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3.51, "_rounded", []), "__eq", [4])]);
    return self;
},
args: [],
source: "testRounded\x0a\x09\x0a\x09self assert: 3 rounded = 3.\x0a\x09self assert: 3.212 rounded = 3.\x0a\x09self assert: 3.51 rounded = 4",
messageSends: ["assert:", "=", "rounded"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testSqrt",
smalltalk.method({
selector: "testSqrt",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(4, "_sqrt", []), "__eq", [2])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(16, "_sqrt", []), "__eq", [4])]);
    return self;
},
args: [],
source: "testSqrt\x0a\x09\x0a\x09self assert: 4 sqrt = 2.\x0a\x09self assert: 16 sqrt = 4",
messageSends: ["assert:", "=", "sqrt"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testSquared",
smalltalk.method({
selector: "testSquared",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(4, "_squared", []), "__eq", [16])]);
    return self;
},
args: [],
source: "testSquared\x0a\x09\x0a\x09self assert: 4 squared = 16",
messageSends: ["assert:", "=", "squared"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTimesRepeat",
smalltalk.method({
selector: "testTimesRepeat",
category: 'tests',
fn: function () {
    var self = this;
    var i;
    i = 0;
    smalltalk.send(0, "_timesRepeat_", [function () {i = smalltalk.send(i, "__plus", [1]);return i;}]);
    smalltalk.send(self, "_assert_equals_", [i, 0]);
    smalltalk.send(5, "_timesRepeat_", [function () {i = smalltalk.send(i, "__plus", [1]);return i;}]);
    smalltalk.send(self, "_assert_equals_", [i, 5]);
    return self;
},
args: [],
source: "testTimesRepeat\x0a\x09| i |\x0a\x0a\x09i := 0.\x0a\x090 timesRepeat: [i := i + 1].\x0a\x09self assert: i equals: 0.\x0a\x0a\x095 timesRepeat: [i := i + 1].\x0a\x09self assert: i equals: 5",
messageSends: ["timesRepeat:", "+", "assert:equals:"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTo",
smalltalk.method({
selector: "testTo",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(1, "_to_", [5]), [1, 2, 3, 4, 5]]);
    return self;
},
args: [],
source: "testTo\x0a\x09self assert: (1 to: 5) equals: #(1 2 3 4 5)",
messageSends: ["assert:equals:", "to:"],
referencedClasses: []
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testToBy",
smalltalk.method({
selector: "testToBy",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(0, "_to_by_", [6, 2]), [0, 2, 4, 6]]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(1, "_to_by_", [4, 0]);}, smalltalk.Error || Error]);
    return self;
},
args: [],
source: "testToBy\x0a\x09self assert: (0 to: 6 by: 2) equals: #(0 2 4 6).\x0a\x0a\x09self should: [1 to: 4 by: 0] raise: Error",
messageSends: ["assert:equals:", "to:by:", "should:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTruncated",
smalltalk.method({
selector: "testTruncated",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3, "_truncated", []), "__eq", [3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3.212, "_truncated", []), "__eq", [3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3.51, "_truncated", []), "__eq", [3])]);
    return self;
},
args: [],
source: "testTruncated\x0a\x09\x0a\x09self assert: 3 truncated = 3.\x0a\x09self assert: 3.212 truncated = 3.\x0a\x09self assert: 3.51 truncated = 3",
messageSends: ["assert:", "=", "truncated"],
referencedClasses: []
}),
smalltalk.NumberTest);



smalltalk.addClass('ObjectMock', smalltalk.Object, ['foo', 'bar'], 'Kernel-Tests');
smalltalk.addMethod(
"_foo",
smalltalk.method({
selector: "foo",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@foo'];
},
args: [],
source: "foo\x0a\x09^foo",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectMock);

smalltalk.addMethod(
"_foo_",
smalltalk.method({
selector: "foo:",
category: 'not yet classified',
fn: function (anObject) {
    var self = this;
    self['@foo'] = anObject;
    return self;
},
args: ["anObject"],
source: "foo: anObject\x0a\x09foo := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectMock);



smalltalk.addClass('ObjectTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testBasicAccess",
smalltalk.method({
selector: "testBasicAccess",
category: 'tests',
fn: function () {
    var self = this;
    var o;
    o = smalltalk.send(smalltalk.Object || Object, "_new", []);
    smalltalk.send(o, "_basicAt_put_", ["a", 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_basicAt_", ["a"]), 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_basicAt_", ["b"]), nil]);
    return self;
},
args: [],
source: "testBasicAccess\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09o basicAt: 'a' put: 1.\x0a\x09self assert: (o basicAt: 'a') equals: 1.\x0a\x09self assert: (o basicAt: 'b') equals: nil",
messageSends: ["new", "basicAt:put:", "assert:equals:", "basicAt:"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testBasicPerform",
smalltalk.method({
selector: "testBasicPerform",
category: 'tests',
fn: function () {
    var self = this;
    var o;
    o = smalltalk.send(smalltalk.Object || Object, "_new", []);
    smalltalk.send(o, "_basicAt_put_", ["func", function () {return "hello";}]);
    smalltalk.send(o, "_basicAt_put_", ["func2", function (a) {return smalltalk.send(a, "__plus", [1]);}]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_basicPerform_", ["func"]), "hello"]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_basicPerform_withArguments_", ["func2", [3]]), 4]);
    return self;
},
args: [],
source: "testBasicPerform\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09o basicAt: 'func' put: ['hello'].\x09\x0a\x09o basicAt: 'func2' put: [:a | a + 1].\x0a\x0a\x09self assert: (o basicPerform: 'func')\x09 equals: 'hello'.\x0a\x09self assert: (o basicPerform: 'func2' withArguments: #(3)) equals: 4",
messageSends: ["new", "basicAt:put:", "+", "assert:equals:", "basicPerform:", "basicPerform:withArguments:"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testDNU",
smalltalk.method({
selector: "testDNU",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(smalltalk.Object || Object, "_new", []), "_foo", []);}, smalltalk.MessageNotUnderstood || MessageNotUnderstood]);
    return self;
},
args: [],
source: "testDNU\x0a\x09self should: [Object new foo] raise: MessageNotUnderstood",
messageSends: ["should:raise:", "foo", "new"],
referencedClasses: ["Object", "MessageNotUnderstood"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
category: 'tests',
fn: function () {
    var self = this;
    var o;
    o = smalltalk.send(smalltalk.Object || Object, "_new", []);
    smalltalk.send(self, "_deny_", [smalltalk.send(o, "__eq", [smalltalk.send(smalltalk.Object || Object, "_new", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq", [o])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o, "_yourself", []), "__eq", [o])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq", [smalltalk.send(o, "_yourself", [])])]);
    return self;
},
args: [],
source: "testEquality\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09self deny: o = Object new.\x0a\x09self assert: o = o.\x0a\x09self assert: o yourself = o.\x0a\x09self assert: o = o yourself",
messageSends: ["new", "deny:", "=", "assert:", "yourself"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testHalt",
smalltalk.method({
selector: "testHalt",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(smalltalk.Object || Object, "_new", []), "_halt", []);}, smalltalk.Error || Error]);
    return self;
},
args: [],
source: "testHalt\x0a\x09self should: [Object new halt] raise: Error",
messageSends: ["should:raise:", "halt", "new"],
referencedClasses: ["Object", "Error"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
category: 'tests',
fn: function () {
    var self = this;
    var o;
    o = smalltalk.send(smalltalk.Object || Object, "_new", []);
    smalltalk.send(self, "_deny_", [smalltalk.send(o, "__eq_eq", [smalltalk.send(smalltalk.Object || Object, "_new", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq_eq", [o])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o, "_yourself", []), "__eq_eq", [o])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq_eq", [smalltalk.send(o, "_yourself", [])])]);
    return self;
},
args: [],
source: "testIdentity\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09self deny: o == Object new.\x0a\x09self assert: o == o.\x0a\x09self assert: o yourself == o.\x0a\x09self assert: o == o yourself",
messageSends: ["new", "deny:", "==", "assert:", "yourself"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testIfNil",
smalltalk.method({
selector: "testIfNil",
category: 'tests',
fn: function () {
    var self = this;
    var $2, $1, $4, $3, $6, $5;
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(smalltalk.Object || Object, "_new", []), "_isNil", [])]);
    $2 = smalltalk.send(smalltalk.Object || Object, "_new", []);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = true;
    } else {
        $1 = $2;
    }
    smalltalk.send(self, "_deny_", [smalltalk.send($1, "__eq", [true])]);
    $4 = smalltalk.send(smalltalk.Object || Object, "_new", []);
    if (($receiver = $4) == nil || $receiver == undefined) {
        $3 = $4;
    } else {
        $3 = true;
    }
    smalltalk.send(self, "_assert_", [smalltalk.send($3, "__eq", [true])]);
    $6 = smalltalk.send(smalltalk.Object || Object, "_new", []);
    if (($receiver = $6) == nil || $receiver == undefined) {
        $5 = false;
    } else {
        $5 = true;
    }
    smalltalk.send(self, "_assert_", [smalltalk.send($5, "__eq", [true])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Object || Object, "_new", []), "_ifNotNil_ifNil_", [function () {return true;}, function () {return false;}]), "__eq", [true])]);
    return self;
},
args: [],
source: "testIfNil\x0a\x09self deny: Object new isNil.\x0a\x09self deny: (Object new ifNil: [true]) = true.\x0a\x09self assert: (Object new ifNotNil: [true]) = true.\x0a\x0a\x09self assert: (Object new ifNil: [false] ifNotNil: [true]) = true.\x0a\x09self assert: (Object new ifNotNil: [true] ifNil: [false]) = true",
messageSends: ["deny:", "isNil", "new", "=", "ifNil:", "assert:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testInstVars",
smalltalk.method({
selector: "testInstVars",
category: 'tests',
fn: function () {
    var self = this;
    var o;
    o = smalltalk.send(smalltalk.ObjectMock || ObjectMock, "_new", []);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_instVarAt_", [smalltalk.symbolFor("foo")]), nil]);
    smalltalk.send(o, "_instVarAt_put_", [smalltalk.symbolFor("foo"), 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_instVarAt_", [smalltalk.symbolFor("foo")]), 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_instVarAt_", ["foo"]), 1]);
    return self;
},
args: [],
source: "testInstVars\x0a\x09| o |\x0a\x09o := ObjectMock new.\x0a\x09self assert: (o instVarAt: #foo) equals: nil.\x0a\x0a\x09o instVarAt: #foo put: 1.\x0a\x09self assert: (o instVarAt: #foo) equals: 1.\x0a\x09self assert: (o instVarAt: 'foo') equals: 1",
messageSends: ["new", "assert:equals:", "instVarAt:", "instVarAt:put:"],
referencedClasses: ["ObjectMock"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testNilUndefined",
smalltalk.method({
selector: "testNilUndefined",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(nil, "__eq", [undefined])]);
    return self;
},
args: [],
source: "testNilUndefined\x0a\x09\x22nil in Smalltalk is the undefined object in JS\x22\x0a\x0a\x09self assert: nil = undefined",
messageSends: ["assert:", "="],
referencedClasses: []
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testYourself",
smalltalk.method({
selector: "testYourself",
category: 'tests',
fn: function () {
    var self = this;
    var o;
    o = smalltalk.send(smalltalk.ObjectMock || ObjectMock, "_new", []);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o, "_yourself", []), "__eq_eq", [o])]);
    return self;
},
args: [],
source: "testYourself\x0a\x09| o |\x0a\x09o := ObjectMock new.\x0a\x09self assert: o yourself == o",
messageSends: ["new", "assert:", "==", "yourself"],
referencedClasses: ["ObjectMock"]
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testidentityHash",
smalltalk.method({
selector: "testidentityHash",
category: 'tests',
fn: function () {
    var self = this;
    var o1;
    var o2;
    o1 = smalltalk.send(smalltalk.Object || Object, "_new", []);
    o2 = smalltalk.send(smalltalk.Object || Object, "_new", []);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o1, "_identityHash", []), "__eq_eq", [smalltalk.send(o1, "_identityHash", [])])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(o1, "_identityHash", []), "__eq_eq", [smalltalk.send(o2, "_identityHash", [])])]);
    return self;
},
args: [],
source: "testidentityHash\x0a\x09| o1 o2 |\x0a\x09\x0a\x09o1 := Object new.\x0a\x09o2 := Object new.\x0a\x0a\x09self assert: o1 identityHash == o1 identityHash.\x0a\x09self deny: o1 identityHash == o2 identityHash",
messageSends: ["new", "assert:", "==", "identityHash", "deny:"],
referencedClasses: ["Object"]
}),
smalltalk.ObjectTest);



smalltalk.addClass('PackageTest', smalltalk.TestCase, ['zorkPackage', 'grulPackage', 'backUpCommitPathJs', 'backUpCommitPathSt'], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
    var self = this;
    var $1, $2;
    self['@backUpCommitPathJs'] = smalltalk.send(smalltalk.Package || Package, "_defaultCommitPathJs", []);
    self['@backUpCommitPathSt'] = smalltalk.send(smalltalk.Package || Package, "_defaultCommitPathSt", []);
    smalltalk.send(smalltalk.Package || Package, "_resetCommitPaths", []);
    self['@zorkPackage'] = smalltalk.send(smalltalk.send(smalltalk.Package || Package, "_new", []), "_name_", ["Zork"]);
    $1 = smalltalk.send(smalltalk.Package || Package, "_new", []);
    smalltalk.send($1, "_name_", ["Grul"]);
    smalltalk.send($1, "_commitPathJs_", ["server/grul/js"]);
    smalltalk.send($1, "_commitPathSt_", ["grul/st"]);
    $2 = smalltalk.send($1, "_yourself", []);
    self['@grulPackage'] = $2;
    return self;
},
args: [],
source: "setUp\x0a\x09backUpCommitPathJs := Package defaultCommitPathJs.\x0a\x09backUpCommitPathSt := Package defaultCommitPathSt.\x0a\x0a\x09Package resetCommitPaths.\x0a\x0a\x09zorkPackage := Package new name: 'Zork'.\x0a\x09grulPackage := Package new \x0a\x09\x09\x09\x09\x09name: 'Grul';\x0a\x09\x09\x09\x09\x09commitPathJs: 'server/grul/js';\x0a\x09\x09\x09\x09\x09commitPathSt: 'grul/st';\x0a\x09\x09\x09\x09\x09yourself",
messageSends: ["defaultCommitPathJs", "defaultCommitPathSt", "resetCommitPaths", "name:", "new", "commitPathJs:", "commitPathSt:", "yourself"],
referencedClasses: ["Package"]
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'running',
fn: function () {
    var self = this;
    var $1;
    smalltalk.send(smalltalk.Package || Package, "_defaultCommitPathJs_", [self['@backUpCommitPathJs']]);
    $1 = smalltalk.send(smalltalk.Package || Package, "_defaultCommitPathSt_", [self['@backUpCommitPathSt']]);
    return self;
},
args: [],
source: "tearDown\x0a\x09 Package \x0a\x09\x09defaultCommitPathJs: backUpCommitPathJs;\x0a\x09\x09defaultCommitPathSt: backUpCommitPathSt",
messageSends: ["defaultCommitPathJs:", "defaultCommitPathSt:"],
referencedClasses: ["Package"]
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testGrulCommitPathJsShouldBeServerGrulJs",
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["server/grul/js", smalltalk.send(self['@grulPackage'], "_commitPathJs", [])]);
    return self;
},
args: [],
source: "testGrulCommitPathJsShouldBeServerGrulJs\x0a\x09self assert: 'server/grul/js' equals: grulPackage commitPathJs",
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testGrulCommitPathStShouldBeGrulSt",
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["grul/st", smalltalk.send(self['@grulPackage'], "_commitPathSt", [])]);
    return self;
},
args: [],
source: "testGrulCommitPathStShouldBeGrulSt\x0a\x09self assert: 'grul/st' equals: grulPackage commitPathSt",
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testZorkCommitPathJsShouldBeJs",
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJs",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["js", smalltalk.send(self['@zorkPackage'], "_commitPathJs", [])]);
    return self;
},
args: [],
source: "testZorkCommitPathJsShouldBeJs\x0a\x09self assert: 'js' equals: zorkPackage commitPathJs",
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testZorkCommitPathStShouldBeSt",
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSt",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["st", smalltalk.send(self['@zorkPackage'], "_commitPathSt", [])]);
    return self;
},
args: [],
source: "testZorkCommitPathStShouldBeSt\x0a\x09self assert: 'st' equals: zorkPackage commitPathSt",
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageTest);



smalltalk.addClass('PackageWithDefaultCommitPathChangedTest', smalltalk.PackageTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
    var self = this;
    var $1;
    smalltalk.send(self, "_setUp", [], smalltalk.PackageTest);
    smalltalk.send(smalltalk.Package || Package, "_defaultCommitPathJs_", ["javascripts/"]);
    $1 = smalltalk.send(smalltalk.Package || Package, "_defaultCommitPathSt_", ["smalltalk/"]);
    return self;
},
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x0a\x09Package\x0a\x09\x09defaultCommitPathJs: 'javascripts/';\x0a\x09\x09defaultCommitPathSt: 'smalltalk/'.",
messageSends: ["setUp", "defaultCommitPathJs:", "defaultCommitPathSt:"],
referencedClasses: ["Package"]
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testGrulCommitPathJsShouldBeServerGrulJs",
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["server/grul/js", smalltalk.send(self['@grulPackage'], "_commitPathJs", [])]);
    return self;
},
args: [],
source: "testGrulCommitPathJsShouldBeServerGrulJs\x0a\x09self assert: 'server/grul/js' equals: grulPackage commitPathJs",
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testGrulCommitPathStShouldBeGrulSt",
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["grul/st", smalltalk.send(self['@grulPackage'], "_commitPathSt", [])]);
    return self;
},
args: [],
source: "testGrulCommitPathStShouldBeGrulSt\x0a\x09self assert: 'grul/st' equals: grulPackage commitPathSt",
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testZorkCommitPathJsShouldBeJavascript",
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJavascript",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["javascripts/", smalltalk.send(self['@zorkPackage'], "_commitPathJs", [])]);
    return self;
},
args: [],
source: "testZorkCommitPathJsShouldBeJavascript\x0a\x09self assert: 'javascripts/' equals: zorkPackage commitPathJs",
messageSends: ["assert:equals:", "commitPathJs"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testZorkCommitPathStShouldBeSmalltalk",
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSmalltalk",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["smalltalk/", smalltalk.send(self['@zorkPackage'], "_commitPathSt", [])]);
    return self;
},
args: [],
source: "testZorkCommitPathStShouldBeSmalltalk\x0a\x09self assert: 'smalltalk/' equals: zorkPackage commitPathSt",
messageSends: ["assert:equals:", "commitPathSt"],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);


smalltalk.addMethod(
"_shouldInheritSelectors",
smalltalk.method({
selector: "shouldInheritSelectors",
category: 'accessing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "shouldInheritSelectors\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageWithDefaultCommitPathChangedTest.klass);


smalltalk.addClass('PointTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAccessing",
smalltalk.method({
selector: "testAccessing",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.Point || Point, "_x_y_", [3, 4]), "_x", []), 3]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.Point || Point, "_x_y_", [3, 4]), "_y", []), 4]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Point || Point, "_new", []), "_x_", [3]), "_x", []), 3]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Point || Point, "_new", []), "_y_", [4]), "_y", []), 4]);
    return self;
},
args: [],
source: "testAccessing\x0a\x09self assert: (Point x: 3 y: 4) x equals: 3.\x0a\x09self assert: (Point x: 3 y: 4) y equals: 4.\x0a\x09self assert: (Point new x: 3) x equals: 3.\x0a\x09self assert: (Point new y: 4) y equals: 4",
messageSends: ["assert:equals:", "x", "x:y:", "y", "x:", "new", "y:"],
referencedClasses: ["Point"]
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testArithmetic",
smalltalk.method({
selector: "testArithmetic",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(3, "__at", [4]), "__star", [smalltalk.send(3, "__at", [4])]), smalltalk.send(smalltalk.Point || Point, "_x_y_", [9, 16])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(3, "__at", [4]), "__plus", [smalltalk.send(3, "__at", [4])]), smalltalk.send(smalltalk.Point || Point, "_x_y_", [6, 8])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(3, "__at", [4]), "__minus", [smalltalk.send(3, "__at", [4])]), smalltalk.send(smalltalk.Point || Point, "_x_y_", [0, 0])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(6, "__at", [8]), "__slash", [smalltalk.send(3, "__at", [4])]), smalltalk.send(smalltalk.Point || Point, "_x_y_", [2, 2])]);
    return self;
},
args: [],
source: "testArithmetic\x0a\x09self assert: 3@4 * (3@4 ) equals: (Point x: 9 y: 16).\x0a\x09self assert: 3@4 + (3@4 ) equals: (Point x: 6 y: 8).\x0a\x09self assert: 3@4 - (3@4 ) equals: (Point x: 0 y: 0).\x0a\x09self assert: 6@8 / (3@4 ) equals: (Point x: 2 y: 2)",
messageSends: ["assert:equals:", "*", "@", "x:y:", "+", "-", "/"],
referencedClasses: ["Point"]
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(3, "__at", [4]), smalltalk.send(smalltalk.Point || Point, "_x_y_", [3, 4])]);
    return self;
},
args: [],
source: "testAt\x0a\x09self assert: 3@4 equals: (Point x: 3 y: 4)",
messageSends: ["assert:equals:", "@", "x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testEgality",
smalltalk.method({
selector: "testEgality",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3, "__at", [4]), "__eq", [smalltalk.send(3, "__at", [4])])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(3, "__at", [5]), "__eq", [smalltalk.send(3, "__at", [6])])]);
    return self;
},
args: [],
source: "testEgality\x0a\x09self assert: 3@4 = (3@4).\x0a\x09self deny: 3@5 = (3@6)",
messageSends: ["assert:", "=", "@", "deny:"],
referencedClasses: []
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testTranslateBy",
smalltalk.method({
selector: "testTranslateBy",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(3, "__at", [4]), smalltalk.send(smalltalk.send(3, "__at", [3]), "_translateBy_", [smalltalk.send(0, "__at", [1])])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(3, "__at", [2]), smalltalk.send(smalltalk.send(3, "__at", [3]), "_translateBy_", [smalltalk.send(0, "__at", [smalltalk.send(1, "_negated", [])])])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(5, "__at", [6]), smalltalk.send(smalltalk.send(3, "__at", [3]), "_translateBy_", [smalltalk.send(2, "__at", [3])])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(0, "__at", [3]), smalltalk.send(smalltalk.send(3, "__at", [3]), "_translateBy_", [smalltalk.send(smalltalk.send(3, "_negated", []), "__at", [0])])]);
    return self;
},
args: [],
source: "testTranslateBy\x0a\x09self assert: 3@4 equals: (3@3 translateBy: 0@1).\x0a\x09self assert: 3@2 equals: (3@3 translateBy: 0@1 negated).\x0a\x09self assert: 5@6 equals: (3@3 translateBy: 2@3).\x0a\x09self assert: 0@3 equals: (3@3 translateBy: 3 negated @0).",
messageSends: ["assert:equals:", "@", "translateBy:", "negated"],
referencedClasses: []
}),
smalltalk.PointTest);



smalltalk.addClass('RandomTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_textNext",
smalltalk.method({
selector: "textNext",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(10000, "_timesRepeat_", [function () {var current;var next;next = smalltalk.send(smalltalk.send(smalltalk.Random || Random, "_new", []), "_next", []);smalltalk.send(self, "_assert_", [smalltalk.send(next, "__gt_eq", [0])]);smalltalk.send(self, "_assert_", [smalltalk.send(next, "__lt", [1])]);smalltalk.send(self, "_deny_", [smalltalk.send(current, "__eq", [next])]);return smalltalk.send(next, "__eq", [current]);}]);
    return self;
},
args: [],
source: "textNext\x0a\x0a\x0910000 timesRepeat: [\x0a\x09\x09\x09| current next | \x0a\x09\x09\x09next := Random new next.\x0a\x09\x09\x09self assert: (next >= 0).\x0a\x09\x09\x09self assert: (next < 1).\x0a\x09\x09\x09self deny: current = next.\x0a\x09\x09\x09next = current]",
messageSends: ["timesRepeat:", "next", "new", "assert:", ">=", "<", "deny:", "="],
referencedClasses: ["Random"]
}),
smalltalk.RandomTest);



smalltalk.addClass('SetTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAddRemove",
smalltalk.method({
selector: "testAddRemove",
category: 'tests',
fn: function () {
    var self = this;
    var set;
    set = smalltalk.send(smalltalk.Set || Set, "_new", []);
    smalltalk.send(self, "_assert_", [smalltalk.send(set, "_isEmpty", [])]);
    smalltalk.send(set, "_add_", [3]);
    smalltalk.send(self, "_assert_", [smalltalk.send(set, "_includes_", [3])]);
    smalltalk.send(set, "_add_", [5]);
    smalltalk.send(self, "_assert_", [smalltalk.send(set, "_includes_", [5])]);
    smalltalk.send(set, "_remove_", [3]);
    smalltalk.send(self, "_deny_", [smalltalk.send(set, "_includes_", [3])]);
    return self;
},
args: [],
source: "testAddRemove\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09\x0a\x09self assert: set isEmpty.\x0a\x0a\x09set add: 3.\x0a\x09self assert: (set includes: 3).\x0a\x0a\x09set add: 5.\x0a\x09self assert: (set includes: 5).\x0a\x0a\x09set remove: 3.\x0a\x09self deny: (set includes: 3)",
messageSends: ["new", "assert:", "isEmpty", "add:", "includes:", "remove:", "deny:"],
referencedClasses: ["Set"]
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(smalltalk.Set || Set, "_new", []), "_at_put_", [1, 2]);}, smalltalk.Error || Error]);
    return self;
},
args: [],
source: "testAt\x0a\x09self should: [Set new at: 1 put: 2] raise: Error",
messageSends: ["should:raise:", "at:put:", "new"],
referencedClasses: ["Set", "Error"]
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
category: 'tests',
fn: function () {
    var self = this;
    var $1, $2;
    var set;
    set = smalltalk.send(smalltalk.Set || Set, "_new", []);
    smalltalk.send(self, "_assert_equals_", ["a Set ()", smalltalk.send(set, "_printString", [])]);
    smalltalk.send(set, "_add_", [1]);
    $1 = smalltalk.send(set, "_add_", [3]);
    smalltalk.send(self, "_assert_equals_", ["a Set (1 3)", smalltalk.send(set, "_printString", [])]);
    smalltalk.send(set, "_add_", ["foo"]);
    smalltalk.send(self, "_assert_equals_", ["a Set (1 3 'foo')", smalltalk.send(set, "_printString", [])]);
    smalltalk.send(set, "_remove_", [1]);
    $2 = smalltalk.send(set, "_remove_", [3]);
    smalltalk.send(self, "_assert_equals_", ["a Set ('foo')", smalltalk.send(set, "_printString", [])]);
    smalltalk.send(set, "_add_", [3]);
    smalltalk.send(self, "_assert_equals_", ["a Set ('foo' 3)", smalltalk.send(set, "_printString", [])]);
    smalltalk.send(set, "_add_", [3]);
    smalltalk.send(self, "_assert_equals_", ["a Set ('foo' 3)", smalltalk.send(set, "_printString", [])]);
    return self;
},
args: [],
source: "testPrintString\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09self assert: 'a Set ()' equals: ( set printString ).\x0a\x09set add: 1; add: 3.\x0a\x09self assert: 'a Set (1 3)' equals: ( set printString ).\x0a\x09set add: 'foo'.\x0a\x09self assert: 'a Set (1 3 ''foo'')' equals: ( set printString ).\x0a\x09set remove: 1; remove: 3.\x0a\x09self assert: 'a Set (''foo'')' equals: ( set printString ).\x0a\x09set add: 3.\x0a\x09self assert: 'a Set (''foo'' 3)' equals: ( set printString ).\x0a\x09set add: 3.\x0a\x09self assert: 'a Set (''foo'' 3)' equals: ( set printString ).",
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:"],
referencedClasses: ["Set"]
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.Set || Set, "_new", []), "_size", []), 0]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.Set || Set, "_withAll_", [[1, 2, 3, 4]]), "_size", []), 4]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.Set || Set, "_withAll_", [[1, 1, 1, 1]]), "_size", []), 1]);
    return self;
},
args: [],
source: "testSize\x0a\x09self assert: Set new size equals: 0.\x0a\x09self assert: (Set withAll: #(1 2 3 4)) size equals: 4.\x0a\x09self assert: (Set withAll: #(1 1 1 1)) size equals: 1",
messageSends: ["assert:equals:", "size", "new", "withAll:"],
referencedClasses: ["Set"]
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testUnicity",
smalltalk.method({
selector: "testUnicity",
category: 'tests',
fn: function () {
    var self = this;
    var set;
    set = smalltalk.send(smalltalk.Set || Set, "_new", []);
    smalltalk.send(set, "_add_", [21]);
    smalltalk.send(set, "_add_", ["hello"]);
    smalltalk.send(set, "_add_", [21]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(set, "_size", []), "__eq", [2])]);
    smalltalk.send(set, "_add_", ["hello"]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(set, "_size", []), "__eq", [2])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(set, "_asArray", []), [21, "hello"]]);
    return self;
},
args: [],
source: "testUnicity\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09set add: 21.\x0a\x09set add: 'hello'.\x0a\x0a\x09set add: 21.\x0a\x09self assert: set size = 2.\x0a\x09\x0a\x09set add: 'hello'.\x0a\x09self assert: set size = 2.\x0a\x0a\x09self assert: set asArray equals: #(21 'hello')",
messageSends: ["new", "add:", "assert:", "=", "size", "assert:equals:", "asArray"],
referencedClasses: ["Set"]
}),
smalltalk.SetTest);



smalltalk.addClass('UndefinedTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(nil, "_copy", []), nil]);
    return self;
},
args: [],
source: "testCopying\x0a\x09self assert: nil copy equals: nil",
messageSends: ["assert:equals:", "copy"],
referencedClasses: []
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testDeepCopy",
smalltalk.method({
selector: "testDeepCopy",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(nil, "_deepCopy", []), "__eq", [nil])]);
    return self;
},
args: [],
source: "testDeepCopy\x0a\x09self assert: nil deepCopy = nil",
messageSends: ["assert:", "=", "deepCopy"],
referencedClasses: []
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testIfNil",
smalltalk.method({
selector: "testIfNil",
category: 'tests',
fn: function () {
    var self = this;
    var $1, $2, $3;
    if (($receiver = nil) == nil || $receiver == undefined) {
        $1 = true;
    } else {
        $1 = nil;
    }
    smalltalk.send(self, "_assert_equals_", [$1, true]);
    if (($receiver = nil) == nil || $receiver == undefined) {
        $2 = nil;
    } else {
        $2 = true;
    }
    smalltalk.send(self, "_deny_", [smalltalk.send($2, "__eq", [true])]);
    if (($receiver = nil) == nil || $receiver == undefined) {
        $3 = true;
    } else {
        $3 = false;
    }
    smalltalk.send(self, "_assert_equals_", [$3, true]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(nil, "_ifNotNil_ifNil_", [function () {return true;}, function () {return false;}]), "__eq", [true])]);
    return self;
},
args: [],
source: "testIfNil\x0a\x09self assert: (nil ifNil: [true]) equals: true.\x0a\x09self deny: (nil ifNotNil: [true]) = true.\x0a\x09self assert: (nil ifNil: [true] ifNotNil: [false]) equals: true.\x0a\x09self deny: (nil ifNotNil: [true] ifNil: [false]) = true",
messageSends: ["assert:equals:", "ifNil:", "deny:", "=", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"],
referencedClasses: []
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testIsNil",
smalltalk.method({
selector: "testIsNil",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(nil, "_isNil", [])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(nil, "_notNil", [])]);
    return self;
},
args: [],
source: "testIsNil\x0a\x09self assert: nil isNil.\x0a\x09self deny: nil notNil.",
messageSends: ["assert:", "isNil", "deny:", "notNil"],
referencedClasses: []
}),
smalltalk.UndefinedTest);



