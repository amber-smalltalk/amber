define("helios/Helios-References", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "helios/Helios-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-References');
smalltalk.packages["Helios-References"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLMethodReference', globals.Object, ['selector', 'methodClass'], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromMethod:",
protocol: 'initialization',
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._selector_(_st(aCompiledMethod)._selector());
$1=self._methodClass_(_st(aCompiledMethod)._methodClass());
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromMethod:",{aCompiledMethod:aCompiledMethod},globals.HLMethodReference)})},
args: ["aCompiledMethod"],
source: "initializeFromMethod: aCompiledMethod\x0a\x09self\x0a\x09\x09selector: aCompiledMethod selector;\x0a\x09\x09methodClass: aCompiledMethod methodClass",
messageSends: ["selector:", "selector", "methodClass:", "methodClass"],
referencedClasses: []
}),
globals.HLMethodReference);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodClass())._methodAt_(self._selector());
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},globals.HLMethodReference)})},
args: [],
source: "method\x0a\x09^ self methodClass methodAt: self selector",
messageSends: ["methodAt:", "methodClass", "selector"],
referencedClasses: []
}),
globals.HLMethodReference);

smalltalk.addMethod(
smalltalk.method({
selector: "methodClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@methodClass"];
return $1;
},
args: [],
source: "methodClass\x0a\x09^ methodClass",
messageSends: [],
referencedClasses: []
}),
globals.HLMethodReference);

smalltalk.addMethod(
smalltalk.method({
selector: "methodClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@methodClass"]=aClass;
return self},
args: ["aClass"],
source: "methodClass: aClass\x0a\x09methodClass := aClass",
messageSends: [],
referencedClasses: []
}),
globals.HLMethodReference);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
globals.HLMethodReference);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLMethodReference);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._method())._source();
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},globals.HLMethodReference)})},
args: [],
source: "source\x0a\x09^ self method source",
messageSends: ["source", "method"],
referencedClasses: []
}),
globals.HLMethodReference);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initializeFromMethod_(aCompiledMethod);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCompiledMethod:aCompiledMethod},globals.HLMethodReference.klass)})},
args: ["aCompiledMethod"],
source: "on: aCompiledMethod\x0a\x09^ self new\x0a\x09\x09initializeFromMethod: aCompiledMethod;\x0a\x09\x09yourself",
messageSends: ["initializeFromMethod:", "new", "yourself"],
referencedClasses: []
}),
globals.HLMethodReference.klass);


