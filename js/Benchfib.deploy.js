smalltalk.addPackage('Benchfib', {});
smalltalk.addClass('Benchfib', smalltalk.Object, [], 'Benchfib');

smalltalk.addMethod(
"_main",
smalltalk.method({
selector: "main",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.result=nil;
$ctx1.locals.result=_st((0))._tinyBenchmarks();
_st(console)._log_(_st("0 tinyBenchmarks => ").__comma($ctx1.locals.result));
return self}, self, "main", [], smalltalk.Benchfib.klass)}
}),
smalltalk.Benchfib.klass);


smalltalk.addMethod(
"_benchFib",
smalltalk.method({
selector: "benchFib",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self).__lt((2));
if(smalltalk.assert($2)){
$1=(1);
} else {
$1=_st(_st(_st(_st(self).__minus((1)))._benchFib()).__plus(_st(_st(self).__minus((2)))._benchFib())).__plus((1));
};
return $1;
}, self, "benchFib", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_benchmark",
smalltalk.method({
selector: "benchmark",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.size=nil;
$ctx1.flags=nil;
$ctx1.prime=nil;
$ctx1.k=nil;
$ctx1.count=nil;
$ctx1.locals.size=(8190);
_st((1))._to_do_(self,(function(iter){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.count=(0);
$ctx1.locals.count;
$ctx1.locals.flags=_st((smalltalk.Array || Array))._new();
$ctx1.locals.flags;
_st($ctx1.locals.size)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx3) { return _st($ctx1.locals.flags)._add_(true);
})}));
return _st((1))._to_do_($ctx1.locals.size,(function(i){
return smalltalk.withContext(function($ctx3) { $1=_st($ctx1.locals.flags)._at_(i);
if(smalltalk.assert($1)){
$ctx1.locals.prime=_st(i).__plus((1));
$ctx1.locals.prime;
$ctx1.locals.k=_st(i).__plus($ctx1.locals.prime);
$ctx1.locals.k;
_st((function(){
return smalltalk.withContext(function($ctx4) { return _st($ctx1.locals.k).__lt_eq($ctx1.locals.size);
})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx4) { _st($ctx1.locals.flags)._at_put_($ctx1.locals.k,false);
$ctx1.locals.k=_st($ctx1.locals.k).__plus($ctx1.locals.prime);
return $ctx1.locals.k;
})}));
$ctx1.locals.count=_st($ctx1.locals.count).__plus((1));
return $ctx1.locals.count;
};
})}));
})}));
return $ctx1.locals.count;
}, self, "benchmark", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_jsbenchFib",
smalltalk.method({
selector: "jsbenchFib",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { if (this < 2) {
return 1;
} else {
return (this-1)._jsbenchFib() + (this-2)._jsbenchFib() + 1;};
;
return self}, self, "jsbenchFib", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_jsbenchmark",
smalltalk.method({
selector: "jsbenchmark",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
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
return self}, self, "jsbenchmark", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_jstinyBenchmarks",
smalltalk.method({
selector: "jstinyBenchmarks",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.t1=nil;
$ctx1.t2=nil;
$ctx1.r=nil;
$ctx1.n1=nil;
$ctx1.n2=nil;
$ctx1.locals.n1=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.t1=_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) { return _st($ctx1.locals.n1)._jsbenchmark();
})}));
$ctx1.locals.t1;
return _st($ctx1.locals.t1).__lt((1000));
})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.n1=_st($ctx1.locals.n1).__star((2));
return $ctx1.locals.n1;
})}));
$ctx1.locals.n2=(28);
_st((function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.t2=_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) { $ctx1.locals.r=_st($ctx1.locals.n2)._jsbenchFib();
return $ctx1.locals.r;
})}));
$ctx1.locals.t2;
return _st($ctx1.locals.t2).__lt((1000));
})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.n2=_st($ctx1.locals.n2).__plus((1));
return $ctx1.locals.n2;
})}));
$1=_st(_st(_st(_st(_st(_st(_st($ctx1.locals.n1).__star((500000))).__star((1000))).__slash($ctx1.locals.t1))._printString()).__comma(" bytecodes/sec; ")).__comma(_st(_st(_st($ctx1.locals.r).__star((1000))).__slash($ctx1.locals.t2))._printString())).__comma(" sends/sec");
return $1;
}, self, "jstinyBenchmarks", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_tinyBenchmarks",
smalltalk.method({
selector: "tinyBenchmarks",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.t1=nil;
$ctx1.t2=nil;
$ctx1.r=nil;
$ctx1.n1=nil;
$ctx1.n2=nil;
$ctx1.locals.n1=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.t1=_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) { return _st($ctx1.locals.n1)._benchmark();
})}));
$ctx1.locals.t1;
return _st($ctx1.locals.t1).__lt((1000));
})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.n1=_st($ctx1.locals.n1).__star((2));
return $ctx1.locals.n1;
})}));
$ctx1.locals.n2=(16);
_st((function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.t2=_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) { $ctx1.locals.r=_st($ctx1.locals.n2)._benchFib();
return $ctx1.locals.r;
})}));
$ctx1.locals.t2;
return _st($ctx1.locals.t2).__lt((1000));
})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.n2=_st($ctx1.locals.n2).__plus((1));
return $ctx1.locals.n2;
})}));
$1=_st(_st(_st(_st(_st(_st(_st($ctx1.locals.n1).__star((500000))).__star((1000))).__slash($ctx1.locals.t1))._printString()).__comma(" bytecodes/sec; ")).__comma(_st(_st(_st($ctx1.locals.r).__star((1000))).__slash($ctx1.locals.t2))._printString())).__comma(" sends/sec");
return $1;
}, self, "tinyBenchmarks", [], smalltalk.Number)}
}),
smalltalk.Number);

