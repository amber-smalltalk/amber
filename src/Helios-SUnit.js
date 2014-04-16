define("helios/Helios-SUnit", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "helios/Helios-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-SUnit');
smalltalk.packages["Helios-SUnit"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLMultiSelectToolListWidget', globals.HLToolListWidget, [], 'Helios-SUnit');
globals.HLMultiSelectToolListWidget.comment="This is a list that handles multiple selection";
smalltalk.addMethod(
smalltalk.method({
selector: "activeItemCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "selector";
},
args: [],
source: "activeItemCssClass\x0a\x09^'selector'",
messageSends: [],
referencedClasses: []
}),
globals.HLMultiSelectToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isSelected:",
protocol: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"isSelected:",{anObject:anObject},globals.HLMultiSelectToolListWidget)})},
args: ["anObject"],
source: "isSelected: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.HLMultiSelectToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "listCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "nav nav-multiselect nav-pills nav-stacked";
},
args: [],
source: "listCssClass \x0a\x09^'nav nav-multiselect nav-pills nav-stacked'",
messageSends: [],
referencedClasses: []
}),
globals.HLMultiSelectToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "listCssClassForItem:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self._selectedItem()).__eq(anObject);
if(smalltalk.assert($1)){
class_="selector";
} else {
class_="";
};
$2=self._isSelected_(anObject);
if(smalltalk.assert($2)){
class_=_st(class_).__comma(" active");
class_;
};
$3=class_;
return $3;
}, function($ctx1) {$ctx1.fill(self,"listCssClassForItem:",{anObject:anObject,class_:class_},globals.HLMultiSelectToolListWidget)})},
args: ["anObject"],
source: "listCssClassForItem: anObject\x0a\x09 |class |\x0a\x09class := self selectedItem = anObject\x0a\x09\x09ifTrue: [ 'selector' ]\x0a\x09\x09ifFalse: [ '' ].\x0a\x09(self isSelected: anObject)\x0a\x09\x09ifTrue: [class := class, ' active'].\x0a\x09^class",
messageSends: ["ifTrue:ifFalse:", "=", "selectedItem", "ifTrue:", "isSelected:", ","],
referencedClasses: []
}),
globals.HLMultiSelectToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anObject,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
li=_st(html)._li();
$1=_st(li)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._data_put_("item",anObject);
$2=li;
_st($2)._class_(self._listCssClassForItem_(anObject));
$ctx1.sendIdx["class:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._a();
_st($4)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._tag_("i"))._class_(self._cssClassForItem_(anObject));
return self._renderItemLabel_on_(anObject,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._toggleListItem_(_st(li)._asJQuery());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anObject:anObject,html:html,li:li},globals.HLMultiSelectToolListWidget)})},
args: ["anObject", "html"],
source: "renderItem: anObject on: html\x0a\x09| li |\x0a    \x0a\x09li := html li.\x0a\x09li asJQuery data: 'item' put: anObject.\x0a    li\x0a\x09\x09class: (self listCssClassForItem: anObject);\x0a        with: [ \x0a        \x09html a\x0a            \x09with: [ \x0a            \x09\x09(html tag: 'i') class: (self cssClassForItem: anObject).\x0a  \x09\x09\x09\x09\x09self renderItemLabel: anObject on: html ];\x0a\x09\x09\x09\x09onClick: [\x0a                  \x09self toggleListItem: li asJQuery ] ]",
messageSends: ["li", "data:put:", "asJQuery", "class:", "listCssClassForItem:", "with:", "a", "tag:", "cssClassForItem:", "renderItemLabel:on:", "onClick:", "toggleListItem:"],
referencedClasses: []
}),
globals.HLMultiSelectToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"select:",{anObject:anObject},globals.HLMultiSelectToolListWidget)})},
args: ["anObject"],
source: "select: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.HLMultiSelectToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleListItem:",
protocol: 'actions',
fn: function (aListItem){
var self=this;
var item;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=_st(aListItem)._get_((0));
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
item=_st(aListItem)._data_("item");
self._toggleSelection_(item);
return self}, function($ctx1) {$ctx1.fill(self,"toggleListItem:",{aListItem:aListItem,item:item},globals.HLMultiSelectToolListWidget)})},
args: ["aListItem"],
source: "toggleListItem: aListItem\x0a\x09| item |\x0a\x09\x0a\x09(aListItem get: 0) ifNil: [ ^ self ].\x0a\x09\x22Find item\x22\x0a\x09item := aListItem data: 'item'.\x0a\x09self toggleSelection: item",
messageSends: ["ifNil:", "get:", "data:", "toggleSelection:"],
referencedClasses: []
}),
globals.HLMultiSelectToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleSelection:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isSelected_(anObject);
if(smalltalk.assert($1)){
self._unselect_(anObject);
} else {
self._select_(anObject);
};
return self}, function($ctx1) {$ctx1.fill(self,"toggleSelection:",{anObject:anObject},globals.HLMultiSelectToolListWidget)})},
args: ["anObject"],
source: "toggleSelection: anObject\x0a\x09(self isSelected: anObject) \x0a\x09\x09ifTrue: [ self unselect: anObject ]\x0a\x09\x09ifFalse: [self select: anObject ]",
messageSends: ["ifTrue:ifFalse:", "isSelected:", "unselect:", "select:"],
referencedClasses: []
}),
globals.HLMultiSelectToolListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unselect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"unselect:",{anObject:anObject},globals.HLMultiSelectToolListWidget)})},
args: ["anObject"],
source: "unselect: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.HLMultiSelectToolListWidget);



