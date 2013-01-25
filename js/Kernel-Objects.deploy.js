smalltalk.addPackage('Kernel-Objects', {});
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
}, self, "->", [anObject], smalltalk.Object)}
}),
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
}, self, "=", [anObject], smalltalk.Object)}
}),
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
}, self, "==", [anObject], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.variables=nil;
$ctx1.locals.variables=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(_st(_st(self)._class())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.variables)._at_put_(each,_st(_st(self)._instVarAt_(each))._asJSON());
})}));
return $ctx1.locals.variables;
}, self, "asJSON", [], smalltalk.Object)}
}),
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
}, self, "asJSONString", [], smalltalk.Object)}
}),
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
}, self, "asJavascript", [], smalltalk.Object)}
}),
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
}, self, "asString", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_",
smalltalk.method({
selector: "basicAt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return self[aString];
;
return self}, self, "basicAt:", [aString], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_put_",
smalltalk.method({
selector: "basicAt:put:",
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return self[aString] = anObject;
;
return self}, self, "basicAt:put:", [aString,anObject], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicDelete_",
smalltalk.method({
selector: "basicDelete:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { delete self[aString]; return aString;
;
return self}, self, "basicDelete:", [aString], smalltalk.Object)}
}),
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
}, self, "basicPerform:", [aSymbol], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicPerform_withArguments_",
smalltalk.method({
selector: "basicPerform:withArguments:",
fn: function (aSymbol,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { return self[aSymbol].apply(self, aCollection);;
;
return self}, self, "basicPerform:withArguments:", [aSymbol,aCollection], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_class",
smalltalk.method({
selector: "class",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.klass;
;
return self}, self, "class", [], smalltalk.Object)}
}),
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
}, self, "copy", [], smalltalk.Object)}
}),
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
;
return self}, self, "deepCopy", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_deprecatedAPI",
smalltalk.method({
selector: "deprecatedAPI",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(console)._warn_(_st(_st(_st(_st(_st(smalltalk.getThisContext())._home())._asString()).__comma(" is deprecated! (in ")).__comma(_st(_st(_st(smalltalk.getThisContext())._home())._home())._asString())).__comma(")"));
return self}, self, "deprecatedAPI", [], smalltalk.Object)}
}),
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
return self}, self, "doesNotUnderstand:", [aMessage], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.Error || Error))._signal_(aString);
return self}, self, "error:", [aString], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_halt",
smalltalk.method({
selector: "halt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("Halt encountered");
return self}, self, "halt", [], smalltalk.Object)}
}),
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
;
return self}, self, "identityHash", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "ifNil:", [aBlock], smalltalk.Object)}
}),
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
}, self, "ifNil:ifNotNil:", [aBlock,anotherBlock], smalltalk.Object)}
}),
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
}, self, "ifNotNil:", [aBlock], smalltalk.Object)}
}),
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
}, self, "ifNotNil:ifNil:", [aBlock,anotherBlock], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, self, "initialize", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_",
smalltalk.method({
selector: "instVarAt:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { return self['@'+aSymbol._asString()];
;
return self}, self, "instVarAt:", [aSymbol], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_put_",
smalltalk.method({
selector: "instVarAt:put:",
fn: function (aSymbol,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self['@' + aSymbol._asString()] = anObject;
;
return self}, self, "instVarAt:put:", [aSymbol,anObject], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isClass",
smalltalk.method({
selector: "isClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isClass", [], smalltalk.Object)}
}),
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
}, self, "isKindOf:", [aClass], smalltalk.Object)}
}),
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
}, self, "isMemberOf:", [aClass], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isMetaclass",
smalltalk.method({
selector: "isMetaclass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isMetaclass", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isNil",
smalltalk.method({
selector: "isNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isNil", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isNumber",
smalltalk.method({
selector: "isNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isNumber", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isParseFailure",
smalltalk.method({
selector: "isParseFailure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isParseFailure", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isString", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isSymbol",
smalltalk.method({
selector: "isSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "isSymbol", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_log_block_",
smalltalk.method({
selector: "log:block:",
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.result=nil;
_st(console)._log_(_st(_st(aString).__comma(" time: ")).__comma(_st(_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.result=_st(aBlock)._value();
return $ctx1.locals.result;
})})))._printString()));
return $ctx1.locals.result;
}, self, "log:block:", [aString,aBlock], smalltalk.Object)}
}),
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
}, self, "notNil", [], smalltalk.Object)}
}),
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
}, self, "perform:", [aSymbol], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_perform_withArguments_",
smalltalk.method({
selector: "perform:withArguments:",
fn: function (aSymbol,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.send(self, aSymbol._asSelector(), aCollection);
;
return self}, self, "perform:withArguments:", [aSymbol,aCollection], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_postCopy",
smalltalk.method({
selector: "postCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, self, "postCopy", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { console.log(self);
;
return self}, self, "printNl", [], smalltalk.Object)}
}),
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
}, self, "printString", [], smalltalk.Object)}
}),
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
}, self, "respondsTo:", [aSelector], smalltalk.Object)}
}),
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
;
return self}, self, "shallowCopy", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_shouldNotImplement",
smalltalk.method({
selector: "shouldNotImplement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_(_st("This method should not be implemented in ").__comma(_st(_st(self)._class())._name()));
return self}, self, "shouldNotImplement", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("Object not indexable");
return self}, self, "size", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aStream)._nextPutAll_(_st(self)._printString());
return self}, self, "storeOn:", [aStream], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_storeString",
smalltalk.method({
selector: "storeString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(s){
return smalltalk.withContext(function($ctx2) { return _st(self)._storeOn_(s);
})}));
return $1;
}, self, "storeString", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_subclassResponsibility",
smalltalk.method({
selector: "subclassResponsibility",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("This method is a responsibility of a subclass");
return self}, self, "subclassResponsibility", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_throw_",
smalltalk.method({
selector: "throw:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) {  throw anObject ;
;
return self}, self, "throw:", [anObject], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_try_catch_",
smalltalk.method({
selector: "try:catch:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { try{return aBlock()} catch(e) {return anotherBlock(e)};
;
return self}, self, "try:catch:", [aBlock,anotherBlock], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "value", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_yourself",
smalltalk.method({
selector: "yourself",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "yourself", [], smalltalk.Object)}
}),
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
}, self, "~=", [anObject], smalltalk.Object)}
}),
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
}, self, "~~", [anObject], smalltalk.Object)}
}),
smalltalk.Object);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, self, "initialize", [], smalltalk.Object.klass)}
}),
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
;
return self}, self, "&", [aBoolean], smalltalk.Boolean)}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aBoolean)._class()).__eq(_st(self)._class());
if(! smalltalk.assert($1)){
return false;
};
return Boolean(self == true) == aBoolean;
;
return self}, self, "=", [aBoolean], smalltalk.Boolean)}
}),
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
}, self, "==", [aBoolean], smalltalk.Boolean)}
}),
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
return smalltalk.withContext(function($ctx2) { return false;
})}));
return $1;
}, self, "and:", [aBlock], smalltalk.Boolean)}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "asJSON", [], smalltalk.Boolean)}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "deepCopy", [], smalltalk.Boolean)}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) { })}),aBlock);
return $1;
}, self, "ifFalse:", [aBlock], smalltalk.Boolean)}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._ifTrue_ifFalse_(anotherBlock,aBlock);
return $1;
}, self, "ifFalse:ifTrue:", [aBlock,anotherBlock], smalltalk.Boolean)}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._ifTrue_ifFalse_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) { })}));
return $1;
}, self, "ifTrue:", [aBlock], smalltalk.Boolean)}
}),
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
;
return self}, self, "ifTrue:ifFalse:", [aBlock,anotherBlock], smalltalk.Boolean)}
}),
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
}, self, "not", [], smalltalk.Boolean)}
}),
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
return smalltalk.withContext(function($ctx2) { return true;
})}),aBlock);
return $1;
}, self, "or:", [aBlock], smalltalk.Boolean)}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toString();
;
return self}, self, "printString", [], smalltalk.Boolean)}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "shallowCopy", [], smalltalk.Boolean)}
}),
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
;
return self}, self, "|", [aBoolean], smalltalk.Boolean)}
}),
smalltalk.Boolean);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.args || [];
;
return self}, self, "arguments", [], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._basicAt_("category");
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, self, "category", [], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_category_",
smalltalk.method({
selector: "category:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.locals.oldCategory=nil;
$ctx1.locals.oldCategory=_st(self)._category();
_st(self)._basicAt_put_("category",aString);
$1=_st(self)._methodClass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(_st(self)._methodClass())._organization())._addElement_(aString);
_st(_st(_st(_st(self)._methodClass())._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(each)._category()).__eq($ctx1.locals.oldCategory);
})})))._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(self)._methodClass())._organization())._removeElement_($ctx1.locals.oldCategory);
})}));
};
return self}, self, "category:", [aString], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_fn",
smalltalk.method({
selector: "fn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_("fn");
return $1;
}, self, "fn", [], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_fn_",
smalltalk.method({
selector: "fn:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._basicAt_put_("fn",aBlock);
return self}, self, "fn:", [aBlock], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_("messageSends");
return $1;
}, self, "messageSends", [], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_methodClass",
smalltalk.method({
selector: "methodClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_("methodClass");
return $1;
}, self, "methodClass", [], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_protocol",
smalltalk.method({
selector: "protocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._category();
return $1;
}, self, "protocol", [], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_referencedClasses",
smalltalk.method({
selector: "referencedClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_("referencedClasses");
return $1;
}, self, "referencedClasses", [], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_("selector");
return $1;
}, self, "selector", [], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._basicAt_put_("selector",aString);
return self}, self, "selector:", [aString], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._basicAt_("source");
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, self, "source", [], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._basicAt_put_("source",aString);
return self}, self, "source:", [aString], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { return self + aDate;
;
return self}, self, "+", [aDate], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { return self - aDate;
;
return self}, self, "-", [aDate], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { return self < aDate;
;
return self}, self, "<", [aDate], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { return self <= aDate;
;
return self}, self, "<=", [aDate], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { return self > aDate;
;
return self}, self, ">", [aDate], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { return self >= aDate;
;
return self}, self, ">=", [aDate], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asDateString",
smalltalk.method({
selector: "asDateString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toDateString();
;
return self}, self, "asDateString", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asLocaleString",
smalltalk.method({
selector: "asLocaleString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toLocaleString();
;
return self}, self, "asLocaleString", [], smalltalk.Date)}
}),
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
}, self, "asMilliseconds", [], smalltalk.Date)}
}),
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
}, self, "asNumber", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toString();
;
return self}, self, "asString", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asTimeString",
smalltalk.method({
selector: "asTimeString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toTimeString();
;
return self}, self, "asTimeString", [], smalltalk.Date)}
}),
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
}, self, "day", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_day_",
smalltalk.method({
selector: "day:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._dayOfWeek_(aNumber);
return self}, self, "day:", [aNumber], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth",
smalltalk.method({
selector: "dayOfMonth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getDate();
;
return self}, self, "dayOfMonth", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth_",
smalltalk.method({
selector: "dayOfMonth:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setDate(aNumber);
;
return self}, self, "dayOfMonth:", [aNumber], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek",
smalltalk.method({
selector: "dayOfWeek",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getDay() + 1;
;
return self}, self, "dayOfWeek", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek_",
smalltalk.method({
selector: "dayOfWeek:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.setDay(aNumber - 1);
;
return self}, self, "dayOfWeek:", [aNumber], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_hours",
smalltalk.method({
selector: "hours",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getHours();
;
return self}, self, "hours", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_hours_",
smalltalk.method({
selector: "hours:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setHours(aNumber);
;
return self}, self, "hours:", [aNumber], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds",
smalltalk.method({
selector: "milliseconds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getMilliseconds();
;
return self}, self, "milliseconds", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds_",
smalltalk.method({
selector: "milliseconds:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setMilliseconds(aNumber);
;
return self}, self, "milliseconds:", [aNumber], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes",
smalltalk.method({
selector: "minutes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getMinutes();
;
return self}, self, "minutes", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes_",
smalltalk.method({
selector: "minutes:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setMinutes(aNumber);
;
return self}, self, "minutes:", [aNumber], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_month",
smalltalk.method({
selector: "month",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getMonth() + 1;
;
return self}, self, "month", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_month_",
smalltalk.method({
selector: "month:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setMonth(aNumber - 1);
;
return self}, self, "month:", [aNumber], smalltalk.Date)}
}),
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
}, self, "printString", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds",
smalltalk.method({
selector: "seconds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getSeconds();
;
return self}, self, "seconds", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds_",
smalltalk.method({
selector: "seconds:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setSeconds(aNumber);
;
return self}, self, "seconds:", [aNumber], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_time",
smalltalk.method({
selector: "time",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getTime();
;
return self}, self, "time", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_time_",
smalltalk.method({
selector: "time:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setTime(aNumber);
;
return self}, self, "time:", [aNumber], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_year",
smalltalk.method({
selector: "year",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.getFullYear();
;
return self}, self, "year", [], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_year_",
smalltalk.method({
selector: "year:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self.setFullYear(aNumber);
;
return self}, self, "year:", [aNumber], smalltalk.Date)}
}),
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
}, self, "fromMilliseconds:", [aNumber], smalltalk.Date.klass)}
}),
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
}, self, "fromSeconds:", [aNumber], smalltalk.Date.klass)}
}),
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
}, self, "fromString:", [aString], smalltalk.Date.klass)}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_millisecondsToRun_",
smalltalk.method({
selector: "millisecondsToRun:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.t=nil;
$ctx1.locals.t=_st((smalltalk.Date || Date))._now();
_st(aBlock)._value();
$1=_st(_st((smalltalk.Date || Date))._now()).__minus($ctx1.locals.t);
return $1;
}, self, "millisecondsToRun:", [aBlock], smalltalk.Date.klass)}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return new Date(anObject);
;
return self}, self, "new:", [anObject], smalltalk.Date.klass)}
}),
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
}, self, "now", [], smalltalk.Date.klass)}
}),
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
}, self, "today", [], smalltalk.Date.klass)}
}),
smalltalk.Date.klass);


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel-Objects');
smalltalk.addMethod(
"_addObjectVariablesTo_",
smalltalk.method({
selector: "addObjectVariablesTo:",
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { for(var i in self['@jsObject']) {
		aDictionary._at_put_(i, self['@jsObject'][i]);
	};
;
return self}, self, "addObjectVariablesTo:", [aDictionary], smalltalk.JSObjectProxy)}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { return self['@jsObject'][aSymbol._asString()];
;
return self}, self, "at:", [aSymbol], smalltalk.JSObjectProxy)}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (aSymbol,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self['@jsObject'][aSymbol._asString()] = anObject;
;
return self}, self, "at:put:", [aSymbol,anObject], smalltalk.JSObjectProxy)}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
    	var jsSelector = aMessage._selector()._asJavaScriptSelector();
        var object = self._jsObject();
    	if(jsSelector in object) {
        	return smalltalk.send(object, jsSelector, aMessage._arguments());
        }
    ;
