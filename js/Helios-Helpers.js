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
selector: "serialize",
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
return self}, function($ctx1) {$ctx1.fill(self,"serialize",{},smalltalk.HLGenerationOutput)})},
args: [],
source: "serialize\x0a\x09sourceCodes do: [ :methodSourceCode |\x0a\x09\x09(targetClass includesSelector: methodSourceCode selector)\x0a\x09\x09\x09ifFalse: [ \x0a\x09\x09\x09\x09targetClass \x0a\x09\x09\x09\x09\x09compile: methodSourceCode sourceCode\x0a\x09\x09\x09\x09\x09protocol: protocol ] ]",
messageSends: ["do:", "ifFalse:", "includesSelector:", "selector", "compile:protocol:", "sourceCode"],
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
selector: "compile",
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
return self}, function($ctx1) {$ctx1.fill(self,"compile",{},smalltalk.HLGenerator)})},
args: [],
source: "compile\x0a\x0a\x09output targetClass ifNil: [ self error: 'class should not be nil'].",
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
selector: "compile",
protocol: 'protocol',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.HLAccessorsGenerator.superclass.fn.prototype._compile.apply(_st(self), []);
$1=_st(self["@output"])._targetClass();
_st($1)._accessorsSourceCodesWith_(self);
$2=_st($1)._accessorProtocolWith_(self);
return self}, function($ctx1) {$ctx1.fill(self,"compile",{},smalltalk.HLAccessorsGenerator)})},
args: [],
source: "compile\x0a\x09super compile.\x0a\x09\x0a\x09output targetClass \x0a\x09\x09accessorsSourceCodesWith: self;\x0a\x09\x09accessorProtocolWith: self",
messageSends: ["compile", "accessorsSourceCodesWith:", "targetClass", "accessorProtocolWith:"],
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
selector: "compile",
protocol: 'protocol',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.HLInitializeGenerator.superclass.fn.prototype._compile.apply(_st(self), []);
$1=_st(self["@output"])._targetClass();
_st($1)._initializeSourceCodesWith_(self);
_st($1)._initializeIndexWith_(self);
$2=_st($1)._initializeProtocolWith_(self);
return self}, function($ctx1) {$ctx1.fill(self,"compile",{},smalltalk.HLInitializeGenerator)})},
args: [],
source: "compile\x0a\x09super compile.\x0a\x09\x0a\x09output targetClass \x0a\x09\x09initializeSourceCodesWith: self;\x0a\x09\x09initializeIndexWith: self;\x0a\x09\x09initializeProtocolWith: self",
messageSends: ["compile", "initializeSourceCodesWith:", "targetClass", "initializeIndexWith:", "initializeProtocolWith:"],
referencedClasses: []
}),
smalltalk.HLInitializeGenerator);

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



