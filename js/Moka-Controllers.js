define("amber_core/Moka-Controllers", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Moka-Core", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Controllers');
smalltalk.packages["Moka-Controllers"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKAnyKeyInputController', smalltalk.MKSingleAspectController, ['lastValue'], 'Moka-Controllers');
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
selector: "onKeyUp:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setNewValue();
return self}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{anEvent:anEvent},smalltalk.MKAnyKeyInputController)})},
args: ["anEvent"],
source: "onKeyUp: anEvent\x0a\x09self setNewValue",
messageSends: ["setNewValue"],
referencedClasses: []
}),
smalltalk.MKAnyKeyInputController);

smalltalk.addMethod(
smalltalk.method({
selector: "setNewValue",
category: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"setNewValue",{newValue:newValue},smalltalk.MKAnyKeyInputController)})},
args: [],
source: "setNewValue\x0a\x09| newValue |\x0a\x09\x0a\x09newValue := self inputText.\x0a\x09newValue = lastValue ifTrue: [ ^ self ].\x0a\x09\x0a\x09lastValue := newValue.\x0a\x09self performAspectActionWith: newValue",
messageSends: ["inputText", "ifTrue:", "=", "performAspectActionWith:"],
referencedClasses: []
}),
smalltalk.MKAnyKeyInputController);



smalltalk.addClass('MKEnterInputController', smalltalk.MKAnyKeyInputController, [], 'Moka-Controllers');
smalltalk.MKEnterInputController.comment="I am the default controller for `MKInputView`. \x0aActions are performed on 'enter' key press.";
smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
category: 'actions',
fn: function (anEvent){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEvent)._keyCode()).__eq(_st(_st($String())._cr())._asciiValue());
if(smalltalk.assert($1)){
self._setNewValue();
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},smalltalk.MKEnterInputController)})},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09anEvent keyCode = String cr asciiValue ifTrue: [\x0a\x09\x09self setNewValue ]",
messageSends: ["ifTrue:", "=", "keyCode", "asciiValue", "cr", "setNewValue"],
referencedClasses: ["String"]
}),
smalltalk.MKEnterInputController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyUp:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{anEvent:anEvent},smalltalk.MKEnterInputController)})},
args: ["anEvent"],
source: "onKeyUp: anEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKEnterInputController);



smalltalk.addClass('MKButtonController', smalltalk.MKSingleAspectController, [], 'Moka-Controllers');
smalltalk.MKButtonController.comment="I am the default controller for `MKButtonView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._performAspectAction();
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{anEvent:anEvent},smalltalk.MKButtonController)})},
args: ["anEvent"],
source: "onClick: anEvent\x0a\x09self performAspectAction",
messageSends: ["performAspectAction"],
referencedClasses: []
}),
smalltalk.MKButtonController);



smalltalk.addClass('MKCheckboxController', smalltalk.MKSingleAspectController, [], 'Moka-Controllers');
smalltalk.MKCheckboxController.comment="I am the default controller for `MKCheckboxView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._toggle();
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{anEvent:anEvent},smalltalk.MKCheckboxController)})},
args: ["anEvent"],
source: "onClick: anEvent\x0a\x09self toggle",
messageSends: ["toggle"],
referencedClasses: []
}),
smalltalk.MKCheckboxController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anEvent)._stopPropagation();
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},smalltalk.MKCheckboxController)})},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09\x22Avoid scrolling in scrollable views\x22\x0a\x09\x0a\x09anEvent stopPropagation",
messageSends: ["stopPropagation"],
referencedClasses: []
}),
smalltalk.MKCheckboxController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyPress:",
category: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"onKeyPress:",{anEvent:anEvent},smalltalk.MKCheckboxController)})},
args: ["anEvent"],
source: "onKeyPress: anEvent\x0a\x09anEvent charCode = ' ' asciiValue ifTrue: [ \x0a\x09\x09self toggle.\x0a\x09\x09anEvent stopPropagation; preventDefault ]",
messageSends: ["ifTrue:", "=", "charCode", "asciiValue", "toggle", "stopPropagation", "preventDefault"],
referencedClasses: []
}),
smalltalk.MKCheckboxController);

smalltalk.addMethod(
smalltalk.method({
selector: "toggle",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._performAspectActionWith_(_st(_st(self._view())._checked())._not());
return self}, function($ctx1) {$ctx1.fill(self,"toggle",{},smalltalk.MKCheckboxController)})},
args: [],
source: "toggle\x0a\x09self performAspectActionWith: self view checked not",
messageSends: ["performAspectActionWith:", "not", "checked", "view"],
referencedClasses: []
}),
smalltalk.MKCheckboxController);



