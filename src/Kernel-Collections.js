define("amber_core/Kernel-Collections", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Kernel-Collections');
smalltalk.packages["Kernel-Collections"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('Association', globals.Object, ['key', 'value'], 'Kernel-Collections');
globals.Association.comment="I represent a pair of associated objects, a key and a value. My instances can serve as entries in a dictionary.\x0a\x0aInstances can be created with the class-side method `#key:value:`";
smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'comparing',
fn: function (anAssociation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$5,$4,$6,$1;
$3=self._class();
$ctx1.sendIdx["class"]=1;
$2=_st($3).__eq(_st(anAssociation)._class());
$ctx1.sendIdx["="]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$5=self._key();
$ctx2.sendIdx["key"]=1;
$4=_st($5).__eq(_st(anAssociation)._key());
$ctx2.sendIdx["="]=2;
return _st($4)._and_((function(){
return smalltalk.withContext(function($ctx3) {
$6=self._value();
$ctx3.sendIdx["value"]=1;
return _st($6).__eq(_st(anAssociation)._value());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["and:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{anAssociation:anAssociation},globals.Association)})},
args: ["anAssociation"],
source: "= anAssociation\x0a\x09^ self class = anAssociation class and: [\x0a\x09\x09self key = anAssociation key and: [\x0a\x09\x09self value = anAssociation value ]]",
messageSends: ["and:", "=", "class", "key", "value"],
referencedClasses: []
}),
globals.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@key"];
return $1;
},
args: [],
source: "key\x0a\x09^ key",
messageSends: [],
referencedClasses: []
}),
globals.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "key:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
self["@key"]=aKey;
return self},
args: ["aKey"],
source: "key: aKey\x0a\x09key := aKey",
messageSends: [],
referencedClasses: []
}),
globals.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._key())._printOn_(aStream);
$ctx1.sendIdx["printOn:"]=1;
_st(aStream)._nextPutAll_(" -> ");
_st(self._value())._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.Association)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09self key printOn: aStream.\x0a\x09aStream nextPutAll: ' -> '.\x0a\x09self value printOn: aStream",
messageSends: ["printOn:", "key", "nextPutAll:", "value"],
referencedClasses: []
}),
globals.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@value"];
return $1;
},
args: [],
source: "value\x0a\x09^ value",
messageSends: [],
referencedClasses: []
}),
globals.Association);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
self["@value"]=aValue;
return self},
args: ["aValue"],
source: "value: aValue\x0a\x09value := aValue",
messageSends: [],
referencedClasses: []
}),
globals.Association);


smalltalk.addMethod(
smalltalk.method({
selector: "key:value:",
protocol: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"key:value:",{aKey:aKey,aValue:aValue},globals.Association.klass)})},
args: ["aKey", "aValue"],
source: "key: aKey value: aValue\x0a\x09\x09^ self new\x0a\x09\x09key: aKey;\x0a\x09\x09value: aValue;\x0a\x09\x09yourself",
messageSends: ["key:", "new", "value:", "yourself"],
referencedClasses: []
}),
globals.Association.klass);


smalltalk.addClass('BucketStore', globals.Object, ['buckets', 'hashBlock'], 'Kernel-Collections');
globals.BucketStore.comment="I am an helper class for hash-based stores.\x0a\x0aI hold buckets which are selected by a hash, specified using `#hashBlock:`.\x0aThe hash can be any object, and\x0ait is used as a JS property (that is, in ES5\x0aits toString() value counts).\x0a\x0a## API\x0aI maintain a list of buckets. Client code can use this API:\x0a - `#bucketOfElement:` (to ask a bucket for element, I can return JS null if n/a)\x0a - `#do:` (to enumerate all elements of all buckets)\x0a - `#removeAll` (to remove all buckets)\x0a\x0aClient code itself should add/remove elements\x0ain a bucket. The `nil` object should not be put into any bucket.\x0a\x0aTypes of buckets are the responsibility of subclasses via `#newBucket`.";
smalltalk.addMethod(
smalltalk.method({
selector: "bucketOfElement:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var hash = self['@hashBlock'](anObject);
		if (!hash) return null;
		var buckets = self['@buckets'],
			bucket = buckets[hash];
		if (!bucket) { bucket = buckets[hash] = self._newBucket(); }
		return bucket;
	;
return self}, function($ctx1) {$ctx1.fill(self,"bucketOfElement:",{anObject:anObject},globals.BucketStore)})},
args: ["anObject"],
source: "bucketOfElement: anObject\x0a\x09<\x0a\x09\x09var hash = self['@hashBlock'](anObject);\x0a\x09\x09if (!hash) return null;\x0a\x09\x09var buckets = self['@buckets'],\x0a\x09\x09\x09bucket = buckets[hash];\x0a\x09\x09if (!bucket) { bucket = buckets[hash] = self._newBucket(); }\x0a\x09\x09return bucket;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.BucketStore);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var buckets = self['@buckets'];
		var keys = Object.keys(buckets);
		for (var i = 0; i < keys.length; ++i) { buckets[keys[i]]._do_(aBlock); }
	;
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},globals.BucketStore)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09<\x0a\x09\x09var buckets = self['@buckets'];\x0a\x09\x09var keys = Object.keys(buckets);\x0a\x09\x09for (var i = 0; i < keys.length; ++i) { buckets[keys[i]]._do_(aBlock); }\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.BucketStore);

smalltalk.addMethod(
smalltalk.method({
selector: "hashBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@hashBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "hashBlock: aBlock\x0a\x09hashBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.BucketStore);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.BucketStore.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._removeAll();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.BucketStore)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self removeAll",
messageSends: ["initialize", "removeAll"],
referencedClasses: []
}),
globals.BucketStore);

smalltalk.addMethod(
smalltalk.method({
selector: "newBucket",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"newBucket",{},globals.BucketStore)})},
args: [],
source: "newBucket\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.BucketStore);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
protocol: 'adding/removing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@buckets'] = Object.create(null);;
return self}, function($ctx1) {$ctx1.fill(self,"removeAll",{},globals.BucketStore)})},
args: [],
source: "removeAll\x0a\x09<self['@buckets'] = Object.create(null);>",
messageSends: [],
referencedClasses: []
}),
globals.BucketStore);


smalltalk.addMethod(
smalltalk.method({
selector: "hashBlock:",
protocol: 'instance creation',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._hashBlock_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"hashBlock:",{aBlock:aBlock},globals.BucketStore.klass)})},
args: ["aBlock"],
source: "hashBlock: aBlock\x0a\x09^ self new\x0a\x09\x09hashBlock: aBlock;\x0a\x09\x09yourself",
messageSends: ["hashBlock:", "new", "yourself"],
referencedClasses: []
}),
globals.BucketStore.klass);


