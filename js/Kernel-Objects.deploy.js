smalltalk.addPackage('Kernel-Objects');
smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel-Objects');
smalltalk.addMethod(
smalltalk.method({
selector: "->",
fn: function (anObject){
var self=this;
function $Association(){return smalltalk.Association||(typeof Association=="undefined"?nil:Association)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Association())._key_value_(self,anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"->",{anObject:anObject},smalltalk.Object)})},
messageSends: ["key:value:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq_eq(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},smalltalk.Object)})},
messageSends: ["=="]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "==",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._identityHash()).__eq(_st(anObject)._identityHash());
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{anObject:anObject},smalltalk.Object)})},
messageSends: ["=", "identityHash"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
var variables;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
variables=_st($HashedCollection())._new();
_st(_st(self._class())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(variables)._at_put_(each,_st(self._instVarAt_(each))._asJSON());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=variables;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{variables:variables},smalltalk.Object)})},
messageSends: ["new", "do:", "at:put:", "asJSON", "instVarAt:", "allInstanceVariableNames", "class"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSONString",
fn: function (){
var self=this;
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($JSON())._stringify_(self._asJSON());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSONString",{},smalltalk.Object)})},
messageSends: ["stringify:", "asJSON"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Object)})},
messageSends: ["asString"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._printString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.Object)})},
messageSends: ["printString"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[aString];
return self}, function($ctx1) {$ctx1.fill(self,"basicAt:",{aString:aString},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAt:put:",
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[aString] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"basicAt:put:",{aString:aString,anObject:anObject},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicDelete:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
delete self[aString]; return aString;
return self}, function($ctx1) {$ctx1.fill(self,"basicDelete:",{aString:aString},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicPerform:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicPerform_withArguments_(aString,[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicPerform:",{aString:aString},smalltalk.Object)})},
messageSends: ["basicPerform:withArguments:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicPerform:withArguments:",
fn: function (aString,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[aString].apply(self, aCollection);;
return self}, function($ctx1) {$ctx1.fill(self,"basicPerform:withArguments:",{aString:aString,aCollection:aCollection},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "class",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.klass;
return self}, function($ctx1) {$ctx1.fill(self,"class",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "copy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._shallowCopy())._postCopy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"copy",{},smalltalk.Object)})},
messageSends: ["postCopy", "shallowCopy"]}),
smalltalk.Object);

smalltalk.addMethod(
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
smalltalk.method({
selector: "deprecatedAPI",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._warn_(_st(_st(_st(_st(smalltalk.getThisContext()._home())._asString()).__comma(" is deprecated! (in ")).__comma(_st(_st(smalltalk.getThisContext()._home())._home())._asString())).__comma(")"));
return self}, function($ctx1) {$ctx1.fill(self,"deprecatedAPI",{},smalltalk.Object)})},
messageSends: ["warn:", ",", "asString", "home"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
function $MessageNotUnderstood(){return smalltalk.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MessageNotUnderstood())._new();
_st($1)._receiver_(self);
_st($1)._message_(aMessage);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.Object)})},
messageSends: ["receiver:", "new", "message:", "signal"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "error:",
fn: function (aString){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
_st($Error())._signal_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"error:",{aString:aString},smalltalk.Object)})},
messageSends: ["signal:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "halt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Halt encountered");
return self}, function($ctx1) {$ctx1.fill(self,"halt",{},smalltalk.Object)})},
messageSends: ["error:"]}),
smalltalk.Object);

smalltalk.addMethod(
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
smalltalk.method({
selector: "ifNil:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{aBlock:aBlock},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:ifNotNil:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherBlock)._value_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Object)})},
messageSends: ["value:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{aBlock:aBlock},smalltalk.Object)})},
messageSends: ["value:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:ifNil:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Object)})},
messageSends: ["value:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect",
fn: function (){
var self=this;
function $InspectorHandler(){return smalltalk.InspectorHandler||(typeof InspectorHandler=="undefined"?nil:InspectorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($InspectorHandler())._inspect_(self);
return self}, function($ctx1) {$ctx1.fill(self,"inspect",{},smalltalk.Object)})},
messageSends: ["inspect:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",self);
_st(_st(self._class())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(variables)._at_put_(each,self._instVarAt_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=anInspector;
_st($1)._setLabel_(self._printString());
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.Object)})},
messageSends: ["new", "at:put:", "do:", "instVarAt:", "allInstanceVariableNames", "class", "setLabel:", "printString", "setVariables:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarAt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@'+aString] ;
return self}, function($ctx1) {$ctx1.fill(self,"instVarAt:",{aString:aString},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarAt:put:",
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@' + aString] = anObject ;
return self}, function($ctx1) {$ctx1.fill(self,"instVarAt:put:",{aString:aString,anObject:anObject},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isBehavior",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBehavior",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isBoolean",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBoolean",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isClass",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isCompiledMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isCompiledMethod",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isKindOf:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isMemberOf_(aClass);
if(smalltalk.assert($2)){
$1=true;
} else {
$1=_st(self._class())._inheritsFrom_(aClass);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isKindOf:",{aClass:aClass},smalltalk.Object)})},
messageSends: ["ifTrue:ifFalse:", "inheritsFrom:", "class", "isMemberOf:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isMemberOf:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class()).__eq(aClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMemberOf:",{aClass:aClass},smalltalk.Object)})},
messageSends: ["=", "class"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isMetaclass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isMetaclass",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isNil",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isNumber",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isPackage",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isParseFailure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isParseFailure",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isString",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isSymbol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isSymbol",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "notNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isNil())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"notNil",{},smalltalk.Object)})},
messageSends: ["not", "isNil"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "perform:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._perform_withArguments_(aString,[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"perform:",{aString:aString},smalltalk.Object)})},
messageSends: ["perform:withArguments:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "perform:withArguments:",
fn: function (aString,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.send(self, aString._asSelector(), aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"perform:withArguments:",{aString:aString,aCollection:aCollection},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=aStream;
$3=_st(_st(_st(self._class())._name())._first())._isVowel();
if(smalltalk.assert($3)){
$2="an ";
} else {
$2="a ";
};
_st($1)._nextPutAll_($2);
_st(aStream)._nextPutAll_(_st(self._class())._name());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Object)})},
messageSends: ["nextPutAll:", "ifTrue:ifFalse:", "isVowel", "first", "name", "class"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return self._printOn_(stream);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.Object)})},
messageSends: ["streamContents:", "printOn:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "putOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPut_(self);
return self}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},smalltalk.Object)})},
messageSends: ["nextPut:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "respondsTo:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._canUnderstand_(aSelector);
return $1;
}, function($ctx1) {$ctx1.fill(self,"respondsTo:",{aSelector:aSelector},smalltalk.Object)})},
messageSends: ["canUnderstand:", "class"]}),
smalltalk.Object);