smalltalk.addClass('MKDropdownController', smalltalk.MKAspectsController, [], 'Moka-Controllers');
smalltalk.MKDropdownController.comment="I am the default controller for `MKDropdownView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._view())._popupList();
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{anEvent:anEvent},smalltalk.MKDropdownController)})},
args: ["anEvent"],
source: "onClick: anEvent\x0a\x09self view popupList",
messageSends: ["popupList", "view"],
referencedClasses: []
}),
smalltalk.MKDropdownController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
category: 'actions',
fn: function (anEvent){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEvent)._keyCode()).__eq(_st(_st($String())._cr())._asciiValue());
if(smalltalk.assert($1)){
_st(self._view())._popupList();
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},smalltalk.MKDropdownController)})},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09anEvent keyCode = String cr asciiValue ifTrue: [\x0a\x09\x09self view popupList ]",
messageSends: ["ifTrue:", "=", "keyCode", "asciiValue", "cr", "popupList", "view"],
referencedClasses: ["String"]
}),
smalltalk.MKDropdownController);



smalltalk.addClass('MKListController', smalltalk.MKAspectsController, ['downRepeater', 'upRepeater'], 'Moka-Controllers');
smalltalk.addMethod(
smalltalk.method({
selector: "activateItem:",
category: 'actions',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectItem_(anItem);
return self}, function($ctx1) {$ctx1.fill(self,"activateItem:",{anItem:anItem},smalltalk.MKListController)})},
args: ["anItem"],
source: "activateItem: anItem\x0a\x09\x22On item activation, change the model selection\x22\x0a\x09\x0a\x09self selectItem: anItem",
messageSends: ["selectItem:"],
referencedClasses: []
}),
smalltalk.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "activeItem",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._view())._activeItem();
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeItem",{},smalltalk.MKListController)})},
args: [],
source: "activeItem\x0a\x09^ self view activeItem",
messageSends: ["activeItem", "view"],
referencedClasses: []
}),
smalltalk.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._view())._collection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.MKListController)})},
args: [],
source: "collection\x0a\x09^ self view collection",
messageSends: ["collection", "view"],
referencedClasses: []
}),
smalltalk.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "downRepeater",
category: 'accessing',
fn: function (){
var self=this;
function $MKRepeater(){return smalltalk.MKRepeater||(typeof MKRepeater=="undefined"?nil:MKRepeater)}
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
}, function($ctx1) {$ctx1.fill(self,"downRepeater",{},smalltalk.MKListController)})},
args: [],
source: "downRepeater\x0a\x09^ downRepeater ifNil: [ downRepeater := MKRepeater new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["MKRepeater"]
}),
smalltalk.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "itemForTarget:",
category: 'private',
fn: function (aDOMElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._view())._findItemFor_(aDOMElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"itemForTarget:",{aDOMElement:aDOMElement},smalltalk.MKListController)})},
args: ["aDOMElement"],
source: "itemForTarget: aDOMElement\x0a\x09^ self view findItemFor: aDOMElement",
messageSends: ["findItemFor:", "view"],
referencedClasses: []
}),
smalltalk.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "nextItem",
category: 'private',
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
}, function($ctx1) {$ctx1.fill(self,"nextItem",{},smalltalk.MKListController)})},
args: [],
source: "nextItem\x0a\x09^ self collection \x0a\x09\x09at: (self collection indexOf: self activeItem) + 1\x0a\x09\x09ifAbsent: [ self collection last ]",
messageSends: ["at:ifAbsent:", "collection", "+", "indexOf:", "activeItem", "last"],
referencedClasses: []
}),
smalltalk.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectItem_(self._itemForTarget_(_st(anEvent)._target()));
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{anEvent:anEvent},smalltalk.MKListController)})},
args: ["anEvent"],
source: "onClick: anEvent\x0a\x09self selectItem: (self itemForTarget: anEvent target)",
messageSends: ["selectItem:", "itemForTarget:", "target"],
referencedClasses: []
}),
smalltalk.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
category: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},smalltalk.MKListController)})},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09\x22Down\x22\x0a\x09anEvent keyCode = 40 ifTrue: [ \x0a\x09\x09anEvent preventDefault; stopPropagation.\x0a\x09\x09self upRepeater stopRepeating.\x0a\x09\x09self downRepeater repeat: [ \x0a\x09\x09\x09self activateItem: self nextItem ] ].\x0a\x09\x22Up\x22\x0a\x09anEvent keyCode = 38 ifTrue: [ \x0a\x09\x09anEvent preventDefault; stopPropagation.\x0a\x09\x09self downRepeater stopRepeating.\x0a\x09\x09self upRepeater repeat: [ \x0a\x09\x09\x09self activateItem: self previousItem ] ].",
messageSends: ["ifTrue:", "=", "keyCode", "preventDefault", "stopPropagation", "stopRepeating", "upRepeater", "repeat:", "downRepeater", "activateItem:", "nextItem", "previousItem"],
referencedClasses: []
}),
smalltalk.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyUp:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._downRepeater())._stopRepeating();
$ctx1.sendIdx["stopRepeating"]=1;
_st(self._upRepeater())._stopRepeating();
return self}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{anEvent:anEvent},smalltalk.MKListController)})},
args: ["anEvent"],
source: "onKeyUp: anEvent\x0a\x09self downRepeater stopRepeating.\x0a\x09self upRepeater stopRepeating",
messageSends: ["stopRepeating", "downRepeater", "upRepeater"],
referencedClasses: []
}),
smalltalk.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "previousItem",
category: 'private',
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
}, function($ctx1) {$ctx1.fill(self,"previousItem",{},smalltalk.MKListController)})},
args: [],
source: "previousItem\x0a\x09^ self view collection \x0a\x09\x09at: (self view collection indexOf: self activeItem) - 1\x0a\x09\x09ifAbsent: [ self view collection first ]",
messageSends: ["at:ifAbsent:", "collection", "view", "-", "indexOf:", "activeItem", "first"],
referencedClasses: []
}),
smalltalk.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._performAspectAction_with_(_st(self._view())._selectionAspect(),anItem);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anItem:anItem},smalltalk.MKListController)})},
args: ["anItem"],
source: "selectItem: anItem\x0a\x09self \x0a\x09\x09performAspectAction: self view selectionAspect \x0a\x09\x09with: anItem",
messageSends: ["performAspectAction:with:", "selectionAspect", "view"],
referencedClasses: []
}),
smalltalk.MKListController);

