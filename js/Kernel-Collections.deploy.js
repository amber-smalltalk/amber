smalltalk.addPackage('Kernel-Collections');
smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: ["and:", "=", "value", "key", "class"]}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@key"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.Association)})},
messageSends: []}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "key:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@key"]=aKey;
return self}, function($ctx1) {$ctx1.fill(self,"key:",{aKey:aKey},smalltalk.Association)})},
messageSends: []}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._key())._printOn_(aStream);
_st(aStream)._nextPutAll_(" -> ");
_st(self._value())._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Association)})},
messageSends: ["printOn:", "key", "nextPutAll:", "value"]}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.Association)})},
messageSends: []}),
smalltalk.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aValue:aValue},smalltalk.Association)})},
messageSends: []}),
smalltalk.Association);


smalltalk.addMethod(
smalltalk.method({
selector: "key:value:",
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
messageSends: ["key:", "new", "value:", "yourself"]}),
smalltalk.Association.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: ",",
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
messageSends: ["addAll:", "copy", "yourself"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.Collection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
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
messageSends: ["do:", "add:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asArray",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Array())._withAll_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray",{},smalltalk.Collection)})},
messageSends: ["withAll:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
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
messageSends: ["collect:", "asJSON", "asArray"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asOrderedCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asOrderedCollection",{},smalltalk.Collection)})},
messageSends: ["asArray"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asSet",
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Set())._withAll_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSet",{},smalltalk.Collection)})},
messageSends: ["withAll:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
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
messageSends: ["writeStream", "new", "class", "do:", "nextPut:", "value:", "contents"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "contains:",
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
messageSends: ["do:", "ifTrue:", "value:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWith:",
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
messageSends: ["add:", "copy", "yourself"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWithAll:",
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
messageSends: ["addAll:", "copy", "yourself"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWithoutAll:",
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
messageSends: ["reject:", "includes:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:",
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
messageSends: ["detect:ifNone:", "errorNotFound"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Collection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.Collection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:separatedBy:",
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
messageSends: ["do:", "value", "value:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "errorNotFound",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Object is not in the collection");
return self}, function($ctx1) {$ctx1.fill(self,"errorNotFound",{},smalltalk.Collection)})},
messageSends: ["error:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "ifEmpty:",
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
messageSends: ["ifTrue:ifFalse:", "value", "isEmpty"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotEmpty:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._notEmpty();
_st($1)._ifTrue_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"ifNotEmpty:",{aBlock:aBlock},smalltalk.Collection)})},
messageSends: ["ifTrue:", "notEmpty"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
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
messageSends: ["new", "~=", "detect:ifNone:", "="]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "inject:into:",
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
messageSends: ["do:", "value:value:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "intersection:",
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
messageSends: ["asSet", "new", "do:", "ifTrue:", "add:", "and:", "not", "includes:", "withAll:", "asArray", "class"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "isEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._size()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},smalltalk.Collection)})},
messageSends: ["=", "size"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "notEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isEmpty())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"notEmpty",{},smalltalk.Collection)})},
messageSends: ["not", "isEmpty"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "occurrencesOf:",
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
messageSends: ["do:", "ifTrue:", "+", "="]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "putOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._putOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},smalltalk.Collection)})},
messageSends: ["do:", "putOn:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "reject:",
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
messageSends: ["select:", "=", "value:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
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
messageSends: ["remove:ifAbsent:", "errorNotFound"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.Collection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
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
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "nextPut:", "value:", "contents"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Collection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Collection);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "collection";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.Collection.klass)})},
messageSends: []}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger},smalltalk.Collection.klass)})},
messageSends: ["new"]}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
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
messageSends: ["add:", "new", "yourself"]}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
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
messageSends: ["add:", "new", "yourself"]}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:with:",
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
messageSends: ["add:", "new", "yourself"]}),
smalltalk.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withAll:",
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
messageSends: ["addAll:", "new", "yourself"]}),
smalltalk.Collection.klass);