smalltalk.addClass('ArrayBucketStore', globals.BucketStore, [], 'Kernel-Collections');
globals.ArrayBucketStore.comment="I am a concrete `BucketStore` with buckets being instance of `Array`.";
smalltalk.addMethod(
smalltalk.method({
selector: "newBucket",
protocol: 'private',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;
},
args: [],
source: "newBucket\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
globals.ArrayBucketStore);



smalltalk.addClass('Collection', globals.Object, [], 'Kernel-Collections');
globals.Collection.comment="I am the abstract superclass of all classes that represent a group of elements.\x0a\x0aI provide a set of useful methods to the Collection hierarchy such as enumerating and converting methods.";
smalltalk.addMethod(
smalltalk.method({
selector: ",",
protocol: 'copying',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._copy();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,",",{aCollection:aCollection},globals.Collection)})},
args: ["aCollection"],
source: ", aCollection\x0a\x09^ self copy\x0a\x09\x09addAll: aCollection;\x0a\x09\x09yourself",
messageSends: ["addAll:", "copy", "yourself"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},globals.Collection)})},
args: ["anObject"],
source: "add: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
protocol: 'adding/removing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return aCollection;
}, function($ctx1) {$ctx1.fill(self,"addAll:",{aCollection:aCollection},globals.Collection)})},
args: ["aCollection"],
source: "addAll: aCollection\x0a\x09aCollection do: [ :each |\x0a\x09\x09self add: each ].\x0a\x09^ aCollection",
messageSends: ["do:", "add:"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "allSatisfy:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(each);
if(! smalltalk.assert($1)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"allSatisfy:",{aBlock:aBlock},globals.Collection)})},
args: ["aBlock"],
source: "allSatisfy: aBlock\x0a\x09\x22Evaluate aBlock with the elements of the receiver.\x0a\x09If aBlock returns false for any element return false.\x0a\x09Otherwise return true.\x22\x0a\x0a\x09self do: [ :each | (aBlock value: each) ifFalse: [ ^ false ] ].\x0a\x09^ true",
messageSends: ["do:", "ifFalse:", "value:"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "anyOne",
protocol: 'adding/removing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $early={};
try {
self._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Collection is empty");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self._do_((function(each){
throw $early=[each];
}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"anyOne",{},globals.Collection)})},
args: [],
source: "anyOne\x0a\x09\x22Answer a representative sample of the receiver. This method can\x0a\x09be helpful when needing to preinfer the nature of the contents of \x0a\x09semi-homogeneous collections.\x22\x0a\x0a\x09self ifEmpty: [ self error: 'Collection is empty' ].\x0a\x09self do: [ :each | ^ each ]",
messageSends: ["ifEmpty:", "error:", "do:"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "anySatisfy:",
protocol: 'enumerating',
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"anySatisfy:",{aBlock:aBlock},globals.Collection)})},
args: ["aBlock"],
source: "anySatisfy: aBlock\x0a\x09\x22Evaluate aBlock with the elements of the receiver.\x0a\x09If aBlock returns true for any element return true.\x0a\x09Otherwise return false.\x22\x0a\x0a\x09self do: [ :each | (aBlock value: each) ifTrue: [ ^ true ] ].\x0a\x09^ false",
messageSends: ["do:", "ifTrue:", "value:"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asArray",
protocol: 'converting',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Array())._withAll_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray",{},globals.Collection)})},
args: [],
source: "asArray\x0a\x09^ Array withAll: self",
messageSends: ["withAll:"],
referencedClasses: ["Array"]
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asArray())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._asJSON();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},globals.Collection)})},
args: [],
source: "asJSON\x0a\x09^ self asArray collect: [ :each | each asJSON ]",
messageSends: ["collect:", "asArray", "asJSON"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asOrderedCollection",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asOrderedCollection",{},globals.Collection)})},
args: [],
source: "asOrderedCollection\x0a\x09^ self asArray",
messageSends: ["asArray"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asSet",
protocol: 'converting',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Set())._withAll_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSet",{},globals.Collection)})},
args: [],
source: "asSet\x0a\x09^ Set withAll: self",
messageSends: ["withAll:"],
referencedClasses: ["Set"]
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
var $1;
stream=_st(_st(self._class())._new())._writeStream();
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._nextPut_(_st(aBlock)._value_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=_st(stream)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,stream:stream},globals.Collection)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [ :each |\x0a\x09\x09stream nextPut: (aBlock value: each) ].\x0a\x09^ stream contents",
messageSends: ["writeStream", "new", "class", "do:", "nextPut:", "value:", "contents"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "contains:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._deprecatedAPI();
$1=self._anySatisfy_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"contains:",{aBlock:aBlock},globals.Collection)})},
args: ["aBlock"],
source: "contains: aBlock\x0a\x09self deprecatedAPI.\x0a\x0a\x09^ self anySatisfy: aBlock",
messageSends: ["deprecatedAPI", "anySatisfy:"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWith:",
protocol: 'copying',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._copy();
_st($2)._add_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWith:",{anObject:anObject},globals.Collection)})},
args: ["anObject"],
source: "copyWith: anObject\x0a\x09^ self copy add: anObject; yourself",
messageSends: ["add:", "copy", "yourself"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWithAll:",
protocol: 'copying',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._copy();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWithAll:",{aCollection:aCollection},globals.Collection)})},
args: ["aCollection"],
source: "copyWithAll: aCollection\x0a\x09^ self copy addAll: aCollection; yourself",
messageSends: ["addAll:", "copy", "yourself"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWithoutAll:",
protocol: 'copying',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aCollection)._includes_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWithoutAll:",{aCollection:aCollection},globals.Collection)})},
args: ["aCollection"],
source: "copyWithoutAll: aCollection\x0a\x09\x22Answer a copy of the receiver that does not contain any elements\x0a\x09equal to those in aCollection.\x22\x0a\x0a\x09^ self reject: [ :each | aCollection includes: each ]",
messageSends: ["reject:", "includes:"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._detect_ifNone_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
return self._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:",{aBlock:aBlock},globals.Collection)})},
args: ["aBlock"],
source: "detect: aBlock\x0a\x09^ self detect: aBlock ifNone: [ self errorNotFound ]",
messageSends: ["detect:ifNone:", "errorNotFound"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
protocol: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},globals.Collection)})},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},globals.Collection)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:separatedBy:",
protocol: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
var actionBeforeElement;
return smalltalk.withContext(function($ctx1) { 
actionBeforeElement=(function(){
actionBeforeElement=anotherBlock;
return actionBeforeElement;
});
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(actionBeforeElement)._value();
return _st(aBlock)._value_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:separatedBy:",{aBlock:aBlock,anotherBlock:anotherBlock,actionBeforeElement:actionBeforeElement},globals.Collection)})},
args: ["aBlock", "anotherBlock"],
source: "do: aBlock separatedBy: anotherBlock\x0a\x09| actionBeforeElement |\x0a\x09actionBeforeElement := [ actionBeforeElement := anotherBlock ].\x0a\x09self do: [ :each |\x0a\x09\x09actionBeforeElement value.\x0a\x09\x09aBlock value: each ]",
messageSends: ["do:", "value", "value:"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "errorNotFound",
protocol: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Object is not in the collection");
return self}, function($ctx1) {$ctx1.fill(self,"errorNotFound",{},globals.Collection)})},
args: [],
source: "errorNotFound\x0a\x09self error: 'Object is not in the collection'",
messageSends: ["error:"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "ifEmpty:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isEmpty();
$1=_st($2)._ifTrue_ifFalse_(aBlock,(function(){
return self;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifEmpty:",{aBlock:aBlock},globals.Collection)})},
args: ["aBlock"],
source: "ifEmpty: aBlock\x0a\x09\x22Evaluate the given block with the receiver as argument, answering its value if the receiver is empty, otherwise answer the receiver. \x0a\x09Note that the fact that this method returns its argument in case the receiver is not empty allows one to write expressions like the following ones: \x0a\x09\x09self classifyMethodAs:\x0a\x09\x09\x09(myProtocol ifEmpty: ['As yet unclassified'])\x22\x0a\x09^ self isEmpty\x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: [ self ]",
messageSends: ["ifTrue:ifFalse:", "isEmpty"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "ifEmpty:ifNotEmpty:",
protocol: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isEmpty();
$1=_st($2)._ifTrue_ifFalse_(aBlock,anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifEmpty:ifNotEmpty:",{aBlock:aBlock,anotherBlock:anotherBlock},globals.Collection)})},
args: ["aBlock", "anotherBlock"],
source: "ifEmpty: aBlock ifNotEmpty: anotherBlock\x0a\x09^ self isEmpty\x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: anotherBlock",
messageSends: ["ifTrue:ifFalse:", "isEmpty"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotEmpty:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._notEmpty();
$1=_st($2)._ifTrue_ifFalse_(aBlock,(function(){
return self;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotEmpty:",{aBlock:aBlock},globals.Collection)})},
args: ["aBlock"],
source: "ifNotEmpty: aBlock\x0a\x09^ self notEmpty\x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: [ self ]",
messageSends: ["ifTrue:ifFalse:", "notEmpty"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotEmpty:ifEmpty:",
protocol: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._notEmpty();
$1=_st($2)._ifTrue_ifFalse_(aBlock,anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotEmpty:ifEmpty:",{aBlock:aBlock,anotherBlock:anotherBlock},globals.Collection)})},
args: ["aBlock", "anotherBlock"],
source: "ifNotEmpty: aBlock ifEmpty: anotherBlock\x0a\x09^ self notEmpty\x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: anotherBlock",
messageSends: ["ifTrue:ifFalse:", "notEmpty"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
protocol: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._anySatisfy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},globals.Collection)})},
args: ["anObject"],
source: "includes: anObject\x0a\x09^ self anySatisfy: [ :each | each = anObject ]",
messageSends: ["anySatisfy:", "="],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "inject:into:",
protocol: 'enumerating',
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inject:into:",{anObject:anObject,aBlock:aBlock,result:result},globals.Collection)})},
args: ["anObject", "aBlock"],
source: "inject: anObject into: aBlock\x0a\x09| result |\x0a\x09result := anObject.\x0a\x09self do: [ :each |\x0a\x09\x09result := aBlock value: result value: each ].\x0a\x09^ result",
messageSends: ["do:", "value:value:"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "intersection:",
protocol: 'enumerating',
fn: function (aCollection){
var self=this;
var set,outputSet;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
set=self._asSet();
outputSet=_st($Set())._new();
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st(set)._includes_(each);
$ctx2.sendIdx["includes:"]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(outputSet)._includes_(each))._not();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
if(smalltalk.assert($1)){
return _st(outputSet)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$3=_st(self._class())._withAll_(_st(outputSet)._asArray());
return $3;
}, function($ctx1) {$ctx1.fill(self,"intersection:",{aCollection:aCollection,set:set,outputSet:outputSet},globals.Collection)})},
args: ["aCollection"],
source: "intersection: aCollection\x0a\x09\x22Answer the set theoretic intersection of two collections.\x22\x0a\x0a\x09| set outputSet |\x0a\x09\x0a\x09set := self asSet.\x0a\x09outputSet := Set new.\x0a\x09\x0a\x09aCollection do: [ :each |\x0a\x09\x09((set includes: each) and: [ (outputSet includes: each) not ])\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09outputSet add: each ]].\x0a\x09\x09\x0a\x09^ self class withAll: outputSet asArray",
messageSends: ["asSet", "new", "do:", "ifTrue:", "and:", "includes:", "not", "add:", "withAll:", "class", "asArray"],
referencedClasses: ["Set"]
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "isEmpty",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._size()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},globals.Collection)})},
args: [],
source: "isEmpty\x0a\x09^ self size = 0",
messageSends: ["=", "size"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "noneSatisfy:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
self._do_((function(item){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(item);
if(smalltalk.assert($1)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({item:item},$ctx1,1)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"noneSatisfy:",{aBlock:aBlock},globals.Collection)})},
args: ["aBlock"],
source: "noneSatisfy: aBlock\x0a\x09\x22Evaluate aBlock with the elements of the receiver.\x0a\x09If aBlock returns false for all elements return true.\x0a\x09Otherwise return false\x22\x0a\x0a\x09self do: [ :item | (aBlock value: item) ifTrue: [ ^ false ] ].\x0a\x09^ true",
messageSends: ["do:", "ifTrue:", "value:"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "notEmpty",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isEmpty())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"notEmpty",{},globals.Collection)})},
args: [],
source: "notEmpty\x0a\x09^ self isEmpty not",
messageSends: ["not", "isEmpty"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "occurrencesOf:",
protocol: 'accessing',
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$2=tally;
return $2;
}, function($ctx1) {$ctx1.fill(self,"occurrencesOf:",{anObject:anObject,tally:tally},globals.Collection)})},
args: ["anObject"],
source: "occurrencesOf: anObject\x0a\x09\x22Answer how many of the receiver's elements are equal to anObject.\x22\x0a\x0a\x09| tally |\x0a\x09tally := 0.\x0a\x09self do: [ :each | anObject = each ifTrue: [ tally := tally + 1 ]].\x0a\x09^ tally",
messageSends: ["do:", "ifTrue:", "=", "+"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "putOn:",
protocol: 'streaming',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._putOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},globals.Collection)})},
args: ["aStream"],
source: "putOn: aStream\x0a\x09self do: [ :each | each putOn: aStream ]",
messageSends: ["do:", "putOn:"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "reject:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aBlock)._value_(each)).__eq(false);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"reject:",{aBlock:aBlock},globals.Collection)})},
args: ["aBlock"],
source: "reject: aBlock\x0a\x09^ self select: [ :each | (aBlock value: each) = false ]",
messageSends: ["select:", "=", "value:"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._remove_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
return self._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},globals.Collection)})},
args: ["anObject"],
source: "remove: anObject\x0a\x09^ self remove: anObject ifAbsent: [ self errorNotFound ]",
messageSends: ["remove:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
protocol: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},globals.Collection)})},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
protocol: 'adding/removing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"removeAll",{},globals.Collection)})},
args: [],
source: "removeAll\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
protocol: 'enumerating',
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$2=_st(stream)._contents();
return $2;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,stream:stream},globals.Collection)})},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [ :each |\x0a\x09\x09(aBlock value: each) ifTrue: [\x0a\x09\x09stream nextPut: each ] ].\x0a\x09^ stream contents",
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "value:", "nextPut:", "contents"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "select:thenCollect:",
protocol: 'enumerating',
fn: function (selectBlock,collectBlock){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
stream=_st(_st(self._class())._new())._writeStream();
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(selectBlock)._value_(each);
$ctx2.sendIdx["value:"]=1;
if(smalltalk.assert($1)){
return _st(stream)._nextPut_(_st(collectBlock)._value_(each));
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$2=_st(stream)._contents();
return $2;
}, function($ctx1) {$ctx1.fill(self,"select:thenCollect:",{selectBlock:selectBlock,collectBlock:collectBlock,stream:stream},globals.Collection)})},
args: ["selectBlock", "collectBlock"],
source: "select: selectBlock thenCollect: collectBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [ :each |\x0a\x09\x09(selectBlock value: each) ifTrue: [\x0a\x09\x09stream nextPut: (collectBlock value: each) ] ].\x0a\x09^ stream contents",
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "value:", "nextPut:", "contents"],
referencedClasses: []
}),
globals.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"size",{},globals.Collection)})},
args: [],
source: "size\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Collection);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "collection";
},
args: [],
source: "heliosClass\x0a\x09^ 'collection'",
messageSends: [],
referencedClasses: []
}),
globals.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
protocol: 'instance creation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger},globals.Collection.klass)})},
args: ["anInteger"],
source: "new: anInteger\x0a\x09^ self new",
messageSends: ["new"],
referencedClasses: []
}),
globals.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._add_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},globals.Collection.klass)})},
args: ["anObject"],
source: "with: anObject\x0a\x09\x09^ self new\x0a\x09\x09add: anObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
globals.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
protocol: 'instance creation',
fn: function (anObject,anotherObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._add_(anObject);
$ctx1.sendIdx["add:"]=1;
_st($2)._add_(anotherObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:",{anObject:anObject,anotherObject:anotherObject},globals.Collection.klass)})},
args: ["anObject", "anotherObject"],
source: "with: anObject with: anotherObject\x0a\x09\x09^ self new\x0a\x09\x09add: anObject;\x0a\x09\x09add: anotherObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
globals.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:with:",
protocol: 'instance creation',
fn: function (firstObject,secondObject,thirdObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._add_(firstObject);
$ctx1.sendIdx["add:"]=1;
_st($2)._add_(secondObject);
$ctx1.sendIdx["add:"]=2;
_st($2)._add_(thirdObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:with:",{firstObject:firstObject,secondObject:secondObject,thirdObject:thirdObject},globals.Collection.klass)})},
args: ["firstObject", "secondObject", "thirdObject"],
source: "with: firstObject with: secondObject with: thirdObject\x0a\x09\x09^ self new\x0a\x09\x09add: firstObject;\x0a\x09\x09add: secondObject;\x0a\x09\x09add: thirdObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
globals.Collection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withAll:",
protocol: 'instance creation',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withAll:",{aCollection:aCollection},globals.Collection.klass)})},
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09\x09^ self new\x0a\x09\x09addAll: aCollection;\x0a\x09\x09yourself",
messageSends: ["addAll:", "new", "yourself"],
referencedClasses: []
}),
globals.Collection.klass);


smalltalk.addClass('IndexableCollection', globals.Collection, [], 'Kernel-Collections');
globals.IndexableCollection.comment="I am a key-value store collection, that is,\x0aI store values under indexes.\x0a\x0aAs a rule of thumb, if a collection has `#at:` and `#at:put:`,\x0ait is an IndexableCollection.";
smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'accessing',
fn: function (anIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifAbsent_(anIndex,(function(){
return smalltalk.withContext(function($ctx2) {
return self._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{anIndex:anIndex},globals.IndexableCollection)})},
args: ["anIndex"],
source: "at: anIndex\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value stored at anIndex.\x0a\x09Otherwise, raise an error.\x22\x0a\x0a\x09^ self at: anIndex ifAbsent: [ self errorNotFound ]",
messageSends: ["at:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
globals.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
protocol: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},globals.IndexableCollection)})},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value stored at anIndex.\x0a\x09Otherwise, answer the value of aBlock.\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsentPut:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifAbsent_(aKey,(function(){
return smalltalk.withContext(function($ctx2) {
return self._at_put_(aKey,_st(aBlock)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsentPut:",{aKey:aKey,aBlock:aBlock},globals.IndexableCollection)})},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsentPut: aBlock\x0a\x09^ self at: aKey ifAbsent: [\x0a\x09\x09self at: aKey put: aBlock value ]",
messageSends: ["at:ifAbsent:", "at:put:", "value"],
referencedClasses: []
}),
globals.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:",
protocol: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifPresent_ifAbsent_(anIndex,aBlock,(function(){
return nil;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{anIndex:anIndex,aBlock:aBlock},globals.IndexableCollection)})},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifPresent: aBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value of evaluating aBlock with the value stored at anIndex.\x0a\x09Otherwise, answer nil.\x22\x0a\x0a\x09^ self at: anIndex ifPresent: aBlock ifAbsent: [ nil ]",
messageSends: ["at:ifPresent:ifAbsent:"],
referencedClasses: []
}),
globals.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
protocol: 'accessing',
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},globals.IndexableCollection)})},
args: ["anIndex", "aBlock", "anotherBlock"],
source: "at: anIndex ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value of evaluating aBlock with the value stored at anIndex.\x0a\x09Otherwise, answer the value of anotherBlock.\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},globals.IndexableCollection)})},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09\x22Store anObject under the given index in the receiver.\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._indexOf_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
return self._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{anObject:anObject},globals.IndexableCollection)})},
args: ["anObject"],
source: "indexOf: anObject\x0a\x09\x22Lookup index at which anObject is stored in the receiver.\x0a\x09If not present, raise an error.\x22\x0a\x0a\x09^ self indexOf: anObject ifAbsent: [ self errorNotFound ]",
messageSends: ["indexOf:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
globals.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
protocol: 'accessing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},globals.IndexableCollection)})},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09\x22Lookup index at which anObject is stored in the receiver.\x0a\x09If not present, return value of executing aBlock.\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
protocol: 'enumarating',
fn: function (anotherCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(each,_st(anotherCollection)._at_(index));
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock},globals.IndexableCollection)})},
args: ["anotherCollection", "aBlock"],
source: "with: anotherCollection do: aBlock\x0a\x09\x22Calls aBlock with every value from self\x0a\x09and with indetically-indexed value from anotherCollection\x22\x0a\x0a\x09self withIndexDo: [ :each :index |\x0a\x09\x09aBlock value: each value: (anotherCollection at: index) ]",
messageSends: ["withIndexDo:", "value:value:", "at:"],
referencedClasses: []
}),
globals.IndexableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
protocol: 'enumarating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},globals.IndexableCollection)})},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09\x22Calls aBlock with every value from self\x0a\x09and with its index as the second argument\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.IndexableCollection);



smalltalk.addClass('AssociativeCollection', globals.IndexableCollection, [], 'Kernel-Collections');
globals.AssociativeCollection.comment="I am a base class for object-indexed collections (Dictionary et.al.).";
smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'comparing',
fn: function (anAssocitativeCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5;
$2=self._class();
$ctx1.sendIdx["class"]=1;
$1=_st($2).__eq(_st(anAssocitativeCollection)._class());
$ctx1.sendIdx["="]=1;
if(! smalltalk.assert($1)){
return false;
};
$4=self._size();
$ctx1.sendIdx["size"]=1;
$3=_st($4).__eq(_st(anAssocitativeCollection)._size());
$ctx1.sendIdx["="]=2;
if(! smalltalk.assert($3)){
return false;
};
$6=self._associations();
$ctx1.sendIdx["associations"]=1;
$5=_st($6).__eq(_st(anAssocitativeCollection)._associations());
return $5;
}, function($ctx1) {$ctx1.fill(self,"=",{anAssocitativeCollection:anAssocitativeCollection},globals.AssociativeCollection)})},
args: ["anAssocitativeCollection"],
source: "= anAssocitativeCollection\x0a\x09self class = anAssocitativeCollection class ifFalse: [ ^ false ].\x0a\x09self size = anAssocitativeCollection size ifFalse: [ ^ false ].\x0a\x09^ self associations = anAssocitativeCollection associations",
messageSends: ["ifFalse:", "=", "class", "size", "associations"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anAssociation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_(_st(anAssociation)._key(),_st(anAssociation)._value());
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anAssociation:anAssociation},globals.AssociativeCollection)})},
args: ["anAssociation"],
source: "add: anAssociation\x0a\x09self at: anAssociation key put: anAssociation value",
messageSends: ["at:put:", "key", "value"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
protocol: 'adding/removing',
fn: function (anAssociativeCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.AssociativeCollection.superclass.fn.prototype._addAll_.apply(_st(self), [_st(anAssociativeCollection)._associations()]));
$ctx1.supercall = false;
return anAssociativeCollection;
}, function($ctx1) {$ctx1.fill(self,"addAll:",{anAssociativeCollection:anAssociativeCollection},globals.AssociativeCollection)})},
args: ["anAssociativeCollection"],
source: "addAll: anAssociativeCollection\x0a\x09super addAll: anAssociativeCollection associations.\x0a\x09^ anAssociativeCollection",
messageSends: ["addAll:", "associations"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asDictionary",
protocol: 'converting',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Dictionary())._from_(self._associations());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asDictionary",{},globals.AssociativeCollection)})},
args: [],
source: "asDictionary\x0a\x09^ Dictionary from: self associations",
messageSends: ["from:", "associations"],
referencedClasses: ["Dictionary"]
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asHashedCollection",
protocol: 'converting',
fn: function (){
var self=this;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HashedCollection())._from_(self._associations());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asHashedCollection",{},globals.AssociativeCollection)})},
args: [],
source: "asHashedCollection\x0a\x09^ HashedCollection from: self associations",
messageSends: ["from:", "associations"],
referencedClasses: ["HashedCollection"]
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
var hash;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
hash=_st($HashedCollection())._new();
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(hash)._at_put_(key,_st(value)._asJSON());
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)})}));
$1=hash;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{hash:hash},globals.AssociativeCollection)})},
args: [],
source: "asJSON\x0a\x09| hash |\x0a\x09hash := HashedCollection new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09hash at: key put: value asJSON ].\x0a\x09^ hash",
messageSends: ["new", "keysAndValuesDo:", "at:put:", "asJSON"],
referencedClasses: ["HashedCollection"]
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "associations",
protocol: 'accessing',
fn: function (){
var self=this;
var associations;
return smalltalk.withContext(function($ctx1) { 
var $1;
associations=[];
self._associationsDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(associations)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=associations;
return $1;
}, function($ctx1) {$ctx1.fill(self,"associations",{associations:associations},globals.AssociativeCollection)})},
args: [],
source: "associations\x0a\x09| associations |\x0a\x09associations := #().\x0a\x09self associationsDo: [ :each | associations add: each ].\x0a\x09^ associations",
messageSends: ["associationsDo:", "add:"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "associationsDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
function $Association(){return globals.Association||(typeof Association=="undefined"?nil:Association)}
return smalltalk.withContext(function($ctx1) { 
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(_st($Association())._key_value_(key,value));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"associationsDo:",{aBlock:aBlock},globals.AssociativeCollection)})},
args: ["aBlock"],
source: "associationsDo: aBlock\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09aBlock value: (Association key: key value: value) ]",
messageSends: ["keysAndValuesDo:", "value:", "key:value:"],
referencedClasses: ["Association"]
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
protocol: 'accessing',
fn: function (aKey,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._includesKey_(aKey);
if(smalltalk.assert($2)){
$1=_st(aBlock)._value_(self._at_(aKey));
} else {
$1=_st(anotherBlock)._value();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aKey:aKey,aBlock:aBlock,anotherBlock:anotherBlock},globals.AssociativeCollection)})},
args: ["aKey", "aBlock", "anotherBlock"],
source: "at: aKey ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Lookup the given key in the receiver.\x0a\x09If it is present, answer the value of evaluating the oneArgBlock \x0a\x09with the value associated with the key, otherwise answer the value \x0a\x09of absentBlock.\x22\x0a\x09\x0a\x09^ (self includesKey: aKey)\x0a\x09\x09ifTrue: [ aBlock value: (self at: aKey) ]\x0a\x09\x09ifFalse: [ anotherBlock value ]",
messageSends: ["ifTrue:ifFalse:", "includesKey:", "value:", "at:", "value"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict;
return smalltalk.withContext(function($ctx1) { 
var $1;
newDict=_st(self._class())._new();
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(newDict)._at_put_(key,_st(aBlock)._value_(value));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)})}));
$1=newDict;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,newDict:newDict},globals.AssociativeCollection)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09newDict at: key put: (aBlock value: value) ].\x0a\x09^ newDict",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "value:"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;
var copy;
return smalltalk.withContext(function($ctx1) { 
var $1;
copy=_st(self._class())._new();
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(copy)._at_put_(key,_st(value)._deepCopy());
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)})}));
$1=copy;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{copy:copy},globals.AssociativeCollection)})},
args: [],
source: "deepCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09copy at: key put: value deepCopy ].\x0a\x09^ copy",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "deepCopy"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
protocol: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._values())._detect_ifNone_(aBlock,anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},globals.AssociativeCollection)})},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09^ self values detect: aBlock ifNone: anotherBlock",
messageSends: ["detect:ifNone:", "values"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._valuesDo_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},globals.AssociativeCollection)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09self valuesDo: aBlock",
messageSends: ["valuesDo:"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
protocol: 'enumerating',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._values())._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},globals.AssociativeCollection)})},
args: ["anObject"],
source: "includes: anObject\x0a\x09^ self values includes: anObject",
messageSends: ["includes:", "values"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
protocol: 'testing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},globals.AssociativeCollection)})},
args: ["aKey"],
source: "includesKey: aKey\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
protocol: 'accessing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._keys())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._at_(each)).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},globals.AssociativeCollection)})},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09^ self keys \x0a\x09\x09detect: [ :each | (self at: each) = anObject ] \x0a\x09\x09ifNone: aBlock",
messageSends: ["detect:ifNone:", "keys", "=", "at:"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keyAtValue:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._keyAtValue_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
return self._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyAtValue:",{anObject:anObject},globals.AssociativeCollection)})},
args: ["anObject"],
source: "keyAtValue: anObject\x0a\x09^ self keyAtValue: anObject ifAbsent: [ self errorNotFound ]",
messageSends: ["keyAtValue:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keyAtValue:ifAbsent:",
protocol: 'accessing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._indexOf_ifAbsent_(anObject,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyAtValue:ifAbsent:",{anObject:anObject,aBlock:aBlock},globals.AssociativeCollection)})},
args: ["anObject", "aBlock"],
source: "keyAtValue: anObject ifAbsent: aBlock\x0a\x09^ self indexOf: anObject ifAbsent: aBlock",
messageSends: ["indexOf:ifAbsent:"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"keys",{},globals.AssociativeCollection)})},
args: [],
source: "keys\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._keysDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(each,self._at_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},globals.AssociativeCollection)})},
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09self keysDo: [ :each |\x0a\x09\x09aBlock value: each value: (self at: each) ]",
messageSends: ["keysDo:", "value:value:", "at:"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},globals.AssociativeCollection)})},
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.AssociativeCollection.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]));
$ctx1.supercall = false;
$ctx1.sendIdx["printOn:"]=1;
_st(aStream)._nextPutAll_(" (");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(self._associations())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._printOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" , ");
$ctx2.sendIdx["nextPutAll:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.AssociativeCollection)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self associations\x0a\x09\x09do: [ :each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' , ' ].\x0a\x09aStream nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:", "associations"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
protocol: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._removeKey_ifAbsent_(aKey,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{aKey:aKey,aBlock:aBlock},globals.AssociativeCollection)})},
args: ["aKey", "aBlock"],
source: "remove: aKey ifAbsent: aBlock\x0a\x09^ self removeKey: aKey ifAbsent: aBlock",
messageSends: ["removeKey:ifAbsent:"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
protocol: 'adding/removing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._keys())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._removeKey_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeAll",{},globals.AssociativeCollection)})},
args: [],
source: "removeAll\x0a\x09^ self keys do: [ :each | self removeKey: each ]",
messageSends: ["do:", "keys", "removeKey:"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:",
protocol: 'adding/removing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._remove_(aKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeKey:",{aKey:aKey},globals.AssociativeCollection)})},
args: ["aKey"],
source: "removeKey: aKey\x0a\x09^ self remove: aKey",
messageSends: ["remove:"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:ifAbsent:",
protocol: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock},globals.AssociativeCollection)})},
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
protocol: 'enumerating',
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
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)})}));
$2=newDict;
return $2;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,newDict:newDict},globals.AssociativeCollection)})},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09(aBlock value: value) ifTrue: [ newDict at: key put: value ]].\x0a\x09^ newDict",
messageSends: ["new", "class", "keysAndValuesDo:", "ifTrue:", "value:", "at:put:"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
protocol: 'copying',
fn: function (){
var self=this;
var copy;
return smalltalk.withContext(function($ctx1) { 
var $1;
copy=_st(self._class())._new();
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(copy)._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)})}));
$1=copy;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{copy:copy},globals.AssociativeCollection)})},
args: [],
source: "shallowCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09copy at: key put: value ].\x0a\x09^ copy",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._keys())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},globals.AssociativeCollection)})},
args: [],
source: "size\x0a\x09^ self keys size",
messageSends: ["size", "keys"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"values",{},globals.AssociativeCollection)})},
args: [],
source: "values\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "valuesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},globals.AssociativeCollection)})},
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.AssociativeCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(value,key);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},globals.AssociativeCollection)})},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09self keysAndValuesDo: [ :key :value | aBlock value: value value: key ]",
messageSends: ["keysAndValuesDo:", "value:value:"],
referencedClasses: []
}),
globals.AssociativeCollection);


