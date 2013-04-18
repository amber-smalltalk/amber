smalltalk.addPackage('Helios-Core');
smalltalk.addClass('HLModel', smalltalk.Object, ['announcer', 'environment'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@announcer"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st($Announcer())._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.HLModel)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st(self)._manager())._environment();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},smalltalk.HLModel)})},
messageSends: ["ifNil:", "environment", "manager"]}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment},smalltalk.HLModel)})},
messageSends: []}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "manager",
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLManager())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},smalltalk.HLModel)})},
messageSends: ["current"]}),
smalltalk.HLModel);

smalltalk.addMethod(
smalltalk.method({
selector: "systemAnnouncer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._environment())._systemAnnouncer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},smalltalk.HLModel)})},
messageSends: ["systemAnnouncer", "environment"]}),
smalltalk.HLModel);



smalltalk.addClass('HLTab', smalltalk.Widget, ['widget', 'label', 'root'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._manager())._activate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},smalltalk.HLTab)})},
messageSends: ["activate:", "manager"]}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "add",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._manager())._addTab_(self);
return self}, function($ctx1) {$ctx1.fill(self,"add",{},smalltalk.HLTab)})},
messageSends: ["addTab:", "manager"]}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(_st(self)._label())._size()).__gt((20));
if(smalltalk.assert($2)){
$1=_st(_st(_st(self)._label())._first_((20))).__comma("...");
} else {
$1=_st(self)._label();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLTab)})},
messageSends: ["ifTrue:ifFalse:", ",", "first:", "label", ">", "size"]}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._widget())._canHaveFocus();
if(smalltalk.assert($1)){
_st(_st(self)._widget())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLTab)})},
messageSends: ["ifTrue:", "focus", "widget", "canHaveFocus"]}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self["@root"])._asJQuery())._css_put_("visibility","hidden");
};
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.HLTab)})},
messageSends: ["ifNotNil:", "css:put:", "asJQuery"]}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._manager())._activeTab()).__eq(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLTab)})},
messageSends: ["=", "activeTab", "manager"]}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@label"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLTab)})},
messageSends: ["ifNil:"]}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.HLTab)})},
messageSends: []}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "manager",
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLManager())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},smalltalk.HLTab)})},
messageSends: ["current"]}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._widget())._registerBindings();
return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{},smalltalk.HLTab)})},
messageSends: ["registerBindings", "widget"]}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self["@root"])._asJQuery())._remove();
};
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.HLTab)})},
messageSends: ["ifNotNil:", "remove", "asJQuery"]}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("tab");
$2=_st($1)._yourself();
self["@root"]=$2;
_st(self)._renderTab();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLTab)})},
messageSends: ["class:", "div", "yourself", "renderTab"]}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@root"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
_st($1)._class_("amber_box");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self)._widget())._renderOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTab",{},smalltalk.HLTab)})},
messageSends: ["contents:", "class:", "div", "with:", "renderOn:", "widget"]}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._appendToJQuery_(_st("body")._asJQuery());
} else {
_st(_st(self["@root"])._asJQuery())._css_put_("visibility","visible");
};
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.HLTab)})},
messageSends: ["ifNil:ifNotNil:", "appendToJQuery:", "asJQuery", "css:put:"]}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "widget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@widget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"widget",{},smalltalk.HLTab)})},
messageSends: []}),
smalltalk.HLTab);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@widget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"widget:",{aWidget:aWidget},smalltalk.HLTab)})},
messageSends: []}),
smalltalk.HLTab);


