smalltalk.addPackage('SUnit-Tests', {});
smalltalk.addClass('TestCaseTest', smalltalk.TestCase, [], 'SUnit-Tests');
smalltalk.addMethod(
"_testShouldRaiseException",
smalltalk.method({
selector: "testShouldRaiseException",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send((42), "_doSomething", []);}), (smalltalk.MessageNotUnderstood || MessageNotUnderstood)]);
return self;},
args: [],
source: unescape("testShouldRaiseException%0A%0A%09self%20should%3A%20%5B%2042%20doSomething%20%5D%20raise%3A%20MessageNotUnderstood."),
messageSends: ["should:raise:", "doSomething"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.TestCaseTest);

smalltalk.addMethod(
"_testShouldntRaiseException",
smalltalk.method({
selector: "testShouldntRaiseException",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_shouldnt_raise_", [(function(){return (4) + (2);}), (smalltalk.Error || Error)]);
return self;},
args: [],
source: unescape("testShouldntRaiseException%0A%0A%09self%20shouldnt%3A%20%5B%204%20+%202%20%5D%20raise%3A%20Error."),
messageSends: ["shouldnt:raise:", unescape("+")],
referencedClasses: ["Error"]
}),
smalltalk.TestCaseTest);



