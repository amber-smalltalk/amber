smalltalk.addPackage('SUnit-Tests', {});
smalltalk.addClass('TestCaseTest', smalltalk.TestCase, [], 'SUnit-Tests');
smalltalk.addMethod(
"_testShouldRaiseException",
smalltalk.method({
selector: "testShouldRaiseException",
fn: function (){
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send((42), "_doSomething", []);}), (smalltalk.MessageNotUnderstood || MessageNotUnderstood)]);
return self;}
}),
smalltalk.TestCaseTest);

smalltalk.addMethod(
"_testShouldntRaiseException",
smalltalk.method({
selector: "testShouldntRaiseException",
fn: function (){
var self=this;
smalltalk.send(self, "_shouldnt_raise_", [(function(){return (4) + (2);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.TestCaseTest);



