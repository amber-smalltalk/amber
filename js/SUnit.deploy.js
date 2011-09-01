smalltalk.addClass('TestCase', smalltalk.Object, ['testedClass'], 'SUnit');
smalltalk.addMethod(
'_testedClass',
smalltalk.method({
selector: 'testedClass',
fn: function (){
var self=this;
return self['@testedClass'];
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_testedClass_',
smalltalk.method({
selector: 'testedClass:',
fn: function (aClass){
var self=this;
self['@testedClass']=aClass;
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_cleanUpInstanceVariables',
smalltalk.method({
selector: 'cleanUpInstanceVariables',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_instanceVariableNames", []), "_do_", [(function(name){return (($receiver = smalltalk.send(name, "__eq", ["testSelector"])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_instVarAt_put_", [name, nil]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_instVarAt_put_", [name, nil]);})]);})]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_signalFailure_',
smalltalk.method({
selector: 'signalFailure:',
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.TestFailure || TestFailure), "_new", []));
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_setUp',
smalltalk.method({
selector: 'setUp',
fn: function (){
var self=this;

return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_tearDown',
smalltalk.method({
selector: 'tearDown',
fn: function (){
var self=this;

return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_methods',
smalltalk.method({
selector: 'methods',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_methodDictionary", []), "_keys", []), "_select_", [(function(each){return smalltalk.send(each, "_match_", [unescape("%5Etest")]);})]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_runCaseFor_',
smalltalk.method({
selector: 'runCaseFor:',
fn: function (aTestResult){
var self=this;
smalltalk.send((function(){smalltalk.send(self, "_setUp", []);return smalltalk.send(self, "_performTestFor_", [aTestResult]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){smalltalk.send(self, "_tearDown", []);smalltalk.send(self, "_cleanUpInstanceVariables", []);return smalltalk.send(ex, "_signal", []);})]);
smalltalk.send(self, "_tearDown", []);
smalltalk.send(self, "_cleanUpInstanceVariables", []);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_performTestFor_',
smalltalk.method({
selector: 'performTestFor:',
fn: function (aResult){
var self=this;
smalltalk.send(smalltalk.send(self, "_methods", []), "_do_", [(function(each){smalltalk.send((function(){return smalltalk.send((function(){return smalltalk.send(self, "_perform_", [each]);}), "_on_do_", [(smalltalk.TestFailure || TestFailure), (function(ex){return smalltalk.send(aResult, "_addFailure_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_name", []), "__comma", [unescape("%3E%3E")]), "__comma", [each]), "__comma", [": "]), "__comma", [smalltalk.send(ex, "_messageText", [])])]);})]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return smalltalk.send(aResult, "_addError_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_name", []), "__comma", [unescape("%3E%3E")]), "__comma", [each]), "__comma", [": "]), "__comma", [smalltalk.send(ex, "_messageText", [])])]);})]);return smalltalk.send(aResult, "_increaseRuns", []);})]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_assert_',
smalltalk.method({
selector: 'assert:',
fn: function (aBoolean){
var self=this;
smalltalk.send(self, "_assert_description_", [aBoolean, "Assertion failed"]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_deny_',
smalltalk.method({
selector: 'deny:',
fn: function (aBoolean){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(aBoolean, "_not", [])]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_assert_equals_',
smalltalk.method({
selector: 'assert:equals:',
fn: function (expected, actual){
var self=this;
return smalltalk.send(self, "_assert_description_", [smalltalk.send(expected, "__eq", [actual]), smalltalk.send(smalltalk.send(smalltalk.send("Expected: ", "__comma", [smalltalk.send(expected, "_asString", [])]), "__comma", [" but was: "]), "__comma", [smalltalk.send(actual, "_asString", [])])]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_assert_description_',
smalltalk.method({
selector: 'assert:description:',
fn: function (aBoolean, aString){
var self=this;
(($receiver = aBoolean).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_signalFailure_", [aString]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_signalFailure_", [aString]);})]);
return self;}
}),
smalltalk.TestCase);



smalltalk.addClass('ProgressBar', smalltalk.TabWidget, ['percent', 'progressDiv', 'div'], 'SUnit');
smalltalk.addMethod(
'_percent',
smalltalk.method({
selector: 'percent',
fn: function (){
var self=this;
return (($receiver = self['@percent']) == nil || $receiver == undefined) ? (function(){return (0);})() : $receiver;
return self;}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
'_percent_',
smalltalk.method({
selector: 'percent:',
fn: function (aNumber){
var self=this;
self['@percent']=aNumber;
return self;}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["progress_bar"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_renderProgressBar", []);
return self;}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
'_renderProgressBar',
smalltalk.method({
selector: 'renderProgressBar',
fn: function (){
var self=this;
smalltalk.send(self['@div'], "_contents_", [(function(html){return (function($rec){smalltalk.send($rec, "_class_", ["progress"]);return smalltalk.send($rec, "_style_", [smalltalk.send(smalltalk.send("width:", "__comma", [smalltalk.send(smalltalk.send(self, "_percent", []), "_asString", [])]), "__comma", [unescape("%25")])]);})(smalltalk.send(html, "_div", []));})]);
return self;}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
'_updatePercent_',
smalltalk.method({
selector: 'updatePercent:',
fn: function (aNumber){
var self=this;
smalltalk.send(self, "_percent_", [aNumber]);
smalltalk.send(self, "_renderProgressBar", []);
return self;}
}),
smalltalk.ProgressBar);



smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');


smalltalk.addClass('TestRunner', smalltalk.TabWidget, ['selectedCategories', 'categoriesList', 'selectedClasses', 'classesList', 'selectedMethods', 'progressBar', 'methodsList', 'result', 'statusDiv'], 'SUnit');
smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
fn: function (){
var self=this;
return unescape("%5BTest%20runner%5D");
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_categories',
smalltalk.method({
selector: 'categories',
fn: function (){
var self=this;
var categories=nil;
categories=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(smalltalk.send(self, "_allClasses", []), "_do_", [(function(each){return (($receiver = smalltalk.send(categories, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(categories, "_add_", [smalltalk.send(each, "_category", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(categories, "_add_", [smalltalk.send(each, "_category", [])]);})]);})]);
return smalltalk.send(categories, "_sort", []);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_classes',
smalltalk.method({
selector: 'classes',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_allClasses", []), "_select_", [(function(each){return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [smalltalk.send(each, "_category", [])]);})]), "_sort_", [(function(a, b){return (($receiver = smalltalk.send(a, "_name", [])).klass === smalltalk.Number) ? $receiver >smalltalk.send(b, "_name", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(b, "_name", [])]);})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_selectedCategories',
smalltalk.method({
selector: 'selectedCategories',
fn: function (){
var self=this;
return (($receiver = self['@selectedCategories']) == nil || $receiver == undefined) ? (function(){return self['@selectedCategories']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_allClasses',
smalltalk.method({
selector: 'allClasses',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.TestCase || TestCase), "_allSubclasses", []);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_selectedClasses',
smalltalk.method({
selector: 'selectedClasses',
fn: function (){
var self=this;
return (($receiver = self['@selectedClasses']) == nil || $receiver == undefined) ? (function(){return self['@selectedClasses']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_progressBar',
smalltalk.method({
selector: 'progressBar',
fn: function (){
var self=this;
return (($receiver = self['@progressBar']) == nil || $receiver == undefined) ? (function(){return self['@progressBar']=smalltalk.send((smalltalk.ProgressBar || ProgressBar), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_selectedMethods',
smalltalk.method({
selector: 'selectedMethods',
fn: function (){
var self=this;
return (($receiver = self['@selectedMethods']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_collect_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_keys", []), "_select_", [(function(key){return smalltalk.send(key, "_beginsWith_", ["test"]);})]);})]);})() : $receiver;
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_statusInfo',
smalltalk.method({
selector: 'statusInfo',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printTotal", []), "__comma", [smalltalk.send(self, "_printPasses", [])]), "__comma", [smalltalk.send(self, "_printErrors", [])]), "__comma", [smalltalk.send(self, "_printFailures", [])]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_result',
smalltalk.method({
selector: 'result',
fn: function (){
var self=this;
return self['@result'];
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_failedMethods',
smalltalk.method({
selector: 'failedMethods',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_collect_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["failures"]);return smalltalk.send($rec, "_with_", [each]);})(smalltalk.send((typeof html == 'undefined' ? nil : html), "_li", []));})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_selectAllCategories',
smalltalk.method({
selector: 'selectAllCategories',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_categories", []), "_do_", [(function(each){return (($receiver = smalltalk.send(self['@selectedCategories'], "_includes_", [each])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_add_", [each]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_add_", [each]);})]);})]);
(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_toggleCategory_',
smalltalk.method({
selector: 'toggleCategory:',
fn: function (aCategory){
var self=this;
(($receiver = smalltalk.send(self, "_isSelectedCategory_", [aCategory])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@selectedCategories'], "_add_", [aCategory]);})() : (function(){return smalltalk.send(self['@selectedCategories'], "_remove_", [aCategory]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self['@selectedCategories'], "_add_", [aCategory]);}), (function(){return smalltalk.send(self['@selectedCategories'], "_remove_", [aCategory]);})]);
(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_toggleClass_',
smalltalk.method({
selector: 'toggleClass:',
fn: function (aClass){
var self=this;
(($receiver = smalltalk.send(self, "_isSelectedClass_", [aClass])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@selectedClasses'], "_add_", [aClass]);})() : (function(){return smalltalk.send(self['@selectedClasses'], "_remove_", [aClass]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self['@selectedClasses'], "_add_", [aClass]);}), (function(){return smalltalk.send(self['@selectedClasses'], "_remove_", [aClass]);})]);
smalltalk.send(self, "_updateClassesList", []);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_selectAllClasses',
smalltalk.method({
selector: 'selectAllClasses',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_classes", []), "_do_", [(function(each){return (($receiver = smalltalk.send(self['@selectedClasses'], "_includes_", [each])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_add_", [each]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_add_", [each]);})]);})]);
(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_run_',
smalltalk.method({
selector: 'run:',
fn: function (aCollection){
var self=this;
self['@result']=smalltalk.send((smalltalk.TestResult || TestResult), "_new", []);
(function($rec){smalltalk.send($rec, "_updateStatusDiv", []);return smalltalk.send($rec, "_updateMethodsList", []);})(self);
smalltalk.send(smalltalk.send(self, "_progressBar", []), "_updatePercent_", [(0)]);
smalltalk.send(self['@result'], "_total_", [smalltalk.send(aCollection, "_inject_into_", [(0), (function(acc, each){return (($receiver = acc).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(each, "_methods", []), "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(each, "_methods", []), "_size", [])]);})])]);
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send((function(){smalltalk.send(each, "_runCaseFor_", [self['@result']]);smalltalk.send(smalltalk.send(self, "_progressBar", []), "_updatePercent_", [(($receiver = (($receiver = smalltalk.send(self['@result'], "_runs", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@result'], "_total", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@result'], "_total", [])])).klass === smalltalk.Number) ? $receiver *(100) : smalltalk.send($receiver, "__star", [(100)])]);smalltalk.send(self, "_updateStatusDiv", []);return smalltalk.send(self, "_updateMethodsList", []);}), "_valueWithTimeout_", [(100)]);})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
self['@result']=smalltalk.send((smalltalk.TestResult || TestResult), "_new", []);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_printErrors',
smalltalk.method({
selector: 'printErrors',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_size", []), "_asString", []), "__comma", [unescape("%20errors%2C%20")]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_printFailures',
smalltalk.method({
selector: 'printFailures',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", []), "_asString", []), "__comma", [" failures"]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_printPasses',
smalltalk.method({
selector: 'printPasses',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((($receiver = smalltalk.send(smalltalk.send(self, "_result", []), "_total", [])).klass === smalltalk.Number) ? $receiver -(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_size", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", [])]) : smalltalk.send($receiver, "__minus", [(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_size", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", [])])]), "_asString", []), "__comma", [unescape("%20passes%2C%20")]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_printTotal',
smalltalk.method({
selector: 'printTotal',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_total", []), "_asString", []), "__comma", [unescape("%20runs%2C%20")]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderBoxOn_',
smalltalk.method({
selector: 'renderBoxOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderCategoriesOn_", [html]);smalltalk.send($rec, "_renderClassesOn_", [html]);return smalltalk.send($rec, "_renderResultsOn_", [html]);})(self);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["Run selected"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_run_", [smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_collect_", [(function(each){return smalltalk.send(each, "_new", []);})])]);})]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderCategoriesOn_',
smalltalk.method({
selector: 'renderCategoriesOn:',
fn: function (html){
var self=this;
self['@categoriesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column sunit categories"]);
smalltalk.send(self, "_updateCategoriesList", []);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderClassesOn_',
smalltalk.method({
selector: 'renderClassesOn:',
fn: function (html){
var self=this;
self['@classesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column sunit classes"]);
smalltalk.send(self, "_updateClassesList", []);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderResultsOn_',
smalltalk.method({
selector: 'renderResultsOn:',
fn: function (html){
var self=this;
self['@statusDiv']=smalltalk.send(html, "_div", []);
smalltalk.send(html, "_with_", [smalltalk.send(self, "_progressBar", [])]);
self['@methodsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column sunit methods"]);
smalltalk.send(self, "_updateMethodsList", []);
smalltalk.send(self, "_updateStatusDiv", []);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderFailuresOn_',
smalltalk.method({
selector: 'renderFailuresOn:',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["failures"]);return smalltalk.send($rec, "_with_", [each]);})(smalltalk.send(html, "_li", []));})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderErrorsOn_',
smalltalk.method({
selector: 'renderErrorsOn:',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["errors"]);return smalltalk.send($rec, "_with_", [each]);})(smalltalk.send(html, "_li", []));})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_canBeClosed',
smalltalk.method({
selector: 'canBeClosed',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_isSelectedClass_',
smalltalk.method({
selector: 'isSelectedClass:',
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_includes_", [aClass]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_isSelectedCategory_',
smalltalk.method({
selector: 'isSelectedCategory:',
fn: function (aCategory){
var self=this;
return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [aCategory]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_updateCategoriesList',
smalltalk.method({
selector: 'updateCategoriesList',
fn: function (){
var self=this;
smalltalk.send(self['@categoriesList'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["all"]);smalltalk.send($rec, "_with_", ["All"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectAllCategories", []);})]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_categories", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);(($receiver = smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);return (function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_toggleCategory_", [each]);})]);})(li);})]);})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_updateClassesList',
smalltalk.method({
selector: 'updateClassesList',
fn: function (){
var self=this;
smalltalk.send(self['@classesList'], "_contents_", [(function(html){(($receiver = smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function($rec){smalltalk.send($rec, "_class_", ["all"]);smalltalk.send($rec, "_with_", ["All"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectAllClasses", []);})]);})(smalltalk.send(html, "_li", []));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["all"]);smalltalk.send($rec, "_with_", ["All"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectAllClasses", []);})]);})(smalltalk.send(html, "_li", []));})]);return smalltalk.send(smalltalk.send(self, "_classes", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);(($receiver = smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_includes_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(each, "_name", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_toggleClass_", [each]);})]);})(li);})]);})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_updateMethodsList',
smalltalk.method({
selector: 'updateMethodsList',
fn: function (){
var self=this;
smalltalk.send(self['@methodsList'], "_contents_", [(function(html){smalltalk.send(self, "_renderFailuresOn_", [html]);return smalltalk.send(self, "_renderErrorsOn_", [html]);})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_updateStatusDiv',
smalltalk.method({
selector: 'updateStatusDiv',
fn: function (){
var self=this;
smalltalk.send(self['@statusDiv'], "_class_", [smalltalk.send("sunit status ", "__comma", [smalltalk.send(self['@result'], "_status", [])])]);
smalltalk.send(self['@statusDiv'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(self, "_statusInfo", [])]);})]);
return self;}
}),
smalltalk.TestRunner);



smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.addMethod(
'_timestamp',
smalltalk.method({
selector: 'timestamp',
fn: function (){
var self=this;
return self['@timestamp'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_errors',
smalltalk.method({
selector: 'errors',
fn: function (){
var self=this;
return self['@errors'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_failures',
smalltalk.method({
selector: 'failures',
fn: function (){
var self=this;
return self['@failures'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_total',
smalltalk.method({
selector: 'total',
fn: function (){
var self=this;
return self['@total'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_total_',
smalltalk.method({
selector: 'total:',
fn: function (aNumber){
var self=this;
self['@total']=aNumber;
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_addError_',
smalltalk.method({
selector: 'addError:',
fn: function (anError){
var self=this;
smalltalk.send(smalltalk.send(self, "_errors", []), "_add_", [anError]);
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_addFailure_',
smalltalk.method({
selector: 'addFailure:',
fn: function (aFailure){
var self=this;
smalltalk.send(smalltalk.send(self, "_failures", []), "_add_", [aFailure]);
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_runs',
smalltalk.method({
selector: 'runs',
fn: function (){
var self=this;
return self['@runs'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_increaseRuns',
smalltalk.method({
selector: 'increaseRuns',
fn: function (){
var self=this;
self['@runs']=(($receiver = self['@runs']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_status',
smalltalk.method({
selector: 'status',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(smalltalk.send(self, "_errors", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "success";})() : (function(){return "failure";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "success";}), (function(){return "failure";})]);})() : (function(){return "error";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "success";})() : (function(){return "failure";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "success";}), (function(){return "failure";})]);}), (function(){return "error";})]);
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@timestamp']=smalltalk.send((smalltalk.Date || Date), "_now", []);
self['@runs']=(0);
self['@errors']=smalltalk.send((smalltalk.Array || Array), "_new", []);
self['@failures']=smalltalk.send((smalltalk.Array || Array), "_new", []);
self['@total']=(0);
return self;}
}),
smalltalk.TestResult);



