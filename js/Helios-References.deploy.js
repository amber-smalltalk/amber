smalltalk.addPackage('Helios-References');
smalltalk.addClass('HLMethodReference', smalltalk.Object, ['selector', 'methodClass'], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromMethod:",
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._selector_(_st(aCompiledMethod)._selector());
$2=_st($1)._methodClass_(_st(aCompiledMethod)._methodClass());
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromMethod:",{aCompiledMethod:aCompiledMethod},smalltalk.HLMethodReference)})},
messageSends: ["selector:", "selector", "methodClass:", "methodClass"]}),
smalltalk.HLMethodReference);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodClass())._methodAt_(self._selector());
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.HLMethodReference)})},
messageSends: ["methodAt:", "selector", "methodClass"]}),
smalltalk.HLMethodReference);

smalltalk.addMethod(
smalltalk.method({
selector: "methodClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@methodClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodClass",{},smalltalk.HLMethodReference)})},
messageSends: []}),
smalltalk.HLMethodReference);

smalltalk.addMethod(
smalltalk.method({
selector: "methodClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@methodClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"methodClass:",{aClass:aClass},smalltalk.HLMethodReference)})},
messageSends: []}),
smalltalk.HLMethodReference);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.HLMethodReference)})},
messageSends: []}),
smalltalk.HLMethodReference);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.HLMethodReference)})},
messageSends: []}),
smalltalk.HLMethodReference);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._method())._source();
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.HLMethodReference)})},
messageSends: ["source", "method"]}),
smalltalk.HLMethodReference);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromMethod_(aCompiledMethod);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCompiledMethod:aCompiledMethod},smalltalk.HLMethodReference.klass)})},
messageSends: ["initializeFromMethod:", "new", "yourself"]}),
smalltalk.HLMethodReference.klass);