smalltalk.addClass('IndexableCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "at:",
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
messageSends: ["at:ifAbsent:", "errorNotFound"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.IndexableCollection)})},
messageSends: ["subclassReponsibility"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:",
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
messageSends: ["at:ifPresent:ifAbsent:"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.IndexableCollection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},smalltalk.IndexableCollection)})},
messageSends: ["subclassReponsibility"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:",
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
messageSends: ["indexOf:ifAbsent:", "errorNotFound"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.IndexableCollection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
fn: function (anotherCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(each,_st(anotherCollection)._at_(index));
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock},smalltalk.IndexableCollection)})},
messageSends: ["withIndexDo:", "value:value:", "at:"]}),
smalltalk.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.IndexableCollection)})},
messageSends: ["subclassReponsibility"]}),
smalltalk.IndexableCollection);



smalltalk.addClass('HashedCollection', smalltalk.IndexableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: ",",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,",",{aCollection:aCollection},smalltalk.HashedCollection)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: ["ifFalse:", "=", "class", "size", "associations"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (anAssociation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_(_st(anAssociation)._key(),_st(anAssociation)._value());
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anAssociation:anAssociation},smalltalk.HashedCollection)})},
messageSends: ["at:put:", "key", "value"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
fn: function (aHashedCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.HashedCollection.superclass.fn.prototype._addAll_.apply(_st(self), [_st(aHashedCollection)._associations()]);
$1=aHashedCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addAll:",{aHashedCollection:aHashedCollection},smalltalk.HashedCollection)})},
messageSends: ["addAll:", "associations"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asDictionary",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Dictionary())._from_(self._associations());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asDictionary",{},smalltalk.HashedCollection)})},
messageSends: ["from:", "associations"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
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
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "asJSON"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "associations",
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
messageSends: ["associationsDo:", "add:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "associationsDo:",
fn: function (aBlock){
var self=this;
function $Association(){return smalltalk.Association||(typeof Association=="undefined"?nil:Association)}
return smalltalk.withContext(function($ctx1) { 
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(_st($Association())._key_value_(key,value));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"associationsDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["keysAndValuesDo:", "value:", "key:value:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
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
messageSends: ["ifTrue:ifFalse:", "basicAt:", "includesKey:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsentPut:",
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
messageSends: ["at:ifAbsent:", "at:put:", "value"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
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
messageSends: ["ifTrue:ifFalse:", "value:", "at:", "includesKey:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
fn: function (aKey,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_put_(aKey,aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},smalltalk.HashedCollection)})},
messageSends: ["basicAt:put:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
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
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "value:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
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
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "deepCopy"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._values())._detect_ifNone_(aBlock,anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.HashedCollection)})},
messageSends: ["detect:ifNone:", "values"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._valuesDo_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["valuesDo:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._values())._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},smalltalk.HashedCollection)})},
messageSends: ["includes:", "values"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.hasOwnProperty(aKey);
return self}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},smalltalk.HashedCollection)})},
messageSends: []}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
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
messageSends: ["detect:ifNone:", "=", "at:", "keys"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keyAtValue:",
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
messageSends: ["keyAtValue:ifAbsent:", "errorNotFound"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keyAtValue:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._indexOf_ifAbsent_(anObject,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyAtValue:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["indexOf:ifAbsent:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
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
messageSends: []}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._keysDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(each,self._at_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["keysDo:", "value:value:", "at:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._keys())._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["do:", "keys"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
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
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:", "associations"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._removeKey_ifAbsent_(aKey,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["removeKey:ifAbsent:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._remove_(aKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeKey:",{aKey:aKey},smalltalk.HashedCollection)})},
messageSends: ["remove:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:ifAbsent:",
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
messageSends: ["ifFalse:ifTrue:", "value", "basicDelete:", "includesKey:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
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
messageSends: ["new", "class", "keysAndValuesDo:", "ifTrue:", "at:put:", "value:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
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
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._keys())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.HashedCollection)})},
messageSends: ["size", "keys"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
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
messageSends: ["collect:", "at:", "keys"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "valuesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["keysAndValuesDo:", "value:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(value,key);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.HashedCollection)})},
messageSends: ["keysAndValuesDo:", "value:value:"]}),
smalltalk.HashedCollection);


