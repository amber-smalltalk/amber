smalltalk.addPackage('Kernel-Collections', {});
smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (anAssociation){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"__eq",[smalltalk.send(anAssociation,"_class",[])]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(self,"_key",[]),"__eq",[smalltalk.send(anAssociation,"_key",[])]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(self,"_value",[]),"__eq",[smalltalk.send(anAssociation,"_value",[])]);
})]);
})]);
return $1;
}
}),
smalltalk.Association);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return self["@key"];
}
}),
smalltalk.Association);

smalltalk.addMethod(
"_key_",
smalltalk.method({
selector: "key:",
fn: function (aKey){
var self=this;
self["@key"]=aKey;
return self}
}),
smalltalk.Association);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(aStream){
return smalltalk.send(self,"_storeOn_",[aStream]);
})]);
return $1;
}
}),
smalltalk.Association);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
fn: function (aStream){
var self=this;
smalltalk.send(self["@key"],"_storeOn_",[aStream]);
smalltalk.send(aStream,"_nextPutAll_",["->"]);
smalltalk.send(self["@value"],"_storeOn_",[aStream]);
return self}
}),
smalltalk.Association);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return self["@value"];
}
}),
smalltalk.Association);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aValue){
var self=this;
self["@value"]=aValue;
return self}
}),
smalltalk.Association);