smalltalk.addMethod(
smalltalk.method({
selector: "from:",
protocol: 'instance creation',
fn: function (aCollection){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
var $1;
newCollection=self._new();
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"from:",{aCollection:aCollection,newCollection:newCollection},globals.AssociativeCollection.klass)})},
args: ["aCollection"],
source: "from: aCollection\x0a\x09| newCollection |\x0a\x09newCollection := self new.\x0a\x09aCollection do: [ :each | newCollection add: each ].\x0a\x09^ newCollection",
messageSends: ["new", "do:", "add:"],
referencedClasses: []
}),
globals.AssociativeCollection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPairs:",
protocol: 'instance creation',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._from_(aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromPairs:",{aCollection:aCollection},globals.AssociativeCollection.klass)})},
args: ["aCollection"],
source: "fromPairs: aCollection\x0a\x09\x22This message is poorly named and has been replaced by #from:\x22\x0a\x09^ self from: aCollection",
messageSends: ["from:"],
referencedClasses: []
}),
globals.AssociativeCollection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newFromPairs:",
protocol: 'instance creation',
fn: function (aCollection){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4,$5;
$2=_st(aCollection)._size();
$ctx1.sendIdx["size"]=1;
$1=_st($2)._even();
if(! smalltalk.assert($1)){
self._error_("#newFromPairs only accepts arrays of an even length");
};
newCollection=self._new();
_st((1)._to_by_(_st(aCollection)._size(),(2)))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$3=newCollection;
$4=_st(aCollection)._at_(each);
$ctx2.sendIdx["at:"]=1;
return _st($3)._at_put_($4,_st(aCollection)._at_(_st(each).__plus((1))));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$5=newCollection;
return $5;
}, function($ctx1) {$ctx1.fill(self,"newFromPairs:",{aCollection:aCollection,newCollection:newCollection},globals.AssociativeCollection.klass)})},
args: ["aCollection"],
source: "newFromPairs: aCollection\x0a\x09\x22Accept an array of elements where every two elements form an \x0a\x09association - the odd element being the key, and the even element the value.\x22\x0a\x09\x0a\x09| newCollection |\x0a\x09\x0a\x09aCollection size even ifFalse: [ \x0a\x09\x09self error: '#newFromPairs only accepts arrays of an even length' ].\x0a\x09\x09\x0a\x09newCollection := self new.\x0a\x09( 1 to: aCollection size by: 2 ) do: [ :each | \x0a\x09\x09newCollection at: (aCollection at: each) put: (aCollection at: each + 1) ].\x0a\x09\x09\x0a\x09^ newCollection",
messageSends: ["ifFalse:", "even", "size", "error:", "new", "do:", "to:by:", "at:put:", "at:", "+"],
referencedClasses: []
}),
globals.AssociativeCollection.klass);


smalltalk.addClass('Dictionary', globals.AssociativeCollection, ['keys', 'values'], 'Kernel-Collections');
globals.Dictionary.comment="I represent a set of elements that can be viewed from one of two perspectives: a set of associations,\x0aor a container of values that are externally named where the name can be any object that responds to `=`.\x0a\x0aThe external name is referred to as the key.";
smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var index = self._positionOfKey_(aKey);
		return index >=0 ? self['@values'][index] : aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},globals.Dictionary)})},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09<\x0a\x09\x09var index = self._positionOfKey_(aKey);\x0a\x09\x09return index >>=0 ? self['@values'][index] : aBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
protocol: 'accessing',
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
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},globals.Dictionary)})},
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09<\x0a\x09\x09var index = self._positionOfKey_(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09var keys = self['@keys'];\x0a\x09\x09\x09index = keys.length;\x0a\x09\x09\x09keys.push(aKey);\x0a\x09\x09}\x0a\x0a\x09\x09return self['@values'][index] = aValue;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
protocol: 'testing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self._positionOfKey_(aKey) >= 0; ;
return self}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},globals.Dictionary)})},
args: ["aKey"],
source: "includesKey: aKey\x0a\x09< return self._positionOfKey_(aKey) >>= 0; >",
messageSends: [],
referencedClasses: []
}),
globals.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
protocol: 'accessing',
fn: function (anObject,aBlock){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
index=_st(self["@values"])._indexOf_ifAbsent_(anObject,(function(){
return (0);
}));
$2=_st(index).__eq((0));
if(smalltalk.assert($2)){
$1=_st(aBlock)._value();
} else {
$1=_st(self["@keys"])._at_(index);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock,index:index},globals.Dictionary)})},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09| index |\x0a\x09index := values \x0a\x09\x09indexOf: anObject \x0a\x09\x09ifAbsent: [ 0 ].\x0a\x09^ index = 0 \x0a\x09\x09ifTrue: [ aBlock value ] \x0a\x09\x09ifFalse: [ keys at: index ]",
messageSends: ["indexOf:ifAbsent:", "ifTrue:ifFalse:", "=", "value", "at:"],
referencedClasses: []
}),
globals.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Dictionary.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@keys"]=[];
self["@values"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Dictionary)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09keys := #().\x0a\x09values := #()",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keys",{},globals.Dictionary)})},
args: [],
source: "keys\x0a\x09^ keys copy",
messageSends: ["copy"],
referencedClasses: []
}),
globals.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._with_do_(self["@values"],aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},globals.Dictionary)})},
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09^ keys with: values do: aBlock",
messageSends: ["with:do:"],
referencedClasses: []
}),
globals.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keys"])._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},globals.Dictionary)})},
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09^ keys do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
globals.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOfKey:",
protocol: 'private',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var keys = self['@keys'];
		for(var i=0;i<keys.length;i++){
			if(keys[i].__eq(anObject)) { return i;}
		}
		return -1;
	;
return self}, function($ctx1) {$ctx1.fill(self,"positionOfKey:",{anObject:anObject},globals.Dictionary)})},
args: ["anObject"],
source: "positionOfKey: anObject\x0a\x09<\x0a\x09\x09var keys = self['@keys'];\x0a\x09\x09for(var i=0;i<keys.length;i++){\x0a\x09\x09\x09if(keys[i].__eq(anObject)) { return i;}\x0a\x09\x09}\x0a\x09\x09return -1;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
protocol: 'adding/removing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@keys"])._removeAll();
$ctx1.sendIdx["removeAll"]=1;
_st(self["@values"])._removeAll();
return self}, function($ctx1) {$ctx1.fill(self,"removeAll",{},globals.Dictionary)})},
args: [],
source: "removeAll\x0a\x09keys removeAll.\x0a\x09values removeAll",
messageSends: ["removeAll"],
referencedClasses: []
}),
globals.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:ifAbsent:",
protocol: 'adding/removing',
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
return self}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock},globals.Dictionary)})},
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09<\x0a\x09\x09var index = self._positionOfKey_(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09return aBlock._value()\x0a\x09\x09} else {\x0a\x09\x09\x09var keys = self['@keys'], values = self['@values'];\x0a\x09\x09\x09var value = values[index], l = keys.length;\x0a\x09\x09\x09keys[index] = keys[l-1];\x0a\x09\x09\x09keys.pop();\x0a\x09\x09\x09values[index] = values[l-1];\x0a\x09\x09\x09values.pop();\x0a\x09\x09\x09return value;\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@values"];
return $1;
},
args: [],
source: "values\x0a\x09^ values",
messageSends: [],
referencedClasses: []
}),
globals.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "valuesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@values"])._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},globals.Dictionary)})},
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09^ values do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
globals.Dictionary);



smalltalk.addClass('HashedCollection', globals.AssociativeCollection, [], 'Kernel-Collections');
globals.HashedCollection.comment="I am a traditional JavaScript object, or a Smalltalk `Dictionary`.\x0a\x0aUnlike a `Dictionary`, I can only have strings as keys.";
smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._includesKey_(aKey);
if(smalltalk.assert($2)){
$1=self._basicAt_(aKey);
} else {
$1=_st(aBlock)._value();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},globals.HashedCollection)})},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09^ (self includesKey: aKey)\x0a\x09\x09ifTrue: [ self basicAt: aKey ]\x0a\x09\x09ifFalse: [ aBlock value ]",
messageSends: ["ifTrue:ifFalse:", "includesKey:", "basicAt:", "value"],
referencedClasses: []
}),
globals.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (aKey,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_put_(aKey,aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},globals.HashedCollection)})},
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09^ self basicAt: aKey put: aValue",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
globals.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
protocol: 'testing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.hasOwnProperty(aKey);
return self}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},globals.HashedCollection)})},
args: ["aKey"],
source: "includesKey: aKey\x0a\x09<return self.hasOwnProperty(aKey)>",
messageSends: [],
referencedClasses: []
}),
globals.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Object.keys(self);
return self}, function($ctx1) {$ctx1.fill(self,"keys",{},globals.HashedCollection)})},
args: [],
source: "keys\x0a\x09<return Object.keys(self)>",
messageSends: [],
referencedClasses: []
}),
globals.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._keys())._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},globals.HashedCollection)})},
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09self keys do: aBlock",
messageSends: ["do:", "keys"],
referencedClasses: []
}),
globals.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeKey:ifAbsent:",
protocol: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifPresent_ifAbsent_(aKey,(function(removed){
return smalltalk.withContext(function($ctx2) {
self._basicDelete_(aKey);
return removed;
}, function($ctx2) {$ctx2.fillBlock({removed:removed},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock},globals.HashedCollection)})},
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09^ self\x0a\x09\x09at: aKey\x0a\x09\x09ifPresent: [ :removed | self basicDelete: aKey. removed ]\x0a\x09\x09ifAbsent: [ aBlock value ]",
messageSends: ["at:ifPresent:ifAbsent:", "basicDelete:", "value"],
referencedClasses: []
}),
globals.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return self._keys().map(function(key){
			return self._at_(key);
		});
	;
return self}, function($ctx1) {$ctx1.fill(self,"values",{},globals.HashedCollection)})},
args: [],
source: "values\x0a\x09<\x0a\x09\x09return self._keys().map(function(key){\x0a\x09\x09\x09return self._at_(key);\x0a\x09\x09});\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "valuesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._values())._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},globals.HashedCollection)})},
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09self values do: aBlock",
messageSends: ["do:", "values"],
referencedClasses: []
}),
globals.HashedCollection);



