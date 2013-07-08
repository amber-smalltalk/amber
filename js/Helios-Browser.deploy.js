smalltalk.addPackage('Helios-Browser');
smalltalk.addClass('HLBrowser', smalltalk.HLWidget, ['model', 'packagesListWidget', 'classesListWidget', 'protocolsListWidget', 'methodsListWidget', 'sourceWidget', 'bottomDiv'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLBrowser)})},
messageSends: []}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "classesListWidget",
fn: function (){
var self=this;
function $HLClassesListWidget(){return smalltalk.HLClassesListWidget||(typeof HLClassesListWidget=="undefined"?nil:HLClassesListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@classesListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@classesListWidget"]=_st($HLClassesListWidget())._on_(self._model());
self["@classesListWidget"];
$1=_st(self["@classesListWidget"])._next_(self._protocolsListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesListWidget",{},smalltalk.HLBrowser)})},
messageSends: ["ifNil:", "on:", "model", "next:", "protocolsListWidget"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._environment();
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},smalltalk.HLBrowser)})},
messageSends: ["environment", "model"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._packagesListWidget())._focus();
return $1;
}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLBrowser)})},
messageSends: ["focus", "packagesListWidget"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsListWidget",
fn: function (){
var self=this;
function $HLMethodsListWidget(){return smalltalk.HLMethodsListWidget||(typeof HLMethodsListWidget=="undefined"?nil:HLMethodsListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@methodsListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@methodsListWidget"]=_st($HLMethodsListWidget())._on_(self._model());
self["@methodsListWidget"];
$1=_st(self["@methodsListWidget"])._next_(self._sourceWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsListWidget",{},smalltalk.HLBrowser)})},
messageSends: ["ifNil:", "on:", "model", "next:", "sourceWidget"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
function $HLBrowserModel(){return smalltalk.HLBrowserModel||(typeof HLBrowserModel=="undefined"?nil:HLBrowserModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@model"]=_st($HLBrowserModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLBrowser)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLBrowser)})},
messageSends: []}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "packagesListWidget",
fn: function (){
var self=this;
function $HLPackagesListWidget(){return smalltalk.HLPackagesListWidget||(typeof HLPackagesListWidget=="undefined"?nil:HLPackagesListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@packagesListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@packagesListWidget"]=_st($HLPackagesListWidget())._on_(self._model());
self["@packagesListWidget"];
$1=_st(self["@packagesListWidget"])._next_(self._classesListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"packagesListWidget",{},smalltalk.HLBrowser)})},
messageSends: ["ifNil:", "on:", "model", "next:", "classesListWidget"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "protocolsListWidget",
fn: function (){
var self=this;
function $HLProtocolsListWidget(){return smalltalk.HLProtocolsListWidget||(typeof HLProtocolsListWidget=="undefined"?nil:HLProtocolsListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@protocolsListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@protocolsListWidget"]=_st($HLProtocolsListWidget())._on_(self._model());
self["@protocolsListWidget"];
$1=_st(self["@protocolsListWidget"])._next_(self._methodsListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocolsListWidget",{},smalltalk.HLBrowser)})},
messageSends: ["ifNil:", "on:", "model", "next:", "methodsListWidget"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindingsOn:",
fn: function (aBindingGroup){
var self=this;
function $HLToolCommand(){return smalltalk.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
return smalltalk.withContext(function($ctx1) { 
_st($HLToolCommand())._registerConcreteClassesOn_for_(aBindingGroup,self._model());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},smalltalk.HLBrowser)})},
messageSends: ["registerConcreteClassesOn:for:", "model"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
function $HLVerticalSplitter(){return smalltalk.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
function $HLHorizontalSplitter(){return smalltalk.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLContainer(){return smalltalk.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($HLContainer())._with_(_st($HLHorizontalSplitter())._with_with_(_st($HLVerticalSplitter())._with_with_(_st($HLVerticalSplitter())._with_with_(self._packagesListWidget(),self._classesListWidget()),_st($HLVerticalSplitter())._with_with_(self._protocolsListWidget(),self._methodsListWidget())),self._sourceWidget())));
_st(self._packagesListWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLBrowser)})},
messageSends: ["with:", "with:with:", "packagesListWidget", "classesListWidget", "protocolsListWidget", "methodsListWidget", "sourceWidget", "focus"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceWidget",
fn: function (){
var self=this;
function $HLBrowserBottomWidget(){return smalltalk.HLBrowserBottomWidget||(typeof HLBrowserBottomWidget=="undefined"?nil:HLBrowserBottomWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@sourceWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLBrowserBottomWidget())._new();
_st($3)._model_(self._model());
$4=_st($3)._yourself();
self["@sourceWidget"]=$4;
$1=self["@sourceWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceWidget",{},smalltalk.HLBrowser)})},
messageSends: ["ifNil:", "model:", "model", "new", "yourself"]}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLBrowser.superclass.fn.prototype._unregister.apply(_st(self), []);
_st([self._packagesListWidget(),self._classesListWidget(),self._protocolsListWidget(),self._methodsListWidget(),self._sourceWidget()])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._unregister();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLBrowser)})},
messageSends: ["unregister", "do:", "packagesListWidget", "classesListWidget", "protocolsListWidget", "methodsListWidget", "sourceWidget"]}),
smalltalk.HLBrowser);


smalltalk.HLBrowser.klass.iVarNames = ['nextId'];
smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLBrowser.klass)})},
messageSends: []}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "nextId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@nextId"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@nextId"]=(0);
self["@nextId"];
} else {
$1;
};
$2="browser_".__comma(_st(_st(self["@nextId"]).__plus((1)))._asString());
return $2;
}, function($ctx1) {$ctx1.fill(self,"nextId",{},smalltalk.HLBrowser.klass)})},
messageSends: ["ifNil:", ",", "asString", "+"]}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "browser";
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},smalltalk.HLBrowser.klass)})},
messageSends: []}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Browser";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLBrowser.klass)})},
messageSends: []}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLBrowser.klass)})},
messageSends: []}),
smalltalk.HLBrowser.klass);


smalltalk.addClass('HLBrowserBottomWidget', smalltalk.HLWidget, ['model', 'codeWidget', 'documentationWidget'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLBrowserBottomWidget)})},
messageSends: []}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget",
fn: function (){
var self=this;
function $HLBrowserCodeWidget(){return smalltalk.HLBrowserCodeWidget||(typeof HLBrowserCodeWidget=="undefined"?nil:HLBrowserCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLBrowserCodeWidget())._new();
_st($3)._browserModel_(self._model());
$4=_st($3)._yourself();
self["@codeWidget"]=$4;
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},smalltalk.HLBrowserBottomWidget)})},
messageSends: ["ifNil:", "browserModel:", "model", "new", "yourself"]}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "documentationWidget",
fn: function (){
var self=this;
function $HLDocumentationWidget(){return smalltalk.HLDocumentationWidget||(typeof HLDocumentationWidget=="undefined"?nil:HLDocumentationWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@documentationWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLDocumentationWidget())._new();
_st($3)._model_(self._model());
$4=_st($3)._yourself();
self["@documentationWidget"]=$4;
$1=self["@documentationWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"documentationWidget",{},smalltalk.HLBrowserBottomWidget)})},
messageSends: ["ifNil:", "model:", "model", "new", "yourself"]}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._codeWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLBrowserBottomWidget)})},
messageSends: ["focus", "codeWidget"]}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLBrowserBottomWidget)})},
messageSends: []}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
self._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLBrowserBottomWidget)})},
messageSends: ["observeModel"]}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLShowCommentToggled(){return smalltalk.HLShowCommentToggled||(typeof HLShowCommentToggled=="undefined"?nil:HLShowCommentToggled)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLShowInstanceToggled(),"onShowInstanceToggled",self);
$2=_st($1)._on_send_to_($HLShowCommentToggled(),"onShowCommentToggled",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLBrowserBottomWidget)})},
messageSends: ["on:send:to:", "announcer", "model"]}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowCommentToggled",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onShowCommentToggled",{},smalltalk.HLBrowserBottomWidget)})},
messageSends: ["refresh"]}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowInstanceToggled",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},smalltalk.HLBrowserBottomWidget)})},
messageSends: ["refresh"]}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.HLBrowserBottomWidget)})},
messageSends: []}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"previous:",{aWidget:aWidget},smalltalk.HLBrowserBottomWidget)})},
messageSends: []}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._showComment();
if(smalltalk.assert($1)){
self._renderPanesOn_(html);
} else {
_st(html)._with_(self._codeWidget());
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLBrowserBottomWidget)})},
messageSends: ["ifTrue:ifFalse:", "renderPanesOn:", "with:", "codeWidget", "showComment", "model"]}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderPanesOn:",
fn: function (html){
var self=this;
function $HLVerticalSplitter(){return smalltalk.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($HLVerticalSplitter())._with_with_(self._codeWidget(),self._documentationWidget()));
return self}, function($ctx1) {$ctx1.fill(self,"renderPanesOn:",{html:html},smalltalk.HLBrowserBottomWidget)})},
messageSends: ["with:", "with:with:", "codeWidget", "documentationWidget"]}),
smalltalk.HLBrowserBottomWidget);



