smalltalk.addPackage('Test', {});
smalltalk.addClass('NodeTestRunner', smalltalk.Object, [], 'Test');

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_runTestSuite", []);
return self;},
args: [],
source: "initialize\x0d\x0a\x09self runTestSuite",
messageSends: ["runTestSuite"],
referencedClasses: []
}),
smalltalk.NodeTestRunner.klass);

smalltalk.addMethod(
"_runTestSuite",
smalltalk.method({
selector: "runTestSuite",
category: 'not yet classified',
fn: function (){
var self=this;
var $1,$2,$3;
var suite;
var worker;
suite=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.TestCase || TestCase),"_allSubclasses",[]),"_select_",[(function(each){
return smalltalk.send(smalltalk.send(each,"_isAbstract",[]),"_not",[]);
})]),"_do_",[(function(each){
return smalltalk.send(suite,"_addAll_",[smalltalk.send(each,"_buildSuite",[])]);
})]);
worker=smalltalk.send((smalltalk.TestSuiteRunner || TestSuiteRunner),"_on_",[suite]);
smalltalk.send(smalltalk.send(worker,"_announcer",[]),"_on_do_",[(smalltalk.ResultAnnouncement || ResultAnnouncement),(function(ann){
var result;
result=smalltalk.send(ann,"_result",[]);
result;
$1=smalltalk.send(smalltalk.send(result,"_runs",[]),"__eq",[smalltalk.send(result,"_total",[])]);
if(smalltalk.assert($1)){
smalltalk.send(console,"_log_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(result,"_runs",[]),"_asString",[]),"__comma",[" tests run, "]),"__comma",[smalltalk.send(smalltalk.send(smalltalk.send(result,"_failures",[]),"_size",[]),"_asString",[])]),"__comma",[" failures, "]),"__comma",[smalltalk.send(smalltalk.send(smalltalk.send(result,"_errors",[]),"_size",[]),"_asString",[])]),"__comma",[" errors."])]);
$2=smalltalk.send(smalltalk.send(result,"_failures",[]),"_isEmpty",[]);
if(! smalltalk.assert($2)){
smalltalk.send(self,"_throw_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(result,"_failures",[]),"_first",[]),"_class",[]),"_name",[]),"__comma",[" >> "]),"__comma",[smalltalk.send(smalltalk.send(smalltalk.send(result,"_failures",[]),"_first",[]),"_selector",[])]),"__comma",[" is failing!"])]);
};
$3=smalltalk.send(smalltalk.send(result,"_errors",[]),"_isEmpty",[]);
if(! smalltalk.assert($3)){
return smalltalk.send(self,"_throw_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(result,"_errors",[]),"_first",[]),"_class",[]),"_name",[]),"__comma",[" >> "]),"__comma",[smalltalk.send(smalltalk.send(smalltalk.send(result,"_errors",[]),"_first",[]),"_selector",[])]),"__comma",[" has errors!"])]);
};
};
})]);
smalltalk.send(worker,"_run",[]);
return self},
args: [],
source: "runTestSuite\x0a\x09| suite worker |\x0a\x0a\x09suite := OrderedCollection new.\x0a    (TestCase allSubclasses select: [ :each | each isAbstract not ])\x0a\x09do: [ :each | suite addAll: each buildSuite ].\x0a\x0a\x09worker := TestSuiteRunner on: suite.\x0a\x09worker announcer on: ResultAnnouncement do:\x0a\x09[ :ann | | result |\x0a    \x09result := ann result.\x0a        result runs = result total ifTrue: [\x0a\x09        console log: result runs asString, ' tests run, ', result failures size asString, ' failures, ', result errors size asString, ' errors.'.\x0a\x0a            result failures isEmpty ifFalse: [\x0a                self throw: result failures first class name, ' >> ', result failures first selector, ' is failing!' ].\x0a            result errors isEmpty ifFalse: [\x0a                self throw: result errors first class name, ' >> ', result errors first selector, ' has errors!' ].\x0a    ]].\x0a    worker run",
messageSends: ["new", "do:", "addAll:", "buildSuite", "select:", "not", "isAbstract", "allSubclasses", "on:", "on:do:", "result", "ifTrue:", "log:", ",", "asString", "size", "errors", "failures", "runs", "ifFalse:", "throw:", "selector", "first", "name", "class", "isEmpty", "=", "total", "announcer", "run"],
referencedClasses: ["OrderedCollection", "TestCase", "TestSuiteRunner", "ResultAnnouncement"]
}),
smalltalk.NodeTestRunner.klass);


