define("amber_core/Moka-Controllers", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Moka-Core", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Moka-Controllers');
smalltalk.packages["Moka-Controllers"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKAnyKeyInputController', globals.MKSingleAspectController, ['lastValue'], 'Moka-Controllers');
globals.MKAnyKeyInputController.comment="I am the default controller for `MKTextAreaView`. Actions are performed on any key press if the view's value changes.";
smalltalk.addMethod(
smalltalk.method({
selector: "inputText",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._view())._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputText",{},globals.MKAnyKeyInputController)})},
args: [],
source: "inputText\x0a\x09^ self view value",
messageSends: ["value", "view"],
referencedClasses: []
}),
globals.MKAnyKeyInputController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyUp:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setNewValue();
return self}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{anEvent:anEvent},globals.MKAnyKeyInputController)})},
args: ["anEvent"],
source: "onKeyUp: anEvent\x0a\x09self setNewValue",
messageSends: ["setNewValue"],
referencedClasses: []
}),
globals.MKAnyKeyInputController);

smalltalk.addMethod(
smalltalk.method({
selector: "setNewValue",
protocol: 'actions',
fn: function (){
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
self._performAspectActionWith_(newValue);
return self}, function($ctx1) {$ctx1.fill(self,"setNewValue",{newValue:newValue},globals.MKAnyKeyInputController)})},
args: [],
source: "setNewValue\x0a\x09| newValue |\x0a\x09\x0a\x09newValue := self inputText.\x0a\x09newValue = lastValue ifTrue: [ ^ self ].\x0a\x09\x0a\x09lastValue := newValue.\x0a\x09self performAspectActionWith: newValue",
messageSends: ["inputText", "ifTrue:", "=", "performAspectActionWith:"],
referencedClasses: []
}),
globals.MKAnyKeyInputController);



smalltalk.addClass('MKEnterInputController', globals.MKAnyKeyInputController, [], 'Moka-Controllers');
globals.MKEnterInputController.comment="I am the default controller for `MKInputView`. \x0aActions are performed on 'enter' key press.";
smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEvent)._keyCode()).__eq(_st(_st($String())._cr())._asciiValue());
if(smalltalk.assert($1)){
self._setNewValue();
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},globals.MKEnterInputController)})},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09anEvent keyCode = String cr asciiValue ifTrue: [\x0a\x09\x09self setNewValue ]",
messageSends: ["ifTrue:", "=", "keyCode", "asciiValue", "cr", "setNewValue"],
referencedClasses: ["String"]
}),
globals.MKEnterInputController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyUp:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return self},
args: ["anEvent"],
source: "onKeyUp: anEvent",
messageSends: [],
referencedClasses: []
}),
globals.MKEnterInputController);



smalltalk.addClass('MKButtonController', globals.MKSingleAspectController, [], 'Moka-Controllers');
globals.MKButtonController.comment="I am the default controller for `MKButtonView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._performAspectAction();
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{anEvent:anEvent},globals.MKButtonController)})},
args: ["anEvent"],
source: "onClick: anEvent\x0a\x09self performAspectAction",
messageSends: ["performAspectAction"],
referencedClasses: []
}),
globals.MKButtonController);



smalltalk.addClass('MKCheckboxController', globals.MKSingleAspectController, [], 'Moka-Controllers');
globals.MKCheckboxController.comment="I am the default controller for `MKCheckboxView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._toggle();
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{anEvent:anEvent},globals.MKCheckboxController)})},
args: ["anEvent"],
source: "onClick: anEvent\x0a\x09self toggle",
messageSends: ["toggle"],
referencedClasses: []
}),
globals.MKCheckboxController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anEvent)._stopPropagation();
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},globals.MKCheckboxController)})},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09\x22Avoid scrolling in scrollable views\x22\x0a\x09\x0a\x09anEvent stopPropagation",
messageSends: ["stopPropagation"],
referencedClasses: []
}),
globals.MKCheckboxController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyPress:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(anEvent)._charCode()).__eq(" "._asciiValue());
if(smalltalk.assert($1)){
self._toggle();
_st(anEvent)._stopPropagation();
$2=_st(anEvent)._preventDefault();
$2;
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyPress:",{anEvent:anEvent},globals.MKCheckboxController)})},
args: ["anEvent"],
source: "onKeyPress: anEvent\x0a\x09anEvent charCode = ' ' asciiValue ifTrue: [ \x0a\x09\x09self toggle.\x0a\x09\x09anEvent stopPropagation; preventDefault ]",
messageSends: ["ifTrue:", "=", "charCode", "asciiValue", "toggle", "stopPropagation", "preventDefault"],
referencedClasses: []
}),
globals.MKCheckboxController);

smalltalk.addMethod(
smalltalk.method({
selector: "toggle",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._performAspectActionWith_(_st(_st(self._view())._checked())._not());
return self}, function($ctx1) {$ctx1.fill(self,"toggle",{},globals.MKCheckboxController)})},
args: [],
source: "toggle\x0a\x09self performAspectActionWith: self view checked not",
messageSends: ["performAspectActionWith:", "not", "checked", "view"],
referencedClasses: []
}),
globals.MKCheckboxController);



