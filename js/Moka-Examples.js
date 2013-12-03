define("amber_core/Moka-Examples", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Moka-Core", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Examples');
smalltalk.packages["Moka-Examples"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKClassesListBuilder', smalltalk.MKObservable, [], 'Moka-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "build",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $MKPaneView(){return smalltalk.MKPaneView||(typeof MKPaneView=="undefined"?nil:MKPaneView)}
function $MKScrollDecorator(){return smalltalk.MKScrollDecorator||(typeof MKScrollDecorator=="undefined"?nil:MKScrollDecorator)}
function $MKListView(){return smalltalk.MKListView||(typeof MKListView=="undefined"?nil:MKListView)}
function $MKClassesModel(){return smalltalk.MKClassesModel||(typeof MKClassesModel=="undefined"?nil:MKClassesModel)}
function $MKPanelView(){return smalltalk.MKPanelView||(typeof MKPanelView=="undefined"?nil:MKPanelView)}
function $MKSourceListView(){return smalltalk.MKSourceListView||(typeof MKSourceListView=="undefined"?nil:MKSourceListView)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$6,$5,$4,$7,$3,$8,$10,$11,$9,$12;
$1=_st($MKPaneView())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._height_((150));
$2=$1;
$6=_st($MKClassesModel())._new();
$ctx1.sendIdx["new"]=2;
$5=_st($MKListView())._model_collectionAspect_selectionAspect_($6,"classes","selectedClass");
$ctx1.sendIdx["model:collectionAspect:selectionAspect:"]=1;
$4=_st($MKScrollDecorator())._decorate_($5);
_st($4)._left_((4));
$ctx1.sendIdx["left:"]=1;
_st($4)._top_((4));
$ctx1.sendIdx["top:"]=1;
_st($4)._bottom_((4));
$ctx1.sendIdx["bottom:"]=1;
_st($4)._right_((0.5));
$ctx1.sendIdx["right:"]=1;
$7=_st($4)._yourself();
$ctx1.sendIdx["yourself"]=1;
$3=$7;
_st($2)._addView_($3);
$ctx1.sendIdx["addView:"]=1;
$8=$1;
$10=_st($MKPanelView())._new();
$ctx1.sendIdx["new"]=3;
_st($10)._left_((0.5));
_st($10)._top_((4));
_st($10)._right_((4));
_st($10)._bottom_((4));
_st($10)._addView_(_st($MKSourceListView())._model_collectionAspect_selectionAspect_(_st($MKClassesModel())._new(),"classes","selectedClass"));
$11=_st($10)._yourself();
$9=$11;
_st($8)._addView_($9);
$ctx1.sendIdx["addView:"]=2;
$12=_st($1)._render();
return self}, function($ctx1) {$ctx1.fill(self,"build",{},smalltalk.MKClassesListBuilder)})},
args: [],
source: "build\x0a\x09MKPaneView new\x0a\x09\x09height: 150;\x0a\x09\x09addView: ((MKScrollDecorator decorate:\x0a\x09\x09\x09(MKListView \x09\x0a\x09\x09\x09\x09model: MKClassesModel new\x0a\x09\x09\x09\x09collectionAspect: #classes\x0a\x09\x09\x09\x09selectionAspect: #selectedClass))\x0a\x09\x09\x09\x09\x09left: 4;\x0a\x09\x09\x09\x09\x09top: 4;\x0a\x09\x09\x09\x09\x09bottom: 4;\x0a\x09\x09\x09\x09\x09right: 0.5;\x0a\x09\x09\x09\x09\x09yourself);\x0a\x09\x09addView: (MKPanelView new\x0a\x09\x09\x09left: 0.5;\x0a\x09\x09\x09top: 4;\x0a\x09\x09\x09right: 4;\x0a\x09\x09\x09bottom: 4;\x0a\x09\x09\x09addView: (MKSourceListView \x09\x0a\x09\x09\x09\x09model: MKClassesModel new\x0a\x09\x09\x09\x09collectionAspect: #classes\x0a\x09\x09\x09\x09selectionAspect: #selectedClass);\x0a\x09\x09\x09yourself);\x0a\x09\x09render",
messageSends: ["height:", "new", "addView:", "left:", "decorate:", "model:collectionAspect:selectionAspect:", "top:", "bottom:", "right:", "yourself", "render"],
referencedClasses: ["MKPaneView", "MKScrollDecorator", "MKListView", "MKClassesModel", "MKPanelView", "MKSourceListView"]
}),
smalltalk.MKClassesListBuilder);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._build();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MKClassesListBuilder.klass)})},
args: [],
source: "initialize\x0a\x09self new build",
messageSends: ["build", "new"],
referencedClasses: []
}),
smalltalk.MKClassesListBuilder.klass);


