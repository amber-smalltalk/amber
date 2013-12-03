define("amber_core/Moka-Core", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
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
selector: "onChange:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onChange:",{anEvent:anEvent},smalltalk.MKController)})},
args: ["anEvent"],
source: "onChange: anEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{anEvent:anEvent},smalltalk.MKController)})},
args: ["anEvent"],
source: "onClick: anEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "onDblClick:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onDblClick:",{anEvent:anEvent},smalltalk.MKController)})},
args: ["anEvent"],
source: "onDblClick: anEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent},smalltalk.MKController)})},
args: ["anEvent"],
source: "onKeyDown: anEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyPress:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onKeyPress:",{anEvent:anEvent},smalltalk.MKController)})},
args: ["anEvent"],
source: "onKeyPress: anEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyUp:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{anEvent:anEvent},smalltalk.MKController)})},
args: ["anEvent"],
source: "onKeyUp: anEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseEnter:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onMouseEnter:",{anEvent:anEvent},smalltalk.MKController)})},
args: ["anEvent"],
source: "onMouseEnter: anEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseLeave:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onMouseLeave:",{anEvent:anEvent},smalltalk.MKController)})},
args: ["anEvent"],
source: "onMouseLeave: anEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseMove:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onMouseMove:",{anEvent:anEvent},smalltalk.MKController)})},
args: ["anEvent"],
source: "onMouseMove: anEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseOut:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onMouseOut:",{anEvent:anEvent},smalltalk.MKController)})},
args: ["anEvent"],
source: "onMouseOut: anEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "onMouseOver:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onMouseOver:",{anEvent:anEvent},smalltalk.MKController)})},
args: ["anEvent"],
source: "onMouseOver: anEvent",
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



smalltalk.addClass('MKAspectsController', smalltalk.MKController, [], 'Moka-Core');
smalltalk.MKAspectsController.comment="I am an abstract controller for performing one action using an `aspect` on a model.\x0a\x0a## API\x0a\x0a- Use `#aspect:` to plug a selector to be performed on the model\x0a- Subclasses can either use `#performActionWith:` or `#performAction` to evaluate the `aspect` selector on the model with one or no argument.";
smalltalk.addMethod(
smalltalk.method({
selector: "performAspectAction:",
category: 'actions',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._perform_(aSelector);
return self}, function($ctx1) {$ctx1.fill(self,"performAspectAction:",{aSelector:aSelector},smalltalk.MKAspectsController)})},
args: ["aSelector"],
source: "performAspectAction: aSelector\x0a\x09self model perform: aSelector",
messageSends: ["perform:", "model"],
referencedClasses: []
}),
smalltalk.MKAspectsController);

smalltalk.addMethod(
smalltalk.method({
selector: "performAspectAction:with:",
category: 'actions',
fn: function (aSelector,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._perform_withArguments_(_st(aSelector)._asMutator(),[anObject]);
return self}, function($ctx1) {$ctx1.fill(self,"performAspectAction:with:",{aSelector:aSelector,anObject:anObject},smalltalk.MKAspectsController)})},
args: ["aSelector", "anObject"],
source: "performAspectAction: aSelector with: anObject\x0a\x09self model \x0a\x09\x09perform: aSelector asMutator\x0a\x09\x09withArguments: { anObject }",
messageSends: ["perform:withArguments:", "model", "asMutator"],
referencedClasses: []
}),
smalltalk.MKAspectsController);



smalltalk.addClass('MKSingleAspectController', smalltalk.MKAspectsController, [], 'Moka-Core');
smalltalk.MKSingleAspectController.comment="I am an abstract controller used with single aspect views.\x0a\x0aMy view must hold onto one aspect accessed with `#aspect`.";
smalltalk.addMethod(
smalltalk.method({
selector: "performAspectAction",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._performAspectAction_(_st(self._view())._aspect());
return $1;
}, function($ctx1) {$ctx1.fill(self,"performAspectAction",{},smalltalk.MKSingleAspectController)})},
args: [],
source: "performAspectAction\x0a\x09^ self performAspectAction: self view aspect",
messageSends: ["performAspectAction:", "aspect", "view"],
referencedClasses: []
}),
smalltalk.MKSingleAspectController);