smalltalk.addMethod(
smalltalk.method({
selector: "from:",
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
messageSends: ["new", "do:", "add:"]}),
smalltalk.HashedCollection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPairs:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._from_(aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromPairs:",{aCollection:aCollection},smalltalk.HashedCollection.klass)})},
messageSends: ["from:"]}),
smalltalk.HashedCollection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newFromPairs:",
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
messageSends: ["ifFalse:", "error:", "even", "size", "new", "do:", "at:put:", "at:", "+", "to:by:"]}),
smalltalk.HashedCollection.klass);


smalltalk.addClass('Dictionary', smalltalk.HashedCollection, ['keys', 'values'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "asHashedCollection",
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HashedCollection())._from_(self._associations());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asHashedCollection",{},smalltalk.Dictionary)})},
messageSends: ["from:", "associations"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asHashedCollection())._asJSON();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.Dictionary)})},
messageSends: ["asJSON", "asHashedCollection"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var index = self._positionOfKey_(aKey);
		return index >=0 ? self['@values'][index] : aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},smalltalk.Dictionary)})},
messageSends: []}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
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
messageSends: []}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._positionOfKey_(aKey) >= 0; ;
return self}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},smalltalk.Dictionary)})},
messageSends: []}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
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
messageSends: ["indexOf:ifAbsent:", "ifTrue:ifFalse:", "value", "at:", "="]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Dictionary.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@keys"]=[];
self["@values"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Dictionary)})},
messageSends: ["initialize"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keys",{},smalltalk.Dictionary)})},
messageSends: ["copy"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._with_do_(self["@values"],aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.Dictionary)})},
messageSends: ["with:do:"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},smalltalk.Dictionary)})},
messageSends: ["do:"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOfKey:",
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
messageSends: []}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:ifAbsent:",
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
messageSends: []}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{},smalltalk.Dictionary)})},
messageSends: ["copy"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "valuesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},smalltalk.Dictionary)})},
messageSends: ["do:"]}),
smalltalk.Dictionary);



smalltalk.addClass('SequenceableCollection', smalltalk.IndexableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: ["ifFalse:", "and:", "=", "size", "class", "withIndexDo:", "at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "addLast:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._add_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"addLast:",{anObject:anObject},smalltalk.SequenceableCollection)})},
messageSends: ["add:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "allButFirst",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copyFrom_to_((2),self._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"allButFirst",{},smalltalk.SequenceableCollection)})},
messageSends: ["copyFrom:to:", "size"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "allButLast",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copyFrom_to_((1),_st(self._size()).__minus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"allButLast",{},smalltalk.SequenceableCollection)})},
messageSends: ["copyFrom:to:", "-", "size"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "atRandom",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_(_st(self._size())._atRandom());
return $1;
}, function($ctx1) {$ctx1.fill(self,"atRandom",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:", "atRandom", "size"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
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
messageSends: ["to:", "new:", "size", "class", "withIndexDo:", "at:put:", "at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
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
messageSends: ["new:", "size", "class", "withIndexDo:", "at:put:", "deepCopy"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i = 0; i < self.length; i++)
			if(aBlock._value_(self[i]))
				return self[i];
		return anotherBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.SequenceableCollection)})},
messageSends: []}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock._value_(self[i]);};
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.SequenceableCollection)})},
messageSends: []}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:displayingProgress:",
fn: function (aBlock,aString){
var self=this;
function $ProgressHandler(){return smalltalk.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ProgressHandler())._current())._do_on_displaying_(aBlock,self,aString);
return self}, function($ctx1) {$ctx1.fill(self,"do:displayingProgress:",{aBlock:aBlock,aString:aString},smalltalk.SequenceableCollection)})},
messageSends: ["do:on:displaying:", "current"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "first",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"first",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "first:",
fn: function (n){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copyFrom_to_((1),n);
return $1;
}, function($ctx1) {$ctx1.fill(self,"first:",{n:n},smalltalk.SequenceableCollection)})},
messageSends: ["copyFrom:to:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "fourth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((4));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fourth",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
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
messageSends: ["notNil", "indexOf:ifAbsent:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i=0;i<self.length;i++) {
			if(self[i].__eq(anObject)) {return i+1}
		};
		return aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.SequenceableCollection)})},
