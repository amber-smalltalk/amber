smalltalk.addPackage('Kernel-Objects');
smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel-Objects');
smalltalk.addMethod(
"__minus_gt",
smalltalk.method({
selector: "->",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Association || Association))._key_value_(self,anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"->",{anObject:anObject},smalltalk.Object)})},
messageSends: ["key:value:"]}),
smalltalk.Object);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self).__eq_eq(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},smalltalk.Object)})},
messageSends: ["=="]}),
smalltalk.Object);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._identityHash()).__eq(_st(anObject)._identityHash());
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{anObject:anObject},smalltalk.Object)})},
messageSends: ["=", "identityHash"]}),
smalltalk.Object);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
var variables;
return smalltalk.withContext(function($ctx1) { var $1;
variables=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(_st(_st(self)._class())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(variables)._at_put_(each,_st(_st(self)._instVarAt_(each))._asJSON());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=variables;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{variables:variables},smalltalk.Object)})},
messageSends: ["new", "do:", "at:put:", "asJSON", "instVarAt:", "allInstanceVariableNames", "class"]}),
smalltalk.Object);

smalltalk.addMethod(
"_asJSONString",
smalltalk.method({
selector: "asJSONString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.JSON || JSON))._stringify_(_st(self)._asJSON());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSONString",{},smalltalk.Object)})},
messageSends: ["stringify:", "asJSON"]}),
smalltalk.Object);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Object)})},
messageSends: ["asString"]}),
smalltalk.Object);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._printString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.Object)})},
messageSends: ["printString"]}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_",
smalltalk.method({
selector: "basicAt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return self[aString];
return self}, function($ctx1) {$ctx1.fill(self,"basicAt:",{aString:aString},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_put_",
smalltalk.method({
selector: "basicAt:put:",
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return self[aString] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"basicAt:put:",{aString:aString,anObject:anObject},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_basicDelete_",
smalltalk.method({
selector: "basicDelete:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { delete self[aString]; return aString;
return self}, function($ctx1) {$ctx1.fill(self,"basicDelete:",{aString:aString},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_basicPerform_",
smalltalk.method({
selector: "basicPerform:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicPerform_withArguments_(aSymbol,[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicPerform:",{aSymbol:aSymbol},smalltalk.Object)})},
messageSends: ["basicPerform:withArguments:"]}),
smalltalk.Object);

smalltalk.addMethod(
"_basicPerform_withArguments_",
smalltalk.method({
selector: "basicPerform:withArguments:",
fn: function (aSymbol,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { return self[aSymbol].apply(self, aCollection);;
return self}, function($ctx1) {$ctx1.fill(self,"basicPerform:withArguments:",{aSymbol:aSymbol,aCollection:aCollection},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_class",
smalltalk.method({
selector: "class",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.klass;
return self}, function($ctx1) {$ctx1.fill(self,"class",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_copy",
smalltalk.method({
selector: "copy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._shallowCopy())._postCopy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"copy",{},smalltalk.Object)})},
messageSends: ["postCopy", "shallowCopy"]}),
smalltalk.Object);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var copy = self.klass._new();
		for(var i in self) {
		if(/^@.+/.test(i)) {
			copy[i] = self[i]._deepCopy();
		}
		}
		return copy;
	;
return self}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_deprecatedAPI",
smalltalk.method({
selector: "deprecatedAPI",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(console)._warn_(_st(_st(_st(_st(_st(smalltalk.getThisContext())._home())._asString()).__comma(" is deprecated! (in ")).__comma(_st(_st(_st(smalltalk.getThisContext())._home())._home())._asString())).__comma(")"));
return self}, function($ctx1) {$ctx1.fill(self,"deprecatedAPI",{},smalltalk.Object)})},
messageSends: ["warn:", ",", "asString", "home"]}),
smalltalk.Object);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.MessageNotUnderstood || MessageNotUnderstood))._new();
_st($1)._receiver_(self);
_st($1)._message_(aMessage);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.Object)})},
messageSends: ["receiver:", "new", "message:", "signal"]}),
smalltalk.Object);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.Error || Error))._signal_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"error:",{aString:aString},smalltalk.Object)})},
messageSends: ["signal:"]}),
smalltalk.Object);

smalltalk.addMethod(
"_halt",
smalltalk.method({
selector: "halt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("Halt encountered");
return self}, function($ctx1) {$ctx1.fill(self,"halt",{},smalltalk.Object)})},
messageSends: ["error:"]}),
smalltalk.Object);

smalltalk.addMethod(
"_identityHash",
smalltalk.method({
selector: "identityHash",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
	var hash=self.identityHash;
	if (hash) return hash;
	hash=smalltalk.nextId();
	Object.defineProperty(self, 'identityHash', {value:hash});
	return hash;
	;
return self}, function($ctx1) {$ctx1.fill(self,"identityHash",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{aBlock:aBlock},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anotherBlock)._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Object)})},
messageSends: ["value"]}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aBlock)._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{aBlock:aBlock},smalltalk.Object)})},
messageSends: ["value"]}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aBlock)._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Object)})},
messageSends: ["value"]}),
smalltalk.Object);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_",
smalltalk.method({
selector: "instVarAt:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { return self['@'+aSymbol._asString()];
return self}, function($ctx1) {$ctx1.fill(self,"instVarAt:",{aSymbol:aSymbol},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_put_",
smalltalk.method({
selector: "instVarAt:put:",
fn: function (aSymbol,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self['@' + aSymbol._asString()] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"instVarAt:put:",{aSymbol:aSymbol,anObject:anObject},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_isBoolean",
smalltalk.method({
selector: "isBoolean",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isBoolean",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_isClass",
smalltalk.method({
selector: "isClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isClass",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_isKindOf_",
smalltalk.method({
selector: "isKindOf:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._isMemberOf_(aClass);
if(smalltalk.assert($2)){
$1=true;
} else {
$1=_st(_st(self)._class())._inheritsFrom_(aClass);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isKindOf:",{aClass:aClass},smalltalk.Object)})},
messageSends: ["ifTrue:ifFalse:", "inheritsFrom:", "class", "isMemberOf:"]}),
smalltalk.Object);

smalltalk.addMethod(
"_isMemberOf_",
smalltalk.method({
selector: "isMemberOf:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class()).__eq(aClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMemberOf:",{aClass:aClass},smalltalk.Object)})},
messageSends: ["=", "class"]}),
smalltalk.Object);

smalltalk.addMethod(
"_isMetaclass",
smalltalk.method({
selector: "isMetaclass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isMetaclass",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_isNil",
smalltalk.method({
selector: "isNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isNil",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_isNumber",
smalltalk.method({
selector: "isNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isNumber",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_isParseFailure",
smalltalk.method({
selector: "isParseFailure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isParseFailure",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isString",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_isSymbol",
smalltalk.method({
selector: "isSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isSymbol",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_log_block_",
smalltalk.method({
selector: "log:block:",
fn: function (aString,aBlock){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { var $1;
_st(console)._log_(_st(_st(aString).__comma(" time: ")).__comma(_st(_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx2) {result=_st(aBlock)._value();
return result;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._printString()));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"log:block:",{aString:aString,aBlock:aBlock,result:result},smalltalk.Object)})},
messageSends: ["log:", ",", "printString", "millisecondsToRun:", "value"]}),
smalltalk.Object);

smalltalk.addMethod(
"_notNil",
smalltalk.method({
selector: "notNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._isNil())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"notNil",{},smalltalk.Object)})},
messageSends: ["not", "isNil"]}),
smalltalk.Object);

smalltalk.addMethod(
"_perform_",
smalltalk.method({
selector: "perform:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._perform_withArguments_(aSymbol,[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"perform:",{aSymbol:aSymbol},smalltalk.Object)})},
messageSends: ["perform:withArguments:"]}),
smalltalk.Object);

smalltalk.addMethod(
"_perform_withArguments_",
smalltalk.method({
selector: "perform:withArguments:",
fn: function (aSymbol,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.send(self, aSymbol._asSelector(), aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"perform:withArguments:",{aSymbol:aSymbol,aCollection:aCollection},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_postCopy",
smalltalk.method({
selector: "postCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { console.log(self);
return self}, function($ctx1) {$ctx1.fill(self,"printNl",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("a ").__comma(_st(_st(self)._class())._name());
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.Object)})},
messageSends: [",", "name", "class"]}),
smalltalk.Object);

smalltalk.addMethod(
"_respondsTo_",
smalltalk.method({
selector: "respondsTo:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._canUnderstand_(aSelector);
return $1;
}, function($ctx1) {$ctx1.fill(self,"respondsTo:",{aSelector:aSelector},smalltalk.Object)})},
messageSends: ["canUnderstand:", "class"]}),
smalltalk.Object);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var copy = self.klass._new();
		for(var i in self) {
		if(/^@.+/.test(i)) {
			copy[i] = self[i];
		}
		}
		return copy;
	;
return self}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_shouldNotImplement",
smalltalk.method({
selector: "shouldNotImplement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_(_st("This method should not be implemented in ").__comma(_st(_st(self)._class())._name()));
return self}, function($ctx1) {$ctx1.fill(self,"shouldNotImplement",{},smalltalk.Object)})},
messageSends: ["error:", ",", "name", "class"]}),
smalltalk.Object);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("Object not indexable");
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Object)})},
messageSends: ["error:"]}),
smalltalk.Object);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aStream)._nextPutAll_(_st(self)._printString());
return self}, function($ctx1) {$ctx1.fill(self,"storeOn:",{aStream:aStream},smalltalk.Object)})},
messageSends: ["nextPutAll:", "printString"]}),
smalltalk.Object);

