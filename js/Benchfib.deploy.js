smalltalk.addClass('Benchfib', smalltalk.Object, [], 'Benchfib');

smalltalk.addMethod(
'_main',
smalltalk.method({
selector: 'main',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send((0), "_tinyBenchmarks", []);
smalltalk.send(console, "_log_", [smalltalk.send(unescape("0%20tinyBenchmarks%20%3D%3E%20"), "__plus", [result])]);
return self;}
]
}),
smalltalk.Benchfib.klass);


smalltalk.addMethod(
'_benchFib',
smalltalk.method({
selector: 'benchFib',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "__lt", [(2)]), "_ifTrue_ifFalse_", [(function(){return (1);}), (function(){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "__minus", [(1)]), "_benchFib", []), "__plus", [smalltalk.send(smalltalk.send(self, "__minus", [(2)]), "_benchFib", [])]), "__plus", [(1)]);})]);
return self;}
]
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
smalltalk.send((1), "_to_do_", [self, (function(iter){count=(0);flags=smalltalk.send(smalltalk.Array, "_new", []);smalltalk.send(size, "_timesRepeat_", [(function(){return smalltalk.send(flags, "_add_", [true]);})]);return smalltalk.send((1), "_to_do_", [size, (function(i){return smalltalk.send(smalltalk.send(flags, "_at_", [i]), "_ifTrue_", [(function(){prime=smalltalk.send(i, "__plus", [(1)]);k=smalltalk.send(i, "__plus", [prime]);smalltalk.send((function(){return smalltalk.send(k, "__lt_eq", [size]);}), "_whileTrue_", [(function(){smalltalk.send(flags, "_at_put_", [k, false]);return k=smalltalk.send(k, "__plus", [prime]);})]);return count=smalltalk.send(count, "__plus", [(1)]);})]);})]);})]);
return count;
return self;}
]
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
smalltalk.send((function(){t1=smalltalk.send(smalltalk.Date, "_millisecondsToRun_", [(function(){return smalltalk.send(n1, "_benchmark", []);})]);return smalltalk.send(t1, "__lt", [(1000)]);}), "_whileTrue_", [(function(){return n1=smalltalk.send(n1, "__star", [(2)]);})]);
n2=(28);
smalltalk.send((function(){t2=smalltalk.send(smalltalk.Date, "_millisecondsToRun_", [(function(){return r=smalltalk.send(n2, "_benchFib", []);})]);return smalltalk.send(t2, "__lt", [(1000)]);}), "_whileTrue_", [(function(){return n2=smalltalk.send(n2, "__plus", [(1)]);})]);
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(n1, "__star", [(500000)]), "__star", [(1000)]), "__slash", [t1]), "_printString", []), "__comma", [unescape("%20bytecodes/sec%3B%20")]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(r, "__star", [(1000)]), "__slash", [t2]), "_printString", [])]), "__comma", [unescape("%20sends/sec")]);
return self;}
]
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
]
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
]
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
smalltalk.send((function(){t1=smalltalk.send(smalltalk.Date, "_millisecondsToRun_", [(function(){return smalltalk.send(n1, "_jsbenchmark", []);})]);return smalltalk.send(t1, "__lt", [(1000)]);}), "_whileTrue_", [(function(){return n1=smalltalk.send(n1, "__star", [(2)]);})]);
n2=(28);
smalltalk.send((function(){t2=smalltalk.send(smalltalk.Date, "_millisecondsToRun_", [(function(){return r=smalltalk.send(n2, "_jsbenchFib", []);})]);return smalltalk.send(t2, "__lt", [(1000)]);}), "_whileTrue_", [(function(){return n2=smalltalk.send(n2, "__plus", [(1)]);})]);
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(n1, "__star", [(500000)]), "__star", [(1000)]), "__slash", [t1]), "_printString", []), "__comma", [unescape("%20bytecodes/sec%3B%20")]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(r, "__star", [(1000)]), "__slash", [t2]), "_printString", [])]), "__comma", [unescape("%20sends/sec")]);
return self;}
]
}),
smalltalk.Number);

