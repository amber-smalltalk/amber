smalltalk.addPackage('SUnit', {});
smalltalk.addClass('TestCase', smalltalk.Object, ['testSelector'], 'SUnit');
smalltalk.addMethod(
"_assert_",
smalltalk.method({
selector: "assert:",
fn: function (aBoolean) {
    var self = this;
    smalltalk.send(self, "_assert_description_", [aBoolean, "Assertion failed"]);
    return self;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_description_",
smalltalk.method({
selector: "assert:description:",
fn: function (aBoolean, aString) {
    var self = this;
    if (!smalltalk.assert(aBoolean)) {
        smalltalk.send(self, "_signalFailure_", [aString]);
    }
    return self;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_equals_",
smalltalk.method({
selector: "assert:equals:",
fn: function (expected, actual) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_assert_description_", [smalltalk.send(expected, "__eq", [actual]), smalltalk.send(smalltalk.send(smalltalk.send("Expected: ", "__comma", [smalltalk.send(expected, "_asString", [])]), "__comma", [" but was: "]), "__comma", [smalltalk.send(actual, "_asString", [])])]);
    return $1;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_deny_",
smalltalk.method({
selector: "deny:",
fn: function (aBoolean) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(aBoolean, "_not", [])]);
    return self;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_performTestFor_",
smalltalk.method({
selector: "performTestFor:",
fn: function (aResult) {
    var self = this;
    smalltalk.send(function () {return smalltalk.send(function () {return smalltalk.send(self, "_perform_", [smalltalk.send(self, "_selector", [])]);}, "_on_do_", [smalltalk.TestFailure || TestFailure, function (ex) {return smalltalk.send(aResult, "_addFailure_", [self]);}]);}, "_on_do_", [smalltalk.Error || Error, function (ex) {return smalltalk.send(aResult, "_addError_", [self]);}]);
    return self;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_runCaseFor_",
smalltalk.method({
selector: "runCaseFor:",
fn: function (aTestResult) {
    var self = this;
    smalltalk.send(self, "_setUp", []);
    smalltalk.send(aTestResult, "_increaseRuns", []);
    smalltalk.send(self, "_performTestFor_", [aTestResult]);
    smalltalk.send(self, "_tearDown", []);
    return self;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function () {
    var self = this;
    return self['@testSelector'];
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setTestSelector_",
smalltalk.method({
selector: "setTestSelector:",
fn: function (aSelector) {
    var self = this;
    self['@testSelector'] = aSelector;
    return self;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_",
smalltalk.method({
selector: "should:",
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(aBlock, "_value", [])]);
    return self;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_raise_",
smalltalk.method({
selector: "should:raise:",
fn: function (aBlock, anExceptionClass) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(function () {smalltalk.send(aBlock, "_value", []);return false;}, "_on_do_", [anExceptionClass, function (ex) {return true;}])]);
    return self;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_shouldnt_raise_",
smalltalk.method({
selector: "shouldnt:raise:",
fn: function (aBlock, anExceptionClass) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(function () {smalltalk.send(aBlock, "_value", []);return true;}, "_on_do_", [anExceptionClass, function (ex) {return false;}])]);
    return self;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_signalFailure_",
smalltalk.method({
selector: "signalFailure:",
fn: function (aString) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.TestFailure || TestFailure, "_new", []);
    smalltalk.send($1, "_messageText_", [aString]);
    $2 = smalltalk.send($1, "_signal", []);
    return self;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.TestCase);


smalltalk.addMethod(
"_allTestSelectors",
smalltalk.method({
selector: "allTestSelectors",
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
}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_buildSuite",
smalltalk.method({
selector: "buildSuite",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_allTestSelectors", []), "_collect_", [function (each) {return smalltalk.send(self, "_selector_", [each]);}]);
    return $1;
}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_isAbstract",
smalltalk.method({
selector: "isAbstract",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_name", []), "__eq", ["TestCase"]);
    return $1;
}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_lookupHierarchyRoot",
smalltalk.method({
selector: "lookupHierarchyRoot",
fn: function () {
    var self = this;
    return smalltalk.TestCase || TestCase;
}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aSelector) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_setTestSelector_", [aSelector]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_shouldInheritSelectors",
smalltalk.method({
selector: "shouldInheritSelectors",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_~_eq", [smalltalk.send(self, "_lookupHierarchyRoot", [])]);
    return $1;
}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_testSelectors",
smalltalk.method({
selector: "testSelectors",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_keys", []), "_select_", [function (each) {return smalltalk.send(each, "_match_", ["^test"]);}]);
    return $1;
}
}),
smalltalk.TestCase.klass);


smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');


smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.addMethod(
"_addError_",
smalltalk.method({
selector: "addError:",
fn: function (anError) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_errors", []), "_add_", [anError]);
    return self;
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_addFailure_",
smalltalk.method({
selector: "addFailure:",
fn: function (aFailure) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_failures", []), "_add_", [aFailure]);
    return self;
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_errors",
smalltalk.method({
selector: "errors",
fn: function () {
    var self = this;
    return self['@errors'];
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_failures",
smalltalk.method({
selector: "failures",
fn: function () {
    var self = this;
    return self['@failures'];
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_increaseRuns",
smalltalk.method({
selector: "increaseRuns",
fn: function () {
    var self = this;
    self['@runs'] = smalltalk.send(self['@runs'], "__plus", [1]);
    return self;
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Object);
    self['@timestamp'] = smalltalk.send(smalltalk.Date || Date, "_now", []);
    self['@runs'] = 0;
    self['@errors'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
    self['@failures'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
    self['@total'] = 0;
    return self;
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_runs",
smalltalk.method({
selector: "runs",
fn: function () {
    var self = this;
    return self['@runs'];
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_status",
smalltalk.method({
selector: "status",
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
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_timestamp",
smalltalk.method({
selector: "timestamp",
fn: function () {
    var self = this;
    return self['@timestamp'];
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total",
smalltalk.method({
selector: "total",
fn: function () {
    var self = this;
    return self['@total'];
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total_",
smalltalk.method({
selector: "total:",
fn: function (aNumber) {
    var self = this;
    self['@total'] = aNumber;
    return self;
}
}),
smalltalk.TestResult);



