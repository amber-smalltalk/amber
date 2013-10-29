define("amber_core/Test", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Test');
smalltalk.packages["Test"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('NodeTestRunner', smalltalk.Object, [], 'Test');

smalltalk.addMethod(
smalltalk.method({
selector: "main",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._runTestSuite();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.NodeTestRunner.klass)})},
args: [],
source: "main\x0a\x09self runTestSuite",
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
var $2,$1,$3,$10,$9,$8,$13,$12,$11,$7,$6,$16,$15,$14,$5,$4,$18,$17,$20,$19,$27,$26,$25,$24,$23,$30,$29,$28,$22,$21,$32,$31,$34,$33,$41,$40,$39,$38,$37,$44,$43,$42,$36,$35;
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
$10=_st(result)._runs();
$9=_st($10)._asString();
$ctx2.sendIdx["asString"]=1;
$8=_st($9).__comma(" tests run, ");
$ctx2.sendIdx[","]=5;
$13=_st(result)._failures();
$ctx2.sendIdx["failures"]=1;
$12=_st($13)._size();
$ctx2.sendIdx["size"]=1;
$11=_st($12)._asString();
$ctx2.sendIdx["asString"]=2;
$7=_st($8).__comma($11);
$ctx2.sendIdx[","]=4;
$6=_st($7).__comma(" failures, ");
$ctx2.sendIdx[","]=3;
$16=_st(result)._errors();
$ctx2.sendIdx["errors"]=1;
$15=_st($16)._size();
$14=_st($15)._asString();
$5=_st($6).__comma($14);
$ctx2.sendIdx[","]=2;
$4=_st($5).__comma(" errors.");
$ctx2.sendIdx[","]=1;
_st($3)._log_($4);
$18=_st(result)._failures();
$ctx2.sendIdx["failures"]=2;
$17=_st($18)._isEmpty();
$ctx2.sendIdx["isEmpty"]=1;
if(! smalltalk.assert($17)){
$20=_st(result)._failures();
$ctx2.sendIdx["failures"]=3;
$19=_st($20)._first();
$ctx2.sendIdx["first"]=1;
_st($19)._runCase();
$ctx2.sendIdx["runCase"]=1;
$27=_st(result)._failures();
$ctx2.sendIdx["failures"]=4;
$26=_st($27)._first();
$ctx2.sendIdx["first"]=2;
$25=_st($26)._class();
$ctx2.sendIdx["class"]=1;
$24=_st($25)._name();
$ctx2.sendIdx["name"]=1;
$23=_st($24).__comma(" >> ");
$ctx2.sendIdx[","]=8;
$30=_st(result)._failures();
$29=_st($30)._first();
$ctx2.sendIdx["first"]=3;
$28=_st($29)._selector();
$ctx2.sendIdx["selector"]=1;
$22=_st($23).__comma($28);
$ctx2.sendIdx[","]=7;
$21=_st($22).__comma(" is failing!");
$ctx2.sendIdx[","]=6;
self._throw_($21);
$ctx2.sendIdx["throw:"]=1;
};
$32=_st(result)._errors();
$ctx2.sendIdx["errors"]=2;
$31=_st($32)._isEmpty();
if(! smalltalk.assert($31)){
$34=_st(result)._errors();
$ctx2.sendIdx["errors"]=3;
$33=_st($34)._first();
$ctx2.sendIdx["first"]=4;
_st($33)._runCase();
$41=_st(result)._errors();
$ctx2.sendIdx["errors"]=4;
$40=_st($41)._first();
$ctx2.sendIdx["first"]=5;
$39=_st($40)._class();
$38=_st($39)._name();
$37=_st($38).__comma(" >> ");
$44=_st(result)._errors();
$43=_st($44)._first();
$42=_st($43)._selector();
$36=_st($37).__comma($42);
$ctx2.sendIdx[","]=10;
$35=_st($36).__comma(" has errors!");
$ctx2.sendIdx[","]=9;
return self._throw_($35);
};
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann,result:result},$ctx1,3)})}));
_st(worker)._run();
return self}, function($ctx1) {$ctx1.fill(self,"runTestSuite",{suite:suite,worker:worker},smalltalk.NodeTestRunner.klass)})},
args: [],
source: "runTestSuite\x0a\x09| suite worker |\x0a\x0a\x09suite := OrderedCollection new.\x0a    (TestCase allSubclasses select: [ :each | each isAbstract not ])\x0a\x09do: [ :each | suite addAll: each buildSuite ].\x0a\x0a\x09worker := TestSuiteRunner on: suite.\x0a\x09worker announcer on: ResultAnnouncement do:\x0a\x09[ :ann | | result |\x0a    \x09result := ann result.\x0a        result runs = result total ifTrue: [\x0a\x09        console log: result runs asString, ' tests run, ', result failures size asString, ' failures, ', result errors size asString, ' errors.'.\x0a\x0a            result failures isEmpty ifFalse: [\x0a                result failures first runCase.\x0a                \x22the line above should throw, normally, but just in case I leave the line below\x22\x0a                self throw: result failures first class name, ' >> ', result failures first selector, ' is failing!' ].\x0a            result errors isEmpty ifFalse: [\x0a                result errors first runCase.\x0a                \x22the line above should throw, normally, but just in case I leave the line below\x22\x0a                self throw: result errors first class name, ' >> ', result errors first selector, ' has errors!' ].\x0a    ]].\x0a    worker run",
messageSends: ["new", "do:", "select:", "allSubclasses", "not", "isAbstract", "addAll:", "buildSuite", "on:", "on:do:", "announcer", "result", "ifTrue:", "=", "runs", "total", "log:", ",", "asString", "size", "failures", "errors", "ifFalse:", "isEmpty", "runCase", "first", "throw:", "name", "class", "selector", "run"],
referencedClasses: ["OrderedCollection", "TestCase", "TestSuiteRunner", "ResultAnnouncement"]
}),
smalltalk.NodeTestRunner.klass);

});