smalltalk.addMethod(
smalltalk.method({
selector: "performAspectActionWith:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._performAspectAction_with_(_st(self._view())._aspect(),anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"performAspectActionWith:",{anObject:anObject},smalltalk.MKSingleAspectController)})},
args: ["anObject"],
source: "performAspectActionWith: anObject\x0a\x09^ self \x0a\x09\x09performAspectAction: self view aspect\x0a\x09\x09with: anObject",
messageSends: ["performAspectAction:with:", "aspect", "view"],
referencedClasses: []
}),
smalltalk.MKSingleAspectController);



smalltalk.addClass('MKObservable', smalltalk.Object, ['announcer'], 'Moka-Core');
smalltalk.MKObservable.comment="View models are typically subclasses of me. \x0a\x0aI implement the Observable part of the Observer pattern in Moka.\x0a\x0aThe observer pattern is implemented through an `announcer` object.\x0a\x0a## API\x0a\x0a- Listening\x0a\x0a  Use `#on:do:` or `#on:send:to:` to listen to receiver changes\x0a\x0a- Triggering\x0a\x0a  `#changed:` is the builtin method used to trigger `#update:` in views.\x0a  Use `#announce:` in subclasses to trigger announcements to listeners.";
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'announcements',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@announcer"])._announce_(anAnnouncement);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},smalltalk.MKObservable)})},
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x09announcer announce: anAnnouncement",
messageSends: ["announce:"],
referencedClasses: []
}),
smalltalk.MKObservable);

smalltalk.addMethod(
smalltalk.method({
selector: "changed:",
category: 'announcements',
fn: function (aSelector){
var self=this;
function $MKAspectChanged(){return smalltalk.MKAspectChanged||(typeof MKAspectChanged=="undefined"?nil:MKAspectChanged)}
return smalltalk.withContext(function($ctx1) { 
self._announce_(_st($MKAspectChanged())._aspect_(aSelector));
return self}, function($ctx1) {$ctx1.fill(self,"changed:",{aSelector:aSelector},smalltalk.MKObservable)})},
args: ["aSelector"],
source: "changed: aSelector\x0a\x09\x22Trigger `#update:` to all listening aspect views\x22\x0a\x09\x0a\x09self announce: (MKAspectChanged aspect: aSelector)",
messageSends: ["announce:", "aspect:"],
referencedClasses: ["MKAspectChanged"]
}),
smalltalk.MKObservable);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.MKObservable.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@announcer"]=_st($Announcer())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MKObservable)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09announcer := Announcer new",
messageSends: ["initialize", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.MKObservable);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'announcements',
fn: function (anAnnouncement,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@announcer"])._on_do_(anAnnouncement,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{anAnnouncement:anAnnouncement,aBlock:aBlock},smalltalk.MKObservable)})},
args: ["anAnnouncement", "aBlock"],
source: "on: anAnnouncement do: aBlock\x0a\x09announcer on: anAnnouncement do: aBlock",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.MKObservable);

smalltalk.addMethod(
smalltalk.method({
selector: "on:send:to:",
category: 'announcements',
fn: function (anAnnouncement,aSelector,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@announcer"])._on_send_to_(anAnnouncement,aSelector,anObject);
return self}, function($ctx1) {$ctx1.fill(self,"on:send:to:",{anAnnouncement:anAnnouncement,aSelector:aSelector,anObject:anObject},smalltalk.MKObservable)})},
args: ["anAnnouncement", "aSelector", "anObject"],
source: "on: anAnnouncement send: aSelector to: anObject\x0a\x09announcer on: anAnnouncement send: aSelector to: anObject",
messageSends: ["on:send:to:"],
referencedClasses: []
}),
smalltalk.MKObservable);



