smalltalk.addPackage('Kernel-Collections', {});
smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (anAssociation) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._class()).__eq(_st(anAssociation)._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(self)._key()).__eq(_st(anAssociation)._key()))._and_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(self)._value()).__eq(_st(anAssociation)._value());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{anAssociation:anAssociation}, smalltalk.Association)});}
}),
smalltalk.Association);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@key"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.Association)});}
}),
smalltalk.Association);

smalltalk.addMethod(
"_key_",
smalltalk.method({
selector: "key:",
fn: function (aKey) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@key"]=aKey;
return self}, function($ctx1) {$ctx1.fill(self,"key:",{aKey:aKey}, smalltalk.Association)});}
}),
smalltalk.Association);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(aStream){
return smalltalk.withContext(function($ctx2) {return _st(self)._storeOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({aStream:aStream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{}, smalltalk.Association)});}
}),
smalltalk.Association);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
fn: function (aStream) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@key"])._storeOn_(aStream);
_st(aStream)._nextPutAll_("->");
_st(self["@value"])._storeOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"storeOn:",{aStream:aStream}, smalltalk.Association)});}
}),
smalltalk.Association);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{}, smalltalk.Association)});}
}),
smalltalk.Association);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@value"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aValue:aValue}, smalltalk.Association)});}
}),
smalltalk.Association);