smalltalk.addClass('HLReferences', globals.HLWidget, ['model', 'sendersListWidget', 'implementorsListWidget', 'classReferencesListWidget', 'regexpListWidget', 'sourceCodeWidget'], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "classReferencesListWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLClassReferencesListWidget(){return globals.HLClassReferencesListWidget||(typeof HLClassReferencesListWidget=="undefined"?nil:HLClassReferencesListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@classReferencesListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@classReferencesListWidget"]=_st($HLClassReferencesListWidget())._on_(self._model());
self["@classReferencesListWidget"];
$1=_st(self["@classReferencesListWidget"])._next_(self._regexpListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classReferencesListWidget",{},globals.HLReferences)})},
args: [],
source: "classReferencesListWidget\x0a\x09^ classReferencesListWidget ifNil: [\x0a      \x09classReferencesListWidget := HLClassReferencesListWidget on: self model.\x0a\x09\x09classReferencesListWidget next: self regexpListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "regexpListWidget"],
referencedClasses: ["HLClassReferencesListWidget"]
}),
globals.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "implementorsListWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLImplementorsListWidget(){return globals.HLImplementorsListWidget||(typeof HLImplementorsListWidget=="undefined"?nil:HLImplementorsListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@implementorsListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@implementorsListWidget"]=_st($HLImplementorsListWidget())._on_(self._model());
self["@implementorsListWidget"];
$1=_st(self["@implementorsListWidget"])._next_(self._classReferencesListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"implementorsListWidget",{},globals.HLReferences)})},
args: [],
source: "implementorsListWidget\x0a\x09^ implementorsListWidget ifNil: [\x0a      \x09implementorsListWidget := HLImplementorsListWidget on: self model.\x0a\x09\x09implementorsListWidget next: self classReferencesListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "classReferencesListWidget"],
referencedClasses: ["HLImplementorsListWidget"]
}),
globals.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLReferencesModel(){return globals.HLReferencesModel||(typeof HLReferencesModel=="undefined"?nil:HLReferencesModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
$2=self["@model"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($HLReferencesModel())._new();
_st($3)._environment_(_st(self._manager())._environment());
$4=_st($3)._yourself();
self["@model"]=$4;
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},globals.HLReferences)})},
args: [],
source: "model\x0a\x09^ model ifNil: [\x0a\x09\x09model := (HLReferencesModel new\x0a\x09\x09\x09environment: self manager environment;\x0a\x09\x09\x09yourself) ]",
messageSends: ["ifNil:", "environment:", "new", "environment", "manager", "yourself"],
referencedClasses: ["HLReferencesModel"]
}),
globals.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
self["@model"]=aModel;
return self},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
globals.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "regexpListWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLRegexpListWidget(){return globals.HLRegexpListWidget||(typeof HLRegexpListWidget=="undefined"?nil:HLRegexpListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@regexpListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@regexpListWidget"]=_st($HLRegexpListWidget())._on_(self._model());
self["@regexpListWidget"];
$1=_st(self["@regexpListWidget"])._next_(self._sourceCodeWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"regexpListWidget",{},globals.HLReferences)})},
args: [],
source: "regexpListWidget\x0a\x09^ regexpListWidget ifNil: [\x0a      \x09regexpListWidget := HLRegexpListWidget on: self model.\x0a\x09\x09regexpListWidget next: self sourceCodeWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "sourceCodeWidget"],
referencedClasses: ["HLRegexpListWidget"]
}),
globals.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindingsOn:",
protocol: 'actions',
fn: function (aBindingGroup){
var self=this;
function $HLToolCommand(){return globals.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
return smalltalk.withContext(function($ctx1) { 
_st($HLToolCommand())._registerConcreteClassesOn_for_(aBindingGroup,self._model());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},globals.HLReferences)})},
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup\x0a\x09HLToolCommand \x0a\x09\x09registerConcreteClassesOn: aBindingGroup \x0a\x09\x09for: self model",
messageSends: ["registerConcreteClassesOn:for:", "model"],
referencedClasses: ["HLToolCommand"]
}),
globals.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLContainer(){return globals.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
function $HLHorizontalSplitter(){return globals.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLVerticalSplitter(){return globals.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
return smalltalk.withContext(function($ctx1) { 
var $5,$4,$3,$2,$1;
$5=self._sendersListWidget();
$ctx1.sendIdx["sendersListWidget"]=1;
$4=_st($HLVerticalSplitter())._with_with_($5,self._implementorsListWidget());
$ctx1.sendIdx["with:with:"]=3;
$3=_st($HLVerticalSplitter())._with_with_($4,_st($HLVerticalSplitter())._with_with_(self._classReferencesListWidget(),self._regexpListWidget()));
$ctx1.sendIdx["with:with:"]=2;
$2=_st($HLHorizontalSplitter())._with_with_($3,self._sourceCodeWidget());
$ctx1.sendIdx["with:with:"]=1;
$1=_st($HLContainer())._with_($2);
_st(html)._with_($1);
$ctx1.sendIdx["with:"]=1;
_st(self._sendersListWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLReferences)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter \x0a    \x09with: (HLVerticalSplitter\x0a        \x09with: (HLVerticalSplitter\x0a            \x09with: self sendersListWidget\x0a                with: self implementorsListWidget)\x0a            with: (HLVerticalSplitter\x0a            \x09with: self classReferencesListWidget\x0a                with: self regexpListWidget)) \x0a        with: self sourceCodeWidget)).\x0a\x09\x0a\x09self sendersListWidget focus",
messageSends: ["with:", "with:with:", "sendersListWidget", "implementorsListWidget", "classReferencesListWidget", "regexpListWidget", "sourceCodeWidget", "focus"],
referencedClasses: ["HLContainer", "HLHorizontalSplitter", "HLVerticalSplitter"]
}),
globals.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "search:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._search_(aString);
self._setTabLabel_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},globals.HLReferences)})},
args: ["aString"],
source: "search: aString\x0a\x09self model search: aString.\x0a\x09self setTabLabel: aString",
messageSends: ["search:", "model", "setTabLabel:"],
referencedClasses: []
}),
globals.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "sendersListWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLSendersListWidget(){return globals.HLSendersListWidget||(typeof HLSendersListWidget=="undefined"?nil:HLSendersListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@sendersListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@sendersListWidget"]=_st($HLSendersListWidget())._on_(self._model());
self["@sendersListWidget"];
$1=_st(self["@sendersListWidget"])._next_(self._implementorsListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendersListWidget",{},globals.HLReferences)})},
args: [],
source: "sendersListWidget\x0a\x09^ sendersListWidget ifNil: [\x0a      \x09sendersListWidget := HLSendersListWidget on: self model.\x0a\x09\x09sendersListWidget next: self implementorsListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "implementorsListWidget"],
referencedClasses: ["HLSendersListWidget"]
}),
globals.HLReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceCodeWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLBrowserCodeWidget(){return globals.HLBrowserCodeWidget||(typeof HLBrowserCodeWidget=="undefined"?nil:HLBrowserCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
$2=self["@sourceCodeWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($HLBrowserCodeWidget())._new();
_st($3)._browserModel_(self._model());
$4=_st($3)._yourself();
self["@sourceCodeWidget"]=$4;
$1=self["@sourceCodeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceCodeWidget",{},globals.HLReferences)})},
args: [],
source: "sourceCodeWidget\x0a\x09^ sourceCodeWidget ifNil: [\x0a      \x09sourceCodeWidget := HLBrowserCodeWidget new\x0a\x09\x09\x09browserModel: self model;\x0a\x09\x09\x09yourself ]",
messageSends: ["ifNil:", "browserModel:", "new", "model", "yourself"],
referencedClasses: ["HLBrowserCodeWidget"]
}),
globals.HLReferences);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "canBeOpenAsTab\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.HLReferences.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "references";
},
args: [],
source: "tabClass\x0a\x09^ 'references'",
messageSends: [],
referencedClasses: []
}),
globals.HLReferences.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "References";
},
args: [],
source: "tabLabel\x0a\x09^ 'References'",
messageSends: [],
referencedClasses: []
}),
globals.HLReferences.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
protocol: 'accessing',
fn: function (){
var self=this;
return (100);
},
args: [],
source: "tabPriority\x0a\x09^ 100",
messageSends: [],
referencedClasses: []
}),
globals.HLReferences.klass);


