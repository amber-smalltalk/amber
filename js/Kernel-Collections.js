smalltalk.addPackage('Kernel-Collections');
smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel-Collections');
smalltalk.Association.comment="I represent a pair of associated objects, a key and a value. My instances can serve as entries in a dictionary.\x0a\x0aInstances can be created with the class-side method `#key:value:`";
smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (anAssociation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._class()).__eq(_st(anAssociation)._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._key()).__eq(_st(anAssociation)._key()))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._value()).__eq(_st(anAssociation)._value());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{anAssociation:anAssociation},smalltalk.Association)})},
args: ["anAssociation"],
source: "= anAssociation\x0a\x09^self class = anAssociation class and: [\x0a\x09\x09self key = anAssociation key and: [\x0a\x09\x09self value = anAssociation value]]",
messageSends: ["and:", "=", "value", "key", "class"],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@key"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.Association)})},
args: [],
source: "key\x0a\x09^key",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "key:",
category: 'accessing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@key"]=aKey;
return self}, function($ctx1) {$ctx1.fill(self,"key:",{aKey:aKey},smalltalk.Association)})},
args: ["aKey"],
source: "key: aKey\x0a\x09key := aKey",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._key())._printOn_(aStream);
_st(aStream)._nextPutAll_(" -> ");
_st(self._value())._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Association)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09self key printOn: aStream.\x0a\x09aStream nextPutAll: ' -> '.\x0a\x09self value printOn: aStream",
messageSends: ["printOn:", "key", "nextPutAll:", "value"],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.Association)})},
args: [],
source: "value\x0a\x09^value",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aValue:aValue},smalltalk.Association)})},
args: ["aValue"],
source: "value: aValue\x0a\x09value := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);


smalltalk.addMethod(
smalltalk.method({
selector: "key:value:",
category: 'instance creation',
fn: function (aKey,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._key_(aKey);
_st($2)._value_(aValue);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"key:value:",{aKey:aKey,aValue:aValue},smalltalk.Association.klass)})},
args: ["aKey", "aValue"],
source: "key: aKey value: aValue\x0a\x09\x09^self new\x0a\x09\x09key: aKey;\x0a\x09\x09value: aValue;\x0a\x09\x09yourself",
messageSends: ["key:", "new", "value:", "yourself"],
referencedClasses: []
}),
smalltalk.Association.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.Collection.comment="I am the abstract superclass of all classes that represent a group of elements.\x0a\x0aI provide a set of useful methods to the Collection hierarchy such as enumerating and converting methods.";
smalltalk.addMethod(
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._copy();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,",",{aCollection:aCollection},smalltalk.Collection)})},
args: ["aCollection"],
source: ", aCollection\x0a\x09^self copy\x0a\x09\x09addAll: aCollection;\x0a\x09\x09yourself",
messageSends: ["addAll:", "copy", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.Collection)})},
args: ["anObject"],
source: "add: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
category: 'adding/removing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=aCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addAll:",{aCollection:aCollection},smalltalk.Collection)})},
args: ["aCollection"],
source: "addAll: aCollection\x0a\x09aCollection do: [:each |\x0a\x09\x09self add: each].\x0a\x09^aCollection",
messageSends: ["do:", "add:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asArray",
category: 'converting',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Array())._withAll_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray",{},smalltalk.Collection)})},
args: [],
source: "asArray\x0a\x09^Array withAll: self",
messageSends: ["withAll:"],
referencedClasses: ["Array"]
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asArray())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._asJSON();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.Collection)})},
args: [],
source: "asJSON\x0a\x09^self asArray collect: [:each | each asJSON]",
messageSends: ["collect:", "asJSON", "asArray"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asOrderedCollection",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asOrderedCollection",{},smalltalk.Collection)})},
args: [],
source: "asOrderedCollection\x0a\x09^self asArray",
messageSends: ["asArray"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asSet",
category: 'converting',
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Set())._withAll_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSet",{},smalltalk.Collection)})},
args: [],
source: "asSet\x0a\x09^Set withAll: self",
messageSends: ["withAll:"],
referencedClasses: ["Set"]
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
var $1;
stream=_st(_st(self._class())._new())._writeStream();
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._nextPut_(_st(aBlock)._value_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=_st(stream)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,stream:stream},smalltalk.Collection)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [ :each |\x0a\x09\x09stream nextPut: (aBlock value: each) ].\x0a\x09^stream contents",
messageSends: ["writeStream", "new", "class", "do:", "nextPut:", "value:", "contents"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "contains:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(each);
if(smalltalk.assert($1)){
throw $early=[true];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"contains:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "contains: aBlock\x0a\x09\x22Evaluate aBlock with the elements of the receiver.\x0a\x09If aBlock returns true for any element return true.\x0a\x09Otherwise return false.\x22\x0a\x0a\x09self do: [ :each | (aBlock value: each) ifTrue: [ ^ true ] ].\x0a\x09^ false",
messageSends: ["do:", "ifTrue:", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWith:",
category: 'copying',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._copy();
_st($2)._add_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWith:",{anObject:anObject},smalltalk.Collection)})},
args: ["anObject"],
source: "copyWith: anObject\x0a\x09^self copy add: anObject; yourself",
messageSends: ["add:", "copy", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWithAll:",
category: 'copying',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._copy();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWithAll:",{aCollection:aCollection},smalltalk.Collection)})},
args: ["aCollection"],
source: "copyWithAll: aCollection\x0a\x09^self copy addAll: aCollection; yourself",
messageSends: ["addAll:", "copy", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWithoutAll:",
category: 'copying',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aCollection)._includes_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWithoutAll:",{aCollection:aCollection},smalltalk.Collection)})},
args: ["aCollection"],
source: "copyWithoutAll: aCollection\x0a\x09\x22Answer a copy of the receiver that does not contain any elements\x0a\x09equal to those in aCollection.\x22\x0a\x0a\x09^ self reject: [:each | aCollection includes: each]",
messageSends: ["reject:", "includes:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._detect_ifNone_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
return self._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "detect: aBlock\x0a\x09^self detect: aBlock ifNone: [self errorNotFound]",
messageSends: ["detect:ifNone:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Collection)})},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:separatedBy:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
var actionBeforeElement;
return smalltalk.withContext(function($ctx1) { 
actionBeforeElement=(function(){
return smalltalk.withContext(function($ctx2) {
actionBeforeElement=anotherBlock;
return actionBeforeElement;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(actionBeforeElement)._value();
return _st(aBlock)._value_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:separatedBy:",{aBlock:aBlock,anotherBlock:anotherBlock,actionBeforeElement:actionBeforeElement},smalltalk.Collection)})},
args: ["aBlock", "anotherBlock"],
source: "do: aBlock separatedBy: anotherBlock\x0a\x09| actionBeforeElement |\x0a\x09actionBeforeElement := [actionBeforeElement := anotherBlock].\x0a\x09self do: [:each |\x0a\x09\x09actionBeforeElement value.\x0a\x09\x09aBlock value: each]",
messageSends: ["do:", "value", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "errorNotFound",
category: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Object is not in the collection");
return self}, function($ctx1) {$ctx1.fill(self,"errorNotFound",{},smalltalk.Collection)})},
args: [],
source: "errorNotFound\x0a\x09self error: 'Object is not in the collection'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "ifEmpty:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isEmpty();
if(smalltalk.assert($2)){
$1=_st(aBlock)._value();
} else {
$1=self;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifEmpty:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "ifEmpty: aBlock\x0a\x09\x22Evaluate the given block with the receiver as argument, answering its value if the receiver is empty, otherwise answer the receiver. Note that the fact that this method returns its argument in case the receiver is not empty allows one to write expressions like the following ones: self classifyMethodAs:\x0a\x09\x09(myProtocol ifEmpty: ['As yet unclassified'])\x22\x0a\x09^ self isEmpty\x0a\x09\x09ifTrue: [ aBlock value ]\x0a\x09\x09ifFalse: [ self ]",
messageSends: ["ifTrue:ifFalse:", "value", "isEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotEmpty:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._notEmpty();
_st($1)._ifTrue_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"ifNotEmpty:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "ifNotEmpty: aBlock\x0a\x09self notEmpty ifTrue: aBlock.",
messageSends: ["ifTrue:", "notEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
category: 'testing',
fn: function (anObject){
var self=this;
var sentinel;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1;
sentinel=_st($Object())._new();
$1=_st(self._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return sentinel;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))).__tild_eq(sentinel);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject,sentinel:sentinel},smalltalk.Collection)})},
args: ["anObject"],
source: "includes: anObject\x0a\x09| sentinel |\x0a\x09sentinel := Object new.\x0a\x09^(self detect: [ :each | each = anObject] ifNone: [ sentinel ]) ~= sentinel",
messageSends: ["new", "~=", "detect:ifNone:", "="],
referencedClasses: ["Object"]
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "inject:into:",
category: 'enumerating',
fn: function (anObject,aBlock){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
result=anObject;
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
result=_st(aBlock)._value_value_(result,each);
return result;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inject:into:",{anObject:anObject,aBlock:aBlock,result:result},smalltalk.Collection)})},
args: ["anObject", "aBlock"],
source: "inject: anObject into: aBlock\x0a\x09| result |\x0a\x09result := anObject.\x0a\x09self do: [:each |\x0a\x09\x09result := aBlock value: result value: each].\x0a\x09^result",
messageSends: ["do:", "value:value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "intersection:",
category: 'enumerating',
fn: function (aCollection){
var self=this;
var set,outputSet;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
set=self._asSet();
outputSet=_st($Set())._new();
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(set)._includes_(each))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(outputSet)._includes_(each))._not();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($1)){
return _st(outputSet)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(self._class())._withAll_(_st(outputSet)._asArray());
return $2;
}, function($ctx1) {$ctx1.fill(self,"intersection:",{aCollection:aCollection,set:set,outputSet:outputSet},smalltalk.Collection)})},
args: ["aCollection"],
source: "intersection: aCollection\x0a\x09\x22Answer the set theoretic intersection of two collections.\x22\x0a\x0a\x09| set outputSet |\x0a\x09\x0a\x09set := self asSet.\x0a\x09outputSet := Set new.\x0a\x09\x0a\x09aCollection do: [ :each |\x0a\x09\x09((set includes: each) and: [(outputSet includes: each) not])\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09outputSet add: each]].\x0a\x09\x09\x0a\x09^ self class withAll: outputSet asArray",
messageSends: ["asSet", "new", "do:", "ifTrue:", "add:", "and:", "not", "includes:", "withAll:", "asArray", "class"],
referencedClasses: ["Set"]
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "isEmpty",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._size()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},smalltalk.Collection)})},
args: [],
source: "isEmpty\x0a\x09^self size = 0",
messageSends: ["=", "size"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "notEmpty",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isEmpty())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"notEmpty",{},smalltalk.Collection)})},
args: [],
source: "notEmpty\x0a\x09^self isEmpty not",
messageSends: ["not", "isEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "occurrencesOf:",
category: 'accessing',
fn: function (anObject){
var self=this;
var tally;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
tally=(0);
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(anObject).__eq(each);
if(smalltalk.assert($1)){
tally=_st(tally).__plus((1));
return tally;
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=tally;
return $2;
}, function($ctx1) {$ctx1.fill(self,"occurrencesOf:",{anObject:anObject,tally:tally},smalltalk.Collection)})},
args: ["anObject"],
source: "occurrencesOf: anObject\x0a\x09\x22Answer how many of the receiver's elements are equal to anObject.\x22\x0a\x0a\x09| tally |\x0a\x09tally := 0.\x0a\x09self do: [:each | anObject = each ifTrue: [tally := tally + 1]].\x0a\x09^tally",
messageSends: ["do:", "ifTrue:", "+", "="],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "putOn:",
category: 'streaming',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._putOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},smalltalk.Collection)})},
args: ["aStream"],
source: "putOn: aStream\x0a\x09self do: [ :each | each putOn: aStream ]",
messageSends: ["do:", "putOn:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "reject:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aBlock)._value_(each)).__eq(false);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"reject:",{aBlock:aBlock},smalltalk.Collection)})},
args: ["aBlock"],
source: "reject: aBlock\x0a\x09^self select: [:each | (aBlock value: each) = false]",
messageSends: ["select:", "=", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._remove_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
return self._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},smalltalk.Collection)})},
args: ["anObject"],
source: "remove: anObject\x0a\x09^self remove: anObject ifAbsent: [self errorNotFound]",
messageSends: ["remove:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.Collection)})},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
stream=_st(_st(self._class())._new())._writeStream();
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(each);
if(smalltalk.assert($1)){
return _st(stream)._nextPut_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(stream)._contents();
return $2;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,stream:stream},smalltalk.Collection)})},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [:each |\x0a\x09\x09(aBlock value: each) ifTrue: [\x0a\x09\x09stream nextPut: each]].\x0a\x09^stream contents",
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "nextPut:", "value:", "contents"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Collection)})},
args: [],
source: "size\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
category: 'helios',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "collection";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.Collection.klass)})},
args: [],
source: "heliosClass\x0a\x09^ 'collection'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger},smalltalk.Collection.klass)})},
args: ["anInteger"],
source: "new: anInteger\x0a\x09^self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._add_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},smalltalk.Collection.klass)})},
args: ["anObject"],
source: "with: anObject\x0a\x09\x09^self new\x0a\x09\x09add: anObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
category: 'instance creation',
fn: function (anObject,anotherObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._add_(anObject);
_st($2)._add_(anotherObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:",{anObject:anObject,anotherObject:anotherObject},smalltalk.Collection.klass)})},
args: ["anObject", "anotherObject"],
source: "with: anObject with: anotherObject\x0a\x09\x09^self new\x0a\x09\x09add: anObject;\x0a\x09\x09add: anotherObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:with:",
category: 'instance creation',
fn: function (firstObject,secondObject,thirdObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._add_(firstObject);
_st($2)._add_(secondObject);
_st($2)._add_(thirdObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:with:",{firstObject:firstObject,secondObject:secondObject,thirdObject:thirdObject},smalltalk.Collection.klass)})},
args: ["firstObject", "secondObject", "thirdObject"],
source: "with: firstObject with: secondObject with: thirdObject\x0a\x09\x09^self new\x0a\x09\x09add: firstObject;\x0a\x09\x09add: secondObject;\x0a\x09\x09add: thirdObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withAll:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withAll:",{aCollection:aCollection},smalltalk.Collection.klass)})},
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09\x09^self new\x0a\x09\x09addAll: aCollection;\x0a\x09\x09yourself",
messageSends: ["addAll:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);


smalltalk.addClass('IndexableCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.IndexableCollection.comment="I am a key-value store collection, that is,\x0aI store values under indexes.\x0a\x0aAs a rule of thumb, if a collection has `#at:` and `#at:put:`,\x0ait is an IndexableCollection.";
smalltalk.addMethod(
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (anIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifAbsent_(anIndex,(function(){
return smalltalk.withContext(function($ctx2) {
return self._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{anIndex:anIndex},smalltalk.IndexableCollection)})},
args: ["anIndex"],
source: "at: anIndex\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value stored at anIndex.\x0a\x09Otherwise, raise an error.\x22\x0a\x0a\x09^self at: anIndex ifAbsent: [ self errorNotFound ]",
messageSends: ["at:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.IndexableCollection)})},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value stored at anIndex.\x0a\x09Otherwise, answer the value of aBlock.\x22\x0a\x0a\x09self subclassReponsibility",
messageSends: ["subclassReponsibility"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifPresent_ifAbsent_(anIndex,aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.IndexableCollection)})},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifPresent: aBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value of evaluating aBlock with the value stored at anIndex.\x0a\x09Otherwise, answer nil.\x22\x0a\x0a\x09^self at: anIndex ifPresent: aBlock ifAbsent: [ nil ]",
messageSends: ["at:ifPresent:ifAbsent:"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.IndexableCollection)})},
args: ["anIndex", "aBlock", "anotherBlock"],
source: "at: anIndex ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value of evaluating aBlock with the value stored at anIndex.\x0a\x09Otherwise, answer the value of anotherBlock.\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},smalltalk.IndexableCollection)})},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09\x22Store anObject under the given index in the receiver.\x22\x0a\x0a\x09self subclassReponsibility",
messageSends: ["subclassReponsibility"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._indexOf_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
return self._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{anObject:anObject},smalltalk.IndexableCollection)})},
args: ["anObject"],
source: "indexOf: anObject\x0a\x09\x22Lookup index at which anObject is stored in the receiver.\x0a\x09If not present, raise an error.\x22\x0a\x0a\x09^self indexOf: anObject ifAbsent: [ self errorNotFound ]",
messageSends: ["indexOf:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
category: 'accessing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.IndexableCollection)})},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09\x22Lookup index at which anObject is stored in the receiver.\x0a\x09If not present, return value of executing aBlock.\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
category: 'enumarating',
fn: function (anotherCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(each,_st(anotherCollection)._at_(index));
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock},smalltalk.IndexableCollection)})},
args: ["anotherCollection", "aBlock"],
source: "with: anotherCollection do: aBlock\x0a\x09\x22Calls aBlock with every value from self\x0a\x09and with indetically-indexed value from anotherCollection\x22\x0a\x0a\x09self withIndexDo: [ :each :index |\x0a\x09\x09aBlock value: each value: (anotherCollection at: index) ]",
messageSends: ["withIndexDo:", "value:value:", "at:"],
referencedClasses: []
}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
category: 'enumarating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.IndexableCollection)})},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09\x22Calls aBlock with every value from self\x0a\x09and with its index as the second argument\x22\x0a\x0a\x09self subclassReponsibility",
messageSends: ["subclassReponsibility"],
referencedClasses: []
}),
smalltalk.IndexableCollection);



