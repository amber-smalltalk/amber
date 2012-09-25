smalltalk.addPackage('Examples', {});
smalltalk.addClass('Counter', smalltalk.Widget, ['count', 'header'], 'Examples');
smalltalk.addMethod(
"_decrease",
smalltalk.method({
selector: "decrease",
fn: function (){
var self=this;
self["@count"]=smalltalk.send(self["@count"],"__minus",[(1)]);
smalltalk.send(self["@header"],"_contents_",[(function(html){
return smalltalk.send(html,"_with_",[smalltalk.send(self["@count"],"_asString",[])]);
})]);
return self}
}),
smalltalk.Counter);

smalltalk.addMethod(
"_increase",
smalltalk.method({
selector: "increase",
fn: function (){
var self=this;
self["@count"]=smalltalk.send(self["@count"],"__plus",[(1)]);
smalltalk.send(self["@header"],"_contents_",[(function(html){
return smalltalk.send(html,"_with_",[smalltalk.send(self["@count"],"_asString",[])]);
})]);
return self}
}),
smalltalk.Counter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Widget);
self["@count"]=(0);
return self}
}),
smalltalk.Counter);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var $1,$2,$3,$4,$5,$6;
$1=smalltalk.send(html,"_h1",[]);
smalltalk.send($1,"_with_",[smalltalk.send(self["@count"],"_asString",[])]);
$2=smalltalk.send($1,"_yourself",[]);
self["@header"]=$2;
$3=smalltalk.send(html,"_button",[]);
smalltalk.send($3,"_with_",["++"]);
$4=smalltalk.send($3,"_onClick_",[(function(){
return smalltalk.send(self,"_increase",[]);
})]);
$5=smalltalk.send(html,"_button",[]);
smalltalk.send($5,"_with_",["--"]);
$6=smalltalk.send($5,"_onClick_",[(function(){
return smalltalk.send(self,"_decrease",[]);
})]);
return self}
}),
smalltalk.Counter);


smalltalk.addMethod(
"_tryExample",
smalltalk.method({
selector: "tryExample",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_new",[]),"_appendToJQuery_",[smalltalk.send("body","_asJQuery",[])]);
return self}
}),
smalltalk.Counter.klass);