smalltalk.addClass('MKDropdownController', globals.MKAspectsController, [], 'Moka-Controllers');
globals.MKDropdownController.comment="I am the default controller for `MKDropdownView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._view())._popupList();
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{anEvent:anEvent},globals.MKDropdownController)})},
args: ["anEvent"],
source: "onClick: anEvent\x0a\x09self view popupList",
messageSends: ["popupList", "view"],
referencedClasses: []
}),
globals.MKDropdownController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEvent)._keyCode()).__eq(_st(_st($String())._cr())._asciiValue());
if(smalltalk.assert($1)){
_st(self._view())._popupList();
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},globals.MKDropdownController)})},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09anEvent keyCode = String cr asciiValue ifTrue: [\x0a\x09\x09self view popupList ]",
messageSends: ["ifTrue:", "=", "keyCode", "asciiValue", "cr", "popupList", "view"],
referencedClasses: ["String"]
}),
globals.MKDropdownController);



smalltalk.addClass('MKListController', globals.MKAspectsController, ['downRepeater', 'upRepeater'], 'Moka-Controllers');
globals.MKListController.comment="I am the default controller for `MKListView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "activateItem:",
protocol: 'actions',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectItem_(anItem);
return self}, function($ctx1) {$ctx1.fill(self,"activateItem:",{anItem:anItem},globals.MKListController)})},
args: ["anItem"],
source: "activateItem: anItem\x0a\x09\x22On item activation, change the model selection\x22\x0a\x09\x0a\x09self selectItem: anItem",
messageSends: ["selectItem:"],
referencedClasses: []
}),
globals.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "activeItem",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._view())._activeItem();
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeItem",{},globals.MKListController)})},
args: [],
source: "activeItem\x0a\x09^ self view activeItem",
messageSends: ["activeItem", "view"],
referencedClasses: []
}),
globals.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "collection",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._view())._collection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},globals.MKListController)})},
args: [],
source: "collection\x0a\x09^ self view collection",
messageSends: ["collection", "view"],
referencedClasses: []
}),
globals.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "downRepeater",
protocol: 'accessing',
fn: function (){
var self=this;
function $MKRepeater(){return globals.MKRepeater||(typeof MKRepeater=="undefined"?nil:MKRepeater)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@downRepeater"];
if(($receiver = $2) == nil || $receiver == null){
self["@downRepeater"]=_st($MKRepeater())._new();
$1=self["@downRepeater"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"downRepeater",{},globals.MKListController)})},
args: [],
source: "downRepeater\x0a\x09^ downRepeater ifNil: [ downRepeater := MKRepeater new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["MKRepeater"]
}),
globals.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "itemForTarget:",
protocol: 'private',
fn: function (aDOMElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._view())._findItemFor_(aDOMElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"itemForTarget:",{aDOMElement:aDOMElement},globals.MKListController)})},
args: ["aDOMElement"],
source: "itemForTarget: aDOMElement\x0a\x09^ self view findItemFor: aDOMElement",
messageSends: ["findItemFor:", "view"],
referencedClasses: []
}),
globals.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "nextItem",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$5,$4,$3,$1;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$5=self._collection();
$ctx1.sendIdx["collection"]=2;
$4=_st($5)._indexOf_(self._activeItem());
$3=_st($4).__plus((1));
$1=_st($2)._at_ifAbsent_($3,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._collection())._last();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextItem",{},globals.MKListController)})},
args: [],
source: "nextItem\x0a\x09^ self collection \x0a\x09\x09at: (self collection indexOf: self activeItem) + 1\x0a\x09\x09ifAbsent: [ self collection last ]",
messageSends: ["at:ifAbsent:", "collection", "+", "indexOf:", "activeItem", "last"],
referencedClasses: []
}),
globals.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectItem_(self._itemForTarget_(_st(anEvent)._target()));
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{anEvent:anEvent},globals.MKListController)})},
args: ["anEvent"],
source: "onClick: anEvent\x0a\x09self selectItem: (self itemForTarget: anEvent target)",
messageSends: ["selectItem:", "itemForTarget:", "target"],
referencedClasses: []
}),
globals.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4,$5,$6,$7;
$2=_st(anEvent)._keyCode();
$ctx1.sendIdx["keyCode"]=1;
$1=_st($2).__eq((40));
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($1)){
_st(anEvent)._preventDefault();
$ctx1.sendIdx["preventDefault"]=1;
$3=_st(anEvent)._stopPropagation();
$ctx1.sendIdx["stopPropagation"]=1;
$3;
$4=self._upRepeater();
$ctx1.sendIdx["upRepeater"]=1;
_st($4)._stopRepeating();
$ctx1.sendIdx["stopRepeating"]=1;
$5=self._downRepeater();
$ctx1.sendIdx["downRepeater"]=1;
_st($5)._repeat_((function(){
return smalltalk.withContext(function($ctx2) {
return self._activateItem_(self._nextItem());
$ctx2.sendIdx["activateItem:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["repeat:"]=1;
};
$6=_st(_st(anEvent)._keyCode()).__eq((38));
if(smalltalk.assert($6)){
_st(anEvent)._preventDefault();
$7=_st(anEvent)._stopPropagation();
$7;
_st(self._downRepeater())._stopRepeating();
_st(self._upRepeater())._repeat_((function(){
return smalltalk.withContext(function($ctx2) {
return self._activateItem_(self._previousItem());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},globals.MKListController)})},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09\x22Down\x22\x0a\x09anEvent keyCode = 40 ifTrue: [ \x0a\x09\x09anEvent preventDefault; stopPropagation.\x0a\x09\x09self upRepeater stopRepeating.\x0a\x09\x09self downRepeater repeat: [ \x0a\x09\x09\x09self activateItem: self nextItem ] ].\x0a\x09\x22Up\x22\x0a\x09anEvent keyCode = 38 ifTrue: [ \x0a\x09\x09anEvent preventDefault; stopPropagation.\x0a\x09\x09self downRepeater stopRepeating.\x0a\x09\x09self upRepeater repeat: [ \x0a\x09\x09\x09self activateItem: self previousItem ] ].",
messageSends: ["ifTrue:", "=", "keyCode", "preventDefault", "stopPropagation", "stopRepeating", "upRepeater", "repeat:", "downRepeater", "activateItem:", "nextItem", "previousItem"],
referencedClasses: []
}),
globals.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyUp:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._downRepeater())._stopRepeating();
$ctx1.sendIdx["stopRepeating"]=1;
_st(self._upRepeater())._stopRepeating();
return self}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{anEvent:anEvent},globals.MKListController)})},
args: ["anEvent"],
source: "onKeyUp: anEvent\x0a\x09self downRepeater stopRepeating.\x0a\x09self upRepeater stopRepeating",
messageSends: ["stopRepeating", "downRepeater", "upRepeater"],
referencedClasses: []
}),
globals.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "previousItem",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$7,$6,$5,$4,$1;
$3=self._view();
$ctx1.sendIdx["view"]=1;
$2=_st($3)._collection();
$ctx1.sendIdx["collection"]=1;
$7=self._view();
$ctx1.sendIdx["view"]=2;
$6=_st($7)._collection();
$ctx1.sendIdx["collection"]=2;
$5=_st($6)._indexOf_(self._activeItem());
$4=_st($5).__minus((1));
$1=_st($2)._at_ifAbsent_($4,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._view())._collection())._first();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"previousItem",{},globals.MKListController)})},
args: [],
source: "previousItem\x0a\x09^ self view collection \x0a\x09\x09at: (self view collection indexOf: self activeItem) - 1\x0a\x09\x09ifAbsent: [ self view collection first ]",
messageSends: ["at:ifAbsent:", "collection", "view", "-", "indexOf:", "activeItem", "first"],
referencedClasses: []
}),
globals.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._performAspectAction_with_(_st(self._view())._selectionAspect(),anItem);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anItem:anItem},globals.MKListController)})},
args: ["anItem"],
source: "selectItem: anItem\x0a\x09self \x0a\x09\x09performAspectAction: self view selectionAspect \x0a\x09\x09with: anItem",
messageSends: ["performAspectAction:with:", "selectionAspect", "view"],
referencedClasses: []
}),
globals.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "upRepeater",
protocol: 'accessing',
fn: function (){
var self=this;
function $MKRepeater(){return globals.MKRepeater||(typeof MKRepeater=="undefined"?nil:MKRepeater)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@upRepeater"];
if(($receiver = $2) == nil || $receiver == null){
self["@upRepeater"]=_st($MKRepeater())._new();
$1=self["@upRepeater"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"upRepeater",{},globals.MKListController)})},
args: [],
source: "upRepeater\x0a\x09^ upRepeater ifNil: [ upRepeater := MKRepeater new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["MKRepeater"]
}),
globals.MKListController);