smalltalk.addMethod(
"_storeString",
smalltalk.method({
selector: "storeString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(s){
return smalltalk.withContext(function($ctx2) {return _st(self)._storeOn_(s);
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"storeString",{},smalltalk.Object)})},
messageSends: ["streamContents:", "storeOn:"]}),
smalltalk.Object);

smalltalk.addMethod(
"_subclassResponsibility",
smalltalk.method({
selector: "subclassResponsibility",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("This method is a responsibility of a subclass");
return self}, function($ctx1) {$ctx1.fill(self,"subclassResponsibility",{},smalltalk.Object)})},
messageSends: ["error:"]}),
smalltalk.Object);

smalltalk.addMethod(
"_test",
smalltalk.method({
selector: "test",
fn: function (){
var self=this;
var a;
return smalltalk.withContext(function($ctx1) { a=(1);
_st(self)._halt();
return self}, function($ctx1) {$ctx1.fill(self,"test",{a:a},smalltalk.Object)})},
messageSends: ["halt"]}),
smalltalk.Object);

smalltalk.addMethod(
"_throw_",
smalltalk.method({
selector: "throw:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) {  throw anObject ;
return self}, function($ctx1) {$ctx1.fill(self,"throw:",{anObject:anObject},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_try_catch_",
smalltalk.method({
selector: "try:catch:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { try{return aBlock()} catch(e) {return anotherBlock(e)};
return self}, function($ctx1) {$ctx1.fill(self,"try:catch:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.valueOf();
return self}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_yourself",
smalltalk.method({
selector: "yourself",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"yourself",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"__tild_eq",
smalltalk.method({
selector: "~=",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self).__eq(anObject)).__eq(false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"~=",{anObject:anObject},smalltalk.Object)})},
messageSends: ["="]}),
smalltalk.Object);

smalltalk.addMethod(
"__tild_tild",
smalltalk.method({
selector: "~~",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self).__eq_eq(anObject)).__eq(false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"~~",{anObject:anObject},smalltalk.Object)})},
messageSends: ["=", "=="]}),
smalltalk.Object);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Object.klass)})},
messageSends: []}),
smalltalk.Object.klass);


smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"__and",
smalltalk.method({
selector: "&",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		if(self == true) {
		return aBoolean;
		} else {
		return false;
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"&",{aBoolean:aBoolean},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		if(! aBoolean._isBoolean || ! aBoolean._isBoolean()) {
			return false;
		}
		return Boolean(self == true) == aBoolean
	;
return self}, function($ctx1) {$ctx1.fill(self,"=",{aBoolean:aBoolean},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self).__eq(aBoolean);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{aBoolean:aBoolean},smalltalk.Boolean)})},
messageSends: ["="]}),
smalltalk.Boolean);

smalltalk.addMethod(
"_and_",
smalltalk.method({
selector: "and:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self).__eq(true);
$1=_st($2)._ifTrue_ifFalse_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"and:",{aBlock:aBlock},smalltalk.Boolean)})},
messageSends: ["ifTrue:ifFalse:", "="]}),
smalltalk.Boolean);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self;
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{aBlock:aBlock},smalltalk.Boolean)})},
messageSends: ["ifTrue:ifFalse:"]}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self;
$1=_st($2)._ifTrue_ifFalse_(anotherBlock,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Boolean)})},
messageSends: ["ifTrue:ifFalse:"]}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self;
$1=_st($2)._ifTrue_ifFalse_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{aBlock:aBlock},smalltalk.Boolean)})},
messageSends: ["ifTrue:ifFalse:"]}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		if(self == true) {
		return aBlock();
		} else {
		return anotherBlock();
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
"_isBoolean",
smalltalk.method({
selector: "isBoolean",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isBoolean",{},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
"_not",
smalltalk.method({
selector: "not",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self).__eq(false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"not",{},smalltalk.Boolean)})},
messageSends: ["="]}),
smalltalk.Boolean);