messageSends: []}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:startingAt:",
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
messageSends: ["indexOf:startingAt:ifAbsent:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:startingAt:ifAbsent:",
fn: function (anObject,start,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:ifAbsent:",{anObject:anObject,start:start,aBlock:aBlock},smalltalk.SequenceableCollection)})},
messageSends: []}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "last",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_(self._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"last",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:", "size"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "newStream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._streamClass())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newStream",{},smalltalk.SequenceableCollection)})},
messageSends: ["on:", "streamClass"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "readStream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"readStream",{},smalltalk.SequenceableCollection)})},
messageSends: ["stream"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeLast",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._remove_(self._last());
return self}, function($ctx1) {$ctx1.fill(self,"removeLast",{},smalltalk.SequenceableCollection)})},
messageSends: ["remove:", "last"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},smalltalk.SequenceableCollection)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "second",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"second",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
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
messageSends: ["new:", "size", "class", "withIndexDo:", "at:put:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "stream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newStream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"stream",{},smalltalk.SequenceableCollection)})},
messageSends: ["newStream"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._streamClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},smalltalk.SequenceableCollection)})},
messageSends: ["streamClass", "class"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "third",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"third",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
fn: function (anotherCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock._value_value_(self[i], anotherCollection[i]);};
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock},smalltalk.SequenceableCollection)})},
messageSends: []}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock._value_value_(self[i], i+1);};
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.SequenceableCollection)})},
messageSends: []}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "writeStream",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"writeStream",{},smalltalk.SequenceableCollection)})},
messageSends: ["stream"]}),
smalltalk.SequenceableCollection);


smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
function $Stream(){return smalltalk.Stream||(typeof Stream=="undefined"?nil:Stream)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$Stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},smalltalk.SequenceableCollection.klass)})},
messageSends: []}),
smalltalk.SequenceableCollection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamContents:",
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
messageSends: ["on:", "new", "streamClass", "value:", "contents"]}),
smalltalk.SequenceableCollection.klass);


smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.push(anObject); return anObject;;
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
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
messageSends: [",", "join:", "collect:", "asJavascript"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if((anIndex < 1) || (self.length < anIndex)) {return aBlock._value()};
		return self[anIndex - 1];
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return anIndex < 1 || self.length < anIndex ? anotherBlock._value() : aBlock._value_(self[anIndex - 1]);;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[anIndex - 1] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "join:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.join(aString);
return self}, function($ctx1) {$ctx1.fill(self,"join:",{aString:aString},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
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
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
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
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFrom:to:",
fn: function (aNumber,anotherNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.splice(aNumber -1, anotherNumber - aNumber + 1);
return self}, function($ctx1) {$ctx1.fill(self,"removeFrom:to:",{aNumber:aNumber,anotherNumber:anotherNumber},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeIndex:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.splice(anInteger - 1, 1);
return self}, function($ctx1) {$ctx1.fill(self,"removeIndex:",{anInteger:anInteger},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self._copy().reverse();
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sort",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicPerform_("sort");
return $1;
}, function($ctx1) {$ctx1.fill(self,"sort",{},smalltalk.Array)})},
messageSends: ["basicPerform:"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sort:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return self.sort(function(a, b) {
			if(aBlock._value_value_(a,b)) {return -1} else {return 1}
		})
	;
return self}, function($ctx1) {$ctx1.fill(self,"sort:",{aBlock:aBlock},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sorted",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._copy())._sort();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sorted",{},smalltalk.Array)})},
messageSends: ["sort", "copy"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sorted:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._copy())._sort_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sorted:",{aBlock:aBlock},smalltalk.Array)})},
messageSends: ["sort:", "copy"]}),
smalltalk.Array);