;
smalltalk.Object.fn.prototype._doesNotUnderstand_.apply(_st(self), [aMessage]);
return self}, self, "doesNotUnderstand:", [aMessage], smalltalk.JSObjectProxy)}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.variables=nil;
$ctx1.locals.variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st($ctx1.locals.variables)._at_put_("#self",_st(self)._jsObject());
_st(anInspector)._setLabel_(_st(self)._printString());
_st(self)._addObjectVariablesTo_($ctx1.locals.variables);
_st(anInspector)._setVariables_($ctx1.locals.variables);
return self}, self, "inspectOn:", [anInspector], smalltalk.JSObjectProxy)}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_jsObject",
smalltalk.method({
selector: "jsObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@jsObject"];
}, self, "jsObject", [], smalltalk.JSObjectProxy)}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_jsObject_",
smalltalk.method({
selector: "jsObject:",
fn: function (aJSObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@jsObject"]=aJSObject;
return self}, self, "jsObject:", [aJSObject], smalltalk.JSObjectProxy)}
}),
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
}, self, "printString", [], smalltalk.JSObjectProxy)}
}),
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
}, self, "on:", [aJSObject], smalltalk.JSObjectProxy.klass)}
}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"__and",
smalltalk.method({
selector: "&",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self & aNumber;
;
return self}, self, "&", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self * aNumber;
;
return self}, self, "*", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self + aNumber;
;
return self}, self, "+", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self - aNumber;
;
return self}, self, "-", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self / aNumber;
;
return self}, self, "/", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self < aNumber;
;
return self}, self, "<", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self <= aNumber;
;
return self}, self, "<=", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aNumber)._isNumber();
if(! smalltalk.assert($1)){
return false;
};
return Number(self) == aNumber;
;
return self}, self, "=", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self > aNumber;
;
return self}, self, ">", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self >= aNumber;
;
return self}, self, ">=", [aNumber], smalltalk.Number)}
}),
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
}, self, "@", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"__backslash",
smalltalk.method({
selector: "\x5c",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self % aNumber;
;
return self}, self, "\x5c\x5c", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"__backslash_backslash",
smalltalk.method({
selector: "\x5c\x5c",
fn: function (aNumber) {
    var self = this;
    return self % aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_abs",
smalltalk.method({
selector: "abs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=Math.abs(self);;
;
return $1;
}, self, "abs", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "asJSON", [], smalltalk.Number)}
}),
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
}, self, "asJavascript", [], smalltalk.Number)}
}),
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
}, self, "asPoint", [], smalltalk.Number)}
}),
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
}, self, "asString", [], smalltalk.Number)}
}),
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
}, self, "atRandom", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_clearInterval",
smalltalk.method({
selector: "clearInterval",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { clearInterval(Number(self));
;
return self}, self, "clearInterval", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_clearTimeout",
smalltalk.method({
selector: "clearTimeout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { clearTimeout(Number(self));
;
return self}, self, "clearTimeout", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_copy",
smalltalk.method({
selector: "copy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "copy", [], smalltalk.Number)}
}),
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
}, self, "deepCopy", [], smalltalk.Number)}
}),
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
}, self, "even", [], smalltalk.Number)}
}),
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
}, self, "identityHash", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_isNumber",
smalltalk.method({
selector: "isNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isNumber", [], smalltalk.Number)}
}),
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
}, self, "isZero", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_max_",
smalltalk.method({
selector: "max:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.max(self, aNumber);;
;
return self}, self, "max:", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_min_",
smalltalk.method({
selector: "min:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.min(self, aNumber);;
;
return self}, self, "min:", [aNumber], smalltalk.Number)}
}),
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
}, self, "negated", [], smalltalk.Number)}
}),
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
}, self, "negative", [], smalltalk.Number)}
}),
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
}, self, "odd", [], smalltalk.Number)}
}),
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
}, self, "positive", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_printShowingDecimalPlaces_",
smalltalk.method({
selector: "printShowingDecimalPlaces:",
fn: function (placesDesired){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toFixed(placesDesired);
;
return self}, self, "printShowingDecimalPlaces:", [placesDesired], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return String(self);
;
return self}, self, "printString", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_rounded",
smalltalk.method({
selector: "rounded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.round(self);;
;
return self}, self, "rounded", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_sqrt",
smalltalk.method({
selector: "sqrt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.sqrt(self);
;
return self}, self, "sqrt", [], smalltalk.Number)}
}),
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
}, self, "squared", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_timesRepeat_",
smalltalk.method({
selector: "timesRepeat:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.integer=nil;
$ctx1.count=nil;
$ctx1.locals.integer=_st(self)._truncated();
$ctx1.locals.count=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.count).__gt(self);
})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) { _st(aBlock)._value();
$ctx1.locals.count=_st($ctx1.locals.count).__plus((1));
return $ctx1.locals.count;
})}));
return self}, self, "timesRepeat:", [aBlock], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_",
smalltalk.method({
selector: "to:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.array=nil;
$ctx1.first=nil;
$ctx1.last=nil;
$ctx1.count=nil;
$ctx1.locals.first=_st(self)._truncated();
$ctx1.locals.last=_st(_st(aNumber)._truncated()).__plus((1));
$ctx1.locals.count=(1);
$ctx1.locals.array=_st((smalltalk.Array || Array))._new();
_st(_st($ctx1.locals.last).__minus($ctx1.locals.first))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) { _st($ctx1.locals.array)._at_put_($ctx1.locals.count,$ctx1.locals.first);
$ctx1.locals.count=_st($ctx1.locals.count).__plus((1));
$ctx1.locals.count;
$ctx1.locals.first=_st($ctx1.locals.first).__plus((1));
return $ctx1.locals.first;
})}));
return $ctx1.locals.array;
}, self, "to:", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_by_",
smalltalk.method({
selector: "to:by:",
fn: function (stop,step){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.array=nil;
$ctx1.value=nil;
$ctx1.pos=nil;
$ctx1.locals.value=self;
$ctx1.locals.array=_st((smalltalk.Array || Array))._new();
$ctx1.locals.pos=(1);
$1=_st(step).__eq((0));
if(smalltalk.assert($1)){
_st(self)._error_("step must be non-zero");
};
$2=_st(step).__lt((0));
if(smalltalk.assert($2)){
_st((function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.value).__gt_eq(stop);
})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) { _st($ctx1.locals.array)._at_put_($ctx1.locals.pos,$ctx1.locals.value);
$ctx1.locals.pos=_st($ctx1.locals.pos).__plus((1));
$ctx1.locals.pos;
$ctx1.locals.value=_st($ctx1.locals.value).__plus(step);
return $ctx1.locals.value;
})}));
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.value).__lt_eq(stop);
})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) { _st($ctx1.locals.array)._at_put_($ctx1.locals.pos,$ctx1.locals.value);
$ctx1.locals.pos=_st($ctx1.locals.pos).__plus((1));
$ctx1.locals.pos;
$ctx1.locals.value=_st($ctx1.locals.value).__plus(step);
return $ctx1.locals.value;
})}));
};
return $ctx1.locals.array;
}, self, "to:by:", [stop,step], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_by_do_",
smalltalk.method({
selector: "to:by:do:",
fn: function (stop,step,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.value=nil;
$ctx1.locals.value=self;
$1=_st(step).__eq((0));
if(smalltalk.assert($1)){
_st(self)._error_("step must be non-zero");
};
$2=_st(step).__lt((0));
if(smalltalk.assert($2)){
_st((function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.value).__gt_eq(stop);
})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) { _st(aBlock)._value_($ctx1.locals.value);
$ctx1.locals.value=_st($ctx1.locals.value).__plus(step);
return $ctx1.locals.value;
})}));
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.value).__lt_eq(stop);
})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) { _st(aBlock)._value_($ctx1.locals.value);
$ctx1.locals.value=_st($ctx1.locals.value).__plus(step);
return $ctx1.locals.value;
})}));
};
return self}, self, "to:by:do:", [stop,step,aBlock], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_do_",
smalltalk.method({
selector: "to:do:",
fn: function (stop,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.nextValue=nil;
$ctx1.locals.nextValue=self;
_st((function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.nextValue).__lt_eq(stop);
})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) { _st(aBlock)._value_($ctx1.locals.nextValue);
$ctx1.locals.nextValue=_st($ctx1.locals.nextValue).__plus((1));
return $ctx1.locals.nextValue;
})}));
return self}, self, "to:do:", [stop,aBlock], smalltalk.Number)}
}),
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
;
return self}, self, "truncated", [], smalltalk.Number)}
}),
smalltalk.Number);