smalltalk.addClass('HashedCollection', smalltalk.IndexableCollection, [], 'Kernel-Collections');
smalltalk.HashedCollection.comment="I am a traditional JavaScript object, or a Smalltalk `Dictionary`.\x0a\x0aUnlike a `Dictionary`, I can only have strings as keys.";
smalltalk.addMethod(
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,",",{aCollection:aCollection},smalltalk.HashedCollection)})},
args: ["aCollection"],
source: ", aCollection\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aHashedCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self._class()).__eq(_st(aHashedCollection)._class());
if(! smalltalk.assert($1)){
return false;
};
$2=_st(self._size()).__eq(_st(aHashedCollection)._size());
if(! smalltalk.assert($2)){
return false;
};
$3=_st(self._associations()).__eq(_st(aHashedCollection)._associations());
return $3;
}, function($ctx1) {$ctx1.fill(self,"=",{aHashedCollection:aHashedCollection},smalltalk.HashedCollection)})},
args: ["aHashedCollection"],
source: "= aHashedCollection\x0a\x09self class = aHashedCollection class ifFalse: [^false].\x0a\x09self size = aHashedCollection size ifFalse: [^false].\x0a\x09^self associations = aHashedCollection associations",
messageSends: ["ifFalse:", "=", "class", "size", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anAssociation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_(_st(anAssociation)._key(),_st(anAssociation)._value());
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anAssociation:anAssociation},smalltalk.HashedCollection)})},
args: ["anAssociation"],
source: "add: anAssociation\x0a\x09self at: anAssociation key put: anAssociation value",
messageSends: ["at:put:", "key", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
category: 'adding/removing',
fn: function (aHashedCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.HashedCollection.superclass.fn.prototype._addAll_.apply(_st(self), [_st(aHashedCollection)._associations()]);
$1=aHashedCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addAll:",{aHashedCollection:aHashedCollection},smalltalk.HashedCollection)})},
args: ["aHashedCollection"],
source: "addAll: aHashedCollection\x0a\x09super addAll: aHashedCollection associations.\x0a\x09^aHashedCollection",
messageSends: ["addAll:", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asDictionary",
category: 'converting',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Dictionary())._from_(self._associations());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asDictionary",{},smalltalk.HashedCollection)})},
args: [],
source: "asDictionary\x0a\x09^Dictionary from: self associations",
messageSends: ["from:", "associations"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
var c;
return smalltalk.withContext(function($ctx1) { 
var $1;
c=_st(self._class())._new();
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(c)._at_put_(key,_st(value)._asJSON());
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=c;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{c:c},smalltalk.HashedCollection)})},
args: [],
source: "asJSON\x0a\x09| c |\x0a\x09c := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09c at: key put: value asJSON].\x0a\x09^c",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "asJSON"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "associations",
category: 'accessing',
fn: function (){
var self=this;
var associations;
return smalltalk.withContext(function($ctx1) { 
var $1;
associations=[];
self._associationsDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(associations)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=associations;
return $1;
}, function($ctx1) {$ctx1.fill(self,"associations",{associations:associations},smalltalk.HashedCollection)})},
args: [],
source: "associations\x0a\x09| associations |\x0a\x09associations := #().\x0a\x09self associationsDo: [:each | associations add: each].\x0a\x09^associations",
messageSends: ["associationsDo:", "add:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "associationsDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
function $Association(){return smalltalk.Association||(typeof Association=="undefined"?nil:Association)}
return smalltalk.withContext(function($ctx1) { 
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(_st($Association())._key_value_(key,value));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"associationsDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "associationsDo: aBlock\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09aBlock value: (Association key: key value: value)]",
messageSends: ["keysAndValuesDo:", "value:", "key:value:"],
referencedClasses: ["Association"]
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._includesKey_(aKey);
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return self._basicAt_(aKey);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09^(self includesKey: aKey)\x0a\x09\x09ifTrue: [self basicAt: aKey]\x0a\x09\x09ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:", "basicAt:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsentPut:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifAbsent_(aKey,(function(){
return smalltalk.withContext(function($ctx2) {
return self._at_put_(aKey,_st(aBlock)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsentPut:",{aKey:aKey,aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsentPut: aBlock\x0a\x09^self at: aKey ifAbsent: [\x0a\x09\x09self at: aKey put: aBlock value]",
messageSends: ["at:ifAbsent:", "at:put:", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
category: 'accessing',
fn: function (aKey,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._includesKey_(aKey);
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(self._at_(aKey));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aKey:aKey,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.HashedCollection)})},
args: ["aKey", "aBlock", "anotherBlock"],
source: "at: aKey ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Lookup the given key in the receiver.\x0a\x09If it is present, answer the value of evaluating the oneArgBlock with the value associated with the key,\x0a\x09otherwise answer the value of absentBlock.\x22\x0a\x09^(self includesKey: aKey)\x0a\x09\x09ifTrue: [ aBlock value: (self at: aKey) ]\x0a\x09\x09ifFalse: anotherBlock",
messageSends: ["ifTrue:ifFalse:", "value:", "at:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (aKey,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_put_(aKey,aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},smalltalk.HashedCollection)})},
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09^self basicAt: aKey put: aValue",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict;
return smalltalk.withContext(function($ctx1) { 
var $1;
newDict=_st(self._class())._new();
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(newDict)._at_put_(key,_st(aBlock)._value_(value));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=newDict;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,newDict:newDict},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09newDict at: key put: (aBlock value: value)].\x0a\x09^newDict",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "value:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
var copy;
return smalltalk.withContext(function($ctx1) { 
var $1;
copy=_st(self._class())._new();
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(copy)._at_put_(key,_st(value)._deepCopy());
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=copy;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{copy:copy},smalltalk.HashedCollection)})},
args: [],
source: "deepCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09copy at: key put: value deepCopy].\x0a\x09^copy",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "deepCopy"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._values())._detect_ifNone_(aBlock,anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.HashedCollection)})},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09^self values detect: aBlock ifNone: anotherBlock",
messageSends: ["detect:ifNone:", "values"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._valuesDo_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09self valuesDo: aBlock",
messageSends: ["valuesDo:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
category: 'enumerating',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._values())._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},smalltalk.HashedCollection)})},
args: ["anObject"],
source: "includes: anObject\x0a\x09^self values includes: anObject",
messageSends: ["includes:", "values"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
category: 'testing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.hasOwnProperty(aKey);
return self}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},smalltalk.HashedCollection)})},
args: ["aKey"],
source: "includesKey: aKey\x0a\x09<return self.hasOwnProperty(aKey)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
category: 'accessing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._keys())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._at_(each)).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x0a\x09^ self keys detect: [ :each | (self at: each) = anObject ] ifNone: aBlock",
messageSends: ["detect:ifNone:", "=", "at:", "keys"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keyAtValue:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._keyAtValue_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
return self._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyAtValue:",{anObject:anObject},smalltalk.HashedCollection)})},
args: ["anObject"],
source: "keyAtValue: anObject\x0a\x09^ self keyAtValue: anObject ifAbsent: [ self errorNotFound ]",
messageSends: ["keyAtValue:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keyAtValue:ifAbsent:",
category: 'accessing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._indexOf_ifAbsent_(anObject,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyAtValue:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["anObject", "aBlock"],
source: "keyAtValue: anObject ifAbsent: aBlock\x0a\x09^ self indexOf: anObject ifAbsent: aBlock",
messageSends: ["indexOf:ifAbsent:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if ('function'===typeof Object.keys) return Object.keys(self);
		var keys = [];
		for(var i in self) {
			if(self.hasOwnProperty(i)) {
				keys.push(i);
			}
		};
		return keys;
	;
return self}, function($ctx1) {$ctx1.fill(self,"keys",{},smalltalk.HashedCollection)})},
args: [],
source: "keys\x0a\x09<\x0a\x09\x09if ('function'===typeof Object.keys) return Object.keys(self);\x0a\x09\x09var keys = [];\x0a\x09\x09for(var i in self) {\x0a\x09\x09\x09if(self.hasOwnProperty(i)) {\x0a\x09\x09\x09\x09keys.push(i);\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x09\x09return keys;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._keysDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(each,self._at_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09self keysDo: [:each |\x0a\x09\x09aBlock value: each value: (self at: each)]",
messageSends: ["keysDo:", "value:value:", "at:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._keys())._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09self keys do: aBlock",
messageSends: ["do:", "keys"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HashedCollection.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]);
_st(aStream)._nextPutAll_(" (");
_st(self._associations())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._printOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" , ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.HashedCollection)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self associations\x0a\x09\x09do: [:each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' , ' ].\x0a\x09aStream nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._removeKey_ifAbsent_(aKey,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aKey", "aBlock"],
source: "remove: aKey ifAbsent: aBlock\x0a\x09^self removeKey: aKey ifAbsent: aBlock",
messageSends: ["removeKey:ifAbsent:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:",
category: 'adding/removing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._remove_(aKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeKey:",{aKey:aKey},smalltalk.HashedCollection)})},
args: ["aKey"],
source: "removeKey: aKey\x0a\x09^self remove: aKey",
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:ifAbsent:",
category: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._includesKey_(aKey);
if(smalltalk.assert($2)){
$1=self._basicDelete_(aKey);
} else {
$1=_st(aBlock)._value();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09^(self includesKey: aKey)\x0a\x09\x09ifFalse: [aBlock value]\x0a\x09\x09ifTrue: [self basicDelete: aKey]",
messageSends: ["ifFalse:ifTrue:", "value", "basicDelete:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
newDict=_st(self._class())._new();
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(value);
if(smalltalk.assert($1)){
return _st(newDict)._at_put_(key,value);
};
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$2=newDict;
return $2;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,newDict:newDict},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09(aBlock value: value) ifTrue: [newDict at: key put: value]].\x0a\x09^newDict",
messageSends: ["new", "class", "keysAndValuesDo:", "ifTrue:", "at:put:", "value:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
var copy;
return smalltalk.withContext(function($ctx1) { 
var $1;
copy=_st(self._class())._new();
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(copy)._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=copy;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{copy:copy},smalltalk.HashedCollection)})},
args: [],
source: "shallowCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09copy at: key put: value].\x0a\x09^copy",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._keys())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.HashedCollection)})},
args: [],
source: "size\x0a\x09^self keys size",
messageSends: ["size", "keys"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._keys())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._at_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{},smalltalk.HashedCollection)})},
args: [],
source: "values\x0a\x09^self keys collect: [:each | self at: each]",
messageSends: ["collect:", "at:", "keys"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "valuesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09self keysAndValuesDo: [ :key :value | aBlock value: value ]",
messageSends: ["keysAndValuesDo:", "value:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(value,key);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09self keysAndValuesDo: [ :key :value | aBlock value: value value: key ]",
messageSends: ["keysAndValuesDo:", "value:value:"],
referencedClasses: []
}),
smalltalk.HashedCollection);


