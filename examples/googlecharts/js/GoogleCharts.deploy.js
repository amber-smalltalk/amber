smalltalk.addPackage('GoogleCharts', {});
smalltalk.addClass('ChartApp', smalltalk.Object, [], 'GoogleCharts');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
return self;
}
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_class",[]),"_loadGoogleLoader_",[(function(){
return smalltalk.send(smalltalk.send(self,"_class",[]),"_loadVisualization_",[(function(){
return smalltalk.send(self,"_begin",[]);
})]);
})]);
return self}
}),
smalltalk.ChartApp);


smalltalk.addMethod(
"_loadGoogleLoader_",
smalltalk.method({
selector: "loadGoogleLoader:",
fn: function (callback){
var self=this;
$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:callback});;
;
return self}
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
"_loadVisualization_",
smalltalk.method({
selector: "loadVisualization:",
fn: function (callback){
var self=this;
var packages;
packages=smalltalk.send(self,"_neededVisualizationPackages",[]);
google.load("visualization","1",{"callback" : callback , "packages":packages});;
;
return self}
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
"_neededVisualizationPackages",
smalltalk.method({
selector: "neededVisualizationPackages",
fn: function (){
var self=this;
var $1;
$1=[];
return $1;
}
}),
smalltalk.ChartApp.klass);


smalltalk.addClass('ChartButton', smalltalk.Object, ['element', 'clickBlock'], 'GoogleCharts');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
var button;
button=smalltalk.send(smalltalk.send(self,"_element",[]),"_asJQuery",[]);
smalltalk.send(button,"_click_",[(function(){
return smalltalk.send(smalltalk.send(self,"_clickBlock",[]),"_value",[]);
})]);
return self}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_clickBlock",
smalltalk.method({
selector: "clickBlock",
fn: function (){
var self=this;
return self["@clickBlock"];
}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_clickBlock_",
smalltalk.method({
selector: "clickBlock:",
fn: function (aBlock){
var self=this;
self["@clickBlock"]=aBlock;
return self}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_element",
smalltalk.method({
selector: "element",
fn: function (){
var self=this;
return self["@element"];
}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_element_",
smalltalk.method({
selector: "element:",
fn: function (aSymbol){
var self=this;
self["@element"]=aSymbol;
return self}
}),
smalltalk.ChartButton);


smalltalk.addMethod(
"_element_clickBlock_",
smalltalk.method({
selector: "element:clickBlock:",
fn: function (elementSymbol,clickBlock){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_element_",[elementSymbol]);
smalltalk.send($2,"_clickBlock_",[clickBlock]);
smalltalk.send($2,"_activate",[]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.ChartButton.klass);

smalltalk.addMethod(
"_popUpChart_atDom_",
smalltalk.method({
selector: "popUpChart:atDom:",
fn: function (chart,element){
var self=this;
var $1;
$1=smalltalk.send(self,"_element_clickBlock_",[element,(function(){
return smalltalk.send(chart,"_drawChart",[]);
})]);
return $1;
}
}),
smalltalk.ChartButton.klass);


smalltalk.addClass('GoogleChart', smalltalk.Object, ['chartId', 'chartType'], 'GoogleCharts');
smalltalk.addMethod(
"_arrayToDataTable_",
smalltalk.method({
selector: "arrayToDataTable:",
fn: function (array){
var self=this;
var $1;
$1=google.visualization.arrayToDataTable(array);
;
return $1;
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartId",
smalltalk.method({
selector: "chartId",
fn: function (){
var self=this;
return self["@chartId"];
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartId_",
smalltalk.method({
selector: "chartId:",
fn: function (aString){
var self=this;
self["@chartId"]=aString;
return self}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartType",
smalltalk.method({
selector: "chartType",
fn: function (){
var self=this;
return self["@chartType"];
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartType_",
smalltalk.method({
selector: "chartType:",
fn: function (aString){
var self=this;
self["@chartType"]=aString;
return self}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_drawChart",
smalltalk.method({
selector: "drawChart",
fn: function (){
var self=this;
var chart;
var data;
var options;
data=smalltalk.send(self,"_makeData",[]);
chart=smalltalk.send(self,"_makeChart_",[smalltalk.send(self,"_chartId",[])]);
options=smalltalk.send(self,"_makeOptions",[]);
chart.draw(data,options);
;
return self}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_getElementById_",
smalltalk.method({
selector: "getElementById:",
fn: function (id){
var self=this;
var $1;
$1=document.getElementById(id);
;
return $1;
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return self;
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeChart_",
smalltalk.method({
selector: "makeChart:",
fn: function (id){
var self=this;
var $1;
var e;
var t;
e=smalltalk.send(self,"_getElementById_",[id]);
t=smalltalk.send(self,"_chartType",[]);
$1=new google.visualization[t](e);
;
return $1;
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassresponsibility",[]);
return $1;
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassresponsibility",[]);
return $1;
}
}),
smalltalk.GoogleChart);


smalltalk.addMethod(
"_chartId_",
smalltalk.method({
selector: "chartId:",
fn: function (aString){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_chartId_",[aString]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.GoogleChart.klass);


smalltalk.addClass('GaugeChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.GoogleChart);
smalltalk.send(self,"_chartType_",["Gauge"]);
return self;
}
}),
smalltalk.GaugeChart);



smalltalk.addClass('GeoChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.GoogleChart);
smalltalk.send(self,"_chartType_",["GeoChart"]);
return self;
}
}),
smalltalk.GeoChart);



smalltalk.addClass('PieChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.GoogleChart);
smalltalk.send(self,"_chartType_",["PieChart"]);
return self;
}
}),
smalltalk.PieChart);



smalltalk.addClass('ScatterChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.GoogleChart);
smalltalk.send(self,"_chartType_",["ScatterChart"]);
return self;
}
}),
smalltalk.ScatterChart);



