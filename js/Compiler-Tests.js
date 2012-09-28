smalltalk.addPackage('Compiler-Tests', {});
smalltalk.addClass('CodeGeneratorTest', smalltalk.TestCase, ['receiver'], 'Compiler-Tests');
smalltalk.addMethod(
"_codeGeneratorClass",
smalltalk.method({
selector: "codeGeneratorClass",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.CodeGenerator || CodeGenerator;
},
args: [],
source: "codeGeneratorClass\x0a\x09^ CodeGenerator",
messageSends: [],
referencedClasses: ["CodeGenerator"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_compiler",
smalltalk.method({
selector: "compiler",
category: 'factory',
fn: function () {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(smalltalk.Compiler || Compiler, "_new", []);
    smalltalk.send($2, "_codeGeneratorClass_", [smalltalk.send(self, "_codeGeneratorClass", [])]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: [],
source: "compiler\x0a\x09^ Compiler new\x0a\x09\x09codeGeneratorClass: self codeGeneratorClass;\x0a\x09\x09yourself",
messageSends: ["codeGeneratorClass:", "codeGeneratorClass", "new", "yourself"],
referencedClasses: ["Compiler"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'initialization',
fn: function () {
    var self = this;
    self['@receiver'] = smalltalk.send(smalltalk.send(self, "_targetClass", []), "_new", []);
    return self;
},
args: [],
source: "setUp\x0a\x09receiver := self targetClass new",
messageSends: ["new", "targetClass"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_should_return_",
smalltalk.method({
selector: "should:return:",
category: 'testing',
fn: function (aString, anObject) {
    var self = this;
    var method;
    var result;
    method = smalltalk.send(smalltalk.send(self, "_compiler", []), "_install_forClass_category_", [aString, smalltalk.send(self, "_targetClass", []), "tests"]);
    result = smalltalk.send(self['@receiver'], "_perform_", [smalltalk.send(method, "_selector", [])]);
    smalltalk.send(smalltalk.send(self, "_targetClass", []), "_removeCompiledMethod_", [method]);
    smalltalk.send(self, "_assert_equals_", [anObject, result]);
    return self;
},
args: ["aString", "anObject"],
source: "should: aString return: anObject\x0a\x09| method result |\x0a\x0a\x09method := self compiler install: aString forClass: self targetClass category: 'tests'.\x0a\x09result := receiver perform: method selector.\x0a\x09self targetClass removeCompiledMethod: method.\x0a\x09self assert: anObject equals: result",
messageSends: ["install:forClass:category:", "targetClass", "compiler", "perform:", "selector", "removeCompiledMethod:", "assert:equals:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_targetClass",
smalltalk.method({
selector: "targetClass",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.DoIt || DoIt;
},
args: [],
source: "targetClass\x0a\x09^ DoIt",
messageSends: [],
referencedClasses: ["DoIt"]
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'initialization',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "tearDown\x0a\x09\x22receiver := nil\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testAssignment",
smalltalk.method({
selector: "testAssignment",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo | a | a := true ifTrue: [ 1 ]. ^ a", 1]);
    smalltalk.send(self, "_should_return_", ["foo | a | a := false ifTrue: [ 1 ]. ^ a", nil]);
    smalltalk.send(self, "_should_return_", ["foo | a | ^ a := true ifTrue: [ 1 ]", 1]);
    return self;
},
args: [],
source: "testAssignment\x0a\x09self should: 'foo | a | a := true ifTrue: [ 1 ]. ^ a' return: 1.\x0a\x09self should: 'foo | a | a := false ifTrue: [ 1 ]. ^ a' return: nil.\x0a\x0a\x09self should: 'foo | a | ^ a := true ifTrue: [ 1 ]' return: 1 ",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testBlockReturn",
smalltalk.method({
selector: "testBlockReturn",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]", [2, 3, 4]]);
    smalltalk.send(self, "_should_return_", ["foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]", [2, 3, 4]]);
    smalltalk.send(self, "_should_return_", ["foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]", [2, 1, 4]]);
    return self;
},
args: [],
source: "testBlockReturn\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]' return: #(2 3 4).\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]' return: #(2 3 4).\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]' return: #(2 1 4).",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testCascades",
smalltalk.method({
selector: "testCascades",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo ^ Array new add: 3; add: 4; yourself", [3, 4]]);
    return self;
},
args: [],
source: "testCascades\x0a\x09\x0a\x09self should: 'foo ^ Array new add: 3; add: 4; yourself' return: #(3 4)",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testLiterals",
smalltalk.method({
selector: "testLiterals",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo ^ 1", 1]);
    smalltalk.send(self, "_should_return_", ["foo ^ 'hello'", "hello"]);
    smalltalk.send(self, "_should_return_", ["foo ^ #(1 2 3 4)", [1, 2, 3, 4]]);
    smalltalk.send(self, "_should_return_", ["foo ^ {1. [:x | x ] value: 2. 3. [4] value}", [1, 2, 3, 4]]);
    smalltalk.send(self, "_should_return_", ["foo ^ true", true]);
    smalltalk.send(self, "_should_return_", ["foo ^ false", false]);
    smalltalk.send(self, "_should_return_", ["foo ^ #{1->2. 3->4}", smalltalk.HashedCollection._fromPairs_([smalltalk.send(1, "__minus_gt", [2]), smalltalk.send(3, "__minus_gt", [4])])]);
    smalltalk.send(self, "_should_return_", ["foo ^ #hello", smalltalk.symbolFor("hello")]);
    smalltalk.send(self, "_should_return_", ["foo ^ -123.456", -123.456]);
    return self;
},
args: [],
source: "testLiterals\x0a\x09self should: 'foo ^ 1' return: 1.\x0a\x09self should: 'foo ^ ''hello''' return: 'hello'.\x0a\x09self should: 'foo ^ #(1 2 3 4)' return: #(1 2 3 4).\x0a\x09self should: 'foo ^ {1. [:x | x ] value: 2. 3. [4] value}' return: #(1 2 3 4).\x0a\x09self should: 'foo ^ true' return: true.\x0a\x09self should: 'foo ^ false' return: false.\x0a\x09self should: 'foo ^ #{1->2. 3->4}' return: #{1->2. 3->4}.\x0a\x09self should: 'foo ^ #hello' return: #hello.\x0a\x09self should: 'foo ^ -123.456' return: -123.456",
messageSends: ["should:return:", "->"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testLocalReturn",
smalltalk.method({
selector: "testLocalReturn",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo ^ 1", 1]);
    smalltalk.send(self, "_should_return_", ["foo ^ 1 + 1", 2]);
    smalltalk.send(self, "_should_return_", ["foo ", self['@receiver']]);
    smalltalk.send(self, "_should_return_", ["foo self asString", self['@receiver']]);
    smalltalk.send(self, "_should_return_", ["foo | a b | a := 1. b := 2. ^ a + b", 3]);
    return self;
},
args: [],
source: "testLocalReturn\x0a\x09self should: 'foo ^ 1' return: 1.\x0a\x09self should: 'foo ^ 1 + 1' return: 2.\x0a\x09self should: 'foo ' return: receiver.\x0a\x09self should: 'foo self asString' return: receiver.\x0a\x09self should: 'foo | a b | a := 1. b := 2. ^ a + b' return: 3",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testMessageSends",
smalltalk.method({
selector: "testMessageSends",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo ^ 1 asString", "1"]);
    smalltalk.send(self, "_should_return_", ["foo ^ 1 + 1", 2]);
    smalltalk.send(self, "_should_return_", ["foo ^ 1 + 2 * 3", 9]);
    smalltalk.send(self, "_should_return_", ["foo ^ 1 to: 3", [1, 2, 3]]);
    smalltalk.send(self, "_should_return_", ["foo ^ 1 to: 5 by: 2", [1, 3, 5]]);
    return self;
},
args: [],
source: "testMessageSends\x0a\x09self should: 'foo ^ 1 asString' return: '1'.\x0a\x0a\x09self should: 'foo ^ 1 + 1' return: 2.\x0a\x09self should: 'foo ^ 1 + 2 * 3' return: 9.\x0a\x0a\x09self should: 'foo ^ 1 to: 3' return: #(1 2 3).\x0a\x09self should: 'foo ^ 1 to: 5 by: 2' return: #(1 3 5)",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testNestedIfTrue",
smalltalk.method({
selector: "testNestedIfTrue",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]", 1]);
    smalltalk.send(self, "_should_return_", ["foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]", nil]);
    smalltalk.send(self, "_should_return_", ["foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]", 1]);
    smalltalk.send(self, "_should_return_", ["foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]", self['@receiver']]);
    return self;
},
args: [],
source: "testNestedIfTrue\x0a\x09self should: 'foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]' return: 1.\x0a\x09self should: 'foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]' return: nil.\x0a\x0a\x09self should: 'foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]' return: 1.\x0a\x09self should: 'foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]' return: receiver.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testNonLocalReturn",
smalltalk.method({
selector: "testNonLocalReturn",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo [ ^ 1 ] value", 1]);
    smalltalk.send(self, "_should_return_", ["foo [ ^ 1 + 1 ] value", 2]);
    smalltalk.send(self, "_should_return_", ["foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt", 3]);
    smalltalk.send(self, "_should_return_", ["foo [ :x | ^ x + x ] value: 4. ^ 2", 8]);
    return self;
},
args: [],
source: "testNonLocalReturn\x0a\x09self should: 'foo [ ^ 1 ] value' return: 1.\x0a\x09self should: 'foo [ ^ 1 + 1 ] value' return: 2.\x0a\x09self should: 'foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt' return: 3.\x0a\x09self should: 'foo [ :x | ^ x + x ] value: 4. ^ 2' return: 8",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifFalse",
smalltalk.method({
selector: "testifFalse",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo true ifFalse: [ ^ 1 ]", self['@receiver']]);
    smalltalk.send(self, "_should_return_", ["foo false ifFalse: [ ^ 2 ]", 2]);
    smalltalk.send(self, "_should_return_", ["foo ^ true ifFalse: [ 1 ]", nil]);
    smalltalk.send(self, "_should_return_", ["foo ^ false ifFalse: [ 2 ]", 2]);
    return self;
},
args: [],
source: "testifFalse\x0a\x09self should: 'foo true ifFalse: [ ^ 1 ]' return: receiver.\x0a\x09self should: 'foo false ifFalse: [ ^ 2 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ true ifFalse: [ 1 ]' return: nil.\x0a\x09self should: 'foo ^ false ifFalse: [ 2 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifFalseIfTrue",
smalltalk.method({
selector: "testifFalseIfTrue",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]", 2]);
    smalltalk.send(self, "_should_return_", ["foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]", 2]);
    smalltalk.send(self, "_should_return_", ["foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]", 2]);
    smalltalk.send(self, "_should_return_", ["foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]", 2]);
    return self;
},
args: [],
source: "testifFalseIfTrue\x0a\x09self should: 'foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]' return: 2.\x0a\x09self should: 'foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]' return: 2.\x0a\x09self should: 'foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifNil",
smalltalk.method({
selector: "testifNil",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo ^ 1 ifNil: [ 2 ]", 1]);
    smalltalk.send(self, "_should_return_", ["foo ^ nil ifNil: [ 2 ]", 2]);
    smalltalk.send(self, "_should_return_", ["foo 1 ifNil: [ ^ 2 ]", self['@receiver']]);
    smalltalk.send(self, "_should_return_", ["foo nil ifNil: [ ^ 2 ]", 2]);
    return self;
},
args: [],
source: "testifNil\x0a\x09self should: 'foo ^ 1 ifNil: [ 2 ]' return: 1.\x0a\x09self should: 'foo ^ nil ifNil: [ 2 ]' return: 2.\x0a\x0a\x09self should: 'foo 1 ifNil: [ ^ 2 ]' return: receiver.\x0a\x09self should: 'foo nil ifNil: [ ^ 2 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifNilIfNotNil",
smalltalk.method({
selector: "testifNilIfNotNil",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]", 3]);
    smalltalk.send(self, "_should_return_", ["foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]", 2]);
    smalltalk.send(self, "_should_return_", ["foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]", 3]);
    smalltalk.send(self, "_should_return_", ["foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]", 2]);
    return self;
},
args: [],
source: "testifNilIfNotNil\x0a\x09self should: 'foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 2.\x0a\x0a\x09self should: 'foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 3.\x0a\x09self should: 'foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifNotNil",
smalltalk.method({
selector: "testifNotNil",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo ^ 1 ifNotNil: [ 2 ]", 2]);
    smalltalk.send(self, "_should_return_", ["foo ^ nil ifNotNil: [ 2 ]", nil]);
    smalltalk.send(self, "_should_return_", ["foo 1 ifNotNil: [ ^ 2 ]", 2]);
    smalltalk.send(self, "_should_return_", ["foo nil ifNotNil: [ ^ 2 ]", self['@receiver']]);
    return self;
},
args: [],
source: "testifNotNil\x0a\x09self should: 'foo ^ 1 ifNotNil: [ 2 ]' return: 2.\x0a\x09self should: 'foo ^ nil ifNotNil: [ 2 ]' return: nil.\x0a\x0a\x09self should: 'foo 1 ifNotNil: [ ^ 2 ]' return: 2.\x0a\x09self should: 'foo nil ifNotNil: [ ^ 2 ]' return: receiver.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifTrue",
smalltalk.method({
selector: "testifTrue",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo false ifTrue: [ ^ 1 ]", self['@receiver']]);
    smalltalk.send(self, "_should_return_", ["foo true ifTrue: [ ^ 2 ]", 2]);
    smalltalk.send(self, "_should_return_", ["foo ^ false ifTrue: [ 1 ]", nil]);
    smalltalk.send(self, "_should_return_", ["foo ^ true ifTrue: [ 2 ]", 2]);
    return self;
},
args: [],
source: "testifTrue\x0a\x09self should: 'foo false ifTrue: [ ^ 1 ]' return: receiver.\x0a\x09self should: 'foo true ifTrue: [ ^ 2 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ false ifTrue: [ 1 ]' return: nil.\x0a\x09self should: 'foo ^ true ifTrue: [ 2 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifTrueIfFalse",
smalltalk.method({
selector: "testifTrueIfFalse",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_should_return_", ["foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]", 2]);
    smalltalk.send(self, "_should_return_", ["foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]", 1]);
    smalltalk.send(self, "_should_return_", ["foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]", 1]);
    smalltalk.send(self, "_should_return_", ["foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]", 2]);
    return self;
},
args: [],
source: "testifTrueIfFalse\x0a\x09self should: 'foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]' return: 2.\x0a\x09self should: 'foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]' return: 1.\x0a\x09\x0a\x09self should: 'foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 1.\x0a\x09self should: 'foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 2.",
messageSends: ["should:return:"],
referencedClasses: []
}),
smalltalk.CodeGeneratorTest);



smalltalk.addClass('InliningCodeGeneratorTest', smalltalk.CodeGeneratorTest, [], 'Compiler-Tests');
smalltalk.addMethod(
"_codeGeneratorClass",
smalltalk.method({
selector: "codeGeneratorClass",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.InliningCodeGenerator || InliningCodeGenerator;
},
args: [],
source: "codeGeneratorClass\x0a\x09^ InliningCodeGenerator",
messageSends: [],
referencedClasses: ["InliningCodeGenerator"]
}),
smalltalk.InliningCodeGeneratorTest);



smalltalk.addClass('ScopeVarTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
"_testClassRefVar",
smalltalk.method({
selector: "testClassRefVar",
category: 'tests',
fn: function () {
    var self = this;
    var $1, $2;
    var node;
    $1 = smalltalk.send(smalltalk.ClassReferenceNode || ClassReferenceNode, "_new", []);
    smalltalk.send($1, "_value_", ["Object"]);
    $2 = smalltalk.send($1, "_yourself", []);
    node = $2;
    smalltalk.send(smalltalk.send(smalltalk.SemanticAnalyzer || SemanticAnalyzer, "_new", []), "_visit_", [node]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(node, "_binding", []), "_isClassRefVar", [])]);
    return self;
},
args: [],
source: "testClassRefVar\x0a\x09| node |\x0a\x09node := ClassReferenceNode new\x0a\x09\x09value: 'Object';\x0a\x09\x09yourself.\x0a\x09SemanticAnalyzer new visit: node.\x0a\x09self assert: node binding isClassRefVar",
messageSends: ["value:", "new", "yourself", "visit:", "assert:", "isClassRefVar", "binding"],
referencedClasses: ["ClassReferenceNode", "SemanticAnalyzer"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testInstanceVar",
smalltalk.method({
selector: "testInstanceVar",
category: 'tests',
fn: function () {
    var self = this;
    var $1, $2;
    var node;
    var scope;
    $1 = smalltalk.send(smalltalk.VariableNode || VariableNode, "_new", []);
    smalltalk.send($1, "_value_", ["bzzz"]);
    $2 = smalltalk.send($1, "_yourself", []);
    node = $2;
    scope = smalltalk.send(smalltalk.MethodLexicalScope || MethodLexicalScope, "_new", []);
    smalltalk.send(scope, "_addIVar_", ["bzzz"]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(scope, "_bindingFor_", [node]), "_isInstanceVar", [])]);
    return self;
},
args: [],
source: "testInstanceVar\x0a\x09| node scope |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09scope := MethodLexicalScope new.\x0a\x09scope addIVar: 'bzzz'.\x0a\x09self assert: (scope bindingFor: node) isInstanceVar",
messageSends: ["value:", "new", "yourself", "addIVar:", "assert:", "isInstanceVar", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testPseudoVar",
smalltalk.method({
selector: "testPseudoVar",
category: 'tests',
fn: function () {
    var self = this;
    var $1, $2;
    var node;
    var pseudoVars;
    pseudoVars = ["self", "super", "true", "false", "nil"];
    smalltalk.send(pseudoVars, "_do_", [function (each) {$1 = smalltalk.send(smalltalk.VariableNode || VariableNode, "_new", []);smalltalk.send($1, "_value_", [each]);$2 = smalltalk.send($1, "_yourself", []);node = $2;node;return smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.MethodLexicalScope || MethodLexicalScope, "_new", []), "_bindingFor_", [node]), "_isPseudoVar", [])]);}]);
    return self;
},
args: [],
source: "testPseudoVar\x0a\x09| node pseudoVars |\x0a\x09pseudoVars := #('self' 'super' 'true' 'false' 'nil').\x0a\x09pseudoVars do: [:each |\x0a\x09\x09node := VariableNode new\x0a\x09\x09value: each;\x0a\x09\x09yourself.\x0a\x09\x09self assert: (MethodLexicalScope new bindingFor: node) isPseudoVar ]",
messageSends: ["do:", "value:", "new", "yourself", "assert:", "isPseudoVar", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testTempVar",
smalltalk.method({
selector: "testTempVar",
category: 'tests',
fn: function () {
    var self = this;
    var $1, $2;
    var node;
    var scope;
    $1 = smalltalk.send(smalltalk.VariableNode || VariableNode, "_new", []);
    smalltalk.send($1, "_value_", ["bzzz"]);
    $2 = smalltalk.send($1, "_yourself", []);
    node = $2;
    scope = smalltalk.send(smalltalk.MethodLexicalScope || MethodLexicalScope, "_new", []);
    smalltalk.send(scope, "_addTemp_", ["bzzz"]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(scope, "_bindingFor_", [node]), "_isTempVar", [])]);
    return self;
},
args: [],
source: "testTempVar\x0a\x09| node scope |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09scope := MethodLexicalScope new.\x0a\x09scope addTemp: 'bzzz'.\x0a\x09self assert: (scope bindingFor: node) isTempVar",
messageSends: ["value:", "new", "yourself", "addTemp:", "assert:", "isTempVar", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testUnknownVar",
smalltalk.method({
selector: "testUnknownVar",
category: 'tests',
fn: function () {
    var self = this;
    var $1, $2;
    var node;
    $1 = smalltalk.send(smalltalk.VariableNode || VariableNode, "_new", []);
    smalltalk.send($1, "_value_", ["bzzz"]);
    $2 = smalltalk.send($1, "_yourself", []);
    node = $2;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.MethodLexicalScope || MethodLexicalScope, "_new", []), "_bindingFor_", [node]), "_isNil", [])]);
    return self;
},
args: [],
source: "testUnknownVar\x0a\x09| node |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09self assert: (MethodLexicalScope new bindingFor: node) isNil",
messageSends: ["value:", "new", "yourself", "assert:", "isNil", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);



smalltalk.addClass('SemanticAnalyzerTest', smalltalk.TestCase, ['analyzer'], 'Compiler-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
    var self = this;
    self['@analyzer'] = smalltalk.send(smalltalk.SemanticAnalyzer || SemanticAnalyzer, "_on_", [smalltalk.Object || Object]);
    return self;
},
args: [],
source: "setUp\x0a\x09analyzer := SemanticAnalyzer on: Object",
messageSends: ["on:"],
referencedClasses: ["Object", "SemanticAnalyzer"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testAssignment",
smalltalk.method({
selector: "testAssignment",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo self := 1";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(self['@analyzer'], "_visit_", [ast]);}, smalltalk.InvalidAssignmentError || InvalidAssignmentError]);
    return self;
},
args: [],
source: "testAssignment\x0a\x09| src ast |\x0a\x0a\x09src := 'foo self := 1'.\x0a\x09ast := smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: InvalidAssignmentError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["InvalidAssignmentError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testNonLocalReturn",
smalltalk.method({
selector: "testNonLocalReturn",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo | a | a + 1. ^ a";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self['@analyzer'], "_visit_", [ast]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(ast, "_scope", []), "_hasNonLocalReturn", [])]);
    return self;
},
args: [],
source: "testNonLocalReturn\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. ^ a'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast scope hasNonLocalReturn",
messageSends: ["parse:", "visit:", "deny:", "hasNonLocalReturn", "scope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testNonLocalReturn2",
smalltalk.method({
selector: "testNonLocalReturn2",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo | a | a + 1. [\xA0[ ^ a]\xA0]";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self['@analyzer'], "_visit_", [ast]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(ast, "_scope", []), "_hasNonLocalReturn", [])]);
    return self;
},
args: [],
source: "testNonLocalReturn2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ ^ a] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope hasNonLocalReturn",
messageSends: ["parse:", "visit:", "assert:", "hasNonLocalReturn", "scope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScope",
smalltalk.method({
selector: "testScope",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo | a | a + 1. [ | b | b := a ]";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self['@analyzer'], "_visit_", [ast]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_scope", []), "__eq_eq", [smalltalk.send(ast, "_scope", [])])]);
    return self;
},
args: [],
source: "testScope\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast nodes first nodes last scope == ast scope.",
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "last", "nodes", "first"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScope2",
smalltalk.method({
selector: "testScope2",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo | a | a + 1. [ [ | b | b := a\xA0] ]";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self['@analyzer'], "_visit_", [ast]);
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_scope", []), "__eq_eq", [smalltalk.send(ast, "_scope", [])])]);
    return self;
},
args: [],
source: "testScope2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast nodes first nodes last nodes first nodes first scope == ast scope.",
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "first", "nodes", "last"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScopeLevel",
smalltalk.method({
selector: "testScopeLevel",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo | a | a + 1. [ [ | b | b := a\xA0] ]";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self['@analyzer'], "_visit_", [ast]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(ast, "_scope", []), "_scopeLevel", []), "__eq", [1])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_scope", []), "_scopeLevel", []), "__eq", [3])]);
    return self;
},
args: [],
source: "testScopeLevel\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope scopeLevel = 1.\x0a\x09self assert: ast nodes first nodes last nodes first nodes first scope scopeLevel = 3",
messageSends: ["parse:", "visit:", "assert:", "=", "scopeLevel", "scope", "first", "nodes", "last"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testUnknownVariables",
smalltalk.method({
selector: "testUnknownVariables",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo | a | b + a";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(self['@analyzer'], "_visit_", [ast]);}, smalltalk.UnknownVariableError || UnknownVariableError]);
    return self;
},
args: [],
source: "testUnknownVariables\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | b + a'.\x0a\x09ast := smalltalk parse: src.\x0a\x0a\x09self should: [ analyzer visit: ast ] raise: UnknownVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["UnknownVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testUnknownVariablesDefinedInJS",
smalltalk.method({
selector: "testUnknownVariablesDefinedInJS",
category: 'tests',
fn: function () {
    var self = this;
    var someVariable = 1;
    smalltalk.send(self, "_shouldnt_raise_", [function () {return smalltalk.send(smalltalk, "_parse_", ["foo someVariable"]);}, smalltalk.UnknownVariableError || UnknownVariableError]);
    return self;
},
args: [],
source: "testUnknownVariablesDefinedInJS\x0a\x0a\x09< var someVariable = 1 >.\x0a\x0a\x09self shouldnt: [ smalltalk parse: 'foo someVariable' ] raise: UnknownVariableError",
messageSends: ["shouldnt:raise:", "parse:"],
referencedClasses: ["UnknownVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testUnknownVariablesWithScope",
smalltalk.method({
selector: "testUnknownVariablesWithScope",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo | a b | [ c + 1. [ a + 1. d + 1 ]]";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(self['@analyzer'], "_visit_", [ast]);}, smalltalk.UnknownVariableError || UnknownVariableError]);
    return self;
},
args: [],
source: "testUnknownVariablesWithScope\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a b | [ c + 1. [ a + 1. d + 1 ]]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09\x0a\x09self should: [ analyzer visit: ast ] raise: UnknownVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["UnknownVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing",
smalltalk.method({
selector: "testVariableShadowing",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo | a | a + 1";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self['@analyzer'], "_visit_", [ast]);
    return self;
},
args: [],
source: "testVariableShadowing\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast",
messageSends: ["parse:", "visit:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing2",
smalltalk.method({
selector: "testVariableShadowing2",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo | a | a + 1. [ | a | a := 2 ]";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(self['@analyzer'], "_visit_", [ast]);}, smalltalk.ShadowingVariableError || ShadowingVariableError]);
    return self;
},
args: [],
source: "testVariableShadowing2\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ | a | a := 2 ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: ShadowingVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["ShadowingVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing3",
smalltalk.method({
selector: "testVariableShadowing3",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo | a | a + 1. [ | b | b := 2 ]";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self['@analyzer'], "_visit_", [ast]);
    return self;
},
args: [],
source: "testVariableShadowing3\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ | b | b := 2 ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast",
messageSends: ["parse:", "visit:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing4",
smalltalk.method({
selector: "testVariableShadowing4",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo | a | a + 1. [ [\xA0[ | b | b := 2 ]\xA0]\xA0]";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self['@analyzer'], "_visit_", [ast]);
    return self;
},
args: [],
source: "testVariableShadowing4\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast",
messageSends: ["parse:", "visit:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing5",
smalltalk.method({
selector: "testVariableShadowing5",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo | a | a + 1. [ [\xA0[ | a | a := 2 ]\xA0]\xA0]";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(self['@analyzer'], "_visit_", [ast]);}, smalltalk.ShadowingVariableError || ShadowingVariableError]);
    return self;
},
args: [],
source: "testVariableShadowing5\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: ShadowingVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["ShadowingVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariablesLookup",
smalltalk.method({
selector: "testVariablesLookup",
category: 'tests',
fn: function () {
    var self = this;
    var src;
    var ast;
    src = "foo | a | a + 1. [ | b | b := a ]";
    ast = smalltalk.send(smalltalk, "_parse_", [src]);
    smalltalk.send(self['@analyzer'], "_visit_", [ast]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_receiver", []), "_binding", []), "_isTempVar", [])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_receiver", []), "_binding", []), "_scope", []), "__eq_eq", [smalltalk.send(ast, "_scope", [])])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_left", []), "_binding", []), "_isTempVar", [])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_left", []), "_binding", []), "_scope", []), "__eq_eq", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_scope", [])])]);
    return self;
},
args: [],
source: "testVariablesLookup\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09\x22Binding for `a` in the message send\x22\x0a\x09self assert: ast nodes first nodes first receiver binding isTempVar.\x0a\x09self assert: ast nodes first nodes first receiver binding scope == ast scope.\x0a\x0a\x09\x22Binding for `b`\x22\x0a\x09self assert: ast nodes first nodes last nodes first nodes first left binding isTempVar.\x0a\x09self assert: ast nodes first nodes last nodes first nodes first left binding scope == ast nodes first nodes last scope.",
messageSends: ["parse:", "visit:", "assert:", "isTempVar", "binding", "receiver", "first", "nodes", "==", "scope", "left", "last"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);