smalltalk.addClass('MKView', smalltalk.MKObservable, ['controller', 'model', 'root', 'extraCssClass'], 'Moka-Core');
smalltalk.MKView.comment="I implement the View part of the MVC pattern in Moka.\x0a\x0a## API\x0a- Instance can be created with the `MKView class >> model:*` convenience methods\x0a- rendering is done through `#renderContentOn:`, to be overridden in concrete view classes\x0a- `#update` provide updating facility, refreshing the entire view\x0a- subclasses can override `#defaultControllerClass` to provide a default controller specific to a view\x0a- subclasses can override `#observeModel`\x0a- Extra css classes can be added with `#extraCssClass:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "appendToBrush:",
category: 'adding',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_(_st(aTagBrush)._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"appendToBrush:",{aTagBrush:aTagBrush},smalltalk.MKView)})},
args: ["aTagBrush"],
source: "appendToBrush: aTagBrush\x0a\x09self appendToJQuery: aTagBrush asJQuery",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "appendToJQuery:",
category: 'adding',
fn: function (aJQuery){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self._renderOn_(_st($HTMLCanvas())._onJQuery_(aJQuery));
return self}, function($ctx1) {$ctx1.fill(self,"appendToJQuery:",{aJQuery:aJQuery},smalltalk.MKView)})},
args: ["aJQuery"],
source: "appendToJQuery: aJQuery\x0a\x09self renderOn: (HTMLCanvas onJQuery: aJQuery)",
messageSends: ["renderOn:", "onJQuery:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "asJQuery",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@root"])._asJQuery();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJQuery",{},smalltalk.MKView)})},
args: [],
source: "asJQuery\x0a\x09^ root asJQuery",
messageSends: ["asJQuery"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "blur",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(_st(self["@root"])._asJQuery())._blur();
};
return self}, function($ctx1) {$ctx1.fill(self,"blur",{},smalltalk.MKView)})},
args: [],
source: "blur\x0a\x09root ifNotNil: [ root asJQuery blur ]",
messageSends: ["ifNotNil:", "blur", "asJQuery"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.MKView)})},
args: [],
source: "children\x0a\x09\x22Answer all the sub-views of the receiver\x22\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKView);

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
var $1;
self["@controller"]=aController;
_st(aController)._view_(self);
$1=_st(aController)._model_(self._model());
return self}, function($ctx1) {$ctx1.fill(self,"controller:",{aController:aController},smalltalk.MKView)})},
args: ["aController"],
source: "controller: aController\x0a\x09\x22Install `aController` to be the receiver's controller\x22\x0a\x09\x0a\x09controller := aController.\x0a\x09aController \x0a\x09\x09view: self;\x0a\x09\x09model: self model",
messageSends: ["view:", "model:", "model"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
_st(stream).__lt_lt("moka_view");
$ctx2.sendIdx["<<"]=1;
$2=self._extraCssClass();
$ctx2.sendIdx["extraCssClass"]=1;
return _st($2)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(stream).__lt_lt(" ")).__lt_lt(self._extraCssClass());
$ctx3.sendIdx["<<"]=2;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MKView)})},
args: [],
source: "cssClass\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream << 'moka_view'.\x0a\x09\x09self extraCssClass ifNotEmpty: [\x0a\x09\x09\x09stream << ' ' << self extraCssClass ] ]",
messageSends: ["streamContents:", "<<", "ifNotEmpty:", "extraCssClass"],
referencedClasses: ["String"]
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssStyle",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"cssStyle",{},smalltalk.MKView)})},
args: [],
source: "cssStyle\x0a\x09^ ''",
messageSends: [],
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
return $MKController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKController",
messageSends: [],
referencedClasses: ["MKController"]
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "domPosition",
category: 'dom',
fn: function (){
var self=this;
var offset;
return smalltalk.withContext(function($ctx1) { 
var $1;
offset=_st(self._asJQuery())._offset();
$1=_st(_st(offset)._left()).__at(_st(offset)._top());
return $1;
}, function($ctx1) {$ctx1.fill(self,"domPosition",{offset:offset},smalltalk.MKView)})},
args: [],
source: "domPosition\x0a\x09\x22Answer the position of the reciever in the page\x22\x0a\x09\x0a\x09| offset |\x0a\x09offset := self asJQuery offset.\x0a\x09^ offset left @ offset top",
messageSends: ["offset", "asJQuery", "@", "left", "top"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "domSize",
category: 'dom',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$2=_st($3)._width();
$1=_st($2).__at(_st(self._asJQuery())._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"domSize",{},smalltalk.MKView)})},
args: [],
source: "domSize\x0a\x09^ self asJQuery width @ self asJQuery height",
messageSends: ["@", "width", "asJQuery", "height"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "extraCssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@extraCssClass"];
if(($receiver = $2) == nil || $receiver == null){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"extraCssClass",{},smalltalk.MKView)})},
args: [],
source: "extraCssClass\x0a\x09^ extraCssClass ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "extraCssClass:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@extraCssClass"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"extraCssClass:",{aString:aString},smalltalk.MKView)})},
args: ["aString"],
source: "extraCssClass: aString\x0a\x09extraCssClass := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(_st(self["@root"])._asJQuery())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.MKView)})},
args: [],
source: "focus\x0a\x09root ifNotNil: [ root asJQuery focus ]",
messageSends: ["ifNotNil:", "focus", "asJQuery"],
referencedClasses: []
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
selector: "remove",
category: 'actions',
fn: function (){
var self=this;
function $MKViewRemoved(){return smalltalk.MKViewRemoved||(typeof MKViewRemoved=="undefined"?nil:MKViewRemoved)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(_st(self["@root"])._asJQuery())._remove();
};
self._announce_(_st($MKViewRemoved())._view_(self));
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.MKView)})},
args: [],
source: "remove\x0a\x09\x22Removes the receiver from the DOM\x22\x0a\x09root ifNotNil: [ root asJQuery remove ].\x0a\x09\x0a\x09self announce: (MKViewRemoved view: self)",
messageSends: ["ifNotNil:", "remove", "asJQuery", "announce:", "view:"],
referencedClasses: ["MKViewRemoved"]
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
$1=_st(html)._tag_(self._tag());
_st($1)._class_(self._cssClass());
_st($1)._style_(self._cssStyle());
$2=_st($1)._yourself();
self["@root"]=$2;
_st(self["@root"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self._setupEventHandlers();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MKView)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22Basic rendering method.\x0a\x09Do not override this method, but `#renderContentOn:`\x22\x0a\x09\x0a\x09root := (html tag: self tag)\x0a\x09\x09class: self cssClass;\x0a\x09\x09style: self cssStyle;\x0a\x09\x09yourself.\x0a\x09root with: [ self renderContentOn: html ].\x0a\x09\x0a\x09self setupEventHandlers",
messageSends: ["class:", "tag:", "tag", "cssClass", "style:", "cssStyle", "yourself", "with:", "renderContentOn:", "setupEventHandlers"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "resized",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._children())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._resized();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"resized",{},smalltalk.MKView)})},
args: [],
source: "resized\x0a\x09\x22Action triggered when the view has been resized from the outside\x22\x0a\x09\x0a\x09self children do: [ :each | each resized ]\x0a\x09",
messageSends: ["do:", "children", "resized"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "setupEventHandlers",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12;
$1=self["@root"];
_st($1)._onClick_((function(event){
return smalltalk.withContext(function($ctx2) {
$2=self._controller();
$ctx2.sendIdx["controller"]=1;
return _st($2)._onClick_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
$ctx1.sendIdx["onClick:"]=1;
_st($1)._onDblClick_((function(event){
return smalltalk.withContext(function($ctx2) {
$3=self._controller();
$ctx2.sendIdx["controller"]=2;
return _st($3)._onDblClick_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)})}));
$ctx1.sendIdx["onDblClick:"]=1;
_st($1)._onMouseEnter_((function(event){
return smalltalk.withContext(function($ctx2) {
$4=self._controller();
$ctx2.sendIdx["controller"]=3;
return _st($4)._onMouseEnter_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,3)})}));
$ctx1.sendIdx["onMouseEnter:"]=1;
_st($1)._onMouseLeave_((function(event){
return smalltalk.withContext(function($ctx2) {
$5=self._controller();
$ctx2.sendIdx["controller"]=4;
return _st($5)._onMouseLeave_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,4)})}));
$ctx1.sendIdx["onMouseLeave:"]=1;
_st($1)._onMouseOver_((function(event){
return smalltalk.withContext(function($ctx2) {
$6=self._controller();
$ctx2.sendIdx["controller"]=5;
return _st($6)._onMouseOver_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,5)})}));
$ctx1.sendIdx["onMouseOver:"]=1;
_st($1)._onMouseOut_((function(event){
return smalltalk.withContext(function($ctx2) {
$7=self._controller();
$ctx2.sendIdx["controller"]=6;
return _st($7)._onMouseOut_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,6)})}));
$ctx1.sendIdx["onMouseOut:"]=1;
_st($1)._onMouseMove_((function(event){
return smalltalk.withContext(function($ctx2) {
$8=self._controller();
$ctx2.sendIdx["controller"]=7;
return _st($8)._onMouseMove_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,7)})}));
$ctx1.sendIdx["onMouseMove:"]=1;
_st($1)._onKeyDown_((function(event){
return smalltalk.withContext(function($ctx2) {
$9=self._controller();
$ctx2.sendIdx["controller"]=8;
return _st($9)._onKeyDown_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,8)})}));
$ctx1.sendIdx["onKeyDown:"]=1;
_st($1)._onKeyUp_((function(event){
return smalltalk.withContext(function($ctx2) {
$10=self._controller();
$ctx2.sendIdx["controller"]=9;
return _st($10)._onKeyUp_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,9)})}));
$ctx1.sendIdx["onKeyUp:"]=1;
_st($1)._onKeyPress_((function(event){
return smalltalk.withContext(function($ctx2) {
$11=self._controller();
$ctx2.sendIdx["controller"]=10;
return _st($11)._onKeyPress_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,10)})}));
$ctx1.sendIdx["onKeyPress:"]=1;
$12=_st($1)._onChange_((function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self._controller())._onChange_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,11)})}));
$ctx1.sendIdx["onChange:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"setupEventHandlers",{},smalltalk.MKView)})},
args: [],
source: "setupEventHandlers\x0a\x09root\x0a\x09\x09onClick: [ :event | self controller onClick: event ];\x0a\x09\x09onDblClick: [ :event | self controller onDblClick: event ];\x0a\x09\x09onMouseEnter: [ :event | self controller onMouseEnter: event ];\x0a\x09\x09onMouseLeave: [ :event | self controller onMouseLeave: event ];\x0a\x09\x09onMouseOver: [ :event | self controller onMouseOver: event ];\x0a\x09\x09onMouseOut: [ :event | self controller onMouseOut: event ];\x0a\x09\x09onMouseMove: [ :event | self controller onMouseMove: event ];\x0a\x09\x09onKeyDown: [ :event | self controller onKeyDown: event ];\x0a\x09\x09onKeyUp: [ :event | self controller onKeyUp: event ];\x0a\x09\x09onKeyPress: [ :event | self controller onKeyPress: event ];\x0a\x09\x09onChange: [ :event | self controller onChange: event ]",
messageSends: ["onClick:", "controller", "onDblClick:", "onMouseEnter:", "onMouseLeave:", "onMouseOver:", "onMouseOut:", "onMouseMove:", "onKeyDown:", "onKeyUp:", "onKeyPress:", "onChange:"],
referencedClasses: []
}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "div";
}, function($ctx1) {$ctx1.fill(self,"tag",{},smalltalk.MKView)})},
args: [],
source: "tag\x0a\x09^ 'div'",
messageSends: [],
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
var $1,$2;
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == null){
return self;
} else {
$1;
};
$2=_st(self["@root"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($2)._empty();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,2)})}))._appendToJQuery_(_st(self["@root"])._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.MKView)})},
args: [],
source: "update\x0a\x09\x22Update the view's content. Override in subclasses to fine-tune updating\x22\x0a\x09\x0a\x09root ifNil: [ ^ self ].\x0a\x09\x0a\x09root asJQuery empty.\x0a\x09[ :html | self renderContentOn: html ] \x0a\x09\x09appendToJQuery: root asJQuery",
messageSends: ["ifNil:", "empty", "asJQuery", "appendToJQuery:", "renderContentOn:"],
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