smalltalk.addClass('SequenceableCollection', globals.IndexableCollection, [], 'Kernel-Collections');
globals.SequenceableCollection.comment="I am an IndexableCollection\x0awith numeric indexes starting with 1.";
smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'comparing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$4,$1,$5;
var $early={};
try {
$3=self._class();
$ctx1.sendIdx["class"]=1;
$2=_st($3).__eq(_st(aCollection)._class());
$ctx1.sendIdx["="]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$4=self._size();
$ctx2.sendIdx["size"]=1;
return _st($4).__eq(_st(aCollection)._size());
$ctx2.sendIdx["="]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(! smalltalk.assert($1)){
return false;
};
self._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {
$5=_st(_st(aCollection)._at_(i)).__eq(each);
if(! smalltalk.assert($5)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1,3)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"=",{aCollection:aCollection},globals.SequenceableCollection)})},
args: ["aCollection"],
source: "= aCollection\x0a\x09(self class = aCollection class and: [\x0a\x09\x09self size = aCollection size ]) ifFalse: [ ^ false ].\x0a\x09self withIndexDo: [ :each :i |\x0a\x09\x09\x09\x09(aCollection at: i) = each ifFalse: [ ^ false ]].\x0a\x09^ true",
messageSends: ["ifFalse:", "and:", "=", "class", "size", "withIndexDo:", "at:"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "addLast:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._add_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"addLast:",{anObject:anObject},globals.SequenceableCollection)})},
args: ["anObject"],
source: "addLast: anObject\x0a\x09self add: anObject",
messageSends: ["add:"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "allButFirst",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copyFrom_to_((2),self._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"allButFirst",{},globals.SequenceableCollection)})},
args: [],
source: "allButFirst\x0a\x09^ self copyFrom: 2 to: self size",
messageSends: ["copyFrom:to:", "size"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "allButLast",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copyFrom_to_((1),_st(self._size()).__minus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"allButLast",{},globals.SequenceableCollection)})},
args: [],
source: "allButLast\x0a\x09^ self copyFrom: 1 to: self size - 1",
messageSends: ["copyFrom:to:", "-", "size"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "atRandom",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_(_st(self._size())._atRandom());
return $1;
}, function($ctx1) {$ctx1.fill(self,"atRandom",{},globals.SequenceableCollection)})},
args: [],
source: "atRandom\x0a\x09^ self at: self size atRandom",
messageSends: ["at:", "atRandom", "size"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "beginsWith:",
protocol: 'testing',
fn: function (prefix){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$4;
$2=self._size();
$ctx1.sendIdx["size"]=1;
$3=_st(prefix)._size();
$ctx1.sendIdx["size"]=2;
$1=_st($2).__lt($3);
if(smalltalk.assert($1)){
return false;
};
$4=_st(self._first_(_st(prefix)._size())).__eq(prefix);
return $4;
}, function($ctx1) {$ctx1.fill(self,"beginsWith:",{prefix:prefix},globals.SequenceableCollection)})},
args: ["prefix"],
source: "beginsWith: prefix\x0a\x09self size < prefix size ifTrue: [ ^ false ].\x0a\x09^ (self first: prefix size) = prefix",
messageSends: ["ifTrue:", "<", "size", "=", "first:"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
protocol: 'copying',
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
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1,1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex,range:range,newCollection:newCollection},globals.SequenceableCollection)})},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09| range newCollection |\x0a\x09range := anIndex to: anotherIndex.\x0a\x09newCollection := self class new: range size.\x0a\x09range withIndexDo: [ :each :i |\x0a\x09\x09newCollection at: i put: (self at: each) ].\x0a\x09^ newCollection",
messageSends: ["to:", "new:", "class", "size", "withIndexDo:", "at:put:", "at:"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
var $1;
newCollection=_st(self._class())._new_(self._size());
self._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._at_put_(index,_st(each)._deepCopy());
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{newCollection:newCollection},globals.SequenceableCollection)})},
args: [],
source: "deepCopy\x0a\x09| newCollection |\x0a\x09newCollection := self class new: self size.\x0a\x09self withIndexDo: [ :each :index |\x0a\x09\x09newCollection at: index put: each deepCopy ].\x0a\x09^ newCollection",
messageSends: ["new:", "class", "size", "withIndexDo:", "at:put:", "deepCopy"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
protocol: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		self = self._numericallyIndexable();
		for(var i = 0; i < self.length; i++)
			if(aBlock._value_(self[i]))
				return self[i];
		return anotherBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},globals.SequenceableCollection)})},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09<\x0a\x09\x09self = self._numericallyIndexable();\x0a\x09\x09for(var i = 0; i < self.length; i++)\x0a\x09\x09\x09if(aBlock._value_(self[i]))\x0a\x09\x09\x09\x09return self[i];\x0a\x09\x09return anotherBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		self = self._numericallyIndexable();
		for(var i=0; i < self.length; i++) {
			aBlock._value_(self[i]);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},globals.SequenceableCollection)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09<\x0a\x09\x09self = self._numericallyIndexable();\x0a\x09\x09for(var i=0; i < self.length; i++) {\x0a\x09\x09\x09aBlock._value_(self[i]);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "endsWith:",
protocol: 'testing',
fn: function (suffix){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$4;
$2=self._size();
$ctx1.sendIdx["size"]=1;
$3=_st(suffix)._size();
$ctx1.sendIdx["size"]=2;
$1=_st($2).__lt($3);
if(smalltalk.assert($1)){
return false;
};
$4=_st(self._last_(_st(suffix)._size())).__eq(suffix);
return $4;
}, function($ctx1) {$ctx1.fill(self,"endsWith:",{suffix:suffix},globals.SequenceableCollection)})},
args: ["suffix"],
source: "endsWith: suffix\x0a\x09self size < suffix size ifTrue: [ ^ false ].\x0a\x09^ (self last: suffix size) = suffix",
messageSends: ["ifTrue:", "<", "size", "=", "last:"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "first",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"first",{},globals.SequenceableCollection)})},
args: [],
source: "first\x0a\x09^ self at: 1",
messageSends: ["at:"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "first:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._size()).__lt(aNumber);
if(smalltalk.assert($1)){
self._error_("Invalid number of elements");
};
$2=self._copyFrom_to_((1),aNumber);
return $2;
}, function($ctx1) {$ctx1.fill(self,"first:",{aNumber:aNumber},globals.SequenceableCollection)})},
args: ["aNumber"],
source: "first: aNumber\x0a\x09\x22Answer the first `aNumber` elements of the receiver.\x0a\x09Raise an error if there are not enough elements in the receiver.\x22\x0a\x0a\x09self size < aNumber ifTrue: [ self error: 'Invalid number of elements' ].\x0a\x0a\x09^ self copyFrom: 1 to: aNumber",
messageSends: ["ifTrue:", "<", "size", "error:", "copyFrom:to:"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "fourth",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((4));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fourth",{},globals.SequenceableCollection)})},
args: [],
source: "fourth\x0a\x09^ self at: 4",
messageSends: ["at:"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
protocol: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._indexOf_ifAbsent_(anObject,(function(){
return nil;
})))._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},globals.SequenceableCollection)})},
args: ["anObject"],
source: "includes: anObject\x0a\x09^ (self indexOf: anObject ifAbsent: [ nil ]) notNil",
messageSends: ["notNil", "indexOf:ifAbsent:"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:ifAbsent:",
protocol: 'accessing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		self = self._numericallyIndexable();
		for(var i=0; i < self.length; i++) {
			if(_st(self[i]).__eq(anObject)) {return i+1}
		};
		return aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},globals.SequenceableCollection)})},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09<\x0a\x09\x09self = self._numericallyIndexable();\x0a\x09\x09for(var i=0; i < self.length; i++) {\x0a\x09\x09\x09if(_st(self[i]).__eq(anObject)) {return i+1}\x0a\x09\x09};\x0a\x09\x09return aBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:startingAt:",
protocol: 'accessing',
fn: function (anObject,start){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._indexOf_startingAt_ifAbsent_(anObject,start,(function(){
return (0);
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:",{anObject:anObject,start:start},globals.SequenceableCollection)})},
args: ["anObject", "start"],
source: "indexOf: anObject startingAt: start\x0a\x09\x22Answer the index of the first occurence of anElement after start\x0a\x09within the receiver. If the receiver does not contain anElement,\x0a\x09answer 0.\x22\x0a\x09^ self indexOf: anObject startingAt: start ifAbsent: [ 0 ]",
messageSends: ["indexOf:startingAt:ifAbsent:"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:startingAt:ifAbsent:",
protocol: 'accessing',
fn: function (anObject,start,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		self = self._numericallyIndexable();
		for(var i=start - 1; i < self.length; i++){
			if(_st(self[i]).__eq(anObject)) {return i+1}
		}
		return aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:ifAbsent:",{anObject:anObject,start:start,aBlock:aBlock},globals.SequenceableCollection)})},
args: ["anObject", "start", "aBlock"],
source: "indexOf: anObject startingAt: start ifAbsent: aBlock\x0a\x09<\x0a\x09\x09self = self._numericallyIndexable();\x0a\x09\x09for(var i=start - 1; i < self.length; i++){\x0a\x09\x09\x09if(_st(self[i]).__eq(anObject)) {return i+1}\x0a\x09\x09}\x0a\x09\x09return aBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "last",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_(self._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"last",{},globals.SequenceableCollection)})},
args: [],
source: "last\x0a\x09^ self at: self size",
messageSends: ["at:", "size"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "last:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$6,$5,$4,$3;
$2=self._size();
$ctx1.sendIdx["size"]=1;
$1=_st($2).__lt(aNumber);
if(smalltalk.assert($1)){
self._error_("Invalid number of elements");
};
$6=self._size();
$ctx1.sendIdx["size"]=2;
$5=_st($6).__minus(aNumber);
$4=_st($5).__plus((1));
$3=self._copyFrom_to_($4,self._size());
return $3;
}, function($ctx1) {$ctx1.fill(self,"last:",{aNumber:aNumber},globals.SequenceableCollection)})},
args: ["aNumber"],
source: "last: aNumber\x0a\x09\x22Answer the last aNumber elements of the receiver.\x0a\x09Raise an error if there are not enough elements in the receiver.\x22\x0a\x0a\x09self size < aNumber ifTrue: [ self error: 'Invalid number of elements' ].\x0a\x0a\x09^ self copyFrom: self size - aNumber + 1 to: self size",
messageSends: ["ifTrue:", "<", "size", "error:", "copyFrom:to:", "+", "-"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "newStream",
protocol: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._streamClass())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newStream",{},globals.SequenceableCollection)})},
args: [],
source: "newStream\x0a\x09^ self streamClass on: self",
messageSends: ["on:", "streamClass"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "numericallyIndexable",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"numericallyIndexable",{},globals.SequenceableCollection)})},
args: [],
source: "numericallyIndexable\x0a\x09\x22This is an internal converting message.\x0a\x09It answeres a representation of the receiver\x0a\x09that can use foo[i] in JavaScript code.\x0a\x09\x0a\x09It fixes IE8, where boxed String is unable\x0a\x09to numerically index its characters,\x0a\x09but primitive string can.\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "readStream",
protocol: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"readStream",{},globals.SequenceableCollection)})},
args: [],
source: "readStream\x0a\x09\x22For Pharo compatibility\x22\x0a\x09\x0a\x09^ self stream",
messageSends: ["stream"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeLast",
protocol: 'adding/removing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._remove_(self._last());
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeLast",{},globals.SequenceableCollection)})},
args: [],
source: "removeLast\x0a\x09^ self remove: self last",
messageSends: ["remove:", "last"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},globals.SequenceableCollection)})},
args: [],
source: "reversed\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "second",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"second",{},globals.SequenceableCollection)})},
args: [],
source: "second\x0a\x09^ self at: 2",
messageSends: ["at:"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
protocol: 'copying',
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
var $1;
newCollection=_st(self._class())._new_(self._size());
self._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._at_put_(index,each);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{newCollection:newCollection},globals.SequenceableCollection)})},
args: [],
source: "shallowCopy\x0a\x09| newCollection |\x0a\x09newCollection := self class new: self size.\x0a\x09self withIndexDo: [ :each :index |\x0a\x09\x09newCollection at: index put: each ].\x0a\x09^ newCollection",
messageSends: ["new:", "class", "size", "withIndexDo:", "at:put:"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "stream",
protocol: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newStream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"stream",{},globals.SequenceableCollection)})},
args: [],
source: "stream\x0a\x09^ self newStream",
messageSends: ["newStream"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
protocol: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._streamClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},globals.SequenceableCollection)})},
args: [],
source: "streamClass\x0a\x09^ self class streamClass",
messageSends: ["streamClass", "class"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "third",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"third",{},globals.SequenceableCollection)})},
args: [],
source: "third\x0a\x09^ self at: 3",
messageSends: ["at:"],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
protocol: 'enumerating',
fn: function (anotherCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		self = self._numericallyIndexable();
		anotherCollection = anotherCollection._numericallyIndexable();
		for(var i=0; i<self.length; i++) {
			aBlock._value_value_(self[i], anotherCollection[i]);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock},globals.SequenceableCollection)})},
args: ["anotherCollection", "aBlock"],
source: "with: anotherCollection do: aBlock\x0a\x09<\x0a\x09\x09self = self._numericallyIndexable();\x0a\x09\x09anotherCollection = anotherCollection._numericallyIndexable();\x0a\x09\x09for(var i=0; i<self.length; i++) {\x0a\x09\x09\x09aBlock._value_value_(self[i], anotherCollection[i]);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "withIndexDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		self = self._numericallyIndexable();
		for(var i=0; i < self.length; i++) {
			aBlock._value_value_(self[i], i+1);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},globals.SequenceableCollection)})},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09<\x0a\x09\x09self = self._numericallyIndexable();\x0a\x09\x09for(var i=0; i < self.length; i++) {\x0a\x09\x09\x09aBlock._value_value_(self[i], i+1);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "writeStream",
protocol: 'streaming',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"writeStream",{},globals.SequenceableCollection)})},
args: [],
source: "writeStream\x0a\x09\x22For Pharo compatibility\x22\x0a\x09\x0a\x09^ self stream",
messageSends: ["stream"],
referencedClasses: []
}),
globals.SequenceableCollection);


smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $Stream(){return globals.Stream||(typeof Stream=="undefined"?nil:Stream)}
return $Stream();
},
args: [],
source: "streamClass\x0a\x09\x09^ Stream",
messageSends: [],
referencedClasses: ["Stream"]
}),
globals.SequenceableCollection.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamContents:",
protocol: 'streaming',
fn: function (aBlock){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
var $1;
stream=_st(self._streamClass())._on_(self._new());
_st(aBlock)._value_(stream);
$1=_st(stream)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamContents:",{aBlock:aBlock,stream:stream},globals.SequenceableCollection.klass)})},
args: ["aBlock"],
source: "streamContents: aBlock\x0a\x09| stream |\x0a\x09stream := (self streamClass on: self new).\x0a\x09aBlock value: stream.\x0a\x09^ stream contents",
messageSends: ["on:", "streamClass", "new", "value:", "contents"],
referencedClasses: []
}),
globals.SequenceableCollection.klass);


smalltalk.addClass('Array', globals.SequenceableCollection, [], 'Kernel-Collections');
globals.Array.comment="I represent a collection of objects ordered by the collector. The size of arrays is dynamic.\x0a\x0aI am directly mapped to JavaScript Number.\x0a\x0a*Note* In Amber, `OrderedCollection` is an alias for `Array`.";
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.push(anObject); return anObject;;
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},globals.Array)})},
args: ["anObject"],
source: "add: anObject\x0a\x09<self.push(anObject); return anObject;>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "addFirst:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.unshift(anObject); return anObject;;
return self}, function($ctx1) {$ctx1.fill(self,"addFirst:",{anObject:anObject},globals.Array)})},
args: ["anObject"],
source: "addFirst: anObject\x0a\x09<self.unshift(anObject); return anObject;>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("[".__comma(_st(self._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._asJavascript();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._join_(", "))).__comma("]");
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},globals.Array)})},
args: [],
source: "asJavascript\x0a\x09^ '[', ((self collect: [:each | each asJavascript ]) join: ', '), ']'",
messageSends: [",", "join:", "collect:", "asJavascript"],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
protocol: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return anIndex >= 1 && anIndex <= self.length
			? self[anIndex - 1]
			: aBlock._value()
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},globals.Array)})},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<\x0a\x09\x09return anIndex >>= 1 && anIndex <= self.length\x0a\x09\x09\x09? self[anIndex - 1]\x0a\x09\x09\x09: aBlock._value()\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
protocol: 'accessing',
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return anIndex >= 1 && anIndex <= self.length
			? aBlock._value_(self[anIndex - 1])
			: anotherBlock._value()
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},globals.Array)})},
args: ["anIndex", "aBlock", "anotherBlock"],
source: "at: anIndex ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09<\x0a\x09\x09return anIndex >>= 1 && anIndex <= self.length\x0a\x09\x09\x09? aBlock._value_(self[anIndex - 1])\x0a\x09\x09\x09: anotherBlock._value()\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[anIndex - 1] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},globals.Array)})},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09<return self[anIndex - 1] = anObject>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.map(function(each) {return aBlock._value_(each)});
return self}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},globals.Array)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09\x22Optimized version\x22\x0a\x09\x0a\x09<return self.map(function(each) {return aBlock._value_(each)})>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "join:",
protocol: 'enumerating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.join(aString);
return self}, function($ctx1) {$ctx1.fill(self,"join:",{aString:aString},globals.Array)})},
args: ["aString"],
source: "join: aString\x0a\x09<return self.join(aString)>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "numericallyIndexable",
protocol: 'private',
fn: function (){
var self=this;
return self;
},
args: [],
source: "numericallyIndexable\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Array.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]));
$ctx1.supercall = false;
$ctx1.sendIdx["printOn:"]=1;
_st(aStream)._nextPutAll_(" (");
$ctx1.sendIdx["nextPutAll:"]=1;
self._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._printOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" ");
$ctx2.sendIdx["nextPutAll:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.Array)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self \x0a\x09\x09do: [ :each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
protocol: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
index=self._indexOf_ifAbsent_(anObject,(function(){
return (0);
}));
$2=_st(index).__eq((0));
if(smalltalk.assert($2)){
$1=_st(aBlock)._value();
} else {
self._removeIndex_(index);
$1=anObject;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock,index:index},globals.Array)})},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09| index |\x0a\x09index := self indexOf: anObject ifAbsent: [ 0 ].\x0a\x09^ index = 0\x0a\x09\x09ifFalse: [ self removeIndex: index. anObject ]\x0a\x09\x09ifTrue: [ aBlock value ]",
messageSends: ["indexOf:ifAbsent:", "ifFalse:ifTrue:", "=", "removeIndex:", "value"],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
protocol: 'adding/removing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.length = 0;
return self}, function($ctx1) {$ctx1.fill(self,"removeAll",{},globals.Array)})},
args: [],
source: "removeAll\x0a\x09<self.length = 0>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFrom:to:",
protocol: 'adding/removing',
fn: function (aNumber,anotherNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.splice(aNumber -1, anotherNumber - aNumber + 1);
return self}, function($ctx1) {$ctx1.fill(self,"removeFrom:to:",{aNumber:aNumber,anotherNumber:anotherNumber},globals.Array)})},
args: ["aNumber", "anotherNumber"],
source: "removeFrom: aNumber to: anotherNumber\x0a\x09<self.splice(aNumber -1, anotherNumber - aNumber + 1)>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeIndex:",
protocol: 'adding/removing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.splice(anInteger - 1, 1);
return self}, function($ctx1) {$ctx1.fill(self,"removeIndex:",{anInteger:anInteger},globals.Array)})},
args: ["anInteger"],
source: "removeIndex: anInteger\x0a\x09<self.splice(anInteger - 1, 1)>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeLast",
protocol: 'adding/removing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.pop();;
return self}, function($ctx1) {$ctx1.fill(self,"removeLast",{},globals.Array)})},
args: [],
source: "removeLast\x0a\x09<return self.pop();>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self._copy().reverse();
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},globals.Array)})},
args: [],
source: "reversed\x0a\x09<return self._copy().reverse()>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var result = self.klass._new();
		for(var i=0; i<self.length; i++) {
			if(aBlock._value_(self[i])) {
				result.push(self[i]);
			}
		}
		return result;
	;
