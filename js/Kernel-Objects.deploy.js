smalltalk.addPackage('Kernel-Objects', {});
smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel-Objects');
smalltalk.addMethod(
"__minus_gt",
smalltalk.method({
selector: "->",
fn: function Object__minus_gt(anObject){
var self=this;
return smalltalk.send((smalltalk.Association || Association), "_key_value_", [self, anObject]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function Object__eq(anObject){
var self=this;
return smalltalk.send(self, "__eq_eq", [anObject]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function Object__eq_eq(anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_identityHash", []), "__eq", [smalltalk.send(anObject, "_identityHash", [])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function Object_asJSON(){
var self=this;
var variables=nil;
(variables=smalltalk.send((smalltalk.HashedCollection || HashedCollection), "_new", []));
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_allInstanceVariableNames", []), "_do_", [(function(each){return smalltalk.send(variables, "_at_put_", [each, smalltalk.send(smalltalk.send(self, "_instVarAt_", [each]), "_asJSON", [])]);})]);
return variables;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJSONString",
smalltalk.method({
selector: "asJSONString",
fn: function Object_asJSONString(){
var self=this;
return smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [smalltalk.send(self, "_asJSON", [])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function Object_asJavascript(){
var self=this;
return smalltalk.send(self, "_asString", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function Object_asString(){
var self=this;
return smalltalk.send(self, "_printString", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_",
smalltalk.method({
selector: "basicAt:",
fn: function Object_basicAt_(aString){
var self=this;
return self[aString];
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_put_",
smalltalk.method({
selector: "basicAt:put:",
fn: function Object_basicAt_put_(aString, anObject){
var self=this;
return self[aString] = anObject;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicDelete_",
smalltalk.method({
selector: "basicDelete:",
fn: function Object_basicDelete_(aString){
var self=this;
delete self[aString]; return aString;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicPerform_",
smalltalk.method({
selector: "basicPerform:",
fn: function Object_basicPerform_(aSymbol){
var self=this;
return smalltalk.send(self, "_basicPerform_withArguments_", [aSymbol, []]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicPerform_withArguments_",
smalltalk.method({
selector: "basicPerform:withArguments:",
fn: function Object_basicPerform_withArguments_(aSymbol, aCollection){
var self=this;
return self[aSymbol].apply(self, aCollection);;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_class",
smalltalk.method({
selector: "class",
fn: function Object_class(){
var self=this;
return self.klass;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_copy",
smalltalk.method({
selector: "copy",
fn: function Object_copy(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_shallowCopy", []), "_postCopy", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function Object_deepCopy(){
var self=this;
    
	    var copy = self.klass._new();
	    for(var i in self) {
		if(/^@.+/.test(i)) {
		    copy[i] = self[i]._deepCopy();
		}
	    }
	    return copy;
	;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_deprecatedAPI",
smalltalk.method({
selector: "deprecatedAPI",
fn: function Object_deprecatedAPI(){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.getThisContext()), "_home", []), "_asString", []), "__comma", [" is deprecated! (in "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.getThisContext()), "_home", []), "_home", []), "_asString", [])]), "__comma", [")"])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function Object_doesNotUnderstand_(aMessage){
var self=this;
(function($rec){smalltalk.send($rec, "_receiver_", [self]);smalltalk.send($rec, "_message_", [aMessage]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.MessageNotUnderstood || MessageNotUnderstood), "_new", []));
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
fn: function Object_error_(aString){
var self=this;
smalltalk.send((smalltalk.Error || Error), "_signal_", [aString]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_halt",
smalltalk.method({
selector: "halt",
fn: function Object_halt(){
var self=this;
smalltalk.send(self, "_error_", ["Halt encountered"]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_identityHash",
smalltalk.method({
selector: "identityHash",
fn: function Object_identityHash(){
var self=this;

	var hash=self.identityHash;
	if (hash) return hash;
	hash=smalltalk.nextId();
	Object.defineProperty(self, 'identityHash', {value:hash});
	return hash;
	;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
fn: function Object_ifNil_(aBlock){
var self=this;
return self;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
fn: function Object_ifNil_ifNotNil_(aBlock, anotherBlock){
var self=this;
return smalltalk.send(anotherBlock, "_value", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
fn: function Object_ifNotNil_(aBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
fn: function Object_ifNotNil_ifNil_(aBlock, anotherBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function Object_initialize(){
var self=this;

return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_",
smalltalk.method({
selector: "instVarAt:",
fn: function Object_instVarAt_(aSymbol){
var self=this;
var varname=nil;
(varname=smalltalk.send(aSymbol, "_asString", []));
return self['@'+varname];
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_put_",
smalltalk.method({
selector: "instVarAt:put:",
fn: function Object_instVarAt_put_(aSymbol, anObject){
var self=this;
var varname=nil;
(varname=smalltalk.send(aSymbol, "_asString", []));
self['@' + varname] = anObject;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isClass",
smalltalk.method({
selector: "isClass",
fn: function Object_isClass(){
var self=this;
return false;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isKindOf_",
smalltalk.method({
selector: "isKindOf:",
fn: function Object_isKindOf_(aClass){
var self=this;
return ((($receiver = smalltalk.send(self, "_isMemberOf_", [aClass])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return true;})() : (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return true;}), (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);})]));
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isMemberOf_",
smalltalk.method({
selector: "isMemberOf:",
fn: function Object_isMemberOf_(aClass){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [aClass]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isMetaclass",
smalltalk.method({
selector: "isMetaclass",
fn: function Object_isMetaclass(){
var self=this;
return false;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isNil",
smalltalk.method({
selector: "isNil",
fn: function Object_isNil(){
var self=this;
return false;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isNumber",
smalltalk.method({
selector: "isNumber",
fn: function Object_isNumber(){
var self=this;
return false;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isParseFailure",
smalltalk.method({
selector: "isParseFailure",
fn: function Object_isParseFailure(){
var self=this;
return false;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
fn: function Object_isString(){
var self=this;
return false;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isSymbol",
smalltalk.method({
selector: "isSymbol",
fn: function Object_isSymbol(){
var self=this;
return false;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_log_block_",
smalltalk.method({
selector: "log:block:",
fn: function Object_log_block_(aString, aBlock){
var self=this;
var result=nil;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(smalltalk.send(aString, "__comma", [" time: "]), "__comma", [smalltalk.send(smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [(function(){return (result=smalltalk.send(aBlock, "_value", []));})]), "_printString", [])])]);
return result;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_notNil",
smalltalk.method({
selector: "notNil",
fn: function Object_notNil(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_isNil", []), "_not", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_perform_",
smalltalk.method({
selector: "perform:",
fn: function Object_perform_(aSymbol){
var self=this;
return smalltalk.send(self, "_perform_withArguments_", [aSymbol, []]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_perform_withArguments_",
smalltalk.method({
selector: "perform:withArguments:",
fn: function Object_perform_withArguments_(aSymbol, aCollection){
var self=this;
var selector=nil;
(selector=smalltalk.send(aSymbol, "_asSelector", []));
return smalltalk.send(self, selector, aCollection);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_postCopy",
smalltalk.method({
selector: "postCopy",
fn: function Object_postCopy(){
var self=this;

return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
fn: function Object_printNl(){
var self=this;
console.log(self);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function Object_printString(){
var self=this;
return smalltalk.send("a ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_respondsTo_",
smalltalk.method({
selector: "respondsTo:",
fn: function Object_respondsTo_(aSelector){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_canUnderstand_", [aSelector]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function Object_shallowCopy(){
var self=this;

	    var copy = self.klass._new();
	    for(var i in self) {
		if(/^@.+/.test(i)) {
		    copy[i] = self[i];
		}
	    }
	    return copy;
	;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_shouldNotImplement",
smalltalk.method({
selector: "shouldNotImplement",
fn: function Object_shouldNotImplement(){
var self=this;
smalltalk.send(self, "_error_", [smalltalk.send("This method should not be implemented in ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function Object_size(){
var self=this;
smalltalk.send(self, "_error_", ["Object not indexable"]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
fn: function Object_storeOn_(aStream){
var self=this;
smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(self, "_printString", [])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_storeString",
smalltalk.method({
selector: "storeString",
fn: function Object_storeString(){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(s){return smalltalk.send(self, "_storeOn_", [s]);})]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_subclassResponsibility",
smalltalk.method({
selector: "subclassResponsibility",
fn: function Object_subclassResponsibility(){
var self=this;
smalltalk.send(self, "_error_", ["This method is a responsibility of a subclass"]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_try_catch_",
smalltalk.method({
selector: "try:catch:",
fn: function Object_try_catch_(aBlock, anotherBlock){
var self=this;
try{result = aBlock()} catch(e) {result = anotherBlock(e)};
	return result;;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_yourself",
smalltalk.method({
selector: "yourself",
fn: function Object_yourself(){
var self=this;
return self;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_~_eq",
smalltalk.method({
selector: "~=",
fn: function Object_$_eq(anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [anObject]), "__eq", [false]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_~~",
smalltalk.method({
selector: "~~",
fn: function Object_$$(anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq_eq", [anObject]), "__eq", [false]);
return self;}
}),
smalltalk.Object);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function Object_class_initialize(){
var self=this;

return self;}
}),
smalltalk.Object.klass);


smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
fn: function Boolean_$(aBoolean){
var self=this;

	    if(self == true) {
		return aBoolean;
	    } else {
		return false;
	    }
	;
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function Boolean__eq(aBoolean){
var self=this;
var $early={};
try{((($receiver = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));
return Boolean(self == true) == aBoolean;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function Boolean__eq_eq(aBoolean){
var self=this;
return smalltalk.send(self, "__eq", [aBoolean]);
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_and_",
smalltalk.method({
selector: "and:",
fn: function Boolean_and_(aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [aBlock, (function(){return false;})]);
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function Boolean_asJSON(){
var self=this;
return self;
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function Boolean_deepCopy(){
var self=this;
return self;
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
fn: function Boolean_ifFalse_(aBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [(function(){return nil;}), aBlock]);
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
fn: function Boolean_ifFalse_ifTrue_(aBlock, anotherBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [anotherBlock, aBlock]);
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
fn: function Boolean_ifTrue_(aBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [aBlock, (function(){return nil;})]);
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
fn: function Boolean_ifTrue_ifFalse_(aBlock, anotherBlock){
var self=this;

	    if(self == true) {
		return aBlock();
	    } else {
		return anotherBlock();
	    }
	;
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_not",
smalltalk.method({
selector: "not",
fn: function Boolean_not(){
var self=this;
return smalltalk.send(self, "__eq", [false]);
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_or_",
smalltalk.method({
selector: "or:",
fn: function Boolean_or_(aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [(function(){return true;}), aBlock]);
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function Boolean_printString(){
var self=this;
return self.toString();
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function Boolean_shallowCopy(){
var self=this;
return self;
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_|",
smalltalk.method({
selector: "|",
fn: function Boolean_$(aBoolean){
var self=this;

	    if(self == true) {
		return true;
	    } else {
		return aBoolean;
	    }
	;
return self;}
}),
smalltalk.Boolean);



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
fn: function Date__plus(aDate){
var self=this;
return self + aDate;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function Date__minus(aDate){
var self=this;
return self - aDate;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function Date__lt(aDate){
var self=this;
return self < aDate;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function Date__lt_eq(aDate){
var self=this;
return self <= aDate;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function Date__gt(aDate){
var self=this;
return self > aDate;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function Date__gt_eq(aDate){
var self=this;
return self >= aDate;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asDateString",
smalltalk.method({
selector: "asDateString",
fn: function Date_asDateString(){
var self=this;
return self.toDateString();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asLocaleString",
smalltalk.method({
selector: "asLocaleString",
fn: function Date_asLocaleString(){
var self=this;
return self.toLocaleString();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asMilliseconds",
smalltalk.method({
selector: "asMilliseconds",
fn: function Date_asMilliseconds(){
var self=this;
return smalltalk.send(self, "_time", []);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
fn: function Date_asNumber(){
var self=this;
return smalltalk.send(self, "_asMilliseconds", []);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function Date_asString(){
var self=this;
return self.toString();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asTimeString",
smalltalk.method({
selector: "asTimeString",
fn: function Date_asTimeString(){
var self=this;
return self.toTimeString();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_day",
smalltalk.method({
selector: "day",
fn: function Date_day(){
var self=this;
return smalltalk.send(self, "_dayOfWeek", []);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_day_",
smalltalk.method({
selector: "day:",
fn: function Date_day_(aNumber){
var self=this;
smalltalk.send(self, "_dayOfWeek_", [aNumber]);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth",
smalltalk.method({
selector: "dayOfMonth",
fn: function Date_dayOfMonth(){
var self=this;
return self.getDate();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth_",
smalltalk.method({
selector: "dayOfMonth:",
fn: function Date_dayOfMonth_(aNumber){
var self=this;
self.setDate(aNumber);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek",
smalltalk.method({
selector: "dayOfWeek",
fn: function Date_dayOfWeek(){
var self=this;
return self.getDay() + 1;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek_",
smalltalk.method({
selector: "dayOfWeek:",
fn: function Date_dayOfWeek_(aNumber){
var self=this;
return self.setDay(aNumber - 1);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_hours",
smalltalk.method({
selector: "hours",
fn: function Date_hours(){
var self=this;
return self.getHours();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_hours_",
smalltalk.method({
selector: "hours:",
fn: function Date_hours_(aNumber){
var self=this;
self.setHours(aNumber);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds",
smalltalk.method({
selector: "milliseconds",
fn: function Date_milliseconds(){
var self=this;
return self.getMilliseconds();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds_",
smalltalk.method({
selector: "milliseconds:",
fn: function Date_milliseconds_(aNumber){
var self=this;
self.setMilliseconds(aNumber);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes",
smalltalk.method({
selector: "minutes",
fn: function Date_minutes(){
var self=this;
return self.getMinutes();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes_",
smalltalk.method({
selector: "minutes:",
fn: function Date_minutes_(aNumber){
var self=this;
self.setMinutes(aNumber);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_month",
smalltalk.method({
selector: "month",
fn: function Date_month(){
var self=this;
return self.getMonth() + 1;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_month_",
smalltalk.method({
selector: "month:",
fn: function Date_month_(aNumber){
var self=this;
self.setMonth(aNumber - 1);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function Date_printString(){
var self=this;
return smalltalk.send(self, "_asString", []);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds",
smalltalk.method({
selector: "seconds",
fn: function Date_seconds(){
var self=this;
return self.getSeconds();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds_",
smalltalk.method({
selector: "seconds:",
fn: function Date_seconds_(aNumber){
var self=this;
self.setSeconds(aNumber);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_time",
smalltalk.method({
selector: "time",
fn: function Date_time(){
var self=this;
return self.getTime();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_time_",
smalltalk.method({
selector: "time:",
fn: function Date_time_(aNumber){
var self=this;
self.setTime(aNumber);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_year",
smalltalk.method({
selector: "year",
fn: function Date_year(){
var self=this;
return self.getFullYear();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
"_year_",
smalltalk.method({
selector: "year:",
fn: function Date_year_(aNumber){
var self=this;
self.setFullYear(aNumber);
return self;}
}),
smalltalk.Date);


smalltalk.addMethod(
"_fromMilliseconds_",
smalltalk.method({
selector: "fromMilliseconds:",
fn: function Date_class_fromMilliseconds_(aNumber){
var self=this;
return smalltalk.send(self, "_new_", [aNumber]);
return self;}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_fromSeconds_",
smalltalk.method({
selector: "fromSeconds:",
fn: function Date_class_fromSeconds_(aNumber){
var self=this;
return smalltalk.send(self, "_fromMilliseconds_", [((($receiver = aNumber).klass === smalltalk.Number) ? $receiver *(1000) : smalltalk.send($receiver, "__star", [(1000)]))]);
return self;}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function Date_class_fromString_(aString){
var self=this;
return smalltalk.send(self, "_new_", [aString]);
return self;}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_millisecondsToRun_",
smalltalk.method({
selector: "millisecondsToRun:",
fn: function Date_class_millisecondsToRun_(aBlock){
var self=this;
var t=nil;
(t=smalltalk.send((smalltalk.Date || Date), "_now", []));
smalltalk.send(aBlock, "_value", []);
return ((($receiver = smalltalk.send((smalltalk.Date || Date), "_now", [])).klass === smalltalk.Number) ? $receiver -t : smalltalk.send($receiver, "__minus", [t]));
return self;}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function Date_class_new_(anObject){
var self=this;
return new Date(anObject);
return self;}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_now",
smalltalk.method({
selector: "now",
fn: function Date_class_now(){
var self=this;
return smalltalk.send(self, "_today", []);
return self;}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_today",
smalltalk.method({
selector: "today",
fn: function Date_class_today(){
var self=this;
return smalltalk.send(self, "_new", []);
return self;}
}),
smalltalk.Date.klass);


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel-Objects');
smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function JSObjectProxy_at_(aSymbol){
var self=this;
var attr=nil;
(attr=smalltalk.send(aSymbol, "_asString", []));
return self['@jsObject'][attr];
return self;}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function JSObjectProxy_at_put_(aSymbol, anObject){
var self=this;
var attr=nil;
(attr=smalltalk.send(aSymbol, "_asString", []));
self['@jsObject'][attr] = anObject;
return self;}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function JSObjectProxy_doesNotUnderstand_(aMessage){
var self=this;
var obj=nil;
var selector=nil;
var jsSelector=nil;
var arguments=nil;
(obj=smalltalk.send(self, "_jsObject", []));
(selector=smalltalk.send(aMessage, "_selector", []));
(jsSelector=smalltalk.send(selector, "_asJavaScriptSelector", []));
(arguments=smalltalk.send(aMessage, "_arguments", []));
if(obj[jsSelector] != undefined) {return smalltalk.send(obj, jsSelector, arguments)};
smalltalk.send(self, "_doesNotUnderstand_", [aMessage], JSObjectProxy_doesNotUnderstand_.method.methodClass.superclass || nil);
return self;}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function JSObjectProxy_inspectOn_(anInspector){
var self=this;
var variables=nil;
(variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(variables, "_at_put_", ["#self", smalltalk.send(self, "_jsObject", [])]);
smalltalk.send(anInspector, "_setLabel_", [smalltalk.send(self, "_printString", [])]);
for(var i in self['@jsObject']) {
		variables._at_put_(i, self['@jsObject'][i]);
	};
smalltalk.send(anInspector, "_setVariables_", [variables]);
return self;}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_jsObject",
smalltalk.method({
selector: "jsObject",
fn: function JSObjectProxy_jsObject(){
var self=this;
return self['@jsObject'];
return self;}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_jsObject_",
smalltalk.method({
selector: "jsObject:",
fn: function JSObjectProxy_jsObject_(aJSObject){
var self=this;
(self['@jsObject']=aJSObject);
return self;}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function JSObjectProxy_printString(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_jsObject", []), "_toString", []);
return self;}
}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function JSObjectProxy_class_on_(aJSObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_jsObject_", [aJSObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
fn: function Number_$(aNumber){
var self=this;
return self & aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
fn: function Number__star(aNumber){
var self=this;
return self * aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
fn: function Number__plus(aNumber){
var self=this;
return self + aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function Number__minus(aNumber){
var self=this;
return self - aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
fn: function Number__slash(aNumber){
var self=this;
return self / aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function Number__lt(aNumber){
var self=this;
return self < aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function Number__lt_eq(aNumber){
var self=this;
return self <= aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function Number__eq(aNumber){
var self=this;
var $early={};
try{((($receiver = smalltalk.send(aNumber, "_isNumber", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));
return Number(self) == aNumber;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.Number);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function Number__gt(aNumber){
var self=this;
return self > aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function Number__gt_eq(aNumber){
var self=this;
return self >= aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"__at",
smalltalk.method({
selector: "@",
fn: function Number__at(aNumber){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [self, aNumber]);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_\x5c\x5c",
smalltalk.method({
selector: "\x5c\x5c",
fn: function Number_$$$$(aNumber){
var self=this;
return self % aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function Number_asJSON(){
var self=this;
return self;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function Number_asJavascript(){
var self=this;
return smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_printString", [])]), "__comma", [")"]);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_asPoint",
smalltalk.method({
selector: "asPoint",
fn: function Number_asPoint(){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [self, self]);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function Number_asString(){
var self=this;
return smalltalk.send(self, "_printString", []);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
fn: function Number_atRandom(){
var self=this;
return ((($receiver = smalltalk.send(((($receiver = smalltalk.send(smalltalk.send((smalltalk.Random || Random), "_new", []), "_next", [])).klass === smalltalk.Number) ? $receiver *self : smalltalk.send($receiver, "__star", [self])), "_truncated", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_clearInterval",
smalltalk.method({
selector: "clearInterval",
fn: function Number_clearInterval(){
var self=this;
clearInterval(Number(self));
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_clearTimeout",
smalltalk.method({
selector: "clearTimeout",
fn: function Number_clearTimeout(){
var self=this;
clearTimeout(Number(self));
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_copy",
smalltalk.method({
selector: "copy",
fn: function Number_copy(){
var self=this;
return self;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function Number_deepCopy(){
var self=this;
return smalltalk.send(self, "_copy", []);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_even",
smalltalk.method({
selector: "even",
fn: function Number_even(){
var self=this;
return smalltalk.send((0), "__eq", [smalltalk.send(self, "_\\\\", [(2)])]);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_identityHash",
smalltalk.method({
selector: "identityHash",
fn: function Number_identityHash(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "__comma", ["n"]);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_isNumber",
smalltalk.method({
selector: "isNumber",
fn: function Number_isNumber(){
var self=this;
return true;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_isZero",
smalltalk.method({
selector: "isZero",
fn: function Number_isZero(){
var self=this;
return smalltalk.send(self, "__eq", [(0)]);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_max_",
smalltalk.method({
selector: "max:",
fn: function Number_max_(aNumber){
var self=this;
return Math.max(self, aNumber);;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_min_",
smalltalk.method({
selector: "min:",
fn: function Number_min_(aNumber){
var self=this;
return Math.min(self, aNumber);;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_negated",
smalltalk.method({
selector: "negated",
fn: function Number_negated(){
var self=this;
return (0) - self;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_negative",
smalltalk.method({
selector: "negative",
fn: function Number_negative(){
var self=this;
return self < (0);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_odd",
smalltalk.method({
selector: "odd",
fn: function Number_odd(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_even", []), "_not", []);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_positive",
smalltalk.method({
selector: "positive",
fn: function Number_positive(){
var self=this;
return self >= (0);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_printShowingDecimalPlaces_",
smalltalk.method({
selector: "printShowingDecimalPlaces:",
fn: function Number_printShowingDecimalPlaces_(placesDesired){
var self=this;
return self.toFixed(placesDesired);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function Number_printString(){
var self=this;
return String(self);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_rounded",
smalltalk.method({
selector: "rounded",
fn: function Number_rounded(){
var self=this;
return Math.round(self);;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_sqrt",
smalltalk.method({
selector: "sqrt",
fn: function Number_sqrt(){
var self=this;
return Math.sqrt(self);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_squared",
smalltalk.method({
selector: "squared",
fn: function Number_squared(){
var self=this;
return self * self;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_timesRepeat_",
smalltalk.method({
selector: "timesRepeat:",
fn: function Number_timesRepeat_(aBlock){
var self=this;
var integer=nil;
var count=nil;
(integer=smalltalk.send(self, "_truncated", []));
(count=(1));
(function(){while(!(function(){return ((($receiver = count).klass === smalltalk.Number) ? $receiver >self : smalltalk.send($receiver, "__gt", [self]));})()) {(function(){smalltalk.send(aBlock, "_value", []);return (count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})()}})();
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_",
smalltalk.method({
selector: "to:",
fn: function Number_to_(aNumber){
var self=this;
var array=nil;
var first=nil;
var last=nil;
var count=nil;
(first=smalltalk.send(self, "_truncated", []));
(last=((($receiver = smalltalk.send(aNumber, "_truncated", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
(count=(1));
(array=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(((($receiver = last).klass === smalltalk.Number) ? $receiver -first : smalltalk.send($receiver, "__minus", [first])), "_timesRepeat_", [(function(){smalltalk.send(array, "_at_put_", [count, first]);(count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (first=((($receiver = first).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})]);
return array;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_by_",
smalltalk.method({
selector: "to:by:",
fn: function Number_to_by_(stop, step){
var self=this;
var array=nil;
var value=nil;
var pos=nil;
(value=self);
(array=smalltalk.send((smalltalk.Array || Array), "_new", []));
(pos=(1));
((($receiver = smalltalk.send(step, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", ["step must be non-zero"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", ["step must be non-zero"]);})]));
((($receiver = ((($receiver = step).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);(pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})() : (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);(pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);(pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();}), (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);(pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})]));
return array;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_by_do_",
smalltalk.method({
selector: "to:by:do:",
fn: function Number_to_by_do_(stop, step, aBlock){
var self=this;
var value=nil;
(value=self);
((($receiver = smalltalk.send(step, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", ["step must be non-zero"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", ["step must be non-zero"]);})]));
((($receiver = ((($receiver = step).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})() : (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();}), (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})]));
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_do_",
smalltalk.method({
selector: "to:do:",
fn: function Number_to_do_(stop, aBlock){
var self=this;
var nextValue=nil;
(nextValue=self);
(function(){while((function(){return ((($receiver = nextValue).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [nextValue]);return (nextValue=((($receiver = nextValue).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})()}})();
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_truncated",
smalltalk.method({
selector: "truncated",
fn: function Number_truncated(){
var self=this;
var result=nil;
((($receiver = self >= (0)).klass === smalltalk.Boolean) ? ($receiver ? (function(){return result = Math.floor(self);;})() : (function(){return result = (Math.floor(self * (-1)) * (-1));;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return result = Math.floor(self);;}), (function(){return result = (Math.floor(self * (-1)) * (-1));;})]));
return result;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
"_|",
smalltalk.method({
selector: "|",
fn: function Number_$(aNumber){
var self=this;
return self | aNumber;
return self;}
}),
smalltalk.Number);


smalltalk.addMethod(
"_pi",
smalltalk.method({
selector: "pi",
fn: function Number_class_pi(){
var self=this;
return Math.PI;
return self;}
}),
smalltalk.Number.klass);


smalltalk.addClass('Package', smalltalk.Object, ['commitPathJs', 'commitPathSt'], 'Kernel-Objects');
smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function Package_classes(){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_select_", [(function(c){return smalltalk.send(smalltalk.send(c, "_package", []), "__eq_eq", [self]);})]);
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathJs",
smalltalk.method({
selector: "commitPathJs",
fn: function Package_commitPathJs(){
var self=this;
return (($receiver = self['@commitPathJs']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_defaultCommitPathJs", []);})() : $receiver;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathJs_",
smalltalk.method({
selector: "commitPathJs:",
fn: function Package_commitPathJs_(aString){
var self=this;
(self['@commitPathJs']=aString);
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathSt",
smalltalk.method({
selector: "commitPathSt",
fn: function Package_commitPathSt(){
var self=this;
return (($receiver = self['@commitPathSt']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_defaultCommitPathSt", []);})() : $receiver;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathSt_",
smalltalk.method({
selector: "commitPathSt:",
fn: function Package_commitPathSt_(aString){
var self=this;
(self['@commitPathSt']=aString);
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_dependencies",
smalltalk.method({
selector: "dependencies",
fn: function Package_dependencies(){
var self=this;
return smalltalk.send(self, "_propertyAt_ifAbsent_", ["dependencies", (function(){return [];})]);
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_dependencies_",
smalltalk.method({
selector: "dependencies:",
fn: function Package_dependencies_(anArray){
var self=this;
return smalltalk.send(self, "_propertyAt_put_", ["dependencies", anArray]);
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_jsProperties",
smalltalk.method({
selector: "jsProperties",
fn: function Package_jsProperties(){
var self=this;
return self.properties;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_jsProperties_",
smalltalk.method({
selector: "jsProperties:",
fn: function Package_jsProperties_(aJSObject){
var self=this;
return self.properties = aJSObject;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function Package_name(){
var self=this;
return self.pkgName;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function Package_name_(aString){
var self=this;
self.pkgName = aString;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function Package_printString(){
var self=this;
return smalltalk.send(self, "_name", []);
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_properties",
smalltalk.method({
selector: "properties",
fn: function Package_properties(){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_readJSObject_", [smalltalk.send(self, "_basicAt_", ["properties"])]);
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_properties_",
smalltalk.method({
selector: "properties:",
fn: function Package_properties_(aDict){
var self=this;
var object=nil;
object = {};;
smalltalk.send(aDict, "_keysAndValuesDo_", [(function(key, value){return object[key] = value;})]);
return self.properties = object;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertiesAsJSON",
smalltalk.method({
selector: "propertiesAsJSON",
fn: function Package_propertiesAsJSON(){
var self=this;
return JSON.stringify(self.properties);
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_",
smalltalk.method({
selector: "propertyAt:",
fn: function Package_propertyAt_(key){
var self=this;
return self.properties[key];
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_ifAbsent_",
smalltalk.method({
selector: "propertyAt:ifAbsent:",
fn: function Package_propertyAt_ifAbsent_(key, block){
var self=this;
return (($receiver = smalltalk.send(self, "_propertyAt_", [key])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(block, "_value", []);})() : $receiver;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_put_",
smalltalk.method({
selector: "propertyAt:put:",
fn: function Package_propertyAt_put_(key, value){
var self=this;
return self.properties[key] = value;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
"_sortedClasses",
smalltalk.method({
selector: "sortedClasses",
fn: function Package_sortedClasses(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_sortedClasses_", [smalltalk.send(self, "_classes", [])]);
return self;}
}),
smalltalk.Package);


smalltalk.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
"_commitToLocalStorage_",
smalltalk.method({
selector: "commitToLocalStorage:",
fn: function Package_class_commitToLocalStorage_(aPackageName){
var self=this;
var key=nil;
var sourceCode=nil;
(key=smalltalk.send("smalltalk.packages.", "__comma", [aPackageName]));
(sourceCode=smalltalk.send(smalltalk.send((smalltalk.Exporter || Exporter), "_new", []), "_exportPackage_", [aPackageName]));
localStorage[key] = escape(sourceCode);
return self;}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathJs",
smalltalk.method({
selector: "defaultCommitPathJs",
fn: function Package_class_defaultCommitPathJs(){
var self=this;
return (($receiver = self['@defaultCommitPathJs']) == nil || $receiver == undefined) ? (function(){return (self['@defaultCommitPathJs']="js");})() : $receiver;
return self;}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathJs_",
smalltalk.method({
selector: "defaultCommitPathJs:",
fn: function Package_class_defaultCommitPathJs_(aString){
var self=this;
(self['@defaultCommitPathJs']=aString);
return self;}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathSt",
smalltalk.method({
selector: "defaultCommitPathSt",
fn: function Package_class_defaultCommitPathSt(){
var self=this;
return (($receiver = self['@defaultCommitPathSt']) == nil || $receiver == undefined) ? (function(){return (self['@defaultCommitPathSt']="st");})() : $receiver;
return self;}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathSt_",
smalltalk.method({
selector: "defaultCommitPathSt:",
fn: function Package_class_defaultCommitPathSt_(aString){
var self=this;
(self['@defaultCommitPathSt']=aString);
return self;}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_fetch_",
smalltalk.method({
selector: "fetch:",
fn: function Package_class_fetch_(aPackageName){
var self=this;
smalltalk.send(self, "_fetch_prefix_", [aPackageName, smalltalk.send(smalltalk.send(self, "_defaultCommitPathJs", []), "__comma", ["/"])]);
return self;}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_fetch_prefix_",
smalltalk.method({
selector: "fetch:prefix:",
fn: function Package_class_fetch_prefix_(aPackageName, aPrefix){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_getScript_onSuccess_", [smalltalk.send(smalltalk.send(aPrefix, "__comma", [aPackageName]), "__comma", [".js"]), (function(){return smalltalk.send((smalltalk.Package || Package), "_init_", [aPackageName]);})]);
return self;}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_init_",
smalltalk.method({
selector: "init:",
fn: function Package_class_init_(aPackageName){
var self=this;
(function($rec){smalltalk.send($rec, "_do_", [(function(each){return smalltalk.init(each);})]);return smalltalk.send($rec, "_do_", [(function(each){return smalltalk.send(each, "_initialize", []);})]);})(smalltalk.send(smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_classes", []), "_select_", [(function(each){return each.pkg.pkgName == aPackageName;})]));
return self;}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_named_",
smalltalk.method({
selector: "named:",
fn: function Package_class_named_(aPackageName){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_packageAt_", [aPackageName]);
return self;}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_named_ifAbsent_",
smalltalk.method({
selector: "named:ifAbsent:",
fn: function Package_class_named_ifAbsent_(aPackageName, aBlock){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_packageAt_ifAbsent_", [aPackageName, aBlock]);
return self;}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_resetCommitPaths",
smalltalk.method({
selector: "resetCommitPaths",
fn: function Package_class_resetCommitPaths(){
var self=this;
(self['@defaultCommitPathJs']=nil);
(self['@defaultCommitPathSt']=nil);
return self;}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_sortedClasses_",
smalltalk.method({
selector: "sortedClasses:",
fn: function Package_class_sortedClasses_(classes){
var self=this;
var children=nil;
var others=nil;
var nodes=nil;
var expandedClasses=nil;
(children=[]);
(others=[]);
smalltalk.send(classes, "_do_", [(function(each){return ((($receiver = smalltalk.send(classes, "_includes_", [smalltalk.send(each, "_superclass", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(children, "_add_", [each]);})() : (function(){return smalltalk.send(others, "_add_", [each]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(children, "_add_", [each]);}), (function(){return smalltalk.send(others, "_add_", [each]);})]));})]);
(nodes=smalltalk.send(children, "_collect_", [(function(each){return smalltalk.send((smalltalk.ClassSorterNode || ClassSorterNode), "_on_classes_level_", [each, others, (0)]);})]));
(nodes=smalltalk.send(nodes, "_sorted_", [(function(a, b){return ((($receiver = smalltalk.send(smalltalk.send(a, "_theClass", []), "_name", [])).klass === smalltalk.Number) ? $receiver <=smalltalk.send(smalltalk.send(b, "_theClass", []), "_name", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(smalltalk.send(b, "_theClass", []), "_name", [])]));})]));
(expandedClasses=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(nodes, "_do_", [(function(aNode){return smalltalk.send(aNode, "_traverseClassesWith_", [expandedClasses]);})]);
return expandedClasses;
return self;}
}),
smalltalk.Package.klass);


smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel-Objects');
smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
fn: function Point__star(aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
fn: function Point__plus(aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function Point__minus(aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
fn: function Point__slash(aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function Point__eq(aPoint){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_class", []), "__eq", [smalltalk.send(self, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_x", []), "__eq", [smalltalk.send(self, "_x", [])]), "_&", [smalltalk.send(smalltalk.send(aPoint, "_y", []), "__eq", [smalltalk.send(self, "_y", [])])]);})]);
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
"_asPoint",
smalltalk.method({
selector: "asPoint",
fn: function Point_asPoint(){
var self=this;
return self;
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function Point_printString(){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@x'], "_printString", []), "__comma", ["@"])]);((($receiver = smalltalk.send(smalltalk.send(self['@y'], "_notNil", []), "_and_", [(function(){return smalltalk.send(self['@y'], "_negative", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(stream, "_space", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(stream, "_space", []);})]));return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self['@y'], "_printString", [])]);})]);
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
"_translateBy_",
smalltalk.method({
selector: "translateBy:",
fn: function Point_translateBy_(delta){
var self=this;
return smalltalk.send(((($receiver = smalltalk.send(delta, "_x", [])).klass === smalltalk.Number) ? $receiver +self['@x'] : smalltalk.send($receiver, "__plus", [self['@x']])), "__at", [((($receiver = smalltalk.send(delta, "_y", [])).klass === smalltalk.Number) ? $receiver +self['@y'] : smalltalk.send($receiver, "__plus", [self['@y']]))]);
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function Point_x(){
var self=this;
return self['@x'];
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
"_x_",
smalltalk.method({
selector: "x:",
fn: function Point_x_(aNumber){
var self=this;
(self['@x']=aNumber);
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function Point_y(){
var self=this;
return self['@y'];
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
"_y_",
smalltalk.method({
selector: "y:",
fn: function Point_y_(aNumber){
var self=this;
(self['@y']=aNumber);
return self;}
}),
smalltalk.Point);


smalltalk.addMethod(
"_x_y_",
smalltalk.method({
selector: "x:y:",
fn: function Point_class_x_y_(aNumber, anotherNumber){
var self=this;
return (function($rec){smalltalk.send($rec, "_x_", [aNumber]);smalltalk.send($rec, "_y_", [anotherNumber]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Point.klass);


smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function Random_next(){
var self=this;
return Math.random();
return self;}
}),
smalltalk.Random);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function Random_next_(anInteger){
var self=this;
return smalltalk.send(smalltalk.send((1), "_to_", [anInteger]), "_collect_", [(function(each){return smalltalk.send(self, "_next", []);})]);
return self;}
}),
smalltalk.Random);



smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function Smalltalk_at_(aString){
var self=this;
return self[aString];
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_basicParse_",
smalltalk.method({
selector: "basicParse:",
fn: function Smalltalk_basicParse_(aString){
var self=this;
return smalltalk.parser.parse(aString);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function Smalltalk_classes(){
var self=this;
return self.classes();
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_createPackage_",
smalltalk.method({
selector: "createPackage:",
fn: function Smalltalk_createPackage_(packageName){
var self=this;
return smalltalk.addPackage(packageName, nil);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_createPackage_properties_",
smalltalk.method({
selector: "createPackage:properties:",
fn: function Smalltalk_createPackage_properties_(packageName, aDict){
var self=this;
var object=nil;
object = {};;
smalltalk.send(aDict, "_keysAndValuesDo_", [(function(key, value){return object[key] = value;})]);
return smalltalk.addPackage(packageName, object);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_deletePackage_",
smalltalk.method({
selector: "deletePackage:",
fn: function Smalltalk_deletePackage_(packageName){
var self=this;
delete smalltalk.packages[packageName];
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packageAt_",
smalltalk.method({
selector: "packageAt:",
fn: function Smalltalk_packageAt_(packageName){
var self=this;
return self.packages[packageName];
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packageAt_ifAbsent_",
smalltalk.method({
selector: "packageAt:ifAbsent:",
fn: function Smalltalk_packageAt_ifAbsent_(packageName, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_packageAt_", [packageName]), "_ifNil_", [aBlock]);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function Smalltalk_packages(){
var self=this;
return self.packages.all();
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
fn: function Smalltalk_parse_(aString){
var self=this;
var result=nil;
smalltalk.send(self, "_try_catch_", [(function(){return (result=smalltalk.send(self, "_basicParse_", [aString]));}), (function(ex){return smalltalk.send(smalltalk.send(self, "_parseError_parsing_", [ex, aString]), "_signal", []);})]);
return result;
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_parseError_parsing_",
smalltalk.method({
selector: "parseError:parsing:",
fn: function Smalltalk_parseError_parsing_(anException, aString){
var self=this;
var row=nil;
var col=nil;
var message=nil;
var lines=nil;
var badLine=nil;
var code=nil;
row = anException.line;
	col = anException.column;
	message = anException.message;;
(lines=smalltalk.send(aString, "_lines", []));
(badLine=smalltalk.send(lines, "_at_", [row]));
(badLine=smalltalk.send(smalltalk.send(smalltalk.send(badLine, "_copyFrom_to_", [(1), ((($receiver = col).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]), "__comma", [" ===>"]), "__comma", [smalltalk.send(badLine, "_copyFrom_to_", [col, smalltalk.send(badLine, "_size", [])])]));
smalltalk.send(lines, "_at_put_", [row, badLine]);
(code=smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(s){return smalltalk.send(lines, "_withIndexDo_", [(function(l, i){return smalltalk.send(s, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(i, "_asString", []), "__comma", [": "]), "__comma", [l]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])])]);})]);})]));
return smalltalk.send(smalltalk.send((smalltalk.Error || Error), "_new", []), "_messageText_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Parse error on line ", "__comma", [row]), "__comma", [" column "]), "__comma", [col]), "__comma", [" : "]), "__comma", [message]), "__comma", [" Below is code with line numbers and ===> marker inserted:"]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [code])]);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_readJSObject_",
smalltalk.method({
selector: "readJSObject:",
fn: function Smalltalk_readJSObject_(anObject){
var self=this;
return self.readJSObject(anObject);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_removeClass_",
smalltalk.method({
selector: "removeClass:",
fn: function Smalltalk_removeClass_(aClass){
var self=this;
((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [" is a Metaclass and cannot be removed!"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [" is a Metaclass and cannot be removed!"])]);})]));
smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [(function(each){return smalltalk.send(aClass, "_removeCompiledMethod_", [each]);})]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_methodDictionary", []), "_values", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(aClass, "_class", []), "_removeCompiledMethod_", [each]);})]);
smalltalk.send(self, "_basicDelete_", [smalltalk.send(aClass, "_name", [])]);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_removePackage_",
smalltalk.method({
selector: "removePackage:",
fn: function Smalltalk_removePackage_(packageName){
var self=this;
var pkg=nil;
(pkg=smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);})]));
smalltalk.send(smalltalk.send(pkg, "_classes", []), "_do_", [(function(each){return smalltalk.send(self, "_removeClass_", [each]);})]);
smalltalk.send(self, "_deletePackage_", [packageName]);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_renamePackage_to_",
smalltalk.method({
selector: "renamePackage:to:",
fn: function Smalltalk_renamePackage_to_(packageName, newName){
var self=this;
var pkg=nil;
(pkg=smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);})]));
(($receiver = smalltalk.send(self, "_packageAt_", [newName])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Already exists a package called: ", "__comma", [newName])]);})() : nil;
smalltalk.packages[newName] = smalltalk.packages[packageName];
smalltalk.send(pkg, "_name_", [newName]);
smalltalk.send(self, "_deletePackage_", [packageName]);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_reservedWords",
smalltalk.method({
selector: "reservedWords",
fn: function Smalltalk_reservedWords(){
var self=this;
return self.reservedWords;
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_send_to_arguments_",
smalltalk.method({
selector: "send:to:arguments:",
fn: function Smalltalk_send_to_arguments_(aSelector, anObject, aCollection){
var self=this;
var selector=nil;
(selector=smalltalk.send(smalltalk.send(aSelector, "_asString", []), "_asSelector", []));
self.send(anObject, selector, aCollection);
return self;}
}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function Smalltalk_class_current(){
var self=this;
return smalltalk;
return self;}
}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function UndefinedObject_asJSON(){
var self=this;
return (typeof null == 'undefined' ? nil : null);
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function UndefinedObject_deepCopy(){
var self=this;
return self;
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
fn: function UndefinedObject_ifNil_(aBlock){
var self=this;
return smalltalk.send(self, "_ifNil_ifNotNil_", [aBlock, (function(){return nil;})]);
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
fn: function UndefinedObject_ifNil_ifNotNil_(aBlock, anotherBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
fn: function UndefinedObject_ifNotNil_(aBlock){
var self=this;
return self;
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
fn: function UndefinedObject_ifNotNil_ifNil_(aBlock, anotherBlock){
var self=this;
return smalltalk.send(anotherBlock, "_value", []);
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_isNil",
smalltalk.method({
selector: "isNil",
fn: function UndefinedObject_isNil(){
var self=this;
return true;
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_notNil",
smalltalk.method({
selector: "notNil",
fn: function UndefinedObject_notNil(){
var self=this;
return false;
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function UndefinedObject_printString(){
var self=this;
return "nil";
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function UndefinedObject_shallowCopy(){
var self=this;
return self;
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_",
smalltalk.method({
selector: "subclass:instanceVariableNames:",
fn: function UndefinedObject_subclass_instanceVariableNames_(aString, anotherString){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, anotherString, nil]);
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
fn: function UndefinedObject_subclass_instanceVariableNames_category_(aString, aString2, aString3){
var self=this;
smalltalk.send(self, "_deprecatedAPI", []);
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
fn: function UndefinedObject_subclass_instanceVariableNames_package_(aString, aString2, aString3){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_superclass_subclass_instanceVariableNames_package_", [self, aString, aString2, aString3]);
return self;}
}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function UndefinedObject_class_new(){
var self=this;
smalltalk.send(self, "_error_", ["You cannot create new instances of UndefinedObject. Use nil"]);
return self;}
}),
smalltalk.UndefinedObject.klass);


