define("amber_core/Moka-Core", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Core');
smalltalk.packages["Moka-Core"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKController', smalltalk.Object, ['view', 'model'], 'Moka-Core');
smalltalk.MKController.comment="I implement the Controller part of the MVC pattern in Moka.\x0a\x0aI hold onto my `model` and `view`, set with `MKView >> controller:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.MKController)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.MKController)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.MKController)})},
args: [],
source: "view\x0a\x09^ view",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
category: 'accessing',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aView;
return self}, function($ctx1) {$ctx1.fill(self,"view:",{aView:aView},smalltalk.MKController)})},
args: ["aView"],
source: "view: aView\x0a\x09view := aView",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);



smalltalk.addClass('MKAspectController', smalltalk.MKController, ['aspect'], 'Moka-Core');
smalltalk.MKAspectController.comment="I am an abstract controller for performing one action using an `aspect` on a model.\x0a\x0a## API\x0a\x0a- Use `#aspect:` to plug a selector to be performed on the model\x0a- Subclasses can either use `#performActionWith:` or `#performAction` to evaluate the `aspect` selector on the model with one or no argument.";
smalltalk.addMethod(
smalltalk.method({
selector: "aspect",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@aspect"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"aspect",{},smalltalk.MKAspectController)})},
args: [],
source: "aspect\x0a\x09^ aspect",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKAspectController);

smalltalk.addMethod(
smalltalk.method({
selector: "aspect:",
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@aspect"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"aspect:",{aSelector:aSelector},smalltalk.MKAspectController)})},
args: ["aSelector"],
source: "aspect: aSelector\x0a\x09aspect := aSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKAspectController);

smalltalk.addMethod(
smalltalk.method({
selector: "performAction",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._aspect();
$ctx1.sendIdx["aspect"]=1;
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
$2=self._model();
$3=self._aspect();
_st($2)._perform_($3);
};
return self}, function($ctx1) {$ctx1.fill(self,"performAction",{},smalltalk.MKAspectController)})},
args: [],
source: "performAction\x0a\x09self aspect ifNotNil: [\x0a\x09\x09self model \x0a\x09\x09\x09perform: self aspect ]",
messageSends: ["ifNotNil:", "aspect", "perform:", "model"],
referencedClasses: []
}),
smalltalk.MKAspectController);

smalltalk.addMethod(
smalltalk.method({
selector: "performActionWith:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._aspect();
$ctx1.sendIdx["aspect"]=1;
if(($receiver = $1) == nil || $receiver == null){
return self;
} else {
$1;
};
_st(self._model())._perform_withArguments_(_st(self._aspect())._asMutator(),[anObject]);
return self}, function($ctx1) {$ctx1.fill(self,"performActionWith:",{anObject:anObject},smalltalk.MKAspectController)})},
args: ["anObject"],
source: "performActionWith: anObject\x0a\x09self aspect ifNil: [ ^ self ].\x0a\x09\x0a\x09self model \x0a\x09\x09perform: self aspect asMutator\x0a\x09\x09withArguments: { anObject }",
messageSends: ["ifNil:", "aspect", "perform:withArguments:", "model", "asMutator"],
referencedClasses: []
}),
smalltalk.MKAspectController);



smalltalk.addClass('MKModel', smalltalk.Object, ['announcer'], 'Moka-Core');
smalltalk.MKModel.comment="I implement the Model part of the MVC pattern in Moka.\x0a\x0aI am the abstract superclass of all Moka model. The observer pattern is implemented through an `announcer` object.\x0a\x0a## API\x0a\x0a- Listening\x0a\x0a  Use `#on:do:` or `#on:send:to:` to listen to model changes\x0a\x0a- Triggering\x0a\x0a  `#changed:` is the builtin method used to trigger `#update:` in views.\x0a  Use `#announce:` in subclasses to trigger announcements to listeners.";
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'announcements',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@announcer"])._announce_(anAnnouncement);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},smalltalk.MKModel)})},
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x09announcer announce: anAnnouncement",
messageSends: ["announce:"],
referencedClasses: []
}),
smalltalk.MKModel);

