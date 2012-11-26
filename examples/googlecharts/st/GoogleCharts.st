Smalltalk current createPackage: 'GoogleCharts' properties: #{}!
Object subclass: #ChartApp
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!ChartApp commentStamp!
A chart app is an example App which loads the google JSAPI and visualization API.!

!ChartApp methodsFor: 'not yet classified'!

begin
	"Start the executiong of the ChartApp"
	^self
!

initialize
	"Load my external JS"
    self class loadGoogleLoader:[self class loadVisualization:[self begin]]
! !

!ChartApp class methodsFor: 'not yet classified'!

loadGoogleLoader: callback
	"Load the Google JSAPI - Use JQuery.ajax() since that is available"
	<$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:callback});>
!

loadVisualization: callback
	"Use google.load() to load visualization and load the needed packages"
    |packages|
    packages := self neededVisualizationPackages.
    <google.load("visualization","1",{"callback" : callback , "packages":packages});>
!

neededVisualizationPackages
"This is a hook for subclasses to define which visualization packages to load."
	^{}
! !

Object subclass: #ChartButton
	instanceVariableNames: 'element clickBlock'
	package: 'GoogleCharts'!

!ChartButton methodsFor: 'not yet classified'!

activate
	|button|
	button := self element asJQuery.
    button click:[self clickBlock value]
!

clickBlock
	^clickBlock
!

clickBlock: aBlock
	clickBlock := aBlock
!

element
	^element
!

element: aSymbol
	element := aSymbol
! !

!ChartButton class methodsFor: 'not yet classified'!

element: elementSymbol clickBlock: clickBlock
	^self new element: elementSymbol; clickBlock: clickBlock; activate;yourself
!

popUpChart: chart atDom: element
	"Make the chart popup on click of an element"
    ^self element: element clickBlock:[chart drawChart]
! !

Object subclass: #GoogleChart
	instanceVariableNames: 'chartId chartType'
	package: 'GoogleCharts'!

!GoogleChart methodsFor: 'DOM'!

getElementById: id
	"Find element by the id in the DOM"
	^ <document.getElementById(id)>
! !

!GoogleChart methodsFor: 'abstraction'!

makeData
	"abstraction - return the data for a google chart"
  	 ^self subclassresponsibility
!

makeOptions
	"Abstract method - return options for a Google Chart"
   ^	 self subclassresponsibility
! !

!GoogleChart methodsFor: 'accessor'!

chartId
	^chartId
!

chartId: aString
	chartId := aString
!

chartType
	^ chartType
!

chartType: aString
	chartType := aString
! !

!GoogleChart methodsFor: 'chart'!

drawChart
    |  chart data options|
     data := self makeData.
     chart :=self makeChart:self chartId.
     options :=self makeOptions.
     <chart.draw(data,options)>
!

makeChart: id
"build a chart at specific element id in the DOM and return"
	|e t|
    e := self getElementById:id.
    t := self chartType.
    ^ <new google.visualization[t](e)>
! !

!GoogleChart methodsFor: 'data table'!

arrayToDataTable: array

	^ <google.visualization.arrayToDataTable(array)>
! !

!GoogleChart methodsFor: 'init'!

initialize
	^self
! !

!GoogleChart class methodsFor: 'not yet classified'!

chartId: aString
	^self new chartId:aString;yourself
! !

GoogleChart subclass: #GaugeChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!

!GaugeChart methodsFor: 'not yet classified'!

initialize
	" Create a Guage with the chartId that identifies the chart graphic placement and the chartType to be created at that id."
    super initialize.
    self chartType:'Gauge'.
	^self
! !

GoogleChart subclass: #GeoChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!

!GeoChart methodsFor: 'not yet classified'!

initialize
	" Create a Geo Chart"
    super initialize.
    self chartType:'GeoChart'.
	^self
! !

GoogleChart subclass: #PieChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!

!PieChart methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType:'PieChart'.
	^self
! !

GoogleChart subclass: #ScatterChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!

!ScatterChart methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType:'ScatterChart'.
	^self
! !