smalltalk.addClass('HLReferencesListWidget', globals.HLToolListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "activateListItem:",
protocol: 'actions',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
return ($ctx2.supercall = true, globals.HLReferencesListWidget.superclass.fn.prototype._activateListItem_.apply(_st(self), [anItem]));
$ctx2.supercall = false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{anItem:anItem},globals.HLReferencesListWidget)})},
args: ["anItem"],
source: "activateListItem: anItem\x0a\x09self model withChangesDo: [ super activateListItem: anItem ]",
messageSends: ["withChangesDo:", "model", "activateListItem:"],
referencedClasses: []
}),
globals.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "commandCategory",
protocol: 'accessing',
fn: function (){
var self=this;
return "Methods";
},
args: [],
source: "commandCategory\x0a\x09^ 'Methods'",
messageSends: [],
referencedClasses: []
}),
globals.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "List";
},
args: [],
source: "label\x0a\x09^ 'List'",
messageSends: [],
referencedClasses: []
}),
globals.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLSearchReferences(){return globals.HLSearchReferences||(typeof HLSearchReferences=="undefined"?nil:HLSearchReferences)}
function $HLMethodSelected(){return globals.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_do_($HLSearchReferences(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return self._onSearchReferences_(_st(ann)._searchString());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,1)})}));
$ctx1.sendIdx["on:do:"]=1;
$2=_st($1)._on_do_($HLMethodSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return self._onMethodSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},globals.HLReferencesListWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer\x0a\x09\x09on: HLSearchReferences\x0a\x09\x09do: [ :ann | self onSearchReferences: ann searchString ];\x0a\x09\x09on: HLMethodSelected\x0a\x09\x09do: [ :ann | self onMethodSelected: ann item ]",
messageSends: ["on:do:", "announcer", "model", "onSearchReferences:", "searchString", "onMethodSelected:", "item"],
referencedClasses: ["HLSearchReferences", "HLMethodSelected"]
}),
globals.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodSelected:",
protocol: 'reactions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$receiver;
var $early={};
try {
if(($receiver = aMethod) == null || $receiver.isNil){
return self;
} else {
aMethod;
};
_st(self._items())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(aMethod)._selector();
$ctx2.sendIdx["selector"]=1;
return _st(each).__eq($1);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}),(function(){
throw $early=[self];
}));
$2=_st(aMethod)._selector();
$ctx1.sendIdx["selector"]=2;
self._selectedItem_($2);
$3=self._activateItem_(_st(aMethod)._selector());
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{aMethod:aMethod},globals.HLReferencesListWidget)})},
args: ["aMethod"],
source: "onMethodSelected: aMethod\x0a\x09aMethod ifNil: [ ^ self ].\x0a\x09self items detect: [ :each | each = aMethod selector ] ifNone: [ ^ self ].\x0a\x09\x0a\x09self \x0a\x09\x09selectedItem: aMethod selector;\x0a\x09\x09activateItem: aMethod selector",
messageSends: ["ifNil:", "detect:ifNone:", "items", "=", "selector", "selectedItem:", "activateItem:"],
referencedClasses: []
}),
globals.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
protocol: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},globals.HLReferencesListWidget)})},
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (aMethod,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(aMethod)._methodClass())._name()).__comma(" >> #")).__comma(_st(aMethod)._selector());
$ctx1.sendIdx[","]=1;
_st(html)._with_($1);
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aMethod:aMethod,html:html},globals.HLReferencesListWidget)})},
args: ["aMethod", "html"],
source: "renderItemLabel: aMethod on: html\x0a\x09html with: aMethod methodClass name, ' >> #', aMethod selector",
messageSends: ["with:", ",", "name", "methodClass", "selector"],
referencedClasses: []
}),
globals.HLReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._selectedMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aMethod:aMethod},globals.HLReferencesListWidget)})},
args: ["aMethod"],
source: "selectItem: aMethod\x0a\x09self model selectedMethod: aMethod",
messageSends: ["selectedMethod:", "model"],
referencedClasses: []
}),
globals.HLReferencesListWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._model_(aModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aModel:aModel},globals.HLReferencesListWidget.klass)})},
args: ["aModel"],
source: "on: aModel\x0a\x09^ self new \x0a\x09\x09model: aModel; \x0a\x09\x09yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
globals.HLReferencesListWidget.klass);


