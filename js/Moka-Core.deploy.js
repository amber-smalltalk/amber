(function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Core');

smalltalk.addClass('MKController', smalltalk.Object, ['view', 'model'], 'Moka-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.MKController)})},
messageSends: []}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.MKController)})},
messageSends: []}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.MKController)})},
messageSends: []}),
smalltalk.MKController);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aView;
return self}, function($ctx1) {$ctx1.fill(self,"view:",{aView:aView},smalltalk.MKController)})},
messageSends: []}),
smalltalk.MKController);



smalltalk.addClass('MKAspectController', smalltalk.MKController, ['aspect'], 'Moka-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "aspect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@aspect"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"aspect",{},smalltalk.MKAspectController)})},
messageSends: []}),
smalltalk.MKAspectController);

smalltalk.addMethod(
smalltalk.method({
selector: "aspect:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@aspect"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"aspect:",{aSelector:aSelector},smalltalk.MKAspectController)})},
messageSends: []}),
smalltalk.MKAspectController);

smalltalk.addMethod(
smalltalk.method({
selector: "performAction",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._aspect();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self._model())._perform_(self._aspect());
};
return self}, function($ctx1) {$ctx1.fill(self,"performAction",{},smalltalk.MKAspectController)})},
messageSends: ["ifNotNil:", "perform:", "aspect", "model"]}),
smalltalk.MKAspectController);

smalltalk.addMethod(
smalltalk.method({
selector: "performActionWith:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._aspect();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self._model())._perform_withArguments_(_st(self._aspect())._asMutator(),[anObject]);
};
return self}, function($ctx1) {$ctx1.fill(self,"performActionWith:",{anObject:anObject},smalltalk.MKAspectController)})},
messageSends: ["ifNotNil:", "perform:withArguments:", "asMutator", "aspect", "model"]}),
smalltalk.MKAspectController);



smalltalk.addClass('MKModel', smalltalk.Object, ['announcer'], 'Moka-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@announcer"])._announce_(anAnnouncement);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},smalltalk.MKModel)})},
messageSends: ["announce:"]}),
smalltalk.MKModel);

smalltalk.addMethod(
smalltalk.method({
selector: "changed:",
fn: function (aSelector){
var self=this;
function $MKModelChanged(){return smalltalk.MKModelChanged||(typeof MKModelChanged=="undefined"?nil:MKModelChanged)}
return smalltalk.withContext(function($ctx1) { 
self._announce_(_st($MKModelChanged())._aspect_(aSelector));
return self}, function($ctx1) {$ctx1.fill(self,"changed:",{aSelector:aSelector},smalltalk.MKModel)})},
messageSends: ["announce:", "aspect:"]}),
smalltalk.MKModel);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.MKModel.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@announcer"]=_st($Announcer())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MKModel)})},
messageSends: ["initialize", "new"]}),
smalltalk.MKModel);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
fn: function (anAnnouncement,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@announcer"])._on_do_(anAnnouncement,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{anAnnouncement:anAnnouncement,aBlock:aBlock},smalltalk.MKModel)})},
messageSends: ["on:do:"]}),
smalltalk.MKModel);

smalltalk.addMethod(
smalltalk.method({
selector: "on:send:to:",
fn: function (anAnnouncement,aSelector,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@announcer"])._on_send_to_(anAnnouncement,aSelector,anObject);
return self}, function($ctx1) {$ctx1.fill(self,"on:send:to:",{anAnnouncement:anAnnouncement,aSelector:aSelector,anObject:anObject},smalltalk.MKModel)})},
messageSends: ["on:send:to:"]}),
smalltalk.MKModel);



smalltalk.addClass('MKModelChanged', smalltalk.Object, ['aspect'], 'Moka-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "aspect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@aspect"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"aspect",{},smalltalk.MKModelChanged)})},
messageSends: []}),
smalltalk.MKModelChanged);

smalltalk.addMethod(
smalltalk.method({
selector: "aspect:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@aspect"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"aspect:",{aSelector:aSelector},smalltalk.MKModelChanged)})},
messageSends: []}),
smalltalk.MKModelChanged);


smalltalk.addMethod(
smalltalk.method({
selector: "aspect:",
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
messageSends: ["aspect:", "new", "yourself"]}),
smalltalk.MKModelChanged.klass);