smalltalk.addMethod(
"_or_",
smalltalk.method({
selector: "or:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self).__eq(true);
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"or:",{aBlock:aBlock},smalltalk.Boolean)})},
messageSends: ["ifTrue:ifFalse:", "="]}),
smalltalk.Boolean);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toString();
return self}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
"__or",
smalltalk.method({
selector: "|",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		if(self == true) {
		return true;
		} else {
		return aBoolean;
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"|",{aBoolean:aBoolean},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { return self + aDate;
return self}, function($ctx1) {$ctx1.fill(self,"+",{aDate:aDate},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { return self - aDate;
return self}, function($ctx1) {$ctx1.fill(self,"-",{aDate:aDate},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { return self < aDate;
return self}, function($ctx1) {$ctx1.fill(self,"<",{aDate:aDate},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { return self <= aDate;
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aDate:aDate},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { return self > aDate;
return self}, function($ctx1) {$ctx1.fill(self,">",{aDate:aDate},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { return self >= aDate;
return self}, function($ctx1) {$ctx1.fill(self,">=",{aDate:aDate},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_asDateString",
smalltalk.method({
selector: "asDateString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toDateString();
return self}, function($ctx1) {$ctx1.fill(self,"asDateString",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_asLocaleString",
smalltalk.method({
selector: "asLocaleString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toLocaleString();
return self}, function($ctx1) {$ctx1.fill(self,"asLocaleString",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_asMilliseconds",
smalltalk.method({
selector: "asMilliseconds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._time();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMilliseconds",{},smalltalk.Date)})},
messageSends: ["time"]}),
smalltalk.Date);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._asMilliseconds();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.Date)})},
messageSends: ["asMilliseconds"]}),
smalltalk.Date);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toString();
return self}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_asTimeString",
smalltalk.method({
selector: "asTimeString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toTimeString();
return self}, function($ctx1) {$ctx1.fill(self,"asTimeString",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_day",
smalltalk.method({
selector: "day",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._dayOfWeek();
return $1;
}, function($ctx1) {$ctx1.fill(self,"day",{},smalltalk.Date)})},
messageSends: ["dayOfWeek"]}),
smalltalk.Date);

smalltalk.addMethod(
"_day_",
smalltalk.method({
selector: "day:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._dayOfWeek_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"day:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: ["dayOfWeek:"]}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth",
smalltalk.method({
selector: "dayOfMonth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getDate();
return self}, function($ctx1) {$ctx1.fill(self,"dayOfMonth",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth_",
smalltalk.method({
selector: "dayOfMonth:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setDate(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"dayOfMonth:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek",
smalltalk.method({
selector: "dayOfWeek",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getDay() + 1;
return self}, function($ctx1) {$ctx1.fill(self,"dayOfWeek",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek_",
smalltalk.method({
selector: "dayOfWeek:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.setDay(aNumber - 1);
return self}, function($ctx1) {$ctx1.fill(self,"dayOfWeek:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_hours",
smalltalk.method({
selector: "hours",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getHours();
return self}, function($ctx1) {$ctx1.fill(self,"hours",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_hours_",
smalltalk.method({
selector: "hours:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setHours(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"hours:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds",
smalltalk.method({
selector: "milliseconds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getMilliseconds();
return self}, function($ctx1) {$ctx1.fill(self,"milliseconds",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds_",
smalltalk.method({
selector: "milliseconds:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setMilliseconds(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"milliseconds:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes",
smalltalk.method({
selector: "minutes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getMinutes();
return self}, function($ctx1) {$ctx1.fill(self,"minutes",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes_",
smalltalk.method({
selector: "minutes:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setMinutes(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"minutes:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_month",
smalltalk.method({
selector: "month",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getMonth() + 1;
return self}, function($ctx1) {$ctx1.fill(self,"month",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_month_",
smalltalk.method({
selector: "month:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setMonth(aNumber - 1);
return self}, function($ctx1) {$ctx1.fill(self,"month:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.Date)})},
messageSends: ["asString"]}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds",
smalltalk.method({
selector: "seconds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getSeconds();
return self}, function($ctx1) {$ctx1.fill(self,"seconds",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds_",
smalltalk.method({
selector: "seconds:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setSeconds(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"seconds:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_time",
smalltalk.method({
selector: "time",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getTime();
return self}, function($ctx1) {$ctx1.fill(self,"time",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_time_",
smalltalk.method({
selector: "time:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setTime(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"time:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_year",
smalltalk.method({
selector: "year",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getFullYear();
return self}, function($ctx1) {$ctx1.fill(self,"year",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
"_year_",
smalltalk.method({
selector: "year:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setFullYear(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"year:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);


smalltalk.addMethod(
"_fromMilliseconds_",
smalltalk.method({
selector: "fromMilliseconds:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._new_(aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromMilliseconds:",{aNumber:aNumber},smalltalk.Date.klass)})},
messageSends: ["new:"]}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_fromSeconds_",
smalltalk.method({
selector: "fromSeconds:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._fromMilliseconds_(_st(aNumber).__star((1000)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromSeconds:",{aNumber:aNumber},smalltalk.Date.klass)})},
messageSends: ["fromMilliseconds:", "*"]}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._new_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.Date.klass)})},
messageSends: ["new:"]}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_millisecondsToRun_",
smalltalk.method({
selector: "millisecondsToRun:",
fn: function (aBlock){
var self=this;
var t;
return smalltalk.withContext(function($ctx1) { var $1;
t=_st((smalltalk.Date || Date))._now();
_st(aBlock)._value();
$1=_st(_st((smalltalk.Date || Date))._now()).__minus(t);
return $1;
}, function($ctx1) {$ctx1.fill(self,"millisecondsToRun:",{aBlock:aBlock,t:t},smalltalk.Date.klass)})},
messageSends: ["now", "value", "-"]}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return new Date(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"new:",{anObject:anObject},smalltalk.Date.klass)})},
messageSends: []}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_now",
smalltalk.method({
selector: "now",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._today();
return $1;
}, function($ctx1) {$ctx1.fill(self,"now",{},smalltalk.Date.klass)})},
messageSends: ["today"]}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_today",
smalltalk.method({
selector: "today",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"today",{},smalltalk.Date.klass)})},
messageSends: ["new"]}),
smalltalk.Date.klass);


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel-Objects');
smalltalk.addMethod(
"_addObjectVariablesTo_",
smalltalk.method({
selector: "addObjectVariablesTo:",
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		for(var i in self['@jsObject']) {
			aDictionary._at_put_(i, self['@jsObject'][i]);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"addObjectVariablesTo:",{aDictionary:aDictionary},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { return self['@jsObject'][aSymbol._asString()];
return self}, function($ctx1) {$ctx1.fill(self,"at:",{aSymbol:aSymbol},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (aSymbol,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var obj = self['@jsObject'],
			symbol = aSymbol._asString();
		return symbol in obj ? obj[symbol] : aBlock();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aSymbol:aSymbol,aBlock:aBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_at_ifPresent_",
smalltalk.method({
selector: "at:ifPresent:",
fn: function (aSymbol,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var obj = self['@jsObject'],
			symbol = aSymbol._asString();
		return symbol in obj ? aBlock(obj[symbol]) : nil;
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{aSymbol:aSymbol,aBlock:aBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_at_ifPresent_ifAbsent_",
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
fn: function (aSymbol,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var obj = self['@jsObject'],
			symbol = aSymbol._asString();
		return symbol in obj ? aBlock(obj[symbol]) : anotherBlock();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aSymbol:aSymbol,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (aSymbol,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self['@jsObject'][aSymbol._asString()] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{aSymbol:aSymbol,anObject:anObject},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_canForwardMessage_",
smalltalk.method({
selector: "canForwardMessage:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var jsSelector = aMessage._selector()._asJavaScriptSelector();
		if(jsSelector in self._jsObject()) {
			return true
		} else {
			return false;
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"canForwardMessage:",{aMessage:aMessage},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._canForwardMessage_(aMessage);
if(smalltalk.assert($2)){
$1=_st(self)._forwardMessage_(aMessage);
} else {
$3=smalltalk.Object.fn.prototype._doesNotUnderstand_.apply(_st(self), [aMessage]);
return $3;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.JSObjectProxy)})},
messageSends: ["ifTrue:ifFalse:", "forwardMessage:", "doesNotUnderstand:", "canForwardMessage:"]}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_forwardMessage_",
smalltalk.method({
selector: "forwardMessage:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		return smalltalk.send(self._jsObject(), aMessage._selector()._asJavaScriptSelector(), aMessage._arguments());
	;
return self}, function($ctx1) {$ctx1.fill(self,"forwardMessage:",{aMessage:aMessage},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
var variables;
return smalltalk.withContext(function($ctx1) { variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st(variables)._at_put_("#self",_st(self)._jsObject());
_st(anInspector)._setLabel_(_st(self)._printString());
_st(self)._addObjectVariablesTo_(variables);
_st(anInspector)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.JSObjectProxy)})},
messageSends: ["new", "at:put:", "jsObject", "setLabel:", "printString", "addObjectVariablesTo:", "setVariables:"]}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_jsObject",
smalltalk.method({
selector: "jsObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@jsObject"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsObject",{},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_jsObject_",
smalltalk.method({
selector: "jsObject:",
fn: function (aJSObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@jsObject"]=aJSObject;
return self}, function($ctx1) {$ctx1.fill(self,"jsObject:",{aJSObject:aJSObject},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_keysAndValuesDo_",
smalltalk.method({
selector: "keysAndValuesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var o = self['@jsObject'];
		for(var i in o) {
			aBlock(i, o[i]);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._jsObject())._toString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.JSObjectProxy)})},
messageSends: ["toString", "jsObject"]}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._at_ifAbsent_("value",(function(){
return smalltalk.withContext(function($ctx2) {return smalltalk.Object.fn.prototype._value.apply(_st(self), []);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.JSObjectProxy)})},
messageSends: ["at:ifAbsent:", "value"]}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aJSObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._jsObject_(aJSObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aJSObject:aJSObject},smalltalk.JSObjectProxy.klass)})},
messageSends: ["jsObject:", "new", "yourself"]}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"__and",
smalltalk.method({
selector: "&",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self & aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"&",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self * aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"*",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self + aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"+",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self - aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"-",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self / aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"/",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self < aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"<",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self <= aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		if(! aNumber._isNumber || ! aNumber._isNumber()) {
			return false;
		}
		return Number(self) == aNumber
	;
return self}, function($ctx1) {$ctx1.fill(self,"=",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self > aNumber;
return self}, function($ctx1) {$ctx1.fill(self,">",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self >= aNumber;
return self}, function($ctx1) {$ctx1.fill(self,">=",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"__at",
smalltalk.method({
selector: "@",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Point || Point))._x_y_(self,aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"@",{aNumber:aNumber},smalltalk.Number)})},
messageSends: ["x:y:"]}),
smalltalk.Number);

smalltalk.addMethod(
"__backslash",
smalltalk.method({
selector: "\x5c",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self % aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"\x5c\x5c",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"__backslash_backslash",
smalltalk.method({
selector: "\x5c\x5c",
fn: function (aNumber) {
    var self = this;
    return self % aNumber;
    return self;
},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"_abs",
smalltalk.method({
selector: "abs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.abs(self);;
return self}, function($ctx1) {$ctx1.fill(self,"abs",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("(").__comma(_st(self)._printString())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Number)})},
messageSends: [",", "printString"]}),
smalltalk.Number);

smalltalk.addMethod(
"_asPoint",
smalltalk.method({
selector: "asPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Point || Point))._x_y_(self,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asPoint",{},smalltalk.Number)})},
messageSends: ["x:y:"]}),
smalltalk.Number);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._printString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.Number)})},
messageSends: ["printString"]}),
smalltalk.Number);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st((smalltalk.Random || Random))._new())._next()).__star(self))._truncated()).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atRandom",{},smalltalk.Number)})},
messageSends: ["+", "truncated", "*", "next", "new"]}),
smalltalk.Number);

smalltalk.addMethod(
"_copy",
smalltalk.method({
selector: "copy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copy",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.Number)})},
messageSends: ["copy"]}),
smalltalk.Number);

smalltalk.addMethod(
"_even",
smalltalk.method({
selector: "even",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((0)).__eq(_st(self).__backslash_backslash((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"even",{},smalltalk.Number)})},
messageSends: ["=", "\x5c\x5c"]}),
smalltalk.Number);

smalltalk.addMethod(
"_identityHash",
smalltalk.method({
selector: "identityHash",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._asString()).__comma("n");
return $1;
}, function($ctx1) {$ctx1.fill(self,"identityHash",{},smalltalk.Number)})},
messageSends: [",", "asString"]}),
smalltalk.Number);

smalltalk.addMethod(
"_isNumber",
smalltalk.method({
selector: "isNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isNumber",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"_isZero",
smalltalk.method({
selector: "isZero",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self).__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isZero",{},smalltalk.Number)})},
messageSends: ["="]}),
smalltalk.Number);

smalltalk.addMethod(
"_max_",
smalltalk.method({
selector: "max:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.max(self, aNumber);;
return self}, function($ctx1) {$ctx1.fill(self,"max:",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"_min_",
smalltalk.method({
selector: "min:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.min(self, aNumber);;
return self}, function($ctx1) {$ctx1.fill(self,"min:",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"_negated",
smalltalk.method({
selector: "negated",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((0)).__minus(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"negated",{},smalltalk.Number)})},
messageSends: ["-"]}),
smalltalk.Number);

smalltalk.addMethod(
"_negative",
smalltalk.method({
selector: "negative",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self).__lt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"negative",{},smalltalk.Number)})},
messageSends: ["<"]}),
smalltalk.Number);

smalltalk.addMethod(
"_odd",
smalltalk.method({
selector: "odd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._even())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"odd",{},smalltalk.Number)})},
messageSends: ["not", "even"]}),
smalltalk.Number);

smalltalk.addMethod(
"_positive",
smalltalk.method({
selector: "positive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self).__gt_eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"positive",{},smalltalk.Number)})},
messageSends: [">="]}),
smalltalk.Number);

smalltalk.addMethod(
"_printShowingDecimalPlaces_",
smalltalk.method({
selector: "printShowingDecimalPlaces:",
fn: function (placesDesired){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toFixed(placesDesired);
return self}, function($ctx1) {$ctx1.fill(self,"printShowingDecimalPlaces:",{placesDesired:placesDesired},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return String(self);
return self}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"_rounded",
smalltalk.method({
selector: "rounded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.round(self);;
return self}, function($ctx1) {$ctx1.fill(self,"rounded",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"_sqrt",
smalltalk.method({
selector: "sqrt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.sqrt(self);
return self}, function($ctx1) {$ctx1.fill(self,"sqrt",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"_squared",
smalltalk.method({
selector: "squared",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self).__star(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"squared",{},smalltalk.Number)})},
messageSends: ["*"]}),
smalltalk.Number);

smalltalk.addMethod(
"_timesRepeat_",
smalltalk.method({
selector: "timesRepeat:",
fn: function (aBlock){
var self=this;
var count;
return smalltalk.withContext(function($ctx1) { count=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(count).__gt(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {_st(aBlock)._value();
count=_st(count).__plus((1));
return count;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"timesRepeat:",{aBlock:aBlock,count:count},smalltalk.Number)})},
messageSends: ["whileFalse:", "value", "+", ">"]}),
smalltalk.Number);

smalltalk.addMethod(
"_to_",
smalltalk.method({
selector: "to:",
fn: function (aNumber){
var self=this;
var array,first,last,count;
return smalltalk.withContext(function($ctx1) { var $1;
first=_st(self)._truncated();
last=_st(_st(aNumber)._truncated()).__plus((1));
count=(1);
array=_st((smalltalk.Array || Array))._new();
_st(_st(last).__minus(first))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {_st(array)._at_put_(count,first);
count=_st(count).__plus((1));
count;
first=_st(first).__plus((1));
return first;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=array;
return $1;
}, function($ctx1) {$ctx1.fill(self,"to:",{aNumber:aNumber,array:array,first:first,last:last,count:count},smalltalk.Number)})},
messageSends: ["truncated", "+", "new", "timesRepeat:", "at:put:", "-"]}),
smalltalk.Number);

smalltalk.addMethod(
"_to_by_",
smalltalk.method({
selector: "to:by:",
fn: function (stop,step){
var self=this;
var array,value,pos;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
value=self;
array=_st((smalltalk.Array || Array))._new();
pos=(1);
$1=_st(step).__eq((0));
if(smalltalk.assert($1)){
_st(self)._error_("step must be non-zero");
};
$2=_st(step).__lt((0));
if(smalltalk.assert($2)){
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(value).__gt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {_st(array)._at_put_(pos,value);
pos=_st(pos).__plus((1));
pos;
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(value).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {_st(array)._at_put_(pos,value);
pos=_st(pos).__plus((1));
pos;
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
$3=array;
return $3;
}, function($ctx1) {$ctx1.fill(self,"to:by:",{stop:stop,step:step,array:array,value:value,pos:pos},smalltalk.Number)})},
messageSends: ["new", "ifTrue:", "error:", "=", "ifTrue:ifFalse:", "whileTrue:", "at:put:", "+", ">=", "<=", "<"]}),
smalltalk.Number);

smalltalk.addMethod(
"_to_by_do_",
smalltalk.method({
selector: "to:by:do:",
fn: function (stop,step,aBlock){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { var $1,$2;
value=self;
$1=_st(step).__eq((0));
if(smalltalk.assert($1)){
_st(self)._error_("step must be non-zero");
};
$2=_st(step).__lt((0));
if(smalltalk.assert($2)){
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(value).__gt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {_st(aBlock)._value_(value);
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(value).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {_st(aBlock)._value_(value);
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"to:by:do:",{stop:stop,step:step,aBlock:aBlock,value:value},smalltalk.Number)})},
messageSends: ["ifTrue:", "error:", "=", "ifTrue:ifFalse:", "whileTrue:", "value:", "+", ">=", "<=", "<"]}),
smalltalk.Number);

smalltalk.addMethod(
"_to_do_",
smalltalk.method({
selector: "to:do:",
fn: function (stop,aBlock){
var self=this;
var nextValue;
return smalltalk.withContext(function($ctx1) { nextValue=self;
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(nextValue).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {_st(aBlock)._value_(nextValue);
nextValue=_st(nextValue).__plus((1));
return nextValue;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"to:do:",{stop:stop,aBlock:aBlock,nextValue:nextValue},smalltalk.Number)})},
messageSends: ["whileTrue:", "value:", "+", "<="]}),
smalltalk.Number);

smalltalk.addMethod(
"_truncated",
smalltalk.method({
selector: "truncated",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		if(self >= 0) {
			return Math.floor(self);
		} else {
			return Math.floor(self * (-1)) * (-1);
		};
	;
return self}, function($ctx1) {$ctx1.fill(self,"truncated",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
"__or",
smalltalk.method({
selector: "|",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self | aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"|",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);


smalltalk.addMethod(
"_pi",
smalltalk.method({
selector: "pi",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.PI;
return self}, function($ctx1) {$ctx1.fill(self,"pi",{},smalltalk.Number.klass)})},
messageSends: []}),
smalltalk.Number.klass);


smalltalk.addClass('Organizer', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_addElement_",
smalltalk.method({
selector: "addElement:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self.elements.addElement(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{anObject:anObject},smalltalk.Organizer)})},
messageSends: []}),
smalltalk.Organizer);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._basicAt_("elements"))._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.Organizer)})},
messageSends: ["copy", "basicAt:"]}),
smalltalk.Organizer);

smalltalk.addMethod(
"_removeElement_",
smalltalk.method({
selector: "removeElement:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self.elements.removeElement(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"removeElement:",{anObject:anObject},smalltalk.Organizer)})},
messageSends: []}),
smalltalk.Organizer);



smalltalk.addClass('ClassOrganizer', smalltalk.Organizer, [], 'Kernel-Objects');
smalltalk.addMethod(
"_addElement_",
smalltalk.method({
selector: "addElement:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
smalltalk.Organizer.fn.prototype._addElement_.apply(_st(self), [aString]);
$1=_st((smalltalk.ProtocolAdded || ProtocolAdded))._new();
_st($1)._protocol_(aString);
_st($1)._theClass_(_st(self)._theClass());
$2=_st($1)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{aString:aString},smalltalk.ClassOrganizer)})},
messageSends: ["addElement:", "announce:", "protocol:", "new", "theClass:", "theClass", "yourself", "current"]}),
smalltalk.ClassOrganizer);

smalltalk.addMethod(
"_removeElement_",
smalltalk.method({
selector: "removeElement:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
smalltalk.Organizer.fn.prototype._removeElement_.apply(_st(self), [aString]);
$1=_st((smalltalk.ProtocolRemoved || ProtocolRemoved))._new();
_st($1)._protocol_(aString);
_st($1)._theClass_(_st(self)._theClass());
$2=_st($1)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"removeElement:",{aString:aString},smalltalk.ClassOrganizer)})},
messageSends: ["removeElement:", "announce:", "protocol:", "new", "theClass:", "theClass", "yourself", "current"]}),
smalltalk.ClassOrganizer);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {  return self.theClass ;
return self}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ClassOrganizer)})},
messageSends: []}),
smalltalk.ClassOrganizer);



smalltalk.addClass('PackageOrganizer', smalltalk.Organizer, [], 'Kernel-Objects');


smalltalk.addClass('Package', smalltalk.Object, ['commitPathJs', 'commitPathSt'], 'Kernel-Objects');
smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._organization())._elements();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Package)})},
messageSends: ["elements", "organization"]}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathJs",
smalltalk.method({
selector: "commitPathJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@commitPathJs"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st(self)._class())._defaultCommitPathJs();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathJs",{},smalltalk.Package)})},
messageSends: ["ifNil:", "defaultCommitPathJs", "class"]}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathJs_",
smalltalk.method({
selector: "commitPathJs:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@commitPathJs"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"commitPathJs:",{aString:aString},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathSt",
smalltalk.method({
selector: "commitPathSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@commitPathSt"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st(self)._class())._defaultCommitPathSt();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathSt",{},smalltalk.Package)})},
messageSends: ["ifNil:", "defaultCommitPathSt", "class"]}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathSt_",
smalltalk.method({
selector: "commitPathSt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@commitPathSt"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"commitPathSt:",{aString:aString},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
"_dependencies",
smalltalk.method({
selector: "dependencies",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._propertyAt_ifAbsent_("dependencies",(function(){
return smalltalk.withContext(function($ctx2) {return [];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"dependencies",{},smalltalk.Package)})},
messageSends: ["propertyAt:ifAbsent:"]}),
smalltalk.Package);

smalltalk.addMethod(
"_dependencies_",
smalltalk.method({
selector: "dependencies:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._propertyAt_put_("dependencies",anArray);
return $1;
}, function($ctx1) {$ctx1.fill(self,"dependencies:",{anArray:anArray},smalltalk.Package)})},
messageSends: ["propertyAt:put:"]}),
smalltalk.Package);

smalltalk.addMethod(
"_jsProperties",
smalltalk.method({
selector: "jsProperties",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.properties;
return self}, function($ctx1) {$ctx1.fill(self,"jsProperties",{},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
"_jsProperties_",
smalltalk.method({
selector: "jsProperties:",
fn: function (aJSObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.properties = aJSObject;
return self}, function($ctx1) {$ctx1.fill(self,"jsProperties:",{aJSObject:aJSObject},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.pkgName;
return self}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self.pkgName = aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
"_organization",
smalltalk.method({
selector: "organization",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_("organization");
return $1;
}, function($ctx1) {$ctx1.fill(self,"organization",{},smalltalk.Package)})},
messageSends: ["basicAt:"]}),
smalltalk.Package);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.Package)})},
messageSends: ["name"]}),
smalltalk.Package);