smalltalk.addMethod(
"__or",
smalltalk.method({
selector: "|",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { return self | aNumber;
;
return self}, self, "|", [aNumber], smalltalk.Number)}
}),
smalltalk.Number);


smalltalk.addMethod(
"_pi",
smalltalk.method({
selector: "pi",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.PI;
;
return self}, self, "pi", [], smalltalk.Number.klass)}
}),
smalltalk.Number.klass);


smalltalk.addClass('Organizer', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_addElement_",
smalltalk.method({
selector: "addElement:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self.elements.addElement(anObject);
;
return self}, self, "addElement:", [anObject], smalltalk.Organizer)}
}),
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
}, self, "elements", [], smalltalk.Organizer)}
}),
smalltalk.Organizer);

smalltalk.addMethod(
"_removeElement_",
smalltalk.method({
selector: "removeElement:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self.elements.removeElement(anObject);
;
return self}, self, "removeElement:", [anObject], smalltalk.Organizer)}
}),
smalltalk.Organizer);



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
}, self, "classes", [], smalltalk.Package)}
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathJs",
smalltalk.method({
selector: "commitPathJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@commitPathJs"]) == nil || $receiver == undefined){
$1=_st(_st(self)._class())._defaultCommitPathJs();
} else {
$1=self["@commitPathJs"];
};
return $1;
}, self, "commitPathJs", [], smalltalk.Package)}
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathJs_",
smalltalk.method({
selector: "commitPathJs:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@commitPathJs"]=aString;
return self}, self, "commitPathJs:", [aString], smalltalk.Package)}
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathSt",
smalltalk.method({
selector: "commitPathSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@commitPathSt"]) == nil || $receiver == undefined){
$1=_st(_st(self)._class())._defaultCommitPathSt();
} else {
$1=self["@commitPathSt"];
};
return $1;
}, self, "commitPathSt", [], smalltalk.Package)}
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathSt_",
smalltalk.method({
selector: "commitPathSt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@commitPathSt"]=aString;
return self}, self, "commitPathSt:", [aString], smalltalk.Package)}
}),
smalltalk.Package);

