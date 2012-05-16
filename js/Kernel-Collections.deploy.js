smalltalk.addPackage('Kernel-Collections', {});
smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function Association__eq(anAssociation){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(anAssociation, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_key", []), "__eq", [smalltalk.send(anAssociation, "_key", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_value", []), "__eq", [smalltalk.send(anAssociation, "_value", [])]);})]);})]);
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function Association_key(){
var self=this;
return self['@key'];
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
"_key_",
smalltalk.method({
selector: "key:",
fn: function Association_key_(aKey){
var self=this;
(self['@key']=aKey);
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
fn: function Association_storeOn_(aStream){
var self=this;
smalltalk.send(self['@key'], "_storeOn_", [aStream]);
smalltalk.send(aStream, "_nextPutAll_", ["->"]);
smalltalk.send(self['@value'], "_storeOn_", [aStream]);
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function Association_value(){
var self=this;
return self['@value'];
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function Association_value_(aValue){
var self=this;
(self['@value']=aValue);
return self;}
}),
smalltalk.Association);


smalltalk.addMethod(
"_key_value_",
smalltalk.method({
selector: "key:value:",
fn: function Association_class_key_value_(aKey, aValue){
var self=this;
return (function($rec){smalltalk.send($rec, "_key_", [aKey]);smalltalk.send($rec, "_value_", [aValue]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Association.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function Collection__comma(aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function Collection_add_(anObject){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
fn: function Collection_addAll_(aCollection){
var self=this;
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(self, "_add_", [each]);})]);
return aCollection;
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
fn: function Collection_asArray(){
var self=this;
return smalltalk.send((smalltalk.Array || Array), "_withAll_", [self]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function Collection_asJSON(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asArray", []), "_collect_", [(function(each){return smalltalk.send(each, "_asJSON", []);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asOrderedCollection",
smalltalk.method({
selector: "asOrderedCollection",
fn: function Collection_asOrderedCollection(){
var self=this;
return smalltalk.send(self, "_asArray", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asSet",
smalltalk.method({
selector: "asSet",
fn: function Collection_asSet(){
var self=this;
return smalltalk.send((smalltalk.Set || Set), "_withAll_", [self]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
fn: function Collection_collect_(aBlock){
var self=this;
var newCollection=nil;
(newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [smalltalk.send(aBlock, "_value_", [each])]);})]);
return newCollection;
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWith_",
smalltalk.method({
selector: "copyWith:",
fn: function Collection_copyWith_(anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWithAll_",
smalltalk.method({
selector: "copyWithAll:",
fn: function Collection_copyWithAll_(aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWithoutAll_",
smalltalk.method({
selector: "copyWithoutAll:",
fn: function Collection_copyWithoutAll_(aCollection){
var self=this;
return smalltalk.send(self, "_reject_", [(function(each){return smalltalk.send(aCollection, "_includes_", [each]);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_detect_",
smalltalk.method({
selector: "detect:",
fn: function Collection_detect_(aBlock){
var self=this;
return smalltalk.send(self, "_detect_ifNone_", [aBlock, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
fn: function Collection_detect_ifNone_(aBlock, anotherBlock){
var self=this;

		for(var i = 0; i < self.length; i++)
			if(aBlock(self[i]))
				return self[i];
		return anotherBlock();
	;
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function Collection_do_(aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i]);};
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_do_separatedBy_",
smalltalk.method({
selector: "do:separatedBy:",
fn: function Collection_do_separatedBy_(aBlock, anotherBlock){
var self=this;
var first=nil;
(first=true);
smalltalk.send(self, "_do_", [(function(each){((($receiver = first).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (first=false);})() : (function(){return smalltalk.send(anotherBlock, "_value", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (first=false);}), (function(){return smalltalk.send(anotherBlock, "_value", []);})]));return smalltalk.send(aBlock, "_value_", [each]);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_errorNotFound",
smalltalk.method({
selector: "errorNotFound",
fn: function Collection_errorNotFound(){
var self=this;
smalltalk.send(self, "_error_", ["Object is not in the collection"]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_ifEmpty_",
smalltalk.method({
selector: "ifEmpty:",
fn: function Collection_ifEmpty_(aBlock){
var self=this;
return ((($receiver = smalltalk.send(self, "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aBlock, "_value", []);})() : (function(){return self;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value", []);}), (function(){return self;})]));
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_ifNotEmpty_",
smalltalk.method({
selector: "ifNotEmpty:",
fn: function Collection_ifNotEmpty_(aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_notEmpty", []), "_ifTrue_", [aBlock]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
fn: function Collection_includes_(anObject){
var self=this;

		var i = self.length;
		while (i--) {
			if (smalltalk.send(self[i], "__eq", [anObject])) {return true;}	
		}
		return false
	;
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_inject_into_",
smalltalk.method({
selector: "inject:into:",
fn: function Collection_inject_into_(anObject, aBlock){
var self=this;
var result=nil;
(result=anObject);
smalltalk.send(self, "_do_", [(function(each){return (result=smalltalk.send(aBlock, "_value_value_", [result, each]));})]);
return result;
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_isEmpty",
smalltalk.method({
selector: "isEmpty",
fn: function Collection_isEmpty(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [(0)]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_notEmpty",
smalltalk.method({
selector: "notEmpty",
fn: function Collection_notEmpty(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_isEmpty", []), "_not", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_readStream",
smalltalk.method({
selector: "readStream",
fn: function Collection_readStream(){
var self=this;
return smalltalk.send(self, "_stream", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_reject_",
smalltalk.method({
selector: "reject:",
fn: function Collection_reject_(aBlock){
var self=this;
return smalltalk.send(self, "_select_", [(function(each){return smalltalk.send(smalltalk.send(aBlock, "_value_", [each]), "__eq", [false]);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function Collection_remove_(anObject){
var self=this;
return smalltalk.send(self, "_remove_ifAbsent_", [anObject, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function Collection_remove_ifAbsent_(anObject, aBlock){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function Collection_select_(aBlock){
var self=this;
var stream=nil;
(stream=smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_new", []), "_writeStream", []));
smalltalk.send(self, "_do_", [(function(each){return ((($receiver = smalltalk.send(aBlock, "_value_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(stream, "_nextPut_", [each]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(stream, "_nextPut_", [each]);})]));})]);
return smalltalk.send(stream, "_contents", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function Collection_size(){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
fn: function Collection_stream(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_streamClass", []), "_on_", [self]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function Collection_streamClass(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_streamClass", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_writeStream",
smalltalk.method({
selector: "writeStream",
fn: function Collection_writeStream(){
var self=this;
return smalltalk.send(self, "_stream", []);
return self;}
}),
smalltalk.Collection);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function Collection_class_new_(anInteger){
var self=this;
return smalltalk.send(self, "_new", []);
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function Collection_class_streamClass(){
var self=this;
return (smalltalk.Stream || Stream);
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
fn: function Collection_class_with_(anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
fn: function Collection_class_with_with_(anObject, anotherObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);smalltalk.send($rec, "_add_", [anotherObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_with_with_",
smalltalk.method({
selector: "with:with:with:",
fn: function Collection_class_with_with_with_(firstObject, secondObject, thirdObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [firstObject]);smalltalk.send($rec, "_add_", [secondObject]);smalltalk.send($rec, "_add_", [thirdObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_withAll_",
smalltalk.method({
selector: "withAll:",
fn: function Collection_class_withAll_(aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Collection.klass);


smalltalk.addClass('HashedCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function HashedCollection__comma(aCollection){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function HashedCollection__eq(aHashedCollection){
var self=this;
var $early={};
try{((($receiver = smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aHashedCollection, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));
((($receiver = smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [smalltalk.send(aHashedCollection, "_size", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));
return smalltalk.send(smalltalk.send(self, "_associations", []), "__eq", [smalltalk.send(aHashedCollection, "_associations", [])]);
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function HashedCollection_add_(anAssociation){
var self=this;
smalltalk.send(self, "_at_put_", [smalltalk.send(anAssociation, "_key", []), smalltalk.send(anAssociation, "_value", [])]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
fn: function HashedCollection_addAll_(aHashedCollection){
var self=this;
smalltalk.send(self, "_addAll_", [smalltalk.send(aHashedCollection, "_associations", [])], HashedCollection_addAll_.method.methodClass.superclass || nil);
return aHashedCollection;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asDictionary",
smalltalk.method({
selector: "asDictionary",
fn: function HashedCollection_asDictionary(){
var self=this;
return smalltalk.send((smalltalk.Dictionary || Dictionary), "_fromPairs_", [smalltalk.send(self, "_associations", [])]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function HashedCollection_asJSON(){
var self=this;
var c=nil;
(c=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(c, "_at_put_", [key, smalltalk.send(value, "_asJSON", [])]);})]);
return c;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_associations",
smalltalk.method({
selector: "associations",
fn: function HashedCollection_associations(){
var self=this;
var associations=nil;
(associations=[]);
smalltalk.send(smalltalk.send(self, "_keys", []), "_do_", [(function(each){return smalltalk.send(associations, "_add_", [smalltalk.send((smalltalk.Association || Association), "_key_value_", [each, smalltalk.send(self, "_at_", [each])])]);})]);
return associations;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_associationsDo_",
smalltalk.method({
selector: "associationsDo:",
fn: function HashedCollection_associationsDo_(aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_associations", []), "_do_", [aBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function HashedCollection_at_(aKey){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function HashedCollection_at_ifAbsent_(aKey, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_includesKey_", [aKey]), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_basicAt_", [aKey]);}), aBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifAbsentPut_",
smalltalk.method({
selector: "at:ifAbsentPut:",
fn: function HashedCollection_at_ifAbsentPut_(aKey, aBlock){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifPresent_",
smalltalk.method({
selector: "at:ifPresent:",
fn: function HashedCollection_at_ifPresent_(aKey, aBlock){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", [aKey])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})() : nil;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifPresent_ifAbsent_",
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
fn: function HashedCollection_at_ifPresent_ifAbsent_(aKey, aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicAt_", [aKey]), "_ifNil_ifNotNil_", [anotherBlock, (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function HashedCollection_at_put_(aKey, aValue){
var self=this;
return smalltalk.send(self, "_basicAt_put_", [aKey, aValue]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
fn: function HashedCollection_collect_(aBlock){
var self=this;
var newDict=nil;
(newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(newDict, "_at_put_", [key, smalltalk.send(aBlock, "_value_", [value])]);})]);
return newDict;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function HashedCollection_copyFrom_to_(anIndex, anotherIndex){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function HashedCollection_deepCopy(){
var self=this;
var copy=nil;
(copy=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(copy, "_at_put_", [smalltalk.send(each, "_key", []), smalltalk.send(smalltalk.send(each, "_value", []), "_deepCopy", [])]);})]);
return copy;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
fn: function HashedCollection_detect_ifNone_(aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_detect_ifNone_", [aBlock, anotherBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function HashedCollection_do_(aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_values", []), "_do_", [aBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
fn: function HashedCollection_includes_(anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_includes_", [anObject]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_includesKey_",
smalltalk.method({
selector: "includesKey:",
fn: function HashedCollection_includesKey_(aKey){
var self=this;
return self.hasOwnProperty(aKey);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_keys",
smalltalk.method({
selector: "keys",
fn: function HashedCollection_keys(){
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
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_keysAndValuesDo_",
smalltalk.method({
selector: "keysAndValuesDo:",
fn: function HashedCollection_keysAndValuesDo_(aBlock){
var self=this;
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function HashedCollection_printString(){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_printString", [], HashedCollection_printString.method.methodClass.superclass || nil)]);return smalltalk.send($rec, "_nextPutAll_", ["("]);})(aStream);smalltalk.send(smalltalk.send(self, "_associations", []), "_do_separatedBy_", [(function(anAssociation){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_key", []), "_printString", [])]);smalltalk.send($rec, "_nextPutAll_", [" -> "]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_value", []), "_printString", [])]);})(aStream);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [" , "]);})]);return smalltalk.send(aStream, "_nextPutAll_", [")"]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function HashedCollection_remove_ifAbsent_(aKey, aBlock){
var self=this;
return smalltalk.send(self, "_removeKey_ifAbsent_", [aKey, aBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_removeKey_",
smalltalk.method({
selector: "removeKey:",
fn: function HashedCollection_removeKey_(aKey){
var self=this;
return smalltalk.send(self, "_remove_", [aKey]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_removeKey_ifAbsent_",
smalltalk.method({
selector: "removeKey:ifAbsent:",
fn: function HashedCollection_removeKey_ifAbsent_(aKey, aBlock){
var self=this;
return ((($receiver = smalltalk.send(self, "_includesKey_", [aKey])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(aBlock, "_value", []);})() : (function(){return smalltalk.send(self, "_basicDelete_", [aKey]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(aBlock, "_value", []);}), (function(){return smalltalk.send(self, "_basicDelete_", [aKey]);})]));
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function HashedCollection_select_(aBlock){
var self=this;
var newDict=nil;
(newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return ((($receiver = smalltalk.send(aBlock, "_value_", [value])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})]));})]);
return newDict;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function HashedCollection_shallowCopy(){
var self=this;
var copy=nil;
(copy=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(copy, "_at_put_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return copy;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function HashedCollection_size(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_keys", []), "_size", []);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
fn: function HashedCollection_storeOn_(aStream){
var self=this;
smalltalk.send(aStream, "_nextPutAll_", ["#{"]);
smalltalk.send(smalltalk.send(self, "_associations", []), "_do_separatedBy_", [(function(each){return smalltalk.send(each, "_storeOn_", [aStream]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [". "]);})]);
smalltalk.send(aStream, "_nextPutAll_", ["}"]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_values",
smalltalk.method({
selector: "values",
fn: function HashedCollection_values(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_keys", []), "_collect_", [(function(each){return smalltalk.send(self, "_at_", [each]);})]);
return self;}
}),
smalltalk.HashedCollection);


smalltalk.addMethod(
"_fromPairs_",
smalltalk.method({
selector: "fromPairs:",
fn: function HashedCollection_class_fromPairs_(aCollection){
var self=this;
var dict=nil;
(dict=smalltalk.send(self, "_new", []));
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(dict, "_add_", [each]);})]);
return dict;
return self;}
}),
smalltalk.HashedCollection.klass);


smalltalk.addClass('Dictionary', smalltalk.HashedCollection, ['keys', 'values'], 'Kernel-Collections');
smalltalk.addMethod(
"_asHashedCollection",
smalltalk.method({
selector: "asHashedCollection",
fn: function Dictionary_asHashedCollection(){
var self=this;
return smalltalk.send((smalltalk.HashedCollection || HashedCollection), "_fromPairs_", [smalltalk.send(self, "_associations", [])]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function Dictionary_asJSON(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asHashedCollection", []), "_asJSON", []);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function Dictionary_at_ifAbsent_(aKey, aBlock){
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
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function Dictionary_at_put_(aKey, aValue){
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
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_includesKey_",
smalltalk.method({
selector: "includesKey:",
fn: function Dictionary_includesKey_(aKey){
var self=this;
return smalltalk.send(self['@keys'], "_includes_", [aKey]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function Dictionary_initialize(){
var self=this;
smalltalk.send(self, "_initialize", [], Dictionary_initialize.method.methodClass.superclass || nil);
(self['@keys']=[]);
(self['@values']=[]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_keys",
smalltalk.method({
selector: "keys",
fn: function Dictionary_keys(){
var self=this;
return smalltalk.send(self['@keys'], "_copy", []);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_removeKey_ifAbsent_",
smalltalk.method({
selector: "removeKey:ifAbsent:",
fn: function Dictionary_removeKey_ifAbsent_(aKey, aBlock){
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
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_values",
smalltalk.method({
selector: "values",
fn: function Dictionary_values(){
var self=this;
return smalltalk.send(self['@values'], "_copy", []);
return self;}
}),
smalltalk.Dictionary);



smalltalk.addClass('SequenceableCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function SequenceableCollection__eq(aCollection){
var self=this;
var $early={};
try{((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aCollection, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [smalltalk.send(aCollection, "_size", [])]);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));
smalltalk.send(self, "_withIndexDo_", [(function(each, i){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_at_", [i]), "__eq", [each])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));})]);
return true;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_addLast_",
smalltalk.method({
selector: "addLast:",
fn: function SequenceableCollection_addLast_(anObject){
var self=this;
smalltalk.send(self, "_add_", [anObject]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_allButFirst",
smalltalk.method({
selector: "allButFirst",
fn: function SequenceableCollection_allButFirst(){
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(2), smalltalk.send(self, "_size", [])]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_allButLast",
smalltalk.method({
selector: "allButLast",
fn: function SequenceableCollection_allButLast(){
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(1), ((($receiver = smalltalk.send(self, "_size", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function SequenceableCollection_at_(anIndex){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [anIndex, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function SequenceableCollection_at_ifAbsent_(anIndex, aBlock){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function SequenceableCollection_at_put_(anIndex, anObject){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
fn: function SequenceableCollection_atRandom(){
var self=this;
return smalltalk.send(self, "_at_", [smalltalk.send(smalltalk.send(self, "_size", []), "_atRandom", [])]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function SequenceableCollection_copyFrom_to_(anIndex, anotherIndex){
var self=this;
var range=nil;
var newCollection=nil;
(range=smalltalk.send(anIndex, "_to_", [anotherIndex]));
(newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new_", [smalltalk.send(range, "_size", [])]));
smalltalk.send(range, "_withIndexDo_", [(function(each, i){return smalltalk.send(newCollection, "_at_put_", [i, smalltalk.send(self, "_at_", [each])]);})]);
return newCollection;
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function SequenceableCollection_deepCopy(){
var self=this;
var newCollection=nil;
(newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new_", [smalltalk.send(self, "_size", [])]));
smalltalk.send(self, "_withIndexDo_", [(function(each, index){return smalltalk.send(newCollection, "_at_put_", [index, smalltalk.send(each, "_deepCopy", [])]);})]);
return newCollection;
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_first",
smalltalk.method({
selector: "first",
fn: function SequenceableCollection_first(){
var self=this;
return smalltalk.send(self, "_at_", [(1)]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_first_",
smalltalk.method({
selector: "first:",
fn: function SequenceableCollection_first_(n){
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(1), n]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_fourth",
smalltalk.method({
selector: "fourth",
fn: function SequenceableCollection_fourth(){
var self=this;
return smalltalk.send(self, "_at_", [(4)]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_",
smalltalk.method({
selector: "indexOf:",
fn: function SequenceableCollection_indexOf_(anObject){
var self=this;
return smalltalk.send(self, "_indexOf_ifAbsent_", [anObject, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_ifAbsent_",
smalltalk.method({
selector: "indexOf:ifAbsent:",
fn: function SequenceableCollection_indexOf_ifAbsent_(anObject, aBlock){
var self=this;

		for(var i=0;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_startingAt_",
smalltalk.method({
selector: "indexOf:startingAt:",
fn: function SequenceableCollection_indexOf_startingAt_(anObject, start){
var self=this;
return smalltalk.send(self, "_indexOf_startingAt_ifAbsent_", [anObject, start, (function(){return (0);})]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_startingAt_ifAbsent_",
smalltalk.method({
selector: "indexOf:startingAt:ifAbsent:",
fn: function SequenceableCollection_indexOf_startingAt_ifAbsent_(anObject, start, aBlock){
var self=this;

		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_last",
smalltalk.method({
selector: "last",
fn: function SequenceableCollection_last(){
var self=this;
return smalltalk.send(self, "_at_", [smalltalk.send(self, "_size", [])]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function SequenceableCollection_printString(){
var self=this;
var str=nil;
(str=smalltalk.send("", "_writeStream", []));
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_printString", [], SequenceableCollection_printString.method.methodClass.superclass || nil), "__comma", [" ("])]);
smalltalk.send(self, "_do_separatedBy_", [(function(each){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(each, "_printString", [])]);}), (function(){return smalltalk.send(str, "_nextPutAll_", [" "]);})]);
smalltalk.send(str, "_nextPutAll_", [")"]);
return smalltalk.send(str, "_contents", []);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_removeLast",
smalltalk.method({
selector: "removeLast",
fn: function SequenceableCollection_removeLast(){
var self=this;
smalltalk.send(self, "_remove_", [smalltalk.send(self, "_last", [])]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function SequenceableCollection_reversed(){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_second",
smalltalk.method({
selector: "second",
fn: function SequenceableCollection_second(){
var self=this;
return smalltalk.send(self, "_at_", [(2)]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function SequenceableCollection_shallowCopy(){
var self=this;
var newCollection=nil;
(newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new_", [smalltalk.send(self, "_size", [])]));
smalltalk.send(self, "_withIndexDo_", [(function(each, index){return smalltalk.send(newCollection, "_at_put_", [index, each]);})]);
return newCollection;
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_third",
smalltalk.method({
selector: "third",
fn: function SequenceableCollection_third(){
var self=this;
return smalltalk.send(self, "_at_", [(3)]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
fn: function SequenceableCollection_withIndexDo_(aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i], i+1);};
return self;}
}),
smalltalk.SequenceableCollection);



smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function Array_add_(anObject){
var self=this;
self.push(anObject); return anObject;;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function Array_asJavascript(){
var self=this;
return smalltalk.send(smalltalk.send("[", "__comma", [smalltalk.send(smalltalk.send(self, "_collect_", [(function(each){return smalltalk.send(each, "_asJavascript", []);})]), "_join_", [", "])]), "__comma", ["]"]);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function Array_at_ifAbsent_(anIndex, aBlock){
var self=this;

		if((anIndex < 1) || (self.length < anIndex)) {return aBlock()};
		return self[anIndex - 1];
	;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function Array_at_put_(anIndex, anObject){
var self=this;
return self[anIndex - 1] = anObject;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
fn: function Array_join_(aString){
var self=this;
return self.join(aString);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function Array_remove_(anObject){
var self=this;

		for(var i=0;i<self.length;i++) {
			if(self[i] == anObject) {
				self.splice(i,1);
				break;
			}
		}
	;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
"_removeFrom_to_",
smalltalk.method({
selector: "removeFrom:to:",
fn: function Array_removeFrom_to_(aNumber, anotherNumber){
var self=this;
self.splice(aNumber - 1,anotherNumber - 1);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function Array_reversed(){
var self=this;
return self._copy().reverse();
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function Array_size(){
var self=this;
return self.length;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sort",
smalltalk.method({
selector: "sort",
fn: function Array_sort(){
var self=this;
return smalltalk.send(self, "_basicPerform_", ["sort"]);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sort_",
smalltalk.method({
selector: "sort:",
fn: function Array_sort_(aBlock){
var self=this;

		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sorted",
smalltalk.method({
selector: "sorted",
fn: function Array_sorted(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort", []);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
"_sorted_",
smalltalk.method({
selector: "sorted:",
fn: function Array_sorted_(aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort_", [aBlock]);
return self;}
}),
smalltalk.Array);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function Array_class_new_(anInteger){
var self=this;
return new Array(anInteger);
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
fn: function Array_class_with_(anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [(1), anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new_", [(1)]));
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
fn: function Array_class_with_with_(anObject, anObject2){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [(1), anObject]);smalltalk.send($rec, "_at_put_", [(2), anObject2]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new_", [(2)]));
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_with_with_",
smalltalk.method({
selector: "with:with:with:",
fn: function Array_class_with_with_with_(anObject, anObject2, anObject3){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [(1), anObject]);smalltalk.send($rec, "_at_put_", [(2), anObject2]);smalltalk.send($rec, "_at_put_", [(3), anObject3]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new_", [(3)]));
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_withAll_",
smalltalk.method({
selector: "withAll:",
fn: function Array_class_withAll_(aCollection){
var self=this;
var instance=nil;
(instance=smalltalk.send(self, "_new_", [smalltalk.send(aCollection, "_size", [])]));
smalltalk.send(aCollection, "_withIndexDo_", [(function(each, index){return smalltalk.send(instance, "_at_put_", [index, each]);})]);
return instance;
return self;}
}),
smalltalk.Array.klass);


smalltalk.addClass('CharacterArray', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function CharacterArray__comma(aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "__comma", [smalltalk.send(aString, "_asString", [])]);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function CharacterArray_add_(anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
fn: function CharacterArray_asLowercase(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [smalltalk.send(smalltalk.send(self, "_asString", []), "_asLowercase", [])]);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
fn: function CharacterArray_asNumber(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_asNumber", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function CharacterArray_asString(){
var self=this;
return smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function CharacterArray_asSymbol(){
var self=this;
return smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
fn: function CharacterArray_asUppercase(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [smalltalk.send(smalltalk.send(self, "_asString", []), "_asUppercase", [])]);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function CharacterArray_at_put_(anIndex, anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_errorReadOnly",
smalltalk.method({
selector: "errorReadOnly",
fn: function CharacterArray_errorReadOnly(){
var self=this;
smalltalk.send(self, "_error_", ["Object is read-only"]);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function CharacterArray_printString(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_printString", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function CharacterArray_remove_(anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;}
}),
smalltalk.CharacterArray);


smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function CharacterArray_class_fromString_(aString){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.CharacterArray.klass);


smalltalk.addClass('String', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
fn: function String__comma(aString){
var self=this;
return self + aString;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function String__lt(aString){
var self=this;
return String(self) < aString._asString();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function String__lt_eq(aString){
var self=this;
return String(self) <= aString._asString();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function String__eq(aString){
var self=this;
var $early={};
try{((($receiver = smalltalk.send(smalltalk.send(aString, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));
return String(self) === String(aString);
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.String);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function String__eq_eq(aString){
var self=this;
return smalltalk.send(self, "__eq", [aString]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function String__gt(aString){
var self=this;
return String(self) > aString._asString();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function String__gt_eq(aString){
var self=this;
return String(self) >= aString._asString();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function String_asJSON(){
var self=this;
return self;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_asJavaScriptSelector",
smalltalk.method({
selector: "asJavaScriptSelector",
fn: function String_asJavaScriptSelector(){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_asSelector", []), "_replace_with_", ["^_", ""]), "_replace_with_", ["_.*", ""]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function String_asJavascript(){
var self=this;

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
fn: function String_asLowercase(){
var self=this;
return self.toLowerCase();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
fn: function String_asNumber(){
var self=this;
return Number(self);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
fn: function String_asSelector(){
var self=this;
var selector=nil;
(selector=smalltalk.send("_", "__comma", [self]));
(selector=smalltalk.send(selector, "_replace_with_", [":", "_"]));
(selector=smalltalk.send(selector, "_replace_with_", ["[+]", "_plus"]));
(selector=smalltalk.send(selector, "_replace_with_", ["-", "_minus"]));
(selector=smalltalk.send(selector, "_replace_with_", ["[*]", "_star"]));
(selector=smalltalk.send(selector, "_replace_with_", ["[/]", "_slash"]));
(selector=smalltalk.send(selector, "_replace_with_", [">", "_gt"]));
(selector=smalltalk.send(selector, "_replace_with_", ["<", "_lt"]));
(selector=smalltalk.send(selector, "_replace_with_", ["=", "_eq"]));
(selector=smalltalk.send(selector, "_replace_with_", [",", "_comma"]));
(selector=smalltalk.send(selector, "_replace_with_", ["[@]", "_at"]));
return selector;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function String_asString(){
var self=this;
return self;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function String_asSymbol(){
var self=this;
return smalltalk.send((smalltalk.Symbol || Symbol), "_lookup_", [self]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
fn: function String_asUppercase(){
var self=this;
return self.toUpperCase();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_asciiValue",
smalltalk.method({
selector: "asciiValue",
fn: function String_asciiValue(){
var self=this;
return self.charCodeAt(0);;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function String_at_ifAbsent_(anIndex, aBlock){
var self=this;
return self[anIndex - 1] || aBlock();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function String_copyFrom_to_(anIndex, anotherIndex){
var self=this;
return self.substring(anIndex - 1, anotherIndex);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function String_deepCopy(){
var self=this;
return smalltalk.send(self, "_shallowCopy", []);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_escaped",
smalltalk.method({
selector: "escaped",
fn: function String_escaped(){
var self=this;
return escape(self);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_includesSubString_",
smalltalk.method({
selector: "includesSubString:",
fn: function String_includesSubString_(subString){
var self=this;
 return self.indexOf(subString) != -1 ;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
fn: function String_isString(){
var self=this;
return true;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
fn: function String_join_(aCollection){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){return smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(each, "_asString", [])]);}), (function(){return smalltalk.send(stream, "_nextPutAll_", [self]);})]);})]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_lineIndicesDo_",
smalltalk.method({
selector: "lineIndicesDo:",
fn: function String_lineIndicesDo_(aBlock){
var self=this;
var $early={};
try{var cr=nil;
var lf=nil;
var start=nil;
var sz=nil;
var nextLF=nil;
var nextCR=nil;
(start=(1));
(sz=smalltalk.send(self, "_size", []));
(cr=smalltalk.send((smalltalk.String || String), "_cr", []));
(nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, (1)]));
(lf=smalltalk.send((smalltalk.String || String), "_lf", []));
(nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, (1)]));
(function(){while((function(){return ((($receiver = start).klass === smalltalk.Number) ? $receiver <=sz : smalltalk.send($receiver, "__lt_eq", [sz]));})()) {(function(){((($receiver = smalltalk.send(smalltalk.send(nextLF, "__eq", [(0)]), "_and_", [(function(){return smalltalk.send(nextCR, "__eq", [(0)]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, sz, sz]);return (function(){throw $early=[self]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, sz, sz]);return (function(){throw $early=[self]})();})]));return ((($receiver = smalltalk.send(smalltalk.send(nextCR, "__eq", [(0)]), "_or_", [(function(){return smalltalk.send((0) < nextLF, "_and_", [(function(){return ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver <nextCR : smalltalk.send($receiver, "__lt", [nextCR]));})]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);(start=(1) + nextLF);return (nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]));})() : (function(){return ((($receiver = smalltalk.send((1) + nextCR, "__eq", [nextLF])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);(start=(1) + nextLF);(nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));return (nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]));})() : (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);(start=(1) + nextCR);return (nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);(start=(1) + nextLF);(nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));return (nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]));}), (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);(start=(1) + nextCR);return (nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);(start=(1) + nextLF);return (nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]));}), (function(){return ((($receiver = smalltalk.send((1) + nextCR, "__eq", [nextLF])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);(start=(1) + nextLF);(nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));return (nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]));})() : (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);(start=(1) + nextCR);return (nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);(start=(1) + nextLF);(nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));return (nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]));}), (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);(start=(1) + nextCR);return (nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));})]));})]));})()}})();
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.String);

smalltalk.addMethod(
"_lineNumber_",
smalltalk.method({
selector: "lineNumber:",
fn: function String_lineNumber_(anIndex){
var self=this;
var $early={};
try{var lineCount=nil;
(lineCount=(0));
smalltalk.send(self, "_lineIndicesDo_", [(function(start, endWithoutDelimiters, end){return ((($receiver = smalltalk.send((lineCount=((($receiver = lineCount).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))), "__eq", [anIndex])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw $early=[smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw $early=[smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])]})();})]));})]);
return nil;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.String);

smalltalk.addMethod(
"_lines",
smalltalk.method({
selector: "lines",
fn: function String_lines(){
var self=this;
var lines=nil;
(lines=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(self, "_linesDo_", [(function(aLine){return smalltalk.send(lines, "_add_", [aLine]);})]);
return lines;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_linesDo_",
smalltalk.method({
selector: "linesDo:",
fn: function String_linesDo_(aBlock){
var self=this;
smalltalk.send(self, "_lineIndicesDo_", [(function(start, endWithoutDelimiters, end){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])]);})]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_match_",
smalltalk.method({
selector: "match:",
fn: function String_match_(aRegexp){
var self=this;
return self.search(aRegexp) != -1;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_matchesOf_",
smalltalk.method({
selector: "matchesOf:",
fn: function String_matchesOf_(aRegularExpression){
var self=this;
return self.match(aRegularExpression);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
fn: function String_printNl(){
var self=this;
console.log(self);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function String_printString(){
var self=this;
return smalltalk.send(smalltalk.send("'", "__comma", [self]), "__comma", ["'"]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
fn: function String_replace_with_(aString, anotherString){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [aString, "g"]), anotherString]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_replaceRegexp_with_",
smalltalk.method({
selector: "replaceRegexp:with:",
fn: function String_replaceRegexp_with_(aRegexp, aString){
var self=this;
return self.replace(aRegexp, aString);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
fn: function String_reversed(){
var self=this;
return self.split("").reverse().join("");
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function String_shallowCopy(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [self]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function String_size(){
var self=this;
return self.length;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_tokenize_",
smalltalk.method({
selector: "tokenize:",
fn: function String_tokenize_(aString){
var self=this;
return self.split(aString);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimBoth",
smalltalk.method({
selector: "trimBoth",
fn: function String_trimBoth(){
var self=this;
return smalltalk.send(self, "_trimBoth_", ["\x5cs"]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimBoth_",
smalltalk.method({
selector: "trimBoth:",
fn: function String_trimBoth_(separators){
var self=this;
return smalltalk.send(smalltalk.send(self, "_trimLeft_", [separators]), "_trimRight_", [separators]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimLeft",
smalltalk.method({
selector: "trimLeft",
fn: function String_trimLeft(){
var self=this;
return smalltalk.send(self, "_trimLeft_", ["\x5cs"]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimLeft_",
smalltalk.method({
selector: "trimLeft:",
fn: function String_trimLeft_(separators){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [smalltalk.send(smalltalk.send("^[", "__comma", [separators]), "__comma", ["]+"]), "g"]), ""]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimRight",
smalltalk.method({
selector: "trimRight",
fn: function String_trimRight(){
var self=this;
return smalltalk.send(self, "_trimRight_", ["\x5cs"]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_trimRight_",
smalltalk.method({
selector: "trimRight:",
fn: function String_trimRight_(separators){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [smalltalk.send(smalltalk.send("[", "__comma", [separators]), "__comma", ["]+$"]), "g"]), ""]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_unescaped",
smalltalk.method({
selector: "unescaped",
fn: function String_unescaped(){
var self=this;
return unescape(self);
return self;}
}),
smalltalk.String);


smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function String_class_cr(){
var self=this;
return '\r';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
fn: function String_class_crlf(){
var self=this;
return '\r\n';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function String_class_fromString_(aString){
var self=this;
return new self.fn(aString);
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function String_class_lf(){
var self=this;
return '\n';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
fn: function String_class_space(){
var self=this;
return ' ';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
fn: function String_class_streamClass(){
var self=this;
return (smalltalk.StringStream || StringStream);
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_streamContents_",
smalltalk.method({
selector: "streamContents:",
fn: function String_class_streamContents_(blockWithArg){
var self=this;
var stream=nil;
(stream=smalltalk.send(smalltalk.send(self, "_streamClass", []), "_on_", [smalltalk.send((smalltalk.String || String), "_new", [])]));
smalltalk.send(blockWithArg, "_value_", [stream]);
return smalltalk.send(stream, "_contents", []);
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_tab",
smalltalk.method({
selector: "tab",
fn: function String_class_tab(){
var self=this;
return '\t';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function String_class_value_(aUTFCharCode){
var self=this;
return String.fromCharCode(aUTFCharCode);;
return self;}
}),
smalltalk.String.klass);


smalltalk.addClass('Symbol', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function Symbol__lt(aSymbol){
var self=this;
return ((($receiver = smalltalk.send(self, "_asString", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(aSymbol, "_asString", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(aSymbol, "_asString", [])]));
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function Symbol__lt_eq(aSymbol){
var self=this;
return ((($receiver = smalltalk.send(self, "_asString", [])).klass === smalltalk.Number) ? $receiver <=smalltalk.send(aSymbol, "_asString", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(aSymbol, "_asString", [])]));
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function Symbol__eq(aSymbol){
var self=this;
var $early={};
try{((($receiver = smalltalk.send(smalltalk.send(aSymbol, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));
return smalltalk.send(smalltalk.send(self, "_asString", []), "__eq", [smalltalk.send(aSymbol, "_asString", [])]);
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function Symbol__gt(aSymbol){
var self=this;
return ((($receiver = smalltalk.send(self, "_asString", [])).klass === smalltalk.Number) ? $receiver >smalltalk.send(aSymbol, "_asString", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(aSymbol, "_asString", [])]));
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function Symbol__gt_eq(aSymbol){
var self=this;
return ((($receiver = smalltalk.send(self, "_asString", [])).klass === smalltalk.Number) ? $receiver >=smalltalk.send(aSymbol, "_asString", []) : smalltalk.send($receiver, "__gt_eq", [smalltalk.send(aSymbol, "_asString", [])]));
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function Symbol_asJSON(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_asJSON", []);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function Symbol_asJavascript(){
var self=this;
return smalltalk.send(smalltalk.send("smalltalk.symbolFor(\x22", "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", ["\x22)"]);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
fn: function Symbol_asSelector(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_asSelector", []);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function Symbol_asString(){
var self=this;
return self.value;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
fn: function Symbol_asSymbol(){
var self=this;
return self;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function Symbol_at_ifAbsent_(anIndex, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_at_ifAbsent_", [anIndex, aBlock]);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
fn: function Symbol_copyFrom_to_(anIndex, anotherIndex){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [smalltalk.send(smalltalk.send(self, "_asString", []), "_copyFrom_to_", [anIndex, anotherIndex])]);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function Symbol_deepCopy(){
var self=this;
return self;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_isSymbol",
smalltalk.method({
selector: "isSymbol",
fn: function Symbol_isSymbol(){
var self=this;
return true;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function Symbol_printString(){
var self=this;
return smalltalk.send("#", "__comma", [smalltalk.send(self, "_asString", [])]);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function Symbol_shallowCopy(){
var self=this;
return self;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function Symbol_size(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_size", []);
return self;}
}),
smalltalk.Symbol);


smalltalk.addMethod(
"_basicNew",
smalltalk.method({
selector: "basicNew",
fn: function Symbol_class_basicNew(){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function Symbol_class_fromString_(aString){
var self=this;
return smalltalk.send(self, "_lookup_", [aString]);
return self;}
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
"_lookup_",
smalltalk.method({
selector: "lookup:",
fn: function Symbol_class_lookup_(aString){
var self=this;
return smalltalk.symbolFor(aString);;
return self;}
}),
smalltalk.Symbol.klass);


smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function Set__eq(aCollection){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aCollection, "_class", [])]), "_and_", [(function(){return smalltalk.send(self['@elements'], "__eq", [smalltalk.send(aCollection, "_asArray", [])]);})]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function Set_add_(anObject){
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
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
fn: function Set_asArray(){
var self=this;
return smalltalk.send(self['@elements'], "_copy", []);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
fn: function Set_detect_ifNone_(aBlock, anotherBlock){
var self=this;
return smalltalk.send(self['@elements'], "_detect_ifNone_", [aBlock, anotherBlock]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function Set_do_(aBlock){
var self=this;
smalltalk.send(self['@elements'], "_do_", [aBlock]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
fn: function Set_includes_(anObject){
var self=this;
return smalltalk.send(self['@elements'], "_includes_", [anObject]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function Set_initialize(){
var self=this;
smalltalk.send(self, "_initialize", [], Set_initialize.method.methodClass.superclass || nil);
(self['@elements']=[]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function Set_remove_(anObject){
var self=this;
smalltalk.send(self['@elements'], "_remove_", [anObject]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
fn: function Set_select_(aBlock){
var self=this;
var collection=nil;
(collection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_do_", [(function(each){return ((($receiver = smalltalk.send(aBlock, "_value_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(collection, "_add_", [each]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(collection, "_add_", [each]);})]));})]);
return collection;
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function Set_size(){
var self=this;
return smalltalk.send(self['@elements'], "_size", []);
return self;}
}),
smalltalk.Set);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
fn: function RegularExpression_compile_(aString){
var self=this;
return self.compile(aString);
return self;}
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
"_exec_",
smalltalk.method({
selector: "exec:",
fn: function RegularExpression_exec_(aString){
var self=this;
return self.exec(aString) || nil;
return self;}
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
"_test_",
smalltalk.method({
selector: "test:",
fn: function RegularExpression_test_(aString){
var self=this;
return self.test(aString);
return self;}
}),
smalltalk.RegularExpression);


smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function RegularExpression_class_fromString_(aString){
var self=this;
return smalltalk.send(self, "_fromString_flag_", [aString, ""]);
return self;}
}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
"_fromString_flag_",
smalltalk.method({
selector: "fromString:flag:",
fn: function RegularExpression_class_fromString_flag_(aString, anotherString){
var self=this;
return new RegExp(aString, anotherString);
return self;}
}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
smalltalk.addMethod(
"_atEnd",
smalltalk.method({
selector: "atEnd",
fn: function Stream_atEnd(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [smalltalk.send(self, "_size", [])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_atStart",
smalltalk.method({
selector: "atStart",
fn: function Stream_atStart(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [(0)]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function Stream_close(){
var self=this;

return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
fn: function Stream_collection(){
var self=this;
return self['@collection'];
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function Stream_contents(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_streamSize", [])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function Stream_do_(aBlock){
var self=this;
(function(){while(!(function(){return smalltalk.send(self, "_atEnd", []);})()) {(function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_next", [])]);})()}})();
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_flush",
smalltalk.method({
selector: "flush",
fn: function Stream_flush(){
var self=this;

return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_isEmpty",
smalltalk.method({
selector: "isEmpty",
fn: function Stream_isEmpty(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [(0)]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function Stream_next(){
var self=this;
return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);return smalltalk.send(self['@collection'], "_at_", [smalltalk.send(self, "_position", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);return smalltalk.send(self['@collection'], "_at_", [smalltalk.send(self, "_position", [])]);})]));
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function Stream_next_(anInteger){
var self=this;
var tempCollection=nil;
(tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []));
smalltalk.send(anInteger, "_timesRepeat_", [(function(){return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(tempCollection, "_add_", [smalltalk.send(self, "_next", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(tempCollection, "_add_", [smalltalk.send(self, "_next", [])]);})]));})]);
return tempCollection;
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
fn: function Stream_nextPut_(anObject){
var self=this;
smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
smalltalk.send(smalltalk.send(self, "_collection", []), "_at_put_", [smalltalk.send(self, "_position", []), anObject]);
smalltalk.send(self, "_setStreamSize_", [smalltalk.send(smalltalk.send(self, "_streamSize", []), "_max_", [smalltalk.send(self, "_position", [])])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
fn: function Stream_nextPutAll_(aCollection){
var self=this;
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(self, "_nextPut_", [each]);})]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_peek",
smalltalk.method({
selector: "peek",
fn: function Stream_peek(){
var self=this;
return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})]));
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
fn: function Stream_position(){
var self=this;
return (($receiver = self['@position']) == nil || $receiver == undefined) ? (function(){return (self['@position']=(0));})() : $receiver;
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_position_",
smalltalk.method({
selector: "position:",
fn: function Stream_position_(anInteger){
var self=this;
(self['@position']=anInteger);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_reset",
smalltalk.method({
selector: "reset",
fn: function Stream_reset(){
var self=this;
smalltalk.send(self, "_position_", [(0)]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_resetContents",
smalltalk.method({
selector: "resetContents",
fn: function Stream_resetContents(){
var self=this;
smalltalk.send(self, "_reset", []);
smalltalk.send(self, "_setStreamSize_", [(0)]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setCollection_",
smalltalk.method({
selector: "setCollection:",
fn: function Stream_setCollection_(aCollection){
var self=this;
(self['@collection']=aCollection);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setStreamSize_",
smalltalk.method({
selector: "setStreamSize:",
fn: function Stream_setStreamSize_(anInteger){
var self=this;
(self['@streamSize']=anInteger);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setToEnd",
smalltalk.method({
selector: "setToEnd",
fn: function Stream_setToEnd(){
var self=this;
smalltalk.send(self, "_position_", [smalltalk.send(self, "_size", [])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function Stream_size(){
var self=this;
return smalltalk.send(self, "_streamSize", []);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_skip_",
smalltalk.method({
selector: "skip:",
fn: function Stream_skip_(anInteger){
var self=this;
smalltalk.send(self, "_position_", [smalltalk.send(((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +anInteger : smalltalk.send($receiver, "__plus", [anInteger])), "_min_max_", [smalltalk.send(self, "_size", []), (0)])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
"_streamSize",
smalltalk.method({
selector: "streamSize",
fn: function Stream_streamSize(){
var self=this;
return self['@streamSize'];
return self;}
}),
smalltalk.Stream);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function Stream_class_on_(aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_setCollection_", [aCollection]);smalltalk.send($rec, "_setStreamSize_", [smalltalk.send(aCollection, "_size", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel-Collections');
smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function StringStream_cr(){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_cr", [])]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
fn: function StringStream_crlf(){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_crlf", [])]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function StringStream_lf(){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_lf", [])]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function StringStream_next_(anInteger){
var self=this;
var tempCollection=nil;
(tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []));
smalltalk.send(anInteger, "_timesRepeat_", [(function(){return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]));})]));})]);
return tempCollection;
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
fn: function StringStream_nextPut_(aString){
var self=this;
smalltalk.send(self, "_nextPutAll_", [aString]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
fn: function StringStream_nextPutAll_(aString){
var self=this;
smalltalk.send(self, "_setCollection_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_position", [])]), "__comma", [aString]), "__comma", [smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [((($receiver = ((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])])), smalltalk.send(smalltalk.send(self, "_collection", []), "_size", [])])])]);
smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])]))]);
smalltalk.send(self, "_setStreamSize_", [smalltalk.send(smalltalk.send(self, "_streamSize", []), "_max_", [smalltalk.send(self, "_position", [])])]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
fn: function StringStream_space(){
var self=this;
smalltalk.send(self, "_nextPut_", [" "]);
return self;}
}),
smalltalk.StringStream);



