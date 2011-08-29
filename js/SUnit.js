smalltalk.addClass('TestCase', smalltalk.Object, ['testedClass'], 'SUnit');
smalltalk.addMethod(
'_testedClass',
smalltalk.method({
selector: 'testedClass',
category: 'accessing',
fn: function (){
var self=this;
return self['@testedClass'];
return self;},
source: unescape('testedClass%0A%09%5EtestedClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_testedClass_',
smalltalk.method({
selector: 'testedClass:',
category: 'accessing',
fn: function (aClass){
var self=this;
self['@testedClass']=aClass;
return self;},
source: unescape('testedClass%3A%20aClass%0A%09testedClass%20%3A%3D%20aClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_cleanUpInstanceVariables',
smalltalk.method({
selector: 'cleanUpInstanceVariables',
category: 'private',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_instanceVariableNames", []), "_do_", [(function(name){return smalltalk.send(smalltalk.send(name, "__eq", ["testSelector"]), "_ifFalse_", [(function(){return smalltalk.send(self, "_instVarAt_put_", [name, nil]);})]);})]);
return self;},
source: unescape('cleanUpInstanceVariables%0A%09self%20class%20instanceVariableNames%20do%3A%20%5B%20%3Aname%20%7C%0A%09%09name%20%3D%20%27testSelector%27%20ifFalse%3A%20%5B%0A%09%09%09self%20instVarAt%3A%20name%20put%3A%20nil%20%5D%5D'),
messageSends: ["do:", "instanceVariableNames", "class", "ifFalse:", unescape("%3D"), "instVarAt:put:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_signalFailure_',
smalltalk.method({
selector: 'signalFailure:',
category: 'private',
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send(smalltalk.TestFailure, "_new", []));
return self;},
source: unescape('signalFailure%3A%20aString%0A%09TestFailure%20new%0A%09%09messageText%3A%20aString%3B%0A%09%09signal'),
messageSends: ["messageText:", "signal", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_setUp',
smalltalk.method({
selector: 'setUp',
category: 'running',
fn: function (){
var self=this;

return self;},
source: unescape('setUp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_tearDown',
smalltalk.method({
selector: 'tearDown',
category: 'running',
fn: function (){
var self=this;

return self;},
source: unescape('tearDown'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_methods',
smalltalk.method({
selector: 'methods',
category: 'running',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_methodDictionary", []), "_keys", []), "_select_", [(function(each){return smalltalk.send(each, "_match_", [unescape("%5Etest")]);})]);
return self;},
source: unescape('methods%0A%09%5Eself%20class%20methodDictionary%20keys%20select%3A%20%5B%3Aeach%20%7C%20each%20match%3A%20%27%5Etest%27%5D'),
messageSends: ["select:", "keys", "methodDictionary", "class", "match:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_runCaseFor_',
smalltalk.method({
selector: 'runCaseFor:',
category: 'running',
fn: function (aTestResult){
var self=this;
smalltalk.send((function(){smalltalk.send(self, "_setUp", []);return smalltalk.send(self, "_performTestFor_", [aTestResult]);}), "_on_do_", [smalltalk.Error, (function(ex){smalltalk.send(self, "_tearDown", []);smalltalk.send(self, "_cleanUpInstanceVariables", []);return smalltalk.send(ex, "_signal", []);})]);
smalltalk.send(self, "_tearDown", []);
smalltalk.send(self, "_cleanUpInstanceVariables", []);
return self;},
source: unescape('runCaseFor%3A%20aTestResult%0A%09%5Bself%20setUp.%0A%09self%20performTestFor%3A%20aTestResult%5D%0A%09%09on%3A%20Error%0A%09%09do%3A%20%5B%3Aex%20%7C%0A%09%09%09self%20tearDown.%0A%09%09%09self%20cleanUpInstanceVariables.%0A%09%09%09ex%20signal%5D.%0A%09self%20tearDown.%0A%09self%20cleanUpInstanceVariables'),
messageSends: ["on:do:", "setUp", "performTestFor:", "tearDown", "cleanUpInstanceVariables", "signal"],
referencedClasses: [smalltalk.Error]
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_performTestFor_',
smalltalk.method({
selector: 'performTestFor:',
category: 'running',
fn: function (aResult){
var self=this;
smalltalk.send(smalltalk.send(self, "_methods", []), "_do_", [(function(each){smalltalk.send((function(){return smalltalk.send((function(){return smalltalk.send(self, "_perform_", [each]);}), "_on_do_", [smalltalk.TestFailure, (function(ex){return smalltalk.send(aResult, "_addFailure_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_name", []), "__comma", [unescape("%3E%3E")]), "__comma", [each])]);})]);}), "_on_do_", [smalltalk.Error, (function(ex){return smalltalk.send(aResult, "_addError_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_name", []), "__comma", [unescape("%3E%3E")]), "__comma", [each])]);})]);return smalltalk.send(aResult, "_increaseRuns", []);})]);
return self;},
source: unescape('performTestFor%3A%20aResult%0A%09self%20methods%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%09%5B%5Bself%20perform%3A%20each%5D%0A%09%09%09on%3A%20TestFailure%20do%3A%20%5B%3Aex%20%7C%20aResult%20addFailure%3A%20self%20class%20name%2C%20%27%3E%3E%27%2C%20each%5D%5D%0A%09%09%09on%3A%20Error%20do%3A%20%5B%3Aex%20%7C%20aResult%20addError%3A%20self%20class%20name%2C%20%27%3E%3E%27%2C%20each%5D.%0A%09%09aResult%20increaseRuns%5D'),
messageSends: ["do:", "methods", "on:do:", "perform:", "addFailure:", unescape("%2C"), "name", "class", "addError:", "increaseRuns"],
referencedClasses: [smalltalk.nil,smalltalk.Error]
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_assert_',
smalltalk.method({
selector: 'assert:',
category: 'testing',
fn: function (aBoolean){
var self=this;
smalltalk.send(aBoolean, "_ifFalse_", [(function(){return smalltalk.send(self, "_signalFailure_", ["Assertion failed"]);})]);
return self;},
source: unescape('assert%3A%20aBoolean%0A%09aBoolean%20ifFalse%3A%20%5Bself%20signalFailure%3A%20%27Assertion%20failed%27%5D'),
messageSends: ["ifFalse:", "signalFailure:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_deny_',
smalltalk.method({
selector: 'deny:',
category: 'testing',
fn: function (aBoolean){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(aBoolean, "_not", [])]);
return self;},
source: unescape('deny%3A%20aBoolean%0A%09self%20assert%3A%20aBoolean%20not'),
messageSends: ["assert:", "not"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_assert_equals_',
smalltalk.method({
selector: 'assert:equals:',
category: 'testing',
fn: function (expected, actual){
var self=this;
return smalltalk.send(self, "_assert_", [smalltalk.send(expected, "__eq", [actual])]);
return self;},
source: unescape('assert%3A%20expected%20equals%3A%20actual%0A%09%5E%20self%20assert%3A%20%28expected%20%3D%20actual%29'),
messageSends: ["assert:", unescape("%3D")],
referencedClasses: []
}),
smalltalk.TestCase);



smalltalk.addClass('ProgressBar', smalltalk.TabWidget, ['percent', 'progressDiv', 'div'], 'SUnit');
smalltalk.addMethod(
'_percent',
smalltalk.method({
selector: 'percent',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@percent'], "_ifNil_", [(function(){return (0);})]);
return self;},
source: unescape('percent%0A%09%5Epercent%20ifNil%3A%20%5B0%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
'_percent_',
smalltalk.method({
selector: 'percent:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@percent']=aNumber;
return self;},
source: unescape('percent%3A%20aNumber%0A%09percent%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
category: 'rendering',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["progress_bar"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_renderProgressBar", []);
return self;},
source: unescape('renderOn%3A%20html%20%0A%09div%20%3A%3D%20html%20div%20%0A%09%09class%3A%20%27progress_bar%27%3B%0A%09%09yourself.%0A%09self%20renderProgressBar'),
messageSends: ["class:", "yourself", "div", "renderProgressBar"],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
'_updatePercent_',
smalltalk.method({
selector: 'updatePercent:',
category: 'updating',
fn: function (aNumber){
var self=this;
smalltalk.send(self, "_percent_", [aNumber]);
smalltalk.send(self, "_renderProgressBar", []);
return self;},
source: unescape('updatePercent%3A%20aNumber%0A%09self%20percent%3A%20aNumber.%0A%09self%20renderProgressBar'),
messageSends: ["percent:", "renderProgressBar"],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
'_renderProgressBar',
smalltalk.method({
selector: 'renderProgressBar',
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self['@div'], "_contents_", [(function(html){return (function($rec){smalltalk.send($rec, "_class_", ["progress"]);return smalltalk.send($rec, "_style_", [smalltalk.send(smalltalk.send("width:", "__comma", [smalltalk.send(smalltalk.send(self, "_percent", []), "_asString", [])]), "__comma", [unescape("%25")])]);})(smalltalk.send(html, "_div", []));})]);
return self;},
source: unescape('renderProgressBar%0A%09div%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%09html%20div%20%0A%09%09%09class%3A%20%27progress%27%3B%0A%09%09%09style%3A%20%27width%3A%27%2C%20self%20percent%20asString%2C%20%27%25%27%5D'),
messageSends: ["contents:", "class:", "style:", unescape("%2C"), "asString", "percent", "div"],
referencedClasses: []
}),
smalltalk.ProgressBar);



smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');


smalltalk.addClass('TestRunner', smalltalk.TabWidget, ['selectedCategories', 'categoriesList', 'selectedClasses', 'classesList', 'selectedMethods', 'progressBar', 'methodsList', 'result', 'statusDiv'], 'SUnit');
smalltalk.addMethod(
'_label',
smalltalk.method({
selector: 'label',
category: 'accessing',
fn: function (){
var self=this;
return unescape("%5BTest%20runner%5D");
return self;},
source: unescape('label%0A%20%20%20%20%5E%27%5BTest%20runner%5D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_categories',
smalltalk.method({
selector: 'categories',
category: 'accessing',
fn: function (){
var self=this;
var categories=nil;
categories=smalltalk.send(smalltalk.Array, "_new", []);
smalltalk.send(smalltalk.send(self, "_allClasses", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(categories, "_includes_", [smalltalk.send(each, "_category", [])]), "_ifFalse_", [(function(){return smalltalk.send(categories, "_add_", [smalltalk.send(each, "_category", [])]);})]);})]);
return smalltalk.send(categories, "_sort", []);
return self;},
source: unescape('categories%0A%20%20%20%20%7C%20categories%20%7C%0A%20%20%20%20categories%20%3A%3D%20Array%20new.%0A%20%20%20%20self%20allClasses%20do%3A%20%5B%3Aeach%20%7C%0A%09%28categories%20includes%3A%20each%20category%29%20ifFalse%3A%20%5B%0A%09%20%20%20%20categories%20add%3A%20each%20category%5D%5D.%0A%20%20%20%20%5Ecategories%20sort'),
messageSends: ["new", "do:", "allClasses", "ifFalse:", "includes:", "category", "add:", "sort"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_classes',
smalltalk.method({
selector: 'classes',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_allClasses", []), "_select_", [(function(each){return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [smalltalk.send(each, "_category", [])]);})]), "_sort_", [(function(a, b){return smalltalk.send(smalltalk.send(a, "_name", []), "__gt", [smalltalk.send(b, "_name", [])]);})]);
return self;},
source: unescape('classes%0A%20%20%20%20%5E%28self%20allClasses%20%0A%09select%3A%20%5B%3Aeach%20%7C%20self%20selectedCategories%20includes%3A%20each%20category%5D%29%0A%09sort%3A%20%5B%3Aa%20%3Ab%20%7C%20a%20name%20%3E%20b%20name%5D'),
messageSends: ["sort:", "select:", "allClasses", "includes:", "selectedCategories", "category", unescape("%3E"), "name"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_selectedCategories',
smalltalk.method({
selector: 'selectedCategories',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@selectedCategories'], "_ifNil_", [(function(){return self['@selectedCategories']=smalltalk.send(smalltalk.Array, "_new", []);})]);
return self;},
source: unescape('selectedCategories%0A%09%5EselectedCategories%20ifNil%3A%20%5BselectedCategories%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_allClasses',
smalltalk.method({
selector: 'allClasses',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.TestCase, "_allSubclasses", []);
return self;},
source: unescape('allClasses%0A%09%5ETestCase%20allSubclasses'),
messageSends: ["allSubclasses"],
referencedClasses: [smalltalk.TestCase]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_selectedClasses',
smalltalk.method({
selector: 'selectedClasses',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@selectedClasses'], "_ifNil_", [(function(){return self['@selectedClasses']=smalltalk.send(smalltalk.Array, "_new", []);})]);
return self;},
source: unescape('selectedClasses%0A%09%5EselectedClasses%20%20ifNil%3A%20%5BselectedClasses%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_progressBar',
smalltalk.method({
selector: 'progressBar',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@progressBar'], "_ifNil_", [(function(){return self['@progressBar']=smalltalk.send(smalltalk.ProgressBar, "_new", []);})]);
return self;},
source: unescape('progressBar%0A%09%5EprogressBar%20ifNil%3A%20%5BprogressBar%20%3A%3D%20ProgressBar%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: [smalltalk.ProgressBar]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_selectedMethods',
smalltalk.method({
selector: 'selectedMethods',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@selectedMethods'], "_ifNil_", [(function(){return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_collect_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_keys", []), "_select_", [(function(key){return smalltalk.send(key, "_beginsWith_", ["test"]);})]);})]);})]);
return self;},
source: unescape('selectedMethods%0A%09%5EselectedMethods%20ifNil%3A%20%5Bself%20selectedClasses%20collect%3A%20%5B%3Aeach%20%7C%0A%09%09each%20methodDictionary%20keys%20select%3A%20%5B%3Akey%20%7C%20%20key%20beginsWith%3A%20%27test%27%20%5D%5D%5D'),
messageSends: ["ifNil:", "collect:", "selectedClasses", "select:", "keys", "methodDictionary", "beginsWith:"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_statusInfo',
smalltalk.method({
selector: 'statusInfo',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printTotal", []), "__comma", [smalltalk.send(self, "_printPasses", [])]), "__comma", [smalltalk.send(self, "_printErrors", [])]), "__comma", [smalltalk.send(self, "_printFailures", [])]);
return self;},
source: unescape('statusInfo%0A%09%5Eself%20printTotal%2C%20self%20printPasses%2C%20self%20printErrors%2C%20self%20printFailures'),
messageSends: [unescape("%2C"), "printTotal", "printPasses", "printErrors", "printFailures"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_result',
smalltalk.method({
selector: 'result',
category: 'accessing',
fn: function (){
var self=this;
return self['@result'];
return self;},
source: unescape('result%0A%09%5Eresult'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_failedMethods',
smalltalk.method({
selector: 'failedMethods',
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_collect_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["failures"]);return smalltalk.send($rec, "_with_", [each]);})(smalltalk.send(html, "_li", []));})]);
return self;},
source: unescape('failedMethods%0A%09self%20result%20failures%20collect%3A%20%5B%3Aeach%20%7C%0A%09%09html%20li%20%0A%09%09%09class%3A%20%27failures%27%3B%0A%09%09%09with%3A%20each%5D'),
messageSends: ["collect:", "failures", "result", "class:", "with:", "li"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_selectAllCategories',
smalltalk.method({
selector: 'selectAllCategories',
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_categories", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(self['@selectedCategories'], "_includes_", [each]), "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_add_", [each]);})]);})]);
(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
return self;},
source: unescape('selectAllCategories%0A%09self%20categories%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%09%28selectedCategories%20includes%3A%20each%29%20ifFalse%3A%20%5B%0A%09%09%09self%20selectedCategories%20add%3A%20each%5D%5D.%0A%09self%20%0A%09%20%20%20%20updateCategoriesList%3B%0A%09%20%20%20%20updateClassesList'),
messageSends: ["do:", "categories", "ifFalse:", "includes:", "add:", "selectedCategories", "updateCategoriesList", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_toggleCategory_',
smalltalk.method({
selector: 'toggleCategory:',
category: 'actions',
fn: function (aCategory){
var self=this;
smalltalk.send(smalltalk.send(self, "_isSelectedCategory_", [aCategory]), "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self['@selectedCategories'], "_add_", [aCategory]);}), (function(){return smalltalk.send(self['@selectedCategories'], "_remove_", [aCategory]);})]);
(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
return self;},
source: unescape('toggleCategory%3A%20aCategory%0A%09%28self%20isSelectedCategory%3A%20aCategory%29%20%0A%09%09ifFalse%3A%20%5BselectedCategories%20add%3A%20aCategory%5D%0A%09%09ifTrue%3A%20%5BselectedCategories%20remove%3A%20aCategory%5D.%0A%09self%20%0A%09%20%20%20%20updateCategoriesList%3B%0A%09%20%20%20%20updateClassesList'),
messageSends: ["ifFalse:ifTrue:", "isSelectedCategory:", "add:", "remove:", "updateCategoriesList", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_toggleClass_',
smalltalk.method({
selector: 'toggleClass:',
category: 'actions',
fn: function (aClass){
var self=this;
smalltalk.send(smalltalk.send(self, "_isSelectedClass_", [aClass]), "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self['@selectedClasses'], "_add_", [aClass]);}), (function(){return smalltalk.send(self['@selectedClasses'], "_remove_", [aClass]);})]);
smalltalk.send(self, "_updateClassesList", []);
return self;},
source: unescape('toggleClass%3A%20aClass%0A%09%28self%20isSelectedClass%3A%20aClass%29%20%0A%09%09ifFalse%3A%20%5BselectedClasses%20add%3A%20aClass%5D%0A%09%09ifTrue%3A%20%5BselectedClasses%20remove%3A%20aClass%5D.%0A%09self%20%0A%09%20%20%20%20updateClassesList'),
messageSends: ["ifFalse:ifTrue:", "isSelectedClass:", "add:", "remove:", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_selectAllClasses',
smalltalk.method({
selector: 'selectAllClasses',
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_classes", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(self['@selectedClasses'], "_includes_", [each]), "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_add_", [each]);})]);})]);
(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
return self;},
source: unescape('selectAllClasses%0A%09self%20classes%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%09%28selectedClasses%20includes%3A%20each%29%20ifFalse%3A%20%5B%0A%09%09%09self%20selectedClasses%20add%3A%20each%5D%5D.%0A%09self%20%0A%09%20%20%20%20updateCategoriesList%3B%0A%09%20%20%20%20updateClassesList'),
messageSends: ["do:", "classes", "ifFalse:", "includes:", "add:", "selectedClasses", "updateCategoriesList", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_run_',
smalltalk.method({
selector: 'run:',
category: 'actions',
fn: function (aCollection){
var self=this;
self['@result']=smalltalk.send(smalltalk.TestResult, "_new", []);
(function($rec){smalltalk.send($rec, "_updateStatusDiv", []);return smalltalk.send($rec, "_updateMethodsList", []);})(self);
smalltalk.send(smalltalk.send(self, "_progressBar", []), "_updatePercent_", [(0)]);
smalltalk.send(self['@result'], "_total_", [smalltalk.send(aCollection, "_inject_into_", [(0), (function(acc, each){return smalltalk.send(acc, "__plus", [smalltalk.send(smalltalk.send(each, "_methods", []), "_size", [])]);})])]);
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send((function(){smalltalk.send(each, "_runCaseFor_", [self['@result']]);smalltalk.send(smalltalk.send(self, "_progressBar", []), "_updatePercent_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@result'], "_runs", []), "__slash", [smalltalk.send(self['@result'], "_total", [])]), "__star", [(100)])]);smalltalk.send(self, "_updateStatusDiv", []);return smalltalk.send(self, "_updateMethodsList", []);}), "_valueWithTimeout_", [(100)]);})]);
return self;},
source: unescape('run%3A%20aCollection%0A%09result%20%3A%3D%20TestResult%20new.%0A%09self%20%0A%09%09updateStatusDiv%3B%0A%09%09updateMethodsList.%0A%09self%20progressBar%20updatePercent%3A%200.%0A%09result%20total%3A%20%28aCollection%20inject%3A%200%20into%3A%20%5B%3Aacc%20%3Aeach%20%7C%20acc%20+%20each%20methods%20size%5D%29.%0A%09aCollection%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%09%5Beach%20runCaseFor%3A%20result.%0A%09%09self%20progressBar%20updatePercent%3A%20result%20runs%20/%20result%20total%20*%20100.%0A%09%09self%20updateStatusDiv.%0A%09%09self%20updateMethodsList%5D%20valueWithTimeout%3A%20100%5D.'),
messageSends: ["new", "updateStatusDiv", "updateMethodsList", "updatePercent:", "progressBar", "total:", "inject:into:", unescape("+"), "size", "methods", "do:", "valueWithTimeout:", "runCaseFor:", unescape("*"), unescape("/"), "runs", "total"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
self['@result']=smalltalk.send(smalltalk.TestResult, "_new", []);
return self;},
source: unescape('initialize%0A%09super%20initialize.%0A%09result%20%3A%3D%20TestResult%20new'),
messageSends: ["initialize", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_printErrors',
smalltalk.method({
selector: 'printErrors',
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_size", []), "_asString", []), "__comma", [unescape("%20errors%2C%20")]);
return self;},
source: unescape('printErrors%0A%09%5Eself%20result%20errors%20size%20asString%20%2C%20%27%20errors%2C%20%27'),
messageSends: [unescape("%2C"), "asString", "size", "errors", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_printFailures',
smalltalk.method({
selector: 'printFailures',
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", []), "_asString", []), "__comma", [" failures"]);
return self;},
source: unescape('printFailures%0A%09%5Eself%20result%20failures%20size%20asString%2C%20%27%20failures%27'),
messageSends: [unescape("%2C"), "asString", "size", "failures", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_printPasses',
smalltalk.method({
selector: 'printPasses',
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_total", []), "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_size", []), "__plus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", [])])]), "_asString", []), "__comma", [unescape("%20passes%2C%20")]);
return self;},
source: unescape('printPasses%0A%09%5E%28%28%28self%20result%20total%29%20-%20%28self%20result%20errors%20size%20+%20%28self%20result%20failures%20size%29%29%29%20asString%29%20%2C%20%27%20passes%2C%20%27'),
messageSends: [unescape("%2C"), "asString", unescape("-"), "total", "result", unescape("+"), "size", "errors", "failures"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_printTotal',
smalltalk.method({
selector: 'printTotal',
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_total", []), "_asString", []), "__comma", [unescape("%20runs%2C%20")]);
return self;},
source: unescape('printTotal%0A%09%5Eself%20result%20total%20asString%2C%20%27%20runs%2C%20%27'),
messageSends: [unescape("%2C"), "asString", "total", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderBoxOn_',
smalltalk.method({
selector: 'renderBoxOn:',
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderCategoriesOn_", [html]);smalltalk.send($rec, "_renderClassesOn_", [html]);return smalltalk.send($rec, "_renderResultsOn_", [html]);})(self);
return self;},
source: unescape('renderBoxOn%3A%20html%0A%20%20%20%20self%20%0A%09renderCategoriesOn%3A%20html%3B%0A%09renderClassesOn%3A%20html%3B%0A%09renderResultsOn%3A%20html'),
messageSends: ["renderCategoriesOn:", "renderClassesOn:", "renderResultsOn:"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["Run selected"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_run_", [smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_collect_", [(function(each){return smalltalk.send(each, "_new", []);})])]);})]);})(smalltalk.send(html, "_button", []));
return self;},
source: unescape('renderButtonsOn%3A%20html%0A%20%20%20%20html%20button%0A%09with%3A%20%27Run%20selected%27%3B%0A%09onClick%3A%20%5Bself%20run%3A%20%28self%20selectedClasses%20collect%3A%20%5B%3Aeach%20%7C%20each%20new%5D%29%5D'),
messageSends: ["with:", "onClick:", "run:", "collect:", "selectedClasses", "new", "button"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderCategoriesOn_',
smalltalk.method({
selector: 'renderCategoriesOn:',
category: 'rendering',
fn: function (html){
var self=this;
self['@categoriesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column sunit categories"]);
smalltalk.send(self, "_updateCategoriesList", []);
return self;},
source: unescape('renderCategoriesOn%3A%20html%0A%20%20%20%20%09categoriesList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20sunit%20categories%27.%0A%09self%20updateCategoriesList'),
messageSends: ["class:", "ul", "updateCategoriesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderClassesOn_',
smalltalk.method({
selector: 'renderClassesOn:',
category: 'rendering',
fn: function (html){
var self=this;
self['@classesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column sunit classes"]);
smalltalk.send(self, "_updateClassesList", []);
return self;},
source: unescape('renderClassesOn%3A%20html%0A%20%20%20%20%09classesList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20sunit%20classes%27.%0A%09self%20updateClassesList'),
messageSends: ["class:", "ul", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderResultsOn_',
smalltalk.method({
selector: 'renderResultsOn:',
category: 'rendering',
fn: function (html){
var self=this;
self['@statusDiv']=smalltalk.send(html, "_div", []);
smalltalk.send(html, "_with_", [smalltalk.send(self, "_progressBar", [])]);
self['@methodsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column sunit methods"]);
smalltalk.send(self, "_updateMethodsList", []);
smalltalk.send(self, "_updateStatusDiv", []);
return self;},
source: unescape('renderResultsOn%3A%20html%0A%20%20%20%20%09statusDiv%20%3A%3D%20html%20div.%0A%09html%20with%3A%20self%20progressBar.%0A%20%20%20%09methodsList%20%3A%3D%20html%20ul%20class%3A%20%27jt_column%20sunit%20methods%27.%0A%09self%20updateMethodsList.%0A%09self%20updateStatusDiv'),
messageSends: ["div", "with:", "progressBar", "class:", "ul", "updateMethodsList", "updateStatusDiv"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderFailuresOn_',
smalltalk.method({
selector: 'renderFailuresOn:',
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["failures"]);return smalltalk.send($rec, "_with_", [each]);})(smalltalk.send(html, "_li", []));})]);
return self;},
source: unescape('renderFailuresOn%3A%20html%0A%09self%20result%20failures%20do%3A%20%5B%3Aeach%20%7C%0A%09%09html%20li%20%0A%09%09%09class%3A%20%27failures%27%3B%0A%09%09%09with%3A%20each%5D'),
messageSends: ["do:", "failures", "result", "class:", "with:", "li"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_renderErrorsOn_',
smalltalk.method({
selector: 'renderErrorsOn:',
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["errors"]);return smalltalk.send($rec, "_with_", [each]);})(smalltalk.send(html, "_li", []));})]);
return self;},
source: unescape('renderErrorsOn%3A%20html%0A%09self%20result%20errors%20do%3A%20%5B%3Aeach%20%7C%0A%09%09html%20li%20%0A%09%09%09class%3A%20%27errors%27%3B%0A%09%09%09with%3A%20each%5D'),
messageSends: ["do:", "errors", "result", "class:", "with:", "li"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_canBeClosed',
smalltalk.method({
selector: 'canBeClosed',
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
source: unescape('canBeClosed%0A%20%20%20%20%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_isSelectedClass_',
smalltalk.method({
selector: 'isSelectedClass:',
category: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_includes_", [aClass]);
return self;},
source: unescape('isSelectedClass%3A%20aClass%0A%09%5E%28self%20selectedClasses%20includes%3A%20aClass%29'),
messageSends: ["includes:", "selectedClasses"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_isSelectedCategory_',
smalltalk.method({
selector: 'isSelectedCategory:',
category: 'testing',
fn: function (aCategory){
var self=this;
return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [aCategory]);
return self;},
source: unescape('isSelectedCategory%3A%20aCategory%0A%09%5E%28self%20selectedCategories%20includes%3A%20aCategory%29'),
messageSends: ["includes:", "selectedCategories"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_updateCategoriesList',
smalltalk.method({
selector: 'updateCategoriesList',
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@categoriesList'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["all"]);smalltalk.send($rec, "_with_", ["All"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectAllCategories", []);})]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_categories", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);smalltalk.send(smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [each]), "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);return (function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_toggleCategory_", [each]);})]);})(li);})]);})]);
return self;},
source: unescape('updateCategoriesList%0A%20%20%20%20categoriesList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%20%20%20%20html%20li%20%0A%09%09class%3A%20%27all%27%3B%0A%09%09with%3A%20%27All%27%3B%0A%09%09onClick%3A%20%5Bself%20selectAllCategories%5D.%0A%09self%20categories%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20%7C%0A%09%20%20%20%20li%20%3A%3D%20html%20li.%0A%09%20%20%20%20%28self%20selectedCategories%20includes%3A%20each%29%20ifTrue%3A%20%5B%0A%09%09li%20class%3A%20%27selected%27%5D.%0A%09%20%20%20%20li%0A%09%09with%3A%20each%3B%0A%09%09onClick%3A%20%5Bself%20toggleCategory%3A%20each%5D%5D%5D'),
messageSends: ["contents:", "class:", "with:", "onClick:", "selectAllCategories", "li", "do:", "categories", "ifTrue:", "includes:", "selectedCategories", "toggleCategory:"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_updateClassesList',
smalltalk.method({
selector: 'updateClassesList',
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@classesList'], "_contents_", [(function(html){smalltalk.send(smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_isEmpty", []), "_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["all"]);smalltalk.send($rec, "_with_", ["All"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectAllClasses", []);})]);})(smalltalk.send(html, "_li", []));})]);return smalltalk.send(smalltalk.send(self, "_classes", []), "_do_", [(function(each){var li=nil;
li=smalltalk.send(html, "_li", []);smalltalk.send(smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_includes_", [each]), "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]);return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(each, "_name", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_toggleClass_", [each]);})]);})(li);})]);})]);
return self;},
source: unescape('updateClassesList%0A%20%20%20%20classesList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%28self%20selectedCategories%20isEmpty%29%20ifFalse%3A%20%5B%0A%09%09html%20li%0A%09%09%09class%3A%20%27all%27%3B%0A%09%09%09with%3A%20%27All%27%3B%0A%09%09%09onClick%3A%20%5Bself%20selectAllClasses%5D%5D.%0A%09self%20classes%20do%3A%20%5B%3Aeach%20%7C%7C%20li%20%7C%0A%09%09li%20%3A%3D%20html%20li.%0A%09%09%28self%20selectedClasses%20includes%3A%20each%29%20ifTrue%3A%20%5B%0A%09%09%09li%20class%3A%20%27selected%27%5D.%0A%09%09li%0A%09%09%09with%3A%20each%20name%3B%0A%09%09%09onClick%3A%20%5Bself%20toggleClass%3A%20each%5D%5D%5D'),
messageSends: ["contents:", "ifFalse:", "isEmpty", "selectedCategories", "class:", "with:", "onClick:", "selectAllClasses", "li", "do:", "classes", "ifTrue:", "includes:", "selectedClasses", "name", "toggleClass:"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_updateMethodsList',
smalltalk.method({
selector: 'updateMethodsList',
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@methodsList'], "_contents_", [(function(html){smalltalk.send(self, "_renderFailuresOn_", [html]);return smalltalk.send(self, "_renderErrorsOn_", [html]);})]);
return self;},
source: unescape('updateMethodsList%0A%09methodsList%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%09self%20renderFailuresOn%3A%20html.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20renderErrorsOn%3A%20html%5D'),
messageSends: ["contents:", "renderFailuresOn:", "renderErrorsOn:"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
'_updateStatusDiv',
smalltalk.method({
selector: 'updateStatusDiv',
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@statusDiv'], "_class_", [smalltalk.send("sunit status ", "__comma", [smalltalk.send(self['@result'], "_status", [])])]);
smalltalk.send(self['@statusDiv'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(self, "_statusInfo", [])]);})]);
return self;},
source: unescape('updateStatusDiv%0A%09statusDiv%20class%3A%20%27sunit%20status%20%27%2C%20result%20status.%0A%09statusDiv%20contents%3A%20%5B%3Ahtml%20%7C%0A%09%09html%20span%20with%3A%20self%20statusInfo%5D'),
messageSends: ["class:", unescape("%2C"), "status", "contents:", "with:", "span", "statusInfo"],
referencedClasses: []
}),
smalltalk.TestRunner);



smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.addMethod(
'_timestamp',
smalltalk.method({
selector: 'timestamp',
category: 'accessing',
fn: function (){
var self=this;
return self['@timestamp'];
return self;},
source: unescape('timestamp%0A%09%5Etimestamp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_errors',
smalltalk.method({
selector: 'errors',
category: 'accessing',
fn: function (){
var self=this;
return self['@errors'];
return self;},
source: unescape('errors%0A%09%5Eerrors'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_failures',
smalltalk.method({
selector: 'failures',
category: 'accessing',
fn: function (){
var self=this;
return self['@failures'];
return self;},
source: unescape('failures%0A%09%5Efailures'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_total',
smalltalk.method({
selector: 'total',
category: 'accessing',
fn: function (){
var self=this;
return self['@total'];
return self;},
source: unescape('total%0A%09%5Etotal'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_total_',
smalltalk.method({
selector: 'total:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@total']=aNumber;
return self;},
source: unescape('total%3A%20aNumber%0A%09total%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_addError_',
smalltalk.method({
selector: 'addError:',
category: 'accessing',
fn: function (anError){
var self=this;
smalltalk.send(smalltalk.send(self, "_errors", []), "_add_", [anError]);
return self;},
source: unescape('addError%3A%20anError%0A%09self%20errors%20add%3A%20anError'),
messageSends: ["add:", "errors"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_addFailure_',
smalltalk.method({
selector: 'addFailure:',
category: 'accessing',
fn: function (aFailure){
var self=this;
smalltalk.send(smalltalk.send(self, "_failures", []), "_add_", [aFailure]);
return self;},
source: unescape('addFailure%3A%20aFailure%0A%09self%20failures%20add%3A%20aFailure'),
messageSends: ["add:", "failures"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_runs',
smalltalk.method({
selector: 'runs',
category: 'accessing',
fn: function (){
var self=this;
return self['@runs'];
return self;},
source: unescape('runs%0A%09%5Eruns'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_increaseRuns',
smalltalk.method({
selector: 'increaseRuns',
category: 'accessing',
fn: function (){
var self=this;
self['@runs']=smalltalk.send(self['@runs'], "__plus", [(1)]);
return self;},
source: unescape('increaseRuns%0A%09runs%20%3A%3D%20runs%20+%201'),
messageSends: [unescape("+")],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_status',
smalltalk.method({
selector: 'status',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_errors", []), "_isEmpty", []), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", []), "_ifTrue_ifFalse_", [(function(){return "success";}), (function(){return "failure";})]);}), (function(){return "error";})]);
return self;},
source: unescape('status%0A%09%5Eself%20errors%20isEmpty%20%0A%09%09ifTrue%3A%20%5B%0A%09%09%09self%20failures%20isEmpty%20%0A%09%09%09%09ifTrue%3A%20%5B%27success%27%5D%0A%09%09%09%09ifFalse%3A%20%5B%27failure%27%5D%5D%0A%09%09ifFalse%3A%20%5B%27error%27%5D'),
messageSends: ["ifTrue:ifFalse:", "isEmpty", "errors", "failures"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@timestamp']=smalltalk.send(smalltalk.Date, "_now", []);
self['@runs']=(0);
self['@errors']=smalltalk.send(smalltalk.Array, "_new", []);
self['@failures']=smalltalk.send(smalltalk.Array, "_new", []);
self['@total']=(0);
return self;},
source: unescape('initialize%0A%09super%20initialize.%0A%09timestamp%20%3A%3D%20Date%20now.%0A%09runs%20%3A%3D%200.%0A%09errors%20%3A%3D%20Array%20new.%0A%09failures%20%3A%3D%20Array%20new.%0A%09total%20%3A%3D%200'),
messageSends: ["initialize", "now", "new"],
referencedClasses: [smalltalk.Date,smalltalk.Array]
}),
smalltalk.TestResult);



