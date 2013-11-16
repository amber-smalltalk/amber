define("amber_core/Moka-Examples", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Moka-Core"], function(smalltalk,nil,_st){
smalltalk.addPackage('Moka-Examples');
smalltalk.packages["Moka-Examples"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('MKCounterBuilder', smalltalk.Object, ['counter'], 'Moka-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "build",
category: 'accessing',
fn: function (){
var self=this;
function $MKLabelView(){return smalltalk.MKLabelView||(typeof MKLabelView=="undefined"?nil:MKLabelView)}
function $MKButtonView(){return smalltalk.MKButtonView||(typeof MKButtonView=="undefined"?nil:MKButtonView)}
function $MKInputView(){return smalltalk.MKInputView||(typeof MKInputView=="undefined"?nil:MKInputView)}
function $MKTextAreaView(){return smalltalk.MKTextAreaView||(typeof MKTextAreaView=="undefined"?nil:MKTextAreaView)}
function $MKCheckboxView(){return smalltalk.MKCheckboxView||(typeof MKCheckboxView=="undefined"?nil:MKCheckboxView)}
function $MKSwitchView(){return smalltalk.MKSwitchView||(typeof MKSwitchView=="undefined"?nil:MKSwitchView)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5,$7,$6,$9,$8,$10,$12,$11,$14,$13,$16,$15,$17,$18;
$2=self._counter();
$ctx1.sendIdx["counter"]=1;
$1=_st($MKLabelView())._model_aspect_($2,"count");
$ctx1.sendIdx["model:aspect:"]=1;
_st($1)._render();
$ctx1.sendIdx["render"]=1;
$4=self._counter();
$ctx1.sendIdx["counter"]=2;
$3=_st($MKButtonView())._model_aspect_($4,"increase");
$ctx1.sendIdx["model:aspect:"]=2;
_st($3)._label_("Increase");
$ctx1.sendIdx["label:"]=1;
$5=_st($3)._render();
$ctx1.sendIdx["render"]=2;
$7=self._counter();
$ctx1.sendIdx["counter"]=3;
$6=_st($MKInputView())._model_aspect_($7,"text");
$ctx1.sendIdx["model:aspect:"]=3;
_st($6)._render();
$ctx1.sendIdx["render"]=3;
$9=self._counter();
$ctx1.sendIdx["counter"]=4;
$8=_st($MKInputView())._model_aspect_($9,"text");
$ctx1.sendIdx["model:aspect:"]=4;
_st($8)._triggerChangeOnAnyKey();
$10=_st($8)._render();
$ctx1.sendIdx["render"]=4;
$12=self._counter();
$ctx1.sendIdx["counter"]=5;
$11=_st($MKTextAreaView())._model_aspect_($12,"text");
$ctx1.sendIdx["model:aspect:"]=5;
_st($11)._render();
$ctx1.sendIdx["render"]=5;
$14=self._counter();
$ctx1.sendIdx["counter"]=6;
$13=_st($MKCheckboxView())._model_aspect_($14,"checked");
$ctx1.sendIdx["model:aspect:"]=6;
_st($13)._render();
$ctx1.sendIdx["render"]=6;
$16=self._counter();
$ctx1.sendIdx["counter"]=7;
$15=_st($MKSwitchView())._model_aspect_($16,"checked");
$ctx1.sendIdx["model:aspect:"]=7;
_st($15)._render();
$ctx1.sendIdx["render"]=7;
$17=_st($MKButtonView())._model_aspect_(self._counter(),"decrease");
_st($17)._label_("Decrease");
$18=_st($17)._render();
return self}, function($ctx1) {$ctx1.fill(self,"build",{},smalltalk.MKCounterBuilder)})},
args: [],
source: "build\x0a\x09(MKLabelView model: self counter aspect: #count) render.\x0a\x09(MKButtonView model: self counter aspect: #increase) \x0a\x09\x09label: 'Increase';\x0a\x09\x09render.\x0a\x09(MKInputView model: self counter aspect: #text)\x0a\x09\x09render.\x0a\x09(MKInputView model: self counter aspect: #text)\x0a\x09\x09triggerChangeOnAnyKey;\x0a\x09\x09render.\x0a\x09(MKTextAreaView model: self counter aspect: #text)\x0a\x09\x09render.\x0a\x09(MKCheckboxView model: self counter aspect: #checked)\x0a\x09\x09render.\x0a\x09(MKSwitchView model: self counter aspect: #checked)\x0a\x09\x09render.\x0a\x09(MKButtonView model: self counter aspect: #decrease) \x0a\x09\x09label: 'Decrease';\x0a\x09\x09render",
messageSends: ["render", "model:aspect:", "counter", "label:", "triggerChangeOnAnyKey"],
referencedClasses: ["MKLabelView", "MKButtonView", "MKInputView", "MKTextAreaView", "MKCheckboxView", "MKSwitchView"]
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


smalltalk.addClass('MKCounterModel', smalltalk.MKModel, ['count', 'text', 'checked'], 'Moka-Examples');
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
