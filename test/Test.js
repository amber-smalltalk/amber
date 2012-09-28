smalltalk.addPackage('Test', {});
smalltalk.addClass('NodeTestRunner', smalltalk.Object, [], 'Test');

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_runTestSuite", []);
    return self;
},
args: [],
source: "initialize\x0a\x09self runTestSuite",
messageSends: ["runTestSuite"],
referencedClasses: []
}),
smalltalk.NodeTestRunner.klass);

smalltalk.addMethod(
"_runTestSuite",
smalltalk.method({
selector: "runTestSuite",
category: 'not yet classified',
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
},
args: [],
source: "runTestSuite\x0a\x09| result |\x0a\x09result := TestResult new.\x0a\x0a\x09((TestCase allSubclasses\x0a\x09\x09select: [ :each | each isAbstract not ])\x0a\x09\x09do: [ :each | each buildSuite do: [ :suite | suite runCaseFor: result ] ]).\x0a\x0a\x09console log: result runs asString, ' tests run, ', result failures size asString, ' failures, ', result errors size asString, ' errors.'.\x0a\x0a\x09result failures isEmpty ifFalse: [ \x0a\x09\x09self throw: result failures first class name, ' >> ', result failures first selector, ' is failing!' ].\x0a\x09result errors isEmpty ifFalse: [\x0a\x09\x09self throw: result errors first class name, ' >> ', result errors first selector, ' has errors!' ].",
messageSends: ["new", "do:", "runCaseFor:", "buildSuite", "select:", "not", "isAbstract", "allSubclasses", "log:", ",", "asString", "size", "errors", "failures", "runs", "ifFalse:", "throw:", "selector", "first", "name", "class", "isEmpty"],
referencedClasses: ["TestResult", "TestCase"]
}),
smalltalk.NodeTestRunner.klass);