smalltalk.addClass('MKLayoutView', smalltalk.MKView, ['layout'], 'Moka-Core');
smalltalk.MKLayoutView.comment="I implement the View part of the MVC pattern in Moka.\x0a\x0a## API\x0a- Instance can be created with the `MKView class >> model:*` convenience methods\x0a- rendering is done through `#renderContentOn:`, to be overridden in concrete view classes\x0a- `#update` provide updating facility, refreshing the entire view\x0a- subclasses can override `#defaultControllerClass` to provide a default controller specific to a view\x0a- subclasses can override `#observeModel`\x0a- Extra css classes can be added with `#extraCssClass:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "bottom",
category: 'layout',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._layout())._bottom();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottom",{},smalltalk.MKLayoutView)})},
args: [],
source: "bottom\x0a\x09^ self layout bottom",
messageSends: ["bottom", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "bottom:",
category: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._bottom_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"bottom:",{aNumber:aNumber},smalltalk.MKLayoutView)})},
args: ["aNumber"],
source: "bottom: aNumber\x0a\x09self layout bottom: aNumber",
messageSends: ["bottom:", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "centerX",
category: 'layout',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._layout())._centerX();
return $1;
}, function($ctx1) {$ctx1.fill(self,"centerX",{},smalltalk.MKLayoutView)})},
args: [],
source: "centerX\x0a\x09^ self layout centerX",
messageSends: ["centerX", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "centerX:",
category: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._centerX_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"centerX:",{aNumber:aNumber},smalltalk.MKLayoutView)})},
args: ["aNumber"],
source: "centerX: aNumber\x0a\x09self layout centerX: aNumber",
messageSends: ["centerX:", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "centerY",
category: 'layout',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._layout())._centerY();
return $1;
}, function($ctx1) {$ctx1.fill(self,"centerY",{},smalltalk.MKLayoutView)})},
args: [],
source: "centerY\x0a\x09^ self layout centerY",
messageSends: ["centerY", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "centerY:",
category: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._centerY_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"centerY:",{aNumber:aNumber},smalltalk.MKLayoutView)})},
args: ["aNumber"],
source: "centerY: aNumber\x0a\x09self layout centerY: aNumber",
messageSends: ["centerY:", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssStyle",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._layout())._asCssString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssStyle",{},smalltalk.MKLayoutView)})},
args: [],
source: "cssStyle\x0a\x09^ self layout asCssString",
messageSends: ["asCssString", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLayout",
category: 'defaults',
fn: function (){
var self=this;
function $MKLayout(){return smalltalk.MKLayout||(typeof MKLayout=="undefined"?nil:MKLayout)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($MKLayout())._new();
_st($2)._left_((0));
_st($2)._top_((0));
_st($2)._right_((0));
_st($2)._bottom_((0));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},smalltalk.MKLayoutView)})},
args: [],
source: "defaultLayout\x0a\x09^ MKLayout new\x0a\x09\x09left: 0;\x0a\x09\x09top: 0;\x0a\x09\x09right: 0;\x0a\x09\x09bottom: 0;\x0a\x09\x09yourself",
messageSends: ["left:", "new", "top:", "right:", "bottom:", "yourself"],
referencedClasses: ["MKLayout"]
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'layout',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._layout())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.MKLayoutView)})},
args: [],
source: "height\x0a\x09^ self layout height",
messageSends: ["height", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._height_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumber:aNumber},smalltalk.MKLayoutView)})},
args: ["aNumber"],
source: "height: aNumber\x0a\x09self layout height: aNumber",
messageSends: ["height:", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "layout",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@layout"];
if(($receiver = $2) == nil || $receiver == null){
self["@layout"]=self._defaultLayout();
$1=self["@layout"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"layout",{},smalltalk.MKLayoutView)})},
args: [],
source: "layout\x0a\x09^ layout ifNil: [ layout := self defaultLayout ]",
messageSends: ["ifNil:", "defaultLayout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
category: 'layout',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._layout())._left();
return $1;
}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.MKLayoutView)})},
args: [],
source: "left\x0a\x09^ self layout left",
messageSends: ["left", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
category: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._left_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"left:",{aNumber:aNumber},smalltalk.MKLayoutView)})},
args: ["aNumber"],
source: "left: aNumber\x0a\x09self layout left: aNumber",
messageSends: ["left:", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
category: 'layout',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._layout())._right();
return $1;
}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.MKLayoutView)})},
args: [],
source: "right\x0a\x09^ self layout right",
messageSends: ["right", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
category: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._right_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"right:",{aNumber:aNumber},smalltalk.MKLayoutView)})},
args: ["aNumber"],
source: "right: aNumber\x0a\x09self layout right: aNumber",
messageSends: ["right:", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "top",
category: 'layout',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._layout())._top();
return $1;
}, function($ctx1) {$ctx1.fill(self,"top",{},smalltalk.MKLayoutView)})},
args: [],
source: "top\x0a\x09^ self layout top",
messageSends: ["top", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "top:",
category: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._top_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"top:",{aNumber:aNumber},smalltalk.MKLayoutView)})},
args: ["aNumber"],
source: "top: aNumber\x0a\x09self layout top: aNumber",
messageSends: ["top:", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'layout',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._layout())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.MKLayoutView)})},
args: [],
source: "width\x0a\x09^ self layout width",
messageSends: ["width", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._width_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.MKLayoutView)})},
args: ["aNumber"],
source: "width: aNumber\x0a\x09self layout width: aNumber",
messageSends: ["width:", "layout"],
referencedClasses: []
}),
smalltalk.MKLayoutView);


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
}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.MKLayoutView.klass)})},
args: ["aModel"],
source: "model: aModel\x0a\x09^ self new\x0a\x09\x09model: aModel;\x0a\x09\x09yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.MKLayoutView.klass);

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
}, function($ctx1) {$ctx1.fill(self,"model:controller:",{aModel:aModel,aController:aController},smalltalk.MKLayoutView.klass)})},
args: ["aModel", "aController"],
source: "model: aModel controller: aController\x0a\x09^ (self model: aModel)\x0a\x09\x09controller: aController;\x0a\x09\x09yourself",
messageSends: ["controller:", "model:", "yourself"],
referencedClasses: []
}),
smalltalk.MKLayoutView.klass);


