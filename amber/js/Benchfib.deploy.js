smalltalk.addPackage('Benchfib', {});
smalltalk.addClass('Benchfib', smalltalk.Object, [], 'Benchfib');

smalltalk.addMethod(
'_main',
smalltalk.method({
selector: 'main',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send((0), "_tinyBenchmarks", []);
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(unescape("0%20tinyBenchmarks%20%3D%3E%20"), "__comma", [result])]);
return self;}
}),
smalltalk.Benchfib.klass);


smalltalk.addMethod(
'_benchFib',
smalltalk.method({
selector: 'benchFib',
fn: function (){
var self=this;
return ((($receiver = self < (2)).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (1);})() : (function(){return ((($receiver = ((($receiver = smalltalk.send(self - (1), "_benchFib", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self - (2), "_benchFib", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self - (2), "_benchFib", [])]))).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (1);}), (function(){return ((($receiver = ((($receiver = smalltalk.send(self - (1), "_benchFib", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self - (2), "_benchFib", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self - (2), "_benchFib", [])]))).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]));
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_benchmark',
smalltalk.method({
selector: 'benchmark',
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
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_tinyBenchmarks',
smalltalk.method({
selector: 'tinyBenchmarks',
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
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_jsbenchFib',
smalltalk.method({
selector: 'jsbenchFib',
fn: function (){
var self=this;
if (this < 2) {
return 1;
} else {
return (this-1)._jsbenchFib() + (this-2)._jsbenchFib() + 1;};
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_jsbenchmark',
smalltalk.method({
selector: 'jsbenchmark',
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
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_jstinyBenchmarks',
smalltalk.method({
selector: 'jstinyBenchmarks',
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
return self;}
}),
smalltalk.Number);