smalltalk.addClass('HLBrowserModel', smalltalk.HLToolModel, ['showInstance', 'showComment'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "editComment",
fn: function (){
var self=this;
function $HLEditComment(){return smalltalk.HLEditComment||(typeof HLEditComment=="undefined"?nil:HLEditComment)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLEditComment())._new());
return self}, function($ctx1) {$ctx1.fill(self,"editComment",{},smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnClasses",
fn: function (){
var self=this;
function $HLClassesFocusRequested(){return smalltalk.HLClassesFocusRequested||(typeof HLClassesFocusRequested=="undefined"?nil:HLClassesFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLClassesFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnClasses",{},smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnMethods",
fn: function (){
var self=this;
function $HLMethodsFocusRequested(){return smalltalk.HLMethodsFocusRequested||(typeof HLMethodsFocusRequested=="undefined"?nil:HLMethodsFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLMethodsFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnMethods",{},smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnPackages",
fn: function (){
var self=this;
function $HLPackagesFocusRequested(){return smalltalk.HLPackagesFocusRequested||(typeof HLPackagesFocusRequested=="undefined"?nil:HLPackagesFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLPackagesFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnPackages",{},smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnProtocols",
fn: function (){
var self=this;
function $HLProtocolsFocusRequested(){return smalltalk.HLProtocolsFocusRequested||(typeof HLProtocolsFocusRequested=="undefined"?nil:HLProtocolsFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLProtocolsFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnProtocols",{},smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnSourceCode",
fn: function (){
var self=this;
function $HLSourceCodeFocusRequested(){return smalltalk.HLSourceCodeFocusRequested||(typeof HLSourceCodeFocusRequested=="undefined"?nil:HLSourceCodeFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLSourceCodeFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnSourceCode",{},smalltalk.HLBrowserModel)})},
messageSends: ["announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isBrowserModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isBrowserModel",{},smalltalk.HLBrowserModel)})},
messageSends: []}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "setClassComment:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._setClassCommentOf_to_(_st(self._selectedClass())._theNonMetaClass(),aString);
return self}, function($ctx1) {$ctx1.fill(self,"setClassComment:",{aString:aString},smalltalk.HLBrowserModel)})},
messageSends: ["setClassCommentOf:to:", "theNonMetaClass", "selectedClass", "environment"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "showComment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@showComment"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"showComment",{},smalltalk.HLBrowserModel)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "showComment:",
fn: function (aBoolean){
var self=this;
function $HLShowCommentToggled(){return smalltalk.HLShowCommentToggled||(typeof HLShowCommentToggled=="undefined"?nil:HLShowCommentToggled)}
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self["@showComment"]=aBoolean;
self["@showComment"];
return _st(self._announcer())._announce_(_st($HLShowCommentToggled())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showComment:",{aBoolean:aBoolean},smalltalk.HLBrowserModel)})},
messageSends: ["withChangesDo:", "announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "showInstance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@showInstance"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=true;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"showInstance",{},smalltalk.HLBrowserModel)})},
messageSends: ["ifNil:"]}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "showInstance:",
fn: function (aBoolean){
var self=this;
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self["@showInstance"]=aBoolean;
self["@showInstance"];
$1=self._selectedClass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=self;
$4=aBoolean;
if(smalltalk.assert($4)){
$3=_st(self._selectedClass())._theNonMetaClass();
} else {
$3=_st(self._selectedClass())._theMetaClass();
};
_st($2)._selectedClass_($3);
};
return _st(self._announcer())._announce_(_st($HLShowInstanceToggled())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showInstance:",{aBoolean:aBoolean},smalltalk.HLBrowserModel)})},
messageSends: ["withChangesDo:", "ifNotNil:", "selectedClass:", "ifTrue:ifFalse:", "theNonMetaClass", "selectedClass", "theMetaClass", "announce:", "new", "announcer"]}),
smalltalk.HLBrowserModel);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},smalltalk.HLBrowserModel.klass)})},
messageSends: ["environment:", "new", "yourself"]}),
smalltalk.HLBrowserModel.klass);


smalltalk.addClass('HLClassCache', smalltalk.Object, ['class', 'selectorsCache', 'overrideCache', 'overriddenCache'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "invalidateChildrenSelector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self._theClass())._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(self._selectorsCache())._cacheFor_(each);
_st($1)._removeSelector_(aSelector);
$2=_st($1)._invalidateChildrenSelector_(aSelector);
return $2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"invalidateChildrenSelector:",{aSelector:aSelector},smalltalk.HLClassCache)})},
messageSends: ["do:", "removeSelector:", "cacheFor:", "selectorsCache", "invalidateChildrenSelector:", "subclasses", "theClass"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "invalidateParentSelector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self._theClass())._superclass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=_st(self._selectorsCache())._cacheFor_(_st(self._theClass())._superclass());
_st($2)._removeSelector_(aSelector);
$3=_st($2)._invalidateParentSelector_(aSelector);
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"invalidateParentSelector:",{aSelector:aSelector},smalltalk.HLClassCache)})},
messageSends: ["ifNotNil:", "removeSelector:", "cacheFor:", "superclass", "theClass", "selectorsCache", "invalidateParentSelector:"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "invalidateSelector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._invalidateParentSelector_(aSelector);
_st($1)._invalidateChildrenSelector_(aSelector);
$2=_st($1)._removeSelector_(aSelector);
return self}, function($ctx1) {$ctx1.fill(self,"invalidateSelector:",{aSelector:aSelector},smalltalk.HLClassCache)})},
messageSends: ["invalidateParentSelector:", "invalidateChildrenSelector:", "removeSelector:"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverridden:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._overriddenCache())._at_ifAbsentPut_(_st(aMethod)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aMethod)._isOverridden();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod},smalltalk.HLClassCache)})},
messageSends: ["at:ifAbsentPut:", "selector", "isOverridden", "overriddenCache"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverride:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._overrideCache())._at_ifAbsentPut_(_st(aMethod)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aMethod)._isOverride();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod},smalltalk.HLClassCache)})},
messageSends: ["at:ifAbsentPut:", "selector", "isOverride", "overrideCache"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "overriddenCache",
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@overriddenCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@overriddenCache"]=_st($HashedCollection())._new();
$1=self["@overriddenCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"overriddenCache",{},smalltalk.HLClassCache)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "overrideCache",
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@overrideCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@overrideCache"]=_st($HashedCollection())._new();
$1=self["@overrideCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"overrideCache",{},smalltalk.HLClassCache)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._overriddenCache())._removeKey_ifAbsent_(aSelector,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self._overrideCache())._removeKey_ifAbsent_(aSelector,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aSelector:aSelector},smalltalk.HLClassCache)})},
messageSends: ["removeKey:ifAbsent:", "overriddenCache", "overrideCache"]}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorsCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectorsCache"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{},smalltalk.HLClassCache)})},
messageSends: []}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorsCache:",
fn: function (aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectorsCache"]=aCache;
return self}, function($ctx1) {$ctx1.fill(self,"selectorsCache:",{aCache:aCache},smalltalk.HLClassCache)})},
messageSends: []}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@class"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.HLClassCache)})},
messageSends: []}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@class"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.HLClassCache)})},
messageSends: []}),
smalltalk.HLClassCache);