smalltalk.addMethod(
"_key_value_",
smalltalk.method({
selector: "key:value:",
fn: function (aKey, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._key_(aKey);
_st($2)._value_(aValue);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"key:value:",{aKey:aKey,aValue:aValue}, smalltalk.Association.klass)});}
}),
smalltalk.Association.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._copy();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,",",{aCollection:aCollection}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=aCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addAll:",{aCollection:aCollection}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Array || Array))._withAll_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray",{}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asArray())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._asJSON();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asOrderedCollection",
smalltalk.method({
selector: "asOrderedCollection",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asOrderedCollection",{}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asSet",
smalltalk.method({
selector: "asSet",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Set || Set))._withAll_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSet",{}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
fn: function (aBlock) {
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { var $1;
stream=_st(_st(_st(self)._class())._new())._writeStream();
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(stream)._nextPut_(_st(aBlock)._value_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=_st(stream)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,stream:stream}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWith_",
smalltalk.method({
selector: "copyWith:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._copy();
_st($2)._add_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWith:",{anObject:anObject}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWithAll_",
smalltalk.method({
selector: "copyWithAll:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._copy();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWithAll:",{aCollection:aCollection}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWithoutAll_",
smalltalk.method({
selector: "copyWithoutAll:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._reject_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(aCollection)._includes_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWithoutAll:",{aCollection:aCollection}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_detect_",
smalltalk.method({
selector: "detect:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._detect_ifNone_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:",{aBlock:aBlock}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock, anotherBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
		for(var i = 0; i < self.length; i++)
			if(aBlock(self[i]))
				return self[i];
		return anotherBlock();
	;
return self}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { for(var i=0;i<self.length;i++){aBlock(self[i]);};
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_do_separatedBy_",
smalltalk.method({
selector: "do:separatedBy:",
fn: function (aBlock, anotherBlock) {
var self=this;
var first;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2;
first=true;
$1=self;
$2=(function(each){
return smalltalk.withContext(function($ctx2) {$3=first;
if(smalltalk.assert($3)){
first=false;
first;
} else {
_st(anotherBlock)._value();
};
return _st(aBlock)._value_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})});
_st($1)._do_($2);
return self}, function($ctx1) {$ctx1.fill(self,"do:separatedBy:",{aBlock:aBlock,anotherBlock:anotherBlock,first:first}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_errorNotFound",
smalltalk.method({
selector: "errorNotFound",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("Object is not in the collection");
return self}, function($ctx1) {$ctx1.fill(self,"errorNotFound",{}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_ifEmpty_",
smalltalk.method({
selector: "ifEmpty:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._isEmpty();
if(smalltalk.assert($2)){
$1=_st(aBlock)._value();
} else {
$1=self;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifEmpty:",{aBlock:aBlock}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_ifNotEmpty_",
smalltalk.method({
selector: "ifNotEmpty:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._notEmpty();
_st($1)._ifTrue_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"ifNotEmpty:",{aBlock:aBlock}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
fn: function (anObject) {
var self=this;
var sentinel;
return smalltalk.withContext(function($ctx1) { var $1;
sentinel=_st((smalltalk.Object || Object))._new();
$1=_st(_st(self)._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return sentinel;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))).__tild_eq(sentinel);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject,sentinel:sentinel}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_inject_into_",
smalltalk.method({
selector: "inject:into:",
fn: function (anObject, aBlock) {
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { var $1;
result=anObject;
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {result=_st(aBlock)._value_value_(result,each);
return result;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inject:into:",{anObject:anObject,aBlock:aBlock,result:result}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_intersection_",
smalltalk.method({
selector: "intersection:",
fn: function (aCollection) {
var self=this;
var set,outputSet;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4;
set=_st(self)._asSet();
outputSet=_st((smalltalk.Set || Set))._new();
$1=aCollection;
$2=(function(each){
return smalltalk.withContext(function($ctx2) {$3=_st(_st(set)._includes_(each))._and_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(outputSet)._includes_(each))._not();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
return _st(outputSet)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})});
_st($1)._do_($2);
$4=_st(_st(self)._class())._withAll_(_st(outputSet)._asArray());
return $4;
}, function($ctx1) {$ctx1.fill(self,"intersection:",{aCollection:aCollection,set:set,outputSet:outputSet}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_isEmpty",
smalltalk.method({
selector: "isEmpty",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._size()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_notEmpty",
smalltalk.method({
selector: "notEmpty",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._isEmpty())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"notEmpty",{}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_occurrencesOf_",
smalltalk.method({
selector: "occurrencesOf:",
fn: function (anObject) {
var self=this;
var tally;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4;
tally=(0);
$1=self;
$2=(function(each){
return smalltalk.withContext(function($ctx2) {$3=_st(anObject).__eq(each);
if(smalltalk.assert($3)){
tally=_st(tally).__plus((1));
return tally;
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})});
_st($1)._do_($2);
$4=tally;
return $4;
}, function($ctx1) {$ctx1.fill(self,"occurrencesOf:",{anObject:anObject,tally:tally}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(aStream){
return smalltalk.withContext(function($ctx2) {_st(aStream)._nextPutAll_(_st(smalltalk.Object.fn.prototype._printString.apply(_st(self), [])).__comma(" ("));
_st(self)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(aStream)._nextPutAll_(_st(each)._printString());
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {return _st(aStream)._nextPutAll_(" ");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(aStream)._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({aStream:aStream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_readStream",
smalltalk.method({
selector: "readStream",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"readStream",{}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_reject_",
smalltalk.method({
selector: "reject:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(aBlock)._value_(each)).__eq(false);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"reject:",{aBlock:aBlock}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._remove_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (anObject, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function (aBlock) {
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4;
stream=_st(_st(_st(self)._class())._new())._writeStream();
$1=self;
$2=(function(each){
return smalltalk.withContext(function($ctx2) {$3=_st(aBlock)._value_(each);
if(smalltalk.assert($3)){
return _st(stream)._nextPut_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})});
_st($1)._do_($2);
$4=_st(stream)._contents();
return $4;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,stream:stream}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"size",{}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._streamClass())._on_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"stream",{}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._streamClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{}, smalltalk.Collection)});}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_writeStream",
smalltalk.method({
selector: "writeStream",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"writeStream",{}, smalltalk.Collection)});}
}),
smalltalk.Collection);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger}, smalltalk.Collection.klass)});}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.Stream || Stream);
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{}, smalltalk.Collection.klass)});}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._add_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject}, smalltalk.Collection.klass)});}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
fn: function (anObject, anotherObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._add_(anObject);
_st($2)._add_(anotherObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:",{anObject:anObject,anotherObject:anotherObject}, smalltalk.Collection.klass)});}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_with_with_",
smalltalk.method({
selector: "with:with:with:",
fn: function (firstObject, secondObject, thirdObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._add_(firstObject);
_st($2)._add_(secondObject);
_st($2)._add_(thirdObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:with:",{firstObject:firstObject,secondObject:secondObject,thirdObject:thirdObject}, smalltalk.Collection.klass)});}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_withAll_",
smalltalk.method({
selector: "withAll:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._addAll_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withAll:",{aCollection:aCollection}, smalltalk.Collection.klass)});}
}),
smalltalk.Collection.klass);


smalltalk.addClass('HashedCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,",",{aCollection:aCollection}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aHashedCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(self)._class()).__eq(_st(aHashedCollection)._class());
if(! smalltalk.assert($1)){
return false;
};
$2=_st(_st(self)._size()).__eq(_st(aHashedCollection)._size());
if(! smalltalk.assert($2)){
return false;
};
$3=_st(_st(self)._associations()).__eq(_st(aHashedCollection)._associations());
return $3;
}, function($ctx1) {$ctx1.fill(self,"=",{aHashedCollection:aHashedCollection}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anAssociation) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._at_put_(_st(anAssociation)._key(),_st(anAssociation)._value());
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anAssociation:anAssociation}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
fn: function (aHashedCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.Collection.fn.prototype._addAll_.apply(_st(self), [_st(aHashedCollection)._associations()]);
$1=aHashedCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addAll:",{aHashedCollection:aHashedCollection}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asDictionary",
smalltalk.method({
selector: "asDictionary",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Dictionary || Dictionary))._fromPairs_(_st(self)._associations());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asDictionary",{}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function () {
var self=this;
var c;
return smalltalk.withContext(function($ctx1) { var $1;
c=_st(_st(self)._class())._new();
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {return _st(c)._at_put_(key,_st(value)._asJSON());
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=c;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{c:c}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_associations",
smalltalk.method({
selector: "associations",
fn: function () {
var self=this;
var associations;
return smalltalk.withContext(function($ctx1) { var $1;
associations=[];
_st(_st(self)._keys())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(associations)._add_(_st((smalltalk.Association || Association))._key_value_(each,_st(self)._at_(each)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=associations;
return $1;
}, function($ctx1) {$ctx1.fill(self,"associations",{associations:associations}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_associationsDo_",
smalltalk.method({
selector: "associationsDo:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._associations())._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"associationsDo:",{aBlock:aBlock}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (aKey) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._at_ifAbsent_(aKey,(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{aKey:aKey}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (aKey, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._includesKey_(aKey);
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._basicAt_(aKey);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifAbsentPut_",
smalltalk.method({
selector: "at:ifAbsentPut:",
fn: function (aKey, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._at_ifAbsent_(aKey,(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._at_put_(aKey,_st(aBlock)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsentPut:",{aKey:aKey,aBlock:aBlock}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifPresent_",
smalltalk.method({
selector: "at:ifPresent:",
fn: function (aKey, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._includesKey_(aKey);
if(smalltalk.assert($2)){
$1=_st(aBlock)._value_(_st(self)._at_(aKey));
} else {
$1=nil;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{aKey:aKey,aBlock:aBlock}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifPresent_ifAbsent_",
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
fn: function (aKey, aBlock, anotherBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._includesKey_(aKey);
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {return _st(aBlock)._value_(_st(self)._at_(aKey));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aKey:aKey,aBlock:aBlock,anotherBlock:anotherBlock}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (aKey, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_put_(aKey,aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
fn: function (aBlock) {
var self=this;
var newDict;
return smalltalk.withContext(function($ctx1) { var $1;
newDict=_st(_st(self)._class())._new();
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {return _st(newDict)._at_put_(key,_st(aBlock)._value_(value));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=newDict;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,newDict:newDict}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex, anotherIndex) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function () {
var self=this;
var copy;
return smalltalk.withContext(function($ctx1) { var $1;
copy=_st(_st(self)._class())._new();
_st(self)._associationsDo_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(copy)._at_put_(_st(each)._key(),_st(_st(each)._value())._deepCopy());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=copy;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{copy:copy}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock, anotherBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._values())._detect_ifNone_(aBlock,anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._values())._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._values())._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_includesKey_",
smalltalk.method({
selector: "includesKey:",
fn: function (aKey) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.hasOwnProperty(aKey);
return self}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_keys",
smalltalk.method({
selector: "keys",
fn: function () {
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
return self}, function($ctx1) {$ctx1.fill(self,"keys",{}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_keysAndValuesDo_",
smalltalk.method({
selector: "keysAndValuesDo:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._associationsDo_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(aBlock)._value_value_(_st(each)._key(),_st(each)._value());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(aStream){
return smalltalk.withContext(function($ctx2) {_st(aStream)._nextPutAll_(_st(_st("a ").__comma(_st(_st(self)._class())._name())).__comma("("));
_st(_st(self)._associations())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(each)._storeOn_(aStream);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {return _st(aStream)._nextPutAll_(" , ");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(aStream)._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({aStream:aStream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (aKey, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._removeKey_ifAbsent_(aKey,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{aKey:aKey,aBlock:aBlock}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_removeKey_",
smalltalk.method({
selector: "removeKey:",
fn: function (aKey) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._remove_(aKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeKey:",{aKey:aKey}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_removeKey_ifAbsent_",
smalltalk.method({
selector: "removeKey:ifAbsent:",
fn: function (aKey, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._includesKey_(aKey);
if(smalltalk.assert($2)){
$1=_st(self)._basicDelete_(aKey);
} else {
$1=_st(aBlock)._value();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function (aBlock) {
var self=this;
var newDict;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4;
newDict=_st(_st(self)._class())._new();
$1=self;
$2=(function(key,value){
return smalltalk.withContext(function($ctx2) {$3=_st(aBlock)._value_(value);
if(smalltalk.assert($3)){
return _st(newDict)._at_put_(key,value);
};
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})});
_st($1)._keysAndValuesDo_($2);
$4=newDict;
return $4;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,newDict:newDict}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function () {
var self=this;
var copy;
return smalltalk.withContext(function($ctx1) { var $1;
copy=_st(_st(self)._class())._new();
_st(self)._associationsDo_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(copy)._at_put_(_st(each)._key(),_st(each)._value());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=copy;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{copy:copy}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._keys())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
fn: function (aStream) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aStream)._nextPutAll_("#{");
_st(_st(self)._associations())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._storeOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(aStream)._nextPutAll_(". ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(aStream)._nextPutAll_("}");
return self}, function($ctx1) {$ctx1.fill(self,"storeOn:",{aStream:aStream}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_values",
smalltalk.method({
selector: "values",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._keys())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._at_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{}, smalltalk.HashedCollection)});}
}),
smalltalk.HashedCollection);


smalltalk.addMethod(
"_fromPairs_",
smalltalk.method({
selector: "fromPairs:",
fn: function (aCollection) {
var self=this;
var dict;
return smalltalk.withContext(function($ctx1) { var $1;
dict=_st(self)._new();
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(dict)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=dict;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromPairs:",{aCollection:aCollection,dict:dict}, smalltalk.HashedCollection.klass)});}
}),
smalltalk.HashedCollection.klass);


smalltalk.addClass('Dictionary', smalltalk.HashedCollection, ['keys', 'values'], 'Kernel-Collections');
smalltalk.addMethod(
"_asHashedCollection",
smalltalk.method({
selector: "asHashedCollection",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HashedCollection || HashedCollection))._fromPairs_(_st(self)._associations());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asHashedCollection",{}, smalltalk.Dictionary)});}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asHashedCollection())._asJSON();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{}, smalltalk.Dictionary)});}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (aKey, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var index;
		for(var i=0;i<self['@keys'].length;i++){
			if(self['@keys'][i].__eq(aKey)) {index = i;}
		};
		if(typeof index === 'undefined') {
			return aBlock();
		} else {
			return self['@values'][index];
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock}, smalltalk.Dictionary)});}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (aKey, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var index = self['@keys'].indexOf(aKey);
		if(index === -1) {
			self['@values'].push(aValue);
			self['@keys'].push(aKey);
		} else {
			self['@values'][index] = aValue;
		};

		return aValue;
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue}, smalltalk.Dictionary)});}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_includesKey_",
smalltalk.method({
selector: "includesKey:",
fn: function (aKey) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@keys"])._includes_(aKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey}, smalltalk.Dictionary)});}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.HashedCollection.fn.prototype._initialize.apply(_st(self), []);
self["@keys"]=[];
self["@values"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Dictionary)});}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_keyAtValue_",
smalltalk.method({
selector: "keyAtValue:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._associations())._detect_ifNone_((function(k,v){
return smalltalk.withContext(function($ctx2) {return _st(v).__eq_eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({k:k,v:v},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._error_("Not found");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._key();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyAtValue:",{anObject:anObject}, smalltalk.Dictionary)});}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_keys",
smalltalk.method({
selector: "keys",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@keys"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"keys",{}, smalltalk.Dictionary)});}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_removeKey_ifAbsent_",
smalltalk.method({
selector: "removeKey:ifAbsent:",
fn: function (aKey, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
            var index = self['@keys'].indexOf(aKey);
            if(index === -1) {
                return aBlock()
            } else {
                var value;
                self['@keys'].splice(index, 1);
                value = self['@values'].splice(index, 1);
                return value[0];
            };
    ;
return self}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock}, smalltalk.Dictionary)});}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_valueAt_",
smalltalk.method({
selector: "valueAt:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._associationsDo_((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueAt:",{anObject:anObject}, smalltalk.Dictionary)});}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_values",
smalltalk.method({
selector: "values",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@values"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{}, smalltalk.Dictionary)});}
}),
smalltalk.Dictionary);



smalltalk.addClass('SequenceableCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$3;
var $early={};
try {
$1=_st(_st(_st(self)._class()).__eq(_st(aCollection)._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._size()).__eq(_st(aCollection)._size());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
return false;
};
$2=self;
$3=(function(each,i){
return smalltalk.withContext(function($ctx2) {$4=_st(_st(aCollection)._at_(i)).__eq(each);
if(! smalltalk.assert($4)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1)})});
_st($2)._withIndexDo_($3);
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"=",{aCollection:aCollection}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_addLast_",
smalltalk.method({
selector: "addLast:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._add_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"addLast:",{anObject:anObject}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_allButFirst",
smalltalk.method({
selector: "allButFirst",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._copyFrom_to_((2),_st(self)._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"allButFirst",{}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_allButLast",
smalltalk.method({
selector: "allButLast",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._copyFrom_to_((1),_st(_st(self)._size()).__minus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"allButLast",{}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (anIndex) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._at_ifAbsent_(anIndex,(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{anIndex:anIndex}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (anIndex, anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._at_(_st(_st(self)._size())._atRandom());
return $1;
}, function($ctx1) {$ctx1.fill(self,"atRandom",{}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex, anotherIndex) {
var self=this;
var range,newCollection;
return smalltalk.withContext(function($ctx1) { var $1;
range=_st(anIndex)._to_(anotherIndex);
newCollection=_st(_st(self)._class())._new_(_st(range)._size());
_st(range)._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {return _st(newCollection)._at_put_(i,_st(self)._at_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex,range:range,newCollection:newCollection}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function () {
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { var $1;
newCollection=_st(_st(self)._class())._new_(_st(self)._size());
_st(self)._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {return _st(newCollection)._at_put_(index,_st(each)._deepCopy());
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{newCollection:newCollection}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_first",
smalltalk.method({
selector: "first",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"first",{}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_first_",
smalltalk.method({
selector: "first:",
fn: function (n) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._copyFrom_to_((1),n);
return $1;
}, function($ctx1) {$ctx1.fill(self,"first:",{n:n}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_fourth",
smalltalk.method({
selector: "fourth",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._at_((4));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fourth",{}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._indexOf_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_",
smalltalk.method({
selector: "indexOf:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._indexOf_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._errorNotFound();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{anObject:anObject}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_ifAbsent_",
smalltalk.method({
selector: "indexOf:ifAbsent:",
fn: function (anObject, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
		for(var i=0;i<self.length;i++) {
			if(self[i].__eq(anObject)) {return i+1}
		};
		return aBlock();
	;
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_startingAt_",
smalltalk.method({
selector: "indexOf:startingAt:",
fn: function (anObject, start) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._indexOf_startingAt_ifAbsent_(anObject,start,(function(){
return smalltalk.withContext(function($ctx2) {return (0);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:",{anObject:anObject,start:start}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_startingAt_ifAbsent_",
smalltalk.method({
selector: "indexOf:startingAt:ifAbsent:",
fn: function (anObject, start, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
return self}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:ifAbsent:",{anObject:anObject,start:start,aBlock:aBlock}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_last",
smalltalk.method({
selector: "last",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._at_(_st(self)._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"last",{}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_removeLast",
smalltalk.method({
selector: "removeLast",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._remove_(_st(self)._last());
return self}, function($ctx1) {$ctx1.fill(self,"removeLast",{}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_second",
smalltalk.method({
selector: "second",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._at_((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"second",{}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function () {
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { var $1;
newCollection=_st(_st(self)._class())._new_(_st(self)._size());
_st(self)._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {return _st(newCollection)._at_put_(index,each);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1)})}));
$1=newCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{newCollection:newCollection}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_third",
smalltalk.method({
selector: "third",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._at_((3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"third",{}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { for(var i=0;i<self.length;i++){aBlock(self[i], i+1);};
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock}, smalltalk.SequenceableCollection)});}
}),
smalltalk.SequenceableCollection);



smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { self.push(anObject); return anObject;;
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject}, smalltalk.Array)});}
}),
smalltalk.Array);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("[").__comma(_st(_st(self)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._asJavascript();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._join_(", "))).__comma("]");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{}, smalltalk.Array)});}
}),
smalltalk.Array);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
		if((anIndex < 1) || (self.length < anIndex)) {return aBlock()};
		return self[anIndex - 1];
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock}, smalltalk.Array)});}
}),
smalltalk.Array);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (anIndex, anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self[anIndex - 1] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject}, smalltalk.Array)});}
}),
smalltalk.Array);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.join(aString);
return self}, function($ctx1) {$ctx1.fill(self,"join:",{aString:aString}, smalltalk.Array)});}
}),
smalltalk.Array);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (anObject, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
		for(var i=0;i<self.length;i++) {
			if(self[i] == anObject) {
				self.splice(i,1);
				return self;
			}
		};
        aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock}, smalltalk.Array)});}
}),
smalltalk.Array);

smalltalk.addMethod(
"_removeFrom_to_",
smalltalk.method({
selector: "removeFrom:to:",
fn: function (aNumber, anotherNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { self.splice(aNumber - 1,anotherNumber - 1);
return self}, function($ctx1) {$ctx1.fill(self,"removeFrom:to:",{aNumber:aNumber,anotherNumber:anotherNumber}, smalltalk.Array)});}
}),
smalltalk.Array);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return self._copy().reverse();
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{}, smalltalk.Array)});}
}),
smalltalk.Array);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{}, smalltalk.Array)});}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sort",
smalltalk.method({
selector: "sort",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicPerform_("sort");
return $1;
}, function($ctx1) {$ctx1.fill(self,"sort",{}, smalltalk.Array)});}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sort_",
smalltalk.method({
selector: "sort:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
return self}, function($ctx1) {$ctx1.fill(self,"sort:",{aBlock:aBlock}, smalltalk.Array)});}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sorted",
smalltalk.method({
selector: "sorted",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._copy())._sort();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sorted",{}, smalltalk.Array)});}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sorted_",
smalltalk.method({
selector: "sorted:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._copy())._sort_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sorted:",{aBlock:aBlock}, smalltalk.Array)});}
}),
smalltalk.Array);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { return new Array(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger}, smalltalk.Array.klass)});}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new_((1));
_st($2)._at_put_((1),anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject}, smalltalk.Array.klass)});}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
fn: function (anObject, anObject2) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new_((2));
_st($2)._at_put_((1),anObject);
_st($2)._at_put_((2),anObject2);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:",{anObject:anObject,anObject2:anObject2}, smalltalk.Array.klass)});}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_with_with_",
smalltalk.method({
selector: "with:with:with:",
fn: function (anObject, anObject2, anObject3) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new_((3));
_st($2)._at_put_((1),anObject);
_st($2)._at_put_((2),anObject2);
_st($2)._at_put_((3),anObject3);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:with:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3}, smalltalk.Array.klass)});}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_withAll_",
smalltalk.method({
selector: "withAll:",
fn: function (aCollection) {
var self=this;
var instance,index;
return smalltalk.withContext(function($ctx1) { var $1;
index=(1);
instance=_st(self)._new_(_st(aCollection)._size());
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {_st(instance)._at_put_(index,each);
index=_st(index).__plus((1));
return index;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=instance;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withAll:",{aCollection:aCollection,instance:instance,index:index}, smalltalk.Array.klass)});}
}),
smalltalk.Array.klass);


smalltalk.addClass('CharacterArray', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString()).__comma(_st(aString)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,",",{aString:aString}, smalltalk.CharacterArray)});}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject}, smalltalk.CharacterArray)});}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._fromString_(_st(_st(self)._asString())._asLowercase());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asLowercase",{}, smalltalk.CharacterArray)});}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString())._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asNumber",{}, smalltalk.CharacterArray)});}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{}, smalltalk.CharacterArray)});}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{}, smalltalk.CharacterArray)});}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._fromString_(_st(_st(self)._asString())._asUppercase());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asUppercase",{}, smalltalk.CharacterArray)});}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (anIndex, anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject}, smalltalk.CharacterArray)});}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_errorReadOnly",
smalltalk.method({
selector: "errorReadOnly",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("Object is read-only");
return self}, function($ctx1) {$ctx1.fill(self,"errorReadOnly",{}, smalltalk.CharacterArray)});}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString())._printString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{}, smalltalk.CharacterArray)});}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._errorReadOnly();
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject}, smalltalk.CharacterArray)});}
}),
smalltalk.CharacterArray);


smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString}, smalltalk.CharacterArray.klass)});}
}),
smalltalk.CharacterArray.klass);


smalltalk.addClass('String', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self + aString;
return self}, function($ctx1) {$ctx1.fill(self,",",{aString:aString}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return String(self) < aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<",{aString:aString}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return String(self) <= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aString:aString}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
    	if(! aString._isString || ! aString._isString()) {
        	return false;
        }
    	return String(self) === String(aString)
    ;
return self}, function($ctx1) {$ctx1.fill(self,"=",{aString:aString}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self).__eq(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{aString:aString}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return String(self) > aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">",{aString:aString}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return String(self) >= aString._asString();
return self}, function($ctx1) {$ctx1.fill(self,">=",{aString:aString}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_asJavaScriptSelector",
smalltalk.method({
selector: "asJavaScriptSelector",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._asSelector())._replace_with_("^_",""))._replace_with_("_.*","");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSelector",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	;
return self}, function($ctx1) {$ctx1.fill(self,"asJavascript",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toLowerCase();
return self}, function($ctx1) {$ctx1.fill(self,"asLowercase",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return Number(self);
return self}, function($ctx1) {$ctx1.fill(self,"asNumber",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_asRegexp",
smalltalk.method({
selector: "asRegexp",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.RegularExpression || RegularExpression))._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asRegexp",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.selector(self);
return self}, function($ctx1) {$ctx1.fill(self,"asSelector",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Symbol || Symbol))._lookup_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toUpperCase();
return self}, function($ctx1) {$ctx1.fill(self,"asUppercase",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_asciiValue",
smalltalk.method({
selector: "asciiValue",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.charCodeAt(0);;
return self}, function($ctx1) {$ctx1.fill(self,"asciiValue",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { return String(self).charAt(anIndex - 1) || aBlock();
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex, anotherIndex) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.substring(anIndex - 1, anotherIndex);
return self}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._shallowCopy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { for(var i=0;i<self.length;i++){aBlock(self.charAt(i));};
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_escaped",
smalltalk.method({
selector: "escaped",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return escape(self);
return self}, function($ctx1) {$ctx1.fill(self,"escaped",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_includesSubString_",
smalltalk.method({
selector: "includesSubString:",
fn: function (subString) {
var self=this;
return smalltalk.withContext(function($ctx1) {  return self.indexOf(subString) != -1 ;
return self}, function($ctx1) {$ctx1.fill(self,"includesSubString:",{subString:subString}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isString",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {return _st(aCollection)._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(stream)._nextPutAll_(_st(each)._asString());
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {return _st(stream)._nextPutAll_(self);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"join:",{aCollection:aCollection}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_lineIndicesDo_",
smalltalk.method({
selector: "lineIndicesDo:",
fn: function (aBlock) {
var self=this;
var cr,lf,start,sz,nextLF,nextCR;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$8,$7,$2;
var $early={};
try {
start=(1);
sz=_st(self)._size();
cr=_st((smalltalk.String || String))._cr();
nextCR=_st(self)._indexOf_startingAt_(cr,(1));
lf=_st((smalltalk.String || String))._lf();
nextLF=_st(self)._indexOf_startingAt_(lf,(1));
$1=(function(){
return smalltalk.withContext(function($ctx2) {return _st(start).__lt_eq(sz);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
$2=(function(){
return smalltalk.withContext(function($ctx2) {$3=_st(_st(nextLF).__eq((0)))._and_((function(){
return smalltalk.withContext(function($ctx3) {return _st(nextCR).__eq((0));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
_st(aBlock)._value_value_value_(start,sz,sz);
$4=self;
throw $early=[$4];
};
$5=_st(_st(nextCR).__eq((0)))._or_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st((0)).__lt(nextLF))._and_((function(){
return smalltalk.withContext(function($ctx4) {return _st(nextLF).__lt(nextCR);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$6=(function(){
return smalltalk.withContext(function($ctx3) {_st(aBlock)._value_value_value_(start,_st(nextLF).__minus((1)),nextLF);
start=_st((1)).__plus(nextLF);
start;
nextLF=_st(self)._indexOf_startingAt_(lf,start);
return nextLF;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})});
$7=(function(){
return smalltalk.withContext(function($ctx3) {$8=_st(_st((1)).__plus(nextCR)).__eq(nextLF);
if(smalltalk.assert($8)){
_st(aBlock)._value_value_value_(start,_st(nextCR).__minus((1)),nextLF);
start=_st((1)).__plus(nextLF);
start;
nextCR=_st(self)._indexOf_startingAt_(cr,start);
nextCR;
nextLF=_st(self)._indexOf_startingAt_(lf,start);
return nextLF;
} else {
_st(aBlock)._value_value_value_(start,_st(nextCR).__minus((1)),nextCR);
start=_st((1)).__plus(nextCR);
start;
nextCR=_st(self)._indexOf_startingAt_(cr,start);
return nextCR;
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})});
return _st($5)._ifTrue_ifFalse_($6,$7);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st($1)._whileTrue_($2);
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lineIndicesDo:",{aBlock:aBlock,cr:cr,lf:lf,start:start,sz:sz,nextLF:nextLF,nextCR:nextCR}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_lineNumber_",
smalltalk.method({
selector: "lineNumber:",
fn: function (anIndex) {
var self=this;
var lineCount;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
var $early={};
try {
lineCount=(0);
$1=self;
$2=(function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {lineCount=_st(lineCount).__plus((1));
$3=_st(lineCount).__eq(anIndex);
if(smalltalk.assert($3)){
$4=_st(self)._copyFrom_to_(start,endWithoutDelimiters);
throw $early=[$4];
};
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1)})});
_st($1)._lineIndicesDo_($2);
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lineNumber:",{anIndex:anIndex,lineCount:lineCount}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_lines",
smalltalk.method({
selector: "lines",
fn: function () {
var self=this;
var lines;
return smalltalk.withContext(function($ctx1) { var $1;
lines=_st((smalltalk.Array || Array))._new();
_st(self)._linesDo_((function(aLine){
return smalltalk.withContext(function($ctx2) {return _st(lines)._add_(aLine);
}, function($ctx2) {$ctx2.fillBlock({aLine:aLine},$ctx1)})}));
$1=lines;
return $1;
}, function($ctx1) {$ctx1.fill(self,"lines",{lines:lines}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_linesDo_",
smalltalk.method({
selector: "linesDo:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {return _st(aBlock)._value_(_st(self)._copyFrom_to_(start,endWithoutDelimiters));
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"linesDo:",{aBlock:aBlock}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_match_",
smalltalk.method({
selector: "match:",
fn: function (aRegexp) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.search(aRegexp) != -1;
return self}, function($ctx1) {$ctx1.fill(self,"match:",{aRegexp:aRegexp}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_matchesOf_",
smalltalk.method({
selector: "matchesOf:",
fn: function (aRegularExpression) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.match(aRegularExpression);
return self}, function($ctx1) {$ctx1.fill(self,"matchesOf:",{aRegularExpression:aRegularExpression}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { console.log(self);
return self}, function($ctx1) {$ctx1.fill(self,"printNl",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("'").__comma(self)).__comma("'");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
fn: function (aString, anotherString) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._replaceRegexp_with_(_st((smalltalk.RegularExpression || RegularExpression))._fromString_flag_(aString,"g"),anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aString:aString,anotherString:anotherString}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_replaceRegexp_with_",
smalltalk.method({
selector: "replaceRegexp:with:",
fn: function (aRegexp, aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.replace(aRegexp, aString);
return self}, function($ctx1) {$ctx1.fill(self,"replaceRegexp:with:",{aRegexp:aRegexp,aString:aString}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.split("").reverse().join("");
return self}, function($ctx1) {$ctx1.fill(self,"reversed",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._fromString_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"size",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_tokenize_",
smalltalk.method({
selector: "tokenize:",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.split(aString);
return self}, function($ctx1) {$ctx1.fill(self,"tokenize:",{aString:aString}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimBoth",
smalltalk.method({
selector: "trimBoth",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._trimBoth_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimBoth_",
smalltalk.method({
selector: "trimBoth:",
fn: function (separators) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._trimLeft_(separators))._trimRight_(separators);
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimBoth:",{separators:separators}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimLeft",
smalltalk.method({
selector: "trimLeft",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._trimLeft_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimLeft_",
smalltalk.method({
selector: "trimLeft:",
fn: function (separators) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._replaceRegexp_with_(_st((smalltalk.RegularExpression || RegularExpression))._fromString_flag_(_st(_st("^[").__comma(separators)).__comma("]+"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimLeft:",{separators:separators}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimRight",
smalltalk.method({
selector: "trimRight",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._trimRight_("\x5cs");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimRight_",
smalltalk.method({
selector: "trimRight:",
fn: function (separators) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._replaceRegexp_with_(_st((smalltalk.RegularExpression || RegularExpression))._fromString_flag_(_st(_st("[").__comma(separators)).__comma("]+$"),"g"),"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"trimRight:",{separators:separators}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_unescaped",
smalltalk.method({
selector: "unescaped",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return unescape(self);
return self}, function($ctx1) {$ctx1.fill(self,"unescaped",{}, smalltalk.String)});}
}),
smalltalk.String);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { for(var i=0;i<self.length;i++){aBlock(self.charAt(i), i+1);};
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock}, smalltalk.String)});}
}),
smalltalk.String);


smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return '\r';
return self}, function($ctx1) {$ctx1.fill(self,"cr",{}, smalltalk.String.klass)});}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return '\r\n';
return self}, function($ctx1) {$ctx1.fill(self,"crlf",{}, smalltalk.String.klass)});}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_fromCharCode_",
smalltalk.method({
selector: "fromCharCode:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { return String.fromCharCode(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"fromCharCode:",{anInteger:anInteger}, smalltalk.String.klass)});}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return new self.fn(aString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString}, smalltalk.String.klass)});}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return '\n';
return self}, function($ctx1) {$ctx1.fill(self,"lf",{}, smalltalk.String.klass)});}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return ' ';
return self}, function($ctx1) {$ctx1.fill(self,"space",{}, smalltalk.String.klass)});}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.StringStream || StringStream);
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamClass",{}, smalltalk.String.klass)});}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_streamContents_",
smalltalk.method({
selector: "streamContents:",
fn: function (blockWithArg) {
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { var $1;
stream=_st(_st(self)._streamClass())._on_(_st((smalltalk.String || String))._new());
_st(blockWithArg)._value_(stream);
$1=_st(stream)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamContents:",{blockWithArg:blockWithArg,stream:stream}, smalltalk.String.klass)});}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_tab",
smalltalk.method({
selector: "tab",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return '\t';
return self}, function($ctx1) {$ctx1.fill(self,"tab",{}, smalltalk.String.klass)});}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aUTFCharCode) {
var self=this;
return smalltalk.withContext(function($ctx1) { return String.fromCharCode(aUTFCharCode);;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aUTFCharCode:aUTFCharCode}, smalltalk.String.klass)});}
}),
smalltalk.String.klass);


smalltalk.addClass('Symbol', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aSymbol) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString()).__lt(_st(aSymbol)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"<",{aSymbol:aSymbol}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aSymbol) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString()).__lt_eq(_st(aSymbol)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"<=",{aSymbol:aSymbol}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aSymbol) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(aSymbol)._class()).__eq(_st(self)._class());
if(! smalltalk.assert($1)){
return false;
};
$2=_st(_st(self)._asString()).__eq(_st(aSymbol)._asString());
return $2;
}, function($ctx1) {$ctx1.fill(self,"=",{aSymbol:aSymbol}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aSymbol) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString()).__gt(_st(aSymbol)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,">",{aSymbol:aSymbol}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aSymbol) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString()).__gt_eq(_st(aSymbol)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,">=",{aSymbol:aSymbol}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString())._asJSON();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("smalltalk.symbolFor(\x22").__comma(_st(self)._asString())).__comma("\x22)");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString())._asSelector();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSelector",{}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.value;
return self}, function($ctx1) {$ctx1.fill(self,"asString",{}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSuperSelector",
smalltalk.method({
selector: "asSuperSelector",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString())._asSuperSelector();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSuperSelector",{}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSymbol",{}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString())._at_ifAbsent_(anIndex,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._asString())._collect_(aBlock))._asSymbol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex, anotherIndex) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._fromString_(_st(_st(self)._asString())._copyFrom_to_(anIndex,anotherIndex));
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_detect_",
smalltalk.method({
selector: "detect:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString())._detect_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:",{aBlock:aBlock}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._asString())._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_isSymbol",
smalltalk.method({
selector: "isSymbol",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isSymbol",{}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("#").__comma(_st(self)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._asString())._select_(aBlock))._asSymbol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anObject)._perform_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._asString())._withIndexDo_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock}, smalltalk.Symbol)});}
}),
smalltalk.Symbol);


smalltalk.addMethod(
"_basicNew",
smalltalk.method({
selector: "basicNew",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"basicNew",{}, smalltalk.Symbol.klass)});}
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._lookup_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString}, smalltalk.Symbol.klass)});}
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
"_lookup_",
smalltalk.method({
selector: "lookup:",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.symbolFor(aString);;
return self}, function($ctx1) {$ctx1.fill(self,"lookup:",{aString:aString}, smalltalk.Symbol.klass)});}
}),
smalltalk.Symbol.klass);


smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
var $early={};
try {
$1=_st(_st(self)._class()).__eq(_st(aCollection)._class());
if(! smalltalk.assert($1)){
return false;
};
$2=_st(_st(self)._size()).__eq(_st(aCollection)._size());
if(! smalltalk.assert($2)){
return false;
};
_st(self)._do_((function(each){
return smalltalk.withContext(function($ctx2) {$3=_st(aCollection)._includes_(each);
if(! smalltalk.assert($3)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"=",{aCollection:aCollection}, smalltalk.Set)});}
}),
smalltalk.Set);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var found;
		for(var i=0; i < self['@elements'].length; i++) {
			if(anObject == self['@elements'][i]) {
				found = true;
				break;
			}
		}
		if(!found) {self['@elements'].push(anObject)}
	;
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject}, smalltalk.Set)});}
}),
smalltalk.Set);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@elements"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray",{}, smalltalk.Set)});}
}),
smalltalk.Set);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._withAll_(_st(self["@elements"])._collect_(aBlock));
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock}, smalltalk.Set)});}
}),
smalltalk.Set);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock, anotherBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@elements"])._detect_ifNone_(aBlock,anotherBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock}, smalltalk.Set)});}
}),
smalltalk.Set);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@elements"])._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock}, smalltalk.Set)});}
}),
smalltalk.Set);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@elements"])._includes_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject}, smalltalk.Set)});}
}),
smalltalk.Set);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Collection.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Set)});}
}),
smalltalk.Set);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@elements"])._remove_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject}, smalltalk.Set)});}
}),
smalltalk.Set);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function (aBlock) {
var self=this;
var collection;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4;
collection=_st(_st(self)._class())._new();
$1=self;
$2=(function(each){
return smalltalk.withContext(function($ctx2) {$3=_st(aBlock)._value_(each);
if(smalltalk.assert($3)){
return _st(collection)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})});
_st($1)._do_($2);
$4=collection;
return $4;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,collection:collection}, smalltalk.Set)});}
}),
smalltalk.Set);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{}, smalltalk.Set)});}
}),
smalltalk.Set);



