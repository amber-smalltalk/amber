Smalltalk current createPackage: 'GoogleChartsExamples' properties: #{}!
GaugeChart subclass: #GaugeChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!GaugeChartExample methodsFor: 'not yet classified'!

makeData
"Example Gauge Data"
  ^ self arrayToDataTable: { {'Label'.'Value'}.
    					{'Memory' . 80}.
                        {'CPU' . 55}.
                        {'Network' . 68}}
!

makeOptions
"Example Gauge options"
   ^<{width:400, heigth:120,
   redFrom:90,redTo:100,
   yellowFrom:75,yellowTo:90,
   minorTicks:5}>
! !

GeoChart subclass: #GeoChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!GeoChartExample methodsFor: 'not yet classified'!

makeData
"Example Geo Data"
  ^ self arrayToDataTable: {
{'City'.   'Population' . 'Area'}.
        {'Rome'.      2761477 .    1285.31}.
        {'Milan'.     1324110 .    181.76}.
        {'Naples'.    959574 .    117.27}.
        {'Turin'.     907563 .     130.17}.
        {'Palermo'.   655875 .     158.9}.
        {'Genoa'.     607906 .   243.60}.
        {'Bologna'.   380181 .     140.7}.
        {'Florence'.  371282 .    102.41}.
        {'Fiumicino'. 67370 .      213.44}.
        {'Anzio'.     52192 .      43.43}.
        {'Ciampino'.  38262 .      11} 
        }
!

makeOptions
"Example Geo Options"

   ^<{
        region: 'IT',
        displayMode: 'markers',
        colorAxis: {colors: ['green', 'blue']}
      }>
! !

ChartApp subclass: #IndexChartApp
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!IndexChartApp methodsFor: 'not yet classified'!

begin
	"Start the executiong of the ExampleChartApp by connecting each button/graphic pair"
    PieChartExample new chartId:'pie_chart_div';drawChart.
    ^super begin
! !

!IndexChartApp class methodsFor: 'not yet classified'!

neededVisualizationPackages
"This App only needs a corechart package."
	^{'corechart'}
! !

PieChart subclass: #PieChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!PieChartExample methodsFor: 'not yet classified'!

makeData
	"return a DataTable of example Pie Chart data"

  ^ self arrayToDataTable: { {'Task'.'Hours per Day'}.
    					{'Work' . 11}.
                        {'Eat'.2}.
                        {'Commute'.2}.
                        {'Watch TV'.2}.
                        {'Snooze'.7}}
!

makeOptions
	"Return a Dictionary of the options in this case only a title"
	^#{'title' -> 'My Daily Activities'}
! !

ChartApp subclass: #PopupChartApp
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!PopupChartApp methodsFor: 'not yet classified'!

begin
	"Start the executiong of the ExampleChartApp by connecting each button/graphic pair"
    ChartButton popUpChart:(PieChartExample chartId:'pie_chart_div') atDom:'#popPieChart' .
    ChartButton popUpChart:(ScatterChartExample chartId:'scatter_chart_div') atDom:'#popScatterChart'.
    ChartButton popUpChart:(GaugeChartExample chartId:'gauge_chart_div') atDom:'#popGaugeChart'.
    ChartButton popUpChart:(GeoChartExample chartId:'geo_markers_chart_div') atDom: '#popGeoMarkersChart'.
    ^super begin
! !

!PopupChartApp class methodsFor: 'not yet classified'!

neededVisualizationPackages
"This is a hook for subclasses to define which visualization packages to load."
	^{'corechart'.'gauge'.'geochart'}
! !

ScatterChart subclass: #ScatterChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!ScatterChartExample methodsFor: 'not yet classified'!

makeData
  "Return the example dataset"
  ^ self arrayToDataTable: { 
  							{'Age'.'Weight'}.
                            {8 . 11} . 
                            { 4 . 5.5} . 
                            { 11 . 14 } . 
                            { 4 . 5}. 
                            {3 . 3} . 
                            {6.5 . 7}}
!

makeOptions
"options for example dataset"
   ^<{
          title: 'Age vs. Weight comparison',
          hAxis: {title: 'Age', minValue: 0, maxValue: 15},
          vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
          legend: 'none'
        }>
! !