smalltalk.addMethod(
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
smalltalk.method({
selector: "shouldNotImplement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("This method should not be implemented in ".__comma(_st(self._class())._name()));
return self}, function($ctx1) {$ctx1.fill(self,"shouldNotImplement",{},smalltalk.Object)})},
messageSends: ["error:", ",", "name", "class"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Object not indexable");
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Object)})},
messageSends: ["error:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "subclassResponsibility",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("This method is a responsibility of a subclass");
return self}, function($ctx1) {$ctx1.fill(self,"subclassResponsibility",{},smalltalk.Object)})},
messageSends: ["error:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "test",
fn: function (){
var self=this;
var a;
return smalltalk.withContext(function($ctx1) { 
a=(1);
self._halt();
return self}, function($ctx1) {$ctx1.fill(self,"test",{a:a},smalltalk.Object)})},
messageSends: ["halt"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "throw:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 throw anObject ;
return self}, function($ctx1) {$ctx1.fill(self,"throw:",{anObject:anObject},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "try:catch:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
try{return aBlock._value()} catch(e) {return anotherBlock._value_(e)};
return self}, function($ctx1) {$ctx1.fill(self,"try:catch:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.valueOf();
return self}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "yourself",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"yourself",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "~=",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self.__eq(anObject)).__eq(false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"~=",{anObject:anObject},smalltalk.Object)})},
messageSends: ["="]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "~~",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self.__eq_eq(anObject)).__eq(false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"~~",{anObject:anObject},smalltalk.Object)})},
messageSends: ["=", "=="]}),
smalltalk.Object);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "class";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.Object.klass)})},
messageSends: []}),
smalltalk.Object.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Object.klass)})},
messageSends: []}),
smalltalk.Object.klass);


smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
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
smalltalk.method({
selector: "==",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq(aBoolean);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{aBoolean:aBoolean},smalltalk.Boolean)})},
messageSends: ["="]}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "and:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self.__eq(true);
$1=_st($2)._ifTrue_ifFalse_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"and:",{aBlock:aBlock},smalltalk.Boolean)})},
messageSends: ["ifTrue:ifFalse:", "="]}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "asBit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self;
if(smalltalk.assert($2)){
$1=(1);
} else {
$1=(0);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBit",{},smalltalk.Boolean)})},
messageSends: ["ifTrue:ifFalse:"]}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.toString() ;
return self}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "ifFalse:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self;
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{aBlock:aBlock},smalltalk.Boolean)})},
messageSends: ["ifTrue:ifFalse:"]}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "ifFalse:ifTrue:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self;
$1=_st($2)._ifTrue_ifFalse_(anotherBlock,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Boolean)})},
messageSends: ["ifTrue:ifFalse:"]}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "ifTrue:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self;
$1=_st($2)._ifTrue_ifFalse_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{aBlock:aBlock},smalltalk.Boolean)})},
messageSends: ["ifTrue:ifFalse:"]}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "ifTrue:ifFalse:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(self == true) {
		return aBlock._value();
		} else {
		return anotherBlock._value();
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "isBoolean",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isBoolean",{},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "not",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq(false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"not",{},smalltalk.Boolean)})},
messageSends: ["="]}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "or:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self.__eq(true);
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"or:",{aBlock:aBlock},smalltalk.Boolean)})},
messageSends: ["ifTrue:ifFalse:", "="]}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(self._asString());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Boolean)})},
messageSends: ["nextPutAll:", "asString"]}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},smalltalk.Boolean)})},
messageSends: []}),
smalltalk.Boolean);

smalltalk.addMethod(
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
smalltalk.method({
selector: "+",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self + aDate;
return self}, function($ctx1) {$ctx1.fill(self,"+",{aDate:aDate},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "-",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self - aDate;
return self}, function($ctx1) {$ctx1.fill(self,"-",{aDate:aDate},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "<",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self < aDate;
return self}, function($ctx1) {$ctx1.fill(self,"<",{aDate:aDate},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "<=",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self <= aDate;
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aDate:aDate},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: ">",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self > aDate;
return self}, function($ctx1) {$ctx1.fill(self,">",{aDate:aDate},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: ">=",
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self >= aDate;
return self}, function($ctx1) {$ctx1.fill(self,">=",{aDate:aDate},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asDateString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toDateString();
return self}, function($ctx1) {$ctx1.fill(self,"asDateString",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asLocaleString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toLocaleString();
return self}, function($ctx1) {$ctx1.fill(self,"asLocaleString",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asMilliseconds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._time();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMilliseconds",{},smalltalk.Date)})},
messageSends: ["time"]}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asMilliseconds();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.Date)})},
messageSends: ["asMilliseconds"]}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toString();
return self}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asTimeString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toTimeString();
return self}, function($ctx1) {$ctx1.fill(self,"asTimeString",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "day",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._dayOfWeek();
return $1;
}, function($ctx1) {$ctx1.fill(self,"day",{},smalltalk.Date)})},
messageSends: ["dayOfWeek"]}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "day:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._dayOfWeek_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"day:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: ["dayOfWeek:"]}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "dayOfMonth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getDate();
return self}, function($ctx1) {$ctx1.fill(self,"dayOfMonth",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "dayOfMonth:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setDate(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"dayOfMonth:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "dayOfWeek",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getDay() + 1;
return self}, function($ctx1) {$ctx1.fill(self,"dayOfWeek",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "dayOfWeek:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.setDay(aNumber - 1);
return self}, function($ctx1) {$ctx1.fill(self,"dayOfWeek:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "hours",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getHours();
return self}, function($ctx1) {$ctx1.fill(self,"hours",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "hours:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setHours(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"hours:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "milliseconds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getMilliseconds();
return self}, function($ctx1) {$ctx1.fill(self,"milliseconds",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "milliseconds:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setMilliseconds(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"milliseconds:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "minutes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getMinutes();
return self}, function($ctx1) {$ctx1.fill(self,"minutes",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "minutes:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setMinutes(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"minutes:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "month",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getMonth() + 1;
return self}, function($ctx1) {$ctx1.fill(self,"month",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "month:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setMonth(aNumber - 1);
return self}, function($ctx1) {$ctx1.fill(self,"month:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(self._asString());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Date)})},
messageSends: ["nextPutAll:", "asString"]}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "seconds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getSeconds();
return self}, function($ctx1) {$ctx1.fill(self,"seconds",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "seconds:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setSeconds(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"seconds:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "time",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getTime();
return self}, function($ctx1) {$ctx1.fill(self,"time",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "time:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setTime(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"time:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "year",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getFullYear();
return self}, function($ctx1) {$ctx1.fill(self,"year",{},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "year:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setFullYear(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"year:",{aNumber:aNumber},smalltalk.Date)})},
messageSends: []}),
smalltalk.Date);


smalltalk.addMethod(
smalltalk.method({
selector: "fromMilliseconds:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new_(aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromMilliseconds:",{aNumber:aNumber},smalltalk.Date.klass)})},
messageSends: ["new:"]}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromSeconds:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._fromMilliseconds_(_st(aNumber).__star((1000)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromSeconds:",{aNumber:aNumber},smalltalk.Date.klass)})},
messageSends: ["fromMilliseconds:", "*"]}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.Date.klass)})},
messageSends: ["new:"]}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "magnitude";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.Date.klass)})},
messageSends: []}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "millisecondsToRun:",
fn: function (aBlock){
var self=this;
var t;
function $Date(){return smalltalk.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1;
t=_st($Date())._now();
_st(aBlock)._value();
$1=_st(_st($Date())._now()).__minus(t);
return $1;
}, function($ctx1) {$ctx1.fill(self,"millisecondsToRun:",{aBlock:aBlock,t:t},smalltalk.Date.klass)})},
messageSends: ["now", "value", "-"]}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new Date(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"new:",{anObject:anObject},smalltalk.Date.klass)})},
messageSends: []}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "now",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._today();
return $1;
}, function($ctx1) {$ctx1.fill(self,"now",{},smalltalk.Date.klass)})},
messageSends: ["today"]}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "today",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"today",{},smalltalk.Date.klass)})},
messageSends: ["new"]}),
smalltalk.Date.klass);


