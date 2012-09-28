smalltalk.addPackage('Kernel-Tests', {});
smalltalk.addClass('BlockClosureTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCompiledSource",
smalltalk.method({
selector: "testCompiledSource",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(function () {return smalltalk.send(1, "__plus", [1]);}, "_compiledSource", []), "_includesSubString_", ["function"])]);
    return self;
}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testEnsure",
smalltalk.method({
selector: "testEnsure",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(function () {return smalltalk.send(smalltalk.Error || Error, "_new", []);}, "_ensure_", [function () {return true;}])]);
    return self;
}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testNumArgs",
smalltalk.method({
selector: "testNumArgs",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function () {}, "_numArgs", []), 0]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function (a, b) {}, "_numArgs", []), 2]);
    return self;
}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testOnDo",
smalltalk.method({
selector: "testOnDo",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(function () {return smalltalk.send(smalltalk.send(smalltalk.Error || Error, "_new", []), "_signal", []);}, "_on_do_", [smalltalk.Error || Error, function (ex) {return true;}])]);
    return self;
}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testValue",
smalltalk.method({
selector: "testValue",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function () {return smalltalk.send(1, "__plus", [1]);}, "_value", []), 2]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function (x) {return smalltalk.send(x, "__plus", [1]);}, "_value_", [2]), 3]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function (x, y) {return smalltalk.send(x, "__star", [y]);}, "_value_value_", [2, 4]), 8]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function (a, b, c) {return 1;}, "_value", []), 1]);
    return self;
}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testValueWithPossibleArguments",
smalltalk.method({
selector: "testValueWithPossibleArguments",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function () {return 1;}, "_valueWithPossibleArguments_", [[3, 4]]), 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function (a) {return smalltalk.send(a, "__plus", [4]);}, "_valueWithPossibleArguments_", [[3, 4]]), 7]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(function (a, b) {return smalltalk.send(a, "__plus", [b]);}, "_valueWithPossibleArguments_", [[3, 4, 5]]), 7]);
    return self;
}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testWhileFalse",
smalltalk.method({
selector: "testWhileFalse",
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
}
}),
smalltalk.BlockClosureTest);

smalltalk.addMethod(
"_testWhileTrue",
smalltalk.method({
selector: "testWhileTrue",
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
}
}),
smalltalk.BlockClosureTest);



smalltalk.addClass('BooleanTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
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
}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
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
}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testIfTrueIfFalse",
smalltalk.method({
selector: "testIfTrueIfFalse",
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
}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testLogic",
smalltalk.method({
selector: "testLogic",
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
}
}),
smalltalk.BooleanTest);

smalltalk.addMethod(
"_testLogicKeywords",
smalltalk.method({
selector: "testLogicKeywords",
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
}
}),
smalltalk.BooleanTest);



smalltalk.addClass('ClassBuilderTest', smalltalk.TestCase, ['builder', 'theClass'], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function () {
    var self = this;
    self['@builder'] = smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []);
    return self;
}
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
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
}
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testClassCopy",
smalltalk.method({
selector: "testClassCopy",
fn: function () {
    var self = this;
    self['@theClass'] = smalltalk.send(self['@builder'], "_copyClass_named_", [smalltalk.ObjectMock || ObjectMock, "ObjectMock2"]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@theClass'], "_superclass", []), "__eq_eq", [smalltalk.send(smalltalk.ObjectMock || ObjectMock, "_superclass", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@theClass'], "_instanceVariableNames", []), "__eq_eq", [smalltalk.send(smalltalk.ObjectMock || ObjectMock, "_instanceVariableNames", [])])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@theClass'], "_name", []), "ObjectMock2"]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@theClass'], "_package", []), "__eq_eq", [smalltalk.send(smalltalk.ObjectMock || ObjectMock, "_package", [])])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self['@theClass'], "_methodDictionary", []), "_keys", []), smalltalk.send(smalltalk.send(smalltalk.ObjectMock || ObjectMock, "_methodDictionary", []), "_keys", [])]);
    return self;
}
}),
smalltalk.ClassBuilderTest);

smalltalk.addMethod(
"_testInstanceVariableNames",
smalltalk.method({
selector: "testInstanceVariableNames",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@builder'], "_instanceVariableNamesFor_", ["  hello   world   "]), ["hello", "world"]]);
    return self;
}
}),
smalltalk.ClassBuilderTest);