smalltalk.addClass('HLReferences', smalltalk.HLWidget, ['model', 'sendersListWidget', 'implementorsListWidget', 'classReferencesListWidget', 'regexpListWidget', 'sourceCodeWidget'], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "classReferencesListWidget",
fn: function (){
var self=this;
function $HLClassReferencesListWidget(){return smalltalk.HLClassReferencesListWidget||(typeof HLClassReferencesListWidget=="undefined"?nil:HLClassReferencesListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@classReferencesListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@classReferencesListWidget"]=_st($HLClassReferencesListWidget())._on_(self._model());
self["@classReferencesListWidget"];
$1=_st(self["@classReferencesListWidget"])._next_(self._regexpListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classReferencesListWidget",{},smalltalk.HLReferences)})},
messageSends: ["ifNil:", "on:", "model", "next:", "regexpListWidget"]}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "implementorsListWidget",
fn: function (){
var self=this;
function $HLImplementorsListWidget(){return smalltalk.HLImplementorsListWidget||(typeof HLImplementorsListWidget=="undefined"?nil:HLImplementorsListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@implementorsListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@implementorsListWidget"]=_st($HLImplementorsListWidget())._on_(self._model());
self["@implementorsListWidget"];
$1=_st(self["@implementorsListWidget"])._next_(self._classReferencesListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"implementorsListWidget",{},smalltalk.HLReferences)})},
messageSends: ["ifNil:", "on:", "model", "next:", "classReferencesListWidget"]}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
function $HLReferencesModel(){return smalltalk.HLReferencesModel||(typeof HLReferencesModel=="undefined"?nil:HLReferencesModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLReferencesModel())._new();
_st($3)._environment_(_st(self._manager())._environment());
$4=_st($3)._yourself();
self["@model"]=$4;
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLReferences)})},
messageSends: ["ifNil:", "environment:", "environment", "manager", "new", "yourself"]}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLReferences)})},
messageSends: []}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "regexpListWidget",
fn: function (){
var self=this;
function $HLRegexpListWidget(){return smalltalk.HLRegexpListWidget||(typeof HLRegexpListWidget=="undefined"?nil:HLRegexpListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@regexpListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@regexpListWidget"]=_st($HLRegexpListWidget())._on_(self._model());
self["@regexpListWidget"];
$1=_st(self["@regexpListWidget"])._next_(self._sourceCodeWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"regexpListWidget",{},smalltalk.HLReferences)})},
messageSends: ["ifNil:", "on:", "model", "next:", "sourceCodeWidget"]}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindingsOn:",
fn: function (aBindingGroup){
var self=this;
function $HLToolCommand(){return smalltalk.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
return smalltalk.withContext(function($ctx1) { 
_st($HLToolCommand())._registerConcreteClassesOn_for_(aBindingGroup,self._model());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},smalltalk.HLReferences)})},
messageSends: ["registerConcreteClassesOn:for:", "model"]}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
function $HLVerticalSplitter(){return smalltalk.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
function $HLHorizontalSplitter(){return smalltalk.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLContainer(){return smalltalk.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($HLContainer())._with_(_st($HLHorizontalSplitter())._with_with_(_st($HLVerticalSplitter())._with_with_(_st($HLVerticalSplitter())._with_with_(self._sendersListWidget(),self._implementorsListWidget()),_st($HLVerticalSplitter())._with_with_(self._classReferencesListWidget(),self._regexpListWidget())),self._sourceCodeWidget())));
_st(self._sendersListWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLReferences)})},
messageSends: ["with:", "with:with:", "sendersListWidget", "implementorsListWidget", "classReferencesListWidget", "regexpListWidget", "sourceCodeWidget", "focus"]}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "search:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._search_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},smalltalk.HLReferences)})},
messageSends: ["search:", "model"]}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "sendersListWidget",
fn: function (){
var self=this;
function $HLSendersListWidget(){return smalltalk.HLSendersListWidget||(typeof HLSendersListWidget=="undefined"?nil:HLSendersListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@sendersListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@sendersListWidget"]=_st($HLSendersListWidget())._on_(self._model());
self["@sendersListWidget"];
$1=_st(self["@sendersListWidget"])._next_(self._implementorsListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendersListWidget",{},smalltalk.HLReferences)})},
messageSends: ["ifNil:", "on:", "model", "next:", "implementorsListWidget"]}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceCodeWidget",
fn: function (){
var self=this;
function $HLBrowserCodeWidget(){return smalltalk.HLBrowserCodeWidget||(typeof HLBrowserCodeWidget=="undefined"?nil:HLBrowserCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@sourceCodeWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLBrowserCodeWidget())._new();
_st($3)._browserModel_(self._model());
$4=_st($3)._yourself();
self["@sourceCodeWidget"]=$4;
$1=self["@sourceCodeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceCodeWidget",{},smalltalk.HLReferences)})},
messageSends: ["ifNil:", "browserModel:", "model", "new", "yourself"]}),
smalltalk.HLReferences);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLReferences.klass)})},
messageSends: []}),
smalltalk.HLReferences.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "references";
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},smalltalk.HLReferences.klass)})},
messageSends: []}),
smalltalk.HLReferences.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "References";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLReferences.klass)})},
messageSends: []}),
smalltalk.HLReferences.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (100);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLReferences.klass)})},
messageSends: []}),
smalltalk.HLReferences.klass);


smalltalk.addClass('HLReferencesListWidget', smalltalk.HLToolListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "activateListItem:",
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HLReferencesListWidget.superclass.fn.prototype._activateListItem_.apply(_st(self), [anItem]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{anItem:anItem},smalltalk.HLReferencesListWidget)})},
messageSends: ["withChangesDo:", "activateListItem:", "model"]}),
smalltalk.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "commandCategory",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Methods";
}, function($ctx1) {$ctx1.fill(self,"commandCategory",{},smalltalk.HLReferencesListWidget)})},
messageSends: []}),
smalltalk.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "List";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLReferencesListWidget)})},
messageSends: []}),
smalltalk.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
function $HLSearchReferences(){return smalltalk.HLSearchReferences||(typeof HLSearchReferences=="undefined"?nil:HLSearchReferences)}
function $HLMethodSelected(){return smalltalk.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_do_($HLSearchReferences(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return self._onSearchReferences_(_st(ann)._searchString());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_($HLMethodSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return self._onMethodSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLReferencesListWidget)})},
messageSends: ["on:do:", "onSearchReferences:", "searchString", "announcer", "model", "onMethodSelected:", "item"]}),
smalltalk.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodSelected:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
var $early={};
try {
$1=aMethod;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self._items())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st(aMethod)._selector());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$3=self;
throw $early=[$3];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=self;
_st($4)._selectedItem_(_st(aMethod)._selector());
$5=_st($4)._activateItem_(_st(aMethod)._selector());
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{aMethod:aMethod},smalltalk.HLReferencesListWidget)})},
messageSends: ["ifNil:", "detect:ifNone:", "=", "selector", "items", "selectedItem:", "activateItem:"]}),
smalltalk.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},smalltalk.HLReferencesListWidget)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
fn: function (aMethod,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(_st(_st(_st(aMethod)._methodClass())._name()).__comma(" >> #")).__comma(_st(aMethod)._selector()));
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aMethod:aMethod,html:html},smalltalk.HLReferencesListWidget)})},
messageSends: ["with:", ",", "selector", "name", "methodClass"]}),
smalltalk.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._selectedMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aMethod:aMethod},smalltalk.HLReferencesListWidget)})},
messageSends: ["selectedMethod:", "model"]}),
smalltalk.HLReferencesListWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._model_(aModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aModel:aModel},smalltalk.HLReferencesListWidget.klass)})},
messageSends: ["model:", "new", "yourself"]}),
smalltalk.HLReferencesListWidget.klass);