return self}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock},globals.Array)})},
args: ["aBlock"],
source: "select: aBlock\x0a\x09\x22Optimized version\x22\x0a\x09\x0a\x09<\x0a\x09\x09var result = self.klass._new();\x0a\x09\x09for(var i=0; i<self.length; i++) {\x0a\x09\x09\x09if(aBlock._value_(self[i])) {\x0a\x09\x09\x09\x09result.push(self[i]);\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09\x09return result;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{},globals.Array)})},
args: [],
source: "size\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sort",
protocol: 'enumerating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(a).__lt(b);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sort",{},globals.Array)})},
args: [],
source: "sort\x0a\x09^ self sort: [ :a :b | a < b ]",
messageSends: ["sort:", "<"],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sort:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return self.sort(function(a, b) {
			if(aBlock._value_value_(a,b)) {return -1} else {return 1}
		})
	;
return self}, function($ctx1) {$ctx1.fill(self,"sort:",{aBlock:aBlock},globals.Array)})},
args: ["aBlock"],
source: "sort: aBlock\x0a\x09<\x0a\x09\x09return self.sort(function(a, b) {\x0a\x09\x09\x09if(aBlock._value_value_(a,b)) {return -1} else {return 1}\x0a\x09\x09})\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sorted",
protocol: 'enumerating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._copy())._sort();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sorted",{},globals.Array)})},
args: [],
source: "sorted\x0a\x09^ self copy sort",
messageSends: ["sort", "copy"],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "sorted:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._copy())._sort_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sorted:",{aBlock:aBlock},globals.Array)})},
args: ["aBlock"],
source: "sorted: aBlock\x0a\x09^ self copy sort: aBlock",
messageSends: ["sort:", "copy"],
referencedClasses: []
}),
globals.Array);


smalltalk.addMethod(
smalltalk.method({
selector: "new:",
protocol: 'instance creation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new Array(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger},globals.Array.klass)})},
args: ["anInteger"],
source: "new: anInteger\x0a\x09<return new Array(anInteger)>",
messageSends: [],
referencedClasses: []
}),
globals.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new_((1));
_st($2)._at_put_((1),anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},globals.Array.klass)})},
args: ["anObject"],
source: "with: anObject\x0a\x09\x09^ (self new: 1)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
globals.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
protocol: 'instance creation',
fn: function (anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new_((2));
_st($2)._at_put_((1),anObject);
$ctx1.sendIdx["at:put:"]=1;
_st($2)._at_put_((2),anObject2);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:",{anObject:anObject,anObject2:anObject2},globals.Array.klass)})},
args: ["anObject", "anObject2"],
source: "with: anObject with: anObject2\x0a\x09\x09^ (self new: 2)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
globals.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:with:",
protocol: 'instance creation',
fn: function (anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new_((3));
_st($2)._at_put_((1),anObject);
$ctx1.sendIdx["at:put:"]=1;
_st($2)._at_put_((2),anObject2);
$ctx1.sendIdx["at:put:"]=2;
_st($2)._at_put_((3),anObject3);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:with:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3},globals.Array.klass)})},
args: ["anObject", "anObject2", "anObject3"],
source: "with: anObject with: anObject2 with: anObject3\x0a\x09\x09^ (self new: 3)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09at: 3 put: anObject3;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
globals.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withAll:",
protocol: 'instance creation',
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=instance;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withAll:",{aCollection:aCollection,instance:instance,index:index},globals.Array.klass)})},
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09| instance index |\x0a\x09index := 1.\x0a\x09instance := self new: aCollection size.\x0a\x09aCollection do: [ :each |\x0a\x09\x09instance at: index put: each.\x0a\x09\x09index := index + 1 ].\x0a\x09^ instance",
messageSends: ["new:", "size", "do:", "at:put:", "+"],
referencedClasses: []
}),
globals.Array.klass);


smalltalk.addClass('CharacterArray', globals.SequenceableCollection, [], 'Kernel-Collections');
globals.CharacterArray.comment="I am the abstract superclass of string-like collections.";
smalltalk.addMethod(
smalltalk.method({
selector: ",",
protocol: 'copying',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._asString();
$ctx1.sendIdx["asString"]=1;
$1=_st($2).__comma(_st(aString)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,",",{aString:aString},globals.CharacterArray)})},
args: ["aString"],
source: ", aString\x0a\x09^ self asString, aString asString",
messageSends: [",", "asString"],
referencedClasses: []
}),
globals.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},globals.CharacterArray)})},
args: ["anObject"],
source: "add: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
globals.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asLowercase",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._fromString_(_st(self._asString())._asLowercase());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asLowercase",{},globals.CharacterArray)})},
args: [],
source: "asLowercase\x0a\x09^ self class fromString: self asString asLowercase",
messageSends: ["fromString:", "class", "asLowercase", "asString"],
referencedClasses: []
}),
globals.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asString())._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},globals.CharacterArray)})},
args: [],
source: "asNumber\x0a\x09^ self asString asNumber",
messageSends: ["asNumber", "asString"],
referencedClasses: []
}),
globals.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},globals.CharacterArray)})},
args: [],
source: "asString\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asSymbol",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{},globals.CharacterArray)})},
args: [],
source: "asSymbol\x0a\x09^ self asString",
messageSends: ["asString"],
referencedClasses: []
}),
globals.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "asUppercase",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._fromString_(_st(self._asString())._asUppercase());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asUppercase",{},globals.CharacterArray)})},
args: [],
source: "asUppercase\x0a\x09^ self class fromString: self asString asUppercase",
messageSends: ["fromString:", "class", "asUppercase", "asString"],
referencedClasses: []
}),
globals.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},globals.CharacterArray)})},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
globals.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "errorReadOnly",
protocol: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Object is read-only");
return self}, function($ctx1) {$ctx1.fill(self,"errorReadOnly",{},globals.CharacterArray)})},
args: [],
source: "errorReadOnly\x0a\x09self error: 'Object is read-only'",
messageSends: ["error:"],
referencedClasses: []
}),
globals.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._asString())._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.CharacterArray)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09self asString printOn: aStream",
messageSends: ["printOn:", "asString"],
referencedClasses: []
}),
globals.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "putOn:",
protocol: 'streaming',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutString_(self);
return self}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},globals.CharacterArray)})},
args: ["aStream"],
source: "putOn: aStream\x0a\x09aStream nextPutString: self",
messageSends: ["nextPutString:"],
referencedClasses: []
}),
globals.CharacterArray);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},globals.CharacterArray)})},
args: ["anObject"],
source: "remove: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
globals.CharacterArray);


smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},globals.CharacterArray.klass)})},
args: ["aString"],
source: "fromString: aString\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.CharacterArray.klass);


smalltalk.addClass('String', globals.CharacterArray, [], 'Kernel-Collections');
globals.String.comment="I am an indexed collection of Characters. Unlike most Smalltalk dialects, Amber doesn't provide the Character class. Instead, elements of a String are single character strings.\x0a\x0aString inherits many useful methods from its hierarchy, such as\x0a\x09`Collection >> #,`";
smalltalk.addMethod(
smalltalk.method({
selector: ",",
protocol: 'copying',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) + aString;
return self}, function($ctx1) {$ctx1.fill(self,",",{aString:aString},globals.String)})},
args: ["aString"],
source: ", aString\x0a\x09<return String(self) + aString>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "<",
protocol: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) < aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<",{aString:aString},globals.String)})},
args: ["aString"],
source: "< aString\x0a\x09<return String(self) < aString._asString()>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "<=",
protocol: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) <= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aString:aString},globals.String)})},
args: ["aString"],
source: "<= aString\x0a\x09<return String(self) <= aString._asString()>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return aString != null &&
			typeof aString._isString === "function" &&
			aString._isString() &&
			String(self) === String(aString)
	;
return self}, function($ctx1) {$ctx1.fill(self,"=",{aString:aString},globals.String)})},
args: ["aString"],
source: "= aString\x0a\x09<\x0a\x09\x09return aString != null &&\x0a\x09\x09\x09typeof aString._isString === \x22function\x22 &&\x0a\x09\x09\x09aString._isString() &&\x0a\x09\x09\x09String(self) === String(aString)\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "==",
protocol: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{aString:aString},globals.String)})},
args: ["aString"],
source: "== aString\x0a\x09^ self = aString",
messageSends: ["="],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: ">",
protocol: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) > aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">",{aString:aString},globals.String)})},
args: ["aString"],
source: "> aString\x0a\x09<return String(self) >> aString._asString()>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: ">=",
protocol: 'comparing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self) >= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">=",{aString:aString},globals.String)})},
args: ["aString"],
source: ">= aString\x0a\x09<return String(self) >>= aString._asString()>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asJSON\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	;
return self}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},globals.String)})},
args: [],
source: "asJavascript\x0a\x09<\x0a\x09\x09if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self.replace(/[\x5cx00-\x5cx1f\x22\x5c\x5c\x5cx7f-\x5cx9f]/g, function(ch){var c=ch.charCodeAt(0);return \x22\x5c\x5cx\x22+(\x220\x22+c.toString(16)).slice(-2)}) + \x22\x5c\x22\x22;\x0a\x09\x09else\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self + \x22\x5c\x22\x22;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asLowercase",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toLowerCase();
return self}, function($ctx1) {$ctx1.fill(self,"asLowercase",{},globals.String)})},
args: [],
source: "asLowercase\x0a\x09<return self.toLowerCase()>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asMutator",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._last()).__eq(":");
if(! smalltalk.assert($1)){
$2=self.__comma(":");
return $2;
};
return self;
}, function($ctx1) {$ctx1.fill(self,"asMutator",{},globals.String)})},
args: [],
source: "asMutator\x0a\x09\x22Answer a setter selector. For example,\x0a\x09#name asMutator returns #name:\x22\x0a\x0a\x09self last = ':' ifFalse: [  ^ self, ':' ].\x0a\x09^ self",
messageSends: ["ifFalse:", "=", "last", ","],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Number(self);
return self}, function($ctx1) {$ctx1.fill(self,"asNumber",{},globals.String)})},
args: [],
source: "asNumber\x0a\x09<return Number(self)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asRegexp",
protocol: 'converting',
fn: function (){
var self=this;
function $RegularExpression(){return globals.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RegularExpression())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asRegexp",{},globals.String)})},
args: [],
source: "asRegexp\x0a\x09^ RegularExpression fromString: self",
messageSends: ["fromString:"],
referencedClasses: ["RegularExpression"]
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asSelector",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.selector(self);
return self}, function($ctx1) {$ctx1.fill(self,"asSelector",{},globals.String)})},
args: [],
source: "asSelector\x0a\x09<return smalltalk.selector(self)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asString\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asSymbol",
protocol: 'converting',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asSymbol\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asUppercase",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toUpperCase();
return self}, function($ctx1) {$ctx1.fill(self,"asUppercase",{},globals.String)})},
args: [],
source: "asUppercase\x0a\x09<return self.toUpperCase()>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asciiValue",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.charCodeAt(0);;
return self}, function($ctx1) {$ctx1.fill(self,"asciiValue",{},globals.String)})},
args: [],
source: "asciiValue\x0a\x09<return self.charCodeAt(0);>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
protocol: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self)[anIndex - 1] || aBlock._value();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},globals.String)})},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<return String(self)[anIndex - 1] || aBlock._value()>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
protocol: 'accessing',
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var result = String(self)[anIndex - 1];
		return result ? aBlock._value_(result) : anotherBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},globals.String)})},
