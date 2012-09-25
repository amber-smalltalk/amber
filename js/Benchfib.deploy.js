smalltalk.addPackage('Benchfib', {});
smalltalk.addClass('Benchfib', smalltalk.Object, [], 'Benchfib');

smalltalk.addMethod(
"_main",
smalltalk.method({
selector: "main",
fn: function (){
var self=this;
var result;
result=smalltalk.send((0),"_tinyBenchmarks",[]);
smalltalk.send(console,"_log_",[smalltalk.send("0 tinyBenchmarks => ","__comma",[result])]);
return self}
}),
smalltalk.Benchfib.klass);


smalltalk.addMethod(
"_benchFib",
smalltalk.method({
selector: "benchFib",
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
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_benchmark",
smalltalk.method({
selector: "benchmark",
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
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_jsbenchFib",
smalltalk.method({
selector: "jsbenchFib",
fn: function (){
var self=this;
if (this < 2) {
return 1;
} else {
return (this-1)._jsbenchFib() + (this-2)._jsbenchFib() + 1;};
;
return self}
}),
smalltalk.Number);

smalltalk.addMethod(
"_jsbenchmark",
smalltalk.method({
selector: "jsbenchmark",
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
return self}
}),
smalltalk.Number);

smalltalk.addMethod(
"_jstinyBenchmarks",
smalltalk.method({
selector: "jstinyBenchmarks",
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
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_tinyBenchmarks",
smalltalk.method({
selector: "tinyBenchmarks",
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
}
}),
smalltalk.Number);