smalltalk.addMethod(
smalltalk.method({
selector: "upRepeater",
category: 'accessing',
fn: function (){
var self=this;
function $MKRepeater(){return smalltalk.MKRepeater||(typeof MKRepeater=="undefined"?nil:MKRepeater)}
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
}, function($ctx1) {$ctx1.fill(self,"upRepeater",{},smalltalk.MKListController)})},
args: [],
source: "upRepeater\x0a\x09^ upRepeater ifNil: [ upRepeater := MKRepeater new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["MKRepeater"]
}),
smalltalk.MKListController);



smalltalk.addClass('MKDropdownListController', smalltalk.MKListController, [], 'Moka-Controllers');
smalltalk.addMethod(
smalltalk.method({
selector: "activateItem:",
category: 'actions',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._view())._activateItem_(anItem);
return self}, function($ctx1) {$ctx1.fill(self,"activateItem:",{anItem:anItem},smalltalk.MKDropdownListController)})},
args: ["anItem"],
source: "activateItem: anItem\x0a\x09\x22Select the list item in the view.\x0a\x09No change is done to the model\x22\x0a\x09\x0a\x09self view activateItem: anItem",
messageSends: ["activateItem:", "view"],
referencedClasses: []
}),
smalltalk.MKDropdownListController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
category: 'actions',
fn: function (anEvent){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.MKDropdownListController.superclass.fn.prototype._onKeyDown_.apply(_st(self), [anEvent]);
$1=_st(_st(anEvent)._keyCode()).__eq(_st(_st($String())._cr())._asciiValue());
if(smalltalk.assert($1)){
self._selectItem_(_st(self._view())._activeItem());
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},smalltalk.MKDropdownListController)})},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09super onKeyDown: anEvent.\x0a\x09\x0a\x09anEvent keyCode = String cr asciiValue ifTrue: [\x0a\x09\x09self selectItem: self view activeItem ]",
messageSends: ["onKeyDown:", "ifTrue:", "=", "keyCode", "asciiValue", "cr", "selectItem:", "activeItem", "view"],
referencedClasses: ["String"]
}),
smalltalk.MKDropdownListController);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseMove:",
category: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"onMouseMove:",{anEvent:anEvent},smalltalk.MKDropdownListController)})},
args: ["anEvent"],
source: "onMouseMove: anEvent\x0a\x09(self upRepeater isRepeating or: [ self downRepeater isRepeating ])\x0a\x09\x09ifTrue: [ ^ self ].\x0a\x09\x09\x0a\x09self activateItem: (self itemForTarget: anEvent target)",
messageSends: ["ifTrue:", "or:", "isRepeating", "upRepeater", "downRepeater", "activateItem:", "itemForTarget:", "target"],
referencedClasses: []
}),
smalltalk.MKDropdownListController);