smalltalk.addMethod(
smalltalk.method({
selector: "on:labelled:",
fn: function (aWidget,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._widget_(aWidget);
_st($2)._label_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:labelled:",{aWidget:aWidget,aString:aString},smalltalk.HLTab.klass)})},
messageSends: ["widget:", "new", "label:", "yourself"]}),
smalltalk.HLTab.klass);


smalltalk.addClass('HLWidget', smalltalk.Widget, ['wrapper'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "alert:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._alert_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString},smalltalk.HLWidget)})},
messageSends: ["alert:"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLWidget)})},
messageSends: []}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifTrue:",
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._manager())._confirm_ifTrue_(aString,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:",{aString:aString,aBlock:aBlock},smalltalk.HLWidget)})},
messageSends: ["confirm:ifTrue:", "manager"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "execute:",
fn: function (aCommand){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st($HLManager())._current())._keyBinder();
_st($1)._activate();
$2=_st($1)._applyBinding_(_st(aCommand)._asBinding());
return self}, function($ctx1) {$ctx1.fill(self,"execute:",{aCommand:aCommand},smalltalk.HLWidget)})},
messageSends: ["activate", "keyBinder", "current", "applyBinding:", "asBinding"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "manager",
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLManager())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},smalltalk.HLWidget)})},
messageSends: ["current"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._wrapper();
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(_st(_st(self)._wrapper())._asJQuery())._empty();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(self)._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_(_st(_st(self)._wrapper())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLWidget)})},
messageSends: ["ifNil:", "wrapper", "empty", "asJQuery", "appendToJQuery:", "renderContentOn:"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._registerBindingsOn_(_st(_st(_st(self)._manager())._keyBinder())._bindings());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{},smalltalk.HLWidget)})},
messageSends: ["registerBindingsOn:", "bindings", "keyBinder", "manager"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindingsOn:",
fn: function (aBindingGroup){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},smalltalk.HLWidget)})},
messageSends: []}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLWidget)})},
messageSends: []}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@wrapper"]=_st(html)._div();
_st((function(renderer){
return smalltalk.withContext(function($ctx2) {
return _st(self)._renderContentOn_(renderer);
}, function($ctx2) {$ctx2.fillBlock({renderer:renderer},$ctx1)})}))._appendToJQuery_(_st(self["@wrapper"])._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLWidget)})},
messageSends: ["div", "appendToJQuery:", "asJQuery", "renderContentOn:"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapper",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@wrapper"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"wrapper",{},smalltalk.HLWidget)})},
messageSends: []}),
smalltalk.HLWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLWidget.klass)})},
messageSends: []}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "openAsTab",
fn: function (){
var self=this;
function $HLTab(){return smalltalk.HLTab||(typeof HLTab=="undefined"?nil:HLTab)}
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._canBeOpenAsTab();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(_st($HLManager())._current())._addTab_(_st($HLTab())._on_labelled_(_st(self)._new(),_st(self)._tabLabel()));
return self}, function($ctx1) {$ctx1.fill(self,"openAsTab",{},smalltalk.HLWidget.klass)})},
messageSends: ["ifFalse:", "canBeOpenAsTab", "addTab:", "on:labelled:", "new", "tabLabel", "current"]}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Tab";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLWidget.klass)})},
messageSends: []}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(500);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLWidget.klass)})},
messageSends: []}),
smalltalk.HLWidget.klass);