smalltalk.addClass('HLSUnitClassesListWidget', globals.HLMultiSelectToolListWidget, [], 'Helios-SUnit');
globals.HLSUnitClassesListWidget.comment="I display a list of  classes (subclasses of `TestCase`).";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._theNonMetaClass())._heliosClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{aClass:aClass},globals.HLSUnitClassesListWidget)})},
args: ["aClass"],
source: "cssClassForItem: aClass\x09\x0a\x09^ aClass theNonMetaClass heliosClass",
messageSends: ["heliosClass", "theNonMetaClass"],
referencedClasses: []
}),
globals.HLSUnitClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeItems",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@items"]=_st(self["@model"])._testClasses();
$1=self["@items"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeItems",{},globals.HLSUnitClassesListWidget)})},
args: [],
source: "initializeItems\x0a\x09^items := model testClasses ",
messageSends: ["testClasses"],
referencedClasses: []
}),
globals.HLSUnitClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isSelected:",
protocol: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@model"])._selectedClasses())._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSelected:",{anObject:anObject},globals.HLSUnitClassesListWidget)})},
args: ["anObject"],
source: "isSelected: anObject\x0a\x09^model selectedClasses includes: anObject",
messageSends: ["includes:", "selectedClasses"],
referencedClasses: []
}),
globals.HLSUnitClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@items"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeItems();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},globals.HLSUnitClassesListWidget)})},
args: [],
source: "items\x0a\x09^ items ifNil: [ self initializeItems ]",
messageSends: ["ifNil:", "initializeItems"],
referencedClasses: []
}),
globals.HLSUnitClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";
},
args: [],
source: "label\x0a\x09^ 'Classes'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLPackageSelected(){return globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLPackageUnselected(){return globals.HLPackageUnselected||(typeof HLPackageUnselected=="undefined"?nil:HLPackageUnselected)}
function $HLClassSelected(){return globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLClassUnselected(){return globals.HLClassUnselected||(typeof HLClassUnselected=="undefined"?nil:HLClassUnselected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLPackageSelected(),"onPackageSelected:",self);
$ctx1.sendIdx["on:send:to:"]=1;
_st($1)._on_send_to_($HLPackageUnselected(),"onPackageUnselected:",self);
$ctx1.sendIdx["on:send:to:"]=2;
_st($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
$ctx1.sendIdx["on:send:to:"]=3;
$2=_st($1)._on_send_to_($HLClassUnselected(),"onClassUnselected:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},globals.HLSUnitClassesListWidget)})},
args: [],
source: "observeModel\x0a    self model announcer \x0a\x09\x09on: HLPackageSelected\x0a\x09\x09send: #onPackageSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLPackageUnselected\x0a\x09\x09send: #onPackageUnselected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLClassSelected\x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLClassUnselected\x0a\x09\x09send: #onClassUnselected:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["HLPackageSelected", "HLPackageUnselected", "HLClassSelected", "HLClassUnselected"]
}),
globals.HLSUnitClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement},globals.HLSUnitClassesListWidget)})},
args: ["anAnnouncement"],
source: "onClassSelected: anAnnouncement\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
globals.HLSUnitClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassUnselected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassUnselected:",{anAnnouncement:anAnnouncement},globals.HLSUnitClassesListWidget)})},
args: ["anAnnouncement"],
source: "onClassUnselected: anAnnouncement\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
globals.HLSUnitClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._initializeItems();
$1=self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement},globals.HLSUnitClassesListWidget)})},
args: ["anAnnouncement"],
source: "onPackageSelected: anAnnouncement\x0a\x09self initializeItems;\x0a\x09\x09refresh",
messageSends: ["initializeItems", "refresh"],
referencedClasses: []
}),
globals.HLSUnitClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageUnselected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._initializeItems();
$1=self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageUnselected:",{anAnnouncement:anAnnouncement},globals.HLSUnitClassesListWidget)})},
args: ["anAnnouncement"],
source: "onPackageUnselected: anAnnouncement\x0a\x09self initializeItems;\x0a\x09\x09refresh",
messageSends: ["initializeItems", "refresh"],
referencedClasses: []
}),
globals.HLSUnitClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (aClass,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(aClass)._name());
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aClass:aClass,html:html},globals.HLSUnitClassesListWidget)})},
args: ["aClass", "html"],
source: "renderItemLabel: aClass on: html\x0a\x09html with: aClass name",
messageSends: ["with:", "name"],
referencedClasses: []
}),
globals.HLSUnitClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@model"])._selectClass_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"select:",{anObject:anObject},globals.HLSUnitClassesListWidget)})},
args: ["anObject"],
source: "select: anObject\x0a\x09model selectClass: anObject",
messageSends: ["selectClass:"],
referencedClasses: []
}),
globals.HLSUnitClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unselect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@model"])._unselectClass_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"unselect:",{anObject:anObject},globals.HLSUnitClassesListWidget)})},
args: ["anObject"],
source: "unselect: anObject\x0a\x09model unselectClass: anObject",
messageSends: ["unselectClass:"],
referencedClasses: []
}),
globals.HLSUnitClassesListWidget);