smalltalk.addMethod(
smalltalk.method({
selector: "on:selectorsCache:",
fn: function (aClass,aSelectorsCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._theClass_(aClass);
_st($2)._selectorsCache_(aSelectorsCache);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:selectorsCache:",{aClass:aClass,aSelectorsCache:aSelectorsCache},smalltalk.HLClassCache.klass)})},
messageSends: ["theClass:", "new", "selectorsCache:", "yourself"]}),
smalltalk.HLClassCache.klass);


smalltalk.addClass('HLClassesListWidget', smalltalk.HLToolListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(aClass)._theNonMetaClass())._comment())._isEmpty();
if(smalltalk.assert($1)){
return "uncommented";
};
$2=_st(_st(aClass)._theNonMetaClass())._heliosClass();
return $2;
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{aClass:aClass},smalltalk.HLClassesListWidget)})},
messageSends: ["ifTrue:", "isEmpty", "comment", "theNonMetaClass", "heliosClass"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focusMethodsListWidget",
fn: function (){
var self=this;
function $HLMethodsListFocus(){return smalltalk.HLMethodsListFocus||(typeof HLMethodsListFocus=="undefined"?nil:HLMethodsListFocus)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._announcer())._announce_(_st($HLMethodsListFocus())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusMethodsListWidget",{},smalltalk.HLClassesListWidget)})},
messageSends: ["announce:", "new", "announcer", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focusProtocolsListWidget",
fn: function (){
var self=this;
function $HLProtocolsListFocus(){return smalltalk.HLProtocolsListFocus||(typeof HLProtocolsListFocus=="undefined"?nil:HLProtocolsListFocus)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._announcer())._announce_(_st($HLProtocolsListFocus())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusProtocolsListWidget",{},smalltalk.HLClassesListWidget)})},
messageSends: ["announce:", "new", "announcer", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "getChildrenOf:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._items())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._superclass()).__eq(aClass);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getChildrenOf:",{aClass:aClass},smalltalk.HLClassesListWidget)})},
messageSends: ["select:", "=", "superclass", "items"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "getRootClassesOf:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aCollection)._includes_(_st(each)._superclass()))._not();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getRootClassesOf:",{aCollection:aCollection},smalltalk.HLClassesListWidget)})},
messageSends: ["select:", "not", "includes:", "superclass"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Classes";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLClassesListWidget)})},
messageSends: []}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
function $HLPackageSelected(){return smalltalk.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLShowCommentToggled(){return smalltalk.HLShowCommentToggled||(typeof HLShowCommentToggled=="undefined"?nil:HLShowCommentToggled)}
function $HLClassSelected(){return smalltalk.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLClassesFocusRequested(){return smalltalk.HLClassesFocusRequested||(typeof HLClassesFocusRequested=="undefined"?nil:HLClassesFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLPackageSelected(),"onPackageSelected:",self);
_st($1)._on_send_to_($HLShowInstanceToggled(),"onShowInstanceToggled",self);
_st($1)._on_send_to_($HLShowCommentToggled(),"onShowCommentToggled",self);
_st($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
$2=_st($1)._on_send_to_($HLClassesFocusRequested(),"onClassesFocusRequested",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLClassesListWidget)})},
messageSends: ["on:send:to:", "announcer", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
function $ClassAdded(){return smalltalk.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
function $ClassRemoved(){return smalltalk.ClassRemoved||(typeof ClassRemoved=="undefined"?nil:ClassRemoved)}
function $ClassMoved(){return smalltalk.ClassMoved||(typeof ClassMoved=="undefined"?nil:ClassMoved)}
function $ClassRenamed(){return smalltalk.ClassRenamed||(typeof ClassRenamed=="undefined"?nil:ClassRenamed)}
function $ClassMigrated(){return smalltalk.ClassMigrated||(typeof ClassMigrated=="undefined"?nil:ClassMigrated)}
function $ClassCommentChanged(){return smalltalk.ClassCommentChanged||(typeof ClassCommentChanged=="undefined"?nil:ClassCommentChanged)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._systemAnnouncer();
_st($1)._on_send_to_($ClassAdded(),"onClassAdded:",self);
_st($1)._on_send_to_($ClassRemoved(),"onClassRemoved:",self);
_st($1)._on_send_to_($ClassMoved(),"onClassMoved:",self);
_st($1)._on_send_to_($ClassRenamed(),"onClassRenamed:",self);
_st($1)._on_send_to_($ClassMigrated(),"onClassMigrated:",self);
$2=_st($1)._on_send_to_($ClassCommentChanged(),"onClassCommentChanged:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLClassesListWidget)})},
messageSends: ["on:send:to:", "systemAnnouncer", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassAdded:",
fn: function (anAnnouncement){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
class_=_st(anAnnouncement)._theClass();
$1=_st(_st(_st(class_)._package()).__eq(_st(self._model())._selectedPackage()))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._items())._includes_(class_);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
self._setItemsForSelectedPackage();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassAdded:",{anAnnouncement:anAnnouncement,class_:class_},smalltalk.HLClassesListWidget)})},
messageSends: ["theClass", "ifFalse:", "or:", "includes:", "items", "=", "selectedPackage", "model", "package", "setItemsForSelectedPackage", "refresh"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassCommentChanged:",
fn: function (anAnnouncement){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
class_=_st(anAnnouncement)._theClass();
$1=_st(_st(class_)._package()).__eq(_st(self._model())._selectedPackage());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassCommentChanged:",{anAnnouncement:anAnnouncement,class_:class_},smalltalk.HLClassesListWidget)})},
messageSends: ["theClass", "ifFalse:", "=", "selectedPackage", "model", "package", "refresh"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassMigrated:",
fn: function (anAnnouncement){
var self=this;
var class_,oldClass;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
class_=_st(anAnnouncement)._theClass();
oldClass=_st(anAnnouncement)._oldClass();
$1=_st(self._items())._includes_(oldClass);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(self._model())._selectedClass()).__eq(oldClass);
if(smalltalk.assert($3)){
_st(self._model())._selectedClass_(class_);
};
self._setItemsForSelectedPackage();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassMigrated:",{anAnnouncement:anAnnouncement,class_:class_,oldClass:oldClass},smalltalk.HLClassesListWidget)})},
messageSends: ["theClass", "oldClass", "ifFalse:", "includes:", "items", "ifTrue:", "selectedClass:", "model", "=", "selectedClass", "setItemsForSelectedPackage", "refresh"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassMoved:",
fn: function (anAnnouncement){
var self=this;
var class_,oldPackage;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
class_=_st(anAnnouncement)._theClass();
oldPackage=_st(anAnnouncement)._oldPackage();
$1=_st(_st(oldPackage).__eq(_st(self._model())._selectedPackage()))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(class_)._package()).__eq(_st(self._model())._selectedPackage());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(oldPackage).__eq(_st(self._model())._selectedPackage());
if(smalltalk.assert($3)){
$4=self;
_st($4)._selectedItem_(nil);
$5=_st($4)._selectItem_(nil);
$5;
};
self._setItemsForSelectedPackage();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassMoved:",{anAnnouncement:anAnnouncement,class_:class_,oldPackage:oldPackage},smalltalk.HLClassesListWidget)})},
messageSends: ["theClass", "oldPackage", "ifFalse:", "or:", "=", "selectedPackage", "model", "package", "ifTrue:", "selectedItem:", "selectItem:", "setItemsForSelectedPackage", "refresh"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassRemoved:",
fn: function (anAnnouncement){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
class_=_st(anAnnouncement)._theClass();
$1=_st(_st(class_)._package()).__eq(_st(self._model())._selectedPackage());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
self._setItemsForSelectedPackage();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassRemoved:",{anAnnouncement:anAnnouncement,class_:class_},smalltalk.HLClassesListWidget)})},
messageSends: ["theClass", "ifFalse:", "=", "selectedPackage", "model", "package", "setItemsForSelectedPackage", "refresh"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassRenamed:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(anAnnouncement)._theClass())._package()).__eq(_st(self._model())._selectedPackage());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
self._setItemsForSelectedPackage();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassRenamed:",{anAnnouncement:anAnnouncement},smalltalk.HLClassesListWidget)})},
messageSends: ["ifFalse:", "=", "selectedPackage", "model", "package", "theClass", "setItemsForSelectedPackage", "refresh"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassSelected:",
fn: function (anAnnouncement){
var self=this;
var selectedClass;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(anAnnouncement)._item();
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
selectedClass=_st(_st(anAnnouncement)._item())._theNonMetaClass();
self._selectedItem_(selectedClass);
$3=self._hasFocus();
if(! smalltalk.assert($3)){
$4=self;
_st($4)._activateItem_(selectedClass);
$5=_st($4)._focus();
$5;
};
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement,selectedClass:selectedClass},smalltalk.HLClassesListWidget)})},
messageSends: ["ifNil:", "item", "theNonMetaClass", "selectedItem:", "ifFalse:", "activateItem:", "focus", "hasFocus"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassesFocusRequested",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onClassesFocusRequested",{},smalltalk.HLClassesListWidget)})},
messageSends: ["focus"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageSelected:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectedItem_(nil);
self._setItemsForSelectedPackage();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLClassesListWidget)})},
messageSends: ["selectedItem:", "setItemsForSelectedPackage", "refresh"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowCommentToggled",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onShowCommentToggled",{},smalltalk.HLClassesListWidget)})},
messageSends: ["refresh"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowInstanceToggled",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},smalltalk.HLClassesListWidget)})},
messageSends: ["refresh"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
var checkbox;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$2,$9,$11,$12,$10,$13;
$1=_st(html)._div();
_st($1)._class_("btn-group");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
_st($3)._class_(_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {
_st(str)._nextPutAll_("btn");
$4=self._showInstance();
if(smalltalk.assert($4)){
return _st(str)._nextPutAll_(" active");
};
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx2)})})));
_st($3)._with_("Instance");
$5=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showInstance_(true);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$5;
$6=_st(html)._button();
_st($6)._class_(_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {
_st(str)._nextPutAll_("btn");
$7=self._showClass();
if(smalltalk.assert($7)){
return _st(str)._nextPutAll_(" active");
};
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx2)})})));
_st($6)._with_("Class");
$8=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showInstance_(false);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$9=_st(html)._label();
_st($9)._class_("checkbox");
$10=_st($9)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$11=_st(html)._input();
_st($11)._type_("checkbox");
$12=_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._toggleShowComment();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
checkbox=$12;
checkbox;
return _st(html)._with_("Doc");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$13=self._showComment();
if(smalltalk.assert($13)){
_st(checkbox)._at_put_("checked","checked");
};
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html,checkbox:checkbox},smalltalk.HLClassesListWidget)})},
messageSends: ["class:", "div", "with:", "streamContents:", "nextPutAll:", "ifTrue:", "showInstance", "button", "onClick:", "showInstance:", "showClass", "label", "type:", "input", "toggleShowComment", "at:put:", "showComment"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:level:on:",
fn: function (aClass,anInteger,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
li=_st(html)._li();
self._registerMappingFrom_to_(aClass,li);
$1=li;
_st($1)._at_put_("list-data",_st(self._items())._indexOf_(aClass));
_st($1)._class_(self._listCssClassForItem_(aClass));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._tag_("i"))._class_(self._cssClassForItem_(aClass));
return self._renderItemLabel_level_on_(aClass,anInteger,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._activateListItem_(_st(li)._asJQuery());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self._getChildrenOf_(aClass))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderItem_level_on_(each,_st(anInteger).__plus((1)),html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:level:on:",{aClass:aClass,anInteger:anInteger,html:html,li:li},smalltalk.HLClassesListWidget)})},
messageSends: ["li", "registerMappingFrom:to:", "at:put:", "indexOf:", "items", "class:", "listCssClassForItem:", "with:", "cssClassForItem:", "tag:", "renderItemLabel:level:on:", "a", "onClick:", "activateListItem:", "asJQuery", "do:", "renderItem:level:on:", "+", "getChildrenOf:"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
fn: function (aClass,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLClassesListWidget.superclass.fn.prototype._renderItem_on_.apply(_st(self), [aClass,html]);
_st(self._getChildrenOf_(aClass))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderItem_level_on_(each,(1),html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{aClass:aClass,html:html},smalltalk.HLClassesListWidget)})},
messageSends: ["renderItem:on:", "do:", "renderItem:level:on:", "getChildrenOf:"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:level:on:",
fn: function (aClass,anInteger,html){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(html)._span())._asJQuery())._html_(_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {
_st(anInteger)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(str)._nextPutAll_("&nbsp;&nbsp;&nbsp;&nbsp;");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return _st(str)._nextPutAll_(_st(aClass)._name());
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:level:on:",{aClass:aClass,anInteger:anInteger,html:html},smalltalk.HLClassesListWidget)})},
messageSends: ["html:", "streamContents:", "timesRepeat:", "nextPutAll:", "name", "asJQuery", "span"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
fn: function (aClass,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderItemLabel_level_on_(aClass,(0),html);
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aClass:aClass,html:html},smalltalk.HLClassesListWidget)})},
messageSends: ["renderItemLabel:level:on:"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderListOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._getRootClassesOf_(self._items()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderItem_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderListOn:",{html:html},smalltalk.HLClassesListWidget)})},
messageSends: ["do:", "renderItem:on:", "getRootClassesOf:", "items"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._selectedClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aClass:aClass},smalltalk.HLClassesListWidget)})},
messageSends: ["selectedClass:", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForPackage:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=self;
$3=aPackage;
if(($receiver = $3) == nil || $receiver == undefined){
$2=[];
} else {
$2=_st(_st(_st(_st(_st(aPackage)._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._theNonMetaClass();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asSet())._asArray())._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._name()).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
};
_st($1)._items_($2);
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForPackage:",{aPackage:aPackage},smalltalk.HLClassesListWidget)})},
messageSends: ["items:", "ifNil:ifNotNil:", "sort:", "<", "name", "asArray", "asSet", "collect:", "theNonMetaClass", "classes"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForSelectedPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setItemsForPackage_(_st(self._model())._selectedPackage());
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedPackage",{},smalltalk.HLClassesListWidget)})},
messageSends: ["setItemsForPackage:", "selectedPackage", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._showInstance())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"showClass",{},smalltalk.HLClassesListWidget)})},
messageSends: ["not", "showInstance", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showComment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._showComment();
return $1;
}, function($ctx1) {$ctx1.fill(self,"showComment",{},smalltalk.HLClassesListWidget)})},
messageSends: ["showComment", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showComment:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._showComment_(aBoolean);
return self}, function($ctx1) {$ctx1.fill(self,"showComment:",{aBoolean:aBoolean},smalltalk.HLClassesListWidget)})},
messageSends: ["showComment:", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showInstance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._showInstance();
return $1;
}, function($ctx1) {$ctx1.fill(self,"showInstance",{},smalltalk.HLClassesListWidget)})},
messageSends: ["showInstance", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showInstance:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._showInstance_(aBoolean);
return self}, function($ctx1) {$ctx1.fill(self,"showInstance:",{aBoolean:aBoolean},smalltalk.HLClassesListWidget)})},
messageSends: ["showInstance:", "model"]}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleShowComment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._showComment_(_st(self._showComment())._not());
return self}, function($ctx1) {$ctx1.fill(self,"toggleShowComment",{},smalltalk.HLClassesListWidget)})},
messageSends: ["showComment:", "not", "showComment", "model"]}),
smalltalk.HLClassesListWidget);



