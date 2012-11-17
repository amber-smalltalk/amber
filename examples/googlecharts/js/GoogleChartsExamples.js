smalltalk.addPackage('GoogleChartsExamples', {});
smalltalk.addClass('GaugeChartExample', smalltalk.GaugeChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["Label","Value"],["Memory",(80)],["CPU",(55)],["Network",(68)]]]);
return $1;
},
args: [],
source: "makeData\x0a\x22Example Gauge Data\x22\x0a  ^ self arrayToDataTable: { {'Label'.'Value'}.\x0a    \x09\x09\x09\x09\x09{'Memory' . 80}.\x0a                        {'CPU' . 55}.\x0a                        {'Network' . 68}}",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.GaugeChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1={width:400, heigth:120,
   redFrom:90,redTo:100,
   yellowFrom:75,yellowTo:90,
   minorTicks:5};
;
return $1;
},
args: [],
source: "makeOptions\x0a\x22Example Gauge options\x22\x0a   ^<{width:400, heigth:120,\x0a   redFrom:90,redTo:100,\x0a   yellowFrom:75,yellowTo:90,\x0a   minorTicks:5}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GaugeChartExample);



smalltalk.addClass('GeoChartExample', smalltalk.GeoChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["City","Population","Area"],["Rome",(2761477),(1285.31)],["Milan",(1324110),(181.76)],["Naples",(959574),(117.27)],["Turin",(907563),(130.17)],["Palermo",(655875),(158.9)],["Genoa",(607906),(243.6)],["Bologna",(380181),(140.7)],["Florence",(371282),(102.41)],["Fiumicino",(67370),(213.44)],["Anzio",(52192),(43.43)],["Ciampino",(38262),(11)]]]);
return $1;
},
args: [],
source: "makeData\x0a\x22Example Geo Data\x22\x0a  ^ self arrayToDataTable: {\x0a{'City'.   'Population' . 'Area'}.\x0a        {'Rome'.      2761477 .    1285.31}.\x0a        {'Milan'.     1324110 .    181.76}.\x0a        {'Naples'.    959574 .    117.27}.\x0a        {'Turin'.     907563 .     130.17}.\x0a        {'Palermo'.   655875 .     158.9}.\x0a        {'Genoa'.     607906 .   243.60}.\x0a        {'Bologna'.   380181 .     140.7}.\x0a        {'Florence'.  371282 .    102.41}.\x0a        {'Fiumicino'. 67370 .      213.44}.\x0a        {'Anzio'.     52192 .      43.43}.\x0a        {'Ciampino'.  38262 .      11} \x0a        }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.GeoChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
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
},
args: [],
source: "makeOptions\x0a\x22Example Geo Options\x22\x0a\x0a   ^<{\x0a        region: 'IT',\x0a        displayMode: 'markers',\x0a        colorAxis: {colors: ['green', 'blue']}\x0a      }>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoChartExample);



smalltalk.addClass('IndexChartApp', smalltalk.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
var $1,$2,$3;
$1=smalltalk.send((smalltalk.PieChartExample || PieChartExample),"_new",[]);
smalltalk.send($1,"_chartId_",["pie_chart_div"]);
$2=smalltalk.send($1,"_drawChart",[]);
$3=smalltalk.send(self,"_begin",[],smalltalk.ChartApp);
return $3;
},
args: [],
source: "begin\x0a\x09\x22Start the executiong of the ExampleChartApp by connecting each button/graphic pair\x22\x0a    PieChartExample new chartId:'pie_chart_div';drawChart.\x0a    ^super begin",
messageSends: ["chartId:", "new", "drawChart", "begin"],
referencedClasses: ["PieChartExample"]
}),
smalltalk.IndexChartApp);


smalltalk.addMethod(
"_neededVisualizationPackages",
smalltalk.method({
selector: "neededVisualizationPackages",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=["corechart"];
return $1;
},
args: [],
source: "neededVisualizationPackages\x0a\x22This App only needs a corechart package.\x22\x0a\x09^{'corechart'}",
messageSends: [],
referencedClasses: []
}),
smalltalk.IndexChartApp.klass);


