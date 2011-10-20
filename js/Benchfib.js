smalltalk.addPackage('Benchfib', {});
smalltalk.addClass('Benchfib', smalltalk.Object, [], 'Benchfib');

smalltalk.addMethod(
unescape('_main'),
smalltalk.method({
selector: unescape('main'),
category: 'not yet classified',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send((0), "_tinyBenchmarks", []);
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(unescape("0%20tinyBenchmarks%20%3D%3E%20"), "__comma", [result])]);
return self;},
args: [],
source: unescape('main%0A%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%200%20tinyBenchmarks.%0A%09console%20log%3A%20%270%20tinyBenchmarks%20%3D%3E%20%27%20%2C%20result'),
messageSends: ["tinyBenchmarks", "log:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.Benchfib.klass);


smalltalk.addMethod(
unescape('_benchFib'),
smalltalk.method({
selector: unescape('benchFib'),
category: '*Benchfib',
fn: function (){
var self=this;
return ((($receiver = self < (2)).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (1);})() : (function(){return ((($receiver = ((($receiver = smalltalk.send(self - (1), "_benchFib", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self - (2), "_benchFib", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self - (2), "_benchFib", [])]))).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (1);}), (function(){return ((($receiver = ((($receiver = smalltalk.send(self - (1), "_benchFib", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self - (2), "_benchFib", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self - (2), "_benchFib", [])]))).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]));
return self;},
args: [],
source: unescape('benchFib%20%0A%09%22Handy%20send-heavy%20benchmark%22%0A%09%22%28result%20//%20seconds%20to%20run%29%20%3D%20approx%20calls%20per%20second%22%0A%09%22%20%7C%20r%20t%20%7C%0A%09%20%20t%20%3A%3D%20Time%20millisecondsToRun%3A%20%5Br%20%3A%3D%2026%20benchFib%5D.%0A%09%20%20%28r%20*%201000%29%20//%20t%22%0A%09%22138000%20on%20a%20Mac%208100/100%22%0A%09%5E%20self%20%3C%202%20%0A%09%09ifTrue%3A%20%5B1%5D%20%0A%09%09ifFalse%3A%20%5B%28self-1%29%20benchFib%20+%20%28self-2%29%20benchFib%20+%201%5D'),
messageSends: ["ifTrue:ifFalse:", unescape("%3C"), unescape("+"), "benchFib", unescape("-")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_benchmark'),
smalltalk.method({
selector: unescape('benchmark'),
category: '*Benchfib',
fn: function (){
var self=this;
var size=nil;
var flags=nil;
var prime=nil;
var k=nil;
var count=nil;
size=(8190);
smalltalk.send((1), "_to_do_", [self, (function(iter){count=(0);flags=smalltalk.send((smalltalk.Array || Array), "_new", []);smalltalk.send(size, "_timesRepeat_", [(function(){return smalltalk.send(flags, "_add_", [true]);})]);return smalltalk.send((1), "_to_do_", [size, (function(i){return ((($receiver = smalltalk.send(flags, "_at_", [i])).klass === smalltalk.Boolean) ? ($receiver ? (function(){prime=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));k=((($receiver = i).klass === smalltalk.Number) ? $receiver +prime : smalltalk.send($receiver, "__plus", [prime]));(function(){while((function(){return ((($receiver = k).klass === smalltalk.Number) ? $receiver <=size : smalltalk.send($receiver, "__lt_eq", [size]));})()) {(function(){smalltalk.send(flags, "_at_put_", [k, false]);return k=((($receiver = k).klass === smalltalk.Number) ? $receiver +prime : smalltalk.send($receiver, "__plus", [prime]));})()}})();return count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){prime=((($receiver = i).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));k=((($receiver = i).klass === smalltalk.Number) ? $receiver +prime : smalltalk.send($receiver, "__plus", [prime]));(function(){while((function(){return ((($receiver = k).klass === smalltalk.Number) ? $receiver <=size : smalltalk.send($receiver, "__lt_eq", [size]));})()) {(function(){smalltalk.send(flags, "_at_put_", [k, false]);return k=((($receiver = k).klass === smalltalk.Number) ? $receiver +prime : smalltalk.send($receiver, "__plus", [prime]));})()}})();return count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]));})]);})]);
return count;
return self;},
args: [],
source: unescape('benchmark%20%0A%09%22Handy%20bytecode-heavy%20benchmark%22%0A%09%22%28500000%20//%20time%20to%20run%29%20%3D%20approx%20bytecodes%20per%20second%22%0A%09%225000000%20//%20%28Time%20millisecondsToRun%3A%20%5B10%20benchmark%5D%29%20*%201000%22%0A%09%223059000%20on%20a%20Mac%208100/100%22%0A%20%20%20%20%7C%20size%20flags%20prime%20k%20count%20%7C%0A%20%20%20%20size%20%3A%3D%208190.%0A%20%20%20%201%20to%3A%20self%20do%3A%0A%20%20%20%20%20%20%20%20%5B%3Aiter%20%7C%0A%20%20%20%20%20%20%20%20count%20%3A%3D%200.%0A%20%20%20%20%20%20%20%20flags%20%3A%3D%20Array%20new.%0A%20%20%20%20%20%20%20%20size%20timesRepeat%3A%20%5B%20flags%20add%3A%20true%5D.%0A%20%20%20%20%20%20%20%201%20to%3A%20size%20do%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%5B%3Ai%20%7C%20%28flags%20at%3A%20i%29%20ifTrue%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5Bprime%20%3A%3D%20i+1.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20k%20%3A%3D%20i%20+%20prime.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5Bk%20%3C%3D%20size%5D%20whileTrue%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5Bflags%20at%3A%20k%20put%3A%20false.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20k%20%3A%3D%20k%20+%20prime%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20count%20%3A%3D%20count%20+%201%5D%5D%5D.%0A%20%20%20%20%5E%20count'),
messageSends: ["to:do:", "new", "timesRepeat:", "add:", "ifTrue:", "at:", unescape("+"), "whileTrue:", unescape("%3C%3D"), "at:put:"],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_tinyBenchmarks'),
smalltalk.method({
selector: unescape('tinyBenchmarks'),
category: '*Benchfib',
fn: function (){
var self=this;
var t1=nil;
var t2=nil;
var r=nil;
var n1=nil;
var n2=nil;
n1=(1);
(function(){while((function(){t1=smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [(function(){return smalltalk.send(n1, "_benchmark", []);})]);return ((($receiver = t1).klass === smalltalk.Number) ? $receiver <(1000) : smalltalk.send($receiver, "__lt", [(1000)]));})()) {(function(){return n1=((($receiver = n1).klass === smalltalk.Number) ? $receiver *(2) : smalltalk.send($receiver, "__star", [(2)]));})()}})();
n2=(16);
(function(){while((function(){t2=smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [(function(){return r=smalltalk.send(n2, "_benchFib", []);})]);return ((($receiver = t2).klass === smalltalk.Number) ? $receiver <(1000) : smalltalk.send($receiver, "__lt", [(1000)]));})()) {(function(){return n2=((($receiver = n2).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()}})();
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(((($receiver = ((($receiver = ((($receiver = n1).klass === smalltalk.Number) ? $receiver *(500000) : smalltalk.send($receiver, "__star", [(500000)]))).klass === smalltalk.Number) ? $receiver *(1000) : smalltalk.send($receiver, "__star", [(1000)]))).klass === smalltalk.Number) ? $receiver /t1 : smalltalk.send($receiver, "__slash", [t1])), "_printString", []), "__comma", [unescape("%20bytecodes/sec%3B%20")]), "__comma", [smalltalk.send(((($receiver = ((($receiver = r).klass === smalltalk.Number) ? $receiver *(1000) : smalltalk.send($receiver, "__star", [(1000)]))).klass === smalltalk.Number) ? $receiver /t2 : smalltalk.send($receiver, "__slash", [t2])), "_printString", [])]), "__comma", [unescape("%20sends/sec")]);
return self;},
args: [],
source: unescape('tinyBenchmarks%20%0A%09%22Report%20the%20results%20of%20running%20the%20two%20tiny%20Squeak%20benchmarks.%0A%09ar%209/10/1999%3A%20Adjusted%20to%20run%20at%20least%201%20sec%20to%20get%20more%20stable%20results%22%0A%09%220%20tinyBenchmarks%22%0A%09%22On%20a%20292%20MHz%20G3%20Mac%3A%2022727272%20bytecodes/sec%3B%20984169%20sends/sec%22%0A%09%22On%20a%20400%20MHz%20PII/Win98%3A%20%2018028169%20bytecodes/sec%3B%201081272%20sends/sec%22%0A%09%7C%20t1%20t2%20r%20n1%20n2%20%7C%0A%09n1%20%3A%3D%201.%0A%09%5Bt1%20%3A%3D%20Date%20millisecondsToRun%3A%20%5Bn1%20benchmark%5D.%0A%09t1%20%3C%201000%5D%20whileTrue%3A%5Bn1%20%3A%3D%20n1%20*%202%5D.%20%22Note%3A%20%23benchmark%27s%20runtime%20is%20about%20O%28n%29%22%0A%0A%09n2%20%3A%3D%2016.%0A%09%5Bt2%20%3A%3D%20Date%20millisecondsToRun%3A%20%5Br%20%3A%3D%20n2%20benchFib%5D.%0A%09t2%20%3C%201000%5D%20whileTrue%3A%5Bn2%20%3A%3D%20n2%20+%201%5D.%20%0A%09%22Note%3A%20%23benchFib%27s%20runtime%20is%20about%20O%28k%5En%29%2C%0A%09%09where%20k%20is%20the%20golden%20number%20%3D%20%281%20+%205%20sqrt%29%20/%202%20%3D%201.618....%22%0A%0A%09%5E%20%28%28n1%20*%20500000%20*%201000%29%20/%20t1%29%20printString%2C%20%27%20bytecodes/sec%3B%20%27%2C%0A%09%20%20%28%28r%20*%201000%29%20/%20t2%29%20printString%2C%20%27%20sends/sec%27'),
messageSends: ["whileTrue:", "millisecondsToRun:", "benchmark", unescape("%3C"), unescape("*"), "benchFib", unescape("+"), unescape("%2C"), "printString", unescape("/")],
referencedClasses: ["Date"]
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_jsbenchFib'),
smalltalk.method({
selector: unescape('jsbenchFib'),
category: '*Benchfib',
fn: function (){
var self=this;
if (this < 2) {
return 1;
} else {
return (this-1)._jsbenchFib() + (this-2)._jsbenchFib() + 1;};
return self;},
args: [],
source: unescape('jsbenchFib%0A%20%0A%09%3Cif%20%28this%20%3C%202%29%20%7B%0Areturn%201%3B%0A%7D%20else%20%7B%0Areturn%20%28this-1%29._jsbenchFib%28%29%20+%20%28this-2%29._jsbenchFib%28%29%20+%201%3B%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_jsbenchmark'),
smalltalk.method({
selector: unescape('jsbenchmark'),
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
return self;},
args: [],
source: unescape('jsbenchmark%0A%0A%3C%0Avar%20size%20%3D%208190%3B%0Avar%20count%3B%0Afor%20%28var%20z%3D0%3Bz%3Cthis%3Bz++%29%20%7B%0A%20%20count%20%3D%200%3B%0A%20%20var%20flags%20%3D%20new%20Array%28%29%3B%0A%20%20for%20%28var%20p%3D0%3B%20p%3Csize%3B%20p++%29%20%7B%0A%20%20%20%20flags%5Bp%5D%20%3D%20true%3B%0A%20%20%7D%0A%20%20for%20%28var%20i%3D1%3Bi%3C%3Dsize%3Bi++%29%20%7B%0A%20%20%20%20if%20%28flags%5Bi-1%5D%29%20%7B%0A%20%20%20%20%20%20var%20prime%20%3D%20i+1%3B%0A%20%20%20%20%20%20var%20k%20%3D%20i%20+%20prime%3B%0A%20%20%20%20%20%20while%20%28k%20%3C%3D%20size%29%20%7B%0A%20%20%20%20%20%20%20%20flags%5Bk-1%5D%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20k%20%3D%20k%20+%20prime%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20count%20%3D%20count%20+%201%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0Areturn%20count%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_jstinyBenchmarks'),
smalltalk.method({
selector: unescape('jstinyBenchmarks'),
category: '*Benchfib',
fn: function (){
var self=this;
var t1=nil;
var t2=nil;
var r=nil;
var n1=nil;
var n2=nil;
n1=(1);
(function(){while((function(){t1=smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [(function(){return smalltalk.send(n1, "_jsbenchmark", []);})]);return ((($receiver = t1).klass === smalltalk.Number) ? $receiver <(1000) : smalltalk.send($receiver, "__lt", [(1000)]));})()) {(function(){return n1=((($receiver = n1).klass === smalltalk.Number) ? $receiver *(2) : smalltalk.send($receiver, "__star", [(2)]));})()}})();
n2=(28);
(function(){while((function(){t2=smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [(function(){return r=smalltalk.send(n2, "_jsbenchFib", []);})]);return ((($receiver = t2).klass === smalltalk.Number) ? $receiver <(1000) : smalltalk.send($receiver, "__lt", [(1000)]));})()) {(function(){return n2=((($receiver = n2).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()}})();
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(((($receiver = ((($receiver = ((($receiver = n1).klass === smalltalk.Number) ? $receiver *(500000) : smalltalk.send($receiver, "__star", [(500000)]))).klass === smalltalk.Number) ? $receiver *(1000) : smalltalk.send($receiver, "__star", [(1000)]))).klass === smalltalk.Number) ? $receiver /t1 : smalltalk.send($receiver, "__slash", [t1])), "_printString", []), "__comma", [unescape("%20bytecodes/sec%3B%20")]), "__comma", [smalltalk.send(((($receiver = ((($receiver = r).klass === smalltalk.Number) ? $receiver *(1000) : smalltalk.send($receiver, "__star", [(1000)]))).klass === smalltalk.Number) ? $receiver /t2 : smalltalk.send($receiver, "__slash", [t2])), "_printString", [])]), "__comma", [unescape("%20sends/sec")]);
return self;},
args: [],
source: unescape('jstinyBenchmarks%0A%09%220%20jstinyBenchmarks%22%0A%0A%09%7C%20t1%20t2%20r%20n1%20n2%20%7C%0A%09n1%20%3A%3D%201.%0A%09%5Bt1%20%3A%3D%20Date%20millisecondsToRun%3A%20%5Bn1%20jsbenchmark%5D.%0A%09t1%20%3C%201000%5D%20whileTrue%3A%5Bn1%20%3A%3D%20n1%20*%202%5D.%20%22Note%3A%20%23benchmark%27s%20runtime%20is%20about%20O%28n%29%22%0A%0A%09n2%20%3A%3D%2028.%0A%09%5Bt2%20%3A%3D%20Date%20millisecondsToRun%3A%20%5Br%20%3A%3D%20n2%20jsbenchFib%5D.%0A%09t2%20%3C%201000%5D%20whileTrue%3A%5Bn2%20%3A%3D%20n2%20+%201%5D.%20%0A%09%22Note%3A%20%23jsbenchFib%27s%20runtime%20is%20about%20O%28k%5En%29%2C%0A%09%09where%20k%20is%20the%20golden%20number%20%3D%20%281%20+%205%20sqrt%29%20/%202%20%3D%201.618....%22%0A%0A%09%5E%20%28%28n1%20*%20500000%20*%201000%29%20/%20t1%29%20printString%2C%20%27%20bytecodes/sec%3B%20%27%2C%0A%09%20%20%28%28r%20*%201000%29%20/%20t2%29%20printString%2C%20%27%20sends/sec%27'),
messageSends: ["whileTrue:", "millisecondsToRun:", "jsbenchmark", unescape("%3C"), unescape("*"), "jsbenchFib", unescape("+"), unescape("%2C"), "printString", unescape("/")],
referencedClasses: ["Date"]
}),
smalltalk.Number);