smalltalk.addClass('MKAspectsView', smalltalk.MKLayoutView, [], 'Moka-Core');
smalltalk.MKAspectsView.comment="I am an abstract view which state depend on aspects of a model.";
smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKAspectController(){return smalltalk.MKAspectController||(typeof MKAspectController=="undefined"?nil:MKAspectController)}
return smalltalk.withContext(function($ctx1) { 
return $MKAspectController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKAspectsView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKAspectController",
messageSends: [],
referencedClasses: ["MKAspectController"]
}),
smalltalk.MKAspectsView);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
category: 'observing',
fn: function (){
var self=this;
function $MKAspectChanged(){return smalltalk.MKAspectChanged||(typeof MKAspectChanged=="undefined"?nil:MKAspectChanged)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.MKAspectsView.superclass.fn.prototype._observeModel.apply(_st(self), []);
_st(self._model())._on_send_to_($MKAspectChanged(),"update:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.MKAspectsView)})},
args: [],
source: "observeModel\x0a\x09super observeModel.\x0a\x09\x0a\x09self model\x0a\x09\x09on: MKAspectChanged\x0a\x09\x09send: 'update:'\x0a\x09\x09to: self",
messageSends: ["observeModel", "on:send:to:", "model"],
referencedClasses: ["MKAspectChanged"]
}),
smalltalk.MKAspectsView);

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
category: 'updating',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"update:",{anAnnouncement:anAnnouncement},smalltalk.MKAspectsView)})},
args: ["anAnnouncement"],
source: "update: anAnnouncement\x0a\x09\x22Override in subclasses to match the view's aspect(s)\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKAspectsView);