smalltalk.addClass('Environment', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
smalltalk.method({
selector: "addInstVarNamed:to:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(aClass)._instanceVariableNames())._copy();
_st($1)._add_(aString);
$2=_st($1)._yourself();
_st(self._classBuilder())._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),_st(aClass)._name(),$2,_st(_st(aClass)._package())._name());
return self}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:to:",{aString:aString,aClass:aClass},smalltalk.Environment)})},
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package", "classBuilder"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "allSelectors",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._at_("allSelectors"))._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},smalltalk.Environment)})},
messageSends: ["value", "at:", "current"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "availableClassNames",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._name();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},smalltalk.Environment)})},
messageSends: ["collect:", "name", "classes", "current"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "availablePackageNames",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._packages())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._name();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{},smalltalk.Environment)})},
messageSends: ["collect:", "name", "packages", "current"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "availableProtocolsFor:",
fn: function (aClass){
var self=this;
var protocols;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
protocols=_st(aClass)._protocols();
$1=_st(aClass)._superclass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(protocols)._addAll_(self._availableProtocolsFor_(_st(aClass)._superclass()));
};
$2=_st(_st(protocols)._asSet())._asArray();
return $2;
}, function($ctx1) {$ctx1.fill(self,"availableProtocolsFor:",{aClass:aClass,protocols:protocols},smalltalk.Environment)})},
messageSends: ["protocols", "ifNotNil:", "addAll:", "availableProtocolsFor:", "superclass", "asArray", "asSet"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "classBuilder",
fn: function (){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($ClassBuilder())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{},smalltalk.Environment)})},
messageSends: ["new"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "classNamed:",
fn: function (aString){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st($Smalltalk())._current())._at_(_st(aString)._asSymbol());
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._error_("Invalid class name");
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classNamed:",{aString:aString},smalltalk.Environment)})},
messageSends: ["ifNil:", "error:", "at:", "asSymbol", "current"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._classes();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Environment)})},
messageSends: ["classes", "current"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aPackage)._commit();
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage:",{aPackage:aPackage},smalltalk.Environment)})},
messageSends: ["commit"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassComment:for:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aClass)._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment:for:",{aString:aString,aClass:aClass},smalltalk.Environment)})},
messageSends: ["comment:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassDefinition:",
fn: function (aString){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
self._eval_on_(aString,_st($DoIt())._new());
return self}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString},smalltalk.Environment)})},
messageSends: ["eval:on:", "new"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethod:for:protocol:",
fn: function (sourceCode,class_,protocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(class_)._compile_category_(sourceCode,protocol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"compileMethod:for:protocol:",{sourceCode:sourceCode,class_:class_,protocol:protocol},smalltalk.Environment)})},
messageSends: ["compile:category:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClass:to:",
fn: function (aClass,aClassName){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._at_(aClassName);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._error_(_st("A class named ".__comma(aClassName)).__comma(" already exists"));
};
_st(_st($ClassBuilder())._new())._copyClass_named_(aClass,aClassName);
return self}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,aClassName:aClassName},smalltalk.Environment)})},
messageSends: ["ifNotNil:", "error:", ",", "at:", "current", "copyClass:named:", "new"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:on:",
fn: function (aString,aReceiver){
var self=this;
var compiler;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
compiler=_st($Compiler())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(compiler)._parseExpression_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
$1=_st(window)._alert_(_st(ex)._messageText());
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
$2=_st(compiler)._evaluateExpression_on_(aString,aReceiver);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{aString:aString,aReceiver:aReceiver,compiler:compiler},smalltalk.Environment)})},
messageSends: ["new", "on:do:", "alert:", "messageText", "parseExpression:", "evaluateExpression:on:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:on:do:",
fn: function (aBlock,anErrorClass,exceptionBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._try_catch_(aBlock,(function(exception){
return smalltalk.withContext(function($ctx2) {
$1=_st(exception)._isKindOf_(self._classNamed_(_st(anErrorClass)._name()));
if(smalltalk.assert($1)){
return _st(exceptionBlock)._value_(exception);
} else {
return _st(exception)._signal();
};
}, function($ctx2) {$ctx2.fillBlock({exception:exception},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"evaluate:on:do:",{aBlock:aBlock,anErrorClass:anErrorClass,exceptionBlock:exceptionBlock},smalltalk.Environment)})},
messageSends: ["try:catch:", "ifTrue:ifFalse:", "value:", "signal", "isKindOf:", "classNamed:", "name"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
fn: function (anObject){
var self=this;
function $InspectorHandler(){return smalltalk.InspectorHandler||(typeof InspectorHandler=="undefined"?nil:InspectorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($InspectorHandler())._inspector())._inspect_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.Environment)})},
messageSends: ["inspect:", "inspector"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveClass:toPackage:",
fn: function (aClass,aPackageName){
var self=this;
var package_;
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
package_=_st($Package())._named_(aPackageName);
$1=package_;
if(($receiver = $1) == nil || $receiver == undefined){
self._error_("Invalid package name");
} else {
$1;
};
$2=_st(package_).__eq_eq(_st(aClass)._package());
if(smalltalk.assert($2)){
$3=self;
return $3;
};
_st(aClass)._package_(package_);
return self}, function($ctx1) {$ctx1.fill(self,"moveClass:toPackage:",{aClass:aClass,aPackageName:aPackageName,package_:package_},smalltalk.Environment)})},
messageSends: ["named:", "ifNil:", "error:", "ifTrue:", "==", "package", "package:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toClass:",
fn: function (aMethod,aClassName){
var self=this;
var destinationClass;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
destinationClass=_st(_st($Smalltalk())._current())._at_(_st(aClassName)._asSymbol());
$1=destinationClass;
if(($receiver = $1) == nil || $receiver == undefined){
self._error_("Invalid class name");
} else {
$1;
};
$2=_st(destinationClass).__eq_eq(_st(aMethod)._methodClass());
if(smalltalk.assert($2)){
$3=self;
return $3;
};
_st(destinationClass)._compile_category_(_st(aMethod)._source(),_st(aMethod)._protocol());
_st(_st(aMethod)._methodClass())._removeCompiledMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toClass:",{aMethod:aMethod,aClassName:aClassName,destinationClass:destinationClass},smalltalk.Environment)})},
messageSends: ["at:", "asSymbol", "current", "ifNil:", "error:", "ifTrue:", "==", "methodClass", "compile:category:", "source", "protocol", "removeCompiledMethod:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toProtocol:",
fn: function (aMethod,aProtocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMethod)._category_(aProtocol);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toProtocol:",{aMethod:aMethod,aProtocol:aProtocol},smalltalk.Environment)})},
messageSends: ["category:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._packages();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.Environment)})},
messageSends: ["packages", "current"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerErrorHandler:",
fn: function (anErrorHandler){
var self=this;
function $ErrorHandler(){return smalltalk.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($ErrorHandler())._setCurrent_(anErrorHandler);
return self}, function($ctx1) {$ctx1.fill(self,"registerErrorHandler:",{anErrorHandler:anErrorHandler},smalltalk.Environment)})},
messageSends: ["setCurrent:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerInspector:",
fn: function (anInspector){
var self=this;
function $InspectorHandler(){return smalltalk.InspectorHandler||(typeof InspectorHandler=="undefined"?nil:InspectorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($InspectorHandler())._register_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"registerInspector:",{anInspector:anInspector},smalltalk.Environment)})},
messageSends: ["register:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerProgressHandler:",
fn: function (aProgressHandler){
var self=this;
function $ProgressHandler(){return smalltalk.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($ProgressHandler())._setCurrent_(aProgressHandler);
return self}, function($ctx1) {$ctx1.fill(self,"registerProgressHandler:",{aProgressHandler:aProgressHandler},smalltalk.Environment)})},
messageSends: ["setCurrent:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
fn: function (aClass){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Smalltalk())._current())._removeClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},smalltalk.Environment)})},
messageSends: ["removeClass:", "current"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMethod)._methodClass())._removeCompiledMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"removeMethod:",{aMethod:aMethod},smalltalk.Environment)})},
messageSends: ["removeCompiledMethod:", "methodClass"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProtocol:from:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(aClass)._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aClass)._removeCompiledMethod_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeProtocol:from:",{aString:aString,aClass:aClass},smalltalk.Environment)})},
messageSends: ["do:", "removeCompiledMethod:", "select:", "=", "protocol", "methods"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "renameClass:to:",
fn: function (aClass,aClassName){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._at_(aClassName);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._error_(_st("A class named ".__comma(aClassName)).__comma(" already exists"));
};
_st(_st($ClassBuilder())._new())._renameClass_to_(aClass,aClassName);
return self}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,aClassName:aClassName},smalltalk.Environment)})},
messageSends: ["ifNotNil:", "error:", ",", "at:", "current", "renameClass:to:", "new"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "renameProtocol:to:in:",
fn: function (aString,anotherString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(aClass)._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._protocol_(anotherString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renameProtocol:to:in:",{aString:aString,anotherString:anotherString,aClass:aClass},smalltalk.Environment)})},
messageSends: ["do:", "protocol:", "select:", "=", "protocol", "methods"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "setClassCommentOf:to:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aClass)._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"setClassCommentOf:to:",{aClass:aClass,aString:aString},smalltalk.Environment)})},
messageSends: ["comment:"]}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "systemAnnouncer",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._at_("SystemAnnouncer"))._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},smalltalk.Environment)})},
messageSends: ["current", "at:"]}),
smalltalk.Environment);