smalltalk.addClass('MKClassesModel', smalltalk.MKObservable, ['classes', 'selectedClass'], 'Moka-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "classes",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._classes();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.MKClassesModel)})},
args: [],
source: "classes\x0a\x09^ Smalltalk current classes",
messageSends: ["classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.MKClassesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedClass",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@selectedClass"];
if(($receiver = $2) == nil || $receiver == null){
$1=_st(self._classes())._first();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedClass",{},smalltalk.MKClassesModel)})},
args: [],
source: "selectedClass\x0a\x09^ selectedClass ifNil: [ self classes first ]",
messageSends: ["ifNil:", "first", "classes"],
referencedClasses: []
}),
smalltalk.MKClassesModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedClass:",
category: 'as yet unclassified',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectedClass"]=aClass;
self._changed_("selectedClass");
return self}, function($ctx1) {$ctx1.fill(self,"selectedClass:",{aClass:aClass},smalltalk.MKClassesModel)})},
args: ["aClass"],
source: "selectedClass: aClass\x0a\x09selectedClass := aClass.\x0a\x09self changed: #selectedClass",
messageSends: ["changed:"],
referencedClasses: []
}),
smalltalk.MKClassesModel);



smalltalk.addClass('MKCounterBuilder', smalltalk.Object, ['counter'], 'Moka-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "build",
category: 'accessing',
fn: function (){
var self=this;
var pane;
function $MKPanelView(){return smalltalk.MKPanelView||(typeof MKPanelView=="undefined"?nil:MKPanelView)}
function $MKHeadingView(){return smalltalk.MKHeadingView||(typeof MKHeadingView=="undefined"?nil:MKHeadingView)}
function $MKButtonView(){return smalltalk.MKButtonView||(typeof MKButtonView=="undefined"?nil:MKButtonView)}
function $MKDropdownView(){return smalltalk.MKDropdownView||(typeof MKDropdownView=="undefined"?nil:MKDropdownView)}
function $MKInputView(){return smalltalk.MKInputView||(typeof MKInputView=="undefined"?nil:MKInputView)}
function $MKTextAreaView(){return smalltalk.MKTextAreaView||(typeof MKTextAreaView=="undefined"?nil:MKTextAreaView)}
function $MKCheckboxView(){return smalltalk.MKCheckboxView||(typeof MKCheckboxView=="undefined"?nil:MKCheckboxView)}
function $MKSwitchView(){return smalltalk.MKSwitchView||(typeof MKSwitchView=="undefined"?nil:MKSwitchView)}
function $MKHorizontalSplitView(){return smalltalk.MKHorizontalSplitView||(typeof MKHorizontalSplitView=="undefined"?nil:MKHorizontalSplitView)}
function $MKScrollDecorator(){return smalltalk.MKScrollDecorator||(typeof MKScrollDecorator=="undefined"?nil:MKScrollDecorator)}
function $MKLayoutView(){return smalltalk.MKLayoutView||(typeof MKLayoutView=="undefined"?nil:MKLayoutView)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$6,$3,$7,$10,$9,$11,$8,$12,$15,$14,$16,$13,$17,$20,$19,$21,$18,$22,$25,$24,$26,$23,$27,$30,$29,$31,$28,$32,$35,$34,$36,$33,$37,$40,$39,$41,$38,$42,$45,$44,$46,$43,$47,$50,$49,$51,$48,$52,$55,$54,$56,$53,$57,$60,$59,$61,$58,$62,$65,$64,$66,$63,$67,$70,$69,$71,$68,$72,$74,$75,$73,$76,$77;
$1=_st($MKPanelView())._new();
$ctx1.sendIdx["new"]=1;
pane=_st($1)._yourself();
$ctx1.sendIdx["yourself"]=1;
$2=pane;
$5=self._counter();
$ctx1.sendIdx["counter"]=1;
$4=_st($MKHeadingView())._model_aspect_($5,"count");
$ctx1.sendIdx["model:aspect:"]=1;
_st($4)._level_((3));
_st($4)._top_((0));
$ctx1.sendIdx["top:"]=1;
_st($4)._left_((8));
$ctx1.sendIdx["left:"]=1;
_st($4)._height_((28));
$6=_st($4)._yourself();
$ctx1.sendIdx["yourself"]=2;
$3=$6;
_st($2)._addView_($3);
$ctx1.sendIdx["addView:"]=1;
$7=pane;
$10=self._counter();
$ctx1.sendIdx["counter"]=2;
$9=_st($MKButtonView())._model_aspect_($10,"increase");
$ctx1.sendIdx["model:aspect:"]=2;
_st($9)._label_("Increase");
$ctx1.sendIdx["label:"]=1;
_st($9)._top_((50));
$ctx1.sendIdx["top:"]=2;
_st($9)._left_((8));
$ctx1.sendIdx["left:"]=2;
$11=_st($9)._yourself();
$ctx1.sendIdx["yourself"]=3;
$8=$11;
_st($7)._addView_($8);
$ctx1.sendIdx["addView:"]=2;
$12=pane;
$15=self._counter();
$ctx1.sendIdx["counter"]=3;
$14=_st($MKButtonView())._model_aspect_($15,"decrease");
$ctx1.sendIdx["model:aspect:"]=3;
_st($14)._label_("Decrease");
_st($14)._default_(true);
_st($14)._top_((50));
$ctx1.sendIdx["top:"]=3;
_st($14)._left_((92));
$ctx1.sendIdx["left:"]=3;
$16=_st($14)._yourself();
$ctx1.sendIdx["yourself"]=4;
$13=$16;
_st($12)._addView_($13);
$ctx1.sendIdx["addView:"]=3;
$17=pane;
$20=self._counter();
$ctx1.sendIdx["counter"]=4;
$19=_st($MKDropdownView())._model_collectionAspect_selectionAspect_($20,"options","selectedOption");
$ctx1.sendIdx["model:collectionAspect:selectionAspect:"]=1;
_st($19)._left_((176));
$ctx1.sendIdx["left:"]=4;
_st($19)._top_((50));
$ctx1.sendIdx["top:"]=4;
$21=_st($19)._yourself();
$ctx1.sendIdx["yourself"]=5;
$18=$21;
_st($17)._addView_($18);
$ctx1.sendIdx["addView:"]=4;
$22=pane;
$25=self._counter();
$ctx1.sendIdx["counter"]=5;
$24=_st($MKInputView())._model_aspect_($25,"text");
$ctx1.sendIdx["model:aspect:"]=4;
_st($24)._top_((100));
$ctx1.sendIdx["top:"]=5;
_st($24)._left_((8));
$ctx1.sendIdx["left:"]=5;
$26=_st($24)._yourself();
$ctx1.sendIdx["yourself"]=6;
$23=$26;
_st($22)._addView_($23);
$ctx1.sendIdx["addView:"]=5;
$27=pane;
$30=self._counter();
$ctx1.sendIdx["counter"]=6;
$29=_st($MKInputView())._model_aspect_($30,"text");
$ctx1.sendIdx["model:aspect:"]=5;
_st($29)._top_((150));
$ctx1.sendIdx["top:"]=6;
_st($29)._left_((8));
$ctx1.sendIdx["left:"]=6;
_st($29)._triggerChangeOnAnyKey();
$31=_st($29)._yourself();
$ctx1.sendIdx["yourself"]=7;
$28=$31;
_st($27)._addView_($28);
$ctx1.sendIdx["addView:"]=6;
$32=pane;
$35=self._counter();
$ctx1.sendIdx["counter"]=7;
$34=_st($MKTextAreaView())._model_aspect_($35,"text");
$ctx1.sendIdx["model:aspect:"]=6;
_st($34)._top_((200));
$ctx1.sendIdx["top:"]=7;
_st($34)._left_((8));
$ctx1.sendIdx["left:"]=7;
$36=_st($34)._yourself();
$ctx1.sendIdx["yourself"]=8;
$33=$36;
_st($32)._addView_($33);
$ctx1.sendIdx["addView:"]=7;
$37=pane;
$40=self._counter();
$ctx1.sendIdx["counter"]=8;
$39=_st($MKCheckboxView())._model_aspect_($40,"checked");
$ctx1.sendIdx["model:aspect:"]=7;
_st($39)._top_((300));
$ctx1.sendIdx["top:"]=8;
_st($39)._left_((8));
$ctx1.sendIdx["left:"]=8;
$41=_st($39)._yourself();
$ctx1.sendIdx["yourself"]=9;
$38=$41;
_st($37)._addView_($38);
$ctx1.sendIdx["addView:"]=8;
$42=pane;
$45=self._counter();
$ctx1.sendIdx["counter"]=9;
$44=_st($MKSwitchView())._model_aspect_($45,"checked");
$ctx1.sendIdx["model:aspect:"]=8;
_st($44)._top_((350));
$ctx1.sendIdx["top:"]=9;
_st($44)._centerX_((0));
$ctx1.sendIdx["centerX:"]=1;
$46=_st($44)._yourself();
$ctx1.sendIdx["yourself"]=10;
$43=$46;
_st($42)._addView_($43);
$ctx1.sendIdx["addView:"]=9;
$47=pane;
$50=self._counter();
$ctx1.sendIdx["counter"]=10;
$49=_st($MKSwitchView())._model_aspect_($50,"checked");
$ctx1.sendIdx["model:aspect:"]=9;
_st($49)._top_((380));
$ctx1.sendIdx["top:"]=10;
_st($49)._centerX_((-50));
$ctx1.sendIdx["centerX:"]=2;
$51=_st($49)._yourself();
$ctx1.sendIdx["yourself"]=11;
$48=$51;
_st($47)._addView_($48);
$ctx1.sendIdx["addView:"]=10;
$52=pane;
$55=self._counter();
$ctx1.sendIdx["counter"]=11;
$54=_st($MKSwitchView())._model_aspect_($55,"checked");
$ctx1.sendIdx["model:aspect:"]=10;
_st($54)._top_((410));
$ctx1.sendIdx["top:"]=11;
_st($54)._centerX_((50));
$56=_st($54)._yourself();
$ctx1.sendIdx["yourself"]=12;
$53=$56;
_st($52)._addView_($53);
$ctx1.sendIdx["addView:"]=11;
$57=pane;
$60=self._counter();
$ctx1.sendIdx["counter"]=12;
$59=_st($MKSwitchView())._model_aspect_($60,"checked");
$ctx1.sendIdx["model:aspect:"]=11;
_st($59)._right_((4));
$ctx1.sendIdx["right:"]=1;
_st($59)._centerY_((0));
$ctx1.sendIdx["centerY:"]=1;
$61=_st($59)._yourself();
$ctx1.sendIdx["yourself"]=13;
$58=$61;
_st($57)._addView_($58);
$ctx1.sendIdx["addView:"]=12;
$62=pane;
$65=self._counter();
$ctx1.sendIdx["counter"]=13;
$64=_st($MKSwitchView())._model_aspect_($65,"checked");
$ctx1.sendIdx["model:aspect:"]=12;
_st($64)._right_((4));
$ctx1.sendIdx["right:"]=2;
_st($64)._centerY_((30));
$ctx1.sendIdx["centerY:"]=2;
$66=_st($64)._yourself();
$ctx1.sendIdx["yourself"]=14;
$63=$66;
_st($62)._addView_($63);
$ctx1.sendIdx["addView:"]=13;
$67=pane;
$70=self._counter();
$ctx1.sendIdx["counter"]=14;
$69=_st($MKSwitchView())._model_aspect_($70,"checked");
_st($69)._right_((4));
_st($69)._centerY_((-30));
$71=_st($69)._yourself();
$ctx1.sendIdx["yourself"]=15;
$68=$71;
_st($67)._addView_($68);
$ctx1.sendIdx["addView:"]=14;
$72=pane;
$74=_st($MKDropdownView())._model_collectionAspect_selectionAspect_(self._counter(),"options","selectedOption");
_st($74)._left_((4));
_st($74)._top_((440));
$ctx1.sendIdx["top:"]=12;
$75=_st($74)._yourself();
$73=$75;
_st($72)._addView_($73);
$76=_st($MKHorizontalSplitView())._firstView_secondView_(_st($MKScrollDecorator())._decorate_(pane),_st($MKLayoutView())._new());
_st($76)._top_((200));
_st($76)._bottom_((0));
$77=_st($76)._render();
return self}, function($ctx1) {$ctx1.fill(self,"build",{pane:pane},smalltalk.MKCounterBuilder)})},
args: [],
source: "build\x0a\x09| pane |\x0a\x09pane := MKPanelView new\x0a\x09\x09yourself.\x0a\x09\x0a\x09pane addView: ((MKHeadingView model: self counter aspect: #count)\x0a\x09\x09level: 3;\x0a\x09\x09top: 0;\x0a\x09\x09left: 8;\x0a\x09\x09height: 28;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKButtonView model: self counter aspect: #increase) \x0a\x09\x09label: 'Increase';\x0a\x09\x09top: 50;\x0a\x09\x09left: 8;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKButtonView model: self counter aspect: #decrease) \x0a\x09\x09label: 'Decrease';\x0a\x09\x09default: true;\x0a\x09\x09top: 50;\x0a\x09\x09left: 92;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKDropdownView \x0a\x09\x09model: self counter\x0a\x09\x09collectionAspect: #options\x0a\x09\x09selectionAspect: #selectedOption)\x0a\x09\x09\x09left: 176;\x0a\x09\x09\x09top: 50;\x0a\x09\x09\x09yourself).\x0a\x09pane addView: ((MKInputView model: self counter aspect: #text)\x0a\x09\x09top: 100;\x0a\x09\x09left: 8;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKInputView model: self counter aspect: #text)\x0a\x09\x09top: 150;\x0a\x09\x09left: 8;\x0a\x09\x09triggerChangeOnAnyKey;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKTextAreaView model: self counter aspect: #text)\x0a\x09\x09top: 200;\x0a\x09\x09left: 8;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKCheckboxView model: self counter aspect: #checked)\x0a\x09\x09top: 300;\x0a\x09\x09left: 8;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKSwitchView model: self counter aspect: #checked)\x0a\x09\x09top: 350;\x0a\x09\x09centerX: 0;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKSwitchView model: self counter aspect: #checked)\x0a\x09\x09top: 380;\x0a\x09\x09centerX: -50;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKSwitchView model: self counter aspect: #checked)\x0a\x09\x09top: 410;\x0a\x09\x09centerX: 50;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKSwitchView model: self counter aspect: #checked)\x0a\x09\x09right: 4;\x0a\x09\x09centerY: 0;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKSwitchView model: self counter aspect: #checked)\x0a\x09\x09right: 4;\x0a\x09\x09centerY: 30;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKSwitchView model: self counter aspect: #checked)\x0a\x09\x09right: 4;\x0a\x09\x09centerY: -30;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKDropdownView \x0a\x09\x09\x09model: self counter\x0a\x09\x09\x09collectionAspect: #options\x0a\x09\x09\x09selectionAspect: #selectedOption)\x0a\x09\x09left: 4;\x0a\x09\x09top: 440;\x0a\x09\x09yourself).\x0a\x09\x0a\x09(MKHorizontalSplitView \x0a\x09\x09firstView: (MKScrollDecorator decorate: pane)\x0a\x09\x09secondView: MKLayoutView new) \x0a\x09\x09\x09top: 200;\x0a\x09\x09\x09bottom: 0;\x0a\x09\x09\x09render",
messageSends: ["yourself", "new", "addView:", "level:", "model:aspect:", "counter", "top:", "left:", "height:", "label:", "default:", "model:collectionAspect:selectionAspect:", "triggerChangeOnAnyKey", "centerX:", "right:", "centerY:", "firstView:secondView:", "decorate:", "bottom:", "render"],
referencedClasses: ["MKPanelView", "MKHeadingView", "MKButtonView", "MKDropdownView", "MKInputView", "MKTextAreaView", "MKCheckboxView", "MKSwitchView", "MKHorizontalSplitView", "MKScrollDecorator", "MKLayoutView"]
}),
smalltalk.MKCounterBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "counter",
category: 'accessing',
fn: function (){
var self=this;
function $MKCounterModel(){return smalltalk.MKCounterModel||(typeof MKCounterModel=="undefined"?nil:MKCounterModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@counter"];
if(($receiver = $2) == nil || $receiver == null){
self["@counter"]=_st($MKCounterModel())._new();
$1=self["@counter"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"counter",{},smalltalk.MKCounterBuilder)})},
args: [],
source: "counter\x0a\x09^ counter ifNil: [ counter := MKCounterModel new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["MKCounterModel"]
}),
smalltalk.MKCounterBuilder);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._build();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MKCounterBuilder.klass)})},
args: [],
source: "initialize\x0a\x09self new build",
messageSends: ["build", "new"],
referencedClasses: []
}),
smalltalk.MKCounterBuilder.klass);