smalltalk.addMethod(
smalltalk.method({
selector: "from:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
var $1;
newCollection=self._new();
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"from:",{aCollection:aCollection,newCollection:newCollection},smalltalk.HashedCollection.klass)})},
args: ["aCollection"],
source: "from: aCollection\x0a\x09| newCollection |\x0a\x09newCollection := self new.\x0a\x09aCollection do: [ :each | newCollection add: each ].\x0a\x09^ newCollection",
messageSends: ["new", "do:", "add:"],
referencedClasses: []
}),
smalltalk.HashedCollection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPairs:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._from_(aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromPairs:",{aCollection:aCollection},smalltalk.HashedCollection.klass)})},
args: ["aCollection"],
source: "fromPairs: aCollection\x0a\x09\x22This message is poorly named and has been replaced by #from:\x22\x0a\x09^ self from: aCollection",
messageSends: ["from:"],
referencedClasses: []
}),
smalltalk.HashedCollection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newFromPairs:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(aCollection)._size())._even();
if(! smalltalk.assert($1)){
self._error_("#newFromPairs only accepts arrays of an even length");
};
newCollection=self._new();
_st((1)._to_by_(_st(aCollection)._size(),(2)))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._at_put_(_st(aCollection)._at_(each),_st(aCollection)._at_(_st(each).__plus((1))));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=newCollection;
return $2;
}, function($ctx1) {$ctx1.fill(self,"newFromPairs:",{aCollection:aCollection,newCollection:newCollection},smalltalk.HashedCollection.klass)})},
args: ["aCollection"],
source: "newFromPairs: aCollection\x0a\x09\x22Accept an array of elements where every two elements form an \x0a\x09association - the odd element being the key, and the even element the value.\x22\x0a\x09\x0a\x09| newCollection |\x0a\x09\x0a\x09aCollection size even ifFalse: [ \x0a\x09\x09self error: '#newFromPairs only accepts arrays of an even length' ].\x0a\x09\x09\x0a\x09newCollection := self new.\x0a\x09( 1 to: aCollection size by: 2 ) do: [ :each | \x0a\x09\x09newCollection at: (aCollection at: each) put: (aCollection at: each + 1) ].\x0a\x09\x09\x0a\x09^ newCollection",
messageSends: ["ifFalse:", "error:", "even", "size", "new", "do:", "at:put:", "at:", "+", "to:by:"],
referencedClasses: []
}),
smalltalk.HashedCollection.klass);


smalltalk.addClass('Dictionary', smalltalk.HashedCollection, ['keys', 'values'], 'Kernel-Collections');
smalltalk.Dictionary.comment="I represent a set of elements that can be viewed from one of two perspectives: a set of associations,\x0aor a container of values that are externally named where the name can be any object that responds to `=`.\x0a\x0aThe external name is referred to as the key.";
smalltalk.addMethod(
smalltalk.method({
selector: "asHashedCollection",
category: 'converting',
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HashedCollection())._from_(self._associations());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asHashedCollection",{},smalltalk.Dictionary)})},
args: [],
source: "asHashedCollection\x0a\x09^HashedCollection from: self associations",
messageSends: ["from:", "associations"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asHashedCollection())._asJSON();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.Dictionary)})},
args: [],
source: "asJSON\x0a\x09^self asHashedCollection asJSON",
messageSends: ["asJSON", "asHashedCollection"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var index = self._positionOfKey_(aKey);
		return index >=0 ? self['@values'][index] : aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.Dictionary)})},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09<\x0a\x09\x09var index = self._positionOfKey_(aKey);\x0a\x09\x09return index >>=0 ? self['@values'][index] : aBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (aKey,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var index = self._positionOfKey_(aKey);
		if(index === -1) {
			var keys = self['@keys'];
			index = keys.length;
			keys.push(aKey);
		}

		return self['@values'][index] = aValue;
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},smalltalk.Dictionary)})},
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09<\x0a\x09\x09var index = self._positionOfKey_(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09var keys = self['@keys'];\x0a\x09\x09\x09index = keys.length;\x0a\x09\x09\x09keys.push(aKey);\x0a\x09\x09}\x0a\x0a\x09\x09return self['@values'][index] = aValue;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
category: 'testing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._positionOfKey_(aKey) >= 0; ;
return self}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},smalltalk.Dictionary)})},
args: ["aKey"],
source: "includesKey: aKey\x0a\x09< return self._positionOfKey_(aKey) >>= 0; >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
category: 'accessing',
fn: function (anObject,aBlock){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
index=_st(self["@values"])._indexOf_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
return (0);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st(index).__eq((0));
if(smalltalk.assert($2)){
$1=_st(aBlock)._value();
} else {
$1=_st(self["@keys"])._at_(index);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock,index:index},smalltalk.Dictionary)})},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x0a\x09| index |\x0a\x09index := values indexOf: anObject ifAbsent: [0].\x0a\x09^ index = 0 ifTrue: [ aBlock value ] ifFalse: [ keys at: index ]",
messageSends: ["indexOf:ifAbsent:", "ifTrue:ifFalse:", "value", "at:", "="],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Dictionary.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@keys"]=[];
self["@values"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Dictionary)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09keys := #().\x0a\x09values := #()",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keys",{},smalltalk.Dictionary)})},
args: [],
source: "keys\x0a\x09^keys copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._with_do_(self["@values"],aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.Dictionary)})},
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09^keys with: values do: aBlock",
messageSends: ["with:do:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},smalltalk.Dictionary)})},
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09^keys do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOfKey:",
category: 'private',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var keys = self['@keys'];
		for(var i=0;i<keys.length;i++){
			if(keys[i].__eq(anObject)) { return i;}
		}
		return -1;
	;
return self}, function($ctx1) {$ctx1.fill(self,"positionOfKey:",{anObject:anObject},smalltalk.Dictionary)})},
args: ["anObject"],
source: "positionOfKey: anObject\x0a\x09<\x0a\x09\x09var keys = self['@keys'];\x0a\x09\x09for(var i=0;i<keys.length;i++){\x0a\x09\x09\x09if(keys[i].__eq(anObject)) { return i;}\x0a\x09\x09}\x0a\x09\x09return -1;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:ifAbsent:",
category: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var index = self._positionOfKey_(aKey);
		if(index === -1) {
			return aBlock._value()
		} else {
			var keys = self['@keys'], values = self['@values'];
			var value = values[index], l = keys.length;
			keys[index] = keys[l-1];
			keys.pop();
			values[index] = values[l-1];
			values.pop();
			return value;
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.Dictionary)})},
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09<\x0a\x09\x09var index = self._positionOfKey_(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09return aBlock._value()\x0a\x09\x09} else {\x0a\x09\x09\x09var keys = self['@keys'], values = self['@values'];\x0a\x09\x09\x09var value = values[index], l = keys.length;\x0a\x09\x09\x09keys[index] = keys[l-1];\x0a\x09\x09\x09keys.pop();\x0a\x09\x09\x09values[index] = values[l-1];\x0a\x09\x09\x09values.pop();\x0a\x09\x09\x09return value;\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{},smalltalk.Dictionary)})},
args: [],
source: "values\x0a\x09^values copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "valuesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},smalltalk.Dictionary)})},
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09^values do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Dictionary);



