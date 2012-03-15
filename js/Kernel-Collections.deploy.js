smalltalk.addPackage('Kernel-Collections', {});
smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel-Collections');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (anAssociation) {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(anAssociation, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_key", []), "__eq", [smalltalk.send(anAssociation, "_key", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_value", []), "__eq", [smalltalk.send(anAssociation, "_value", [])]);})]);})]);
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_key_'),
smalltalk.method({
selector: unescape('key%3A'),
fn: function (aKey) {
var self=this;
(self['@key']=aKey);
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_key'),
smalltalk.method({
selector: unescape('key'),
fn: function () {
var self=this;
return self['@key'];
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_value_'),
smalltalk.method({
selector: unescape('value%3A'),
fn: function (aValue) {
var self=this;
(self['@value']=aValue);
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_value'),
smalltalk.method({
selector: unescape('value'),
fn: function () {
var self=this;
return self['@value'];
return self;}
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_storeOn_'),
smalltalk.method({
selector: unescape('storeOn%3A'),
fn: function (aStream) {
var self=this;
smalltalk.send(self['@key'], "_storeOn_", [aStream]);
smalltalk.send(aStream, "_nextPutAll_", [unescape("-%3E")]);
smalltalk.send(self['@value'], "_storeOn_", [aStream]);
return self;}
}),
smalltalk.Association);


smalltalk.addMethod(
unescape('_key_value_'),
smalltalk.method({
selector: unescape('key%3Avalue%3A'),
fn: function (aKey, aValue) {
var self=this;
return (function($rec){smalltalk.send($rec, "_key_", [aKey]);smalltalk.send($rec, "_value_", [aValue]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Association.klass);


smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
smalltalk.addMethod(
unescape('_collection'),
smalltalk.method({
selector: unescape('collection'),
fn: function () {
var self=this;
return self['@collection'];
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_setCollection_'),
smalltalk.method({
selector: unescape('setCollection%3A'),
fn: function (aCollection) {
var self=this;
(self['@collection']=aCollection);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_position'),
smalltalk.method({
selector: unescape('position'),
fn: function () {
var self=this;
return (($receiver = self['@position']) == nil || $receiver == undefined) ? (function(){return (self['@position']=(0));})() : $receiver;
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_position_'),
smalltalk.method({
selector: unescape('position%3A'),
fn: function (anInteger) {
var self=this;
(self['@position']=anInteger);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_streamSize'),
smalltalk.method({
selector: unescape('streamSize'),
fn: function () {
var self=this;
return self['@streamSize'];
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_setStreamSize_'),
smalltalk.method({
selector: unescape('setStreamSize%3A'),
fn: function (anInteger) {
var self=this;
(self['@streamSize']=anInteger);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_contents'),
smalltalk.method({
selector: unescape('contents'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_streamSize", [])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function () {
var self=this;
return smalltalk.send(self, "_streamSize", []);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_reset'),
smalltalk.method({
selector: unescape('reset'),
fn: function () {
var self=this;
smalltalk.send(self, "_position_", [(0)]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_close'),
smalltalk.method({
selector: unescape('close'),
fn: function () {
var self=this;

return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_flush'),
smalltalk.method({
selector: unescape('flush'),
fn: function () {
var self=this;

return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_resetContents'),
smalltalk.method({
selector: unescape('resetContents'),
fn: function () {
var self=this;
smalltalk.send(self, "_reset", []);
smalltalk.send(self, "_setStreamSize_", [(0)]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
fn: function (aBlock) {
var self=this;
(function(){while(!(function(){return smalltalk.send(self, "_atEnd", []);})()) {(function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_next", [])]);})()}})();
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_setToEnd'),
smalltalk.method({
selector: unescape('setToEnd'),
fn: function () {
var self=this;
smalltalk.send(self, "_position_", [smalltalk.send(self, "_size", [])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_skip_'),
smalltalk.method({
selector: unescape('skip%3A'),
fn: function (anInteger) {
var self=this;
smalltalk.send(self, "_position_", [smalltalk.send(((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +anInteger : smalltalk.send($receiver, "__plus", [anInteger])), "_min_max_", [smalltalk.send(self, "_size", []), (0)])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_next'),
smalltalk.method({
selector: unescape('next'),
fn: function () {
var self=this;
return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);return smalltalk.send(self['@collection'], "_at_", [smalltalk.send(self, "_position", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);return smalltalk.send(self['@collection'], "_at_", [smalltalk.send(self, "_position", [])]);})]));
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_next_'),
smalltalk.method({
selector: unescape('next%3A'),
fn: function (anInteger) {
var self=this;
var tempCollection=nil;
(tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []));
smalltalk.send(anInteger, "_timesRepeat_", [(function(){return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(tempCollection, "_add_", [smalltalk.send(self, "_next", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(tempCollection, "_add_", [smalltalk.send(self, "_next", [])]);})]));})]);
return tempCollection;
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_nextPut_'),
smalltalk.method({
selector: unescape('nextPut%3A'),
fn: function (anObject) {
var self=this;
smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
smalltalk.send(smalltalk.send(self, "_collection", []), "_at_put_", [smalltalk.send(self, "_position", []), anObject]);
smalltalk.send(self, "_setStreamSize_", [smalltalk.send(smalltalk.send(self, "_streamSize", []), "_max_", [smalltalk.send(self, "_position", [])])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_nextPutAll_'),
smalltalk.method({
selector: unescape('nextPutAll%3A'),
fn: function (aCollection) {
var self=this;
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(self, "_nextPut_", [each]);})]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_peek'),
smalltalk.method({
selector: unescape('peek'),
fn: function () {
var self=this;
return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})]));
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_atEnd'),
smalltalk.method({
selector: unescape('atEnd'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [smalltalk.send(self, "_size", [])]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_atStart'),
smalltalk.method({
selector: unescape('atStart'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [(0)]);
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_isEmpty'),
smalltalk.method({
selector: unescape('isEmpty'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [(0)]);
return self;}
}),
smalltalk.Stream);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
fn: function (aCollection) {
var self=this;
return (function($rec){smalltalk.send($rec, "_setCollection_", [aCollection]);smalltalk.send($rec, "_setStreamSize_", [smalltalk.send(aCollection, "_size", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Stream.klass);


smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
unescape('_compile_'),
smalltalk.method({
selector: unescape('compile%3A'),
fn: function (aString) {
var self=this;
return self.compile(aString);
return self;}
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
unescape('_exec_'),
smalltalk.method({
selector: unescape('exec%3A'),
fn: function (aString) {
var self=this;
return self.exec(aString) || nil;
return self;}
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
unescape('_test_'),
smalltalk.method({
selector: unescape('test%3A'),
fn: function (aString) {
var self=this;
return self.test(aString);
return self;}
}),
smalltalk.RegularExpression);


smalltalk.addMethod(
unescape('_fromString_flag_'),
smalltalk.method({
selector: unescape('fromString%3Aflag%3A'),
fn: function (aString, anotherString) {
var self=this;
return new RegExp(aString, anotherString);
return self;}
}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
unescape('_fromString_'),
smalltalk.method({
selector: unescape('fromString%3A'),
fn: function (aString) {
var self=this;
return smalltalk.send(self, "_fromString_flag_", [aString, ""]);
return self;}
}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function () {
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_readStream'),
smalltalk.method({
selector: unescape('readStream'),
fn: function () {
var self=this;
return smalltalk.send(self, "_stream", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_writeStream'),
smalltalk.method({
selector: unescape('writeStream'),
fn: function () {
var self=this;
return smalltalk.send(self, "_stream", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_stream'),
smalltalk.method({
selector: unescape('stream'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_streamClass", []), "_on_", [self]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_streamClass'),
smalltalk.method({
selector: unescape('streamClass'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_streamClass", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
fn: function (anObject) {
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_addAll_'),
smalltalk.method({
selector: unescape('addAll%3A'),
fn: function (aCollection) {
var self=this;
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(self, "_add_", [each]);})]);
return aCollection;
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('__comma'),
smalltalk.method({
selector: unescape('%2C'),
fn: function (aCollection) {
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_copyWith_'),
smalltalk.method({
selector: unescape('copyWith%3A'),
fn: function (anObject) {
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_copyWithAll_'),
smalltalk.method({
selector: unescape('copyWithAll%3A'),
fn: function (aCollection) {
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_asArray'),
smalltalk.method({
selector: unescape('asArray'),
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Array || Array), "_withAll_", [self]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
fn: function (aBlock) {
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i]);};
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_collect_'),
smalltalk.method({
selector: unescape('collect%3A'),
fn: function (aBlock) {
var self=this;
var newCollection=nil;
(newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [smalltalk.send(aBlock, "_value_", [each])]);})]);
return newCollection;
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_detect_'),
smalltalk.method({
selector: unescape('detect%3A'),
fn: function (aBlock) {
var self=this;
return smalltalk.send(self, "_detect_ifNone_", [aBlock, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_detect_ifNone_'),
smalltalk.method({
selector: unescape('detect%3AifNone%3A'),
fn: function (aBlock, anotherBlock) {
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
unescape('_do_separatedBy_'),
smalltalk.method({
selector: unescape('do%3AseparatedBy%3A'),
fn: function (aBlock, anotherBlock) {
var self=this;
var first=nil;
(first=true);
smalltalk.send(self, "_do_", [(function(each){((($receiver = first).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (first=false);})() : (function(){return smalltalk.send(anotherBlock, "_value", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (first=false);}), (function(){return smalltalk.send(anotherBlock, "_value", []);})]));return smalltalk.send(aBlock, "_value_", [each]);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_inject_into_'),
smalltalk.method({
selector: unescape('inject%3Ainto%3A'),
fn: function (anObject, aBlock) {
var self=this;
var result=nil;
(result=anObject);
smalltalk.send(self, "_do_", [(function(each){return (result=smalltalk.send(aBlock, "_value_value_", [result, each]));})]);
return result;
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_reject_'),
smalltalk.method({
selector: unescape('reject%3A'),
fn: function (aBlock) {
var self=this;
return smalltalk.send(self, "_select_", [(function(each){return smalltalk.send(smalltalk.send(aBlock, "_value_", [each]), "__eq", [false]);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_select_'),
smalltalk.method({
selector: unescape('select%3A'),
fn: function (aBlock) {
var self=this;
var stream=nil;
(stream=smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_new", []), "_writeStream", []));
smalltalk.send(self, "_do_", [(function(each){return ((($receiver = smalltalk.send(aBlock, "_value_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(stream, "_nextPut_", [each]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(stream, "_nextPut_", [each]);})]));})]);
return smalltalk.send(stream, "_contents", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_errorNotFound'),
smalltalk.method({
selector: unescape('errorNotFound'),
fn: function () {
var self=this;
smalltalk.send(self, "_error_", ["Object is not in the collection"]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_includes_'),
smalltalk.method({
selector: unescape('includes%3A'),
fn: function (anObject) {
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
unescape('_notEmpty'),
smalltalk.method({
selector: unescape('notEmpty'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_isEmpty", []), "_not", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_isEmpty'),
smalltalk.method({
selector: unescape('isEmpty'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [(0)]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
fn: function (anObject) {
var self=this;
return smalltalk.send(self, "_remove_ifAbsent_", [anObject, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_asSet'),
smalltalk.method({
selector: unescape('asSet'),
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Set || Set), "_withAll_", [self]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_ifNotEmpty_'),
smalltalk.method({
selector: unescape('ifNotEmpty%3A'),
fn: function (aBlock) {
var self=this;
smalltalk.send(smalltalk.send(self, "_notEmpty", []), "_ifTrue_", [aBlock]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_ifEmpty_'),
smalltalk.method({
selector: unescape('ifEmpty%3A'),
fn: function (aBlock){
var self=this;
return ((($receiver = smalltalk.send(self, "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aBlock, "_value", []);})() : (function(){return self;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value", []);}), (function(){return self;})]));
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_copyWithoutAll_'),
smalltalk.method({
selector: unescape('copyWithoutAll%3A'),
fn: function (aCollection) {
var self=this;
return smalltalk.send(self, "_reject_", [(function(each){return smalltalk.send(aCollection, "_includes_", [each]);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_remove_ifAbsent_'),
smalltalk.method({
selector: unescape('remove%3AifAbsent%3A'),
fn: function (anObject, aBlock) {
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_asOrderedCollection'),
smalltalk.method({
selector: unescape('asOrderedCollection'),
fn: function () {
var self=this;
return smalltalk.send(self, "_asArray", []);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_asJSON'),
smalltalk.method({
selector: unescape('asJSON'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asArray", []), "_collect_", [(function(each){return smalltalk.send(each, "_asJSON", []);})]);
return self;}
}),
smalltalk.Collection);


smalltalk.addMethod(
unescape('_streamClass'),
smalltalk.method({
selector: unescape('streamClass'),
fn: function () {
var self=this;
return (smalltalk.Stream || Stream);
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
fn: function (anObject) {
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
unescape('_with_with_'),
smalltalk.method({
selector: unescape('with%3Awith%3A'),
fn: function (anObject, anotherObject) {
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);smalltalk.send($rec, "_add_", [anotherObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
unescape('_with_with_with_'),
smalltalk.method({
selector: unescape('with%3Awith%3Awith%3A'),
fn: function (firstObject, secondObject, thirdObject) {
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [firstObject]);smalltalk.send($rec, "_add_", [secondObject]);smalltalk.send($rec, "_add_", [thirdObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
unescape('_withAll_'),
smalltalk.method({
selector: unescape('withAll%3A'),
fn: function (aCollection) {
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
unescape('_new_'),
smalltalk.method({
selector: unescape('new%3A'),
fn: function (anInteger) {
var self=this;
return smalltalk.send(self, "_new", []);
return self;}
}),
smalltalk.Collection.klass);


smalltalk.addClass('SequenceableCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (anIndex) {
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [anIndex, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
fn: function (anIndex, aBlock) {
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
fn: function (anIndex, anObject) {
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_copyFrom_to_'),
smalltalk.method({
selector: unescape('copyFrom%3Ato%3A'),
fn: function (anIndex, anotherIndex) {
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
unescape('_first'),
smalltalk.method({
selector: unescape('first'),
fn: function () {
var self=this;
return smalltalk.send(self, "_at_", [(1)]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_fourth'),
smalltalk.method({
selector: unescape('fourth'),
fn: function () {
var self=this;
return smalltalk.send(self, "_at_", [(4)]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_last'),
smalltalk.method({
selector: unescape('last'),
fn: function () {
var self=this;
return smalltalk.send(self, "_at_", [smalltalk.send(self, "_size", [])]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_second'),
smalltalk.method({
selector: unescape('second'),
fn: function () {
var self=this;
return smalltalk.send(self, "_at_", [(2)]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_third'),
smalltalk.method({
selector: unescape('third'),
fn: function () {
var self=this;
return smalltalk.send(self, "_at_", [(3)]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_removeLast'),
smalltalk.method({
selector: unescape('removeLast'),
fn: function () {
var self=this;
smalltalk.send(self, "_remove_", [smalltalk.send(self, "_last", [])]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_addLast_'),
smalltalk.method({
selector: unescape('addLast%3A'),
fn: function (anObject) {
var self=this;
smalltalk.send(self, "_add_", [anObject]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_withIndexDo_'),
smalltalk.method({
selector: unescape('withIndexDo%3A'),
fn: function (aBlock) {
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i], i+1);};
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_allButFirst'),
smalltalk.method({
selector: unescape('allButFirst'),
fn: function () {
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(2), smalltalk.send(self, "_size", [])]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_allButLast'),
smalltalk.method({
selector: unescape('allButLast'),
fn: function () {
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(1), ((($receiver = smalltalk.send(self, "_size", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_indexOf_'),
smalltalk.method({
selector: unescape('indexOf%3A'),
fn: function (anObject) {
var self=this;
return smalltalk.send(self, "_indexOf_ifAbsent_", [anObject, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_indexOf_ifAbsent_'),
smalltalk.method({
selector: unescape('indexOf%3AifAbsent%3A'),
fn: function (anObject, aBlock) {
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
unescape('_indexOf_startingAt_ifAbsent_'),
smalltalk.method({
selector: unescape('indexOf%3AstartingAt%3AifAbsent%3A'),
fn: function (anObject, start, aBlock) {
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
unescape('_indexOf_startingAt_'),
smalltalk.method({
selector: unescape('indexOf%3AstartingAt%3A'),
fn: function (anObject, start) {
var self=this;
return smalltalk.send(self, "_indexOf_startingAt_ifAbsent_", [anObject, start, (function(){return (0);})]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_reversed'),
smalltalk.method({
selector: unescape('reversed'),
fn: function () {
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_atRandom'),
smalltalk.method({
selector: unescape('atRandom'),
fn: function () {
var self=this;
return smalltalk.send(self, "_at_", [smalltalk.send(smalltalk.send(self, "_size", []), "_atRandom", [])]);
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (aCollection) {
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aCollection, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [smalltalk.send(aCollection, "_size", [])]);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
smalltalk.send(self, "_withIndexDo_", [(function(each, i){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_at_", [i]), "__eq", [each])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
fn: function () {
var self=this;
var newCollection=nil;
(newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new_", [smalltalk.send(self, "_size", [])]));
smalltalk.send(self, "_withIndexDo_", [(function(each, index){return smalltalk.send(newCollection, "_at_put_", [index, each]);})]);
return newCollection;
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
fn: function () {
var self=this;
var newCollection=nil;
(newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new_", [smalltalk.send(self, "_size", [])]));
smalltalk.send(self, "_withIndexDo_", [(function(each, index){return smalltalk.send(newCollection, "_at_put_", [index, smalltalk.send(each, "_deepCopy", [])]);})]);
return newCollection;
return self;}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
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

smalltalk.addMethod(
unescape('_first_'),
smalltalk.method({
selector: unescape('first%3A'),
fn: function (n){
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(1), n]);
return self;}
}),
smalltalk.SequenceableCollection);



smalltalk.addClass('CharacterArray', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
fn: function (anIndex, anObject) {
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
fn: function (anObject) {
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
unescape('__comma'),
smalltalk.method({
selector: unescape('%2C'),
fn: function (aString) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "__comma", [smalltalk.send(aString, "_asString", [])]);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
fn: function () {
var self=this;
return smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
unescape('_asNumber'),
smalltalk.method({
selector: unescape('asNumber'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_asNumber", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
unescape('_errorReadOnly'),
smalltalk.method({
selector: unescape('errorReadOnly'),
fn: function () {
var self=this;
smalltalk.send(self, "_error_", [unescape("Object%20is%20read-only")]);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_printString", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
fn: function (anObject) {
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
unescape('_asUppercase'),
smalltalk.method({
selector: unescape('asUppercase'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [smalltalk.send(smalltalk.send(self, "_asString", []), "_asUppercase", [])]);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
unescape('_asSymbol'),
smalltalk.method({
selector: unescape('asSymbol'),
fn: function () {
var self=this;
return smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
unescape('_asLowercase'),
smalltalk.method({
selector: unescape('asLowercase'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [smalltalk.send(smalltalk.send(self, "_asString", []), "_asLowercase", [])]);
return self;}
}),
smalltalk.CharacterArray);


smalltalk.addMethod(
unescape('_fromString_'),
smalltalk.method({
selector: unescape('fromString%3A'),
fn: function (aString) {
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.CharacterArray.klass);


smalltalk.addClass('String', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (aString) {
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aString, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
return String(self) === String(aString);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function () {
var self=this;
return self.length;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
fn: function (anIndex, aBlock) {
var self=this;
return self[anIndex - 1] || aBlock();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_escaped'),
smalltalk.method({
selector: unescape('escaped'),
fn: function () {
var self=this;
return escape(self);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_unescaped'),
smalltalk.method({
selector: unescape('unescaped'),
fn: function () {
var self=this;
return unescape(self);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__comma'),
smalltalk.method({
selector: unescape('%2C'),
fn: function (aString) {
var self=this;
return self + aString;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_copyFrom_to_'),
smalltalk.method({
selector: unescape('copyFrom%3Ato%3A'),
fn: function (anIndex, anotherIndex) {
var self=this;
return self.substring(anIndex - 1, anotherIndex);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [self]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
fn: function () {
var self=this;
return smalltalk.send(self, "_shallowCopy", []);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asSelector'),
smalltalk.method({
selector: unescape('asSelector'),
fn: function () {
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
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
fn: function () {
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
unescape('_replace_with_'),
smalltalk.method({
selector: unescape('replace%3Awith%3A'),
fn: function (aString, anotherString) {
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [aString, "g"]), anotherString]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_replaceRegexp_with_'),
smalltalk.method({
selector: unescape('replaceRegexp%3Awith%3A'),
fn: function (aRegexp, aString) {
var self=this;
return self.replace(aRegexp, aString);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_tokenize_'),
smalltalk.method({
selector: unescape('tokenize%3A'),
fn: function (aString) {
var self=this;
return self.split(aString);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_match_'),
smalltalk.method({
selector: unescape('match%3A'),
fn: function (aRegexp) {
var self=this;
return self.search(aRegexp) != -1;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
fn: function () {
var self=this;
return self;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asNumber'),
smalltalk.method({
selector: unescape('asNumber'),
fn: function () {
var self=this;
return Number(self);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [self]), "__comma", [unescape("%27")]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_printNl'),
smalltalk.method({
selector: unescape('printNl'),
fn: function () {
var self=this;
console.log(self);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_isString'),
smalltalk.method({
selector: unescape('isString'),
fn: function () {
var self=this;
return true;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__gt'),
smalltalk.method({
selector: unescape('%3E'),
fn: function (aString) {
var self=this;
return String(self) > aString._asString();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__lt'),
smalltalk.method({
selector: unescape('%3C'),
fn: function (aString) {
var self=this;
return String(self) < aString._asString();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__gt_eq'),
smalltalk.method({
selector: unescape('%3E%3D'),
fn: function (aString) {
var self=this;
return String(self) >= aString._asString();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__lt_eq'),
smalltalk.method({
selector: unescape('%3C%3D'),
fn: function (aString) {
var self=this;
return String(self) <= aString._asString();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimLeft_'),
smalltalk.method({
selector: unescape('trimLeft%3A'),
fn: function (separators) {
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [smalltalk.send(smalltalk.send(unescape("%5E%5B"), "__comma", [separators]), "__comma", [unescape("%5D+")]), "g"]), ""]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimRight_'),
smalltalk.method({
selector: unescape('trimRight%3A'),
fn: function (separators) {
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [smalltalk.send(smalltalk.send(unescape("%5B"), "__comma", [separators]), "__comma", [unescape("%5D+%24")]), "g"]), ""]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimLeft'),
smalltalk.method({
selector: unescape('trimLeft'),
fn: function () {
var self=this;
return smalltalk.send(self, "_trimLeft_", [unescape("%5Cs")]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimRight'),
smalltalk.method({
selector: unescape('trimRight'),
fn: function () {
var self=this;
return smalltalk.send(self, "_trimRight_", [unescape("%5Cs")]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimBoth'),
smalltalk.method({
selector: unescape('trimBoth'),
fn: function () {
var self=this;
return smalltalk.send(self, "_trimBoth_", [unescape("%5Cs")]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimBoth_'),
smalltalk.method({
selector: unescape('trimBoth%3A'),
fn: function (separators) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_trimLeft_", [separators]), "_trimRight_", [separators]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asLowercase'),
smalltalk.method({
selector: unescape('asLowercase'),
fn: function () {
var self=this;
return self.toLowerCase();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asUppercase'),
smalltalk.method({
selector: unescape('asUppercase'),
fn: function () {
var self=this;
return self.toUpperCase();
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_join_'),
smalltalk.method({
selector: unescape('join%3A'),
fn: function (aCollection) {
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){return smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(each, "_asString", [])]);}), (function(){return smalltalk.send(stream, "_nextPutAll_", [self]);})]);})]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_includesSubString_'),
smalltalk.method({
selector: unescape('includesSubString%3A'),
fn: function (subString) {
var self=this;
 return self.indexOf(subString) != -1 ;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asciiValue'),
smalltalk.method({
selector: unescape('asciiValue'),
fn: function () {
var self=this;
return self.charCodeAt(0);;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_lineIndicesDo_'),
smalltalk.method({
selector: unescape('lineIndicesDo%3A'),
fn: function (aBlock) {
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
unescape('_linesDo_'),
smalltalk.method({
selector: unescape('linesDo%3A'),
fn: function (aBlock) {
var self=this;
smalltalk.send(self, "_lineIndicesDo_", [(function(start, endWithoutDelimiters, end){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])]);})]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_lines'),
smalltalk.method({
selector: unescape('lines'),
fn: function () {
var self=this;
var lines=nil;
(lines=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(self, "_linesDo_", [(function(aLine){return smalltalk.send(lines, "_add_", [aLine]);})]);
return lines;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_lineNumber_'),
smalltalk.method({
selector: unescape('lineNumber%3A'),
fn: function (anIndex) {
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
unescape('_reversed'),
smalltalk.method({
selector: unescape('reversed'),
fn: function () {
var self=this;
return self.split("").reverse().join("");
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asJavaScriptSelector'),
smalltalk.method({
selector: unescape('asJavaScriptSelector'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_asSelector", []), "_replace_with_", [unescape("%5E_"), ""]), "_replace_with_", [unescape("_.*"), ""]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asSymbol'),
smalltalk.method({
selector: unescape('asSymbol'),
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Symbol || Symbol), "_lookup_", [self]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asJSON'),
smalltalk.method({
selector: unescape('asJSON'),
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.String);


smalltalk.addMethod(
unescape('_streamClass'),
smalltalk.method({
selector: unescape('streamClass'),
fn: function () {
var self=this;
return (smalltalk.StringStream || StringStream);
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_fromString_'),
smalltalk.method({
selector: unescape('fromString%3A'),
fn: function (aString) {
var self=this;
return new self.fn(aString);
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
fn: function () {
var self=this;
return '\r';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_lf'),
smalltalk.method({
selector: unescape('lf'),
fn: function () {
var self=this;
return '\n';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_space'),
smalltalk.method({
selector: unescape('space'),
fn: function () {
var self=this;
return ' ';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_tab'),
smalltalk.method({
selector: unescape('tab'),
fn: function () {
var self=this;
return '\t';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_crlf'),
smalltalk.method({
selector: unescape('crlf'),
fn: function () {
var self=this;
return '\r\n';
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_streamContents_'),
smalltalk.method({
selector: unescape('streamContents%3A'),
fn: function (blockWithArg) {
var self=this;
var stream=nil;
(stream=smalltalk.send(smalltalk.send(self, "_streamClass", []), "_on_", [smalltalk.send((smalltalk.String || String), "_new", [])]));
smalltalk.send(blockWithArg, "_value_", [stream]);
return smalltalk.send(stream, "_contents", []);
return self;}
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_value_'),
smalltalk.method({
selector: unescape('value%3A'),
fn: function (aUTFCharCode) {
var self=this;
return String.fromCharCode(aUTFCharCode);;
return self;}
}),
smalltalk.String.klass);


smalltalk.addClass('Symbol', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
fn: function (anIndex, aBlock) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_at_ifAbsent_", [anIndex, aBlock]);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
fn: function () {
var self=this;
return self.value;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
var self=this;
return smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_asString", [])]);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_size", []);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('_asSymbol'),
smalltalk.method({
selector: unescape('asSymbol'),
fn: function () {
var self=this;
return self;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('_copyFrom_to_'),
smalltalk.method({
selector: unescape('copyFrom%3Ato%3A'),
fn: function (anIndex, anotherIndex) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [smalltalk.send(smalltalk.send(self, "_asString", []), "_copyFrom_to_", [anIndex, anotherIndex])]);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
fn: function () {
var self=this;
return self;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('__lt'),
smalltalk.method({
selector: unescape('%3C'),
fn: function (aSymbol) {
var self=this;
return ((($receiver = smalltalk.send(self, "_asString", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(aSymbol, "_asString", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(aSymbol, "_asString", [])]));
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('__lt_eq'),
smalltalk.method({
selector: unescape('%3C%3D'),
fn: function (aSymbol) {
var self=this;
return ((($receiver = smalltalk.send(self, "_asString", [])).klass === smalltalk.Number) ? $receiver <=smalltalk.send(aSymbol, "_asString", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(aSymbol, "_asString", [])]));
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('__gt_eq'),
smalltalk.method({
selector: unescape('%3E%3D'),
fn: function (aSymbol) {
var self=this;
return ((($receiver = smalltalk.send(self, "_asString", [])).klass === smalltalk.Number) ? $receiver >=smalltalk.send(aSymbol, "_asString", []) : smalltalk.send($receiver, "__gt_eq", [smalltalk.send(aSymbol, "_asString", [])]));
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (aSymbol) {
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aSymbol, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
(function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return smalltalk.send(smalltalk.send(self, "_asString", []), "__eq", [smalltalk.send(aSymbol, "_asString", [])])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('_isSymbol'),
smalltalk.method({
selector: unescape('isSymbol'),
fn: function () {
var self=this;
return true;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(unescape("smalltalk.symbolFor%28%22"), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [unescape("%22%29")]);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('__gt'),
smalltalk.method({
selector: unescape('%3E'),
fn: function (aSymbol) {
var self=this;
return ((($receiver = smalltalk.send(self, "_asString", [])).klass === smalltalk.Number) ? $receiver >smalltalk.send(aSymbol, "_asString", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(aSymbol, "_asString", [])]));
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
fn: function () {
var self=this;
return self;
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('_asSelector'),
smalltalk.method({
selector: unescape('asSelector'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_asSelector", []);
return self;}
}),
smalltalk.Symbol);

smalltalk.addMethod(
unescape('_asJSON'),
smalltalk.method({
selector: unescape('asJSON'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "_asJSON", []);
return self;}
}),
smalltalk.Symbol);


smalltalk.addMethod(
unescape('_lookup_'),
smalltalk.method({
selector: unescape('lookup%3A'),
fn: function (aString) {
var self=this;
return smalltalk.symbolFor(aString);;
return self;}
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
unescape('_basicNew'),
smalltalk.method({
selector: unescape('basicNew'),
fn: function () {
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
unescape('_fromString_'),
smalltalk.method({
selector: unescape('fromString%3A'),
fn: function (aString) {
var self=this;
return smalltalk.send(self, "_lookup_", [aString]);
return self;}
}),
smalltalk.Symbol.klass);


smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function () {
var self=this;
return self.length;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
fn: function (anIndex, anObject) {
var self=this;
return self[anIndex - 1] = anObject;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
fn: function (anIndex, aBlock) {
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
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
fn: function (anObject) {
var self=this;
self.push(anObject); return anObject;;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_join_'),
smalltalk.method({
selector: unescape('join%3A'),
fn: function (aString) {
var self=this;
return self.join(aString);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(unescape("%5B"), "__comma", [smalltalk.send(smalltalk.send(self, "_collect_", [(function(each){return smalltalk.send(each, "_asJavascript", []);})]), "_join_", [unescape("%2C%20")])]), "__comma", [unescape("%5D")]);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sort'),
smalltalk.method({
selector: unescape('sort'),
fn: function () {
var self=this;
return smalltalk.send(self, "_basicPerform_", ["sort"]);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sort_'),
smalltalk.method({
selector: unescape('sort%3A'),
fn: function (aBlock) {
var self=this;

		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
fn: function (anObject) {
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
unescape('_sorted'),
smalltalk.method({
selector: unescape('sorted'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort", []);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sorted_'),
smalltalk.method({
selector: unescape('sorted%3A'),
fn: function (aBlock) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort_", [aBlock]);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_removeFrom_to_'),
smalltalk.method({
selector: unescape('removeFrom%3Ato%3A'),
fn: function (aNumber, anotherNumber) {
var self=this;
self.splice(aNumber - 1,anotherNumber - 1);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_reversed'),
smalltalk.method({
selector: unescape('reversed'),
fn: function () {
var self=this;
return self._copy().reverse();
return self;}
}),
smalltalk.Array);


smalltalk.addMethod(
unescape('_new_'),
smalltalk.method({
selector: unescape('new%3A'),
fn: function (anInteger) {
var self=this;
return new Array(anInteger);
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
fn: function (anObject) {
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [(1), anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new_", [(1)]));
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
unescape('_with_with_'),
smalltalk.method({
selector: unescape('with%3Awith%3A'),
fn: function (anObject, anObject2) {
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [(1), anObject]);smalltalk.send($rec, "_at_put_", [(2), anObject2]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new_", [(2)]));
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
unescape('_with_with_with_'),
smalltalk.method({
selector: unescape('with%3Awith%3Awith%3A'),
fn: function (anObject, anObject2, anObject3) {
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [(1), anObject]);smalltalk.send($rec, "_at_put_", [(2), anObject2]);smalltalk.send($rec, "_at_put_", [(3), anObject3]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new_", [(3)]));
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
unescape('_withAll_'),
smalltalk.method({
selector: unescape('withAll%3A'),
fn: function (aCollection) {
var self=this;
var instance=nil;
(instance=smalltalk.send(self, "_new_", [smalltalk.send(aCollection, "_size", [])]));
smalltalk.send(aCollection, "_withIndexDo_", [(function(each, index){return smalltalk.send(instance, "_at_put_", [index, each]);})]);
return instance;
return self;}
}),
smalltalk.Array.klass);


smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function () {
var self=this;
return self.length;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
fn: function (anIndex, anObject) {
var self=this;
return self[anIndex - 1] = anObject;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
fn: function (anIndex, aBlock) {
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
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
fn: function (anObject) {
var self=this;
self.push(anObject); return anObject;;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_join_'),
smalltalk.method({
selector: unescape('join%3A'),
fn: function (aString) {
var self=this;
return self.join(aString);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(unescape("%5B"), "__comma", [smalltalk.send(smalltalk.send(self, "_collect_", [(function(each){return smalltalk.send(each, "_asJavascript", []);})]), "_join_", [unescape("%2C%20")])]), "__comma", [unescape("%5D")]);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sort'),
smalltalk.method({
selector: unescape('sort'),
fn: function () {
var self=this;
return smalltalk.send(self, "_basicPerform_", ["sort"]);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sort_'),
smalltalk.method({
selector: unescape('sort%3A'),
fn: function (aBlock) {
var self=this;

		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
fn: function (anObject) {
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
unescape('_sorted'),
smalltalk.method({
selector: unescape('sorted'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort", []);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sorted_'),
smalltalk.method({
selector: unescape('sorted%3A'),
fn: function (aBlock) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort_", [aBlock]);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_removeFrom_to_'),
smalltalk.method({
selector: unescape('removeFrom%3Ato%3A'),
fn: function (aNumber, anotherNumber) {
var self=this;
self.splice(aNumber - 1,anotherNumber - 1);
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_reversed'),
smalltalk.method({
selector: unescape('reversed'),
fn: function () {
var self=this;
return self._copy().reverse();
return self;}
}),
smalltalk.Array);


smalltalk.addMethod(
unescape('_new_'),
smalltalk.method({
selector: unescape('new%3A'),
fn: function (anInteger) {
var self=this;
return new Array(anInteger);
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
fn: function (anObject) {
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [(1), anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new_", [(1)]));
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
unescape('_with_with_'),
smalltalk.method({
selector: unescape('with%3Awith%3A'),
fn: function (anObject, anObject2) {
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [(1), anObject]);smalltalk.send($rec, "_at_put_", [(2), anObject2]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new_", [(2)]));
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
unescape('_with_with_with_'),
smalltalk.method({
selector: unescape('with%3Awith%3Awith%3A'),
fn: function (anObject, anObject2, anObject3) {
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [(1), anObject]);smalltalk.send($rec, "_at_put_", [(2), anObject2]);smalltalk.send($rec, "_at_put_", [(3), anObject3]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new_", [(3)]));
return self;}
}),
smalltalk.Array.klass);

smalltalk.addMethod(
unescape('_withAll_'),
smalltalk.method({
selector: unescape('withAll%3A'),
fn: function (aCollection) {
var self=this;
var instance=nil;
(instance=smalltalk.send(self, "_new_", [smalltalk.send(aCollection, "_size", [])]));
smalltalk.send(aCollection, "_withIndexDo_", [(function(each, index){return smalltalk.send(instance, "_at_put_", [index, each]);})]);
return instance;
return self;}
}),
smalltalk.Array.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel-Collections');
smalltalk.addMethod(
unescape('_next_'),
smalltalk.method({
selector: unescape('next%3A'),
fn: function (anInteger) {
var self=this;
var tempCollection=nil;
(tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []));
smalltalk.send(anInteger, "_timesRepeat_", [(function(){return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]));})]));})]);
return tempCollection;
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_nextPut_'),
smalltalk.method({
selector: unescape('nextPut%3A'),
fn: function (aString) {
var self=this;
smalltalk.send(self, "_nextPutAll_", [aString]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_nextPutAll_'),
smalltalk.method({
selector: unescape('nextPutAll%3A'),
fn: function (aString) {
var self=this;
smalltalk.send(self, "_setCollection_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_position", [])]), "__comma", [aString]), "__comma", [smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [((($receiver = ((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])])), smalltalk.send(smalltalk.send(self, "_collection", []), "_size", [])])])]);
smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])]))]);
smalltalk.send(self, "_setStreamSize_", [smalltalk.send(smalltalk.send(self, "_streamSize", []), "_max_", [smalltalk.send(self, "_position", [])])]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
fn: function () {
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_cr", [])]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_crlf'),
smalltalk.method({
selector: unescape('crlf'),
fn: function () {
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_crlf", [])]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_lf'),
smalltalk.method({
selector: unescape('lf'),
fn: function () {
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_lf", [])]);
return self;}
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_space'),
smalltalk.method({
selector: unescape('space'),
fn: function () {
var self=this;
smalltalk.send(self, "_nextPut_", [" "]);
return self;}
}),
smalltalk.StringStream);



smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel-Collections');
smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
fn: function (anObject) {
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
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
fn: function (anObject) {
var self=this;
smalltalk.send(self['@elements'], "_remove_", [anObject]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Collection);
(self['@elements']=[]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function () {
var self=this;
return smalltalk.send(self['@elements'], "_size", []);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_asArray'),
smalltalk.method({
selector: unescape('asArray'),
fn: function () {
var self=this;
return smalltalk.send(self['@elements'], "_copy", []);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_detect_ifNone_'),
smalltalk.method({
selector: unescape('detect%3AifNone%3A'),
fn: function (aBlock, anotherBlock) {
var self=this;
return smalltalk.send(self['@elements'], "_detect_ifNone_", [aBlock, anotherBlock]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
fn: function (aBlock) {
var self=this;
smalltalk.send(self['@elements'], "_do_", [aBlock]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_includes_'),
smalltalk.method({
selector: unescape('includes%3A'),
fn: function (anObject) {
var self=this;
return smalltalk.send(self['@elements'], "_includes_", [anObject]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (aCollection) {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aCollection, "_class", [])]), "_and_", [(function(){return smalltalk.send(self['@elements'], "__eq", [smalltalk.send(aCollection, "_asArray", [])]);})]);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_select_'),
smalltalk.method({
selector: unescape('select%3A'),
fn: function (aBlock) {
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
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_keys", []), "_size", []);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_associations'),
smalltalk.method({
selector: unescape('associations'),
fn: function () {
var self=this;
var associations=nil;
(associations=[]);
smalltalk.send(smalltalk.send(self, "_keys", []), "_do_", [(function(each){return smalltalk.send(associations, "_add_", [smalltalk.send((smalltalk.Association || Association), "_key_value_", [each, smalltalk.send(self, "_at_", [each])])]);})]);
return associations;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_keys'),
smalltalk.method({
selector: unescape('keys'),
fn: function () {
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
unescape('_values'),
smalltalk.method({
selector: unescape('values'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_keys", []), "_collect_", [(function(each){return smalltalk.send(self, "_at_", [each]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
fn: function (aKey, aValue) {
var self=this;
return smalltalk.send(self, "_basicAt_put_", [aKey, aValue]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
fn: function (aKey, aBlock) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_includesKey_", [aKey]), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_basicAt_", [aKey]);}), aBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_at_ifAbsentPut_'),
smalltalk.method({
selector: unescape('at%3AifAbsentPut%3A'),
fn: function (aKey, aBlock) {
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_at_ifPresent_'),
smalltalk.method({
selector: unescape('at%3AifPresent%3A'),
fn: function (aKey, aBlock) {
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", [aKey])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})() : nil;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_at_ifPresent_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifPresent%3AifAbsent%3A'),
fn: function (aKey, aBlock, anotherBlock) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicAt_", [aKey]), "_ifNil_ifNotNil_", [anotherBlock, (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (aKey) {
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
fn: function (anAssociation) {
var self=this;
smalltalk.send(self, "_at_put_", [smalltalk.send(anAssociation, "_key", []), smalltalk.send(anAssociation, "_value", [])]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_addAll_'),
smalltalk.method({
selector: unescape('addAll%3A'),
fn: function (aHashedCollection) {
var self=this;
smalltalk.send(self, "_addAll_", [smalltalk.send(aHashedCollection, "_associations", [])], smalltalk.Collection);
return aHashedCollection;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_removeKey_'),
smalltalk.method({
selector: unescape('removeKey%3A'),
fn: function (aKey) {
var self=this;
smalltalk.send(self, "_remove_", [aKey]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_remove_ifAbsent_'),
smalltalk.method({
selector: unescape('remove%3AifAbsent%3A'),
fn: function (aKey, aBlock) {
var self=this;
return smalltalk.send(self, "_removeKey_ifAbsent_", [aKey, aBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_removeKey_ifAbsent_'),
smalltalk.method({
selector: unescape('removeKey%3AifAbsent%3A'),
fn: function (aKey, aBlock) {
var self=this;
return ((($receiver = smalltalk.send(self, "_includesKey_", [aKey])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(aBlock, "_value", []);})() : (function(){return smalltalk.send(self, "_basicDelete_", [aKey]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(aBlock, "_value", []);}), (function(){return smalltalk.send(self, "_basicDelete_", [aKey]);})]));
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (aHashedCollection) {
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aHashedCollection, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
((($receiver = smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [smalltalk.send(aHashedCollection, "_size", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
(function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return smalltalk.send(smalltalk.send(self, "_associations", []), "__eq", [smalltalk.send(aHashedCollection, "_associations", [])])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
fn: function () {
var self=this;
var copy=nil;
(copy=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(copy, "_at_put_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return copy;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('__comma'),
smalltalk.method({
selector: unescape('%2C'),
fn: function (aCollection) {
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_copyFrom_to_'),
smalltalk.method({
selector: unescape('copyFrom%3Ato%3A'),
fn: function (anIndex, anotherIndex) {
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
fn: function () {
var self=this;
var copy=nil;
(copy=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(copy, "_at_put_", [smalltalk.send(each, "_key", []), smalltalk.send(smalltalk.send(each, "_value", []), "_deepCopy", [])]);})]);
return copy;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_associationsDo_'),
smalltalk.method({
selector: unescape('associationsDo%3A'),
fn: function (aBlock) {
var self=this;
smalltalk.send(smalltalk.send(self, "_associations", []), "_do_", [aBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_keysAndValuesDo_'),
smalltalk.method({
selector: unescape('keysAndValuesDo%3A'),
fn: function (aBlock) {
var self=this;
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
fn: function (aBlock) {
var self=this;
smalltalk.send(smalltalk.send(self, "_values", []), "_do_", [aBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_select_'),
smalltalk.method({
selector: unescape('select%3A'),
fn: function (aBlock) {
var self=this;
var newDict=nil;
(newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return ((($receiver = smalltalk.send(aBlock, "_value_", [value])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})]));})]);
return newDict;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_collect_'),
smalltalk.method({
selector: unescape('collect%3A'),
fn: function (aBlock) {
var self=this;
var newDict=nil;
(newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(newDict, "_at_put_", [key, smalltalk.send(aBlock, "_value_", [value])]);})]);
return newDict;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_detect_ifNone_'),
smalltalk.method({
selector: unescape('detect%3AifNone%3A'),
fn: function (aBlock, anotherBlock) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_detect_ifNone_", [aBlock, anotherBlock]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_includes_'),
smalltalk.method({
selector: unescape('includes%3A'),
fn: function (anObject) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_includes_", [anObject]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Collection)]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%28")]);})(aStream);smalltalk.send(smalltalk.send(self, "_associations", []), "_do_separatedBy_", [(function(anAssociation){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_key", []), "_printString", [])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%20-%3E%20")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_value", []), "_printString", [])]);})(aStream);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%20%2C%20")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [unescape("%29")]);})]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_storeOn_'),
smalltalk.method({
selector: unescape('storeOn%3A'),
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutAll_", [unescape("%23%7B")]);
smalltalk.send(smalltalk.send(self, "_associations", []), "_do_separatedBy_", [(function(each){return smalltalk.send(each, "_storeOn_", [aStream]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [". "]);})]);
smalltalk.send(aStream, "_nextPutAll_", [unescape("%7D")]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_includesKey_'),
smalltalk.method({
selector: unescape('includesKey%3A'),
fn: function (aKey) {
var self=this;
return self.hasOwnProperty(aKey);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_asDictionary'),
smalltalk.method({
selector: unescape('asDictionary'),
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Dictionary || Dictionary), "_fromPairs_", [smalltalk.send(self, "_associations", [])]);
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
unescape('_asJSON'),
smalltalk.method({
selector: unescape('asJSON'),
fn: function (){
var self=this;
var c=nil;
(c=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(c, "_at_put_", [key, smalltalk.send(value, "_asJSON", [])]);})]);
return c;
return self;}
}),
smalltalk.HashedCollection);


smalltalk.addMethod(
unescape('_fromPairs_'),
smalltalk.method({
selector: unescape('fromPairs%3A'),
fn: function (aCollection) {
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
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
fn: function (aKey, aBlock) {
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
unescape('_keys'),
smalltalk.method({
selector: unescape('keys'),
fn: function () {
var self=this;
return smalltalk.send(self['@keys'], "_copy", []);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_values'),
smalltalk.method({
selector: unescape('values'),
fn: function () {
var self=this;
return smalltalk.send(self['@values'], "_copy", []);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
fn: function (aKey, aValue) {
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
unescape('_removeKey_ifAbsent_'),
smalltalk.method({
selector: unescape('removeKey%3AifAbsent%3A'),
fn: function (aKey, aBlock) {
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
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.HashedCollection);
(self['@keys']=[]);
(self['@values']=[]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_includesKey_'),
smalltalk.method({
selector: unescape('includesKey%3A'),
fn: function (aKey) {
var self=this;
return smalltalk.send(self['@keys'], "_includes_", [aKey]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_asHashedCollection'),
smalltalk.method({
selector: unescape('asHashedCollection'),
fn: function () {
var self=this;
return smalltalk.send((smalltalk.HashedCollection || HashedCollection), "_fromPairs_", [smalltalk.send(self, "_associations", [])]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_asJSON'),
smalltalk.method({
selector: unescape('asJSON'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asHashedCollection", []), "_asJSON", []);
return self;}
}),
smalltalk.Dictionary);