smalltalk.addClass('HLMethodClassifier', smalltalk.Object, ['prefixMapping'], 'Helios-Helpers');
smalltalk.HLMethodClassifier.comment="I am in charge of categorizing methods following this strategy:\x0a\x0a- is it an accessor?\x0a- is it overriding a superclass method?\x0a- is it starting with a know prefix?\x0a- how are categorized the other implementations?";
smalltalk.addMethod(
smalltalk.method({
selector: "buildPrefixDictionary",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@prefixMapping"]=_st($Dictionary())._new();
$1=self["@prefixMapping"];
_st($1)._at_put_("test","tests");
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("bench","benchmarking");
$ctx1.sendIdx["at:put:"]=2;
_st($1)._at_put_("copy","copying");
$ctx1.sendIdx["at:put:"]=3;
_st($1)._at_put_("initialize","initialization");
$ctx1.sendIdx["at:put:"]=4;
_st($1)._at_put_("accept","visitor");
$ctx1.sendIdx["at:put:"]=5;
_st($1)._at_put_("visit","visitor");
$ctx1.sendIdx["at:put:"]=6;
_st($1)._at_put_("signal","signalling");
$ctx1.sendIdx["at:put:"]=7;
_st($1)._at_put_("parse","parsing");
$ctx1.sendIdx["at:put:"]=8;
_st($1)._at_put_("add","adding");
$ctx1.sendIdx["at:put:"]=9;
_st($1)._at_put_("is","testing");
$ctx1.sendIdx["at:put:"]=10;
_st($1)._at_put_("as","converting");
$ctx1.sendIdx["at:put:"]=11;
$2=_st($1)._at_put_("new","instance creation");
return self}, function($ctx1) {$ctx1.fill(self,"buildPrefixDictionary",{},smalltalk.HLMethodClassifier)})},
args: [],
source: "buildPrefixDictionary\x0a\x09prefixMapping := Dictionary new.\x0a\x09prefixMapping \x0a\x09\x09at: 'test' put: 'tests';\x0a\x09 \x09at: 'bench' put: 'benchmarking';\x0a\x09 \x09at: 'copy' put: 'copying';\x0a\x09\x09at: 'initialize' put: 'initialization';\x0a\x09\x09at: 'accept' put: 'visitor';\x0a\x09\x09at: 'visit' put: 'visitor';\x0a\x09\x09at: 'signal' put: 'signalling';\x0a\x09\x09at: 'parse' put: 'parsing';\x0a\x09\x09at: 'add' put: 'adding';\x0a\x09\x09at: 'is' put: 'testing';\x0a\x09\x09at: 'as' put: 'converting';\x0a\x09\x09at: 'new' put: 'instance creation'.",
messageSends: ["new", "at:put:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HLMethodClassifier);

smalltalk.addMethod(
smalltalk.method({
selector: "classify:",
protocol: 'protocol',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=self._classifyAccessor_(aMethod);
if(smalltalk.assert($1)){
$2=_st(aMethod)._category();
$ctx1.sendIdx["category"]=1;
return $2;
};
$3=self._classifyInSuperclassProtocol_(aMethod);
if(smalltalk.assert($3)){
$4=_st(aMethod)._category();
$ctx1.sendIdx["category"]=2;
return $4;
};
$5=self._classifyByKnownPrefix_(aMethod);
if(smalltalk.assert($5)){
$6=_st(aMethod)._category();
$ctx1.sendIdx["category"]=3;
return $6;
};
$7=self._classifyByOtherImplementors_(aMethod);
if(smalltalk.assert($7)){
$8=_st(aMethod)._category();
return $8;
};
return self}, function($ctx1) {$ctx1.fill(self,"classify:",{aMethod:aMethod},smalltalk.HLMethodClassifier)})},
args: ["aMethod"],
source: "classify: aMethod\x0a\x09(self classifyAccessor: aMethod)\x0a\x09\x09ifTrue: [ ^ aMethod category ].\x0a\x09(self classifyInSuperclassProtocol: aMethod)\x0a\x09\x09ifTrue: [ ^ aMethod category ].\x0a\x09(self classifyByKnownPrefix: aMethod)\x0a\x09\x09ifTrue: [ ^ aMethod category ].\x0a\x09(self classifyByOtherImplementors: aMethod)\x0a\x09\x09ifTrue: [ ^ aMethod category ].",
messageSends: ["ifTrue:", "classifyAccessor:", "category", "classifyInSuperclassProtocol:", "classifyByKnownPrefix:", "classifyByOtherImplementors:"],
referencedClasses: []
}),
smalltalk.HLMethodClassifier);

smalltalk.addMethod(
smalltalk.method({
selector: "classifyAccessor:",
protocol: 'private',
fn: function (aMethod){
var self=this;
var names,selector;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
names=_st(_st(aMethod)._methodClass())._allInstanceVariableNames();
selector=_st(aMethod)._selector();
$1=_st(_st(selector)._last()).__eq(":");
if(smalltalk.assert($1)){
selector=_st(selector)._allButLast();
selector;
};
$2=_st(names)._includes_(selector);
if(! smalltalk.assert($2)){
return false;
};
_st(aMethod)._protocol_("accessing");
return true;
}, function($ctx1) {$ctx1.fill(self,"classifyAccessor:",{aMethod:aMethod,names:names,selector:selector},smalltalk.HLMethodClassifier)})},
args: ["aMethod"],
source: "classifyAccessor: aMethod\x0a\x09| names selector |\x0a\x09\x0a\x09names := aMethod methodClass allInstanceVariableNames.\x0a\x09selector := aMethod selector.\x0a\x09\x0a\x09(selector last = ':')\x0a\x09\x09ifTrue: [ \x22selector might be a setter\x22\x0a\x09\x09\x09selector := selector allButLast ].\x0a\x09\x0a\x09(names includes: selector)\x0a\x09\x09ifFalse: [ ^ false ].\x0a\x09\x09\x0a\x09aMethod protocol: 'accessing'.\x0a\x09^ true.",
messageSends: ["allInstanceVariableNames", "methodClass", "selector", "ifTrue:", "=", "last", "allButLast", "ifFalse:", "includes:", "protocol:"],
referencedClasses: []
}),
smalltalk.HLMethodClassifier);