smalltalk.addClass('HLSUnitPackagesListWidget', globals.HLMultiSelectToolListWidget, [], 'Helios-SUnit');
globals.HLSUnitPackagesListWidget.comment="I display a list of packages for which unit tests are associated (packages containing subclasses of `TestCase`).";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
protocol: 'accessing',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(anItem)._isDirty();
if(smalltalk.assert($2)){
$1="package_dirty";
} else {
$1="package";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{anItem:anItem},globals.HLSUnitPackagesListWidget)})},
args: ["anItem"],
source: "cssClassForItem: anItem\x09\x0a\x09^ anItem isDirty \x0a\x09\x09ifTrue: [ 'package_dirty' ]\x0a\x09\x09ifFalse: [ 'package' ]",
messageSends: ["ifTrue:ifFalse:", "isDirty"],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeItems",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
self["@items"]=_st(_st(self["@model"])._testPackages())._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$2=_st(a)._name();
$ctx2.sendIdx["name"]=1;
return _st($2).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)})}));
$1=self["@items"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeItems",{},globals.HLSUnitPackagesListWidget)})},
args: [],
source: "initializeItems\x0a\x09^items := model testPackages \x0a\x09\x09sort: [:a :b | a name < b name]",
messageSends: ["sort:", "testPackages", "<", "name"],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isSelected:",
protocol: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@model"])._selectedPackages())._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSelected:",{anObject:anObject},globals.HLSUnitPackagesListWidget)})},
args: ["anObject"],
source: "isSelected: anObject\x0a\x09^model selectedPackages includes: anObject",
messageSends: ["includes:", "selectedPackages"],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@items"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeItems();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},globals.HLSUnitPackagesListWidget)})},
args: [],
source: "items\x0a\x09^ items ifNil: [ self initializeItems ]",
messageSends: ["ifNil:", "initializeItems"],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Packages";
},
args: [],
source: "label\x0a\x09^ 'Packages'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLPackageSelected(){return globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLPackageUnselected(){return globals.HLPackageUnselected||(typeof HLPackageUnselected=="undefined"?nil:HLPackageUnselected)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLPackageSelected(),"onPackageSelected:",self);
$ctx1.sendIdx["on:send:to:"]=1;
$2=_st($1)._on_send_to_($HLPackageUnselected(),"onPackageUnselected:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},globals.HLSUnitPackagesListWidget)})},
args: [],
source: "observeModel\x0a    self model announcer \x0a\x09\x09on: HLPackageSelected\x0a\x09\x09send: #onPackageSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLPackageUnselected\x0a\x09\x09send: #onPackageUnselected:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["HLPackageSelected", "HLPackageUnselected"]
}),
globals.HLSUnitPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement},globals.HLSUnitPackagesListWidget)})},
args: ["anAnnouncement"],
source: "onPackageSelected: anAnnouncement\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageUnselected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageUnselected:",{anAnnouncement:anAnnouncement},globals.HLSUnitPackagesListWidget)})},
args: ["anAnnouncement"],
source: "onPackageUnselected: anAnnouncement\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._with_("Run Tests");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._model())._runTests();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},globals.HLSUnitPackagesListWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09with: 'Run Tests';\x0a\x09onClick: [ self model runTests ]",
messageSends: ["with:", "button", "onClick:", "runTests", "model"],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (aPackage,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(aPackage)._name());
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aPackage:aPackage,html:html},globals.HLSUnitPackagesListWidget)})},
args: ["aPackage", "html"],
source: "renderItemLabel: aPackage on: html\x0a\x09html with: aPackage name",
messageSends: ["with:", "name"],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@model"])._selectPackage_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"select:",{anObject:anObject},globals.HLSUnitPackagesListWidget)})},
args: ["anObject"],
source: "select: anObject\x0a\x09model selectPackage: anObject",
messageSends: ["selectPackage:"],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unselect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@model"])._unselectPackage_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"unselect:",{anObject:anObject},globals.HLSUnitPackagesListWidget)})},
args: ["anObject"],
source: "unselect: anObject\x0a\x09model unselectPackage: anObject",
messageSends: ["unselectPackage:"],
referencedClasses: []
}),
globals.HLSUnitPackagesListWidget);



smalltalk.addClass('HLSUnit', globals.HLWidget, ['model', 'packagesListWidget', 'classesListWidget', 'resultWidget', 'failuresWidget', 'errorsWidget'], 'Helios-SUnit');
globals.HLSUnit.comment="I am the main widget for running unit tests in Helios.\x0a\x0aI provide the ability to select set of tests to run per package, and a detailed result log with passed tests, failed tests and errors.";
smalltalk.addMethod(
smalltalk.method({
selector: "classesListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLSUnitClassesListWidget(){return globals.HLSUnitClassesListWidget||(typeof HLSUnitClassesListWidget=="undefined"?nil:HLSUnitClassesListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@classesListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@classesListWidget"]=_st($HLSUnitClassesListWidget())._on_(self._model());
self["@classesListWidget"];
$1=_st(self["@classesListWidget"])._next_(self._failuresWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesListWidget",{},globals.HLSUnit)})},
args: [],
source: "classesListWidget\x0a\x09^ classesListWidget ifNil: [ \x0a\x09\x09classesListWidget := HLSUnitClassesListWidget on: self model.\x0a\x09\x09classesListWidget next: self failuresWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "failuresWidget"],
referencedClasses: ["HLSUnitClassesListWidget"]
}),
globals.HLSUnit);

smalltalk.addMethod(
smalltalk.method({
selector: "errorsWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLSUnitErrorsListWidget(){return globals.HLSUnitErrorsListWidget||(typeof HLSUnitErrorsListWidget=="undefined"?nil:HLSUnitErrorsListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@errorsWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@errorsWidget"]=_st($HLSUnitErrorsListWidget())._on_(self._model());
$1=self["@errorsWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"errorsWidget",{},globals.HLSUnit)})},
args: [],
source: "errorsWidget\x0a\x09^ errorsWidget ifNil: [errorsWidget := HLSUnitErrorsListWidget on: self model]",
messageSends: ["ifNil:", "on:", "model"],
referencedClasses: ["HLSUnitErrorsListWidget"]
}),
globals.HLSUnit);

smalltalk.addMethod(
smalltalk.method({
selector: "failuresWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLSUnitFailuresListWidget(){return globals.HLSUnitFailuresListWidget||(typeof HLSUnitFailuresListWidget=="undefined"?nil:HLSUnitFailuresListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@failuresWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@failuresWidget"]=_st($HLSUnitFailuresListWidget())._on_(self._model());
self["@failuresWidget"];
$1=_st(self["@failuresWidget"])._next_(self._errorsWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"failuresWidget",{},globals.HLSUnit)})},
args: [],
source: "failuresWidget\x0a\x09^ failuresWidget ifNil: [\x0a\x09\x09failuresWidget := HLSUnitFailuresListWidget on: self model.\x0a\x09\x09failuresWidget next: self errorsWidget]\x0a\x09",
messageSends: ["ifNil:", "on:", "model", "next:", "errorsWidget"],
referencedClasses: ["HLSUnitFailuresListWidget"]
}),
globals.HLSUnit);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLSUnitModel(){return globals.HLSUnitModel||(typeof HLSUnitModel=="undefined"?nil:HLSUnitModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == null){
self["@model"]=_st($HLSUnitModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},globals.HLSUnit)})},
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLSUnitModel new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLSUnitModel"]
}),
globals.HLSUnit);

