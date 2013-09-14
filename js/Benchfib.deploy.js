smalltalk.addPackage('Benchfib');
smalltalk.addClass('Benchfib', smalltalk.Object, [], 'Benchfib');

smalltalk.addMethod(
smalltalk.method({
selector: "main",
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
result=(0)._tinyBenchmarks();
_st(console)._log_("0 tinyBenchmarks => ".__comma(result));
return self}, function($ctx1) {$ctx1.fill(self,"main",{result:result},smalltalk.Benchfib.klass)})},
messageSends: ["tinyBenchmarks", "log:", ","]}),
smalltalk.Benchfib.klass);


smalltalk.addMethod(
smalltalk.method({
selector: "benchFib",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self.__lt((2));
if(smalltalk.assert($2)){
$1=(1);
} else {
$1=_st(_st(_st(self.__minus((1)))._benchFib()).__plus(_st(self.__minus((2)))._benchFib())).__plus((1));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"benchFib",{},smalltalk.Number)})},
messageSends: ["ifTrue:ifFalse:", "+", "benchFib", "-", "<"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "benchmark",
fn: function (){
var self=this;
var size,flags,prime,k,count;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
size=(8190);
(1)._to_do_(self,(function(iter){
return smalltalk.withContext(function($ctx2) {
count=(0);
count;
flags=_st($Array())._new();
flags;
_st(size)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(flags)._add_(true);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return (1)._to_do_(size,(function(i){
return smalltalk.withContext(function($ctx3) {
$1=_st(flags)._at_(i);
if(smalltalk.assert($1)){
prime=_st(i).__plus((1));
prime;
k=_st(i).__plus(prime);
k;
_st((function(){
return smalltalk.withContext(function($ctx4) {
return _st(k).__lt_eq(size);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx4) {
_st(flags)._at_put_(k,false);
k=_st(k).__plus(prime);
return k;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
count=_st(count).__plus((1));
return count;
};
}, function($ctx3) {$ctx3.fillBlock({i:i},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({iter:iter},$ctx1)})}));
$2=count;
return $2;
}, function($ctx1) {$ctx1.fill(self,"benchmark",{size:size,flags:flags,prime:prime,k:k,count:count},smalltalk.Number)})},
messageSends: ["to:do:", "new", "timesRepeat:", "add:", "ifTrue:", "+", "whileTrue:", "at:put:", "<=", "at:"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "jsbenchFib",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
if (this < 2) {
return 1;
} else {
return (this-1)._jsbenchFib() + (this-2)._jsbenchFib() + 1;};
return self}, function($ctx1) {$ctx1.fill(self,"jsbenchFib",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
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
return self}, function($ctx1) {$ctx1.fill(self,"jsbenchmark",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "jstinyBenchmarks",
fn: function (){
var self=this;
var t1,t2,r,n1,n2;
function $Date(){return smalltalk.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1;
n1=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {
t1=_st($Date())._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(n1)._jsbenchmark();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
t1;
return _st(t1).__lt((1000));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
n1=_st(n1).__star((2));
return n1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
n2=(28);
_st((function(){
return smalltalk.withContext(function($ctx2) {
t2=_st($Date())._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) {
r=_st(n2)._jsbenchFib();
return r;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
t2;
return _st(t2).__lt((1000));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
n2=_st(n2).__plus((1));
return n2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(_st(_st(_st(_st(_st(_st(n1).__star((500000))).__star((1000))).__slash(t1))._printString()).__comma(" bytecodes/sec; ")).__comma(_st(_st(_st(r).__star((1000))).__slash(t2))._printString())).__comma(" sends/sec");
return $1;
}, function($ctx1) {$ctx1.fill(self,"jstinyBenchmarks",{t1:t1,t2:t2,r:r,n1:n1,n2:n2},smalltalk.Number)})},
messageSends: ["whileTrue:", "*", "millisecondsToRun:", "jsbenchmark", "<", "+", "jsbenchFib", ",", "printString", "/"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "tinyBenchmarks",
fn: function (){
var self=this;
var t1,t2,r,n1,n2;
function $Date(){return smalltalk.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1;
n1=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {
t1=_st($Date())._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(n1)._benchmark();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
t1;
return _st(t1).__lt((1000));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
n1=_st(n1).__star((2));
return n1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
n2=(16);
_st((function(){
return smalltalk.withContext(function($ctx2) {
t2=_st($Date())._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) {
r=_st(n2)._benchFib();
return r;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
t2;
return _st(t2).__lt((1000));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
n2=_st(n2).__plus((1));
return n2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(_st(_st(_st(_st(_st(_st(n1).__star((500000))).__star((1000))).__slash(t1))._printString()).__comma(" bytecodes/sec; ")).__comma(_st(_st(_st(r).__star((1000))).__slash(t2))._printString())).__comma(" sends/sec");
return $1;
}, function($ctx1) {$ctx1.fill(self,"tinyBenchmarks",{t1:t1,t2:t2,r:r,n1:n1,n2:n2},smalltalk.Number)})},
messageSends: ["whileTrue:", "*", "millisecondsToRun:", "benchmark", "<", "+", "benchFib", ",", "printString", "/"]}),
smalltalk.Number);