smalltalk.addMethod(
"_dependencies",
smalltalk.method({
selector: "dependencies",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._propertyAt_ifAbsent_("dependencies",(function(){
return smalltalk.withContext(function($ctx2) { return [];
})}));
return $1;
}, self, "dependencies", [], smalltalk.Package)}
}),
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
}, self, "dependencies:", [anArray], smalltalk.Package)}
}),
smalltalk.Package);

smalltalk.addMethod(
"_jsProperties",
smalltalk.method({
selector: "jsProperties",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.properties;
;
return self}, self, "jsProperties", [], smalltalk.Package)}
}),
smalltalk.Package);

smalltalk.addMethod(
"_jsProperties_",
smalltalk.method({
selector: "jsProperties:",
fn: function (aJSObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.properties = aJSObject;
;
return self}, self, "jsProperties:", [aJSObject], smalltalk.Package)}
}),
smalltalk.Package);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.pkgName;
;
return self}, self, "name", [], smalltalk.Package)}
}),
smalltalk.Package);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self.pkgName = aString;
;
return self}, self, "name:", [aString], smalltalk.Package)}
}),
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
}, self, "organization", [], smalltalk.Package)}
}),
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
}, self, "printString", [], smalltalk.Package)}
}),
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
}, self, "properties", [], smalltalk.Package)}
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertiesAsJSON",
smalltalk.method({
selector: "propertiesAsJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return JSON.stringify(self.properties);
;
return self}, self, "propertiesAsJSON", [], smalltalk.Package)}
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_",
smalltalk.method({
selector: "propertyAt:",
fn: function (key){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.properties[key];
;
return self}, self, "propertyAt:", [key], smalltalk.Package)}
}),
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
}, self, "propertyAt:ifAbsent:", [key,block], smalltalk.Package)}
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_put_",
smalltalk.method({
selector: "propertyAt:put:",
fn: function (key,value){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.properties[key] = value;
;
return self}, self, "propertyAt:put:", [key,value], smalltalk.Package)}
}),
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
}, self, "sortedClasses", [], smalltalk.Package)}
}),
smalltalk.Package);