smalltalk.addClass('PieChartExample', smalltalk.PieChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["Task","Hours per Day"],["Work",(11)],["Eat",(2)],["Commute",(2)],["Watch TV",(2)],["Snooze",(7)]]]);
return $1;
},
args: [],
source: "makeData\x0a\x09\x22return a DataTable of example Pie Chart data\x22\x0a\x0a  ^ self arrayToDataTable: { {'Task'.'Hours per Day'}.\x0a    \x09\x09\x09\x09\x09{'Work' . 11}.\x0a                        {'Eat'.2}.\x0a                        {'Commute'.2}.\x0a                        {'Watch TV'.2}.\x0a                        {'Snooze'.7}}",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.PieChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.HashedCollection._fromPairs_([smalltalk.send("title","__minus_gt",["My Daily Activities"])]);
return $1;
},
args: [],
source: "makeOptions\x0a\x09\x22Return a Dictionary of the options in this case only a title\x22\x0a\x09^#{'title' -> 'My Daily Activities'}\x0a",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.PieChartExample);



smalltalk.addClass('PopupChartApp', smalltalk.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
smalltalk.send((smalltalk.ChartButton || ChartButton),"_popUpChart_atDom_",[smalltalk.send((smalltalk.PieChartExample || PieChartExample),"_chartId_",["pie_chart_div"]),"#popPieChart"]);
smalltalk.send((smalltalk.ChartButton || ChartButton),"_popUpChart_atDom_",[smalltalk.send((smalltalk.ScatterChartExample || ScatterChartExample),"_chartId_",["scatter_chart_div"]),"#popScatterChart"]);
smalltalk.send((smalltalk.ChartButton || ChartButton),"_popUpChart_atDom_",[smalltalk.send((smalltalk.GaugeChartExample || GaugeChartExample),"_chartId_",["gauge_chart_div"]),"#popGaugeChart"]);
smalltalk.send((smalltalk.ChartButton || ChartButton),"_popUpChart_atDom_",[smalltalk.send((smalltalk.GeoChartExample || GeoChartExample),"_chartId_",["geo_markers_chart_div"]),"#popGeoMarkersChart"]);
$1=smalltalk.send(self,"_begin",[],smalltalk.ChartApp);
return $1;
},
args: [],
source: "begin\x0a\x09\x22Start the executiong of the ExampleChartApp by connecting each button/graphic pair\x22\x0a    ChartButton popUpChart:(PieChartExample chartId:'pie_chart_div') atDom:'#popPieChart' .\x0a    ChartButton popUpChart:(ScatterChartExample chartId:'scatter_chart_div') atDom:'#popScatterChart'.\x0a    ChartButton popUpChart:(GaugeChartExample chartId:'gauge_chart_div') atDom:'#popGaugeChart'.\x0a    ChartButton popUpChart:(GeoChartExample chartId:'geo_markers_chart_div') atDom: '#popGeoMarkersChart'.\x0a    ^super begin",
messageSends: ["popUpChart:atDom:", "chartId:", "begin"],
referencedClasses: ["PieChartExample", "ChartButton", "ScatterChartExample", "GaugeChartExample", "GeoChartExample"]
}),
smalltalk.PopupChartApp);


smalltalk.addMethod(
"_neededVisualizationPackages",
smalltalk.method({
selector: "neededVisualizationPackages",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=["corechart","gauge","geochart"];
return $1;
},
args: [],
source: "neededVisualizationPackages\x0a\x22This is a hook for subclasses to define which visualization packages to load.\x22\x0a\x09^{'corechart'.'gauge'.'geochart'}",
messageSends: [],
referencedClasses: []
}),
smalltalk.PopupChartApp.klass);


smalltalk.addClass('ScatterChartExample', smalltalk.ScatterChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["Age","Weight"],[(8),(11)],[(4),(5.5)],[(11),(14)],[(4),(5)],[(3),(3)],[(6.5),(7)]]]);
return $1;
},
args: [],
source: "makeData\x0a  \x22Return the example dataset\x22\x0a  ^ self arrayToDataTable: { \x0a  \x09\x09\x09\x09\x09\x09\x09{'Age'.'Weight'}.\x0a                            {8 . 11} . \x0a                            { 4 . 5.5} . \x0a                            { 11 . 14 } . \x0a                            { 4 . 5}. \x0a                            {3 . 3} . \x0a                            {6.5 . 7}}\x0a     ",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.ScatterChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
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
},
args: [],
source: "makeOptions\x0a\x22options for example dataset\x22\x0a   ^<{\x0a          title: 'Age vs. Weight comparison',\x0a          hAxis: {title: 'Age', minValue: 0, maxValue: 15},\x0a          vAxis: {title: 'Weight', minValue: 0, maxValue: 15},\x0a          legend: 'none'\x0a        }>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScatterChartExample);