smalltalk.addMethod(
"_properties",
smalltalk.method({
selector: "properties",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._readJSObject_(_st(self)._basicAt_("properties"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"properties",{},smalltalk.Package)})},
messageSends: ["readJSObject:", "basicAt:", "current"]}),
smalltalk.Package);

smalltalk.addMethod(
"_propertiesAsJSON",
smalltalk.method({
selector: "propertiesAsJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return JSON.stringify(self.properties);
return self}, function($ctx1) {$ctx1.fill(self,"propertiesAsJSON",{},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_",
smalltalk.method({
selector: "propertyAt:",
fn: function (key){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.properties[key];
return self}, function($ctx1) {$ctx1.fill(self,"propertyAt:",{key:key},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_ifAbsent_",
smalltalk.method({
selector: "propertyAt:ifAbsent:",
fn: function (key,block){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._propertyAt_(key);
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(block)._value();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"propertyAt:ifAbsent:",{key:key,block:block},smalltalk.Package)})},
messageSends: ["ifNil:", "value", "propertyAt:"]}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_put_",
smalltalk.method({
selector: "propertyAt:put:",
fn: function (key,value){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.properties[key] = value;
return self}, function($ctx1) {$ctx1.fill(self,"propertyAt:put:",{key:key,value:value},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
"_setupClasses",
smalltalk.method({
selector: "setupClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._classes();
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._setupClass_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._initialize();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupClasses",{},smalltalk.Package)})},
messageSends: ["do:", "setupClass:", "new", "classes", "initialize"]}),
smalltalk.Package);

smalltalk.addMethod(
"_sortedClasses",
smalltalk.method({
selector: "sortedClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._sortedClasses_(_st(self)._classes());
return $1;
}, function($ctx1) {$ctx1.fill(self,"sortedClasses",{},smalltalk.Package)})},
messageSends: ["sortedClasses:", "classes", "class"]}),
smalltalk.Package);


smalltalk.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
"_commitPathsFromLoader",
smalltalk.method({
selector: "commitPathsFromLoader",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
	var cp = typeof amber !== 'undefined' && amber.commitPath;
	if (!cp) return;
	if (cp.js) self._defaultCommitPathJs_(cp.js);
	if (cp.st) self._defaultCommitPathSt_(cp.st);
;
return self}, function($ctx1) {$ctx1.fill(self,"commitPathsFromLoader",{},smalltalk.Package.klass)})},
messageSends: []}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathJs",
smalltalk.method({
selector: "defaultCommitPathJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@defaultCommitPathJs"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@defaultCommitPathJs"]="js";
$1=self["@defaultCommitPathJs"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathJs",{},smalltalk.Package.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathJs_",
smalltalk.method({
selector: "defaultCommitPathJs:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@defaultCommitPathJs"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathJs:",{aString:aString},smalltalk.Package.klass)})},
messageSends: []}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathSt",
smalltalk.method({
selector: "defaultCommitPathSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@defaultCommitPathSt"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@defaultCommitPathSt"]="st";
$1=self["@defaultCommitPathSt"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathSt",{},smalltalk.Package.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathSt_",
smalltalk.method({
selector: "defaultCommitPathSt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@defaultCommitPathSt"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathSt:",{aString:aString},smalltalk.Package.klass)})},
messageSends: []}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_fetch_",
smalltalk.method({
selector: "fetch:",
fn: function (aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._fetch_prefix_(aPackageName,_st(_st(self)._defaultCommitPathJs()).__comma("/"));
return self}, function($ctx1) {$ctx1.fill(self,"fetch:",{aPackageName:aPackageName},smalltalk.Package.klass)})},
messageSends: ["fetch:prefix:", ",", "defaultCommitPathJs"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_fetch_prefix_",
smalltalk.method({
selector: "fetch:prefix:",
fn: function (aPackageName,aPrefix){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(jQuery)._getScript_onSuccess_(_st(_st(aPrefix).__comma(aPackageName)).__comma(".js"),(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.Package || Package))._named_(aPackageName))._setupClasses();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"fetch:prefix:",{aPackageName:aPackageName,aPrefix:aPrefix},smalltalk.Package.klass)})},
messageSends: ["getScript:onSuccess:", ",", "setupClasses", "named:"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.klass.fn.prototype._initialize.apply(_st(self), []);
_st(self)._commitPathsFromLoader();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Package.klass)})},
messageSends: ["initialize", "commitPathsFromLoader"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_named_",
smalltalk.method({
selector: "named:",
fn: function (aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._packageAt_(aPackageName);
return $1;
}, function($ctx1) {$ctx1.fill(self,"named:",{aPackageName:aPackageName},smalltalk.Package.klass)})},
messageSends: ["packageAt:", "current"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_named_ifAbsent_",
smalltalk.method({
selector: "named:ifAbsent:",
fn: function (aPackageName,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._packageAt_ifAbsent_(aPackageName,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"named:ifAbsent:",{aPackageName:aPackageName,aBlock:aBlock},smalltalk.Package.klass)})},
messageSends: ["packageAt:ifAbsent:", "current"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_resetCommitPaths",
smalltalk.method({
selector: "resetCommitPaths",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@defaultCommitPathJs"]=nil;
self["@defaultCommitPathSt"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetCommitPaths",{},smalltalk.Package.klass)})},
messageSends: []}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_sortedClasses_",
smalltalk.method({
selector: "sortedClasses:",
fn: function (classes){
var self=this;
var children,others,nodes,expandedClasses;
return smalltalk.withContext(function($ctx1) { var $1,$2;
children=[];
others=[];
_st(classes)._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(classes)._includes_(_st(each)._superclass());
if(smalltalk.assert($1)){
return _st(others)._add_(each);
} else {
return _st(children)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
nodes=_st(children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.ClassSorterNode || ClassSorterNode))._on_classes_level_(each,others,(0));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
nodes=_st(nodes)._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(a)._theClass())._name()).__lt_eq(_st(_st(b)._theClass())._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
expandedClasses=_st((smalltalk.Array || Array))._new();
_st(nodes)._do_((function(aNode){
return smalltalk.withContext(function($ctx2) {return _st(aNode)._traverseClassesWith_(expandedClasses);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1)})}));
$2=expandedClasses;
return $2;
}, function($ctx1) {$ctx1.fill(self,"sortedClasses:",{classes:classes,children:children,others:others,nodes:nodes,expandedClasses:expandedClasses},smalltalk.Package.klass)})},
messageSends: ["do:", "ifFalse:ifTrue:", "add:", "includes:", "superclass", "collect:", "on:classes:level:", "sorted:", "<=", "name", "theClass", "new", "traverseClassesWith:"]}),
smalltalk.Package.klass);


smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel-Objects');
smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Point || Point))._x_y_(_st(_st(self)._x()).__star(_st(_st(aPoint)._asPoint())._x()),_st(_st(self)._y()).__star(_st(_st(aPoint)._asPoint())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"*",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["x:y:", "*", "x", "asPoint", "y"]}),
smalltalk.Point);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Point || Point))._x_y_(_st(_st(self)._x()).__plus(_st(_st(aPoint)._asPoint())._x()),_st(_st(self)._y()).__plus(_st(_st(aPoint)._asPoint())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"+",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["x:y:", "+", "x", "asPoint", "y"]}),
smalltalk.Point);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Point || Point))._x_y_(_st(_st(self)._x()).__minus(_st(_st(aPoint)._asPoint())._x()),_st(_st(self)._y()).__minus(_st(_st(aPoint)._asPoint())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"-",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["x:y:", "-", "x", "asPoint", "y"]}),
smalltalk.Point);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Point || Point))._x_y_(_st(_st(self)._x()).__slash(_st(_st(aPoint)._asPoint())._x()),_st(_st(self)._y()).__slash(_st(_st(aPoint)._asPoint())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"/",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["x:y:", "/", "x", "asPoint", "y"]}),
smalltalk.Point);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(aPoint)._class()).__eq(_st(self)._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(aPoint)._x()).__eq(_st(self)._x())).__and(_st(_st(aPoint)._y()).__eq(_st(self)._y()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["and:", "&", "=", "y", "x", "class"]}),
smalltalk.Point);