smalltalk.addClass('CollectionTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_assertSameContents_as_",
smalltalk.method({
selector: "assertSameContents:as:",
fn: function (aCollection, anotherCollection) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(aCollection, "_size", []), "__eq", [smalltalk.send(anotherCollection, "_size", [])])]);
    smalltalk.send(aCollection, "_do_", [function (each) {return smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(aCollection, "_occurrencesOf_", [each]), "__eq", [smalltalk.send(anotherCollection, "_occurrencesOf_", [each])])]);}]);
    return self;
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_collectionClass", []), "_withAll_", [smalltalk.send(self, "_defaultValues", [])]);
    return $1;
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_collectionClass", []);
    return $1;
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_collectionClass", []), "_withAll_", [["a", "b", "c", 1, 2, 1, "a"]]);
    return $1;
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_defaultValues",
smalltalk.method({
selector: "defaultValues",
fn: function () {
    var self = this;
    return [1, 2, 3, -4];
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_isCollectionReadOnly",
smalltalk.method({
selector: "isCollectionReadOnly",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsArray",
smalltalk.method({
selector: "testAsArray",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(self, "_collection", []), smalltalk.send(smalltalk.send(self, "_collection", []), "_asArray", [])]);
    return self;
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsOrderedCollection",
smalltalk.method({
selector: "testAsOrderedCollection",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(self, "_collection", []), smalltalk.send(smalltalk.send(self, "_collection", []), "_asOrderedCollection", [])]);
    return self;
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testAsSet",
smalltalk.method({
selector: "testAsSet",
fn: function () {
    var self = this;
    var c;
    var set;
    c = smalltalk.send(self, "_collectionWithDuplicates", []);
    set = smalltalk.send(c, "_asSet", []);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(set, "_size", []), "__eq", [5])]);
    smalltalk.send(c, "_do_", [function (each) {return smalltalk.send(self, "_assert_", [smalltalk.send(set, "_includes_", [each])]);}]);
    return self;
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
fn: function () {
    var self = this;
    var newCollection;
    newCollection = [1, 2, 3, 4];
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_collect_", [function (each) {return smalltalk.send(each, "_abs", []);}]), newCollection]);
    return self;
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_detect_", [function (each) {return smalltalk.send(each, "__lt", [0]);}]), "__eq", [-4])]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(self, "_collection", []), "_detect_", [function (each) {return smalltalk.send(each, "__eq", [6]);}]);}, smalltalk.Error || Error]);
    return self;
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testDo",
smalltalk.method({
selector: "testDo",
fn: function () {
    var self = this;
    var newCollection;
    newCollection = smalltalk.send(smalltalk.OrderedCollection || OrderedCollection, "_new", []);
    smalltalk.send(smalltalk.send(self, "_collection", []), "_do_", [function (each) {return smalltalk.send(newCollection, "_add_", [each]);}]);
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(self, "_collection", []), newCollection]);
    return self;
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testIsEmpty",
smalltalk.method({
selector: "testIsEmpty",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collectionClass", []), "_new", []), "_isEmpty", [])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_isEmpty", [])]);
    return self;
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
fn: function () {
    var self = this;
    var newCollection;
    newCollection = [2, -4];
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_select_", [function (each) {return smalltalk.send(each, "_even", []);}]), newCollection]);
    return self;
}
}),
smalltalk.CollectionTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_collectionClass", []), "_new", []), "_size", []), "__eq", [0])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_size", []), "__eq", [4])]);
    return self;
}
}),
smalltalk.CollectionTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function () {
    var self = this;
    return nil;
}
}),
smalltalk.CollectionTest.klass);

smalltalk.addMethod(
"_isAbstract",
smalltalk.method({
selector: "isAbstract",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_collectionClass", []), "_isNil", []);
    return $1;
}
}),
smalltalk.CollectionTest.klass);


smalltalk.addClass('HashedCollectionTest', smalltalk.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.HashedCollection._fromPairs_([smalltalk.send("a", "__minus_gt", [1]), smalltalk.send("b", "__minus_gt", [2]), smalltalk.send("c", "__minus_gt", [3]), smalltalk.send("d", "__minus_gt", [-4])]);
    return $1;
}
}),
smalltalk.HashedCollectionTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.HashedCollection._fromPairs_([smalltalk.send("a", "__minus_gt", [1]), smalltalk.send("b", "__minus_gt", [2]), smalltalk.send("c", "__minus_gt", [3]), smalltalk.send("d", "__minus_gt", [-4]), smalltalk.send("e", "__minus_gt", [1]), smalltalk.send("f", "__minus_gt", [2]), smalltalk.send("g", "__minus_gt", [10])]);
    return $1;
}
}),
smalltalk.HashedCollectionTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function () {
    var self = this;
    return smalltalk.HashedCollection || HashedCollection;
}
}),
smalltalk.HashedCollectionTest.klass);