smalltalk.addClass('InspectorHandler', smalltalk.Object, [], 'Kernel-Objects');

smalltalk.InspectorHandler.klass.iVarNames = ['inspector'];
smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._inspector())._inspect_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.InspectorHandler.klass)})},
messageSends: ["inspect:", "inspector"]}),
smalltalk.InspectorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inspector",
fn: function (){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@inspector"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@inspector"]=$Transcript();
$1=self["@inspector"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspector",{},smalltalk.InspectorHandler.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.InspectorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inspector"]=anInspector;
return self}, function($ctx1) {$ctx1.fill(self,"register:",{anInspector:anInspector},smalltalk.InspectorHandler.klass)})},
messageSends: []}),
smalltalk.InspectorHandler.klass);


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel-Objects');
smalltalk.addMethod(
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
smalltalk.method({
selector: "at:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject'][aString];
return self}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var obj = self['@jsObject'];
		return aString in obj ? obj[aString] : aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aBlock:aBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:",
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : nil;
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{aString:aString,aBlock:aBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
fn: function (aString,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@jsObject'][aString] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,anObject:anObject},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._lookupProperty_(_st(_st(aMessage)._selector())._asJavaScriptSelector());
if(($receiver = $2) == nil || $receiver == undefined){
$1=smalltalk.Object.fn.prototype._doesNotUnderstand_.apply(_st(self), [aMessage]);
} else {
var jsSelector;
jsSelector=$receiver;
$1=self._forwardMessage_withArguments_(jsSelector,_st(aMessage)._arguments());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.JSObjectProxy)})},
messageSends: ["ifNil:ifNotNil:", "doesNotUnderstand:", "forwardMessage:withArguments:", "arguments", "lookupProperty:", "asJavaScriptSelector", "selector"]}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "forwardMessage:withArguments:",
fn: function (aString,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return smalltalk.send(self._jsObject(), aString, anArray);
	;
return self}, function($ctx1) {$ctx1.fill(self,"forwardMessage:withArguments:",{aString:aString,anArray:anArray},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",self._jsObject());
_st(anInspector)._setLabel_(self._printString());
self._addObjectVariablesTo_(variables);
_st(anInspector)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.JSObjectProxy)})},
messageSends: ["new", "at:put:", "jsObject", "setLabel:", "printString", "addObjectVariablesTo:", "setVariables:"]}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "jsObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@jsObject"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsObject",{},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "jsObject:",
fn: function (aJSObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@jsObject"]=aJSObject;
return self}, function($ctx1) {$ctx1.fill(self,"jsObject:",{aJSObject:aJSObject},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var o = self['@jsObject'];
		for(var i in o) {
			aBlock._value_value_(i, o[i]);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupProperty:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return aString in self._jsObject() ? aString : nil;
return self}, function($ctx1) {$ctx1.fill(self,"lookupProperty:",{aString:aString},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(_st(self._jsObject())._toString());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.JSObjectProxy)})},
messageSends: ["nextPutAll:", "toString", "jsObject"]}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifAbsent_("value",(function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.Object.fn.prototype._value.apply(_st(self), []);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.JSObjectProxy)})},
messageSends: ["at:ifAbsent:", "value"]}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aJSObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._jsObject_(aJSObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aJSObject:aJSObject},smalltalk.JSObjectProxy.klass)})},
messageSends: ["jsObject:", "new", "yourself"]}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
smalltalk.method({
selector: "&",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self & aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"&",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "*",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self * aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"*",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "+",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self + aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"+",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "-",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self - aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"-",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "/",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self / aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"/",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "<",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self < aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"<",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "<=",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self <= aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
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
smalltalk.method({
selector: ">",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self > aNumber;
return self}, function($ctx1) {$ctx1.fill(self,">",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: ">=",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self >= aNumber;
return self}, function($ctx1) {$ctx1.fill(self,">=",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "@",
fn: function (aNumber){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(self,aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"@",{aNumber:aNumber},smalltalk.Number)})},
messageSends: ["x:y:"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "\x5c\x5c",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self % aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"\x5c\x5c",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "abs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.abs(self);;
return self}, function($ctx1) {$ctx1.fill(self,"abs",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("(".__comma(self._printString())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Number)})},
messageSends: [",", "printString"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asPoint",
fn: function (){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(self,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asPoint",{},smalltalk.Number)})},
messageSends: ["x:y:"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return String(self) ;
return self}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "atRandom",
fn: function (){
var self=this;
function $Random(){return smalltalk.Random||(typeof Random=="undefined"?nil:Random)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st($Random())._new())._next()).__star(self))._truncated()).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atRandom",{},smalltalk.Number)})},
messageSends: ["+", "truncated", "*", "next", "new"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "copy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copy",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.Number)})},
messageSends: ["copy"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "even",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__eq(self.__backslash_backslash((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"even",{},smalltalk.Number)})},
messageSends: ["=", "\x5c\x5c"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "identityHash",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asString()).__comma("n");
return $1;
}, function($ctx1) {$ctx1.fill(self,"identityHash",{},smalltalk.Number)})},
messageSends: [",", "asString"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "isNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isNumber",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "isZero",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isZero",{},smalltalk.Number)})},
messageSends: ["="]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "max:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.max(self, aNumber);;
return self}, function($ctx1) {$ctx1.fill(self,"max:",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "min:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.min(self, aNumber);;
return self}, function($ctx1) {$ctx1.fill(self,"min:",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "negated",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__minus(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"negated",{},smalltalk.Number)})},
messageSends: ["-"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "negative",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__lt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"negative",{},smalltalk.Number)})},
messageSends: ["<"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "odd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._even())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"odd",{},smalltalk.Number)})},
messageSends: ["not", "even"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "positive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__gt_eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"positive",{},smalltalk.Number)})},
messageSends: [">="]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(self._asString());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Number)})},
messageSends: ["nextPutAll:", "asString"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "printShowingDecimalPlaces:",
fn: function (placesDesired){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toFixed(placesDesired);
return self}, function($ctx1) {$ctx1.fill(self,"printShowingDecimalPlaces:",{placesDesired:placesDesired},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "rounded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.round(self);;
return self}, function($ctx1) {$ctx1.fill(self,"rounded",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "sqrt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.sqrt(self);
return self}, function($ctx1) {$ctx1.fill(self,"sqrt",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "squared",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__star(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"squared",{},smalltalk.Number)})},
messageSends: ["*"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "timesRepeat:",
fn: function (aBlock){
var self=this;
var count;
return smalltalk.withContext(function($ctx1) { 
count=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(count).__gt(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value();
count=_st(count).__plus((1));
return count;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"timesRepeat:",{aBlock:aBlock,count:count},smalltalk.Number)})},
messageSends: ["whileFalse:", "value", "+", ">"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
fn: function (aNumber){
var self=this;
var array,first,last,count;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
first=self._truncated();
last=_st(_st(aNumber)._truncated()).__plus((1));
count=(1);
array=_st($Array())._new();
_st(_st(last).__minus(first))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
_st(array)._at_put_(count,first);
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
smalltalk.method({
selector: "to:by:",
fn: function (stop,step){
var self=this;
var array,value,pos;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
value=self;
array=_st($Array())._new();
pos=(1);
$1=_st(step).__eq((0));
if(smalltalk.assert($1)){
self._error_("step must be non-zero");
};
$2=_st(step).__lt((0));
if(smalltalk.assert($2)){
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(value).__gt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(array)._at_put_(pos,value);
pos=_st(pos).__plus((1));
pos;
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(value).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(array)._at_put_(pos,value);
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
smalltalk.method({
selector: "to:by:do:",
fn: function (stop,step,aBlock){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
value=self;
$1=_st(step).__eq((0));
if(smalltalk.assert($1)){
self._error_("step must be non-zero");
};
$2=_st(step).__lt((0));
if(smalltalk.assert($2)){
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(value).__gt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(value);
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(value).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(value);
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"to:by:do:",{stop:stop,step:step,aBlock:aBlock,value:value},smalltalk.Number)})},
messageSends: ["ifTrue:", "error:", "=", "ifTrue:ifFalse:", "whileTrue:", "value:", "+", ">=", "<=", "<"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "to:do:",
fn: function (stop,aBlock){
var self=this;
var nextValue;
return smalltalk.withContext(function($ctx1) { 
nextValue=self;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(nextValue).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(nextValue);
nextValue=_st(nextValue).__plus((1));
return nextValue;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"to:do:",{stop:stop,aBlock:aBlock,nextValue:nextValue},smalltalk.Number)})},
messageSends: ["whileTrue:", "value:", "+", "<="]}),
smalltalk.Number);

smalltalk.addMethod(
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
smalltalk.method({
selector: "|",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self | aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"|",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "magnitude";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.Number.klass)})},
messageSends: []}),
smalltalk.Number.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pi",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.PI;
return self}, function($ctx1) {$ctx1.fill(self,"pi",{},smalltalk.Number.klass)})},
messageSends: []}),
smalltalk.Number.klass);


