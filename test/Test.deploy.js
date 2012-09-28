smalltalk.addPackage('Test', {});
smalltalk.addClass('NodeTestRunner', smalltalk.Object, [], 'Test');

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_runTestSuite", []);
    return self;
}
}),
smalltalk.NodeTestRunner.klass);

smalltalk.addMethod(
"_runTestSuite",
smalltalk.method({
selector: "runTestSuite",
fn: function () {
    var self = this;
    var $1, $2;
    var result;
    result = smalltalk.send(smalltalk.TestResult || TestResult, "_new", []);
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.TestCase || TestCase, "_allSubclasses", []), "_select_", [function (each) {return smalltalk.send(smalltalk.send(each, "_isAbstract", []), "_not", []);}]), "_do_", [function (each) {return smalltalk.send(smalltalk.send(each, "_buildSuite", []), "_do_", [function (suite) {return smalltalk.send(suite, "_runCaseFor_", [result]);}]);}]);
    smalltalk.send(console, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(result, "_runs", []), "_asString", []), "__comma", [" tests run, "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(result, "_failures", []), "_size", []), "_asString", [])]), "__comma", [" failures, "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(result, "_errors", []), "_size", []), "_asString", [])]), "__comma", [" errors."])]);
    $1 = smalltalk.send(smalltalk.send(result, "_failures", []), "_isEmpty", []);
    if (!smalltalk.assert($1)) {
        smalltalk.send(self, "_throw_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(result, "_failures", []), "_first", []), "_class", []), "_name", []), "__comma", [" >> "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(result, "_failures", []), "_first", []), "_selector", [])]), "__comma", [" is failing!"])]);
    }
    $2 = smalltalk.send(smalltalk.send(result, "_errors", []), "_isEmpty", []);
    if (!smalltalk.assert($2)) {
        smalltalk.send(self, "_throw_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(result, "_errors", []), "_first", []), "_class", []), "_name", []), "__comma", [" >> "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(result, "_errors", []), "_first", []), "_selector", [])]), "__comma", [" has errors!"])]);
    }
    return self;
}
}),
smalltalk.NodeTestRunner.klass);