smalltalk.addClass('DictionaryTest', smalltalk.HashedCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
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
}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
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
}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testAccessing",
smalltalk.method({
selector: "testAccessing",
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
}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testDynamicDictionaries",
smalltalk.method({
selector: "testDynamicDictionaries",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.HashedCollection._fromPairs_([smalltalk.send("hello", "__minus_gt", [1])]), "_asDictionary", []), "__eq", [smalltalk.send(smalltalk.Dictionary || Dictionary, "_with_", [smalltalk.send("hello", "__minus_gt", [1])])])]);
    return self;
}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
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
}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfAbsent",
smalltalk.method({
selector: "testIfAbsent",
fn: function () {
    var self = this;
    var d;
    var visited;
    visited = false;
    d = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(d, "_at_ifAbsent_", ["hello", function () {visited = true;return visited;}]);
    smalltalk.send(self, "_assert_", [visited]);
    return self;
}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfPresent",
smalltalk.method({
selector: "testIfPresent",
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
}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testIfPresentIfAbsent",
smalltalk.method({
selector: "testIfPresentIfAbsent",
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
}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testKeys",
smalltalk.method({
selector: "testKeys",
fn: function () {
    var self = this;
    var d;
    d = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(d, "_at_put_", [1, 2]);
    smalltalk.send(d, "_at_put_", [2, 3]);
    smalltalk.send(d, "_at_put_", [3, 4]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_keys", []), "__eq", [[1, 2, 3]])]);
    return self;
}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
fn: function () {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send($1, "_at_put_", ["firstname", "James"]);
    smalltalk.send($1, "_at_put_", ["lastname", "Bond"]);
    $2 = smalltalk.send($1, "_printString", []);
    smalltalk.send(self, "_assert_equals_", ["a Dictionary('firstname'->'James' , 'lastname'->'Bond')", $2]);
    return self;
}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testRemoveKey",
smalltalk.method({
selector: "testRemoveKey",
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
}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testRemoveKeyIfAbsent",
smalltalk.method({
selector: "testRemoveKeyIfAbsent",
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
}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
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
}
}),
smalltalk.DictionaryTest);

smalltalk.addMethod(
"_testValues",
smalltalk.method({
selector: "testValues",
fn: function () {
    var self = this;
    var d;
    d = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(d, "_at_put_", [1, 2]);
    smalltalk.send(d, "_at_put_", [2, 3]);
    smalltalk.send(d, "_at_put_", [3, 4]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(d, "_values", []), "__eq", [[2, 3, 4]])]);
    return self;
}
}),
smalltalk.DictionaryTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function () {
    var self = this;
    return smalltalk.Dictionary || Dictionary;
}
}),
smalltalk.DictionaryTest.klass);


smalltalk.addClass('SequenceableCollectionTest', smalltalk.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [4]), "__eq", [-4])]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [5]);}, smalltalk.Error || Error]);
    return self;
}
}),
smalltalk.SequenceableCollectionTest);

smalltalk.addMethod(
"_testAtIfAbsent",
smalltalk.method({
selector: "testAtIfAbsent",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_at_ifAbsent_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_size", []), "__plus", [1]), function () {return "none";}]), "__eq", ["none"])]);
    return self;
}
}),
smalltalk.SequenceableCollectionTest);



smalltalk.addClass('ArrayTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAtIfAbsent",
smalltalk.method({
selector: "testAtIfAbsent",
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
}
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testFirstN",
smalltalk.method({
selector: "testFirstN",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [[1, 2, 3], smalltalk.send([1, 2, 3, 4, 5], "_first_", [3])]);
    return self;
}
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testIfEmpty",
smalltalk.method({
selector: "testIfEmpty",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["zork", smalltalk.send("", "_ifEmpty_", [function () {return "zork";}])]);
    return self;
}
}),
smalltalk.ArrayTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
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
}
}),
smalltalk.ArrayTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function () {
    var self = this;
    return smalltalk.Array || Array;
}
}),
smalltalk.ArrayTest.klass);