smalltalk.addClass('HLConfirmation', smalltalk.HLWidget, ['confirmationString', 'actionBlock', 'cancelBlock'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "actionBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@actionBlock"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"actionBlock",{},smalltalk.HLConfirmation)})},
messageSends: ["ifNil:"]}),
smalltalk.HLConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "actionBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@actionBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"actionBlock:",{aBlock:aBlock},smalltalk.HLConfirmation)})},
messageSends: []}),
smalltalk.HLConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "cancel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._cancelBlock())._value();
_st(self)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"cancel",{},smalltalk.HLConfirmation)})},
messageSends: ["value", "cancelBlock", "remove"]}),
smalltalk.HLConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@cancelBlock"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cancelBlock",{},smalltalk.HLConfirmation)})},
messageSends: ["ifNil:"]}),
smalltalk.HLConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cancelBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"cancelBlock:",{aBlock:aBlock},smalltalk.HLConfirmation)})},
messageSends: []}),
smalltalk.HLConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._actionBlock())._value();
_st(self)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"confirm",{},smalltalk.HLConfirmation)})},
messageSends: ["value", "actionBlock", "remove"]}),
smalltalk.HLConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "confirmationString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@confirmationString"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="Confirm";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"confirmationString",{},smalltalk.HLConfirmation)})},
messageSends: ["ifNil:"]}),
smalltalk.HLConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "confirmationString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@confirmationString"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"confirmationString:",{aString:aString},smalltalk.HLConfirmation)})},
messageSends: []}),
smalltalk.HLConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._jQuery_(".confirmation"))._removeClass_("active");
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(window)._jQuery_("#overlay"))._remove();
return _st(_st(window)._jQuery_(".confirmation"))._remove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((300));
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.HLConfirmation)})},
messageSends: ["removeClass:", "jQuery:", "valueWithTimeout:", "remove"]}),
smalltalk.HLConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
var confirmButton;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$7,$8,$4,$2;
_st(_st(html)._div())._id_("overlay");
$1=_st(html)._div();
_st($1)._class_("confirmation");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._span())._with_(_st(self)._confirmationString());
$3=_st(html)._div();
_st($3)._class_("buttons");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._button();
_st($5)._class_("button");
_st($5)._with_("Cancel");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(self)._cancel();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$6;
$7=_st(html)._button();
_st($7)._class_("button default");
_st($7)._with_("Confirm");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(self)._confirm();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
confirmButton=$8;
return confirmButton;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(confirmButton)._asJQuery())._focus();
_st(_st(window)._jQuery_(".confirmation"))._addClass_("active");
_st(self)._setupKeyBindings();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html,confirmButton:confirmButton},smalltalk.HLConfirmation)})},
messageSends: ["id:", "div", "class:", "with:", "confirmationString", "span", "button", "onClick:", "cancel", "confirm", "focus", "asJQuery", "addClass:", "jQuery:", "setupKeyBindings"]}),
smalltalk.HLConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(window)._jQuery_(".confirmation"))._keyup_((function(e){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(e)._keyCode()).__eq((27));
if(smalltalk.assert($1)){
return _st(self)._cancel();
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{},smalltalk.HLConfirmation)})},
messageSends: ["keyup:", "ifTrue:", "cancel", "=", "keyCode", "jQuery:"]}),
smalltalk.HLConfirmation);



smalltalk.addClass('HLDebugger', smalltalk.HLWidget, [], 'Helios-Core');


smalltalk.addClass('HLFocusableWidget', smalltalk.HLWidget, [], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "blur",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._wrapper())._asJQuery())._blur();
return self}, function($ctx1) {$ctx1.fill(self,"blur",{},smalltalk.HLFocusableWidget)})},
messageSends: ["blur", "asJQuery", "wrapper"]}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLFocusableWidget)})},
messageSends: []}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._wrapper())._asJQuery())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLFocusableWidget)})},
messageSends: ["focus", "asJQuery", "wrapper"]}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focusClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "focused";
}, function($ctx1) {$ctx1.fill(self,"focusClass",{},smalltalk.HLFocusableWidget)})},
messageSends: []}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._wrapper())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._wrapper())._asJQuery())._is_(":focus");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasFocus",{},smalltalk.HLFocusableWidget)})},
messageSends: ["and:", "is:", "asJQuery", "wrapper", "notNil"]}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLFocusableWidget)})},
messageSends: []}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self)._registerBindings();
$1=_st(html)._div();
_st($1)._class_("hl_widget");
$2=_st($1)._yourself();
self["@wrapper"]=$2;
_st(self["@wrapper"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=self["@wrapper"];
_st($3)._at_put_("tabindex","0");
_st($3)._onBlur_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._wrapper())._asJQuery())._removeClass_(_st(self)._focusClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=_st($3)._onFocus_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._wrapper())._asJQuery())._addClass_(_st(self)._focusClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLFocusableWidget)})},
messageSends: ["registerBindings", "class:", "div", "yourself", "with:", "renderContentOn:", "at:put:", "onBlur:", "removeClass:", "focusClass", "asJQuery", "wrapper", "onFocus:", "addClass:"]}),
smalltalk.HLFocusableWidget);



