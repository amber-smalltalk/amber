define("amber_core/Test", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Test');
smalltalk.packages["Test"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('NodeTestRunner', globals.Object, [], 'Test');

smalltalk.addMethod(
smalltalk.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._runTestSuite();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},globals.NodeTestRunner.klass)})},
args: [],
source: "main\x0a\x09self runTestSuite",
messageSends: ["runTestSuite"],
referencedClasses: []
}),
globals.NodeTestRunner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "runTestSuite",
protocol: 'not yet classified',
fn: function (){
var self=this;
var suite,worker;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $TestCase(){return globals.TestCase||(typeof TestCase=="undefined"?nil:TestCase)}
function $TestSuiteRunner(){return globals.TestSuiteRunner||(typeof TestSuiteRunner=="undefined"?nil:TestSuiteRunner)}
function $ResultAnnouncement(){return globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$9,$8,$12,$11,$10,$7,$6,$15,$14,$13,$5,$4,$17,$16,$19,$18,$26,$25,$24,$23,$22,$28,$27,$21,$20,$30,$29,$32,$31,$39,$38,$37,$36,$35,$34,$33;
suite=_st($OrderedCollection())._new();
_st(_st(_st($TestCase())._allSubclasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._isAbstract())._not();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(suite)._addAll_(_st(each)._buildSuite());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
worker=_st($TestSuiteRunner())._on_(suite);
_st(_st(worker)._announcer())._on_do_($ResultAnnouncement(),(function(ann){
var result;
return smalltalk.withContext(function($ctx2) {
result=_st(ann)._result();
result;
$2=_st(result)._runs();
$ctx2.sendIdx["runs"]=1;
$1=_st($2).__eq(_st(result)._total());
if(smalltalk.assert($1)){
$3=console;
$9=_st(_st(result)._runs())._asString();
$ctx2.sendIdx["asString"]=1;
$8=_st($9).__comma(" tests run, ");
$ctx2.sendIdx[","]=5;
$12=_st(result)._failures();
$ctx2.sendIdx["failures"]=1;
$11=_st($12)._size();
$ctx2.sendIdx["size"]=1;
$10=_st($11)._asString();
$ctx2.sendIdx["asString"]=2;
$7=_st($8).__comma($10);
$ctx2.sendIdx[","]=4;
$6=_st($7).__comma(" failures, ");
$ctx2.sendIdx[","]=3;
$15=_st(result)._errors();
$ctx2.sendIdx["errors"]=1;
$14=_st($15)._size();
$13=_st($14)._asString();
$5=_st($6).__comma($13);
$ctx2.sendIdx[","]=2;
$4=_st($5).__comma(" errors.");
$ctx2.sendIdx[","]=1;
_st($3)._log_($4);
$17=_st(result)._failures();
$ctx2.sendIdx["failures"]=2;
$16=_st($17)._isEmpty();
$ctx2.sendIdx["isEmpty"]=1;
if(! smalltalk.assert($16)){
$19=_st(result)._failures();
$ctx2.sendIdx["failures"]=3;
$18=_st($19)._first();
$ctx2.sendIdx["first"]=1;
_st($18)._runCase();
$ctx2.sendIdx["runCase"]=1;
$26=_st(result)._failures();
$ctx2.sendIdx["failures"]=4;
$25=_st($26)._first();
$ctx2.sendIdx["first"]=2;
$24=_st($25)._class();
$ctx2.sendIdx["class"]=1;
$23=_st($24)._name();
$ctx2.sendIdx["name"]=1;
$22=_st($23).__comma(" >> ");
$ctx2.sendIdx[","]=8;
$28=_st(_st(result)._failures())._first();
$ctx2.sendIdx["first"]=3;
$27=_st($28)._selector();
$ctx2.sendIdx["selector"]=1;
$21=_st($22).__comma($27);
$ctx2.sendIdx[","]=7;
$20=_st($21).__comma(" is failing!");
$ctx2.sendIdx[","]=6;
self._throw_($20);
$ctx2.sendIdx["throw:"]=1;
};
$30=_st(result)._errors();
$ctx2.sendIdx["errors"]=2;
$29=_st($30)._isEmpty();
if(! smalltalk.assert($29)){
$32=_st(result)._errors();
$ctx2.sendIdx["errors"]=3;
$31=_st($32)._first();
$ctx2.sendIdx["first"]=4;
_st($31)._runCase();
$39=_st(result)._errors();
$ctx2.sendIdx["errors"]=4;
$38=_st($39)._first();
$ctx2.sendIdx["first"]=5;
$37=_st($38)._class();
$36=_st($37)._name();
$35=_st($36).__comma(" >> ");
$34=_st($35).__comma(_st(_st(_st(result)._errors())._first())._selector());
$ctx2.sendIdx[","]=10;
$33=_st($34).__comma(" has errors!");
$ctx2.sendIdx[","]=9;
return self._throw_($33);
};
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann,result:result},$ctx1,3)})}));
_st(worker)._run();
return self}, function($ctx1) {$ctx1.fill(self,"runTestSuite",{suite:suite,worker:worker},globals.NodeTestRunner.klass)})},
args: [],
source: "runTestSuite\x0a\x09| suite worker |\x0a\x0a\x09suite := OrderedCollection new.\x0a    (TestCase allSubclasses select: [ :each | each isAbstract not ])\x0a\x09do: [ :each | suite addAll: each buildSuite ].\x0a\x0a\x09worker := TestSuiteRunner on: suite.\x0a\x09worker announcer on: ResultAnnouncement do:\x0a\x09[ :ann | | result |\x0a    \x09result := ann result.\x0a        result runs = result total ifTrue: [\x0a\x09        console log: result runs asString, ' tests run, ', result failures size asString, ' failures, ', result errors size asString, ' errors.'.\x0a\x0a            result failures isEmpty ifFalse: [\x0a                result failures first runCase.\x0a                \x22the line above should throw, normally, but just in case I leave the line below\x22\x0a                self throw: result failures first class name, ' >> ', result failures first selector, ' is failing!' ].\x0a            result errors isEmpty ifFalse: [\x0a                result errors first runCase.\x0a                \x22the line above should throw, normally, but just in case I leave the line below\x22\x0a                self throw: result errors first class name, ' >> ', result errors first selector, ' has errors!' ].\x0a    ]].\x0a    worker run",
messageSends: ["new", "do:", "select:", "allSubclasses", "not", "isAbstract", "addAll:", "buildSuite", "on:", "on:do:", "announcer", "result", "ifTrue:", "=", "runs", "total", "log:", ",", "asString", "size", "failures", "errors", "ifFalse:", "isEmpty", "runCase", "first", "throw:", "name", "class", "selector", "run"],
referencedClasses: ["OrderedCollection", "TestCase", "TestSuiteRunner", "ResultAnnouncement"]
}),
globals.NodeTestRunner.klass);

});
