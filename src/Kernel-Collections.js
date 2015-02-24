define("amber_core/Kernel-Collections", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Kernel-Collections');
$core.packages["Kernel-Collections"].innerEval = function (expr) { return eval(expr); };
$core.packages["Kernel-Collections"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('Association', $globals.Object, ['key', 'value'], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Association.comment="I represent a pair of associated objects, a key and a value. My instances can serve as entries in a dictionary.\x0a\x0aInstances can be created with the class-side method `#key:value:`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (anAssociation){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$5,$4,$6,$1;
$3=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq($recv(anAssociation)._class());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=self._key();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["key"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq($recv(anAssociation)._key());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
return $recv($4)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$6=self._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["value"]=1;
//>>excludeEnd("ctx");
return $recv($6).__eq($recv(anAssociation)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anAssociation:anAssociation},$globals.Association)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAssociation"],
source: "= anAssociation\x0a\x09^ self class = anAssociation class and: [\x0a\x09\x09self key = anAssociation key and: [\x0a\x09\x09self value = anAssociation value ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "=", "class", "key", "value"]
}),
$globals.Association);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@key"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ key",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Association);

$core.addMethod(
$core.method({
selector: "key:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
self["@key"]=aKey;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "key: aKey\x0a\x09key := aKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Association);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._key())._printOn_(aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printOn:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(" -> ");
$recv(self._value())._printOn_(aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Association)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09self key printOn: aStream.\x0a\x09aStream nextPutAll: ' -> '.\x0a\x09self value printOn: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "key", "nextPutAll:", "value"]
}),
$globals.Association);

$core.addMethod(
$core.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@value"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Association);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
self["@value"]=aValue;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "value: aValue\x0a\x09value := aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Association);


$core.addMethod(
$core.method({
selector: "key:value:",
protocol: 'instance creation',
fn: function (aKey,aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._key_(aKey);
$recv($2)._value_(aValue);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"key:value:",{aKey:aKey,aValue:aValue},$globals.Association.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aValue"],
source: "key: aKey value: aValue\x0a\x09\x09^ self new\x0a\x09\x09key: aKey;\x0a\x09\x09value: aValue;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["key:", "new", "value:", "yourself"]
}),
$globals.Association.klass);


$core.addClass('BucketStore', $globals.Object, ['buckets', 'hashBlock'], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BucketStore.comment="I am an helper class for hash-based stores.\x0a\x0aI hold buckets which are selected by a hash, specified using `#hashBlock:`.\x0aThe hash can be any object, and\x0ait is used as a JS property (that is, in ES5\x0aits toString() value counts).\x0a\x0a## API\x0aI maintain a list of buckets. Client code can use this API:\x0a - `#bucketOfElement:` (to ask a bucket for element, I can return JS null if n/a)\x0a - `#do:` (to enumerate all elements of all buckets)\x0a - `#removeAll` (to remove all buckets)\x0a\x0aClient code itself should add/remove elements\x0ain a bucket. The `nil` object should not be put into any bucket.\x0a\x0aTypes of buckets are the responsibility of subclasses via `#newBucket`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "bucketOfElement:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var hash = self['@hashBlock'](anObject);
		if (!hash) return null;
		var buckets = self['@buckets'],
			bucket = buckets[hash];
		if (!bucket) { bucket = buckets[hash] = self._newBucket(); }
		return bucket;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bucketOfElement:",{anObject:anObject},$globals.BucketStore)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "bucketOfElement: anObject\x0a\x09<\x0a\x09\x09var hash = self['@hashBlock'](anObject);\x0a\x09\x09if (!hash) return null;\x0a\x09\x09var buckets = self['@buckets'],\x0a\x09\x09\x09bucket = buckets[hash];\x0a\x09\x09if (!bucket) { bucket = buckets[hash] = self._newBucket(); }\x0a\x09\x09return bucket;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BucketStore);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var buckets = self['@buckets'];
		var keys = Object.keys(buckets);
		for (var i = 0; i < keys.length; ++i) { buckets[keys[i]]._do_(aBlock); }
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.BucketStore)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09<\x0a\x09\x09var buckets = self['@buckets'];\x0a\x09\x09var keys = Object.keys(buckets);\x0a\x09\x09for (var i = 0; i < keys.length; ++i) { buckets[keys[i]]._do_(aBlock); }\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BucketStore);

$core.addMethod(
$core.method({
selector: "hashBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@hashBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "hashBlock: aBlock\x0a\x09hashBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BucketStore);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.BucketStore.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._removeAll();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.BucketStore)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self removeAll",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "removeAll"]
}),
$globals.BucketStore);