smalltalk.addMethod(
smalltalk.method({
selector: "new:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new Array(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger},smalltalk.Array.klass)})},
messageSends: []}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
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
messageSends: ["at:put:", "new:", "yourself"]}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
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
messageSends: ["at:put:", "new:", "yourself"]}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:with:",
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
messageSends: ["at:put:", "new:", "yourself"]}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withAll:",
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
messageSends: ["new:", "size", "do:", "at:put:", "+"]}),
smalltalk.Array.klass);


smalltalk.addClass('CharacterArray', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: ",",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asString()).__comma(_st(aString)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,",",{aString:aString},smalltalk.CharacterArray)})},
messageSends: [",", "asString"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},smalltalk.CharacterArray)})},
messageSends: ["errorReadOnly"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asLowercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._fromString_(_st(self._asString())._asLowercase());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asLowercase",{},smalltalk.CharacterArray)})},
messageSends: ["fromString:", "asLowercase", "asString", "class"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asString())._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.CharacterArray)})},
messageSends: ["asNumber", "asString"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.CharacterArray)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{},smalltalk.CharacterArray)})},
messageSends: ["asString"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asUppercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._fromString_(_st(self._asString())._asUppercase());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asUppercase",{},smalltalk.CharacterArray)})},
messageSends: ["fromString:", "asUppercase", "asString", "class"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},smalltalk.CharacterArray)})},
messageSends: ["errorReadOnly"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "errorReadOnly",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Object is read-only");
return self}, function($ctx1) {$ctx1.fill(self,"errorReadOnly",{},smalltalk.CharacterArray)})},
messageSends: ["error:"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asString())._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CharacterArray)})},
messageSends: ["printOn:", "asString"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "putOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutString_(self);
return self}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},smalltalk.CharacterArray)})},
messageSends: ["nextPutString:"]}),
smalltalk.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},smalltalk.CharacterArray)})},
messageSends: ["errorReadOnly"]}),
smalltalk.CharacterArray);


smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.CharacterArray.klass)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CharacterArray.klass);