smalltalk.addClass('StringTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function () {
    var self = this;
    return "hello";
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function () {
    var self = this;
    return "abbaerte";
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAddRemove",
smalltalk.method({
selector: "testAddRemove",
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send("hello", "_add_", ["a"]);}, smalltalk.Error || Error]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send("hello", "_remove_", ["h"]);}, smalltalk.Error || Error]);
    return self;
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAsArray",
smalltalk.method({
selector: "testAsArray",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_asArray", []), "__eq", [["h", "e", "l", "l", "o"]])]);
    return self;
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_", [1]), "__eq", ["h"])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_", [5]), "__eq", ["o"])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_at_ifAbsent_", [6, function () {return nil;}]), "__eq", [nil])]);
    return self;
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testAtPut",
smalltalk.method({
selector: "testAtPut",
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send("hello", "_at_put_", [1, "a"]);}, smalltalk.Error || Error]);
    return self;
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
fn: function () {
    var self = this;
    var newCollection;
    newCollection = "hheelllloo";
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_collect_", [function (each) {return smalltalk.send(each, "__comma", [each]);}]), newCollection]);
    return self;
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testCopyWithoutAll",
smalltalk.method({
selector: "testCopyWithoutAll",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send("*hello* *world*", "_copyWithoutAll_", ["*"])]);
    return self;
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_detect_", [function (each) {return smalltalk.send(each, "__eq", ["h"]);}]), "__eq", ["h"])]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(self, "_collection", []), "_detect_", [function (each) {return smalltalk.send(each, "__eq", [6]);}]);}, smalltalk.Error || Error]);
    return self;
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq", ["hello"])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("hello", "__eq", ["world"])]);
    smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq", [smalltalk.send("hello", "_yourself", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_yourself", []), "__eq", ["hello"])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq", [0])]);
    return self;
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq_eq", ["hello"])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("hello", "__eq_eq", ["world"])]);
    smalltalk.send(self, "_assert_", [smalltalk.send("hello", "__eq_eq", [smalltalk.send("hello", "_yourself", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("hello", "_yourself", []), "__eq_eq", ["hello"])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("", "__eq_eq", [0])]);
    return self;
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testIncludesSubString",
smalltalk.method({
selector: "testIncludesSubString",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send("amber", "_includesSubString_", ["ber"])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("amber", "_includesSubString_", ["zork"])]);
    return self;
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testJoin",
smalltalk.method({
selector: "testJoin",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["hello,world", smalltalk.send(",", "_join_", [["hello", "world"]])]);
    return self;
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
fn: function () {
    var self = this;
    var newCollection;
    newCollection = "o";
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_select_", [function (each) {return smalltalk.send(each, "__eq", ["o"]);}]), newCollection]);
    return self;
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send("smalltalk", "_size", []), 9]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send("", "_size", []), 0]);
    return self;
}
}),
smalltalk.StringTest);

smalltalk.addMethod(
"_testStreamContents",
smalltalk.method({
selector: "testStreamContents",
fn: function () {
    var self = this;
    var $1;
    smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send(smalltalk.String || String, "_streamContents_", [function (aStream) {smalltalk.send(aStream, "_nextPutAll_", ["hello"]);smalltalk.send(aStream, "_space", []);$1 = smalltalk.send(aStream, "_nextPutAll_", ["world"]);return $1;}])]);
    return self;
}
}),
smalltalk.StringTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function () {
    var self = this;
    return smalltalk.String || String;
}
}),
smalltalk.StringTest.klass);


smalltalk.addClass('SymbolTest', smalltalk.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function () {
    var self = this;
    return smalltalk.symbolFor("hello");
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_collectionWithDuplicates",
smalltalk.method({
selector: "collectionWithDuplicates",
fn: function () {
    var self = this;
    return smalltalk.symbolFor("phhaaarorra");
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAsString",
smalltalk.method({
selector: "testAsString",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.symbolFor("hello"), "_asString", []), "hello"]);
    return self;
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAsSymbol",
smalltalk.method({
selector: "testAsSymbol",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq_eq", [smalltalk.send(smalltalk.symbolFor("hello"), "_asSymbol", [])])]);
    return self;
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_at_", [1]), "__eq", ["h"])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_at_", [5]), "__eq", ["o"])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_at_ifAbsent_", [6, function () {return nil;}]), "__eq", [nil])]);
    return self;
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testAtPut",
smalltalk.method({
selector: "testAtPut",
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send("hello", "_at_put_", [1, "a"]);}, smalltalk.Error || Error]);
    return self;
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testCollect",
smalltalk.method({
selector: "testCollect",
fn: function () {
    var self = this;
    var newCollection;
    newCollection = smalltalk.symbolFor("hheelllloo");
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_collect_", [function (each) {return smalltalk.send(each, "__comma", [each]);}]), newCollection]);
    return self;
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testComparing",
smalltalk.method({
selector: "testComparing",
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
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_copy", []), "__eq_eq", [smalltalk.symbolFor("hello")])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_deepCopy", []), "__eq_eq", [smalltalk.symbolFor("hello")])]);
    return self;
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testDetect",
smalltalk.method({
selector: "testDetect",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_detect_", [function (each) {return smalltalk.send(each, "__eq", ["h"]);}]), "__eq", ["h"])]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(self, "_collection", []), "_detect_", [function (each) {return smalltalk.send(each, "__eq", ["z"]);}]);}, smalltalk.Error || Error]);
    return self;
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", [smalltalk.symbolFor("hello")])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", [smalltalk.symbolFor("world")])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", [smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", []), "__eq", [smalltalk.symbolFor("hello")])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", ["hello"])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("hello", "__eq", [smalltalk.symbolFor("hello")])]);
    return self;
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq_eq", [smalltalk.symbolFor("hello")])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq_eq", [smalltalk.symbolFor("world")])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "__eq", [smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_yourself", []), "__eq", [smalltalk.send(smalltalk.send(smalltalk.symbolFor("hello"), "_asString", []), "_asSymbol", [])])]);
    return self;
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIsEmpty",
smalltalk.method({
selector: "testIsEmpty",
fn: function () {
    var self = this;
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_isEmpty", [])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send("", "_asSymbol", []), "_isEmpty", [])]);
    return self;
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testIsSymbolIsString",
smalltalk.method({
selector: "testIsSymbolIsString",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.symbolFor("hello"), "_isSymbol", [])]);
    smalltalk.send(self, "_deny_", [smalltalk.send("hello", "_isSymbol", [])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.symbolFor("hello"), "_isString", [])]);
    smalltalk.send(self, "_assert_", [smalltalk.send("hello", "_isString", [])]);
    return self;
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testSelect",
smalltalk.method({
selector: "testSelect",
fn: function () {
    var self = this;
    var newCollection;
    newCollection = "o";
    smalltalk.send(self, "_assertSameContents_as_", [smalltalk.send(smalltalk.send(self, "_collection", []), "_select_", [function (each) {return smalltalk.send(each, "__eq", ["o"]);}]), newCollection]);
    return self;
}
}),
smalltalk.SymbolTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.symbolFor("a"), "_size", []), 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.symbolFor("aaaaa"), "_size", []), 5]);
    return self;
}
}),
smalltalk.SymbolTest);