smalltalk.addMethod(
smalltalk.method({
selector: "packagesListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLSUnitPackagesListWidget(){return globals.HLSUnitPackagesListWidget||(typeof HLSUnitPackagesListWidget=="undefined"?nil:HLSUnitPackagesListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@packagesListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@packagesListWidget"]=_st($HLSUnitPackagesListWidget())._on_(self._model());
self["@packagesListWidget"];
$1=_st(self["@packagesListWidget"])._next_(self._classesListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"packagesListWidget",{},globals.HLSUnit)})},
args: [],
source: "packagesListWidget\x0a\x09^ packagesListWidget ifNil: [ \x0a\x09\x09packagesListWidget := HLSUnitPackagesListWidget on: self model.\x0a\x09\x09packagesListWidget next: self classesListWidget]",
messageSends: ["ifNil:", "on:", "model", "next:", "classesListWidget"],
referencedClasses: ["HLSUnitPackagesListWidget"]
}),
globals.HLSUnit);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindingsOn:",
protocol: 'keybindings',
fn: function (aBindingGroup){
var self=this;
function $HLToolCommand(){return globals.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
return smalltalk.withContext(function($ctx1) { 
_st($HLToolCommand())._registerConcreteClassesOn_for_(aBindingGroup,self._model());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},globals.HLSUnit)})},
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup\x0a\x09HLToolCommand \x0a\x09\x09registerConcreteClassesOn: aBindingGroup \x0a\x09\x09for: self model",
messageSends: ["registerConcreteClassesOn:for:", "model"],
referencedClasses: ["HLToolCommand"]
}),
globals.HLSUnit);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLContainer(){return globals.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
function $HLVerticalSplitter(){return globals.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
function $HLHorizontalSplitter(){return globals.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$5,$2,$1;
$4=self._packagesListWidget();
$ctx1.sendIdx["packagesListWidget"]=1;
$3=_st($HLVerticalSplitter())._with_with_($4,self._classesListWidget());
$ctx1.sendIdx["with:with:"]=2;
$5=_st($HLHorizontalSplitter())._with_with_(self._resultWidget(),_st($HLHorizontalSplitter())._with_with_(self._failuresWidget(),self._errorsWidget()));
$ctx1.sendIdx["with:with:"]=3;
$2=_st($HLVerticalSplitter())._with_with_($3,$5);
$ctx1.sendIdx["with:with:"]=1;
$1=_st($HLContainer())._with_($2);
_st(html)._with_($1);
$ctx1.sendIdx["with:"]=1;
_st(self._packagesListWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLSUnit)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with:  (\x0a\x09\x09HLVerticalSplitter \x0a\x09\x09\x09with: (HLVerticalSplitter\x0a\x09\x09\x09\x09with: self packagesListWidget \x0a        \x09\x09with: self classesListWidget)\x0a\x09\x09\x09with: (HLHorizontalSplitter \x0a\x09\x09\x09\x09with: self resultWidget\x0a\x09\x09\x09\x09with: (HLHorizontalSplitter \x0a\x09\x09\x09\x09\x09with: self failuresWidget\x0a\x09\x09\x09\x09\x09with: self errorsWidget)))).\x0a\x09\x0a\x09self packagesListWidget focus",
messageSends: ["with:", "with:with:", "packagesListWidget", "classesListWidget", "resultWidget", "failuresWidget", "errorsWidget", "focus"],
referencedClasses: ["HLContainer", "HLVerticalSplitter", "HLHorizontalSplitter"]
}),
globals.HLSUnit);

smalltalk.addMethod(
smalltalk.method({
selector: "resultWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLSUnitResults(){return globals.HLSUnitResults||(typeof HLSUnitResults=="undefined"?nil:HLSUnitResults)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
$2=self["@resultWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($HLSUnitResults())._new();
_st($3)._model_(self._model());
$4=_st($3)._yourself();
self["@resultWidget"]=$4;
$1=self["@resultWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"resultWidget",{},globals.HLSUnit)})},
args: [],
source: "resultWidget\x0a\x09^ resultWidget ifNil: [\x0a\x09\x09resultWidget := HLSUnitResults new\x0a\x09\x09\x09model: self model;\x0a\x09\x09\x09yourself]",
messageSends: ["ifNil:", "model:", "new", "model", "yourself"],
referencedClasses: ["HLSUnitResults"]
}),
globals.HLSUnit);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "sunit";
},
args: [],
source: "tabClass\x0a\x09^ 'sunit'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "SUnit";
},
args: [],
source: "tabLabel\x0a\x09^ 'SUnit'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnit.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
protocol: 'accessing',
fn: function (){
var self=this;
return (1000);
},
args: [],
source: "tabPriority\x0a\x09^ 1000",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnit.klass);