smalltalk.addMethod(
smalltalk.method({
selector: "classifyAll:",
protocol: 'protocol',
fn: function (aCollectionOfMethods){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollectionOfMethods)._do_((function(method){
return smalltalk.withContext(function($ctx2) {
return self._classify_(method);
}, function($ctx2) {$ctx2.fillBlock({method:method},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"classifyAll:",{aCollectionOfMethods:aCollectionOfMethods},smalltalk.HLMethodClassifier)})},
args: ["aCollectionOfMethods"],
source: "classifyAll: aCollectionOfMethods\x0a\x09aCollectionOfMethods do: [ :method |\x0a\x09\x09self classify: method ]",
messageSends: ["do:", "classify:"],
referencedClasses: []
}),
smalltalk.HLMethodClassifier);

smalltalk.addMethod(
smalltalk.method({
selector: "classifyByKnownPrefix:",
protocol: 'private',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(self["@prefixMapping"])._keysAndValuesDo_((function(prefix,protocol){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(aMethod)._selector())._beginsWith_(prefix);
if(smalltalk.assert($1)){
_st(aMethod)._protocol_(protocol);
throw $early=[true];
};
}, function($ctx2) {$ctx2.fillBlock({prefix:prefix,protocol:protocol},$ctx1,1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"classifyByKnownPrefix:",{aMethod:aMethod},smalltalk.HLMethodClassifier)})},
args: ["aMethod"],
source: "classifyByKnownPrefix: aMethod\x0a\x09prefixMapping keysAndValuesDo: [ :prefix :protocol |\x0a\x09\x09(aMethod selector beginsWith: prefix)\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09aMethod protocol: protocol.\x0a\x09\x09\x09\x09^ true ]].\x0a\x09^ false.",
messageSends: ["keysAndValuesDo:", "ifTrue:", "beginsWith:", "selector", "protocol:"],
referencedClasses: []
}),
smalltalk.HLMethodClassifier);

smalltalk.addMethod(
smalltalk.method({
selector: "classifyByOtherImplementors:",
protocol: 'private',
fn: function (aMethod){
var self=this;
var protocolBag,methods,protocolToUse,counter;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $HLReferencesModel(){return smalltalk.HLReferencesModel||(typeof HLReferencesModel=="undefined"?nil:HLReferencesModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5;
var $early={};
try {
protocolBag=_st($Dictionary())._new();
$ctx1.sendIdx["new"]=1;
methods=_st(_st($HLReferencesModel())._new())._implementorsOf_(_st(aMethod)._selector());
_st(methods)._ifEmpty_ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[false];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(methods)._do_((function(method){
var protocol;
return smalltalk.withContext(function($ctx3) {
protocol=_st(_st(method)._method())._protocol();
protocol;
$2=_st(aMethod)._methodClass();
$ctx3.sendIdx["methodClass"]=1;
$1=_st($2).__eq(_st(method)._methodClass());
$ctx3.sendIdx["="]=1;
if(! smalltalk.assert($1)){
$4=_st(_st(protocol)._first()).__eq("*");
$ctx3.sendIdx["="]=2;
$3=_st($4)._or_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(protocol).__eq(_st(aMethod)._defaultProtocol());
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)})}));
if(! smalltalk.assert($3)){
return _st(protocolBag)._at_put_(protocol,_st(_st(protocolBag)._at_ifAbsent_(protocol,(function(){
return smalltalk.withContext(function($ctx4) {
return (0);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,7)})}))).__plus((1)));
};
};
}, function($ctx3) {$ctx3.fillBlock({method:method,protocol:protocol},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(protocolBag)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[false];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,8)})}));
protocolToUse=nil;
counter=(0);
_st(protocolBag)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
$5=_st(value).__gt(counter);
if(smalltalk.assert($5)){
counter=value;
counter;
protocolToUse=key;
return protocolToUse;
};
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,9)})}));
_st(aMethod)._protocol_(protocolToUse);
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"classifyByOtherImplementors:",{aMethod:aMethod,protocolBag:protocolBag,methods:methods,protocolToUse:protocolToUse,counter:counter},smalltalk.HLMethodClassifier)})},
args: ["aMethod"],
source: "classifyByOtherImplementors: aMethod\x0a\x09| protocolBag methods protocolToUse counter |\x0a\x09\x0a\x09protocolBag := Dictionary new.\x0a\x09methods := HLReferencesModel new implementorsOf: aMethod selector.\x0a\x09methods\x0a\x09\x09ifEmpty: [ ^ false ]\x0a\x09\x09ifNotEmpty: [\x0a\x09\x09\x09methods \x0a\x09\x09\x09\x09do: [ :method || protocol |\x0a\x09\x09\x09\x09\x09protocol := method method protocol.\x0a\x09\x09\x09\x09\x09(aMethod methodClass = method methodClass)\x0a\x09\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09((protocol first = '*') or: [ protocol = aMethod defaultProtocol ])\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09protocolBag \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09at: protocol \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09put: (protocolBag at: protocol ifAbsent: [ 0 ]) + 1 ] ] ] ].\x0a\x09\x09\x09\x0a\x09protocolBag ifEmpty: [ ^ false ].\x0a\x09protocolToUse := nil.\x0a\x09counter := 0.\x0a\x09protocolBag keysAndValuesDo: [ :key :value | value > counter \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09counter := value.\x0a\x09\x09\x09protocolToUse := key ] ].\x0a\x09aMethod protocol: protocolToUse.\x0a\x09^ true",
messageSends: ["new", "implementorsOf:", "selector", "ifEmpty:ifNotEmpty:", "do:", "protocol", "method", "ifFalse:", "=", "methodClass", "or:", "first", "defaultProtocol", "at:put:", "+", "at:ifAbsent:", "ifEmpty:", "keysAndValuesDo:", "ifTrue:", ">", "protocol:"],
referencedClasses: ["Dictionary", "HLReferencesModel"]
}),
smalltalk.HLMethodClassifier);

