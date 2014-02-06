(function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Controllers');

smalltalk.addClass('MKButtonController', smalltalk.MKAspectController, [], 'Moka-Controllers');
smalltalk.addMethod(
smalltalk.method({
selector: "onPressed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._performAction();
return self}, function($ctx1) {$ctx1.fill(self,"onPressed",{},smalltalk.MKButtonController)})},
messageSends: ["performAction"]}),
smalltalk.MKButtonController);



smalltalk.addClass('MKCheckboxController', smalltalk.MKAspectController, [], 'Moka-Controllers');
smalltalk.addMethod(
smalltalk.method({
selector: "onToggled:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._performActionWith_(aBoolean);
return self}, function($ctx1) {$ctx1.fill(self,"onToggled:",{aBoolean:aBoolean},smalltalk.MKCheckboxController)})},
messageSends: ["performActionWith:"]}),
smalltalk.MKCheckboxController);



smalltalk.addClass('MKInputController', smalltalk.MKAspectController, [], 'Moka-Controllers');
smalltalk.addMethod(
smalltalk.method({
selector: "onEnterPressed:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._performAtionWith_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"onEnterPressed:",{aString:aString},smalltalk.MKInputController)})},
messageSends: ["performAtionWith:"]}),
smalltalk.MKInputController);


})(global_smalltalk,global_nil,global__st);