smalltalk.addMethod(
smalltalk.method({
selector: "valueForAspect:",
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._perform_(aSelector);
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueForAspect:",{aSelector:aSelector},smalltalk.MKAspectsView)})},
args: ["aSelector"],
source: "valueForAspect: aSelector\x0a\x09^ self model perform: aSelector",
messageSends: ["perform:", "model"],
referencedClasses: []
}),
smalltalk.MKAspectsView);



smalltalk.addClass('MKSingleAspectView', smalltalk.MKAspectsView, ['aspect'], 'Moka-Core');
smalltalk.MKSingleAspectView.comment="I am an abstract view which state depend on an `aspect` of a model. \x0a\x0a##API\x0a\x0a- Use the `#aspect:` to listen to a specific aspect of a model. Changes will then trigger `#update`.";
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
}, function($ctx1) {$ctx1.fill(self,"aspect",{},smalltalk.MKSingleAspectView)})},
args: [],
source: "aspect\x0a\x09^ aspect",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSingleAspectView);

smalltalk.addMethod(
smalltalk.method({
selector: "aspect:",
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@aspect"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"aspect:",{aSelector:aSelector},smalltalk.MKSingleAspectView)})},
args: ["aSelector"],
source: "aspect: aSelector\x0a\x09aspect := aSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKSingleAspectView);

smalltalk.addMethod(
smalltalk.method({
selector: "aspectValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._valueForAspect_(self._aspect());
return $1;
}, function($ctx1) {$ctx1.fill(self,"aspectValue",{},smalltalk.MKSingleAspectView)})},
args: [],
source: "aspectValue\x0a\x09^ self valueForAspect: self aspect",
messageSends: ["valueForAspect:", "aspect"],
referencedClasses: []
}),
smalltalk.MKSingleAspectView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
category: 'defaults',
fn: function (){
var self=this;
function $MKSingleAspectController(){return smalltalk.MKSingleAspectController||(typeof MKSingleAspectController=="undefined"?nil:MKSingleAspectController)}
return smalltalk.withContext(function($ctx1) { 
return $MKSingleAspectController();
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKSingleAspectView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ MKSingleAspectController",
messageSends: [],
referencedClasses: ["MKSingleAspectController"]
}),
smalltalk.MKSingleAspectView);

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
return self}, function($ctx1) {$ctx1.fill(self,"update:",{anAnnouncement:anAnnouncement},smalltalk.MKSingleAspectView)})},
args: ["anAnnouncement"],
source: "update: anAnnouncement\x0a\x09anAnnouncement aspect = self aspect ifTrue: [\x0a\x09\x09self update ]",
messageSends: ["ifTrue:", "=", "aspect", "update"],
referencedClasses: []
}),
smalltalk.MKSingleAspectView);


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
}, function($ctx1) {$ctx1.fill(self,"model:aspect:",{aModel:aModel,aSelector:aSelector},smalltalk.MKSingleAspectView.klass)})},
args: ["aModel", "aSelector"],
source: "model: aModel aspect: aSelector\x0a\x09^ (self model: aModel)\x0a\x09\x09aspect: aSelector;\x0a\x09\x09yourself",
messageSends: ["aspect:", "model:", "yourself"],
referencedClasses: []
}),
smalltalk.MKSingleAspectView.klass);


