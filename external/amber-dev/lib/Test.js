define("amber_core/Test", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Test');
$core.packages["Test"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('NodeTestRunner', $globals.Object, [], 'Test');

$core.addMethod(
$core.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._runTestSuite();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{},$globals.NodeTestRunner.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a\x09self runTestSuite",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["runTestSuite"]
}),
$globals.NodeTestRunner.klass);

$core.addMethod(
$core.method({
selector: "runTestSuite",
protocol: 'not yet classified',
fn: function (){
var self=this;
var suite,worker;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $TestCase(){return $globals.TestCase||(typeof TestCase=="undefined"?nil:TestCase)}
function $TestSuiteRunner(){return $globals.TestSuiteRunner||(typeof TestSuiteRunner=="undefined"?nil:TestSuiteRunner)}
function $ResultAnnouncement(){return $globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$9,$8,$12,$11,$10,$7,$6,$15,$14,$13,$5,$4,$17,$16,$19,$18,$26,$25,$24,$23,$22,$28,$27,$21,$20,$30,$29,$32,$31,$39,$38,$37,$36,$35,$34,$33;
suite=$recv($OrderedCollection())._new();
$recv($recv($recv($TestCase())._allSubclasses())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._isAbstract())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(suite)._addAll_($recv(each)._buildSuite());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
worker=$recv($TestSuiteRunner())._on_(suite);
$recv($recv(worker)._announcer())._on_do_($ResultAnnouncement(),(function(ann){
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
result=$recv(ann)._result();
result;
$2=$recv(result)._runs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["runs"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($recv(result)._total());
if($core.assert($1)){
$3=console;
$9=$recv($recv(result)._runs())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$8=$recv($9).__comma(" tests run, ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=5;
//>>excludeEnd("ctx");
$12=$recv(result)._failures();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["failures"]=1;
//>>excludeEnd("ctx");
$11=$recv($12)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$10=$recv($11)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__comma($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=4;
//>>excludeEnd("ctx");
$6=$recv($7).__comma(" failures, ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$15=$recv(result)._errors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["errors"]=1;
//>>excludeEnd("ctx");
$14=$recv($15)._size();
$13=$recv($14)._asString();
$5=$recv($6).__comma($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__comma(" errors.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($3)._log_($4);
$17=$recv(result)._failures();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["failures"]=2;
//>>excludeEnd("ctx");
$16=$recv($17)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isEmpty"]=1;
//>>excludeEnd("ctx");
if(!$core.assert($16)){
$19=$recv(result)._failures();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["failures"]=3;
//>>excludeEnd("ctx");
$18=$recv($19)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$recv($18)._runCase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["runCase"]=1;
//>>excludeEnd("ctx");
$26=$recv(result)._failures();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["failures"]=4;
//>>excludeEnd("ctx");
$25=$recv($26)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["first"]=2;
//>>excludeEnd("ctx");
$24=$recv($25)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$23=$recv($24)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$22=$recv($23).__comma(" >> ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=8;
//>>excludeEnd("ctx");
$28=$recv($recv(result)._failures())._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["first"]=3;
//>>excludeEnd("ctx");
$27=$recv($28)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$21=$recv($22).__comma($27);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=7;
//>>excludeEnd("ctx");
$20=$recv($21).__comma(" is failing!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=6;
//>>excludeEnd("ctx");
self._throw_($20);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["throw:"]=1;
//>>excludeEnd("ctx");
};
$30=$recv(result)._errors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["errors"]=2;
//>>excludeEnd("ctx");
$29=$recv($30)._isEmpty();
if(!$core.assert($29)){
$32=$recv(result)._errors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["errors"]=3;
//>>excludeEnd("ctx");
$31=$recv($32)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["first"]=4;
//>>excludeEnd("ctx");
$recv($31)._runCase();
$39=$recv(result)._errors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["errors"]=4;
//>>excludeEnd("ctx");
$38=$recv($39)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["first"]=5;
//>>excludeEnd("ctx");
$37=$recv($38)._class();
$36=$recv($37)._name();
$35=$recv($36).__comma(" >> ");
$34=$recv($35).__comma($recv($recv($recv(result)._errors())._first())._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=10;
//>>excludeEnd("ctx");
$33=$recv($34).__comma(" has errors!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=9;
//>>excludeEnd("ctx");
return self._throw_($33);
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ann:ann,result:result},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(worker)._run();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"runTestSuite",{suite:suite,worker:worker},$globals.NodeTestRunner.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "runTestSuite\x0a\x09| suite worker |\x0a\x0a\x09suite := OrderedCollection new.\x0a    (TestCase allSubclasses select: [ :each | each isAbstract not ])\x0a\x09do: [ :each | suite addAll: each buildSuite ].\x0a\x0a\x09worker := TestSuiteRunner on: suite.\x0a\x09worker announcer on: ResultAnnouncement do:\x0a\x09[ :ann | | result |\x0a    \x09result := ann result.\x0a        result runs = result total ifTrue: [\x0a\x09        console log: result runs asString, ' tests run, ', result failures size asString, ' failures, ', result errors size asString, ' errors.'.\x0a\x0a            result failures isEmpty ifFalse: [\x0a                result failures first runCase.\x0a                \x22the line above should throw, normally, but just in case I leave the line below\x22\x0a                self throw: result failures first class name, ' >> ', result failures first selector, ' is failing!' ].\x0a            result errors isEmpty ifFalse: [\x0a                result errors first runCase.\x0a                \x22the line above should throw, normally, but just in case I leave the line below\x22\x0a                self throw: result errors first class name, ' >> ', result errors first selector, ' has errors!' ].\x0a    ]].\x0a    worker run",
referencedClasses: ["OrderedCollection", "TestCase", "TestSuiteRunner", "ResultAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "select:", "allSubclasses", "not", "isAbstract", "addAll:", "buildSuite", "on:", "on:do:", "announcer", "result", "ifTrue:", "=", "runs", "total", "log:", ",", "asString", "size", "failures", "errors", "ifFalse:", "isEmpty", "runCase", "first", "throw:", "name", "class", "selector", "run"]
}),
$globals.NodeTestRunner.klass);

});