smalltalk.addClass('Queue', smalltalk.Object, ['read', 'readIndex', 'write'], 'Kernel-Collections');
smalltalk.addMethod(
"_back_",
smalltalk.method({
selector: "back:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@write"])._add_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"back:",{anObject:anObject}, smalltalk.Queue)});}
}),
smalltalk.Queue);

smalltalk.addMethod(
"_front",
smalltalk.method({
selector: "front",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._frontIfAbsent_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._error_("Cannot read from empty Queue.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"front",{}, smalltalk.Queue)});}
}),
smalltalk.Queue);

smalltalk.addMethod(
"_frontIfAbsent_",
smalltalk.method({
selector: "frontIfAbsent:",
fn: function (aBlock) {
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$6,$7,$5,$3,$8;
var $early={};
try {
$1=self["@read"];
$2=self["@readIndex"];
$3=(function(){
return smalltalk.withContext(function($ctx2) {$4=_st(self["@write"])._isEmpty();
$5=(function(){
return smalltalk.withContext(function($ctx3) {$6=_st(self["@readIndex"]).__gt((1));
if(smalltalk.assert($6)){
self["@read"]=[];
self["@read"];
self["@readIndex"]=(1);
self["@readIndex"];
};
$7=_st(aBlock)._value();
throw $early=[$7];
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})});
_st($4)._ifTrue_($5);
self["@read"]=self["@write"];
self["@read"];
self["@readIndex"]=(1);
self["@readIndex"];
self["@write"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
self["@write"];
return _st(self["@read"])._first();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
result=_st($1)._at_ifAbsent_($2,$3);
_st(self["@read"])._at_put_(self["@readIndex"],nil);
self["@readIndex"]=_st(self["@readIndex"]).__plus((1));
$8=result;
return $8;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"frontIfAbsent:",{aBlock:aBlock,result:result}, smalltalk.Queue)});}
}),
smalltalk.Queue);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@read"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
self["@write"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
self["@readIndex"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Queue)});}
}),
smalltalk.Queue);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.compile(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString}, smalltalk.RegularExpression)});}
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
"_exec_",
smalltalk.method({
selector: "exec:",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.exec(aString) || nil;
return self}, function($ctx1) {$ctx1.fill(self,"exec:",{aString:aString}, smalltalk.RegularExpression)});}
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
"_test_",
smalltalk.method({
selector: "test:",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self.test(aString);
return self}, function($ctx1) {$ctx1.fill(self,"test:",{aString:aString}, smalltalk.RegularExpression)});}
}),
smalltalk.RegularExpression);


smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._fromString_flag_(aString,"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString}, smalltalk.RegularExpression.klass)});}
}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
"_fromString_flag_",
smalltalk.method({
selector: "fromString:flag:",
fn: function (aString, anotherString) {
var self=this;
return smalltalk.withContext(function($ctx1) { return new RegExp(aString, anotherString);
return self}, function($ctx1) {$ctx1.fill(self,"fromString:flag:",{aString:aString,anotherString:anotherString}, smalltalk.RegularExpression.klass)});}
}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
smalltalk.addMethod(
"_atEnd",
smalltalk.method({
selector: "atEnd",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._position()).__eq(_st(self)._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"atEnd",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_atStart",
smalltalk.method({
selector: "atStart",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._position()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atStart",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"close",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@collection"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._collection())._copyFrom_to_((1),_st(self)._streamSize());
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {return _st(aBlock)._value_(_st(self)._next());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_flush",
smalltalk.method({
selector: "flush",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"flush",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_isEmpty",
smalltalk.method({
selector: "isEmpty",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._size()).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._atEnd();
if(smalltalk.assert($2)){
$1=nil;
} else {
_st(self)._position_(_st(_st(self)._position()).__plus((1)));
$1=_st(self["@collection"])._at_(_st(self)._position());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (anInteger) {
var self=this;
var tempCollection;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4;
tempCollection=_st(_st(_st(self)._collection())._class())._new();
$1=anInteger;
$2=(function(){
return smalltalk.withContext(function($ctx2) {$3=_st(self)._atEnd();
if(! smalltalk.assert($3)){
return _st(tempCollection)._add_(_st(self)._next());
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st($1)._timesRepeat_($2);
$4=tempCollection;
return $4;
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger,tempCollection:tempCollection}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._position_(_st(_st(self)._position()).__plus((1)));
_st(_st(self)._collection())._at_put_(_st(self)._position(),anObject);
_st(self)._setStreamSize_(_st(_st(self)._streamSize())._max_(_st(self)._position()));
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._nextPut_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aCollection:aCollection}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_peek",
smalltalk.method({
selector: "peek",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._atEnd();
if(! smalltalk.assert($2)){
$1=_st(_st(self)._collection())._at_(_st(_st(self)._position()).__plus((1)));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"peek",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@position"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@position"]=(0);
$1=self["@position"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_position_",
smalltalk.method({
selector: "position:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@position"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{anInteger:anInteger}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_reset",
smalltalk.method({
selector: "reset",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._position_((0));
return self}, function($ctx1) {$ctx1.fill(self,"reset",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_resetContents",
smalltalk.method({
selector: "resetContents",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._reset();
_st(self)._setStreamSize_((0));
return self}, function($ctx1) {$ctx1.fill(self,"resetContents",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setCollection_",
smalltalk.method({
selector: "setCollection:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@collection"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"setCollection:",{aCollection:aCollection}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setStreamSize_",
smalltalk.method({
selector: "setStreamSize:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@streamSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"setStreamSize:",{anInteger:anInteger}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setToEnd",
smalltalk.method({
selector: "setToEnd",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._position_(_st(self)._size());
return self}, function($ctx1) {$ctx1.fill(self,"setToEnd",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._streamSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_skip_",
smalltalk.method({
selector: "skip:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._position_(_st(_st(_st(self)._position()).__plus(anInteger))._min_max_(_st(self)._size(),(0)));
return self}, function($ctx1) {$ctx1.fill(self,"skip:",{anInteger:anInteger}, smalltalk.Stream)});}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_streamSize",
smalltalk.method({
selector: "streamSize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@streamSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"streamSize",{}, smalltalk.Stream)});}
}),
smalltalk.Stream);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._setCollection_(aCollection);
_st($2)._setStreamSize_(_st(aCollection)._size());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection}, smalltalk.Stream.klass)});}
}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel-Collections');
smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._nextPutAll_(_st((smalltalk.String || String))._cr());
return $1;
}, function($ctx1) {$ctx1.fill(self,"cr",{}, smalltalk.StringStream)});}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._nextPutAll_(_st((smalltalk.String || String))._crlf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"crlf",{}, smalltalk.StringStream)});}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._nextPutAll_(_st((smalltalk.String || String))._lf());
return $1;
}, function($ctx1) {$ctx1.fill(self,"lf",{}, smalltalk.StringStream)});}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (anInteger) {
var self=this;
var tempCollection;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4;
tempCollection=_st(_st(_st(self)._collection())._class())._new();
$1=anInteger;
$2=(function(){
return smalltalk.withContext(function($ctx2) {$3=_st(self)._atEnd();
if(! smalltalk.assert($3)){
tempCollection=_st(tempCollection).__comma(_st(self)._next());
return tempCollection;
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st($1)._timesRepeat_($2);
$4=tempCollection;
return $4;
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger,tempCollection:tempCollection}, smalltalk.StringStream)});}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPut:",{aString:aString}, smalltalk.StringStream)});}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._setCollection_(_st(_st(_st(_st(self)._collection())._copyFrom_to_((1),_st(self)._position())).__comma(aString)).__comma(_st(_st(self)._collection())._copyFrom_to_(_st(_st(_st(self)._position()).__plus((1))).__plus(_st(aString)._size()),_st(_st(self)._collection())._size())));
_st(self)._position_(_st(_st(self)._position()).__plus(_st(aString)._size()));
_st(self)._setStreamSize_(_st(_st(self)._streamSize())._max_(_st(self)._position()));
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString}, smalltalk.StringStream)});}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._nextPut_(" ");
return self}, function($ctx1) {$ctx1.fill(self,"space",{}, smalltalk.StringStream)});}
}),
smalltalk.StringStream);