args: ["anIndex", "aBlock", "anotherBlock"],
source: "at: anIndex ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09<\x0a\x09\x09var result = String(self)[anIndex - 1];\x0a\x09\x09return result ? aBlock._value_(result) : anotherBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "capitalized",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isEmpty();
if(smalltalk.assert($2)){
$1=self;
} else {
$1=_st(_st(self._first())._asUppercase()).__comma(self._allButFirst());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"capitalized",{},globals.String)})},
args: [],
source: "capitalized\x0a\x09^ self isEmpty\x0a\x09\x09ifTrue: [ self ]\x0a\x09\x09ifFalse: [ self first asUppercase, self allButFirst ]",
messageSends: ["ifTrue:ifFalse:", "isEmpty", ",", "asUppercase", "first", "allButFirst"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "charCodeAt:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.charCodeAt(anInteger - 1);
return self}, function($ctx1) {$ctx1.fill(self,"charCodeAt:",{anInteger:anInteger},globals.String)})},
args: ["anInteger"],
source: "charCodeAt: anInteger\x0a\x09<return self.charCodeAt(anInteger - 1)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "copyFrom:to:",
protocol: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.substring(anIndex - 1, anotherIndex);
return self}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex},globals.String)})},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09<return self.substring(anIndex - 1, anotherIndex)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "crlfSanitized",
protocol: 'converting',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._lines())._join_(_st($String())._lf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"crlfSanitized",{},globals.String)})},
args: [],
source: "crlfSanitized\x0a\x09^ self lines join: String lf",
messageSends: ["join:", "lines", "lf"],
referencedClasses: ["String"]
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shallowCopy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},globals.String)})},
args: [],
source: "deepCopy\x0a\x09^ self shallowCopy",
messageSends: ["shallowCopy"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "escaped",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return escape(self);
return self}, function($ctx1) {$ctx1.fill(self,"escaped",{},globals.String)})},
args: [],
source: "escaped\x0a\x09<return escape(self)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "identityHash",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__comma("s");
return $1;
}, function($ctx1) {$ctx1.fill(self,"identityHash",{},globals.String)})},
args: [],
source: "identityHash\x0a\x09^ self, 's'",
messageSends: [","],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "includesSubString:",
protocol: 'testing',
fn: function (subString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.indexOf(subString) != -1;
return self}, function($ctx1) {$ctx1.fill(self,"includesSubString:",{subString:subString},globals.String)})},
args: ["subString"],
source: "includesSubString: subString\x0a\x09<return self.indexOf(subString) != -1>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isCapitalized",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self._first();
$ctx1.sendIdx["first"]=1;
$2=_st($3)._asUppercase();
$1=_st($2).__eq_eq(self._first());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isCapitalized",{},globals.String)})},
args: [],
source: "isCapitalized\x0a\x09^ self first asUppercase == self first",
messageSends: ["==", "asUppercase", "first"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isImmutable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isString",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isString\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isVowel",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._size()).__eq((1)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return "aeiou"._includes_(self._asLowercase());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isVowel",{},globals.String)})},
args: [],
source: "isVowel\x0a\x09\x22Answer true if the receiver is a one character string containing a voyel\x22\x0a\x09\x0a\x09^ self size = 1 and: [ 'aeiou' includes: self asLowercase ]",
messageSends: ["and:", "=", "size", "includes:", "asLowercase"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "join:",
protocol: 'split join',
fn: function (aCollection){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(aCollection)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(_st(each)._asString());
$ctx3.sendIdx["nextPutAll:"]=1;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(self);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"join:",{aCollection:aCollection},globals.String)})},
args: ["aCollection"],
source: "join: aCollection\x0a\x09^ String\x0a\x09\x09streamContents: [ :stream | aCollection\x0a\x09\x09\x09\x09do: [ :each | stream nextPutAll: each asString ]\x0a\x09\x09\x09\x09separatedBy: [ stream nextPutAll: self ]]",
messageSends: ["streamContents:", "do:separatedBy:", "nextPutAll:", "asString"],
referencedClasses: ["String"]
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lineIndicesDo:",
protocol: 'split join',
fn: function (aBlock){
var self=this;
var cr,lf,start,sz,nextLF,nextCR;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$5,$3,$6,$7,$9,$8,$10,$11;
var $early={};
try {
start=(1);
sz=self._size();
cr=_st($String())._cr();
nextCR=self._indexOf_startingAt_(cr,(1));
$ctx1.sendIdx["indexOf:startingAt:"]=1;
lf=_st($String())._lf();
nextLF=self._indexOf_startingAt_(lf,(1));
$ctx1.sendIdx["indexOf:startingAt:"]=2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(start).__lt_eq(sz);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(nextLF).__eq((0));
$ctx2.sendIdx["="]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(nextCR).__eq((0));
$ctx3.sendIdx["="]=2;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["and:"]=1;
if(smalltalk.assert($1)){
_st(aBlock)._value_value_value_(start,sz,sz);
$ctx2.sendIdx["value:value:value:"]=1;
throw $early=[self];
};
$4=_st(nextCR).__eq((0));
$ctx2.sendIdx["="]=3;
$3=_st($4)._or_((function(){
return smalltalk.withContext(function($ctx3) {
$5=(0).__lt(nextLF);
$ctx3.sendIdx["<"]=1;
return _st($5)._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(nextLF).__lt(nextCR);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
if(smalltalk.assert($3)){
$6=start;
$7=_st(nextLF).__minus((1));
$ctx2.sendIdx["-"]=1;
_st(aBlock)._value_value_value_($6,$7,nextLF);
$ctx2.sendIdx["value:value:value:"]=2;
start=(1).__plus(nextLF);
$ctx2.sendIdx["+"]=1;
start;
nextLF=self._indexOf_startingAt_(lf,start);
$ctx2.sendIdx["indexOf:startingAt:"]=3;
return nextLF;
} else {
$9=(1).__plus(nextCR);
$ctx2.sendIdx["+"]=2;
$8=_st($9).__eq(nextLF);
if(smalltalk.assert($8)){
$10=start;
$11=_st(nextCR).__minus((1));
$ctx2.sendIdx["-"]=2;
_st(aBlock)._value_value_value_($10,$11,nextLF);
$ctx2.sendIdx["value:value:value:"]=3;
start=(1).__plus(nextLF);
$ctx2.sendIdx["+"]=3;
start;
nextCR=self._indexOf_startingAt_(cr,start);
$ctx2.sendIdx["indexOf:startingAt:"]=4;
nextCR;
nextLF=self._indexOf_startingAt_(lf,start);
$ctx2.sendIdx["indexOf:startingAt:"]=5;
return nextLF;
} else {
_st(aBlock)._value_value_value_(start,_st(nextCR).__minus((1)),nextCR);
start=(1).__plus(nextCR);
start;
nextCR=self._indexOf_startingAt_(cr,start);
return nextCR;
};
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lineIndicesDo:",{aBlock:aBlock,cr:cr,lf:lf,start:start,sz:sz,nextLF:nextLF,nextCR:nextCR},globals.String)})},
args: ["aBlock"],
source: "lineIndicesDo: aBlock\x0a\x09\x22execute aBlock with 3 arguments for each line:\x0a\x09- start index of line\x0a\x09- end index of line without line delimiter\x0a\x09- end index of line including line delimiter(s) CR, LF or CRLF\x22\x0a\x09\x0a\x09| cr lf start sz nextLF nextCR |\x0a\x09start := 1.\x0a\x09sz := self size.\x0a\x09cr := String cr.\x0a\x09nextCR := self indexOf: cr startingAt: 1.\x0a\x09lf := String lf.\x0a\x09nextLF := self indexOf: lf startingAt: 1.\x0a\x09[ start <= sz ] whileTrue: [ \x0a\x09\x09(nextLF = 0 and: [ nextCR = 0 ])\x0a\x09\x09\x09ifTrue: [ \x22No more CR, nor LF, the string is over\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: sz value: sz.\x0a\x09\x09\x09\x09\x09^ self ].\x0a\x09\x09(nextCR = 0 or: [ 0 < nextLF and: [ nextLF < nextCR ] ])\x0a\x09\x09\x09ifTrue: [ \x22Found a LF\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextLF - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09ifFalse: [ 1 + nextCR = nextLF\x0a\x09\x09\x09\x09ifTrue: [ \x22Found a CR-LF pair\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09\x09ifFalse: [ \x22Found a CR\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextCR.\x0a\x09\x09\x09\x09\x09start := 1 + nextCR.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start ] ]]",
messageSends: ["size", "cr", "indexOf:startingAt:", "lf", "whileTrue:", "<=", "ifTrue:", "and:", "=", "value:value:value:", "ifTrue:ifFalse:", "or:", "<", "-", "+"],
referencedClasses: ["String"]
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lineNumber:",
protocol: 'split join',
fn: function (anIndex){
var self=this;
var lineCount;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
var $early={};
try {
lineCount=(0);
self._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {
lineCount=_st(lineCount).__plus((1));
$2=lineCount;
$1=_st($2).__eq(anIndex);
if(smalltalk.assert($1)){
$3=self._copyFrom_to_(start,endWithoutDelimiters);
throw $early=[$3];
};
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1,1)})}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lineNumber:",{anIndex:anIndex,lineCount:lineCount},globals.String)})},
args: ["anIndex"],
source: "lineNumber: anIndex\x0a\x09\x22Answer a string containing the characters in the given line number.\x22\x0a\x0a\x09| lineCount |\x0a\x09lineCount := 0.\x0a\x09self lineIndicesDo: [ :start :endWithoutDelimiters :end |\x0a\x09\x09(lineCount := lineCount + 1) = anIndex ifTrue: [ ^ self copyFrom: start to: endWithoutDelimiters ]].\x0a\x09^ nil",
messageSends: ["lineIndicesDo:", "ifTrue:", "=", "+", "copyFrom:to:"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lines",
protocol: 'split join',
fn: function (){
var self=this;
var lines;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
lines=_st($Array())._new();
self._linesDo_((function(aLine){
return smalltalk.withContext(function($ctx2) {
return _st(lines)._add_(aLine);
}, function($ctx2) {$ctx2.fillBlock({aLine:aLine},$ctx1,1)})}));
$1=lines;
return $1;
}, function($ctx1) {$ctx1.fill(self,"lines",{lines:lines},globals.String)})},
args: [],
source: "lines\x0a\x09\x22Answer an array of lines composing this receiver without the line ending delimiters.\x22\x0a\x0a\x09| lines |\x0a\x09lines := Array new.\x0a\x09self linesDo: [ :aLine | lines add: aLine ].\x0a\x09^ lines",
messageSends: ["new", "linesDo:", "add:"],
referencedClasses: ["Array"]
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "linesDo:",
protocol: 'split join',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(self._copyFrom_to_(start,endWithoutDelimiters));
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"linesDo:",{aBlock:aBlock},globals.String)})},
args: ["aBlock"],
source: "linesDo: aBlock\x0a\x09\x22Execute aBlock with each line in this string. The terminating line\x0a\x09delimiters CR, LF or CRLF pairs are not included in what is passed to aBlock\x22\x0a\x0a\x09self lineIndicesDo: [ :start :endWithoutDelimiters :end |\x0a\x09\x09aBlock value: (self copyFrom: start to: endWithoutDelimiters) ]",
messageSends: ["lineIndicesDo:", "value:", "copyFrom:to:"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "match:",
protocol: 'regular expressions',
fn: function (aRegexp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.search(aRegexp) != -1;
return self}, function($ctx1) {$ctx1.fill(self,"match:",{aRegexp:aRegexp},globals.String)})},
args: ["aRegexp"],
source: "match: aRegexp\x0a\x09<return self.search(aRegexp) != -1>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "matchesOf:",
protocol: 'regular expressions',
fn: function (aRegularExpression){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.match(aRegularExpression);
return self}, function($ctx1) {$ctx1.fill(self,"matchesOf:",{aRegularExpression:aRegularExpression},globals.String)})},
args: ["aRegularExpression"],
source: "matchesOf: aRegularExpression\x0a\x09<return self.match(aRegularExpression)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "numericallyIndexable",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(self);
return self}, function($ctx1) {$ctx1.fill(self,"numericallyIndexable",{},globals.String)})},
args: [],
source: "numericallyIndexable\x0a\x09<return String(self)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "printNl",
protocol: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
console.log(self);
return self}, function($ctx1) {$ctx1.fill(self,"printNl",{},globals.String)})},
args: [],
source: "printNl\x0a\x09<console.log(self)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_("'");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._nextPutAll_(self);
$ctx1.sendIdx["nextPutAll:"]=2;
$1=_st(aStream)._nextPutAll_("'");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.String)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: '''';\x0a\x09\x09nextPutAll: self;\x0a\x09\x09nextPutAll: ''''",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "replace:with:",
protocol: 'regular expressions',
fn: function (aString,anotherString){
var self=this;
function $RegularExpression(){return globals.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._replaceRegexp_with_(_st($RegularExpression())._fromString_flag_(aString,"g"),anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aString:aString,anotherString:anotherString},globals.String)})},
args: ["aString", "anotherString"],
source: "replace: aString with: anotherString\x0a\x09^ self replaceRegexp: (RegularExpression fromString: aString flag: 'g') with: anotherString",
messageSends: ["replaceRegexp:with:", "fromString:flag:"],
referencedClasses: ["RegularExpression"]
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "replaceRegexp:with:",
protocol: 'regular expressions',
fn: function (aRegexp,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.replace(aRegexp, aString);
return self}, function($ctx1) {$ctx1.fill(self,"replaceRegexp:with:",{aRegexp:aRegexp,aString:aString},globals.String)})},
args: ["aRegexp", "aString"],
source: "replaceRegexp: aRegexp with: aString\x0a\x09<return self.replace(aRegexp, aString)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "reversed",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.split("").reverse().join("");
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{},globals.String)})},
args: [],
source: "reversed\x0a\x09<return self.split(\x22\x22).reverse().join(\x22\x22)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
protocol: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},globals.String)})},
args: [],
source: "shallowCopy\x0a\x09^ self class fromString: self",
messageSends: ["fromString:", "class"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{},globals.String)})},
args: [],
source: "size\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "subStrings:",
protocol: 'split join',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tokenize_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subStrings:",{aString:aString},globals.String)})},
args: ["aString"],
source: "subStrings: aString\x0a\x09^ self tokenize: aString",
messageSends: ["tokenize:"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "tokenize:",
protocol: 'split join',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.split(aString);
return self}, function($ctx1) {$ctx1.fill(self,"tokenize:",{aString:aString},globals.String)})},
args: ["aString"],
source: "tokenize: aString\x0a\x09<return self.split(aString)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimBoth",
protocol: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._trimBoth_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth",{},globals.String)})},
args: [],
source: "trimBoth\x0a\x09^ self trimBoth: '\x5cs'",
messageSends: ["trimBoth:"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimBoth:",
protocol: 'regular expressions',
fn: function (separators){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._trimLeft_(separators))._trimRight_(separators);
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth:",{separators:separators},globals.String)})},
args: ["separators"],
source: "trimBoth: separators\x0a\x09^ (self trimLeft: separators) trimRight: separators",
messageSends: ["trimRight:", "trimLeft:"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimLeft",
protocol: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._trimLeft_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft",{},globals.String)})},
args: [],
source: "trimLeft\x0a\x09^ self trimLeft: '\x5cs'",
messageSends: ["trimLeft:"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimLeft:",
protocol: 'regular expressions',
fn: function (separators){
var self=this;
function $RegularExpression(){return globals.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st("^[".__comma(separators)).__comma("]+");
$ctx1.sendIdx[","]=1;
$2=_st($RegularExpression())._fromString_flag_($3,"g");
$1=self._replaceRegexp_with_($2,"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft:",{separators:separators},globals.String)})},
args: ["separators"],
source: "trimLeft: separators\x0a\x09^ self replaceRegexp: (RegularExpression fromString: '^[', separators, ']+' flag: 'g') with: ''",
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","],
referencedClasses: ["RegularExpression"]
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimRight",
protocol: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._trimRight_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight",{},globals.String)})},
args: [],
source: "trimRight\x0a\x09^ self trimRight: '\x5cs'",
messageSends: ["trimRight:"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trimRight:",
protocol: 'regular expressions',
fn: function (separators){
var self=this;
function $RegularExpression(){return globals.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st("[".__comma(separators)).__comma("]+$");
$ctx1.sendIdx[","]=1;
$2=_st($RegularExpression())._fromString_flag_($3,"g");
$1=self._replaceRegexp_with_($2,"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight:",{separators:separators},globals.String)})},
args: ["separators"],
source: "trimRight: separators\x0a\x09^ self replaceRegexp: (RegularExpression fromString: '[', separators, ']+$' flag: 'g') with: ''",
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","],
referencedClasses: ["RegularExpression"]
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "unescaped",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return unescape(self);
return self}, function($ctx1) {$ctx1.fill(self,"unescaped",{},globals.String)})},
args: [],
source: "unescaped\x0a\x09<return unescape(self)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "uriComponentDecoded",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return decodeURIComponent(self);
return self}, function($ctx1) {$ctx1.fill(self,"uriComponentDecoded",{},globals.String)})},
args: [],
source: "uriComponentDecoded\x0a\x09<return decodeURIComponent(self)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "uriComponentEncoded",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return encodeURIComponent(self);
return self}, function($ctx1) {$ctx1.fill(self,"uriComponentEncoded",{},globals.String)})},
args: [],
source: "uriComponentEncoded\x0a\x09<return encodeURIComponent(self)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "uriDecoded",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return decodeURI(self);
return self}, function($ctx1) {$ctx1.fill(self,"uriDecoded",{},globals.String)})},
args: [],
source: "uriDecoded\x0a\x09<return decodeURI(self)>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "uriEncoded",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return encodeURI(self);
return self}, function($ctx1) {$ctx1.fill(self,"uriEncoded",{},globals.String)})},
args: [],
source: "uriEncoded\x0a\x09<return encodeURI(self)>",
messageSends: [],
referencedClasses: []
}),
globals.String);


smalltalk.addMethod(
smalltalk.method({
selector: "cr",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\r';
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},globals.String.klass)})},
args: [],
source: "cr\x0a\x09<return '\x5cr'>",
messageSends: [],
referencedClasses: []
}),
globals.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "crlf",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\r\n';
return self}, function($ctx1) {$ctx1.fill(self,"crlf",{},globals.String.klass)})},
args: [],
source: "crlf\x0a\x09<return '\x5cr\x5cn'>",
messageSends: [],
referencedClasses: []
}),
globals.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "esc",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._fromCharCode_((27));
return $1;
}, function($ctx1) {$ctx1.fill(self,"esc",{},globals.String.klass)})},
args: [],
source: "esc\x0a\x09^ self fromCharCode: 27",
messageSends: ["fromCharCode:"],
referencedClasses: []
}),
globals.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromCharCode:",
protocol: 'instance creation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String.fromCharCode(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"fromCharCode:",{anInteger:anInteger},globals.String.klass)})},
args: ["anInteger"],
source: "fromCharCode: anInteger\x0a\x09<return String.fromCharCode(anInteger)>",
messageSends: [],
referencedClasses: []
}),
globals.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String(aString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},globals.String.klass)})},
args: ["aString"],
source: "fromString: aString\x0a\x09\x09<return String(aString)>",
messageSends: [],
referencedClasses: []
}),
globals.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lf",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\n';
return self}, function($ctx1) {$ctx1.fill(self,"lf",{},globals.String.klass)})},
args: [],
source: "lf\x0a\x09<return '\x5cn'>",
messageSends: [],
referencedClasses: []
}),
globals.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "random",
protocol: 'random',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (Math.random()*(22/32)+(10/32)).toString(32).slice(2);;
return self}, function($ctx1) {$ctx1.fill(self,"random",{},globals.String.klass)})},
args: [],
source: "random\x0a\x09\x22Returns random alphanumeric string beginning with letter\x22\x0a\x09<return (Math.random()*(22/32)+(10/32)).toString(32).slice(2);>",
messageSends: [],
referencedClasses: []
}),
globals.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "randomNotIn:",
protocol: 'random',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileTrue();
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"randomNotIn:",{aString:aString,result:result},globals.String.klass)})},
args: ["aString"],
source: "randomNotIn: aString\x0a\x09| result |\x0a\x09[ result := self random. aString includesSubString: result ] whileTrue.\x0a\x09^ result",
messageSends: ["whileTrue", "random", "includesSubString:"],
referencedClasses: []
}),
globals.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ' ';
return self}, function($ctx1) {$ctx1.fill(self,"space",{},globals.String.klass)})},
args: [],
source: "space\x0a\x09<return ' '>",
messageSends: [],
referencedClasses: []
}),
globals.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "streamClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $StringStream(){return globals.StringStream||(typeof StringStream=="undefined"?nil:StringStream)}
return $StringStream();
},
args: [],
source: "streamClass\x0a\x09\x09^ StringStream",
messageSends: [],
referencedClasses: ["StringStream"]
}),
globals.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tab",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return '\t';
return self}, function($ctx1) {$ctx1.fill(self,"tab",{},globals.String.klass)})},
args: [],
source: "tab\x0a\x09<return '\x5ct'>",
messageSends: [],
referencedClasses: []
}),
globals.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
protocol: 'instance creation',
fn: function (aUTFCharCode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return String.fromCharCode(aUTFCharCode);;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aUTFCharCode:aUTFCharCode},globals.String.klass)})},
args: ["aUTFCharCode"],
source: "value: aUTFCharCode\x0a\x0a\x09<return String.fromCharCode(aUTFCharCode);>",
messageSends: [],
referencedClasses: []
}),
globals.String.klass);