smalltalk.addMethod(
smalltalk.method({
selector: "classifyInSuperclassProtocol:",
protocol: 'private',
fn: function (aMethod){
var self=this;
var currentClass;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
var $early={};
try {
currentClass=_st(aMethod)._methodClass();
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(currentClass)._superclass();
$ctx2.sendIdx["superclass"]=1;
return _st($1)._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
currentClass=_st(currentClass)._superclass();
currentClass;
$3=currentClass;
$4=_st(aMethod)._selector();
$ctx2.sendIdx["selector"]=1;
$2=_st($3)._includesSelector_($4);
if(smalltalk.assert($2)){
_st(aMethod)._protocol_(_st(_st(currentClass).__gt_gt(_st(aMethod)._selector()))._protocol());
throw $early=[true];
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"classifyInSuperclassProtocol:",{aMethod:aMethod,currentClass:currentClass},smalltalk.HLMethodClassifier)})},
args: ["aMethod"],
source: "classifyInSuperclassProtocol: aMethod\x0a\x09| currentClass |\x0a\x09currentClass := aMethod methodClass.\x0a\x09\x0a\x09[ currentClass superclass isNil ] whileFalse: [\x0a\x09\x09currentClass := currentClass superclass.\x0a\x09\x09(currentClass includesSelector: aMethod selector)\x0a\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09aMethod protocol: (currentClass >> aMethod selector) protocol.\x0a\x09\x09\x09\x09^ true ]].\x0a\x09\x0a\x09^ false.",
messageSends: ["methodClass", "whileFalse:", "isNil", "superclass", "ifTrue:", "includesSelector:", "selector", "protocol:", "protocol", ">>"],
referencedClasses: []
}),
smalltalk.HLMethodClassifier);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLMethodClassifier.superclass.fn.prototype._initialize.apply(_st(self), []);
self._buildPrefixDictionary();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLMethodClassifier)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09self buildPrefixDictionary.",
messageSends: ["initialize", "buildPrefixDictionary"],
referencedClasses: []
}),
smalltalk.HLMethodClassifier);



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