$core.addMethod(
$core.method({
selector: "newBucket",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newBucket",{},$globals.BucketStore)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newBucket\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.BucketStore);

$core.addMethod(
$core.method({
selector: "removeAll",
protocol: 'adding/removing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self['@buckets'] = Object.create(null);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeAll",{},$globals.BucketStore)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeAll\x0a\x09<self['@buckets'] = Object.create(null);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BucketStore);


$core.addMethod(
$core.method({
selector: "hashBlock:",
protocol: 'instance creation',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._hashBlock_(aBlock);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hashBlock:",{aBlock:aBlock},$globals.BucketStore.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "hashBlock: aBlock\x0a\x09^ self new\x0a\x09\x09hashBlock: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hashBlock:", "new", "yourself"]
}),
$globals.BucketStore.klass);


$core.addClass('ArrayBucketStore', $globals.BucketStore, [], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ArrayBucketStore.comment="I am a concrete `BucketStore` with buckets being instance of `Array`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "newBucket",
protocol: 'private',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newBucket\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArrayBucketStore);



$core.addClass('Collection', $globals.Object, [], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Collection.comment="I am the abstract superclass of all classes that represent a group of elements.\x0a\x0aI provide a set of useful methods to the Collection hierarchy such as enumerating and converting methods.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: ",",
protocol: 'copying',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._copy();
$recv($2)._addAll_(aCollection);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,",",{aCollection:aCollection},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: ", aCollection\x0a\x09^ self copy\x0a\x09\x09addAll: aCollection;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addAll:", "copy", "yourself"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "addAll:",
protocol: 'adding/removing',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return aCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addAll:",{aCollection:aCollection},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "addAll: aCollection\x0a\x09aCollection do: [ :each |\x0a\x09\x09self add: each ].\x0a\x09^ aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "add:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "allSatisfy:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(aBlock)._value_(each);
if(!$core.assert($1)){
throw $early=[false];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSatisfy:",{aBlock:aBlock},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "allSatisfy: aBlock\x0a\x09\x22Evaluate aBlock with the elements of the receiver.\x0a\x09If aBlock returns false for any element return false.\x0a\x09Otherwise return true.\x22\x0a\x0a\x09self do: [ :each | (aBlock value: each) ifFalse: [ ^ false ] ].\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifFalse:", "value:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "anyOne",
protocol: 'adding/removing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
self._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("Collection is empty");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._do_((function(each){
throw $early=[each];

}));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"anyOne",{},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "anyOne\x0a\x09\x22Answer a representative sample of the receiver. This method can\x0a\x09be helpful when needing to preinfer the nature of the contents of \x0a\x09semi-homogeneous collections.\x22\x0a\x0a\x09self ifEmpty: [ self error: 'Collection is empty' ].\x0a\x09self do: [ :each | ^ each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifEmpty:", "error:", "do:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "anySatisfy:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(aBlock)._value_(each);
if($core.assert($1)){
throw $early=[true];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"anySatisfy:",{aBlock:aBlock},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "anySatisfy: aBlock\x0a\x09\x22Evaluate aBlock with the elements of the receiver.\x0a\x09If aBlock returns true for any element return true.\x0a\x09Otherwise return false.\x22\x0a\x0a\x09self do: [ :each | (aBlock value: each) ifTrue: [ ^ true ] ].\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:", "value:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "asArray",
protocol: 'converting',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Array())._withAll_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asArray",{},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asArray\x0a\x09^ Array withAll: self",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["withAll:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._asArray())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._asJSON();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09^ self asArray collect: [ :each | each asJSON ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "asArray", "asJSON"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "asOrderedCollection",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._asArray();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asOrderedCollection",{},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asOrderedCollection\x0a\x09^ self asArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asArray"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "asSet",
protocol: 'converting',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Set())._withAll_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSet",{},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSet\x0a\x09^ Set withAll: self",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["withAll:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "collect:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
stream=$recv($recv(self._class())._new())._writeStream();
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_($recv(aBlock)._value_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv(stream)._contents();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,stream:stream},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [ :each |\x0a\x09\x09stream nextPut: (aBlock value: each) ].\x0a\x09^ stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeStream", "new", "class", "do:", "nextPut:", "value:", "contents"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "copyWith:",
protocol: 'copying',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._copy();
$recv($2)._add_(anObject);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyWith:",{anObject:anObject},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "copyWith: anObject\x0a\x09^ self copy add: anObject; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "copy", "yourself"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "copyWithAll:",
protocol: 'copying',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._copy();
$recv($2)._addAll_(aCollection);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyWithAll:",{aCollection:aCollection},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "copyWithAll: aCollection\x0a\x09^ self copy addAll: aCollection; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addAll:", "copy", "yourself"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "copyWithoutAll:",
protocol: 'copying',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aCollection)._includes_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyWithoutAll:",{aCollection:aCollection},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "copyWithoutAll: aCollection\x0a\x09\x22Answer a copy of the receiver that does not contain any elements\x0a\x09equal to those in aCollection.\x22\x0a\x0a\x09^ self reject: [ :each | aCollection includes: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reject:", "includes:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "detect:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._detect_ifNone_(aBlock,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._errorNotFound();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"detect:",{aBlock:aBlock},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "detect: aBlock\x0a\x09^ self detect: aBlock ifNone: [ self errorNotFound ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "errorNotFound"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "detect:ifNone:",
protocol: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "do:separatedBy:",
protocol: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
var actionBeforeElement;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
actionBeforeElement=(function(){
actionBeforeElement=anotherBlock;
return actionBeforeElement;

});
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(actionBeforeElement)._value();
return $recv(aBlock)._value_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:separatedBy:",{aBlock:aBlock,anotherBlock:anotherBlock,actionBeforeElement:actionBeforeElement},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "do: aBlock separatedBy: anotherBlock\x0a\x09| actionBeforeElement |\x0a\x09actionBeforeElement := [ actionBeforeElement := anotherBlock ].\x0a\x09self do: [ :each |\x0a\x09\x09actionBeforeElement value.\x0a\x09\x09aBlock value: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "value", "value:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "errorNotFound",
protocol: 'error handling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._error_("Object is not in the collection");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorNotFound",{},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "errorNotFound\x0a\x09self error: 'Object is not in the collection'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "ifEmpty:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._isEmpty();
$1=$recv($2)._ifTrue_ifFalse_(aBlock,(function(){
return self;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifEmpty:",{aBlock:aBlock},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifEmpty: aBlock\x0a\x09\x22Evaluate the given block with the receiver as argument, answering its value if the receiver is empty, otherwise answer the receiver. \x0a\x09Note that the fact that this method returns its argument in case the receiver is not empty allows one to write expressions like the following ones: \x0a\x09\x09self classifyMethodAs:\x0a\x09\x09\x09(myProtocol ifEmpty: ['As yet unclassified'])\x22\x0a\x09^ self isEmpty\x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: [ self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isEmpty"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "ifEmpty:ifNotEmpty:",
protocol: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._isEmpty();
$1=$recv($2)._ifTrue_ifFalse_(aBlock,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anotherBlock)._value_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifEmpty:ifNotEmpty:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifEmpty: aBlock ifNotEmpty: anotherBlock\x0a\x09^ self isEmpty\x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: [ anotherBlock value: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isEmpty", "value:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "ifNotEmpty:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._notEmpty();
if($core.assert($2)){
$1=$recv(aBlock)._value_(self);
} else {
$1=self;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotEmpty:",{aBlock:aBlock},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifNotEmpty: aBlock\x0a\x09^ self notEmpty\x0a\x09\x09ifTrue: [ aBlock value: self ]\x0a\x09\x09ifFalse: [ self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "notEmpty", "value:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "ifNotEmpty:ifEmpty:",
protocol: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._notEmpty();
$1=$recv($2)._ifTrue_ifFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),anotherBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotEmpty:ifEmpty:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifNotEmpty: aBlock ifEmpty: anotherBlock\x0a\x09^ self notEmpty\x0a\x09\x09ifTrue: [ aBlock value: self ]\x0a\x09\x09ifFalse: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "notEmpty", "value:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "includes:",
protocol: 'testing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "includes: anObject\x0a\x09^ self anySatisfy: [ :each | each = anObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["anySatisfy:", "="]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "inject:into:",
protocol: 'enumerating',
fn: function (anObject,aBlock){
var self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
result=anObject;
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
result=$recv(aBlock)._value_value_(result,each);
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=result;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inject:into:",{anObject:anObject,aBlock:aBlock,result:result},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "inject: anObject into: aBlock\x0a\x09| result |\x0a\x09result := anObject.\x0a\x09self do: [ :each |\x0a\x09\x09result := aBlock value: result value: each ].\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "value:value:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "intersection:",
protocol: 'enumerating',
fn: function (aCollection){
var self=this;
var set,outputSet;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
set=self._asSet();
outputSet=$recv($Set())._new();
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(set)._includes_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["includes:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(outputSet)._includes_(each))._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return $recv(outputSet)._add_(each);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$3=$recv(self._class())._withAll_($recv(outputSet)._asArray());
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"intersection:",{aCollection:aCollection,set:set,outputSet:outputSet},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "intersection: aCollection\x0a\x09\x22Answer the set theoretic intersection of two collections.\x22\x0a\x0a\x09| set outputSet |\x0a\x09\x0a\x09set := self asSet.\x0a\x09outputSet := Set new.\x0a\x09\x0a\x09aCollection do: [ :each |\x0a\x09\x09((set includes: each) and: [ (outputSet includes: each) not ])\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09outputSet add: each ]].\x0a\x09\x09\x0a\x09^ self class withAll: outputSet asArray",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["asSet", "new", "do:", "ifTrue:", "and:", "includes:", "not", "add:", "withAll:", "class", "asArray"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "isEmpty",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._size()).__eq((0));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEmpty\x0a\x09^ self size = 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "size"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "noneSatisfy:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
self._do_((function(item){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(aBlock)._value_(item);
if($core.assert($1)){
throw $early=[false];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({item:item},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"noneSatisfy:",{aBlock:aBlock},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "noneSatisfy: aBlock\x0a\x09\x22Evaluate aBlock with the elements of the receiver.\x0a\x09If aBlock returns false for all elements return true.\x0a\x09Otherwise return false\x22\x0a\x0a\x09self do: [ :item | (aBlock value: item) ifTrue: [ ^ false ] ].\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:", "value:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "notEmpty",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._isEmpty())._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notEmpty",{},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notEmpty\x0a\x09^ self isEmpty not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "isEmpty"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "occurrencesOf:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
var tally;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
tally=(0);
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(anObject).__eq(each);
if($core.assert($1)){
tally=$recv(tally).__plus((1));
return tally;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=tally;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"occurrencesOf:",{anObject:anObject,tally:tally},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "occurrencesOf: anObject\x0a\x09\x22Answer how many of the receiver's elements are equal to anObject.\x22\x0a\x0a\x09| tally |\x0a\x09tally := 0.\x0a\x09self do: [ :each | anObject = each ifTrue: [ tally := tally + 1 ]].\x0a\x09^ tally",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:", "=", "+"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "putOn:",
protocol: 'streaming',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._putOn_(aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "putOn: aStream\x0a\x09self do: [ :each | each putOn: aStream ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "putOn:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "reject:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aBlock)._value_(each)).__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reject:",{aBlock:aBlock},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "reject: aBlock\x0a\x09^ self select: [ :each | (aBlock value: each) = false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "=", "value:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "remove:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._remove_ifAbsent_(anObject,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._errorNotFound();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "remove: anObject\x0a\x09^ self remove: anObject ifAbsent: [ self errorNotFound ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "errorNotFound"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "remove:ifAbsent:",
protocol: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "removeAll",
protocol: 'adding/removing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeAll",{},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeAll\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "select:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
stream=$recv($recv(self._class())._new())._writeStream();
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(aBlock)._value_(each);
if($core.assert($1)){
return $recv(stream)._nextPut_(each);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv(stream)._contents();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,stream:stream},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "select: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [ :each |\x0a\x09\x09(aBlock value: each) ifTrue: [\x0a\x09\x09stream nextPut: each ] ].\x0a\x09^ stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "value:", "nextPut:", "contents"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "select:thenCollect:",
protocol: 'enumerating',
fn: function (selectBlock,collectBlock){
var self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
stream=$recv($recv(self._class())._new())._writeStream();
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(selectBlock)._value_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
return $recv(stream)._nextPut_($recv(collectBlock)._value_(each));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv(stream)._contents();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:thenCollect:",{selectBlock:selectBlock,collectBlock:collectBlock,stream:stream},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selectBlock", "collectBlock"],
source: "select: selectBlock thenCollect: collectBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [ :each |\x0a\x09\x09(selectBlock value: each) ifTrue: [\x0a\x09\x09stream nextPut: (collectBlock value: each) ] ].\x0a\x09^ stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "value:", "nextPut:", "contents"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Collection);


$core.addMethod(
$core.method({
selector: "classTag",
protocol: 'accessing',
fn: function (){
var self=this;
return "collection";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Returns a tag or general category for this class.\x0a\x09Typically used to help tools do some reflection.\x0a\x09Helios, for example, uses this to decide what icon the class should display.\x22\x0a\x09\x0a\x09^ 'collection'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Collection.klass);

$core.addMethod(
$core.method({
selector: "new:",
protocol: 'instance creation',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger},$globals.Collection.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "new: anInteger\x0a\x09^ self new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Collection.klass);

$core.addMethod(
$core.method({
selector: "with:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._add_(anObject);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},$globals.Collection.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "with: anObject\x0a\x09\x09^ self new\x0a\x09\x09add: anObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "new", "yourself"]
}),
$globals.Collection.klass);

$core.addMethod(
$core.method({
selector: "with:with:",
protocol: 'instance creation',
fn: function (anObject,anotherObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._add_(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($2)._add_(anotherObject);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:with:",{anObject:anObject,anotherObject:anotherObject},$globals.Collection.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anotherObject"],
source: "with: anObject with: anotherObject\x0a\x09\x09^ self new\x0a\x09\x09add: anObject;\x0a\x09\x09add: anotherObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "new", "yourself"]
}),
$globals.Collection.klass);

$core.addMethod(
$core.method({
selector: "with:with:with:",
protocol: 'instance creation',
fn: function (firstObject,secondObject,thirdObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._add_(firstObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($2)._add_(secondObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv($2)._add_(thirdObject);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:with:with:",{firstObject:firstObject,secondObject:secondObject,thirdObject:thirdObject},$globals.Collection.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstObject", "secondObject", "thirdObject"],
source: "with: firstObject with: secondObject with: thirdObject\x0a\x09\x09^ self new\x0a\x09\x09add: firstObject;\x0a\x09\x09add: secondObject;\x0a\x09\x09add: thirdObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "new", "yourself"]
}),
$globals.Collection.klass);

$core.addMethod(
$core.method({
selector: "withAll:",
protocol: 'instance creation',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._addAll_(aCollection);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withAll:",{aCollection:aCollection},$globals.Collection.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09\x09^ self new\x0a\x09\x09addAll: aCollection;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addAll:", "new", "yourself"]
}),
$globals.Collection.klass);


$core.addClass('IndexableCollection', $globals.Collection, [], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IndexableCollection.comment="I am a key-value store collection, that is,\x0aI store values under indexes.\x0a\x0aAs a rule of thumb, if a collection has `#at:` and `#at:put:`,\x0ait is an IndexableCollection.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "at:",
protocol: 'accessing',
fn: function (anIndex){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_ifAbsent_(anIndex,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._errorNotFound();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{anIndex:anIndex},$globals.IndexableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "at: anIndex\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value stored at anIndex.\x0a\x09Otherwise, raise an error.\x22\x0a\x0a\x09^ self at: anIndex ifAbsent: [ self errorNotFound ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "errorNotFound"]
}),
$globals.IndexableCollection);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},$globals.IndexableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value stored at anIndex.\x0a\x09Otherwise, answer the value of aBlock.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.IndexableCollection);

$core.addMethod(
$core.method({
selector: "at:ifAbsentPut:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_ifAbsent_(aKey,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._at_put_(aKey,$recv(aBlock)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsentPut:",{aKey:aKey,aBlock:aBlock},$globals.IndexableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsentPut: aBlock\x0a\x09^ self at: aKey ifAbsent: [\x0a\x09\x09self at: aKey put: aBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "at:put:", "value"]
}),
$globals.IndexableCollection);

$core.addMethod(
$core.method({
selector: "at:ifPresent:",
protocol: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_ifPresent_ifAbsent_(anIndex,aBlock,(function(){
return nil;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{anIndex:anIndex,aBlock:aBlock},$globals.IndexableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock"],
source: "at: anIndex ifPresent: aBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value of evaluating aBlock with the value stored at anIndex.\x0a\x09Otherwise, answer nil.\x22\x0a\x0a\x09^ self at: anIndex ifPresent: aBlock ifAbsent: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:ifAbsent:"]
}),
$globals.IndexableCollection);

$core.addMethod(
$core.method({
selector: "at:ifPresent:ifAbsent:",
protocol: 'accessing',
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},$globals.IndexableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock", "anotherBlock"],
source: "at: anIndex ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value of evaluating aBlock with the value stored at anIndex.\x0a\x09Otherwise, answer the value of anotherBlock.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.IndexableCollection);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (anIndex,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},$globals.IndexableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09\x22Store anObject under the given index in the receiver.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.IndexableCollection);

$core.addMethod(
$core.method({
selector: "indexOf:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._indexOf_ifAbsent_(anObject,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._errorNotFound();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{anObject:anObject},$globals.IndexableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "indexOf: anObject\x0a\x09\x22Lookup index at which anObject is stored in the receiver.\x0a\x09If not present, raise an error.\x22\x0a\x0a\x09^ self indexOf: anObject ifAbsent: [ self errorNotFound ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:ifAbsent:", "errorNotFound"]
}),
$globals.IndexableCollection);

$core.addMethod(
$core.method({
selector: "indexOf:ifAbsent:",
protocol: 'accessing',
fn: function (anObject,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},$globals.IndexableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09\x22Lookup index at which anObject is stored in the receiver.\x0a\x09If not present, return value of executing aBlock.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.IndexableCollection);

$core.addMethod(
$core.method({
selector: "with:do:",
protocol: 'enumerating',
fn: function (anotherCollection,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._withIndexDo_((function(each,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_value_(each,$recv(anotherCollection)._at_(index));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock},$globals.IndexableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anotherCollection", "aBlock"],
source: "with: anotherCollection do: aBlock\x0a\x09\x22Calls aBlock with every value from self\x0a\x09and with indetically-indexed value from anotherCollection\x22\x0a\x0a\x09self withIndexDo: [ :each :index |\x0a\x09\x09aBlock value: each value: (anotherCollection at: index) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "value:value:", "at:"]
}),
$globals.IndexableCollection);

$core.addMethod(
$core.method({
selector: "withIndexDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},$globals.IndexableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09\x22Calls aBlock with every value from self\x0a\x09and with its index as the second argument\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.IndexableCollection);



$core.addClass('AssociativeCollection', $globals.IndexableCollection, [], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AssociativeCollection.comment="I am a base class for object-indexed collections (Dictionary et.al.).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (anAssocitativeCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5;
$2=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($recv(anAssocitativeCollection)._class());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
return false;
};
$4=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq($recv(anAssocitativeCollection)._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
if(!$core.assert($3)){
return false;
};
$6=self._associations();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["associations"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__eq($recv(anAssocitativeCollection)._associations());
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anAssocitativeCollection:anAssocitativeCollection},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAssocitativeCollection"],
source: "= anAssocitativeCollection\x0a\x09self class = anAssocitativeCollection class ifFalse: [ ^ false ].\x0a\x09self size = anAssocitativeCollection size ifFalse: [ ^ false ].\x0a\x09^ self associations = anAssocitativeCollection associations",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "class", "size", "associations"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anAssociation){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._at_put_($recv(anAssociation)._key(),$recv(anAssociation)._value());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anAssociation:anAssociation},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAssociation"],
source: "add: anAssociation\x0a\x09self at: anAssociation key put: anAssociation value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "key", "value"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "addAll:",
protocol: 'adding/removing',
fn: function (anAssociativeCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AssociativeCollection.superclass.fn.prototype._addAll_.apply($recv(self), [$recv(anAssociativeCollection)._associations()]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return anAssociativeCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addAll:",{anAssociativeCollection:anAssociativeCollection},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAssociativeCollection"],
source: "addAll: anAssociativeCollection\x0a\x09super addAll: anAssociativeCollection associations.\x0a\x09^ anAssociativeCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addAll:", "associations"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "asDictionary",
protocol: 'converting',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Dictionary())._from_(self._associations());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asDictionary",{},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asDictionary\x0a\x09^ Dictionary from: self associations",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["from:", "associations"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "asHashedCollection",
protocol: 'converting',
fn: function (){
var self=this;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($HashedCollection())._from_(self._associations());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asHashedCollection",{},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asHashedCollection\x0a\x09^ HashedCollection from: self associations",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["from:", "associations"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
var hash;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
hash=$recv($HashedCollection())._new();
self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(hash)._at_put_(key,$recv(value)._asJSON());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=hash;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJSON",{hash:hash},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09| hash |\x0a\x09hash := HashedCollection new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09hash at: key put: value asJSON ].\x0a\x09^ hash",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "keysAndValuesDo:", "at:put:", "asJSON"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "associations",
protocol: 'accessing',
fn: function (){
var self=this;
var associations;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
associations=[];
self._associationsDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(associations)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=associations;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"associations",{associations:associations},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "associations\x0a\x09| associations |\x0a\x09associations := #().\x0a\x09self associationsDo: [ :each | associations add: each ].\x0a\x09^ associations",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["associationsDo:", "add:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "associationsDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
function $Association(){return $globals.Association||(typeof Association=="undefined"?nil:Association)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_($recv($Association())._key_value_(key,value));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"associationsDo:",{aBlock:aBlock},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "associationsDo: aBlock\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09aBlock value: (Association key: key value: value) ]",
referencedClasses: ["Association"],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:", "value:", "key:value:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "at:ifPresent:ifAbsent:",
protocol: 'accessing',
fn: function (aKey,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._includesKey_(aKey);
if($core.assert($2)){
$1=$recv(aBlock)._value_(self._at_(aKey));
} else {
$1=$recv(anotherBlock)._value();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aKey:aKey,aBlock:aBlock,anotherBlock:anotherBlock},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock", "anotherBlock"],
source: "at: aKey ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Lookup the given key in the receiver.\x0a\x09If it is present, answer the value of evaluating the oneArgBlock \x0a\x09with the value associated with the key, otherwise answer the value \x0a\x09of absentBlock.\x22\x0a\x09\x0a\x09^ (self includesKey: aKey)\x0a\x09\x09ifTrue: [ aBlock value: (self at: aKey) ]\x0a\x09\x09ifFalse: [ anotherBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "includesKey:", "value:", "at:", "value"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "collect:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
newDict=$recv(self._class())._new();
self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newDict)._at_put_(key,$recv(aBlock)._value_(value));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=newDict;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,newDict:newDict},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09newDict at: key put: (aBlock value: value) ].\x0a\x09^ newDict",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "value:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;
var copy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
copy=$recv(self._class())._new();
self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(copy)._at_put_(key,$recv(value)._deepCopy());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=copy;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{copy:copy},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09copy at: key put: value deepCopy ].\x0a\x09^ copy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "deepCopy"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "detect:ifNone:",
protocol: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._values())._detect_ifNone_(aBlock,anotherBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09^ self values detect: aBlock ifNone: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "values"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._valuesDo_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09self valuesDo: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valuesDo:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "includes:",
protocol: 'enumerating',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._values())._includes_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "includes: anObject\x0a\x09^ self values includes: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:", "values"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "includesKey:",
protocol: 'testing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "includesKey: aKey\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "indexOf:ifAbsent:",
protocol: 'accessing',
fn: function (anObject,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._keys())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._at_(each)).__eq(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09^ self keys \x0a\x09\x09detect: [ :each | (self at: each) = anObject ] \x0a\x09\x09ifNone: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "keys", "=", "at:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "keyAtValue:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._keyAtValue_ifAbsent_(anObject,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._errorNotFound();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyAtValue:",{anObject:anObject},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "keyAtValue: anObject\x0a\x09^ self keyAtValue: anObject ifAbsent: [ self errorNotFound ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keyAtValue:ifAbsent:", "errorNotFound"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "keyAtValue:ifAbsent:",
protocol: 'accessing',
fn: function (anObject,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._indexOf_ifAbsent_(anObject,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyAtValue:ifAbsent:",{anObject:anObject,aBlock:aBlock},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "keyAtValue: anObject ifAbsent: aBlock\x0a\x09^ self indexOf: anObject ifAbsent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:ifAbsent:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "keys",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keys",{},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keys\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "keysAndValuesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._keysDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_value_(each,self._at_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09self keysDo: [ :each |\x0a\x09\x09aBlock value: each value: (self at: each) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysDo:", "value:value:", "at:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "keysDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AssociativeCollection.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printOn:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(" (");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(self._associations())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._printOn_(aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aStream)._nextPutAll_(" , ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self associations\x0a\x09\x09do: [ :each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' , ' ].\x0a\x09aStream nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:", "associations"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "remove:ifAbsent:",
protocol: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._removeKey_ifAbsent_(aKey,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{aKey:aKey,aBlock:aBlock},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "remove: aKey ifAbsent: aBlock\x0a\x09^ self removeKey: aKey ifAbsent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeKey:ifAbsent:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "removeAll",
protocol: 'adding/removing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._keys())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._removeKey_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeAll",{},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeAll\x0a\x09^ self keys do: [ :each | self removeKey: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "keys", "removeKey:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "removeKey:",
protocol: 'adding/removing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._remove_(aKey);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeKey:",{aKey:aKey},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "removeKey: aKey\x0a\x09^ self remove: aKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "removeKey:ifAbsent:",
protocol: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "select:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
newDict=$recv(self._class())._new();
self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(aBlock)._value_(value);
if($core.assert($1)){
return $recv(newDict)._at_put_(key,value);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=newDict;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,newDict:newDict},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "select: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09(aBlock value: value) ifTrue: [ newDict at: key put: value ]].\x0a\x09^ newDict",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "class", "keysAndValuesDo:", "ifTrue:", "value:", "at:put:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "shallowCopy",
protocol: 'copying',
fn: function (){
var self=this;
var copy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
copy=$recv(self._class())._new();
self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(copy)._at_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=copy;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{copy:copy},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shallowCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09copy at: key put: value ].\x0a\x09^ copy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._keys())._size();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ self keys size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "keys"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "values",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"values",{},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "values\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "valuesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "withIndexDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_value_(value,key);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09self keysAndValuesDo: [ :key :value | aBlock value: value value: key ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:", "value:value:"]
}),
$globals.AssociativeCollection);


$core.addMethod(
$core.method({
selector: "from:",
protocol: 'instance creation',
fn: function (aCollection){
var self=this;
var newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
newCollection=self._new();
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newCollection)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=newCollection;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"from:",{aCollection:aCollection,newCollection:newCollection},$globals.AssociativeCollection.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "from: aCollection\x0a\x09| newCollection |\x0a\x09newCollection := self new.\x0a\x09aCollection do: [ :each | newCollection add: each ].\x0a\x09^ newCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "add:"]
}),
$globals.AssociativeCollection.klass);

$core.addMethod(
$core.method({
selector: "fromPairs:",
protocol: 'instance creation',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._from_(aCollection);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromPairs:",{aCollection:aCollection},$globals.AssociativeCollection.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "fromPairs: aCollection\x0a\x09\x22This message is poorly named and has been replaced by #from:\x22\x0a\x09^ self from: aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["from:"]
}),
$globals.AssociativeCollection.klass);

$core.addMethod(
$core.method({
selector: "newFromPairs:",
protocol: 'instance creation',
fn: function (aCollection){
var self=this;
var newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$5;
$2=$recv(aCollection)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._even();
if(!$core.assert($1)){
self._error_("#newFromPairs only accepts arrays of an even length");
};
newCollection=self._new();
$recv((1)._to_by_($recv(aCollection)._size(),(2)))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=newCollection;
$4=$recv(aCollection)._at_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
return $recv($3)._at_put_($4,$recv(aCollection)._at_($recv(each).__plus((1))));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$5=newCollection;
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFromPairs:",{aCollection:aCollection,newCollection:newCollection},$globals.AssociativeCollection.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "newFromPairs: aCollection\x0a\x09\x22Accept an array of elements where every two elements form an \x0a\x09association - the odd element being the key, and the even element the value.\x22\x0a\x09\x0a\x09| newCollection |\x0a\x09\x0a\x09aCollection size even ifFalse: [ \x0a\x09\x09self error: '#newFromPairs only accepts arrays of an even length' ].\x0a\x09\x09\x0a\x09newCollection := self new.\x0a\x09( 1 to: aCollection size by: 2 ) do: [ :each | \x0a\x09\x09newCollection at: (aCollection at: each) put: (aCollection at: each + 1) ].\x0a\x09\x09\x0a\x09^ newCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "even", "size", "error:", "new", "do:", "to:by:", "at:put:", "at:", "+"]
}),
$globals.AssociativeCollection.klass);


$core.addClass('Dictionary', $globals.AssociativeCollection, ['keys', 'values'], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Dictionary.comment="I represent a set of elements that can be viewed from one of two perspectives: a set of associations,\x0aor a container of values that are externally named where the name can be any object that responds to `=`.\x0a\x0aThe external name is referred to as the key.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var index = self._positionOfKey_(aKey);
		return index >=0 ? self['@values'][index] : aBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},$globals.Dictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09<\x0a\x09\x09var index = self._positionOfKey_(aKey);\x0a\x09\x09return index >>=0 ? self['@values'][index] : aBlock._value();\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (aKey,aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var index = self._positionOfKey_(aKey);
		if(index === -1) {
			var keys = self['@keys'];
			index = keys.length;
			keys.push(aKey);
		}

		return self['@values'][index] = aValue;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},$globals.Dictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09<\x0a\x09\x09var index = self._positionOfKey_(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09var keys = self['@keys'];\x0a\x09\x09\x09index = keys.length;\x0a\x09\x09\x09keys.push(aKey);\x0a\x09\x09}\x0a\x0a\x09\x09return self['@values'][index] = aValue;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "includesKey:",
protocol: 'testing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return self._positionOfKey_(aKey) >= 0; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},$globals.Dictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "includesKey: aKey\x0a\x09< return self._positionOfKey_(aKey) >>= 0; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "indexOf:ifAbsent:",
protocol: 'accessing',
fn: function (anObject,aBlock){
var self=this;
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
index=$recv(self["@values"])._indexOf_ifAbsent_(anObject,(function(){
return (0);

}));
$2=$recv(index).__eq((0));
if($core.assert($2)){
$1=$recv(aBlock)._value();
} else {
$1=$recv(self["@keys"])._at_(index);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock,index:index},$globals.Dictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09| index |\x0a\x09index := values \x0a\x09\x09indexOf: anObject \x0a\x09\x09ifAbsent: [ 0 ].\x0a\x09^ index = 0 \x0a\x09\x09ifTrue: [ aBlock value ] \x0a\x09\x09ifFalse: [ keys at: index ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:ifAbsent:", "ifTrue:ifFalse:", "=", "value", "at:"]
}),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Dictionary.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@keys"]=[];
self["@values"]=[];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Dictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09keys := #().\x0a\x09values := #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "keys",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@keys"])._copy();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keys",{},$globals.Dictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keys\x0a\x09^ keys copy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy"]
}),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "keysAndValuesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@keys"])._with_do_(self["@values"],aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},$globals.Dictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09^ keys with: values do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:do:"]
}),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "keysDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@keys"])._do_(aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},$globals.Dictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09^ keys do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:"]
}),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "positionOfKey:",
protocol: 'private',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var keys = self['@keys'];
		for(var i=0;i<keys.length;i++){
			if(keys[i].__eq(anObject)) { return i;}
		}
		return -1;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positionOfKey:",{anObject:anObject},$globals.Dictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "positionOfKey: anObject\x0a\x09<\x0a\x09\x09var keys = self['@keys'];\x0a\x09\x09for(var i=0;i<keys.length;i++){\x0a\x09\x09\x09if(keys[i].__eq(anObject)) { return i;}\x0a\x09\x09}\x0a\x09\x09return -1;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "removeAll",
protocol: 'adding/removing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@keys"])._removeAll();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeAll"]=1;
//>>excludeEnd("ctx");
$recv(self["@values"])._removeAll();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeAll",{},$globals.Dictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeAll\x0a\x09keys removeAll.\x0a\x09values removeAll",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeAll"]
}),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "removeKey:ifAbsent:",
protocol: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

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
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock},$globals.Dictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09<\x0a\x09\x09var index = self._positionOfKey_(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09return aBlock._value()\x0a\x09\x09} else {\x0a\x09\x09\x09var keys = self['@keys'], values = self['@values'];\x0a\x09\x09\x09var value = values[index], l = keys.length;\x0a\x09\x09\x09keys[index] = keys[l-1];\x0a\x09\x09\x09keys.pop();\x0a\x09\x09\x09values[index] = values[l-1];\x0a\x09\x09\x09values.pop();\x0a\x09\x09\x09return value;\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "values",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@values"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "values\x0a\x09^ values",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "valuesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@values"])._do_(aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},$globals.Dictionary)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09^ values do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:"]
}),
$globals.Dictionary);



$core.addClass('HashedCollection', $globals.AssociativeCollection, [], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HashedCollection.comment="I am a traditional JavaScript object, or a Smalltalk `Dictionary`.\x0a\x0aUnlike a `Dictionary`, I can only have strings as keys.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._includesKey_(aKey);
if($core.assert($2)){
$1=self._basicAt_(aKey);
} else {
$1=$recv(aBlock)._value();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},$globals.HashedCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09^ (self includesKey: aKey)\x0a\x09\x09ifTrue: [ self basicAt: aKey ]\x0a\x09\x09ifFalse: [ aBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "includesKey:", "basicAt:", "value"]
}),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (aKey,aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._basicAt_put_(aKey,aValue);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},$globals.HashedCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09^ self basicAt: aKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "includesKey:",
protocol: 'testing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.hasOwnProperty(aKey);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},$globals.HashedCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "includesKey: aKey\x0a\x09<return self.hasOwnProperty(aKey)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "keys",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Object.keys(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keys",{},$globals.HashedCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keys\x0a\x09<return Object.keys(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "keysDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._keys())._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},$globals.HashedCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09self keys do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "keys"]
}),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "removeKey:ifAbsent:",
protocol: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_ifPresent_ifAbsent_(aKey,(function(removed){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._basicDelete_(aKey);
return removed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({removed:removed},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock},$globals.HashedCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09^ self\x0a\x09\x09at: aKey\x0a\x09\x09ifPresent: [ :removed | self basicDelete: aKey. removed ]\x0a\x09\x09ifAbsent: [ aBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:ifAbsent:", "basicDelete:", "value"]
}),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "values",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return self._keys().map(function(key){
			return self._at_(key);
		});
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"values",{},$globals.HashedCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "values\x0a\x09<\x0a\x09\x09return self._keys().map(function(key){\x0a\x09\x09\x09return self._at_(key);\x0a\x09\x09});\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "valuesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._values())._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},$globals.HashedCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09self values do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "values"]
}),
$globals.HashedCollection);



$core.addClass('SequenceableCollection', $globals.IndexableCollection, [], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SequenceableCollection.comment="I am an IndexableCollection\x0awith numeric indexes starting with 1.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$4,$1,$5;
var $early={};
try {
$3=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq($recv(aCollection)._class());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["size"]=1;
//>>excludeEnd("ctx");
return $recv($4).__eq($recv(aCollection)._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if(!$core.assert($1)){
return false;
};
self._withIndexDo_((function(each,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv($recv(aCollection)._at_(i)).__eq(each);
if(!$core.assert($5)){
throw $early=[false];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aCollection:aCollection},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "= aCollection\x0a\x09(self class = aCollection class and: [\x0a\x09\x09self size = aCollection size ]) ifFalse: [ ^ false ].\x0a\x09self withIndexDo: [ :each :i |\x0a\x09\x09\x09\x09(aCollection at: i) = each ifFalse: [ ^ false ]].\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "and:", "=", "class", "size", "withIndexDo:", "at:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "addLast:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._add_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addLast:",{anObject:anObject},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "addLast: anObject\x0a\x09self add: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "allButFirst",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._copyFrom_to_((2),self._size());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allButFirst",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allButFirst\x0a\x09^ self copyFrom: 2 to: self size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copyFrom:to:", "size"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "allButLast",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._copyFrom_to_((1),$recv(self._size()).__minus((1)));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allButLast",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allButLast\x0a\x09^ self copyFrom: 1 to: self size - 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copyFrom:to:", "-", "size"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "atRandom",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_($recv(self._size())._atRandom());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atRandom",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atRandom\x0a\x09^ self at: self size atRandom",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "atRandom", "size"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "beginsWith:",
protocol: 'testing',
fn: function (prefix){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$4;
$2=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$3=$recv(prefix)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__lt($3);
if($core.assert($1)){
return false;
};
$4=$recv(self._first_($recv(prefix)._size())).__eq(prefix);
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beginsWith:",{prefix:prefix},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["prefix"],
source: "beginsWith: prefix\x0a\x09self size < prefix size ifTrue: [ ^ false ].\x0a\x09^ (self first: prefix size) = prefix",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<", "size", "=", "first:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "copyFrom:to:",
protocol: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
var range,newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
range=$recv(anIndex)._to_(anotherIndex);
newCollection=$recv(self._class())._new_($recv(range)._size());
$recv(range)._withIndexDo_((function(each,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newCollection)._at_put_(i,self._at_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=newCollection;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex,range:range,newCollection:newCollection},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09| range newCollection |\x0a\x09range := anIndex to: anotherIndex.\x0a\x09newCollection := self class new: range size.\x0a\x09range withIndexDo: [ :each :i |\x0a\x09\x09newCollection at: i put: (self at: each) ].\x0a\x09^ newCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["to:", "new:", "class", "size", "withIndexDo:", "at:put:", "at:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;
var newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
newCollection=$recv(self._class())._new_(self._size());
self._withIndexDo_((function(each,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newCollection)._at_put_(index,$recv(each)._deepCopy());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=newCollection;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{newCollection:newCollection},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09| newCollection |\x0a\x09newCollection := self class new: self size.\x0a\x09self withIndexDo: [ :each :index |\x0a\x09\x09newCollection at: index put: each deepCopy ].\x0a\x09^ newCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new:", "class", "size", "withIndexDo:", "at:put:", "deepCopy"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "detect:ifNone:",
protocol: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		self = self._numericallyIndexable();
		for(var i = 0; i < self.length; i++)
			if(aBlock._value_(self[i]))
				return self[i];
		return anotherBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09<\x0a\x09\x09self = self._numericallyIndexable();\x0a\x09\x09for(var i = 0; i < self.length; i++)\x0a\x09\x09\x09if(aBlock._value_(self[i]))\x0a\x09\x09\x09\x09return self[i];\x0a\x09\x09return anotherBlock._value();\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		self = self._numericallyIndexable();
		for(var i=0; i < self.length; i++) {
			aBlock._value_(self[i]);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09<\x0a\x09\x09self = self._numericallyIndexable();\x0a\x09\x09for(var i=0; i < self.length; i++) {\x0a\x09\x09\x09aBlock._value_(self[i]);\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "endsWith:",
protocol: 'testing',
fn: function (suffix){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$4;
$2=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$3=$recv(suffix)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__lt($3);
if($core.assert($1)){
return false;
};
$4=$recv(self._last_($recv(suffix)._size())).__eq(suffix);
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endsWith:",{suffix:suffix},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["suffix"],
source: "endsWith: suffix\x0a\x09self size < suffix size ifTrue: [ ^ false ].\x0a\x09^ (self last: suffix size) = suffix",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<", "size", "=", "last:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "first",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_((1));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"first",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "first\x0a\x09^ self at: 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "first:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._size()).__lt(aNumber);
if($core.assert($1)){
self._error_("Invalid number of elements");
};
$2=self._copyFrom_to_((1),aNumber);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"first:",{aNumber:aNumber},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "first: aNumber\x0a\x09\x22Answer the first `aNumber` elements of the receiver.\x0a\x09Raise an error if there are not enough elements in the receiver.\x22\x0a\x0a\x09self size < aNumber ifTrue: [ self error: 'Invalid number of elements' ].\x0a\x0a\x09^ self copyFrom: 1 to: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<", "size", "error:", "copyFrom:to:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "fourth",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_((4));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fourth",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fourth\x0a\x09^ self at: 4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "includes:",
protocol: 'testing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._indexOf_ifAbsent_(anObject,(function(){
return nil;

})))._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "includes: anObject\x0a\x09^ (self indexOf: anObject ifAbsent: [ nil ]) notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "indexOf:ifAbsent:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "indexOf:ifAbsent:",
protocol: 'accessing',
fn: function (anObject,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		self = self._numericallyIndexable();
		for(var i=0; i < self.length; i++) {
			if($recv(self[i]).__eq(anObject)) {return i+1}
		};
		return aBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09<\x0a\x09\x09self = self._numericallyIndexable();\x0a\x09\x09for(var i=0; i < self.length; i++) {\x0a\x09\x09\x09if($recv(self[i]).__eq(anObject)) {return i+1}\x0a\x09\x09};\x0a\x09\x09return aBlock._value();\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "indexOf:startingAt:",
protocol: 'accessing',
fn: function (anObject,start){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._indexOf_startingAt_ifAbsent_(anObject,start,(function(){
return (0);

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:",{anObject:anObject,start:start},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "start"],
source: "indexOf: anObject startingAt: start\x0a\x09\x22Answer the index of the first occurence of anElement after start\x0a\x09within the receiver. If the receiver does not contain anElement,\x0a\x09answer 0.\x22\x0a\x09^ self indexOf: anObject startingAt: start ifAbsent: [ 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:startingAt:ifAbsent:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "indexOf:startingAt:ifAbsent:",
protocol: 'accessing',
fn: function (anObject,start,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		self = self._numericallyIndexable();
		for(var i=start - 1; i < self.length; i++){
			if($recv(self[i]).__eq(anObject)) {return i+1}
		}
		return aBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:ifAbsent:",{anObject:anObject,start:start,aBlock:aBlock},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "start", "aBlock"],
source: "indexOf: anObject startingAt: start ifAbsent: aBlock\x0a\x09<\x0a\x09\x09self = self._numericallyIndexable();\x0a\x09\x09for(var i=start - 1; i < self.length; i++){\x0a\x09\x09\x09if($recv(self[i]).__eq(anObject)) {return i+1}\x0a\x09\x09}\x0a\x09\x09return aBlock._value();\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "last",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_(self._size());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"last",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "last\x0a\x09^ self at: self size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "size"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "last:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$6,$5,$4,$3;
$2=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__lt(aNumber);
if($core.assert($1)){
self._error_("Invalid number of elements");
};
$6=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__minus(aNumber);
$4=$recv($5).__plus((1));
$3=self._copyFrom_to_($4,self._size());
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"last:",{aNumber:aNumber},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "last: aNumber\x0a\x09\x22Answer the last aNumber elements of the receiver.\x0a\x09Raise an error if there are not enough elements in the receiver.\x22\x0a\x0a\x09self size < aNumber ifTrue: [ self error: 'Invalid number of elements' ].\x0a\x0a\x09^ self copyFrom: self size - aNumber + 1 to: self size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<", "size", "error:", "copyFrom:to:", "+", "-"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "newStream",
protocol: 'streaming',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._streamClass())._on_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newStream",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newStream\x0a\x09^ self streamClass on: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:", "streamClass"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "numericallyIndexable",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numericallyIndexable",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numericallyIndexable\x0a\x09\x22This is an internal converting message.\x0a\x09It answeres a representation of the receiver\x0a\x09that can use foo[i] in JavaScript code.\x0a\x09\x0a\x09It fixes IE8, where boxed String is unable\x0a\x09to numerically index its characters,\x0a\x09but primitive string can.\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "readStream",
protocol: 'streaming',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._stream();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readStream",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "readStream\x0a\x09\x22For Pharo compatibility\x22\x0a\x09\x0a\x09^ self stream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stream"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "removeLast",
protocol: 'adding/removing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._remove_(self._last());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeLast",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeLast\x0a\x09^ self remove: self last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "last"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "reversed",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reversed",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reversed\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "second",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_((2));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"second",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "second\x0a\x09^ self at: 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "shallowCopy",
protocol: 'copying',
fn: function (){
var self=this;
var newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
newCollection=$recv(self._class())._new_(self._size());
self._withIndexDo_((function(each,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newCollection)._at_put_(index,each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=newCollection;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{newCollection:newCollection},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shallowCopy\x0a\x09| newCollection |\x0a\x09newCollection := self class new: self size.\x0a\x09self withIndexDo: [ :each :index |\x0a\x09\x09newCollection at: index put: each ].\x0a\x09^ newCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new:", "class", "size", "withIndexDo:", "at:put:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "stream",
protocol: 'streaming',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._newStream();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stream",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stream\x0a\x09^ self newStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newStream"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "streamClass",
protocol: 'streaming',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._streamClass();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"streamClass",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "streamClass\x0a\x09^ self class streamClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["streamClass", "class"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "third",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_((3));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"third",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "third\x0a\x09^ self at: 3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "with:do:",
protocol: 'enumerating',
fn: function (anotherCollection,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		self = self._numericallyIndexable();
		anotherCollection = anotherCollection._numericallyIndexable();
		for(var i=0; i<self.length; i++) {
			aBlock._value_value_(self[i], anotherCollection[i]);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anotherCollection", "aBlock"],
source: "with: anotherCollection do: aBlock\x0a\x09<\x0a\x09\x09self = self._numericallyIndexable();\x0a\x09\x09anotherCollection = anotherCollection._numericallyIndexable();\x0a\x09\x09for(var i=0; i<self.length; i++) {\x0a\x09\x09\x09aBlock._value_value_(self[i], anotherCollection[i]);\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "withIndexDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		self = self._numericallyIndexable();
		for(var i=0; i < self.length; i++) {
			aBlock._value_value_(self[i], i+1);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09<\x0a\x09\x09self = self._numericallyIndexable();\x0a\x09\x09for(var i=0; i < self.length; i++) {\x0a\x09\x09\x09aBlock._value_value_(self[i], i+1);\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "writeStream",
protocol: 'streaming',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._stream();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeStream",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "writeStream\x0a\x09\x22For Pharo compatibility\x22\x0a\x09\x0a\x09^ self stream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stream"]
}),
$globals.SequenceableCollection);


$core.addMethod(
$core.method({
selector: "streamClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $Stream(){return $globals.Stream||(typeof Stream=="undefined"?nil:Stream)}
return $Stream();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "streamClass\x0a\x09\x09^ Stream",
referencedClasses: ["Stream"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceableCollection.klass);

$core.addMethod(
$core.method({
selector: "streamContents:",
protocol: 'streaming',
fn: function (aBlock){
var self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
stream=$recv(self._streamClass())._on_(self._new());
$recv(aBlock)._value_(stream);
$1=$recv(stream)._contents();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"streamContents:",{aBlock:aBlock,stream:stream},$globals.SequenceableCollection.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "streamContents: aBlock\x0a\x09| stream |\x0a\x09stream := (self streamClass on: self new).\x0a\x09aBlock value: stream.\x0a\x09^ stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:", "streamClass", "new", "value:", "contents"]
}),
$globals.SequenceableCollection.klass);


$core.addClass('Array', $globals.SequenceableCollection, [], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Array.comment="I represent a collection of objects ordered by the collector. The size of arrays is dynamic.\x0a\x0aI am directly mapped to JavaScript Number.\x0a\x0a*Note* In Amber, `OrderedCollection` is an alias for `Array`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.push(anObject); return anObject;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09<self.push(anObject); return anObject;>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "addFirst:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.unshift(anObject); return anObject;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addFirst:",{anObject:anObject},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "addFirst: anObject\x0a\x09<self.unshift(anObject); return anObject;>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "asJavascript",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("[".__comma($recv(self._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._asJavascript();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._join_(", "))).__comma("]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavascript\x0a\x09^ '[', ((self collect: [:each | each asJavascript ]) join: ', '), ']'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "join:", "collect:", "asJavascript"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return anIndex >= 1 && anIndex <= self.length
			? self[anIndex - 1]
			: aBlock._value()
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<\x0a\x09\x09return anIndex >>= 1 && anIndex <= self.length\x0a\x09\x09\x09? self[anIndex - 1]\x0a\x09\x09\x09: aBlock._value()\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "at:ifPresent:ifAbsent:",
protocol: 'accessing',
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return anIndex >= 1 && anIndex <= self.length
			? aBlock._value_(self[anIndex - 1])
			: anotherBlock._value()
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock", "anotherBlock"],
source: "at: anIndex ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09<\x0a\x09\x09return anIndex >>= 1 && anIndex <= self.length\x0a\x09\x09\x09? aBlock._value_(self[anIndex - 1])\x0a\x09\x09\x09: anotherBlock._value()\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (anIndex,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self[anIndex - 1] = anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09<return self[anIndex - 1] = anObject>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "collect:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.map(function(each) {return aBlock._value_(each)});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "collect: aBlock\x0a\x09\x22Optimized version\x22\x0a\x09\x0a\x09<return self.map(function(each) {return aBlock._value_(each)})>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "join:",
protocol: 'enumerating',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.join(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"join:",{aString:aString},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "join: aString\x0a\x09<return self.join(aString)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "numericallyIndexable",
protocol: 'private',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numericallyIndexable\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Array.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printOn:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(" (");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
self._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._printOn_(aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aStream)._nextPutAll_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self \x0a\x09\x09do: [ :each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "remove:ifAbsent:",
protocol: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
index=self._indexOf_ifAbsent_(anObject,(function(){
return (0);

}));
$2=$recv(index).__eq((0));
if($core.assert($2)){
$1=$recv(aBlock)._value();
} else {
self._removeIndex_(index);
$1=anObject;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock,index:index},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09| index |\x0a\x09index := self indexOf: anObject ifAbsent: [ 0 ].\x0a\x09^ index = 0\x0a\x09\x09ifFalse: [ self removeIndex: index. anObject ]\x0a\x09\x09ifTrue: [ aBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:ifAbsent:", "ifFalse:ifTrue:", "=", "removeIndex:", "value"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "removeAll",
protocol: 'adding/removing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.length = 0;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeAll",{},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeAll\x0a\x09<self.length = 0>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "removeFrom:to:",
protocol: 'adding/removing',
fn: function (aNumber,anotherNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.splice(aNumber -1, anotherNumber - aNumber + 1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeFrom:to:",{aNumber:aNumber,anotherNumber:anotherNumber},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber", "anotherNumber"],
source: "removeFrom: aNumber to: anotherNumber\x0a\x09<self.splice(aNumber -1, anotherNumber - aNumber + 1)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "removeIndex:",
protocol: 'adding/removing',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.splice(anInteger - 1, 1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeIndex:",{anInteger:anInteger},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "removeIndex: anInteger\x0a\x09<self.splice(anInteger - 1, 1)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "removeLast",
protocol: 'adding/removing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.pop();;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeLast",{},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeLast\x0a\x09<return self.pop();>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "reversed",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._copy().reverse();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reversed",{},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reversed\x0a\x09<return self._copy().reverse()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "select:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var result = self.klass._new();
		for(var i=0; i<self.length; i++) {
			if(aBlock._value_(self[i])) {
				result.push(self[i]);
			}
		}
		return result;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "select: aBlock\x0a\x09\x22Optimized version\x22\x0a\x09\x0a\x09<\x0a\x09\x09var result = self.klass._new();\x0a\x09\x09for(var i=0; i<self.length; i++) {\x0a\x09\x09\x09if(aBlock._value_(self[i])) {\x0a\x09\x09\x09\x09result.push(self[i]);\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09\x09return result;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.length;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09<return self.length>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "sort",
protocol: 'enumerating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__lt(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sort",{},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sort\x0a\x09^ self sort: [ :a :b | a < b ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sort:", "<"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "sort:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return self.sort(function(a, b) {
			if(aBlock._value_value_(a,b)) {return -1} else {return 1}
		})
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sort:",{aBlock:aBlock},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "sort: aBlock\x0a\x09<\x0a\x09\x09return self.sort(function(a, b) {\x0a\x09\x09\x09if(aBlock._value_value_(a,b)) {return -1} else {return 1}\x0a\x09\x09})\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "sorted",
protocol: 'enumerating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._copy())._sort();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sorted",{},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sorted\x0a\x09^ self copy sort",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sort", "copy"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "sorted:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._copy())._sort_(aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sorted:",{aBlock:aBlock},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "sorted: aBlock\x0a\x09^ self copy sort: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sort:", "copy"]
}),
$globals.Array);


$core.addMethod(
$core.method({
selector: "new:",
protocol: 'instance creation',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new Array(anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger},$globals.Array.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "new: anInteger\x0a\x09<return new Array(anInteger)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array.klass);

$core.addMethod(
$core.method({
selector: "with:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new_((1));
$recv($2)._at_put_((1),anObject);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},$globals.Array.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "with: anObject\x0a\x09\x09^ (self new: 1)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new:", "yourself"]
}),
$globals.Array.klass);

$core.addMethod(
$core.method({
selector: "with:with:",
protocol: 'instance creation',
fn: function (anObject,anObject2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new_((2));
$recv($2)._at_put_((1),anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_((2),anObject2);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:with:",{anObject:anObject,anObject2:anObject2},$globals.Array.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anObject2"],
source: "with: anObject with: anObject2\x0a\x09\x09^ (self new: 2)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new:", "yourself"]
}),
$globals.Array.klass);

$core.addMethod(
$core.method({
selector: "with:with:with:",
protocol: 'instance creation',
fn: function (anObject,anObject2,anObject3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new_((3));
$recv($2)._at_put_((1),anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_((2),anObject2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($2)._at_put_((3),anObject3);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:with:with:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3},$globals.Array.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anObject2", "anObject3"],
source: "with: anObject with: anObject2 with: anObject3\x0a\x09\x09^ (self new: 3)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09at: 3 put: anObject3;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new:", "yourself"]
}),
$globals.Array.klass);

$core.addMethod(
$core.method({
selector: "withAll:",
protocol: 'instance creation',
fn: function (aCollection){
var self=this;
var instance,index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
index=(1);
instance=self._new_($recv(aCollection)._size());
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(instance)._at_put_(index,each);
index=$recv(index).__plus((1));
return index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withAll:",{aCollection:aCollection,instance:instance,index:index},$globals.Array.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09| instance index |\x0a\x09index := 1.\x0a\x09instance := self new: aCollection size.\x0a\x09aCollection do: [ :each |\x0a\x09\x09instance at: index put: each.\x0a\x09\x09index := index + 1 ].\x0a\x09^ instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new:", "size", "do:", "at:put:", "+"]
}),
$globals.Array.klass);


$core.addClass('CharacterArray', $globals.SequenceableCollection, [], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CharacterArray.comment="I am the abstract superclass of string-like collections.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: ",",
protocol: 'copying',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv(aString)._asString());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,",",{aString:aString},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: ", aString\x0a\x09^ self asString, aString asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._errorReadOnly();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09self errorReadOnly",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["errorReadOnly"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "asLowercase",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._fromString_($recv(self._asString())._asLowercase());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asLowercase",{},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asLowercase\x0a\x09^ self class fromString: self asString asLowercase",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromString:", "class", "asLowercase", "asString"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "asNumber",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._asString())._asNumber();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asNumber\x0a\x09^ self asString asNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asNumber", "asString"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "asSymbol",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._asString();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSymbol\x0a\x09^ self asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asString"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "asUppercase",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._fromString_($recv(self._asString())._asUppercase());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asUppercase",{},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asUppercase\x0a\x09^ self class fromString: self asString asUppercase",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromString:", "class", "asUppercase", "asString"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (anIndex,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._errorReadOnly();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09self errorReadOnly",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["errorReadOnly"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "errorReadOnly",
protocol: 'error handling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._error_("Object is read-only");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorReadOnly",{},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "errorReadOnly\x0a\x09self error: 'Object is read-only'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._asString())._printOn_(aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09self asString printOn: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "asString"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "putOn:",
protocol: 'streaming',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutString_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "putOn: aStream\x0a\x09aStream nextPutString: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutString:"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "remove:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._errorReadOnly();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "remove: anObject\x0a\x09self errorReadOnly",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["errorReadOnly"]
}),
$globals.CharacterArray);


$core.addMethod(
$core.method({
selector: "fromString:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},$globals.CharacterArray.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "fromString: aString\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CharacterArray.klass);


$core.addClass('String', $globals.CharacterArray, [], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.String.comment="I am an indexed collection of Characters. Unlike most Smalltalk dialects, Amber doesn't provide the Character class. Instead, elements of a String are single character strings.\x0a\x0aString inherits many useful methods from its hierarchy, such as\x0a\x09`Collection >> #,`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: ",",
protocol: 'copying',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String(self) + aString;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,",",{aString:aString},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: ", aString\x0a\x09<return String(self) + aString>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "<",
protocol: 'comparing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String(self) < aString._asString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<",{aString:aString},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "< aString\x0a\x09<return String(self) < aString._asString()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "<=",
protocol: 'comparing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String(self) <= aString._asString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<=",{aString:aString},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "<= aString\x0a\x09<return String(self) <= aString._asString()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return aString != null &&
			typeof aString._isString === "function" &&
			aString._isString() &&
			String(self) === String(aString)
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aString:aString},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "= aString\x0a\x09<\x0a\x09\x09return aString != null &&\x0a\x09\x09\x09typeof aString._isString === \x22function\x22 &&\x0a\x09\x09\x09aString._isString() &&\x0a\x09\x09\x09String(self) === String(aString)\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "==",
protocol: 'comparing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self.__eq(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"==",{aString:aString},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "== aString\x0a\x09^ self = aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: ">",
protocol: 'comparing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String(self) > aString._asString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">",{aString:aString},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "> aString\x0a\x09<return String(self) >> aString._asString()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: ">=",
protocol: 'comparing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String(self) >= aString._asString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">=",{aString:aString},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: ">= aString\x0a\x09<return String(self) >>= aString._asString()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asJavaScriptMethodName",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.st2js(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptMethodName",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptMethodName\x0a\x09<return $core.st2js(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asJavascript",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavascript\x0a\x09<\x0a\x09\x09if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self.replace(/[\x5cx00-\x5cx1f\x22\x5c\x5c\x5cx7f-\x5cx9f]/g, function(ch){var c=ch.charCodeAt(0);return \x22\x5c\x5cx\x22+(\x220\x22+c.toString(16)).slice(-2)}) + \x22\x5c\x22\x22;\x0a\x09\x09else\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self + \x22\x5c\x22\x22;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asLowercase",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toLowerCase();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asLowercase",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asLowercase\x0a\x09<return self.toLowerCase()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asMutator",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._last()).__eq(":");
if(!$core.assert($1)){
$2=self.__comma(":");
return $2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asMutator",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asMutator\x0a\x09\x22Answer a setter selector. For example,\x0a\x09#name asMutator returns #name:\x22\x0a\x0a\x09self last = ':' ifFalse: [  ^ self, ':' ].\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "last", ","]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asNumber",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Number(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asNumber\x0a\x09<return Number(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asRegexp",
protocol: 'converting',
fn: function (){
var self=this;
function $RegularExpression(){return $globals.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($RegularExpression())._fromString_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asRegexp",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asRegexp\x0a\x09^ RegularExpression fromString: self",
referencedClasses: ["RegularExpression"],
//>>excludeEnd("ide");
messageSends: ["fromString:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asSymbol",
protocol: 'converting',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSymbol\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asUppercase",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toUpperCase();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asUppercase",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asUppercase\x0a\x09<return self.toUpperCase()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asciiValue",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.charCodeAt(0);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asciiValue",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asciiValue\x0a\x09<return self.charCodeAt(0);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String(self)[anIndex - 1] || aBlock._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<return String(self)[anIndex - 1] || aBlock._value()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "at:ifPresent:ifAbsent:",
protocol: 'accessing',
fn: function (anIndex,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var result = String(self)[anIndex - 1];
		return result ? aBlock._value_(result) : anotherBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock", "anotherBlock"],
source: "at: anIndex ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09<\x0a\x09\x09var result = String(self)[anIndex - 1];\x0a\x09\x09return result ? aBlock._value_(result) : anotherBlock._value();\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "capitalized",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._isEmpty();
if($core.assert($2)){
$1=self;
} else {
$1=$recv($recv(self._first())._asUppercase()).__comma(self._allButFirst());
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"capitalized",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "capitalized\x0a\x09^ self isEmpty\x0a\x09\x09ifTrue: [ self ]\x0a\x09\x09ifFalse: [ self first asUppercase, self allButFirst ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isEmpty", ",", "asUppercase", "first", "allButFirst"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "charCodeAt:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.charCodeAt(anInteger - 1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"charCodeAt:",{anInteger:anInteger},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "charCodeAt: anInteger\x0a\x09<return self.charCodeAt(anInteger - 1)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "copyFrom:to:",
protocol: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.substring(anIndex - 1, anotherIndex);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09<return self.substring(anIndex - 1, anotherIndex)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "crlfSanitized",
protocol: 'converting',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lines())._join_($recv($String())._lf());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"crlfSanitized",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "crlfSanitized\x0a\x09^ self lines join: String lf",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["join:", "lines", "lf"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._shallowCopy();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09^ self shallowCopy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shallowCopy"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "escaped",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return escape(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"escaped",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "escaped\x0a\x09<return escape(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "identityHash",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self.__comma("s");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"identityHash",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "identityHash\x0a\x09^ self, 's'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [","]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "includesSubString:",
protocol: 'testing',
fn: function (subString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.indexOf(subString) != -1;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesSubString:",{subString:subString},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["subString"],
source: "includesSubString: subString\x0a\x09<return self.indexOf(subString) != -1>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "isCapitalized",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._asUppercase();
$1=$recv($2).__eq_eq(self._first());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isCapitalized",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isCapitalized\x0a\x09^ self first asUppercase == self first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["==", "asUppercase", "first"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "isString",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isString\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "isVowel",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._size()).__eq((1)))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return "aeiou"._includes_(self._asLowercase());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isVowel",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isVowel\x0a\x09\x22Answer true if the receiver is a one character string containing a voyel\x22\x0a\x09\x0a\x09^ self size = 1 and: [ 'aeiou' includes: self asLowercase ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "=", "size", "includes:", "asLowercase"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "join:",
protocol: 'split join',
fn: function (aCollection){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aCollection)._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_($recv(each)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"join:",{aCollection:aCollection},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "join: aCollection\x0a\x09^ String\x0a\x09\x09streamContents: [ :stream | aCollection\x0a\x09\x09\x09\x09do: [ :each | stream nextPutAll: each asString ]\x0a\x09\x09\x09\x09separatedBy: [ stream nextPutAll: self ]]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "do:separatedBy:", "nextPutAll:", "asString"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "lineIndicesDo:",
protocol: 'split join',
fn: function (aBlock){
var self=this;
var cr,lf,start,sz,nextLF,nextCR;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$5,$3,$6,$7,$9,$8,$10,$11;
var $early={};
try {
start=(1);
sz=self._size();
cr=$recv($String())._cr();
nextCR=self._indexOf_startingAt_(cr,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["indexOf:startingAt:"]=1;
//>>excludeEnd("ctx");
lf=$recv($String())._lf();
nextLF=self._indexOf_startingAt_(lf,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["indexOf:startingAt:"]=2;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(start).__lt_eq(sz);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(nextLF).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(nextCR).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$recv(aBlock)._value_value_value_(start,sz,sz);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:value:value:"]=1;
//>>excludeEnd("ctx");
throw $early=[self];
};
$4=$recv(nextCR).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=3;
//>>excludeEnd("ctx");
$3=$recv($4)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=(0).__lt(nextLF);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["<"]=1;
//>>excludeEnd("ctx");
return $recv($5)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(nextLF).__lt(nextCR);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
if($core.assert($3)){
$6=start;
$7=$recv(nextLF).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value_value_value_($6,$7,nextLF);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:value:value:"]=2;
//>>excludeEnd("ctx");
start=(1).__plus(nextLF);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
start;
nextLF=self._indexOf_startingAt_(lf,start);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:startingAt:"]=3;
//>>excludeEnd("ctx");
return nextLF;
} else {
$9=(1).__plus(nextCR);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$8=$recv($9).__eq(nextLF);
if($core.assert($8)){
$10=start;
$11=$recv(nextCR).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$recv(aBlock)._value_value_value_($10,$11,nextLF);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:value:value:"]=3;
//>>excludeEnd("ctx");
start=(1).__plus(nextLF);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=3;
//>>excludeEnd("ctx");
start;
nextCR=self._indexOf_startingAt_(cr,start);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:startingAt:"]=4;
//>>excludeEnd("ctx");
nextCR;
nextLF=self._indexOf_startingAt_(lf,start);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:startingAt:"]=5;
//>>excludeEnd("ctx");
return nextLF;
} else {
$recv(aBlock)._value_value_value_(start,$recv(nextCR).__minus((1)),nextCR);
start=(1).__plus(nextCR);
start;
nextCR=self._indexOf_startingAt_(cr,start);
return nextCR;
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineIndicesDo:",{aBlock:aBlock,cr:cr,lf:lf,start:start,sz:sz,nextLF:nextLF,nextCR:nextCR},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "lineIndicesDo: aBlock\x0a\x09\x22execute aBlock with 3 arguments for each line:\x0a\x09- start index of line\x0a\x09- end index of line without line delimiter\x0a\x09- end index of line including line delimiter(s) CR, LF or CRLF\x22\x0a\x09\x0a\x09| cr lf start sz nextLF nextCR |\x0a\x09start := 1.\x0a\x09sz := self size.\x0a\x09cr := String cr.\x0a\x09nextCR := self indexOf: cr startingAt: 1.\x0a\x09lf := String lf.\x0a\x09nextLF := self indexOf: lf startingAt: 1.\x0a\x09[ start <= sz ] whileTrue: [ \x0a\x09\x09(nextLF = 0 and: [ nextCR = 0 ])\x0a\x09\x09\x09ifTrue: [ \x22No more CR, nor LF, the string is over\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: sz value: sz.\x0a\x09\x09\x09\x09\x09^ self ].\x0a\x09\x09(nextCR = 0 or: [ 0 < nextLF and: [ nextLF < nextCR ] ])\x0a\x09\x09\x09ifTrue: [ \x22Found a LF\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextLF - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09ifFalse: [ 1 + nextCR = nextLF\x0a\x09\x09\x09\x09ifTrue: [ \x22Found a CR-LF pair\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09\x09ifFalse: [ \x22Found a CR\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextCR.\x0a\x09\x09\x09\x09\x09start := 1 + nextCR.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start ] ]]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["size", "cr", "indexOf:startingAt:", "lf", "whileTrue:", "<=", "ifTrue:", "and:", "=", "value:value:value:", "ifTrue:ifFalse:", "or:", "<", "-", "+"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "lineNumber:",
protocol: 'split join',
fn: function (anIndex){
var self=this;
var lineCount;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
var $early={};
try {
lineCount=(0);
self._lineIndicesDo_((function(start,endWithoutDelimiters,end){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
lineCount=$recv(lineCount).__plus((1));
$2=lineCount;
$1=$recv($2).__eq(anIndex);
if($core.assert($1)){
$3=self._copyFrom_to_(start,endWithoutDelimiters);
throw $early=[$3];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineNumber:",{anIndex:anIndex,lineCount:lineCount},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "lineNumber: anIndex\x0a\x09\x22Answer a string containing the characters in the given line number.\x22\x0a\x0a\x09| lineCount |\x0a\x09lineCount := 0.\x0a\x09self lineIndicesDo: [ :start :endWithoutDelimiters :end |\x0a\x09\x09(lineCount := lineCount + 1) = anIndex ifTrue: [ ^ self copyFrom: start to: endWithoutDelimiters ]].\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lineIndicesDo:", "ifTrue:", "=", "+", "copyFrom:to:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "lines",
protocol: 'split join',
fn: function (){
var self=this;
var lines;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
lines=$recv($Array())._new();
self._linesDo_((function(aLine){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(lines)._add_(aLine);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aLine:aLine},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=lines;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lines",{lines:lines},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lines\x0a\x09\x22Answer an array of lines composing this receiver without the line ending delimiters.\x22\x0a\x0a\x09| lines |\x0a\x09lines := Array new.\x0a\x09self linesDo: [ :aLine | lines add: aLine ].\x0a\x09^ lines",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "linesDo:", "add:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "linesDo:",
protocol: 'split join',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._lineIndicesDo_((function(start,endWithoutDelimiters,end){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(self._copyFrom_to_(start,endWithoutDelimiters));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"linesDo:",{aBlock:aBlock},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "linesDo: aBlock\x0a\x09\x22Execute aBlock with each line in this string. The terminating line\x0a\x09delimiters CR, LF or CRLF pairs are not included in what is passed to aBlock\x22\x0a\x0a\x09self lineIndicesDo: [ :start :endWithoutDelimiters :end |\x0a\x09\x09aBlock value: (self copyFrom: start to: endWithoutDelimiters) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lineIndicesDo:", "value:", "copyFrom:to:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "match:",
protocol: 'regular expressions',
fn: function (aRegexp){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.search(aRegexp) != -1;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"match:",{aRegexp:aRegexp},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRegexp"],
source: "match: aRegexp\x0a\x09<return self.search(aRegexp) != -1>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "matchesOf:",
protocol: 'regular expressions',
fn: function (aRegularExpression){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.match(aRegularExpression);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"matchesOf:",{aRegularExpression:aRegularExpression},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRegularExpression"],
source: "matchesOf: aRegularExpression\x0a\x09<return self.match(aRegularExpression)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "numericallyIndexable",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numericallyIndexable",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numericallyIndexable\x0a\x09<return String(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "printNl",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
console.log(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printNl",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printNl\x0a\x09<console.log(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aStream)._nextPutAll_("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$1=$recv(aStream)._nextPutAll_("'");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: '''';\x0a\x09\x09nextPutAll: self;\x0a\x09\x09nextPutAll: ''''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "replace:with:",
protocol: 'regular expressions',
fn: function (aString,anotherString){
var self=this;
function $RegularExpression(){return $globals.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._replaceRegexp_with_($recv($RegularExpression())._fromString_flag_(aString,"g"),anotherString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aString:aString,anotherString:anotherString},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "replace: aString with: anotherString\x0a\x09^ self replaceRegexp: (RegularExpression fromString: aString flag: 'g') with: anotherString",
referencedClasses: ["RegularExpression"],
//>>excludeEnd("ide");
messageSends: ["replaceRegexp:with:", "fromString:flag:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "replaceRegexp:with:",
protocol: 'regular expressions',
fn: function (aRegexp,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.replace(aRegexp, aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replaceRegexp:with:",{aRegexp:aRegexp,aString:aString},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRegexp", "aString"],
source: "replaceRegexp: aRegexp with: aString\x0a\x09<return self.replace(aRegexp, aString)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "reversed",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.split("").reverse().join("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reversed",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reversed\x0a\x09<return self.split(\x22\x22).reverse().join(\x22\x22)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "shallowCopy",
protocol: 'copying',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._fromString_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shallowCopy\x0a\x09^ self class fromString: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromString:", "class"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.length;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09<return self.length>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "subStrings:",
protocol: 'split join',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._tokenize_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subStrings:",{aString:aString},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "subStrings: aString\x0a\x09^ self tokenize: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tokenize:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "tokenize:",
protocol: 'split join',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.split(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tokenize:",{aString:aString},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "tokenize: aString\x0a\x09<return self.split(aString)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "trimBoth",
protocol: 'regular expressions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._trimBoth_("\x5cs");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimBoth",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimBoth\x0a\x09^ self trimBoth: '\x5cs'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trimBoth:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "trimBoth:",
protocol: 'regular expressions',
fn: function (separators){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._trimLeft_(separators))._trimRight_(separators);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimBoth:",{separators:separators},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["separators"],
source: "trimBoth: separators\x0a\x09^ (self trimLeft: separators) trimRight: separators",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trimRight:", "trimLeft:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "trimLeft",
protocol: 'regular expressions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._trimLeft_("\x5cs");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimLeft",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimLeft\x0a\x09^ self trimLeft: '\x5cs'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trimLeft:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "trimLeft:",
protocol: 'regular expressions',
fn: function (separators){
var self=this;
function $RegularExpression(){return $globals.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv("^[".__comma(separators)).__comma("]+");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($RegularExpression())._fromString_flag_($3,"g");
$1=self._replaceRegexp_with_($2,"");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimLeft:",{separators:separators},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["separators"],
source: "trimLeft: separators\x0a\x09^ self replaceRegexp: (RegularExpression fromString: '^[', separators, ']+' flag: 'g') with: ''",
referencedClasses: ["RegularExpression"],
//>>excludeEnd("ide");
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "trimRight",
protocol: 'regular expressions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._trimRight_("\x5cs");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimRight",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimRight\x0a\x09^ self trimRight: '\x5cs'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trimRight:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "trimRight:",
protocol: 'regular expressions',
fn: function (separators){
var self=this;
function $RegularExpression(){return $globals.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv("[".__comma(separators)).__comma("]+$");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($RegularExpression())._fromString_flag_($3,"g");
$1=self._replaceRegexp_with_($2,"");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimRight:",{separators:separators},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["separators"],
source: "trimRight: separators\x0a\x09^ self replaceRegexp: (RegularExpression fromString: '[', separators, ']+$' flag: 'g') with: ''",
referencedClasses: ["RegularExpression"],
//>>excludeEnd("ide");
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "unescaped",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return unescape(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unescaped",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unescaped\x0a\x09<return unescape(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "uriComponentDecoded",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return decodeURIComponent(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uriComponentDecoded",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uriComponentDecoded\x0a\x09<return decodeURIComponent(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "uriComponentEncoded",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return encodeURIComponent(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uriComponentEncoded",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uriComponentEncoded\x0a\x09<return encodeURIComponent(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "uriDecoded",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return decodeURI(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uriDecoded",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uriDecoded\x0a\x09<return decodeURI(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "uriEncoded",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return encodeURI(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uriEncoded",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uriEncoded\x0a\x09<return encodeURI(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'evaluating',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anObject)._perform_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject \x0a\x09^ anObject perform: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["perform:"]
}),
$globals.String);


$core.addMethod(
$core.method({
selector: "cr",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return '\r';
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cr",{},$globals.String.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cr\x0a\x09<return '\x5cr'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String.klass);

$core.addMethod(
$core.method({
selector: "crlf",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return '\r\n';
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"crlf",{},$globals.String.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "crlf\x0a\x09<return '\x5cr\x5cn'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String.klass);

$core.addMethod(
$core.method({
selector: "esc",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._fromCharCode_((27));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"esc",{},$globals.String.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "esc\x0a\x09^ self fromCharCode: 27",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromCharCode:"]
}),
$globals.String.klass);

$core.addMethod(
$core.method({
selector: "fromCharCode:",
protocol: 'instance creation',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String.fromCharCode(anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromCharCode:",{anInteger:anInteger},$globals.String.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "fromCharCode: anInteger\x0a\x09<return String.fromCharCode(anInteger)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String.klass);

$core.addMethod(
$core.method({
selector: "fromString:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},$globals.String.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "fromString: aString\x0a\x09\x09<return String(aString)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String.klass);

$core.addMethod(
$core.method({
selector: "lf",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return '\n';
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lf",{},$globals.String.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lf\x0a\x09<return '\x5cn'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String.klass);

$core.addMethod(
$core.method({
selector: "random",
protocol: 'random',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (Math.random()*(22/32)+(10/32)).toString(32).slice(2);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"random",{},$globals.String.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "random\x0a\x09\x22Returns random alphanumeric string beginning with letter\x22\x0a\x09<return (Math.random()*(22/32)+(10/32)).toString(32).slice(2);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String.klass);

$core.addMethod(
$core.method({
selector: "randomNotIn:",
protocol: 'random',
fn: function (aString){
var self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
result=self._random();
result;
return $recv(aString)._includesSubString_(result);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue();
$1=result;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"randomNotIn:",{aString:aString,result:result},$globals.String.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "randomNotIn: aString\x0a\x09| result |\x0a\x09[ result := self random. aString includesSubString: result ] whileTrue.\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileTrue", "random", "includesSubString:"]
}),
$globals.String.klass);

$core.addMethod(
$core.method({
selector: "space",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return ' ';
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"space",{},$globals.String.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "space\x0a\x09<return ' '>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String.klass);

$core.addMethod(
$core.method({
selector: "streamClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $StringStream(){return $globals.StringStream||(typeof StringStream=="undefined"?nil:StringStream)}
return $StringStream();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "streamClass\x0a\x09\x09^ StringStream",
referencedClasses: ["StringStream"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String.klass);

$core.addMethod(
$core.method({
selector: "tab",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return '\t';
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tab",{},$globals.String.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tab\x0a\x09<return '\x5ct'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String.klass);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'instance creation',
fn: function (aUTFCharCode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String.fromCharCode(aUTFCharCode);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{aUTFCharCode:aUTFCharCode},$globals.String.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aUTFCharCode"],
source: "value: aUTFCharCode\x0a\x0a\x09<return String.fromCharCode(aUTFCharCode);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String.klass);


$core.addClass('Set', $globals.Collection, ['defaultBucket', 'slowBucketStores', 'fastBuckets', 'size'], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Set.comment="I represent an unordered set of objects without duplicates.\x0a\x0a## Implementation notes\x0a\x0aI put elements into different stores based on their type.\x0aThe goal is to store some elements into native JS object property names to be fast.\x0a\x0aIf an unboxed element has typeof 'string', 'boolean' or 'number', or an element is nil, null or undefined,\x0aI store it as a property name in an empty (== Object.create(null)) JS object, different for each type\x0a(for simplicity, nil/null/undefined is treated as one and included with the two booleans).\x0a\x0aIf element happen to be an object, I try to store them in `ArrayBucketStore`. I have two of them by default,\x0aone hashed using the Smalltalk class name, the other one using the JS constructor name. It is possible to have more or less\x0ainstances of `ArrayBucketStores`, see `#initializeSlowBucketStores`.\x0a\x0aAs a last resort, if none of the `ArrayBucketStore` instances can find a suitable bucket, the `defaultBucket` is used,\x0awhich is an `Array`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5;
var $early={};
try {
$2=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($recv(aCollection)._class());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
return false;
};
$4=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq($recv(aCollection)._size());
if(!$core.assert($3)){
return false;
};
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(aCollection)._includes_(each);
if(!$core.assert($5)){
throw $early=[false];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aCollection:aCollection},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "= aCollection\x0a\x09self class = aCollection class ifFalse: [ ^ false ].\x0a\x09self size = aCollection size ifFalse: [ ^ false ].\x0a\x09self do: [ :each | (aCollection includes: each) ifFalse: [ ^ false ] ].\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "class", "size", "do:", "includes:"]
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
var bucket;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
bucket=self._bucketsOfElement_(anObject);
$2=$recv(bucket)._second();
if(($receiver = $2) == null || $receiver.isNil){
var object,slowBucket;
object=$recv(bucket)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
object;
slowBucket=$recv(bucket)._third();
slowBucket;
$recv(slowBucket)._indexOf_ifAbsent_(object,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(slowBucket)._add_(object);
self["@size"]=$recv(self["@size"]).__plus((1));
return self["@size"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=object;
} else {
var primitiveBucket;
primitiveBucket=$receiver;
$1=self._add_in_($recv(bucket)._first(),primitiveBucket);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject,bucket:bucket},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09| bucket |\x0a\x09bucket := self bucketsOfElement: anObject.\x0a\x09^ bucket second\x0a\x09\x09ifNil: [\x0a\x09\x09\x09| object slowBucket |\x0a\x09\x09\x09object := bucket first.\x0a\x09\x09\x09slowBucket := bucket third.\x0a\x09\x09\x09slowBucket \x0a\x09\x09\x09\x09indexOf: object \x0a\x09\x09\x09\x09ifAbsent: [ \x0a\x09\x09\x09\x09\x09slowBucket add: object. \x0a\x09\x09\x09\x09\x09size := size + 1 ].\x0a\x09\x09\x09object ]\x0a\x09\x09ifNotNil: [ :primitiveBucket | \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09add: bucket first \x0a\x09\x09\x09\x09in: primitiveBucket ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bucketsOfElement:", "ifNil:ifNotNil:", "second", "first", "third", "indexOf:ifAbsent:", "add:", "+", "add:in:"]
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "add:in:",
protocol: 'private',
fn: function (anObject,anotherObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		if (anObject in anotherObject.store) { return false; }
		self['@size']++;
		return anotherObject.store[anObject] = true;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:in:",{anObject:anObject,anotherObject:anotherObject},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anotherObject"],
source: "add: anObject in: anotherObject\x0a\x09<\x0a\x09\x09if (anObject in anotherObject.store) { return false; }\x0a\x09\x09self['@size']++;\x0a\x09\x09return anotherObject.store[anObject] = true;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "bucketsOfElement:",
protocol: 'private',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

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
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bucketsOfElement:",{anObject:anObject},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "bucketsOfElement: anObject\x0a\x09\x22Find the appropriate bucket for `anObject`.\x0a\x09For optimization purposes, directly answer an array with: \x0a\x09- the object to be store\x0a\x09- the primitive bucket\x0a\x09- the slow bucket\x22\x0a\x09\x0a\x09<\x0a\x09\x09var type, bucket, prim = anObject == null ? (anObject = nil) : anObject.valueOf();\x0a\x09\x09if ((type = typeof prim) === \x22object\x22) {\x0a\x09\x09\x09if (anObject !== nil) {\x0a\x09\x09\x09\x09bucket = null;\x0a\x09\x09\x09\x09self['@slowBucketStores'].some(function (store) {\x0a\x09\x09\x09\x09\x09return bucket = store._bucketOfElement_(anObject);\x0a\x09\x09\x09\x09});\x0a\x09\x09\x09\x09return [ anObject, null, bucket || self['@defaultBucket'] ];\x0a\x09\x09\x09}\x0a\x09\x09\x09\x0a\x09\x09\x09// include nil to well-known objects under 'boolean' fastBucket\x0a\x09\x09\x09prim = null;\x0a\x09\x09\x09type = 'boolean';\x0a\x09\x09}\x0a\x09\x09return [ prim, self['@fastBuckets'][type] ];\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "classNameOf:",
protocol: 'private',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return anObject.klass != null && anObject.klass.className;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classNameOf:",{anObject:anObject},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "classNameOf: anObject\x0a\x09\x22Answer the class name of `anObject`, or `undefined` \x0a\x09if `anObject` is not an Smalltalk object\x22\x0a\x09\x0a\x09<return anObject.klass != null && anObject.klass.className>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "collect:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
collection=$recv(self._class())._new();
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(collection)._add_($recv(aBlock)._value_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=collection;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,collection:collection},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| collection |\x0a\x09collection := self class new.\x0a\x09self do: [ :each | collection add: (aBlock value: each) ].\x0a\x09^ collection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "class", "do:", "add:", "value:"]
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "detect:ifNone:",
protocol: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(aBlock)._value_(each);
if($core.assert($1)){
throw $early=[each];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv(anotherBlock)._value();
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09self do: [ :each | (aBlock value: each) ifTrue: [ ^each ] ].\x0a\x09^ anotherBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:", "value:", "value"]
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

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
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09<\x0a\x09\x09var el, keys, i;\x0a\x09\x09el = self['@fastBuckets'];\x0a\x09\x09keys = Object.keys(el);\x0a\x09\x09for (i = 0; i < keys.length; ++i) {\x0a\x09\x09\x09var fastBucket = el[keys[i]], fn = fastBucket.fn, store = Object.keys(fastBucket.store);\x0a\x09\x09\x09if (fn) { for (var j = 0; j < store.length; ++j) { aBlock._value_(fn(store[j])); } }\x0a\x09\x09\x09else { store._do_(aBlock); }\x0a\x09\x09}\x0a\x09\x09el = self['@slowBucketStores'];\x0a\x09\x09for (i = 0; i < el.length; ++i) { el[i]._do_(aBlock); }\x0a\x09\x09self['@defaultBucket']._do_(aBlock);\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "includes:",
protocol: 'testing',
fn: function (anObject){
var self=this;
var bucket;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
bucket=self._bucketsOfElement_(anObject);
$2=$recv(bucket)._second();
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv(bucket)._third();
$4=$recv(bucket)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$1=$recv($3)._includes_($4);
} else {
var primitiveBucket;
primitiveBucket=$receiver;
$1=self._includes_in_($recv(bucket)._first(),primitiveBucket);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject,bucket:bucket},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "includes: anObject\x0a\x09| bucket |\x0a\x09bucket := self bucketsOfElement: anObject.\x0a\x09^ bucket second\x0a\x09\x09ifNil: [ bucket third includes: bucket first ]\x0a\x09\x09ifNotNil: [ :primitiveBucket | self includes: bucket first in: primitiveBucket ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bucketsOfElement:", "ifNil:ifNotNil:", "second", "includes:", "third", "first", "includes:in:"]
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "includes:in:",
protocol: 'private',
fn: function (anObject,anotherObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return anObject in anotherObject.store;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includes:in:",{anObject:anObject,anotherObject:anotherObject},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anotherObject"],
source: "includes: anObject in: anotherObject\x0a\x09<return anObject in anotherObject.store>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Set.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@defaultBucket"]=[];
self._initializeSlowBucketStores();
$1=self._removeAll();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09defaultBucket := #().\x0a\x09self\x0a\x09\x09initializeSlowBucketStores;\x0a\x09\x09removeAll",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "initializeSlowBucketStores", "removeAll"]
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "initializeSlowBucketStores",
protocol: 'initialization',
fn: function (){
var self=this;
function $ArrayBucketStore(){return $globals.ArrayBucketStore||(typeof ArrayBucketStore=="undefined"?nil:ArrayBucketStore)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($ArrayBucketStore())._hashBlock_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._classNameOf_(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hashBlock:"]=1;
//>>excludeEnd("ctx");
self["@slowBucketStores"]=[$1,$recv($ArrayBucketStore())._hashBlock_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._jsConstructorNameOf_(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}))];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeSlowBucketStores",{},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeSlowBucketStores\x0a\x09slowBucketStores := {\x0a\x09\x09ArrayBucketStore hashBlock: [ :x | self classNameOf: x ].\x0a\x09\x09ArrayBucketStore hashBlock: [ :x | self jsConstructorNameOf: x ]\x0a\x09}",
referencedClasses: ["ArrayBucketStore"],
//>>excludeEnd("ide");
messageSends: ["hashBlock:", "classNameOf:", "jsConstructorNameOf:"]
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "jsConstructorNameOf:",
protocol: 'private',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return anObject.constructor && anObject.constructor.name;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsConstructorNameOf:",{anObject:anObject},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "jsConstructorNameOf: anObject\x0a\x09<return anObject.constructor && anObject.constructor.name>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Set.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printOn:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(" (");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
self._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._printOn_(aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aStream)._nextPutAll_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self \x0a\x09\x09do: [ :each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"]
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "remove:ifAbsent:",
protocol: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;
var bucket;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1,$receiver;
var $early={};
try {
bucket=self._bucketsOfElement_(anObject);
$2=$recv(bucket)._second();
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv(bucket)._third();
$4=$recv(bucket)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$recv($3)._remove_ifAbsent_($4,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(aBlock)._value();
throw $early=[$5];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self["@size"]=$recv(self["@size"]).__minus((1));
$1=self["@size"];
} else {
var primitiveBucket;
primitiveBucket=$receiver;
$1=self._remove_in_($recv(bucket)._first(),primitiveBucket);
};
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock,bucket:bucket},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09| bucket |\x0a\x09bucket := self bucketsOfElement: anObject.\x0a\x09^ bucket second\x0a\x09\x09ifNil: [ bucket third remove: bucket first ifAbsent: [ ^aBlock value ]. size := size - 1 ]\x0a\x09\x09ifNotNil: [ :primitiveBucket | self remove: bucket first in: primitiveBucket ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bucketsOfElement:", "ifNil:ifNotNil:", "second", "remove:ifAbsent:", "third", "first", "value", "-", "remove:in:"]
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "remove:in:",
protocol: 'private',
fn: function (anObject,anotherObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if (delete anotherObject.store[anObject]) self['@size']--;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:in:",{anObject:anObject,anotherObject:anotherObject},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anotherObject"],
source: "remove: anObject in: anotherObject\x0a\x09<if (delete anotherObject.store[anObject]) self['@size']-->",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "removeAll",
protocol: 'adding/removing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		self['@fastBuckets'] = {
			'boolean': { store: Object.create(null), fn: function (x) { return {'true': true, 'false': false, 'null': null}[x]; } },
			'number': { store: Object.create(null), fn: Number },
			'string': { store: Object.create(null) }
		};
		self['@slowBucketStores'].forEach(function (x) { x._removeAll(); });
		self['@defaultBucket']._removeAll();
		self['@size'] = 0;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeAll",{},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeAll\x0a\x09<\x0a\x09\x09self['@fastBuckets'] = {\x0a\x09\x09\x09'boolean': { store: Object.create(null), fn: function (x) { return {'true': true, 'false': false, 'null': null}[x]; } },\x0a\x09\x09\x09'number': { store: Object.create(null), fn: Number },\x0a\x09\x09\x09'string': { store: Object.create(null) }\x0a\x09\x09};\x0a\x09\x09self['@slowBucketStores'].forEach(function (x) { x._removeAll(); });\x0a\x09\x09self['@defaultBucket']._removeAll();\x0a\x09\x09self['@size'] = 0;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "select:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
collection=$recv(self._class())._new();
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(aBlock)._value_(each);
if($core.assert($1)){
return $recv(collection)._add_(each);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=collection;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,collection:collection},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "select: aBlock\x0a\x09| collection |\x0a\x09collection := self class new.\x0a\x09self do: [ :each |\x0a\x09\x09(aBlock value: each) ifTrue: [\x0a\x09\x09\x09collection add: each ] ].\x0a\x09^ collection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "class", "do:", "ifTrue:", "value:", "add:"]
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@size"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Set);



$core.addClass('ProtoStream', $globals.Object, [], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ProtoStream.comment="I am the abstract base for different accessor for a sequence of objects. This sequence is referred to as my \x22contents\x22.\x0aMy instances are read/write streams modifying the contents.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "<<",
protocol: 'writing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._write_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<<",{anObject:anObject},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "<< anObject\x0a\x09self write: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "atEnd",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atEnd\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "atStart",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atStart",{},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atStart\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents",{},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(self._next());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09[ self atEnd ] whileFalse: [ aBlock value: self next ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileFalse:", "atEnd", "value:", "next"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "isEmpty",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._atStart())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEmpty\x0a\x09^ self atStart and: [ self atEnd ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "atStart", "atEnd"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "next",
protocol: 'reading',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._atEnd();
if($core.assert($2)){
$1=nil;
} else {
$1=self._subclassResponsibility();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09^ self atEnd\x0a\x09\x09ifTrue: [ nil ]\x0a\x09\x09ifFalse: [ self subclassResponsibility ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "atEnd", "subclassResponsibility"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: 'writing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "nextPut: anObject\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "nextPutAll:",
protocol: 'writing',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._nextPut_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aCollection:aCollection},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "nextPutAll: aCollection\x0a\x09aCollection do: [ :each |\x0a\x09\x09self nextPut: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "nextPut:"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "nextPutJSObject:",
protocol: 'writing',
fn: function (aJSObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._nextPut_(aJSObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutJSObject:",{aJSObject:aJSObject},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "nextPutJSObject: aJSObject\x0a\x09self nextPut: aJSObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "nextPutString:",
protocol: 'writing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._nextPut_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPutString: aString\x0a\x09self nextPut: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "peek",
protocol: 'reading',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._atEnd();
if($core.assert($2)){
$1=nil;
} else {
$1=self._subclassResponsibility();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"peek",{},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "peek\x0a\x09^ self atEnd\x0a\x09\x09ifTrue: [ nil ]\x0a\x09\x09ifFalse: [ self subclassResponsibility ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "atEnd", "subclassResponsibility"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "resetContents",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetContents",{},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetContents\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "setToEnd",
protocol: 'positioning',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setToEnd",{},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setToEnd\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "setToStart",
protocol: 'positioning',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._reset();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setToStart",{},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setToStart\x0a\x09self reset",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reset"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "write:",
protocol: 'writing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anObject)._putOn_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"write:",{anObject:anObject},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "write: anObject\x0a\x09anObject putOn: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["putOn:"]
}),
$globals.ProtoStream);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._setCollection_(aCollection);
$recv($2)._setStreamSize_($recv(aCollection)._size());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},$globals.ProtoStream.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "on: aCollection\x0a\x09\x09^ self new\x0a\x09\x09setCollection: aCollection;\x0a\x09\x09setStreamSize: aCollection size;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setCollection:", "new", "setStreamSize:", "size", "yourself"]
}),
$globals.ProtoStream.klass);


$core.addClass('Stream', $globals.ProtoStream, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Stream.comment="I represent an accessor for a sequence of objects. This sequence is referred to as my \x22contents\x22.\x0aMy instances are read/write streams to the contents sequence collection.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "atEnd",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._position()).__eq(self._size());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atEnd\x0a\x09^ self position = self size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "position", "size"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "atStart",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._position()).__eq((0));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atStart",{},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atStart\x0a\x09^ self position = 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "position"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "close",
protocol: 'actions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "collection",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@collection"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09^ collection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._collection())._copyFrom_to_((1),self._streamSize());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents",{},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09^ self collection\x0a\x09\x09copyFrom: 1\x0a\x09\x09to: self streamSize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copyFrom:to:", "collection", "streamSize"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "flush",
protocol: 'actions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flush",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "isEmpty",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._size()).__eq((0));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEmpty\x0a\x09^ self size = 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "size"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "next",
protocol: 'reading',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$3,$1;
$2=self._atEnd();
if($core.assert($2)){
$1=nil;
} else {
$4=self._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__plus((1));
self._position_($3);
$1=$recv(self["@collection"])._at_(self._position());
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09^ self atEnd\x0a\x09\x09ifTrue: [ nil ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self position: self position + 1.\x0a\x09\x09\x09collection at: self position ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "atEnd", "position:", "+", "position", "at:"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "next:",
protocol: 'reading',
fn: function (anInteger){
var self=this;
var tempCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
tempCollection=$recv($recv(self._collection())._class())._new();
$recv(anInteger)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._atEnd();
if(!$core.assert($1)){
return $recv(tempCollection)._add_(self._next());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=tempCollection;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger,tempCollection:tempCollection},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09\x09self atEnd ifFalse: [\x0a\x09\x09tempCollection add: self next ]].\x0a\x09^ tempCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "atEnd", "add:", "next"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: 'writing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4;
$2=self._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__plus((1));
self._position_($1);
$3=self._collection();
$4=self._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=2;
//>>excludeEnd("ctx");
$recv($3)._at_put_($4,anObject);
self._setStreamSize_($recv(self._streamSize())._max_(self._position()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "nextPut: anObject\x0a\x09self position: self position + 1.\x0a\x09self collection at: self position put: anObject.\x0a\x09self setStreamSize: (self streamSize max: self position)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["position:", "+", "position", "at:put:", "collection", "setStreamSize:", "max:", "streamSize"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "peek",
protocol: 'reading',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._atEnd();
if(!$core.assert($2)){
$1=$recv(self._collection())._at_($recv(self._position()).__plus((1)));
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"peek",{},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "peek\x0a\x09^ self atEnd ifFalse: [\x0a\x09\x09self collection at: self position + 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "atEnd", "at:", "collection", "+", "position"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "position",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@position"];
if(($receiver = $2) == null || $receiver.isNil){
self["@position"]=(0);
$1=self["@position"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"position",{},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "position\x0a\x09^ position ifNil: [ position := 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "position:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@position"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "position: anInteger\x0a\x09position := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._position_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09self position: 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["position:"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "resetContents",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._reset();
self._setStreamSize_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetContents",{},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetContents\x0a\x09self reset.\x0a\x09self setStreamSize: 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reset", "setStreamSize:"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "setCollection:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@collection"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "setCollection: aCollection\x0a\x09collection := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "setStreamSize:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@streamSize"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "setStreamSize: anInteger\x0a\x09streamSize := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "setToEnd",
protocol: 'positioning',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._position_(self._size());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setToEnd",{},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setToEnd\x0a\x09self position: self size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["position:", "size"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._streamSize();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ self streamSize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["streamSize"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "skip:",
protocol: 'positioning',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._position_($recv($recv(self._position()).__plus(anInteger))._min_max_(self._size(),(0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"skip:",{anInteger:anInteger},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "skip: anInteger\x0a\x09self position: ((self position + anInteger) min: self size max: 0)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["position:", "min:max:", "+", "position", "size"]
}),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "streamSize",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@streamSize"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "streamSize\x0a\x09^ streamSize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Stream);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._setCollection_(aCollection);
$recv($2)._setStreamSize_($recv(aCollection)._size());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},$globals.Stream.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "on: aCollection\x0a\x09\x09^ self new\x0a\x09\x09setCollection: aCollection;\x0a\x09\x09setStreamSize: aCollection size;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setCollection:", "new", "setStreamSize:", "size", "yourself"]
}),
$globals.Stream.klass);


$core.addClass('StringStream', $globals.Stream, [], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StringStream.comment="I am a Stream specific to `String` objects.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "cr",
protocol: 'writing',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._nextPutAll_($recv($String())._cr());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cr",{},$globals.StringStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cr\x0a\x09^ self nextPutAll: String cr",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "cr"]
}),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "crlf",
protocol: 'writing',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._nextPutAll_($recv($String())._crlf());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"crlf",{},$globals.StringStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "crlf\x0a\x09^ self nextPutAll: String crlf",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "crlf"]
}),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "lf",
protocol: 'writing',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._nextPutAll_($recv($String())._lf());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lf",{},$globals.StringStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lf\x0a\x09^ self nextPutAll: String lf",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "lf"]
}),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "next:",
protocol: 'reading',
fn: function (anInteger){
var self=this;
var tempCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
tempCollection=$recv($recv(self._collection())._class())._new();
$recv(anInteger)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._atEnd();
if(!$core.assert($1)){
tempCollection=$recv(tempCollection).__comma(self._next());
return tempCollection;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=tempCollection;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger,tempCollection:tempCollection},$globals.StringStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09\x09self atEnd ifFalse: [\x0a\x09\x09tempCollection := tempCollection, self next ]].\x0a\x09^ tempCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "atEnd", ",", "next"]
}),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: 'writing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._nextPutAll_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{aString:aString},$globals.StringStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPut: aString\x0a\x09self nextPutAll: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:"]
}),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "nextPutAll:",
protocol: 'writing',
fn: function (aString){
var self=this;
var pre,post;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5,$6,$9,$8,$10,$7,$11,$12,$14,$13;
$1=self._atEnd();
if($core.assert($1)){
$3=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._setCollection_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["setCollection:"]=1;
//>>excludeEnd("ctx");
} else {
$4=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$5=self._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=1;
//>>excludeEnd("ctx");
pre=$recv($4)._copyFrom_to_((1),$5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=1;
//>>excludeEnd("ctx");
pre;
$6=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$9=self._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=2;
//>>excludeEnd("ctx");
$8=$recv($9).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$10=$recv(aString)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__plus($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$11=$recv(self._collection())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
post=$recv($6)._copyFrom_to_($7,$11);
post;
$12=$recv($recv(pre).__comma(aString)).__comma(post);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
self._setCollection_($12);
};
$14=self._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=3;
//>>excludeEnd("ctx");
$13=$recv($14).__plus($recv(aString)._size());
self._position_($13);
self._setStreamSize_($recv(self._streamSize())._max_(self._position()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString,pre:pre,post:post},$globals.StringStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPutAll: aString\x0a\x09| pre post |\x0a\x09self atEnd ifTrue: [ self setCollection: self collection, aString ] ifFalse: [\x0a\x09\x09pre := self collection copyFrom: 1 to: self position.\x0a\x09\x09post := self collection copyFrom: (self position + 1 + aString size) to: self collection size.\x0a\x09\x09self setCollection: pre, aString, post\x0a\x09].\x0a\x09self position: self position + aString size.\x0a\x09self setStreamSize: (self streamSize max: self position)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "atEnd", "setCollection:", ",", "collection", "copyFrom:to:", "position", "+", "size", "position:", "setStreamSize:", "max:", "streamSize"]
}),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "nextPutString:",
protocol: 'writing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._nextPutAll_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString},$globals.StringStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPutString: aString\x0a\x09self nextPutAll: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:"]
}),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "space",
protocol: 'writing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._nextPut_(" ");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"space",{},$globals.StringStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "space\x0a\x09self nextPut: ' '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:"]
}),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "tab",
protocol: 'writing',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._nextPutAll_($recv($String())._tab());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tab",{},$globals.StringStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tab\x0a\x09^ self nextPutAll: String tab",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "tab"]
}),
$globals.StringStream);



$core.addClass('Queue', $globals.Object, ['read', 'readIndex', 'write'], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Queue.comment="I am a one-sided queue.\x0a\x0a## Usage\x0a\x0aUse `#nextPut:` to add items to the queue.\x0aUse `#next` or `#nextIfAbsent:` to get (and remove) the next item in the queue.\x0a\x0a## Implementation notes\x0a\x0aA Queue uses two OrderedCollections inside,\x0a`read` is at the front, is not modified and only read using `readIndex`.\x0a`write` is at the back and is appended new items.\x0aWhen `read` is exhausted, `write` is promoted to `read` and new `write` is created.\x0a\x0aAs a consequence, no data moving is done by me, write appending may do data moving\x0awhen growing `write`, but this is left to engine to implement as good as it chooses to.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Queue.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@read"]=$recv($OrderedCollection())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@write"]=$recv($OrderedCollection())._new();
self["@readIndex"]=(1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Queue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09read := OrderedCollection new.\x0a\x09write := OrderedCollection new.\x0a\x09readIndex := 1",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.Queue);

$core.addMethod(
$core.method({
selector: "next",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._nextIfAbsent_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("Cannot read from empty Queue.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{},$globals.Queue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09^ self nextIfAbsent: [ self error: 'Cannot read from empty Queue.' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextIfAbsent:", "error:"]
}),
$globals.Queue);

$core.addMethod(
$core.method({
selector: "nextIfAbsent:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
var result;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
var $early={};
try {
result=$recv(self["@read"])._at_ifAbsent_(self["@readIndex"],(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(self["@write"])._isEmpty();
if($core.assert($1)){
$2=$recv(self["@readIndex"]).__gt((1));
if($core.assert($2)){
self["@read"]=[];
self["@read"];
self["@readIndex"]=(1);
self["@readIndex"];
};
$3=$recv(aBlock)._value();
throw $early=[$3];
};
self["@read"]=self["@write"];
self["@read"];
self["@readIndex"]=(1);
self["@readIndex"];
self["@write"]=$recv($OrderedCollection())._new();
self["@write"];
return $recv(self["@read"])._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@read"])._at_put_(self["@readIndex"],nil);
self["@readIndex"]=$recv(self["@readIndex"]).__plus((1));
$4=result;
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextIfAbsent:",{aBlock:aBlock,result:result},$globals.Queue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nextIfAbsent: aBlock\x0a\x09| result |\x0a\x09result := read at: readIndex ifAbsent: [\x0a\x09\x09write isEmpty ifTrue: [\x0a\x09\x09\x09readIndex > 1 ifTrue: [ read := #(). readIndex := 1 ].\x0a\x09\x09\x09^ aBlock value ].\x0a\x09\x09read := write.\x0a\x09\x09readIndex := 1.\x0a\x09\x09write := OrderedCollection new.\x0a\x09\x09read first ].\x0a\x09read at: readIndex put: nil.\x0a\x09readIndex := readIndex + 1.\x0a\x09^ result",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "ifTrue:", "isEmpty", ">", "value", "new", "first", "at:put:", "+"]
}),
$globals.Queue);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@write"])._add_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},$globals.Queue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "nextPut: anObject\x0a\x09write add: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.Queue);



$core.addClass('RegularExpression', $globals.Object, [], 'Kernel-Collections');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.RegularExpression.comment="I represent a regular expression object. My instances are JavaScript `RegExp` object.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "compile:",
protocol: 'evaluating',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.compile(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},$globals.RegularExpression)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "compile: aString\x0a\x09<return self.compile(aString)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RegularExpression);

$core.addMethod(
$core.method({
selector: "exec:",
protocol: 'evaluating',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.exec(aString) || nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exec:",{aString:aString},$globals.RegularExpression)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "exec: aString\x0a\x09<return self.exec(aString) || nil>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RegularExpression);

$core.addMethod(
$core.method({
selector: "test:",
protocol: 'evaluating',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.test(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test:",{aString:aString},$globals.RegularExpression)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "test: aString\x0a\x09<return self.test(aString)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RegularExpression);


$core.addMethod(
$core.method({
selector: "fromString:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._fromString_flag_(aString,"");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},$globals.RegularExpression.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "fromString: aString\x0a\x09\x09^ self fromString: aString flag: ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromString:flag:"]
}),
$globals.RegularExpression.klass);

$core.addMethod(
$core.method({
selector: "fromString:flag:",
protocol: 'instance creation',
fn: function (aString,anotherString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new RegExp(aString, anotherString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromString:flag:",{aString:aString,anotherString:anotherString},$globals.RegularExpression.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "fromString: aString flag: anotherString\x0a\x09<return new RegExp(aString, anotherString)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RegularExpression.klass);

});
