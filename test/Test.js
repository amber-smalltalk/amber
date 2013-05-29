smalltalk.addPackage('Test');
smalltalk.addClass('NodeTestRunner', smalltalk.Object, [], 'Test');

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._runTestSuite();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.NodeTestRunner.klass)})},
args: [],
source: "initialize\x0a\x09self runTestSuite",
messageSends: ["runTestSuite"],
referencedClasses: []
}),
smalltalk.NodeTestRunner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "runTestSuite",
category: 'not yet classified',
fn: function (){
var self=this;
var suite,worker;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $TestCase(){return smalltalk.TestCase||(typeof TestCase=="undefined"?nil:TestCase)}
function $TestSuiteRunner(){return smalltalk.TestSuiteRunner||(typeof TestSuiteRunner=="undefined"?nil:TestSuiteRunner)}
function $ResultAnnouncement(){return smalltalk.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
suite=_st($OrderedCollection())._new();
_st(_st(_st($TestCase())._allSubclasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._isAbstract())._not();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(suite)._addAll_(_st(each)._buildSuite());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
worker=_st($TestSuiteRunner())._on_(suite);
_st(_st(worker)._announcer())._on_do_($ResultAnnouncement(),(function(ann){
var result;
return smalltalk.withContext(function($ctx2) {
result=_st(ann)._result();
result;
$1=_st(_st(result)._runs()).__eq(_st(result)._total());
if(smalltalk.assert($1)){
_st(console)._log_(_st(_st(_st(_st(_st(_st(_st(result)._runs())._asString()).__comma(" tests run, ")).__comma(_st(_st(_st(result)._failures())._size())._asString())).__comma(" failures, ")).__comma(_st(_st(_st(result)._errors())._size())._asString())).__comma(" errors."));
$2=_st(_st(result)._failures())._isEmpty();
if(! smalltalk.assert($2)){
self._throw_(_st(_st(_st(_st(_st(_st(_st(result)._failures())._first())._class())._name()).__comma(" >> ")).__comma(_st(_st(_st(result)._failures())._first())._selector())).__comma(" is failing!"));
};
$3=_st(_st(result)._errors())._isEmpty();
if(! smalltalk.assert($3)){
return self._throw_(_st(_st(_st(_st(_st(_st(_st(result)._errors())._first())._class())._name()).__comma(" >> ")).__comma(_st(_st(_st(result)._errors())._first())._selector())).__comma(" has errors!"));
};
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann,result:result},$ctx1)})}));
_st(worker)._run();
return self}, function($ctx1) {$ctx1.fill(self,"runTestSuite",{suite:suite,worker:worker},smalltalk.NodeTestRunner.klass)})},
args: [],
source: "runTestSuite\x0a\x09| suite worker |\x0a\x0a\x09suite := OrderedCollection new.\x0a    (TestCase allSubclasses select: [ :each | each isAbstract not ])\x0a\x09do: [ :each | suite addAll: each buildSuite ].\x0a\x0a\x09worker := TestSuiteRunner on: suite.\x0a\x09worker announcer on: ResultAnnouncement do:\x0a\x09[ :ann | | result |\x0a    \x09result := ann result.\x0a        result runs = result total ifTrue: [\x0a\x09        console log: result runs asString, ' tests run, ', result failures size asString, ' failures, ', result errors size asString, ' errors.'.\x0a\x0a            result failures isEmpty ifFalse: [\x0a                self throw: result failures first class name, ' >> ', result failures first selector, ' is failing!' ].\x0a            result errors isEmpty ifFalse: [\x0a                self throw: result errors first class name, ' >> ', result errors first selector, ' has errors!' ].\x0a    ]].\x0a    worker run",
messageSends: ["new", "do:", "addAll:", "buildSuite", "select:", "not", "isAbstract", "allSubclasses", "on:", "on:do:", "result", "ifTrue:", "log:", ",", "asString", "size", "errors", "failures", "runs", "ifFalse:", "throw:", "selector", "first", "name", "class", "isEmpty", "=", "total", "announcer", "run"],
referencedClasses: ["OrderedCollection", "TestCase", "TestSuiteRunner", "ResultAnnouncement"]
}),
smalltalk.NodeTestRunner.klass);


