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
source: "build\x0a\x09MKPaneView new\x0a\x09\x09height: 150;\x0a\x09\x09addView: ((MKScrollDecorator decorate:\x0a\x09\x09\x09(MKListView\x0a\x09\x09\x09\x09model: MKClassesModel new\x0a\x09\x09\x09\x09collectionAspect: #classes\x0a\x09\x09\x09\x09selectionAspect: #selectedClass))\x0a\x09\x09\x09\x09\x09left: 4;\x0a\x09\x09\x09\x09\x09top: 4;\x0a\x09\x09\x09\x09\x09bottom: 4;\x0a\x09\x09\x09\x09\x09right: 0.5;\x0a\x09\x09\x09\x09\x09yourself);\x0a\x09\x09addView: (MKPanelView new\x0a\x09\x09\x09left: 0.5;\x0a\x09\x09\x09top: 4;\x0a\x09\x09\x09right: 4;\x0a\x09\x09\x09bottom: 4;\x0a\x09\x09\x09addView: (MKSourceListView \x09\x0a\x09\x09\x09\x09model: MKClassesModel new\x0a\x09\x09\x09\x09collectionAspect: #classes\x0a\x09\x09\x09\x09selectionAspect: #selectedClass);\x0a\x09\x09\x09yourself);\x0a\x09\x09render",
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
var pane,splitter;
function $MKVerticalSplitView(){return smalltalk.MKVerticalSplitView||(typeof MKVerticalSplitView=="undefined"?nil:MKVerticalSplitView)}
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
var $1,$2,$3,$6,$5,$7,$4,$8,$11,$10,$12,$9,$13,$16,$15,$17,$14,$18,$21,$20,$22,$19,$23,$26,$25,$27,$24,$28,$31,$30,$32,$29,$33,$36,$35,$37,$34,$38,$41,$40,$42,$39,$43,$46,$45,$47,$44,$48,$51,$50,$52,$49,$53,$56,$55,$57,$54,$58,$61,$60,$62,$59,$63,$66,$65,$67,$64,$68,$71,$70,$72,$69,$73,$75,$76,$74,$77,$80,$81,$79,$82,$78;
$1=_st($MKVerticalSplitView())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._top_((200));
$ctx1.sendIdx["top:"]=1;
_st($1)._bottomThickness_((50));
_st($1)._bottom_((0));
$ctx1.sendIdx["bottom:"]=1;
$2=_st($1)._yourself();
$ctx1.sendIdx["yourself"]=1;
splitter=$2;
pane=_st($MKPanelView())._new();
$ctx1.sendIdx["new"]=2;
$3=pane;
$6=self._counter();
$ctx1.sendIdx["counter"]=1;
$5=_st($MKHeadingView())._model_aspect_($6,"count");
$ctx1.sendIdx["model:aspect:"]=1;
_st($5)._level_((3));
_st($5)._top_((0));
$ctx1.sendIdx["top:"]=2;
_st($5)._left_((8));
$ctx1.sendIdx["left:"]=1;
_st($5)._height_((28));
$7=_st($5)._yourself();
$ctx1.sendIdx["yourself"]=2;
$4=$7;
_st($3)._addView_($4);
$ctx1.sendIdx["addView:"]=1;
$8=pane;
$11=self._counter();
$ctx1.sendIdx["counter"]=2;
$10=_st($MKButtonView())._model_aspect_($11,"increase");
$ctx1.sendIdx["model:aspect:"]=2;
_st($10)._label_("Increase");
$ctx1.sendIdx["label:"]=1;
_st($10)._top_((50));
$ctx1.sendIdx["top:"]=3;
_st($10)._left_((8));
$ctx1.sendIdx["left:"]=2;
$12=_st($10)._yourself();
$ctx1.sendIdx["yourself"]=3;
$9=$12;
_st($8)._addView_($9);
$ctx1.sendIdx["addView:"]=2;
$13=pane;
$16=self._counter();
$ctx1.sendIdx["counter"]=3;
$15=_st($MKButtonView())._model_aspect_($16,"decrease");
$ctx1.sendIdx["model:aspect:"]=3;
_st($15)._label_("Decrease");
_st($15)._default_(true);
_st($15)._top_((50));
$ctx1.sendIdx["top:"]=4;
_st($15)._left_((92));
$ctx1.sendIdx["left:"]=3;
$17=_st($15)._yourself();
$ctx1.sendIdx["yourself"]=4;
$14=$17;
_st($13)._addView_($14);
$ctx1.sendIdx["addView:"]=3;
$18=pane;
$21=self._counter();
$ctx1.sendIdx["counter"]=4;
$20=_st($MKDropdownView())._model_collectionAspect_selectionAspect_($21,"options","selectedOption");
$ctx1.sendIdx["model:collectionAspect:selectionAspect:"]=1;
_st($20)._left_((176));
$ctx1.sendIdx["left:"]=4;
_st($20)._top_((50));
$ctx1.sendIdx["top:"]=5;
$22=_st($20)._yourself();
$ctx1.sendIdx["yourself"]=5;
$19=$22;
_st($18)._addView_($19);
$ctx1.sendIdx["addView:"]=4;
$23=pane;
$26=self._counter();
$ctx1.sendIdx["counter"]=5;
$25=_st($MKInputView())._model_aspect_($26,"text");
$ctx1.sendIdx["model:aspect:"]=4;
_st($25)._top_((100));
$ctx1.sendIdx["top:"]=6;
_st($25)._left_((8));
$ctx1.sendIdx["left:"]=5;
$27=_st($25)._yourself();
$ctx1.sendIdx["yourself"]=6;
$24=$27;
_st($23)._addView_($24);
$ctx1.sendIdx["addView:"]=5;
$28=pane;
$31=self._counter();
$ctx1.sendIdx["counter"]=6;
$30=_st($MKInputView())._model_aspect_($31,"text");
$ctx1.sendIdx["model:aspect:"]=5;
_st($30)._top_((150));
$ctx1.sendIdx["top:"]=7;
_st($30)._left_((8));
$ctx1.sendIdx["left:"]=6;
_st($30)._triggerChangeOnAnyKey();
$32=_st($30)._yourself();
$ctx1.sendIdx["yourself"]=7;
$29=$32;
_st($28)._addView_($29);
$ctx1.sendIdx["addView:"]=6;
$33=pane;
$36=self._counter();
$ctx1.sendIdx["counter"]=7;
$35=_st($MKTextAreaView())._model_aspect_($36,"text");
$ctx1.sendIdx["model:aspect:"]=6;
_st($35)._top_((200));
$ctx1.sendIdx["top:"]=8;
_st($35)._left_((8));
$ctx1.sendIdx["left:"]=7;
$37=_st($35)._yourself();
$ctx1.sendIdx["yourself"]=8;
$34=$37;
_st($33)._addView_($34);
$ctx1.sendIdx["addView:"]=7;
$38=pane;
$41=self._counter();
$ctx1.sendIdx["counter"]=8;
$40=_st($MKCheckboxView())._model_aspect_($41,"checked");
$ctx1.sendIdx["model:aspect:"]=7;
_st($40)._top_((300));
$ctx1.sendIdx["top:"]=9;
_st($40)._left_((8));
$ctx1.sendIdx["left:"]=8;
$42=_st($40)._yourself();
$ctx1.sendIdx["yourself"]=9;
$39=$42;
_st($38)._addView_($39);
$ctx1.sendIdx["addView:"]=8;
$43=pane;
$46=self._counter();
$ctx1.sendIdx["counter"]=9;
$45=_st($MKSwitchView())._model_aspect_($46,"checked");
$ctx1.sendIdx["model:aspect:"]=8;
_st($45)._top_((350));
$ctx1.sendIdx["top:"]=10;
_st($45)._centerX_((0));
$ctx1.sendIdx["centerX:"]=1;
$47=_st($45)._yourself();
$ctx1.sendIdx["yourself"]=10;
$44=$47;
_st($43)._addView_($44);
$ctx1.sendIdx["addView:"]=9;
$48=pane;
$51=self._counter();
$ctx1.sendIdx["counter"]=10;
$50=_st($MKSwitchView())._model_aspect_($51,"checked");
$ctx1.sendIdx["model:aspect:"]=9;
_st($50)._top_((380));
$ctx1.sendIdx["top:"]=11;
_st($50)._centerX_((-50));
$ctx1.sendIdx["centerX:"]=2;
$52=_st($50)._yourself();
$ctx1.sendIdx["yourself"]=11;
$49=$52;
_st($48)._addView_($49);
$ctx1.sendIdx["addView:"]=10;
$53=pane;
$56=self._counter();
$ctx1.sendIdx["counter"]=11;
$55=_st($MKSwitchView())._model_aspect_($56,"checked");
$ctx1.sendIdx["model:aspect:"]=10;
_st($55)._top_((410));
$ctx1.sendIdx["top:"]=12;
_st($55)._centerX_((50));
$57=_st($55)._yourself();
$ctx1.sendIdx["yourself"]=12;
$54=$57;
_st($53)._addView_($54);
$ctx1.sendIdx["addView:"]=11;
$58=pane;
$61=self._counter();
$ctx1.sendIdx["counter"]=12;
$60=_st($MKSwitchView())._model_aspect_($61,"checked");
$ctx1.sendIdx["model:aspect:"]=11;
_st($60)._right_((4));
$ctx1.sendIdx["right:"]=1;
_st($60)._centerY_((0));
$ctx1.sendIdx["centerY:"]=1;
$62=_st($60)._yourself();
$ctx1.sendIdx["yourself"]=13;
$59=$62;
_st($58)._addView_($59);
$ctx1.sendIdx["addView:"]=12;
$63=pane;
$66=self._counter();
$ctx1.sendIdx["counter"]=13;
$65=_st($MKSwitchView())._model_aspect_($66,"checked");
$ctx1.sendIdx["model:aspect:"]=12;
_st($65)._right_((4));
$ctx1.sendIdx["right:"]=2;
_st($65)._centerY_((30));
$ctx1.sendIdx["centerY:"]=2;
$67=_st($65)._yourself();
$ctx1.sendIdx["yourself"]=14;
$64=$67;
_st($63)._addView_($64);
$ctx1.sendIdx["addView:"]=13;
$68=pane;
$71=self._counter();
$ctx1.sendIdx["counter"]=14;
$70=_st($MKSwitchView())._model_aspect_($71,"checked");
_st($70)._right_((4));
_st($70)._centerY_((-30));
$72=_st($70)._yourself();
$ctx1.sendIdx["yourself"]=15;
$69=$72;
_st($68)._addView_($69);
$ctx1.sendIdx["addView:"]=14;
$73=pane;
$75=_st($MKDropdownView())._model_collectionAspect_selectionAspect_(self._counter(),"options","selectedOption");
_st($75)._left_((4));
_st($75)._top_((440));
$ctx1.sendIdx["top:"]=13;
$76=_st($75)._yourself();
$ctx1.sendIdx["yourself"]=16;
$74=$76;
_st($73)._addView_($74);
$77=splitter;
$80=_st($MKScrollDecorator())._decorate_(pane);
$81=_st($MKLayoutView())._new();
$ctx1.sendIdx["new"]=3;
$79=_st($MKHorizontalSplitView())._firstView_secondView_($80,$81);
_st($79)._leftThickness_((300));
_st($79)._top_((0));
_st($79)._bottom_((0));
$82=_st($79)._yourself();
$78=$82;
_st($77)._firstView_($78);
_st(splitter)._secondView_(_st($MKLayoutView())._new());
_st(splitter)._render();
return self}, function($ctx1) {$ctx1.fill(self,"build",{pane:pane,splitter:splitter},smalltalk.MKCounterBuilder)})},
args: [],
source: "build\x0a\x09| pane splitter |\x0a\x09\x0a\x09splitter := MKVerticalSplitView new\x0a\x09\x09top: 200;\x0a\x09\x09bottomThickness: 50;\x0a\x09\x09bottom: 0;\x0a\x09\x09yourself.\x0a\x09pane := MKPanelView new.\x0a\x09\x0a\x09pane addView: ((MKHeadingView model: self counter aspect: #count)\x0a\x09\x09level: 3;\x0a\x09\x09top: 0;\x0a\x09\x09left: 8;\x0a\x09\x09height: 28;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKButtonView model: self counter aspect: #increase) \x0a\x09\x09label: 'Increase';\x0a\x09\x09top: 50;\x0a\x09\x09left: 8;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKButtonView model: self counter aspect: #decrease) \x0a\x09\x09label: 'Decrease';\x0a\x09\x09default: true;\x0a\x09\x09top: 50;\x0a\x09\x09left: 92;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKDropdownView \x0a\x09\x09model: self counter\x0a\x09\x09collectionAspect: #options\x0a\x09\x09selectionAspect: #selectedOption)\x0a\x09\x09\x09left: 176;\x0a\x09\x09\x09top: 50;\x0a\x09\x09\x09yourself).\x0a\x09pane addView: ((MKInputView model: self counter aspect: #text)\x0a\x09\x09top: 100;\x0a\x09\x09left: 8;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKInputView model: self counter aspect: #text)\x0a\x09\x09top: 150;\x0a\x09\x09left: 8;\x0a\x09\x09triggerChangeOnAnyKey;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKTextAreaView model: self counter aspect: #text)\x0a\x09\x09top: 200;\x0a\x09\x09left: 8;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKCheckboxView model: self counter aspect: #checked)\x0a\x09\x09top: 300;\x0a\x09\x09left: 8;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKSwitchView model: self counter aspect: #checked)\x0a\x09\x09top: 350;\x0a\x09\x09centerX: 0;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKSwitchView model: self counter aspect: #checked)\x0a\x09\x09top: 380;\x0a\x09\x09centerX: -50;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKSwitchView model: self counter aspect: #checked)\x0a\x09\x09top: 410;\x0a\x09\x09centerX: 50;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKSwitchView model: self counter aspect: #checked)\x0a\x09\x09right: 4;\x0a\x09\x09centerY: 0;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKSwitchView model: self counter aspect: #checked)\x0a\x09\x09right: 4;\x0a\x09\x09centerY: 30;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKSwitchView model: self counter aspect: #checked)\x0a\x09\x09right: 4;\x0a\x09\x09centerY: -30;\x0a\x09\x09yourself).\x0a\x09pane addView: ((MKDropdownView \x0a\x09\x09\x09model: self counter\x0a\x09\x09\x09collectionAspect: #options\x0a\x09\x09\x09selectionAspect: #selectedOption)\x0a\x09\x09left: 4;\x0a\x09\x09top: 440;\x0a\x09\x09yourself).\x0a\x09\x0a\x09splitter firstView: ((MKHorizontalSplitView \x0a\x09\x09firstView: (MKScrollDecorator decorate: pane)\x0a\x09\x09secondView: MKLayoutView new)\x0a\x09\x09\x09leftThickness: 300;\x0a\x09\x09\x09top: 0;\x0a\x09\x09\x09bottom: 0;\x0a\x09\x09\x09yourself).\x0a\x09\x09\x0a\x09splitter secondView: MKLayoutView new.\x0a\x09splitter render",
messageSends: ["top:", "new", "bottomThickness:", "bottom:", "yourself", "addView:", "level:", "model:aspect:", "counter", "left:", "height:", "label:", "default:", "model:collectionAspect:selectionAspect:", "triggerChangeOnAnyKey", "centerX:", "right:", "centerY:", "firstView:", "leftThickness:", "firstView:secondView:", "decorate:", "secondView:", "render"],
referencedClasses: ["MKVerticalSplitView", "MKPanelView", "MKHeadingView", "MKButtonView", "MKDropdownView", "MKInputView", "MKTextAreaView", "MKCheckboxView", "MKSwitchView", "MKHorizontalSplitView", "MKScrollDecorator", "MKLayoutView"]
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