smalltalk.addClass('MKModalController', smalltalk.MKSingleAspectController, [], 'Moka-Controllers');
smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._view())._closeOnClick();
if(smalltalk.assert($1)){
self._removeView();
};
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{anEvent:anEvent},smalltalk.MKModalController)})},
args: ["anEvent"],
source: "onClick: anEvent\x0a\x09self view closeOnClick ifTrue: [ self removeView ]",
messageSends: ["ifTrue:", "closeOnClick", "view", "removeView"],
referencedClasses: []
}),
smalltalk.MKModalController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
category: 'actions',
fn: function (anEvent){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
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
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},smalltalk.MKModalController)})},
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09self view closeOnEnter ifTrue: [\x0a\x09\x09anEvent keyCode = String cr asciiValue ifTrue: [\x0a\x09\x09\x09self removeView.\x0a\x09\x09\x09anEvent \x0a\x09\x09\x09\x09stopPropagation;\x0a\x09\x09\x09\x09preventDefault ] ].\x0a\x09\x0a\x09\x22ESC\x22\x0a\x09anEvent keyCode = 27 ifTrue: [\x0a\x09\x09self removeView ]",
messageSends: ["ifTrue:", "closeOnEnter", "view", "=", "keyCode", "asciiValue", "cr", "removeView", "stopPropagation", "preventDefault"],
referencedClasses: ["String"]
}),
smalltalk.MKModalController);

smalltalk.addMethod(
smalltalk.method({
selector: "removeView",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._view())._overlay())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeView",{},smalltalk.MKModalController)})},
args: [],
source: "removeView\x0a\x09self view overlay remove",
messageSends: ["remove", "overlay", "view"],
referencedClasses: []
}),
smalltalk.MKModalController);



smalltalk.addClass('MKOverlayController', smalltalk.MKSingleAspectController, [], 'Moka-Controllers');
smalltalk.MKOverlayController.comment="I am the default controller for `MKOverlayView`.\x0a\x0aOn a click to the overlay, it is removed together with it's content view.";
smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._view())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{anEvent:anEvent},smalltalk.MKOverlayController)})},
args: ["anEvent"],
source: "onClick: anEvent\x0a\x09self view remove",
messageSends: ["remove", "view"],
referencedClasses: []
}),
smalltalk.MKOverlayController);



smalltalk.addClass('MKRepeater', smalltalk.Object, ['repeatInterval', 'interval', 'delay'], 'Moka-Controllers');
smalltalk.MKRepeater.comment="I am an internal class used by controllers to repeat block actions after a `delay` and with an `interval`.";
smalltalk.addMethod(
smalltalk.method({
selector: "defaultRepeatInterval",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (70);
}, function($ctx1) {$ctx1.fill(self,"defaultRepeatInterval",{},smalltalk.MKRepeater)})},
args: [],
source: "defaultRepeatInterval\x0a\x09^ 70",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKRepeater);

smalltalk.addMethod(
smalltalk.method({
selector: "isRepeating",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@delay"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRepeating",{},smalltalk.MKRepeater)})},
args: [],
source: "isRepeating\x0a\x09^ delay notNil",
messageSends: ["notNil"],
referencedClasses: []
}),
smalltalk.MKRepeater);