smalltalk.addClass('MKDropdownListController', globals.MKListController, [], 'Moka-Controllers');
globals.MKDropdownListController.comment="I am the default controller for `MKDropdownView`'s popup list.";
smalltalk.addMethod(
smalltalk.method({
selector: "activateItem:",
protocol: 'actions',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._view())._activateItem_(anItem);
return self}, function($ctx1) {$ctx1.fill(self,"activateItem:",{anItem:anItem},globals.MKDropdownListController)})},
args: ["anItem"],
source: "activateItem: anItem\x0a\x09\x22Select the list item in the view.\x0a\x09No change is done to the model\x22\x0a\x09\x0a\x09self view activateItem: anItem",
messageSends: ["activateItem:", "view"],
referencedClasses: []
}),
globals.MKDropdownListController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
globals.MKDropdownListController.superclass.fn.prototype._onKeyDown_.apply(_st(self), [anEvent]);
$1=_st(_st(anEvent)._keyCode()).__eq(_st(_st($String())._cr())._asciiValue());
if(smalltalk.assert($1)){
self._selectItem_(_st(self._view())._activeItem());
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},globals.MKDropdownListController)})},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09super onKeyDown: anEvent.\x0a\x09\x0a\x09anEvent keyCode = String cr asciiValue ifTrue: [\x0a\x09\x09self selectItem: self view activeItem ]",
messageSends: ["onKeyDown:", "ifTrue:", "=", "keyCode", "asciiValue", "cr", "selectItem:", "activeItem", "view"],
referencedClasses: ["String"]
}),
globals.MKDropdownListController);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseMove:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self._upRepeater())._isRepeating();
$ctx1.sendIdx["isRepeating"]=1;
$1=_st($2)._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._downRepeater())._isRepeating();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
return self;
};
self._activateItem_(self._itemForTarget_(_st(anEvent)._target()));
return self}, function($ctx1) {$ctx1.fill(self,"onMouseMove:",{anEvent:anEvent},globals.MKDropdownListController)})},
args: ["anEvent"],
source: "onMouseMove: anEvent\x0a\x09(self upRepeater isRepeating or: [ self downRepeater isRepeating ])\x0a\x09\x09ifTrue: [ ^ self ].\x0a\x09\x09\x0a\x09self activateItem: (self itemForTarget: anEvent target)",
messageSends: ["ifTrue:", "or:", "isRepeating", "upRepeater", "downRepeater", "activateItem:", "itemForTarget:", "target"],
referencedClasses: []
}),
globals.MKDropdownListController);



