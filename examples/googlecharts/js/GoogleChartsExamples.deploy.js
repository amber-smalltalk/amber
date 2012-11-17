smalltalk.addPackage('GoogleChartsExamples', {});
smalltalk.addClass('GaugeChartExample', smalltalk.GaugeChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["Label","Value"],["Memory",(80)],["CPU",(55)],["Network",(68)]]]);
return $1;
}
}),
smalltalk.GaugeChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
var $1;
$1={width:400, heigth:120,
   redFrom:90,redTo:100,
   yellowFrom:75,yellowTo:90,
   minorTicks:5};
;
return $1;
}
}),
smalltalk.GaugeChartExample);



smalltalk.addClass('GeoChartExample', smalltalk.GeoChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["City","Population","Area"],["Rome",(2761477),(1285.31)],["Milan",(1324110),(181.76)],["Naples",(959574),(117.27)],["Turin",(907563),(130.17)],["Palermo",(655875),(158.9)],["Genoa",(607906),(243.6)],["Bologna",(380181),(140.7)],["Florence",(371282),(102.41)],["Fiumicino",(67370),(213.44)],["Anzio",(52192),(43.43)],["Ciampino",(38262),(11)]]]);
return $1;
}
}),
smalltalk.GeoChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
var $1;
$1={
        region: 'IT',
        displayMode: 'markers',
        colorAxis: {colors: ['green', 'blue']}
      };
;
return $1;
}
}),
smalltalk.GeoChartExample);



smalltalk.addClass('IndexChartApp', smalltalk.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
var $1,$2,$3;
$1=smalltalk.send((smalltalk.PieChartExample || PieChartExample),"_new",[]);
smalltalk.send($1,"_chartId_",["pie_chart_div"]);
$2=smalltalk.send($1,"_drawChart",[]);
$3=smalltalk.send(self,"_begin",[],smalltalk.ChartApp);
return $3;
}
}),
smalltalk.IndexChartApp);


smalltalk.addMethod(
"_neededVisualizationPackages",
smalltalk.method({
selector: "neededVisualizationPackages",
fn: function (){
var self=this;
var $1;
$1=["corechart"];
return $1;
}
}),
smalltalk.IndexChartApp.klass);


smalltalk.addClass('PieChartExample', smalltalk.PieChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["Task","Hours per Day"],["Work",(11)],["Eat",(2)],["Commute",(2)],["Watch TV",(2)],["Snooze",(7)]]]);
return $1;
}
}),
smalltalk.PieChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
var $1;
$1=smalltalk.HashedCollection._fromPairs_([smalltalk.send("title","__minus_gt",["My Daily Activities"])]);
return $1;
}
}),
smalltalk.PieChartExample);



smalltalk.addClass('PopupChartApp', smalltalk.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
var $1;
smalltalk.send((smalltalk.ChartButton || ChartButton),"_popUpChart_atDom_",[smalltalk.send((smalltalk.PieChartExample || PieChartExample),"_chartId_",["pie_chart_div"]),"#popPieChart"]);
smalltalk.send((smalltalk.ChartButton || ChartButton),"_popUpChart_atDom_",[smalltalk.send((smalltalk.ScatterChartExample || ScatterChartExample),"_chartId_",["scatter_chart_div"]),"#popScatterChart"]);
smalltalk.send((smalltalk.ChartButton || ChartButton),"_popUpChart_atDom_",[smalltalk.send((smalltalk.GaugeChartExample || GaugeChartExample),"_chartId_",["gauge_chart_div"]),"#popGaugeChart"]);
smalltalk.send((smalltalk.ChartButton || ChartButton),"_popUpChart_atDom_",[smalltalk.send((smalltalk.GeoChartExample || GeoChartExample),"_chartId_",["geo_markers_chart_div"]),"#popGeoMarkersChart"]);
$1=smalltalk.send(self,"_begin",[],smalltalk.ChartApp);
return $1;
}
}),
smalltalk.PopupChartApp);


smalltalk.addMethod(
"_neededVisualizationPackages",
smalltalk.method({
selector: "neededVisualizationPackages",
fn: function (){
var self=this;
var $1;
$1=["corechart","gauge","geochart"];
return $1;
}
}),
smalltalk.PopupChartApp.klass);


smalltalk.addClass('ScatterChartExample', smalltalk.ScatterChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["Age","Weight"],[(8),(11)],[(4),(5.5)],[(11),(14)],[(4),(5)],[(3),(3)],[(6.5),(7)]]]);
return $1;
}
}),
smalltalk.ScatterChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
var $1;
$1={
          title: 'Age vs. Weight comparison',
          hAxis: {title: 'Age', minValue: 0, maxValue: 15},
          vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
          legend: 'none'
        };
;
return $1;
}
}),
smalltalk.ScatterChartExample);