smalltalk.addClass('MKView', smalltalk.Widget, ['controller', 'model', 'wrapper'], 'Moka-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "controller",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@controller"];
if(($receiver = $1) == nil || $receiver == undefined){
self._controller_(self._defaultController());
} else {
$1;
};
$2=self["@controller"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"controller",{},smalltalk.MKView)})},
messageSends: ["ifNil:", "controller:", "defaultController"]}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "controller:",
fn: function (aController){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@controller"]=aController;
$1=aController;
_st($1)._view_(self);
$2=_st($1)._model_(self._model());
return self}, function($ctx1) {$ctx1.fill(self,"controller:",{aController:aController},smalltalk.MKView)})},
messageSends: ["view:", "model:", "model"]}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultController",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._defaultControllerClass())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultController",{},smalltalk.MKView)})},
messageSends: ["new", "defaultControllerClass"]}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
fn: function (){
var self=this;
function $MKController(){return smalltalk.MKController||(typeof MKController=="undefined"?nil:MKController)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$MKController();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},smalltalk.MKView)})},
messageSends: []}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.MKView)})},
messageSends: []}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
self._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.MKView)})},
messageSends: ["observeModel"]}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.MKView)})},
messageSends: []}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "render",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},smalltalk.MKView)})},
messageSends: ["appendToJQuery:", "asJQuery"]}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MKView)})},
messageSends: []}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MKView)})},
messageSends: ["class:", "div", "yourself", "with:", "renderContentOn:"]}),
smalltalk.MKView);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@wrapper"];
if(($receiver = $1) == nil || $receiver == undefined){
self._error_("The view has not been rendered yet");
} else {
$1;
};
_st(_st(self["@wrapper"])._asJQuery())._empty();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_(_st(self["@wrapper"])._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.MKView)})},
messageSends: ["ifNil:", "error:", "empty", "asJQuery", "appendToJQuery:", "renderContentOn:"]}),
smalltalk.MKView);


smalltalk.addMethod(
smalltalk.method({
selector: "model:",
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
messageSends: ["model:", "new", "yourself"]}),
smalltalk.MKView.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "model:controller:",
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
messageSends: ["controller:", "model:", "yourself"]}),
smalltalk.MKView.klass);


smalltalk.addClass('MKAspectView', smalltalk.MKView, ['aspect', 'label'], 'Moka-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "aspect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@aspect"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"aspect",{},smalltalk.MKAspectView)})},
messageSends: []}),
smalltalk.MKAspectView);

smalltalk.addMethod(
smalltalk.method({
selector: "aspect:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@aspect"]=aSelector;
_st(self._controller())._aspect_(aSelector);
return self}, function($ctx1) {$ctx1.fill(self,"aspect:",{aSelector:aSelector},smalltalk.MKAspectView)})},
messageSends: ["aspect:", "controller"]}),
smalltalk.MKAspectView);

smalltalk.addMethod(
smalltalk.method({
selector: "aspectValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._perform_(self._aspect());
return $1;
}, function($ctx1) {$ctx1.fill(self,"aspectValue",{},smalltalk.MKAspectView)})},
messageSends: ["perform:", "aspect", "model"]}),
smalltalk.MKAspectView);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
function $MKModelChanged(){return smalltalk.MKModelChanged||(typeof MKModelChanged=="undefined"?nil:MKModelChanged)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.MKAspectView.superclass.fn.prototype._observeModel.apply(_st(self), []);
_st(self._model())._on_send_to_($MKModelChanged(),"update:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.MKAspectView)})},
messageSends: ["observeModel", "on:send:to:", "model"]}),
smalltalk.MKAspectView);

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anAnnouncement)._aspect()).__eq(self._aspect());
if(smalltalk.assert($1)){
self._update();
};
return self}, function($ctx1) {$ctx1.fill(self,"update:",{anAnnouncement:anAnnouncement},smalltalk.MKAspectView)})},
messageSends: ["ifTrue:", "update", "=", "aspect"]}),
smalltalk.MKAspectView);


smalltalk.addMethod(
smalltalk.method({
selector: "model:aspect:",
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
messageSends: ["aspect:", "model:", "yourself"]}),
smalltalk.MKAspectView.klass);

})(global_smalltalk,global_nil,global__st);