smalltalk.addClass('MKModalController', globals.MKSingleAspectController, [], 'Moka-Controllers');
globals.MKModalController.comment="I am the default controller for `MKModalDecorator`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._view())._closeOnClick();
if(smalltalk.assert($1)){
self._removeView();
};
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{anEvent:anEvent},globals.MKModalController)})},
args: ["anEvent"],
source: "onClick: anEvent\x0a\x09self view closeOnClick ifTrue: [ self removeView ]",
messageSends: ["ifTrue:", "closeOnClick", "view", "removeView"],
referencedClasses: []
}),
globals.MKModalController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5;
$1=_st(self._view())._closeOnEnter();
if(smalltalk.assert($1)){
$3=_st(anEvent)._keyCode();
$ctx1.sendIdx["keyCode"]=1;
$2=_st($3).__eq(_st(_st($String())._cr())._asciiValue());
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($2)){
self._removeView();
$ctx1.sendIdx["removeView"]=1;
_st(anEvent)._stopPropagation();
$4=_st(anEvent)._preventDefault();
$4;
};
};
$5=_st(_st(anEvent)._keyCode()).__eq((27));
if(smalltalk.assert($5)){
self._removeView();
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},globals.MKModalController)})},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09self view closeOnEnter ifTrue: [\x0a\x09\x09anEvent keyCode = String cr asciiValue ifTrue: [\x0a\x09\x09\x09self removeView.\x0a\x09\x09\x09anEvent \x0a\x09\x09\x09\x09stopPropagation;\x0a\x09\x09\x09\x09preventDefault ] ].\x0a\x09\x0a\x09\x22ESC\x22\x0a\x09anEvent keyCode = 27 ifTrue: [\x0a\x09\x09self removeView ]",
messageSends: ["ifTrue:", "closeOnEnter", "view", "=", "keyCode", "asciiValue", "cr", "removeView", "stopPropagation", "preventDefault"],
referencedClasses: ["String"]
}),
globals.MKModalController);

smalltalk.addMethod(
smalltalk.method({
selector: "removeView",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._view())._overlay())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeView",{},globals.MKModalController)})},
args: [],
source: "removeView\x0a\x09self view overlay remove",
messageSends: ["remove", "overlay", "view"],
referencedClasses: []
}),
globals.MKModalController);



smalltalk.addClass('MKOverlayController', globals.MKSingleAspectController, [], 'Moka-Controllers');
globals.MKOverlayController.comment="I am the default controller for `MKOverlayView`.\x0a\x0aOn a click to the overlay, it is removed together with it's content view.";
smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._view())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{anEvent:anEvent},globals.MKOverlayController)})},
args: ["anEvent"],
source: "onClick: anEvent\x0a\x09self view remove",
messageSends: ["remove", "view"],
referencedClasses: []
}),
globals.MKOverlayController);



smalltalk.addClass('MKRepeater', globals.Object, ['repeatInterval', 'interval', 'delay'], 'Moka-Controllers');
globals.MKRepeater.comment="I am an internal class used by controllers to repeat block actions after a `delay` and with an `interval`.";
smalltalk.addMethod(
smalltalk.method({
selector: "defaultRepeatInterval",
protocol: 'defaults',
fn: function (){
var self=this;
return (70);
},
args: [],
source: "defaultRepeatInterval\x0a\x09^ 70",
messageSends: [],
referencedClasses: []
}),
globals.MKRepeater);

smalltalk.addMethod(
smalltalk.method({
selector: "isRepeating",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@delay"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRepeating",{},globals.MKRepeater)})},
args: [],
source: "isRepeating\x0a\x09^ delay notNil",
messageSends: ["notNil"],
referencedClasses: []
}),
globals.MKRepeater);

smalltalk.addMethod(
smalltalk.method({
selector: "repeat:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isRepeating();
if(smalltalk.assert($1)){
return self;
};
_st(aBlock)._value();
self["@delay"]=_st((function(){
return smalltalk.withContext(function($ctx2) {
self["@interval"]=_st(aBlock)._valueWithInterval_(self._repeatInterval());
return self["@interval"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))._valueWithTimeout_((300));
return self}, function($ctx1) {$ctx1.fill(self,"repeat:",{aBlock:aBlock},globals.MKRepeater)})},
args: ["aBlock"],
source: "repeat: aBlock\x0a\x09self isRepeating ifTrue: [ ^ self ].\x0a\x09aBlock value.\x0a\x09delay := [ interval := aBlock valueWithInterval: self repeatInterval ] \x0a\x09\x09valueWithTimeout: 300",
messageSends: ["ifTrue:", "isRepeating", "value", "valueWithTimeout:", "valueWithInterval:", "repeatInterval"],
referencedClasses: []
}),
globals.MKRepeater);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatInterval",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@repeatInterval"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultRepeatInterval();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"repeatInterval",{},globals.MKRepeater)})},
args: [],
source: "repeatInterval\x0a\x09^ repeatInterval ifNil: [ self defaultRepeatInterval ]",
messageSends: ["ifNil:", "defaultRepeatInterval"],
referencedClasses: []
}),
globals.MKRepeater);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatInterval:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@repeatInterval"]=aNumber;
return self},
args: ["aNumber"],
source: "repeatInterval: aNumber\x0a\x09repeatInterval := aNumber",
messageSends: [],
referencedClasses: []
}),
globals.MKRepeater);