smalltalk.addClass('Set', globals.Collection, ['defaultBucket', 'slowBucketStores', 'fastBuckets', 'size'], 'Kernel-Collections');
globals.Set.comment="I represent an unordered set of objects without duplicates.\x0a\x0a## Implementation notes\x0a\x0aI put elements into different stores based on their type.\x0aThe goal is to store some elements into native JS object property names to be fast.\x0a\x0aIf an unboxed element has typeof 'string', 'boolean' or 'number', or an element is nil, null or undefined,\x0aI store it as a property name in an empty (== Object.create(null)) JS object, different for each type\x0a(for simplicity, nil/null/undefined is treated as one and included with the two booleans).\x0a\x0aIf element happen to be an object, I try to store them in `ArrayBucketStore`. I have two of them by default,\x0aone hashed using the Smalltalk class name, the other one using the JS constructor name. It is possible to have more or less\x0ainstances of `ArrayBucketStores`, see `#initializeSlowBucketStores`.\x0a\x0aAs a last resort, if none of the `ArrayBucketStore` instances can find a suitable bucket, the `defaultBucket` is used,\x0awhich is an `Array`.";
smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'comparing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5;
var $early={};
try {
$2=self._class();
$ctx1.sendIdx["class"]=1;
$1=_st($2).__eq(_st(aCollection)._class());
$ctx1.sendIdx["="]=1;
if(! smalltalk.assert($1)){
return false;
};
$4=self._size();
$ctx1.sendIdx["size"]=1;
$3=_st($4).__eq(_st(aCollection)._size());
if(! smalltalk.assert($3)){
return false;
};
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$5=_st(aCollection)._includes_(each);
if(! smalltalk.assert($5)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"=",{aCollection:aCollection},globals.Set)})},
args: ["aCollection"],
source: "= aCollection\x0a\x09self class = aCollection class ifFalse: [ ^ false ].\x0a\x09self size = aCollection size ifFalse: [ ^ false ].\x0a\x09self do: [ :each | (aCollection includes: each) ifFalse: [ ^ false ] ].\x0a\x09^ true",
messageSends: ["ifFalse:", "=", "class", "size", "do:", "includes:"],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
var bucket;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
bucket=self._bucketsOfElement_(anObject);
$2=_st(bucket)._second();
if(($receiver = $2) == null || $receiver.isNil){
var object,slowBucket;
object=_st(bucket)._first();
$ctx1.sendIdx["first"]=1;
object;
slowBucket=_st(bucket)._third();
slowBucket;
_st(slowBucket)._indexOf_ifAbsent_(object,(function(){
return smalltalk.withContext(function($ctx2) {
_st(slowBucket)._add_(object);
self["@size"]=_st(self["@size"]).__plus((1));
return self["@size"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$1=object;
} else {
var primitiveBucket;
primitiveBucket=$receiver;
$1=self._add_in_(_st(bucket)._first(),primitiveBucket);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject,bucket:bucket},globals.Set)})},
args: ["anObject"],
source: "add: anObject\x0a\x09| bucket |\x0a\x09bucket := self bucketsOfElement: anObject.\x0a\x09^ bucket second\x0a\x09\x09ifNil: [\x0a\x09\x09\x09| object slowBucket |\x0a\x09\x09\x09object := bucket first.\x0a\x09\x09\x09slowBucket := bucket third.\x0a\x09\x09\x09slowBucket \x0a\x09\x09\x09\x09indexOf: object \x0a\x09\x09\x09\x09ifAbsent: [ \x0a\x09\x09\x09\x09\x09slowBucket add: object. \x0a\x09\x09\x09\x09\x09size := size + 1 ].\x0a\x09\x09\x09object ]\x0a\x09\x09ifNotNil: [ :primitiveBucket | \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09add: bucket first \x0a\x09\x09\x09\x09in: primitiveBucket ]",
messageSends: ["bucketsOfElement:", "ifNil:ifNotNil:", "second", "first", "third", "indexOf:ifAbsent:", "add:", "+", "add:in:"],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "add:in:",
protocol: 'private',
fn: function (anObject,anotherObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if (anObject in anotherObject.store) { return false; }
		self['@size']++;
		return anotherObject.store[anObject] = true;
	;
return self}, function($ctx1) {$ctx1.fill(self,"add:in:",{anObject:anObject,anotherObject:anotherObject},globals.Set)})},
args: ["anObject", "anotherObject"],
source: "add: anObject in: anotherObject\x0a\x09<\x0a\x09\x09if (anObject in anotherObject.store) { return false; }\x0a\x09\x09self['@size']++;\x0a\x09\x09return anotherObject.store[anObject] = true;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "bucketsOfElement:",
protocol: 'private',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var type, bucket, prim = anObject == null ? (anObject = nil) : anObject.valueOf();
		if ((type = typeof prim) === "object") {
			if (anObject !== nil) {
				bucket = null;
				self['@slowBucketStores'].some(function (store) {
					return bucket = store._bucketOfElement_(anObject);
				});
				return [ anObject, null, bucket || self['@defaultBucket'] ];
			}
			
			// include nil to well-known objects under 'boolean' fastBucket
			prim = null;
			type = 'boolean';
		}
		return [ prim, self['@fastBuckets'][type] ];
	;
return self}, function($ctx1) {$ctx1.fill(self,"bucketsOfElement:",{anObject:anObject},globals.Set)})},
args: ["anObject"],
source: "bucketsOfElement: anObject\x0a\x09\x22Find the appropriate bucket for `anObject`.\x0a\x09For optimization purposes, directly answer an array with: \x0a\x09- the object to be store\x0a\x09- the primitive bucket\x0a\x09- the slow bucket\x22\x0a\x09\x0a\x09<\x0a\x09\x09var type, bucket, prim = anObject == null ? (anObject = nil) : anObject.valueOf();\x0a\x09\x09if ((type = typeof prim) === \x22object\x22) {\x0a\x09\x09\x09if (anObject !== nil) {\x0a\x09\x09\x09\x09bucket = null;\x0a\x09\x09\x09\x09self['@slowBucketStores'].some(function (store) {\x0a\x09\x09\x09\x09\x09return bucket = store._bucketOfElement_(anObject);\x0a\x09\x09\x09\x09});\x0a\x09\x09\x09\x09return [ anObject, null, bucket || self['@defaultBucket'] ];\x0a\x09\x09\x09}\x0a\x09\x09\x09\x0a\x09\x09\x09// include nil to well-known objects under 'boolean' fastBucket\x0a\x09\x09\x09prim = null;\x0a\x09\x09\x09type = 'boolean';\x0a\x09\x09}\x0a\x09\x09return [ prim, self['@fastBuckets'][type] ];\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "classNameOf:",
protocol: 'private',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return anObject.klass && anObject.klass.className;
return self}, function($ctx1) {$ctx1.fill(self,"classNameOf:",{anObject:anObject},globals.Set)})},
args: ["anObject"],
source: "classNameOf: anObject\x0a\x09\x22Answer the class name of `anObject`, or `undefined` \x0a\x09if `anObject` is not an Smalltalk object\x22\x0a\x09\x0a\x09<return anObject.klass && anObject.klass.className>",
messageSends: [],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
var collection;
return smalltalk.withContext(function($ctx1) { 
var $1;
collection=_st(self._class())._new();
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(collection)._add_(_st(aBlock)._value_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=collection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,collection:collection},globals.Set)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| collection |\x0a\x09collection := self class new.\x0a\x09self do: [ :each | collection add: (aBlock value: each) ].\x0a\x09^ collection",
messageSends: ["new", "class", "do:", "add:", "value:"],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:ifNone:",
protocol: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(each);
if(smalltalk.assert($1)){
throw $early=[each];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$2=_st(anotherBlock)._value();
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},globals.Set)})},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09self do: [ :each | (aBlock value: each) ifTrue: [ ^each ] ].\x0a\x09^ anotherBlock value",
messageSends: ["do:", "ifTrue:", "value:", "value"],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var el, keys, i;
		el = self['@fastBuckets'];
		keys = Object.keys(el);
		for (i = 0; i < keys.length; ++i) {
			var fastBucket = el[keys[i]], fn = fastBucket.fn, store = Object.keys(fastBucket.store);
			if (fn) { for (var j = 0; j < store.length; ++j) { aBlock._value_(fn(store[j])); } }
			else { store._do_(aBlock); }
		}
		el = self['@slowBucketStores'];
		for (i = 0; i < el.length; ++i) { el[i]._do_(aBlock); }
		self['@defaultBucket']._do_(aBlock);
	;
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},globals.Set)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09<\x0a\x09\x09var el, keys, i;\x0a\x09\x09el = self['@fastBuckets'];\x0a\x09\x09keys = Object.keys(el);\x0a\x09\x09for (i = 0; i < keys.length; ++i) {\x0a\x09\x09\x09var fastBucket = el[keys[i]], fn = fastBucket.fn, store = Object.keys(fastBucket.store);\x0a\x09\x09\x09if (fn) { for (var j = 0; j < store.length; ++j) { aBlock._value_(fn(store[j])); } }\x0a\x09\x09\x09else { store._do_(aBlock); }\x0a\x09\x09}\x0a\x09\x09el = self['@slowBucketStores'];\x0a\x09\x09for (i = 0; i < el.length; ++i) { el[i]._do_(aBlock); }\x0a\x09\x09self['@defaultBucket']._do_(aBlock);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:",
protocol: 'testing',
fn: function (anObject){
var self=this;
var bucket;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1,$receiver;
bucket=self._bucketsOfElement_(anObject);
$2=_st(bucket)._second();
if(($receiver = $2) == null || $receiver.isNil){
$3=_st(bucket)._third();
$4=_st(bucket)._first();
$ctx1.sendIdx["first"]=1;
$1=_st($3)._includes_($4);
} else {
var primitiveBucket;
primitiveBucket=$receiver;
$1=self._includes_in_(_st(bucket)._first(),primitiveBucket);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject,bucket:bucket},globals.Set)})},
args: ["anObject"],
source: "includes: anObject\x0a\x09| bucket |\x0a\x09bucket := self bucketsOfElement: anObject.\x0a\x09^ bucket second\x0a\x09\x09ifNil: [ bucket third includes: bucket first ]\x0a\x09\x09ifNotNil: [ :primitiveBucket | self includes: bucket first in: primitiveBucket ]",
messageSends: ["bucketsOfElement:", "ifNil:ifNotNil:", "second", "includes:", "third", "first", "includes:in:"],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "includes:in:",
protocol: 'private',
fn: function (anObject,anotherObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return anObject in anotherObject.store;
return self}, function($ctx1) {$ctx1.fill(self,"includes:in:",{anObject:anObject,anotherObject:anotherObject},globals.Set)})},
args: ["anObject", "anotherObject"],
source: "includes: anObject in: anotherObject\x0a\x09<return anObject in anotherObject.store>",
messageSends: [],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
($ctx1.supercall = true, globals.Set.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@defaultBucket"]=[];
self._initializeSlowBucketStores();
$1=self._removeAll();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Set)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09defaultBucket := #().\x0a\x09self\x0a\x09\x09initializeSlowBucketStores;\x0a\x09\x09removeAll",
messageSends: ["initialize", "initializeSlowBucketStores", "removeAll"],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSlowBucketStores",
protocol: 'initialization',
fn: function (){
var self=this;
function $ArrayBucketStore(){return globals.ArrayBucketStore||(typeof ArrayBucketStore=="undefined"?nil:ArrayBucketStore)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($ArrayBucketStore())._hashBlock_((function(x){
return smalltalk.withContext(function($ctx2) {
return self._classNameOf_(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)})}));
$ctx1.sendIdx["hashBlock:"]=1;
self["@slowBucketStores"]=[$1,_st($ArrayBucketStore())._hashBlock_((function(x){
return smalltalk.withContext(function($ctx2) {
return self._jsConstructorNameOf_(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)})}))];
return self}, function($ctx1) {$ctx1.fill(self,"initializeSlowBucketStores",{},globals.Set)})},
args: [],
source: "initializeSlowBucketStores\x0a\x09slowBucketStores := {\x0a\x09\x09ArrayBucketStore hashBlock: [ :x | self classNameOf: x ].\x0a\x09\x09ArrayBucketStore hashBlock: [ :x | self jsConstructorNameOf: x ]\x0a\x09}",
messageSends: ["hashBlock:", "classNameOf:", "jsConstructorNameOf:"],
referencedClasses: ["ArrayBucketStore"]
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "jsConstructorNameOf:",
protocol: 'private',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return anObject.constructor && anObject.constructor.name;
return self}, function($ctx1) {$ctx1.fill(self,"jsConstructorNameOf:",{anObject:anObject},globals.Set)})},
args: ["anObject"],
source: "jsConstructorNameOf: anObject\x0a\x09<return anObject.constructor && anObject.constructor.name>",
messageSends: [],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Set.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]));
$ctx1.supercall = false;
$ctx1.sendIdx["printOn:"]=1;
_st(aStream)._nextPutAll_(" (");
$ctx1.sendIdx["nextPutAll:"]=1;
self._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._printOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" ");
$ctx2.sendIdx["nextPutAll:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.Set)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self \x0a\x09\x09do: [ :each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
protocol: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;
var bucket;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1,$receiver;
var $early={};
try {
bucket=self._bucketsOfElement_(anObject);
$2=_st(bucket)._second();
if(($receiver = $2) == null || $receiver.isNil){
$3=_st(bucket)._third();
$4=_st(bucket)._first();
$ctx1.sendIdx["first"]=1;
_st($3)._remove_ifAbsent_($4,(function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(aBlock)._value();
throw $early=[$5];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self["@size"]=_st(self["@size"]).__minus((1));
$1=self["@size"];
} else {
var primitiveBucket;
primitiveBucket=$receiver;
$1=self._remove_in_(_st(bucket)._first(),primitiveBucket);
};
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock,bucket:bucket},globals.Set)})},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09| bucket |\x0a\x09bucket := self bucketsOfElement: anObject.\x0a\x09^ bucket second\x0a\x09\x09ifNil: [ bucket third remove: bucket first ifAbsent: [ ^aBlock value ]. size := size - 1 ]\x0a\x09\x09ifNotNil: [ :primitiveBucket | self remove: bucket first in: primitiveBucket ]",
messageSends: ["bucketsOfElement:", "ifNil:ifNotNil:", "second", "remove:ifAbsent:", "third", "first", "value", "-", "remove:in:"],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:in:",
protocol: 'private',
fn: function (anObject,anotherObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
if (delete anotherObject.store[anObject]) self['@size']--;
return self}, function($ctx1) {$ctx1.fill(self,"remove:in:",{anObject:anObject,anotherObject:anotherObject},globals.Set)})},
args: ["anObject", "anotherObject"],
source: "remove: anObject in: anotherObject\x0a\x09<if (delete anotherObject.store[anObject]) self['@size']-->",
messageSends: [],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAll",
protocol: 'adding/removing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		self['@fastBuckets'] = {
			'boolean': { store: Object.create(null), fn: function (x) { return {'true': true, 'false': false, 'null': null}[x]; } },
			'number': { store: Object.create(null), fn: Number },
			'string': { store: Object.create(null) }
		};
		self['@slowBucketStores'].forEach(function (x) { x._removeAll(); });
		self['@defaultBucket']._removeAll();
		self['@size'] = 0;
	;
return self}, function($ctx1) {$ctx1.fill(self,"removeAll",{},globals.Set)})},
args: [],
source: "removeAll\x0a\x09<\x0a\x09\x09self['@fastBuckets'] = {\x0a\x09\x09\x09'boolean': { store: Object.create(null), fn: function (x) { return {'true': true, 'false': false, 'null': null}[x]; } },\x0a\x09\x09\x09'number': { store: Object.create(null), fn: Number },\x0a\x09\x09\x09'string': { store: Object.create(null) }\x0a\x09\x09};\x0a\x09\x09self['@slowBucketStores'].forEach(function (x) { x._removeAll(); });\x0a\x09\x09self['@defaultBucket']._removeAll();\x0a\x09\x09self['@size'] = 0;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
protocol: 'enumerating',
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$2=collection;
return $2;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,collection:collection},globals.Set)})},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| collection |\x0a\x09collection := self class new.\x0a\x09self do: [ :each |\x0a\x09\x09(aBlock value: each) ifTrue: [\x0a\x09\x09\x09collection add: each ] ].\x0a\x09^ collection",
messageSends: ["new", "class", "do:", "ifTrue:", "value:", "add:"],
referencedClasses: []
}),
globals.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@size"];
return $1;
},
args: [],
source: "size\x0a\x09^ size",
messageSends: [],
referencedClasses: []
}),
globals.Set);