smalltalk.addMethod(
"_collectionClass",
smalltalk.method({
selector: "collectionClass",
fn: function () {
    var self = this;
    return smalltalk.Symbol || Symbol;
}
}),
smalltalk.SymbolTest.klass);


smalltalk.addClass('JSObjectProxyTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_jsObject",
smalltalk.method({
selector: "jsObject",
fn: function () {
    var self = this;
    return jsObject = {a: 1, b: function () {return 2;}, c: function (object) {return object;}, d: ""};
    return self;
}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testDNU",
smalltalk.method({
selector: "testDNU",
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(self, "_jsObject", []), "_foo", []);}, smalltalk.MessageNotUnderstood || MessageNotUnderstood]);
    return self;
}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testMessageSend",
smalltalk.method({
selector: "testMessageSend",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_a", []), 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_b", []), 2]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_c_", [3]), 3]);
    return self;
}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testMethodWithArguments",
smalltalk.method({
selector: "testMethodWithArguments",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(self, "_jsObject", []), "_c_", [1]), 1]);
    return self;
}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testPrinting",
smalltalk.method({
selector: "testPrinting",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_jsObject", []), "_printString", []), "__eq", ["[object Object]"])]);
    return self;
}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testPropertyThatReturnsEmptyString",
smalltalk.method({
selector: "testPropertyThatReturnsEmptyString",
fn: function () {
    var self = this;
    var object;
    object = smalltalk.send(self, "_jsObject", []);
    smalltalk.send(self, "_assert_equals_", ["", smalltalk.send(object, "_d", [])]);
    smalltalk.send(object, "_d_", ["hello"]);
    smalltalk.send(self, "_assert_equals_", ["hello", smalltalk.send(object, "_d", [])]);
    return self;
}
}),
smalltalk.JSObjectProxyTest);

smalltalk.addMethod(
"_testYourself",
smalltalk.method({
selector: "testYourself",
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
}
}),
smalltalk.JSObjectProxyTest);



smalltalk.addClass('NumberTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAbs",
smalltalk.method({
selector: "testAbs",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(4, "_abs", []), "__eq", [4])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(-4, "_abs", []), "__eq", [4])]);
    return self;
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testArithmetic",
smalltalk.method({
selector: "testArithmetic",
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
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testComparison",
smalltalk.method({
selector: "testComparison",
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
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1, "_copy", []), "__eq_eq", [1])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(1, "_deepCopy", []), "__eq_eq", [1])]);
    return self;
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
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
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
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
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testMinMax",
smalltalk.method({
selector: "testMinMax",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(2, "_max_", [5]), 5]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(2, "_min_", [5]), 2]);
    return self;
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testNegated",
smalltalk.method({
selector: "testNegated",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3, "_negated", []), "__eq", [-3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(-3, "_negated", []), "__eq", [3])]);
    return self;
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testPrintShowingDecimalPlaces",
smalltalk.method({
selector: "testPrintShowingDecimalPlaces",
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
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testRounded",
smalltalk.method({
selector: "testRounded",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3, "_rounded", []), "__eq", [3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3.212, "_rounded", []), "__eq", [3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3.51, "_rounded", []), "__eq", [4])]);
    return self;
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testSqrt",
smalltalk.method({
selector: "testSqrt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(4, "_sqrt", []), "__eq", [2])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(16, "_sqrt", []), "__eq", [4])]);
    return self;
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testSquared",
smalltalk.method({
selector: "testSquared",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(4, "_squared", []), "__eq", [16])]);
    return self;
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTimesRepeat",
smalltalk.method({
selector: "testTimesRepeat",
fn: function () {
    var self = this;
    var i;
    i = 0;
    smalltalk.send(0, "_timesRepeat_", [function () {i = smalltalk.send(i, "__plus", [1]);return i;}]);
    smalltalk.send(self, "_assert_equals_", [i, 0]);
    smalltalk.send(5, "_timesRepeat_", [function () {i = smalltalk.send(i, "__plus", [1]);return i;}]);
    smalltalk.send(self, "_assert_equals_", [i, 5]);
    return self;
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTo",
smalltalk.method({
selector: "testTo",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(1, "_to_", [5]), [1, 2, 3, 4, 5]]);
    return self;
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testToBy",
smalltalk.method({
selector: "testToBy",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(0, "_to_by_", [6, 2]), [0, 2, 4, 6]]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(1, "_to_by_", [4, 0]);}, smalltalk.Error || Error]);
    return self;
}
}),
smalltalk.NumberTest);

