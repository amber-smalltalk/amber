smalltalk.addPackage('Helios-References');
smalltalk.addClass('HLReferences', smalltalk.HLWidget, ['model', 'sendersListWidget', 'implementorsListWidget', 'classReferencesListWidget', 'regexpListWidget', 'sourceCodeWidget'], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "classReferencesListWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLClassReferencesListWidget(){return smalltalk.HLClassReferencesListWidget||(typeof HLClassReferencesListWidget=="undefined"?nil:HLClassReferencesListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@classReferencesListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@classReferencesListWidget"]=_st($HLClassReferencesListWidget())._on_(_st(self)._model());
self["@classReferencesListWidget"];
$1=_st(self["@classReferencesListWidget"])._next_(_st(self)._regexpListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classReferencesListWidget",{},smalltalk.HLReferences)})},
args: [],
source: "classReferencesListWidget\x0a\x09^ classReferencesListWidget ifNil: [\x0a      \x09classReferencesListWidget := HLClassReferencesListWidget on: self model.\x0a\x09\x09classReferencesListWidget next: self regexpListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "regexpListWidget"],
referencedClasses: ["HLClassReferencesListWidget"]
}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "implementorsListWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLImplementorsListWidget(){return smalltalk.HLImplementorsListWidget||(typeof HLImplementorsListWidget=="undefined"?nil:HLImplementorsListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@implementorsListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@implementorsListWidget"]=_st($HLImplementorsListWidget())._on_(_st(self)._model());
self["@implementorsListWidget"];
$1=_st(self["@implementorsListWidget"])._next_(_st(self)._classReferencesListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"implementorsListWidget",{},smalltalk.HLReferences)})},
args: [],
source: "implementorsListWidget\x0a\x09^ implementorsListWidget ifNil: [\x0a      \x09implementorsListWidget := HLImplementorsListWidget on: self model.\x0a\x09\x09implementorsListWidget next: self classReferencesListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "classReferencesListWidget"],
referencedClasses: ["HLImplementorsListWidget"]
}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
function $HLReferencesModel(){return smalltalk.HLReferencesModel||(typeof HLReferencesModel=="undefined"?nil:HLReferencesModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($HLReferencesModel())._new();
_st($3)._environment_(_st(_st(self)._manager())._environment());
$4=_st($3)._yourself();
self["@model"]=$4;
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLReferences)})},
args: [],
source: "model\x0a\x09^ model ifNil: [\x0a\x09\x09model := (HLReferencesModel new\x0a\x09\x09\x09environment: self manager environment;\x0a\x09\x09\x09yourself) ]",
messageSends: ["ifNil:", "environment:", "environment", "manager", "new", "yourself"],
referencedClasses: ["HLReferencesModel"]
}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLReferences)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'actions',
fn: function (){
var self=this;
function $HLTab(){return smalltalk.HLTab||(typeof HLTab=="undefined"?nil:HLTab)}
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLManager())._current())._addTab_(_st($HLTab())._on_labelled_(self,_st(_st(self)._class())._tabLabel()));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.HLReferences)})},
args: [],
source: "open\x0a\x09HLManager current addTab: (HLTab on: self labelled: self class tabLabel)",
messageSends: ["addTab:", "on:labelled:", "tabLabel", "class", "current"],
referencedClasses: ["HLTab", "HLManager"]
}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "regexpListWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLRegexpListWidget(){return smalltalk.HLRegexpListWidget||(typeof HLRegexpListWidget=="undefined"?nil:HLRegexpListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@regexpListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@regexpListWidget"]=_st($HLRegexpListWidget())._on_(_st(self)._model());
self["@regexpListWidget"];
$1=_st(self["@regexpListWidget"])._next_(_st(self)._sourceCodeWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"regexpListWidget",{},smalltalk.HLReferences)})},
args: [],
source: "regexpListWidget\x0a\x09^ regexpListWidget ifNil: [\x0a      \x09regexpListWidget := HLRegexpListWidget on: self model.\x0a\x09\x09regexpListWidget next: self sourceCodeWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "sourceCodeWidget"],
referencedClasses: ["HLRegexpListWidget"]
}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $HLVerticalSplitter(){return smalltalk.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
function $HLHorizontalSplitter(){return smalltalk.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLContainer(){return smalltalk.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($HLContainer())._with_(_st($HLHorizontalSplitter())._with_with_(_st($HLVerticalSplitter())._with_with_(_st($HLVerticalSplitter())._with_with_(_st(self)._sendersListWidget(),_st(self)._implementorsListWidget()),_st($HLVerticalSplitter())._with_with_(_st(self)._classReferencesListWidget(),_st(self)._regexpListWidget())),_st(self)._sourceCodeWidget())));
_st(_st(self)._sendersListWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLReferences)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter \x0a    \x09with: (HLVerticalSplitter\x0a        \x09with: (HLVerticalSplitter\x0a            \x09with: self sendersListWidget\x0a                with: self implementorsListWidget)\x0a            with: (HLVerticalSplitter\x0a            \x09with: self classReferencesListWidget\x0a                with: self regexpListWidget)) \x0a        with: self sourceCodeWidget)).\x0a\x09\x0a\x09self sendersListWidget focus",
messageSends: ["with:", "with:with:", "sendersListWidget", "implementorsListWidget", "classReferencesListWidget", "regexpListWidget", "sourceCodeWidget", "focus"],
referencedClasses: ["HLVerticalSplitter", "HLHorizontalSplitter", "HLContainer"]
}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "search:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._search_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},smalltalk.HLReferences)})},
args: ["aString"],
source: "search: aString\x0a\x09self model search: aString",
messageSends: ["search:", "model"],
referencedClasses: []
}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "sendersListWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLSendersListWidget(){return smalltalk.HLSendersListWidget||(typeof HLSendersListWidget=="undefined"?nil:HLSendersListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@sendersListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@sendersListWidget"]=_st($HLSendersListWidget())._on_(_st(self)._model());
self["@sendersListWidget"];
$1=_st(self["@sendersListWidget"])._next_(_st(self)._implementorsListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendersListWidget",{},smalltalk.HLReferences)})},
args: [],
source: "sendersListWidget\x0a\x09^ sendersListWidget ifNil: [\x0a      \x09sendersListWidget := HLSendersListWidget on: self model.\x0a\x09\x09sendersListWidget next: self implementorsListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "implementorsListWidget"],
referencedClasses: ["HLSendersListWidget"]
}),
smalltalk.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceCodeWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLNavigationCodeWidget(){return smalltalk.HLNavigationCodeWidget||(typeof HLNavigationCodeWidget=="undefined"?nil:HLNavigationCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@sourceCodeWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@sourceCodeWidget"]=_st($HLNavigationCodeWidget())._new();
$1=self["@sourceCodeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceCodeWidget",{},smalltalk.HLReferences)})},
args: [],
source: "sourceCodeWidget\x0a\x09^ sourceCodeWidget ifNil: [\x0a      \x09sourceCodeWidget := HLNavigationCodeWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLNavigationCodeWidget"]
}),
smalltalk.HLReferences);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLReferences.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLReferences.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "References";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLReferences.klass)})},
args: [],
source: "tabLabel\x0a\x09^ 'References'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLReferences.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(100);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLReferences.klass)})},
args: [],
source: "tabPriority\x0a\x09^ 100",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLReferences.klass);


