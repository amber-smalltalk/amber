(function(smalltalk,nil,_st){
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
selector: "asNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.Number)})},
messageSends: []}),
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
selector: "ceiling",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.ceil(self);;
return self}, function($ctx1) {$ctx1.fill(self,"ceiling",{},smalltalk.Number)})},
messageSends: []}),
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
selector: "floor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.floor(self);;
return self}, function($ctx1) {$ctx1.fill(self,"floor",{},smalltalk.Number)})},
messageSends: []}),
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

})(global_smalltalk,global_nil,global__st);