smalltalk.addMethod(
smalltalk.method({
selector: "repeat:",
category: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"repeat:",{aBlock:aBlock},smalltalk.MKRepeater)})},
args: ["aBlock"],
source: "repeat: aBlock\x0a\x09self isRepeating ifTrue: [ ^ self ].\x0a\x09aBlock value.\x0a\x09delay := [ interval := aBlock valueWithInterval: self repeatInterval ] \x0a\x09\x09valueWithTimeout: 300",
messageSends: ["ifTrue:", "isRepeating", "value", "valueWithTimeout:", "valueWithInterval:", "repeatInterval"],
referencedClasses: []
}),
smalltalk.MKRepeater);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatInterval",
category: 'accessing',
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
}, function($ctx1) {$ctx1.fill(self,"repeatInterval",{},smalltalk.MKRepeater)})},
args: [],
source: "repeatInterval\x0a\x09^ repeatInterval ifNil: [ self defaultRepeatInterval ]",
messageSends: ["ifNil:", "defaultRepeatInterval"],
referencedClasses: []
}),
smalltalk.MKRepeater);

smalltalk.addMethod(
smalltalk.method({
selector: "repeatInterval:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@repeatInterval"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"repeatInterval:",{aNumber:aNumber},smalltalk.MKRepeater)})},
args: ["aNumber"],
source: "repeatInterval: aNumber\x0a\x09repeatInterval := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKRepeater);

smalltalk.addMethod(
smalltalk.method({
selector: "stopRepeating",
category: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"stopRepeating",{},smalltalk.MKRepeater)})},
args: [],
source: "stopRepeating\x0a\x09interval ifNotNil: [ interval clearInterval ].\x0a\x09delay ifNotNil: [ delay clearTimeout ].\x0a\x09interval := delay := nil",
messageSends: ["ifNotNil:", "clearInterval", "clearTimeout"],
referencedClasses: []
}),
smalltalk.MKRepeater);



smalltalk.addClass('MKScrollController', smalltalk.MKController, [], 'Moka-Controllers');
smalltalk.MKScrollController.comment="I am the default controller for `MKScrollDecorator`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onDecoratedScroll",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._view())._updateScrollbarsPosition();
return self}, function($ctx1) {$ctx1.fill(self,"onDecoratedScroll",{},smalltalk.MKScrollController)})},
args: [],
source: "onDecoratedScroll\x0a\x09self view updateScrollbarsPosition",
messageSends: ["updateScrollbarsPosition", "view"],
referencedClasses: []
}),
smalltalk.MKScrollController);

smalltalk.addMethod(
smalltalk.method({
selector: "onHorizontalDrag:",
category: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"onHorizontalDrag:",{anEvent:anEvent},smalltalk.MKScrollController)})},
args: ["anEvent"],
source: "onHorizontalDrag: anEvent\x0a\x09(self view decorated asJQuery get: 0) at: 'scrollLeft' put: self view domScrollPosition x",
messageSends: ["at:put:", "get:", "asJQuery", "decorated", "view", "x", "domScrollPosition"],
referencedClasses: []
}),
smalltalk.MKScrollController);

smalltalk.addMethod(
smalltalk.method({
selector: "onMousewheel:",
category: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"onMousewheel:",{anEvent:anEvent},smalltalk.MKScrollController)})},
args: ["anEvent"],
source: "onMousewheel: anEvent\x0a\x09anEvent deltaY ~= 0 ifTrue: [\x0a\x09\x09self view scrollDeltaY: anEvent deltaY * 10 ].\x0a\x09\x0a\x09anEvent deltaX ~= 0 ifTrue: [\x0a\x09\x09self view scrollDeltaX: anEvent deltaX * 10 ]",
messageSends: ["ifTrue:", "~=", "deltaY", "scrollDeltaY:", "view", "*", "deltaX", "scrollDeltaX:"],
referencedClasses: []
}),
smalltalk.MKScrollController);

smalltalk.addMethod(
smalltalk.method({
selector: "onResize",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._view())._resized();
return self}, function($ctx1) {$ctx1.fill(self,"onResize",{},smalltalk.MKScrollController)})},
args: [],
source: "onResize\x0a\x09self view resized",
messageSends: ["resized", "view"],
referencedClasses: []
}),
smalltalk.MKScrollController);

smalltalk.addMethod(
smalltalk.method({
selector: "onVerticalDrag:",
category: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"onVerticalDrag:",{anEvent:anEvent},smalltalk.MKScrollController)})},
args: ["anEvent"],
source: "onVerticalDrag: anEvent\x0a\x09(self view decorated asJQuery get: 0) at: 'scrollTop' put: self view domScrollPosition y",
messageSends: ["at:put:", "get:", "asJQuery", "decorated", "view", "y", "domScrollPosition"],
referencedClasses: []
}),
smalltalk.MKScrollController);