smalltalk.addClass('MKCounterModel', smalltalk.MKObservable, ['count', 'text', 'checked', 'options', 'selectedOption'], 'Moka-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "checked",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@checked"];
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"checked",{},smalltalk.MKCounterModel)})},
args: [],
source: "checked\x0a\x09^ checked ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MKCounterModel);

smalltalk.addMethod(
smalltalk.method({
selector: "checked:",
category: 'actions',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@checked"]=aBoolean;
self._changed_("checked");
return self}, function($ctx1) {$ctx1.fill(self,"checked:",{aBoolean:aBoolean},smalltalk.MKCounterModel)})},
args: ["aBoolean"],
source: "checked: aBoolean\x0a\x09checked := aBoolean.\x0a\x09self changed: 'checked'",
messageSends: ["changed:"],
referencedClasses: []
}),
smalltalk.MKCounterModel);

smalltalk.addMethod(
smalltalk.method({
selector: "count",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@count"])._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"count",{},smalltalk.MKCounterModel)})},
args: [],
source: "count\x0a\x09^ count asString",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.MKCounterModel);

smalltalk.addMethod(
smalltalk.method({
selector: "decrease",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@count"]=_st(self["@count"]).__minus((1));
self._changed_("count");
return self}, function($ctx1) {$ctx1.fill(self,"decrease",{},smalltalk.MKCounterModel)})},
args: [],
source: "decrease\x0a\x09count := count - 1.\x0a\x09self changed: #count",
messageSends: ["-", "changed:"],
referencedClasses: []
}),
smalltalk.MKCounterModel);