smalltalk.addMethod(
"_testTruncated",
smalltalk.method({
selector: "testTruncated",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3, "_truncated", []), "__eq", [3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3.212, "_truncated", []), "__eq", [3])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3.51, "_truncated", []), "__eq", [3])]);
    return self;
}
}),
smalltalk.NumberTest);



smalltalk.addClass('ObjectMock', smalltalk.Object, ['foo', 'bar'], 'Kernel-Tests');
smalltalk.addMethod(
"_foo",
smalltalk.method({
selector: "foo",
fn: function () {
    var self = this;
    return self['@foo'];
}
}),
smalltalk.ObjectMock);

smalltalk.addMethod(
"_foo_",
smalltalk.method({
selector: "foo:",
fn: function (anObject) {
    var self = this;
    self['@foo'] = anObject;
    return self;
}
}),
smalltalk.ObjectMock);



smalltalk.addClass('ObjectTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testBasicAccess",
smalltalk.method({
selector: "testBasicAccess",
fn: function () {
    var self = this;
    var o;
    o = smalltalk.send(smalltalk.Object || Object, "_new", []);
    smalltalk.send(o, "_basicAt_put_", ["a", 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_basicAt_", ["a"]), 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_basicAt_", ["b"]), nil]);
    return self;
}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testBasicPerform",
smalltalk.method({
selector: "testBasicPerform",
fn: function () {
    var self = this;
    var o;
    o = smalltalk.send(smalltalk.Object || Object, "_new", []);
    smalltalk.send(o, "_basicAt_put_", ["func", function () {return "hello";}]);
    smalltalk.send(o, "_basicAt_put_", ["func2", function (a) {return smalltalk.send(a, "__plus", [1]);}]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_basicPerform_", ["func"]), "hello"]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_basicPerform_withArguments_", ["func2", [3]]), 4]);
    return self;
}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testDNU",
smalltalk.method({
selector: "testDNU",
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(smalltalk.Object || Object, "_new", []), "_foo", []);}, smalltalk.MessageNotUnderstood || MessageNotUnderstood]);
    return self;
}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testEquality",
smalltalk.method({
selector: "testEquality",
fn: function () {
    var self = this;
    var o;
    o = smalltalk.send(smalltalk.Object || Object, "_new", []);
    smalltalk.send(self, "_deny_", [smalltalk.send(o, "__eq", [smalltalk.send(smalltalk.Object || Object, "_new", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq", [o])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o, "_yourself", []), "__eq", [o])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq", [smalltalk.send(o, "_yourself", [])])]);
    return self;
}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testHalt",
smalltalk.method({
selector: "testHalt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(smalltalk.Object || Object, "_new", []), "_halt", []);}, smalltalk.Error || Error]);
    return self;
}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testIdentity",
smalltalk.method({
selector: "testIdentity",
fn: function () {
    var self = this;
    var o;
    o = smalltalk.send(smalltalk.Object || Object, "_new", []);
    smalltalk.send(self, "_deny_", [smalltalk.send(o, "__eq_eq", [smalltalk.send(smalltalk.Object || Object, "_new", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq_eq", [o])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o, "_yourself", []), "__eq_eq", [o])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(o, "__eq_eq", [smalltalk.send(o, "_yourself", [])])]);
    return self;
}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testIfNil",
smalltalk.method({
selector: "testIfNil",
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
}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testInstVars",
smalltalk.method({
selector: "testInstVars",
fn: function () {
    var self = this;
    var o;
    o = smalltalk.send(smalltalk.ObjectMock || ObjectMock, "_new", []);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_instVarAt_", [smalltalk.symbolFor("foo")]), nil]);
    smalltalk.send(o, "_instVarAt_put_", [smalltalk.symbolFor("foo"), 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_instVarAt_", [smalltalk.symbolFor("foo")]), 1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(o, "_instVarAt_", ["foo"]), 1]);
    return self;
}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testNilUndefined",
smalltalk.method({
selector: "testNilUndefined",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(nil, "__eq", [undefined])]);
    return self;
}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testYourself",
smalltalk.method({
selector: "testYourself",
fn: function () {
    var self = this;
    var o;
    o = smalltalk.send(smalltalk.ObjectMock || ObjectMock, "_new", []);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o, "_yourself", []), "__eq_eq", [o])]);
    return self;
}
}),
smalltalk.ObjectTest);

smalltalk.addMethod(
"_testidentityHash",
smalltalk.method({
selector: "testidentityHash",
fn: function () {
    var self = this;
    var o1;
    var o2;
    o1 = smalltalk.send(smalltalk.Object || Object, "_new", []);
    o2 = smalltalk.send(smalltalk.Object || Object, "_new", []);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(o1, "_identityHash", []), "__eq_eq", [smalltalk.send(o1, "_identityHash", [])])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(o1, "_identityHash", []), "__eq_eq", [smalltalk.send(o2, "_identityHash", [])])]);
    return self;
}
}),
smalltalk.ObjectTest);



smalltalk.addClass('PackageTest', smalltalk.TestCase, ['zorkPackage', 'grulPackage', 'backUpCommitPathJs', 'backUpCommitPathSt'], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
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
}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function () {
    var self = this;
    var $1;
    smalltalk.send(smalltalk.Package || Package, "_defaultCommitPathJs_", [self['@backUpCommitPathJs']]);
    $1 = smalltalk.send(smalltalk.Package || Package, "_defaultCommitPathSt_", [self['@backUpCommitPathSt']]);
    return self;
}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testGrulCommitPathJsShouldBeServerGrulJs",
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["server/grul/js", smalltalk.send(self['@grulPackage'], "_commitPathJs", [])]);
    return self;
}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testGrulCommitPathStShouldBeGrulSt",
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["grul/st", smalltalk.send(self['@grulPackage'], "_commitPathSt", [])]);
    return self;
}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testZorkCommitPathJsShouldBeJs",
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJs",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["js", smalltalk.send(self['@zorkPackage'], "_commitPathJs", [])]);
    return self;
}
}),
smalltalk.PackageTest);