smalltalk.addClass('HLReferencesListWidget', smalltalk.HLNavigationListWidget, ['model'], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "List";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLReferencesListWidget)})},
args: [],
source: "label\x0a\x09^ 'List'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLReferencesListWidget);

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
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLReferencesListWidget)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
_st(self)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLReferencesListWidget)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel.\x0a\x09\x0a\x09self observeModel",
messageSends: ["observeModel"],
referencedClasses: []
}),
smalltalk.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
function $HLSearchReferences(){return smalltalk.HLSearchReferences||(typeof HLSearchReferences=="undefined"?nil:HLSearchReferences)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self)._model())._announcer())._on_do_($HLSearchReferences(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onSearchReferences_(_st(ann)._searchString());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLReferencesListWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer\x0a\x09\x09on: HLSearchReferences\x0a\x09\x09do: [ :ann | self onSearchReferences: ann searchString ]",
messageSends: ["on:do:", "onSearchReferences:", "searchString", "announcer", "model"],
referencedClasses: ["HLSearchReferences"]
}),
smalltalk.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
category: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},smalltalk.HLReferencesListWidget)})},
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._renderHeadOn_(html);
smalltalk.HLNavigationListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLReferencesListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self renderHeadOn: html.\x09\x0a\x09super renderContentOn: html",
messageSends: ["renderHeadOn:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("list-label");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(_st(self)._label());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},smalltalk.HLReferencesListWidget)})},
args: ["html"],
source: "renderHeadOn: html\x0a\x09html div \x0a\x09\x09class: 'list-label';\x0a\x09\x09with: [\x0a\x09\x09\x09html with: self label ]",
messageSends: ["class:", "div", "with:", "label"],
referencedClasses: []
}),
smalltalk.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
category: 'rendering',
fn: function (aMethod,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(_st(_st(_st(aMethod)._methodClass())._name()).__comma(" >> #")).__comma(_st(aMethod)._selector()));
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aMethod:aMethod,html:html},smalltalk.HLReferencesListWidget)})},
args: ["aMethod", "html"],
source: "renderItemLabel: aMethod on: html\x0a\x09html with: aMethod methodClass name, ' >> #', aMethod selector",
messageSends: ["with:", ",", "selector", "name", "methodClass"],
referencedClasses: []
}),
smalltalk.HLReferencesListWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._model_(aModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aModel:aModel},smalltalk.HLReferencesListWidget.klass)})},
args: ["aModel"],
source: "on: aModel\x0a\x09^ self new \x0a\x09\x09model: aModel; \x0a\x09\x09yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLReferencesListWidget.klass);


