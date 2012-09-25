smalltalk.addPackage('Benchfib', {});
smalltalk.addClass('Benchfib', smalltalk.Object, [], 'Benchfib');

smalltalk.addMethod(
"_main",
smalltalk.method({
selector: "main",
category: 'not yet classified',
fn: function (){
var self=this;
var result;
result=smalltalk.send((0),"_tinyBenchmarks",[]);
smalltalk.send(console,"_log_",[smalltalk.send("0 tinyBenchmarks => ","__comma",[result])]);
return self},
args: [],
source: "main\x0a\x0a\x09| result |\x0a\x09result := 0 tinyBenchmarks.\x0a\x09console log: '0 tinyBenchmarks => ' , result",
messageSends: ["tinyBenchmarks", "log:", ","],
referencedClasses: []
}),
smalltalk.Benchfib.klass);


smalltalk.addMethod(
"_benchFib",
smalltalk.method({
selector: "benchFib",
category: '*Benchfib',
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"__lt",[(2)]);
if(smalltalk.assert($2)){
$1=(1);
} else {
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"__minus",[(1)]),"_benchFib",[]),"__plus",[smalltalk.send(smalltalk.send(self,"__minus",[(2)]),"_benchFib",[])]),"__plus",[(1)]);
};
return $1;
},
args: [],
source: "benchFib \x0a\x09\x22Handy send-heavy benchmark\x22\x0a\x09\x22(result // seconds to run) = approx calls per second\x22\x0a\x09\x22 | r t |\x0a\x09  t := Time millisecondsToRun: [r := 26 benchFib].\x0a\x09  (r * 1000) // t\x22\x0a\x09\x22138000 on a Mac 8100/100\x22\x0a\x09^ self < 2 \x0a\x09\x09ifTrue: [1] \x0a\x09\x09ifFalse: [(self-1) benchFib + (self-2) benchFib + 1]",
messageSends: ["ifTrue:ifFalse:", "+", "benchFib", "-", "<"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_benchmark",
smalltalk.method({
selector: "benchmark",
category: '*Benchfib',
fn: function (){
var self=this;
var $1;
var size;
var flags;
var prime;
var k;
var count;
size=(8190);
smalltalk.send((1),"_to_do_",[self,(function(iter){
count=(0);
count;
flags=smalltalk.send((smalltalk.Array || Array),"_new",[]);
flags;
smalltalk.send(size,"_timesRepeat_",[(function(){
return smalltalk.send(flags,"_add_",[true]);
})]);
return smalltalk.send((1),"_to_do_",[size,(function(i){
$1=smalltalk.send(flags,"_at_",[i]);
if(smalltalk.assert($1)){
prime=smalltalk.send(i,"__plus",[(1)]);
prime;
k=smalltalk.send(i,"__plus",[prime]);
k;
smalltalk.send((function(){
return smalltalk.send(k,"__lt_eq",[size]);
}),"_whileTrue_",[(function(){
smalltalk.send(flags,"_at_put_",[k,false]);
k=smalltalk.send(k,"__plus",[prime]);
return k;
})]);
count=smalltalk.send(count,"__plus",[(1)]);
return count;
};
})]);
})]);
return count;
},
args: [],
source: "benchmark \x0a\x09\x22Handy bytecode-heavy benchmark\x22\x0a\x09\x22(500000 // time to run) = approx bytecodes per second\x22\x0a\x09\x225000000 // (Time millisecondsToRun: [10 benchmark]) * 1000\x22\x0a\x09\x223059000 on a Mac 8100/100\x22\x0a    | size flags prime k count |\x0a    size := 8190.\x0a    1 to: self do:\x0a        [:iter |\x0a        count := 0.\x0a        flags := Array new.\x0a        size timesRepeat: [ flags add: true].\x0a        1 to: size do:\x0a            [:i | (flags at: i) ifTrue:\x0a                [prime := i+1.\x0a                k := i + prime.\x0a                [k <= size] whileTrue:\x0a                    [flags at: k put: false.\x0a                    k := k + prime].\x0a                count := count + 1]]].\x0a    ^ count",
messageSends: ["to:do:", "new", "timesRepeat:", "add:", "ifTrue:", "+", "whileTrue:", "at:put:", "<=", "at:"],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_jsbenchFib",
smalltalk.method({
selector: "jsbenchFib",
category: '*Benchfib',
fn: function (){
var self=this;
if (this < 2) {
return 1;
} else {
return (this-1)._jsbenchFib() + (this-2)._jsbenchFib() + 1;};
;
return self},
args: [],
source: "jsbenchFib\x0a \x0a\x09<if (this < 2) {\x0areturn 1;\x0a} else {\x0areturn (this-1)._jsbenchFib() + (this-2)._jsbenchFib() + 1;}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_jsbenchmark",
smalltalk.method({
selector: "jsbenchmark",
category: '*Benchfib',
fn: function (){
var self=this;

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
;
return self},
args: [],
source: "jsbenchmark\x0a\x0a<\x0avar size = 8190;\x0avar count;\x0afor (var z=0;z<this;z++) {\x0a  count = 0;\x0a  var flags = new Array();\x0a  for (var p=0; p<size; p++) {\x0a    flags[p] = true;\x0a  }\x0a  for (var i=1;i<=size;i++) {\x0a    if (flags[i-1]) {\x0a      var prime = i+1;\x0a      var k = i + prime;\x0a      while (k <= size) {\x0a        flags[k-1] = false;\x0a        k = k + prime;\x0a      }\x0a      count = count + 1;\x0a    }\x0a  }\x0a}\x0areturn count>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_jstinyBenchmarks",
smalltalk.method({
selector: "jstinyBenchmarks",
category: '*Benchfib',
fn: function (){
var self=this;
var $1;
var t1;
var t2;
var r;
var n1;
var n2;
n1=(1);
smalltalk.send((function(){
t1=smalltalk.send((smalltalk.Date || Date),"_millisecondsToRun_",[(function(){
return smalltalk.send(n1,"_jsbenchmark",[]);
})]);
t1;
return smalltalk.send(t1,"__lt",[(1000)]);
}),"_whileTrue_",[(function(){
n1=smalltalk.send(n1,"__star",[(2)]);
return n1;
})]);
n2=(28);
smalltalk.send((function(){
t2=smalltalk.send((smalltalk.Date || Date),"_millisecondsToRun_",[(function(){
r=smalltalk.send(n2,"_jsbenchFib",[]);
return r;
})]);
t2;
return smalltalk.send(t2,"__lt",[(1000)]);
}),"_whileTrue_",[(function(){
n2=smalltalk.send(n2,"__plus",[(1)]);
return n2;
})]);
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(n1,"__star",[(500000)]),"__star",[(1000)]),"__slash",[t1]),"_printString",[]),"__comma",[" bytecodes/sec; "]),"__comma",[smalltalk.send(smalltalk.send(smalltalk.send(r,"__star",[(1000)]),"__slash",[t2]),"_printString",[])]),"__comma",[" sends/sec"]);
return $1;
},
args: [],
source: "jstinyBenchmarks\x0a\x09\x220 jstinyBenchmarks\x22\x0a\x0a\x09| t1 t2 r n1 n2 |\x0a\x09n1 := 1.\x0a\x09[t1 := Date millisecondsToRun: [n1 jsbenchmark].\x0a\x09t1 < 1000] whileTrue:[n1 := n1 * 2]. \x22Note: #benchmark's runtime is about O(n)\x22\x0a\x0a\x09n2 := 28.\x0a\x09[t2 := Date millisecondsToRun: [r := n2 jsbenchFib].\x0a\x09t2 < 1000] whileTrue:[n2 := n2 + 1]. \x0a\x09\x22Note: #jsbenchFib's runtime is about O(k^n),\x0a\x09\x09where k is the golden number = (1 + 5 sqrt) / 2 = 1.618....\x22\x0a\x0a\x09^ ((n1 * 500000 * 1000) / t1) printString, ' bytecodes/sec; ',\x0a\x09  ((r * 1000) / t2) printString, ' sends/sec'",
messageSends: ["whileTrue:", "*", "millisecondsToRun:", "jsbenchmark", "<", "+", "jsbenchFib", ",", "printString", "/"],
referencedClasses: ["Date"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_tinyBenchmarks",
smalltalk.method({
selector: "tinyBenchmarks",
category: '*Benchfib',
fn: function (){
var self=this;
var $1;
var t1;
var t2;
var r;
var n1;
var n2;
n1=(1);
smalltalk.send((function(){
t1=smalltalk.send((smalltalk.Date || Date),"_millisecondsToRun_",[(function(){
return smalltalk.send(n1,"_benchmark",[]);
})]);
t1;
return smalltalk.send(t1,"__lt",[(1000)]);
}),"_whileTrue_",[(function(){
n1=smalltalk.send(n1,"__star",[(2)]);
return n1;
})]);
n2=(16);
smalltalk.send((function(){
t2=smalltalk.send((smalltalk.Date || Date),"_millisecondsToRun_",[(function(){
r=smalltalk.send(n2,"_benchFib",[]);
return r;
})]);
t2;
return smalltalk.send(t2,"__lt",[(1000)]);
}),"_whileTrue_",[(function(){
n2=smalltalk.send(n2,"__plus",[(1)]);
return n2;
})]);
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(n1,"__star",[(500000)]),"__star",[(1000)]),"__slash",[t1]),"_printString",[]),"__comma",[" bytecodes/sec; "]),"__comma",[smalltalk.send(smalltalk.send(smalltalk.send(r,"__star",[(1000)]),"__slash",[t2]),"_printString",[])]),"__comma",[" sends/sec"]);
return $1;
},
args: [],
source: "tinyBenchmarks \x0a\x09\x22Report the results of running the two tiny Squeak benchmarks.\x0a\x09ar 9/10/1999: Adjusted to run at least 1 sec to get more stable results\x22\x0a\x09\x220 tinyBenchmarks\x22\x0a\x09\x22On a 292 MHz G3 Mac: 22727272 bytecodes/sec; 984169 sends/sec\x22\x0a\x09\x22On a 400 MHz PII/Win98:  18028169 bytecodes/sec; 1081272 sends/sec\x22\x0a\x09| t1 t2 r n1 n2 |\x0a\x09n1 := 1.\x0a\x09[t1 := Date millisecondsToRun: [n1 benchmark].\x0a\x09t1 < 1000] whileTrue:[n1 := n1 * 2]. \x22Note: #benchmark's runtime is about O(n)\x22\x0a\x0a\x09n2 := 16.\x0a\x09[t2 := Date millisecondsToRun: [r := n2 benchFib].\x0a\x09t2 < 1000] whileTrue:[n2 := n2 + 1]. \x0a\x09\x22Note: #benchFib's runtime is about O(k^n),\x0a\x09\x09where k is the golden number = (1 + 5 sqrt) / 2 = 1.618....\x22\x0a\x0a\x09^ ((n1 * 500000 * 1000) / t1) printString, ' bytecodes/sec; ',\x0a\x09  ((r * 1000) / t2) printString, ' sends/sec'",
messageSends: ["whileTrue:", "*", "millisecondsToRun:", "benchmark", "<", "+", "benchFib", ",", "printString", "/"],
referencedClasses: ["Date"]
}),
smalltalk.Number);