smalltalk.addMethod(
"_testZorkCommitPathStShouldBeSt",
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["st", smalltalk.send(self['@zorkPackage'], "_commitPathSt", [])]);
    return self;
}
}),
smalltalk.PackageTest);



smalltalk.addClass('PackageWithDefaultCommitPathChangedTest', smalltalk.PackageTest, [], 'Kernel-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function () {
    var self = this;
    var $1;
    smalltalk.send(self, "_setUp", [], smalltalk.PackageTest);
    smalltalk.send(smalltalk.Package || Package, "_defaultCommitPathJs_", ["javascripts/"]);
    $1 = smalltalk.send(smalltalk.Package || Package, "_defaultCommitPathSt_", ["smalltalk/"]);
    return self;
}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testGrulCommitPathJsShouldBeServerGrulJs",
smalltalk.method({
selector: "testGrulCommitPathJsShouldBeServerGrulJs",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["server/grul/js", smalltalk.send(self['@grulPackage'], "_commitPathJs", [])]);
    return self;
}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testGrulCommitPathStShouldBeGrulSt",
smalltalk.method({
selector: "testGrulCommitPathStShouldBeGrulSt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["grul/st", smalltalk.send(self['@grulPackage'], "_commitPathSt", [])]);
    return self;
}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testZorkCommitPathJsShouldBeJavascript",
smalltalk.method({
selector: "testZorkCommitPathJsShouldBeJavascript",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["javascripts/", smalltalk.send(self['@zorkPackage'], "_commitPathJs", [])]);
    return self;
}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);