smalltalk.addMethod(
smalltalk.method({
selector: "changed:",
category: 'announcements',
fn: function (aSelector){
var self=this;
function $MKModelChanged(){return smalltalk.MKModelChanged||(typeof MKModelChanged=="undefined"?nil:MKModelChanged)}
return smalltalk.withContext(function($ctx1) { 
self._announce_(_st($MKModelChanged())._aspect_(aSelector));
return self}, function($ctx1) {$ctx1.fill(self,"changed:",{aSelector:aSelector},smalltalk.MKModel)})},
args: ["aSelector"],
source: "changed: aSelector\x0a\x09\x22Trigger `#update:` to all listening aspect views\x22\x0a\x09\x0a\x09self announce: (MKModelChanged aspect: aSelector)",
messageSends: ["announce:", "aspect:"],
referencedClasses: ["MKModelChanged"]
}),
smalltalk.MKModel);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.MKModel.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@announcer"]=_st($Announcer())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MKModel)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09announcer := Announcer new",
messageSends: ["initialize", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.MKModel);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'announcements',
fn: function (anAnnouncement,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@announcer"])._on_do_(anAnnouncement,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{anAnnouncement:anAnnouncement,aBlock:aBlock},smalltalk.MKModel)})},
args: ["anAnnouncement", "aBlock"],
source: "on: anAnnouncement do: aBlock\x0a\x09announcer on: anAnnouncement do: aBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.MKModel);

smalltalk.addMethod(
smalltalk.method({
selector: "on:send:to:",
category: 'announcements',
fn: function (anAnnouncement,aSelector,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@announcer"])._on_send_to_(anAnnouncement,aSelector,anObject);
return self}, function($ctx1) {$ctx1.fill(self,"on:send:to:",{anAnnouncement:anAnnouncement,aSelector:aSelector,anObject:anObject},smalltalk.MKModel)})},
args: ["anAnnouncement", "aSelector", "anObject"],
source: "on: anAnnouncement send: aSelector to: anObject\x0a\x09announcer on: anAnnouncement send: aSelector to: anObject",
messageSends: ["on:send:to:"],
referencedClasses: []
}),
smalltalk.MKModel);