smalltalk.addClass('HLDocumentationWidget', smalltalk.HLFocusableWidget, ['model'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultDocumentation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "No documentation available. \x0a**That's bad. Seriously.**";
}, function($ctx1) {$ctx1.fill(self,"defaultDocumentation",{},smalltalk.HLDocumentationWidget)})},
messageSends: []}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHead",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "No class selected";
}, function($ctx1) {$ctx1.fill(self,"defaultHead",{},smalltalk.HLDocumentationWidget)})},
messageSends: []}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "documentation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._selectedItem();
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
var item;
item=$receiver;
$1=_st(_st(item)._comment())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._defaultDocumentation();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"documentation",{},smalltalk.HLDocumentationWidget)})},
messageSends: ["ifNil:ifNotNil:", "ifEmpty:", "defaultDocumentation", "comment", "selectedItem"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editDocumentation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._editComment();
return self}, function($ctx1) {$ctx1.fill(self,"editDocumentation",{},smalltalk.HLDocumentationWidget)})},
messageSends: ["editComment", "model"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "head",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._selectedItem();
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._defaultHead();
} else {
var item;
item=$receiver;
$1=_st(item)._name();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"head",{},smalltalk.HLDocumentationWidget)})},
messageSends: ["ifNil:ifNotNil:", "defaultHead", "name", "selectedItem"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLDocumentationWidget)})},
messageSends: []}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@model"]=aModel;
$1=self;
_st($1)._observeSystem();
$2=_st($1)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLDocumentationWidget)})},
messageSends: ["observeSystem", "observeModel"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
function $HLClassSelected(){return smalltalk.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLEditComment(){return smalltalk.HLEditComment||(typeof HLEditComment=="undefined"?nil:HLEditComment)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
$2=_st($1)._on_send_to_($HLEditComment(),"onEditDocumentation",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLDocumentationWidget)})},
messageSends: ["on:send:to:", "announcer", "model"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
function $ClassCommentChanged(){return smalltalk.ClassCommentChanged||(typeof ClassCommentChanged=="undefined"?nil:ClassCommentChanged)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._systemAnnouncer())._on_send_to_($ClassCommentChanged(),"onClassCommentChanged:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLDocumentationWidget)})},
messageSends: ["on:send:to:", "systemAnnouncer", "model"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassCommentChanged:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anAnnouncement)._theClass()).__eq(_st(_st(self._model())._selectedClass())._theNonMetaClass());
if(smalltalk.assert($1)){
self._refresh();
};
return self}, function($ctx1) {$ctx1.fill(self,"onClassCommentChanged:",{anAnnouncement:anAnnouncement},smalltalk.HLDocumentationWidget)})},
messageSends: ["ifTrue:", "refresh", "=", "theNonMetaClass", "selectedClass", "model", "theClass"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassSelected:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLDocumentationWidget)})},
messageSends: ["refresh"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onEditDocumentation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._request_value_do_(_st(_st(_st(_st(self._model())._selectedClass())._theNonMetaClass())._name()).__comma(" comment"),_st(_st(_st(self._model())._selectedClass())._theNonMetaClass())._comment(),(function(comment){
return smalltalk.withContext(function($ctx2) {
return self._setClassComment_(comment);
}, function($ctx2) {$ctx2.fillBlock({comment:comment},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"onEditDocumentation",{},smalltalk.HLDocumentationWidget)})},
messageSends: ["request:value:do:", ",", "name", "theNonMetaClass", "selectedClass", "model", "comment", "setClassComment:"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("doc");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=self;
_st($3)._renderHeadOn_(html);
$4=_st($3)._renderDocOn_(html);
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLDocumentationWidget)})},
messageSends: ["class:", "div", "with:", "renderHeadOn:", "renderDocOn:"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderDocOn:",
fn: function (html){
var self=this;
function $Showdown(){return smalltalk.Showdown||(typeof Showdown=="undefined"?nil:Showdown)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3,$6,$7;
$1=self._selectedItem();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._renderInheritanceOn_(html);
$2=_st(html)._h1();
_st($2)._with_("Overview");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._button();
_st($4)._class_("button default");
_st($4)._with_("Edit");
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._editDocumentation();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3;
$6=_st(html)._div();
_st($6)._class_("markdown");
$7=_st($6)._asJQuery();
_st($7)._html_(_st(_st(_st($Showdown())._at_("converter"))._new())._makeHtml_(self._documentation()));
};
return self}, function($ctx1) {$ctx1.fill(self,"renderDocOn:",{html:html},smalltalk.HLDocumentationWidget)})},
messageSends: ["ifNotNil:", "renderInheritanceOn:", "with:", "h1", "class:", "button", "onClick:", "editDocumentation", "html:", "makeHtml:", "documentation", "new", "at:", "div", "asJQuery", "selectedItem"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("head");
$2=_st($1)._with_(self._head());
return self}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},smalltalk.HLDocumentationWidget)})},
messageSends: ["class:", "div", "with:", "head"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderInheritanceOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$2;
$1=_st(html)._div();
_st($1)._class_("inheritance");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Subclass of ");
$3=_st(self._selectedItem())._superclass();
if(($receiver = $3) == nil || $receiver == undefined){
return _st(_st(html)._em())._with_("nil");
} else {
$4=_st(html)._a();
_st($4)._with_(_st(_st(self._selectedItem())._superclass())._name());
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._selectClass_(_st(self._selectedItem())._superclass());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $5;
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderInheritanceOn:",{html:html},smalltalk.HLDocumentationWidget)})},
messageSends: ["class:", "div", "with:", "ifNil:ifNotNil:", "em", "name", "superclass", "selectedItem", "a", "onClick:", "selectClass:"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._selectedClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"selectClass:",{aClass:aClass},smalltalk.HLDocumentationWidget)})},
messageSends: ["selectedClass:", "model"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self._model())._selectedClass();
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
var class_;
class_=$receiver;
$1=_st(class_)._theNonMetaClass();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},smalltalk.HLDocumentationWidget)})},
messageSends: ["ifNotNil:", "theNonMetaClass", "selectedClass", "model"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setClassComment:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._setClassComment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"setClassComment:",{aString:aString},smalltalk.HLDocumentationWidget)})},
messageSends: ["setClassComment:", "model"]}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLDocumentationWidget.superclass.fn.prototype._unregister.apply(_st(self), []);
_st(_st(self._model())._announcer())._unregister_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLDocumentationWidget)})},
messageSends: ["unregister", "unregister:", "announcer", "model"]}),
smalltalk.HLDocumentationWidget);