smalltalk.addMethod(
smalltalk.method({
selector: "stopRepeating",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@interval"];
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(self["@interval"])._clearInterval();
};
$2=self["@delay"];
if(($receiver = $2) == nil || $receiver == null){
$2;
} else {
_st(self["@delay"])._clearTimeout();
};
self["@delay"]=nil;
self["@interval"]=self["@delay"];
return self}, function($ctx1) {$ctx1.fill(self,"stopRepeating",{},globals.MKRepeater)})},
args: [],
source: "stopRepeating\x0a\x09interval ifNotNil: [ interval clearInterval ].\x0a\x09delay ifNotNil: [ delay clearTimeout ].\x0a\x09interval := delay := nil",
messageSends: ["ifNotNil:", "clearInterval", "clearTimeout"],
referencedClasses: []
}),
globals.MKRepeater);



smalltalk.addClass('MKScrollController', globals.MKController, [], 'Moka-Controllers');
globals.MKScrollController.comment="I am the default controller for `MKScrollDecorator`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onDecoratedScroll",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._view())._updateScrollbarsPosition();
return self}, function($ctx1) {$ctx1.fill(self,"onDecoratedScroll",{},globals.MKScrollController)})},
args: [],
source: "onDecoratedScroll\x0a\x09self view updateScrollbarsPosition",
messageSends: ["updateScrollbarsPosition", "view"],
referencedClasses: []
}),
globals.MKScrollController);

smalltalk.addMethod(
smalltalk.method({
selector: "onHorizontalDrag:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=self._view();
$ctx1.sendIdx["view"]=1;
$3=_st($4)._decorated();
$2=_st($3)._asJQuery();
$1=_st($2)._get_((0));
_st($1)._at_put_("scrollLeft",_st(_st(self._view())._domScrollPosition())._x());
return self}, function($ctx1) {$ctx1.fill(self,"onHorizontalDrag:",{anEvent:anEvent},globals.MKScrollController)})},
args: ["anEvent"],
source: "onHorizontalDrag: anEvent\x0a\x09(self view decorated asJQuery get: 0) at: 'scrollLeft' put: self view domScrollPosition x",
messageSends: ["at:put:", "get:", "asJQuery", "decorated", "view", "x", "domScrollPosition"],
referencedClasses: []
}),
globals.MKScrollController);

smalltalk.addMethod(
smalltalk.method({
selector: "onMousewheel:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4,$6,$5;
$2=_st(anEvent)._deltaY();
$ctx1.sendIdx["deltaY"]=1;
$1=_st($2).__tild_eq((0));
$ctx1.sendIdx["~="]=1;
if(smalltalk.assert($1)){
$3=self._view();
$ctx1.sendIdx["view"]=1;
$4=_st(_st(anEvent)._deltaY()).__star((10));
$ctx1.sendIdx["*"]=1;
_st($3)._scrollDeltaY_($4);
};
$6=_st(anEvent)._deltaX();
$ctx1.sendIdx["deltaX"]=1;
$5=_st($6).__tild_eq((0));
if(smalltalk.assert($5)){
_st(self._view())._scrollDeltaX_(_st(_st(anEvent)._deltaX()).__star((10)));
};
return self}, function($ctx1) {$ctx1.fill(self,"onMousewheel:",{anEvent:anEvent},globals.MKScrollController)})},
args: ["anEvent"],
source: "onMousewheel: anEvent\x0a\x09anEvent deltaY ~= 0 ifTrue: [\x0a\x09\x09self view scrollDeltaY: anEvent deltaY * 10 ].\x0a\x09\x0a\x09anEvent deltaX ~= 0 ifTrue: [\x0a\x09\x09self view scrollDeltaX: anEvent deltaX * 10 ]",
messageSends: ["ifTrue:", "~=", "deltaY", "scrollDeltaY:", "view", "*", "deltaX", "scrollDeltaX:"],
referencedClasses: []
}),
globals.MKScrollController);

smalltalk.addMethod(
smalltalk.method({
selector: "onResize",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._view())._resized();
return self}, function($ctx1) {$ctx1.fill(self,"onResize",{},globals.MKScrollController)})},
args: [],
source: "onResize\x0a\x09self view resized",
messageSends: ["resized", "view"],
referencedClasses: []
}),
globals.MKScrollController);

smalltalk.addMethod(
smalltalk.method({
selector: "onVerticalDrag:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=self._view();
$ctx1.sendIdx["view"]=1;
$3=_st($4)._decorated();
$2=_st($3)._asJQuery();
$1=_st($2)._get_((0));
_st($1)._at_put_("scrollTop",_st(_st(self._view())._domScrollPosition())._y());
return self}, function($ctx1) {$ctx1.fill(self,"onVerticalDrag:",{anEvent:anEvent},globals.MKScrollController)})},
args: ["anEvent"],
source: "onVerticalDrag: anEvent\x0a\x09(self view decorated asJQuery get: 0) at: 'scrollTop' put: self view domScrollPosition y",
messageSends: ["at:put:", "get:", "asJQuery", "decorated", "view", "y", "domScrollPosition"],
referencedClasses: []
}),
globals.MKScrollController);



