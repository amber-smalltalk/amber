smalltalk.addPackage('Kernel-Collections', {});
smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (anAssociation){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"__eq",[smalltalk.send(anAssociation,"_class",[])]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(self,"_key",[]),"__eq",[smalltalk.send(anAssociation,"_key",[])]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(self,"_value",[]),"__eq",[smalltalk.send(anAssociation,"_value",[])]);
})]);
})]);
return $1;
},
args: ["anAssociation"],
source: "= anAssociation\x0a\x09^self class = anAssociation class and: [\x0a\x09    self key = anAssociation key and: [\x0a\x09\x09self value = anAssociation value]]",
messageSends: ["and:", "=", "value", "key", "class"],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return self["@key"];
},
args: [],
source: "key\x0a\x09^key",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
"_key_",
smalltalk.method({
selector: "key:",
category: 'accessing',
fn: function (aKey){
var self=this;
self["@key"]=aKey;
return self},
args: ["aKey"],
source: "key: aKey\x0a\x09key := aKey",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(aStream){
return smalltalk.send(self,"_storeOn_",[aStream]);
})]);
return $1;
},
args: [],
source: "printString\x0a\x09\x22print the contents of the Association into a string and return the string\x22\x0a\x09^String streamContents: [:aStream |\x0a\x09\x09self storeOn: aStream]",
messageSends: ["streamContents:", "storeOn:"],
referencedClasses: ["String"]
}),
smalltalk.Association);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
category: 'printing',
fn: function (aStream){
var self=this;
smalltalk.send(self["@key"],"_storeOn_",[aStream]);
smalltalk.send(aStream,"_nextPutAll_",["->"]);
smalltalk.send(self["@value"],"_storeOn_",[aStream]);
return self},
args: ["aStream"],
source: "storeOn: aStream\x0a\x09\x22Store in the format: key->value\x22\x0a\x0a\x09key storeOn: aStream.\x0a\x09aStream nextPutAll: '->'.\x0a\x09value storeOn: aStream.",
messageSends: ["storeOn:", "nextPutAll:"],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return self["@value"];
},
args: [],
source: "value\x0a\x09^value",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (aValue){
var self=this;
self["@value"]=aValue;
return self},
args: ["aValue"],
source: "value: aValue\x0a\x09value := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);