smalltalk.addClass('MKModelChanged', smalltalk.Object, ['aspect'], 'Moka-Core');
smalltalk.MKModelChanged.comment="I am an announcement announced when a model is changed.";
smalltalk.addMethod(
smalltalk.method({
selector: "aspect",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@aspect"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"aspect",{},smalltalk.MKModelChanged)})},
args: [],
source: "aspect\x0a\x09^ aspect",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKModelChanged);

smalltalk.addMethod(
smalltalk.method({
selector: "aspect:",
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@aspect"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"aspect:",{aSelector:aSelector},smalltalk.MKModelChanged)})},
args: ["aSelector"],
source: "aspect: aSelector\x0a\x09aspect := aSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKModelChanged);


smalltalk.addMethod(
smalltalk.method({
selector: "aspect:",
category: 'instance creation',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._aspect_(aSelector);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"aspect:",{aSelector:aSelector},smalltalk.MKModelChanged.klass)})},
args: ["aSelector"],
source: "aspect: aSelector\x0a\x09^ self new\x0a\x09\x09aspect: aSelector;\x0a\x09\x09yourself",
messageSends: ["aspect:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.MKModelChanged.klass);


smalltalk.addClass('MKView', smalltalk.Widget, ['controller', 'model', 'wrapper'], 'Moka-Core');
smalltalk.MKView.comment="I implement the View part of the MVC pattern in Moka.\x0a\x0a## API\x0a- Instance can be created with the `MKView class >> model:*` convenience methods\x0a- rendering is done through `#renderContentOn:`, to be overridden in concrete view classes\x0a- `#update` provide updating facility, refreshing the entire view\x0a- subclasses can override `#defaultControllerClass` to provide a default controller specific to a view\x0a- subclasses can override `#observeModel`.";
smalltalk.addMethod(
smalltalk.method({
selector: "controller",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@controller"];
if(($receiver = $1) == nil || $receiver == null){
self._controller_(self._defaultController());
} else {
$1;
};
$2=self["@controller"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"controller",{},smalltalk.MKView)})},
args: [],
source: "controller\x0a\x09\x22Answer the current receiver's controller.\x0a\x09If no controller is installed yet, install the `defaultController`\x0a\x09of the receiver and answer it.\x22\x0a\x09\x0a\x09controller ifNil: [ \x0a\x09\x09self controller: self defaultController ].\x0a\x09^ controller",
messageSends: ["ifNil:", "controller:", "defaultController"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "controller:",
category: 'accessing',
fn: function (aController){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@controller"]=aController;
$1=aController;
_st($1)._view_(self);
$2=_st($1)._model_(self._model());
return self}, function($ctx1) {$ctx1.fill(self,"controller:",{aController:aController},smalltalk.MKView)})},
args: ["aController"],
source: "controller: aController\x0a\x09\x22Install `aController` to be the receiver's controller\x22\x0a\x09\x0a\x09controller := aController.\x0a\x09aController \x0a\x09\x09view: self;\x0a\x09\x09model: self model",
messageSends: ["view:", "model:", "model"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultController",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._defaultControllerClass())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultController",{},smalltalk.MKView)})},
args: [],
source: "defaultController\x0a\x09^ self defaultControllerClass new",
messageSends: ["new", "defaultControllerClass"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKController(){return smalltalk.MKController||(typeof MKController=="undefined"?nil:MKController)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$MKController();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKController",
messageSends: [],
referencedClasses: ["MKController"]
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.MKView)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
self._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.MKView)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel.\x0a\x09self observeModel",
messageSends: ["observeModel"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
category: 'observing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.MKView)})},
args: [],
source: "observeModel\x0a\x09\x22No op. Override in subclasses\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "render",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},smalltalk.MKView)})},
args: [],
source: "render\x0a\x09\x22Append the receiver to the BODY element\x22\x0a\x09\x0a\x09self appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09\x22Main rendering method, override in subclasses.\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("moka_view");
$2=_st($1)._yourself();
self["@wrapper"]=$2;
_st(self["@wrapper"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MKView)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22Basic rendering method.\x0a\x09Wraps the content with a `wrapper` div for updating the receiver.\x0a\x09\x0a\x09Do not override this method, but `#renderContentOn:`\x22\x0a\x09\x0a\x09wrapper := html div\x0a\x09\x09class: 'moka_view';\x0a\x09\x09yourself.\x0a\x09wrapper with: [ self renderContentOn: html ]",
messageSends: ["class:", "div", "yourself", "with:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@wrapper"];
if(($receiver = $1) == nil || $receiver == null){
self._error_("The view has not been rendered yet");
} else {
$1;
};
$2=_st(self["@wrapper"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($2)._empty();
$3=(function(html){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,2)})});
$4=_st(self["@wrapper"])._asJQuery();
_st($3)._appendToJQuery_($4);
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.MKView)})},
args: [],
source: "update\x0a\x09\x22Update the view's content.\x22\x0a\x09\x0a\x09wrapper ifNil: [ self error: 'The view has not been rendered yet' ].\x0a\x09\x0a\x09wrapper asJQuery empty.\x0a\x09[ :html | self renderContentOn: html ] \x0a\x09\x09appendToJQuery: wrapper asJQuery",
messageSends: ["ifNil:", "error:", "empty", "asJQuery", "appendToJQuery:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.MKView);


smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'instance creation',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._model_(aModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.MKView.klass)})},
args: ["aModel"],
source: "model: aModel\x0a\x09^ self new\x0a\x09\x09model: aModel;\x0a\x09\x09yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.MKView.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "model:controller:",
category: 'instance creation',
fn: function (aModel,aController){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._model_(aModel);
_st($2)._controller_(aController);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"model:controller:",{aModel:aModel,aController:aController},smalltalk.MKView.klass)})},
args: ["aModel", "aController"],
source: "model: aModel controller: aController\x0a\x09^ (self model: aModel)\x0a\x09\x09controller: aController;\x0a\x09\x09yourself",
messageSends: ["controller:", "model:", "yourself"],
referencedClasses: []
}),
smalltalk.MKView.klass);