smalltalk.addClass('MKDecorator', smalltalk.MKLayoutView, ['decorated'], 'Moka-Core');
smalltalk.MKDecorator.comment="I am root class of the decorator pattern in Moka. \x0a\x0aI am used to add rendering and/or behavior to other views.\x0a\x0a## API\x0a\x0aTo decorate a view, use the class-side `#decorate:` method.";
smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[self._decorated()];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.MKDecorator)})},
args: [],
source: "children\x0a\x09^ { self decorated }",
messageSends: ["decorated"],
referencedClasses: []
}),
smalltalk.MKDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "decorated",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@decorated"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"decorated",{},smalltalk.MKDecorator)})},
args: [],
source: "decorated\x0a\x09^ decorated",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "decorated:",
category: 'accessing',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@decorated"]=aView;
self._observeDecorated();
return self}, function($ctx1) {$ctx1.fill(self,"decorated:",{aView:aView},smalltalk.MKDecorator)})},
args: ["aView"],
source: "decorated: aView\x0a\x09decorated := aView.\x0a\x09self observeDecorated",
messageSends: ["observeDecorated"],
referencedClasses: []
}),
smalltalk.MKDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "observeDecorated",
category: 'observing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"observeDecorated",{},smalltalk.MKDecorator)})},
args: [],
source: "observeDecorated\x0a\x09\x22Override in subclasses\x22\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(self._decorated());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKDecorator)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self decorated",
messageSends: ["with:", "decorated"],
referencedClasses: []
}),
smalltalk.MKDecorator);


smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
category: 'instance creation',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._decorated_(aView);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"decorate:",{aView:aView},smalltalk.MKDecorator.klass)})},
args: ["aView"],
source: "decorate: aView\x0a\x09^ self new\x0a\x09\x09decorated: aView;\x0a\x09\x09yourself",
messageSends: ["decorated:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.MKDecorator.klass);

});