smalltalk.addMethod(
"_key_value_",
smalltalk.method({
selector: "key:value:",
fn: function (aKey,aValue){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_key_",[aKey]);
smalltalk.send($2,"_value_",[aValue]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Association.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aCollection){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_copy",[]);
smalltalk.send($2,"_addAll_",[aCollection]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection,"_do_",[(function(each){
return smalltalk.send(self,"_add_",[each]);
})]);
return aCollection;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Array || Array),"_withAll_",[self]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asArray",[]),"_collect_",[(function(each){
return smalltalk.send(each,"_asJSON",[]);
})]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asOrderedCollection",
smalltalk.method({
selector: "asOrderedCollection",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_asArray",[]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asSet",
smalltalk.method({
selector: "asSet",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Set || Set),"_withAll_",[self]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
fn: function (aBlock){
var self=this;
var $1;
var stream;
stream=smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]),"_writeStream",[]);
smalltalk.send(self,"_do_",[(function(each){
return smalltalk.send(stream,"_nextPut_",[smalltalk.send(aBlock,"_value_",[each])]);
})]);
$1=smalltalk.send(stream,"_contents",[]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWith_",
smalltalk.method({
selector: "copyWith:",
fn: function (anObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_copy",[]);
smalltalk.send($2,"_add_",[anObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWithAll_",
smalltalk.method({
selector: "copyWithAll:",
fn: function (aCollection){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_copy",[]);
smalltalk.send($2,"_addAll_",[aCollection]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWithoutAll_",
smalltalk.method({
selector: "copyWithoutAll:",
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send(self,"_reject_",[(function(each){
return smalltalk.send(aCollection,"_includes_",[each]);
})]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_detect_",
smalltalk.method({
selector: "detect:",
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_detect_ifNone_",[aBlock,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;

		for(var i = 0; i < self.length; i++)
			if(aBlock(self[i]))
				return self[i];
		return anotherBlock();
	;
;
return self}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i]);};
;
return self}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_do_separatedBy_",
smalltalk.method({
selector: "do:separatedBy:",
fn: function (aBlock,anotherBlock){
var self=this;
var first;
first=true;
smalltalk.send(self,"_do_",[(function(each){
if(smalltalk.assert(first)){
first=false;
first;
} else {
smalltalk.send(anotherBlock,"_value",[]);
};
return smalltalk.send(aBlock,"_value_",[each]);
})]);
return self}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_errorNotFound",
smalltalk.method({
selector: "errorNotFound",
fn: function (){
var self=this;
smalltalk.send(self,"_error_",["Object is not in the collection"]);
return self}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_ifEmpty_",
smalltalk.method({
selector: "ifEmpty:",
fn: function (aBlock){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_isEmpty",[]);
if(smalltalk.assert($2)){
$1=smalltalk.send(aBlock,"_value",[]);
} else {
$1=self;
};
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_ifNotEmpty_",
smalltalk.method({
selector: "ifNotEmpty:",
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_notEmpty",[]);
smalltalk.send($1,"_ifTrue_",[aBlock]);
return self}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
fn: function (anObject){
var self=this;

		var i = self.length;
		while (i--) {
			if (smalltalk.send(self[i], "__eq", [anObject])) {return true;}	
		}
		return false
	;
;
return self}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_inject_into_",
smalltalk.method({
selector: "inject:into:",
fn: function (anObject,aBlock){
var self=this;
var result;
result=anObject;
smalltalk.send(self,"_do_",[(function(each){
result=smalltalk.send(aBlock,"_value_value_",[result,each]);
return result;
})]);
return result;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_isEmpty",
smalltalk.method({
selector: "isEmpty",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_size",[]),"__eq",[(0)]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_notEmpty",
smalltalk.method({
selector: "notEmpty",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_isEmpty",[]),"_not",[]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_occurrencesOf_",
smalltalk.method({
selector: "occurrencesOf:",
fn: function (anObject){
var self=this;
var $1;
var tally;
tally=(0);
smalltalk.send(self,"_do_",[(function(each){
$1=smalltalk.send(anObject,"__eq",[each]);
if(smalltalk.assert($1)){
tally=smalltalk.send(tally,"__plus",[(1)]);
return tally;
};
})]);
return tally;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(aStream){
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send(self,"_printString",[],smalltalk.Object),"__comma",[" ("])]);
smalltalk.send(self,"_do_separatedBy_",[(function(each){
return smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(each,"_printString",[])]);
}),(function(){
return smalltalk.send(aStream,"_nextPutAll_",[" "]);
})]);
return smalltalk.send(aStream,"_nextPutAll_",[")"]);
})]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_readStream",
smalltalk.method({
selector: "readStream",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_stream",[]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_reject_",
smalltalk.method({
selector: "reject:",
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_select_",[(function(each){
return smalltalk.send(smalltalk.send(aBlock,"_value_",[each]),"__eq",[false]);
})]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self,"_remove_ifAbsent_",[anObject,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function (aBlock){
var self=this;
var $1,$2;
var stream;
stream=smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]),"_writeStream",[]);
smalltalk.send(self,"_do_",[(function(each){
$1=smalltalk.send(aBlock,"_value_",[each]);
if(smalltalk.assert($1)){
return smalltalk.send(stream,"_nextPut_",[each]);
};
})]);
$2=smalltalk.send(stream,"_contents",[]);
return $2;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_streamClass",[]),"_on_",[self]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_streamClass",[]);
return $1;
}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_writeStream",
smalltalk.method({
selector: "writeStream",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_stream",[]);
return $1;
}
}),
smalltalk.Collection);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function (anInteger){
var self=this;
var $1;
$1=smalltalk.send(self,"_new",[]);
return $1;
}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
return (smalltalk.Stream || Stream);
}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
fn: function (anObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_add_",[anObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
fn: function (anObject,anotherObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_add_",[anObject]);
smalltalk.send($2,"_add_",[anotherObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_with_with_",
smalltalk.method({
selector: "with:with:with:",
fn: function (firstObject,secondObject,thirdObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_add_",[firstObject]);
smalltalk.send($2,"_add_",[secondObject]);
smalltalk.send($2,"_add_",[thirdObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_withAll_",
smalltalk.method({
selector: "withAll:",
fn: function (aCollection){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_addAll_",[aCollection]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Collection.klass);


smalltalk.addClass('HashedCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aCollection){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aHashedCollection){
var self=this;
var $1,$2,$3;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"__eq",[smalltalk.send(aHashedCollection,"_class",[])]);
if(! smalltalk.assert($1)){
return false;
};
$2=smalltalk.send(smalltalk.send(self,"_size",[]),"__eq",[smalltalk.send(aHashedCollection,"_size",[])]);
if(! smalltalk.assert($2)){
return false;
};
$3=smalltalk.send(smalltalk.send(self,"_associations",[]),"__eq",[smalltalk.send(aHashedCollection,"_associations",[])]);
return $3;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anAssociation){
var self=this;
smalltalk.send(self,"_at_put_",[smalltalk.send(anAssociation,"_key",[]),smalltalk.send(anAssociation,"_value",[])]);
return self}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
fn: function (aHashedCollection){
var self=this;
smalltalk.send(self,"_addAll_",[smalltalk.send(aHashedCollection,"_associations",[])],smalltalk.Collection);
return aHashedCollection;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asDictionary",
smalltalk.method({
selector: "asDictionary",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Dictionary || Dictionary),"_fromPairs_",[smalltalk.send(self,"_associations",[])]);
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
var c;
c=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_keysAndValuesDo_",[(function(key,value){
return smalltalk.send(c,"_at_put_",[key,smalltalk.send(value,"_asJSON",[])]);
})]);
return c;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_associations",
smalltalk.method({
selector: "associations",
fn: function (){
var self=this;
var associations;
associations=[];
smalltalk.send(smalltalk.send(self,"_keys",[]),"_do_",[(function(each){
return smalltalk.send(associations,"_add_",[smalltalk.send((smalltalk.Association || Association),"_key_value_",[each,smalltalk.send(self,"_at_",[each])])]);
})]);
return associations;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_associationsDo_",
smalltalk.method({
selector: "associationsDo:",
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_associations",[]),"_do_",[aBlock]);
return self}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (aKey){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_ifAbsent_",[aKey,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_includesKey_",[aKey]);
$1=smalltalk.send($2,"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(self,"_basicAt_",[aKey]);
}),aBlock]);
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifAbsentPut_",
smalltalk.method({
selector: "at:ifAbsentPut:",
fn: function (aKey,aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_ifAbsent_",[aKey,(function(){
return smalltalk.send(self,"_at_put_",[aKey,smalltalk.send(aBlock,"_value",[])]);
})]);
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifPresent_",
smalltalk.method({
selector: "at:ifPresent:",
fn: function (aKey,aBlock){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_includesKey_",[aKey]);
if(smalltalk.assert($2)){
$1=smalltalk.send(aBlock,"_value_",[smalltalk.send(self,"_at_",[aKey])]);
} else {
$1=nil;
};
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifPresent_ifAbsent_",
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
fn: function (aKey,aBlock,anotherBlock){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_includesKey_",[aKey]);
$1=smalltalk.send($2,"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(aBlock,"_value_",[smalltalk.send(self,"_at_",[aKey])]);
}),anotherBlock]);
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (aKey,aValue){
var self=this;
var $1;
$1=smalltalk.send(self,"_basicAt_put_",[aKey,aValue]);
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
fn: function (aBlock){
var self=this;
var newDict;
newDict=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_keysAndValuesDo_",[(function(key,value){
return smalltalk.send(newDict,"_at_put_",[key,smalltalk.send(aBlock,"_value_",[value])]);
})]);
return newDict;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex,anotherIndex){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
var copy;
copy=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_associationsDo_",[(function(each){
return smalltalk.send(copy,"_at_put_",[smalltalk.send(each,"_key",[]),smalltalk.send(smalltalk.send(each,"_value",[]),"_deepCopy",[])]);
})]);
return copy;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_values",[]),"_detect_ifNone_",[aBlock,anotherBlock]);
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_values",[]),"_do_",[aBlock]);
return self}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_values",[]),"_includes_",[anObject]);
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_includesKey_",
smalltalk.method({
selector: "includesKey:",
fn: function (aKey){
var self=this;
return self.hasOwnProperty(aKey);
;
return self}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_keys",
smalltalk.method({
selector: "keys",
fn: function (){
var self=this;

		if ('function'===typeof Object.keys) return Object.keys(self);
		var keys = [];
		for(var i in self) {
			if(self.hasOwnProperty(i)) {
				keys.push(i);
			}
		};
		return keys;
	;
;
return self}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_keysAndValuesDo_",
smalltalk.method({
selector: "keysAndValuesDo:",
fn: function (aBlock){
var self=this;
smalltalk.send(self,"_associationsDo_",[(function(each){
return smalltalk.send(aBlock,"_value_value_",[smalltalk.send(each,"_key",[]),smalltalk.send(each,"_value",[])]);
})]);
return self}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(aStream){
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("a ","__comma",[smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[])]),"__comma",["("])]);
smalltalk.send(smalltalk.send(self,"_associations",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(each,"_storeOn_",[aStream]);
}),(function(){
return smalltalk.send(aStream,"_nextPutAll_",[" , "]);
})]);
return smalltalk.send(aStream,"_nextPutAll_",[")"]);
})]);
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_removeKey_ifAbsent_",[aKey,aBlock]);
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_removeKey_",
smalltalk.method({
selector: "removeKey:",
fn: function (aKey){
var self=this;
var $1;
$1=smalltalk.send(self,"_remove_",[aKey]);
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_removeKey_ifAbsent_",
smalltalk.method({
selector: "removeKey:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_includesKey_",[aKey]);
if(smalltalk.assert($2)){
$1=smalltalk.send(self,"_basicDelete_",[aKey]);
} else {
$1=smalltalk.send(aBlock,"_value",[]);
};
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function (aBlock){
var self=this;
var $1;
var newDict;
newDict=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_keysAndValuesDo_",[(function(key,value){
$1=smalltalk.send(aBlock,"_value_",[value]);
if(smalltalk.assert($1)){
return smalltalk.send(newDict,"_at_put_",[key,value]);
};
})]);
return newDict;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
var copy;
copy=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_associationsDo_",[(function(each){
return smalltalk.send(copy,"_at_put_",[smalltalk.send(each,"_key",[]),smalltalk.send(each,"_value",[])]);
})]);
return copy;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_keys",[]),"_size",[]);
return $1;
}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
fn: function (aStream){
var self=this;
smalltalk.send(aStream,"_nextPutAll_",["#{"]);
smalltalk.send(smalltalk.send(self,"_associations",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(each,"_storeOn_",[aStream]);
}),(function(){
return smalltalk.send(aStream,"_nextPutAll_",[". "]);
})]);
smalltalk.send(aStream,"_nextPutAll_",["}"]);
return self}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_values",
smalltalk.method({
selector: "values",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_keys",[]),"_collect_",[(function(each){
return smalltalk.send(self,"_at_",[each]);
})]);
return $1;
}
}),
smalltalk.HashedCollection);


smalltalk.addMethod(
"_fromPairs_",
smalltalk.method({
selector: "fromPairs:",
fn: function (aCollection){
var self=this;
var dict;
dict=smalltalk.send(self,"_new",[]);
smalltalk.send(aCollection,"_do_",[(function(each){
return smalltalk.send(dict,"_add_",[each]);
})]);
return dict;
}
}),
smalltalk.HashedCollection.klass);


smalltalk.addClass('Dictionary', smalltalk.HashedCollection, ['keys', 'values'], 'Kernel-Collections');
smalltalk.addMethod(
"_asHashedCollection",
smalltalk.method({
selector: "asHashedCollection",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.HashedCollection || HashedCollection),"_fromPairs_",[smalltalk.send(self,"_associations",[])]);
return $1;
}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asHashedCollection",[]),"_asJSON",[]);
return $1;
}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;

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
;
return self}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (aKey,aValue){
var self=this;

		var index = self['@keys'].indexOf(aKey);
		if(index === -1) {
			self['@values'].push(aValue);
			self['@keys'].push(aKey);
		} else {
			self['@values'][index] = aValue;
		};

		return aValue;
	;
;
return self}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_includesKey_",
smalltalk.method({
selector: "includesKey:",
fn: function (aKey){
var self=this;
var $1;
$1=smalltalk.send(self["@keys"],"_includes_",[aKey]);
return $1;
}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.HashedCollection);
self["@keys"]=[];
self["@values"]=[];
return self}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_keys",
smalltalk.method({
selector: "keys",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@keys"],"_copy",[]);
return $1;
}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_removeKey_ifAbsent_",
smalltalk.method({
selector: "removeKey:ifAbsent:",
fn: function (aKey,aBlock){
var self=this;

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
;
return self}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_values",
smalltalk.method({
selector: "values",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@values"],"_copy",[]);
return $1;
}
}),
smalltalk.Dictionary);



smalltalk.addClass('SequenceableCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aCollection){
var self=this;
var $1,$2;
var $early={};
try {
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"__eq",[smalltalk.send(aCollection,"_class",[])]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(self,"_size",[]),"__eq",[smalltalk.send(aCollection,"_size",[])]);
})]);
if(! smalltalk.assert($1)){
return false;
};
smalltalk.send(self,"_withIndexDo_",[(function(each,i){
$2=smalltalk.send(smalltalk.send(aCollection,"_at_",[i]),"__eq",[each]);
if(! smalltalk.assert($2)){
throw $early=[false];
};
})]);
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_addLast_",
smalltalk.method({
selector: "addLast:",
fn: function (anObject){
var self=this;
smalltalk.send(self,"_add_",[anObject]);
return self}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_allButFirst",
smalltalk.method({
selector: "allButFirst",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_copyFrom_to_",[(2),smalltalk.send(self,"_size",[])]);
return $1;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_allButLast",
smalltalk.method({
selector: "allButLast",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_copyFrom_to_",[(1),smalltalk.send(smalltalk.send(self,"_size",[]),"__minus",[(1)])]);
return $1;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (anIndex){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_ifAbsent_",[anIndex,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (anIndex,anObject){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[smalltalk.send(smalltalk.send(self,"_size",[]),"_atRandom",[])]);
return $1;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex,anotherIndex){
var self=this;
var range;
var newCollection;
range=smalltalk.send(anIndex,"_to_",[anotherIndex]);
newCollection=smalltalk.send(smalltalk.send(self,"_class",[]),"_new_",[smalltalk.send(range,"_size",[])]);
smalltalk.send(range,"_withIndexDo_",[(function(each,i){
return smalltalk.send(newCollection,"_at_put_",[i,smalltalk.send(self,"_at_",[each])]);
})]);
return newCollection;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
var newCollection;
newCollection=smalltalk.send(smalltalk.send(self,"_class",[]),"_new_",[smalltalk.send(self,"_size",[])]);
smalltalk.send(self,"_withIndexDo_",[(function(each,index){
return smalltalk.send(newCollection,"_at_put_",[index,smalltalk.send(each,"_deepCopy",[])]);
})]);
return newCollection;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_first",
smalltalk.method({
selector: "first",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[(1)]);
return $1;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_first_",
smalltalk.method({
selector: "first:",
fn: function (n){
var self=this;
var $1;
$1=smalltalk.send(self,"_copyFrom_to_",[(1),n]);
return $1;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_fourth",
smalltalk.method({
selector: "fourth",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[(4)]);
return $1;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_",
smalltalk.method({
selector: "indexOf:",
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self,"_indexOf_ifAbsent_",[anObject,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_ifAbsent_",
smalltalk.method({
selector: "indexOf:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;

		for(var i=0;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
;
return self}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_startingAt_",
smalltalk.method({
selector: "indexOf:startingAt:",
fn: function (anObject,start){
var self=this;
var $1;
$1=smalltalk.send(self,"_indexOf_startingAt_ifAbsent_",[anObject,start,(function(){
return (0);
})]);
return $1;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_startingAt_ifAbsent_",
smalltalk.method({
selector: "indexOf:startingAt:ifAbsent:",
fn: function (anObject,start,aBlock){
var self=this;

		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
;
return self}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_last",
smalltalk.method({
selector: "last",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[smalltalk.send(self,"_size",[])]);
return $1;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_removeLast",
smalltalk.method({
selector: "removeLast",
fn: function (){
var self=this;
smalltalk.send(self,"_remove_",[smalltalk.send(self,"_last",[])]);
return self}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_second",
smalltalk.method({
selector: "second",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[(2)]);
return $1;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
var newCollection;
newCollection=smalltalk.send(smalltalk.send(self,"_class",[]),"_new_",[smalltalk.send(self,"_size",[])]);
smalltalk.send(self,"_withIndexDo_",[(function(each,index){
return smalltalk.send(newCollection,"_at_put_",[index,each]);
})]);
return newCollection;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_third",
smalltalk.method({
selector: "third",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[(3)]);
return $1;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i], i+1);};
;
return self}
}),
smalltalk.SequenceableCollection);



smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
self.push(anObject); return anObject;;
;
return self}
}),
smalltalk.Array);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("[","__comma",[smalltalk.send(smalltalk.send(self,"_collect_",[(function(each){
return smalltalk.send(each,"_asJavascript",[]);
})]),"_join_",[", "])]),"__comma",["]"]);
return $1;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;

		if((anIndex < 1) || (self.length < anIndex)) {return aBlock()};
		return self[anIndex - 1];
	;
;
return self}
}),
smalltalk.Array);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (anIndex,anObject){
var self=this;
return self[anIndex - 1] = anObject;
;
return self}
}),
smalltalk.Array);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
fn: function (aString){
var self=this;
return self.join(aString);
;
return self}
}),
smalltalk.Array);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;

		for(var i=0;i<self.length;i++) {
			if(self[i] == anObject) {
				self.splice(i,1);
				return self;
			}
		}
	;
;
smalltalk.send(aBlock,"_value",[]);
return self}
}),
smalltalk.Array);

smalltalk.addMethod(
"_removeFrom_to_",
smalltalk.method({
selector: "removeFrom:to:",
fn: function (aNumber,anotherNumber){
var self=this;
self.splice(aNumber - 1,anotherNumber - 1);
;
return self}
}),
smalltalk.Array);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
return self._copy().reverse();
;
return self}
}),
smalltalk.Array);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return self.length;
;
return self}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sort",
smalltalk.method({
selector: "sort",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_basicPerform_",["sort"]);
return $1;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sort_",
smalltalk.method({
selector: "sort:",
fn: function (aBlock){
var self=this;

		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
;
return self}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sorted",
smalltalk.method({
selector: "sorted",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_copy",[]),"_sort",[]);
return $1;
}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sorted_",
smalltalk.method({
selector: "sorted:",
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_copy",[]),"_sort_",[aBlock]);
return $1;
}
}),
smalltalk.Array);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function (anInteger){
var self=this;
return new Array(anInteger);
;
return self}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
fn: function (anObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new_",[(1)]);
smalltalk.send($2,"_at_put_",[(1),anObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
fn: function (anObject,anObject2){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new_",[(2)]);
smalltalk.send($2,"_at_put_",[(1),anObject]);
smalltalk.send($2,"_at_put_",[(2),anObject2]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_with_with_",
smalltalk.method({
selector: "with:with:with:",
fn: function (anObject,anObject2,anObject3){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new_",[(3)]);
smalltalk.send($2,"_at_put_",[(1),anObject]);
smalltalk.send($2,"_at_put_",[(2),anObject2]);
smalltalk.send($2,"_at_put_",[(3),anObject3]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_withAll_",
smalltalk.method({
selector: "withAll:",
fn: function (aCollection){
var self=this;
var instance;
var index;
index=(1);
instance=smalltalk.send(self,"_new_",[smalltalk.send(aCollection,"_size",[])]);
smalltalk.send(aCollection,"_do_",[(function(each){
smalltalk.send(instance,"_at_put_",[index,each]);
index=smalltalk.send(index,"__plus",[(1)]);
return index;
})]);
return instance;
}
}),
smalltalk.Array.klass);


smalltalk.addClass('CharacterArray', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__comma",[smalltalk.send(aString,"_asString",[])]);
return $1;
}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;
smalltalk.send(self,"_errorReadOnly",[]);
return self}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_fromString_",[smalltalk.send(smalltalk.send(self,"_asString",[]),"_asLowercase",[])]);
return $1;
}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_asNumber",[]);
return $1;
}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassResponsibility",[]);
return $1;
}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassResponsibility",[]);
return $1;
}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_fromString_",[smalltalk.send(smalltalk.send(self,"_asString",[]),"_asUppercase",[])]);
return $1;
}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (anIndex,anObject){
var self=this;
smalltalk.send(self,"_errorReadOnly",[]);
return self}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_errorReadOnly",
smalltalk.method({
selector: "errorReadOnly",
fn: function (){
var self=this;
smalltalk.send(self,"_error_",["Object is read-only"]);
return self}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_printString",[]);
return $1;
}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function (anObject){
var self=this;
smalltalk.send(self,"_errorReadOnly",[]);
return self}
}),
smalltalk.CharacterArray);


smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self}
}),
smalltalk.CharacterArray.klass);