smalltalk.addClass('HLMethodsListWidget', smalltalk.HLToolListWidget, ['selectorsCache'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "allProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._allProtocol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{},smalltalk.HLMethodsListWidget)})},
messageSends: ["allProtocol", "model"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
fn: function (aSelector){
var self=this;
var override,overriden,method;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
method=self._methodForSelector_(aSelector);
override=self._isOverride_(method);
overriden=self._isOverridden_(method);
$2=override;
if(smalltalk.assert($2)){
$3=overriden;
if(smalltalk.assert($3)){
$1="override-overridden";
} else {
$1="override";
};
} else {
$4=overriden;
if(smalltalk.assert($4)){
$1="overridden";
} else {
$1="";
};
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{aSelector:aSelector,override:override,overriden:overriden,method:method},smalltalk.HLMethodsListWidget)})},
messageSends: ["methodForSelector:", "isOverride:", "isOverridden:", "ifTrue:ifFalse:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverridden:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._selectorsCache())._isOverridden_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod},smalltalk.HLMethodsListWidget)})},
messageSends: ["isOverridden:", "selectorsCache"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverride:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._selectorsCache())._isOverride_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod},smalltalk.HLMethodsListWidget)})},
messageSends: ["isOverride:", "selectorsCache"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Methods";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMethodsListWidget)})},
messageSends: []}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodForSelector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._model())._selectedClass())._methodDictionary())._at_(aSelector);
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodForSelector:",{aSelector:aSelector},smalltalk.HLMethodsListWidget)})},
messageSends: ["at:", "methodDictionary", "selectedClass", "model"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsInProtocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
$1=_st(self._model())._selectedClass();
if(($receiver = $1) == nil || $receiver == undefined){
$2=[];
return $2;
} else {
$1;
};
$4=_st(aString).__eq(self._allProtocol());
if(smalltalk.assert($4)){
$3=_st(_st(self._model())._selectedClass())._methods();
} else {
$3=_st(_st(self._model())._selectedClass())._methodsInProtocol_(aString);
};
return $3;
}, function($ctx1) {$ctx1.fill(self,"methodsInProtocol:",{aString:aString},smalltalk.HLMethodsListWidget)})},
messageSends: ["ifNil:", "selectedClass", "model", "ifTrue:ifFalse:", "methods", "methodsInProtocol:", "=", "allProtocol"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
function $HLProtocolSelected(){return smalltalk.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLMethodSelected(){return smalltalk.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
function $HLMethodsFocusRequested(){return smalltalk.HLMethodsFocusRequested||(typeof HLMethodsFocusRequested=="undefined"?nil:HLMethodsFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLProtocolSelected(),"onProtocolSelected:",self);
_st($1)._on_send_to_($HLShowInstanceToggled(),"onShowInstanceToggled",self);
_st($1)._on_send_to_($HLMethodSelected(),"onMethodSelected:",self);
$2=_st($1)._on_send_to_($HLMethodsFocusRequested(),"onMethodsFocusRequested",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLMethodsListWidget)})},
messageSends: ["on:send:to:", "announcer", "model"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
function $ProtocolAdded(){return smalltalk.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
function $ProtocolRemoved(){return smalltalk.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
function $MethodAdded(){return smalltalk.MethodAdded||(typeof MethodAdded=="undefined"?nil:MethodAdded)}
function $MethodRemoved(){return smalltalk.MethodRemoved||(typeof MethodRemoved=="undefined"?nil:MethodRemoved)}
function $MethodMoved(){return smalltalk.MethodMoved||(typeof MethodMoved=="undefined"?nil:MethodMoved)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._systemAnnouncer();
_st($1)._on_send_to_($ProtocolAdded(),"onProtocolAdded:",self);
_st($1)._on_send_to_($ProtocolRemoved(),"onProtocolRemoved:",self);
_st($1)._on_send_to_($MethodAdded(),"onMethodAdded:",self);
_st($1)._on_send_to_($MethodRemoved(),"onMethodRemoved:",self);
$2=_st($1)._on_send_to_($MethodMoved(),"onMethodMoved:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLMethodsListWidget)})},
messageSends: ["on:send:to:", "systemAnnouncer", "model"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodAdded:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self._model())._selectedClass()).__eq(_st(_st(anAnnouncement)._method())._methodClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
self._setItemsForSelectedProtocol();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodAdded:",{anAnnouncement:anAnnouncement},smalltalk.HLMethodsListWidget)})},
messageSends: ["ifFalse:", "=", "methodClass", "method", "selectedClass", "model", "setItemsForSelectedProtocol", "refresh"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodMoved:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(_st(self._model())._selectedMethod()).__eq(_st(anAnnouncement)._method());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(self._model())._selectedProtocol()).__eq(_st(self._model())._allProtocol());
if(! smalltalk.assert($3)){
$4=self;
_st($4)._selectedItem_(nil);
_st($4)._selectItem_(nil);
_st($4)._setItemsForSelectedProtocol();
$5=_st($4)._refresh();
$5;
};
return self}, function($ctx1) {$ctx1.fill(self,"onMethodMoved:",{anAnnouncement:anAnnouncement},smalltalk.HLMethodsListWidget)})},
messageSends: ["ifFalse:", "=", "method", "selectedMethod", "model", "selectedItem:", "selectItem:", "setItemsForSelectedProtocol", "refresh", "allProtocol", "selectedProtocol"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodRemoved:",
fn: function (anAnnouncement){
var self=this;
var method;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
var $early={};
try {
method=_st(anAnnouncement)._method();
_st(self._items())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st(method)._selector());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$1=self;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=self._selectedItem();
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
$3=_st(_st(_st(method)._methodClass()).__eq(_st(self._model())._selectedClass()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(method)._selector()).__eq(self._selectedItem());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
$4=self;
_st($4)._selectedItem_(nil);
$5=_st($4)._selectItem_(nil);
$5;
};
};
self._setItemsForSelectedProtocol();
self._refresh();
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"onMethodRemoved:",{anAnnouncement:anAnnouncement,method:method},smalltalk.HLMethodsListWidget)})},
messageSends: ["method", "detect:ifNone:", "=", "selector", "items", "ifNotNil:", "ifTrue:", "selectedItem:", "selectItem:", "and:", "selectedItem", "selectedClass", "model", "methodClass", "setItemsForSelectedProtocol", "refresh"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodSelected:",
fn: function (anAnnouncement){
var self=this;
var selector,method;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
method=_st(anAnnouncement)._item();
$1=_st(method)._isCompiledMethod();
if(smalltalk.assert($1)){
selector=_st(method)._selector();
} else {
selector=nil;
};
$2=self;
_st($2)._selectedItem_(selector);
$3=_st($2)._activateItem_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{anAnnouncement:anAnnouncement,selector:selector,method:method},smalltalk.HLMethodsListWidget)})},
messageSends: ["item", "ifTrue:ifFalse:", "selector", "isCompiledMethod", "selectedItem:", "activateItem:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodsFocusRequested",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodsFocusRequested",{},smalltalk.HLMethodsListWidget)})},
messageSends: ["focus"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolAdded:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self._model())._selectedClass()).__eq(_st(anAnnouncement)._theClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
self._setItemsForSelectedProtocol();
self._refresh();
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolAdded:",{anAnnouncement:anAnnouncement},smalltalk.HLMethodsListWidget)})},
messageSends: ["ifFalse:", "=", "theClass", "selectedClass", "model", "setItemsForSelectedProtocol", "refresh", "focus"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolRemoved:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self._model())._selectedClass()).__eq(_st(anAnnouncement)._theClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
self._setItemsForSelectedProtocol();
self._refresh();
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolRemoved:",{anAnnouncement:anAnnouncement},smalltalk.HLMethodsListWidget)})},
messageSends: ["ifFalse:", "=", "theClass", "selectedClass", "model", "setItemsForSelectedProtocol", "refresh", "focus"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolSelected:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectedItem_(nil);
self._setItemsForSelectedProtocol();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLMethodsListWidget)})},
messageSends: ["selectedItem:", "setItemsForSelectedProtocol", "refresh"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowInstanceToggled",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._onProtocolSelected_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},smalltalk.HLMethodsListWidget)})},
messageSends: ["onProtocolSelected:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "overrideSelectors",
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(self._selectorsCache())._at_ifAbsentPut_("override",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self._model())._selectedClass())._allSuperclasses())._inject_into_(_st($Set())._new(),(function(acc,each){
return smalltalk.withContext(function($ctx3) {
$2=acc;
_st($2)._addAll_(_st(each)._selectors());
$3=_st($2)._yourself();
return $3;
}, function($ctx3) {$ctx3.fillBlock({acc:acc,each:each},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"overrideSelectors",{},smalltalk.HLMethodsListWidget)})},
messageSends: ["at:ifAbsentPut:", "inject:into:", "new", "addAll:", "selectors", "yourself", "allSuperclasses", "selectedClass", "model", "selectorsCache"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "overridenSelectors",
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(self._selectorsCache())._at_ifAbsentPut_("overriden",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self._model())._selectedClass())._allSubclasses())._inject_into_(_st($Set())._new(),(function(acc,each){
return smalltalk.withContext(function($ctx3) {
$2=acc;
_st($2)._addAll_(_st(each)._selectors());
$3=_st($2)._yourself();
return $3;
}, function($ctx3) {$ctx3.fillBlock({acc:acc,each:each},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"overridenSelectors",{},smalltalk.HLMethodsListWidget)})},
messageSends: ["at:ifAbsentPut:", "inject:into:", "new", "addAll:", "selectors", "yourself", "allSubclasses", "selectedClass", "model", "selectorsCache"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self._model())._showInstance();
if(smalltalk.assert($1)){
smalltalk.HLMethodsListWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
} else {
$2=_st(html)._div();
_st($2)._class_("class_side");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HLMethodsListWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLMethodsListWidget)})},
messageSends: ["ifFalse:ifTrue:", "class:", "div", "with:", "renderContentOn:", "showInstance", "model"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
fn: function (aSelector,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(aSelector);
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aSelector:aSelector,html:html},smalltalk.HLMethodsListWidget)})},
messageSends: ["with:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aSelector;
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(self._model())._selectedMethod_(nil);
return $2;
} else {
$1;
};
_st(self._model())._selectedMethod_(self._methodForSelector_(aSelector));
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aSelector:aSelector},smalltalk.HLMethodsListWidget)})},
messageSends: ["ifNil:", "selectedMethod:", "model", "methodForSelector:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorsCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._selectorsCache();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{},smalltalk.HLMethodsListWidget)})},
messageSends: ["selectorsCache", "class"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorsInProtocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._methodsInProtocol_(aString))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._selector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._sorted();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsInProtocol:",{aString:aString},smalltalk.HLMethodsListWidget)})},
messageSends: ["sorted", "collect:", "selector", "methodsInProtocol:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForProtocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1;
$2=self;
$4=aString;
if(($receiver = $4) == nil || $receiver == undefined){
$3=[];
} else {
$3=self._selectorsInProtocol_(aString);
};
$1=_st($2)._items_($3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"setItemsForProtocol:",{aString:aString},smalltalk.HLMethodsListWidget)})},
messageSends: ["items:", "ifNil:ifNotNil:", "selectorsInProtocol:"]}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForSelectedProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setItemsForProtocol_(_st(self._model())._selectedProtocol());
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedProtocol",{},smalltalk.HLMethodsListWidget)})},
messageSends: ["setItemsForProtocol:", "selectedProtocol", "model"]}),
smalltalk.HLMethodsListWidget);