smalltalk.addClass('HLClassReferencesListWidget', smalltalk.HLReferencesListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class references";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLClassReferencesListWidget)})},
args: [],
source: "label\x0a\x09^ 'Class references'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
category: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._selectItem_(nil);
_st(self)._items_(_st(_st(self)._model())._classReferencesOf_(aString));
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},smalltalk.HLClassReferencesListWidget)})},
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self selectItem: nil.\x0a\x09self items: (self model classReferencesOf: aString).\x0a\x09self refresh",
messageSends: ["selectItem:", "items:", "classReferencesOf:", "model", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassReferencesListWidget);



smalltalk.addClass('HLImplementorsListWidget', smalltalk.HLReferencesListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Implementors";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLImplementorsListWidget)})},
args: [],
source: "label\x0a\x09^ 'Implementors'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLImplementorsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
category: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._selectItem_(nil);
_st(self)._items_(_st(_st(self)._model())._implementorsOf_(aString));
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},smalltalk.HLImplementorsListWidget)})},
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self selectItem: nil.\x0a\x09self items: (self model implementorsOf: aString).\x0a\x09self refresh",
messageSends: ["selectItem:", "items:", "implementorsOf:", "model", "refresh"],
referencedClasses: []
}),
smalltalk.HLImplementorsListWidget);



smalltalk.addClass('HLRegexpListWidget', smalltalk.HLReferencesListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Source search";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRegexpListWidget)})},
args: [],
source: "label\x0a\x09^ 'Source search'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRegexpListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
category: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._selectItem_(nil);
_st(self)._items_(_st(_st(self)._model())._regexpReferencesOf_(aString));
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},smalltalk.HLRegexpListWidget)})},
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self selectItem: nil.\x0a\x09self items: (self model regexpReferencesOf: aString).\x0a\x09self refresh",
messageSends: ["selectItem:", "items:", "regexpReferencesOf:", "model", "refresh"],
referencedClasses: []
}),
smalltalk.HLRegexpListWidget);



smalltalk.addClass('HLSendersListWidget', smalltalk.HLReferencesListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Senders";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLSendersListWidget)})},
args: [],
source: "label\x0a\x09^ 'Senders'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSendersListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
category: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._selectItem_(nil);
_st(self)._items_(_st(_st(self)._model())._sendersOf_(aString));
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},smalltalk.HLSendersListWidget)})},
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self selectItem: nil.\x0a\x09self items: (self model sendersOf: aString).\x0a\x09self refresh",
messageSends: ["selectItem:", "items:", "sendersOf:", "model", "refresh"],
referencedClasses: []
}),
smalltalk.HLSendersListWidget);