smalltalk.addMethod(
"_asPoint",
smalltalk.method({
selector: "asPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asPoint",{},smalltalk.Point)})},
messageSends: []}),
smalltalk.Point);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {_st(stream)._nextPutAll_(_st(_st(self["@x"])._printString()).__comma("@"));
$2=_st(_st(self["@y"])._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self["@y"])._negative();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
_st(stream)._space();
};
return _st(stream)._nextPutAll_(_st(self["@y"])._printString());
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.Point)})},
messageSends: ["streamContents:", "nextPutAll:", ",", "printString", "ifTrue:", "space", "and:", "negative", "notNil"]}),
smalltalk.Point);

smalltalk.addMethod(
"_translateBy_",
smalltalk.method({
selector: "translateBy:",
fn: function (delta){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(delta)._x()).__plus(self["@x"])).__at(_st(_st(delta)._y()).__plus(self["@y"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"translateBy:",{delta:delta},smalltalk.Point)})},
messageSends: ["@", "+", "y", "x"]}),
smalltalk.Point);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@x"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"x",{},smalltalk.Point)})},
messageSends: []}),
smalltalk.Point);

smalltalk.addMethod(
"_x_",
smalltalk.method({
selector: "x:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@x"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"x:",{aNumber:aNumber},smalltalk.Point)})},
messageSends: []}),
smalltalk.Point);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@y"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"y",{},smalltalk.Point)})},
messageSends: []}),
smalltalk.Point);