smalltalk.addClass('HLClassReferencesListWidget', globals.HLReferencesListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Class references";
},
args: [],
source: "label\x0a\x09^ 'Class references'",
messageSends: [],
referencedClasses: []
}),
globals.HLClassReferencesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
protocol: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectItem_(nil);
self._items_(_st(self._model())._classReferencesOf_(aString));
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},globals.HLClassReferencesListWidget)})},
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self selectItem: nil.\x0a\x09self items: (self model classReferencesOf: aString).\x0a\x09self refresh",
messageSends: ["selectItem:", "items:", "classReferencesOf:", "model", "refresh"],
referencedClasses: []
}),
globals.HLClassReferencesListWidget);



smalltalk.addClass('HLImplementorsListWidget', globals.HLReferencesListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Implementors";
},
args: [],
source: "label\x0a\x09^ 'Implementors'",
messageSends: [],
referencedClasses: []
}),
globals.HLImplementorsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
protocol: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectItem_(nil);
self._items_(_st(self._model())._implementorsOf_(aString));
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},globals.HLImplementorsListWidget)})},
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self selectItem: nil.\x0a\x09self items: (self model implementorsOf: aString).\x0a\x09self refresh",
messageSends: ["selectItem:", "items:", "implementorsOf:", "model", "refresh"],
referencedClasses: []
}),
globals.HLImplementorsListWidget);