smalltalk.addMethod(
smalltalk.method({
selector: "increase",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@count"]=_st(self["@count"]).__plus((1));
self._changed_("count");
return self}, function($ctx1) {$ctx1.fill(self,"increase",{},smalltalk.MKCounterModel)})},
args: [],
source: "increase\x0a\x09count := count + 1.\x0a\x09self changed: #count",
messageSends: ["+", "changed:"],
referencedClasses: []
}),
smalltalk.MKCounterModel);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.MKCounterModel.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@count"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MKCounterModel)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09count := 0",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.MKCounterModel);

smalltalk.addMethod(
smalltalk.method({
selector: "options",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["foo", "bar", "baz"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"options",{},smalltalk.MKCounterModel)})},
args: [],
source: "options\x0a\x09^ #('foo' 'bar' 'baz')",
messageSends: [],
referencedClasses: []
}),
smalltalk.MKCounterModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedOption",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@selectedOption"];
if(($receiver = $2) == nil || $receiver == null){
self["@selectedOption"]=_st(self._options())._last();
$1=self["@selectedOption"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedOption",{},smalltalk.MKCounterModel)})},
args: [],
source: "selectedOption\x0a\x09^ selectedOption ifNil: [ selectedOption := self options last ]",
messageSends: ["ifNil:", "last", "options"],
referencedClasses: []
}),
smalltalk.MKCounterModel);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedOption:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectedOption"]=aString;
self._changed_("selectedOption");
return self}, function($ctx1) {$ctx1.fill(self,"selectedOption:",{aString:aString},smalltalk.MKCounterModel)})},
args: ["aString"],
source: "selectedOption: aString\x0a\x09selectedOption := aString.\x0a\x09self changed: #selectedOption",
messageSends: ["changed:"],
referencedClasses: []
}),
smalltalk.MKCounterModel);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@text"];
if(($receiver = $2) == nil || $receiver == null){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.MKCounterModel)})},
args: [],
source: "text\x0a\x09^ text ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MKCounterModel);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=aString;
self._changed_("text");
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.MKCounterModel)})},
args: ["aString"],
source: "text: aString\x0a\x09text := aString.\x0a\x09self changed: 'text'",
messageSends: ["changed:"],
referencedClasses: []
}),
smalltalk.MKCounterModel);


});