smalltalk.addClass('MKSplitController', smalltalk.MKController, [], 'Moka-Controllers');
smalltalk.MKSplitController.comment="I am the abstract controller for `MKSplitView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "onResize:helper:",
category: 'actions',
fn: function (anEvent,aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"onResize:helper:",{anEvent:anEvent,aJQuery:aJQuery},smalltalk.MKSplitController)})},
args: ["anEvent", "aJQuery"],
source: "onResize: anEvent helper: aJQuery\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.MKSplitController);



smalltalk.addClass('MKBottomFixedVerticalSplitController', smalltalk.MKSplitController, [], 'Moka-Controllers');
smalltalk.MKBottomFixedVerticalSplitController.comment="I am an alternative controller for `MKVerticalSplitView`.\x0a\x0aWhen the splitter is moved, the second view is set a fixed size, thus resizing will preserve the height of the second view, while the first view will be resized.";
smalltalk.addMethod(
smalltalk.method({
selector: "onResize:helper:",
category: 'actions',
fn: function (anEvent,aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._placeSplitter_(_st(_st(_st(self._view())._domSize())._y()).__minus(_st(_st(aJQuery)._position())._top()));
return self}, function($ctx1) {$ctx1.fill(self,"onResize:helper:",{anEvent:anEvent,aJQuery:aJQuery},smalltalk.MKBottomFixedVerticalSplitController)})},
args: ["anEvent", "aJQuery"],
source: "onResize: anEvent helper: aJQuery\x0a\x09self placeSplitter: self view domSize y - aJQuery position top",
messageSends: ["placeSplitter:", "-", "y", "domSize", "view", "top", "position"],
referencedClasses: []
}),
smalltalk.MKBottomFixedVerticalSplitController);

smalltalk.addMethod(
smalltalk.method({
selector: "placeSplitter:",
category: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"placeSplitter:",{aNumber:aNumber,splitter:splitter},smalltalk.MKBottomFixedVerticalSplitController)})},
args: ["aNumber"],
source: "placeSplitter: aNumber\x0a\x09| splitter |\x0a\x09splitter := self view splitter asJQuery.\x0a\x09self view secondView asJQuery \x0a\x09\x09css: 'height' put: aNumber asMokaCssString;\x0a\x09\x09css: 'bottom' put: 0.\x0a\x09splitter \x0a\x09\x09css: 'top' put: 'auto';\x0a\x09\x09css: 'bottom' put: (aNumber - splitter height) asMokaCssString.\x0a\x09self view firstView asJQuery css: 'bottom' put: aNumber asMokaCssString",
messageSends: ["asJQuery", "splitter", "view", "css:put:", "secondView", "asMokaCssString", "-", "height", "firstView"],
referencedClasses: []
}),
smalltalk.MKBottomFixedVerticalSplitController);



smalltalk.addClass('MKLeftFixedHorizontalSplitController', smalltalk.MKSplitController, [], 'Moka-Controllers');
smalltalk.MKLeftFixedHorizontalSplitController.comment="I am the controller for `MKHorizontalSplitView`.\x0a\x0aWhen the splitter is moved, the left view is set a fixed size, thus resizing will preserve the width of the first view, while the second view will be resized.";
smalltalk.addMethod(
smalltalk.method({
selector: "onResize:helper:",
category: 'actions',
fn: function (anEvent,aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._placeSplitter_(_st(_st(aJQuery)._position())._left());
return self}, function($ctx1) {$ctx1.fill(self,"onResize:helper:",{anEvent:anEvent,aJQuery:aJQuery},smalltalk.MKLeftFixedHorizontalSplitController)})},
args: ["anEvent", "aJQuery"],
source: "onResize: anEvent helper: aJQuery\x0a\x09self placeSplitter: aJQuery position left",
messageSends: ["placeSplitter:", "left", "position"],
referencedClasses: []
}),
smalltalk.MKLeftFixedHorizontalSplitController);

smalltalk.addMethod(
smalltalk.method({
selector: "placeSplitter:",
category: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"placeSplitter:",{aNumber:aNumber},smalltalk.MKLeftFixedHorizontalSplitController)})},
args: ["aNumber"],
source: "placeSplitter: aNumber\x0a\x09self view firstView asJQuery css: 'width' put: aNumber asMokaCssString.\x0a\x09self view splitter asJQuery css: 'left' put: aNumber asMokaCssString.\x0a\x09self view secondView asJQuery css: 'left' put: aNumber asMokaCssString",
messageSends: ["css:put:", "asJQuery", "firstView", "view", "asMokaCssString", "splitter", "secondView"],
referencedClasses: []
}),
smalltalk.MKLeftFixedHorizontalSplitController);