smalltalk.addClass('HLSUnitModel', globals.HLModel, ['selectedPackages', 'selectedClasses', 'testResult', 'currentSuite'], 'Helios-SUnit');
smalltalk.addMethod(
smalltalk.method({
selector: "currentSuite",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentSuite"];
return $1;
},
args: [],
source: "currentSuite\x0a\x09^currentSuite",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "onResultAnnouncement:",
protocol: 'reacting',
fn: function (announcement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(announcement);
return self}, function($ctx1) {$ctx1.fill(self,"onResultAnnouncement:",{announcement:announcement},globals.HLSUnitModel)})},
args: ["announcement"],
source: "onResultAnnouncement: announcement\x0a\x09\x22Propogate announcement\x22\x0a\x09self announcer announce: announcement.",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "privateSelectedClasses",
protocol: 'private',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@selectedClasses"];
if(($receiver = $2) == null || $receiver.isNil){
self["@selectedClasses"]=_st($Set())._new();
$1=self["@selectedClasses"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"privateSelectedClasses",{},globals.HLSUnitModel)})},
args: [],
source: "privateSelectedClasses\x0a\x09^ (selectedClasses ifNil: [ selectedClasses := Set new ])",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "runTests",
protocol: 'actions',
fn: function (){
var self=this;
var worker;
function $TestSuiteRunner(){return globals.TestSuiteRunner||(typeof TestSuiteRunner=="undefined"?nil:TestSuiteRunner)}
function $HLRunTests(){return globals.HLRunTests||(typeof HLRunTests=="undefined"?nil:HLRunTests)}
return smalltalk.withContext(function($ctx1) { 
worker=_st($TestSuiteRunner())._on_(self._testCases());
$ctx1.sendIdx["on:"]=1;
self["@testResult"]=_st(worker)._result();
self._subscribeToTestSuite_(worker);
_st(self._announcer())._announce_(_st($HLRunTests())._on_(worker));
_st(worker)._run();
return self}, function($ctx1) {$ctx1.fill(self,"runTests",{worker:worker},globals.HLSUnitModel)})},
args: [],
source: "runTests\x0a\x09| worker |\x0a\x09worker := TestSuiteRunner on: self testCases.\x0a\x09testResult := worker result.\x0a\x09self subscribeToTestSuite: worker.\x0a\x09self announcer announce: (HLRunTests on: worker).\x0a\x09worker run",
messageSends: ["on:", "testCases", "result", "subscribeToTestSuite:", "announce:", "announcer", "run"],
referencedClasses: ["TestSuiteRunner", "HLRunTests"]
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectAllPackages",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._testPackages())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._selectPackage_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"selectAllPackages",{},globals.HLSUnitModel)})},
args: [],
source: "selectAllPackages\x0a\x09self testPackages do: [:each | self selectPackage: each]",
messageSends: ["do:", "testPackages", "selectPackage:"],
referencedClasses: []
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectClass:",
protocol: 'actions',
fn: function (aClass){
var self=this;
function $HLClassSelected(){return globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(self._privateSelectedClasses())._add_(aClass);
_st(self._announcer())._announce_(_st($HLClassSelected())._on_(aClass));
return self}, function($ctx1) {$ctx1.fill(self,"selectClass:",{aClass:aClass},globals.HLSUnitModel)})},
args: ["aClass"],
source: "selectClass: aClass\x0a\x09self privateSelectedClasses add: aClass.\x0a\x09self announcer announce: (HLClassSelected on: aClass).",
messageSends: ["add:", "privateSelectedClasses", "announce:", "announcer", "on:"],
referencedClasses: ["HLClassSelected"]
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectPackage:",
protocol: 'actions',
fn: function (aPackage){
var self=this;
function $HLPackageSelected(){return globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(self._selectedPackages())._add_(aPackage);
_st(self._announcer())._announce_(_st($HLPackageSelected())._on_(aPackage));
return self}, function($ctx1) {$ctx1.fill(self,"selectPackage:",{aPackage:aPackage},globals.HLSUnitModel)})},
args: ["aPackage"],
source: "selectPackage: aPackage\x0a\x09self selectedPackages add: aPackage.\x0a\x09self announcer announce: (HLPackageSelected on: aPackage).",
messageSends: ["add:", "selectedPackages", "announce:", "announcer", "on:"],
referencedClasses: ["HLPackageSelected"]
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedClasses",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._privateSelectedClasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._selectedPackages())._includes_(_st(each)._package());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedClasses",{},globals.HLSUnitModel)})},
args: [],
source: "selectedClasses\x0a\x09^ (self privateSelectedClasses) select: [:each |\x0a\x09\x09self selectedPackages includes: each package]",
messageSends: ["select:", "privateSelectedClasses", "includes:", "selectedPackages", "package"],
referencedClasses: []
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedPackages",
protocol: 'accessing',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@selectedPackages"];
if(($receiver = $2) == nil || $receiver == null){
self["@selectedPackages"]=_st($Set())._new();
$1=self["@selectedPackages"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedPackages",{},globals.HLSUnitModel)})},
args: [],
source: "selectedPackages\x0a\x09^ selectedPackages ifNil: [ selectedPackages := Set new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "subscribeToTestSuite:",
protocol: 'actions',
fn: function (aTestSuiteRunner){
var self=this;
function $ResultAnnouncement(){return globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@currentSuite"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=_st(self["@currentSuite"])._announcer();
$ctx1.sendIdx["announcer"]=1;
_st($2)._unsubscribe_(self);
};
self["@currentSuite"]=aTestSuiteRunner;
_st(_st(self["@currentSuite"])._announcer())._on_send_to_($ResultAnnouncement(),"onResultAnnouncement:",self);
return self}, function($ctx1) {$ctx1.fill(self,"subscribeToTestSuite:",{aTestSuiteRunner:aTestSuiteRunner},globals.HLSUnitModel)})},
args: ["aTestSuiteRunner"],
source: "subscribeToTestSuite: aTestSuiteRunner\x0a\x09currentSuite ifNotNil: [ currentSuite announcer unsubscribe: self].\x0a\x09currentSuite := aTestSuiteRunner.\x0a\x09currentSuite announcer \x0a\x09\x09on: ResultAnnouncement\x0a\x09\x09send: #onResultAnnouncement:\x0a\x09\x09to: self",
messageSends: ["ifNotNil:", "unsubscribe:", "announcer", "on:send:to:"],
referencedClasses: ["ResultAnnouncement"]
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "testCases",
protocol: 'accessing',
fn: function (){
var self=this;
var testCases;
return smalltalk.withContext(function($ctx1) { 
var $1;
testCases=[];
_st(self._selectedClasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(testCases)._addAll_(_st(each)._buildSuite());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=testCases;
return $1;
}, function($ctx1) {$ctx1.fill(self,"testCases",{testCases:testCases},globals.HLSUnitModel)})},
args: [],
source: "testCases\x0a\x09| testCases |\x0a\x09testCases := #().\x0a\x09self selectedClasses\x0a\x09\x09do: [ :each | testCases addAll: each buildSuite ].\x0a\x09^ testCases",
messageSends: ["do:", "selectedClasses", "addAll:", "buildSuite"],
referencedClasses: []
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "testClasses",
protocol: 'accessing',
fn: function (){
var self=this;
var stream;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
function $TestCase(){return globals.TestCase||(typeof TestCase=="undefined"?nil:TestCase)}
return smalltalk.withContext(function($ctx1) { 
var $1;
stream=_st(_st($Array())._new())._writeStream();
_st(self._selectedPackages())._do_((function(package_){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._nextPutAll_(_st(_st(package_)._classes())._select_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(_st(each)._includesBehavior_($TestCase()))._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(each)._isAbstract())._not();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})})));
}, function($ctx2) {$ctx2.fillBlock({package_:package_},$ctx1,1)})}));
$1=_st(stream)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"testClasses",{stream:stream},globals.HLSUnitModel)})},
args: [],
source: "testClasses\x0a\x09\x22Answer all concrete subclasses of TestCase in selected packages\x22\x0a\x09\x0a\x09| stream |\x0a\x09stream := Array new writeStream.\x0a\x09self selectedPackages do: [ :package |\x0a\x09\x09stream nextPutAll: (package classes select:  [ :each |\x0a\x09\x09\x09(each includesBehavior: TestCase) and: [ \x0a\x09\x09\x09\x09each isAbstract not ] ] ) ].\x0a\x09^ stream contents\x0a\x09",
messageSends: ["writeStream", "new", "do:", "selectedPackages", "nextPutAll:", "select:", "classes", "and:", "includesBehavior:", "not", "isAbstract", "contents"],
referencedClasses: ["Array", "TestCase"]
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "testPackages",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._environment())._packages())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isTestPackage();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"testPackages",{},globals.HLSUnitModel)})},
args: [],
source: "testPackages\x0a\x09\x22Answer all packages containing concrete subclasses of TestCase\x22\x0a\x09\x0a\x09^ self environment packages \x0a\x09\x09select: [ :each | each isTestPackage ]",
messageSends: ["select:", "packages", "environment", "isTestPackage"],
referencedClasses: []
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "testResult",
protocol: 'accessing',
fn: function (){
var self=this;
function $TestResult(){return globals.TestResult||(typeof TestResult=="undefined"?nil:TestResult)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@testResult"];
if(($receiver = $2) == null || $receiver.isNil){
self["@testResult"]=_st($TestResult())._new();
$1=self["@testResult"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"testResult",{},globals.HLSUnitModel)})},
args: [],
source: "testResult\x0a\x09^testResult ifNil: [testResult := TestResult new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["TestResult"]
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "unselectClass:",
protocol: 'actions',
fn: function (aClass){
var self=this;
function $HLClassUnselected(){return globals.HLClassUnselected||(typeof HLClassUnselected=="undefined"?nil:HLClassUnselected)}
return smalltalk.withContext(function($ctx1) { 
var $early={};
try {
_st(self._privateSelectedClasses())._remove_ifAbsent_(aClass,(function(){
throw $early=[self];
}));
_st(self._announcer())._announce_(_st($HLClassUnselected())._on_(aClass));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"unselectClass:",{aClass:aClass},globals.HLSUnitModel)})},
args: ["aClass"],
source: "unselectClass: aClass\x0a\x09self privateSelectedClasses remove: aClass ifAbsent: [^self].\x0a\x09self announcer announce: (HLClassUnselected on: aClass).",
messageSends: ["remove:ifAbsent:", "privateSelectedClasses", "announce:", "announcer", "on:"],
referencedClasses: ["HLClassUnselected"]
}),
globals.HLSUnitModel);

