smalltalk.addPackage('SUnit', {});
smalltalk.addClass('TestCase', smalltalk.Object, ['testSelector'], 'SUnit');
smalltalk.addMethod(
"_assert_",
smalltalk.method({
selector: "assert:",
category: 'testing',
fn: function (aBoolean) {
    var self = this;
    smalltalk.send(self, "_assert_description_", [aBoolean, "Assertion failed"]);
    return self;
},
args: ["aBoolean"],
source: "assert: aBoolean\x0a\x09self assert: aBoolean description: 'Assertion failed'",
messageSends: ["assert:description:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_description_",
smalltalk.method({
selector: "assert:description:",
category: 'testing',
fn: function (aBoolean, aString) {
    var self = this;
    if (!smalltalk.assert(aBoolean)) {
        smalltalk.send(self, "_signalFailure_", [aString]);
    }
    return self;
},
args: ["aBoolean", "aString"],
source: "assert: aBoolean description: aString\x0a\x09aBoolean ifFalse: [self signalFailure: aString]",
messageSends: ["ifFalse:", "signalFailure:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_equals_",
smalltalk.method({
selector: "assert:equals:",
category: 'testing',
fn: function (expected, actual) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_assert_description_", [smalltalk.send(expected, "__eq", [actual]), smalltalk.send(smalltalk.send(smalltalk.send("Expected: ", "__comma", [smalltalk.send(expected, "_asString", [])]), "__comma", [" but was: "]), "__comma", [smalltalk.send(actual, "_asString", [])])]);
    return $1;
},
args: ["expected", "actual"],
source: "assert: expected equals: actual\x0a\x09^ self assert: (expected = actual) description: 'Expected: ', expected asString, ' but was: ', actual asString",
messageSends: ["assert:description:", "=", ",", "asString"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_deny_",
smalltalk.method({
selector: "deny:",
category: 'testing',
fn: function (aBoolean) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(aBoolean, "_not", [])]);
    return self;
},
args: ["aBoolean"],
source: "deny: aBoolean\x0a\x09self assert: aBoolean not",
messageSends: ["assert:", "not"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_performTestFor_",
smalltalk.method({
selector: "performTestFor:",
category: 'running',
fn: function (aResult) {
    var self = this;
    smalltalk.send(function () {return smalltalk.send(function () {return smalltalk.send(self, "_perform_", [smalltalk.send(self, "_selector", [])]);}, "_on_do_", [smalltalk.TestFailure || TestFailure, function (ex) {return smalltalk.send(aResult, "_addFailure_", [self]);}]);}, "_on_do_", [smalltalk.Error || Error, function (ex) {return smalltalk.send(aResult, "_addError_", [self]);}]);
    return self;
},
args: ["aResult"],
source: "performTestFor: aResult\x0a\x09[[self perform: self selector]\x0a\x09\x09on: TestFailure do: [:ex | aResult addFailure: self]]\x0a\x09\x09on: Error do: [:ex | aResult addError: self]",
messageSends: ["on:do:", "addError:", "addFailure:", "perform:", "selector"],
referencedClasses: ["Error", "TestFailure"]
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_runCaseFor_",
smalltalk.method({
selector: "runCaseFor:",
category: 'running',
fn: function (aTestResult) {
    var self = this;
    smalltalk.send(self, "_setUp", []);
    smalltalk.send(aTestResult, "_increaseRuns", []);
    smalltalk.send(self, "_performTestFor_", [aTestResult]);
    smalltalk.send(self, "_tearDown", []);
    return self;
},
args: ["aTestResult"],
source: "runCaseFor: aTestResult\x0a\x09self setUp.\x0a\x09aTestResult increaseRuns.\x0a\x09self performTestFor: aTestResult.\x0a\x09self tearDown",
messageSends: ["setUp", "increaseRuns", "performTestFor:", "tearDown"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@testSelector'];
},
args: [],
source: "selector\x0a\x09^testSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setTestSelector_",
smalltalk.method({
selector: "setTestSelector:",
category: 'accessing',
fn: function (aSelector) {
    var self = this;
    self['@testSelector'] = aSelector;
    return self;
},
args: ["aSelector"],
source: "setTestSelector: aSelector\x0a\x09testSelector := aSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "setUp",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_",
smalltalk.method({
selector: "should:",
category: 'testing',
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(aBlock, "_value", [])]);
    return self;
},
args: ["aBlock"],
source: "should: aBlock\x0a\x09self assert: aBlock value",
messageSends: ["assert:", "value"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_raise_",
smalltalk.method({
selector: "should:raise:",
category: 'testing',
fn: function (aBlock, anExceptionClass) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(function () {smalltalk.send(aBlock, "_value", []);return false;}, "_on_do_", [anExceptionClass, function (ex) {return true;}])]);
    return self;
},
args: ["aBlock", "anExceptionClass"],
source: "should: aBlock raise: anExceptionClass\x0a\x09self assert: ([aBlock value. false] \x0a\x09\x09on: anExceptionClass \x0a\x09\x09do: [:ex | true])",
messageSends: ["assert:", "on:do:", "value"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_shouldnt_raise_",
smalltalk.method({
selector: "shouldnt:raise:",
category: 'testing',
fn: function (aBlock, anExceptionClass) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(function () {smalltalk.send(aBlock, "_value", []);return true;}, "_on_do_", [anExceptionClass, function (ex) {return false;}])]);
    return self;
},
args: ["aBlock", "anExceptionClass"],
source: "shouldnt: aBlock raise: anExceptionClass\x0a\x09self assert: ([aBlock value. true] \x0a\x09\x09on: anExceptionClass \x0a\x09\x09do: [:ex | false])",
messageSends: ["assert:", "on:do:", "value"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_signalFailure_",
smalltalk.method({
selector: "signalFailure:",
category: 'private',
fn: function (aString) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.TestFailure || TestFailure, "_new", []);
    smalltalk.send($1, "_messageText_", [aString]);
    $2 = smalltalk.send($1, "_signal", []);
    return self;
},
args: ["aString"],
source: "signalFailure: aString\x0a\x09TestFailure new\x0a\x09\x09messageText: aString;\x0a\x09\x09signal",
messageSends: ["messageText:", "new", "signal"],
referencedClasses: ["TestFailure"]
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'running',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "tearDown",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);


smalltalk.addMethod(
"_allTestSelectors",
smalltalk.method({
selector: "allTestSelectors",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    var selectors;
    selectors = smalltalk.send(self, "_testSelectors", []);
    $1 = smalltalk.send(self, "_shouldInheritSelectors", []);
    if (smalltalk.assert($1)) {
        smalltalk.send(selectors, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allTestSelectors", [])]);
    }
    return selectors;
},
args: [],
source: "allTestSelectors\x0a\x09| selectors |\x0a\x09selectors := self testSelectors.\x0a\x09self shouldInheritSelectors ifTrue: [\x0a\x09\x09selectors addAll: self superclass allTestSelectors].\x0a\x09^selectors",
messageSends: ["testSelectors", "ifTrue:", "addAll:", "allTestSelectors", "superclass", "shouldInheritSelectors"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_buildSuite",
smalltalk.method({
selector: "buildSuite",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_allTestSelectors", []), "_collect_", [function (each) {return smalltalk.send(self, "_selector_", [each]);}]);
    return $1;
},
args: [],
source: "buildSuite\x0a\x09^self allTestSelectors collect: [:each | self selector: each]",
messageSends: ["collect:", "selector:", "allTestSelectors"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_isAbstract",
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_name", []), "__eq", ["TestCase"]);
    return $1;
},
args: [],
source: "isAbstract\x0a\x09^ self name = 'TestCase'",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_lookupHierarchyRoot",
smalltalk.method({
selector: "lookupHierarchyRoot",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.TestCase || TestCase;
},
args: [],
source: "lookupHierarchyRoot\x0a\x09^TestCase",
messageSends: [],
referencedClasses: ["TestCase"]
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aSelector) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_setTestSelector_", [aSelector]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aSelector"],
source: "selector: aSelector\x0a\x09^self new\x0a\x09\x09setTestSelector: aSelector;\x0a\x09\x09yourself",
messageSends: ["setTestSelector:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_shouldInheritSelectors",
smalltalk.method({
selector: "shouldInheritSelectors",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_~_eq", [smalltalk.send(self, "_lookupHierarchyRoot", [])]);
    return $1;
},
args: [],
source: "shouldInheritSelectors\x0a\x09^self ~= self lookupHierarchyRoot",
messageSends: ["~=", "lookupHierarchyRoot"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_testSelectors",
smalltalk.method({
selector: "testSelectors",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_keys", []), "_select_", [function (each) {return smalltalk.send(each, "_match_", ["^test"]);}]);
    return $1;
},
args: [],
source: "testSelectors\x0a\x09^self methodDictionary keys select: [:each | each match: '^test']",
messageSends: ["select:", "match:", "keys", "methodDictionary"],
referencedClasses: []
}),
smalltalk.TestCase.klass);


smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');


smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.addMethod(
"_addError_",
smalltalk.method({
selector: "addError:",
category: 'accessing',
fn: function (anError) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_errors", []), "_add_", [anError]);
    return self;
},
args: ["anError"],
source: "addError: anError\x0a\x09self errors add: anError",
messageSends: ["add:", "errors"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_addFailure_",
smalltalk.method({
selector: "addFailure:",
category: 'accessing',
fn: function (aFailure) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_failures", []), "_add_", [aFailure]);
    return self;
},
args: ["aFailure"],
source: "addFailure: aFailure\x0a\x09self failures add: aFailure",
messageSends: ["add:", "failures"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_errors",
smalltalk.method({
selector: "errors",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@errors'];
},
args: [],
source: "errors\x0a\x09^errors",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_failures",
smalltalk.method({
selector: "failures",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@failures'];
},
args: [],
source: "failures\x0a\x09^failures",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_increaseRuns",
smalltalk.method({
selector: "increaseRuns",
category: 'accessing',
fn: function () {
    var self = this;
    self['@runs'] = smalltalk.send(self['@runs'], "__plus", [1]);
    return self;
},
args: [],
source: "increaseRuns\x0a\x09runs := runs + 1",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Object);
    self['@timestamp'] = smalltalk.send(smalltalk.Date || Date, "_now", []);
    self['@runs'] = 0;
    self['@errors'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
    self['@failures'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
    self['@total'] = 0;
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09timestamp := Date now.\x0a\x09runs := 0.\x0a\x09errors := Array new.\x0a\x09failures := Array new.\x0a\x09total := 0",
messageSends: ["initialize", "now", "new"],
referencedClasses: ["Date", "Array"]
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_runs",
smalltalk.method({
selector: "runs",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@runs'];
},
args: [],
source: "runs\x0a\x09^runs",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_status",
smalltalk.method({
selector: "status",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(smalltalk.send(self, "_errors", []), "_isEmpty", []);
    if (smalltalk.assert($2)) {
        $3 = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", []);
        if (smalltalk.assert($3)) {
            $1 = "success";
        } else {
            $1 = "failure";
        }
    } else {
        $1 = "error";
    }
    return $1;
},
args: [],
source: "status\x0a\x09^self errors isEmpty \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self failures isEmpty \x0a\x09\x09\x09\x09ifTrue: ['success']\x0a\x09\x09\x09\x09ifFalse: ['failure']]\x0a\x09\x09ifFalse: ['error']",
messageSends: ["ifTrue:ifFalse:", "isEmpty", "failures", "errors"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_timestamp",
smalltalk.method({
selector: "timestamp",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@timestamp'];
},
args: [],
source: "timestamp\x0a\x09^timestamp",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total",
smalltalk.method({
selector: "total",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@total'];
},
args: [],
source: "total\x0a\x09^total",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total_",
smalltalk.method({
selector: "total:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self['@total'] = aNumber;
    return self;
},
args: ["aNumber"],
source: "total: aNumber\x0a\x09total := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);