smalltalk.HLMethodsListWidget.klass.iVarNames = ['selectorsCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "selectorsCache",
fn: function (){
var self=this;
function $HLSelectorsCache(){return smalltalk.HLSelectorsCache||(typeof HLSelectorsCache=="undefined"?nil:HLSelectorsCache)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLSelectorsCache())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{},smalltalk.HLMethodsListWidget.klass)})},
messageSends: ["current"]}),
smalltalk.HLMethodsListWidget.klass);


smalltalk.addClass('HLPackagesListWidget', smalltalk.HLToolListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._commitPackage();
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage",{},smalltalk.HLPackagesListWidget)})},
messageSends: ["commitPackage", "model"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "package";
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{anItem:anItem},smalltalk.HLPackagesListWidget)})},
messageSends: []}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focusClassesListWidget",
fn: function (){
var self=this;
function $HLClassesListFocus(){return smalltalk.HLClassesListFocus||(typeof HLClassesListFocus=="undefined"?nil:HLClassesListFocus)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._announcer())._announce_(_st($HLClassesListFocus())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusClassesListWidget",{},smalltalk.HLPackagesListWidget)})},
messageSends: ["announce:", "new", "announcer", "model"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeItems",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@items"]=_st(_st(self._model())._packages())._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._name()).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
$1=self["@items"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeItems",{},smalltalk.HLPackagesListWidget)})},
messageSends: ["sort:", "<", "name", "packages", "model"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@items"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._initializeItems();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},smalltalk.HLPackagesListWidget)})},
messageSends: ["ifNil:", "initializeItems"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Packages";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLPackagesListWidget)})},
messageSends: []}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
function $HLPackageSelected(){return smalltalk.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLPackagesFocusRequested(){return smalltalk.HLPackagesFocusRequested||(typeof HLPackagesFocusRequested=="undefined"?nil:HLPackagesFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLPackageSelected(),"onPackageSelected:",self);
$2=_st($1)._on_send_to_($HLPackagesFocusRequested(),"onPackagesFocusRequested",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLPackagesListWidget)})},
messageSends: ["on:send:to:", "announcer", "model"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
function $ClassAdded(){return smalltalk.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._systemAnnouncer())._on_send_to_($ClassAdded(),"onClassAdded:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLPackagesListWidget)})},
messageSends: ["on:send:to:", "systemAnnouncer", "model"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassAdded:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self._items())._includes_(_st(_st(anAnnouncement)._theClass())._package());
if(! smalltalk.assert($1)){
$2=self;
_st($2)._initializeItems();
$3=_st($2)._refresh();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"onClassAdded:",{anAnnouncement:anAnnouncement},smalltalk.HLPackagesListWidget)})},
messageSends: ["ifFalse:", "initializeItems", "refresh", "includes:", "package", "theClass", "items"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageSelected:",
fn: function (anAnnouncement){
var self=this;
var package_;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
package_=_st(anAnnouncement)._item();
self._selectedItem_(package_);
$1=self._hasFocus();
if(! smalltalk.assert($1)){
$2=self;
_st($2)._activateItem_(package_);
$3=_st($2)._focus();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement,package_:package_},smalltalk.HLPackagesListWidget)})},
messageSends: ["item", "selectedItem:", "ifFalse:", "activateItem:", "focus", "hasFocus"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackagesFocusRequested",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onPackagesFocusRequested",{},smalltalk.HLPackagesListWidget)})},
messageSends: ["focus"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
fn: function (aPackage,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(aPackage)._name());
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aPackage:aPackage,html:html},smalltalk.HLPackagesListWidget)})},
messageSends: ["with:", "name"]}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._selectedPackage_(aPackage);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aPackage:aPackage},smalltalk.HLPackagesListWidget)})},
messageSends: ["selectedPackage:", "model"]}),
smalltalk.HLPackagesListWidget);