smalltalk.addMethod(
"_y_",
smalltalk.method({
selector: "y:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@y"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"y:",{aNumber:aNumber},smalltalk.Point)})},
messageSends: []}),
smalltalk.Point);


smalltalk.addMethod(
"_x_y_",
smalltalk.method({
selector: "x:y:",
fn: function (aNumber,anotherNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._x_(aNumber);
_st($2)._y_(anotherNumber);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"x:y:",{aNumber:aNumber,anotherNumber:anotherNumber},smalltalk.Point.klass)})},
messageSends: ["x:", "new", "y:", "yourself"]}),
smalltalk.Point.klass);


smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.random();
return self}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.Random)})},
messageSends: []}),
smalltalk.Random);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((1))._to_(anInteger))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._next();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger},smalltalk.Random)})},
messageSends: ["collect:", "next", "to:"]}),
smalltalk.Random);



smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_asSmalltalkException_",
smalltalk.method({
selector: "asSmalltalkException:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(self)._isSmalltalkObject_(anObject))._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(anObject)._isKindOf_((smalltalk.Error || Error));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
$1=anObject;
} else {
$1=_st((smalltalk.JavaScriptException || JavaScriptException))._on_(anObject);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSmalltalkException:",{anObject:anObject},smalltalk.Smalltalk)})},
messageSends: ["ifTrue:ifFalse:", "on:", "and:", "isKindOf:", "isSmalltalkObject:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { return self[aSymbol._asString()];
return self}, function($ctx1) {$ctx1.fill(self,"at:",{aSymbol:aSymbol},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_basicParse_",
smalltalk.method({
selector: "basicParse:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.parser.parse(aString);
return self}, function($ctx1) {$ctx1.fill(self,"basicParse:",{aString:aString},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.classes();
return self}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_createPackage_",
smalltalk.method({
selector: "createPackage:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.addPackage(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"createPackage:",{packageName:packageName},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_createPackage_properties_",
smalltalk.method({
selector: "createPackage:properties:",
fn: function (packageName,aDict){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._deprecatedAPI();
$1=_st(aDict)._isEmpty();
if(! smalltalk.assert($1)){
_st(self)._error_("createPackage:properties: called with nonempty properties");
};
$2=_st(self)._createPackage_(packageName);
return $2;
}, function($ctx1) {$ctx1.fill(self,"createPackage:properties:",{packageName:packageName,aDict:aDict},smalltalk.Smalltalk)})},
messageSends: ["deprecatedAPI", "ifFalse:", "error:", "isEmpty", "createPackage:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_deleteClass_",
smalltalk.method({
selector: "deleteClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self.removeClass(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"deleteClass:",{aClass:aClass},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_deletePackage_",
smalltalk.method({
selector: "deletePackage:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { delete smalltalk.packages[packageName];
return self}, function($ctx1) {$ctx1.fill(self,"deletePackage:",{packageName:packageName},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_isSmalltalkObject_",
smalltalk.method({
selector: "isSmalltalkObject:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return typeof anObject.klass !== 'undefined';
return self}, function($ctx1) {$ctx1.fill(self,"isSmalltalkObject:",{anObject:anObject},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packageAt_",
smalltalk.method({
selector: "packageAt:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.packages[packageName];
return self}, function($ctx1) {$ctx1.fill(self,"packageAt:",{packageName:packageName},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packageAt_ifAbsent_",
smalltalk.method({
selector: "packageAt:ifAbsent:",
fn: function (packageName,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._packageAt_(packageName);
$1=_st($2)._ifNil_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"packageAt:ifAbsent:",{packageName:packageName,aBlock:aBlock},smalltalk.Smalltalk)})},
messageSends: ["ifNil:", "packageAt:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.packages.all();
return self}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
fn: function (aString){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._try_catch_((function(){
return smalltalk.withContext(function($ctx2) {result=_st(self)._basicParse_(aString);
return result;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(ex){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._parseError_parsing_(ex,aString))._signal();
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString,result:result},smalltalk.Smalltalk)})},
messageSends: ["try:catch:", "basicParse:", "signal", "parseError:parsing:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_parseError_parsing_",
smalltalk.method({
selector: "parseError:parsing:",
fn: function (anException,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.ParseError || ParseError))._new())._messageText_(_st(_st(_st(_st(_st("Parse error on line ").__comma(_st(anException)._basicAt_("line"))).__comma(" column ")).__comma(_st(anException)._basicAt_("column"))).__comma(" : Unexpected character ")).__comma(_st(anException)._basicAt_("found")));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseError:parsing:",{anException:anException,aString:aString},smalltalk.Smalltalk)})},
messageSends: ["messageText:", ",", "basicAt:", "new"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_pseudoVariableNames",
smalltalk.method({
selector: "pseudoVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return ["self", "super", "nil", "true", "false", "thisContext"];
}, function($ctx1) {$ctx1.fill(self,"pseudoVariableNames",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_readJSObject_",
smalltalk.method({
selector: "readJSObject:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.readJSObject(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"readJSObject:",{anObject:anObject},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_removeClass_",
smalltalk.method({
selector: "removeClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(aClass)._isMetaclass();
if(smalltalk.assert($1)){
_st(self)._error_(_st(_st(aClass)._asString()).__comma(" is a Metaclass and cannot be removed!"));
};
_st(self)._deleteClass_(aClass);
$2=_st((smalltalk.ClassRemoved || ClassRemoved))._new();
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($3);
return self}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},smalltalk.Smalltalk)})},
messageSends: ["ifTrue:", "error:", ",", "asString", "isMetaclass", "deleteClass:", "announce:", "theClass:", "new", "yourself", "current"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_removePackage_",
smalltalk.method({
selector: "removePackage:",
fn: function (packageName){
var self=this;
var pkg;
return smalltalk.withContext(function($ctx1) { pkg=_st(self)._packageAt_ifAbsent_(packageName,(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._error_(_st("Missing package: ").__comma(packageName));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(pkg)._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._removeClass_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._deletePackage_(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"removePackage:",{packageName:packageName,pkg:pkg},smalltalk.Smalltalk)})},
messageSends: ["packageAt:ifAbsent:", "error:", ",", "do:", "removeClass:", "classes", "deletePackage:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_renamePackage_to_",
smalltalk.method({
selector: "renamePackage:to:",
fn: function (packageName,newName){
var self=this;
var pkg;
return smalltalk.withContext(function($ctx1) { var $1;
pkg=_st(self)._packageAt_ifAbsent_(packageName,(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._error_(_st("Missing package: ").__comma(packageName));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(self)._packageAt_(newName);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._error_(_st("Already exists a package called: ").__comma(newName));
};
_st(_st(self)._basicAt_("packages"))._at_put_(newName,pkg);
_st(pkg)._name_(newName);
_st(self)._deletePackage_(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"renamePackage:to:",{packageName:packageName,newName:newName,pkg:pkg},smalltalk.Smalltalk)})},
messageSends: ["packageAt:ifAbsent:", "error:", ",", "ifNotNil:", "packageAt:", "at:put:", "basicAt:", "name:", "deletePackage:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_reservedWords",
smalltalk.method({
selector: "reservedWords",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.reservedWords;
return self}, function($ctx1) {$ctx1.fill(self,"reservedWords",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_version",
smalltalk.method({
selector: "version",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "0.10";
}, function($ctx1) {$ctx1.fill(self,"version",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk;
return self}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.Smalltalk.klass)})},
messageSends: []}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('Timeout', smalltalk.Object, ['rawTimeout'], 'Kernel-Objects');
smalltalk.addMethod(
"_clearInterval",
smalltalk.method({
selector: "clearInterval",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var interval = self["@rawTimeout"];
		clearInterval(interval);
	;
return self}, function($ctx1) {$ctx1.fill(self,"clearInterval",{},smalltalk.Timeout)})},
messageSends: []}),
smalltalk.Timeout);

smalltalk.addMethod(
"_clearTimeout",
smalltalk.method({
selector: "clearTimeout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var timeout = self["@rawTimeout"];
		clearTimeout(timeout);
	;
return self}, function($ctx1) {$ctx1.fill(self,"clearTimeout",{},smalltalk.Timeout)})},
messageSends: []}),
smalltalk.Timeout);

smalltalk.addMethod(
"_rawTimeout_",
smalltalk.method({
selector: "rawTimeout:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@rawTimeout"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"rawTimeout:",{anObject:anObject},smalltalk.Timeout)})},
messageSends: []}),
smalltalk.Timeout);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._rawTimeout_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.Timeout.klass)})},
messageSends: ["rawTimeout:", "new", "yourself"]}),
smalltalk.Timeout.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=null;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self;
$1=_st($2)._ifNil_ifNotNil_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{aBlock:aBlock},smalltalk.UndefinedObject)})},
messageSends: ["ifNil:ifNotNil:"]}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aBlock)._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.UndefinedObject)})},
messageSends: ["value"]}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{aBlock:aBlock},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anotherBlock)._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.UndefinedObject)})},
messageSends: ["value"]}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_isNil",
smalltalk.method({
selector: "isNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isNil",{},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_notNil",
smalltalk.method({
selector: "notNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"notNil",{},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "nil";
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_",
smalltalk.method({
selector: "subclass:instanceVariableNames:",
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclass_instanceVariableNames_package_(aString,anotherString,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:",{aString:aString,anotherString:anotherString},smalltalk.UndefinedObject)})},
messageSends: ["subclass:instanceVariableNames:package:"]}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
fn: function (aString,aString2,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._deprecatedAPI();
$1=_st(self)._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:category:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.UndefinedObject)})},
messageSends: ["deprecatedAPI", "subclass:instanceVariableNames:package:"]}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
fn: function (aString,aString2,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._superclass_subclass_instanceVariableNames_package_(self,_st(aString)._asString(),aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:package:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.UndefinedObject)})},
messageSends: ["superclass:subclass:instanceVariableNames:package:", "asString", "new"]}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("You cannot create new instances of UndefinedObject. Use nil");
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.UndefinedObject.klass)})},
messageSends: ["error:"]}),
smalltalk.UndefinedObject.klass);


