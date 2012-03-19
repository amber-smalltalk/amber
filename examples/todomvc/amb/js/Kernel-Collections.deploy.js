smalltalk.addPackage('Kernel-Collections', {});
smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_readStream',
smalltalk.method({
selector: 'readStream',
fn: function (){
var self=this;
return smalltalk.send(self, "_stream", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_writeStream',
smalltalk.method({
selector: 'writeStream',
fn: function (){
var self=this;
return smalltalk.send(self, "_stream", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_stream',
smalltalk.method({
selector: 'stream',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_streamClass", []), "_on_", [self]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_streamClass',
smalltalk.method({
selector: 'streamClass',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_streamClass", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_addAll_',
smalltalk.method({
selector: 'addAll:',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(self, "_add_", [each]);})]);
return aCollection;
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_copyWith_',
smalltalk.method({
selector: 'copyWith:',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_copyWithAll_',
smalltalk.method({
selector: 'copyWithAll:',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_asArray',
smalltalk.method({
selector: 'asArray',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Array || Array), "_withAll_", [self]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i]);};
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_collect_',
smalltalk.method({
selector: 'collect:',
fn: function (aBlock){
var self=this;
var newCollection=nil;
(newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [smalltalk.send(aBlock, "_value_", [each])]);})]);
return newCollection;
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_detect_',
smalltalk.method({
selector: 'detect:',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_detect_ifNone_", [aBlock, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_detect_ifNone_',
smalltalk.method({
selector: 'detect:ifNone:',
fn: function (aBlock, anotherBlock){
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
'_do_separatedBy_',
smalltalk.method({
selector: 'do:separatedBy:',
fn: function (aBlock, anotherBlock){
var self=this;
var first=nil;
(first=true);
smalltalk.send(self, "_do_", [(function(each){((($receiver = first).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (first=false);})() : (function(){return smalltalk.send(anotherBlock, "_value", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (first=false);}), (function(){return smalltalk.send(anotherBlock, "_value", []);})]));return smalltalk.send(aBlock, "_value_", [each]);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_inject_into_',
smalltalk.method({
selector: 'inject:into:',
fn: function (anObject, aBlock){
var self=this;
var result=nil;
(result=anObject);
smalltalk.send(self, "_do_", [(function(each){return (result=smalltalk.send(aBlock, "_value_value_", [result, each]));})]);
return result;
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_reject_',
smalltalk.method({
selector: 'reject:',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_select_", [(function(each){return smalltalk.send(smalltalk.send(aBlock, "_value_", [each]), "__eq", [false]);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_select_',
smalltalk.method({
selector: 'select:',
fn: function (aBlock){
var self=this;
var stream=nil;
(stream=smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_new", []), "_writeStream", []));
smalltalk.send(self, "_do_", [(function(each){return ((($receiver = smalltalk.send(aBlock, "_value_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(stream, "_nextPut_", [each]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(stream, "_nextPut_", [each]);})]));})]);
return smalltalk.send(stream, "_contents", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_errorNotFound',
smalltalk.method({
selector: 'errorNotFound',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["Object is not in the collection"]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_includes_',
smalltalk.method({
selector: 'includes:',
fn: function (anObject){
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
'_notEmpty',
smalltalk.method({
selector: 'notEmpty',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_isEmpty", []), "_not", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_isEmpty',
smalltalk.method({
selector: 'isEmpty',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [(0)]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
fn: function (anObject){
var self=this;
return smalltalk.send(self, "_remove_ifAbsent_", [anObject, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_asSet',
smalltalk.method({
selector: 'asSet',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Set || Set), "_withAll_", [self]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_ifNotEmpty_',
smalltalk.method({
selector: 'ifNotEmpty:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_notEmpty", []), "_ifTrue_", [aBlock]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_ifEmpty_',
smalltalk.method({
selector: 'ifEmpty:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_isEmpty", []), "_ifTrue_", [aBlock]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_copyWithoutAll_',
smalltalk.method({
selector: 'copyWithoutAll:',
fn: function (aCollection){
var self=this;
return smalltalk.send(self, "_reject_", [(function(each){return smalltalk.send(aCollection, "_includes_", [each]);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_remove_ifAbsent_',
smalltalk.method({
selector: 'remove:ifAbsent:',
fn: function (anObject, aBlock){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_asJSONString',
smalltalk.method({
selector: 'asJSONString',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [smalltalk.send(self, "_collect_", [(function(each){return smalltalk.send(each, "_asJSONString", []);})])]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
'_asOrderedCollection',
smalltalk.method({
selector: 'asOrderedCollection',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_withAll_", [self]);
return self;}
}),
smalltalk.Collection);


smalltalk.addMethod(
'_streamClass',
smalltalk.method({
selector: 'streamClass',
fn: function (){
var self=this;
return (smalltalk.Stream || Stream);
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
'_with_with_',
smalltalk.method({
selector: 'with:with:',
fn: function (anObject, anotherObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);smalltalk.send($rec, "_add_", [anotherObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
'_with_with_with_',
smalltalk.method({
selector: 'with:with:with:',
fn: function (firstObject, secondObject, thirdObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [firstObject]);smalltalk.send($rec, "_add_", [secondObject]);smalltalk.send($rec, "_add_", [thirdObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
'_withAll_',
smalltalk.method({
selector: 'withAll:',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
'_new_',
smalltalk.method({
selector: 'new:',
fn: function (anInteger){
var self=this;
return smalltalk.send(self, "_new", []);
return self;}
}),
smalltalk.Collection.klass);


smalltalk.addClass('SequenceableCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
'_at_',
smalltalk.method({
selector: 'at:',
fn: function (anIndex){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [anIndex, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
fn: function (anIndex, aBlock){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
fn: function (anIndex, anObject){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
fn: function (anIndex, anotherIndex){
var self=this;
var range=nil;
var newCollection=nil;
(range=smalltalk.send(anIndex, "_to_", [anotherIndex]));
(newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new_", [smalltalk.send(range, "_size", [])]));
smalltalk.send(range, "_do_", [(function(each){return smalltalk.send(newCollection, "_at_put_", [each, smalltalk.send(self, "_at_", [each])]);})]);
return newCollection;
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_first',
smalltalk.method({
selector: 'first',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(1)]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_fourth',
smalltalk.method({
selector: 'fourth',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(4)]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_last',
smalltalk.method({
selector: 'last',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [smalltalk.send(self, "_size", [])]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_second',
smalltalk.method({
selector: 'second',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(2)]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_third',
smalltalk.method({
selector: 'third',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(3)]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_removeLast',
smalltalk.method({
selector: 'removeLast',
fn: function (){
var self=this;
smalltalk.send(self, "_remove_", [smalltalk.send(self, "_last", [])]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_addLast_',
smalltalk.method({
selector: 'addLast:',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_add_", [anObject]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_withIndexDo_',
smalltalk.method({
selector: 'withIndexDo:',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i], i+1);};
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_allButFirst',
smalltalk.method({
selector: 'allButFirst',
fn: function (){
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(2), smalltalk.send(self, "_size", [])]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_allButLast',
smalltalk.method({
selector: 'allButLast',
fn: function (){
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(1), ((($receiver = smalltalk.send(self, "_size", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_indexOf_',
smalltalk.method({
selector: 'indexOf:',
fn: function (anObject){
var self=this;
return smalltalk.send(self, "_indexOf_ifAbsent_", [anObject, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_indexOf_ifAbsent_',
smalltalk.method({
selector: 'indexOf:ifAbsent:',
fn: function (anObject, aBlock){
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
'_indexOf_startingAt_ifAbsent_',
smalltalk.method({
selector: 'indexOf:startingAt:ifAbsent:',
fn: function (anObject, start, aBlock){
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
'_indexOf_startingAt_',
smalltalk.method({
selector: 'indexOf:startingAt:',
fn: function (anObject, start){
var self=this;
return smalltalk.send(self, "_indexOf_startingAt_ifAbsent_", [anObject, start, (function(){return (0);})]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_reversed',
smalltalk.method({
selector: 'reversed',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_atRandom',
smalltalk.method({
selector: 'atRandom',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [smalltalk.send(smalltalk.send(self, "_size", []), "_atRandom", [])]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (aCollection){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aCollection, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [smalltalk.send(aCollection, "_size", [])]);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
smalltalk.send(self, "_withIndexDo_", [(function(each, i){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_at_", [i]), "__eq", [each])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
fn: function (){
var self=this;
var newCollection=nil;
(newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new_", [smalltalk.send(self, "_size", [])]));
smalltalk.send(self, "_withIndexDo_", [(function(each, index){return smalltalk.send(newCollection, "_at_put_", [index, each]);})]);
return newCollection;
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
fn: function (){
var self=this;
var newCollection=nil;
(newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new_", [smalltalk.send(self, "_size", [])]));
smalltalk.send(self, "_withIndexDo_", [(function(each, index){return smalltalk.send(newCollection, "_at_put_", [index, smalltalk.send(each, "_deepCopy", [])]);})]);
return newCollection;
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
var str=nil;
(str=smalltalk.send("", "_writeStream", []));
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.Collection), "__comma", [unescape("%20%28")])]);
smalltalk.send(self, "_do_separatedBy_", [(function(each){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(each, "_printString", [])]);}), (function(){return smalltalk.send(str, "_nextPutAll_", [" "]);})]);
smalltalk.send(str, "_nextPutAll_", [unescape("%29")]);
return smalltalk.send(str, "_contents", []);
return self;}
}),
smalltalk.SequenceableCollection);



smalltalk.addClass('CharacterArray', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
fn: function (anIndex, anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "__comma", [smalltalk.send(aString, "_asString", [])]);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
fn: function (){
var self=this;
return smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
'_asNumber',
smalltalk.method({
selector: 'asNumber',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_asNumber", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
'_errorReadOnly',
smalltalk.method({
selector: 'errorReadOnly',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", [unescape("Object%20is%20read-only")]);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_printString", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
'_asUppercase',
smalltalk.method({
selector: 'asUppercase',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [smalltalk.send(smalltalk.send(self, "_asString", []), "_asUppercase", [])]);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
'_asSymbol',
smalltalk.method({
selector: 'asSymbol',
fn: function (){
var self=this;
return smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
'_asLowercase',
smalltalk.method({
selector: 'asLowercase',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [smalltalk.send(smalltalk.send(self, "_asString", []), "_asLowercase", [])]);
return self;}
}),
smalltalk.CharacterArray);


smalltalk.addMethod(
'_fromString_',
smalltalk.method({
selector: 'fromString:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.CharacterArray.klass);


smalltalk.addClass('String', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (aString){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aString, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
return String(self) === String(aString);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}}
}),
smalltalk.String);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
fn: function (){
var self=this;
return self.length;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
fn: function (anIndex, aBlock){
var self=this;
return self[anIndex - 1] || aBlock();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_escaped',
smalltalk.method({
selector: 'escaped',
fn: function (){
var self=this;
return escape(self);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_unescaped',
smalltalk.method({
selector: 'unescaped',
fn: function (){
var self=this;
return unescape(self);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
fn: function (aString){
var self=this;
return self + aString;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
fn: function (anIndex, anotherIndex){
var self=this;
return self.substring(anIndex - 1, anotherIndex);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [self]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
fn: function (){
var self=this;
return smalltalk.send(self, "_shallowCopy", []);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_asSelector',
smalltalk.method({
selector: 'asSelector',
fn: function (){
var self=this;
var selector=nil;
(selector=smalltalk.send("_", "__comma", [self]));
(selector=smalltalk.send(selector, "_replace_with_", [":", "_"]));
(selector=smalltalk.send(selector, "_replace_with_", [unescape("%5B+%5D"), "_plus"]));
(selector=smalltalk.send(selector, "_replace_with_", [unescape("-"), "_minus"]));
(selector=smalltalk.send(selector, "_replace_with_", [unescape("%5B*%5D"), "_star"]));
(selector=smalltalk.send(selector, "_replace_with_", [unescape("%5B/%5D"), "_slash"]));
(selector=smalltalk.send(selector, "_replace_with_", [unescape("%3E"), "_gt"]));
(selector=smalltalk.send(selector, "_replace_with_", [unescape("%3C"), "_lt"]));
(selector=smalltalk.send(selector, "_replace_with_", [unescape("%3D"), "_eq"]));
(selector=smalltalk.send(selector, "_replace_with_", [unescape("%2C"), "_comma"]));
(selector=smalltalk.send(selector, "_replace_with_", [unescape("%5B@%5D"), "_at"]));
return selector;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_asJavascript',
smalltalk.method({
selector: 'asJavascript',
fn: function (){
var self=this;

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "unescape(\"" + escape(self) + "\")";
		else
			return "\"" + self + "\"";
	;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_replace_with_',
smalltalk.method({
selector: 'replace:with:',
fn: function (aString, anotherString){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [aString, "g"]), anotherString]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_replaceRegexp_with_',
smalltalk.method({
selector: 'replaceRegexp:with:',
fn: function (aRegexp, aString){
var self=this;
return self.replace(aRegexp, aString);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_tokenize_',
smalltalk.method({
selector: 'tokenize:',
fn: function (aString){
var self=this;
return self.split(aString);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_match_',
smalltalk.method({
selector: 'match:',
fn: function (aRegexp){
var self=this;
return self.search(aRegexp) != -1;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_asNumber',
smalltalk.method({
selector: 'asNumber',
fn: function (){
var self=this;
return Number(self);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [self]), "__comma", [unescape("%27")]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_printNl',
smalltalk.method({
selector: 'printNl',
fn: function (){
var self=this;
console.log(self);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_isString',
smalltalk.method({
selector: 'isString',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'__gt',
smalltalk.method({
selector: '>',
fn: function (aString){
var self=this;
return String(self) > aString._asString();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'__lt',
smalltalk.method({
selector: '<',
fn: function (aString){
var self=this;
return String(self) < aString._asString();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'__gt_eq',
smalltalk.method({
selector: '>=',
fn: function (aString){
var self=this;
return String(self) >= aString._asString();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'__lt_eq',
smalltalk.method({
selector: '<=',
fn: function (aString){
var self=this;
return String(self) <= aString._asString();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_trimLeft_',
smalltalk.method({
selector: 'trimLeft:',
fn: function (separators){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [smalltalk.send(smalltalk.send(unescape("%5E%5B"), "__comma", [separators]), "__comma", [unescape("%5D+")]), "g"]), ""]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_trimRight_',
smalltalk.method({
selector: 'trimRight:',
fn: function (separators){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [smalltalk.send(smalltalk.send(unescape("%5B"), "__comma", [separators]), "__comma", [unescape("%5D+%24")]), "g"]), ""]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_trimLeft',
smalltalk.method({
selector: 'trimLeft',
fn: function (){
var self=this;
return smalltalk.send(self, "_trimLeft_", [unescape("%5Cs")]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_trimRight',
smalltalk.method({
selector: 'trimRight',
fn: function (){
var self=this;
return smalltalk.send(self, "_trimRight_", [unescape("%5Cs")]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_trimBoth',
smalltalk.method({
selector: 'trimBoth',
fn: function (){
var self=this;
return smalltalk.send(self, "_trimBoth_", [unescape("%5Cs")]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_trimBoth_',
smalltalk.method({
selector: 'trimBoth:',
fn: function (separators){
var self=this;
return smalltalk.send(smalltalk.send(self, "_trimLeft_", [separators]), "_trimRight_", [separators]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_asLowercase',
smalltalk.method({
selector: 'asLowercase',
fn: function (){
var self=this;
return self.toLowerCase();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_asUppercase',
smalltalk.method({
selector: 'asUppercase',
fn: function (){
var self=this;
return self.toUpperCase();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_join_',
smalltalk.method({
selector: 'join:',
fn: function (aCollection){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){return smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(each, "_asString", [])]);}), (function(){return smalltalk.send(stream, "_nextPutAll_", [self]);})]);})]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_includesSubString_',
smalltalk.method({
selector: 'includesSubString:',
fn: function (subString){
var self=this;
 return self.indexOf(subString) != -1 ;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_asciiValue',
smalltalk.method({
selector: 'asciiValue',
fn: function (){
var self=this;
return self.charCodeAt(0);;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_lineIndicesDo_',
smalltalk.method({
selector: 'lineIndicesDo:',
fn: function (aBlock){
var self=this;
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
(function(){while((function(){return ((($receiver = start).klass === smalltalk.Number) ? $receiver <=sz : smalltalk.send($receiver, "__lt_eq", [sz]));})()) {(function(){((($receiver = smalltalk.send(smalltalk.send(nextLF, "__eq", [(0)]), "_and_", [(function(){return smalltalk.send(nextCR, "__eq", [(0)]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, sz, sz]);return (function(){throw({name: 'stReturn', selector: '_lineIndicesDo_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, sz, sz]);return (function(){throw({name: 'stReturn', selector: '_lineIndicesDo_', fn: function(){return self}})})();})]));return ((($receiver = smalltalk.send(smalltalk.send(nextCR, "__eq", [(0)]), "_or_", [(function(){return smalltalk.send((0) < nextLF, "_and_", [(function(){return ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver <nextCR : smalltalk.send($receiver, "__lt", [nextCR]));})]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);(start=(1) + nextLF);return (nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]));})() : (function(){return ((($receiver = smalltalk.send((1) + nextCR, "__eq", [nextLF])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);(start=(1) + nextLF);(nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));return (nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]));})() : (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);(start=(1) + nextCR);return (nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);(start=(1) + nextLF);(nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));return (nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]));}), (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);(start=(1) + nextCR);return (nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);(start=(1) + nextLF);return (nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]));}), (function(){return ((($receiver = smalltalk.send((1) + nextCR, "__eq", [nextLF])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);(start=(1) + nextLF);(nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));return (nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]));})() : (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);(start=(1) + nextCR);return (nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);(start=(1) + nextLF);(nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));return (nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]));}), (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);(start=(1) + nextCR);return (nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]));})]));})]));})()}})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_lineIndicesDo_'){return e.fn()} throw(e)}}
}),
smalltalk.String);

smalltalk.addMethod(
'_linesDo_',
smalltalk.method({
selector: 'linesDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_lineIndicesDo_", [(function(start, endWithoutDelimiters, end){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])]);})]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_lines',
smalltalk.method({
selector: 'lines',
fn: function (){
var self=this;
var lines=nil;
(lines=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(self, "_linesDo_", [(function(aLine){return smalltalk.send(lines, "_add_", [aLine]);})]);
return lines;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_lineNumber_',
smalltalk.method({
selector: 'lineNumber:',
fn: function (anIndex){
var self=this;
try{var lineCount=nil;
(lineCount=(0));
smalltalk.send(self, "_lineIndicesDo_", [(function(start, endWithoutDelimiters, end){return ((($receiver = smalltalk.send((lineCount=((($receiver = lineCount).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))), "__eq", [anIndex])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_lineNumber_', fn: function(){return smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_lineNumber_', fn: function(){return smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_lineNumber_', fn: function(){return nil}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_lineNumber_'){return e.fn()} throw(e)}}
}),
smalltalk.String);

smalltalk.addMethod(
'_reversed',
smalltalk.method({
selector: 'reversed',
fn: function (){
var self=this;
return self.split("").reverse().join("");
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_asJavaScriptSelector',
smalltalk.method({
selector: 'asJavaScriptSelector',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_asSelector", []), "_replace_with_", [unescape("%5E_"), ""]), "_replace_with_", [unescape("_.*"), ""]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_asJSONString',
smalltalk.method({
selector: 'asJSONString',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_asSymbol',
smalltalk.method({
selector: 'asSymbol',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Symbol || Symbol), "_lookup_", [self]);
return self;}
}),
smalltalk.String);


smalltalk.addMethod(
'_streamClass',
smalltalk.method({
selector: 'streamClass',
fn: function (){
var self=this;
return (smalltalk.StringStream || StringStream);
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_fromString_',
smalltalk.method({
selector: 'fromString:',
fn: function (aString){
var self=this;
return new self.fn(aString);
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_cr',
smalltalk.method({
selector: 'cr',
fn: function (){
var self=this;
return '\r';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_lf',
smalltalk.method({
selector: 'lf',
fn: function (){
var self=this;
return '\n';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_space',
smalltalk.method({
selector: 'space',
fn: function (){
var self=this;
return ' ';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_tab',
smalltalk.method({
selector: 'tab',
fn: function (){
var self=this;
return '\t';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_crlf',
smalltalk.method({
selector: 'crlf',
fn: function (){
var self=this;
return '\r\n';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_streamContents_',
smalltalk.method({
selector: 'streamContents:',
fn: function (blockWithArg){
var self=this;
var stream=nil;
(stream=smalltalk.send(smalltalk.send(self, "_streamClass", []), "_on_", [smalltalk.send((smalltalk.String || String), "_new", [])]));
smalltalk.send(blockWithArg, "_value_", [stream]);
return smalltalk.send(stream, "_contents", []);
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_value_',
smalltalk.method({
selector: 'value:',
fn: function (aUTFCharCode){
var self=this;
return String.fromCharCode(aUTFCharCode);;
return self;}
}),
smalltalk.String.klass);


smalltalk.addClass('Symbol', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
fn: function (anIndex, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_at_ifAbsent_", [anIndex, aBlock]);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
fn: function (){
var self=this;
return self.value;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_asString", [])]);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_size", []);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'_asSymbol',
smalltalk.method({
selector: 'asSymbol',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
fn: function (anIndex, anotherIndex){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [smalltalk.send(smalltalk.send(self, "_asString", []), "_copyFrom_to_", [anIndex, anotherIndex])]);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'__lt',
smalltalk.method({
selector: '<',
fn: function (aSymbol){
var self=this;
return ((($receiver = smalltalk.send(self, "_asString", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(aSymbol, "_asString", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(aSymbol, "_asString", [])]));
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'__lt_eq',
smalltalk.method({
selector: '<=',
fn: function (aSymbol){
var self=this;
return ((($receiver = smalltalk.send(self, "_asString", [])).klass === smalltalk.Number) ? $receiver <=smalltalk.send(aSymbol, "_asString", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(aSymbol, "_asString", [])]));
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'__gt_eq',
smalltalk.method({
selector: '>=',
fn: function (aSymbol){
var self=this;
return ((($receiver = smalltalk.send(self, "_asString", [])).klass === smalltalk.Number) ? $receiver >=smalltalk.send(aSymbol, "_asString", []) : smalltalk.send($receiver, "__gt_eq", [smalltalk.send(aSymbol, "_asString", [])]));
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (aSymbol){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aSymbol, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
(function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return smalltalk.send(smalltalk.send(self, "_asString", []), "__eq", [smalltalk.send(aSymbol, "_asString", [])])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'_isSymbol',
smalltalk.method({
selector: 'isSymbol',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'_asJavascript',
smalltalk.method({
selector: 'asJavascript',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("smalltalk.symbolFor%28%22"), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [unescape("%22%29")]);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'__gt',
smalltalk.method({
selector: '>',
fn: function (aSymbol){
var self=this;
return ((($receiver = smalltalk.send(self, "_asString", [])).klass === smalltalk.Number) ? $receiver >smalltalk.send(aSymbol, "_asString", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(aSymbol, "_asString", [])]));
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
'_asSelector',
smalltalk.method({
selector: 'asSelector',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_asSelector", []);
return self;}
}),
smalltalk.Symbol);


smalltalk.addMethod(
'_lookup_',
smalltalk.method({
selector: 'lookup:',
fn: function (aString){
var self=this;
return smalltalk.symbolFor(aString);;
return self;}
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
'_basicNew',
smalltalk.method({
selector: 'basicNew',
fn: function (){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
'_fromString_',
smalltalk.method({
selector: 'fromString:',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_lookup_", [aString]);
return self;}
}),
smalltalk.Symbol.klass);


smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
fn: function (){
var self=this;
return self.length;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
fn: function (anIndex, anObject){
var self=this;
return self[anIndex - 1] = anObject;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
fn: function (anIndex, aBlock){
var self=this;

	    var value = self[anIndex - 1];
	    if(value === undefined) {
		return aBlock();
	    } else {
		return value;
	    }
	;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
fn: function (anObject){
var self=this;
self.push(anObject); return anObject;;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
'_join_',
smalltalk.method({
selector: 'join:',
fn: function (aString){
var self=this;
return self.join(aString);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
'_asJavascript',
smalltalk.method({
selector: 'asJavascript',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%5B"), "__comma", [smalltalk.send(smalltalk.send(self, "_collect_", [(function(each){return smalltalk.send(each, "_asJavascript", []);})]), "_join_", [unescape("%2C%20")])]), "__comma", [unescape("%5D")]);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
'_sort',
smalltalk.method({
selector: 'sort',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicPerform_", ["sort"]);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
'_sort_',
smalltalk.method({
selector: 'sort:',
fn: function (aBlock){
var self=this;

		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
fn: function (anObject){
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
'_sorted',
smalltalk.method({
selector: 'sorted',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort", []);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
'_sorted_',
smalltalk.method({
selector: 'sorted:',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort_", [aBlock]);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
'_removeFrom_to_',
smalltalk.method({
selector: 'removeFrom:to:',
fn: function (aNumber, anotherNumber){
var self=this;
self.splice(aNumber - 1,anotherNumber - 1);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
'_reversed',
smalltalk.method({
selector: 'reversed',
fn: function (){
var self=this;
return self._copy().reverse();
return self;}
}),
smalltalk.Array);


smalltalk.addMethod(
'_new_',
smalltalk.method({
selector: 'new:',
fn: function (anInteger){
var self=this;
return new Array(anInteger);
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [(1), anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new_", [(1)]));
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
'_with_with_',
smalltalk.method({
selector: 'with:with:',
fn: function (anObject, anObject2){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [(1), anObject]);smalltalk.send($rec, "_at_put_", [(2), anObject2]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new_", [(2)]));
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
'_with_with_with_',
smalltalk.method({
selector: 'with:with:with:',
fn: function (anObject, anObject2, anObject3){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [(1), anObject]);smalltalk.send($rec, "_at_put_", [(2), anObject2]);smalltalk.send($rec, "_at_put_", [(3), anObject3]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new_", [(3)]));
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
'_withAll_',
smalltalk.method({
selector: 'withAll:',
fn: function (aCollection){
var self=this;
var instance=nil;
(instance=smalltalk.send(self, "_new_", [smalltalk.send(aCollection, "_size", [])]));
smalltalk.send(aCollection, "_withIndexDo_", [(function(index, each){return smalltalk.send(instance, "_at_put_", [index, each]);})]);
return instance;
return self;}
}),
smalltalk.Array.klass);


smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
'_compile_',
smalltalk.method({
selector: 'compile:',
fn: function (aString){
var self=this;
return self.compile(aString);
return self;}
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
'_exec_',
smalltalk.method({
selector: 'exec:',
fn: function (aString){
var self=this;
return self.exec(aString) || nil;
return self;}
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
'_test_',
smalltalk.method({
selector: 'test:',
fn: function (aString){
var self=this;
return self.test(aString);
return self;}
}),
smalltalk.RegularExpression);


smalltalk.addMethod(
'_fromString_flag_',
smalltalk.method({
selector: 'fromString:flag:',
fn: function (aString, anotherString){
var self=this;
return new RegExp(aString, anotherString);
return self;}
}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
'_fromString_',
smalltalk.method({
selector: 'fromString:',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_fromString_flag_", [aString, ""]);
return self;}
}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel-Collections');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (anAssociation){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(anAssociation, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_key", []), "__eq", [smalltalk.send(anAssociation, "_key", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_value", []), "__eq", [smalltalk.send(anAssociation, "_value", [])]);})]);})]);
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
'_key_',
smalltalk.method({
selector: 'key:',
fn: function (aKey){
var self=this;
(self['@key']=aKey);
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
'_key',
smalltalk.method({
selector: 'key',
fn: function (){
var self=this;
return self['@key'];
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
'_value_',
smalltalk.method({
selector: 'value:',
fn: function (aValue){
var self=this;
(self['@value']=aValue);
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
'_value',
smalltalk.method({
selector: 'value',
fn: function (){
var self=this;
return self['@value'];
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
'_storeOn_',
smalltalk.method({
selector: 'storeOn:',
fn: function (aStream){
var self=this;
smalltalk.send(self['@key'], "_storeOn_", [aStream]);
smalltalk.send(aStream, "_nextPutAll_", [unescape("-%3E")]);
smalltalk.send(self['@value'], "_storeOn_", [aStream]);
return self;}
}),
smalltalk.Association);


smalltalk.addMethod(
'_key_value_',
smalltalk.method({
selector: 'key:value:',
fn: function (aKey, aValue){
var self=this;
return (function($rec){smalltalk.send($rec, "_key_", [aKey]);smalltalk.send($rec, "_value_", [aValue]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Association.klass);


smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
smalltalk.addMethod(
'_collection',
smalltalk.method({
selector: 'collection',
fn: function (){
var self=this;
return self['@collection'];
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_setCollection_',
smalltalk.method({
selector: 'setCollection:',
fn: function (aCollection){
var self=this;
(self['@collection']=aCollection);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_position',
smalltalk.method({
selector: 'position',
fn: function (){
var self=this;
return (($receiver = self['@position']) == nil || $receiver == undefined) ? (function(){return (self['@position']=(0));})() : $receiver;
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_position_',
smalltalk.method({
selector: 'position:',
fn: function (anInteger){
var self=this;
(self['@position']=anInteger);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_streamSize',
smalltalk.method({
selector: 'streamSize',
fn: function (){
var self=this;
return self['@streamSize'];
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_setStreamSize_',
smalltalk.method({
selector: 'setStreamSize:',
fn: function (anInteger){
var self=this;
(self['@streamSize']=anInteger);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_contents',
smalltalk.method({
selector: 'contents',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_streamSize", [])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
fn: function (){
var self=this;
return smalltalk.send(self, "_streamSize", []);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_reset',
smalltalk.method({
selector: 'reset',
fn: function (){
var self=this;
smalltalk.send(self, "_position_", [(0)]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_close',
smalltalk.method({
selector: 'close',
fn: function (){
var self=this;

return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_flush',
smalltalk.method({
selector: 'flush',
fn: function (){
var self=this;

return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_resetContents',
smalltalk.method({
selector: 'resetContents',
fn: function (){
var self=this;
smalltalk.send(self, "_reset", []);
smalltalk.send(self, "_setStreamSize_", [(0)]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
fn: function (aBlock){
var self=this;
(function(){while(!(function(){return smalltalk.send(self, "_atEnd", []);})()) {(function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_next", [])]);})()}})();
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_setToEnd',
smalltalk.method({
selector: 'setToEnd',
fn: function (){
var self=this;
smalltalk.send(self, "_position_", [smalltalk.send(self, "_size", [])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_skip_',
smalltalk.method({
selector: 'skip:',
fn: function (anInteger){
var self=this;
smalltalk.send(self, "_position_", [smalltalk.send(((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +anInteger : smalltalk.send($receiver, "__plus", [anInteger])), "_min_max_", [smalltalk.send(self, "_size", []), (0)])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_next',
smalltalk.method({
selector: 'next',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);return smalltalk.send(self['@collection'], "_at_", [smalltalk.send(self, "_position", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);return smalltalk.send(self['@collection'], "_at_", [smalltalk.send(self, "_position", [])]);})]));
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_next_',
smalltalk.method({
selector: 'next:',
fn: function (anInteger){
var self=this;
var tempCollection=nil;
(tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []));
smalltalk.send(anInteger, "_timesRepeat_", [(function(){return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(tempCollection, "_add_", [smalltalk.send(self, "_next", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(tempCollection, "_add_", [smalltalk.send(self, "_next", [])]);})]));})]);
return tempCollection;
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_nextPut_',
smalltalk.method({
selector: 'nextPut:',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
smalltalk.send(smalltalk.send(self, "_collection", []), "_at_put_", [smalltalk.send(self, "_position", []), anObject]);
smalltalk.send(self, "_setStreamSize_", [smalltalk.send(smalltalk.send(self, "_streamSize", []), "_max_", [smalltalk.send(self, "_position", [])])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_nextPutAll_',
smalltalk.method({
selector: 'nextPutAll:',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(self, "_nextPut_", [each]);})]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_peek',
smalltalk.method({
selector: 'peek',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})]));
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_atEnd',
smalltalk.method({
selector: 'atEnd',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [smalltalk.send(self, "_size", [])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_atStart',
smalltalk.method({
selector: 'atStart',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [(0)]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_isEmpty',
smalltalk.method({
selector: 'isEmpty',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [(0)]);
return self;}
}),
smalltalk.Stream);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_setCollection_", [aCollection]);smalltalk.send($rec, "_setStreamSize_", [smalltalk.send(aCollection, "_size", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel-Collections');
smalltalk.addMethod(
'_next_',
smalltalk.method({
selector: 'next:',
fn: function (anInteger){
var self=this;
var tempCollection=nil;
(tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []));
smalltalk.send(anInteger, "_timesRepeat_", [(function(){return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]));})]));})]);
return tempCollection;
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
'_nextPut_',
smalltalk.method({
selector: 'nextPut:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_nextPutAll_", [aString]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
'_nextPutAll_',
smalltalk.method({
selector: 'nextPutAll:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_setCollection_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_position", [])]), "__comma", [aString]), "__comma", [smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [((($receiver = ((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])])), smalltalk.send(smalltalk.send(self, "_collection", []), "_size", [])])])]);
smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])]))]);
smalltalk.send(self, "_setStreamSize_", [smalltalk.send(smalltalk.send(self, "_streamSize", []), "_max_", [smalltalk.send(self, "_position", [])])]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
'_cr',
smalltalk.method({
selector: 'cr',
fn: function (){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_cr", [])]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
'_crlf',
smalltalk.method({
selector: 'crlf',
fn: function (){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_crlf", [])]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
'_lf',
smalltalk.method({
selector: 'lf',
fn: function (){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_lf", [])]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
'_space',
smalltalk.method({
selector: 'space',
fn: function (){
var self=this;
smalltalk.send(self, "_nextPut_", [" "]);
return self;}
}),
smalltalk.StringStream);



smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel-Collections');
smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
fn: function (anObject){
var self=this;

		var found;
		for(var i in self['@elements']) {
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
'_remove_',
smalltalk.method({
selector: 'remove:',
fn: function (anObject){
var self=this;
smalltalk.send(self['@elements'], "_remove_", [anObject]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Collection);
(self['@elements']=[]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
fn: function (){
var self=this;
return smalltalk.send(self['@elements'], "_size", []);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
'_asArray',
smalltalk.method({
selector: 'asArray',
fn: function (){
var self=this;
return smalltalk.send(self['@elements'], "_copy", []);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
'_detect_ifNone_',
smalltalk.method({
selector: 'detect:ifNone:',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(self['@elements'], "_detect_ifNone_", [aBlock, anotherBlock]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@elements'], "_do_", [aBlock]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
'_includes_',
smalltalk.method({
selector: 'includes:',
fn: function (anObject){
var self=this;
return smalltalk.send(self['@elements'], "_includes_", [anObject]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (aCollection){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aCollection, "_class", [])]), "_and_", [(function(){return smalltalk.send(self['@elements'], "__eq", [smalltalk.send(aCollection, "_asArray", [])]);})]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
'_select_',
smalltalk.method({
selector: 'select:',
fn: function (aBlock){
var self=this;
var collection=nil;
(collection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_do_", [(function(each){return ((($receiver = smalltalk.send(aBlock, "_value_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(collection, "_add_", [each]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(collection, "_add_", [each]);})]));})]);
return collection;
return self;}
}),
smalltalk.Set);



smalltalk.addClass('HashedCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_keys", []), "_size", []);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_associations',
smalltalk.method({
selector: 'associations',
fn: function (){
var self=this;
var associations=nil;
(associations=[]);
smalltalk.send(smalltalk.send(self, "_keys", []), "_do_", [(function(each){return smalltalk.send(associations, "_add_", [smalltalk.send((smalltalk.Association || Association), "_key_value_", [each, smalltalk.send(self, "_at_", [each])])]);})]);
return associations;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_keys',
smalltalk.method({
selector: 'keys',
fn: function (){
var self=this;

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
'_values',
smalltalk.method({
selector: 'values',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_keys", []), "_collect_", [(function(each){return smalltalk.send(self, "_at_", [each]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
fn: function (aKey, aValue){
var self=this;
return smalltalk.send(self, "_basicAt_put_", [aKey, aValue]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_includesKey_", [aKey]), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_basicAt_", [aKey]);}), aBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_at_ifAbsentPut_',
smalltalk.method({
selector: 'at:ifAbsentPut:',
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_at_ifPresent_',
smalltalk.method({
selector: 'at:ifPresent:',
fn: function (aKey, aBlock){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", [aKey])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})() : nil;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_at_ifPresent_ifAbsent_',
smalltalk.method({
selector: 'at:ifPresent:ifAbsent:',
fn: function (aKey, aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicAt_", [aKey]), "_ifNil_ifNotNil_", [anotherBlock, (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_at_',
smalltalk.method({
selector: 'at:',
fn: function (aKey){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
fn: function (anAssociation){
var self=this;
smalltalk.send(self, "_at_put_", [smalltalk.send(anAssociation, "_key", []), smalltalk.send(anAssociation, "_value", [])]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_addAll_',
smalltalk.method({
selector: 'addAll:',
fn: function (aHashedCollection){
var self=this;
smalltalk.send(self, "_addAll_", [smalltalk.send(aHashedCollection, "_associations", [])], smalltalk.Collection);
return aHashedCollection;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_removeKey_',
smalltalk.method({
selector: 'removeKey:',
fn: function (aKey){
var self=this;
smalltalk.send(self, "_remove_", [aKey]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_remove_ifAbsent_',
smalltalk.method({
selector: 'remove:ifAbsent:',
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(self, "_removeKey_ifAbsent_", [aKey, aBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_removeKey_ifAbsent_',
smalltalk.method({
selector: 'removeKey:ifAbsent:',
fn: function (aKey, aBlock){
var self=this;
return ((($receiver = smalltalk.send(self, "_includesKey_", [aKey])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(aBlock, "_value", []);})() : (function(){return smalltalk.send(self, "_basicDelete_", [aKey]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(aBlock, "_value", []);}), (function(){return smalltalk.send(self, "_basicDelete_", [aKey]);})]));
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (aHashedCollection){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aHashedCollection, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
((($receiver = smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [smalltalk.send(aHashedCollection, "_size", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
(function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return smalltalk.send(smalltalk.send(self, "_associations", []), "__eq", [smalltalk.send(aHashedCollection, "_associations", [])])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
fn: function (){
var self=this;
var copy=nil;
(copy=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(copy, "_at_put_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return copy;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
fn: function (aCollection){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
fn: function (anIndex, anotherIndex){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
fn: function (){
var self=this;
var copy=nil;
(copy=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(copy, "_at_put_", [smalltalk.send(each, "_key", []), smalltalk.send(smalltalk.send(each, "_value", []), "_deepCopy", [])]);})]);
return copy;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_associationsDo_',
smalltalk.method({
selector: 'associationsDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_associations", []), "_do_", [aBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_keysAndValuesDo_',
smalltalk.method({
selector: 'keysAndValuesDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_values", []), "_do_", [aBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_select_',
smalltalk.method({
selector: 'select:',
fn: function (aBlock){
var self=this;
var newDict=nil;
(newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return ((($receiver = smalltalk.send(aBlock, "_value_", [value])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})]));})]);
return newDict;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_collect_',
smalltalk.method({
selector: 'collect:',
fn: function (aBlock){
var self=this;
var newDict=nil;
(newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(newDict, "_at_put_", [key, smalltalk.send(aBlock, "_value_", [value])]);})]);
return newDict;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_detect_ifNone_',
smalltalk.method({
selector: 'detect:ifNone:',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_detect_ifNone_", [aBlock, anotherBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_includes_',
smalltalk.method({
selector: 'includes:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_includes_", [anObject]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Collection)]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%28")]);})(aStream);smalltalk.send(smalltalk.send(self, "_associations", []), "_do_separatedBy_", [(function(anAssociation){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_key", []), "_printString", [])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%20-%3E%20")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_value", []), "_printString", [])]);})(aStream);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%20%2C%20")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [unescape("%29")]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_storeOn_',
smalltalk.method({
selector: 'storeOn:',
fn: function (aStream){
var self=this;
smalltalk.send(aStream, "_nextPutAll_", [unescape("%23%7B")]);
smalltalk.send(smalltalk.send(self, "_associations", []), "_do_separatedBy_", [(function(each){return smalltalk.send(each, "_storeOn_", [aStream]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [". "]);})]);
smalltalk.send(aStream, "_nextPutAll_", [unescape("%7D")]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_includesKey_',
smalltalk.method({
selector: 'includesKey:',
fn: function (aKey){
var self=this;
return self.hasOwnProperty(aKey);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
'_asDictionary',
smalltalk.method({
selector: 'asDictionary',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Dictionary || Dictionary), "_fromPairs_", [smalltalk.send(self, "_associations", [])]);
return self;}
}),
smalltalk.HashedCollection);


smalltalk.addMethod(
'_fromPairs_',
smalltalk.method({
selector: 'fromPairs:',
fn: function (aCollection){
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
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
fn: function (aKey, aBlock){
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
'_keys',
smalltalk.method({
selector: 'keys',
fn: function (){
var self=this;
return smalltalk.send(self['@keys'], "_copy", []);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_values',
smalltalk.method({
selector: 'values',
fn: function (){
var self=this;
return smalltalk.send(self['@values'], "_copy", []);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
fn: function (aKey, aValue){
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
'_removeKey_ifAbsent_',
smalltalk.method({
selector: 'removeKey:ifAbsent:',
fn: function (aKey, aBlock){
var self=this;

		var index = self['@keys'].indexOf(aKey);
		if(index === -1) {
			return aBlock()
		} else {
			self['@keys'].splice(i, 1);
			self['@values'].splice(i, 1);
			return aKey
		};
	;
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.HashedCollection);
(self['@keys']=[]);
(self['@values']=[]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_includesKey_',
smalltalk.method({
selector: 'includesKey:',
fn: function (aKey){
var self=this;
return smalltalk.send(self['@keys'], "_includes_", [aKey]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_asHashedCollection',
smalltalk.method({
selector: 'asHashedCollection',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.HashedCollection || HashedCollection), "_fromPairs_", [smalltalk.send(self, "_associations", [])]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_asJSONString',
smalltalk.method({
selector: 'asJSONString',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asHashedCollection", []), "_asJSONString", []);
return self;}
}),
smalltalk.Dictionary);



smalltalk.addClass('OrderedCollection', smalltalk.SequenceableCollection, ['elements'], 'Kernel-Collections');
smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
fn: function (){
var self=this;
return smalltalk.send(self['@elements'], "_size", []);
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
fn: function (anIndex, anObject){
var self=this;
return self['@elements'][anIndex - 1] = anObject;
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
fn: function (anIndex, aBlock){
var self=this;
return smalltalk.send(self['@elements'], "_at_ifAbsent_", [anIndex, aBlock]);
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
fn: function (anObject){
var self=this;
self['@elements'].push(anObject); return anObject;;
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_join_',
smalltalk.method({
selector: 'join:',
fn: function (aString){
var self=this;
return smalltalk.send(self['@elements'], "_join_", [aString]);
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_sort',
smalltalk.method({
selector: 'sort',
fn: function (){
var self=this;
smalltalk.send(self['@elements'], "_sort", []);
return self;
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_sort_',
smalltalk.method({
selector: 'sort:',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@elements'], "_sort_", [aBlock]);
return self;
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
fn: function (anObject){
var self=this;

		for(var i=0;i<self['@elements'].length;i++) {
			if(self['@elements'][i] == anObject) {
				self['@elements'].splice(i,1);
				break;
			}
		}
	;
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_sorted',
smalltalk.method({
selector: 'sorted',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort", []);
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_sorted_',
smalltalk.method({
selector: 'sorted:',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort_", [aBlock]);
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_removeFrom_to_',
smalltalk.method({
selector: 'removeFrom:to:',
fn: function (aNumber, anotherNumber){
var self=this;
self['@elements'].splice(aNumber - 1,anotherNumber - 1);
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_reversed',
smalltalk.method({
selector: 'reversed',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_asArray", []), "_reversed", []), "_asOrderedCollection", []);
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.SequenceableCollection);
(self['@elements']=[]);
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_withIndexDo_',
smalltalk.method({
selector: 'withIndexDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@elements'], "_withIndexDo_", [aBlock]);
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_detect_ifNone_',
smalltalk.method({
selector: 'detect:ifNone:',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(self['@elements'], "_detect_ifNone_", [aBlock, anotherBlock]);
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@elements'], "_do_", [aBlock]);
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_asOrderedCollection',
smalltalk.method({
selector: 'asOrderedCollection',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.OrderedCollection);

smalltalk.addMethod(
'_asArray',
smalltalk.method({
selector: 'asArray',
fn: function (){
var self=this;
return smalltalk.send(self['@elements'], "_copy", []);
return self;}
}),
smalltalk.OrderedCollection);