smalltalk.addClass('HLProtocolsListWidget', smalltalk.HLToolListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "allProtocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._allProtocol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{},smalltalk.HLProtocolsListWidget)})},
messageSends: ["allProtocol", "model"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(anItem).__eq(self._allProtocol());
if(smalltalk.assert($1)){
return "";
};
$2=_st(anItem).__eq("private");
if(smalltalk.assert($2)){
return "private";
};
$3=_st(anItem).__eq("initialization");
if(smalltalk.assert($3)){
return "initialization";
};
$4=_st(anItem)._match_("^\x5c*");
if(smalltalk.assert($4)){
return "extension";
};
return "";
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{anItem:anItem},smalltalk.HLProtocolsListWidget)})},
messageSends: ["ifTrue:", "=", "allProtocol", "match:"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Protocols";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLProtocolsListWidget)})},
messageSends: []}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
function $HLClassSelected(){return smalltalk.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLProtocolSelected(){return smalltalk.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLProtocolsFocusRequested(){return smalltalk.HLProtocolsFocusRequested||(typeof HLProtocolsFocusRequested=="undefined"?nil:HLProtocolsFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
_st($1)._on_send_to_($HLShowInstanceToggled(),"onClassSelected:",self);
_st($1)._on_send_to_($HLProtocolSelected(),"onProtocolSelected:",self);
$2=_st($1)._on_send_to_($HLProtocolsFocusRequested(),"onProtocolsFocusRequested",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLProtocolsListWidget)})},
messageSends: ["on:send:to:", "announcer", "model"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
function $ProtocolAdded(){return smalltalk.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
function $ProtocolRemoved(){return smalltalk.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._systemAnnouncer();
_st($1)._on_send_to_($ProtocolAdded(),"onProtocolAdded:",self);
$2=_st($1)._on_send_to_($ProtocolRemoved(),"onProtocolRemoved:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLProtocolsListWidget)})},
messageSends: ["on:send:to:", "systemAnnouncer", "model"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassSelected:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectedItem_(nil);
self._setItemsForSelectedClass();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLProtocolsListWidget)})},
messageSends: ["selectedItem:", "setItemsForSelectedClass", "refresh"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolAdded:",
fn: function (anAnnouncement){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
class_=_st(anAnnouncement)._theClass();
$1=_st(class_).__eq(_st(self._model())._selectedClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
self._setItemsForSelectedClass();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolAdded:",{anAnnouncement:anAnnouncement,class_:class_},smalltalk.HLProtocolsListWidget)})},
messageSends: ["theClass", "ifFalse:", "=", "selectedClass", "model", "setItemsForSelectedClass", "refresh"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolRemoved:",
fn: function (anAnnouncement){
var self=this;
var class_,protocol;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
class_=_st(anAnnouncement)._theClass();
protocol=_st(anAnnouncement)._protocol();
$1=_st(class_).__eq(_st(self._model())._selectedClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(self._model())._selectedProtocol()).__eq(protocol);
if(smalltalk.assert($3)){
$4=self;
_st($4)._selectedItem_(nil);
$5=_st($4)._selectItem_(nil);
$5;
};
self._setItemsForSelectedClass();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolRemoved:",{anAnnouncement:anAnnouncement,class_:class_,protocol:protocol},smalltalk.HLProtocolsListWidget)})},
messageSends: ["theClass", "protocol", "ifFalse:", "=", "selectedClass", "model", "ifTrue:", "selectedItem:", "selectItem:", "selectedProtocol", "setItemsForSelectedClass", "refresh"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolSelected:",
fn: function (anAnnouncement){
var self=this;
var protocol;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
protocol=_st(anAnnouncement)._item();
self._selectedItem_(protocol);
$1=protocol;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
$3=self._hasFocus();
if(! smalltalk.assert($3)){
$4=self;
_st($4)._activateItem_(protocol);
$5=_st($4)._focus();
$5;
};
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{anAnnouncement:anAnnouncement,protocol:protocol},smalltalk.HLProtocolsListWidget)})},
messageSends: ["item", "selectedItem:", "ifNil:", "ifFalse:", "activateItem:", "focus", "hasFocus"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolsFocusRequested",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolsFocusRequested",{},smalltalk.HLProtocolsListWidget)})},
messageSends: ["focus"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self._model())._showInstance();
if(smalltalk.assert($1)){
smalltalk.HLProtocolsListWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
} else {
$2=_st(html)._div();
_st($2)._class_("class_side");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HLProtocolsListWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLProtocolsListWidget)})},
messageSends: ["ifFalse:ifTrue:", "class:", "div", "with:", "renderContentOn:", "showInstance", "model"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._selectedProtocol_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aString:aString},smalltalk.HLProtocolsListWidget)})},
messageSends: ["selectedProtocol:", "model"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HLProtocolsListWidget.superclass.fn.prototype._selectedItem.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},smalltalk.HLProtocolsListWidget)})},
messageSends: ["selectedItem"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForClass:",
fn: function (aClass){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$2;
$1=self;
$3=aClass;
if(($receiver = $3) == nil || $receiver == undefined){
$2=_st($Array())._with_(self._allProtocol());
} else {
$4=_st($Array())._with_(self._allProtocol());
_st($4)._addAll_(_st(aClass)._protocols());
$5=_st($4)._yourself();
$2=$5;
};
_st($1)._items_($2);
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForClass:",{aClass:aClass},smalltalk.HLProtocolsListWidget)})},
messageSends: ["items:", "ifNil:ifNotNil:", "with:", "allProtocol", "addAll:", "protocols", "yourself"]}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForSelectedClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setItemsForClass_(_st(self._model())._selectedClass());
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedClass",{},smalltalk.HLProtocolsListWidget)})},
messageSends: ["setItemsForClass:", "selectedClass", "model"]}),
smalltalk.HLProtocolsListWidget);



