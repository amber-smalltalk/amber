define("amber_core/Moka-Controllers", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Moka-Core"], function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Controllers');
smalltalk.packages["Moka-Controllers"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKButtonController', smalltalk.MKAspectController, [], 'Moka-Controllers');
smalltalk.MKButtonController.comment="I am the default controller for `MKButtonView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onPressed",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._performAction();
return self}, function($ctx1) {$ctx1.fill(self,"onPressed",{},smalltalk.MKButtonController)})},
args: [],
source: "onPressed\x0a\x09self performAction",
messageSends: ["performAction"],
referencedClasses: []
}),
smalltalk.MKButtonController);



smalltalk.addClass('MKCheckboxController', smalltalk.MKAspectController, [], 'Moka-Controllers');
smalltalk.MKCheckboxController.comment="I am the default controller for `MKCheckboxView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onToggled:",
category: 'actions',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._performActionWith_(aBoolean);
return self}, function($ctx1) {$ctx1.fill(self,"onToggled:",{aBoolean:aBoolean},smalltalk.MKCheckboxController)})},
args: ["aBoolean"],
source: "onToggled: aBoolean\x0a\x09self performActionWith: aBoolean",
messageSends: ["performActionWith:"],
referencedClasses: []
}),
smalltalk.MKCheckboxController);



smalltalk.addClass('MKInputController', smalltalk.MKAspectController, [], 'Moka-Controllers');
smalltalk.MKInputController.comment="I am the default controller for `MKInputView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onEnterPressed:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._performAtionWith_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"onEnterPressed:",{aString:aString},smalltalk.MKInputController)})},
args: ["aString"],
source: "onEnterPressed: aString\x0a\x09self performAtionWith: aString",
messageSends: ["performAtionWith:"],
referencedClasses: []
}),
smalltalk.MKInputController);


});