smalltalk.addClass('HLReferencesModel', smalltalk.HLModel, ['methodsCache', 'classesAndMetaclassesCache'], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "allMethods",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._methodsCache();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allMethods",{},smalltalk.HLReferencesModel)})},
args: [],
source: "allMethods\x0a\x09^ self methodsCache",
messageSends: ["methodsCache"],
referencedClasses: []
}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "allSelectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._allMethods())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._selector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asSet();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},smalltalk.HLReferencesModel)})},
args: [],
source: "allSelectors\x0a\x09^ (self allMethods \x0a\x09\x09collect: [ :each | each selector ])\x0a\x09\x09asSet",
messageSends: ["asSet", "collect:", "selector", "allMethods"],
referencedClasses: []
}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "classReferencesOf:",
category: 'accessing',
fn: function (aString){
var self=this;
var references;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
references=_st($OrderedCollection())._new();
_st(_st(self)._classesAndMetaclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(each)._methodDictionary())._values())._do_((function(method){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(method)._referencedClasses())._includes_(aString);
if(smalltalk.assert($1)){
return _st(references)._add_(method);
};
}, function($ctx3) {$ctx3.fillBlock({method:method},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=references;
return $2;
}, function($ctx1) {$ctx1.fill(self,"classReferencesOf:",{aString:aString,references:references},smalltalk.HLReferencesModel)})},
args: ["aString"],
source: "classReferencesOf: aString\x0a\x09\x22Answer all methods referencing the class named aString\x22\x0a\x09\x0a\x09| references |\x0a\x09\x0a\x09references := OrderedCollection new.\x0a\x09\x0a\x09self classesAndMetaclasses do: [ :each |\x0a\x09\x09each methodDictionary values do: [ :method |\x0a\x09\x09\x09(method referencedClasses includes: aString) ifTrue: [\x0a\x09\x09\x09\x09references add: method ] ] ].\x0a\x09\x09\x09\x09\x0a\x09^ references",
messageSends: ["new", "do:", "ifTrue:", "add:", "includes:", "referencedClasses", "values", "methodDictionary", "classesAndMetaclasses"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "classesAndMetaclasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._classesAndMetaclassesCache();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesAndMetaclasses",{},smalltalk.HLReferencesModel)})},
args: [],
source: "classesAndMetaclasses\x0a\x09^ self classesAndMetaclassesCache",
messageSends: ["classesAndMetaclassesCache"],
referencedClasses: []
}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "classesAndMetaclassesCache",
category: 'cache',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@classesAndMetaclassesCache"];
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._updateClassesAndMetaclassesCache();
} else {
$1;
};
$2=self["@classesAndMetaclassesCache"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"classesAndMetaclassesCache",{},smalltalk.HLReferencesModel)})},
args: [],
source: "classesAndMetaclassesCache\x0a\x09classesAndMetaclassesCache ifNil: [ self updateClassesAndMetaclassesCache ].\x0a\x09\x0a\x09^ classesAndMetaclassesCache",
messageSends: ["ifNil:", "updateClassesAndMetaclassesCache"],
referencedClasses: []
}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "implementorsOf:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._allMethods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._selector()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"implementorsOf:",{aString:aString},smalltalk.HLReferencesModel)})},
args: ["aString"],
source: "implementorsOf: aString\x0a\x09^ self allMethods select: [ :each |\x0a\x09\x09each selector = aString ]",
messageSends: ["select:", "=", "selector", "allMethods"],
referencedClasses: []
}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsCache",
category: 'cache',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@methodsCache"];
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._updateMethodsCache();
} else {
$1;
};
$2=self["@methodsCache"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"methodsCache",{},smalltalk.HLReferencesModel)})},
args: [],
source: "methodsCache\x0a\x09methodsCache ifNil: [ self updateMethodsCache ].\x0a\x09\x0a\x09^ methodsCache",
messageSends: ["ifNil:", "updateMethodsCache"],
referencedClasses: []
}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "regexpReferencesOf:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._allMethods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._source())._match_(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"regexpReferencesOf:",{aString:aString},smalltalk.HLReferencesModel)})},
args: ["aString"],
source: "regexpReferencesOf: aString\x0a\x09^ self allMethods select: [ :each |\x0a\x09\x09each source match: aString ]",
messageSends: ["select:", "match:", "source", "allMethods"],
referencedClasses: []
}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "search:",
category: 'actions',
fn: function (aString){
var self=this;
function $HLSearchReferences(){return smalltalk.HLSearchReferences||(typeof HLSearchReferences=="undefined"?nil:HLSearchReferences)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._updateCaches();
$1=_st($HLSearchReferences())._new();
_st($1)._searchString_(aString);
$2=_st($1)._yourself();
_st(_st(self)._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},smalltalk.HLReferencesModel)})},
args: ["aString"],
source: "search: aString\x0a\x09self updateCaches.\x0a\x09\x0a\x09self announcer announce: (HLSearchReferences new\x0a\x09\x09searchString: aString;\x0a\x09\x09yourself)",
messageSends: ["updateCaches", "announce:", "searchString:", "new", "yourself", "announcer"],
referencedClasses: ["HLSearchReferences"]
}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "sendersOf:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._allMethods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._messageSends())._includes_(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendersOf:",{aString:aString},smalltalk.HLReferencesModel)})},
args: ["aString"],
source: "sendersOf: aString\x0a\x09^ self allMethods select: [ :each |\x0a\x09\x09each messageSends includes: aString ]",
messageSends: ["select:", "includes:", "messageSends", "allMethods"],
referencedClasses: []
}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCaches",
category: 'cache',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._updateClassesAndMetaclassesCache();
$2=_st($1)._updateMethodsCache();
return self}, function($ctx1) {$ctx1.fill(self,"updateCaches",{},smalltalk.HLReferencesModel)})},
args: [],
source: "updateCaches\x0a\x09self \x0a\x09\x09updateClassesAndMetaclassesCache;\x0a\x09\x09updateMethodsCache",
messageSends: ["updateClassesAndMetaclassesCache", "updateMethodsCache"],
referencedClasses: []
}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateClassesAndMetaclassesCache",
category: 'cache',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@classesAndMetaclassesCache"]=_st(_st(_st(self)._environment())._classes())._inject_into_(_st($OrderedCollection())._new(),(function(acc,each){
return smalltalk.withContext(function($ctx2) {
$1=acc;
_st($1)._add_(each);
_st($1)._add_(_st(each)._class());
$2=_st($1)._yourself();
return $2;
}, function($ctx2) {$ctx2.fillBlock({acc:acc,each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateClassesAndMetaclassesCache",{},smalltalk.HLReferencesModel)})},
args: [],
source: "updateClassesAndMetaclassesCache\x0a\x09classesAndMetaclassesCache := self environment classes \x0a\x09\x09inject: OrderedCollection new \x0a\x09\x09into: [ :acc :each |\x0a\x09\x09\x09acc \x0a\x09\x09\x09\x09add: each; \x0a\x09\x09\x09\x09add: each class;\x0a\x09\x09\x09\x09yourself ]",
messageSends: ["inject:into:", "new", "add:", "class", "yourself", "classes", "environment"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMethodsCache",
category: 'cache',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@methodsCache"]=_st(_st(self)._classesAndMetaclasses())._inject_into_(_st($OrderedCollection())._new(),(function(acc,each){
return smalltalk.withContext(function($ctx2) {
return _st(acc).__comma(_st(each)._methods());
}, function($ctx2) {$ctx2.fillBlock({acc:acc,each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateMethodsCache",{},smalltalk.HLReferencesModel)})},
args: [],
source: "updateMethodsCache\x0a\x09methodsCache := self classesAndMetaclasses\x0a\x09\x09inject: OrderedCollection new\x0a\x09\x09into: [ :acc :each |\x0a\x09\x09\x09acc, each methods ]",
messageSends: ["inject:into:", "new", ",", "methods", "classesAndMetaclasses"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLReferencesModel);