smalltalk.addClass('HLSelectorsCache', smalltalk.Object, ['classesCache'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "cacheFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aClass;
if(($receiver = $1) == nil || $receiver == undefined){
return nil;
} else {
$1;
};
$2=_st(self._classesCache())._at_ifAbsentPut_(_st(aClass)._name(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._newCacheFor_(aClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"cacheFor:",{aClass:aClass},smalltalk.HLSelectorsCache)})},
messageSends: ["ifNil:", "at:ifAbsentPut:", "name", "newCacheFor:", "classesCache"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "classesCache",
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@classesCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@classesCache"]=_st($HashedCollection())._new();
$1=self["@classesCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesCache",{},smalltalk.HLSelectorsCache)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLSelectorsCache.superclass.fn.prototype._initialize.apply(_st(self), []);
self._observeSystem();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLSelectorsCache)})},
messageSends: ["initialize", "observeSystem"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "invalidateCacheFor:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._cacheFor_(_st(aMethod)._methodClass()))._invalidateSelector_(_st(aMethod)._selector());
return self}, function($ctx1) {$ctx1.fill(self,"invalidateCacheFor:",{aMethod:aMethod},smalltalk.HLSelectorsCache)})},
messageSends: ["invalidateSelector:", "selector", "cacheFor:", "methodClass"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverridden:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._cacheFor_(_st(aMethod)._methodClass()))._isOverridden_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod},smalltalk.HLSelectorsCache)})},
messageSends: ["isOverridden:", "cacheFor:", "methodClass"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverride:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._cacheFor_(_st(aMethod)._methodClass()))._isOverride_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod},smalltalk.HLSelectorsCache)})},
messageSends: ["isOverride:", "cacheFor:", "methodClass"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "newCacheFor:",
fn: function (aClass){
var self=this;
function $HLClassCache(){return smalltalk.HLClassCache||(typeof HLClassCache=="undefined"?nil:HLClassCache)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLClassCache())._on_selectorsCache_(aClass,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCacheFor:",{aClass:aClass},smalltalk.HLSelectorsCache)})},
messageSends: ["on:selectorsCache:"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
function $MethodAdded(){return smalltalk.MethodAdded||(typeof MethodAdded=="undefined"?nil:MethodAdded)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $MethodRemoved(){return smalltalk.MethodRemoved||(typeof MethodRemoved=="undefined"?nil:MethodRemoved)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($SystemAnnouncer())._current();
_st($1)._on_send_to_($MethodAdded(),"onMethodAdded:",self);
$2=_st($1)._on_send_to_($MethodRemoved(),"onMethodRemoved:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLSelectorsCache)})},
messageSends: ["on:send:to:", "current"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodAdded:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._invalidateCacheFor_(_st(anAnnouncement)._method());
return self}, function($ctx1) {$ctx1.fill(self,"onMethodAdded:",{anAnnouncement:anAnnouncement},smalltalk.HLSelectorsCache)})},
messageSends: ["invalidateCacheFor:", "method"]}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodRemoved:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._invalidateCacheFor_(_st(anAnnouncement)._method());
return self}, function($ctx1) {$ctx1.fill(self,"onMethodRemoved:",{anAnnouncement:anAnnouncement},smalltalk.HLSelectorsCache)})},
messageSends: ["invalidateCacheFor:", "method"]}),
smalltalk.HLSelectorsCache);


smalltalk.HLSelectorsCache.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.HLSelectorsCache.klass.superclass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.HLSelectorsCache.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLSelectorsCache.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "flush",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@current"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"flush",{},smalltalk.HLSelectorsCache.klass)})},
messageSends: []}),
smalltalk.HLSelectorsCache.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.HLSelectorsCache.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.HLSelectorsCache.klass);


