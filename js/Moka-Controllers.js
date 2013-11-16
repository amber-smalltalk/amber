define("amber_core/Moka-Controllers", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Moka-Core"], function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Controllers');
smalltalk.packages["Moka-Controllers"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKAnyKeyInputController', smalltalk.MKAspectController, ['lastValue'], 'Moka-Controllers');
smalltalk.MKAnyKeyInputController.comment="I am the default controller for `MKTextAreaView`. Actions are performed on any key press if the view's value changes.";
smalltalk.addMethod(
smalltalk.method({
selector: "inputText",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._view())._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputText",{},smalltalk.MKAnyKeyInputController)})},
args: [],
source: "inputText\x0a\x09^ self view value",
messageSends: ["value", "view"],
referencedClasses: []
}),
smalltalk.MKAnyKeyInputController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyPressed:",
category: 'actions',
fn: function (anEvent){
var self=this;
var newValue;
return smalltalk.withContext(function($ctx1) { 
var $1;
newValue=self._inputText();
$1=_st(newValue).__eq(self["@lastValue"]);
if(smalltalk.assert($1)){
return self;
};
self["@lastValue"]=newValue;
self._performActionWith_(newValue);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyPressed:",{anEvent:anEvent,newValue:newValue},smalltalk.MKAnyKeyInputController)})},
args: ["anEvent"],
source: "onKeyPressed: anEvent\x0a\x09| newValue |\x0a\x09\x0a\x09newValue := self inputText.\x0a\x09newValue = lastValue ifTrue: [ ^ self ].\x0a\x09\x0a\x09lastValue := newValue.\x0a\x09self performActionWith: newValue",
messageSends: ["inputText", "ifTrue:", "=", "performActionWith:"],
referencedClasses: []
}),
smalltalk.MKAnyKeyInputController);



smalltalk.addClass('MKEnterInputController', smalltalk.MKAnyKeyInputController, [], 'Moka-Controllers');
smalltalk.MKEnterInputController.comment="I am the default controller for `MKInputView`. \x0aActions are performed on 'enter' key press.";
smalltalk.addMethod(
smalltalk.method({
selector: "onKeyPressed:",
category: 'actions',
fn: function (anEvent){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEvent)._keyCode()).__eq(_st(_st($String())._cr())._asciiValue());
if(smalltalk.assert($1)){
smalltalk.MKEnterInputController.superclass.fn.prototype._onKeyPressed_.apply(_st(self), [anEvent]);
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyPressed:",{anEvent:anEvent},smalltalk.MKEnterInputController)})},
args: ["anEvent"],
source: "onKeyPressed: anEvent\x0a\x09anEvent keyCode = String cr asciiValue ifTrue: [\x0a\x09\x09super onKeyPressed: anEvent ]",
messageSends: ["ifTrue:", "=", "keyCode", "asciiValue", "cr", "onKeyPressed:"],
referencedClasses: ["String"]
}),
smalltalk.MKEnterInputController);



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


});