smalltalk.addMethod(
"_testZorkCommitPathStShouldBeSmalltalk",
smalltalk.method({
selector: "testZorkCommitPathStShouldBeSmalltalk",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", ["smalltalk/", smalltalk.send(self['@zorkPackage'], "_commitPathSt", [])]);
    return self;
}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest);


smalltalk.addMethod(
"_shouldInheritSelectors",
smalltalk.method({
selector: "shouldInheritSelectors",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.PackageWithDefaultCommitPathChangedTest.klass);


smalltalk.addClass('PointTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAccessing",
smalltalk.method({
selector: "testAccessing",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.Point || Point, "_x_y_", [3, 4]), "_x", []), 3]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.Point || Point, "_x_y_", [3, 4]), "_y", []), 4]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Point || Point, "_new", []), "_x_", [3]), "_x", []), 3]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Point || Point, "_new", []), "_y_", [4]), "_y", []), 4]);
    return self;
}
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testArithmetic",
smalltalk.method({
selector: "testArithmetic",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(3, "__at", [4]), "__star", [smalltalk.send(3, "__at", [4])]), smalltalk.send(smalltalk.Point || Point, "_x_y_", [9, 16])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(3, "__at", [4]), "__plus", [smalltalk.send(3, "__at", [4])]), smalltalk.send(smalltalk.Point || Point, "_x_y_", [6, 8])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(3, "__at", [4]), "__minus", [smalltalk.send(3, "__at", [4])]), smalltalk.send(smalltalk.Point || Point, "_x_y_", [0, 0])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(6, "__at", [8]), "__slash", [smalltalk.send(3, "__at", [4])]), smalltalk.send(smalltalk.Point || Point, "_x_y_", [2, 2])]);
    return self;
}
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(3, "__at", [4]), smalltalk.send(smalltalk.Point || Point, "_x_y_", [3, 4])]);
    return self;
}
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testEgality",
smalltalk.method({
selector: "testEgality",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(3, "__at", [4]), "__eq", [smalltalk.send(3, "__at", [4])])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(3, "__at", [5]), "__eq", [smalltalk.send(3, "__at", [6])])]);
    return self;
}
}),
smalltalk.PointTest);

smalltalk.addMethod(
"_testTranslateBy",
smalltalk.method({
selector: "testTranslateBy",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(3, "__at", [4]), smalltalk.send(smalltalk.send(3, "__at", [3]), "_translateBy_", [smalltalk.send(0, "__at", [1])])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(3, "__at", [2]), smalltalk.send(smalltalk.send(3, "__at", [3]), "_translateBy_", [smalltalk.send(0, "__at", [smalltalk.send(1, "_negated", [])])])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(5, "__at", [6]), smalltalk.send(smalltalk.send(3, "__at", [3]), "_translateBy_", [smalltalk.send(2, "__at", [3])])]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(0, "__at", [3]), smalltalk.send(smalltalk.send(3, "__at", [3]), "_translateBy_", [smalltalk.send(smalltalk.send(3, "_negated", []), "__at", [0])])]);
    return self;
}
}),
smalltalk.PointTest);



smalltalk.addClass('RandomTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_textNext",
smalltalk.method({
selector: "textNext",
fn: function () {
    var self = this;
    smalltalk.send(10000, "_timesRepeat_", [function () {var current;var next;next = smalltalk.send(smalltalk.send(smalltalk.Random || Random, "_new", []), "_next", []);smalltalk.send(self, "_assert_", [smalltalk.send(next, "__gt_eq", [0])]);smalltalk.send(self, "_assert_", [smalltalk.send(next, "__lt", [1])]);smalltalk.send(self, "_deny_", [smalltalk.send(current, "__eq", [next])]);return smalltalk.send(next, "__eq", [current]);}]);
    return self;
}
}),
smalltalk.RandomTest);



smalltalk.addClass('SetTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testAddRemove",
smalltalk.method({
selector: "testAddRemove",
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
}
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testAt",
smalltalk.method({
selector: "testAt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(smalltalk.send(smalltalk.Set || Set, "_new", []), "_at_put_", [1, 2]);}, smalltalk.Error || Error]);
    return self;
}
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testPrintString",
smalltalk.method({
selector: "testPrintString",
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
}
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testSize",
smalltalk.method({
selector: "testSize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.Set || Set, "_new", []), "_size", []), 0]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.Set || Set, "_withAll_", [[1, 2, 3, 4]]), "_size", []), 4]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(smalltalk.Set || Set, "_withAll_", [[1, 1, 1, 1]]), "_size", []), 1]);
    return self;
}
}),
smalltalk.SetTest);

smalltalk.addMethod(
"_testUnicity",
smalltalk.method({
selector: "testUnicity",
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
}
}),
smalltalk.SetTest);



smalltalk.addClass('UndefinedTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
"_testCopying",
smalltalk.method({
selector: "testCopying",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(nil, "_copy", []), nil]);
    return self;
}
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testDeepCopy",
smalltalk.method({
selector: "testDeepCopy",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(nil, "_deepCopy", []), "__eq", [nil])]);
    return self;
}
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testIfNil",
smalltalk.method({
selector: "testIfNil",
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
}
}),
smalltalk.UndefinedTest);

smalltalk.addMethod(
"_testIsNil",
smalltalk.method({
selector: "testIsNil",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(nil, "_isNil", [])]);
    smalltalk.send(self, "_deny_", [smalltalk.send(nil, "_notNil", [])]);
    return self;
}
}),
smalltalk.UndefinedTest);