smalltalk.addClass('Organizer', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.elements.addElement(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{anObject:anObject},smalltalk.Organizer)})},
messageSends: []}),
smalltalk.Organizer);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicAt_("elements"))._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.Organizer)})},
messageSends: ["copy", "basicAt:"]}),
smalltalk.Organizer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElement:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.elements.removeElement(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"removeElement:",{anObject:anObject},smalltalk.Organizer)})},
messageSends: []}),
smalltalk.Organizer);



smalltalk.addClass('ClassOrganizer', smalltalk.Organizer, [], 'Kernel-Objects');
smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
fn: function (aString){
var self=this;
function $ProtocolAdded(){return smalltalk.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.Organizer.fn.prototype._addElement_.apply(_st(self), [aString]);
$1=_st($ProtocolAdded())._new();
_st($1)._protocol_(aString);
_st($1)._theClass_(self._theClass());
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{aString:aString},smalltalk.ClassOrganizer)})},
messageSends: ["addElement:", "announce:", "protocol:", "new", "theClass:", "theClass", "yourself", "current"]}),
smalltalk.ClassOrganizer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElement:",
fn: function (aString){
var self=this;
function $ProtocolRemoved(){return smalltalk.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.Organizer.fn.prototype._removeElement_.apply(_st(self), [aString]);
$1=_st($ProtocolRemoved())._new();
_st($1)._protocol_(aString);
_st($1)._theClass_(self._theClass());
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"removeElement:",{aString:aString},smalltalk.ClassOrganizer)})},
messageSends: ["removeElement:", "announce:", "protocol:", "new", "theClass:", "theClass", "yourself", "current"]}),
smalltalk.ClassOrganizer);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.theClass ;
return self}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ClassOrganizer)})},
messageSends: []}),
smalltalk.ClassOrganizer);



