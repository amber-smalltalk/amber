define("amber_core/Helios-Helpers", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-Helpers');
smalltalk.packages["Helios-Helpers"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('HLGenerationOutput', smalltalk.Object, ['sourceCodes', 'protocol', 'targetClass'], 'Helios-Helpers');
smalltalk.HLGenerationOutput.comment="I am a simple data object used to store the result of a generation process";
smalltalk.addMethod(
smalltalk.method({
selector: "addSourceCode:",
protocol: 'protocol',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@sourceCodes"])._add_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"addSourceCode:",{aString:aString},smalltalk.HLGenerationOutput)})},
args: ["aString"],
source: "addSourceCode: aString\x0a\x09sourceCodes add: aString",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.HLGenerationOutput);

smalltalk.addMethod(
smalltalk.method({
selector: "compile",
protocol: 'protocol',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@sourceCodes"])._do_((function(methodSourceCode){
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@targetClass"])._includesSelector_(_st(methodSourceCode)._selector());
if(! smalltalk.assert($1)){
return _st(self["@targetClass"])._compile_protocol_(_st(methodSourceCode)._sourceCode(),self["@protocol"]);
};
}, function($ctx2) {$ctx2.fillBlock({methodSourceCode:methodSourceCode},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"compile",{},smalltalk.HLGenerationOutput)})},
args: [],
source: "compile\x0a\x09sourceCodes do: [ :methodSourceCode |\x0a\x09\x09(targetClass includesSelector: methodSourceCode selector)\x0a\x09\x09\x09ifFalse: [ \x0a\x09\x09\x09\x09targetClass \x0a\x09\x09\x09\x09\x09compile: methodSourceCode sourceCode\x0a\x09\x09\x09\x09\x09protocol: protocol ] ]",
messageSends: ["do:", "ifFalse:", "includesSelector:", "selector", "compile:protocol:", "sourceCode"],
referencedClasses: []
}),
smalltalk.HLGenerationOutput);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLGenerationOutput.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@sourceCodes"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLGenerationOutput)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09sourceCodes := OrderedCollection new",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLGenerationOutput);

smalltalk.addMethod(
smalltalk.method({
selector: "protocol",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@protocol"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocol",{},smalltalk.HLGenerationOutput)})},
args: [],
source: "protocol\x0a\x09^ protocol",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerationOutput);

smalltalk.addMethod(
smalltalk.method({
selector: "protocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@protocol"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"protocol:",{aString:aString},smalltalk.HLGenerationOutput)})},
args: ["aString"],
source: "protocol: aString\x0a\x09protocol := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerationOutput);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceCodes",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sourceCodes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceCodes",{},smalltalk.HLGenerationOutput)})},
args: [],
source: "sourceCodes\x0a\x09^ sourceCodes",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerationOutput);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceCodes:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sourceCodes"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"sourceCodes:",{aCollection:aCollection},smalltalk.HLGenerationOutput)})},
args: ["aCollection"],
source: "sourceCodes: aCollection\x0a\x09sourceCodes := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerationOutput);