smalltalk.addClass('MKAspectView', smalltalk.MKView, ['aspect', 'label'], 'Moka-Core');
smalltalk.MKAspectView.comment="I am an abstract view which state depend on an `aspect` of a model. \x0a\x0a##API\x0a\x0a- Use the `#aspect:` to listen to a specific aspect of a model. Changes will then trigger `#update`.";
smalltalk.addMethod(
smalltalk.method({
selector: "aspect",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@aspect"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"aspect",{},smalltalk.MKAspectView)})},
args: [],
source: "aspect\x0a\x09^ aspect",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKAspectView);

smalltalk.addMethod(
smalltalk.method({
selector: "aspect:",
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@aspect"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"aspect:",{aSelector:aSelector},smalltalk.MKAspectView)})},
args: ["aSelector"],
source: "aspect: aSelector\x0a\x09aspect := aSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKAspectView);

smalltalk.addMethod(
smalltalk.method({
selector: "aspectValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._perform_(self._aspect());
return $1;
}, function($ctx1) {$ctx1.fill(self,"aspectValue",{},smalltalk.MKAspectView)})},
args: [],
source: "aspectValue\x0a\x09^ self model perform: self aspect",
messageSends: ["perform:", "model", "aspect"],
referencedClasses: []
}),
smalltalk.MKAspectView);

smalltalk.addMethod(
smalltalk.method({
selector: "controller:",
category: 'accessing',
fn: function (aController){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.MKAspectView.superclass.fn.prototype._controller_.apply(_st(self), [aController]);
_st(aController)._aspect_(self._aspect());
return self}, function($ctx1) {$ctx1.fill(self,"controller:",{aController:aController},smalltalk.MKAspectView)})},
args: ["aController"],
source: "controller: aController\x0a\x09super controller: aController.\x0a\x09aController aspect: self aspect",
messageSends: ["controller:", "aspect:", "aspect"],
referencedClasses: []
}),
smalltalk.MKAspectView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKAspectController(){return smalltalk.MKAspectController||(typeof MKAspectController=="undefined"?nil:MKAspectController)}
return smalltalk.withContext(function($ctx1) { 
return $MKAspectController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKAspectView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKAspectController",
messageSends: [],
referencedClasses: ["MKAspectController"]
}),
smalltalk.MKAspectView);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
category: 'observing',
fn: function (){
var self=this;
function $MKModelChanged(){return smalltalk.MKModelChanged||(typeof MKModelChanged=="undefined"?nil:MKModelChanged)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.MKAspectView.superclass.fn.prototype._observeModel.apply(_st(self), []);
_st(self._model())._on_send_to_($MKModelChanged(),"update:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.MKAspectView)})},
args: [],
source: "observeModel\x0a\x09super observeModel.\x0a\x09\x0a\x09self model\x0a\x09\x09on: MKModelChanged\x0a\x09\x09send: 'update:'\x0a\x09\x09to: self",
messageSends: ["observeModel", "on:send:to:", "model"],
referencedClasses: ["MKModelChanged"]
}),
smalltalk.MKAspectView);

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
category: 'updating',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(anAnnouncement)._aspect();
$ctx1.sendIdx["aspect"]=1;
$1=_st($2).__eq(self._aspect());
if(smalltalk.assert($1)){
self._update();
};
return self}, function($ctx1) {$ctx1.fill(self,"update:",{anAnnouncement:anAnnouncement},smalltalk.MKAspectView)})},
args: ["anAnnouncement"],
source: "update: anAnnouncement\x0a\x09anAnnouncement aspect = self aspect\x0a\x09\x09ifTrue: [ self update ]",
messageSends: ["ifTrue:", "=", "aspect", "update"],
referencedClasses: []
}),
smalltalk.MKAspectView);


smalltalk.addMethod(
smalltalk.method({
selector: "model:aspect:",
category: 'instance creation',
fn: function (aModel,aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._model_(aModel);
_st($2)._aspect_(aSelector);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"model:aspect:",{aModel:aModel,aSelector:aSelector},smalltalk.MKAspectView.klass)})},
args: ["aModel", "aSelector"],
source: "model: aModel aspect: aSelector\x0a\x09^ (self model: aModel)\x0a\x09\x09aspect: aSelector;\x0a\x09\x09yourself",
messageSends: ["aspect:", "model:", "yourself"],
referencedClasses: []
}),
smalltalk.MKAspectView.klass);

});