smalltalk.addClass('String', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: ",",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self + aString;
return self}, function($ctx1) {$ctx1.fill(self,",",{aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "<",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) < aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<",{aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "<=",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) <= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "==",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{aString:aString},smalltalk.String)})},
messageSends: ["="]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: ">",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) > aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">",{aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: ">=",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) >= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">=",{aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	;
return self}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asLowercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toLowerCase();
return self}, function($ctx1) {$ctx1.fill(self,"asLowercase",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Number(self);
return self}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asRegexp",
fn: function (){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RegularExpression())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asRegexp",{},smalltalk.String)})},
messageSends: ["fromString:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.selector(self);
return self}, function($ctx1) {$ctx1.fill(self,"asSelector",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asUppercase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toUpperCase();
return self}, function($ctx1) {$ctx1.fill(self,"asUppercase",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asciiValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.charCodeAt(0);;
return self}, function($ctx1) {$ctx1.fill(self,"asciiValue",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self).charAt(anIndex - 1) || aBlock._value();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var result = String(self).charAt(anIndex - 1);
		return result ? aBlock._value_(result) : anotherBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "charCodeAt:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.charCodeAt(anInteger - 1) ;
return self}, function($ctx1) {$ctx1.fill(self,"charCodeAt:",{anInteger:anInteger},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex,anotherIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.substring(anIndex - 1, anotherIndex);
return self}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "crlfSanitized",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._lines())._join_(_st($String())._lf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"crlfSanitized",{},smalltalk.String)})},
messageSends: ["join:", "lf", "lines"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shallowCopy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.String)})},
messageSends: ["shallowCopy"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock._value_(self.charAt(i));};
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "escaped",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return escape(self);
return self}, function($ctx1) {$ctx1.fill(self,"escaped",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "includesSubString:",
fn: function (subString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.indexOf(subString) != -1 ;
return self}, function($ctx1) {$ctx1.fill(self,"includesSubString:",{subString:subString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isString",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isVowel",
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
messageSends: ["and:", "includes:", "asLowercase", "=", "size"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "join:",
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
messageSends: ["streamContents:", "do:separatedBy:", "nextPutAll:", "asString"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lineIndicesDo:",
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
messageSends: ["size", "cr", "indexOf:startingAt:", "lf", "whileTrue:", "ifTrue:", "value:value:value:", "and:", "=", "ifTrue:ifFalse:", "-", "+", "or:", "<", "<="]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lineNumber:",
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
messageSends: ["lineIndicesDo:", "ifTrue:", "copyFrom:to:", "=", "+"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lines",
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
messageSends: ["new", "linesDo:", "add:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "linesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(self._copyFrom_to_(start,endWithoutDelimiters));
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"linesDo:",{aBlock:aBlock},smalltalk.String)})},
messageSends: ["lineIndicesDo:", "value:", "copyFrom:to:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "match:",
fn: function (aRegexp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.search(aRegexp) != -1;
return self}, function($ctx1) {$ctx1.fill(self,"match:",{aRegexp:aRegexp},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "matchesOf:",
fn: function (aRegularExpression){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.match(aRegularExpression);
return self}, function($ctx1) {$ctx1.fill(self,"matchesOf:",{aRegularExpression:aRegularExpression},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "printNl",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
console.log(self);
return self}, function($ctx1) {$ctx1.fill(self,"printNl",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("'");
_st($1)._nextPutAll_(self);
$2=_st($1)._nextPutAll_("'");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.String)})},
messageSends: ["nextPutAll:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "replace:with:",
fn: function (aString,anotherString){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._replaceRegexp_with_(_st($RegularExpression())._fromString_flag_(aString,"g"),anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aString:aString,anotherString:anotherString},smalltalk.String)})},
messageSends: ["replaceRegexp:with:", "fromString:flag:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "replaceRegexp:with:",
fn: function (aRegexp,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.replace(aRegexp, aString);
return self}, function($ctx1) {$ctx1.fill(self,"replaceRegexp:with:",{aRegexp:aRegexp,aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.split("").reverse().join("");
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},smalltalk.String)})},
messageSends: ["fromString:", "class"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "subStrings:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tokenize_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subStrings:",{aString:aString},smalltalk.String)})},
messageSends: ["tokenize:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "tokenize:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.split(aString);
return self}, function($ctx1) {$ctx1.fill(self,"tokenize:",{aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimBoth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._trimBoth_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth",{},smalltalk.String)})},
messageSends: ["trimBoth:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimBoth:",
fn: function (separators){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._trimLeft_(separators))._trimRight_(separators);
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth:",{separators:separators},smalltalk.String)})},
messageSends: ["trimRight:", "trimLeft:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimLeft",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._trimLeft_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft",{},smalltalk.String)})},
messageSends: ["trimLeft:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimLeft:",
fn: function (separators){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._replaceRegexp_with_(_st($RegularExpression())._fromString_flag_(_st("^[".__comma(separators)).__comma("]+"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft:",{separators:separators},smalltalk.String)})},
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimRight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._trimRight_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight",{},smalltalk.String)})},
messageSends: ["trimRight:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimRight:",
fn: function (separators){
var self=this;
function $RegularExpression(){return smalltalk.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._replaceRegexp_with_(_st($RegularExpression())._fromString_flag_(_st("[".__comma(separators)).__comma("]+$"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight:",{separators:separators},smalltalk.String)})},
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "unescaped",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return unescape(self);
return self}, function($ctx1) {$ctx1.fill(self,"unescaped",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
for(var i=0;i<self.length;i++){aBlock._value_value_(self.charAt(i), i+1);};
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},smalltalk.String)})},
messageSends: []}),
smalltalk.String);


smalltalk.addMethod(
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\r';
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "crlf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\r\n';
return self}, function($ctx1) {$ctx1.fill(self,"crlf",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromCharCode:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String.fromCharCode(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"fromCharCode:",{anInteger:anInteger},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(aString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\n';
return self}, function($ctx1) {$ctx1.fill(self,"lf",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "random",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (Math.random()*(22/32)+(10/32)).toString(32).slice(2);;
return self}, function($ctx1) {$ctx1.fill(self,"random",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "randomNotIn:",
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
messageSends: ["whileTrue", "random", "includesSubString:"]}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ' ';
return self}, function($ctx1) {$ctx1.fill(self,"space",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
function $StringStream(){return smalltalk.StringStream||(typeof StringStream=="undefined"?nil:StringStream)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$StringStream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\t';
return self}, function($ctx1) {$ctx1.fill(self,"tab",{},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
fn: function (aUTFCharCode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String.fromCharCode(aUTFCharCode);;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aUTFCharCode:aUTFCharCode},smalltalk.String.klass)})},
messageSends: []}),
smalltalk.String.klass);


smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: ["ifFalse:", "=", "class", "size", "do:", "includes:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
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
messageSends: []}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "asArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray",{},smalltalk.Set)})},
messageSends: ["copy"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._withAll_(_st(self["@elements"])._collect_(aBlock));
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},smalltalk.Set)})},
messageSends: ["withAll:", "collect:", "class"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._detect_ifNone_(aBlock,anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Set)})},
messageSends: ["detect:ifNone:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.Set)})},
messageSends: ["do:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},smalltalk.Set)})},
messageSends: ["includes:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Set.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Set)})},
messageSends: ["initialize"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
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
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._remove_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},smalltalk.Set)})},
messageSends: ["remove:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._remove_ifAbsent_(anObject,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.Set)})},
messageSends: ["remove:ifAbsent:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
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
messageSends: ["new", "class", "do:", "ifTrue:", "add:", "value:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Set)})},
messageSends: ["size"]}),
smalltalk.Set);