smalltalk.addMethod(
smalltalk.method({
selector: "unselectPackage:",
protocol: 'actions',
fn: function (aPackage){
var self=this;
function $HLPackageUnselected(){return globals.HLPackageUnselected||(typeof HLPackageUnselected=="undefined"?nil:HLPackageUnselected)}
return smalltalk.withContext(function($ctx1) { 
var $early={};
try {
_st(self._selectedPackages())._remove_ifAbsent_(aPackage,(function(){
throw $early=[self];
}));
_st(self._announcer())._announce_(_st($HLPackageUnselected())._on_(aPackage));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"unselectPackage:",{aPackage:aPackage},globals.HLSUnitModel)})},
args: ["aPackage"],
source: "unselectPackage: aPackage\x0a\x09self selectedPackages remove: aPackage ifAbsent: [^self].\x0a\x09self announcer announce: (HLPackageUnselected on: aPackage).",
messageSends: ["remove:ifAbsent:", "selectedPackages", "announce:", "announcer", "on:"],
referencedClasses: ["HLPackageUnselected"]
}),
globals.HLSUnitModel);



smalltalk.addClass('HLSUnitResultListWidget', globals.HLToolListWidget, [], 'Helios-SUnit');
smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'initialization',
fn: function (){
var self=this;
function $ResultAnnouncement(){return globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._announcer())._on_send_to_($ResultAnnouncement(),"onResultAnnouncement:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},globals.HLSUnitResultListWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: ResultAnnouncement\x0a\x09\x09send: #onResultAnnouncement:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["ResultAnnouncement"]
}),
globals.HLSUnitResultListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onResultAnnouncement:",
protocol: 'reacting',
fn: function (announcement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onResultAnnouncement:",{announcement:announcement},globals.HLSUnitResultListWidget)})},
args: ["announcement"],
source: "onResultAnnouncement: announcement\x0a\x09self refresh.",
messageSends: ["refresh"],
referencedClasses: []
}),
globals.HLSUnitResultListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "performFailure:",
protocol: 'actions',
fn: function (aTestCase){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aTestCase)._runCase();
return self}, function($ctx1) {$ctx1.fill(self,"performFailure:",{aTestCase:aTestCase},globals.HLSUnitResultListWidget)})},
args: ["aTestCase"],
source: "performFailure: aTestCase\x0a\x09aTestCase runCase",
messageSends: ["runCase"],
referencedClasses: []
}),
globals.HLSUnitResultListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (anObject,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._span();
$2=$1;
$3=_st(_st(_st(_st(anObject)._class())._name()).__comma(" >> ")).__comma(_st(anObject)._selector());
$ctx1.sendIdx[","]=1;
_st($2)._with_($3);
$4=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._performFailure_(anObject);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{anObject:anObject,html:html},globals.HLSUnitResultListWidget)})},
args: ["anObject", "html"],
source: "renderItemLabel: anObject on: html\x0a\x09html span\x0a\x09\x09with: anObject class name, ' >> ', anObject selector;\x0a\x09\x09onClick: [ self performFailure: anObject ]",
messageSends: ["with:", "span", ",", "name", "class", "selector", "onClick:", "performFailure:"],
referencedClasses: []
}),
globals.HLSUnitResultListWidget);