smalltalk.addClass('MKSplitController', globals.MKController, [], 'Moka-Controllers');
globals.MKSplitController.comment="I am the abstract controller for `MKSplitView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onResize:helper:",
protocol: 'actions',
fn: function (anEvent,aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._placeSplitter_(self._positionForSplitter_(aJQuery));
return self}, function($ctx1) {$ctx1.fill(self,"onResize:helper:",{anEvent:anEvent,aJQuery:aJQuery},globals.MKSplitController)})},
args: ["anEvent", "aJQuery"],
source: "onResize: anEvent helper: aJQuery\x0a\x09self placeSplitter: (self positionForSplitter: aJQuery)",
messageSends: ["placeSplitter:", "positionForSplitter:"],
referencedClasses: []
}),
globals.MKSplitController);

smalltalk.addMethod(
smalltalk.method({
selector: "placeSplitter:",
protocol: 'actions',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"placeSplitter:",{aJQuery:aJQuery},globals.MKSplitController)})},
args: ["aJQuery"],
source: "placeSplitter: aJQuery\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.MKSplitController);

smalltalk.addMethod(
smalltalk.method({
selector: "positionForSplitter:",
protocol: 'private',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionForSplitter:",{aJQuery:aJQuery},globals.MKSplitController)})},
args: ["aJQuery"],
source: "positionForSplitter: aJQuery\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.MKSplitController);



smalltalk.addClass('MKBottomFixedVerticalSplitController', globals.MKSplitController, [], 'Moka-Controllers');
globals.MKBottomFixedVerticalSplitController.comment="I am an alternative controller for `MKVerticalSplitView`.\x0a\x0aWhen the splitter is moved, the second view is set a fixed size, thus resizing will preserve the height of the second view, while the first view will be resized.";
smalltalk.addMethod(
smalltalk.method({
selector: "placeSplitter:",
protocol: 'actions',
fn: function (aNumber){
var self=this;
var splitter;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$5,$4,$3,$6,$7,$8,$9,$11,$12,$10;
$2=self._view();
$ctx1.sendIdx["view"]=1;
$1=_st($2)._splitter();
splitter=_st($1)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$5=self._view();
$ctx1.sendIdx["view"]=2;
$4=_st($5)._secondView();
$3=_st($4)._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
$6=$3;
$7=_st(aNumber)._asMokaCssString();
$ctx1.sendIdx["asMokaCssString"]=1;
_st($6)._css_put_("height",$7);
$ctx1.sendIdx["css:put:"]=1;
$8=_st($3)._css_put_("bottom",(0));
$ctx1.sendIdx["css:put:"]=2;
$9=splitter;
_st($9)._css_put_("top","auto");
$ctx1.sendIdx["css:put:"]=3;
$11=$9;
$12=_st(_st(aNumber).__minus(_st(splitter)._height()))._asMokaCssString();
$ctx1.sendIdx["asMokaCssString"]=2;
$10=_st($11)._css_put_("bottom",$12);
$ctx1.sendIdx["css:put:"]=4;
_st(_st(_st(self._view())._firstView())._asJQuery())._css_put_("bottom",_st(aNumber)._asMokaCssString());
return self}, function($ctx1) {$ctx1.fill(self,"placeSplitter:",{aNumber:aNumber,splitter:splitter},globals.MKBottomFixedVerticalSplitController)})},
args: ["aNumber"],
source: "placeSplitter: aNumber\x0a\x09| splitter |\x0a\x09splitter := self view splitter asJQuery.\x0a\x09self view secondView asJQuery \x0a\x09\x09css: 'height' put: aNumber asMokaCssString;\x0a\x09\x09css: 'bottom' put: 0.\x0a\x09splitter \x0a\x09\x09css: 'top' put: 'auto';\x0a\x09\x09css: 'bottom' put: (aNumber - splitter height) asMokaCssString.\x0a\x09self view firstView asJQuery css: 'bottom' put: aNumber asMokaCssString",
messageSends: ["asJQuery", "splitter", "view", "css:put:", "secondView", "asMokaCssString", "-", "height", "firstView"],
referencedClasses: []
}),
globals.MKBottomFixedVerticalSplitController);

smalltalk.addMethod(
smalltalk.method({
selector: "positionForSplitter:",
protocol: 'private',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $6,$5,$4,$3,$8,$7,$2,$12,$11,$10,$9,$1;
$6=self._view();
$ctx1.sendIdx["view"]=1;
$5=_st($6)._domSize();
$ctx1.sendIdx["domSize"]=1;
$4=_st($5)._y();
$ctx1.sendIdx["y"]=1;
$3=_st($4).__minus(_st(_st(aJQuery)._position())._top());
$ctx1.sendIdx["-"]=1;
$8=self._view();
$ctx1.sendIdx["view"]=2;
$7=_st($8)._minimumThickness();
$ctx1.sendIdx["minimumThickness"]=1;
$2=_st($3)._max_($7);
$12=self._view();
$ctx1.sendIdx["view"]=3;
$11=_st($12)._domSize();
$10=_st($11)._y();
$9=_st($10).__minus(_st(self._view())._minimumThickness());
$1=_st($2)._min_($9);
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionForSplitter:",{aJQuery:aJQuery},globals.MKBottomFixedVerticalSplitController)})},
args: ["aJQuery"],
source: "positionForSplitter: aJQuery\x0a\x09^ ((self view domSize y - aJQuery position top) \x0a\x09\x09max: self view minimumThickness) min: (self view domSize y - self view minimumThickness)",
messageSends: ["min:", "max:", "-", "y", "domSize", "view", "top", "position", "minimumThickness"],
referencedClasses: []
}),
globals.MKBottomFixedVerticalSplitController);



smalltalk.addClass('MKLeftFixedHorizontalSplitController', globals.MKSplitController, [], 'Moka-Controllers');
globals.MKLeftFixedHorizontalSplitController.comment="I am the controller for `MKHorizontalSplitView`.\x0a\x0aWhen the splitter is moved, the left view is set a fixed size, thus resizing will preserve the width of the first view, while the second view will be resized.";
smalltalk.addMethod(
smalltalk.method({
selector: "placeSplitter:",
protocol: 'actions',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4,$7,$6,$5,$8;
$3=self._view();
$ctx1.sendIdx["view"]=1;
$2=_st($3)._firstView();
$1=_st($2)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$4=_st(aNumber)._asMokaCssString();
$ctx1.sendIdx["asMokaCssString"]=1;
_st($1)._css_put_("width",$4);
$ctx1.sendIdx["css:put:"]=1;
$7=self._view();
$ctx1.sendIdx["view"]=2;
$6=_st($7)._splitter();
$5=_st($6)._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
$8=_st(aNumber)._asMokaCssString();
$ctx1.sendIdx["asMokaCssString"]=2;
_st($5)._css_put_("left",$8);
$ctx1.sendIdx["css:put:"]=2;
_st(_st(_st(self._view())._secondView())._asJQuery())._css_put_("left",_st(aNumber)._asMokaCssString());
return self}, function($ctx1) {$ctx1.fill(self,"placeSplitter:",{aNumber:aNumber},globals.MKLeftFixedHorizontalSplitController)})},
args: ["aNumber"],
source: "placeSplitter: aNumber\x0a\x09self view firstView asJQuery css: 'width' put: aNumber asMokaCssString.\x0a\x09self view splitter asJQuery css: 'left' put: aNumber asMokaCssString.\x0a\x09self view secondView asJQuery css: 'left' put: aNumber asMokaCssString",
messageSends: ["css:put:", "asJQuery", "firstView", "view", "asMokaCssString", "splitter", "secondView"],
referencedClasses: []
}),
globals.MKLeftFixedHorizontalSplitController);