smalltalk.addClass('MKRightFixedHorizontalSplitController', smalltalk.MKSplitController, [], 'Moka-Controllers');
smalltalk.MKRightFixedHorizontalSplitController.comment="I am an alternative controller for `MKHorizontalSplitView`.\x0a\x0aWhen the splitter is moved, the second view is set a fixed size, thus resizing will preserve the width of the second view, while the first view will be resized.";
smalltalk.addMethod(
smalltalk.method({
selector: "onResize:helper:",
category: 'actions',
fn: function (anEvent,aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._placeSplitter_(_st(_st(_st(self._view())._domSize())._x()).__minus(_st(_st(aJQuery)._position())._left()));
return self}, function($ctx1) {$ctx1.fill(self,"onResize:helper:",{anEvent:anEvent,aJQuery:aJQuery},smalltalk.MKRightFixedHorizontalSplitController)})},
args: ["anEvent", "aJQuery"],
source: "onResize: anEvent helper: aJQuery\x0a\x09self placeSplitter: self view domSize x - aJQuery position left",
messageSends: ["placeSplitter:", "-", "x", "domSize", "view", "left", "position"],
referencedClasses: []
}),
smalltalk.MKRightFixedHorizontalSplitController);

smalltalk.addMethod(
smalltalk.method({
selector: "placeSplitter:",
category: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"placeSplitter:",{aNumber:aNumber,splitter:splitter},smalltalk.MKRightFixedHorizontalSplitController)})},
args: ["aNumber"],
source: "placeSplitter: aNumber\x0a\x09| splitter |\x0a\x09splitter := self view splitter asJQuery.\x0a\x09self view secondView asJQuery \x0a\x09\x09css: 'width' put: aNumber asMokaCssString;\x0a\x09\x09css: 'right' put: 0.\x0a\x09splitter \x0a\x09\x09css: 'left' put: 'auto';\x0a\x09\x09css: 'right' put: (aNumber - splitter width) asMokaCssString.\x0a\x09self view firstView asJQuery css: 'right' put: aNumber asMokaCssString",
messageSends: ["asJQuery", "splitter", "view", "css:put:", "secondView", "asMokaCssString", "-", "width", "firstView"],
referencedClasses: []
}),
smalltalk.MKRightFixedHorizontalSplitController);



smalltalk.addClass('MKTopFixedVerticalSplitController', smalltalk.MKSplitController, [], 'Moka-Controllers');
smalltalk.MKTopFixedVerticalSplitController.comment="I am the controller for `MKVerticalSplitView`.\x0a\x0aWhen the splitter is moved, the top view is set a fixed size, thus resizing will preserve the height of the first view, while the second view will be resized.";
smalltalk.addMethod(
smalltalk.method({
selector: "onResize:helper:",
category: 'actions',
fn: function (anEvent,aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._placeSplitter_(_st(_st(aJQuery)._position())._top());
return self}, function($ctx1) {$ctx1.fill(self,"onResize:helper:",{anEvent:anEvent,aJQuery:aJQuery},smalltalk.MKTopFixedVerticalSplitController)})},
args: ["anEvent", "aJQuery"],
source: "onResize: anEvent helper: aJQuery\x0a\x09self placeSplitter: aJQuery position top",
messageSends: ["placeSplitter:", "top", "position"],
referencedClasses: []
}),
smalltalk.MKTopFixedVerticalSplitController);

smalltalk.addMethod(
smalltalk.method({
selector: "placeSplitter:",
category: 'actions',
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
return self}, function($ctx1) {$ctx1.fill(self,"placeSplitter:",{aNumber:aNumber},smalltalk.MKTopFixedVerticalSplitController)})},
args: ["aNumber"],
source: "placeSplitter: aNumber\x0a\x09self view firstView asJQuery css: 'height' put: aNumber asMokaCssString.\x0a\x09self view splitter asJQuery css: 'top' put: aNumber asMokaCssString.\x0a\x09self view secondView asJQuery css: 'top' put: aNumber asMokaCssString",
messageSends: ["css:put:", "asJQuery", "firstView", "view", "asMokaCssString", "splitter", "secondView"],
referencedClasses: []
}),
smalltalk.MKTopFixedVerticalSplitController);


});