smalltalk.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
"_commitToLocalStorage_",
smalltalk.method({
selector: "commitToLocalStorage:",
fn: function (aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.key=nil;
$ctx1.sourceCode=nil;
$ctx1.locals.key=_st("smalltalk.packages.").__comma(aPackageName);
$ctx1.locals.sourceCode=_st(_st((smalltalk.Exporter || Exporter))._new())._exportPackage_(aPackageName);
localStorage[key] = escape(sourceCode);
;
return self}, self, "commitToLocalStorage:", [aPackageName], smalltalk.Package.klass)}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathJs",
smalltalk.method({
selector: "defaultCommitPathJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@defaultCommitPathJs"]) == nil || $receiver == undefined){
self["@defaultCommitPathJs"]="js";
$1=self["@defaultCommitPathJs"];
} else {
$1=self["@defaultCommitPathJs"];
};
return $1;
}, self, "defaultCommitPathJs", [], smalltalk.Package.klass)}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathJs_",
smalltalk.method({
selector: "defaultCommitPathJs:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@defaultCommitPathJs"]=aString;
return self}, self, "defaultCommitPathJs:", [aString], smalltalk.Package.klass)}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathSt",
smalltalk.method({
selector: "defaultCommitPathSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@defaultCommitPathSt"]) == nil || $receiver == undefined){
self["@defaultCommitPathSt"]="st";
$1=self["@defaultCommitPathSt"];
} else {
$1=self["@defaultCommitPathSt"];
};
return $1;
}, self, "defaultCommitPathSt", [], smalltalk.Package.klass)}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathSt_",
smalltalk.method({
selector: "defaultCommitPathSt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@defaultCommitPathSt"]=aString;
return self}, self, "defaultCommitPathSt:", [aString], smalltalk.Package.klass)}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_fetch_",
smalltalk.method({
selector: "fetch:",
fn: function (aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._fetch_prefix_(aPackageName,_st(_st(self)._defaultCommitPathJs()).__comma("/"));
return self}, self, "fetch:", [aPackageName], smalltalk.Package.klass)}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_fetch_prefix_",
smalltalk.method({
selector: "fetch:prefix:",
fn: function (aPackageName,aPrefix){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(jQuery)._getScript_onSuccess_(_st(_st(aPrefix).__comma(aPackageName)).__comma(".js"),(function(){
return smalltalk.withContext(function($ctx2) { return _st((smalltalk.Package || Package))._init_(aPackageName);
})}));
return self}, self, "fetch:prefix:", [aPackageName,aPrefix], smalltalk.Package.klass)}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_init_",
smalltalk.method({
selector: "init:",
fn: function (aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(smalltalk)._classes())._select_((function(each){
return smalltalk.withContext(function($ctx2) { return each.pkg.pkgName == aPackageName;
;
})}));
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) { return smalltalk.init(each);
;
})}));
$2=_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(each)._initialize();
})}));
return self}, self, "init:", [aPackageName], smalltalk.Package.klass)}
}),
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
}, self, "named:", [aPackageName], smalltalk.Package.klass)}
}),
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
}, self, "named:ifAbsent:", [aPackageName,aBlock], smalltalk.Package.klass)}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_resetCommitPaths",
smalltalk.method({
selector: "resetCommitPaths",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@defaultCommitPathJs"]=nil;
self["@defaultCommitPathSt"]=nil;
return self}, self, "resetCommitPaths", [], smalltalk.Package.klass)}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_sortedClasses_",
smalltalk.method({
selector: "sortedClasses:",
fn: function (classes){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.children=nil;
$ctx1.others=nil;
$ctx1.nodes=nil;
$ctx1.expandedClasses=nil;
$ctx1.locals.children=[];
$ctx1.locals.others=[];
_st(classes)._do_((function(each){
return smalltalk.withContext(function($ctx2) { $1=_st(classes)._includes_(_st(each)._superclass());
if(smalltalk.assert($1)){
return _st($ctx1.locals.others)._add_(each);
} else {
return _st($ctx1.locals.children)._add_(each);
};
})}));
$ctx1.locals.nodes=_st($ctx1.locals.children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) { return _st((smalltalk.ClassSorterNode || ClassSorterNode))._on_classes_level_(each,$ctx1.locals.others,(0));
})}));
$ctx1.locals.nodes=_st($ctx1.locals.nodes)._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(a)._theClass())._name()).__lt_eq(_st(_st(b)._theClass())._name());
})}));
$ctx1.locals.expandedClasses=_st((smalltalk.Array || Array))._new();
_st($ctx1.locals.nodes)._do_((function(aNode){
return smalltalk.withContext(function($ctx2) { return _st(aNode)._traverseClassesWith_($ctx1.locals.expandedClasses);
})}));
return $ctx1.locals.expandedClasses;
}, self, "sortedClasses:", [classes], smalltalk.Package.klass)}
}),
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
}, self, "*", [aPoint], smalltalk.Point)}
}),
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
}, self, "+", [aPoint], smalltalk.Point)}
}),
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
}, self, "-", [aPoint], smalltalk.Point)}
}),
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
}, self, "/", [aPoint], smalltalk.Point)}
}),
smalltalk.Point);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(aPoint)._class()).__eq(_st(self)._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(aPoint)._x()).__eq(_st(self)._x())).__and(_st(_st(aPoint)._y()).__eq(_st(self)._y()));
})}));
return $1;
}, self, "=", [aPoint], smalltalk.Point)}
}),
smalltalk.Point);