smalltalk.addClass('HLListWidget', smalltalk.HLFocusableWidget, ['items', 'selectedItem', 'mapping'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activateFirstListItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._activateListItem_(_st(window)._jQuery_(_st(_st(_st(self["@wrapper"])._asJQuery())._find_("li.inactive"))._get_((0))));
return self}, function($ctx1) {$ctx1.fill(self,"activateFirstListItem",{},smalltalk.HLListWidget)})},
messageSends: ["activateListItem:", "jQuery:", "get:", "find:", "asJQuery"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(self)._activateListItem_(_st(_st(self["@mapping"])._at_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
$1=self;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._asJQuery());
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"activateItem:",{anObject:anObject},smalltalk.HLListWidget)})},
messageSends: ["activateListItem:", "asJQuery", "at:ifAbsent:"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateListItem:",
fn: function (aListItem){
var self=this;
var item;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(aListItem)._get_((0));
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(_st(_st(aListItem)._parent())._children())._removeClass_("active");
_st(aListItem)._addClass_("active");
_st(self)._ensureVisible_(aListItem);
item=_st(_st(self)._items())._at_(_st(_st(aListItem)._attr_("list-data"))._asNumber());
$3=_st(_st(self)._selectedItem()).__eq_eq(item);
if(! smalltalk.assert($3)){
_st(self)._selectItem_(item);
};
return self}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{aListItem:aListItem,item:item},smalltalk.HLListWidget)})},
messageSends: ["ifNil:", "get:", "removeClass:", "children", "parent", "addClass:", "ensureVisible:", "at:", "asNumber", "attr:", "items", "ifFalse:", "selectItem:", "==", "selectedItem"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activateNextListItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._activateListItem_(_st(_st(window)._jQuery_(".focused .nav-pills .active"))._next());
return self}, function($ctx1) {$ctx1.fill(self,"activateNextListItem",{},smalltalk.HLListWidget)})},
messageSends: ["activateListItem:", "next", "jQuery:"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "activatePreviousListItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._activateListItem_(_st(_st(window)._jQuery_(".focused .nav-pills .active"))._prev());
return self}, function($ctx1) {$ctx1.fill(self,"activatePreviousListItem",{},smalltalk.HLListWidget)})},
messageSends: ["activateListItem:", "prev", "jQuery:"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self)._selectedItem()).__eq(anObject);
if(smalltalk.assert($2)){
$1="active";
} else {
$1="inactive";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{anObject:anObject},smalltalk.HLListWidget)})},
messageSends: ["ifTrue:ifFalse:", "=", "selectedItem"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultItems",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultItems",{},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "ensureVisible:",
fn: function (aListItem){
var self=this;
var perent,position;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
position=_st(self)._positionOf_(aListItem);
parent=_st(aListItem)._parent();
$1=_st(_st(_st(aListItem)._position())._top()).__lt((0));
if(smalltalk.assert($1)){
_st(_st(parent)._get_((0)))._scrollTop_(_st(_st(_st(_st(parent)._get_((0)))._scrollTop()).__plus(_st(_st(aListItem)._position())._top())).__minus((10)));
};
$2=_st(_st(_st(_st(aListItem)._position())._top()).__plus(_st(aListItem)._height())).__gt(_st(parent)._height());
if(smalltalk.assert($2)){
_st(_st(parent)._get_((0)))._scrollTop_(_st(_st(_st(_st(_st(parent)._get_((0)))._scrollTop()).__plus(_st(aListItem)._height())).__minus(_st(_st(parent)._height()).__minus(_st(_st(aListItem)._position())._top()))).__plus((10)));
};
return self}, function($ctx1) {$ctx1.fill(self,"ensureVisible:",{aListItem:aListItem,perent:perent,position:position},smalltalk.HLListWidget)})},
messageSends: ["positionOf:", "parent", "ifTrue:", "scrollTop:", "-", "+", "top", "position", "scrollTop", "get:", "<", "height", ">"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.HLFocusableWidget.fn.prototype._focus.apply(_st(self), []);
$1=_st(_st(self)._items())._isEmpty();
if(! smalltalk.assert($1)){
$2=_st(self)._selectedItem();
if(($receiver = $2) == nil || $receiver == undefined){
_st(self)._activateFirstListItem();
} else {
$2;
};
};
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLListWidget)})},
messageSends: ["focus", "ifFalse:", "ifNil:", "activateFirstListItem", "selectedItem", "isEmpty", "items"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconForItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"iconForItem:",{anObject:anObject},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLFocusableWidget.fn.prototype._initialize.apply(_st(self), []);
self["@mapping"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLListWidget)})},
messageSends: ["initialize", "new"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@items"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@items"]=_st(self)._defaultItems();
$1=self["@items"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},smalltalk.HLListWidget)})},
messageSends: ["ifNil:", "defaultItems"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "items:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@items"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"items:",{aCollection:aCollection},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOf:",
fn: function (aListItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 

    	return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1
	;
return self}, function($ctx1) {$ctx1.fill(self,"positionOf:",{aListItem:aListItem},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
smalltalk.HLFocusableWidget.fn.prototype._refresh.apply(_st(self), []);
_st(self)._ensureVisible_(_st(_st(self["@mapping"])._at_ifAbsent_(_st(self)._selectedItem(),(function(){
return smalltalk.withContext(function($ctx2) {
$1=self;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._asJQuery());
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLListWidget)})},
messageSends: ["refresh", "ensureVisible:", "asJQuery", "at:ifAbsent:", "selectedItem"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "registerMappingFrom:to:",
fn: function (anObject,aTag){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@mapping"])._at_put_(anObject,aTag);
return self}, function($ctx1) {$ctx1.fill(self,"registerMappingFrom:to:",{anObject:anObject,aTag:aTag},smalltalk.HLListWidget)})},
messageSends: ["at:put:"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._ul();
_st($1)._class_("nav nav-pills nav-stacked");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._renderListOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._div();
_st($3)._class_("pane_actions form-actions");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._renderButtonsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._setupKeyBindings();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLListWidget)})},
messageSends: ["class:", "ul", "with:", "renderListOn:", "div", "renderButtonsOn:", "setupKeyBindings"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
fn: function (anObject,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
li=_st(html)._li();
_st(self)._registerMappingFrom_to_(anObject,li);
$1=li;
_st($1)._class_(_st(self)._cssClassForItem_(anObject));
_st($1)._at_put_("list-data",_st(_st(_st(self)._items())._indexOf_(anObject))._asString());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._tag_("i"))._class_(_st(self)._iconForItem_(anObject));
return _st(self)._renderItemLabel_on_(anObject,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._activateListItem_(_st(li)._asJQuery());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anObject:anObject,html:html,li:li},smalltalk.HLListWidget)})},
messageSends: ["li", "registerMappingFrom:to:", "class:", "cssClassForItem:", "at:put:", "asString", "indexOf:", "items", "with:", "iconForItem:", "tag:", "renderItemLabel:on:", "a", "onClick:", "activateListItem:", "asJQuery"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
fn: function (anObject,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(anObject)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{anObject:anObject,html:html},smalltalk.HLListWidget)})},
messageSends: ["with:", "asString"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderListOn:",
fn: function (html){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@mapping"]=_st($Dictionary())._new();
_st(_st(self)._items())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._renderItem_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderListOn:",{html:html},smalltalk.HLListWidget)})},
messageSends: ["new", "do:", "renderItem:on:", "items"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._selectedItem_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anObject:anObject},smalltalk.HLListWidget)})},
messageSends: ["selectedItem:"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedItem"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectedItem"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"selectedItem:",{anObject:anObject},smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyBindings",
fn: function (){
var self=this;
var active,interval,delay,repeatInterval;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11;
active=false;
repeatInterval=(70);
_st(_st(_st(self)._wrapper())._asJQuery())._unbind_("keydown");
_st(_st(_st(self)._wrapper())._asJQuery())._keydown_((function(e){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(_st(e)._which()).__eq((38)))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(active).__eq(false);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
active=true;
active;
_st(self)._activatePreviousListItem();
delay=_st((function(){
return smalltalk.withContext(function($ctx3) {
interval=_st((function(){
return smalltalk.withContext(function($ctx4) {
$2=_st(_st(_st(self)._wrapper())._asJQuery())._hasClass_(_st(self)._focusClass());
if(smalltalk.assert($2)){
return _st(self)._activatePreviousListItem();
} else {
active=false;
active;
$3=interval;
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(interval)._clearInterval();
};
$4=delay;
if(($receiver = $4) == nil || $receiver == undefined){
return $4;
} else {
return _st(delay)._clearTimeout();
};
};
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}))._valueWithInterval_(repeatInterval);
return interval;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._valueWithTimeout_((300));
delay;
};
$5=_st(_st(_st(e)._which()).__eq((40)))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(active).__eq(false);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($5)){
active=true;
active;
_st(self)._activateNextListItem();
delay=_st((function(){
return smalltalk.withContext(function($ctx3) {
interval=_st((function(){
return smalltalk.withContext(function($ctx4) {
$6=_st(_st(_st(self)._wrapper())._asJQuery())._hasClass_(_st(self)._focusClass());
if(smalltalk.assert($6)){
return _st(self)._activateNextListItem();
} else {
active=false;
active;
$7=interval;
if(($receiver = $7) == nil || $receiver == undefined){
$7;
} else {
_st(interval)._clearInterval();
};
$8=delay;
if(($receiver = $8) == nil || $receiver == undefined){
return $8;
} else {
return _st(delay)._clearTimeout();
};
};
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}))._valueWithInterval_(repeatInterval);
return interval;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._valueWithTimeout_((300));
return delay;
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(_st(_st(self)._wrapper())._asJQuery())._keyup_((function(e){
return smalltalk.withContext(function($ctx2) {
$9=active;
if(smalltalk.assert($9)){
active=false;
active;
$10=interval;
if(($receiver = $10) == nil || $receiver == undefined){
$10;
} else {
_st(interval)._clearInterval();
};
$11=delay;
if(($receiver = $11) == nil || $receiver == undefined){
return $11;
} else {
return _st(delay)._clearTimeout();
};
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{active:active,interval:interval,delay:delay,repeatInterval:repeatInterval},smalltalk.HLListWidget)})},
messageSends: ["unbind:", "asJQuery", "wrapper", "keydown:", "ifTrue:", "activatePreviousListItem", "valueWithTimeout:", "valueWithInterval:", "ifTrue:ifFalse:", "ifNotNil:", "clearInterval", "clearTimeout", "hasClass:", "focusClass", "and:", "=", "which", "activateNextListItem", "keyup:"]}),
smalltalk.HLListWidget);



smalltalk.addClass('HLNavigationListWidget', smalltalk.HLListWidget, ['previous', 'next'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@next"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.HLNavigationListWidget)})},
messageSends: []}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@next"]=aWidget;
$1=_st(_st(aWidget)._previous()).__eq(self);
if(! smalltalk.assert($1)){
_st(aWidget)._previous_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"next:",{aWidget:aWidget},smalltalk.HLNavigationListWidget)})},
messageSends: ["ifFalse:", "previous:", "=", "previous"]}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._next();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self)._next())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"nextFocus",{},smalltalk.HLNavigationListWidget)})},
messageSends: ["ifNotNil:", "focus", "next"]}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@previous"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.HLNavigationListWidget)})},
messageSends: []}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@previous"]=aWidget;
$1=_st(_st(aWidget)._next()).__eq(self);
if(! smalltalk.assert($1)){
_st(aWidget)._next_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"previous:",{aWidget:aWidget},smalltalk.HLNavigationListWidget)})},
messageSends: ["ifFalse:", "next:", "=", "next"]}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previousFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._previous();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self)._previous())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"previousFocus",{},smalltalk.HLNavigationListWidget)})},
messageSends: ["ifNotNil:", "focus", "previous"]}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.HLListWidget.fn.prototype._setupKeyBindings.apply(_st(self), []);
_st(_st(_st(self)._wrapper())._asJQuery())._keydown_((function(e){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(e)._which()).__eq((39));
if(smalltalk.assert($1)){
_st(self)._nextFocus();
};
$2=_st(_st(e)._which()).__eq((37));
if(smalltalk.assert($2)){
return _st(self)._previousFocus();
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{},smalltalk.HLNavigationListWidget)})},
messageSends: ["setupKeyBindings", "keydown:", "ifTrue:", "nextFocus", "=", "which", "previousFocus", "asJQuery", "wrapper"]}),
smalltalk.HLNavigationListWidget);