smalltalk.addMethod(
smalltalk.method({
selector: "targetClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@targetClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"targetClass",{},smalltalk.HLGenerationOutput)})},
args: [],
source: "targetClass\x0a\x09^ targetClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerationOutput);

smalltalk.addMethod(
smalltalk.method({
selector: "targetClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@targetClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"targetClass:",{aClass:aClass},smalltalk.HLGenerationOutput)})},
args: ["aClass"],
source: "targetClass: aClass\x0a\x09targetClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerationOutput);



smalltalk.addClass('HLGenerationOutputWithIndex', smalltalk.HLGenerationOutput, ['index'], 'Helios-Helpers');
smalltalk.HLGenerationOutputWithIndex.comment="I am a simple data object used to store the result of a generation process.\x0a\x0aIn addition of my super class, I have an index where to put the cursor at the end of the process for the first method created (aka. the first in `sourceCodes`)";
smalltalk.addMethod(
smalltalk.method({
selector: "index",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@index"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"index",{},smalltalk.HLGenerationOutputWithIndex)})},
args: [],
source: "index\x0a\x09^ index",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerationOutputWithIndex);

smalltalk.addMethod(
smalltalk.method({
selector: "index:",
protocol: 'accessing',
fn: function (anIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@index"]=anIndex;
return self}, function($ctx1) {$ctx1.fill(self,"index:",{anIndex:anIndex},smalltalk.HLGenerationOutputWithIndex)})},
args: ["anIndex"],
source: "index: anIndex\x0a\x09index := anIndex",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerationOutputWithIndex);



smalltalk.addClass('HLGenerator', smalltalk.Object, ['output'], 'Helios-Helpers');
smalltalk.HLGenerator.comment="I am the abstract super class of the generators.\x0a\x0aMy main method is `generate` which produce an `output` object";
smalltalk.addMethod(
smalltalk.method({
selector: "class:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@output"])._targetClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"class:",{aClass:aClass},smalltalk.HLGenerator)})},
args: ["aClass"],
source: "class: aClass\x0a\x09output targetClass: aClass",
messageSends: ["targetClass:"],
referencedClasses: []
}),
smalltalk.HLGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "generate",
protocol: 'protocol',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@output"])._targetClass();
if(($receiver = $1) == nil || $receiver == null){
self._error_("class should not be nil");
} else {
$1;
};
return self}, function($ctx1) {$ctx1.fill(self,"generate",{},smalltalk.HLGenerator)})},
args: [],
source: "generate\x0a\x09output targetClass ifNil: [ self error: 'class should not be nil'].",
messageSends: ["ifNil:", "targetClass", "error:"],
referencedClasses: []
}),
smalltalk.HLGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $HLGenerationOutput(){return smalltalk.HLGenerationOutput||(typeof HLGenerationOutput=="undefined"?nil:HLGenerationOutput)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLGenerator.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@output"]=_st($HLGenerationOutput())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLGenerator)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09output := HLGenerationOutput new",
messageSends: ["initialize", "new"],
referencedClasses: ["HLGenerationOutput"]
}),
smalltalk.HLGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "output",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@output"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"output",{},smalltalk.HLGenerator)})},
args: [],
source: "output\x0a\x09^ output",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGenerator);