smalltalk.addClass('HLClassReferencesListWidget', smalltalk.HLReferencesListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class references";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLClassReferencesListWidget)})},
messageSends: []}),
smalltalk.HLClassReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectItem_(nil);
self._items_(_st(self._model())._classReferencesOf_(aString));
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},smalltalk.HLClassReferencesListWidget)})},
messageSends: ["selectItem:", "items:", "classReferencesOf:", "model", "refresh"]}),
smalltalk.HLClassReferencesListWidget);



smalltalk.addClass('HLImplementorsListWidget', smalltalk.HLReferencesListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Implementors";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLImplementorsListWidget)})},
messageSends: []}),
smalltalk.HLImplementorsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectItem_(nil);
self._items_(_st(self._model())._implementorsOf_(aString));
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},smalltalk.HLImplementorsListWidget)})},
messageSends: ["selectItem:", "items:", "implementorsOf:", "model", "refresh"]}),
smalltalk.HLImplementorsListWidget);



smalltalk.addClass('HLRegexpListWidget', smalltalk.HLReferencesListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Source search";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRegexpListWidget)})},
messageSends: []}),
smalltalk.HLRegexpListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectItem_(nil);
self._items_(_st(self._model())._regexpReferencesOf_(aString));
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},smalltalk.HLRegexpListWidget)})},
messageSends: ["selectItem:", "items:", "regexpReferencesOf:", "model", "refresh"]}),
smalltalk.HLRegexpListWidget);



smalltalk.addClass('HLSendersListWidget', smalltalk.HLReferencesListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Senders";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLSendersListWidget)})},
messageSends: []}),
smalltalk.HLSendersListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectItem_(nil);
self._items_(_st(self._model())._sendersOf_(aString));
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},smalltalk.HLSendersListWidget)})},
messageSends: ["selectItem:", "items:", "sendersOf:", "model", "refresh"]}),
smalltalk.HLSendersListWidget);



