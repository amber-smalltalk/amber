googlecharts
============

Google Charts API for Amber

Author
------
Thomas W Rake

Availability
------------
Fork it at https://github.com/tomrake/googlecharts

How to use
----------

This project is a subproject of https://github.com/tomrake/amber
If you clone that project you should have this subproject.


Version 0.2
-----------

This API is likely to change in future versions.

A overview of the recipe to create a Pie Chart is have a place in your html dom to place the chart. Create a subclass of ChartApp to control loading of google packages, creation of your charts and bind them to the dom. Ensure your charts have the correct data by subclassing PieChart and add the the makeData and makeOption methods.

Here is the detailed Pie Chart recipe:

1) Create an insertion point div in your html document in my case a my_chart_id div:
 
    <div id="my_chart_div" style="width: 900px;height: 500px;">Loading Google Chart..</div>

2) Create a package for your code MyCode

3) In MyCode package create a subclass of PieChart, as an example MyPieChart, with two instance methods makeData and makeOptions which contain the chart data and options:

     MyPieChart>>makeData
      "DataTable of example Pie chart slices"
      ^ self arrayToDataTable: { {'Task'.'Hours per Day'}.
        		    {'Work' . 11}.
                            {'Eat'.2}.
                            {'Commute'.2}.
                            {'Watch TV'.2}.
                            {'Snooze'.7}}



    MyPieChart>>makeOptions
    	"Return a Dictionary of the options in this case only a title"
    	^#{'title' -> 'My Daily Activities'}



4) Determine which Google visualization packages are needed in the PieChart case only 'corechart' is needed. 

5) In package MyCode create a subclass of ChartApp, as an example MyPieApp. In MyPieApp create a class method neededVisualizationPackages to return an Array for the packages needed for the App:

    MyPieApp class>>neededVisualizationPackages
    "This App only needs a corechart package."
    	^{'corechart'}



6) In MyPieApp create an instance method overiding begin, and use it to create, bind and draw MyPieChart. Besure to call super begin:

    begin
    	"Start the executiong of the MyPieChart by connecting each button/graphic pair"
        MyPieChart new chartId:'my_chart_div';drawChart.
        ^super begin

7) Call Amber

    <script src="../../js/amber.js" type="text/javascript"></script>
    <script type="text/javascript">
        loadAmber({
            files: ['GoogleCharts.js','MyCode.js'],
            prefix: 'examples/googlecharts/js', // path for js files i think
            ready: function() {
                $(function() {
                   smalltalk.MyPieApp._new(); // Start the smalltalk App
                });
            }}); 
    </script>

The purpose of version 0.2 is to show how smalltalk flexibility can drive google charts.



To Be Done
----------
Coordinate information between the Chart API and App API .Each chart has a fixed and known package to be loaded by the JSAPI it would be best if this info was recorded in a fixed place.

Remove the subclasses of GoogleChart in favor of an Abstract Factory.

Be prepaired to split the JSAPI.js ("the loading API") for use with other Google products.

Design smalltalk friendly api for generic charts.