smalltalk.addMethod(
smalltalk.method({
selector: "positionForSplitter:",
protocol: 'private',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$5,$4,$2,$9,$8,$7,$6,$1;
$3=_st(_st(aJQuery)._position())._left();
$5=self._view();
$ctx1.sendIdx["view"]=1;
$4=_st($5)._minimumThickness();
$ctx1.sendIdx["minimumThickness"]=1;
$2=_st($3)._max_($4);
$9=self._view();
$ctx1.sendIdx["view"]=2;
$8=_st($9)._domSize();
$7=_st($8)._x();
$6=_st($7).__minus(_st(self._view())._minimumThickness());
$1=_st($2)._min_($6);
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionForSplitter:",{aJQuery:aJQuery},globals.MKLeftFixedHorizontalSplitController)})},
args: ["aJQuery"],
source: "positionForSplitter: aJQuery\x0a\x09^ (aJQuery position left max: self view minimumThickness)\x0a\x09\x09min: (self view domSize x - self view minimumThickness)",
messageSends: ["min:", "max:", "left", "position", "minimumThickness", "view", "-", "x", "domSize"],
referencedClasses: []
}),
globals.MKLeftFixedHorizontalSplitController);



smalltalk.addClass('MKRightFixedHorizontalSplitController', globals.MKSplitController, [], 'Moka-Controllers');
globals.MKRightFixedHorizontalSplitController.comment="I am an alternative controller for `MKHorizontalSplitView`.\x0a\x0aWhen the splitter is moved, the second view is set a fixed size, thus resizing will preserve the width of the second view, while the first view will be resized.";
smalltalk.addMethod(
smalltalk.method({
selector: "placeSplitter:",
protocol: 'actions',
fn: function (aNumber){
var self=this;
var splitter;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$5,$4,$3,$6,$7,$8,$9,$11,$12,$10;
$2=self._view();
$ctx1.sendIdx["view"]=1;
$1=_st($2)._splitter();
splitter=_st($1)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$5=self._view();
$ctx1.sendIdx["view"]=2;
$4=_st($5)._secondView();
$3=_st($4)._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
$6=$3;
$7=_st(aNumber)._asMokaCssString();
$ctx1.sendIdx["asMokaCssString"]=1;
_st($6)._css_put_("width",$7);
$ctx1.sendIdx["css:put:"]=1;
$8=_st($3)._css_put_("right",(0));
$ctx1.sendIdx["css:put:"]=2;
$9=splitter;
_st($9)._css_put_("left","auto");
$ctx1.sendIdx["css:put:"]=3;
$11=$9;
$12=_st(_st(aNumber).__minus(_st(splitter)._width()))._asMokaCssString();
$ctx1.sendIdx["asMokaCssString"]=2;
$10=_st($11)._css_put_("right",$12);
$ctx1.sendIdx["css:put:"]=4;
_st(_st(_st(self._view())._firstView())._asJQuery())._css_put_("right",_st(aNumber)._asMokaCssString());
return self}, function($ctx1) {$ctx1.fill(self,"placeSplitter:",{aNumber:aNumber,splitter:splitter},globals.MKRightFixedHorizontalSplitController)})},
args: ["aNumber"],
source: "placeSplitter: aNumber\x0a\x09| splitter |\x0a\x09splitter := self view splitter asJQuery.\x0a\x09self view secondView asJQuery \x0a\x09\x09css: 'width' put: aNumber asMokaCssString;\x0a\x09\x09css: 'right' put: 0.\x0a\x09splitter \x0a\x09\x09css: 'left' put: 'auto';\x0a\x09\x09css: 'right' put: (aNumber - splitter width) asMokaCssString.\x0a\x09self view firstView asJQuery css: 'right' put: aNumber asMokaCssString",
messageSends: ["asJQuery", "splitter", "view", "css:put:", "secondView", "asMokaCssString", "-", "width", "firstView"],
referencedClasses: []
}),
globals.MKRightFixedHorizontalSplitController);