smalltalk.addClass('HLReferencesModel', smalltalk.HLToolModel, ['methodsCache', 'classesAndMetaclassesCache'], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "allMethods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._methodsCache();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allMethods",{},smalltalk.HLReferencesModel)})},
messageSends: ["methodsCache"]}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "allSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._allMethods())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._selector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asSet();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},smalltalk.HLReferencesModel)})},
messageSends: ["asSet", "collect:", "selector", "allMethods"]}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "classReferencesOf:",
fn: function (aString){
var self=this;
var references;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
references=_st($OrderedCollection())._new();
_st(self._classesAndMetaclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(each)._methodDictionary())._values())._do_((function(method){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(method)._referencedClasses())._includes_(aString);
if(smalltalk.assert($1)){
return _st(references)._add_(method);
};
}, function($ctx3) {$ctx3.fillBlock({method:method},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=references;
return $2;
}, function($ctx1) {$ctx1.fill(self,"classReferencesOf:",{aString:aString,references:references},smalltalk.HLReferencesModel)})},
messageSends: ["new", "do:", "ifTrue:", "add:", "includes:", "referencedClasses", "values", "methodDictionary", "classesAndMetaclasses"]}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "classesAndMetaclasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._classesAndMetaclassesCache();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesAndMetaclasses",{},smalltalk.HLReferencesModel)})},
messageSends: ["classesAndMetaclassesCache"]}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "classesAndMetaclassesCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@classesAndMetaclassesCache"];
if(($receiver = $1) == nil || $receiver == undefined){
self._updateClassesAndMetaclassesCache();
} else {
$1;
};
$2=self["@classesAndMetaclassesCache"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"classesAndMetaclassesCache",{},smalltalk.HLReferencesModel)})},
messageSends: ["ifNil:", "updateClassesAndMetaclassesCache"]}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "implementorsOf:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._allMethods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._selector()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._methodReferenceOn_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"implementorsOf:",{aString:aString},smalltalk.HLReferencesModel)})},
messageSends: ["collect:", "methodReferenceOn:", "select:", "=", "selector", "allMethods"]}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isReferencesModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isReferencesModel",{},smalltalk.HLReferencesModel)})},
messageSends: []}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "methodReferenceOn:",
fn: function (aCompiledMethod){
var self=this;
function $HLMethodReference(){return smalltalk.HLMethodReference||(typeof HLMethodReference=="undefined"?nil:HLMethodReference)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLMethodReference())._on_(aCompiledMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodReferenceOn:",{aCompiledMethod:aCompiledMethod},smalltalk.HLReferencesModel)})},
messageSends: ["on:"]}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@methodsCache"];
if(($receiver = $1) == nil || $receiver == undefined){
self._updateMethodsCache();
} else {
$1;
};
$2=self["@methodsCache"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"methodsCache",{},smalltalk.HLReferencesModel)})},
messageSends: ["ifNil:", "updateMethodsCache"]}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "regexpReferencesOf:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._allMethods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._source())._match_(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._methodReferenceOn_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"regexpReferencesOf:",{aString:aString},smalltalk.HLReferencesModel)})},
messageSends: ["collect:", "methodReferenceOn:", "select:", "match:", "source", "allMethods"]}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "search:",
fn: function (aString){
var self=this;
function $HLSearchReferences(){return smalltalk.HLSearchReferences||(typeof HLSearchReferences=="undefined"?nil:HLSearchReferences)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._updateCaches();
$1=_st($HLSearchReferences())._new();
_st($1)._searchString_(aString);
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},smalltalk.HLReferencesModel)})},
messageSends: ["updateCaches", "announce:", "searchString:", "new", "yourself", "announcer"]}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "sendersOf:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._allMethods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._messageSends())._includes_(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._methodReferenceOn_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendersOf:",{aString:aString},smalltalk.HLReferencesModel)})},
messageSends: ["collect:", "methodReferenceOn:", "select:", "includes:", "messageSends", "allMethods"]}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCaches",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._updateClassesAndMetaclassesCache();
$2=_st($1)._updateMethodsCache();
return self}, function($ctx1) {$ctx1.fill(self,"updateCaches",{},smalltalk.HLReferencesModel)})},
messageSends: ["updateClassesAndMetaclassesCache", "updateMethodsCache"]}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateClassesAndMetaclassesCache",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@classesAndMetaclassesCache"]=_st(_st(self._environment())._classes())._inject_into_(_st($OrderedCollection())._new(),(function(acc,each){
return smalltalk.withContext(function($ctx2) {
$1=acc;
_st($1)._add_(each);
_st($1)._add_(_st(each)._class());
$2=_st($1)._yourself();
return $2;
}, function($ctx2) {$ctx2.fillBlock({acc:acc,each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateClassesAndMetaclassesCache",{},smalltalk.HLReferencesModel)})},
messageSends: ["inject:into:", "new", "add:", "class", "yourself", "classes", "environment"]}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMethodsCache",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@methodsCache"]=_st(self._classesAndMetaclasses())._inject_into_(_st($OrderedCollection())._new(),(function(acc,each){
return smalltalk.withContext(function($ctx2) {
return _st(acc).__comma(_st(each)._methods());
}, function($ctx2) {$ctx2.fillBlock({acc:acc,each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateMethodsCache",{},smalltalk.HLReferencesModel)})},
messageSends: ["inject:into:", "new", ",", "methods", "classesAndMetaclasses"]}),
smalltalk.HLReferencesModel);