smalltalk.addClass('HLManager', smalltalk.HLWidget, ['tabs', 'activeTab', 'keyBinder', 'environment', 'history'], 'Helios-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "activate:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self)._keyBinder())._flushBindings();
_st(aTab)._registerBindings();
self["@activeTab"]=aTab;
$1=self;
_st($1)._refresh();
_st($1)._addToHistory_(aTab);
$2=_st($1)._show_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["flushBindings", "keyBinder", "registerBindings", "refresh", "addToHistory:", "show:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "activeTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@activeTab"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeTab",{},smalltalk.HLManager)})},
messageSends: []}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "addTab:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._tabs())._add_(aTab);
_st(self)._activate_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"addTab:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["add:", "tabs", "activate:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "addToHistory:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._removeFromHistory_(aTab);
_st(_st(self)._history())._add_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"addToHistory:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["removeFromHistory:", "add:", "history"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifFalse:",
fn: function (aString,aBlock){
var self=this;
function $HLConfirmation(){return smalltalk.HLConfirmation||(typeof HLConfirmation=="undefined"?nil:HLConfirmation)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLConfirmation())._new();
_st($1)._confirmationString_(aString);
_st($1)._cancelBlock_(aBlock);
$2=_st($1)._yourself();
_st($2)._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifFalse:",{aString:aString,aBlock:aBlock},smalltalk.HLManager)})},
messageSends: ["appendToJQuery:", "asJQuery", "confirmationString:", "new", "cancelBlock:", "yourself"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifTrue:",
fn: function (aString,aBlock){
var self=this;
function $HLConfirmation(){return smalltalk.HLConfirmation||(typeof HLConfirmation=="undefined"?nil:HLConfirmation)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLConfirmation())._new();
_st($1)._confirmationString_(aString);
_st($1)._actionBlock_(aBlock);
$2=_st($1)._yourself();
_st($2)._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:",{aString:aString,aBlock:aBlock},smalltalk.HLManager)})},
messageSends: ["appendToJQuery:", "asJQuery", "confirmationString:", "new", "actionBlock:", "yourself"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultEnvironment",
fn: function (){
var self=this;
function $Environment(){return smalltalk.Environment||(typeof Environment=="undefined"?nil:Environment)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(window)._parent();
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st($Environment())._new();
return $2;
} else {
$1;
};
$3=_st(_st(_st(_st(window)._parent())._at_("smalltalk"))._at_("Environment"))._new();
return $3;
}, function($ctx1) {$ctx1.fill(self,"defaultEnvironment",{},smalltalk.HLManager)})},
messageSends: ["ifNil:", "new", "parent", "at:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@environment"]=_st(self)._defaultEnvironment();
$1=self["@environment"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},smalltalk.HLManager)})},
messageSends: ["ifNil:", "defaultEnvironment"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment},smalltalk.HLManager)})},
messageSends: []}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "history",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@history"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@history"]=_st($OrderedCollection())._new();
$1=self["@history"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"history",{},smalltalk.HLManager)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "history:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@history"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"history:",{aCollection:aCollection},smalltalk.HLManager)})},
messageSends: []}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLWidget.fn.prototype._initialize.apply(_st(self), []);
_st(_st(self)._keyBinder())._setupEvents();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLManager)})},
messageSends: ["initialize", "setupEvents", "keyBinder"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "keyBinder",
fn: function (){
var self=this;
function $HLKeyBinder(){return smalltalk.HLKeyBinder||(typeof HLKeyBinder=="undefined"?nil:HLKeyBinder)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@keyBinder"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@keyBinder"]=_st($HLKeyBinder())._new();
$1=self["@keyBinder"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyBinder",{},smalltalk.HLManager)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._jQuery_(".navbar"))._remove();
_st(self)._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLManager)})},
messageSends: ["remove", "jQuery:", "appendToJQuery:", "asJQuery"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "removeActiveTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._removeTab_(_st(self)._activeTab());
return self}, function($ctx1) {$ctx1.fill(self,"removeActiveTab",{},smalltalk.HLManager)})},
messageSends: ["removeTab:", "activeTab"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFromHistory:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._history_(_st(_st(self)._history())._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq_eq(aTab);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"removeFromHistory:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["history:", "reject:", "==", "history"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTab:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._tabs())._includes_(aTab);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._removeFromHistory_(aTab);
_st(_st(self)._tabs())._remove_(aTab);
_st(_st(self)._keyBinder())._flushBindings();
_st(aTab)._remove();
_st(self)._refresh();
_st(_st(self)._history())._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._history())._last())._activate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeTab:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["ifFalse:", "includes:", "tabs", "removeFromHistory:", "remove:", "flushBindings", "keyBinder", "remove", "refresh", "ifNotEmpty:", "activate", "last", "history"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAddOn:",
fn: function (html){
var self=this;
function $HLWidget(){return smalltalk.HLWidget||(typeof HLWidget=="undefined"?nil:HLWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$7,$8,$6,$2;
$1=_st(html)._li();
_st($1)._class_("dropdown");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
_st($3)._class_("dropdown-toggle");
_st($3)._at_put_("data-toggle","dropdown");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Open...");
return _st(_st(html)._tag_("b"))._class_("caret");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
$5=_st(html)._ul();
_st($5)._class_("dropdown-menu");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(_st($HLWidget())._withAllSubclasses())._select_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(each)._canBeOpenAsTab();
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})})))._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {
return _st(_st(a)._tabPriority()).__lt(_st(b)._tabPriority());
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx5) {
$7=_st(html)._a();
_st($7)._with_(_st(each)._tabLabel());
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx6) {
return _st(each)._openAsTab();
}, function($ctx6) {$ctx6.fillBlock({},$ctx1)})}));
return $8;
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderAddOn:",{html:html},smalltalk.HLManager)})},
messageSends: ["class:", "li", "with:", "a", "at:put:", "tag:", "ul", "do:", "tabLabel", "onClick:", "openAsTab", "sorted:", "<", "tabPriority", "select:", "canBeOpenAsTab", "withAllSubclasses"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("navbar navbar-fixed-top");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("navbar-inner");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._renderTabsOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLManager)})},
messageSends: ["class:", "div", "with:", "renderTabsOn:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTabsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$6,$5,$8,$9,$7,$2;
$1=_st(html)._ul();
_st($1)._class_("nav");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(self)._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._li();
$4=$3;
$6=_st(each)._isActive();
if(smalltalk.assert($6)){
$5="active";
} else {
$5="inactive";
};
_st($4)._class_($5);
$7=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx4) {
$8=_st(html)._a();
_st($8)._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(_st(html)._tag_("i"))._class_("icon-remove"))._onClick_((function(){
return smalltalk.withContext(function($ctx6) {
return _st(self)._removeTab_(each);
}, function($ctx6) {$ctx6.fillBlock({},$ctx1)})}));
return _st(html)._with_(_st(each)._displayLabel());
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
$9=_st($8)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(each)._activate();
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $9;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $7;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(self)._renderAddOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTabsOn:",{html:html},smalltalk.HLManager)})},
messageSends: ["class:", "ul", "with:", "do:", "ifTrue:ifFalse:", "isActive", "li", "onClick:", "removeTab:", "tag:", "displayLabel", "a", "activate", "tabs", "renderAddOn:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self)._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._hide();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=aTab;
_st($1)._show();
$2=_st($1)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"show:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["do:", "hide", "tabs", "show", "focus"]}),
smalltalk.HLManager);

smalltalk.addMethod(
smalltalk.method({
selector: "tabs",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@tabs"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@tabs"]=_st($OrderedCollection())._new();
$1=self["@tabs"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabs",{},smalltalk.HLManager)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLManager);


smalltalk.HLManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=_st(_st(self)._basicNew())._initialize();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.HLManager.klass)})},
messageSends: ["ifNil:", "initialize", "basicNew"]}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._current())._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLManager.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "current"]}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.HLManager.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.HLManager.klass);


smalltalk.addClass('HLSUnit', smalltalk.HLWidget, [], 'Helios-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLSUnit.klass)})},
messageSends: []}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "SUnit";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLSUnit.klass)})},
messageSends: []}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(1000);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLSUnit.klass)})},
messageSends: []}),
smalltalk.HLSUnit.klass);


smalltalk.addClass('HLTranscript', smalltalk.HLWidget, [], 'Helios-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLTranscript.klass)})},
messageSends: []}),
smalltalk.HLTranscript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Transcript";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLTranscript.klass)})},
messageSends: []}),
smalltalk.HLTranscript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(600);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLTranscript.klass)})},
messageSends: []}),
smalltalk.HLTranscript.klass);