smalltalk.addClass('HLSUnitErrorsListWidget', globals.HLSUnitResultListWidget, [], 'Helios-SUnit');
smalltalk.addMethod(
smalltalk.method({
selector: "items",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._testResult())._errors();
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},globals.HLSUnitErrorsListWidget)})},
args: [],
source: "items\x0a\x09^self model testResult errors",
messageSends: ["errors", "testResult", "model"],
referencedClasses: []
}),
globals.HLSUnitErrorsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Errors";
},
args: [],
source: "label\x0a\x09^'Errors'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitErrorsListWidget);



smalltalk.addClass('HLSUnitFailuresListWidget', globals.HLSUnitResultListWidget, [], 'Helios-SUnit');
smalltalk.addMethod(
smalltalk.method({
selector: "items",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._testResult())._failures();
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},globals.HLSUnitFailuresListWidget)})},
args: [],
source: "items\x0a\x09^self model testResult failures",
messageSends: ["failures", "testResult", "model"],
referencedClasses: []
}),
globals.HLSUnitFailuresListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Failures";
},
args: [],
source: "label\x0a\x09^'Failures'",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitFailuresListWidget);



smalltalk.addClass('HLSUnitResultStatus', globals.HLWidget, ['model'], 'Helios-SUnit');
smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $TestResult(){return globals.TestResult||(typeof TestResult=="undefined"?nil:TestResult)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@model"];
if(($receiver = $2) == null || $receiver.isNil){
self["@model"]=_st($TestResult())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},globals.HLSUnitResultStatus)})},
args: [],
source: "model\x0a\x09^ model ifNil: [model := TestResult new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["TestResult"]
}),
globals.HLSUnitResultStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=anObject;
self._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},globals.HLSUnitResultStatus)})},
args: ["anObject"],
source: "model: anObject\x0a\x09model := anObject.\x0a\x09self observeModel.",
messageSends: ["observeModel"],
referencedClasses: []
}),
globals.HLSUnitResultStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'initialization',
fn: function (){
var self=this;
function $ResultAnnouncement(){return globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._announcer())._on_send_to_($ResultAnnouncement(),"onResultAnnouncement:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},globals.HLSUnitResultStatus)})},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: ResultAnnouncement\x0a\x09\x09send: #onResultAnnouncement:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["ResultAnnouncement"]
}),
globals.HLSUnitResultStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "onResultAnnouncement:",
protocol: 'reacting',
fn: function (announcement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onResultAnnouncement:",{announcement:announcement},globals.HLSUnitResultStatus)})},
args: ["announcement"],
source: "onResultAnnouncement: announcement\x0a\x09self refresh.",
messageSends: ["refresh"],
referencedClasses: []
}),
globals.HLSUnitResultStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "printErrors",
protocol: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self._result())._errors())._size())._asString()).__comma(" errors, ");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printErrors",{},globals.HLSUnitResultStatus)})},
args: [],
source: "printErrors\x0a\x09^ self result errors size asString , ' errors, '",
messageSends: [",", "asString", "size", "errors", "result"],
referencedClasses: []
}),
globals.HLSUnitResultStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "printFailures",
protocol: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self._result())._failures())._size())._asString()).__comma(" failures");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printFailures",{},globals.HLSUnitResultStatus)})},
args: [],
source: "printFailures\x0a\x09^ self result failures size asString, ' failures'",
messageSends: [",", "asString", "size", "failures", "result"],
referencedClasses: []
}),
globals.HLSUnitResultStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "printPasses",
protocol: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $6,$5,$9,$8,$7,$4,$3,$2,$1;
$6=self._result();
$ctx1.sendIdx["result"]=1;
$5=_st($6)._runs();
$9=self._result();
$ctx1.sendIdx["result"]=2;
$8=_st($9)._errors();
$7=_st($8)._size();
$ctx1.sendIdx["size"]=1;
$4=_st($5).__minus($7);
$3=_st($4).__minus(_st(_st(self._result())._failures())._size());
$ctx1.sendIdx["-"]=1;
$2=_st($3)._asString();
$1=_st($2).__comma(" passes, ");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printPasses",{},globals.HLSUnitResultStatus)})},
args: [],
source: "printPasses\x0a\x09^ (self result runs - self result errors size - self result failures size) asString , ' passes, '",
messageSends: [",", "asString", "-", "runs", "result", "size", "errors", "failures"],
referencedClasses: []
}),
globals.HLSUnitResultStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "printTotal",
protocol: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._result())._total())._asString()).__comma(" runs, ");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printTotal",{},globals.HLSUnitResultStatus)})},
args: [],
source: "printTotal\x0a\x09^ self result total asString, ' runs, '",
messageSends: [",", "asString", "total", "result"],
referencedClasses: []
}),
globals.HLSUnitResultStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_(self._statusCssClass());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._span())._with_(self._statusInfo());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLSUnitResultStatus)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div\x0a\x09\x09class: self statusCssClass;\x0a\x09\x09with: [ html span with: self statusInfo ]",
messageSends: ["class:", "div", "statusCssClass", "with:", "span", "statusInfo"],
referencedClasses: []
}),
globals.HLSUnitResultStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "result",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._testResult();
return $1;
}, function($ctx1) {$ctx1.fill(self,"result",{},globals.HLSUnitResultStatus)})},
args: [],
source: "result\x0a\x09^ self model testResult",
messageSends: ["testResult", "model"],
referencedClasses: []
}),
globals.HLSUnitResultStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "statusCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="sunit status ".__comma(_st(self._result())._status());
return $1;
}, function($ctx1) {$ctx1.fill(self,"statusCssClass",{},globals.HLSUnitResultStatus)})},
args: [],
source: "statusCssClass\x0a\x09^'sunit status ', self result status",
messageSends: [",", "status", "result"],
referencedClasses: []
}),
globals.HLSUnitResultStatus);