smalltalk.addMethod(
smalltalk.method({
selector: "positionForSplitter:",
protocol: 'private',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $6,$5,$4,$3,$8,$7,$2,$12,$11,$10,$9,$1;
$6=self._view();
$ctx1.sendIdx["view"]=1;
$5=_st($6)._domSize();
$ctx1.sendIdx["domSize"]=1;
$4=_st($5)._x();
$ctx1.sendIdx["x"]=1;
$3=_st($4).__minus(_st(_st(aJQuery)._position())._left());
$ctx1.sendIdx["-"]=1;
$8=self._view();
$ctx1.sendIdx["view"]=2;
$7=_st($8)._minimumThickness();
$ctx1.sendIdx["minimumThickness"]=1;
$2=_st($3)._max_($7);
$12=self._view();
$ctx1.sendIdx["view"]=3;
$11=_st($12)._domSize();
$10=_st($11)._x();
$9=_st($10).__minus(_st(self._view())._minimumThickness());
$1=_st($2)._min_($9);
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionForSplitter:",{aJQuery:aJQuery},globals.MKRightFixedHorizontalSplitController)})},
args: ["aJQuery"],
source: "positionForSplitter: aJQuery\x0a\x09^ ((self view domSize x - aJQuery position left)\x0a\x09\x09max: self view minimumThickness)\x0a\x09\x09\x09min: (self view domSize x - self view minimumThickness)",
messageSends: ["min:", "max:", "-", "x", "domSize", "view", "left", "position", "minimumThickness"],
referencedClasses: []
}),
globals.MKRightFixedHorizontalSplitController);



smalltalk.addClass('MKTopFixedVerticalSplitController', globals.MKSplitController, [], 'Moka-Controllers');
globals.MKTopFixedVerticalSplitController.comment="I am the controller for `MKVerticalSplitView`.\x0a\x0aWhen the splitter is moved, the top view is set a fixed size, thus resizing will preserve the height of the first view, while the second view will be resized.";
smalltalk.addMethod(
smalltalk.method({
selector: "placeSplitter:",
protocol: 'actions',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4,$7,$6,$5,$8;
$3=self._view();
$ctx1.sendIdx["view"]=1;
$2=_st($3)._firstView();
$1=_st($2)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$4=_st(aNumber)._asMokaCssString();
$ctx1.sendIdx["asMokaCssString"]=1;
_st($1)._css_put_("height",$4);
$ctx1.sendIdx["css:put:"]=1;
$7=self._view();
$ctx1.sendIdx["view"]=2;
$6=_st($7)._splitter();
$5=_st($6)._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
$8=_st(aNumber)._asMokaCssString();
$ctx1.sendIdx["asMokaCssString"]=2;
_st($5)._css_put_("top",$8);
$ctx1.sendIdx["css:put:"]=2;
_st(_st(_st(self._view())._secondView())._asJQuery())._css_put_("top",_st(aNumber)._asMokaCssString());
return self}, function($ctx1) {$ctx1.fill(self,"placeSplitter:",{aNumber:aNumber},globals.MKTopFixedVerticalSplitController)})},
args: ["aNumber"],
source: "placeSplitter: aNumber\x0a\x09self view firstView asJQuery css: 'height' put: aNumber asMokaCssString.\x0a\x09self view splitter asJQuery css: 'top' put: aNumber asMokaCssString.\x0a\x09self view secondView asJQuery css: 'top' put: aNumber asMokaCssString",
messageSends: ["css:put:", "asJQuery", "firstView", "view", "asMokaCssString", "splitter", "secondView"],
referencedClasses: []
}),
globals.MKTopFixedVerticalSplitController);

smalltalk.addMethod(
smalltalk.method({
selector: "positionForSplitter:",
protocol: 'private',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$5,$4,$2,$9,$8,$7,$6,$1;
$3=_st(_st(aJQuery)._position())._top();
$5=self._view();
$ctx1.sendIdx["view"]=1;
$4=_st($5)._minimumThickness();
$ctx1.sendIdx["minimumThickness"]=1;
$2=_st($3)._max_($4);
$9=self._view();
$ctx1.sendIdx["view"]=2;
$8=_st($9)._domSize();
$7=_st($8)._y();
$6=_st($7).__minus(_st(self._view())._minimumThickness());
$1=_st($2)._min_($6);
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionForSplitter:",{aJQuery:aJQuery},globals.MKTopFixedVerticalSplitController)})},
args: ["aJQuery"],
source: "positionForSplitter: aJQuery\x0a\x09^ (aJQuery position top max: self view minimumThickness)\x0a\x09\x09min: (self view domSize y - self view minimumThickness)",
messageSends: ["min:", "max:", "top", "position", "minimumThickness", "view", "-", "y", "domSize"],
referencedClasses: []
}),
globals.MKTopFixedVerticalSplitController);


});