smalltalk.addClass('HLRegexpListWidget', globals.HLReferencesListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Source search";
},
args: [],
source: "label\x0a\x09^ 'Source search'",
messageSends: [],
referencedClasses: []
}),
globals.HLRegexpListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
protocol: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectItem_(nil);
self._items_(_st(self._model())._regexpReferencesOf_(aString));
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},globals.HLRegexpListWidget)})},
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self selectItem: nil.\x0a\x09self items: (self model regexpReferencesOf: aString).\x0a\x09self refresh",
messageSends: ["selectItem:", "items:", "regexpReferencesOf:", "model", "refresh"],
referencedClasses: []
}),
globals.HLRegexpListWidget);



smalltalk.addClass('HLSendersListWidget', globals.HLReferencesListWidget, [], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Senders";
},
args: [],
source: "label\x0a\x09^ 'Senders'",
messageSends: [],
referencedClasses: []
}),
globals.HLSendersListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSearchReferences:",
protocol: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectItem_(nil);
self._items_(_st(self._model())._sendersOf_(aString));
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},globals.HLSendersListWidget)})},
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self selectItem: nil.\x0a\x09self items: (self model sendersOf: aString).\x0a\x09self refresh",
messageSends: ["selectItem:", "items:", "sendersOf:", "model", "refresh"],
referencedClasses: []
}),
globals.HLSendersListWidget);