smalltalk.addMethod(
"_key_value_",
smalltalk.method({
selector: "key:value:",
category: 'instance creation',
fn: function (aKey,aValue){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_key_",[aKey]);
smalltalk.send($2,"_value_",[aValue]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aKey", "aValue"],
source: "key: aKey value: aValue\x0a\x09    ^self new\x0a\x09\x09key: aKey;\x0a\x09\x09value: aValue;\x0a\x09\x09yourself",
messageSends: ["key:", "new", "value:", "yourself"],
referencedClasses: []
}),
smalltalk.Association.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aCollection){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_copy",[]);
smalltalk.send($2,"_addAll_",[aCollection]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aCollection"],
source: ", aCollection\x0a\x09^self copy \x0a\x09    addAll: aCollection; \x0a\x09    yourself",
messageSends: ["addAll:", "copy", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: ["anObject"],
source: "add: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
category: 'adding/removing',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection,"_do_",[(function(each){
return smalltalk.send(self,"_add_",[each]);
})]);
return aCollection;
},
args: ["aCollection"],
source: "addAll: aCollection\x0a\x09aCollection do: [:each |\x0a\x09    self add: each].\x0a\x09^aCollection",
messageSends: ["do:", "add:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Array || Array),"_withAll_",[self]);
return $1;
},
args: [],
source: "asArray\x0a\x09^Array withAll: self",
messageSends: ["withAll:"],
referencedClasses: ["Array"]
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asArray",[]),"_collect_",[(function(each){
return smalltalk.send(each,"_asJSON",[]);
})]);
return $1;
},
args: [],
source: "asJSON\x0a\x09^self asArray collect: [:each | each asJSON]",
messageSends: ["collect:", "asJSON", "asArray"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asOrderedCollection",
smalltalk.method({
selector: "asOrderedCollection",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_asArray",[]);
return $1;
},
args: [],
source: "asOrderedCollection\x0a\x09^self asArray",
messageSends: ["asArray"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asSet",
smalltalk.method({
selector: "asSet",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Set || Set),"_withAll_",[self]);
return $1;
},
args: [],
source: "asSet\x0a\x09^Set withAll: self",
messageSends: ["withAll:"],
referencedClasses: ["Set"]
}),
smalltalk.Collection);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
category: 'enumerating',
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
},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [ :each |\x0a\x09\x09stream nextPut: (aBlock value: each) ].\x0a\x09^stream contents",
messageSends: ["writeStream", "new", "class", "do:", "nextPut:", "value:", "contents"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWith_",
smalltalk.method({
selector: "copyWith:",
category: 'copying',
fn: function (anObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_copy",[]);
smalltalk.send($2,"_add_",[anObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anObject"],
source: "copyWith: anObject\x0a\x09^self copy add: anObject; yourself",
messageSends: ["add:", "copy", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWithAll_",
smalltalk.method({
selector: "copyWithAll:",
category: 'copying',
fn: function (aCollection){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_copy",[]);
smalltalk.send($2,"_addAll_",[aCollection]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aCollection"],
source: "copyWithAll: aCollection\x0a\x09^self copy addAll: aCollection; yourself",
messageSends: ["addAll:", "copy", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWithoutAll_",
smalltalk.method({
selector: "copyWithoutAll:",
category: 'copying',
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send(self,"_reject_",[(function(each){
return smalltalk.send(aCollection,"_includes_",[each]);
})]);
return $1;
},
args: ["aCollection"],
source: "copyWithoutAll: aCollection\x0a\x09\x22Answer a copy of the receiver that does not contain any elements \x0a\x09equal to those in aCollection.\x22\x0a\x0a\x09^ self reject: [:each | aCollection includes: each]",
messageSends: ["reject:", "includes:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_detect_",
smalltalk.method({
selector: "detect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_detect_ifNone_",[aBlock,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
},
args: ["aBlock"],
source: "detect: aBlock\x0a\x09^self detect: aBlock ifNone: [self errorNotFound]",
messageSends: ["detect:ifNone:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;

		for(var i = 0; i < self.length; i++)
			if(aBlock(self[i]))
				return self[i];
		return anotherBlock();
	;
;
return self},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09<\x0a\x09\x09for(var i = 0; i < self.length; i++)\x0a\x09\x09\x09if(aBlock(self[i]))\x0a\x09\x09\x09\x09return self[i];\x0a\x09\x09return anotherBlock();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i]);};
;
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock(self[i]);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_do_separatedBy_",
smalltalk.method({
selector: "do:separatedBy:",
category: 'enumerating',
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
return self},
args: ["aBlock", "anotherBlock"],
source: "do: aBlock separatedBy: anotherBlock\x0a\x09| first |\x0a\x09first := true.\x0a\x09self do: [:each |\x0a\x09    first\x0a\x09\x09ifTrue: [first := false]\x0a\x09\x09ifFalse: [anotherBlock value].\x0a\x09    aBlock value: each]",
messageSends: ["do:", "ifTrue:ifFalse:", "value", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_errorNotFound",
smalltalk.method({
selector: "errorNotFound",
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self,"_error_",["Object is not in the collection"]);
return self},
args: [],
source: "errorNotFound\x0a\x09self error: 'Object is not in the collection'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_ifEmpty_",
smalltalk.method({
selector: "ifEmpty:",
category: 'testing',
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
},
args: ["aBlock"],
source: "ifEmpty: aBlock\x0a\x09\x22Evaluate the given block with the receiver as argument, answering its value if the receiver is empty, otherwise answer the receiver. Note that the fact that this method returns its argument in case the receiver is not empty allows one to write expressions like the following ones: self classifyMethodAs: \x0a\x09\x09(myProtocol ifEmpty: ['As yet unclassified'])\x22\x0a\x09^ self isEmpty \x0a\x09\x09ifTrue: [ aBlock value ]\x0a\x09\x09ifFalse: [ self ]",
messageSends: ["ifTrue:ifFalse:", "value", "isEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_ifNotEmpty_",
smalltalk.method({
selector: "ifNotEmpty:",
category: 'testing',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_notEmpty",[]);
smalltalk.send($1,"_ifTrue_",[aBlock]);
return self},
args: ["aBlock"],
source: "ifNotEmpty: aBlock\x0a\x09self notEmpty ifTrue: aBlock.",
messageSends: ["ifTrue:", "notEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
category: 'testing',
fn: function (anObject){
var self=this;

		var i = self.length;
		while (i--) {
			if (smalltalk.send(self[i], "__eq", [anObject])) {return true;}	
		}
		return false
	;
;
return self},
args: ["anObject"],
source: "includes: anObject\x0a\x09<\x0a\x09\x09var i = self.length;\x0a\x09\x09while (i--) {\x0a\x09\x09\x09if (smalltalk.send(self[i], \x22__eq\x22, [anObject])) {return true;}\x09\x0a\x09\x09}\x0a\x09\x09return false\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_inject_into_",
smalltalk.method({
selector: "inject:into:",
category: 'enumerating',
fn: function (anObject,aBlock){
var self=this;
var result;
result=anObject;
smalltalk.send(self,"_do_",[(function(each){
result=smalltalk.send(aBlock,"_value_value_",[result,each]);
return result;
})]);
return result;
},
args: ["anObject", "aBlock"],
source: "inject: anObject into: aBlock\x0a\x09| result |\x0a\x09result := anObject.\x0a\x09self do: [:each | \x0a\x09    result := aBlock value: result value: each].\x0a\x09^result",
messageSends: ["do:", "value:value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_isEmpty",
smalltalk.method({
selector: "isEmpty",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_size",[]),"__eq",[(0)]);
return $1;
},
args: [],
source: "isEmpty\x0a\x09^self size = 0",
messageSends: ["=", "size"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_notEmpty",
smalltalk.method({
selector: "notEmpty",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_isEmpty",[]),"_not",[]);
return $1;
},
args: [],
source: "notEmpty\x0a\x09^self isEmpty not",
messageSends: ["not", "isEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_occurrencesOf_",
smalltalk.method({
selector: "occurrencesOf:",
category: 'accessing',
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
},
args: ["anObject"],
source: "occurrencesOf: anObject \x0a\x09\x22Answer how many of the receiver's elements are equal to anObject.\x22\x0a\x0a\x09| tally |\x0a\x09tally := 0.\x0a\x09self do: [:each | anObject = each ifTrue: [tally := tally + 1]].\x0a\x09^tally",
messageSends: ["do:", "ifTrue:", "+", "="],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
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
},
args: [],
source: "printString\x0a\x09\x22print the contents of the Collection into a string and return it\x22\x0a\x09^String streamContents: [:aStream |\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: super printString, ' ('.\x0a\x09\x09self do: [:each | aStream nextPutAll: each printString]\x0a\x09\x09\x09separatedBy: [aStream nextPutAll: ' '].\x0a\x09\x09aStream nextPutAll: ')']",
messageSends: ["streamContents:", "nextPutAll:", ",", "printString", "do:separatedBy:"],
referencedClasses: ["String"]
}),
smalltalk.Collection);

smalltalk.addMethod(
"_readStream",
smalltalk.method({
selector: "readStream",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_stream",[]);
return $1;
},
args: [],
source: "readStream\x0a\x09^self stream",
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_reject_",
smalltalk.method({
selector: "reject:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_select_",[(function(each){
return smalltalk.send(smalltalk.send(aBlock,"_value_",[each]),"__eq",[false]);
})]);
return $1;
},
args: ["aBlock"],
source: "reject: aBlock\x0a\x09^self select: [:each | (aBlock value: each) = false]",
messageSends: ["select:", "=", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self,"_remove_ifAbsent_",[anObject,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
},
args: ["anObject"],
source: "remove: anObject\x0a    ^self remove: anObject ifAbsent: [self errorNotFound]",
messageSends: ["remove:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a    self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
category: 'enumerating',
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
},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [:each |\x0a\x09    (aBlock value: each) ifTrue: [\x0a\x09\x09stream nextPut: each]].\x0a\x09^stream contents",
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "nextPut:", "value:", "contents"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: [],
source: "size\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_streamClass",[]),"_on_",[self]);
return $1;
},
args: [],
source: "stream\x0a\x09^self streamClass on: self",
messageSends: ["on:", "streamClass"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_streamClass",[]);
return $1;
},
args: [],
source: "streamClass\x0a\x09^self class streamClass",
messageSends: ["streamClass", "class"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_writeStream",
smalltalk.method({
selector: "writeStream",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_stream",[]);
return $1;
},
args: [],
source: "writeStream\x0a\x09^self stream",
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.Collection);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
var $1;
$1=smalltalk.send(self,"_new",[]);
return $1;
},
args: ["anInteger"],
source: "new: anInteger\x0a\x09^self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
category: 'accessing',
fn: function (){
var self=this;
return (smalltalk.Stream || Stream);
},
args: [],
source: "streamClass\x0a\x09    ^Stream",
messageSends: [],
referencedClasses: ["Stream"]
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
category: 'instance creation',
fn: function (anObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_add_",[anObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anObject"],
source: "with: anObject\x0a\x09    ^self new\x0a\x09\x09add: anObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
category: 'instance creation',
fn: function (anObject,anotherObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_add_",[anObject]);
smalltalk.send($2,"_add_",[anotherObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anObject", "anotherObject"],
source: "with: anObject with: anotherObject\x0a\x09    ^self new\x0a\x09\x09add: anObject;\x0a\x09\x09add: anotherObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_with_with_",
smalltalk.method({
selector: "with:with:with:",
category: 'instance creation',
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
},
args: ["firstObject", "secondObject", "thirdObject"],
source: "with: firstObject with: secondObject with: thirdObject\x0a\x09    ^self new\x0a\x09\x09add: firstObject;\x0a\x09\x09add: secondObject;\x0a\x09\x09add: thirdObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_withAll_",
smalltalk.method({
selector: "withAll:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_addAll_",[aCollection]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09    ^self new\x0a\x09\x09addAll: aCollection;\x0a\x09\x09yourself",
messageSends: ["addAll:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);


smalltalk.addClass('HashedCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.HashedCollection.comment="A HashedCollection is a traditional JavaScript object, or a Smalltalk Dictionary.\x0a\x0aUnlike a Dictionary, it can only have strings as keys."
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aCollection){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self},
args: ["aCollection"],
source: ", aCollection\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
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
},
args: ["aHashedCollection"],
source: "= aHashedCollection\x0a\x09self class = aHashedCollection class ifFalse: [^false].\x0a\x09self size = aHashedCollection size ifFalse: [^false].\x0a\x09^self associations = aHashedCollection associations",
messageSends: ["ifFalse:", "=", "class", "size", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anAssociation){
var self=this;
smalltalk.send(self,"_at_put_",[smalltalk.send(anAssociation,"_key",[]),smalltalk.send(anAssociation,"_value",[])]);
return self},
args: ["anAssociation"],
source: "add: anAssociation\x0a\x09self at: anAssociation key put: anAssociation value",
messageSends: ["at:put:", "key", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
category: 'adding/removing',
fn: function (aHashedCollection){
var self=this;
smalltalk.send(self,"_addAll_",[smalltalk.send(aHashedCollection,"_associations",[])],smalltalk.Collection);
return aHashedCollection;
},
args: ["aHashedCollection"],
source: "addAll: aHashedCollection\x0a\x09super addAll: aHashedCollection associations.\x0a\x09^aHashedCollection",
messageSends: ["addAll:", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asDictionary",
smalltalk.method({
selector: "asDictionary",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Dictionary || Dictionary),"_fromPairs_",[smalltalk.send(self,"_associations",[])]);
return $1;
},
args: [],
source: "asDictionary\x0a\x09^Dictionary fromPairs: self associations",
messageSends: ["fromPairs:", "associations"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
var c;
c=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_keysAndValuesDo_",[(function(key,value){
return smalltalk.send(c,"_at_put_",[key,smalltalk.send(value,"_asJSON",[])]);
})]);
return c;
},
args: [],
source: "asJSON\x0a\x09| c |\x0a\x09c := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09c at: key put: value asJSON].\x0a\x09^c",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "asJSON"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_associations",
smalltalk.method({
selector: "associations",
category: 'accessing',
fn: function (){
var self=this;
var associations;
associations=[];
smalltalk.send(smalltalk.send(self,"_keys",[]),"_do_",[(function(each){
return smalltalk.send(associations,"_add_",[smalltalk.send((smalltalk.Association || Association),"_key_value_",[each,smalltalk.send(self,"_at_",[each])])]);
})]);
return associations;
},
args: [],
source: "associations\x0a\x09| associations |\x0a\x09associations := #().\x0a\x09self keys do: [:each |\x0a\x09    associations add: (Association key: each value: (self at: each))].\x0a\x09^associations",
messageSends: ["do:", "add:", "key:value:", "at:", "keys"],
referencedClasses: ["Association"]
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_associationsDo_",
smalltalk.method({
selector: "associationsDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_associations",[]),"_do_",[aBlock]);
return self},
args: ["aBlock"],
source: "associationsDo: aBlock\x0a\x09self associations do: aBlock",
messageSends: ["do:", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aKey){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_ifAbsent_",[aKey,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
},
args: ["aKey"],
source: "at: aKey\x0a\x09^self at: aKey ifAbsent: [self errorNotFound]",
messageSends: ["at:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_includesKey_",[aKey]);
$1=smalltalk.send($2,"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(self,"_basicAt_",[aKey]);
}),aBlock]);
return $1;
},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09^(self includesKey: aKey)\x0a\x09\x09ifTrue: [self basicAt: aKey]\x0a\x09\x09ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:", "basicAt:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifAbsentPut_",
smalltalk.method({
selector: "at:ifAbsentPut:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_ifAbsent_",[aKey,(function(){
return smalltalk.send(self,"_at_put_",[aKey,smalltalk.send(aBlock,"_value",[])]);
})]);
return $1;
},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsentPut: aBlock\x0a\x09^self at: aKey ifAbsent: [\x0a\x09    self at: aKey put: aBlock value]",
messageSends: ["at:ifAbsent:", "at:put:", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifPresent_",
smalltalk.method({
selector: "at:ifPresent:",
category: 'accessing',
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
},
args: ["aKey", "aBlock"],
source: "at: aKey ifPresent: aBlock\x0a\x09\x22Lookup the given key in the receiver. \x0a\x09If it is present, answer the value of evaluating the given block with the value associated with the key. \x0a\x09Otherwise, answer nil.\x22\x0a\x09^(self includesKey: aKey)\x0a\x09\x09ifTrue: [ aBlock value: (self at: aKey) ]\x0a\x09\x09ifFalse: [ nil ]",
messageSends: ["ifTrue:ifFalse:", "value:", "at:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifPresent_ifAbsent_",
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
category: 'accessing',
fn: function (aKey,aBlock,anotherBlock){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_includesKey_",[aKey]);
$1=smalltalk.send($2,"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(aBlock,"_value_",[smalltalk.send(self,"_at_",[aKey])]);
}),anotherBlock]);
return $1;
},
args: ["aKey", "aBlock", "anotherBlock"],
source: "at: aKey ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Lookup the given key in the receiver. \x0a\x09If it is present, answer the value of evaluating the oneArgBlock with the value associated with the key, \x0a\x09otherwise answer the value of absentBlock.\x22\x0a\x09^(self includesKey: aKey)\x0a\x09\x09ifTrue: [ aBlock value: (self at: aKey) ]\x0a\x09\x09ifFalse: anotherBlock",
messageSends: ["ifTrue:ifFalse:", "value:", "at:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (aKey,aValue){
var self=this;
var $1;
$1=smalltalk.send(self,"_basicAt_put_",[aKey,aValue]);
return $1;
},
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09^self basicAt: aKey put: aValue",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict;
newDict=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_keysAndValuesDo_",[(function(key,value){
return smalltalk.send(newDict,"_at_put_",[key,smalltalk.send(aBlock,"_value_",[value])]);
})]);
return newDict;
},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09    newDict at: key put: (aBlock value: value)].\x0a\x09^newDict",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "value:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
var copy;
copy=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_associationsDo_",[(function(each){
return smalltalk.send(copy,"_at_put_",[smalltalk.send(each,"_key",[]),smalltalk.send(smalltalk.send(each,"_value",[]),"_deepCopy",[])]);
})]);
return copy;
},
args: [],
source: "deepCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self associationsDo: [:each |\x0a\x09    copy at: each key  put: each value deepCopy].\x0a\x09^copy",
messageSends: ["new", "class", "associationsDo:", "at:put:", "key", "deepCopy", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_values",[]),"_detect_ifNone_",[aBlock,anotherBlock]);
return $1;
},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09^self values detect: aBlock ifNone: anotherBlock",
messageSends: ["detect:ifNone:", "values"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_values",[]),"_do_",[aBlock]);
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09self values do: aBlock",
messageSends: ["do:", "values"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
category: 'enumerating',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_values",[]),"_includes_",[anObject]);
return $1;
},
args: ["anObject"],
source: "includes: anObject\x0a\x09^self values includes: anObject",
messageSends: ["includes:", "values"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_includesKey_",
smalltalk.method({
selector: "includesKey:",
category: 'testing',
fn: function (aKey){
var self=this;
return self.hasOwnProperty(aKey);
;
return self},
args: ["aKey"],
source: "includesKey: aKey\x0a\x09<return self.hasOwnProperty(aKey)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_keys",
smalltalk.method({
selector: "keys",
category: 'accessing',
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
return self},
args: [],
source: "keys\x0a\x09<\x0a\x09\x09if ('function'===typeof Object.keys) return Object.keys(self);\x0a\x09\x09var keys = [];\x0a\x09\x09for(var i in self) {\x0a\x09\x09\x09if(self.hasOwnProperty(i)) {\x0a\x09\x09\x09\x09keys.push(i);\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x09\x09return keys;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_keysAndValuesDo_",
smalltalk.method({
selector: "keysAndValuesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(self,"_associationsDo_",[(function(each){
return smalltalk.send(aBlock,"_value_value_",[smalltalk.send(each,"_key",[]),smalltalk.send(each,"_value",[])]);
})]);
return self},
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09self associationsDo: [:each |\x0a\x09    aBlock value: each key value: each value]",
messageSends: ["associationsDo:", "value:value:", "key", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
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
},
args: [],
source: "printString\x0a\x09\x22print the contents of the HashedCollection into a string and return the string\x22\x0a\x09^String streamContents: [:aStream |\x0a\x09\x09aStream nextPutAll: 'a ', self class name, '('.\x0a\x09\x09self associations\x0a\x09\x09\x09do: [:each | each storeOn: aStream]\x0a\x09\x09\x09separatedBy: [ aStream nextPutAll: ' , '].\x0a\x09\x09aStream nextPutAll: ')']",
messageSends: ["streamContents:", "nextPutAll:", ",", "name", "class", "do:separatedBy:", "storeOn:", "associations"],
referencedClasses: ["String"]
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_removeKey_ifAbsent_",[aKey,aBlock]);
return $1;
},
args: ["aKey", "aBlock"],
source: "remove: aKey ifAbsent: aBlock\x0a    ^self removeKey: aKey ifAbsent: aBlock",
messageSends: ["removeKey:ifAbsent:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_removeKey_",
smalltalk.method({
selector: "removeKey:",
category: 'adding/removing',
fn: function (aKey){
var self=this;
var $1;
$1=smalltalk.send(self,"_remove_",[aKey]);
return $1;
},
args: ["aKey"],
source: "removeKey: aKey\x0a    ^self remove: aKey",
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_removeKey_ifAbsent_",
smalltalk.method({
selector: "removeKey:ifAbsent:",
category: 'adding/removing',
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
},
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09^(self includesKey: aKey) \x0a\x09\x09ifFalse: [aBlock value]\x0a\x09\x09ifTrue: [self basicDelete: aKey]",
messageSends: ["ifFalse:ifTrue:", "value", "basicDelete:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
category: 'enumerating',
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
},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09    (aBlock value: value) ifTrue: [newDict at: key put: value]].\x0a\x09^newDict",
messageSends: ["new", "class", "keysAndValuesDo:", "ifTrue:", "at:put:", "value:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
var copy;
copy=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_associationsDo_",[(function(each){
return smalltalk.send(copy,"_at_put_",[smalltalk.send(each,"_key",[]),smalltalk.send(each,"_value",[])]);
})]);
return copy;
},
args: [],
source: "shallowCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self associationsDo: [:each |\x0a\x09    copy at: each key  put: each value].\x0a\x09^copy",
messageSends: ["new", "class", "associationsDo:", "at:put:", "key", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_keys",[]),"_size",[]);
return $1;
},
args: [],
source: "size\x0a\x09^self keys size",
messageSends: ["size", "keys"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
category: 'printing',
fn: function (aStream){
var self=this;
smalltalk.send(aStream,"_nextPutAll_",["#{"]);
smalltalk.send(smalltalk.send(self,"_associations",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(each,"_storeOn_",[aStream]);
}),(function(){
return smalltalk.send(aStream,"_nextPutAll_",[". "]);
})]);
smalltalk.send(aStream,"_nextPutAll_",["}"]);
return self},
args: ["aStream"],
source: "storeOn: aStream\x0a\x09aStream nextPutAll: '#{'.\x0a\x09self associations\x0a\x09\x09do: [:each | each storeOn: aStream]\x0a\x09\x09separatedBy: [ aStream nextPutAll: '. '].\x0a\x09aStream nextPutAll: '}'",
messageSends: ["nextPutAll:", "do:separatedBy:", "storeOn:", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_values",
smalltalk.method({
selector: "values",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_keys",[]),"_collect_",[(function(each){
return smalltalk.send(self,"_at_",[each]);
})]);
return $1;
},
args: [],
source: "values\x0a\x09^self keys collect: [:each | self at: each]",
messageSends: ["collect:", "at:", "keys"],
referencedClasses: []
}),
smalltalk.HashedCollection);


smalltalk.addMethod(
"_fromPairs_",
smalltalk.method({
selector: "fromPairs:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
var dict;
dict=smalltalk.send(self,"_new",[]);
smalltalk.send(aCollection,"_do_",[(function(each){
return smalltalk.send(dict,"_add_",[each]);
})]);
return dict;
},
args: ["aCollection"],
source: "fromPairs: aCollection\x0a\x09| dict |\x0a\x09dict := self new.\x0a\x09aCollection do: [:each | dict add: each].\x0a\x09^dict",
messageSends: ["new", "do:", "add:"],
referencedClasses: []
}),
smalltalk.HashedCollection.klass);


smalltalk.addClass('Dictionary', smalltalk.HashedCollection, ['keys', 'values'], 'Kernel-Collections');
smalltalk.addMethod(
"_asHashedCollection",
smalltalk.method({
selector: "asHashedCollection",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.HashedCollection || HashedCollection),"_fromPairs_",[smalltalk.send(self,"_associations",[])]);
return $1;
},
args: [],
source: "asHashedCollection\x0a\x09^HashedCollection fromPairs: self associations",
messageSends: ["fromPairs:", "associations"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asHashedCollection",[]),"_asJSON",[]);
return $1;
},
args: [],
source: "asJSON\x0a\x09^self asHashedCollection asJSON",
messageSends: ["asJSON", "asHashedCollection"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
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
return self},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09<\x0a\x09\x09var index;\x0a\x09\x09for(var i=0;i<self['@keys'].length;i++){\x0a\x09\x09\x09if(self['@keys'][i].__eq(aKey)) {index = i;}\x0a\x09\x09};\x0a\x09\x09if(typeof index === 'undefined') {\x0a\x09\x09\x09return aBlock();\x0a\x09\x09} else {\x0a\x09\x09\x09return self['@values'][index];\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
category: 'accessing',
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
return self},
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09<\x0a\x09\x09var index = self['@keys'].indexOf(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09self['@values'].push(aValue);\x0a\x09\x09\x09self['@keys'].push(aKey);\x0a\x09\x09} else {\x0a\x09\x09\x09self['@values'][index] = aValue;\x0a\x09\x09};\x0a\x0a\x09\x09return aValue;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_includesKey_",
smalltalk.method({
selector: "includesKey:",
category: 'testing',
fn: function (aKey){
var self=this;
var $1;
$1=smalltalk.send(self["@keys"],"_includes_",[aKey]);
return $1;
},
args: ["aKey"],
source: "includesKey: aKey\x0a\x09^keys includes: aKey",
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.HashedCollection);
self["@keys"]=[];
self["@values"]=[];
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09keys := #().\x0a\x09values := #()",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_keys",
smalltalk.method({
selector: "keys",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@keys"],"_copy",[]);
return $1;
},
args: [],
source: "keys\x0a\x09^keys copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_removeKey_ifAbsent_",
smalltalk.method({
selector: "removeKey:ifAbsent:",
category: 'adding/removing',
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
return self},
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a    <\x0a            var index = self['@keys'].indexOf(aKey);\x0a            if(index === -1) {\x0a                return aBlock()\x0a            } else {\x0a                var value;\x0a                self['@keys'].splice(index, 1);\x0a                value = self['@values'].splice(index, 1);\x0a                return value[0];\x0a            };\x0a    >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_values",
smalltalk.method({
selector: "values",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@values"],"_copy",[]);
return $1;
},
args: [],
source: "values\x0a\x09^values copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Dictionary);



smalltalk.addClass('SequenceableCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
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
},
args: ["aCollection"],
source: "= aCollection\x0a\x09(self class = aCollection class and: [\x0a\x09\x09self size = aCollection size]) ifFalse: [^false].\x0a\x09self withIndexDo: [:each :i |\x0a                 (aCollection at: i) = each ifFalse: [^false]].\x0a\x09^true",
messageSends: ["ifFalse:", "and:", "=", "size", "class", "withIndexDo:", "at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_addLast_",
smalltalk.method({
selector: "addLast:",
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self,"_add_",[anObject]);
return self},
args: ["anObject"],
source: "addLast: anObject\x0a\x09self add: anObject",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_allButFirst",
smalltalk.method({
selector: "allButFirst",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_copyFrom_to_",[(2),smalltalk.send(self,"_size",[])]);
return $1;
},
args: [],
source: "allButFirst\x0a\x09^self copyFrom: 2 to: self size",
messageSends: ["copyFrom:to:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_allButLast",
smalltalk.method({
selector: "allButLast",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_copyFrom_to_",[(1),smalltalk.send(smalltalk.send(self,"_size",[]),"__minus",[(1)])]);
return $1;
},
args: [],
source: "allButLast\x0a\x09^self copyFrom: 1 to: self size - 1",
messageSends: ["copyFrom:to:", "-", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (anIndex){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_ifAbsent_",[anIndex,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
},
args: ["anIndex"],
source: "at: anIndex\x0a\x09^self at: anIndex ifAbsent: [\x0a\x09    self errorNotFound]",
messageSends: ["at:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (anIndex,anObject){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[smalltalk.send(smalltalk.send(self,"_size",[]),"_atRandom",[])]);
return $1;
},
args: [],
source: "atRandom\x0a\x09^ self at: self size atRandom",
messageSends: ["at:", "atRandom", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
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
},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09| range newCollection |\x0a\x09range := anIndex to: anotherIndex.\x0a\x09newCollection := self class new: range size.\x0a\x09range withIndexDo: [:each :i |\x0a\x09    newCollection at: i put: (self at: each)].\x0a\x09^newCollection",
messageSends: ["to:", "new:", "size", "class", "withIndexDo:", "at:put:", "at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
var newCollection;
newCollection=smalltalk.send(smalltalk.send(self,"_class",[]),"_new_",[smalltalk.send(self,"_size",[])]);
smalltalk.send(self,"_withIndexDo_",[(function(each,index){
return smalltalk.send(newCollection,"_at_put_",[index,smalltalk.send(each,"_deepCopy",[])]);
})]);
return newCollection;
},
args: [],
source: "deepCopy\x0a\x09| newCollection |\x0a\x09newCollection := self class new: self size.\x0a\x09self withIndexDo: [:each :index | \x0a\x09\x09newCollection at: index put: each deepCopy].\x0a\x09^newCollection",
messageSends: ["new:", "size", "class", "withIndexDo:", "at:put:", "deepCopy"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_first",
smalltalk.method({
selector: "first",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[(1)]);
return $1;
},
args: [],
source: "first\x0a\x09^self at: 1",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_first_",
smalltalk.method({
selector: "first:",
category: 'accessing',
fn: function (n){
var self=this;
var $1;
$1=smalltalk.send(self,"_copyFrom_to_",[(1),n]);
return $1;
},
args: ["n"],
source: "first: n\x0a\x09\x22Answer the first n elements of the receiver.\x0a\x09Raise an error if there are not enough elements.\x22\x0a\x0a\x09^ self copyFrom: 1 to: n",
messageSends: ["copyFrom:to:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_fourth",
smalltalk.method({
selector: "fourth",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[(4)]);
return $1;
},
args: [],
source: "fourth\x0a\x09^self at: 4",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_",
smalltalk.method({
selector: "indexOf:",
category: 'accessing',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self,"_indexOf_ifAbsent_",[anObject,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
},
args: ["anObject"],
source: "indexOf: anObject\x0a\x09^self indexOf: anObject ifAbsent: [self errorNotFound]",
messageSends: ["indexOf:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_ifAbsent_",
smalltalk.method({
selector: "indexOf:ifAbsent:",
category: 'accessing',
fn: function (anObject,aBlock){
var self=this;

		for(var i=0;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
;
return self},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09<\x0a\x09\x09for(var i=0;i<self.length;i++){\x0a\x09\x09\x09if(self[i].__eq(anObject)) {return i+1}\x0a\x09\x09}\x0a\x09\x09return aBlock();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_startingAt_",
smalltalk.method({
selector: "indexOf:startingAt:",
category: 'accessing',
fn: function (anObject,start){
var self=this;
var $1;
$1=smalltalk.send(self,"_indexOf_startingAt_ifAbsent_",[anObject,start,(function(){
return (0);
})]);
return $1;
},
args: ["anObject", "start"],
source: "indexOf: anObject startingAt: start\x0a\x09\x22Answer the index of the first occurence of anElement after start\x0a\x09within the receiver. If the receiver does not contain anElement, \x0a\x09answer 0.\x22\x0a\x09^self indexOf: anObject startingAt: start ifAbsent: [0]",
messageSends: ["indexOf:startingAt:ifAbsent:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_startingAt_ifAbsent_",
smalltalk.method({
selector: "indexOf:startingAt:ifAbsent:",
category: 'accessing',
fn: function (anObject,start,aBlock){
var self=this;

		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
;
return self},
args: ["anObject", "start", "aBlock"],
source: "indexOf: anObject startingAt: start ifAbsent: aBlock\x0a\x09<\x0a\x09\x09for(var i=start-1;i<self.length;i++){\x0a\x09\x09\x09if(self[i].__eq(anObject)) {return i+1}\x0a\x09\x09}\x0a\x09\x09return aBlock();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_last",
smalltalk.method({
selector: "last",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[smalltalk.send(self,"_size",[])]);
return $1;
},
args: [],
source: "last\x0a\x09^self at: self size",
messageSends: ["at:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_removeLast",
smalltalk.method({
selector: "removeLast",
category: 'adding',
fn: function (){
var self=this;
smalltalk.send(self,"_remove_",[smalltalk.send(self,"_last",[])]);
return self},
args: [],
source: "removeLast\x0a\x09self remove: self last",
messageSends: ["remove:", "last"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
category: 'converting',
fn: function (){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: [],
source: "reversed\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_second",
smalltalk.method({
selector: "second",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[(2)]);
return $1;
},
args: [],
source: "second\x0a\x09^self at: 2",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
var newCollection;
newCollection=smalltalk.send(smalltalk.send(self,"_class",[]),"_new_",[smalltalk.send(self,"_size",[])]);
smalltalk.send(self,"_withIndexDo_",[(function(each,index){
return smalltalk.send(newCollection,"_at_put_",[index,each]);
})]);
return newCollection;
},
args: [],
source: "shallowCopy\x0a\x09| newCollection |\x0a\x09newCollection := self class new: self size.\x0a\x09self withIndexDo: [ :each :index | \x0a\x09\x09newCollection at: index put: each].\x0a\x09^newCollection",
messageSends: ["new:", "size", "class", "withIndexDo:", "at:put:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_third",
smalltalk.method({
selector: "third",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[(3)]);
return $1;
},
args: [],
source: "third\x0a\x09^self at: 3",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i], i+1);};
;
return self},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock(self[i], i+1);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);



smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
self.push(anObject); return anObject;;
;
return self},
args: ["anObject"],
source: "add: anObject\x0a\x09<self.push(anObject); return anObject;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("[","__comma",[smalltalk.send(smalltalk.send(self,"_collect_",[(function(each){
return smalltalk.send(each,"_asJavascript",[]);
})]),"_join_",[", "])]),"__comma",["]"]);
return $1;
},
args: [],
source: "asJavascript\x0a\x09^'[', ((self collect: [:each | each asJavascript]) join: ', '),  ']'",
messageSends: [",", "join:", "collect:", "asJavascript"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;

		if((anIndex < 1) || (self.length < anIndex)) {return aBlock()};
		return self[anIndex - 1];
	;
;
return self},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<\x0a\x09\x09if((anIndex < 1) || (self.length < anIndex)) {return aBlock()};\x0a\x09\x09return self[anIndex - 1];\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (anIndex,anObject){
var self=this;
return self[anIndex - 1] = anObject;
;
return self},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09<return self[anIndex - 1] = anObject>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
category: 'enumerating',
fn: function (aString){
var self=this;
return self.join(aString);
;
return self},
args: ["aString"],
source: "join: aString\x0a\x09<return self.join(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'adding/removing',
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
return self},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09<\x0a\x09\x09for(var i=0;i<self.length;i++) {\x0a\x09\x09\x09if(self[i] == anObject) {\x0a\x09\x09\x09\x09self.splice(i,1);\x0a\x09\x09\x09\x09return self;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09>.\x0a\x09aBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_removeFrom_to_",
smalltalk.method({
selector: "removeFrom:to:",
category: 'adding/removing',
fn: function (aNumber,anotherNumber){
var self=this;
self.splice(aNumber - 1,anotherNumber - 1);
;
return self},
args: ["aNumber", "anotherNumber"],
source: "removeFrom: aNumber to: anotherNumber\x0a\x09<self.splice(aNumber - 1,anotherNumber - 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
category: 'converting',
fn: function (){
var self=this;
return self._copy().reverse();
;
return self},
args: [],
source: "reversed\x0a\x09<return self._copy().reverse()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return self.length;
;
return self},
args: [],
source: "size\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_sort",
smalltalk.method({
selector: "sort",
category: 'enumerating',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_basicPerform_",["sort"]);
return $1;
},
args: [],
source: "sort\x0a    ^self basicPerform: 'sort'",
messageSends: ["basicPerform:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_sort_",
smalltalk.method({
selector: "sort:",
category: 'enumerating',
fn: function (aBlock){
var self=this;

		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
;
return self},
args: ["aBlock"],
source: "sort: aBlock\x0a\x09<\x0a\x09\x09return self.sort(function(a, b) {\x0a\x09\x09\x09if(aBlock(a,b)) {return -1} else {return 1}\x0a\x09\x09})\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_sorted",
smalltalk.method({
selector: "sorted",
category: 'enumerating',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_copy",[]),"_sort",[]);
return $1;
},
args: [],
source: "sorted\x0a\x09^self copy sort",
messageSends: ["sort", "copy"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_sorted_",
smalltalk.method({
selector: "sorted:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_copy",[]),"_sort_",[aBlock]);
return $1;
},
args: ["aBlock"],
source: "sorted: aBlock\x0a\x09^self copy sort: aBlock",
messageSends: ["sort:", "copy"],
referencedClasses: []
}),
smalltalk.Array);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
return new Array(anInteger);
;
return self},
args: ["anInteger"],
source: "new: anInteger\x0a\x09<return new Array(anInteger)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
category: 'instance creation',
fn: function (anObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new_",[(1)]);
smalltalk.send($2,"_at_put_",[(1),anObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anObject"],
source: "with: anObject\x0a\x09    ^(self new: 1)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
category: 'instance creation',
fn: function (anObject,anObject2){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new_",[(2)]);
smalltalk.send($2,"_at_put_",[(1),anObject]);
smalltalk.send($2,"_at_put_",[(2),anObject2]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anObject", "anObject2"],
source: "with: anObject with: anObject2\x0a\x09    ^(self new: 2)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_with_with_",
smalltalk.method({
selector: "with:with:with:",
category: 'instance creation',
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
},
args: ["anObject", "anObject2", "anObject3"],
source: "with: anObject with: anObject2 with: anObject3\x0a\x09    ^(self new: 3)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09at: 3 put: anObject3;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_withAll_",
smalltalk.method({
selector: "withAll:",
category: 'instance creation',
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
},
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09| instance index |\x0a\x09index := 1.\x0a\x09instance := self new: aCollection size.\x0a\x09aCollection do: [:each  |\x0a\x09\x09instance at: index put: each.\x0a\x09\x09index := index + 1].\x0a\x09^instance",
messageSends: ["new:", "size", "do:", "at:put:", "+"],
referencedClasses: []
}),
smalltalk.Array.klass);


smalltalk.addClass('CharacterArray', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__comma",[smalltalk.send(aString,"_asString",[])]);
return $1;
},
args: ["aString"],
source: ", aString\x0a\x09^self asString, aString asString",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self,"_errorReadOnly",[]);
return self},
args: ["anObject"],
source: "add: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_fromString_",[smalltalk.send(smalltalk.send(self,"_asString",[]),"_asLowercase",[])]);
return $1;
},
args: [],
source: "asLowercase\x0a\x09^self class fromString: self asString asLowercase",
messageSends: ["fromString:", "asLowercase", "asString", "class"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_asNumber",[]);
return $1;
},
args: [],
source: "asNumber\x0a\x09^self asString asNumber",
messageSends: ["asNumber", "asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassResponsibility",[]);
return $1;
},
args: [],
source: "asString\x0a\x09^self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassResponsibility",[]);
return $1;
},
args: [],
source: "asSymbol\x0a\x09^self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_fromString_",[smalltalk.send(smalltalk.send(self,"_asString",[]),"_asUppercase",[])]);
return $1;
},
args: [],
source: "asUppercase\x0a\x09^self class fromString: self asString asUppercase",
messageSends: ["fromString:", "asUppercase", "asString", "class"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (anIndex,anObject){
var self=this;
smalltalk.send(self,"_errorReadOnly",[]);
return self},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_errorReadOnly",
smalltalk.method({
selector: "errorReadOnly",
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self,"_error_",["Object is read-only"]);
return self},
args: [],
source: "errorReadOnly\x0a\x09self error: 'Object is read-only'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_printString",[]);
return $1;
},
args: [],
source: "printString\x0a\x09^self asString printString",
messageSends: ["printString", "asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self,"_errorReadOnly",[]);
return self},
args: ["anObject"],
source: "remove: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.CharacterArray);


smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: ["aString"],
source: "fromString: aString\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CharacterArray.klass);


smalltalk.addClass('String', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aString){
var self=this;
return self + aString;
;
return self},
args: ["aString"],
source: ", aString\x0a\x09<return self + aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) < aString._asString();
;
return self},
args: ["aString"],
source: "< aString\x0a\x09<return String(self) < aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) <= aString._asString();
;
return self},
args: ["aString"],
source: "<= aString\x0a\x09<return String(self) <= aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aString,"_class",[]),"__eq",[smalltalk.send(self,"_class",[])]);
if(! smalltalk.assert($1)){
return false;
};
return String(self) === String(aString);
;
return self},
args: ["aString"],
source: "= aString\x0a\x09aString class = self class ifFalse: [^false].\x0a\x09<return String(self) === String(aString)>",
messageSends: ["ifFalse:", "=", "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"__eq",[aString]);
return $1;
},
args: ["aString"],
source: "== aString\x0a\x09^self = aString",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) > aString._asString();
;
return self},
args: ["aString"],
source: "> aString\x0a\x09<return String(self) >> aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) >= aString._asString();
;
return self},
args: ["aString"],
source: ">= aString\x0a\x09<return String(self) >>= aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asJSON\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asJavaScriptSelector",
smalltalk.method({
selector: "asJavaScriptSelector",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_asSelector",[]),"_replace_with_",["^_",""]),"_replace_with_",["_.*",""]);
return $1;
},
args: [],
source: "asJavaScriptSelector\x0a\x09^(self asSelector replace: '^_' with: '') replace: '_.*' with: ''.",
messageSends: ["replace:with:", "asSelector"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	;
;
return self},
args: [],
source: "asJavascript\x0a\x09<\x0a\x09\x09if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self.replace(/[\x5cx00-\x5cx1f\x22\x5c\x5c\x5cx7f-\x5cx9f]/g, function(ch){var c=ch.charCodeAt(0);return \x22\x5c\x5cx\x22+(\x220\x22+c.toString(16)).slice(-2)}) + \x22\x5c\x22\x22;\x0a\x09\x09else\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self + \x22\x5c\x22\x22;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
category: 'converting',
fn: function (){
var self=this;
return self.toLowerCase();
;
return self},
args: [],
source: "asLowercase\x0a\x09<return self.toLowerCase()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function (){
var self=this;
return Number(self);
;
return self},
args: [],
source: "asNumber\x0a\x09<return Number(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
category: 'converting',
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
},
args: [],
source: "asSelector\x0a\x09\x22If you change this method, change smalltalk.convertSelector too (see js/boot.js file)\x22\x0a\x0a\x09| selector |\x0a\x09selector := '_', self.\x0a\x09selector := selector replace: ':' with: '_'.\x0a\x09selector := selector replace: '[+]' with: '_plus'.\x0a\x09selector := selector replace: '-' with: '_minus'.\x0a\x09selector := selector replace: '[*]' with: '_star'.\x0a\x09selector := selector replace: '[/]' with: '_slash'.\x0a\x09selector := selector replace: '>' with: '_gt'.\x0a\x09selector := selector replace: '<' with: '_lt'.\x0a\x09selector := selector replace: '=' with: '_eq'.\x0a\x09selector := selector replace: ',' with: '_comma'.\x0a\x09selector := selector replace: '[@]' with: '_at'.\x0a\x09^selector",
messageSends: [",", "replace:with:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asString\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Symbol || Symbol),"_lookup_",[self]);
return $1;
},
args: [],
source: "asSymbol\x0a\x09^Symbol lookup: self",
messageSends: ["lookup:"],
referencedClasses: ["Symbol"]
}),
smalltalk.String);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
category: 'converting',
fn: function (){
var self=this;
return self.toUpperCase();
;
return self},
args: [],
source: "asUppercase\x0a\x09<return self.toUpperCase()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asciiValue",
smalltalk.method({
selector: "asciiValue",
category: 'accessing',
fn: function (){
var self=this;
return self.charCodeAt(0);;
;
return self},
args: [],
source: "asciiValue\x0a\x09<return self.charCodeAt(0);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return String(self).charAt(anIndex - 1) || aBlock();
;
return self},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<return String(self).charAt(anIndex - 1) || aBlock()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
return self.substring(anIndex - 1, anotherIndex);
;
return self},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09<return self.substring(anIndex - 1, anotherIndex)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_shallowCopy",[]);
return $1;
},
args: [],
source: "deepCopy\x0a\x09^self shallowCopy",
messageSends: ["shallowCopy"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self.charAt(i));};
;
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock(self.charAt(i));}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_escaped",
smalltalk.method({
selector: "escaped",
category: 'accessing',
fn: function (){
var self=this;
return escape(self);
;
return self},
args: [],
source: "escaped\x0a\x09<return escape(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_includesSubString_",
smalltalk.method({
selector: "includesSubString:",
category: 'testing',
fn: function (subString){
var self=this;
 return self.indexOf(subString) != -1 ;
;
return self},
args: ["subString"],
source: "includesSubString: subString\x0a\x09< return self.indexOf(subString) != -1 >",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isString\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
category: 'split join',
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
},
args: ["aCollection"],
source: "join: aCollection \x0a\x09^ String\x0a\x09\x09streamContents: [:stream | aCollection\x0a\x09\x09\x09\x09do: [:each | stream nextPutAll: each asString] \x0a\x09\x09\x09\x09separatedBy: [stream nextPutAll: self]]",
messageSends: ["streamContents:", "do:separatedBy:", "nextPutAll:", "asString"],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
"_lineIndicesDo_",
smalltalk.method({
selector: "lineIndicesDo:",
category: 'split join',
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
},
args: ["aBlock"],
source: "lineIndicesDo: aBlock\x0a\x09\x22execute aBlock with 3 arguments for each line:\x0a\x09- start index of line\x0a\x09- end index of line without line delimiter\x0a\x09- end index of line including line delimiter(s) CR, LF or CRLF\x22\x0a\x09\x0a\x09| cr lf start sz nextLF nextCR |\x0a\x09start := 1.\x0a\x09sz := self size.\x0a\x09cr := String cr.\x0a\x09nextCR := self indexOf: cr startingAt: 1.\x0a\x09lf := String lf.\x0a\x09nextLF := self indexOf: lf startingAt: 1.\x0a\x09[ start <= sz ] whileTrue: [\x0a\x09\x09(nextLF = 0 and: [ nextCR = 0 ])\x0a\x09\x09\x09ifTrue: [ \x22No more CR, nor LF, the string is over\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: sz value: sz.\x0a\x09\x09\x09\x09\x09^self ].\x0a\x09\x09(nextCR = 0 or: [ 0 < nextLF and: [ nextLF < nextCR ] ])\x0a\x09\x09\x09ifTrue: [ \x22Found a LF\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextLF - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09ifFalse: [ 1 + nextCR = nextLF\x0a\x09\x09\x09\x09ifTrue: [ \x22Found a CR-LF pair\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09\x09ifFalse: [ \x22Found a CR\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextCR.\x0a\x09\x09\x09\x09\x09start := 1 + nextCR.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start ]]]",
messageSends: ["size", "cr", "indexOf:startingAt:", "lf", "whileTrue:", "ifTrue:", "value:value:value:", "and:", "=", "ifTrue:ifFalse:", "-", "+", "or:", "<", "<="],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
"_lineNumber_",
smalltalk.method({
selector: "lineNumber:",
category: 'split join',
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
},
args: ["anIndex"],
source: "lineNumber: anIndex\x0a\x09\x22Answer a string containing the characters in the given line number.\x22\x0a\x0a\x09| lineCount |\x0a\x09lineCount := 0.\x0a\x09self lineIndicesDo: [:start :endWithoutDelimiters :end |\x0a\x09\x09(lineCount := lineCount + 1) = anIndex ifTrue: [^self copyFrom: start to: endWithoutDelimiters]].\x0a\x09^nil",
messageSends: ["lineIndicesDo:", "ifTrue:", "copyFrom:to:", "=", "+"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_lines",
smalltalk.method({
selector: "lines",
category: 'split join',
fn: function (){
var self=this;
var lines;
lines=smalltalk.send((smalltalk.Array || Array),"_new",[]);
smalltalk.send(self,"_linesDo_",[(function(aLine){
return smalltalk.send(lines,"_add_",[aLine]);
})]);
return lines;
},
args: [],
source: "lines\x0a\x09\x22Answer an array of lines composing this receiver without the line ending delimiters.\x22\x0a\x0a\x09| lines |\x0a\x09lines := Array new.\x0a\x09self linesDo: [:aLine | lines add: aLine].\x0a\x09^lines",
messageSends: ["new", "linesDo:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.String);

smalltalk.addMethod(
"_linesDo_",
smalltalk.method({
selector: "linesDo:",
category: 'split join',
fn: function (aBlock){
var self=this;
smalltalk.send(self,"_lineIndicesDo_",[(function(start,endWithoutDelimiters,end){
return smalltalk.send(aBlock,"_value_",[smalltalk.send(self,"_copyFrom_to_",[start,endWithoutDelimiters])]);
})]);
return self},
args: ["aBlock"],
source: "linesDo: aBlock\x0a\x09\x22Execute aBlock with each line in this string. The terminating line\x0a\x09delimiters CR, LF or CRLF pairs are not included in what is passed to aBlock\x22\x0a\x0a\x09self lineIndicesDo: [:start :endWithoutDelimiters :end |\x0a\x09\x09aBlock value: (self copyFrom: start to: endWithoutDelimiters)]",
messageSends: ["lineIndicesDo:", "value:", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_match_",
smalltalk.method({
selector: "match:",
category: 'regular expressions',
fn: function (aRegexp){
var self=this;
return self.search(aRegexp) != -1;
;
return self},
args: ["aRegexp"],
source: "match: aRegexp\x0a\x09<return self.search(aRegexp) != -1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_matchesOf_",
smalltalk.method({
selector: "matchesOf:",
category: 'regular expressions',
fn: function (aRegularExpression){
var self=this;
return self.match(aRegularExpression);
;
return self},
args: ["aRegularExpression"],
source: "matchesOf: aRegularExpression\x0a      <return self.match(aRegularExpression)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
category: 'printing',
fn: function (){
var self=this;
console.log(self);
;
return self},
args: [],
source: "printNl\x0a\x09<console.log(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("'","__comma",[self]),"__comma",["'"]);
return $1;
},
args: [],
source: "printString\x0a\x09^'''', self, ''''",
messageSends: [","],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
category: 'regular expressions',
fn: function (aString,anotherString){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[aString,"g"]),anotherString]);
return $1;
},
args: ["aString", "anotherString"],
source: "replace: aString with: anotherString\x0a\x09^self replaceRegexp: (RegularExpression fromString: aString flag: 'g') with: anotherString",
messageSends: ["replaceRegexp:with:", "fromString:flag:"],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
"_replaceRegexp_with_",
smalltalk.method({
selector: "replaceRegexp:with:",
category: 'regular expressions',
fn: function (aRegexp,aString){
var self=this;
return self.replace(aRegexp, aString);
;
return self},
args: ["aRegexp", "aString"],
source: "replaceRegexp: aRegexp with: aString\x0a\x09<return self.replace(aRegexp, aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
category: 'converting',
fn: function (){
var self=this;
return self.split("").reverse().join("");
;
return self},
args: [],
source: "reversed\x0a\x09<return self.split(\x22\x22).reverse().join(\x22\x22)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_fromString_",[self]);
return $1;
},
args: [],
source: "shallowCopy\x0a\x09^self class fromString: self",
messageSends: ["fromString:", "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return self.length;
;
return self},
args: [],
source: "size\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_tokenize_",
smalltalk.method({
selector: "tokenize:",
category: 'converting',
fn: function (aString){
var self=this;
return self.split(aString);
;
return self},
args: ["aString"],
source: "tokenize: aString\x0a\x09<return self.split(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_trimBoth",
smalltalk.method({
selector: "trimBoth",
category: 'regular expressions',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimBoth_",["\x5cs"]);
return $1;
},
args: [],
source: "trimBoth\x0a\x09^self trimBoth: '\x5cs'",
messageSends: ["trimBoth:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_trimBoth_",
smalltalk.method({
selector: "trimBoth:",
category: 'regular expressions',
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_trimLeft_",[separators]),"_trimRight_",[separators]);
return $1;
},
args: ["separators"],
source: "trimBoth: separators\x0a\x0a\x09^(self trimLeft: separators) trimRight: separators",
messageSends: ["trimRight:", "trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_trimLeft",
smalltalk.method({
selector: "trimLeft",
category: 'regular expressions',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimLeft_",["\x5cs"]);
return $1;
},
args: [],
source: "trimLeft\x0a\x09^self trimLeft: '\x5cs'",
messageSends: ["trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_trimLeft_",
smalltalk.method({
selector: "trimLeft:",
category: 'regular expressions',
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[smalltalk.send(smalltalk.send("^[","__comma",[separators]),"__comma",["]+"]),"g"]),""]);
return $1;
},
args: ["separators"],
source: "trimLeft: separators\x0a\x0a\x09^self replaceRegexp: (RegularExpression fromString: '^[', separators, ']+' flag: 'g') with: ''",
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
"_trimRight",
smalltalk.method({
selector: "trimRight",
category: 'regular expressions',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimRight_",["\x5cs"]);
return $1;
},
args: [],
source: "trimRight\x0a\x09^self trimRight: '\x5cs'",
messageSends: ["trimRight:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_trimRight_",
smalltalk.method({
selector: "trimRight:",
category: 'regular expressions',
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[smalltalk.send(smalltalk.send("[","__comma",[separators]),"__comma",["]+$"]),"g"]),""]);
return $1;
},
args: ["separators"],
source: "trimRight: separators\x0a\x0a\x09^self replaceRegexp: (RegularExpression fromString: '[', separators, ']+$' flag: 'g') with: ''",
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
"_unescaped",
smalltalk.method({
selector: "unescaped",
category: 'accessing',
fn: function (){
var self=this;
return unescape(self);
;
return self},
args: [],
source: "unescaped\x0a\x09<return unescape(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self.charAt(i), i+1);};
;
return self},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock(self.charAt(i), i+1);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);


smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
category: 'accessing',
fn: function (){
var self=this;
return '\r';
;
return self},
args: [],
source: "cr\x0a\x09<return '\x5cr'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
category: 'accessing',
fn: function (){
var self=this;
return '\r\n';
;
return self},
args: [],
source: "crlf\x0a\x09<return '\x5cr\x5cn'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
return new self.fn(aString);
;
return self},
args: ["aString"],
source: "fromString: aString\x0a\x09    <return new self.fn(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
category: 'accessing',
fn: function (){
var self=this;
return '\n';
;
return self},
args: [],
source: "lf\x0a\x09<return '\x5cn'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
category: 'accessing',
fn: function (){
var self=this;
return ' ';
;
return self},
args: [],
source: "space\x0a\x09<return ' '>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
category: 'accessing',
fn: function (){
var self=this;
return (smalltalk.StringStream || StringStream);
},
args: [],
source: "streamClass\x0a\x09    ^StringStream",
messageSends: [],
referencedClasses: ["StringStream"]
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_streamContents_",
smalltalk.method({
selector: "streamContents:",
category: 'instance creation',
fn: function (blockWithArg){
var self=this;
var $1;
var stream;
stream=smalltalk.send(smalltalk.send(self,"_streamClass",[]),"_on_",[smalltalk.send((smalltalk.String || String),"_new",[])]);
smalltalk.send(blockWithArg,"_value_",[stream]);
$1=smalltalk.send(stream,"_contents",[]);
return $1;
},
args: ["blockWithArg"],
source: "streamContents: blockWithArg\x0a\x09|stream|\x0a\x09stream := (self streamClass on: String new).\x0a\x09blockWithArg value: stream.\x0a\x09^ stream contents",
messageSends: ["on:", "new", "streamClass", "value:", "contents"],
referencedClasses: ["String"]
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_tab",
smalltalk.method({
selector: "tab",
category: 'accessing',
fn: function (){
var self=this;
return '\t';
;
return self},
args: [],
source: "tab\x0a\x09<return '\x5ct'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'instance creation',
fn: function (aUTFCharCode){
var self=this;
return String.fromCharCode(aUTFCharCode);;
;
return self},
args: ["aUTFCharCode"],
source: "value: aUTFCharCode\x0a\x0a\x09<return String.fromCharCode(aUTFCharCode);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);


smalltalk.addClass('Symbol', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__lt",[smalltalk.send(aSymbol,"_asString",[])]);
return $1;
},
args: ["aSymbol"],
source: "< aSymbol\x0a\x09^self asString < aSymbol asString",
messageSends: ["<", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__lt_eq",[smalltalk.send(aSymbol,"_asString",[])]);
return $1;
},
args: ["aSymbol"],
source: "<= aSymbol\x0a\x09^self asString <= aSymbol asString",
messageSends: ["<=", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aSymbol){
var self=this;
var $1,$2;
$1=smalltalk.send(smalltalk.send(aSymbol,"_class",[]),"__eq",[smalltalk.send(self,"_class",[])]);
if(! smalltalk.assert($1)){
return false;
};
$2=smalltalk.send(smalltalk.send(self,"_asString",[]),"__eq",[smalltalk.send(aSymbol,"_asString",[])]);
return $2;
},
args: ["aSymbol"],
source: "= aSymbol\x0a\x09aSymbol class = self class ifFalse: [^false].\x0a\x09^self asString = aSymbol asString",
messageSends: ["ifFalse:", "=", "class", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__gt",[smalltalk.send(aSymbol,"_asString",[])]);
return $1;
},
args: ["aSymbol"],
source: "> aSymbol\x0a\x09^self asString > aSymbol asString",
messageSends: [">", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__gt_eq",[smalltalk.send(aSymbol,"_asString",[])]);
return $1;
},
args: ["aSymbol"],
source: ">= aSymbol\x0a\x09^self asString >= aSymbol asString",
messageSends: [">=", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_asJSON",[]);
return $1;
},
args: [],
source: "asJSON\x0a\x09^self asString asJSON",
messageSends: ["asJSON", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("smalltalk.symbolFor(\x22","__comma",[smalltalk.send(self,"_asString",[])]),"__comma",["\x22)"]);
return $1;
},
args: [],
source: "asJavascript\x0a\x09^'smalltalk.symbolFor(\x22', self asString, '\x22)'",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_asSelector",[]);
return $1;
},
args: [],
source: "asSelector\x0a\x09^self asString asSelector",
messageSends: ["asSelector", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return self.value;
;
return self},
args: [],
source: "asString\x0a\x09<return self.value>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
category: 'converting',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asSymbol\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_at_ifAbsent_",[anIndex,aBlock]);
return $1;
},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09^self asString at: anIndex ifAbsent: aBlock",
messageSends: ["at:ifAbsent:", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_asString",[]),"_collect_",[aBlock]),"_asSymbol",[]);
return $1;
},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09^ (self asString collect: aBlock) asSymbol",
messageSends: ["asSymbol", "collect:", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_fromString_",[smalltalk.send(smalltalk.send(self,"_asString",[]),"_copyFrom_to_",[anIndex,anotherIndex])]);
return $1;
},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09^self class fromString: (self asString copyFrom: anIndex to: anotherIndex)",
messageSends: ["fromString:", "copyFrom:to:", "asString", "class"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
return self;
},
args: [],
source: "deepCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_detect_",
smalltalk.method({
selector: "detect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_detect_",[aBlock]);
return $1;
},
args: ["aBlock"],
source: "detect: aBlock\x0a\x09^ self asString detect: aBlock",
messageSends: ["detect:", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_asString",[]),"_do_",[aBlock]);
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09self asString do: aBlock",
messageSends: ["do:", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_isSymbol",
smalltalk.method({
selector: "isSymbol",
category: 'printing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSymbol\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send("#","__comma",[smalltalk.send(self,"_asString",[])]);
return $1;
},
args: [],
source: "printString\x0a\x09^'#', self asString",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_asString",[]),"_select_",[aBlock]),"_asSymbol",[]);
return $1;
},
args: ["aBlock"],
source: "select: aBlock\x0a\x09^ (self asString select: aBlock) asSymbol",
messageSends: ["asSymbol", "select:", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
return self;
},
args: [],
source: "shallowCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_size",[]);
return $1;
},
args: [],
source: "size\x0a\x09^self asString size",
messageSends: ["size", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_asString",[]),"_withIndexDo_",[aBlock]);
return self},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09self asString withIndexDo: aBlock",
messageSends: ["withIndexDo:", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);


smalltalk.addMethod(
"_basicNew",
smalltalk.method({
selector: "basicNew",
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self},
args: [],
source: "basicNew\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_lookup_",[aString]);
return $1;
},
args: ["aString"],
source: "fromString: aString\x0a\x09^self lookup: aString",
messageSends: ["lookup:"],
referencedClasses: []
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
"_lookup_",
smalltalk.method({
selector: "lookup:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.symbolFor(aString);;
;
return self},
args: ["aString"],
source: "lookup: aString\x0a\x09<return smalltalk.symbolFor(aString);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Symbol.klass);


smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"__eq",[smalltalk.send(aCollection,"_class",[])]),"_and_",[(function(){
return smalltalk.send(self["@elements"],"__eq",[smalltalk.send(aCollection,"_asArray",[])]);
})]);
return $1;
},
args: ["aCollection"],
source: "= aCollection\x0a\x09^self class = aCollection class and: [\x0a\x09\x09elements = aCollection asArray]",
messageSends: ["and:", "=", "asArray", "class"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'adding/removing',
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
return self},
args: ["anObject"],
source: "add: anObject\x0a\x09<\x0a\x09\x09var found;\x0a\x09\x09for(var i=0; i < self['@elements'].length; i++) {\x0a\x09\x09\x09if(anObject == self['@elements'][i]) {\x0a\x09\x09\x09\x09found = true;\x0a\x09\x09\x09\x09break;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09\x09if(!found) {self['@elements'].push(anObject)}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@elements"],"_copy",[]);
return $1;
},
args: [],
source: "asArray\x0a\x09^elements copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
var $1;
$1=smalltalk.send(self["@elements"],"_detect_ifNone_",[aBlock,anotherBlock]);
return $1;
},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09^elements detect: aBlock ifNone: anotherBlock",
messageSends: ["detect:ifNone:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(self["@elements"],"_do_",[aBlock]);
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09elements do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
category: 'testing',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self["@elements"],"_includes_",[anObject]);
return $1;
},
args: ["anObject"],
source: "includes: anObject\x0a\x09^elements includes: anObject",
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Collection);
self["@elements"]=[];
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09elements := #()",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self["@elements"],"_remove_",[anObject]);
return self},
args: ["anObject"],
source: "remove: anObject\x0a\x09elements remove: anObject",
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
category: 'enumerating',
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
},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| collection |\x0a\x09collection := self class new. \x0a\x09self do: [:each |\x0a\x09\x09(aBlock value: each) ifTrue: [\x0a\x09\x09\x09collection add: each]].\x0a\x09^collection",
messageSends: ["new", "class", "do:", "ifTrue:", "add:", "value:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@elements"],"_size",[]);
return $1;
},
args: [],
source: "size\x0a\x09^elements size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.Set);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
category: 'evaluating',
fn: function (aString){
var self=this;
return self.compile(aString);
;
return self},
args: ["aString"],
source: "compile: aString\x0a\x09<return self.compile(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
"_exec_",
smalltalk.method({
selector: "exec:",
category: 'evaluating',
fn: function (aString){
var self=this;
return self.exec(aString) || nil;
;
return self},
args: ["aString"],
source: "exec: aString\x0a\x09<return self.exec(aString) || nil>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
"_test_",
smalltalk.method({
selector: "test:",
category: 'evaluating',
fn: function (aString){
var self=this;
return self.test(aString);
;
return self},
args: ["aString"],
source: "test: aString\x0a\x09<return self.test(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);


smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_fromString_flag_",[aString,""]);
return $1;
},
args: ["aString"],
source: "fromString: aString\x0a\x09    ^self fromString: aString flag: ''",
messageSends: ["fromString:flag:"],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
"_fromString_flag_",
smalltalk.method({
selector: "fromString:flag:",
category: 'instance creation',
fn: function (aString,anotherString){
var self=this;
return new RegExp(aString, anotherString);
;
return self},
args: ["aString", "anotherString"],
source: "fromString: aString flag: anotherString\x0a\x09<return new RegExp(aString, anotherString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
smalltalk.addMethod(
"_atEnd",
smalltalk.method({
selector: "atEnd",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_position",[]),"__eq",[smalltalk.send(self,"_size",[])]);
return $1;
},
args: [],
source: "atEnd\x0a\x09^self position = self size",
messageSends: ["=", "size", "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_atStart",
smalltalk.method({
selector: "atStart",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_position",[]),"__eq",[(0)]);
return $1;
},
args: [],
source: "atStart\x0a\x09^self position = 0",
messageSends: ["=", "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "close",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function (){
var self=this;
return self["@collection"];
},
args: [],
source: "collection\x0a\x09^collection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_collection",[]),"_copyFrom_to_",[(1),smalltalk.send(self,"_streamSize",[])]);
return $1;
},
args: [],
source: "contents\x0a\x09^self collection\x0a\x09    copyFrom: 1 \x0a\x09    to: self streamSize",
messageSends: ["copyFrom:to:", "streamSize", "collection"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send((function(){
return smalltalk.send(self,"_atEnd",[]);
}),"_whileFalse_",[(function(){
return smalltalk.send(aBlock,"_value_",[smalltalk.send(self,"_next",[])]);
})]);
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09[self atEnd] whileFalse: [aBlock value: self next]",
messageSends: ["whileFalse:", "value:", "next", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_flush",
smalltalk.method({
selector: "flush",
category: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "flush",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_isEmpty",
smalltalk.method({
selector: "isEmpty",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_size",[]),"__eq",[(0)]);
return $1;
},
args: [],
source: "isEmpty\x0a\x09^self size = 0",
messageSends: ["=", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'reading',
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
},
args: [],
source: "next\x0a\x09^self atEnd \x0a\x09\x09ifTrue: [nil]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self position: self position + 1. \x0a\x09\x09\x09collection at: self position]",
messageSends: ["ifTrue:ifFalse:", "position:", "+", "position", "at:", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
category: 'reading',
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
},
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09    self atEnd ifFalse: [\x0a\x09\x09tempCollection add: self next]].\x0a\x09^tempCollection",
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "add:", "next", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
category: 'writing',
fn: function (anObject){
var self=this;
smalltalk.send(self,"_position_",[smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[(1)])]);
smalltalk.send(smalltalk.send(self,"_collection",[]),"_at_put_",[smalltalk.send(self,"_position",[]),anObject]);
smalltalk.send(self,"_setStreamSize_",[smalltalk.send(smalltalk.send(self,"_streamSize",[]),"_max_",[smalltalk.send(self,"_position",[])])]);
return self},
args: ["anObject"],
source: "nextPut: anObject\x0a\x09self position: self position + 1.\x0a\x09self collection at: self position put: anObject.\x0a\x09self setStreamSize: (self streamSize max: self position)",
messageSends: ["position:", "+", "position", "at:put:", "collection", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
category: 'writing',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection,"_do_",[(function(each){
return smalltalk.send(self,"_nextPut_",[each]);
})]);
return self},
args: ["aCollection"],
source: "nextPutAll: aCollection\x0a\x09aCollection do: [:each |\x0a\x09    self nextPut: each]",
messageSends: ["do:", "nextPut:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_peek",
smalltalk.method({
selector: "peek",
category: 'reading',
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_atEnd",[]);
if(! smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(self,"_collection",[]),"_at_",[smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[(1)])]);
};
return $1;
},
args: [],
source: "peek\x0a\x09^self atEnd ifFalse: [\x0a\x09    self collection at: self position + 1]",
messageSends: ["ifFalse:", "at:", "+", "position", "collection", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
category: 'accessing',
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
},
args: [],
source: "position\x0a\x09^position ifNil: [position := 0]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_position_",
smalltalk.method({
selector: "position:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@position"]=anInteger;
return self},
args: ["anInteger"],
source: "position: anInteger\x0a\x09position := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_reset",
smalltalk.method({
selector: "reset",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_position_",[(0)]);
return self},
args: [],
source: "reset\x0a\x09self position: 0",
messageSends: ["position:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_resetContents",
smalltalk.method({
selector: "resetContents",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_reset",[]);
smalltalk.send(self,"_setStreamSize_",[(0)]);
return self},
args: [],
source: "resetContents\x0a\x09self reset.\x0a\x09self setStreamSize: 0",
messageSends: ["reset", "setStreamSize:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setCollection_",
smalltalk.method({
selector: "setCollection:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@collection"]=aCollection;
return self},
args: ["aCollection"],
source: "setCollection: aCollection\x0a\x09collection := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setStreamSize_",
smalltalk.method({
selector: "setStreamSize:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@streamSize"]=anInteger;
return self},
args: ["anInteger"],
source: "setStreamSize: anInteger\x0a\x09streamSize := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setToEnd",
smalltalk.method({
selector: "setToEnd",
category: 'positioning',
fn: function (){
var self=this;
smalltalk.send(self,"_position_",[smalltalk.send(self,"_size",[])]);
return self},
args: [],
source: "setToEnd\x0a\x09self position: self size",
messageSends: ["position:", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_streamSize",[]);
return $1;
},
args: [],
source: "size\x0a\x09^self streamSize",
messageSends: ["streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_skip_",
smalltalk.method({
selector: "skip:",
category: 'positioning',
fn: function (anInteger){
var self=this;
smalltalk.send(self,"_position_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[anInteger]),"_min_max_",[smalltalk.send(self,"_size",[]),(0)])]);
return self},
args: ["anInteger"],
source: "skip: anInteger\x0a\x09self position: ((self position + anInteger) min: self size max: 0)",
messageSends: ["position:", "min:max:", "size", "+", "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_streamSize",
smalltalk.method({
selector: "streamSize",
category: 'accessing',
fn: function (){
var self=this;
return self["@streamSize"];
},
args: [],
source: "streamSize\x0a\x09^streamSize",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_setCollection_",[aCollection]);
smalltalk.send($2,"_setStreamSize_",[smalltalk.send(aCollection,"_size",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aCollection"],
source: "on: aCollection\x0a\x09    ^self new \x0a\x09\x09setCollection: aCollection;\x0a\x09\x09setStreamSize: aCollection size;\x0a\x09\x09yourself",
messageSends: ["setCollection:", "new", "setStreamSize:", "size", "yourself"],
referencedClasses: []
}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel-Collections');
smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
category: 'writing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_nextPutAll_",[smalltalk.send((smalltalk.String || String),"_cr",[])]);
return $1;
},
args: [],
source: "cr\x0a\x09^self nextPutAll: String cr",
messageSends: ["nextPutAll:", "cr"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
category: 'writing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_nextPutAll_",[smalltalk.send((smalltalk.String || String),"_crlf",[])]);
return $1;
},
args: [],
source: "crlf\x0a\x09^self nextPutAll: String crlf",
messageSends: ["nextPutAll:", "crlf"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
category: 'writing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_nextPutAll_",[smalltalk.send((smalltalk.String || String),"_lf",[])]);
return $1;
},
args: [],
source: "lf\x0a\x09^self nextPutAll: String lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
category: 'reading',
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
},
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09    self atEnd ifFalse: [\x0a\x09\x09tempCollection := tempCollection, self next]].\x0a\x09^tempCollection",
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", ",", "next", "atEnd"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
category: 'writing',
fn: function (aString){
var self=this;
smalltalk.send(self,"_nextPutAll_",[aString]);
return self},
args: ["aString"],
source: "nextPut: aString\x0a\x09self nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
category: 'writing',
fn: function (aString){
var self=this;
smalltalk.send(self,"_setCollection_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_collection",[]),"_copyFrom_to_",[(1),smalltalk.send(self,"_position",[])]),"__comma",[aString]),"__comma",[smalltalk.send(smalltalk.send(self,"_collection",[]),"_copyFrom_to_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[(1)]),"__plus",[smalltalk.send(aString,"_size",[])]),smalltalk.send(smalltalk.send(self,"_collection",[]),"_size",[])])])]);
smalltalk.send(self,"_position_",[smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[smalltalk.send(aString,"_size",[])])]);
smalltalk.send(self,"_setStreamSize_",[smalltalk.send(smalltalk.send(self,"_streamSize",[]),"_max_",[smalltalk.send(self,"_position",[])])]);
return self},
args: ["aString"],
source: "nextPutAll: aString\x0a\x09self setCollection: \x0a\x09    (self collection copyFrom: 1 to: self position),\x0a\x09    aString,\x0a\x09    (self collection copyFrom: (self position + 1 + aString size) to: self collection size).\x0a\x09self position: self position + aString size.\x0a\x09self setStreamSize: (self streamSize max: self position)",
messageSends: ["setCollection:", ",", "copyFrom:to:", "+", "size", "position", "collection", "position:", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
category: 'writing',
fn: function (){
var self=this;
smalltalk.send(self,"_nextPut_",[" "]);
return self},
args: [],
source: "space\x0a\x09self nextPut: ' '",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.StringStream);