smalltalk.addClass('Queue', smalltalk.Object, ['read', 'readIndex', 'write'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Queue.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@read"]=_st($OrderedCollection())._new();
self["@write"]=_st($OrderedCollection())._new();
self["@readIndex"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Queue)})},
messageSends: ["initialize", "new"]}),
smalltalk.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
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
messageSends: ["nextIfAbsent:", "error:"]}),
smalltalk.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "nextIfAbsent:",
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
messageSends: ["at:ifAbsent:", "ifTrue:", ">", "value", "isEmpty", "new", "first", "at:put:", "+"]}),
smalltalk.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@write"])._add_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},smalltalk.Queue)})},
messageSends: ["add:"]}),
smalltalk.Queue);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "compile:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.compile(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},smalltalk.RegularExpression)})},
messageSends: []}),
smalltalk.RegularExpression);

smalltalk.addMethod(
smalltalk.method({
selector: "exec:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.exec(aString) || nil;
return self}, function($ctx1) {$ctx1.fill(self,"exec:",{aString:aString},smalltalk.RegularExpression)})},
messageSends: []}),
smalltalk.RegularExpression);

smalltalk.addMethod(
smalltalk.method({
selector: "test:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.test(aString);
return self}, function($ctx1) {$ctx1.fill(self,"test:",{aString:aString},smalltalk.RegularExpression)})},
messageSends: []}),
smalltalk.RegularExpression);


smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._fromString_flag_(aString,"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.RegularExpression.klass)})},
messageSends: ["fromString:flag:"]}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:flag:",
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new RegExp(aString, anotherString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:flag:",{aString:aString,anotherString:anotherString},smalltalk.RegularExpression.klass)})},
messageSends: []}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "<<",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._write_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"<<",{anObject:anObject},smalltalk.Stream)})},
messageSends: ["write:"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position()).__eq(self._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},smalltalk.Stream)})},
messageSends: ["=", "size", "position"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "atStart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atStart",{},smalltalk.Stream)})},
messageSends: ["=", "position"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@collection"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collection())._copyFrom_to_((1),self._streamSize());
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.Stream)})},
messageSends: ["copyFrom:to:", "streamSize", "collection"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
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
messageSends: ["whileFalse:", "value:", "next", "atEnd"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "flush",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"flush",{},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "isEmpty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._size()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},smalltalk.Stream)})},
messageSends: ["=", "size"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
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
messageSends: ["ifTrue:ifFalse:", "position:", "+", "position", "at:", "atEnd"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
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
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "add:", "next", "atEnd"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_(_st(self._position()).__plus((1)));
_st(self._collection())._at_put_(self._position(),anObject);
self._setStreamSize_(_st(self._streamSize())._max_(self._position()));
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},smalltalk.Stream)})},
messageSends: ["position:", "+", "position", "at:put:", "collection", "setStreamSize:", "max:", "streamSize"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._nextPut_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aCollection:aCollection},smalltalk.Stream)})},
messageSends: ["do:", "nextPut:"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPut_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString},smalltalk.Stream)})},
messageSends: ["nextPut:"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "peek",
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
messageSends: ["ifFalse:", "at:", "+", "position", "collection", "atEnd"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
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
messageSends: ["ifNil:"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{anInteger:anInteger},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_((0));
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.Stream)})},
messageSends: ["position:"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "resetContents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._reset();
self._setStreamSize_((0));
return self}, function($ctx1) {$ctx1.fill(self,"resetContents",{},smalltalk.Stream)})},
messageSends: ["reset", "setStreamSize:"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setCollection:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@collection"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"setCollection:",{aCollection:aCollection},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setStreamSize:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@streamSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"setStreamSize:",{anInteger:anInteger},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setToEnd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_(self._size());
return self}, function($ctx1) {$ctx1.fill(self,"setToEnd",{},smalltalk.Stream)})},
messageSends: ["position:", "size"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._streamSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Stream)})},
messageSends: ["streamSize"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "skip:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_(_st(_st(self._position()).__plus(anInteger))._min_max_(self._size(),(0)));
return self}, function($ctx1) {$ctx1.fill(self,"skip:",{anInteger:anInteger},smalltalk.Stream)})},
messageSends: ["position:", "min:max:", "size", "+", "position"]}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "streamSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@streamSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamSize",{},smalltalk.Stream)})},
messageSends: []}),
smalltalk.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "write:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObject)._putOn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"write:",{anObject:anObject},smalltalk.Stream)})},
messageSends: ["putOn:"]}),
smalltalk.Stream);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["setCollection:", "new", "setStreamSize:", "size", "yourself"]}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel-Collections');
smalltalk.addMethod(
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextPutAll_(_st($String())._cr());
return $1;
}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.StringStream)})},
messageSends: ["nextPutAll:", "cr"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "crlf",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextPutAll_(_st($String())._crlf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"crlf",{},smalltalk.StringStream)})},
messageSends: ["nextPutAll:", "crlf"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "lf",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextPutAll_(_st($String())._lf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"lf",{},smalltalk.StringStream)})},
messageSends: ["nextPutAll:", "lf"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
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
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", ",", "next", "atEnd"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{aString:aString},smalltalk.StringStream)})},
messageSends: ["nextPutAll:"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
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
messageSends: ["ifTrue:ifFalse:", "setCollection:", ",", "collection", "copyFrom:to:", "position", "+", "size", "atEnd", "position:", "setStreamSize:", "max:", "streamSize"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString},smalltalk.StringStream)})},
messageSends: ["nextPutAll:"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPut_(" ");
return self}, function($ctx1) {$ctx1.fill(self,"space",{},smalltalk.StringStream)})},
messageSends: ["nextPut:"]}),
smalltalk.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "tab",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextPutAll_(_st($String())._tab());
return $1;
}, function($ctx1) {$ctx1.fill(self,"tab",{},smalltalk.StringStream)})},
messageSends: ["nextPutAll:", "tab"]}),
smalltalk.StringStream);