smalltalk.addMethod(
"_asPoint",
smalltalk.method({
selector: "asPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "asPoint", [], smalltalk.Point)}
}),
smalltalk.Point);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) { _st(stream)._nextPutAll_(_st(_st(self["@x"])._printString()).__comma("@"));
$2=_st(_st(self["@y"])._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self["@y"])._negative();
})}));
if(smalltalk.assert($2)){
_st(stream)._space();
};
return _st(stream)._nextPutAll_(_st(self["@y"])._printString());
})}));
return $1;
}, self, "printString", [], smalltalk.Point)}
}),
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
}, self, "translateBy:", [delta], smalltalk.Point)}
}),
smalltalk.Point);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@x"];
}, self, "x", [], smalltalk.Point)}
}),
smalltalk.Point);

smalltalk.addMethod(
"_x_",
smalltalk.method({
selector: "x:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@x"]=aNumber;
return self}, self, "x:", [aNumber], smalltalk.Point)}
}),
smalltalk.Point);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@y"];
}, self, "y", [], smalltalk.Point)}
}),
smalltalk.Point);

smalltalk.addMethod(
"_y_",
smalltalk.method({
selector: "y:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@y"]=aNumber;
return self}, self, "y:", [aNumber], smalltalk.Point)}
}),
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
}, self, "x:y:", [aNumber,anotherNumber], smalltalk.Point.klass)}
}),
smalltalk.Point.klass);


smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return Math.random();
;
return self}, self, "next", [], smalltalk.Random)}
}),
smalltalk.Random);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((1))._to_(anInteger))._collect_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._next();
})}));
return $1;
}, self, "next:", [anInteger], smalltalk.Random)}
}),
smalltalk.Random);



smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { return self[aSymbol._asString()];
;
return self}, self, "at:", [aSymbol], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_basicParse_",
smalltalk.method({
selector: "basicParse:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.parser.parse(aString);
;
return self}, self, "basicParse:", [aString], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.classes();
;
return self}, self, "classes", [], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_createPackage_",
smalltalk.method({
selector: "createPackage:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.addPackage(packageName);
;
return self}, self, "createPackage:", [packageName], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_deleteClass_",
smalltalk.method({
selector: "deleteClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self.removeClass(aClass);
;
return self}, self, "deleteClass:", [aClass], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_deletePackage_",
smalltalk.method({
selector: "deletePackage:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { delete smalltalk.packages[packageName];
;
return self}, self, "deletePackage:", [packageName], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packageAt_",
smalltalk.method({
selector: "packageAt:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.packages[packageName];
;
return self}, self, "packageAt:", [packageName], smalltalk.Smalltalk)}
}),
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
}, self, "packageAt:ifAbsent:", [packageName,aBlock], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.packages.all();
;
return self}, self, "packages", [], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.result=nil;
_st(self)._try_catch_((function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.result=_st(self)._basicParse_(aString);
return $ctx1.locals.result;
})}),(function(ex){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._parseError_parsing_(ex,aString))._signal();
})}));
return $ctx1.locals.result;
}, self, "parse:", [aString], smalltalk.Smalltalk)}
}),
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
}, self, "parseError:parsing:", [anException,aString], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_pseudoVariableNames",
smalltalk.method({
selector: "pseudoVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return ["self", "super", "nil", "true", "false", "thisContext"];
}, self, "pseudoVariableNames", [], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_readJSObject_",
smalltalk.method({
selector: "readJSObject:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.readJSObject(anObject);
;
return self}, self, "readJSObject:", [anObject], smalltalk.Smalltalk)}
}),
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
_st(_st(_st(aClass)._methodDictionary())._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(aClass)._removeCompiledMethod_(each);
})}));
_st(_st(_st(_st(aClass)._class())._methodDictionary())._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(aClass)._class())._removeCompiledMethod_(each);
})}));
_st(self)._deleteClass_(aClass);
$2=_st((smalltalk.ClassRemoved || ClassRemoved))._new();
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($3);
return self}, self, "removeClass:", [aClass], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_removePackage_",
smalltalk.method({
selector: "removePackage:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.pkg=nil;
$ctx1.locals.pkg=_st(self)._packageAt_ifAbsent_(packageName,(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._error_(_st("Missing package: ").__comma(packageName));
})}));
_st(_st($ctx1.locals.pkg)._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._removeClass_(each);
})}));
_st(self)._deletePackage_(packageName);
return self}, self, "removePackage:", [packageName], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_renamePackage_to_",
smalltalk.method({
selector: "renamePackage:to:",
fn: function (packageName,newName){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.pkg=nil;
$ctx1.locals.pkg=_st(self)._packageAt_ifAbsent_(packageName,(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._error_(_st("Missing package: ").__comma(packageName));
})}));
$1=_st(self)._packageAt_(newName);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._error_(_st("Already exists a package called: ").__comma(newName));
};
smalltalk.packages[newName] = smalltalk.packages[packageName];
;
_st($ctx1.locals.pkg)._name_(newName);
_st(self)._deletePackage_(packageName);
return self}, self, "renamePackage:to:", [packageName,newName], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_reservedWords",
smalltalk.method({
selector: "reservedWords",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.reservedWords;
;
return self}, self, "reservedWords", [], smalltalk.Smalltalk)}
}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk;
;
return self}, self, "current", [], smalltalk.Smalltalk.klass)}
}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return null;
}, self, "asJSON", [], smalltalk.UndefinedObject)}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "deepCopy", [], smalltalk.UndefinedObject)}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._ifNil_ifNotNil_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) { })}));
return $1;
}, self, "ifNil:", [aBlock], smalltalk.UndefinedObject)}
}),
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
}, self, "ifNil:ifNotNil:", [aBlock,anotherBlock], smalltalk.UndefinedObject)}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "ifNotNil:", [aBlock], smalltalk.UndefinedObject)}
}),
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
}, self, "ifNotNil:ifNil:", [aBlock,anotherBlock], smalltalk.UndefinedObject)}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_isNil",
smalltalk.method({
selector: "isNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isNil", [], smalltalk.UndefinedObject)}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_notNil",
smalltalk.method({
selector: "notNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "notNil", [], smalltalk.UndefinedObject)}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "nil";
}, self, "printString", [], smalltalk.UndefinedObject)}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "shallowCopy", [], smalltalk.UndefinedObject)}
}),
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
}, self, "subclass:instanceVariableNames:", [aString,anotherString], smalltalk.UndefinedObject)}
}),
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
}, self, "subclass:instanceVariableNames:category:", [aString,aString2,aString3], smalltalk.UndefinedObject)}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
fn: function (aString,aString2,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._superclass_subclass_instanceVariableNames_package_(self,aString,aString2,aString3);
return $1;
}, self, "subclass:instanceVariableNames:package:", [aString,aString2,aString3], smalltalk.UndefinedObject)}
}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("You cannot create new instances of UndefinedObject. Use nil");
return self}, self, "new", [], smalltalk.UndefinedObject.klass)}
}),
smalltalk.UndefinedObject.klass);


