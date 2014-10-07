define("amber_core/Benchfib", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Benchfib');
$core.packages["Benchfib"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('Benchfib', $globals.Object, [], 'Benchfib');

$core.addMethod(
$core.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
result=(0)._tinyBenchmarks();
$recv(console)._log_("0 tinyBenchmarks => ".__comma(result));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{result:result},$globals.Benchfib.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a\x0a\x09| result |\x0a\x09result := 0 tinyBenchmarks.\x0a\x09console log: '0 tinyBenchmarks => ' , result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tinyBenchmarks", "log:", ","]
}),
$globals.Benchfib.klass);

$core.addMethod(
$core.method({
selector: "benchFib",
protocol: '*Benchfib',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$5,$4,$3,$1;
$2=self.__lt((2));
if($core.assert($2)){
$1=(1);
} else {
$5=self.__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._benchFib();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["benchFib"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__plus($recv(self.__minus((2)))._benchFib());
$1=$recv($3).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"benchFib",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "benchFib\x0a\x09\x22Handy send-heavy benchmark\x22\x0a\x09\x22(result // seconds to run) = approx calls per second\x22\x0a\x09\x22\x09| r t |\x0a\x09\x09t := Time millisecondsToRun: [r := 26 benchFib].\x0a\x09\x09(r * 1000) // t\x22\x0a\x09\x22138000 on a Mac 8100/100\x22\x0a\x09^ self < 2\x0a\x09\x09ifTrue: [1]\x0a\x09\x09ifFalse: [(self-1) benchFib + (self-2) benchFib + 1]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "<", "+", "benchFib", "-"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "benchmark",
protocol: '*Benchfib',
fn: function (){
var self=this;
var size,flags,prime,k,count;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
size=(8190);
(1)._to_do_(self,(function(iter){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
count=(0);
count;
flags=$recv($Array())._new();
flags;
$recv(size)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(flags)._add_(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return (1)._to_do_(size,(function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv(flags)._at_(i);
if($core.assert($1)){
prime=$recv(i).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["+"]=1;
//>>excludeEnd("ctx");
prime;
k=$recv(i).__plus(prime);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["+"]=2;
//>>excludeEnd("ctx");
k;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(k).__lt_eq(size);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$recv(flags)._at_put_(k,false);
k=$recv(k).__plus(prime);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["+"]=3;
//>>excludeEnd("ctx");
return k;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)});
//>>excludeEnd("ctx");
}));
count=$recv(count).__plus((1));
return count;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({i:i},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({iter:iter},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:do:"]=1;
//>>excludeEnd("ctx");
$2=count;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"benchmark",{size:size,flags:flags,prime:prime,k:k,count:count},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "benchmark\x0a\x09\x22Handy bytecode-heavy benchmark\x22\x0a\x09\x22(500000 // time to run) = approx bytecodes per second\x22\x0a\x09\x225000000 // (Time millisecondsToRun: [10 benchmark]) * 1000\x22\x0a\x09\x223059000 on a Mac 8100/100\x22\x0a\x09| size flags prime k count |\x0a\x09size := 8190.\x0a\x091 to: self do:\x0a\x09\x09[:iter |\x0a\x09\x09count := 0.\x0a\x09\x09flags := Array new.\x0a\x09\x09size timesRepeat: [ flags add: true].\x0a\x09\x091 to: size do:\x0a\x09\x09\x09[:i | (flags at: i) ifTrue:\x0a\x09\x09\x09\x09[prime := i+1.\x0a\x09\x09\x09\x09k := i + prime.\x0a\x09\x09\x09\x09[k <= size] whileTrue:\x0a\x09\x09\x09\x09\x09[flags at: k put: false.\x0a\x09\x09\x09\x09\x09k := k + prime].\x0a\x09\x09\x09\x09count := count + 1]]].\x0a\x09^ count",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["to:do:", "new", "timesRepeat:", "add:", "ifTrue:", "at:", "+", "whileTrue:", "<=", "at:put:"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "jsbenchFib",
protocol: '*Benchfib',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
if (this < 2) {
return 1;
} else {
return (this-1)._jsbenchFib() + (this-2)._jsbenchFib() + 1;};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsbenchFib",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsbenchFib\x0a\x0a\x09<if (this < 2) {\x0areturn 1;\x0a} else {\x0areturn (this-1)._jsbenchFib() + (this-2)._jsbenchFib() + 1;}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "jsbenchmark",
protocol: '*Benchfib',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

var size = 8190;
var count;
for (var z=0;z<this;z++) {
	count = 0;
	var flags = new Array();
	for (var p=0; p<size; p++) {
	flags[p] = true;
	}
	for (var i=1;i<=size;i++) {
		if (flags[i-1]) {
			var prime = i+1;
			var k = i + prime;
			while (k <= size) {
				flags[k-1] = false;
				k = k + prime;
			}
			count = count + 1;
		}
	}
}
return count;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsbenchmark",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsbenchmark\x0a\x0a<\x0avar size = 8190;\x0avar count;\x0afor (var z=0;z<this;z++) {\x0a\x09count = 0;\x0a\x09var flags = new Array();\x0a\x09for (var p=0; p<size; p++) {\x0a\x09flags[p] = true;\x0a\x09}\x0a\x09for (var i=1;i<=size;i++) {\x0a\x09\x09if (flags[i-1]) {\x0a\x09\x09\x09var prime = i+1;\x0a\x09\x09\x09var k = i + prime;\x0a\x09\x09\x09while (k <= size) {\x0a\x09\x09\x09\x09flags[k-1] = false;\x0a\x09\x09\x09\x09k = k + prime;\x0a\x09\x09\x09}\x0a\x09\x09\x09count = count + 1;\x0a\x09\x09}\x0a\x09}\x0a}\x0areturn count>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "jstinyBenchmarks",
protocol: '*Benchfib',
fn: function (){
var self=this;
var t1,t2,r,n1,n2;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $7,$6,$5,$4,$3,$2,$1;
n1=(1);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
t1=$recv($Date())._millisecondsToRun_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(n1)._jsbenchmark();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["millisecondsToRun:"]=1;
//>>excludeEnd("ctx");
t1;
return $recv(t1).__lt((1000));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
n1=$recv(n1).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=1;
//>>excludeEnd("ctx");
return n1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileTrue:"]=1;
//>>excludeEnd("ctx");
n2=(28);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
t2=$recv($Date())._millisecondsToRun_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
r=$recv(n2)._jsbenchFib();
return r;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
t2;
return $recv(t2).__lt((1000));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
n2=$recv(n2).__plus((1));
return n2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}));
$7=$recv(n1).__star((500000));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$6=$recv($7).__star((1000));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__slash(t1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(" bytecodes/sec; ");
$2=$recv($3).__comma($recv($recv($recv(r).__star((1000))).__slash(t2))._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(" sends/sec");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jstinyBenchmarks",{t1:t1,t2:t2,r:r,n1:n1,n2:n2},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jstinyBenchmarks\x0a\x09\x220 jstinyBenchmarks\x22\x0a\x0a\x09| t1 t2 r n1 n2 |\x0a\x09n1 := 1.\x0a\x09[t1 := Date millisecondsToRun: [n1 jsbenchmark].\x0a\x09t1 < 1000] whileTrue:[n1 := n1 * 2]. \x22Note: #benchmark's runtime is about O(n)\x22\x0a\x0a\x09n2 := 28.\x0a\x09[t2 := Date millisecondsToRun: [r := n2 jsbenchFib].\x0a\x09t2 < 1000] whileTrue:[n2 := n2 + 1].\x0a\x09\x22Note: #jsbenchFib's runtime is about O(k^n),\x0a\x09\x09where k is the golden number = (1 + 5 sqrt) / 2 = 1.618....\x22\x0a\x0a\x09^ ((n1 * 500000 * 1000) / t1) printString, ' bytecodes/sec; ',\x0a\x09\x09((r * 1000) / t2) printString, ' sends/sec'",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["whileTrue:", "millisecondsToRun:", "jsbenchmark", "<", "*", "jsbenchFib", "+", ",", "printString", "/"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "tinyBenchmarks",
protocol: '*Benchfib',
fn: function (){
var self=this;
var t1,t2,r,n1,n2;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $7,$6,$5,$4,$3,$2,$1;
n1=(1);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
t1=$recv($Date())._millisecondsToRun_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(n1)._benchmark();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["millisecondsToRun:"]=1;
//>>excludeEnd("ctx");
t1;
return $recv(t1).__lt((1000));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
n1=$recv(n1).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=1;
//>>excludeEnd("ctx");
return n1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileTrue:"]=1;
//>>excludeEnd("ctx");
n2=(16);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
t2=$recv($Date())._millisecondsToRun_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
r=$recv(n2)._benchFib();
return r;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
t2;
return $recv(t2).__lt((1000));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
n2=$recv(n2).__plus((1));
return n2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}));
$7=$recv(n1).__star((500000));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$6=$recv($7).__star((1000));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__slash(t1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(" bytecodes/sec; ");
$2=$recv($3).__comma($recv($recv($recv(r).__star((1000))).__slash(t2))._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(" sends/sec");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tinyBenchmarks",{t1:t1,t2:t2,r:r,n1:n1,n2:n2},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tinyBenchmarks\x0a\x09\x22Report the results of running the two tiny Squeak benchmarks.\x0a\x09ar 9/10/1999: Adjusted to run at least 1 sec to get more stable results\x22\x0a\x09\x220 tinyBenchmarks\x22\x0a\x09\x22On a 292 MHz G3 Mac: 22727272 bytecodes/sec; 984169 sends/sec\x22\x0a\x09\x22On a 400 MHz PII/Win98: 18028169 bytecodes/sec; 1081272 sends/sec\x22\x0a\x09| t1 t2 r n1 n2 |\x0a\x09n1 := 1.\x0a\x09[t1 := Date millisecondsToRun: [n1 benchmark].\x0a\x09t1 < 1000] whileTrue:[n1 := n1 * 2]. \x22Note: #benchmark's runtime is about O(n)\x22\x0a\x0a\x09n2 := 16.\x0a\x09[t2 := Date millisecondsToRun: [r := n2 benchFib].\x0a\x09t2 < 1000] whileTrue:[n2 := n2 + 1].\x0a\x09\x22Note: #benchFib's runtime is about O(k^n),\x0a\x09\x09where k is the golden number = (1 + 5 sqrt) / 2 = 1.618....\x22\x0a\x0a\x09^ ((n1 * 500000 * 1000) / t1) printString, ' bytecodes/sec; ',\x0a\x09\x09((r * 1000) / t2) printString, ' sends/sec'",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["whileTrue:", "millisecondsToRun:", "benchmark", "<", "*", "benchFib", "+", ",", "printString", "/"]
}),
$globals.Number);

});