smalltalk.addClass('SequenceableCollection', smalltalk.IndexableCollection, [], 'Kernel-Collections');
smalltalk.SequenceableCollection.comment="I am an IndexableCollection\x0awith numeric indexes starting with 1.";
smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
$1=_st(_st(self._class()).__eq(_st(aCollection)._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._size()).__eq(_st(aCollection)._size());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
return false;
};
self._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(aCollection)._at_(i)).__eq(each);
if(! smalltalk.assert($2)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"=",{aCollection:aCollection},smalltalk.SequenceableCollection)})},
args: ["aCollection"],
source: "= aCollection\x0a\x09(self class = aCollection class and: [\x0a\x09\x09self size = aCollection size]) ifFalse: [^false].\x0a\x09self withIndexDo: [:each :i |\x0a\x09\x09\x09\x09(aCollection at: i) = each ifFalse: [^false]].\x0a\x09^true",
messageSends: ["ifFalse:", "and:", "=", "size", "class", "withIndexDo:", "at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "addLast:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._add_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"addLast:",{anObject:anObject},smalltalk.SequenceableCollection)})},
args: ["anObject"],
source: "addLast: anObject\x0a\x09self add: anObject",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "allButFirst",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copyFrom_to_((2),self._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"allButFirst",{},smalltalk.SequenceableCollection)})},
args: [],
source: "allButFirst\x0a\x09^self copyFrom: 2 to: self size",
messageSends: ["copyFrom:to:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "allButLast",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copyFrom_to_((1),_st(self._size()).__minus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"allButLast",{},smalltalk.SequenceableCollection)})},
args: [],
source: "allButLast\x0a\x09^self copyFrom: 1 to: self size - 1",
messageSends: ["copyFrom:to:", "-", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "atRandom",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_(_st(self._size())._atRandom());
return $1;
}, function($ctx1) {$ctx1.fill(self,"atRandom",{},smalltalk.SequenceableCollection)})},
args: [],
source: "atRandom\x0a\x09^ self at: self size atRandom",
messageSends: ["at:", "atRandom", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
var range,newCollection;
return smalltalk.withContext(function($ctx1) { 
var $1;
range=_st(anIndex)._to_(anotherIndex);
newCollection=_st(self._class())._new_(_st(range)._size());
_st(range)._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._at_put_(i,self._at_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex,range:range,newCollection:newCollection},smalltalk.SequenceableCollection)})},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09| range newCollection |\x0a\x09range := anIndex to: anotherIndex.\x0a\x09newCollection := self class new: range size.\x0a\x09range withIndexDo: [:each :i |\x0a\x09\x09newCollection at: i put: (self at: each)].\x0a\x09^newCollection",
messageSends: ["to:", "new:", "size", "class", "withIndexDo:", "at:put:", "at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
var $1;
newCollection=_st(self._class())._new_(self._size());
self._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._at_put_(index,_st(each)._deepCopy());
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{newCollection:newCollection},smalltalk.SequenceableCollection)})},
args: [],
source: "deepCopy\x0a\x09| newCollection |\x0a\x09newCollection := self class new: self size.\x0a\x09self withIndexDo: [:each :index |\x0a\x09\x09newCollection at: index put: each deepCopy].\x0a\x09^newCollection",
messageSends: ["new:", "size", "class", "withIndexDo:", "at:put:", "deepCopy"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i = 0; i < self.length; i++)
			if(aBlock._value_(self[i]))
				return self[i];
		return anotherBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.SequenceableCollection)})},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09<\x0a\x09\x09for(var i = 0; i < self.length; i++)\x0a\x09\x09\x09if(aBlock._value_(self[i]))\x0a\x09\x09\x09\x09return self[i];\x0a\x09\x09return anotherBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock._value_(self[i]);};
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.SequenceableCollection)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock._value_(self[i]);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:displayingProgress:",
category: 'enumerating',
fn: function (aBlock,aString){
var self=this;
function $ProgressHandler(){return smalltalk.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ProgressHandler())._current())._do_on_displaying_(aBlock,self,aString);
return self}, function($ctx1) {$ctx1.fill(self,"do:displayingProgress:",{aBlock:aBlock,aString:aString},smalltalk.SequenceableCollection)})},
args: ["aBlock", "aString"],
source: "do: aBlock displayingProgress: aString\x0a\x09ProgressHandler current\x0a\x09\x09do: aBlock on: self displaying: aString",
messageSends: ["do:on:displaying:", "current"],
referencedClasses: ["ProgressHandler"]
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "first",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"first",{},smalltalk.SequenceableCollection)})},
args: [],
source: "first\x0a\x09^self at: 1",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "first:",
category: 'accessing',
fn: function (n){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copyFrom_to_((1),n);
return $1;
}, function($ctx1) {$ctx1.fill(self,"first:",{n:n},smalltalk.SequenceableCollection)})},
args: ["n"],
source: "first: n\x0a\x09\x22Answer the first n elements of the receiver.\x0a\x09Raise an error if there are not enough elements.\x22\x0a\x0a\x09^ self copyFrom: 1 to: n",
messageSends: ["copyFrom:to:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "fourth",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((4));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fourth",{},smalltalk.SequenceableCollection)})},
args: [],
source: "fourth\x0a\x09^self at: 4",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._indexOf_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},smalltalk.SequenceableCollection)})},
args: ["anObject"],
source: "includes: anObject\x0a\x09^(self indexOf: anObject ifAbsent: [nil]) notNil",
messageSends: ["notNil", "indexOf:ifAbsent:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
category: 'accessing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i=0;i<self.length;i++) {
			if(self[i].__eq(anObject)) {return i+1}
		};
		return aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.SequenceableCollection)})},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09<\x0a\x09\x09for(var i=0;i<self.length;i++) {\x0a\x09\x09\x09if(self[i].__eq(anObject)) {return i+1}\x0a\x09\x09};\x0a\x09\x09return aBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:startingAt:",
category: 'accessing',
fn: function (anObject,start){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._indexOf_startingAt_ifAbsent_(anObject,start,(function(){
return smalltalk.withContext(function($ctx2) {
return (0);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:",{anObject:anObject,start:start},smalltalk.SequenceableCollection)})},
args: ["anObject", "start"],
source: "indexOf: anObject startingAt: start\x0a\x09\x22Answer the index of the first occurence of anElement after start\x0a\x09within the receiver. If the receiver does not contain anElement,\x0a\x09answer 0.\x22\x0a\x09^self indexOf: anObject startingAt: start ifAbsent: [0]",
messageSends: ["indexOf:startingAt:ifAbsent:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:startingAt:ifAbsent:",
category: 'accessing',
fn: function (anObject,start,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:ifAbsent:",{anObject:anObject,start:start,aBlock:aBlock},smalltalk.SequenceableCollection)})},
args: ["anObject", "start", "aBlock"],
source: "indexOf: anObject startingAt: start ifAbsent: aBlock\x0a\x09<\x0a\x09\x09for(var i=start-1;i<self.length;i++){\x0a\x09\x09\x09if(self[i].__eq(anObject)) {return i+1}\x0a\x09\x09}\x0a\x09\x09return aBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "last",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_(self._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"last",{},smalltalk.SequenceableCollection)})},
args: [],
source: "last\x0a\x09^self at: self size",
messageSends: ["at:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "newStream",
category: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._streamClass())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newStream",{},smalltalk.SequenceableCollection)})},
args: [],
source: "newStream\x0a\x09^self streamClass on: self",
messageSends: ["on:", "streamClass"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "readStream",
category: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"readStream",{},smalltalk.SequenceableCollection)})},
args: [],
source: "readStream\x0a\x09\x22For Pharo compatibility\x22\x0a\x09\x0a\x09^self stream",
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeLast",
category: 'adding/removing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._remove_(self._last());
return self}, function($ctx1) {$ctx1.fill(self,"removeLast",{},smalltalk.SequenceableCollection)})},
args: [],
source: "removeLast\x0a\x09self remove: self last",
messageSends: ["remove:", "last"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},smalltalk.SequenceableCollection)})},
args: [],
source: "reversed\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "second",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"second",{},smalltalk.SequenceableCollection)})},
args: [],
source: "second\x0a\x09^self at: 2",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
var $1;
newCollection=_st(self._class())._new_(self._size());
self._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._at_put_(index,each);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{newCollection:newCollection},smalltalk.SequenceableCollection)})},
args: [],
source: "shallowCopy\x0a\x09| newCollection |\x0a\x09newCollection := self class new: self size.\x0a\x09self withIndexDo: [ :each :index |\x0a\x09\x09newCollection at: index put: each].\x0a\x09^newCollection",
messageSends: ["new:", "size", "class", "withIndexDo:", "at:put:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "stream",
category: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newStream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"stream",{},smalltalk.SequenceableCollection)})},
args: [],
source: "stream\x0a\x09^self newStream",
messageSends: ["newStream"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
category: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._streamClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},smalltalk.SequenceableCollection)})},
args: [],
source: "streamClass\x0a\x09^self class streamClass",
messageSends: ["streamClass", "class"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "third",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"third",{},smalltalk.SequenceableCollection)})},
args: [],
source: "third\x0a\x09^self at: 3",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
category: 'enumerating',
fn: function (anotherCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock._value_value_(self[i], anotherCollection[i]);};
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock},smalltalk.SequenceableCollection)})},
args: ["anotherCollection", "aBlock"],
source: "with: anotherCollection do: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock._value_value_(self[i], anotherCollection[i]);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock._value_value_(self[i], i+1);};
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.SequenceableCollection)})},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock._value_value_(self[i], i+1);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "writeStream",
category: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"writeStream",{},smalltalk.SequenceableCollection)})},
args: [],
source: "writeStream\x0a\x09\x22For Pharo compatibility\x22\x0a\x09\x0a\x09^self stream",
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);


smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
category: 'accessing',
fn: function (){
var self=this;
function $Stream(){return smalltalk.Stream||(typeof Stream=="undefined"?nil:Stream)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},smalltalk.SequenceableCollection.klass)})},
args: [],
source: "streamClass\x0a\x09\x09^Stream",
messageSends: [],
referencedClasses: ["Stream"]
}),
smalltalk.SequenceableCollection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamContents:",
category: 'streaming',
fn: function (aBlock){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
var $1;
stream=_st(self._streamClass())._on_(self._new());
_st(aBlock)._value_(stream);
$1=_st(stream)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamContents:",{aBlock:aBlock,stream:stream},smalltalk.SequenceableCollection.klass)})},
args: ["aBlock"],
source: "streamContents: aBlock\x0a\x09| stream |\x0a\x09stream := (self streamClass on: self new).\x0a\x09aBlock value: stream.\x0a\x09^ stream contents",
messageSends: ["on:", "new", "streamClass", "value:", "contents"],
referencedClasses: []
}),
smalltalk.SequenceableCollection.klass);


smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.Array.comment="I represent a collection of objects ordered by the collector. The size of arrays is dynamic.\x0a\x0aI am directly mapped to JavaScript Number.\x0a\x0a*Note* In Amber, `OrderedCollection` is an alias for `Array`.";
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.push(anObject); return anObject;;
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.Array)})},
args: ["anObject"],
source: "add: anObject\x0a\x09<self.push(anObject); return anObject;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("[".__comma(_st(self._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._asJavascript();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._join_(", "))).__comma("]");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Array)})},
args: [],
source: "asJavascript\x0a\x09^'[', ((self collect: [:each | each asJavascript]) join: ', '), ']'",
messageSends: [",", "join:", "collect:", "asJavascript"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if((anIndex < 1) || (self.length < anIndex)) {return aBlock._value()};
		return self[anIndex - 1];
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.Array)})},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<\x0a\x09\x09if((anIndex < 1) || (self.length < anIndex)) {return aBlock._value()};\x0a\x09\x09return self[anIndex - 1];\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return anIndex < 1 || self.length < anIndex ? anotherBlock._value() : aBlock._value_(self[anIndex - 1]);;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Array)})},
args: ["anIndex", "aBlock", "anotherBlock"],
source: "at: anIndex ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09<return anIndex < 1 || self.length < anIndex ? anotherBlock._value() : aBlock._value_(self[anIndex - 1]);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[anIndex - 1] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},smalltalk.Array)})},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09<return self[anIndex - 1] = anObject>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "join:",
category: 'enumerating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.join(aString);
return self}, function($ctx1) {$ctx1.fill(self,"join:",{aString:aString},smalltalk.Array)})},
args: ["aString"],
source: "join: aString\x0a\x09<return self.join(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Array.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]);
_st(aStream)._nextPutAll_(" (");
self._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._printOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Array)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self \x0a\x09\x09do: [ :each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i=0;i<self.length;i++) {
			if(_st(self[i]).__eq(anObject)) {
				self.splice(i,1);
				return self;
			}
		};
		aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.Array)})},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09<\x0a\x09\x09for(var i=0;i<self.length;i++) {\x0a\x09\x09\x09if(_st(self[i]).__eq(anObject)) {\x0a\x09\x09\x09\x09self.splice(i,1);\x0a\x09\x09\x09\x09return self;\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x09\x09aBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFrom:to:",
category: 'adding/removing',
fn: function (aNumber,anotherNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.splice(aNumber -1, anotherNumber - aNumber + 1);
return self}, function($ctx1) {$ctx1.fill(self,"removeFrom:to:",{aNumber:aNumber,anotherNumber:anotherNumber},smalltalk.Array)})},
args: ["aNumber", "anotherNumber"],
source: "removeFrom: aNumber to: anotherNumber\x0a\x09<self.splice(aNumber -1, anotherNumber - aNumber + 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeIndex:",
category: 'adding/removing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.splice(anInteger - 1, 1);
return self}, function($ctx1) {$ctx1.fill(self,"removeIndex:",{anInteger:anInteger},smalltalk.Array)})},
args: ["anInteger"],
source: "removeIndex: anInteger\x0a\x09<self.splice(anInteger - 1, 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self._copy().reverse();
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},smalltalk.Array)})},
args: [],
source: "reversed\x0a\x09<return self._copy().reverse()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Array)})},
args: [],
source: "size\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sort",
category: 'enumerating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicPerform_("sort");
return $1;
}, function($ctx1) {$ctx1.fill(self,"sort",{},smalltalk.Array)})},
args: [],
source: "sort\x0a\x09^self basicPerform: 'sort'",
messageSends: ["basicPerform:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sort:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return self.sort(function(a, b) {
			if(aBlock._value_value_(a,b)) {return -1} else {return 1}
		})
	;
return self}, function($ctx1) {$ctx1.fill(self,"sort:",{aBlock:aBlock},smalltalk.Array)})},
args: ["aBlock"],
source: "sort: aBlock\x0a\x09<\x0a\x09\x09return self.sort(function(a, b) {\x0a\x09\x09\x09if(aBlock._value_value_(a,b)) {return -1} else {return 1}\x0a\x09\x09})\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sorted",
category: 'enumerating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._copy())._sort();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sorted",{},smalltalk.Array)})},
args: [],
source: "sorted\x0a\x09^self copy sort",
messageSends: ["sort", "copy"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sorted:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._copy())._sort_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sorted:",{aBlock:aBlock},smalltalk.Array)})},
args: ["aBlock"],
source: "sorted: aBlock\x0a\x09^self copy sort: aBlock",
messageSends: ["sort:", "copy"],
referencedClasses: []
}),
smalltalk.Array);


smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new Array(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger},smalltalk.Array.klass)})},
args: ["anInteger"],
source: "new: anInteger\x0a\x09<return new Array(anInteger)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new_((1));
_st($2)._at_put_((1),anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},smalltalk.Array.klass)})},
args: ["anObject"],
source: "with: anObject\x0a\x09\x09^(self new: 1)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
category: 'instance creation',
fn: function (anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new_((2));
_st($2)._at_put_((1),anObject);
_st($2)._at_put_((2),anObject2);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:",{anObject:anObject,anObject2:anObject2},smalltalk.Array.klass)})},
args: ["anObject", "anObject2"],
source: "with: anObject with: anObject2\x0a\x09\x09^(self new: 2)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:with:",
category: 'instance creation',
fn: function (anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new_((3));
_st($2)._at_put_((1),anObject);
_st($2)._at_put_((2),anObject2);
_st($2)._at_put_((3),anObject3);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:with:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3},smalltalk.Array.klass)})},
args: ["anObject", "anObject2", "anObject3"],
source: "with: anObject with: anObject2 with: anObject3\x0a\x09\x09^(self new: 3)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09at: 3 put: anObject3;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withAll:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
var instance,index;
return smalltalk.withContext(function($ctx1) { 
var $1;
index=(1);
instance=self._new_(_st(aCollection)._size());
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(instance)._at_put_(index,each);
index=_st(index).__plus((1));
return index;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=instance;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withAll:",{aCollection:aCollection,instance:instance,index:index},smalltalk.Array.klass)})},
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09| instance index |\x0a\x09index := 1.\x0a\x09instance := self new: aCollection size.\x0a\x09aCollection do: [:each |\x0a\x09\x09instance at: index put: each.\x0a\x09\x09index := index + 1].\x0a\x09^instance",
messageSends: ["new:", "size", "do:", "at:put:", "+"],
referencedClasses: []
}),
smalltalk.Array.klass);


smalltalk.addClass('CharacterArray', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.CharacterArray.comment="I am the abstract superclass of string-like collections.";
smalltalk.addMethod(
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asString()).__comma(_st(aString)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,",",{aString:aString},smalltalk.CharacterArray)})},
args: ["aString"],
source: ", aString\x0a\x09^self asString, aString asString",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.CharacterArray)})},
args: ["anObject"],
source: "add: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asLowercase",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._fromString_(_st(self._asString())._asLowercase());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asLowercase",{},smalltalk.CharacterArray)})},
args: [],
source: "asLowercase\x0a\x09^self class fromString: self asString asLowercase",
messageSends: ["fromString:", "asLowercase", "asString", "class"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asString())._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.CharacterArray)})},
args: [],
source: "asNumber\x0a\x09^self asString asNumber",
messageSends: ["asNumber", "asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.CharacterArray)})},
args: [],
source: "asString\x0a\x09^self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asSymbol",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{},smalltalk.CharacterArray)})},
args: [],
source: "asSymbol\x0a\x09^self asString",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asUppercase",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._fromString_(_st(self._asString())._asUppercase());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asUppercase",{},smalltalk.CharacterArray)})},
args: [],
source: "asUppercase\x0a\x09^self class fromString: self asString asUppercase",
messageSends: ["fromString:", "asUppercase", "asString", "class"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},smalltalk.CharacterArray)})},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "errorReadOnly",
category: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Object is read-only");
return self}, function($ctx1) {$ctx1.fill(self,"errorReadOnly",{},smalltalk.CharacterArray)})},
args: [],
source: "errorReadOnly\x0a\x09self error: 'Object is read-only'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asString())._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CharacterArray)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09self asString printOn: aStream",
messageSends: ["printOn:", "asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "putOn:",
category: 'streaming',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutString_(self);
return self}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},smalltalk.CharacterArray)})},
args: ["aStream"],
source: "putOn: aStream\x0a\x09aStream nextPutString: self",
messageSends: ["nextPutString:"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},smalltalk.CharacterArray)})},
args: ["anObject"],
source: "remove: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.CharacterArray);


smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.CharacterArray.klass)})},
args: ["aString"],
source: "fromString: aString\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CharacterArray.klass);


smalltalk.addClass('String', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.String.comment="I am an indexed collection of Characters. Unlike most Smalltalk dialects, Amber doesn't provide the Character class. Instead, elements of a String are single character strings.\x0a\x0aString inherits many useful methods from its hierarchy, such as\x0a\x09`Collection >> #,`";
smalltalk.addMethod(
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self + aString;
return self}, function($ctx1) {$ctx1.fill(self,",",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: ", aString\x0a\x09<return self + aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) < aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "< aString\x0a\x09<return String(self) < aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) <= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "<= aString\x0a\x09<return String(self) <= aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(typeof aString === 'undefined') { return false }
		if(!aString._isString || ! aString._isString()) {
			return false;
		}
		return String(self) === String(aString)
	;
return self}, function($ctx1) {$ctx1.fill(self,"=",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "= aString\x0a\x09<\x0a\x09\x09if(typeof aString === 'undefined') { return false }\x0a\x09\x09if(!aString._isString || ! aString._isString()) {\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09return String(self) === String(aString)\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "== aString\x0a\x09^self = aString",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) > aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "> aString\x0a\x09<return String(self) >> aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) >= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">=",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: ">= aString\x0a\x09<return String(self) >>= aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.String)})},
args: [],
source: "asJSON\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	;
return self}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.String)})},
args: [],
source: "asJavascript\x0a\x09<\x0a\x09\x09if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self.replace(/[\x5cx00-\x5cx1f\x22\x5c\x5c\x5cx7f-\x5cx9f]/g, function(ch){var c=ch.charCodeAt(0);return \x22\x5c\x5cx\x22+(\x220\x22+c.toString(16)).slice(-2)}) + \x22\x5c\x22\x22;\x0a\x09\x09else\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self + \x22\x5c\x22\x22;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asLowercase",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toLowerCase();
return self}, function($ctx1) {$ctx1.fill(self,"asLowercase",{},smalltalk.String)})},
args: [],
source: "asLowercase\x0a\x09<return self.toLowerCase()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Number(self);
return self}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.String)})},
args: [],
source: "asNumber\x0a\x09<return Number(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asRegexp",
category: 'converting',
fn: function (){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RegularExpression())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asRegexp",{},smalltalk.String)})},
args: [],
source: "asRegexp\x0a\x09^ RegularExpression fromString: self",
messageSends: ["fromString:"],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asSelector",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.selector(self);
return self}, function($ctx1) {$ctx1.fill(self,"asSelector",{},smalltalk.String)})},
args: [],
source: "asSelector\x0a\x09<return smalltalk.selector(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.String)})},
args: [],
source: "asString\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asSymbol",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{},smalltalk.String)})},
args: [],
source: "asSymbol\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asUppercase",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toUpperCase();
return self}, function($ctx1) {$ctx1.fill(self,"asUppercase",{},smalltalk.String)})},
args: [],
source: "asUppercase\x0a\x09<return self.toUpperCase()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asciiValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.charCodeAt(0);;
return self}, function($ctx1) {$ctx1.fill(self,"asciiValue",{},smalltalk.String)})},
args: [],
source: "asciiValue\x0a\x09<return self.charCodeAt(0);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self).charAt(anIndex - 1) || aBlock._value();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.String)})},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<return String(self).charAt(anIndex - 1) || aBlock._value()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var result = String(self).charAt(anIndex - 1);
		return result ? aBlock._value_(result) : anotherBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.String)})},