smalltalk.addClass('String', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function (aString){
var self=this;
return self + aString;
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aString){
var self=this;
return String(self) < aString._asString();
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aString){
var self=this;
return String(self) <= aString._asString();
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aString,"_class",[]),"__eq",[smalltalk.send(self,"_class",[])]);
if(! smalltalk.assert($1)){
return false;
};
return String(self) === String(aString);
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"__eq",[aString]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aString){
var self=this;
return String(self) > aString._asString();
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aString){
var self=this;
return String(self) >= aString._asString();
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return self;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_asJavaScriptSelector",
smalltalk.method({
selector: "asJavaScriptSelector",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_asSelector",[]),"_replace_with_",["^_",""]),"_replace_with_",["_.*",""]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	;
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
fn: function (){
var self=this;
return self.toLowerCase();
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
fn: function (){
var self=this;
return Number(self);
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
fn: function (){
var self=this;
var selector;
selector=smalltalk.send("_","__comma",[self]);
selector=smalltalk.send(selector,"_replace_with_",[":","_"]);
selector=smalltalk.send(selector,"_replace_with_",["[+]","_plus"]);
selector=smalltalk.send(selector,"_replace_with_",["-","_minus"]);
selector=smalltalk.send(selector,"_replace_with_",["[*]","_star"]);
selector=smalltalk.send(selector,"_replace_with_",["[/]","_slash"]);
selector=smalltalk.send(selector,"_replace_with_",[">","_gt"]);
selector=smalltalk.send(selector,"_replace_with_",["<","_lt"]);
selector=smalltalk.send(selector,"_replace_with_",["=","_eq"]);
selector=smalltalk.send(selector,"_replace_with_",[",","_comma"]);
selector=smalltalk.send(selector,"_replace_with_",["[@]","_at"]);
return selector;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return self;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Symbol || Symbol),"_lookup_",[self]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
fn: function (){
var self=this;
return self.toUpperCase();
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_asciiValue",
smalltalk.method({
selector: "asciiValue",
fn: function (){
var self=this;
return self.charCodeAt(0);;
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
return String(self).charAt(anIndex - 1) || aBlock();
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex,anotherIndex){
var self=this;
return self.substring(anIndex - 1, anotherIndex);
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_shallowCopy",[]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self.charAt(i));};
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_escaped",
smalltalk.method({
selector: "escaped",
fn: function (){
var self=this;
return escape(self);
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_includesSubString_",
smalltalk.method({
selector: "includesSubString:",
fn: function (subString){
var self=this;
 return self.indexOf(subString) != -1 ;
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(stream){
return smalltalk.send(aCollection,"_do_separatedBy_",[(function(each){
return smalltalk.send(stream,"_nextPutAll_",[smalltalk.send(each,"_asString",[])]);
}),(function(){
return smalltalk.send(stream,"_nextPutAll_",[self]);
})]);
})]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_lineIndicesDo_",
smalltalk.method({
selector: "lineIndicesDo:",
fn: function (aBlock){
var self=this;
var $1,$2,$3;
var $early={};
try {
var cr;
var lf;
var start;
var sz;
var nextLF;
var nextCR;
start=(1);
sz=smalltalk.send(self,"_size",[]);
cr=smalltalk.send((smalltalk.String || String),"_cr",[]);
nextCR=smalltalk.send(self,"_indexOf_startingAt_",[cr,(1)]);
lf=smalltalk.send((smalltalk.String || String),"_lf",[]);
nextLF=smalltalk.send(self,"_indexOf_startingAt_",[lf,(1)]);
smalltalk.send((function(){
return smalltalk.send(start,"__lt_eq",[sz]);
}),"_whileTrue_",[(function(){
$1=smalltalk.send(smalltalk.send(nextLF,"__eq",[(0)]),"_and_",[(function(){
return smalltalk.send(nextCR,"__eq",[(0)]);
})]);
if(smalltalk.assert($1)){
smalltalk.send(aBlock,"_value_value_value_",[start,sz,sz]);
throw $early=[self];
};
$2=smalltalk.send(smalltalk.send(nextCR,"__eq",[(0)]),"_or_",[(function(){
return smalltalk.send(smalltalk.send((0),"__lt",[nextLF]),"_and_",[(function(){
return smalltalk.send(nextLF,"__lt",[nextCR]);
})]);
})]);
if(smalltalk.assert($2)){
smalltalk.send(aBlock,"_value_value_value_",[start,smalltalk.send(nextLF,"__minus",[(1)]),nextLF]);
start=smalltalk.send((1),"__plus",[nextLF]);
start;
nextLF=smalltalk.send(self,"_indexOf_startingAt_",[lf,start]);
return nextLF;
} else {
$3=smalltalk.send(smalltalk.send((1),"__plus",[nextCR]),"__eq",[nextLF]);
if(smalltalk.assert($3)){
smalltalk.send(aBlock,"_value_value_value_",[start,smalltalk.send(nextCR,"__minus",[(1)]),nextLF]);
start=smalltalk.send((1),"__plus",[nextLF]);
start;
nextCR=smalltalk.send(self,"_indexOf_startingAt_",[cr,start]);
nextCR;
nextLF=smalltalk.send(self,"_indexOf_startingAt_",[lf,start]);
return nextLF;
} else {
smalltalk.send(aBlock,"_value_value_value_",[start,smalltalk.send(nextCR,"__minus",[(1)]),nextCR]);
start=smalltalk.send((1),"__plus",[nextCR]);
start;
nextCR=smalltalk.send(self,"_indexOf_startingAt_",[cr,start]);
return nextCR;
};
};
})]);
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}
}),
smalltalk.String);

smalltalk.addMethod(
"_lineNumber_",
smalltalk.method({
selector: "lineNumber:",
fn: function (anIndex){
var self=this;
var $1,$2;
var $early={};
try {
var lineCount;
lineCount=(0);
smalltalk.send(self,"_lineIndicesDo_",[(function(start,endWithoutDelimiters,end){
lineCount=smalltalk.send(lineCount,"__plus",[(1)]);
$1=smalltalk.send(lineCount,"__eq",[anIndex]);
if(smalltalk.assert($1)){
$2=smalltalk.send(self,"_copyFrom_to_",[start,endWithoutDelimiters]);
throw $early=[$2];
};
})]);
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}
}),
smalltalk.String);

smalltalk.addMethod(
"_lines",
smalltalk.method({
selector: "lines",
fn: function (){
var self=this;
var lines;
lines=smalltalk.send((smalltalk.Array || Array),"_new",[]);
smalltalk.send(self,"_linesDo_",[(function(aLine){
return smalltalk.send(lines,"_add_",[aLine]);
})]);
return lines;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_linesDo_",
smalltalk.method({
selector: "linesDo:",
fn: function (aBlock){
var self=this;
smalltalk.send(self,"_lineIndicesDo_",[(function(start,endWithoutDelimiters,end){
return smalltalk.send(aBlock,"_value_",[smalltalk.send(self,"_copyFrom_to_",[start,endWithoutDelimiters])]);
})]);
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_match_",
smalltalk.method({
selector: "match:",
fn: function (aRegexp){
var self=this;
return self.search(aRegexp) != -1;
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_matchesOf_",
smalltalk.method({
selector: "matchesOf:",
fn: function (aRegularExpression){
var self=this;
return self.match(aRegularExpression);
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
fn: function (){
var self=this;
console.log(self);
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("'","__comma",[self]),"__comma",["'"]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
fn: function (aString,anotherString){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[aString,"g"]),anotherString]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_replaceRegexp_with_",
smalltalk.method({
selector: "replaceRegexp:with:",
fn: function (aRegexp,aString){
var self=this;
return self.replace(aRegexp, aString);
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function (){
var self=this;
return self.split("").reverse().join("");
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_fromString_",[self]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return self.length;
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_tokenize_",
smalltalk.method({
selector: "tokenize:",
fn: function (aString){
var self=this;
return self.split(aString);
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimBoth",
smalltalk.method({
selector: "trimBoth",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimBoth_",["\x5cs"]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimBoth_",
smalltalk.method({
selector: "trimBoth:",
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_trimLeft_",[separators]),"_trimRight_",[separators]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimLeft",
smalltalk.method({
selector: "trimLeft",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimLeft_",["\x5cs"]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimLeft_",
smalltalk.method({
selector: "trimLeft:",
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[smalltalk.send(smalltalk.send("^[","__comma",[separators]),"__comma",["]+"]),"g"]),""]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimRight",
smalltalk.method({
selector: "trimRight",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimRight_",["\x5cs"]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimRight_",
smalltalk.method({
selector: "trimRight:",
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[smalltalk.send(smalltalk.send("[","__comma",[separators]),"__comma",["]+$"]),"g"]),""]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_unescaped",
smalltalk.method({
selector: "unescaped",
fn: function (){
var self=this;
return unescape(self);
;
return self}
}),
smalltalk.String);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self.charAt(i), i+1);};
;
return self}
}),
smalltalk.String);


smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return '\r';
;
return self}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
fn: function (){
var self=this;
return '\r\n';
;
return self}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return new self.fn(aString);
;
return self}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function (){
var self=this;
return '\n';
;
return self}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
fn: function (){
var self=this;
return ' ';
;
return self}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function (){
var self=this;
return (smalltalk.StringStream || StringStream);
}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_streamContents_",
smalltalk.method({
selector: "streamContents:",
fn: function (blockWithArg){
var self=this;
var $1;
var stream;
stream=smalltalk.send(smalltalk.send(self,"_streamClass",[]),"_on_",[smalltalk.send((smalltalk.String || String),"_new",[])]);
smalltalk.send(blockWithArg,"_value_",[stream]);
$1=smalltalk.send(stream,"_contents",[]);
return $1;
}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_tab",
smalltalk.method({
selector: "tab",
fn: function (){
var self=this;
return '\t';
;
return self}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aUTFCharCode){
var self=this;
return String.fromCharCode(aUTFCharCode);;
;
return self}
}),
smalltalk.String.klass);


smalltalk.addClass('Symbol', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__lt",[smalltalk.send(aSymbol,"_asString",[])]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__lt_eq",[smalltalk.send(aSymbol,"_asString",[])]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aSymbol){
var self=this;
var $1,$2;
$1=smalltalk.send(smalltalk.send(aSymbol,"_class",[]),"__eq",[smalltalk.send(self,"_class",[])]);
if(! smalltalk.assert($1)){
return false;
};
$2=smalltalk.send(smalltalk.send(self,"_asString",[]),"__eq",[smalltalk.send(aSymbol,"_asString",[])]);
return $2;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__gt",[smalltalk.send(aSymbol,"_asString",[])]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__gt_eq",[smalltalk.send(aSymbol,"_asString",[])]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_asJSON",[]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("smalltalk.symbolFor(\x22","__comma",[smalltalk.send(self,"_asString",[])]),"__comma",["\x22)"]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_asSelector",[]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return self.value;
;
return self}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function (){
var self=this;
return self;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (anIndex,aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_at_ifAbsent_",[anIndex,aBlock]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_asString",[]),"_collect_",[aBlock]),"_asSymbol",[]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function (anIndex,anotherIndex){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_fromString_",[smalltalk.send(smalltalk.send(self,"_asString",[]),"_copyFrom_to_",[anIndex,anotherIndex])]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return self;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_detect_",
smalltalk.method({
selector: "detect:",
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_detect_",[aBlock]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_asString",[]),"_do_",[aBlock]);
return self}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_isSymbol",
smalltalk.method({
selector: "isSymbol",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send("#","__comma",[smalltalk.send(self,"_asString",[])]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_asString",[]),"_select_",[aBlock]),"_asSymbol",[]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return self;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_size",[]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_asString",[]),"_withIndexDo_",[aBlock]);
return self}
}),
smalltalk.Symbol);


smalltalk.addMethod(
"_basicNew",
smalltalk.method({
selector: "basicNew",
fn: function (){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self}
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_lookup_",[aString]);
return $1;
}
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
"_lookup_",
smalltalk.method({
selector: "lookup:",
fn: function (aString){
var self=this;
return smalltalk.symbolFor(aString);;
;
return self}
}),
smalltalk.Symbol.klass);


smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"__eq",[smalltalk.send(aCollection,"_class",[])]),"_and_",[(function(){
return smalltalk.send(self["@elements"],"__eq",[smalltalk.send(aCollection,"_asArray",[])]);
})]);
return $1;
}
}),
smalltalk.Set);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject){
var self=this;

		var found;
		for(var i=0; i < self['@elements'].length; i++) {
			if(anObject == self['@elements'][i]) {
				found = true;
				break;
			}
		}
		if(!found) {self['@elements'].push(anObject)}
	;
;
return self}
}),
smalltalk.Set);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@elements"],"_copy",[]);
return $1;
}
}),
smalltalk.Set);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
fn: function (aBlock,anotherBlock){
var self=this;
var $1;
$1=smalltalk.send(self["@elements"],"_detect_ifNone_",[aBlock,anotherBlock]);
return $1;
}
}),
smalltalk.Set);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
smalltalk.send(self["@elements"],"_do_",[aBlock]);
return self}
}),
smalltalk.Set);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self["@elements"],"_includes_",[anObject]);
return $1;
}
}),
smalltalk.Set);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Collection);
self["@elements"]=[];
return self}
}),
smalltalk.Set);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function (anObject){
var self=this;
smalltalk.send(self["@elements"],"_remove_",[anObject]);
return self}
}),
smalltalk.Set);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function (aBlock){
var self=this;
var $1;
var collection;
collection=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_do_",[(function(each){
$1=smalltalk.send(aBlock,"_value_",[each]);
if(smalltalk.assert($1)){
return smalltalk.send(collection,"_add_",[each]);
};
})]);
return collection;
}
}),
smalltalk.Set);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@elements"],"_size",[]);
return $1;
}
}),
smalltalk.Set);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
fn: function (aString){
var self=this;
return self.compile(aString);
;
return self}
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
"_exec_",
smalltalk.method({
selector: "exec:",
fn: function (aString){
var self=this;
return self.exec(aString) || nil;
;
return self}
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
"_test_",
smalltalk.method({
selector: "test:",
fn: function (aString){
var self=this;
return self.test(aString);
;
return self}
}),
smalltalk.RegularExpression);


smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_fromString_flag_",[aString,""]);
return $1;
}
}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
"_fromString_flag_",
smalltalk.method({
selector: "fromString:flag:",
fn: function (aString,anotherString){
var self=this;
return new RegExp(aString, anotherString);
;
return self}
}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
smalltalk.addMethod(
"_atEnd",
smalltalk.method({
selector: "atEnd",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_position",[]),"__eq",[smalltalk.send(self,"_size",[])]);
return $1;
}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_atStart",
smalltalk.method({
selector: "atStart",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_position",[]),"__eq",[(0)]);
return $1;
}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return self}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function (){
var self=this;
return self["@collection"];
}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_collection",[]),"_copyFrom_to_",[(1),smalltalk.send(self,"_streamSize",[])]);
return $1;
}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
smalltalk.send((function(){
return smalltalk.send(self,"_atEnd",[]);
}),"_whileFalse_",[(function(){
return smalltalk.send(aBlock,"_value_",[smalltalk.send(self,"_next",[])]);
})]);
return self}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_flush",
smalltalk.method({
selector: "flush",
fn: function (){
var self=this;
return self}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_isEmpty",
smalltalk.method({
selector: "isEmpty",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_size",[]),"__eq",[(0)]);
return $1;
}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_atEnd",[]);
if(smalltalk.assert($2)){
$1=nil;
} else {
smalltalk.send(self,"_position_",[smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[(1)])]);
$1=smalltalk.send(self["@collection"],"_at_",[smalltalk.send(self,"_position",[])]);
};
return $1;
}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (anInteger){
var self=this;
var $1;
var tempCollection;
tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self,"_collection",[]),"_class",[]),"_new",[]);
smalltalk.send(anInteger,"_timesRepeat_",[(function(){
$1=smalltalk.send(self,"_atEnd",[]);
if(! smalltalk.assert($1)){
return smalltalk.send(tempCollection,"_add_",[smalltalk.send(self,"_next",[])]);
};
})]);
return tempCollection;
}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
fn: function (anObject){
var self=this;
smalltalk.send(self,"_position_",[smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[(1)])]);
smalltalk.send(smalltalk.send(self,"_collection",[]),"_at_put_",[smalltalk.send(self,"_position",[]),anObject]);
smalltalk.send(self,"_setStreamSize_",[smalltalk.send(smalltalk.send(self,"_streamSize",[]),"_max_",[smalltalk.send(self,"_position",[])])]);
return self}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection,"_do_",[(function(each){
return smalltalk.send(self,"_nextPut_",[each]);
})]);
return self}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_peek",
smalltalk.method({
selector: "peek",
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_atEnd",[]);
if(! smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(self,"_collection",[]),"_at_",[smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[(1)])]);
};
return $1;
}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@position"]) == nil || $receiver == undefined){
self["@position"]=(0);
$1=self["@position"];
} else {
$1=self["@position"];
};
return $1;
}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_position_",
smalltalk.method({
selector: "position:",
fn: function (anInteger){
var self=this;
self["@position"]=anInteger;
return self}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_reset",
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
smalltalk.send(self,"_position_",[(0)]);
return self}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_resetContents",
smalltalk.method({
selector: "resetContents",
fn: function (){
var self=this;
smalltalk.send(self,"_reset",[]);
smalltalk.send(self,"_setStreamSize_",[(0)]);
return self}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setCollection_",
smalltalk.method({
selector: "setCollection:",
fn: function (aCollection){
var self=this;
self["@collection"]=aCollection;
return self}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setStreamSize_",
smalltalk.method({
selector: "setStreamSize:",
fn: function (anInteger){
var self=this;
self["@streamSize"]=anInteger;
return self}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setToEnd",
smalltalk.method({
selector: "setToEnd",
fn: function (){
var self=this;
smalltalk.send(self,"_position_",[smalltalk.send(self,"_size",[])]);
return self}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_streamSize",[]);
return $1;
}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_skip_",
smalltalk.method({
selector: "skip:",
fn: function (anInteger){
var self=this;
smalltalk.send(self,"_position_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[anInteger]),"_min_max_",[smalltalk.send(self,"_size",[]),(0)])]);
return self}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_streamSize",
smalltalk.method({
selector: "streamSize",
fn: function (){
var self=this;
return self["@streamSize"];
}
}),
smalltalk.Stream);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aCollection){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_setCollection_",[aCollection]);
smalltalk.send($2,"_setStreamSize_",[smalltalk.send(aCollection,"_size",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel-Collections');
smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_nextPutAll_",[smalltalk.send((smalltalk.String || String),"_cr",[])]);
return $1;
}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_nextPutAll_",[smalltalk.send((smalltalk.String || String),"_crlf",[])]);
return $1;
}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_nextPutAll_",[smalltalk.send((smalltalk.String || String),"_lf",[])]);
return $1;
}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (anInteger){
var self=this;
var $1;
var tempCollection;
tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self,"_collection",[]),"_class",[]),"_new",[]);
smalltalk.send(anInteger,"_timesRepeat_",[(function(){
$1=smalltalk.send(self,"_atEnd",[]);
if(! smalltalk.assert($1)){
tempCollection=smalltalk.send(tempCollection,"__comma",[smalltalk.send(self,"_next",[])]);
return tempCollection;
};
})]);
return tempCollection;
}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
fn: function (aString){
var self=this;
smalltalk.send(self,"_nextPutAll_",[aString]);
return self}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
fn: function (aString){
var self=this;
smalltalk.send(self,"_setCollection_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_collection",[]),"_copyFrom_to_",[(1),smalltalk.send(self,"_position",[])]),"__comma",[aString]),"__comma",[smalltalk.send(smalltalk.send(self,"_collection",[]),"_copyFrom_to_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[(1)]),"__plus",[smalltalk.send(aString,"_size",[])]),smalltalk.send(smalltalk.send(self,"_collection",[]),"_size",[])])])]);
smalltalk.send(self,"_position_",[smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[smalltalk.send(aString,"_size",[])])]);
smalltalk.send(self,"_setStreamSize_",[smalltalk.send(smalltalk.send(self,"_streamSize",[]),"_max_",[smalltalk.send(self,"_position",[])])]);
return self}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
fn: function (){
var self=this;
smalltalk.send(self,"_nextPut_",[" "]);
return self}
}),
smalltalk.StringStream);