smalltalk.addClass('HLReferencesModel', globals.HLToolModel, ['methodsCache', 'classesAndMetaclassesCache'], 'Helios-References');
smalltalk.addMethod(
smalltalk.method({
selector: "allMethods",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._methodsCache();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allMethods",{},globals.HLReferencesModel)})},
args: [],
source: "allMethods\x0a\x09^ self methodsCache",
messageSends: ["methodsCache"],
referencedClasses: []
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "classReferencesOf:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._allMethods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._referencedClasses())._includes_(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"classReferencesOf:",{aString:aString},globals.HLReferencesModel)})},
args: ["aString"],
source: "classReferencesOf: aString\x0a\x09\x22Answer all methods referencing the class named aString\x22\x0a\x09\x0a\x09^self allMethods select: [ :each |\x0a\x09\x09\x09(each referencedClasses includes: aString) ].",
messageSends: ["select:", "allMethods", "includes:", "referencedClasses"],
referencedClasses: []
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "classesAndMetaclasses",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._classesAndMetaclassesCache();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesAndMetaclasses",{},globals.HLReferencesModel)})},
args: [],
source: "classesAndMetaclasses\x0a\x09^ self classesAndMetaclassesCache",
messageSends: ["classesAndMetaclassesCache"],
referencedClasses: []
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "classesAndMetaclassesCache",
protocol: 'cache',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@classesAndMetaclassesCache"];
if(($receiver = $1) == null || $receiver.isNil){
self._updateClassesAndMetaclassesCache();
} else {
$1;
};
$2=self["@classesAndMetaclassesCache"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"classesAndMetaclassesCache",{},globals.HLReferencesModel)})},
args: [],
source: "classesAndMetaclassesCache\x0a\x09classesAndMetaclassesCache ifNil: [ self updateClassesAndMetaclassesCache ].\x0a\x09^ classesAndMetaclassesCache",
messageSends: ["ifNil:", "updateClassesAndMetaclassesCache"],
referencedClasses: []
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "implementorsOf:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._allMethods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._selector()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._methodReferenceOn_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"implementorsOf:",{aString:aString},globals.HLReferencesModel)})},
args: ["aString"],
source: "implementorsOf: aString\x0a\x09^ (self allMethods select: [ :each |\x0a\x09\x09each selector = aString ])\x0a\x09\x09\x09collect: [ :each | self methodReferenceOn: each ]",
messageSends: ["collect:", "select:", "allMethods", "=", "selector", "methodReferenceOn:"],
referencedClasses: []
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isReferencesModel",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isReferencesModel\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "methodReferenceOn:",
protocol: 'accessing',
fn: function (aCompiledMethod){
var self=this;
function $HLMethodReference(){return globals.HLMethodReference||(typeof HLMethodReference=="undefined"?nil:HLMethodReference)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLMethodReference())._on_(aCompiledMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodReferenceOn:",{aCompiledMethod:aCompiledMethod},globals.HLReferencesModel)})},
args: ["aCompiledMethod"],
source: "methodReferenceOn: aCompiledMethod\x0a\x09^ HLMethodReference on: aCompiledMethod",
messageSends: ["on:"],
referencedClasses: ["HLMethodReference"]
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsCache",
protocol: 'cache',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@methodsCache"];
if(($receiver = $1) == null || $receiver.isNil){
self._updateMethodsCache();
} else {
$1;
};
$2=self["@methodsCache"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"methodsCache",{},globals.HLReferencesModel)})},
args: [],
source: "methodsCache\x0a\x09methodsCache ifNil: [ self updateMethodsCache ].\x0a\x09^ methodsCache",
messageSends: ["ifNil:", "updateMethodsCache"],
referencedClasses: []
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "openClassNamed:",
protocol: 'actions',
fn: function (aString){
var self=this;
var browser;
function $HLBrowser(){return globals.HLBrowser||(typeof HLBrowser=="undefined"?nil:HLBrowser)}
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
browser=_st($HLBrowser())._openAsTab();
browser;
return _st(browser)._openClassNamed_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"openClassNamed:",{aString:aString,browser:browser},globals.HLReferencesModel)})},
args: ["aString"],
source: "openClassNamed: aString\x0a\x09| browser |\x0a\x09\x0a\x09self withChangesDo: [\x0a\x09\x09browser := HLBrowser openAsTab.\x0a\x09\x09browser openClassNamed: aString ]",
messageSends: ["withChangesDo:", "openAsTab", "openClassNamed:"],
referencedClasses: ["HLBrowser"]
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "openMethod",
protocol: 'actions',
fn: function (){
var self=this;
var browser;
function $HLBrowser(){return globals.HLBrowser||(typeof HLBrowser=="undefined"?nil:HLBrowser)}
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self._selectedMethod();
$ctx1.sendIdx["selectedMethod"]=1;
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
browser=_st($HLBrowser())._openAsTab();
browser;
return _st(browser)._openMethod_(self._selectedMethod());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"openMethod",{browser:browser},globals.HLReferencesModel)})},
args: [],
source: "openMethod\x0a\x09| browser |\x0a\x09\x0a\x09self selectedMethod ifNil: [ ^ self ].\x0a\x09\x0a\x09self withChangesDo: [\x0a\x09\x09browser := HLBrowser openAsTab.\x0a\x09\x09browser openMethod: self selectedMethod ]",
messageSends: ["ifNil:", "selectedMethod", "withChangesDo:", "openAsTab", "openMethod:"],
referencedClasses: ["HLBrowser"]
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "regexpReferencesOf:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._allMethods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._source())._match_(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._methodReferenceOn_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"regexpReferencesOf:",{aString:aString},globals.HLReferencesModel)})},
args: ["aString"],
source: "regexpReferencesOf: aString\x0a\x09^ (self allMethods select: [ :each |\x0a\x09\x09each source match: aString ])\x0a\x09\x09\x09collect: [ :each | self methodReferenceOn: each ]",
messageSends: ["collect:", "select:", "allMethods", "match:", "source", "methodReferenceOn:"],
referencedClasses: []
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "search:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $HLSearchReferences(){return globals.HLSearchReferences||(typeof HLSearchReferences=="undefined"?nil:HLSearchReferences)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._updateCaches();
$1=_st($HLSearchReferences())._new();
_st($1)._searchString_(aString);
$2=_st($1)._yourself();
_st(self._announcer())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},globals.HLReferencesModel)})},
args: ["aString"],
source: "search: aString\x0a\x09self updateCaches.\x0a\x09\x0a\x09self announcer announce: (HLSearchReferences new\x0a\x09\x09searchString: aString;\x0a\x09\x09yourself)",
messageSends: ["updateCaches", "announce:", "announcer", "searchString:", "new", "yourself"],
referencedClasses: ["HLSearchReferences"]
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "sendersOf:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._allMethods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._messageSends())._includes_(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._methodReferenceOn_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendersOf:",{aString:aString},globals.HLReferencesModel)})},
args: ["aString"],
source: "sendersOf: aString\x0a\x09^ (self allMethods select: [ :each |\x0a\x09\x09each messageSends includes: aString ])\x0a\x09\x09\x09collect: [ :each | self methodReferenceOn: each ]",
messageSends: ["collect:", "select:", "allMethods", "includes:", "messageSends", "methodReferenceOn:"],
referencedClasses: []
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCaches",
protocol: 'cache',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._updateClassesAndMetaclassesCache();
$1=self._updateMethodsCache();
return self}, function($ctx1) {$ctx1.fill(self,"updateCaches",{},globals.HLReferencesModel)})},
args: [],
source: "updateCaches\x0a\x09self \x0a\x09\x09updateClassesAndMetaclassesCache;\x0a\x09\x09updateMethodsCache",
messageSends: ["updateClassesAndMetaclassesCache", "updateMethodsCache"],
referencedClasses: []
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateClassesAndMetaclassesCache",
protocol: 'cache',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@classesAndMetaclassesCache"]=_st($OrderedCollection())._new();
_st(_st(self._environment())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=self["@classesAndMetaclassesCache"];
_st($1)._add_(each);
$ctx2.sendIdx["add:"]=1;
$2=_st($1)._add_(_st(each)._class());
return $2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateClassesAndMetaclassesCache",{},globals.HLReferencesModel)})},
args: [],
source: "updateClassesAndMetaclassesCache\x0a\x09classesAndMetaclassesCache := OrderedCollection new.\x0a\x09\x0a\x09self environment classes do: [ :each |\x0a\x09\x09classesAndMetaclassesCache\x0a\x09\x09\x09\x09add: each; \x0a\x09\x09\x09\x09add: each class ]",
messageSends: ["new", "do:", "classes", "environment", "add:", "class"],
referencedClasses: ["OrderedCollection"]
}),
globals.HLReferencesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMethodsCache",
protocol: 'cache',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@methodsCache"]=_st($OrderedCollection())._new();
_st(self._classesAndMetaclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@methodsCache"])._addAll_(_st(each)._methods());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateMethodsCache",{},globals.HLReferencesModel)})},
args: [],
source: "updateMethodsCache\x0a\x09methodsCache := OrderedCollection new.\x0a\x09\x0a\x09self classesAndMetaclasses\x0a\x09\x09do: [ :each | methodsCache addAll: each methods ]",
messageSends: ["new", "do:", "classesAndMetaclasses", "addAll:", "methods"],
referencedClasses: ["OrderedCollection"]
}),
globals.HLReferencesModel);


});