args: ["anIndex", "aBlock", "anotherBlock"],
source: "at: anIndex ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09<\x0a\x09\x09var result = String(self).charAt(anIndex - 1);\x0a\x09\x09return result ? aBlock._value_(result) : anotherBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "charCodeAt:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.charCodeAt(anInteger - 1) ;
return self}, function($ctx1) {$ctx1.fill(self,"charCodeAt:",{anInteger:anInteger},smalltalk.String)})},
args: ["anInteger"],
source: "charCodeAt: anInteger\x0a\x09< return self.charCodeAt(anInteger - 1) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.substring(anIndex - 1, anotherIndex);
return self}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex},smalltalk.String)})},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09<return self.substring(anIndex - 1, anotherIndex)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "crlfSanitized",
category: 'converting',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._lines())._join_(_st($String())._lf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"crlfSanitized",{},smalltalk.String)})},
args: [],
source: "crlfSanitized\x0a\x09^self lines join: String lf",
messageSends: ["join:", "lf", "lines"],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shallowCopy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.String)})},
args: [],
source: "deepCopy\x0a\x09^self shallowCopy",
messageSends: ["shallowCopy"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock._value_(self.charAt(i));};
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.String)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock._value_(self.charAt(i));}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "escaped",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return escape(self);
return self}, function($ctx1) {$ctx1.fill(self,"escaped",{},smalltalk.String)})},
args: [],
source: "escaped\x0a\x09<return escape(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "includesSubString:",
category: 'testing',
fn: function (subString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.indexOf(subString) != -1 ;
return self}, function($ctx1) {$ctx1.fill(self,"includesSubString:",{subString:subString},smalltalk.String)})},
args: ["subString"],
source: "includesSubString: subString\x0a\x09< return self.indexOf(subString) != -1 >",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.String)})},
args: [],
source: "isImmutable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isString",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isString",{},smalltalk.String)})},
args: [],
source: "isString\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isVowel",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._size()).__eq((1)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return "aeiou"._includes_(self._asLowercase());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isVowel",{},smalltalk.String)})},
args: [],
source: "isVowel\x0a\x09\x22Answer true if the receiver is a one character string containing a voyel\x22\x0a\x09\x0a\x09^ self size = 1 and: [ 'aeiou' includes: self asLowercase ]",
messageSends: ["and:", "includes:", "asLowercase", "=", "size"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "join:",
category: 'split join',
fn: function (aCollection){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(aCollection)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(_st(each)._asString());
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(self);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"join:",{aCollection:aCollection},smalltalk.String)})},
args: ["aCollection"],
source: "join: aCollection\x0a\x09^ String\x0a\x09\x09streamContents: [:stream | aCollection\x0a\x09\x09\x09\x09do: [:each | stream nextPutAll: each asString]\x0a\x09\x09\x09\x09separatedBy: [stream nextPutAll: self]]",
messageSends: ["streamContents:", "do:separatedBy:", "nextPutAll:", "asString"],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lineIndicesDo:",
category: 'split join',
fn: function (aBlock){
var self=this;
var cr,lf,start,sz,nextLF,nextCR;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
var $early={};
try {
start=(1);
sz=self._size();
cr=_st($String())._cr();
nextCR=self._indexOf_startingAt_(cr,(1));
lf=_st($String())._lf();
nextLF=self._indexOf_startingAt_(lf,(1));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(start).__lt_eq(sz);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(nextLF).__eq((0)))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(nextCR).__eq((0));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($1)){
_st(aBlock)._value_value_value_(start,sz,sz);
$2=self;
throw $early=[$2];
};
$3=_st(_st(nextCR).__eq((0)))._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st((0).__lt(nextLF))._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(nextLF).__lt(nextCR);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($3)){
_st(aBlock)._value_value_value_(start,_st(nextLF).__minus((1)),nextLF);
start=(1).__plus(nextLF);
start;
nextLF=self._indexOf_startingAt_(lf,start);
return nextLF;
} else {
$4=_st((1).__plus(nextCR)).__eq(nextLF);
if(smalltalk.assert($4)){
_st(aBlock)._value_value_value_(start,_st(nextCR).__minus((1)),nextLF);
start=(1).__plus(nextLF);
start;
nextCR=self._indexOf_startingAt_(cr,start);
nextCR;
nextLF=self._indexOf_startingAt_(lf,start);
return nextLF;
} else {
_st(aBlock)._value_value_value_(start,_st(nextCR).__minus((1)),nextCR);
start=(1).__plus(nextCR);
start;
nextCR=self._indexOf_startingAt_(cr,start);
return nextCR;
};
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lineIndicesDo:",{aBlock:aBlock,cr:cr,lf:lf,start:start,sz:sz,nextLF:nextLF,nextCR:nextCR},smalltalk.String)})},
args: ["aBlock"],
source: "lineIndicesDo: aBlock\x0a\x09\x22execute aBlock with 3 arguments for each line:\x0a\x09- start index of line\x0a\x09- end index of line without line delimiter\x0a\x09- end index of line including line delimiter(s) CR, LF or CRLF\x22\x0a\x09\x0a\x09| cr lf start sz nextLF nextCR |\x0a\x09start := 1.\x0a\x09sz := self size.\x0a\x09cr := String cr.\x0a\x09nextCR := self indexOf: cr startingAt: 1.\x0a\x09lf := String lf.\x0a\x09nextLF := self indexOf: lf startingAt: 1.\x0a\x09[ start <= sz ] whileTrue: [\x0a\x09\x09(nextLF = 0 and: [ nextCR = 0 ])\x0a\x09\x09\x09ifTrue: [ \x22No more CR, nor LF, the string is over\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: sz value: sz.\x0a\x09\x09\x09\x09\x09^self ].\x0a\x09\x09(nextCR = 0 or: [ 0 < nextLF and: [ nextLF < nextCR ] ])\x0a\x09\x09\x09ifTrue: [ \x22Found a LF\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextLF - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09ifFalse: [ 1 + nextCR = nextLF\x0a\x09\x09\x09\x09ifTrue: [ \x22Found a CR-LF pair\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09\x09ifFalse: [ \x22Found a CR\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextCR.\x0a\x09\x09\x09\x09\x09start := 1 + nextCR.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start ]]]",
messageSends: ["size", "cr", "indexOf:startingAt:", "lf", "whileTrue:", "ifTrue:", "value:value:value:", "and:", "=", "ifTrue:ifFalse:", "-", "+", "or:", "<", "<="],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lineNumber:",
category: 'split join',
fn: function (anIndex){
var self=this;
var lineCount;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
lineCount=(0);
self._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {
lineCount=_st(lineCount).__plus((1));
$1=_st(lineCount).__eq(anIndex);
if(smalltalk.assert($1)){
$2=self._copyFrom_to_(start,endWithoutDelimiters);
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1)})}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lineNumber:",{anIndex:anIndex,lineCount:lineCount},smalltalk.String)})},
args: ["anIndex"],
source: "lineNumber: anIndex\x0a\x09\x22Answer a string containing the characters in the given line number.\x22\x0a\x0a\x09| lineCount |\x0a\x09lineCount := 0.\x0a\x09self lineIndicesDo: [:start :endWithoutDelimiters :end |\x0a\x09\x09(lineCount := lineCount + 1) = anIndex ifTrue: [^self copyFrom: start to: endWithoutDelimiters]].\x0a\x09^nil",
messageSends: ["lineIndicesDo:", "ifTrue:", "copyFrom:to:", "=", "+"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lines",
category: 'split join',
fn: function (){
var self=this;
var lines;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
lines=_st($Array())._new();
self._linesDo_((function(aLine){
return smalltalk.withContext(function($ctx2) {
return _st(lines)._add_(aLine);
}, function($ctx2) {$ctx2.fillBlock({aLine:aLine},$ctx1)})}));
$1=lines;
return $1;
}, function($ctx1) {$ctx1.fill(self,"lines",{lines:lines},smalltalk.String)})},
args: [],
source: "lines\x0a\x09\x22Answer an array of lines composing this receiver without the line ending delimiters.\x22\x0a\x0a\x09| lines |\x0a\x09lines := Array new.\x0a\x09self linesDo: [:aLine | lines add: aLine].\x0a\x09^lines",
messageSends: ["new", "linesDo:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "linesDo:",
category: 'split join',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(self._copyFrom_to_(start,endWithoutDelimiters));
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"linesDo:",{aBlock:aBlock},smalltalk.String)})},
args: ["aBlock"],
source: "linesDo: aBlock\x0a\x09\x22Execute aBlock with each line in this string. The terminating line\x0a\x09delimiters CR, LF or CRLF pairs are not included in what is passed to aBlock\x22\x0a\x0a\x09self lineIndicesDo: [:start :endWithoutDelimiters :end |\x0a\x09\x09aBlock value: (self copyFrom: start to: endWithoutDelimiters)]",
messageSends: ["lineIndicesDo:", "value:", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "match:",
category: 'regular expressions',
fn: function (aRegexp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.search(aRegexp) != -1;
return self}, function($ctx1) {$ctx1.fill(self,"match:",{aRegexp:aRegexp},smalltalk.String)})},
args: ["aRegexp"],
source: "match: aRegexp\x0a\x09<return self.search(aRegexp) != -1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "matchesOf:",
category: 'regular expressions',
fn: function (aRegularExpression){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.match(aRegularExpression);
return self}, function($ctx1) {$ctx1.fill(self,"matchesOf:",{aRegularExpression:aRegularExpression},smalltalk.String)})},
args: ["aRegularExpression"],
source: "matchesOf: aRegularExpression\x0a\x09<return self.match(aRegularExpression)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "printNl",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
console.log(self);
return self}, function($ctx1) {$ctx1.fill(self,"printNl",{},smalltalk.String)})},
args: [],
source: "printNl\x0a\x09<console.log(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("'");
_st($1)._nextPutAll_(self);
$2=_st($1)._nextPutAll_("'");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.String)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: '''';\x0a\x09\x09nextPutAll: self;\x0a\x09\x09nextPutAll: ''''",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "replace:with:",
category: 'regular expressions',
fn: function (aString,anotherString){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._replaceRegexp_with_(_st($RegularExpression())._fromString_flag_(aString,"g"),anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aString:aString,anotherString:anotherString},smalltalk.String)})},
args: ["aString", "anotherString"],
source: "replace: aString with: anotherString\x0a\x09^self replaceRegexp: (RegularExpression fromString: aString flag: 'g') with: anotherString",
messageSends: ["replaceRegexp:with:", "fromString:flag:"],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "replaceRegexp:with:",
category: 'regular expressions',
fn: function (aRegexp,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.replace(aRegexp, aString);
return self}, function($ctx1) {$ctx1.fill(self,"replaceRegexp:with:",{aRegexp:aRegexp,aString:aString},smalltalk.String)})},
args: ["aRegexp", "aString"],
source: "replaceRegexp: aRegexp with: aString\x0a\x09<return self.replace(aRegexp, aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.split("").reverse().join("");
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},smalltalk.String)})},
args: [],
source: "reversed\x0a\x09<return self.split(\x22\x22).reverse().join(\x22\x22)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},smalltalk.String)})},
args: [],
source: "shallowCopy\x0a\x09^self class fromString: self",
messageSends: ["fromString:", "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.String)})},
args: [],
source: "size\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "subStrings:",
category: 'split join',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tokenize_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subStrings:",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "subStrings: aString\x0a\x09^ self tokenize: aString",
messageSends: ["tokenize:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "tokenize:",
category: 'split join',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.split(aString);
return self}, function($ctx1) {$ctx1.fill(self,"tokenize:",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "tokenize: aString\x0a\x09<return self.split(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimBoth",
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._trimBoth_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth",{},smalltalk.String)})},
args: [],
source: "trimBoth\x0a\x09^self trimBoth: '\x5cs'",
messageSends: ["trimBoth:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimBoth:",
category: 'regular expressions',
fn: function (separators){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._trimLeft_(separators))._trimRight_(separators);
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth:",{separators:separators},smalltalk.String)})},
args: ["separators"],
source: "trimBoth: separators\x0a\x0a\x09^(self trimLeft: separators) trimRight: separators",
messageSends: ["trimRight:", "trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimLeft",
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._trimLeft_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft",{},smalltalk.String)})},
args: [],
source: "trimLeft\x0a\x09^self trimLeft: '\x5cs'",
messageSends: ["trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimLeft:",
category: 'regular expressions',
fn: function (separators){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._replaceRegexp_with_(_st($RegularExpression())._fromString_flag_(_st("^[".__comma(separators)).__comma("]+"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft:",{separators:separators},smalltalk.String)})},
args: ["separators"],
source: "trimLeft: separators\x0a\x0a\x09^self replaceRegexp: (RegularExpression fromString: '^[', separators, ']+' flag: 'g') with: ''",
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimRight",
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._trimRight_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight",{},smalltalk.String)})},
args: [],
source: "trimRight\x0a\x09^self trimRight: '\x5cs'",
messageSends: ["trimRight:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimRight:",
category: 'regular expressions',
fn: function (separators){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._replaceRegexp_with_(_st($RegularExpression())._fromString_flag_(_st("[".__comma(separators)).__comma("]+$"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight:",{separators:separators},smalltalk.String)})},
args: ["separators"],
source: "trimRight: separators\x0a\x0a\x09^self replaceRegexp: (RegularExpression fromString: '[', separators, ']+$' flag: 'g') with: ''",
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "unescaped",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return unescape(self);
return self}, function($ctx1) {$ctx1.fill(self,"unescaped",{},smalltalk.String)})},
args: [],
source: "unescaped\x0a\x09<return unescape(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock._value_value_(self.charAt(i), i+1);};
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.String)})},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock._value_value_(self.charAt(i), i+1);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);


smalltalk.addMethod(
smalltalk.method({
selector: "cr",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\r';
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.String.klass)})},
args: [],
source: "cr\x0a\x09<return '\x5cr'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "crlf",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\r\n';
return self}, function($ctx1) {$ctx1.fill(self,"crlf",{},smalltalk.String.klass)})},
args: [],
source: "crlf\x0a\x09<return '\x5cr\x5cn'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromCharCode:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String.fromCharCode(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"fromCharCode:",{anInteger:anInteger},smalltalk.String.klass)})},
args: ["anInteger"],
source: "fromCharCode: anInteger\x0a\x09<return String.fromCharCode(anInteger)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(aString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.String.klass)})},
args: ["aString"],
source: "fromString: aString\x0a\x09\x09<return String(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lf",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\n';
return self}, function($ctx1) {$ctx1.fill(self,"lf",{},smalltalk.String.klass)})},
args: [],
source: "lf\x0a\x09<return '\x5cn'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "random",
category: 'random',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (Math.random()*(22/32)+(10/32)).toString(32).slice(2);;
return self}, function($ctx1) {$ctx1.fill(self,"random",{},smalltalk.String.klass)})},
args: [],
source: "random\x0a\x09\x22Returns random alphanumeric string beginning with letter\x22\x0a\x09<return (Math.random()*(22/32)+(10/32)).toString(32).slice(2);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "randomNotIn:",
category: 'random',
fn: function (aString){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st((function(){
return smalltalk.withContext(function($ctx2) {
result=self._random();
result;
return _st(aString)._includesSubString_(result);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue();
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"randomNotIn:",{aString:aString,result:result},smalltalk.String.klass)})},
args: ["aString"],
source: "randomNotIn: aString\x0a\x09| result |\x0a    [ result := self random. aString includesSubString: result ] whileTrue.\x0a    ^result",
messageSends: ["whileTrue", "random", "includesSubString:"],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ' ';
return self}, function($ctx1) {$ctx1.fill(self,"space",{},smalltalk.String.klass)})},
args: [],
source: "space\x0a\x09<return ' '>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
category: 'accessing',
fn: function (){
var self=this;
function $StringStream(){return smalltalk.StringStream||(typeof StringStream=="undefined"?nil:StringStream)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$StringStream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},smalltalk.String.klass)})},
args: [],
source: "streamClass\x0a\x09\x09^StringStream",
messageSends: [],
referencedClasses: ["StringStream"]
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tab",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\t';
return self}, function($ctx1) {$ctx1.fill(self,"tab",{},smalltalk.String.klass)})},
args: [],
source: "tab\x0a\x09<return '\x5ct'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'instance creation',
fn: function (aUTFCharCode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String.fromCharCode(aUTFCharCode);;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aUTFCharCode:aUTFCharCode},smalltalk.String.klass)})},
args: ["aUTFCharCode"],
source: "value: aUTFCharCode\x0a\x0a\x09<return String.fromCharCode(aUTFCharCode);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);


smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel-Collections');
smalltalk.Set.comment="I represent an unordered set of objects without duplicates.";
smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
var $early={};
try {
$1=_st(self._class()).__eq(_st(aCollection)._class());
if(! smalltalk.assert($1)){
return false;
};
$2=_st(self._size()).__eq(_st(aCollection)._size());
if(! smalltalk.assert($2)){
return false;
};
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$3=_st(aCollection)._includes_(each);
if(! smalltalk.assert($3)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"=",{aCollection:aCollection},smalltalk.Set)})},
args: ["aCollection"],
source: "= aCollection\x0a\x09self class = aCollection class ifFalse: [ ^ false ].\x0a\x09self size = aCollection size ifFalse: [ ^ false ].\x0a\x09self do: [:each | (aCollection includes: each) ifFalse: [ ^ false ] ].\x0a\x09^ true",
messageSends: ["ifFalse:", "=", "class", "size", "do:", "includes:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var found;
		for(var i=0; i < self['@elements'].length; i++) {
			if(_st(anObject).__eq(self['@elements'][i])) {
				found = true;
				break;
			}
		}
		if(!found) {self['@elements'].push(anObject)}
	;
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.Set)})},
args: ["anObject"],
source: "add: anObject\x0a\x09<\x0a\x09\x09var found;\x0a\x09\x09for(var i=0; i < self['@elements'].length; i++) {\x0a\x09\x09\x09if(_st(anObject).__eq(self['@elements'][i])) {\x0a\x09\x09\x09\x09found = true;\x0a\x09\x09\x09\x09break;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09\x09if(!found) {self['@elements'].push(anObject)}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "asArray",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray",{},smalltalk.Set)})},
args: [],
source: "asArray\x0a\x09^elements copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._withAll_(_st(self["@elements"])._collect_(aBlock));
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},smalltalk.Set)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09^self class withAll: (elements collect: aBlock)",
messageSends: ["withAll:", "collect:", "class"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._detect_ifNone_(aBlock,anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Set)})},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09^elements detect: aBlock ifNone: anotherBlock",
messageSends: ["detect:ifNone:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.Set)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09elements do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},smalltalk.Set)})},
args: ["anObject"],
source: "includes: anObject\x0a\x09^elements includes: anObject",
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Set.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Set)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09elements := #()",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Set.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]);
_st(aStream)._nextPutAll_(" (");
self._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._printOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Set)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self \x0a\x09\x09do: [ :each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._remove_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},smalltalk.Set)})},
args: ["anObject"],
source: "remove: anObject\x0a\x09elements remove: anObject",
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._remove_ifAbsent_(anObject,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.Set)})},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09elements remove: anObject ifAbsent: aBlock",
messageSends: ["remove:ifAbsent:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var collection;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
collection=_st(self._class())._new();
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(each);
if(smalltalk.assert($1)){
return _st(collection)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=collection;
return $2;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,collection:collection},smalltalk.Set)})},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| collection |\x0a\x09collection := self class new.\x0a\x09self do: [:each |\x0a\x09\x09(aBlock value: each) ifTrue: [\x0a\x09\x09\x09collection add: each]].\x0a\x09^collection",
messageSends: ["new", "class", "do:", "ifTrue:", "add:", "value:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Set)})},
args: [],
source: "size\x0a\x09^elements size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.Set);



smalltalk.addClass('Queue', smalltalk.Object, ['read', 'readIndex', 'write'], 'Kernel-Collections');
smalltalk.Queue.comment="I am a one-sided queue.\x0a\x0a## Usage\x0a\x0aUse `#nextPut:` to add items to the queue.\x0aUse `#next` or `#nextIfAbsent:` to get (and remove) the next item in the queue.\x0a\x0a## Implementation notes\x0a\x0aA Queue uses two OrderedCollections inside,\x0a`read` is at the front, is not modified and only read using `readIndex`.\x0a`write` is at the back and is appended new items.\x0aWhen `read` is exhausted, `write` is promoted to `read` and new `write` is created.\x0a\x0aAs a consequence, no data moving is done by me, write appending may do data moving\x0awhen growing `write`, but this is left to engine to implement as good as it chooses to.";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Queue.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@read"]=_st($OrderedCollection())._new();
self["@write"]=_st($OrderedCollection())._new();
self["@readIndex"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Queue)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09read := OrderedCollection new.\x0a\x09write := OrderedCollection new.\x0a\x09readIndex := 1",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextIfAbsent_((function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Cannot read from empty Queue.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.Queue)})},
args: [],
source: "next\x0a\x09^self nextIfAbsent: [ self error: 'Cannot read from empty Queue.' ]",
messageSends: ["nextIfAbsent:", "error:"],
referencedClasses: []
}),
smalltalk.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "nextIfAbsent:",
category: 'accessing',
fn: function (aBlock){
var self=this;
var result;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
var $early={};
try {
result=_st(self["@read"])._at_ifAbsent_(self["@readIndex"],(function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@write"])._isEmpty();
if(smalltalk.assert($1)){
$2=_st(self["@readIndex"]).__gt((1));
if(smalltalk.assert($2)){
self["@read"]=[];
self["@read"];
self["@readIndex"]=(1);
self["@readIndex"];
};
$3=_st(aBlock)._value();
throw $early=[$3];
};
self["@read"]=self["@write"];
self["@read"];
self["@readIndex"]=(1);
self["@readIndex"];
self["@write"]=_st($OrderedCollection())._new();
self["@write"];
return _st(self["@read"])._first();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@read"])._at_put_(self["@readIndex"],nil);
self["@readIndex"]=_st(self["@readIndex"]).__plus((1));
$4=result;
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextIfAbsent:",{aBlock:aBlock,result:result},smalltalk.Queue)})},
args: ["aBlock"],
source: "nextIfAbsent: aBlock\x0a\x09| result |\x0a\x09result := read at: readIndex ifAbsent: [\x0a\x09\x09write isEmpty ifTrue: [\x0a\x09\x09\x09readIndex > 1 ifTrue: [ read := #(). readIndex := 1 ].\x0a\x09\x09\x09^aBlock value ].\x0a\x09\x09read := write.\x0a\x09\x09readIndex := 1.\x0a\x09\x09write := OrderedCollection new.\x0a\x09\x09read first ].\x0a\x09read at: readIndex put: nil.\x0a\x09readIndex := readIndex + 1.\x0a\x09^result",
messageSends: ["at:ifAbsent:", "ifTrue:", ">", "value", "isEmpty", "new", "first", "at:put:", "+"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@write"])._add_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},smalltalk.Queue)})},
args: ["anObject"],
source: "nextPut: anObject\x0a\x09write add: anObject",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.Queue);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.RegularExpression.comment="I represent a regular expression object. My instances are JavaScript `RegExp` object.";
smalltalk.addMethod(
smalltalk.method({
selector: "compile:",
category: 'evaluating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.compile(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},smalltalk.RegularExpression)})},
args: ["aString"],
source: "compile: aString\x0a\x09<return self.compile(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
smalltalk.method({
selector: "exec:",
category: 'evaluating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.exec(aString) || nil;
return self}, function($ctx1) {$ctx1.fill(self,"exec:",{aString:aString},smalltalk.RegularExpression)})},
args: ["aString"],
source: "exec: aString\x0a\x09<return self.exec(aString) || nil>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
smalltalk.method({
selector: "test:",
category: 'evaluating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.test(aString);
return self}, function($ctx1) {$ctx1.fill(self,"test:",{aString:aString},smalltalk.RegularExpression)})},
args: ["aString"],
source: "test: aString\x0a\x09<return self.test(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);


smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._fromString_flag_(aString,"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.RegularExpression.klass)})},
args: ["aString"],
source: "fromString: aString\x0a\x09\x09^self fromString: aString flag: ''",
messageSends: ["fromString:flag:"],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:flag:",
category: 'instance creation',
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new RegExp(aString, anotherString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:flag:",{aString:aString,anotherString:anotherString},smalltalk.RegularExpression.klass)})},
args: ["aString", "anotherString"],
source: "fromString: aString flag: anotherString\x0a\x09<return new RegExp(aString, anotherString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
smalltalk.Stream.comment="I represent an accessor for a sequence of objects. This sequence is referred to as my \x22contents\x22.\x0aMy instances are read/write streams to the contents sequence collection.";
smalltalk.addMethod(
smalltalk.method({
selector: "<<",
category: 'writing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._write_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"<<",{anObject:anObject},smalltalk.Stream)})},
args: ["anObject"],
source: "<< anObject\x0a\x09self write: anObject",
messageSends: ["write:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position()).__eq(self._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},smalltalk.Stream)})},
args: [],
source: "atEnd\x0a\x09^self position = self size",
messageSends: ["=", "size", "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "atStart",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atStart",{},smalltalk.Stream)})},
args: [],
source: "atStart\x0a\x09^self position = 0",
messageSends: ["=", "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.Stream)})},
args: [],
source: "close",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@collection"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.Stream)})},
args: [],
source: "collection\x0a\x09^collection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collection())._copyFrom_to_((1),self._streamSize());
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.Stream)})},
args: [],
source: "contents\x0a\x09^self collection\x0a\x09\x09copyFrom: 1\x0a\x09\x09to: self streamSize",
messageSends: ["copyFrom:to:", "streamSize", "collection"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(self._next());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.Stream)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09[self atEnd] whileFalse: [aBlock value: self next]",
messageSends: ["whileFalse:", "value:", "next", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "flush",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"flush",{},smalltalk.Stream)})},
args: [],
source: "flush",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "isEmpty",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._size()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},smalltalk.Stream)})},
args: [],
source: "isEmpty\x0a\x09^self size = 0",
messageSends: ["=", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
category: 'reading',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._atEnd();
if(smalltalk.assert($2)){
$1=nil;
} else {
self._position_(_st(self._position()).__plus((1)));
$1=_st(self["@collection"])._at_(self._position());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.Stream)})},
args: [],
source: "next\x0a\x09^self atEnd\x0a\x09\x09ifTrue: [nil]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self position: self position + 1.\x0a\x09\x09\x09collection at: self position]",
messageSends: ["ifTrue:ifFalse:", "position:", "+", "position", "at:", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
category: 'reading',
fn: function (anInteger){
var self=this;
var tempCollection;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
tempCollection=_st(_st(self._collection())._class())._new();
_st(anInteger)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._atEnd();
if(! smalltalk.assert($1)){
return _st(tempCollection)._add_(self._next());
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=tempCollection;
return $2;
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger,tempCollection:tempCollection},smalltalk.Stream)})},
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09\x09self atEnd ifFalse: [\x0a\x09\x09tempCollection add: self next]].\x0a\x09^tempCollection",
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "add:", "next", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
category: 'writing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_(_st(self._position()).__plus((1)));
_st(self._collection())._at_put_(self._position(),anObject);
self._setStreamSize_(_st(self._streamSize())._max_(self._position()));
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},smalltalk.Stream)})},
args: ["anObject"],
source: "nextPut: anObject\x0a\x09self position: self position + 1.\x0a\x09self collection at: self position put: anObject.\x0a\x09self setStreamSize: (self streamSize max: self position)",
messageSends: ["position:", "+", "position", "at:put:", "collection", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
category: 'writing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._nextPut_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aCollection:aCollection},smalltalk.Stream)})},
args: ["aCollection"],
source: "nextPutAll: aCollection\x0a\x09aCollection do: [:each |\x0a\x09\x09self nextPut: each]",
messageSends: ["do:", "nextPut:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutString:",
category: 'writing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPut_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString},smalltalk.Stream)})},
args: ["aString"],
source: "nextPutString: aString\x0a\x09self nextPut: aString",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "peek",
category: 'reading',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._atEnd();
if(! smalltalk.assert($2)){
$1=_st(self._collection())._at_(_st(self._position()).__plus((1)));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"peek",{},smalltalk.Stream)})},
args: [],
source: "peek\x0a\x09^self atEnd ifFalse: [\x0a\x09\x09self collection at: self position + 1]",
messageSends: ["ifFalse:", "at:", "+", "position", "collection", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@position"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@position"]=(0);
$1=self["@position"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.Stream)})},
args: [],
source: "position\x0a\x09^position ifNil: [position := 0]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{anInteger:anInteger},smalltalk.Stream)})},
args: ["anInteger"],
source: "position: anInteger\x0a\x09position := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_((0));
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.Stream)})},
args: [],
source: "reset\x0a\x09self position: 0",
messageSends: ["position:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "resetContents",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._reset();
self._setStreamSize_((0));
return self}, function($ctx1) {$ctx1.fill(self,"resetContents",{},smalltalk.Stream)})},
args: [],
source: "resetContents\x0a\x09self reset.\x0a\x09self setStreamSize: 0",
messageSends: ["reset", "setStreamSize:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setCollection:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@collection"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"setCollection:",{aCollection:aCollection},smalltalk.Stream)})},
args: ["aCollection"],
source: "setCollection: aCollection\x0a\x09collection := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setStreamSize:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@streamSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"setStreamSize:",{anInteger:anInteger},smalltalk.Stream)})},
args: ["anInteger"],
source: "setStreamSize: anInteger\x0a\x09streamSize := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setToEnd",
category: 'positioning',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_(self._size());
return self}, function($ctx1) {$ctx1.fill(self,"setToEnd",{},smalltalk.Stream)})},
args: [],
source: "setToEnd\x0a\x09self position: self size",
messageSends: ["position:", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._streamSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Stream)})},
args: [],
source: "size\x0a\x09^self streamSize",
messageSends: ["streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "skip:",
category: 'positioning',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_(_st(_st(self._position()).__plus(anInteger))._min_max_(self._size(),(0)));
return self}, function($ctx1) {$ctx1.fill(self,"skip:",{anInteger:anInteger},smalltalk.Stream)})},
args: ["anInteger"],
source: "skip: anInteger\x0a\x09self position: ((self position + anInteger) min: self size max: 0)",
messageSends: ["position:", "min:max:", "size", "+", "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "streamSize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@streamSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamSize",{},smalltalk.Stream)})},
args: [],
source: "streamSize\x0a\x09^streamSize",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "write:",
category: 'writing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObject)._putOn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"write:",{anObject:anObject},smalltalk.Stream)})},
args: ["anObject"],
source: "write: anObject\x0a\x09anObject putOn: self",
messageSends: ["putOn:"],
referencedClasses: []
}),
smalltalk.Stream);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._setCollection_(aCollection);
_st($2)._setStreamSize_(_st(aCollection)._size());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},smalltalk.Stream.klass)})},
args: ["aCollection"],
source: "on: aCollection\x0a\x09\x09^self new\x0a\x09\x09setCollection: aCollection;\x0a\x09\x09setStreamSize: aCollection size;\x0a\x09\x09yourself",
messageSends: ["setCollection:", "new", "setStreamSize:", "size", "yourself"],
referencedClasses: []
}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel-Collections');
smalltalk.StringStream.comment="I am a Stream specific to `String` objects.";
smalltalk.addMethod(
smalltalk.method({
selector: "cr",
category: 'writing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextPutAll_(_st($String())._cr());
return $1;
}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.StringStream)})},
args: [],
source: "cr\x0a\x09^self nextPutAll: String cr",
messageSends: ["nextPutAll:", "cr"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "crlf",
category: 'writing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextPutAll_(_st($String())._crlf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"crlf",{},smalltalk.StringStream)})},
args: [],
source: "crlf\x0a\x09^self nextPutAll: String crlf",
messageSends: ["nextPutAll:", "crlf"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "lf",
category: 'writing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextPutAll_(_st($String())._lf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"lf",{},smalltalk.StringStream)})},
args: [],
source: "lf\x0a\x09^self nextPutAll: String lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
category: 'reading',
fn: function (anInteger){
var self=this;
var tempCollection;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
tempCollection=_st(_st(self._collection())._class())._new();
_st(anInteger)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._atEnd();
if(! smalltalk.assert($1)){
tempCollection=_st(tempCollection).__comma(self._next());
return tempCollection;
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=tempCollection;
return $2;
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger,tempCollection:tempCollection},smalltalk.StringStream)})},
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09\x09self atEnd ifFalse: [\x0a\x09\x09tempCollection := tempCollection, self next]].\x0a\x09^tempCollection",
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", ",", "next", "atEnd"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
category: 'writing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{aString:aString},smalltalk.StringStream)})},
args: ["aString"],
source: "nextPut: aString\x0a\x09self nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
category: 'writing',
fn: function (aString){
var self=this;
var pre,post;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._atEnd();
if(smalltalk.assert($1)){
self._setCollection_(_st(self._collection()).__comma(aString));
} else {
pre=_st(self._collection())._copyFrom_to_((1),self._position());
pre;
post=_st(self._collection())._copyFrom_to_(_st(_st(self._position()).__plus((1))).__plus(_st(aString)._size()),_st(self._collection())._size());
post;
self._setCollection_(_st(_st(pre).__comma(aString)).__comma(post));
};
self._position_(_st(self._position()).__plus(_st(aString)._size()));
self._setStreamSize_(_st(self._streamSize())._max_(self._position()));
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString,pre:pre,post:post},smalltalk.StringStream)})},
args: ["aString"],
source: "nextPutAll: aString\x0a\x09| pre post |\x0a\x09self atEnd ifTrue: [ self setCollection: self collection, aString ] ifFalse: [\x0a\x09\x09pre := self collection copyFrom: 1 to: self position.\x0a\x09\x09post := self collection copyFrom: (self position + 1 + aString size) to: self collection size.\x0a\x09\x09self setCollection: pre, aString, post\x0a\x09].\x0a\x09self position: self position + aString size.\x0a\x09self setStreamSize: (self streamSize max: self position)",
messageSends: ["ifTrue:ifFalse:", "setCollection:", ",", "collection", "copyFrom:to:", "position", "+", "size", "atEnd", "position:", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutString:",
category: 'writing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString},smalltalk.StringStream)})},
args: ["aString"],
source: "nextPutString: aString\x0a\x09self nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
category: 'writing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPut_(" ");
return self}, function($ctx1) {$ctx1.fill(self,"space",{},smalltalk.StringStream)})},
args: [],
source: "space\x0a\x09self nextPut: ' '",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "tab",
category: 'writing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextPutAll_(_st($String())._tab());
return $1;
}, function($ctx1) {$ctx1.fill(self,"tab",{},smalltalk.StringStream)})},
args: [],
source: "tab\x0a\x09^self nextPutAll: String tab",
messageSends: ["nextPutAll:", "tab"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);