smalltalk.addClass('HLAccessorsGenerator', smalltalk.HLGenerator, [], 'Helios-Helpers');
smalltalk.HLAccessorsGenerator.comment="I am a generator used to compile the getters/setters of a class";
smalltalk.addMethod(
smalltalk.method({
selector: "accessorProtocolForObject",
protocol: 'double-dispatch',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@output"])._protocol_("accessing");
return self}, function($ctx1) {$ctx1.fill(self,"accessorProtocolForObject",{},smalltalk.HLAccessorsGenerator)})},
args: [],
source: "accessorProtocolForObject\x0a\x09output protocol: 'accessing'",
messageSends: ["protocol:"],
referencedClasses: []
}),
smalltalk.HLAccessorsGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "accessorsSourceCodesForObject",
protocol: 'double-dispatch',
fn: function (){
var self=this;
var sources;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
sources=_st($OrderedCollection())._new();
_st(_st(_st(_st(self["@output"])._targetClass())._instanceVariableNames())._sorted())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=sources;
_st($1)._add_(self._getterFor_(each));
$ctx2.sendIdx["add:"]=1;
$2=_st($1)._add_(self._setterFor_(each));
return $2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(self["@output"])._sourceCodes_(sources);
return self}, function($ctx1) {$ctx1.fill(self,"accessorsSourceCodesForObject",{sources:sources},smalltalk.HLAccessorsGenerator)})},
args: [],
source: "accessorsSourceCodesForObject\x0a\x09| sources |\x0a\x09\x0a\x09sources := OrderedCollection new.\x0a\x09output targetClass instanceVariableNames sorted do: [ :each | \x0a\x09\x09sources \x0a\x09\x09\x09add: (self getterFor: each);\x0a\x09\x09\x09add: (self setterFor: each) ].\x0a\x09output sourceCodes: sources",
messageSends: ["new", "do:", "sorted", "instanceVariableNames", "targetClass", "add:", "getterFor:", "setterFor:", "sourceCodes:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLAccessorsGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "generate",
protocol: 'protocol',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.HLAccessorsGenerator.superclass.fn.prototype._generate.apply(_st(self), []);
$1=_st(self["@output"])._targetClass();
_st($1)._accessorsSourceCodesWith_(self);
$2=_st($1)._accessorProtocolWith_(self);
return self}, function($ctx1) {$ctx1.fill(self,"generate",{},smalltalk.HLAccessorsGenerator)})},
args: [],
source: "generate\x0a\x09super generate.\x0a\x09\x0a\x09output targetClass \x0a\x09\x09accessorsSourceCodesWith: self;\x0a\x09\x09accessorProtocolWith: self",
messageSends: ["generate", "accessorsSourceCodesWith:", "targetClass", "accessorProtocolWith:"],
referencedClasses: []
}),
smalltalk.HLAccessorsGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "getterFor:",
protocol: 'private',
fn: function (anInstanceVariable){
var self=this;
function $HLMethodSourceCode(){return smalltalk.HLMethodSourceCode||(typeof HLMethodSourceCode=="undefined"?nil:HLMethodSourceCode)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($HLMethodSourceCode())._new();
_st($2)._selector_(anInstanceVariable);
$3=_st($2)._sourceCode_(_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
_st(stream).__lt_lt(anInstanceVariable);
$ctx2.sendIdx["<<"]=1;
_st(_st(stream)._cr())._tab();
return _st(_st(stream).__lt_lt("^ ")).__lt_lt(anInstanceVariable);
$ctx2.sendIdx["<<"]=2;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})})));
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"getterFor:",{anInstanceVariable:anInstanceVariable},smalltalk.HLAccessorsGenerator)})},
args: ["anInstanceVariable"],
source: "getterFor: anInstanceVariable\x0a\x09^ HLMethodSourceCode new\x0a\x09\x09selector:anInstanceVariable;\x0a\x09\x09sourceCode: (String streamContents: [ :stream |\x0a\x09\x09stream << anInstanceVariable.\x0a\x09\x09stream cr tab.\x0a\x09\x09stream << '^ ' << anInstanceVariable ])",
messageSends: ["selector:", "new", "sourceCode:", "streamContents:", "<<", "tab", "cr"],
referencedClasses: ["HLMethodSourceCode", "String"]
}),
smalltalk.HLAccessorsGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "setterFor:",
protocol: 'private',
fn: function (anInstanceVariable){
var self=this;
function $HLMethodSourceCode(){return smalltalk.HLMethodSourceCode||(typeof HLMethodSourceCode=="undefined"?nil:HLMethodSourceCode)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1;
$2=_st($HLMethodSourceCode())._new();
_st($2)._selector_(_st(anInstanceVariable).__comma(":"));
$3=_st($2)._sourceCode_(_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$4=_st(stream).__lt_lt(anInstanceVariable);
$ctx2.sendIdx["<<"]=2;
_st($4).__lt_lt(": anObject");
$ctx2.sendIdx["<<"]=1;
_st(_st(stream)._cr())._tab();
return _st(_st(stream).__lt_lt(anInstanceVariable)).__lt_lt(" := anObject");
$ctx2.sendIdx["<<"]=3;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})})));
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"setterFor:",{anInstanceVariable:anInstanceVariable},smalltalk.HLAccessorsGenerator)})},
args: ["anInstanceVariable"],
source: "setterFor: anInstanceVariable\x0a\x09^ HLMethodSourceCode new\x0a\x09\x09selector: anInstanceVariable, ':';\x0a\x09\x09sourceCode: (String streamContents: [ :stream |\x0a\x09\x09stream << anInstanceVariable << ': anObject'.\x0a\x09\x09stream cr tab.\x0a\x09\x09stream << anInstanceVariable << ' := anObject' ])",
messageSends: ["selector:", "new", ",", "sourceCode:", "streamContents:", "<<", "tab", "cr"],
referencedClasses: ["HLMethodSourceCode", "String"]
}),
smalltalk.HLAccessorsGenerator);