smalltalk.addMethod(
smalltalk.method({
selector: "statusInfo",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self._printTotal()).__comma(self._printPasses())).__comma(self._printErrors());
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(self._printFailures());
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"statusInfo",{},globals.HLSUnitResultStatus)})},
args: [],
source: "statusInfo\x0a\x09^ self printTotal, self printPasses, self printErrors, self printFailures",
messageSends: [",", "printTotal", "printPasses", "printErrors", "printFailures"],
referencedClasses: []
}),
globals.HLSUnitResultStatus);



smalltalk.addClass('HLSUnitResults', globals.HLWidget, ['model', 'progressBarWidget', 'resultStatusWidget'], 'Helios-SUnit');
smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;
},
args: [],
source: "model\x0a\x09^model",
messageSends: [],
referencedClasses: []
}),
globals.HLSUnitResults);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=anObject;
self._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},globals.HLSUnitResults)})},
args: ["anObject"],
source: "model: anObject\x0a\x09model := anObject.\x0a\x09self observeModel",
messageSends: ["observeModel"],
referencedClasses: []
}),
globals.HLSUnitResults);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'initialization',
fn: function (){
var self=this;
function $HLRunTests(){return globals.HLRunTests||(typeof HLRunTests=="undefined"?nil:HLRunTests)}
function $ResultAnnouncement(){return globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLRunTests(),"onRunTests:",self);
$ctx1.sendIdx["on:send:to:"]=1;
$2=_st($1)._on_send_to_($ResultAnnouncement(),"onResultAnnouncement:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},globals.HLSUnitResults)})},
args: [],
source: "observeModel\x0a    self model announcer \x0a\x09\x09on: HLRunTests\x0a\x09\x09send: #onRunTests:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ResultAnnouncement\x0a\x09\x09send: #onResultAnnouncement:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["HLRunTests", "ResultAnnouncement"]
}),
globals.HLSUnitResults);

smalltalk.addMethod(
smalltalk.method({
selector: "onResultAnnouncement:",
protocol: 'reacting',
fn: function (announcement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$6,$5,$4,$3,$2;
$1=self._progressBarWidget();
$6=self._model();
$ctx1.sendIdx["model"]=1;
$5=_st($6)._testResult();
$ctx1.sendIdx["testResult"]=1;
$4=_st($5)._runs();
$3=_st($4).__slash(_st(_st(self._model())._testResult())._total());
$2=_st($3).__star((100));
_st($1)._updateProgress_($2);
return self}, function($ctx1) {$ctx1.fill(self,"onResultAnnouncement:",{announcement:announcement},globals.HLSUnitResults)})},
args: ["announcement"],
source: "onResultAnnouncement: announcement\x0a\x09self progressBarWidget \x0a\x09\x09updateProgress: self model testResult runs / self model testResult total * 100.",
messageSends: ["updateProgress:", "progressBarWidget", "*", "/", "runs", "testResult", "model", "total"],
referencedClasses: []
}),
globals.HLSUnitResults);

smalltalk.addMethod(
smalltalk.method({
selector: "onRunTests:",
protocol: 'reacting',
fn: function (announcement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._progressBarWidget();
_st($1)._updateProgress_((0));
$2=_st($1)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onRunTests:",{announcement:announcement},globals.HLSUnitResults)})},
args: ["announcement"],
source: "onRunTests: announcement\x0a\x09self progressBarWidget updateProgress: 0;\x0a\x09\x09refresh.",
messageSends: ["updateProgress:", "progressBarWidget", "refresh"],
referencedClasses: []
}),
globals.HLSUnitResults);

smalltalk.addMethod(
smalltalk.method({
selector: "progressBarWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLProgressBarWidget(){return globals.HLProgressBarWidget||(typeof HLProgressBarWidget=="undefined"?nil:HLProgressBarWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
$2=self["@progressBarWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($HLProgressBarWidget())._new();
_st($3)._label_("");
$4=_st($3)._yourself();
self["@progressBarWidget"]=$4;
$1=self["@progressBarWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"progressBarWidget",{},globals.HLSUnitResults)})},
args: [],
source: "progressBarWidget\x0a\x09^progressBarWidget ifNil: [progressBarWidget := HLProgressBarWidget new\x0a\x09\x09label: '';\x0a\x09\x09yourself]",
messageSends: ["ifNil:", "label:", "new", "yourself"],
referencedClasses: ["HLProgressBarWidget"]
}),
globals.HLSUnitResults);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(html)._with_(self._resultStatusWidget());
$ctx1.sendIdx["with:"]=1;
$1=_st(html)._with_(self._progressBarWidget());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.HLSUnitResults)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self resultStatusWidget;\x0a\x09\x09with: self progressBarWidget",
messageSends: ["with:", "resultStatusWidget", "progressBarWidget"],
referencedClasses: []
}),
globals.HLSUnitResults);

smalltalk.addMethod(
smalltalk.method({
selector: "resultStatusWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLSUnitResultStatus(){return globals.HLSUnitResultStatus||(typeof HLSUnitResultStatus=="undefined"?nil:HLSUnitResultStatus)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
$2=self["@resultStatusWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=_st($HLSUnitResultStatus())._new();
_st($3)._model_(self._model());
$4=_st($3)._yourself();
self["@resultStatusWidget"]=$4;
$1=self["@resultStatusWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"resultStatusWidget",{},globals.HLSUnitResults)})},
args: [],
source: "resultStatusWidget\x0a\x09^resultStatusWidget ifNil: [resultStatusWidget := HLSUnitResultStatus new\x0a\x09\x09model: self model;\x0a\x09\x09yourself]",
messageSends: ["ifNil:", "model:", "new", "model", "yourself"],
referencedClasses: ["HLSUnitResultStatus"]
}),
globals.HLSUnitResults);


});