smalltalk.addClass('PackageOrganizer', smalltalk.Organizer, [], 'Kernel-Objects');


smalltalk.addClass('Package', smalltalk.Object, ['commitPathJs', 'commitPathSt'], 'Kernel-Objects');
smalltalk.addMethod(
smalltalk.method({
selector: "classes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._organization())._elements();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Package)})},
messageSends: ["elements", "organization"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@commitPathJs"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._class())._defaultCommitPathJs();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathJs",{},smalltalk.Package)})},
messageSends: ["ifNil:", "defaultCommitPathJs", "class"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJs:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@commitPathJs"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"commitPathJs:",{aString:aString},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@commitPathSt"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._class())._defaultCommitPathSt();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathSt",{},smalltalk.Package)})},
messageSends: ["ifNil:", "defaultCommitPathSt", "class"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathSt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@commitPathSt"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"commitPathSt:",{aString:aString},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "isPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isPackage",{},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.pkgName;
return self}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.pkgName = aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "organization",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("organization");
return $1;
}, function($ctx1) {$ctx1.fill(self,"organization",{},smalltalk.Package)})},
messageSends: ["basicAt:"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.Object.fn.prototype._printOn_.apply(_st(self), [aStream]);
$1=aStream;
_st($1)._nextPutAll_(" (");
_st($1)._nextPutAll_(self._name());
$2=_st($1)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Package)})},
messageSends: ["printOn:", "nextPutAll:", "name"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "setupClasses",
fn: function (){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._classes();
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ClassBuilder())._new())._setupClass_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._initialize();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupClasses",{},smalltalk.Package)})},
messageSends: ["do:", "setupClass:", "new", "classes", "initialize"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "sortedClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._sortedClasses_(self._classes());
return $1;
}, function($ctx1) {$ctx1.fill(self,"sortedClasses",{},smalltalk.Package)})},
messageSends: ["sortedClasses:", "classes", "class"]}),
smalltalk.Package);


smalltalk.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
smalltalk.method({
selector: "commitPathsFromLoader",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var commitPath = typeof amber !== 'undefined' && amber.commitPath;
		if (!commitPath) return;
		if (commitPath.js) self._defaultCommitPathJs_(commitPath.js);
		if (commitPath.st) self._defaultCommitPathSt_(commitPath.st);
	;
return self}, function($ctx1) {$ctx1.fill(self,"commitPathsFromLoader",{},smalltalk.Package.klass)})},
messageSends: []}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
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
smalltalk.method({
selector: "defaultCommitPathJs:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultCommitPathJs"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathJs:",{aString:aString},smalltalk.Package.klass)})},
messageSends: []}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
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
smalltalk.method({
selector: "defaultCommitPathSt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultCommitPathSt"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathSt:",{aString:aString},smalltalk.Package.klass)})},
messageSends: []}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.klass.fn.prototype._initialize.apply(_st(self), []);
self._commitPathsFromLoader();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Package.klass)})},
messageSends: ["initialize", "commitPathsFromLoader"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "load:",
fn: function (aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._load_prefix_(aPackageName,_st(self._defaultCommitPathJs()).__comma("/"));
return self}, function($ctx1) {$ctx1.fill(self,"load:",{aPackageName:aPackageName},smalltalk.Package.klass)})},
messageSends: ["load:prefix:", ",", "defaultCommitPathJs"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "load:prefix:",
fn: function (aPackageName,aPrefix){
var self=this;
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._getScript_onSuccess_(_st(_st(aPrefix).__comma(aPackageName)).__comma(".js"),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Package())._named_(aPackageName))._setupClasses();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"load:prefix:",{aPackageName:aPackageName,aPrefix:aPrefix},smalltalk.Package.klass)})},
messageSends: ["getScript:onSuccess:", ",", "setupClasses", "named:"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:",
fn: function (aPackageName){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._packageAt_(aPackageName);
return $1;
}, function($ctx1) {$ctx1.fill(self,"named:",{aPackageName:aPackageName},smalltalk.Package.klass)})},
messageSends: ["packageAt:", "current"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:ifAbsent:",
fn: function (aPackageName,aBlock){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._packageAt_ifAbsent_(aPackageName,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"named:ifAbsent:",{aPackageName:aPackageName,aBlock:aBlock},smalltalk.Package.klass)})},
messageSends: ["packageAt:ifAbsent:", "current"]}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetCommitPaths",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultCommitPathJs"]=nil;
self["@defaultCommitPathSt"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetCommitPaths",{},smalltalk.Package.klass)})},
messageSends: []}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sortedClasses:",
fn: function (classes){
var self=this;
var children,others,nodes,expandedClasses;
function $ClassSorterNode(){return smalltalk.ClassSorterNode||(typeof ClassSorterNode=="undefined"?nil:ClassSorterNode)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
children=[];
others=[];
_st(classes)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(classes)._includes_(_st(each)._superclass());
if(smalltalk.assert($1)){
return _st(others)._add_(each);
} else {
return _st(children)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
nodes=_st(children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($ClassSorterNode())._on_classes_level_(each,others,(0));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
nodes=_st(nodes)._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(a)._theClass())._name()).__lt_eq(_st(_st(b)._theClass())._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
expandedClasses=_st($Array())._new();
_st(nodes)._do_((function(aNode){
return smalltalk.withContext(function($ctx2) {
return _st(aNode)._traverseClassesWith_(expandedClasses);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1)})}));
$2=expandedClasses;
return $2;
}, function($ctx1) {$ctx1.fill(self,"sortedClasses:",{classes:classes,children:children,others:others,nodes:nodes,expandedClasses:expandedClasses},smalltalk.Package.klass)})},
messageSends: ["do:", "ifFalse:ifTrue:", "add:", "includes:", "superclass", "collect:", "on:classes:level:", "sorted:", "<=", "name", "theClass", "new", "traverseClassesWith:"]}),
smalltalk.Package.klass);


smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel-Objects');
smalltalk.addMethod(
smalltalk.method({
selector: "*",
fn: function (aPoint){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(_st(self._x()).__star(_st(_st(aPoint)._asPoint())._x()),_st(self._y()).__star(_st(_st(aPoint)._asPoint())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"*",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["x:y:", "*", "x", "asPoint", "y"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "+",
fn: function (aPoint){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(_st(self._x()).__plus(_st(_st(aPoint)._asPoint())._x()),_st(self._y()).__plus(_st(_st(aPoint)._asPoint())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"+",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["x:y:", "+", "x", "asPoint", "y"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "-",
fn: function (aPoint){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(_st(self._x()).__minus(_st(_st(aPoint)._asPoint())._x()),_st(self._y()).__minus(_st(_st(aPoint)._asPoint())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"-",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["x:y:", "-", "x", "asPoint", "y"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "/",
fn: function (aPoint){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(_st(self._x()).__slash(_st(_st(aPoint)._asPoint())._x()),_st(self._y()).__slash(_st(_st(aPoint)._asPoint())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"/",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["x:y:", "/", "x", "asPoint", "y"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aPoint)._class()).__eq(self._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(aPoint)._x()).__eq(self._x())).__and(_st(_st(aPoint)._y()).__eq(self._y()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["and:", "&", "=", "y", "x", "class"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "asPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asPoint",{},smalltalk.Point)})},
messageSends: []}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@x"])._printOn_(aStream);
_st(aStream)._nextPutAll_("@");
$1=_st(_st(self["@y"])._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@y"])._negative();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(aStream)._space();
};
_st(self["@y"])._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Point)})},
messageSends: ["printOn:", "nextPutAll:", "ifTrue:", "space", "and:", "negative", "notNil"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (delta){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(delta)._x()).__plus(self["@x"])).__at(_st(_st(delta)._y()).__plus(self["@y"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"translateBy:",{delta:delta},smalltalk.Point)})},
messageSends: ["@", "+", "y", "x"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@x"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"x",{},smalltalk.Point)})},
messageSends: []}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"x:",{aNumber:aNumber},smalltalk.Point)})},
messageSends: []}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@y"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"y",{},smalltalk.Point)})},
messageSends: []}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@y"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"y:",{aNumber:aNumber},smalltalk.Point)})},
messageSends: []}),
smalltalk.Point);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "magnitude";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.Point.klass)})},
messageSends: []}),
smalltalk.Point.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "x:y:",
fn: function (aNumber,anotherNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._x_(aNumber);
_st($2)._y_(anotherNumber);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"x:y:",{aNumber:aNumber,anotherNumber:anotherNumber},smalltalk.Point.klass)})},
messageSends: ["x:", "new", "y:", "yourself"]}),
smalltalk.Point.klass);


smalltalk.addClass('ProgressHandler', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
smalltalk.method({
selector: "do:on:displaying:",
fn: function (aBlock,aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString},smalltalk.ProgressHandler)})},
messageSends: ["do:"]}),
smalltalk.ProgressHandler);


smalltalk.ProgressHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.ProgressHandler.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ProgressHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ProgressHandler.klass)})},
messageSends: ["register"]}),
smalltalk.ProgressHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register",
fn: function (){
var self=this;
function $ProgressHandler(){return smalltalk.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($ProgressHandler())._setCurrent_(self._new());
return self}, function($ctx1) {$ctx1.fill(self,"register",{},smalltalk.ProgressHandler.klass)})},
messageSends: ["setCurrent:", "new"]}),
smalltalk.ProgressHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setCurrent:",
fn: function (anHandler){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@current"]=anHandler;
return self}, function($ctx1) {$ctx1.fill(self,"setCurrent:",{anHandler:anHandler},smalltalk.ProgressHandler.klass)})},
messageSends: []}),
smalltalk.ProgressHandler.klass);


smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.random();
return self}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.Random)})},
messageSends: []}),
smalltalk.Random);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((1)._to_(anInteger))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._next();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger},smalltalk.Random)})},
messageSends: ["collect:", "next", "to:"]}),
smalltalk.Random);



smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
smalltalk.method({
selector: "addGlobalJsVariable:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._globalJsVariables())._add_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"addGlobalJsVariable:",{aString:aString},smalltalk.Smalltalk)})},
messageSends: ["add:", "globalJsVariables"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "asSmalltalkException:",
fn: function (anObject){
var self=this;
function $JavaScriptException(){return smalltalk.JavaScriptException||(typeof JavaScriptException=="undefined"?nil:JavaScriptException)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self._isSmalltalkObject_(anObject))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(anObject)._isKindOf_($Error());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
$1=anObject;
} else {
$1=_st($JavaScriptException())._on_(anObject);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSmalltalkException:",{anObject:anObject},smalltalk.Smalltalk)})},
messageSends: ["ifTrue:ifFalse:", "on:", "and:", "isKindOf:", "isSmalltalkObject:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[aString];
return self}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "basicParse:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.parser.parse(aString);
return self}, function($ctx1) {$ctx1.fill(self,"basicParse:",{aString:aString},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.classes();
return self}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "createPackage:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.addPackage(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"createPackage:",{packageName:packageName},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "createPackage:properties:",
fn: function (packageName,aDict){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._deprecatedAPI();
$1=_st(aDict)._isEmpty();
if(! smalltalk.assert($1)){
self._error_("createPackage:properties: called with nonempty properties");
};
$2=self._createPackage_(packageName);
return $2;
}, function($ctx1) {$ctx1.fill(self,"createPackage:properties:",{packageName:packageName,aDict:aDict},smalltalk.Smalltalk)})},
messageSends: ["deprecatedAPI", "ifFalse:", "error:", "isEmpty", "createPackage:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.removeClass(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"deleteClass:",{aClass:aClass},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteGlobalJsVariable:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._globalJsVariables())._remove_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"deleteGlobalJsVariable:",{aString:aString},smalltalk.Smalltalk)})},
messageSends: ["remove:ifAbsent:", "globalJsVariables"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "deletePackage:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
delete smalltalk.packages[packageName];
return self}, function($ctx1) {$ctx1.fill(self,"deletePackage:",{packageName:packageName},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "globalJsVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.globalJsVariables;
return self}, function($ctx1) {$ctx1.fill(self,"globalJsVariables",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "isSmalltalkObject:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return typeof anObject.klass !== 'undefined';
return self}, function($ctx1) {$ctx1.fill(self,"isSmalltalkObject:",{anObject:anObject},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "packageAt:",
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.packages[packageName];
return self}, function($ctx1) {$ctx1.fill(self,"packageAt:",{packageName:packageName},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "packageAt:ifAbsent:",
fn: function (packageName,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._packageAt_(packageName);
$1=_st($2)._ifNil_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"packageAt:ifAbsent:",{packageName:packageName,aBlock:aBlock},smalltalk.Smalltalk)})},
messageSends: ["ifNil:", "packageAt:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.packages.all();
return self}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
fn: function (aString){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
self._try_catch_((function(){
return smalltalk.withContext(function($ctx2) {
result=self._basicParse_(aString);
return result;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(ex){
return smalltalk.withContext(function($ctx2) {
return _st(self._parseError_parsing_(ex,aString))._signal();
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
$2=result;
_st($2)._source_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString,result:result},smalltalk.Smalltalk)})},
messageSends: ["try:catch:", "basicParse:", "signal", "parseError:parsing:", "source:", "yourself"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "parseError:parsing:",
fn: function (anException,aString){
var self=this;
function $ParseError(){return smalltalk.ParseError||(typeof ParseError=="undefined"?nil:ParseError)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ParseError())._new())._messageText_(_st(_st(_st(_st("Parse error on line ".__comma(_st(anException)._basicAt_("line"))).__comma(" column ")).__comma(_st(anException)._basicAt_("column"))).__comma(" : Unexpected character ")).__comma(_st(anException)._basicAt_("found")));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseError:parsing:",{anException:anException,aString:aString},smalltalk.Smalltalk)})},
messageSends: ["messageText:", ",", "basicAt:", "new"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "pseudoVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["self", "super", "nil", "true", "false", "thisContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pseudoVariableNames",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "readJSObject:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.readJSObject(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"readJSObject:",{anObject:anObject},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
fn: function (aClass){
var self=this;
function $ClassRemoved(){return smalltalk.ClassRemoved||(typeof ClassRemoved=="undefined"?nil:ClassRemoved)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(aClass)._isMetaclass();
if(smalltalk.assert($1)){
self._error_(_st(_st(aClass)._asString()).__comma(" is a Metaclass and cannot be removed!"));
};
self._deleteClass_(aClass);
$2=_st($ClassRemoved())._new();
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($3);
return self}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},smalltalk.Smalltalk)})},
messageSends: ["ifTrue:", "error:", ",", "asString", "isMetaclass", "deleteClass:", "announce:", "theClass:", "new", "yourself", "current"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "removePackage:",
fn: function (packageName){
var self=this;
var pkg;
return smalltalk.withContext(function($ctx1) { 
pkg=self._packageAt_ifAbsent_(packageName,(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Missing package: ".__comma(packageName));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(pkg)._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._removeClass_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._deletePackage_(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"removePackage:",{packageName:packageName,pkg:pkg},smalltalk.Smalltalk)})},
messageSends: ["packageAt:ifAbsent:", "error:", ",", "do:", "removeClass:", "classes", "deletePackage:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "renamePackage:to:",
fn: function (packageName,newName){
var self=this;
var pkg;
return smalltalk.withContext(function($ctx1) { 
var $1;
pkg=self._packageAt_ifAbsent_(packageName,(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Missing package: ".__comma(packageName));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=self._packageAt_(newName);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._error_("Already exists a package called: ".__comma(newName));
};
_st(self._basicAt_("packages"))._at_put_(newName,pkg);
_st(pkg)._name_(newName);
self._deletePackage_(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"renamePackage:to:",{packageName:packageName,newName:newName,pkg:pkg},smalltalk.Smalltalk)})},
messageSends: ["packageAt:ifAbsent:", "error:", ",", "ifNotNil:", "packageAt:", "at:put:", "basicAt:", "name:", "deletePackage:"]}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "reservedWords",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.reservedWords;
return self}, function($ctx1) {$ctx1.fill(self,"reservedWords",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "version",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "0.11.0";
}, function($ctx1) {$ctx1.fill(self,"version",{},smalltalk.Smalltalk)})},
messageSends: []}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk;
return self}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.Smalltalk.klass)})},
messageSends: []}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('Timeout', smalltalk.Object, ['rawTimeout'], 'Kernel-Objects');
smalltalk.addMethod(
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
smalltalk.method({
selector: "rawTimeout:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rawTimeout"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"rawTimeout:",{anObject:anObject},smalltalk.Timeout)})},
messageSends: []}),
smalltalk.Timeout);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._rawTimeout_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.Timeout.klass)})},
messageSends: ["rawTimeout:", "new", "yourself"]}),
smalltalk.Timeout.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=null;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self;
$1=_st($2)._ifNil_ifNotNil_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{aBlock:aBlock},smalltalk.UndefinedObject)})},
messageSends: ["ifNil:ifNotNil:"]}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:ifNotNil:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.UndefinedObject)})},
messageSends: ["value"]}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{aBlock:aBlock},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:ifNil:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherBlock)._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.UndefinedObject)})},
messageSends: ["value"]}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isNil",{},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "notNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"notNil",{},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_("nil");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.UndefinedObject)})},
messageSends: ["nextPutAll:"]}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},smalltalk.UndefinedObject)})},
messageSends: []}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:",
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclass_instanceVariableNames_package_(aString,anotherString,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:",{aString:aString,anotherString:anotherString},smalltalk.UndefinedObject)})},
messageSends: ["subclass:instanceVariableNames:package:"]}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
fn: function (aString,aString2,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._deprecatedAPI();
$1=self._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:category:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.UndefinedObject)})},
messageSends: ["deprecatedAPI", "subclass:instanceVariableNames:package:"]}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
fn: function (aString,aString2,aString3){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ClassBuilder())._new())._superclass_subclass_instanceVariableNames_package_(self,_st(aString)._asString(),aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:package:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.UndefinedObject)})},
messageSends: ["superclass:subclass:instanceVariableNames:package:", "asString", "new"]}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("You cannot create new instances of UndefinedObject. Use nil");
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.UndefinedObject.klass)})},
messageSends: ["error:"]}),
smalltalk.UndefinedObject.klass);


smalltalk.addMethod(
smalltalk.method({
selector: "asJavaScriptSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._replace_with_("^([a-zA-Z0-9]*).*$","$1");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSelector",{},smalltalk.String)})},
messageSends: ["replace:with:"]}),
smalltalk.String);