smalltalk.addClass('Queue', globals.Object, ['read', 'readIndex', 'write'], 'Kernel-Collections');
globals.Queue.comment="I am a one-sided queue.\x0a\x0a## Usage\x0a\x0aUse `#nextPut:` to add items to the queue.\x0aUse `#next` or `#nextIfAbsent:` to get (and remove) the next item in the queue.\x0a\x0a## Implementation notes\x0a\x0aA Queue uses two OrderedCollections inside,\x0a`read` is at the front, is not modified and only read using `readIndex`.\x0a`write` is at the back and is appended new items.\x0aWhen `read` is exhausted, `write` is promoted to `read` and new `write` is created.\x0a\x0aAs a consequence, no data moving is done by me, write appending may do data moving\x0awhen growing `write`, but this is left to engine to implement as good as it chooses to.";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Queue.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@read"]=_st($OrderedCollection())._new();
$ctx1.sendIdx["new"]=1;
self["@write"]=_st($OrderedCollection())._new();
self["@readIndex"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Queue)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09read := OrderedCollection new.\x0a\x09write := OrderedCollection new.\x0a\x09readIndex := 1",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextIfAbsent_((function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Cannot read from empty Queue.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},globals.Queue)})},
args: [],
source: "next\x0a\x09^ self nextIfAbsent: [ self error: 'Cannot read from empty Queue.' ]",
messageSends: ["nextIfAbsent:", "error:"],
referencedClasses: []
}),
globals.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "nextIfAbsent:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
var result;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(self["@read"])._at_put_(self["@readIndex"],nil);
self["@readIndex"]=_st(self["@readIndex"]).__plus((1));
$4=result;
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextIfAbsent:",{aBlock:aBlock,result:result},globals.Queue)})},
args: ["aBlock"],
source: "nextIfAbsent: aBlock\x0a\x09| result |\x0a\x09result := read at: readIndex ifAbsent: [\x0a\x09\x09write isEmpty ifTrue: [\x0a\x09\x09\x09readIndex > 1 ifTrue: [ read := #(). readIndex := 1 ].\x0a\x09\x09\x09^ aBlock value ].\x0a\x09\x09read := write.\x0a\x09\x09readIndex := 1.\x0a\x09\x09write := OrderedCollection new.\x0a\x09\x09read first ].\x0a\x09read at: readIndex put: nil.\x0a\x09readIndex := readIndex + 1.\x0a\x09^ result",
messageSends: ["at:ifAbsent:", "ifTrue:", "isEmpty", ">", "value", "new", "first", "at:put:", "+"],
referencedClasses: ["OrderedCollection"]
}),
globals.Queue);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@write"])._add_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},globals.Queue)})},
args: ["anObject"],
source: "nextPut: anObject\x0a\x09write add: anObject",
messageSends: ["add:"],
referencedClasses: []
}),
globals.Queue);



smalltalk.addClass('RegularExpression', globals.Object, [], 'Kernel-Collections');
globals.RegularExpression.comment="I represent a regular expression object. My instances are JavaScript `RegExp` object.";
smalltalk.addMethod(
smalltalk.method({
selector: "compile:",
protocol: 'evaluating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.compile(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},globals.RegularExpression)})},
args: ["aString"],
source: "compile: aString\x0a\x09<return self.compile(aString)>",
messageSends: [],
referencedClasses: []
}),
globals.RegularExpression);

smalltalk.addMethod(
smalltalk.method({
selector: "exec:",
protocol: 'evaluating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.exec(aString) || nil;
return self}, function($ctx1) {$ctx1.fill(self,"exec:",{aString:aString},globals.RegularExpression)})},
args: ["aString"],
source: "exec: aString\x0a\x09<return self.exec(aString) || nil>",
messageSends: [],
referencedClasses: []
}),
globals.RegularExpression);

smalltalk.addMethod(
smalltalk.method({
selector: "test:",
protocol: 'evaluating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.test(aString);
return self}, function($ctx1) {$ctx1.fill(self,"test:",{aString:aString},globals.RegularExpression)})},
args: ["aString"],
source: "test: aString\x0a\x09<return self.test(aString)>",
messageSends: [],
referencedClasses: []
}),
globals.RegularExpression);


smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._fromString_flag_(aString,"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},globals.RegularExpression.klass)})},
args: ["aString"],
source: "fromString: aString\x0a\x09\x09^ self fromString: aString flag: ''",
messageSends: ["fromString:flag:"],
referencedClasses: []
}),
globals.RegularExpression.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:flag:",
protocol: 'instance creation',
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new RegExp(aString, anotherString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:flag:",{aString:aString,anotherString:anotherString},globals.RegularExpression.klass)})},
args: ["aString", "anotherString"],
source: "fromString: aString flag: anotherString\x0a\x09<return new RegExp(aString, anotherString)>",
messageSends: [],
referencedClasses: []
}),
globals.RegularExpression.klass);


smalltalk.addClass('Stream', globals.Object, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
globals.Stream.comment="I represent an accessor for a sequence of objects. This sequence is referred to as my \x22contents\x22.\x0aMy instances are read/write streams to the contents sequence collection.";
smalltalk.addMethod(
smalltalk.method({
selector: "<<",
protocol: 'writing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._write_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"<<",{anObject:anObject},globals.Stream)})},
args: ["anObject"],
source: "<< anObject\x0a\x09self write: anObject",
messageSends: ["write:"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "atEnd",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position()).__eq(self._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},globals.Stream)})},
args: [],
source: "atEnd\x0a\x09^ self position = self size",
messageSends: ["=", "position", "size"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "atStart",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atStart",{},globals.Stream)})},
args: [],
source: "atStart\x0a\x09^ self position = 0",
messageSends: ["=", "position"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "close",
messageSends: [],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "collection",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@collection"];
return $1;
},
args: [],
source: "collection\x0a\x09^ collection",
messageSends: [],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collection())._copyFrom_to_((1),self._streamSize());
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},globals.Stream)})},
args: [],
source: "contents\x0a\x09^ self collection\x0a\x09\x09copyFrom: 1\x0a\x09\x09to: self streamSize",
messageSends: ["copyFrom:to:", "collection", "streamSize"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(self._next());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},globals.Stream)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09[ self atEnd ] whileFalse: [ aBlock value: self next ]",
messageSends: ["whileFalse:", "atEnd", "value:", "next"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "flush",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "flush",
messageSends: [],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "isEmpty",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._size()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},globals.Stream)})},
args: [],
source: "isEmpty\x0a\x09^ self size = 0",
messageSends: ["=", "size"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
protocol: 'reading',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1;
$2=self._atEnd();
if(smalltalk.assert($2)){
$1=nil;
} else {
$4=self._position();
$ctx1.sendIdx["position"]=1;
$3=_st($4).__plus((1));
self._position_($3);
$1=_st(self["@collection"])._at_(self._position());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},globals.Stream)})},
args: [],
source: "next\x0a\x09^ self atEnd\x0a\x09\x09ifTrue: [ nil ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self position: self position + 1.\x0a\x09\x09\x09collection at: self position ]",
messageSends: ["ifTrue:ifFalse:", "atEnd", "position:", "+", "position", "at:"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
protocol: 'reading',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=tempCollection;
return $2;
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger,tempCollection:tempCollection},globals.Stream)})},
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09\x09self atEnd ifFalse: [\x0a\x09\x09tempCollection add: self next ]].\x0a\x09^ tempCollection",
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "atEnd", "add:", "next"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
protocol: 'writing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
$2=self._position();
$ctx1.sendIdx["position"]=1;
$1=_st($2).__plus((1));
self._position_($1);
$3=self._collection();
$4=self._position();
$ctx1.sendIdx["position"]=2;
_st($3)._at_put_($4,anObject);
self._setStreamSize_(_st(self._streamSize())._max_(self._position()));
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},globals.Stream)})},
args: ["anObject"],
source: "nextPut: anObject\x0a\x09self position: self position + 1.\x0a\x09self collection at: self position put: anObject.\x0a\x09self setStreamSize: (self streamSize max: self position)",
messageSends: ["position:", "+", "position", "at:put:", "collection", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
protocol: 'writing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._nextPut_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aCollection:aCollection},globals.Stream)})},
args: ["aCollection"],
source: "nextPutAll: aCollection\x0a\x09aCollection do: [ :each |\x0a\x09\x09self nextPut: each ]",
messageSends: ["do:", "nextPut:"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutString:",
protocol: 'writing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPut_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString},globals.Stream)})},
args: ["aString"],
source: "nextPutString: aString\x0a\x09self nextPut: aString",
messageSends: ["nextPut:"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "peek",
protocol: 'reading',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._atEnd();
if(! smalltalk.assert($2)){
$1=_st(self._collection())._at_(_st(self._position()).__plus((1)));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"peek",{},globals.Stream)})},
args: [],
source: "peek\x0a\x09^ self atEnd ifFalse: [\x0a\x09\x09self collection at: self position + 1 ]",
messageSends: ["ifFalse:", "atEnd", "at:", "collection", "+", "position"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@position"];
if(($receiver = $2) == null || $receiver.isNil){
self["@position"]=(0);
$1=self["@position"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},globals.Stream)})},
args: [],
source: "position\x0a\x09^ position ifNil: [ position := 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@position"]=anInteger;
return self},
args: ["anInteger"],
source: "position: anInteger\x0a\x09position := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_((0));
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},globals.Stream)})},
args: [],
source: "reset\x0a\x09self position: 0",
messageSends: ["position:"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "resetContents",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._reset();
self._setStreamSize_((0));
return self}, function($ctx1) {$ctx1.fill(self,"resetContents",{},globals.Stream)})},
args: [],
source: "resetContents\x0a\x09self reset.\x0a\x09self setStreamSize: 0",
messageSends: ["reset", "setStreamSize:"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setCollection:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@collection"]=aCollection;
return self},
args: ["aCollection"],
source: "setCollection: aCollection\x0a\x09collection := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setStreamSize:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@streamSize"]=anInteger;
return self},
args: ["anInteger"],
source: "setStreamSize: anInteger\x0a\x09streamSize := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "setToEnd",
protocol: 'positioning',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_(self._size());
return self}, function($ctx1) {$ctx1.fill(self,"setToEnd",{},globals.Stream)})},
args: [],
source: "setToEnd\x0a\x09self position: self size",
messageSends: ["position:", "size"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._streamSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},globals.Stream)})},
args: [],
source: "size\x0a\x09^ self streamSize",
messageSends: ["streamSize"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "skip:",
protocol: 'positioning',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_(_st(_st(self._position()).__plus(anInteger))._min_max_(self._size(),(0)));
return self}, function($ctx1) {$ctx1.fill(self,"skip:",{anInteger:anInteger},globals.Stream)})},
args: ["anInteger"],
source: "skip: anInteger\x0a\x09self position: ((self position + anInteger) min: self size max: 0)",
messageSends: ["position:", "min:max:", "+", "position", "size"],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "streamSize",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@streamSize"];
return $1;
},
args: [],
source: "streamSize\x0a\x09^ streamSize",
messageSends: [],
referencedClasses: []
}),
globals.Stream);

smalltalk.addMethod(
smalltalk.method({
selector: "write:",
protocol: 'writing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObject)._putOn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"write:",{anObject:anObject},globals.Stream)})},
args: ["anObject"],
source: "write: anObject\x0a\x09anObject putOn: self",
messageSends: ["putOn:"],
referencedClasses: []
}),
globals.Stream);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},globals.Stream.klass)})},
args: ["aCollection"],
source: "on: aCollection\x0a\x09\x09^ self new\x0a\x09\x09setCollection: aCollection;\x0a\x09\x09setStreamSize: aCollection size;\x0a\x09\x09yourself",
messageSends: ["setCollection:", "new", "setStreamSize:", "size", "yourself"],
referencedClasses: []
}),
globals.Stream.klass);


smalltalk.addClass('StringStream', globals.Stream, [], 'Kernel-Collections');
globals.StringStream.comment="I am a Stream specific to `String` objects.";
smalltalk.addMethod(
smalltalk.method({
selector: "cr",
protocol: 'writing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextPutAll_(_st($String())._cr());
return $1;
}, function($ctx1) {$ctx1.fill(self,"cr",{},globals.StringStream)})},
args: [],
source: "cr\x0a\x09^ self nextPutAll: String cr",
messageSends: ["nextPutAll:", "cr"],
referencedClasses: ["String"]
}),
globals.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "crlf",
protocol: 'writing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextPutAll_(_st($String())._crlf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"crlf",{},globals.StringStream)})},
args: [],
source: "crlf\x0a\x09^ self nextPutAll: String crlf",
messageSends: ["nextPutAll:", "crlf"],
referencedClasses: ["String"]
}),
globals.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "lf",
protocol: 'writing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextPutAll_(_st($String())._lf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"lf",{},globals.StringStream)})},
args: [],
source: "lf\x0a\x09^ self nextPutAll: String lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: ["String"]
}),
globals.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
protocol: 'reading',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=tempCollection;
return $2;
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger,tempCollection:tempCollection},globals.StringStream)})},
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09\x09self atEnd ifFalse: [\x0a\x09\x09tempCollection := tempCollection, self next ]].\x0a\x09^ tempCollection",
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "atEnd", ",", "next"],
referencedClasses: []
}),
globals.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPut:",
protocol: 'writing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{aString:aString},globals.StringStream)})},
args: ["aString"],
source: "nextPut: aString\x0a\x09self nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
globals.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
protocol: 'writing',
fn: function (aString){
var self=this;
var pre,post;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5,$6,$9,$8,$10,$7,$11,$12,$14,$13;
$1=self._atEnd();
if(smalltalk.assert($1)){
$3=self._collection();
$ctx1.sendIdx["collection"]=1;
$2=_st($3).__comma(aString);
$ctx1.sendIdx[","]=1;
self._setCollection_($2);
$ctx1.sendIdx["setCollection:"]=1;
} else {
$4=self._collection();
$ctx1.sendIdx["collection"]=2;
$5=self._position();
$ctx1.sendIdx["position"]=1;
pre=_st($4)._copyFrom_to_((1),$5);
$ctx1.sendIdx["copyFrom:to:"]=1;
pre;
$6=self._collection();
$ctx1.sendIdx["collection"]=3;
$9=self._position();
$ctx1.sendIdx["position"]=2;
$8=_st($9).__plus((1));
$ctx1.sendIdx["+"]=2;
$10=_st(aString)._size();
$ctx1.sendIdx["size"]=1;
$7=_st($8).__plus($10);
$ctx1.sendIdx["+"]=1;
$11=_st(self._collection())._size();
$ctx1.sendIdx["size"]=2;
post=_st($6)._copyFrom_to_($7,$11);
post;
$12=_st(_st(pre).__comma(aString)).__comma(post);
$ctx1.sendIdx[","]=2;
self._setCollection_($12);
};
$14=self._position();
$ctx1.sendIdx["position"]=3;
$13=_st($14).__plus(_st(aString)._size());
self._position_($13);
self._setStreamSize_(_st(self._streamSize())._max_(self._position()));
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString,pre:pre,post:post},globals.StringStream)})},
args: ["aString"],
source: "nextPutAll: aString\x0a\x09| pre post |\x0a\x09self atEnd ifTrue: [ self setCollection: self collection, aString ] ifFalse: [\x0a\x09\x09pre := self collection copyFrom: 1 to: self position.\x0a\x09\x09post := self collection copyFrom: (self position + 1 + aString size) to: self collection size.\x0a\x09\x09self setCollection: pre, aString, post\x0a\x09].\x0a\x09self position: self position + aString size.\x0a\x09self setStreamSize: (self streamSize max: self position)",
messageSends: ["ifTrue:ifFalse:", "atEnd", "setCollection:", ",", "collection", "copyFrom:to:", "position", "+", "size", "position:", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
globals.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutString:",
protocol: 'writing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString},globals.StringStream)})},
args: ["aString"],
source: "nextPutString: aString\x0a\x09self nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
globals.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
protocol: 'writing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nextPut_(" ");
return self}, function($ctx1) {$ctx1.fill(self,"space",{},globals.StringStream)})},
args: [],
source: "space\x0a\x09self nextPut: ' '",
messageSends: ["nextPut:"],
referencedClasses: []
}),
globals.StringStream);

smalltalk.addMethod(
smalltalk.method({
selector: "tab",
protocol: 'writing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._nextPutAll_(_st($String())._tab());
return $1;
}, function($ctx1) {$ctx1.fill(self,"tab",{},globals.StringStream)})},
args: [],
source: "tab\x0a\x09^ self nextPutAll: String tab",
messageSends: ["nextPutAll:", "tab"],
referencedClasses: ["String"]
}),
globals.StringStream);


});