smalltalk.addClass('HLInitializeGenerator', smalltalk.HLGenerator, [], 'Helios-Helpers');
smalltalk.HLInitializeGenerator.comment="I am used to double-dispatch the `initialize` method(s) generation.\x0a\x0aUsage:\x0a\x0a    ^ HLInitializeGenerator new\x0a        class: aClass;\x0a        generate;\x0a        output\x0a\x0aI am a disposable object";
smalltalk.addMethod(
smalltalk.method({
selector: "computeIndexForObject",
protocol: 'private',
fn: function (){
var self=this;
var instVars,headerSize,firstInstVarSize;
return smalltalk.withContext(function($ctx1) { 
var $1;
headerSize=(32);
instVars=_st(_st(self["@output"])._targetClass())._instanceVariableNames();
firstInstVarSize=_st(_st(instVars)._sorted())._ifEmpty_ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return (0);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(instVars)._first())._size()).__plus((4));
$ctx2.sendIdx["+"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$1=_st(headerSize).__plus(firstInstVarSize);
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeIndexForObject",{instVars:instVars,headerSize:headerSize,firstInstVarSize:firstInstVarSize},smalltalk.HLInitializeGenerator)})},
args: [],
source: "computeIndexForObject\x0a\x09| instVars headerSize firstInstVarSize |\x0a\x09\x0a\x09\x2232 is the size of the `initiliaze super initialize` part\x22\x0a\x09headerSize := 32.\x0a\x09instVars := output targetClass instanceVariableNames.\x0a\x09firstInstVarSize := instVars sorted\x0a\x09\x09ifEmpty: [ 0 ]\x0a\x09\x09ifNotEmpty:[ instVars first size + 4 ].\x0a\x09^ headerSize + firstInstVarSize",
messageSends: ["instanceVariableNames", "targetClass", "ifEmpty:ifNotEmpty:", "sorted", "+", "size", "first"],
referencedClasses: []
}),
smalltalk.HLInitializeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "generate",
protocol: 'protocol',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.HLInitializeGenerator.superclass.fn.prototype._generate.apply(_st(self), []);
$1=_st(self["@output"])._targetClass();
_st($1)._initializeSourceCodesWith_(self);
_st($1)._initializeIndexWith_(self);
$2=_st($1)._initializeProtocolWith_(self);
return self}, function($ctx1) {$ctx1.fill(self,"generate",{},smalltalk.HLInitializeGenerator)})},
args: [],
source: "generate\x0a\x09super generate.\x0a\x09\x0a\x09output targetClass \x0a\x09\x09initializeSourceCodesWith: self;\x0a\x09\x09initializeIndexWith: self;\x0a\x09\x09initializeProtocolWith: self",
messageSends: ["generate", "initializeSourceCodesWith:", "targetClass", "initializeIndexWith:", "initializeProtocolWith:"],
referencedClasses: []
}),
smalltalk.HLInitializeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "generateInitializeCodeForObject",
protocol: 'private',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$4,$5,$6,$7,$8,$1;
$1=_st($String())._streamContents_((function(str){
var instVars,size;
return smalltalk.withContext(function($ctx2) {
instVars=_st(_st(_st(self["@output"])._targetClass())._instanceVariableNames())._sorted();
instVars;
size=_st(instVars)._size();
size;
_st(str).__lt_lt("initialize");
$ctx2.sendIdx["<<"]=1;
$3=_st(str)._cr();
$ctx2.sendIdx["cr"]=1;
$2=_st($3)._tab();
$ctx2.sendIdx["tab"]=1;
_st($2).__lt_lt("super initialize.");
$ctx2.sendIdx["<<"]=2;
$4=_st($2)._cr();
$ctx2.sendIdx["cr"]=2;
$4;
$5=_st(str)._cr();
$ctx2.sendIdx["cr"]=3;
_st($5)._tab();
$ctx2.sendIdx["tab"]=2;
return _st(instVars)._withIndexDo_((function(name,index){
return smalltalk.withContext(function($ctx3) {
$6=_st(index).__tild_eq((1));
$ctx3.sendIdx["~="]=1;
if(smalltalk.assert($6)){
_st(_st(str)._cr())._tab();
};
$7=_st(str).__lt_lt(name);
$ctx3.sendIdx["<<"]=4;
_st($7).__lt_lt(" := nil");
$ctx3.sendIdx["<<"]=3;
$8=_st(index).__tild_eq(size);
if(smalltalk.assert($8)){
return _st(str).__lt_lt(".");
};
}, function($ctx3) {$ctx3.fillBlock({name:name,index:index},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({str:str,instVars:instVars,size:size},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"generateInitializeCodeForObject",{},smalltalk.HLInitializeGenerator)})},
args: [],
source: "generateInitializeCodeForObject\x09\x0a\x09^ String streamContents: [ :str || instVars size |\x0a\x09\x09instVars := output targetClass instanceVariableNames sorted.\x0a\x09\x09size := instVars size.\x0a\x09\x09str << 'initialize'.\x0a\x09\x09str cr tab << 'super initialize.';cr.\x0a\x09\x09str cr tab.\x0a\x09\x09instVars withIndexDo: [ :name :index |\x0a\x09\x09\x09index ~= 1 ifTrue: [ str cr tab ].\x0a\x09\x09\x09str << name << ' := nil'.\x0a\x09\x09\x09index ~= size ifTrue: [ str << '.' ] ] ].",
messageSends: ["streamContents:", "sorted", "instanceVariableNames", "targetClass", "size", "<<", "tab", "cr", "withIndexDo:", "ifTrue:", "~="],
referencedClasses: ["String"]
}),
smalltalk.HLInitializeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $HLGenerationOutputWithIndex(){return smalltalk.HLGenerationOutputWithIndex||(typeof HLGenerationOutputWithIndex=="undefined"?nil:HLGenerationOutputWithIndex)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLInitializeGenerator.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@output"]=_st($HLGenerationOutputWithIndex())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLInitializeGenerator)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09output := HLGenerationOutputWithIndex new",
messageSends: ["initialize", "new"],
referencedClasses: ["HLGenerationOutputWithIndex"]
}),
smalltalk.HLInitializeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeCodeForObject",
protocol: 'private',
fn: function (){
var self=this;
function $HLMethodSourceCode(){return smalltalk.HLMethodSourceCode||(typeof HLMethodSourceCode=="undefined"?nil:HLMethodSourceCode)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($HLMethodSourceCode())._new();
_st($2)._selector_("initialize");
_st($2)._sourceCode_(self._generateInitializeCodeForObject());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeCodeForObject",{},smalltalk.HLInitializeGenerator)})},
args: [],
source: "initializeCodeForObject\x09\x0a\x09^ HLMethodSourceCode new\x0a\x09\x09selector: 'initialize';\x0a\x09\x09sourceCode: self generateInitializeCodeForObject;\x0a\x09\x09yourself",
messageSends: ["selector:", "new", "sourceCode:", "generateInitializeCodeForObject", "yourself"],
referencedClasses: ["HLMethodSourceCode"]
}),
smalltalk.HLInitializeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForObject",
protocol: 'double-dispatch',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@output"])._addSourceCode_(self._initializeCodeForObject());
return self}, function($ctx1) {$ctx1.fill(self,"initializeForObject",{},smalltalk.HLInitializeGenerator)})},
args: [],
source: "initializeForObject\x0a\x09output addSourceCode: self initializeCodeForObject",
messageSends: ["addSourceCode:", "initializeCodeForObject"],
referencedClasses: []
}),
smalltalk.HLInitializeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeIndexForObject",
protocol: 'double-dispatch',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@output"])._index_(self._computeIndexForObject());
return self}, function($ctx1) {$ctx1.fill(self,"initializeIndexForObject",{},smalltalk.HLInitializeGenerator)})},
args: [],
source: "initializeIndexForObject\x0a\x09output index: self computeIndexForObject",
messageSends: ["index:", "computeIndexForObject"],
referencedClasses: []
}),
smalltalk.HLInitializeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeProtocolForObject",
protocol: 'double-dispatch',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@output"])._protocol_(self._retrieveProtocolForObject());
return self}, function($ctx1) {$ctx1.fill(self,"initializeProtocolForObject",{},smalltalk.HLInitializeGenerator)})},
args: [],
source: "initializeProtocolForObject\x0a\x09output protocol: self retrieveProtocolForObject",
messageSends: ["protocol:", "retrieveProtocolForObject"],
referencedClasses: []
}),
smalltalk.HLInitializeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "retrieveProtocolForObject",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "initialization";
}, function($ctx1) {$ctx1.fill(self,"retrieveProtocolForObject",{},smalltalk.HLInitializeGenerator)})},
args: [],
source: "retrieveProtocolForObject\x0a\x09^ 'initialization'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInitializeGenerator);



smalltalk.addClass('HLMethodSourceCode', smalltalk.Object, ['selector', 'sourceCode'], 'Helios-Helpers');
smalltalk.HLMethodSourceCode.comment="I am a simple data object keeping track of the information about a method that will be compiled at the end of the generation process";
smalltalk.addMethod(
smalltalk.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.HLMethodSourceCode)})},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMethodSourceCode);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aSelector:aSelector},smalltalk.HLMethodSourceCode)})},
args: ["aSelector"],
source: "selector: aSelector\x0a\x09selector := aSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMethodSourceCode);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceCode",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sourceCode"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceCode",{},smalltalk.HLMethodSourceCode)})},
args: [],
source: "sourceCode\x0a\x09^ sourceCode",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMethodSourceCode);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceCode:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sourceCode"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"sourceCode:",{aString:aString},smalltalk.HLMethodSourceCode)})},
args: ["aString"],
source: "sourceCode: aString\x0a\x09sourceCode := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMethodSourceCode);


});
