smalltalk.addPackage('Kernel', {});
smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.send(self, "__eq_eq", [anObject]);
return self;},
args: ["anObject"],
source: unescape('%3D%20anObject%0A%09%5Eself%20%3D%3D%20anObject'),
messageSends: [unescape("%3D%3D")],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_%7E_eq'),
smalltalk.method({
selector: unescape('%7E%3D'),
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [anObject]), "__eq", [false]);
return self;},
args: ["anObject"],
source: unescape('%7E%3D%20anObject%0A%09%5E%28self%20%3D%20anObject%29%20%3D%20false'),
messageSends: [unescape("%3D")],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('initialize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_yourself'),
smalltalk.method({
selector: unescape('yourself'),
category: 'accessing',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('yourself%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_class'),
smalltalk.method({
selector: unescape('class'),
category: 'accessing',
fn: function (){
var self=this;
return self.klass;
return self;},
args: [],
source: unescape('class%0A%09%3Creturn%20self.klass%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["Object not indexable"]);
return self;},
args: [],
source: unescape('size%0A%09self%20error%3A%20%27Object%20not%20indexable%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_copy'),
smalltalk.method({
selector: unescape('copy'),
category: 'copying',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_shallowCopy", []), "_postCopy", []);
return self;},
args: [],
source: unescape('copy%0A%09%5Eself%20shallowCopy%20postCopy'),
messageSends: ["postCopy", "shallowCopy"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
category: 'copying',
fn: function (){
var self=this;

	    var copy = self.klass._new();
	    for(var i in self) {
		if(/^@.+/.test(i)) {
		    copy[i] = self[i];
		}
	    }
	    return copy;
	;
return self;},
args: [],
source: unescape('shallowCopy%0A%09%3C%0A%09%20%20%20%20var%20copy%20%3D%20self.klass._new%28%29%3B%0A%09%20%20%20%20for%28var%20i%20in%20self%29%20%7B%0A%09%09if%28/%5E@.+/.test%28i%29%29%20%7B%0A%09%09%20%20%20%20copy%5Bi%5D%20%3D%20self%5Bi%5D%3B%0A%09%09%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20copy%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
category: 'copying',
fn: function (){
var self=this;
    
	    var copy = self.klass._new();
	    for(var i in self) {
		if(/^@.+/.test(i)) {
		    copy[i] = self[i]._deepCopy();
		}
	    }
	    return copy;
	;
return self;},
args: [],
source: unescape('deepCopy%0A%09%3C%20%20%20%20%0A%09%20%20%20%20var%20copy%20%3D%20self.klass._new%28%29%3B%0A%09%20%20%20%20for%28var%20i%20in%20self%29%20%7B%0A%09%09if%28/%5E@.+/.test%28i%29%29%20%7B%0A%09%09%20%20%20%20copy%5Bi%5D%20%3D%20self%5Bi%5D._deepCopy%28%29%3B%0A%09%09%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20copy%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_postCopy'),
smalltalk.method({
selector: unescape('postCopy'),
category: 'copying',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('postCopy'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('__minus_gt'),
smalltalk.method({
selector: unescape('-%3E'),
category: 'converting',
fn: function (anObject){
var self=this;
return smalltalk.send((smalltalk.Association || Association), "_key_value_", [self, anObject]);
return self;},
args: ["anObject"],
source: unescape('-%3E%20anObject%0A%09%5EAssociation%20key%3A%20self%20value%3A%20anObject'),
messageSends: ["key:value:"],
referencedClasses: ["Association"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_printString", []);
return self;},
args: [],
source: unescape('asString%0A%09%5Eself%20printString'),
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_asString", []);
return self;},
args: [],
source: unescape('asJavascript%0A%09%5Eself%20asString'),
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_perform_'),
smalltalk.method({
selector: unescape('perform%3A'),
category: 'message handling',
fn: function (aSymbol){
var self=this;
return smalltalk.send(self, "_perform_withArguments_", [aSymbol, []]);
return self;},
args: ["aSymbol"],
source: unescape('perform%3A%20aSymbol%0A%09%5Eself%20perform%3A%20aSymbol%20withArguments%3A%20%23%28%29'),
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_perform_withArguments_'),
smalltalk.method({
selector: unescape('perform%3AwithArguments%3A'),
category: 'message handling',
fn: function (aSymbol, aCollection){
var self=this;
return smalltalk.send(self, "_basicPerform_withArguments_", [smalltalk.send(aSymbol, "_asSelector", []), aCollection]);
return self;},
args: ["aSymbol", "aCollection"],
source: unescape('perform%3A%20aSymbol%20withArguments%3A%20aCollection%0A%09%5Eself%20basicPerform%3A%20aSymbol%20asSelector%20withArguments%3A%20aCollection'),
messageSends: ["basicPerform:withArguments:", "asSelector"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_instVarAt_'),
smalltalk.method({
selector: unescape('instVarAt%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return self['@'+aString];
return self;},
args: ["aString"],
source: unescape('instVarAt%3A%20aString%0A%09%3Creturn%20self%5B%27@%27+aString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_instVarAt_put_'),
smalltalk.method({
selector: unescape('instVarAt%3Aput%3A'),
category: 'accessing',
fn: function (aString, anObject){
var self=this;
self['@' + aString] = anObject;
return self;},
args: ["aString", "anObject"],
source: unescape('instVarAt%3A%20aString%20put%3A%20anObject%0A%09%3Cself%5B%27@%27%20+%20aString%5D%20%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicAt_'),
smalltalk.method({
selector: unescape('basicAt%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return self[aString];
return self;},
args: ["aString"],
source: unescape('basicAt%3A%20aString%0A%09%3Creturn%20self%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicAt_put_'),
smalltalk.method({
selector: unescape('basicAt%3Aput%3A'),
category: 'accessing',
fn: function (aString, anObject){
var self=this;
return self[aString] = anObject;
return self;},
args: ["aString", "anObject"],
source: unescape('basicAt%3A%20aString%20put%3A%20anObject%0A%09%3Creturn%20self%5BaString%5D%20%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_error_'),
smalltalk.method({
selector: unescape('error%3A'),
category: 'error handling',
fn: function (aString){
var self=this;
smalltalk.send((smalltalk.Error || Error), "_signal_", [aString]);
return self;},
args: ["aString"],
source: unescape('error%3A%20aString%0A%09Error%20signal%3A%20aString'),
messageSends: ["signal:"],
referencedClasses: ["Error"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_subclassResponsibility'),
smalltalk.method({
selector: unescape('subclassResponsibility'),
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["This method is a responsibility of a subclass"]);
return self;},
args: [],
source: unescape('subclassResponsibility%0A%09self%20error%3A%20%27This%20method%20is%20a%20responsibility%20of%20a%20subclass%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_shouldNotImplement'),
smalltalk.method({
selector: unescape('shouldNotImplement'),
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", [smalltalk.send("This method should not be implemented in ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;},
args: [],
source: unescape('shouldNotImplement%0A%09self%20error%3A%20%27This%20method%20should%20not%20be%20implemented%20in%20%27%2C%20self%20class%20name'),
messageSends: ["error:", unescape("%2C"), "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_try_catch_'),
smalltalk.method({
selector: unescape('try%3Acatch%3A'),
category: 'error handling',
fn: function (aBlock, anotherBlock){
var self=this;
try{aBlock()} catch(e) {anotherBlock(e)};
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('try%3A%20aBlock%20catch%3A%20anotherBlock%0A%09%3Ctry%7BaBlock%28%29%7D%20catch%28e%29%20%7BanotherBlock%28e%29%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send("a ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);
return self;},
args: [],
source: unescape('printString%0A%09%5E%27a%20%27%2C%20self%20class%20name'),
messageSends: [unescape("%2C"), "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_printNl'),
smalltalk.method({
selector: unescape('printNl'),
category: 'printing',
fn: function (){
var self=this;
console.log(self);
return self;},
args: [],
source: unescape('printNl%0A%09%3Cconsole.log%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isKindOf_'),
smalltalk.method({
selector: unescape('isKindOf%3A'),
category: 'testing',
fn: function (aClass){
var self=this;
return ((($receiver = smalltalk.send(self, "_isMemberOf_", [aClass])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return true;})() : (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return true;}), (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);})]));
return self;},
args: ["aClass"],
source: unescape('isKindOf%3A%20aClass%0A%09%5E%28self%20isMemberOf%3A%20aClass%29%0A%09%20%20%20%20ifTrue%3A%20%5Btrue%5D%0A%09%20%20%20%20ifFalse%3A%20%5Bself%20class%20inheritsFrom%3A%20aClass%5D'),
messageSends: ["ifTrue:ifFalse:", "isMemberOf:", "inheritsFrom:", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isMemberOf_'),
smalltalk.method({
selector: unescape('isMemberOf%3A'),
category: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [aClass]);
return self;},
args: ["aClass"],
source: unescape('isMemberOf%3A%20aClass%0A%09%5Eself%20class%20%3D%20aClass'),
messageSends: [unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_ifNil_'),
smalltalk.method({
selector: unescape('ifNil%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
return self;
return self;},
args: ["aBlock"],
source: unescape('ifNil%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_ifNil_ifNotNil_'),
smalltalk.method({
selector: unescape('ifNil%3AifNotNil%3A'),
category: 'testing',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(anotherBlock, "_value", []);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('ifNil%3A%20aBlock%20ifNotNil%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EanotherBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_ifNotNil_'),
smalltalk.method({
selector: unescape('ifNotNil%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;},
args: ["aBlock"],
source: unescape('ifNotNil%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EaBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_ifNotNil_ifNil_'),
smalltalk.method({
selector: unescape('ifNotNil%3AifNil%3A'),
category: 'testing',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('ifNotNil%3A%20aBlock%20ifNil%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EaBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isNil'),
smalltalk.method({
selector: unescape('isNil'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isNil%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_notNil'),
smalltalk.method({
selector: unescape('notNil'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_isNil", []), "_not", []);
return self;},
args: [],
source: unescape('notNil%0A%09%5Eself%20isNil%20not'),
messageSends: ["not", "isNil"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isClass'),
smalltalk.method({
selector: unescape('isClass'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isClass%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isMetaclass'),
smalltalk.method({
selector: unescape('isMetaclass'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isMetaclass%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isNumber'),
smalltalk.method({
selector: unescape('isNumber'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isNumber%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isString'),
smalltalk.method({
selector: unescape('isString'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isString%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isParseFailure'),
smalltalk.method({
selector: unescape('isParseFailure'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isParseFailure%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicPerform_'),
smalltalk.method({
selector: unescape('basicPerform%3A'),
category: 'message handling',
fn: function (aSymbol){
var self=this;
return smalltalk.send(self, "_basicPerform_withArguments_", [aSymbol, []]);
return self;},
args: ["aSymbol"],
source: unescape('basicPerform%3A%20aSymbol%20%0A%09%5Eself%20basicPerform%3A%20aSymbol%20withArguments%3A%20%23%28%29'),
messageSends: ["basicPerform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicPerform_withArguments_'),
smalltalk.method({
selector: unescape('basicPerform%3AwithArguments%3A'),
category: 'message handling',
fn: function (aSymbol, aCollection){
var self=this;
return self[aSymbol].apply(self, aCollection);;
return self;},
args: ["aSymbol", "aCollection"],
source: unescape('basicPerform%3A%20aSymbol%20withArguments%3A%20aCollection%0A%09%3Creturn%20self%5BaSymbol%5D.apply%28self%2C%20aCollection%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicDelete_'),
smalltalk.method({
selector: unescape('basicDelete%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
delete self[aString];
return self;},
args: ["aString"],
source: unescape('basicDelete%3A%20aString%0A%20%20%20%20%3Cdelete%20self%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
category: 'error handling',
fn: function (aMessage){
var self=this;
(function($rec){smalltalk.send($rec, "_receiver_", [self]);smalltalk.send($rec, "_message_", [aMessage]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.MessageNotUnderstood || MessageNotUnderstood), "_new", []));
return self;},
args: ["aMessage"],
source: unescape('doesNotUnderstand%3A%20aMessage%0A%09MessageNotUnderstood%20new%0A%09%09receiver%3A%20self%3B%0A%09%09message%3A%20aMessage%3B%0A%09%09signal'),
messageSends: ["receiver:", "message:", "signal", "new"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asJSON'),
smalltalk.method({
selector: unescape('asJSON'),
category: 'converting',
fn: function (){
var self=this;
return JSON.stringify(self._asJSONObject());
return self;},
args: [],
source: unescape('asJSON%0A%09%3Creturn%20JSON.stringify%28self._asJSONObject%28%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
var object=nil;
object=smalltalk.send((smalltalk.Object || Object), "_new", []);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_instanceVariableNames", []), "_do_", [(function(each){return smalltalk.send(object, "_basicAt_put_", [each, smalltalk.send(smalltalk.send(self, "_instVarAt_", [each]), "_asJSONObject", [])]);})]);
return object;
return self;},
args: [],
source: unescape('asJSONObject%0A%09%7C%20object%20%7C%0A%09object%20%3A%3D%20Object%20new.%0A%09self%20class%20instanceVariableNames%20do%3A%20%5B%3Aeach%20%7C%0A%09%09object%20basicAt%3A%20each%20put%3A%20%28self%20instVarAt%3A%20each%29%20asJSONObject%5D.%0A%09%5Eobject'),
messageSends: ["new", "do:", "instanceVariableNames", "class", "basicAt:put:", "asJSONObject", "instVarAt:"],
referencedClasses: ["Object"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_halt'),
smalltalk.method({
selector: unescape('halt'),
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["Halt encountered"]);
return self;},
args: [],
source: unescape('halt%0A%09self%20error%3A%20%27Halt%20encountered%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_log_block_'),
smalltalk.method({
selector: unescape('log%3Ablock%3A'),
category: 'printing',
fn: function (aString, aBlock){
var self=this;
var result=nil;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(smalltalk.send(aString, "__comma", [" time: "]), "__comma", [smalltalk.send(smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [(function(){return result=smalltalk.send(aBlock, "_value", []);})]), "_printString", [])])]);
return result;
return self;},
args: ["aString", "aBlock"],
source: unescape('log%3A%20aString%20block%3A%20aBlock%0A%0A%09%7C%20result%20%7C%0A%09console%20log%3A%20%20aString%2C%20%20%27%20time%3A%20%27%2C%20%28Date%20millisecondsToRun%3A%20%5Bresult%20%3A%3D%20aBlock%20value%5D%29%20printString.%0A%09%5Eresult'),
messageSends: ["log:", unescape("%2C"), "printString", "millisecondsToRun:", "value"],
referencedClasses: ["Date"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('__eq_eq'),
smalltalk.method({
selector: unescape('%3D%3D'),
category: 'comparing',
fn: function (anObject){
var self=this;
return self === anObject;
return self;},
args: ["anObject"],
source: unescape('%3D%3D%20anObject%0A%09%3Creturn%20self%20%3D%3D%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_%7E%7E'),
smalltalk.method({
selector: unescape('%7E%7E'),
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq_eq", [anObject]), "__eq", [false]);
return self;},
args: ["anObject"],
source: unescape('%7E%7E%20anObject%0A%09%5E%28self%20%3D%3D%20anObject%29%20%3D%20false'),
messageSends: [unescape("%3D"), unescape("%3D%3D")],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_deprecatedAPI'),
smalltalk.method({
selector: unescape('deprecatedAPI'),
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.getThisContext()), "_home", []), "_asString", []), "__comma", [unescape("%20is%20deprecated%21")])]);
return self;},
args: [],
source: unescape('deprecatedAPI%0A%09%22Just%20a%20simple%20way%20to%20deprecate%20methods.%0A%09%23deprecatedAPI%20is%20in%20the%20%27error%20handling%27%20protocol%20even%20if%20it%20doesn%27t%20throw%20an%20error%2C%0A%09but%20it%20could%20in%20the%20future.%22%0A%09console%20warn%3A%20thisContext%20home%20asString%2C%20%27%20is%20deprecated%21%27'),
messageSends: ["warn:", unescape("%2C"), "asString", "home"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_storeString'),
smalltalk.method({
selector: unescape('storeString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(s){return smalltalk.send(self, "_storeOn_", [s]);})]);
return self;},
args: [],
source: unescape('storeString%0A%09%22Answer%20a%20String%20representation%20of%20the%20receiver%20from%20which%20the%20receiver%20%0A%09can%20be%20reconstructed.%22%0A%0A%09%5E%20String%20streamContents%3A%20%5B%3As%20%7C%20self%20storeOn%3A%20s%5D'),
messageSends: ["streamContents:", "storeOn:"],
referencedClasses: ["String"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_storeOn_'),
smalltalk.method({
selector: unescape('storeOn%3A'),
category: 'printing',
fn: function (aStream){
var self=this;
smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(self, "_printString", [])]);
return self;},
args: ["aStream"],
source: unescape('storeOn%3A%20aStream%0A%09aStream%20nextPutAll%3A%20self%20printString'),
messageSends: ["nextPutAll:", "printString"],
referencedClasses: []
}),
smalltalk.Object);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('initialize%0A%09%22no%20op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object.klass);


smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_classes'),
smalltalk.method({
selector: unescape('classes'),
category: 'accessing',
fn: function (){
var self=this;
return self.classes();
return self;},
args: [],
source: unescape('classes%0A%09%3Creturn%20self.classes%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_readJSON_'),
smalltalk.method({
selector: unescape('readJSON%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
return self.readJSObject(anObject);
return self;},
args: ["anObject"],
source: unescape('readJSON%3A%20anObject%0A%09%3Creturn%20self.readJSObject%28anObject%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return self[aString];
return self;},
args: ["aString"],
source: unescape('at%3A%20aString%0A%09%3Creturn%20self%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_removeClass_'),
smalltalk.method({
selector: unescape('removeClass%3A'),
category: 'classes',
fn: function (aClass){
var self=this;
((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [unescape("%20is%20a%20Metaclass%20and%20cannot%20be%20removed%21")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [unescape("%20is%20a%20Metaclass%20and%20cannot%20be%20removed%21")])]);})]));
smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [(function(each){return smalltalk.send(aClass, "_removeCompiledMethod_", [each]);})]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_methodDictionary", []), "_values", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(aClass, "_class", []), "_removeCompiledMethod_", [each]);})]);
smalltalk.send(self, "_basicDelete_", [smalltalk.send(aClass, "_name", [])]);
return self;},
args: ["aClass"],
source: unescape('removeClass%3A%20aClass%0A%09aClass%20isMetaclass%20ifTrue%3A%20%5Bself%20error%3A%20aClass%20asString%2C%20%27%20is%20a%20Metaclass%20and%20cannot%20be%20removed%21%27%5D.%0A%09aClass%20methodDictionary%20values%20do%3A%20%5B%3Aeach%20%7C%0A%09%09aClass%20removeCompiledMethod%3A%20each%5D.%0A%09aClass%20class%20methodDictionary%20values%20do%3A%20%5B%3Aeach%20%7C%0A%09%09aClass%20class%20removeCompiledMethod%3A%20each%5D.%0A%09self%20basicDelete%3A%20aClass%20name'),
messageSends: ["ifTrue:", "isMetaclass", "error:", unescape("%2C"), "asString", "do:", "values", "methodDictionary", "removeCompiledMethod:", "class", "basicDelete:", "name"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_basicParse_'),
smalltalk.method({
selector: unescape('basicParse%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.parser.parse(aString);
return self;},
args: ["aString"],
source: unescape('basicParse%3A%20aString%0A%09%3Creturn%20smalltalk.parser.parse%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_parse_'),
smalltalk.method({
selector: unescape('parse%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
var result=nil;
smalltalk.send(self, "_try_catch_", [(function(){return result=smalltalk.send(self, "_basicParse_", [aString]);}), (function(ex){return smalltalk.send(smalltalk.send(self, "_parseError_parsing_", [ex, aString]), "_signal", []);})]);
return result;
return self;},
args: ["aString"],
source: unescape('parse%3A%20aString%0A%09%7C%20result%20%7C%20%0A%09self%20try%3A%20%5Bresult%20%3A%3D%20self%20basicParse%3A%20aString%5D%20catch%3A%20%5B%3Aex%20%7C%20%28self%20parseError%3A%20ex%20parsing%3A%20aString%29%20signal%5D.%0A%09%5Eresult'),
messageSends: ["try:catch:", "basicParse:", "signal", "parseError:parsing:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_parseError_parsing_'),
smalltalk.method({
selector: unescape('parseError%3Aparsing%3A'),
category: 'accessing',
fn: function (anException, aString){
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
lines=smalltalk.send(aString, "_lines", []);
badLine=smalltalk.send(lines, "_at_", [row]);
badLine=smalltalk.send(smalltalk.send(smalltalk.send(badLine, "_copyFrom_to_", [(1), ((($receiver = col).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]), "__comma", [unescape("%20%3D%3D%3D%3E")]), "__comma", [smalltalk.send(badLine, "_copyFrom_to_", [col, smalltalk.send(badLine, "_size", [])])]);
smalltalk.send(lines, "_at_put_", [row, badLine]);
code=smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(s){return smalltalk.send(lines, "_withIndexDo_", [(function(l, i){return smalltalk.send(s, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(i, "_asString", []), "__comma", [": "]), "__comma", [l]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])])]);})]);})]);
return smalltalk.send(smalltalk.send((smalltalk.Error || Error), "_new", []), "_messageText_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Parse error on line ", "__comma", [row]), "__comma", [" column "]), "__comma", [col]), "__comma", [" : "]), "__comma", [message]), "__comma", [unescape("%20Below%20is%20code%20with%20line%20numbers%20and%20%3D%3D%3D%3E%20marker%20inserted%3A")]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [code])]);
return self;},
args: ["anException", "aString"],
source: unescape('parseError%3A%20anException%20parsing%3A%20aString%0A%09%7C%20row%20col%20message%20lines%20badLine%20code%20%7C%0A%09%3Crow%20%3D%20anException.line%3B%0A%09col%20%3D%20anException.column%3B%0A%09message%20%3D%20anException.message%3B%3E.%0A%09lines%20%3A%3D%20aString%20lines.%0A%09badLine%20%3A%3D%20lines%20at%3A%20row.%0A%09badLine%20%3A%3D%20%28badLine%20copyFrom%3A%201%20to%3A%20col%20-%201%29%2C%20%27%20%3D%3D%3D%3E%27%2C%20%28badLine%20copyFrom%3A%20%20col%20to%3A%20badLine%20size%29.%0A%09lines%20at%3A%20row%20put%3A%20badLine.%0A%09code%20%3A%3D%20String%20streamContents%3A%20%5B%3As%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lines%20withIndexDo%3A%20%5B%3Al%20%3Ai%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20s%20nextPutAll%3A%20i%20asString%2C%20%27%3A%20%27%2C%20l%2C%20String%20lf%5D%5D.%0A%09%5E%20Error%20new%20messageText%3A%20%28%27Parse%20error%20on%20line%20%27%20%2C%20row%20%2C%20%27%20column%20%27%20%2C%20col%20%2C%20%27%20%3A%20%27%20%2C%20message%20%2C%20%27%20Below%20is%20code%20with%20line%20numbers%20and%20%3D%3D%3D%3E%20marker%20inserted%3A%27%20%2C%20String%20lf%2C%20code%29'),
messageSends: ["lines", "at:", unescape("%2C"), "copyFrom:to:", unescape("-"), "size", "at:put:", "streamContents:", "withIndexDo:", "nextPutAll:", "asString", "lf", "messageText:", "new"],
referencedClasses: ["String", "Error"]
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_packages'),
smalltalk.method({
selector: unescape('packages'),
category: 'packages',
fn: function (){
var self=this;
return self.packages.all();
return self;},
args: [],
source: unescape('packages%0A%09%22Return%20all%20Package%20instances%20in%20the%20system.%22%0A%0A%09%3Creturn%20self.packages.all%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_packageAt_'),
smalltalk.method({
selector: unescape('packageAt%3A'),
category: 'packages',
fn: function (packageName){
var self=this;
return self.packages[packageName];
return self;},
args: ["packageName"],
source: unescape('packageAt%3A%20packageName%0A%20%20%20%20%20%20%20%3Creturn%20self.packages%5BpackageName%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_packageAt_ifAbsent_'),
smalltalk.method({
selector: unescape('packageAt%3AifAbsent%3A'),
category: 'packages',
fn: function (packageName, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_packageAt_", [packageName]), "_ifNil_", [aBlock]);
return self;},
args: ["packageName", "aBlock"],
source: unescape('packageAt%3A%20packageName%20ifAbsent%3A%20aBlock%0A%20%20%20%20%20%20%20%5E%28self%20packageAt%3A%20packageName%29%20ifNil%3A%20aBlock'),
messageSends: ["ifNil:", "packageAt:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_createPackage_'),
smalltalk.method({
selector: unescape('createPackage%3A'),
category: 'private',
fn: function (packageName){
var self=this;
return smalltalk.addPackage(packageName, nil);
return self;},
args: ["packageName"],
source: unescape('createPackage%3A%20packageName%0A%09%22Create%20and%20bind%20a%20new%20package%20with%20given%20name%20and%20return%20it.%22%0A%0A%20%20%20%20%20%20%3Creturn%20smalltalk.addPackage%28packageName%2C%20nil%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_deletePackage_'),
smalltalk.method({
selector: unescape('deletePackage%3A'),
category: 'private',
fn: function (packageName){
var self=this;
delete smalltalk.packages[packageName];
return self;},
args: ["packageName"],
source: unescape('deletePackage%3A%20packageName%0A%09%22Deletes%20a%20package%20by%20deleting%20its%20binding%2C%20but%20does%20not%20check%20if%20it%20contains%20classes%20etc.%0A%09To%20remove%20a%20package%2C%20use%20%23removePackage%20instead.%22%0A%0A%20%20%20%20%20%20%20%3Cdelete%20smalltalk.packages%5BpackageName%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_removePackage_'),
smalltalk.method({
selector: unescape('removePackage%3A'),
category: 'packages',
fn: function (packageName){
var self=this;
var pkg=nil;
pkg=smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);})]);
smalltalk.send(smalltalk.send(pkg, "_classes", []), "_do_", [(function(each){return smalltalk.send(self, "_removeClass_", [each]);})]);
smalltalk.send(self, "_deletePackage_", [packageName]);
return self;},
args: ["packageName"],
source: unescape('removePackage%3A%20packageName%0A%09%22Removes%20a%20package%20and%20all%20its%20classes.%22%0A%0A%09%7C%20pkg%20%7C%0A%09pkg%20%3A%3D%20self%20packageAt%3A%20packageName%20ifAbsent%3A%20%5Bself%20error%3A%20%27Missing%20package%3A%20%27%2C%20packageName%5D.%0A%09pkg%20classes%20do%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%20%20%20%20%09self%20removeClass%3A%20each%5D.%0A%09self%20deletePackage%3A%20packageName'),
messageSends: ["packageAt:ifAbsent:", "error:", unescape("%2C"), "do:", "classes", "removeClass:", "deletePackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_renamePackage_to_'),
smalltalk.method({
selector: unescape('renamePackage%3Ato%3A'),
category: 'packages',
fn: function (packageName, newName){
var self=this;
var pkg=nil;
pkg=smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);})]);
(($receiver = smalltalk.send(self, "_packageAt_", [newName])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Already exists a package called: ", "__comma", [newName])]);})() : nil;
smalltalk.packages[newName] = smalltalk.packages[packageName];
smalltalk.send(pkg, "_name_", [newName]);
smalltalk.send(self, "_deletePackage_", [packageName]);
return self;},
args: ["packageName", "newName"],
source: unescape('renamePackage%3A%20packageName%20to%3A%20newName%0A%09%22Rename%20a%20package.%22%0A%0A%09%7C%20pkg%20%7C%0A%09pkg%20%3A%3D%20self%20packageAt%3A%20packageName%20ifAbsent%3A%20%5Bself%20error%3A%20%27Missing%20package%3A%20%27%2C%20packageName%5D.%0A%09%28self%20packageAt%3A%20newName%29%20ifNotNil%3A%20%5Bself%20error%3A%20%27Already%20exists%20a%20package%20called%3A%20%27%2C%20newName%5D.%0A%09%3Csmalltalk.packages%5BnewName%5D%20%3D%20smalltalk.packages%5BpackageName%5D%3E.%0A%09pkg%20name%3A%20newName.%0A%09self%20deletePackage%3A%20packageName.'),
messageSends: ["packageAt:ifAbsent:", "error:", unescape("%2C"), "ifNotNil:", "packageAt:", "name:", "deletePackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_reservedWords'),
smalltalk.method({
selector: unescape('reservedWords'),
category: 'accessing',
fn: function (){
var self=this;
return self.reservedWords;
return self;},
args: [],
source: unescape('reservedWords%0A%09%22JavaScript%20reserved%20words%22%0A%09%3Creturn%20self.reservedWords%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_createPackage_properties_'),
smalltalk.method({
selector: unescape('createPackage%3Aproperties%3A'),
category: 'private',
fn: function (packageName, aDict){
var self=this;
var object=nil;
object = {};;
smalltalk.send(aDict, "_keysAndValuesDo_", [(function(key, value){return object[key] = value;})]);
return smalltalk.addPackage(packageName, object);
return self;},
args: ["packageName", "aDict"],
source: unescape('createPackage%3A%20packageName%20properties%3A%20aDict%0A%09%22Create%20and%20bind%20a%20new%20package%20with%20given%20name%20and%20return%20it.%22%0A%0A%09%7C%20object%20%7C%0A%09%3Cobject%20%3D%20%7B%7D%3B%3E.%0A%09aDict%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%09%09%3Cobject%5Bkey%5D%20%3D%20value%3E.%0A%09%5D.%0A%20%20%20%20%20%20%20%3Creturn%20smalltalk.addPackage%28packageName%2C%20object%29%3E'),
messageSends: ["keysAndValuesDo:"],
referencedClasses: []
}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk;
return self;},
args: [],
source: unescape('current%0A%09%3Creturn%20smalltalk%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('Package', smalltalk.Object, [], 'Kernel');
smalltalk.Package.comment=unescape('A%20Package%20is%20similar%20to%20a%20%22class%20category%22%20typically%20found%20in%20other%20Smalltalks%20like%20Pharo%20or%20Squeak.%20Amber%20does%20not%20have%20class%20categories%20anymore%2C%20it%20had%20in%20the%20beginning%20but%20now%20each%20class%20in%20the%20system%20knows%20which%20package%20it%20belongs%20to.%0A%0AA%20Package%20has%20a%20name%2C%20an%20Array%20of%20%22requires%22%2C%20a%20comment%20and%20a%20Dictionary%20with%20other%20optional%20key%20value%20attributes.%20A%20Package%20can%20also%20be%20queried%20for%20its%20classes%2C%20but%20it%20will%20then%20resort%20to%20a%20reverse%20scan%20of%20all%20classes%20to%20find%20them.%0APackages%20are%20manipulated%20through%20%22Smalltalk%20current%22%2C%20like%20for%20example%20finding%20one%20based%20on%20a%20name%3A%0A%0A%09Smalltalk%20current%20packageAt%3A%20%27Kernel%27%0A%0A...but%20you%20can%20also%20use%3A%0A%0A%09Package%20named%3A%20%27Kernel%27%0A%0AA%20Package%20differs%20slightly%20from%20a%20Monticello%20package%20which%20can%20span%20multiple%20class%20categories%20using%20a%20naming%20convention%20based%20on%20hyphenation.%20But%20just%20as%20in%20Monticello%20a%20Package%20supports%20%22class%20extensions%22%20so%20a%20Package%0Acan%20define%20behaviors%20in%20foreign%20classes%20using%20a%20naming%20convention%20for%20method%20categories%20where%20the%20category%20starts%20with%20an%20asterisk%20and%20then%20the%20name%20of%20the%20owning%20package%20follows.%20This%20can%20easily%20be%20seen%20in%20for%20example%20class%0AString%20where%20the%20method%20category%20%22*IDE%22%20defines%20%23inspectOn%3A%20which%20thus%20is%20a%20method%20belonging%20to%20the%20IDE%20package.')
smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'accessing',
fn: function (){
var self=this;
return self.pkgName || nil;
return self;},
args: [],
source: unescape('name%0A%09%3Creturn%20self.pkgName%20%7C%7C%20nil%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_name_'),
smalltalk.method({
selector: unescape('name%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return self.pkgName = aString;
return self;},
args: ["aString"],
source: unescape('name%3A%20aString%0A%09%3Creturn%20self.pkgName%20%3D%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_classes'),
smalltalk.method({
selector: unescape('classes'),
category: 'classes',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_select_", [(function(c){return smalltalk.send(smalltalk.send(c, "_package", []), "__eq_eq", [self]);})]);
return self;},
args: [],
source: unescape('classes%0A%09%22We%20need%20to%20do%20a%20reverse%20scan.%22%0A%09%5ESmalltalk%20current%20classes%20select%3A%20%5B%3Ac%20%7C%20c%20package%20%3D%3D%20self%5D'),
messageSends: ["select:", "classes", "current", unescape("%3D%3D"), "package"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(self, "_name", []);
return self;},
args: [],
source: unescape('printString%0A%09%5Eself%20name'),
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_dependencies'),
smalltalk.method({
selector: unescape('dependencies'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_propertyAt_ifAbsent_", ["dependencies", (function(){return [];})]);
return self;},
args: [],
source: unescape('dependencies%0A%09%5Eself%20propertyAt%3A%20%27dependencies%27%20ifAbsent%3A%20%5B%23%28%29%5D'),
messageSends: ["propertyAt:ifAbsent:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_dependencies_'),
smalltalk.method({
selector: unescape('dependencies%3A'),
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.send(self, "_propertyAt_put_", ["dependencies", anArray]);
return self;},
args: ["anArray"],
source: unescape('dependencies%3A%20anArray%0A%09%5Eself%20propertyAt%3A%20%27dependencies%27%20put%3A%20anArray'),
messageSends: ["propertyAt:put:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_properties'),
smalltalk.method({
selector: unescape('properties'),
category: 'accessing',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
for (var i in self.properties) {
		result._at_put_(i, self.properties[i]);
	}
	return result;;
return self;},
args: [],
source: unescape('properties%0A%09%22It%20is%20stored%20as%20a%20javascript%20object.%22%0A%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20Dictionary%20new.%0A%09%3Cfor%20%28var%20i%20in%20self.properties%29%20%7B%0A%09%09result._at_put_%28i%2C%20self.properties%5Bi%5D%29%3B%0A%09%7D%0A%09return%20result%3B%3E'),
messageSends: ["new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_propertiesAsJSON'),
smalltalk.method({
selector: unescape('propertiesAsJSON'),
category: 'private',
fn: function (){
var self=this;
return JSON.stringify(self.properties);
return self;},
args: [],
source: unescape('propertiesAsJSON%0A%09%3Creturn%20JSON.stringify%28self.properties%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_properties_'),
smalltalk.method({
selector: unescape('properties%3A'),
category: 'accessing',
fn: function (aDict){
var self=this;
var object=nil;
object = {};;
smalltalk.send(aDict, "_keysAndValuesDo_", [(function(key, value){return object[key] = value;})]);
return self.properties = object;
return self;},
args: ["aDict"],
source: unescape('properties%3A%20aDict%0A%09%22We%20store%20it%20as%20a%20javascript%20object.%22%0A%09%0A%09%7C%20object%20%7C%0A%09%3Cobject%20%3D%20%7B%7D%3B%3E.%0A%09aDict%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%09%09%3Cobject%5Bkey%5D%20%3D%20value%3E.%0A%09%5D.%0A%09%3Creturn%20self.properties%20%3D%20object%3E'),
messageSends: ["keysAndValuesDo:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_jsProperties'),
smalltalk.method({
selector: unescape('jsProperties'),
category: 'private',
fn: function (){
var self=this;
return self.properties || nil;
return self;},
args: [],
source: unescape('jsProperties%0A%09%3Creturn%20self.properties%20%7C%7C%20nil%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_jsProperties_'),
smalltalk.method({
selector: unescape('jsProperties%3A'),
category: 'private',
fn: function (aJSObject){
var self=this;
return self.properties = aJSObject;
return self;},
args: ["aJSObject"],
source: unescape('jsProperties%3A%20aJSObject%0A%09%3Creturn%20self.properties%20%3D%20aJSObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_propertyAt_'),
smalltalk.method({
selector: unescape('propertyAt%3A'),
category: 'properties',
fn: function (key){
var self=this;
return self.properties[key];
return self;},
args: ["key"],
source: unescape('propertyAt%3A%20key%0A%0A%09%3Creturn%20self.properties%5Bkey%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_propertyAt_put_'),
smalltalk.method({
selector: unescape('propertyAt%3Aput%3A'),
category: 'properties',
fn: function (key, value){
var self=this;
return self.properties[key] = value;
return self;},
args: ["key", "value"],
source: unescape('propertyAt%3A%20key%20put%3A%20value%0A%0A%09%3Creturn%20self.properties%5Bkey%5D%20%3D%20value%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_propertyAt_ifAbsent_'),
smalltalk.method({
selector: unescape('propertyAt%3AifAbsent%3A'),
category: 'properties',
fn: function (key, block){
var self=this;
return (($receiver = smalltalk.send(self, "_propertyAt_", [key])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(block, "_value", []);})() : $receiver;
return self;},
args: ["key", "block"],
source: unescape('propertyAt%3A%20key%20ifAbsent%3A%20block%0A%0A%09%5E%28self%20propertyAt%3A%20key%29%20ifNil%3A%20%5Bblock%20value%5D'),
messageSends: ["ifNil:", "propertyAt:", "value"],
referencedClasses: []
}),
smalltalk.Package);


smalltalk.addMethod(
unescape('_named_'),
smalltalk.method({
selector: unescape('named%3A'),
category: 'not yet classified',
fn: function (aPackageName){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_packageAt_", [aPackageName]);
return self;},
args: ["aPackageName"],
source: unescape('named%3A%20aPackageName%0A%0A%09%5ESmalltalk%20current%20packageAt%3A%20aPackageName'),
messageSends: ["packageAt:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_named_ifAbsent_'),
smalltalk.method({
selector: unescape('named%3AifAbsent%3A'),
category: 'not yet classified',
fn: function (aPackageName, aBlock){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_packageAt_ifAbsent_", [aPackageName, aBlock]);
return self;},
args: ["aPackageName", "aBlock"],
source: unescape('named%3A%20aPackageName%20ifAbsent%3A%20aBlock%0A%0A%09%5ESmalltalk%20current%20packageAt%3A%20aPackageName%20ifAbsent%3A%20aBlock'),
messageSends: ["packageAt:ifAbsent:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package.klass);


smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initialize", []);
return self;},
args: [],
source: unescape('new%0A%09%5Eself%20basicNew%20initialize'),
messageSends: ["initialize", "basicNew"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_basicNew'),
smalltalk.method({
selector: unescape('basicNew'),
category: 'instance creation',
fn: function (){
var self=this;
return new self.fn();
return self;},
args: [],
source: unescape('basicNew%0A%09%3Creturn%20new%20self.fn%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'accessing',
fn: function (){
var self=this;
return self.className || nil;
return self;},
args: [],
source: unescape('name%0A%09%3Creturn%20self.className%20%7C%7C%20nil%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_superclass'),
smalltalk.method({
selector: unescape('superclass'),
category: 'accessing',
fn: function (){
var self=this;
return self.superclass || nil;
return self;},
args: [],
source: unescape('superclass%0A%09%3Creturn%20self.superclass%20%7C%7C%20nil%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_subclasses'),
smalltalk.method({
selector: unescape('subclasses'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.subclasses(self);
return self;},
args: [],
source: unescape('subclasses%0A%09%3Creturn%20smalltalk.subclasses%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_allSubclasses'),
smalltalk.method({
selector: unescape('allSubclasses'),
category: 'accessing',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send(self, "_subclasses", []);
smalltalk.send(smalltalk.send(self, "_subclasses", []), "_do_", [(function(each){return smalltalk.send(result, "_addAll_", [smalltalk.send(each, "_allSubclasses", [])]);})]);
return result;
return self;},
args: [],
source: unescape('allSubclasses%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20self%20subclasses.%0A%09self%20subclasses%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20result%20addAll%3A%20each%20allSubclasses%5D.%0A%09%5Eresult'),
messageSends: ["subclasses", "do:", "addAll:", "allSubclasses"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_withAllSubclasses'),
smalltalk.method({
selector: unescape('withAllSubclasses'),
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_allSubclasses", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_with_", [self]));
return self;},
args: [],
source: unescape('withAllSubclasses%0A%09%5E%28Array%20with%3A%20self%29%20addAll%3A%20self%20allSubclasses%3B%20yourself'),
messageSends: ["addAll:", "allSubclasses", "yourself", "with:"],
referencedClasses: ["Array"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_prototype'),
smalltalk.method({
selector: unescape('prototype'),
category: 'accessing',
fn: function (){
var self=this;
return self.fn.prototype;
return self;},
args: [],
source: unescape('prototype%0A%09%3Creturn%20self.fn.prototype%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_methodDictionary'),
smalltalk.method({
selector: unescape('methodDictionary'),
category: 'accessing',
fn: function (){
var self=this;
var dict = smalltalk.Dictionary._new();
	var methods = self.fn.prototype.methods;
	for(var i in methods) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	};
	return dict;
return self;},
args: [],
source: unescape('methodDictionary%0A%09%3Cvar%20dict%20%3D%20smalltalk.Dictionary._new%28%29%3B%0A%09var%20methods%20%3D%20self.fn.prototype.methods%3B%0A%09for%28var%20i%20in%20methods%29%20%7B%0A%09%09if%28methods%5Bi%5D.selector%29%20%7B%0A%09%09%09dict._at_put_%28methods%5Bi%5D.selector%2C%20methods%5Bi%5D%29%3B%0A%09%09%7D%0A%09%7D%3B%0A%09return%20dict%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_methodsFor_'),
smalltalk.method({
selector: unescape('methodsFor%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_class_category_", [self, aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassCategoryReader || ClassCategoryReader), "_new", []));
return self;},
args: ["aString"],
source: unescape('methodsFor%3A%20aString%0A%09%5EClassCategoryReader%20new%0A%09%20%20%20%20class%3A%20self%20category%3A%20aString%3B%0A%09%20%20%20%20yourself'),
messageSends: ["class:category:", "yourself", "new"],
referencedClasses: ["ClassCategoryReader"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_addCompiledMethod_'),
smalltalk.method({
selector: unescape('addCompiledMethod%3A'),
category: 'accessing',
fn: function (aMethod){
var self=this;
smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self);
return self;},
args: ["aMethod"],
source: unescape('addCompiledMethod%3A%20aMethod%0A%09%3Csmalltalk.addMethod%28aMethod.selector._asSelector%28%29%2C%20aMethod%2C%20self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_instanceVariableNames'),
smalltalk.method({
selector: unescape('instanceVariableNames'),
category: 'accessing',
fn: function (){
var self=this;
return self.iVarNames;
return self;},
args: [],
source: unescape('instanceVariableNames%0A%09%3Creturn%20self.iVarNames%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_comment'),
smalltalk.method({
selector: unescape('comment'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["comment"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
args: [],
source: unescape('comment%0A%20%20%20%20%5E%28self%20basicAt%3A%20%27comment%27%29%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_comment_'),
smalltalk.method({
selector: unescape('comment%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["comment", aString]);
return self;},
args: ["aString"],
source: unescape('comment%3A%20aString%0A%20%20%20%20self%20basicAt%3A%20%27comment%27%20put%3A%20aString'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_commentStamp'),
smalltalk.method({
selector: unescape('commentStamp'),
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_class_", [self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassCommentReader || ClassCommentReader), "_new", []));
return self;},
args: [],
source: unescape('commentStamp%0A%20%20%20%20%5EClassCommentReader%20new%0A%09class%3A%20self%3B%0A%09yourself'),
messageSends: ["class:", "yourself", "new"],
referencedClasses: ["ClassCommentReader"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_removeCompiledMethod_'),
smalltalk.method({
selector: unescape('removeCompiledMethod%3A'),
category: 'accessing',
fn: function (aMethod){
var self=this;
delete self.fn.prototype[aMethod.selector._asSelector()];
	delete self.fn.prototype.methods[aMethod.selector];
	smalltalk.init(self);;
return self;},
args: ["aMethod"],
source: unescape('removeCompiledMethod%3A%20aMethod%0A%09%3Cdelete%20self.fn.prototype%5BaMethod.selector._asSelector%28%29%5D%3B%0A%09delete%20self.fn.prototype.methods%5BaMethod.selector%5D%3B%0A%09smalltalk.init%28self%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_inheritsFrom_'),
smalltalk.method({
selector: unescape('inheritsFrom%3A'),
category: 'instance creation',
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(aClass, "_allSubclasses", []), "_includes_", [self]);
return self;},
args: ["aClass"],
source: unescape('inheritsFrom%3A%20aClass%0A%09%5EaClass%20allSubclasses%20includes%3A%20self'),
messageSends: ["includes:", "allSubclasses"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_protocols'),
smalltalk.method({
selector: unescape('protocols'),
category: 'accessing',
fn: function (){
var self=this;
var protocols=nil;
protocols=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(protocols, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(protocols, "_add_", [smalltalk.send(each, "_category", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(protocols, "_add_", [smalltalk.send(each, "_category", [])]);})]));})]);
return smalltalk.send(protocols, "_sort", []);
return self;},
args: [],
source: unescape('protocols%0A%20%20%20%20%7C%20protocols%20%7C%0A%20%20%20%20protocols%20%3A%3D%20Array%20new.%0A%20%20%20%20self%20methodDictionary%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20%28protocols%20includes%3A%20each%20category%29%20ifFalse%3A%20%5B%0A%09%09protocols%20add%3A%20each%20category%5D%5D.%0A%20%20%20%20%5Eprotocols%20sort'),
messageSends: ["new", "do:", "methodDictionary", "ifFalse:", "includes:", "category", "add:", "sort"],
referencedClasses: ["Array"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_protocolsDo_'),
smalltalk.method({
selector: unescape('protocolsDo%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
var methodsByCategory=nil;
methodsByCategory=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_values", []), "_do_", [(function(m){return smalltalk.send(smalltalk.send(methodsByCategory, "_at_ifAbsentPut_", [smalltalk.send(m, "_category", []), (function(){return smalltalk.send((smalltalk.Array || Array), "_new", []);})]), "_add_", [m]);})]);
smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [(function(category){return smalltalk.send(aBlock, "_value_value_", [category, smalltalk.send(methodsByCategory, "_at_", [category])]);})]);
return self;},
args: ["aBlock"],
source: unescape('protocolsDo%3A%20aBlock%0A%09%22Execute%20aBlock%20for%20each%20method%20category%20with%0A%09its%20collection%20of%20methods%20in%20the%20sort%20order%20of%20category%20name.%22%0A%0A%09%7C%20methodsByCategory%20%7C%0A%09methodsByCategory%20%3A%3D%20Dictionary%20new.%0A%09self%20methodDictionary%20values%20do%3A%20%5B%3Am%20%7C%0A%09%09%28methodsByCategory%20at%3A%20m%20category%20ifAbsentPut%3A%20%5BArray%20new%5D%29%0A%20%09%09%09add%3A%20m%5D.%20%0A%09self%20protocols%20do%3A%20%5B%3Acategory%20%7C%0A%09%09aBlock%20value%3A%20category%20value%3A%20%28methodsByCategory%20at%3A%20category%29%5D'),
messageSends: ["new", "do:", "values", "methodDictionary", "add:", "at:ifAbsentPut:", "category", "protocols", "value:value:", "at:"],
referencedClasses: ["Dictionary", "Array"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_allInstanceVariableNames'),
smalltalk.method({
selector: unescape('allInstanceVariableNames'),
category: 'accessing',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send(smalltalk.send(self, "_instanceVariableNames", []), "_copy", []);
(($receiver = smalltalk.send(self, "_superclass", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(result, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allInstanceVariableNames", [])]);})() : nil;
return result;
return self;},
args: [],
source: unescape('allInstanceVariableNames%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20self%20instanceVariableNames%20copy.%0A%09self%20superclass%20ifNotNil%3A%20%5B%0A%09%20%20%20%20result%20addAll%3A%20self%20superclass%20allInstanceVariableNames%5D.%0A%09%5Eresult'),
messageSends: ["copy", "instanceVariableNames", "ifNotNil:", "superclass", "addAll:", "allInstanceVariableNames"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_methodAt_'),
smalltalk.method({
selector: unescape('methodAt%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.methods(self)[aString];
return self;},
args: ["aString"],
source: unescape('methodAt%3A%20aString%0A%09%3Creturn%20smalltalk.methods%28self%29%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_methodsFor_stamp_'),
smalltalk.method({
selector: unescape('methodsFor%3Astamp%3A'),
category: 'accessing',
fn: function (aString, aStamp){
var self=this;
return smalltalk.send(self, "_methodsFor_", [aString]);
return self;},
args: ["aString", "aStamp"],
source: unescape('methodsFor%3A%20aString%20stamp%3A%20aStamp%0A%09%22Added%20for%20compatibility%2C%20right%20now%20ignores%20stamp.%22%0A%09%5Eself%20methodsFor%3A%20aString'),
messageSends: ["methodsFor:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_commentStamp_prior_'),
smalltalk.method({
selector: unescape('commentStamp%3Aprior%3A'),
category: 'accessing',
fn: function (aStamp, prior){
var self=this;
return smalltalk.send(self, "_commentStamp", []);
return self;},
args: ["aStamp", "prior"],
source: unescape('commentStamp%3A%20aStamp%20prior%3A%20prior%0A%20%20%20%20%20%20%20%20%5Eself%20commentStamp'),
messageSends: ["commentStamp"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_compile_'),
smalltalk.method({
selector: unescape('compile%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
smalltalk.send(self, "_compile_category_", [aString, ""]);
return self;},
args: ["aString"],
source: unescape('compile%3A%20aString%0A%09self%20compile%3A%20aString%20category%3A%20%27%27'),
messageSends: ["compile:category:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_compile_category_'),
smalltalk.method({
selector: unescape('compile%3Acategory%3A'),
category: 'compiling',
fn: function (aString, anotherString){
var self=this;
var method=nil;
method=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_load_forClass_", [aString, self]);
smalltalk.send(method, "_category_", [anotherString]);
smalltalk.send(self, "_addCompiledMethod_", [method]);
return self;},
args: ["aString", "anotherString"],
source: unescape('compile%3A%20aString%20category%3A%20anotherString%0A%09%7C%20method%20%7C%0A%09method%20%3A%3D%20Compiler%20new%20load%3A%20aString%20forClass%3A%20self.%0A%09method%20category%3A%20anotherString.%0A%09self%20addCompiledMethod%3A%20method'),
messageSends: ["load:forClass:", "new", "category:", "addCompiledMethod:"],
referencedClasses: ["Compiler"]
}),
smalltalk.Behavior);



smalltalk.addClass('Class', smalltalk.Behavior, [], 'Kernel');
smalltalk.addMethod(
unescape('_category'),
smalltalk.method({
selector: unescape('category'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_package", [])) == nil || $receiver == undefined) ? (function(){return "Unclassified";})() : (function(){return smalltalk.send(smalltalk.send(self, "_package", []), "_name", []);})();
return self;},
args: [],
source: unescape('category%0A%09%5Eself%20package%20ifNil%3A%20%5B%27Unclassified%27%5D%20ifNotNil%3A%20%5Bself%20package%20name%5D'),
messageSends: ["ifNil:ifNotNil:", "package", "name"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3A'),
category: 'class creation',
fn: function (aString, anotherString){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, anotherString, nil]);
return self;},
args: ["aString", "anotherString"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%0A%09%22Kept%20for%20compatibility.%22%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%20package%3A%20nil'),
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_category_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3Acategory%3A'),
category: 'class creation',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;},
args: ["aString", "aString2", "aString3"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0A%09%22Kept%20for%20compatibility.%22%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3'),
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_isClass'),
smalltalk.method({
selector: unescape('isClass'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isClass%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(self, "_name", []);
return self;},
args: [],
source: unescape('printString%0A%09%5Eself%20name'),
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_rename_'),
smalltalk.method({
selector: unescape('rename%3A'),
category: 'accessing',
fn: function (aString){
var self=this;

		smalltalk[aString] = self;
		delete smalltalk[self.className];
		self.className = aString;
	;
return self;},
args: ["aString"],
source: unescape('rename%3A%20aString%0A%09%3C%0A%09%09smalltalk%5BaString%5D%20%3D%20self%3B%0A%09%09delete%20smalltalk%5Bself.className%5D%3B%0A%09%09self.className%20%3D%20aString%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A'),
category: 'class creation',
fn: function (aString, aString2, classVars, pools, aString3){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;},
args: ["aString", "aString2", "classVars", "pools", "aString3"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20classVariableNames%3A%20classVars%20poolDictionaries%3A%20pools%20category%3A%20aString3%0A%09%22Just%20ignore%20class%20variables%20and%20pools.%20Added%20for%20compatibility.%22%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3'),
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_package'),
smalltalk.method({
selector: unescape('package'),
category: 'accessing',
fn: function (){
var self=this;
return self.pkg;
return self;},
args: [],
source: unescape('package%0A%09%3Creturn%20self.pkg%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_package_'),
smalltalk.method({
selector: unescape('package%3A'),
category: 'accessing',
fn: function (aPackage){
var self=this;
self.pkg = aPackage;
return self;},
args: ["aPackage"],
source: unescape('package%3A%20aPackage%0A%09%3Cself.pkg%20%3D%20aPackage%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_package_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3Apackage%3A'),
category: 'class creation',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_superclass_subclass_instanceVariableNames_package_", [self, aString, aString2, aString3]);
return self;},
args: ["aString", "aString2", "aString3"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3%0A%09%5EClassBuilder%20new%0A%09%20%20%20%20superclass%3A%20self%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3'),
messageSends: ["superclass:subclass:instanceVariableNames:package:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel');
smalltalk.addMethod(
unescape('_instanceClass'),
smalltalk.method({
selector: unescape('instanceClass'),
category: 'accessing',
fn: function (){
var self=this;
return self.instanceClass;
return self;},
args: [],
source: unescape('instanceClass%0A%09%3Creturn%20self.instanceClass%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
unescape('_instanceVariableNames_'),
smalltalk.method({
selector: unescape('instanceVariableNames%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_class_instanceVariableNames_", [self, aCollection]);
return self;},
args: ["aCollection"],
source: unescape('instanceVariableNames%3A%20aCollection%0A%09ClassBuilder%20new%0A%09%20%20%20%20class%3A%20self%20instanceVariableNames%3A%20aCollection'),
messageSends: ["class:instanceVariableNames:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Metaclass);

smalltalk.addMethod(
unescape('_isMetaclass'),
smalltalk.method({
selector: unescape('isMetaclass'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isMetaclass%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_instanceClass", []), "_name", []), "__comma", [" class"]);
return self;},
args: [],
source: unescape('printString%0A%09%5Eself%20instanceClass%20name%2C%20%27%20class%27'),
messageSends: [unescape("%2C"), "name", "instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["source"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
args: [],
source: unescape('source%0A%09%5E%28self%20basicAt%3A%20%27source%27%29%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_source_'),
smalltalk.method({
selector: unescape('source%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["source", aString]);
return self;},
args: ["aString"],
source: unescape('source%3A%20aString%0A%09self%20basicAt%3A%20%27source%27%20put%3A%20aString'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_category'),
smalltalk.method({
selector: unescape('category'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["category"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
args: [],
source: unescape('category%0A%09%5E%28self%20basicAt%3A%20%27category%27%29%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_category_'),
smalltalk.method({
selector: unescape('category%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["category", aString]);
return self;},
args: ["aString"],
source: unescape('category%3A%20aString%0A%09self%20basicAt%3A%20%27category%27%20put%3A%20aString'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["selector"]);
return self;},
args: [],
source: unescape('selector%0A%09%5Eself%20basicAt%3A%20%27selector%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_selector_'),
smalltalk.method({
selector: unescape('selector%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["selector", aString]);
return self;},
args: ["aString"],
source: unescape('selector%3A%20aString%0A%09self%20basicAt%3A%20%27selector%27%20put%3A%20aString'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_fn'),
smalltalk.method({
selector: unescape('fn'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["fn"]);
return self;},
args: [],
source: unescape('fn%0A%09%5Eself%20basicAt%3A%20%27fn%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_fn_'),
smalltalk.method({
selector: unescape('fn%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["fn", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('fn%3A%20aBlock%0A%09self%20basicAt%3A%20%27fn%27%20put%3A%20aBlock'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_messageSends'),
smalltalk.method({
selector: unescape('messageSends'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["messageSends"]);
return self;},
args: [],
source: unescape('messageSends%0A%09%5Eself%20basicAt%3A%20%27messageSends%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_methodClass'),
smalltalk.method({
selector: unescape('methodClass'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["methodClass"]);
return self;},
args: [],
source: unescape('methodClass%0A%09%5Eself%20basicAt%3A%20%27methodClass%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_referencedClasses'),
smalltalk.method({
selector: unescape('referencedClasses'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["referencedClasses"]);
return self;},
args: [],
source: unescape('referencedClasses%0A%09%5Eself%20basicAt%3A%20%27referencedClasses%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_arguments'),
smalltalk.method({
selector: unescape('arguments'),
category: 'accessing',
fn: function (){
var self=this;
return self.args || [];
return self;},
args: [],
source: unescape('arguments%0A%09%3Creturn%20self.args%20%7C%7C%20%5B%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CompiledMethod);



smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (aNumber){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aNumber, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
return Number(self) == aNumber;
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}},
args: ["aNumber"],
source: unescape('%3D%20aNumber%0A%09aNumber%20class%20%3D%20self%20class%20ifFalse%3A%20%5B%5Efalse%5D.%20%0A%09%3Creturn%20Number%28self%29%20%3D%3D%20aNumber%3E'),
messageSends: ["ifFalse:", unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__gt'),
smalltalk.method({
selector: unescape('%3E'),
category: 'comparing',
fn: function (aNumber){
var self=this;
return self > aNumber;
return self;},
args: ["aNumber"],
source: unescape('%3E%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20%3E%3E%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__lt'),
smalltalk.method({
selector: unescape('%3C'),
category: 'comparing',
fn: function (aNumber){
var self=this;
return self < aNumber;
return self;},
args: ["aNumber"],
source: unescape('%3C%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20%3C%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__gt_eq'),
smalltalk.method({
selector: unescape('%3E%3D'),
category: 'comparing',
fn: function (aNumber){
var self=this;
return self >= aNumber;
return self;},
args: ["aNumber"],
source: unescape('%3E%3D%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20%3E%3E%3D%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__lt_eq'),
smalltalk.method({
selector: unescape('%3C%3D'),
category: 'comparing',
fn: function (aNumber){
var self=this;
return self <= aNumber;
return self;},
args: ["aNumber"],
source: unescape('%3C%3D%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20%3C%3D%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__plus'),
smalltalk.method({
selector: unescape('+'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self + aNumber;
return self;},
args: ["aNumber"],
source: unescape('+%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20+%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__minus'),
smalltalk.method({
selector: unescape('-'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self - aNumber;
return self;},
args: ["aNumber"],
source: unescape('-%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20-%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__star'),
smalltalk.method({
selector: unescape('*'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self * aNumber;
return self;},
args: ["aNumber"],
source: unescape('*%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20*%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__slash'),
smalltalk.method({
selector: unescape('/'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self / aNumber;
return self;},
args: ["aNumber"],
source: unescape('/%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20/%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_max_'),
smalltalk.method({
selector: unescape('max%3A'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return Math.max(self, aNumber);;
return self;},
args: ["aNumber"],
source: unescape('max%3A%20aNumber%0A%09%3Creturn%20Math.max%28self%2C%20aNumber%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_min_'),
smalltalk.method({
selector: unescape('min%3A'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return Math.min(self, aNumber);;
return self;},
args: ["aNumber"],
source: unescape('min%3A%20aNumber%0A%09%3Creturn%20Math.min%28self%2C%20aNumber%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_rounded'),
smalltalk.method({
selector: unescape('rounded'),
category: 'converting',
fn: function (){
var self=this;
return Math.round(self);;
return self;},
args: [],
source: unescape('rounded%0A%09%3Creturn%20Math.round%28self%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_truncated'),
smalltalk.method({
selector: unescape('truncated'),
category: 'converting',
fn: function (){
var self=this;
var result=nil;
((($receiver = self >= (0)).klass === smalltalk.Boolean) ? ($receiver ? (function(){return result = Math.floor(self);;})() : (function(){return result = (Math.floor(self * (-1)) * (-1));;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return result = Math.floor(self);;}), (function(){return result = (Math.floor(self * (-1)) * (-1));;})]));
return result;
return self;},
args: [],
source: unescape('truncated%0A%7Cresult%7C%0A%0A%20%20%20%20self%20%3E%3D%200%20%0A%20%20%20%20%20%20%20%20ifTrue%3A%20%5B%3Cresult%20%3D%20Math.floor%28self%29%3B%3E%5D%0A%20%20%20%20%20%20%20%20ifFalse%3A%20%5B%3Cresult%20%3D%20%28Math.floor%28self%20*%20%28-1%29%29%20*%20%28-1%29%29%3B%3E%5D.%0A%0A%20%20%20%20%5E%20result'),
messageSends: ["ifTrue:ifFalse:", unescape("%3E%3D")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_to_'),
smalltalk.method({
selector: unescape('to%3A'),
category: 'converting',
fn: function (aNumber){
var self=this;
var array=nil;
var first=nil;
var last=nil;
var count=nil;
first=smalltalk.send(self, "_truncated", []);
last=((($receiver = smalltalk.send(aNumber, "_truncated", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
count=(1);
array=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(((($receiver = last).klass === smalltalk.Number) ? $receiver -first : smalltalk.send($receiver, "__minus", [first])), "_timesRepeat_", [(function(){smalltalk.send(array, "_at_put_", [count, first]);count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return first=((($receiver = first).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]);
return array;
return self;},
args: ["aNumber"],
source: unescape('to%3A%20aNumber%0A%09%7C%20array%20first%20last%20count%20%7C%0A%09first%20%3A%3D%20self%20truncated.%0A%09last%20%3A%3D%20aNumber%20truncated%20+%201.%0A%09count%20%3A%3D%201.%0A%09array%20%3A%3D%20Array%20new.%0A%09%28last%20-%20first%29%20timesRepeat%3A%20%5B%0A%09%20%20%20%20array%20at%3A%20count%20put%3A%20first.%0A%09%20%20%20%20count%20%3A%3D%20count%20+%201.%0A%09%20%20%20%20first%20%3A%3D%20first%20+%201%5D.%0A%09%5Earray'),
messageSends: ["truncated", unescape("+"), "new", "timesRepeat:", unescape("-"), "at:put:"],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_timesRepeat_'),
smalltalk.method({
selector: unescape('timesRepeat%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
var integer=nil;
var count=nil;
integer=smalltalk.send(self, "_truncated", []);
count=(1);
(function(){while(!(function(){return ((($receiver = count).klass === smalltalk.Number) ? $receiver >self : smalltalk.send($receiver, "__gt", [self]));})()) {(function(){smalltalk.send(aBlock, "_value", []);return count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()}})();
return self;},
args: ["aBlock"],
source: unescape('timesRepeat%3A%20aBlock%0A%09%7C%20integer%20count%20%7C%0A%09integer%20%3A%3D%20self%20truncated.%0A%09count%20%3A%3D%201.%0A%09%5Bcount%20%3E%20self%5D%20whileFalse%3A%20%5B%0A%09%20%20%20%20aBlock%20value.%0A%09%20%20%20%20count%20%3A%3D%20count%20+%201%5D'),
messageSends: ["truncated", "whileFalse:", unescape("%3E"), "value", unescape("+")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_to_do_'),
smalltalk.method({
selector: unescape('to%3Ado%3A'),
category: 'enumerating',
fn: function (stop, aBlock){
var self=this;
var nextValue=nil;
nextValue=self;
(function(){while((function(){return ((($receiver = nextValue).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [nextValue]);return nextValue=((($receiver = nextValue).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()}})();
return self;},
args: ["stop", "aBlock"],
source: unescape('to%3A%20stop%20do%3A%20aBlock%0A%09%22Evaluate%20aBlock%20for%20each%20number%20from%20self%20to%20aNumber.%22%0A%09%7C%20nextValue%20%7C%0A%09nextValue%20%3A%3D%20self.%0A%09%5BnextValue%20%3C%3D%20stop%5D%0A%09%09whileTrue%3A%20%0A%09%09%09%5BaBlock%20value%3A%20nextValue.%0A%09%09%09nextValue%20%3A%3D%20nextValue%20+%201%5D'),
messageSends: ["whileTrue:", unescape("%3C%3D"), "value:", unescape("+")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_printString", []);
return self;},
args: [],
source: unescape('asString%0A%09%5Eself%20printString'),
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [smalltalk.send(self, "_printString", [])]), "__comma", [unescape("%29")]);
return self;},
args: [],
source: unescape('asJavascript%0A%09%5E%27%28%27%2C%20self%20printString%2C%20%27%29%27'),
messageSends: [unescape("%2C"), "printString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return String(self);
return self;},
args: [],
source: unescape('printString%0A%09%3Creturn%20String%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_isNumber'),
smalltalk.method({
selector: unescape('isNumber'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isNumber%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_atRandom'),
smalltalk.method({
selector: unescape('atRandom'),
category: 'converting',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(((($receiver = smalltalk.send(smalltalk.send((smalltalk.Random || Random), "_new", []), "_next", [])).klass === smalltalk.Number) ? $receiver *self : smalltalk.send($receiver, "__star", [self])), "_truncated", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;},
args: [],
source: unescape('atRandom%0A%20%20%20%20%5E%28Random%20new%20next%20*%20self%29%20truncated%20+%201'),
messageSends: [unescape("+"), "truncated", unescape("*"), "next", "new"],
referencedClasses: ["Random"]
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__at'),
smalltalk.method({
selector: unescape('@'),
category: 'converting',
fn: function (aNumber){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [self, aNumber]);
return self;},
args: ["aNumber"],
source: unescape('@%20aNumber%0A%09%5EPoint%20x%3A%20self%20y%3A%20aNumber'),
messageSends: ["x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_asPoint'),
smalltalk.method({
selector: unescape('asPoint'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [self, self]);
return self;},
args: [],
source: unescape('asPoint%0A%09%5EPoint%20x%3A%20self%20y%3A%20self'),
messageSends: ["x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_clearInterval'),
smalltalk.method({
selector: unescape('clearInterval'),
category: 'timeouts/intervals',
fn: function (){
var self=this;
clearInterval(Number(self));
return self;},
args: [],
source: unescape('clearInterval%0A%09%3CclearInterval%28Number%28self%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('asJSONObject%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_clearTimeout'),
smalltalk.method({
selector: unescape('clearTimeout'),
category: 'timeouts/intervals',
fn: function (){
var self=this;
clearTimeout(Number(self));
return self;},
args: [],
source: unescape('clearTimeout%0A%09%3CclearTimeout%28Number%28self%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_even'),
smalltalk.method({
selector: unescape('even'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send((0), "__eq", [smalltalk.send(self, "_\\\\", [(2)])]);
return self;},
args: [],
source: unescape('even%0A%09%5E%200%20%3D%20%28self%20%5C%5C%202%29'),
messageSends: [unescape("%3D"), unescape("%5C%5C%5C%5C")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_odd'),
smalltalk.method({
selector: unescape('odd'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_even", []), "_not", []);
return self;},
args: [],
source: unescape('odd%0A%09%5E%20self%20even%20not'),
messageSends: ["not", "even"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_negated'),
smalltalk.method({
selector: unescape('negated'),
category: 'arithmetic',
fn: function (){
var self=this;
return (0) - self;
return self;},
args: [],
source: unescape('negated%0A%09%5E0%20-%20self'),
messageSends: [unescape("-")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__eq_eq'),
smalltalk.method({
selector: unescape('%3D%3D'),
category: 'comparing',
fn: function (aNumber){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aNumber, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})]));
return Number(self) === Number(aNumber);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq_eq'){return e.fn()} throw(e)}},
args: ["aNumber"],
source: unescape('%3D%3D%20aNumber%0A%09aNumber%20class%20%3D%20self%20class%20ifFalse%3A%20%5B%5Efalse%5D.%20%0A%09%3Creturn%20Number%28self%29%20%3D%3D%3D%20Number%28aNumber%29%3E'),
messageSends: ["ifFalse:", unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_printShowingDecimalPlaces_'),
smalltalk.method({
selector: unescape('printShowingDecimalPlaces%3A'),
category: 'printing',
fn: function (placesDesired){
var self=this;
return self.toFixed(placesDesired);
return self;},
args: ["placesDesired"],
source: unescape('printShowingDecimalPlaces%3A%20placesDesired%0A%09%3Creturn%20self.toFixed%28placesDesired%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_%5C'),
smalltalk.method({
selector: unescape('%5C'),
category: '',
fn: function (aNumber){
var self=this;
return self % aNumber;
return self;},
args: ["aNumber"],
source: unescape(''),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_to_by_'),
smalltalk.method({
selector: unescape('to%3Aby%3A'),
category: 'converting',
fn: function (stop, step){
var self=this;
var array=nil;
var value=nil;
var pos=nil;
value=self;
array=smalltalk.send((smalltalk.Array || Array), "_new", []);
pos=(1);
((($receiver = smalltalk.send(step, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})]));
((($receiver = ((($receiver = step).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})() : (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();}), (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})]));
return array;
return self;},
args: ["stop", "step"],
source: unescape('to%3A%20stop%20by%3A%20step%0A%09%7C%20array%20value%20pos%20%7C%0A%09value%20%3A%3D%20self.%0A%09array%20%3A%3D%20Array%20new.%0A%09pos%20%3A%3D%201.%0A%09step%20%3D%200%20ifTrue%3A%20%5Bself%20error%3A%20%27step%20must%20be%20non-zero%27%5D.%0A%09step%20%3C%200%0A%09%09ifTrue%3A%20%5B%5B%20value%20%3E%3D%20stop%20%5D%20whileTrue%3A%20%5B%0A%09%20%20%20%20%09%09%09array%20at%3A%20pos%20put%3A%20value.%0A%09%20%20%20%20%09%09%09pos%20%3A%3D%20pos%20+%201.%0A%09%20%20%20%20%09%09%09value%20%3A%3D%20value%20+%20step%5D%5D%0A%09%09ifFalse%3A%20%5B%5B%20value%20%3C%3D%20stop%20%5D%20whileTrue%3A%20%5B%0A%09%20%20%20%20%09%09%09array%20at%3A%20pos%20put%3A%20value.%0A%09%20%20%09%09%09pos%20%3A%3D%20pos%20+%201.%0A%09%20%20%20%20%09%09%09value%20%3A%3D%20value%20+%20step%5D%5D.%0A%09%5Earray'),
messageSends: ["new", "ifTrue:", unescape("%3D"), "error:", "ifTrue:ifFalse:", unescape("%3C"), "whileTrue:", unescape("%3E%3D"), "at:put:", unescape("+"), unescape("%3C%3D")],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_to_by_do_'),
smalltalk.method({
selector: unescape('to%3Aby%3Ado%3A'),
category: 'enumerating',
fn: function (stop, step, aBlock){
var self=this;
var value=nil;
value=self;
((($receiver = smalltalk.send(step, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})]));
((($receiver = ((($receiver = step).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})() : (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();}), (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})]));
return self;},
args: ["stop", "step", "aBlock"],
source: unescape('to%3A%20stop%20by%3A%20step%20do%3A%20aBlock%0A%09%7C%20value%20%7C%0A%09value%20%3A%3D%20self.%0A%09step%20%3D%200%20ifTrue%3A%20%5Bself%20error%3A%20%27step%20must%20be%20non-zero%27%5D.%0A%09step%20%3C%200%0A%09%09ifTrue%3A%20%5B%5B%20value%20%3E%3D%20stop%20%5D%20whileTrue%3A%20%5B%0A%09%20%20%20%20%09%09%09aBlock%20value%3A%20value.%0A%09%20%20%20%20%09%09%09value%20%3A%3D%20value%20+%20step%5D%5D%0A%09%09ifFalse%3A%20%5B%5B%20value%20%3C%3D%20stop%20%5D%20whileTrue%3A%20%5B%0A%09%20%20%20%20%09%09%09aBlock%20value%3A%20value.%0A%09%20%20%20%20%09%09%09value%20%3A%3D%20value%20+%20step%5D%5D'),
messageSends: ["ifTrue:", unescape("%3D"), "error:", "ifTrue:ifFalse:", unescape("%3C"), "whileTrue:", unescape("%3E%3D"), "value:", unescape("+"), unescape("%3C%3D")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
category: 'copying',
fn: function (){
var self=this;
return smalltalk.send(self, "_copy", []);
return self;},
args: [],
source: unescape('deepCopy%0A%09%5Eself%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_copy'),
smalltalk.method({
selector: unescape('copy'),
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('copy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_%5C%5C'),
smalltalk.method({
selector: unescape('%5C%5C'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self % aNumber;
return self;},
args: ["aNumber"],
source: unescape('%5C%5C%20aNumber%0A%09%3Creturn%20self%20%25%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_sqrt'),
smalltalk.method({
selector: unescape('sqrt'),
category: 'arithmetic',
fn: function (){
var self=this;
return Math.sqrt(self);
return self;},
args: [],
source: unescape('sqrt%0A%09%3Creturn%20Math.sqrt%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_squared'),
smalltalk.method({
selector: unescape('squared'),
category: 'arithmetic',
fn: function (){
var self=this;
return self * self;
return self;},
args: [],
source: unescape('squared%0A%09%5Eself%20*%20self'),
messageSends: [unescape("*")],
referencedClasses: []
}),
smalltalk.Number);


smalltalk.addMethod(
unescape('_pi'),
smalltalk.method({
selector: unescape('pi'),
category: 'instance creation',
fn: function (){
var self=this;
return Math.PI;
return self;},
args: [],
source: unescape('pi%0A%09%3Creturn%20Math.PI%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number.klass);


smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_compiledSource'),
smalltalk.method({
selector: unescape('compiledSource'),
category: 'accessing',
fn: function (){
var self=this;
return self.toString();
return self;},
args: [],
source: unescape('compiledSource%0A%09%3Creturn%20self.toString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_whileTrue_'),
smalltalk.method({
selector: unescape('whileTrue%3A'),
category: 'controlling',
fn: function (aBlock){
var self=this;
while(self()) {aBlock()};
return self;},
args: ["aBlock"],
source: unescape('whileTrue%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Cwhile%28self%28%29%29%20%7BaBlock%28%29%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_whileFalse_'),
smalltalk.method({
selector: unescape('whileFalse%3A'),
category: 'controlling',
fn: function (aBlock){
var self=this;
while(!self()) {aBlock()};
return self;},
args: ["aBlock"],
source: unescape('whileFalse%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Cwhile%28%21self%28%29%29%20%7BaBlock%28%29%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_value'),
smalltalk.method({
selector: unescape('value'),
category: 'evaluating',
fn: function (){
var self=this;
return self();;
return self;},
args: [],
source: unescape('value%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%28%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_value_'),
smalltalk.method({
selector: unescape('value%3A'),
category: 'evaluating',
fn: function (anArg){
var self=this;
return self(anArg);;
return self;},
args: ["anArg"],
source: unescape('value%3A%20anArg%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%28anArg%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_value_value_'),
smalltalk.method({
selector: unescape('value%3Avalue%3A'),
category: 'evaluating',
fn: function (firstArg, secondArg){
var self=this;
return self(firstArg, secondArg);;
return self;},
args: ["firstArg", "secondArg"],
source: unescape('value%3A%20firstArg%20value%3A%20secondArg%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%28firstArg%2C%20secondArg%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_value_value_value_'),
smalltalk.method({
selector: unescape('value%3Avalue%3Avalue%3A'),
category: 'evaluating',
fn: function (firstArg, secondArg, thirdArg){
var self=this;
return self(firstArg, secondArg, thirdArg);;
return self;},
args: ["firstArg", "secondArg", "thirdArg"],
source: unescape('value%3A%20firstArg%20value%3A%20secondArg%20value%3A%20thirdArg%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%28firstArg%2C%20secondArg%2C%20thirdArg%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_valueWithPossibleArguments_'),
smalltalk.method({
selector: unescape('valueWithPossibleArguments%3A'),
category: 'evaluating',
fn: function (aCollection){
var self=this;
return self.apply(null, aCollection);;
return self;},
args: ["aCollection"],
source: unescape('valueWithPossibleArguments%3A%20aCollection%0A%09%3Creturn%20self.apply%28null%2C%20aCollection%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_on_do_'),
smalltalk.method({
selector: unescape('on%3Ado%3A'),
category: 'error handling',
fn: function (anErrorClass, aBlock){
var self=this;
smalltalk.send(self, "_try_catch_", [self, (function(error){return ((($receiver = smalltalk.send(error, "_isKindOf_", [anErrorClass])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aBlock, "_value_", [error]);})() : (function(){return smalltalk.send(error, "_signal", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value_", [error]);}), (function(){return smalltalk.send(error, "_signal", []);})]));})]);
return self;},
args: ["anErrorClass", "aBlock"],
source: unescape('on%3A%20anErrorClass%20do%3A%20aBlock%0A%09self%20try%3A%20self%20catch%3A%20%5B%3Aerror%20%7C%0A%09%20%20%20%20%28error%20isKindOf%3A%20anErrorClass%29%20%0A%09%20%20%20%20%20ifTrue%3A%20%5BaBlock%20value%3A%20error%5D%0A%09%20%20%20%20%20ifFalse%3A%20%5Berror%20signal%5D%5D'),
messageSends: ["try:catch:", "ifTrue:ifFalse:", "isKindOf:", "value:", "signal"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_valueWithTimeout_'),
smalltalk.method({
selector: unescape('valueWithTimeout%3A'),
category: 'timeout/interval',
fn: function (aNumber){
var self=this;
return setTimeout(self, aNumber);
return self;},
args: ["aNumber"],
source: unescape('valueWithTimeout%3A%20aNumber%0A%09%3Creturn%20setTimeout%28self%2C%20aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_valueWithInterval_'),
smalltalk.method({
selector: unescape('valueWithInterval%3A'),
category: 'timeout/interval',
fn: function (aNumber){
var self=this;
return setInterval(self, aNumber);
return self;},
args: ["aNumber"],
source: unescape('valueWithInterval%3A%20aNumber%0A%09%3Creturn%20setInterval%28self%2C%20aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_whileFalse'),
smalltalk.method({
selector: unescape('whileFalse'),
category: 'controlling',
fn: function (){
var self=this;
smalltalk.send(self, "_whileFalse_", [(function(){return nil;})]);
return self;},
args: [],
source: unescape('whileFalse%0A%09%22inlined%20in%20the%20Compiler%22%0A%09self%20whileFalse%3A%20%5B%5D'),
messageSends: ["whileFalse:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_whileTrue'),
smalltalk.method({
selector: unescape('whileTrue'),
category: 'controlling',
fn: function (){
var self=this;
smalltalk.send(self, "_whileTrue_", [(function(){return nil;})]);
return self;},
args: [],
source: unescape('whileTrue%0A%09%22inlined%20in%20the%20Compiler%22%0A%09self%20whileTrue%3A%20%5B%5D'),
messageSends: ["whileTrue:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'evaluating',
fn: function (){
var self=this;
return new self();
return self;},
args: [],
source: unescape('new%0A%09%22Use%20the%20receiver%20as%20a%20JS%20constructor.%20%0A%09*Do%20not*%20use%20this%20method%20to%20instanciate%20Smalltalk%20objects%21%22%0A%09%3Creturn%20new%20self%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_applyTo_arguments_'),
smalltalk.method({
selector: unescape('applyTo%3Aarguments%3A'),
category: 'evaluating',
fn: function (anObject, aCollection){
var self=this;
return self.apply(anObject, aCollection);
return self;},
args: ["anObject", "aCollection"],
source: unescape('applyTo%3A%20anObject%20arguments%3A%20aCollection%0A%09%3Creturn%20self.apply%28anObject%2C%20aCollection%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_timeToRun'),
smalltalk.method({
selector: unescape('timeToRun'),
category: 'evaluating',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [self]);
return self;},
args: [],
source: unescape('timeToRun%0A%09%22Answer%20the%20number%20of%20milliseconds%20taken%20to%20execute%20this%20block.%22%0A%0A%09%5E%20Date%20millisecondsToRun%3A%20self'),
messageSends: ["millisecondsToRun:"],
referencedClasses: ["Date"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_numArgs'),
smalltalk.method({
selector: unescape('numArgs'),
category: 'accessing',
fn: function (){
var self=this;
return self.length;
return self;},
args: [],
source: unescape('numArgs%0A%09%3Creturn%20self.length%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);



smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (aBoolean){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
return Boolean(self == true) == aBoolean;
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}},
args: ["aBoolean"],
source: unescape('%3D%20aBoolean%0A%09aBoolean%20class%20%3D%20self%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09%3Creturn%20Boolean%28self%20%3D%3D%20true%29%20%3D%3D%20aBoolean%3E'),
messageSends: ["ifFalse:", unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('shallowCopy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('deepCopy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_ifTrue_'),
smalltalk.method({
selector: unescape('ifTrue%3A'),
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [aBlock, (function(){return nil;})]);
return self;},
args: ["aBlock"],
source: unescape('ifTrue%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself%20ifTrue%3A%20aBlock%20ifFalse%3A%20%5B%5D'),
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_ifFalse_'),
smalltalk.method({
selector: unescape('ifFalse%3A'),
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [(function(){return nil;}), aBlock]);
return self;},
args: ["aBlock"],
source: unescape('ifFalse%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself%20ifTrue%3A%20%5B%5D%20ifFalse%3A%20aBlock'),
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_ifFalse_ifTrue_'),
smalltalk.method({
selector: unescape('ifFalse%3AifTrue%3A'),
category: 'controlling',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [anotherBlock, aBlock]);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('ifFalse%3A%20aBlock%20ifTrue%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself%20ifTrue%3A%20anotherBlock%20ifFalse%3A%20aBlock'),
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_ifTrue_ifFalse_'),
smalltalk.method({
selector: unescape('ifTrue%3AifFalse%3A'),
category: 'controlling',
fn: function (aBlock, anotherBlock){
var self=this;

	    if(self == true) {
		return aBlock();
	    } else {
		return anotherBlock();
	    }
	;
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('ifTrue%3A%20aBlock%20ifFalse%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3C%0A%09%20%20%20%20if%28self%20%3D%3D%20true%29%20%7B%0A%09%09return%20aBlock%28%29%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20anotherBlock%28%29%3B%0A%09%20%20%20%20%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_and_'),
smalltalk.method({
selector: unescape('and%3A'),
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [aBlock, (function(){return false;})]);
return self;},
args: ["aBlock"],
source: unescape('and%3A%20aBlock%0A%09%5Eself%20%3D%20true%0A%09%20%20%20%20ifTrue%3A%20aBlock%0A%09%20%20%20%20ifFalse%3A%20%5Bfalse%5D'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D")],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_or_'),
smalltalk.method({
selector: unescape('or%3A'),
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [(function(){return true;}), aBlock]);
return self;},
args: ["aBlock"],
source: unescape('or%3A%20aBlock%0A%09%5Eself%20%3D%20true%0A%09%20%20%20%20ifTrue%3A%20%5Btrue%5D%0A%09%20%20%20%20ifFalse%3A%20aBlock'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D")],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_not'),
smalltalk.method({
selector: unescape('not'),
category: 'controlling',
fn: function (){
var self=this;
return smalltalk.send(self, "__eq", [false]);
return self;},
args: [],
source: unescape('not%0A%09%5Eself%20%3D%20false'),
messageSends: [unescape("%3D")],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return self.toString();
return self;},
args: [],
source: unescape('printString%0A%09%3Creturn%20self.toString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('asJSONObject%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_%26'),
smalltalk.method({
selector: unescape('%26'),
category: 'controlling',
fn: function (aBoolean){
var self=this;

	    if(self == true) {
		return aBoolean;
	    } else {
		return false;
	    }
	;
return self;},
args: ["aBoolean"],
source: unescape('%26%20aBoolean%0A%09%3C%0A%09%20%20%20%20if%28self%20%3D%3D%20true%29%20%7B%0A%09%09return%20aBoolean%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20false%3B%0A%09%20%20%20%20%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_%7C'),
smalltalk.method({
selector: unescape('%7C'),
category: 'controlling',
fn: function (aBoolean){
var self=this;

	    if(self == true) {
		return true;
	    } else {
		return aBoolean;
	    }
	;
return self;},
args: ["aBoolean"],
source: unescape('%7C%20aBoolean%0A%09%3C%0A%09%20%20%20%20if%28self%20%3D%3D%20true%29%20%7B%0A%09%09return%20true%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20aBoolean%3B%0A%09%20%20%20%20%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('__eq_eq'),
smalltalk.method({
selector: unescape('%3D%3D'),
category: 'comparing',
fn: function (aBoolean){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})]));
return Boolean(self == true) === Boolean(aBoolean == true);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq_eq'){return e.fn()} throw(e)}},
args: ["aBoolean"],
source: unescape('%3D%3D%20aBoolean%0A%09aBoolean%20class%20%3D%20self%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09%3Creturn%20Boolean%28self%20%3D%3D%20true%29%20%3D%3D%3D%20Boolean%28aBoolean%20%3D%3D%20true%29%3E'),
messageSends: ["ifFalse:", unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.Boolean);



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel');
smalltalk.Date.comment=unescape('The%20Date%20class%20is%20used%20to%20work%20with%20dates%20and%20times.')
smalltalk.addMethod(
unescape('_year'),
smalltalk.method({
selector: unescape('year'),
category: 'accessing',
fn: function (){
var self=this;
return self.getFullYear();
return self;},
args: [],
source: unescape('year%0A%09%3Creturn%20self.getFullYear%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_month'),
smalltalk.method({
selector: unescape('month'),
category: 'accessing',
fn: function (){
var self=this;
return self.getMonth() + 1;
return self;},
args: [],
source: unescape('month%0A%09%3Creturn%20self.getMonth%28%29%20+%201%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_month_'),
smalltalk.method({
selector: unescape('month%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setMonth(aNumber - 1);
return self;},
args: ["aNumber"],
source: unescape('month%3A%20aNumber%0A%09%3Cself.setMonth%28aNumber%20-%201%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_day'),
smalltalk.method({
selector: unescape('day'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_dayOfWeek", []);
return self;},
args: [],
source: unescape('day%0A%09%5Eself%20dayOfWeek'),
messageSends: ["dayOfWeek"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfWeek'),
smalltalk.method({
selector: unescape('dayOfWeek'),
category: 'accessing',
fn: function (){
var self=this;
return self.getDay() + 1;
return self;},
args: [],
source: unescape('dayOfWeek%0A%09%3Creturn%20self.getDay%28%29%20+%201%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfWeek_'),
smalltalk.method({
selector: unescape('dayOfWeek%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
return self.setDay(aNumber - 1);
return self;},
args: ["aNumber"],
source: unescape('dayOfWeek%3A%20aNumber%0A%09%3Creturn%20self.setDay%28aNumber%20-%201%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_day_'),
smalltalk.method({
selector: unescape('day%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
smalltalk.send(self, "_day_", [aNumber]);
return self;},
args: ["aNumber"],
source: unescape('day%3A%20aNumber%0A%09self%20day%3A%20aNumber'),
messageSends: ["day:"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_year_'),
smalltalk.method({
selector: unescape('year%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setFullYear(aNumber);
return self;},
args: ["aNumber"],
source: unescape('year%3A%20aNumber%0A%09%3Cself.setFullYear%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfMonth'),
smalltalk.method({
selector: unescape('dayOfMonth'),
category: 'accessing',
fn: function (){
var self=this;
return self.getDate();
return self;},
args: [],
source: unescape('dayOfMonth%0A%09%3Creturn%20self.getDate%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfMonth_'),
smalltalk.method({
selector: unescape('dayOfMonth%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setDate(aNumber);
return self;},
args: ["aNumber"],
source: unescape('dayOfMonth%3A%20aNumber%0A%09%3Cself.setDate%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
category: 'converting',
fn: function (){
var self=this;
return self.toString();
return self;},
args: [],
source: unescape('asString%0A%09%3Creturn%20self.toString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(self, "_asString", []);
return self;},
args: [],
source: unescape('printString%0A%09%5Eself%20asString'),
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asMilliseconds'),
smalltalk.method({
selector: unescape('asMilliseconds'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_time", []);
return self;},
args: [],
source: unescape('asMilliseconds%0A%09%5Eself%20time'),
messageSends: ["time"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_time'),
smalltalk.method({
selector: unescape('time'),
category: 'accessing',
fn: function (){
var self=this;
return self.getTime();
return self;},
args: [],
source: unescape('time%0A%09%3Creturn%20self.getTime%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_time_'),
smalltalk.method({
selector: unescape('time%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setTime(aNumber);
return self;},
args: ["aNumber"],
source: unescape('time%3A%20aNumber%0A%09%3Cself.setTime%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asDateString'),
smalltalk.method({
selector: unescape('asDateString'),
category: 'converting',
fn: function (){
var self=this;
return self.toDateString();
return self;},
args: [],
source: unescape('asDateString%0A%09%3Creturn%20self.toDateString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asTimeString'),
smalltalk.method({
selector: unescape('asTimeString'),
category: 'converting',
fn: function (){
var self=this;
return self.toTimeString();
return self;},
args: [],
source: unescape('asTimeString%0A%09%3Creturn%20self.toTimeString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asLocaleString'),
smalltalk.method({
selector: unescape('asLocaleString'),
category: 'converting',
fn: function (){
var self=this;
return self.toLocaleString();
return self;},
args: [],
source: unescape('asLocaleString%0A%09%3Creturn%20self.toLocaleString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asNumber'),
smalltalk.method({
selector: unescape('asNumber'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_asMilliseconds", []);
return self;},
args: [],
source: unescape('asNumber%0A%09%5Eself%20asMilliseconds'),
messageSends: ["asMilliseconds"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_hours_'),
smalltalk.method({
selector: unescape('hours%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setHours(aNumber);
return self;},
args: ["aNumber"],
source: unescape('hours%3A%20aNumber%0A%09%3Cself.setHours%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_minutes_'),
smalltalk.method({
selector: unescape('minutes%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setMinutes(aNumber);
return self;},
args: ["aNumber"],
source: unescape('minutes%3A%20aNumber%0A%09%3Cself.setMinutes%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_seconds_'),
smalltalk.method({
selector: unescape('seconds%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setSeconds(aNumber);
return self;},
args: ["aNumber"],
source: unescape('seconds%3A%20aNumber%0A%09%3Cself.setSeconds%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_milliseconds_'),
smalltalk.method({
selector: unescape('milliseconds%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setMilliseconds(aNumber);
return self;},
args: ["aNumber"],
source: unescape('milliseconds%3A%20aNumber%0A%09%3Cself.setMilliseconds%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_hours'),
smalltalk.method({
selector: unescape('hours'),
category: 'accessing',
fn: function (){
var self=this;
return self.getHours();
return self;},
args: [],
source: unescape('hours%0A%09%3Creturn%20self.getHours%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_minutes'),
smalltalk.method({
selector: unescape('minutes'),
category: 'accessing',
fn: function (){
var self=this;
return self.getMinutes();
return self;},
args: [],
source: unescape('minutes%0A%09%3Creturn%20self.getMinutes%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_seconds'),
smalltalk.method({
selector: unescape('seconds'),
category: 'accessing',
fn: function (){
var self=this;
return self.getSeconds();
return self;},
args: [],
source: unescape('seconds%0A%09%3Creturn%20self.getSeconds%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_milliseconds'),
smalltalk.method({
selector: unescape('milliseconds'),
category: 'accessing',
fn: function (){
var self=this;
return self.getMilliseconds();
return self;},
args: [],
source: unescape('milliseconds%0A%09%3Creturn%20self.getMilliseconds%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__lt'),
smalltalk.method({
selector: unescape('%3C'),
category: 'comparing',
fn: function (aDate){
var self=this;
return self < aDate;
return self;},
args: ["aDate"],
source: unescape('%3C%20aDate%0A%09%3Creturn%20self%20%3C%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__gt'),
smalltalk.method({
selector: unescape('%3E'),
category: 'comparing',
fn: function (aDate){
var self=this;
return self > aDate;
return self;},
args: ["aDate"],
source: unescape('%3E%20aDate%0A%09%3Creturn%20self%20%3E%3E%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__lt_eq'),
smalltalk.method({
selector: unescape('%3C%3D'),
category: 'comparing',
fn: function (aDate){
var self=this;
return self <= aDate;
return self;},
args: ["aDate"],
source: unescape('%3C%3D%20aDate%0A%09%3Creturn%20self%20%3C%3D%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__gt_eq'),
smalltalk.method({
selector: unescape('%3E%3D'),
category: 'comparing',
fn: function (aDate){
var self=this;
return self >= aDate;
return self;},
args: ["aDate"],
source: unescape('%3E%3D%20aDate%0A%09%3Creturn%20self%20%3E%3E%3D%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__minus'),
smalltalk.method({
selector: unescape('-'),
category: 'arithmetic',
fn: function (aDate){
var self=this;
return self - aDate;
return self;},
args: ["aDate"],
source: unescape('-%20aDate%0A%09%3Creturn%20self%20-%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__plus'),
smalltalk.method({
selector: unescape('+'),
category: 'arithmetic',
fn: function (aDate){
var self=this;
return self + aDate;
return self;},
args: ["aDate"],
source: unescape('+%20aDate%0A%09%3Creturn%20self%20+%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('asJSONObject%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);


smalltalk.addMethod(
unescape('_new_'),
smalltalk.method({
selector: unescape('new%3A'),
category: 'instance creation',
fn: function (anObject){
var self=this;
return new Date(anObject);
return self;},
args: ["anObject"],
source: unescape('new%3A%20anObject%0A%09%3Creturn%20new%20Date%28anObject%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_fromString_'),
smalltalk.method({
selector: unescape('fromString%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_new_", [aString]);
return self;},
args: ["aString"],
source: unescape('fromString%3A%20aString%0A%09%22Example%3A%20Date%20fromString%28%272011/04/15%2000%3A00%3A00%27%29%22%0A%09%5Eself%20new%3A%20aString'),
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_fromSeconds_'),
smalltalk.method({
selector: unescape('fromSeconds%3A'),
category: 'instance creation',
fn: function (aNumber){
var self=this;
return smalltalk.send(self, "_fromMilliseconds_", [((($receiver = aNumber).klass === smalltalk.Number) ? $receiver *(1000) : smalltalk.send($receiver, "__star", [(1000)]))]);
return self;},
args: ["aNumber"],
source: unescape('fromSeconds%3A%20aNumber%0A%09%5Eself%20fromMilliseconds%3A%20aNumber%20*%201000'),
messageSends: ["fromMilliseconds:", unescape("*")],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_fromMilliseconds_'),
smalltalk.method({
selector: unescape('fromMilliseconds%3A'),
category: 'instance creation',
fn: function (aNumber){
var self=this;
return smalltalk.send(self, "_new_", [aNumber]);
return self;},
args: ["aNumber"],
source: unescape('fromMilliseconds%3A%20aNumber%0A%09%5Eself%20new%3A%20aNumber'),
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_today'),
smalltalk.method({
selector: unescape('today'),
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send(self, "_new", []);
return self;},
args: [],
source: unescape('today%0A%09%5Eself%20new'),
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_now'),
smalltalk.method({
selector: unescape('now'),
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send(self, "_today", []);
return self;},
args: [],
source: unescape('now%0A%09%5Eself%20today'),
messageSends: ["today"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_millisecondsToRun_'),
smalltalk.method({
selector: unescape('millisecondsToRun%3A'),
category: 'instance creation',
fn: function (aBlock){
var self=this;
var t=nil;
t=smalltalk.send((smalltalk.Date || Date), "_now", []);
smalltalk.send(aBlock, "_value", []);
return ((($receiver = smalltalk.send((smalltalk.Date || Date), "_now", [])).klass === smalltalk.Number) ? $receiver -t : smalltalk.send($receiver, "__minus", [t]));
return self;},
args: ["aBlock"],
source: unescape('millisecondsToRun%3A%20aBlock%0A%09%7C%20t%20%7C%0A%09t%20%3A%3D%20Date%20now.%0A%09aBlock%20value.%0A%09%5EDate%20now%20-%20t'),
messageSends: ["now", "value", unescape("-")],
referencedClasses: ["Date"]
}),
smalltalk.Date.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3A'),
category: 'class creation',
fn: function (aString, anotherString){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, anotherString, nil]);
return self;},
args: ["aString", "anotherString"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%20package%3A%20nil'),
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_category_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3Acategory%3A'),
category: 'class creation',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;},
args: ["aString", "aString2", "aString3"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0A%09%22Kept%20for%20compatibility.%22%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3'),
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('shallowCopy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('deepCopy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_ifNil_'),
smalltalk.method({
selector: unescape('ifNil%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_ifNil_ifNotNil_", [aBlock, (function(){return nil;})]);
return self;},
args: ["aBlock"],
source: unescape('ifNil%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself%20ifNil%3A%20aBlock%20ifNotNil%3A%20%5B%5D'),
messageSends: ["ifNil:ifNotNil:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_ifNotNil_'),
smalltalk.method({
selector: unescape('ifNotNil%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
return self;
return self;},
args: ["aBlock"],
source: unescape('ifNotNil%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_ifNil_ifNotNil_'),
smalltalk.method({
selector: unescape('ifNil%3AifNotNil%3A'),
category: 'testing',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('ifNil%3A%20aBlock%20ifNotNil%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EaBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_ifNotNil_ifNil_'),
smalltalk.method({
selector: unescape('ifNotNil%3AifNil%3A'),
category: 'testing',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(anotherBlock, "_value", []);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('ifNotNil%3A%20aBlock%20ifNil%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EanotherBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_isNil'),
smalltalk.method({
selector: unescape('isNil'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isNil%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_notNil'),
smalltalk.method({
selector: unescape('notNil'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('notNil%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return "nil";
return self;},
args: [],
source: unescape('printString%0A%20%20%20%20%5E%27nil%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_package_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3Apackage%3A'),
category: 'class creation',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_superclass_subclass_instanceVariableNames_package_", [self, aString, aString2, aString3]);
return self;},
args: ["aString", "aString2", "aString3"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3%0A%09%5EClassBuilder%20new%0A%09%20%20%20%20superclass%3A%20self%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3'),
messageSends: ["superclass:subclass:instanceVariableNames:package:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["You cannot create new instances of UndefinedObject. Use nil"]);
return self;},
args: [],
source: unescape('new%0A%09%20%20%20%20self%20error%3A%20%27You%20cannot%20create%20new%20instances%20of%20UndefinedObject.%20Use%20nil%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.UndefinedObject.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('size%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_readStream'),
smalltalk.method({
selector: unescape('readStream'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_stream", []);
return self;},
args: [],
source: unescape('readStream%0A%09%5Eself%20stream'),
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_writeStream'),
smalltalk.method({
selector: unescape('writeStream'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_stream", []);
return self;},
args: [],
source: unescape('writeStream%0A%09%5Eself%20stream'),
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_stream'),
smalltalk.method({
selector: unescape('stream'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_streamClass", []), "_on_", [self]);
return self;},
args: [],
source: unescape('stream%0A%09%5Eself%20streamClass%20on%3A%20self'),
messageSends: ["on:", "streamClass"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_streamClass'),
smalltalk.method({
selector: unescape('streamClass'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_streamClass", []);
return self;},
args: [],
source: unescape('streamClass%0A%09%5Eself%20class%20streamClass'),
messageSends: ["streamClass", "class"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["anObject"],
source: unescape('add%3A%20anObject%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_addAll_'),
smalltalk.method({
selector: unescape('addAll%3A'),
category: 'adding/removing',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(self, "_add_", [each]);})]);
return aCollection;
return self;},
args: ["aCollection"],
source: unescape('addAll%3A%20aCollection%0A%09aCollection%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20add%3A%20each%5D.%0A%09%5EaCollection'),
messageSends: ["do:", "add:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('__comma'),
smalltalk.method({
selector: unescape('%2C'),
category: 'copying',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;},
args: ["aCollection"],
source: unescape('%2C%20aCollection%0A%09%5Eself%20copy%20%0A%09%20%20%20%20addAll%3A%20aCollection%3B%20%0A%09%20%20%20%20yourself'),
messageSends: ["addAll:", "yourself", "copy"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_copyWith_'),
smalltalk.method({
selector: unescape('copyWith%3A'),
category: 'copying',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;},
args: ["anObject"],
source: unescape('copyWith%3A%20anObject%0A%09%5Eself%20copy%20add%3A%20anObject%3B%20yourself'),
messageSends: ["add:", "yourself", "copy"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_copyWithAll_'),
smalltalk.method({
selector: unescape('copyWithAll%3A'),
category: 'copying',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;},
args: ["aCollection"],
source: unescape('copyWithAll%3A%20aCollection%0A%09%5Eself%20copy%20addAll%3A%20aCollection%3B%20yourself'),
messageSends: ["addAll:", "yourself", "copy"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_asArray'),
smalltalk.method({
selector: unescape('asArray'),
category: 'converting',
fn: function (){
var self=this;
var array=nil;
var index=nil;
array=smalltalk.send((smalltalk.Array || Array), "_new", []);
index=(0);
smalltalk.send(self, "_do_", [(function(each){index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return smalltalk.send(array, "_at_put_", [index, each]);})]);
return array;
return self;},
args: [],
source: unescape('asArray%0A%09%7C%20array%20index%20%7C%0A%09array%20%3A%3D%20Array%20new.%0A%09index%20%3A%3D%200.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20index%20%3A%3D%20index%20+%201.%0A%09%20%20%20%20array%20at%3A%20index%20put%3A%20each%5D.%0A%09%5Earray'),
messageSends: ["new", "do:", unescape("+"), "at:put:"],
referencedClasses: ["Array"]
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i]);};
return self;},
args: ["aBlock"],
source: unescape('do%3A%20aBlock%0A%09%3Cfor%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%7BaBlock%28self%5Bi%5D%29%3B%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_collect_'),
smalltalk.method({
selector: unescape('collect%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newCollection=nil;
newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [smalltalk.send(aBlock, "_value_", [each])]);})]);
return newCollection;
return self;},
args: ["aBlock"],
source: unescape('collect%3A%20aBlock%0A%09%7C%20newCollection%20%7C%0A%09newCollection%20%3A%3D%20self%20class%20new.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20newCollection%20add%3A%20%28aBlock%20value%3A%20each%29%5D.%0A%09%5EnewCollection'),
messageSends: ["new", "class", "do:", "add:", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_detect_'),
smalltalk.method({
selector: unescape('detect%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_detect_ifNone_", [aBlock, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;},
args: ["aBlock"],
source: unescape('detect%3A%20aBlock%0A%09%5Eself%20detect%3A%20aBlock%20ifNone%3A%20%5Bself%20errorNotFound%5D'),
messageSends: ["detect:ifNone:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_detect_ifNone_'),
smalltalk.method({
selector: unescape('detect%3AifNone%3A'),
category: 'enumerating',
fn: function (aBlock, anotherBlock){
var self=this;

		for(var i = 0; i < self.length; i++)
			if(aBlock(self[i]))
				return self[i];
		return anotherBlock();
	;
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0A%09%3C%0A%09%09for%28var%20i%20%3D%200%3B%20i%20%3C%20self.length%3B%20i++%29%0A%09%09%09if%28aBlock%28self%5Bi%5D%29%29%0A%09%09%09%09return%20self%5Bi%5D%3B%0A%09%09return%20anotherBlock%28%29%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_do_separatedBy_'),
smalltalk.method({
selector: unescape('do%3AseparatedBy%3A'),
category: 'enumerating',
fn: function (aBlock, anotherBlock){
var self=this;
var first=nil;
first=true;
smalltalk.send(self, "_do_", [(function(each){((($receiver = first).klass === smalltalk.Boolean) ? ($receiver ? (function(){return first=false;})() : (function(){return smalltalk.send(anotherBlock, "_value", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return first=false;}), (function(){return smalltalk.send(anotherBlock, "_value", []);})]));return smalltalk.send(aBlock, "_value_", [each]);})]);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('do%3A%20aBlock%20separatedBy%3A%20anotherBlock%0A%20%20%20%20%09%7C%20first%20%7C%0A%20%20%20%20%09first%20%3A%3D%20true.%0A%20%20%20%20%09self%20do%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%09%20%20%20%20first%0A%20%20%20%20%09%09ifTrue%3A%20%5Bfirst%20%3A%3D%20false%5D%0A%20%20%20%20%09%09ifFalse%3A%20%5BanotherBlock%20value%5D.%0A%20%20%20%20%09%20%20%20%20aBlock%20value%3A%20each%5D'),
messageSends: ["do:", "ifTrue:ifFalse:", "value", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_inject_into_'),
smalltalk.method({
selector: unescape('inject%3Ainto%3A'),
category: 'enumerating',
fn: function (anObject, aBlock){
var self=this;
var result=nil;
result=anObject;
smalltalk.send(self, "_do_", [(function(each){return result=smalltalk.send(aBlock, "_value_value_", [result, each]);})]);
return result;
return self;},
args: ["anObject", "aBlock"],
source: unescape('inject%3A%20anObject%20into%3A%20aBlock%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20anObject.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%20%20%20%20result%20%3A%3D%20aBlock%20value%3A%20result%20value%3A%20each%5D.%0A%09%5Eresult'),
messageSends: ["do:", "value:value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_reject_'),
smalltalk.method({
selector: unescape('reject%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_select_", [(function(each){return smalltalk.send(smalltalk.send(aBlock, "_value_", [each]), "__eq", [false]);})]);
return self;},
args: ["aBlock"],
source: unescape('reject%3A%20aBlock%0A%09%5Eself%20select%3A%20%5B%3Aeach%20%7C%20%28aBlock%20value%3A%20each%29%20%3D%20false%5D'),
messageSends: ["select:", unescape("%3D"), "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_select_'),
smalltalk.method({
selector: unescape('select%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
var stream=nil;
stream=smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_new", []), "_writeStream", []);
smalltalk.send(self, "_do_", [(function(each){return ((($receiver = smalltalk.send(aBlock, "_value_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(stream, "_nextPut_", [each]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(stream, "_nextPut_", [each]);})]));})]);
return smalltalk.send(stream, "_contents", []);
return self;},
args: ["aBlock"],
source: unescape('select%3A%20aBlock%0A%09%7C%20stream%20%7C%0A%09stream%20%3A%3D%20self%20class%20new%20writeStream.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20%28aBlock%20value%3A%20each%29%20ifTrue%3A%20%5B%0A%09%09stream%20nextPut%3A%20each%5D%5D.%0A%09%5Estream%20contents'),
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "value:", "nextPut:", "contents"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_errorNotFound'),
smalltalk.method({
selector: unescape('errorNotFound'),
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["Object is not in the collection"]);
return self;},
args: [],
source: unescape('errorNotFound%0A%09self%20error%3A%20%27Object%20is%20not%20in%20the%20collection%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_includes_'),
smalltalk.method({
selector: unescape('includes%3A'),
category: 'testing',
fn: function (anObject){
var self=this;

		var i = self.length;
		while (i--) {
			if (smalltalk.send(self[i], "__eq", [anObject])) {return true;}	
		}
		return false
	;
return self;},
args: ["anObject"],
source: unescape('includes%3A%20anObject%0A%09%3C%0A%09%09var%20i%20%3D%20self.length%3B%0A%09%09while%20%28i--%29%20%7B%0A%09%09%09if%20%28smalltalk.send%28self%5Bi%5D%2C%20%22__eq%22%2C%20%5BanObject%5D%29%29%20%7Breturn%20true%3B%7D%09%0A%09%09%7D%0A%09%09return%20false%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_notEmpty'),
smalltalk.method({
selector: unescape('notEmpty'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_isEmpty", []), "_not", []);
return self;},
args: [],
source: unescape('notEmpty%0A%09%5Eself%20isEmpty%20not'),
messageSends: ["not", "isEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_isEmpty'),
smalltalk.method({
selector: unescape('isEmpty'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [(0)]);
return self;},
args: [],
source: unescape('isEmpty%0A%09%5Eself%20size%20%3D%200'),
messageSends: [unescape("%3D"), "size"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["anObject"],
source: unescape('remove%3A%20anObject%0A%20%20%20%20self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_asSet'),
smalltalk.method({
selector: unescape('asSet'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Set || Set), "_withAll_", [self]);
return self;},
args: [],
source: unescape('asSet%0A%09%5ESet%20withAll%3A%20self'),
messageSends: ["withAll:"],
referencedClasses: ["Set"]
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_ifNotEmpty_'),
smalltalk.method({
selector: unescape('ifNotEmpty%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_notEmpty", []), "_ifTrue_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('ifNotEmpty%3A%20aBlock%0A%09self%20notEmpty%20ifTrue%3A%20aBlock.'),
messageSends: ["ifTrue:", "notEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_ifEmpty_'),
smalltalk.method({
selector: unescape('ifEmpty%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_isEmpty", []), "_ifTrue_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('ifEmpty%3A%20aBlock%0A%09self%20isEmpty%20ifTrue%3A%20aBlock.'),
messageSends: ["ifTrue:", "isEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_copyWithoutAll_'),
smalltalk.method({
selector: unescape('copyWithoutAll%3A'),
category: 'copying',
fn: function (aCollection){
var self=this;
return smalltalk.send(self, "_reject_", [(function(each){return smalltalk.send(aCollection, "_includes_", [each]);})]);
return self;},
args: ["aCollection"],
source: unescape('copyWithoutAll%3A%20aCollection%0A%09%22Answer%20a%20copy%20of%20the%20receiver%20that%20does%20not%20contain%20any%20elements%20%0A%09equal%20to%20those%20in%20aCollection.%22%0A%0A%09%5E%20self%20reject%3A%20%5B%3Aeach%20%7C%20aCollection%20includes%3A%20each%5D'),
messageSends: ["reject:", "includes:"],
referencedClasses: []
}),
smalltalk.Collection);


smalltalk.addMethod(
unescape('_streamClass'),
smalltalk.method({
selector: unescape('streamClass'),
category: 'accessing',
fn: function (){
var self=this;
return (smalltalk.Stream || Stream);
return self;},
args: [],
source: unescape('streamClass%0A%09%20%20%20%20%5EStream'),
messageSends: [],
referencedClasses: ["Stream"]
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
category: 'instance creation',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["anObject"],
source: unescape('with%3A%20anObject%0A%09%20%20%20%20%5Eself%20new%0A%09%09add%3A%20anObject%3B%0A%09%09yourself'),
messageSends: ["add:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
unescape('_with_with_'),
smalltalk.method({
selector: unescape('with%3Awith%3A'),
category: 'instance creation',
fn: function (anObject, anotherObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);smalltalk.send($rec, "_add_", [anotherObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["anObject", "anotherObject"],
source: unescape('with%3A%20anObject%20with%3A%20anotherObject%0A%09%20%20%20%20%5Eself%20new%0A%09%09add%3A%20anObject%3B%0A%09%09add%3A%20anotherObject%3B%0A%09%09yourself'),
messageSends: ["add:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
unescape('_with_with_with_'),
smalltalk.method({
selector: unescape('with%3Awith%3Awith%3A'),
category: 'instance creation',
fn: function (firstObject, secondObject, thirdObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [firstObject]);smalltalk.send($rec, "_add_", [secondObject]);smalltalk.send($rec, "_add_", [thirdObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["firstObject", "secondObject", "thirdObject"],
source: unescape('with%3A%20firstObject%20with%3A%20secondObject%20with%3A%20thirdObject%0A%09%20%20%20%20%5Eself%20new%0A%09%09add%3A%20firstObject%3B%0A%09%09add%3A%20secondObject%3B%0A%09%09add%3A%20thirdObject%3B%0A%09%09yourself'),
messageSends: ["add:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
unescape('_withAll_'),
smalltalk.method({
selector: unescape('withAll%3A'),
category: 'instance creation',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aCollection"],
source: unescape('withAll%3A%20aCollection%0A%09%20%20%20%20%5Eself%20new%0A%09%09addAll%3A%20aCollection%3B%0A%09%09yourself'),
messageSends: ["addAll:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Collection.klass);


smalltalk.addClass('SequenceableCollection', smalltalk.Collection, [], 'Kernel');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (anIndex){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [anIndex, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;},
args: ["anIndex"],
source: unescape('at%3A%20anIndex%0A%09%5Eself%20at%3A%20anIndex%20ifAbsent%3A%20%5B%0A%09%20%20%20%20self%20errorNotFound%5D'),
messageSends: ["at:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
category: 'accessing',
fn: function (anIndex, aBlock){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["anIndex", "aBlock"],
source: unescape('at%3A%20anIndex%20ifAbsent%3A%20aBlock%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (anIndex, anObject){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["anIndex", "anObject"],
source: unescape('at%3A%20anIndex%20put%3A%20anObject%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_copyFrom_to_'),
smalltalk.method({
selector: unescape('copyFrom%3Ato%3A'),
category: 'copying',
fn: function (anIndex, anotherIndex){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["anIndex", "anotherIndex"],
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_first'),
smalltalk.method({
selector: unescape('first'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(1)]);
return self;},
args: [],
source: unescape('first%0A%09%5Eself%20at%3A%201'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_fourth'),
smalltalk.method({
selector: unescape('fourth'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(4)]);
return self;},
args: [],
source: unescape('fourth%0A%09%5Eself%20at%3A%204'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_last'),
smalltalk.method({
selector: unescape('last'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [smalltalk.send(self, "_size", [])]);
return self;},
args: [],
source: unescape('last%0A%09%5Eself%20at%3A%20self%20size'),
messageSends: ["at:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_second'),
smalltalk.method({
selector: unescape('second'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(2)]);
return self;},
args: [],
source: unescape('second%0A%09%5Eself%20at%3A%202'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_third'),
smalltalk.method({
selector: unescape('third'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(3)]);
return self;},
args: [],
source: unescape('third%0A%09%5Eself%20at%3A%203'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_removeLast'),
smalltalk.method({
selector: unescape('removeLast'),
category: 'adding',
fn: function (){
var self=this;
smalltalk.send(self, "_remove_", [smalltalk.send(self, "_last", [])]);
return self;},
args: [],
source: unescape('removeLast%0A%09self%20remove%3A%20self%20last'),
messageSends: ["remove:", "last"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_addLast_'),
smalltalk.method({
selector: unescape('addLast%3A'),
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_add_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('addLast%3A%20anObject%0A%09self%20add%3A%20anObject'),
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_withIndexDo_'),
smalltalk.method({
selector: unescape('withIndexDo%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i], i+1);};
return self;},
args: ["aBlock"],
source: unescape('withIndexDo%3A%20aBlock%0A%09%3Cfor%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%7BaBlock%28self%5Bi%5D%2C%20i+1%29%3B%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_allButFirst'),
smalltalk.method({
selector: unescape('allButFirst'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(2), smalltalk.send(self, "_size", [])]);
return self;},
args: [],
source: unescape('allButFirst%0A%09%5Eself%20copyFrom%3A%202%20to%3A%20self%20size'),
messageSends: ["copyFrom:to:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_allButLast'),
smalltalk.method({
selector: unescape('allButLast'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(1), ((($receiver = smalltalk.send(self, "_size", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]);
return self;},
args: [],
source: unescape('allButLast%0A%09%5Eself%20copyFrom%3A%201%20to%3A%20self%20size%20-%201'),
messageSends: ["copyFrom:to:", unescape("-"), "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_indexOf_'),
smalltalk.method({
selector: unescape('indexOf%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.send(self, "_indexOf_ifAbsent_", [anObject, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;},
args: ["anObject"],
source: unescape('indexOf%3A%20anObject%0A%09%5Eself%20indexOf%3A%20anObject%20ifAbsent%3A%20%5Bself%20errorNotFound%5D'),
messageSends: ["indexOf:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_indexOf_ifAbsent_'),
smalltalk.method({
selector: unescape('indexOf%3AifAbsent%3A'),
category: 'accessing',
fn: function (anObject, aBlock){
var self=this;

		for(var i=0;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
return self;},
args: ["anObject", "aBlock"],
source: unescape('indexOf%3A%20anObject%20ifAbsent%3A%20aBlock%0A%09%3C%0A%09%09for%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%7B%0A%09%09%09if%28self%5Bi%5D.__eq%28anObject%29%29%20%7Breturn%20i+1%7D%0A%09%09%7D%0A%09%09return%20aBlock%28%29%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_indexOf_startingAt_ifAbsent_'),
smalltalk.method({
selector: unescape('indexOf%3AstartingAt%3AifAbsent%3A'),
category: 'accessing',
fn: function (anObject, start, aBlock){
var self=this;

		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
return self;},
args: ["anObject", "start", "aBlock"],
source: unescape('indexOf%3A%20anObject%20startingAt%3A%20start%20ifAbsent%3A%20aBlock%0A%09%3C%0A%09%09for%28var%20i%3Dstart-1%3Bi%3Cself.length%3Bi++%29%7B%0A%09%09%09if%28self%5Bi%5D.__eq%28anObject%29%29%20%7Breturn%20i+1%7D%0A%09%09%7D%0A%09%09return%20aBlock%28%29%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_indexOf_startingAt_'),
smalltalk.method({
selector: unescape('indexOf%3AstartingAt%3A'),
category: 'accessing',
fn: function (anObject, start){
var self=this;
return smalltalk.send(self, "_indexOf_startingAt_ifAbsent_", [anObject, start, (function(){return (0);})]);
return self;},
args: ["anObject", "start"],
source: unescape('indexOf%3A%20anObject%20startingAt%3A%20start%0A%09%22Answer%20the%20index%20of%20the%20first%20occurence%20of%20anElement%20after%20start%0A%09within%20the%20receiver.%20If%20the%20receiver%20does%20not%20contain%20anElement%2C%20%0A%09answer%200.%22%0A%09%5Eself%20indexOf%3A%20anObject%20startingAt%3A%20start%20ifAbsent%3A%20%5B0%5D'),
messageSends: ["indexOf:startingAt:ifAbsent:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_reversed'),
smalltalk.method({
selector: unescape('reversed'),
category: 'converting',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('reversed%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_atRandom'),
smalltalk.method({
selector: unescape('atRandom'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [smalltalk.send(smalltalk.send(self, "_size", []), "_atRandom", [])]);
return self;},
args: [],
source: unescape('atRandom%0A%09%5E%20self%20at%3A%20self%20size%20atRandom'),
messageSends: ["at:", "atRandom", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);



smalltalk.addClass('String', smalltalk.SequenceableCollection, [], 'Kernel');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (aString){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aString, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
return String(self) == aString;
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}},
args: ["aString"],
source: unescape('%3D%20aString%0A%09aString%20class%20%3D%20self%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09%3Creturn%20String%28self%29%20%3D%3D%20aString%3E'),
messageSends: ["ifFalse:", unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return self.length;
return self;},
args: [],
source: unescape('size%0A%09%3Creturn%20self.length%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (anIndex){
var self=this;
return self[anIndex - 1];
return self;},
args: ["anIndex"],
source: unescape('at%3A%20anIndex%0A%09%3Creturn%20self%5BanIndex%20-%201%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (anIndex, anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;},
args: ["anIndex", "anObject"],
source: unescape('at%3A%20anIndex%20put%3A%20anObject%0A%20%20%20%20%09self%20errorReadOnly'),
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
category: 'accessing',
fn: function (anIndex, aBlock){
var self=this;
(($receiver = smalltalk.send(self, "_at_", [anIndex])) == nil || $receiver == undefined) ? (function(){return aBlock;})() : $receiver;
return self;},
args: ["anIndex", "aBlock"],
source: unescape('at%3A%20anIndex%20ifAbsent%3A%20aBlock%0A%20%20%20%20%09%28self%20at%3A%20anIndex%29%20ifNil%3A%20%5BaBlock%5D'),
messageSends: ["ifNil:", "at:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_escaped'),
smalltalk.method({
selector: unescape('escaped'),
category: 'accessing',
fn: function (){
var self=this;
return escape(self);
return self;},
args: [],
source: unescape('escaped%0A%09%3Creturn%20escape%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_unescaped'),
smalltalk.method({
selector: unescape('unescaped'),
category: 'accessing',
fn: function (){
var self=this;
return unescape(self);
return self;},
args: [],
source: unescape('unescaped%0A%09%3Creturn%20unescape%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;},
args: ["anObject"],
source: unescape('add%3A%20anObject%0A%20%20%20%20%09self%20errorReadOnly'),
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__comma'),
smalltalk.method({
selector: unescape('%2C'),
category: 'copying',
fn: function (aString){
var self=this;
return self + aString;
return self;},
args: ["aString"],
source: unescape('%2C%20aString%0A%09%3Creturn%20self%20+%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_copyFrom_to_'),
smalltalk.method({
selector: unescape('copyFrom%3Ato%3A'),
category: 'copying',
fn: function (anIndex, anotherIndex){
var self=this;
return self.substring(anIndex - 1, anotherIndex);
return self;},
args: ["anIndex", "anotherIndex"],
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09%3Creturn%20self.substring%28anIndex%20-%201%2C%20anotherIndex%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
category: 'copying',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [self]);
return self;},
args: [],
source: unescape('shallowCopy%0A%20%20%20%20%09%5Eself%20class%20fromString%3A%20self'),
messageSends: ["fromString:", "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
category: 'copying',
fn: function (){
var self=this;
return smalltalk.send(self, "_shallowCopy", []);
return self;},
args: [],
source: unescape('deepCopy%0A%20%20%20%20%09%5Eself%20shallowCopy'),
messageSends: ["shallowCopy"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asSelector'),
smalltalk.method({
selector: unescape('asSelector'),
category: 'converting',
fn: function (){
var self=this;
var selector=nil;
selector=smalltalk.send("_", "__comma", [self]);
selector=smalltalk.send(selector, "_replace_with_", [":", "_"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%5B+%5D"), "_plus"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("-"), "_minus"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%5B*%5D"), "_star"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%5B/%5D"), "_slash"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%3E"), "_gt"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%3C"), "_lt"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%3D"), "_eq"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%2C"), "_comma"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%5B@%5D"), "_at"]);
return selector;
return self;},
args: [],
source: unescape('asSelector%0A%09%22If%20you%20change%20this%20method%2C%20change%20smalltalk.convertSelector%20too%20%28see%20js/boot.js%20file%29%22%0A%0A%09%7C%20selector%20%7C%0A%09selector%20%3A%3D%20%27_%27%2C%20self.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3A%27%20with%3A%20%27_%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B+%5D%27%20with%3A%20%27_plus%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27-%27%20with%3A%20%27_minus%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B*%5D%27%20with%3A%20%27_star%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B/%5D%27%20with%3A%20%27_slash%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3E%27%20with%3A%20%27_gt%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3C%27%20with%3A%20%27_lt%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3D%27%20with%3A%20%27_eq%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%2C%27%20with%3A%20%27_comma%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B@%5D%27%20with%3A%20%27_at%27.%0A%09%5Eselector'),
messageSends: [unescape("%2C"), "replace:with:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
category: 'converting',
fn: function (){
var self=this;

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "unescape(\"" + escape(self) + "\")";
		else
			return "\"" + self + "\"";
	;
return self;},
args: [],
source: unescape('asJavascript%0A%09%3C%0A%09%09if%28self.search%28/%5E%5Ba-zA-Z0-9_%3A.%24%20%5D*%24/%29%20%3D%3D%20-1%29%0A%09%09%09return%20%22unescape%28%5C%22%22%20+%20escape%28self%29%20+%20%22%5C%22%29%22%3B%0A%09%09else%0A%09%09%09return%20%22%5C%22%22%20+%20self%20+%20%22%5C%22%22%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_replace_with_'),
smalltalk.method({
selector: unescape('replace%3Awith%3A'),
category: 'regular expressions',
fn: function (aString, anotherString){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [aString, "g"]), anotherString]);
return self;},
args: ["aString", "anotherString"],
source: unescape('replace%3A%20aString%20with%3A%20anotherString%0A%20%20%20%20%09%5Eself%20replaceRegexp%3A%20%28RegularExpression%20fromString%3A%20aString%20flag%3A%20%27g%27%29%20with%3A%20anotherString'),
messageSends: ["replaceRegexp:with:", "fromString:flag:"],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_replaceRegexp_with_'),
smalltalk.method({
selector: unescape('replaceRegexp%3Awith%3A'),
category: 'regular expressions',
fn: function (aRegexp, aString){
var self=this;
return self.replace(aRegexp, aString);
return self;},
args: ["aRegexp", "aString"],
source: unescape('replaceRegexp%3A%20aRegexp%20with%3A%20aString%0A%09%3Creturn%20self.replace%28aRegexp%2C%20aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_tokenize_'),
smalltalk.method({
selector: unescape('tokenize%3A'),
category: 'converting',
fn: function (aString){
var self=this;
return self.split(aString);
return self;},
args: ["aString"],
source: unescape('tokenize%3A%20aString%0A%09%3Creturn%20self.split%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_match_'),
smalltalk.method({
selector: unescape('match%3A'),
category: 'regular expressions',
fn: function (aRegexp){
var self=this;
return self.search(aRegexp) != -1;
return self;},
args: ["aRegexp"],
source: unescape('match%3A%20aRegexp%0A%09%3Creturn%20self.search%28aRegexp%29%20%21%3D%20-1%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('asString%0A%20%20%20%20%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asNumber'),
smalltalk.method({
selector: unescape('asNumber'),
category: 'converting',
fn: function (){
var self=this;
return Number(self);
return self;},
args: [],
source: unescape('asNumber%0A%09%3Creturn%20Number%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_errorReadOnly'),
smalltalk.method({
selector: unescape('errorReadOnly'),
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", [unescape("Object%20is%20read-only")]);
return self;},
args: [],
source: unescape('errorReadOnly%0A%20%20%20%20%09self%20error%3A%20%27Object%20is%20read-only%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [self]), "__comma", [unescape("%27")]);
return self;},
args: [],
source: unescape('printString%0A%20%20%20%20%09%5E%27%27%27%27%2C%20self%2C%20%27%27%27%27'),
messageSends: [unescape("%2C")],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_printNl'),
smalltalk.method({
selector: unescape('printNl'),
category: 'printing',
fn: function (){
var self=this;
console.log(self);
return self;},
args: [],
source: unescape('printNl%0A%09%3Cconsole.log%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_isString'),
smalltalk.method({
selector: unescape('isString'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isString%0A%20%20%20%20%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__gt'),
smalltalk.method({
selector: unescape('%3E'),
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) > aString;
return self;},
args: ["aString"],
source: unescape('%3E%20aString%0A%09%3Creturn%20String%28self%29%20%3E%3E%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__lt'),
smalltalk.method({
selector: unescape('%3C'),
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) < aString;
return self;},
args: ["aString"],
source: unescape('%3C%20aString%0A%09%3Creturn%20String%28self%29%20%3C%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__gt_eq'),
smalltalk.method({
selector: unescape('%3E%3D'),
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) >= aString;
return self;},
args: ["aString"],
source: unescape('%3E%3D%20aString%0A%09%3Creturn%20String%28self%29%20%3E%3E%3D%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__lt_eq'),
smalltalk.method({
selector: unescape('%3C%3D'),
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) <= aString;
return self;},
args: ["aString"],
source: unescape('%3C%3D%20aString%0A%09%3Creturn%20String%28self%29%20%3C%3D%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;},
args: ["anObject"],
source: unescape('remove%3A%20anObject%0A%09self%20errorReadOnly'),
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('asJSONObject%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimLeft_'),
smalltalk.method({
selector: unescape('trimLeft%3A'),
category: 'regular expressions',
fn: function (separators){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [smalltalk.send(smalltalk.send(unescape("%5E%5B"), "__comma", [separators]), "__comma", [unescape("%5D+")]), "g"]), ""]);
return self;},
args: ["separators"],
source: unescape('trimLeft%3A%20separators%0A%0A%20%20%20%20%09%5Eself%20replaceRegexp%3A%20%28RegularExpression%20fromString%3A%20%27%5E%5B%27%2C%20separators%2C%20%27%5D+%27%20flag%3A%20%27g%27%29%20with%3A%20%27%27'),
messageSends: ["replaceRegexp:with:", "fromString:flag:", unescape("%2C")],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimRight_'),
smalltalk.method({
selector: unescape('trimRight%3A'),
category: 'regular expressions',
fn: function (separators){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [smalltalk.send(smalltalk.send(unescape("%5B"), "__comma", [separators]), "__comma", [unescape("%5D+%24")]), "g"]), ""]);
return self;},
args: ["separators"],
source: unescape('trimRight%3A%20separators%0A%0A%20%20%20%20%09%5Eself%20replaceRegexp%3A%20%28RegularExpression%20fromString%3A%20%27%5B%27%2C%20separators%2C%20%27%5D+%24%27%20flag%3A%20%27g%27%29%20with%3A%20%27%27'),
messageSends: ["replaceRegexp:with:", "fromString:flag:", unescape("%2C")],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimLeft'),
smalltalk.method({
selector: unescape('trimLeft'),
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.send(self, "_trimLeft_", [unescape("%5Cs")]);
return self;},
args: [],
source: unescape('trimLeft%0A%09%5Eself%20trimLeft%3A%20%27%5Cs%27'),
messageSends: ["trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimRight'),
smalltalk.method({
selector: unescape('trimRight'),
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.send(self, "_trimRight_", [unescape("%5Cs")]);
return self;},
args: [],
source: unescape('trimRight%0A%09%5Eself%20trimRight%3A%20%27%5Cs%27'),
messageSends: ["trimRight:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimBoth'),
smalltalk.method({
selector: unescape('trimBoth'),
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.send(self, "_trimBoth_", [unescape("%5Cs")]);
return self;},
args: [],
source: unescape('trimBoth%0A%09%5Eself%20trimBoth%3A%20%27%5Cs%27'),
messageSends: ["trimBoth:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimBoth_'),
smalltalk.method({
selector: unescape('trimBoth%3A'),
category: 'regular expressions',
fn: function (separators){
var self=this;
return smalltalk.send(smalltalk.send(self, "_trimLeft_", [separators]), "_trimRight_", [separators]);
return self;},
args: ["separators"],
source: unescape('trimBoth%3A%20separators%0A%0A%20%20%20%20%09%5E%28self%20trimLeft%3A%20separators%29%20trimRight%3A%20separators'),
messageSends: ["trimRight:", "trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asLowercase'),
smalltalk.method({
selector: unescape('asLowercase'),
category: 'converting',
fn: function (){
var self=this;
return self.toLowerCase();
return self;},
args: [],
source: unescape('asLowercase%0A%09%3Creturn%20self.toLowerCase%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asUppercase'),
smalltalk.method({
selector: unescape('asUppercase'),
category: 'converting',
fn: function (){
var self=this;
return self.toUpperCase();
return self;},
args: [],
source: unescape('asUppercase%0A%09%3Creturn%20self.toUpperCase%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_join_'),
smalltalk.method({
selector: unescape('join%3A'),
category: 'split join',
fn: function (aCollection){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){return smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(each, "_asString", [])]);}), (function(){return smalltalk.send(stream, "_nextPutAll_", [self]);})]);})]);
return self;},
args: ["aCollection"],
source: unescape('join%3A%20aCollection%20%0A%09%5E%20String%0A%09%09streamContents%3A%20%5B%3Astream%20%7C%20aCollection%0A%09%09%09%09do%3A%20%5B%3Aeach%20%7C%20stream%20nextPutAll%3A%20each%20asString%5D%20%0A%09%09%09%09separatedBy%3A%20%5Bstream%20nextPutAll%3A%20self%5D%5D'),
messageSends: ["streamContents:", "do:separatedBy:", "nextPutAll:", "asString"],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_includesSubString_'),
smalltalk.method({
selector: unescape('includesSubString%3A'),
category: 'testing',
fn: function (subString){
var self=this;
 return self.indexOf(subString) != -1 ;
return self;},
args: ["subString"],
source: unescape('includesSubString%3A%20subString%0A%09%3C%20return%20self.indexOf%28subString%29%20%21%3D%20-1%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asciiValue'),
smalltalk.method({
selector: unescape('asciiValue'),
category: 'accessing',
fn: function (){
var self=this;
return self.charCodeAt(0);;
return self;},
args: [],
source: unescape('asciiValue%0A%09%3Creturn%20self.charCodeAt%280%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_lineIndicesDo_'),
smalltalk.method({
selector: unescape('lineIndicesDo%3A'),
category: 'split join',
fn: function (aBlock){
var self=this;
try{var cr=nil;
var lf=nil;
var start=nil;
var sz=nil;
var nextLF=nil;
var nextCR=nil;
start=(1);
sz=smalltalk.send(self, "_size", []);
cr=smalltalk.send((smalltalk.String || String), "_cr", []);
nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, (1)]);
lf=smalltalk.send((smalltalk.String || String), "_lf", []);
nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, (1)]);
(function(){while((function(){return ((($receiver = start).klass === smalltalk.Number) ? $receiver <=sz : smalltalk.send($receiver, "__lt_eq", [sz]));})()) {(function(){((($receiver = smalltalk.send(smalltalk.send(nextLF, "__eq", [(0)]), "_and_", [(function(){return smalltalk.send(nextCR, "__eq", [(0)]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, sz, sz]);return (function(){throw({name: 'stReturn', selector: '_lineIndicesDo_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, sz, sz]);return (function(){throw({name: 'stReturn', selector: '_lineIndicesDo_', fn: function(){return self}})})();})]));return ((($receiver = smalltalk.send(smalltalk.send(nextCR, "__eq", [(0)]), "_or_", [(function(){return smalltalk.send((0) < nextLF, "_and_", [(function(){return ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver <nextCR : smalltalk.send($receiver, "__lt", [nextCR]));})]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);})() : (function(){return ((($receiver = smalltalk.send((1) + nextCR, "__eq", [nextLF])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);})() : (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);start=(1) + nextCR;return nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);}), (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);start=(1) + nextCR;return nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);}), (function(){return ((($receiver = smalltalk.send((1) + nextCR, "__eq", [nextLF])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);})() : (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);start=(1) + nextCR;return nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);}), (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);start=(1) + nextCR;return nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);})]));})]));})()}})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_lineIndicesDo_'){return e.fn()} throw(e)}},
args: ["aBlock"],
source: unescape('lineIndicesDo%3A%20aBlock%0A%09%22execute%20aBlock%20with%203%20arguments%20for%20each%20line%3A%0A%09-%20start%20index%20of%20line%0A%09-%20end%20index%20of%20line%20without%20line%20delimiter%0A%09-%20end%20index%20of%20line%20including%20line%20delimiter%28s%29%20CR%2C%20LF%20or%20CRLF%22%0A%09%0A%09%7C%20cr%20lf%20start%20sz%20nextLF%20nextCR%20%7C%0A%09start%20%3A%3D%201.%0A%09sz%20%3A%3D%20self%20size.%0A%09cr%20%3A%3D%20String%20cr.%0A%09nextCR%20%3A%3D%20self%20indexOf%3A%20cr%20startingAt%3A%201.%0A%09lf%20%3A%3D%20String%20lf.%0A%09nextLF%20%3A%3D%20self%20indexOf%3A%20lf%20startingAt%3A%201.%0A%09%5B%20start%20%3C%3D%20sz%20%5D%20whileTrue%3A%20%5B%0A%09%09%28nextLF%20%3D%200%20and%3A%20%5B%20nextCR%20%3D%200%20%5D%29%0A%09%09%09ifTrue%3A%20%5B%20%22No%20more%20CR%2C%20nor%20LF%2C%20the%20string%20is%20over%22%0A%09%09%09%09%09aBlock%20value%3A%20start%20value%3A%20sz%20value%3A%20sz.%0A%09%09%09%09%09%5Eself%20%5D.%0A%09%09%28nextCR%20%3D%200%20or%3A%20%5B%200%20%3C%20nextLF%20and%3A%20%5B%20nextLF%20%3C%20nextCR%20%5D%20%5D%29%0A%09%09%09ifTrue%3A%20%5B%20%22Found%20a%20LF%22%0A%09%09%09%09%09aBlock%20value%3A%20start%20value%3A%20nextLF%20-%201%20value%3A%20nextLF.%0A%09%09%09%09%09start%20%3A%3D%201%20+%20nextLF.%0A%09%09%09%09%09nextLF%20%3A%3D%20self%20indexOf%3A%20lf%20startingAt%3A%20start%20%5D%0A%09%09%09ifFalse%3A%20%5B%201%20+%20nextCR%20%3D%20nextLF%0A%09%09%09%09ifTrue%3A%20%5B%20%22Found%20a%20CR-LF%20pair%22%0A%09%09%09%09%09aBlock%20value%3A%20start%20value%3A%20nextCR%20-%201%20value%3A%20nextLF.%0A%09%09%09%09%09start%20%3A%3D%201%20+%20nextLF.%0A%09%09%09%09%09nextCR%20%3A%3D%20self%20indexOf%3A%20cr%20startingAt%3A%20start.%0A%09%09%09%09%09nextLF%20%3A%3D%20self%20indexOf%3A%20lf%20startingAt%3A%20start%20%5D%0A%09%09%09%09ifFalse%3A%20%5B%20%22Found%20a%20CR%22%0A%09%09%09%09%09aBlock%20value%3A%20start%20value%3A%20nextCR%20-%201%20value%3A%20nextCR.%0A%09%09%09%09%09start%20%3A%3D%201%20+%20nextCR.%0A%09%09%09%09%09nextCR%20%3A%3D%20self%20indexOf%3A%20cr%20startingAt%3A%20start%20%5D%5D%5D'),
messageSends: ["size", "cr", "indexOf:startingAt:", "lf", "whileTrue:", unescape("%3C%3D"), "ifTrue:", "and:", unescape("%3D"), "value:value:value:", "ifTrue:ifFalse:", "or:", unescape("%3C"), unescape("-"), unescape("+")],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_linesDo_'),
smalltalk.method({
selector: unescape('linesDo%3A'),
category: 'split join',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_lineIndicesDo_", [(function(start, endWithoutDelimiters, end){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])]);})]);
return self;},
args: ["aBlock"],
source: unescape('linesDo%3A%20aBlock%0A%09%22Execute%20aBlock%20with%20each%20line%20in%20this%20string.%20The%20terminating%20line%0A%09delimiters%20CR%2C%20LF%20or%20CRLF%20pairs%20are%20not%20included%20in%20what%20is%20passed%20to%20aBlock%22%0A%0A%09self%20lineIndicesDo%3A%20%5B%3Astart%20%3AendWithoutDelimiters%20%3Aend%20%7C%0A%09%09aBlock%20value%3A%20%28self%20copyFrom%3A%20start%20to%3A%20endWithoutDelimiters%29%5D'),
messageSends: ["lineIndicesDo:", "value:", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_lines'),
smalltalk.method({
selector: unescape('lines'),
category: 'split join',
fn: function (){
var self=this;
var lines=nil;
lines=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(self, "_linesDo_", [(function(aLine){return smalltalk.send(lines, "_add_", [aLine]);})]);
return lines;
return self;},
args: [],
source: unescape('lines%0A%09%22Answer%20an%20array%20of%20lines%20composing%20this%20receiver%20without%20the%20line%20ending%20delimiters.%22%0A%0A%09%7C%20lines%20%7C%0A%09lines%20%3A%3D%20Array%20new.%0A%09self%20linesDo%3A%20%5B%3AaLine%20%7C%20lines%20add%3A%20aLine%5D.%0A%09%5Elines'),
messageSends: ["new", "linesDo:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_lineNumber_'),
smalltalk.method({
selector: unescape('lineNumber%3A'),
category: 'split join',
fn: function (anIndex){
var self=this;
try{var lineCount=nil;
lineCount=(0);
smalltalk.send(self, "_lineIndicesDo_", [(function(start, endWithoutDelimiters, end){return ((($receiver = smalltalk.send(lineCount=((($receiver = lineCount).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])), "__eq", [anIndex])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_lineNumber_', fn: function(){return smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_lineNumber_', fn: function(){return smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_lineNumber_', fn: function(){return nil}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_lineNumber_'){return e.fn()} throw(e)}},
args: ["anIndex"],
source: unescape('lineNumber%3A%20anIndex%0A%09%22Answer%20a%20string%20containing%20the%20characters%20in%20the%20given%20line%20number.%22%0A%0A%09%7C%20lineCount%20%7C%0A%09lineCount%20%3A%3D%200.%0A%09self%20lineIndicesDo%3A%20%5B%3Astart%20%3AendWithoutDelimiters%20%3Aend%20%7C%0A%09%09%28lineCount%20%3A%3D%20lineCount%20+%201%29%20%3D%20anIndex%20ifTrue%3A%20%5B%5Eself%20copyFrom%3A%20start%20to%3A%20endWithoutDelimiters%5D%5D.%0A%09%5Enil'),
messageSends: ["lineIndicesDo:", "ifTrue:", unescape("%3D"), unescape("+"), "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_reversed'),
smalltalk.method({
selector: unescape('reversed'),
category: 'converting',
fn: function (){
var self=this;
return self.split("").reverse().join("");
return self;},
args: [],
source: unescape('reversed%0A%09%3Creturn%20self.split%28%22%22%29.reverse%28%29.join%28%22%22%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__eq_eq'),
smalltalk.method({
selector: unescape('%3D%3D'),
category: 'comparing',
fn: function (aString){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aString, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})]));
return String(self) === String(aString);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq_eq'){return e.fn()} throw(e)}},
args: ["aString"],
source: unescape('%3D%3D%20aString%0A%09aString%20class%20%3D%20self%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09%3Creturn%20String%28self%29%20%3D%3D%3D%20String%28aString%29%3E'),
messageSends: ["ifFalse:", unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asJavaScriptSelector'),
smalltalk.method({
selector: unescape('asJavaScriptSelector'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_asSelector", []), "_replace_with_", [unescape("%5E_"), ""]), "_replace_with_", [unescape("_.*"), ""]);
return self;},
args: [],
source: unescape('asJavaScriptSelector%0A%09%5E%28self%20asSelector%20replace%3A%20%27%5E_%27%20with%3A%20%27%27%29%20replace%3A%20%27_.*%27%20with%3A%20%27%27.'),
messageSends: ["replace:with:", "asSelector"],
referencedClasses: []
}),
smalltalk.String);


smalltalk.addMethod(
unescape('_streamClass'),
smalltalk.method({
selector: unescape('streamClass'),
category: 'accessing',
fn: function (){
var self=this;
return (smalltalk.StringStream || StringStream);
return self;},
args: [],
source: unescape('streamClass%0A%09%20%20%20%20%5EStringStream'),
messageSends: [],
referencedClasses: ["StringStream"]
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_fromString_'),
smalltalk.method({
selector: unescape('fromString%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
return new self.fn(aString);
return self;},
args: ["aString"],
source: unescape('fromString%3A%20aString%0A%09%20%20%20%20%3Creturn%20new%20self.fn%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
category: 'accessing',
fn: function (){
var self=this;
return '\r';
return self;},
args: [],
source: unescape('cr%0A%09%3Creturn%20%27%5Cr%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_lf'),
smalltalk.method({
selector: unescape('lf'),
category: 'accessing',
fn: function (){
var self=this;
return '\n';
return self;},
args: [],
source: unescape('lf%0A%09%3Creturn%20%27%5Cn%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_space'),
smalltalk.method({
selector: unescape('space'),
category: 'accessing',
fn: function (){
var self=this;
return ' ';
return self;},
args: [],
source: unescape('space%0A%09%3Creturn%20%27%20%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_tab'),
smalltalk.method({
selector: unescape('tab'),
category: 'accessing',
fn: function (){
var self=this;
return '\t';
return self;},
args: [],
source: unescape('tab%0A%09%3Creturn%20%27%5Ct%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_crlf'),
smalltalk.method({
selector: unescape('crlf'),
category: 'accessing',
fn: function (){
var self=this;
return '\r\n';
return self;},
args: [],
source: unescape('crlf%0A%09%3Creturn%20%27%5Cr%5Cn%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_streamContents_'),
smalltalk.method({
selector: unescape('streamContents%3A'),
category: 'instance creation',
fn: function (blockWithArg){
var self=this;
var stream=nil;
stream=smalltalk.send(smalltalk.send(self, "_streamClass", []), "_on_", [smalltalk.send((smalltalk.String || String), "_new", [])]);
smalltalk.send(blockWithArg, "_value_", [stream]);
return smalltalk.send(stream, "_contents", []);
return self;},
args: ["blockWithArg"],
source: unescape('streamContents%3A%20blockWithArg%0A%09%7Cstream%7C%0A%09stream%20%3A%3D%20%28self%20streamClass%20on%3A%20String%20new%29.%0A%09blockWithArg%20value%3A%20stream.%0A%09%5E%20stream%20contents'),
messageSends: ["on:", "streamClass", "new", "value:", "contents"],
referencedClasses: ["String"]
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_value_'),
smalltalk.method({
selector: unescape('value%3A'),
category: 'instance creation',
fn: function (aUTFCharCode){
var self=this;
return String.fromCharCode(aUTFCharCode);;
return self;},
args: ["aUTFCharCode"],
source: unescape('value%3A%20aUTFCharCode%0A%0A%09%3Creturn%20String.fromCharCode%28aUTFCharCode%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);


smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel');
smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return self.length;
return self;},
args: [],
source: unescape('size%0A%09%3Creturn%20self.length%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (anIndex, anObject){
var self=this;
return self[anIndex - 1] = anObject;
return self;},
args: ["anIndex", "anObject"],
source: unescape('at%3A%20anIndex%20put%3A%20anObject%0A%09%3Creturn%20self%5BanIndex%20-%201%5D%20%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
category: 'accessing',
fn: function (anIndex, aBlock){
var self=this;

	    var value = self[anIndex - 1];
	    if(value === undefined) {
		return aBlock();
	    } else {
		return value;
	    }
	;
return self;},
args: ["anIndex", "aBlock"],
source: unescape('at%3A%20anIndex%20ifAbsent%3A%20aBlock%0A%09%3C%0A%09%20%20%20%20var%20value%20%3D%20self%5BanIndex%20-%201%5D%3B%0A%09%20%20%20%20if%28value%20%3D%3D%3D%20undefined%29%20%7B%0A%09%09return%20aBlock%28%29%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20value%3B%0A%09%20%20%20%20%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'adding/removing',
fn: function (anObject){
var self=this;
self.push(anObject); return anObject;;
return self;},
args: ["anObject"],
source: unescape('add%3A%20anObject%0A%09%3Cself.push%28anObject%29%3B%20return%20anObject%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
category: 'copying',
fn: function (){
var self=this;
var newCollection=nil;
newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [each]);})]);
return newCollection;
return self;},
args: [],
source: unescape('shallowCopy%0A%09%7C%20newCollection%20%7C%0A%09newCollection%20%3A%3D%20self%20class%20new.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%20newCollection%20add%3A%20each%5D.%0A%09%5EnewCollection'),
messageSends: ["new", "class", "do:", "add:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
category: 'copying',
fn: function (){
var self=this;
var newCollection=nil;
newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [smalltalk.send(each, "_deepCopy", [])]);})]);
return newCollection;
return self;},
args: [],
source: unescape('deepCopy%0A%09%7C%20newCollection%20%7C%0A%09newCollection%20%3A%3D%20self%20class%20new.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%20newCollection%20add%3A%20each%20deepCopy%5D.%0A%09%5EnewCollection'),
messageSends: ["new", "class", "do:", "add:", "deepCopy"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_copyFrom_to_'),
smalltalk.method({
selector: unescape('copyFrom%3Ato%3A'),
category: 'copying',
fn: function (anIndex, anotherIndex){
var self=this;
var array=nil;
array=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(anIndex, "_to_do_", [anotherIndex, (function(each){return smalltalk.send(array, "_add_", [smalltalk.send(self, "_at_", [each])]);})]);
return array;
return self;},
args: ["anIndex", "anotherIndex"],
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09%7C%20array%20%7C%0A%09array%20%3A%3D%20self%20class%20new.%0A%09anIndex%20to%3A%20anotherIndex%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20array%20add%3A%20%28self%20at%3A%20each%29%5D.%0A%09%5Earray'),
messageSends: ["new", "class", "to:do:", "add:", "at:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_join_'),
smalltalk.method({
selector: unescape('join%3A'),
category: 'enumerating',
fn: function (aString){
var self=this;
return self.join(aString);
return self;},
args: ["aString"],
source: unescape('join%3A%20aString%0A%09%3Creturn%20self.join%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%5B"), "__comma", [smalltalk.send(smalltalk.send(self, "_collect_", [(function(each){return smalltalk.send(each, "_asJavascript", []);})]), "_join_", [unescape("%2C%20")])]), "__comma", [unescape("%5D")]);
return self;},
args: [],
source: unescape('asJavascript%0A%09%5E%27%5B%27%2C%20%28%28self%20collect%3A%20%5B%3Aeach%20%7C%20each%20asJavascript%5D%29%20join%3A%20%27%2C%20%27%29%2C%20%20%27%5D%27'),
messageSends: [unescape("%2C"), "join:", "collect:", "asJavascript"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sort'),
smalltalk.method({
selector: unescape('sort'),
category: 'enumerating',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicPerform_", ["sort"]);
return self;},
args: [],
source: unescape('sort%0A%20%20%20%20%5Eself%20basicPerform%3A%20%27sort%27'),
messageSends: ["basicPerform:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sort_'),
smalltalk.method({
selector: unescape('sort%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;

		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
return self;},
args: ["aBlock"],
source: unescape('sort%3A%20aBlock%0A%09%3C%0A%09%09return%20self.sort%28function%28a%2C%20b%29%20%7B%0A%09%09%09if%28aBlock%28a%2Cb%29%29%20%7Breturn%20-1%7D%20else%20%7Breturn%201%7D%0A%09%09%7D%29%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'adding/removing',
fn: function (anObject){
var self=this;

		for(var i=0;i<self.length;i++) {
			if(self[i] == anObject) {
				self.splice(i,1);
				break;
			}
		}
	;
return self;},
args: ["anObject"],
source: unescape('remove%3A%20anObject%0A%09%3C%0A%09%09for%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%20%7B%0A%09%09%09if%28self%5Bi%5D%20%3D%3D%20anObject%29%20%7B%0A%09%09%09%09self.splice%28i%2C1%29%3B%0A%09%09%09%09break%3B%0A%09%09%09%7D%0A%09%09%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sorted'),
smalltalk.method({
selector: unescape('sorted'),
category: 'enumerating',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort", []);
return self;},
args: [],
source: unescape('sorted%0A%09%5Eself%20copy%20sort'),
messageSends: ["sort", "copy"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sorted_'),
smalltalk.method({
selector: unescape('sorted%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('sorted%3A%20aBlock%0A%09%5Eself%20copy%20sort%3A%20aBlock'),
messageSends: ["sort:", "copy"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_collect_", [(function(each){return smalltalk.send(each, "_asJSONObject", []);})]);
return self;},
args: [],
source: unescape('asJSONObject%0A%09%5Eself%20collect%3A%20%5B%3Aeach%20%7C%20each%20asJSONObject%5D'),
messageSends: ["collect:", "asJSONObject"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_removeFrom_to_'),
smalltalk.method({
selector: unescape('removeFrom%3Ato%3A'),
category: 'adding/removing',
fn: function (aNumber, anotherNumber){
var self=this;
self.splice(aNumber - 1,anotherNumber - 1);
return self;},
args: ["aNumber", "anotherNumber"],
source: unescape('removeFrom%3A%20aNumber%20to%3A%20anotherNumber%0A%09%3Cself.splice%28aNumber%20-%201%2CanotherNumber%20-%201%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'enumerating',
fn: function (){
var self=this;
var str=nil;
str=smalltalk.send("", "_writeStream", []);
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.SequenceableCollection), "__comma", [unescape("%20%28")])]);
smalltalk.send(self, "_do_separatedBy_", [(function(each){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(each, "_printString", [])]);}), (function(){return smalltalk.send(str, "_nextPutAll_", [" "]);})]);
smalltalk.send(str, "_nextPutAll_", [unescape("%29")]);
return smalltalk.send(str, "_contents", []);
return self;},
args: [],
source: unescape('printString%0A%09%7C%20str%20%7C%0A%09str%20%3A%3D%20%27%27%20writeStream.%0A%09str%20nextPutAll%3A%20super%20printString%2C%20%27%20%28%27.%0A%09self%20%0A%09%09do%3A%20%5B%3Aeach%20%7C%20str%20nextPutAll%3A%20each%20printString%5D%0A%09%09separatedBy%3A%20%5Bstr%20nextPutAll%3A%20%27%20%27%5D.%0A%09str%20nextPutAll%3A%20%27%29%27.%0A%09%5Estr%20contents'),
messageSends: ["writeStream", "nextPutAll:", unescape("%2C"), "printString", "do:separatedBy:", "contents"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_reversed'),
smalltalk.method({
selector: unescape('reversed'),
category: 'converting',
fn: function (){
var self=this;
return self._copy().reverse();
return self;},
args: [],
source: unescape('reversed%0A%09%3Creturn%20self._copy%28%29.reverse%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (aCollection){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aCollection, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [smalltalk.send(aCollection, "_size", [])]);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
smalltalk.send(self, "_withIndexDo_", [(function(each, i){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_at_", [i]), "__eq", [each])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}},
args: ["aCollection"],
source: unescape('%3D%20aCollection%0A%09%28self%20class%20%3D%20aCollection%20class%20and%3A%20%5B%0A%20%20%20%20%20%20%20%20%09self%20size%20%3D%20aCollection%20size%5D%29%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09self%20withIndexDo%3A%20%5B%3Aeach%20%3Ai%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28aCollection%20at%3A%20i%29%20%3D%20each%20ifFalse%3A%20%5B%5Efalse%5D%5D.%0A%09%5Etrue'),
messageSends: ["ifFalse:", "and:", unescape("%3D"), "class", "size", "withIndexDo:", "at:"],
referencedClasses: []
}),
smalltalk.Array);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_compile_'),
smalltalk.method({
selector: unescape('compile%3A'),
category: 'evaluating',
fn: function (aString){
var self=this;
return self.compile(aString);
return self;},
args: ["aString"],
source: unescape('compile%3A%20aString%0A%09%3Creturn%20self.compile%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
unescape('_exec_'),
smalltalk.method({
selector: unescape('exec%3A'),
category: 'evaluating',
fn: function (aString){
var self=this;
return self.exec(aString) || nil;
return self;},
args: ["aString"],
source: unescape('exec%3A%20aString%0A%09%3Creturn%20self.exec%28aString%29%20%7C%7C%20nil%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
unescape('_test_'),
smalltalk.method({
selector: unescape('test%3A'),
category: 'evaluating',
fn: function (aString){
var self=this;
return self.test(aString);
return self;},
args: ["aString"],
source: unescape('test%3A%20aString%0A%09%3Creturn%20self.test%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);


smalltalk.addMethod(
unescape('_fromString_flag_'),
smalltalk.method({
selector: unescape('fromString%3Aflag%3A'),
category: 'instance creation',
fn: function (aString, anotherString){
var self=this;
return new RegExp(aString, anotherString);
return self;},
args: ["aString", "anotherString"],
source: unescape('fromString%3A%20aString%20flag%3A%20anotherString%0A%09%3Creturn%20new%20RegExp%28aString%2C%20anotherString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
unescape('_fromString_'),
smalltalk.method({
selector: unescape('fromString%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_fromString_flag_", [aString, ""]);
return self;},
args: ["aString"],
source: unescape('fromString%3A%20aString%0A%09%20%20%20%20%5Eself%20fromString%3A%20aString%20flag%3A%20%27%27'),
messageSends: ["fromString:flag:"],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel');
smalltalk.addMethod(
unescape('_messageText'),
smalltalk.method({
selector: unescape('messageText'),
category: 'accessing',
fn: function (){
var self=this;
return self['@messageText'];
return self;},
args: [],
source: unescape('messageText%0A%09%5EmessageText'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_messageText_'),
smalltalk.method({
selector: unescape('messageText%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@messageText']=aString;
return self;},
args: ["aString"],
source: unescape('messageText%3A%20aString%0A%09messageText%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_signal'),
smalltalk.method({
selector: unescape('signal'),
category: 'signaling',
fn: function (){
var self=this;
self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self);
return self;},
args: [],
source: unescape('signal%0A%09%3Cself.context%20%3D%20smalltalk.getThisContext%28%29%3B%20self.smalltalkError%20%3D%20true%3B%20throw%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_context'),
smalltalk.method({
selector: unescape('context'),
category: 'accessing',
fn: function (){
var self=this;
return self.context;
return self;},
args: [],
source: unescape('context%0A%09%3Creturn%20self.context%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);


smalltalk.addMethod(
unescape('_signal_'),
smalltalk.method({
selector: unescape('signal%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString"],
source: unescape('signal%3A%20aString%0A%09%20%20%20%20%5Eself%20new%0A%09%09messageText%3A%20aString%3B%0A%09%09signal'),
messageSends: ["messageText:", "signal", "new"],
referencedClasses: []
}),
smalltalk.Error.klass);


smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
category: 'accessing',
fn: function (){
var self=this;
return self.receiver;
return self;},
args: [],
source: unescape('receiver%0A%09%3Creturn%20self.receiver%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.convertSelector(self.selector);
return self;},
args: [],
source: unescape('selector%0A%09%3Creturn%20smalltalk.convertSelector%28self.selector%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_home'),
smalltalk.method({
selector: unescape('home'),
category: 'accessing',
fn: function (){
var self=this;
return self.homeContext;
return self;},
args: [],
source: unescape('home%0A%09%3Creturn%20self.homeContext%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_temps'),
smalltalk.method({
selector: unescape('temps'),
category: 'accessing',
fn: function (){
var self=this;
return self.temps;
return self;},
args: [],
source: unescape('temps%0A%09%3Creturn%20self.temps%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.Object), "__comma", [unescape("%28")]), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [unescape("%29")]);
return self;},
args: [],
source: unescape('printString%0A%09%5Esuper%20printString%2C%20%27%28%27%2C%20self%20asString%2C%20%27%29%27'),
messageSends: [unescape("%2C"), "printString", "asString"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_class", []), "_printString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(self, "_selector", [])]);
return self;},
args: [],
source: unescape('asString%0A%09%5Eself%20receiver%20class%20printString%2C%20%27%20%3E%3E%20%27%2C%20self%20selector'),
messageSends: [unescape("%2C"), "printString", "class", "receiver", "selector"],
referencedClasses: []
}),
smalltalk.MethodContext);



smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (anAssociation){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(anAssociation, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_key", []), "__eq", [smalltalk.send(anAssociation, "_key", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_value", []), "__eq", [smalltalk.send(anAssociation, "_value", [])]);})]);})]);
return self;},
args: ["anAssociation"],
source: unescape('%3D%20anAssociation%0A%09%5Eself%20class%20%3D%20anAssociation%20class%20and%3A%20%5B%0A%09%20%20%20%20self%20key%20%3D%20anAssociation%20key%20and%3A%20%5B%0A%09%09self%20value%20%3D%20anAssociation%20value%5D%5D'),
messageSends: ["and:", unescape("%3D"), "class", "key", "value"],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_key_'),
smalltalk.method({
selector: unescape('key%3A'),
category: 'accessing',
fn: function (aKey){
var self=this;
self['@key']=aKey;
return self;},
args: ["aKey"],
source: unescape('key%3A%20aKey%0A%09key%20%3A%3D%20aKey'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_key'),
smalltalk.method({
selector: unescape('key'),
category: 'accessing',
fn: function (){
var self=this;
return self['@key'];
return self;},
args: [],
source: unescape('key%0A%09%5Ekey'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_value_'),
smalltalk.method({
selector: unescape('value%3A'),
category: 'accessing',
fn: function (aValue){
var self=this;
self['@value']=aValue;
return self;},
args: ["aValue"],
source: unescape('value%3A%20aValue%0A%09value%20%3A%3D%20aValue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_value'),
smalltalk.method({
selector: unescape('value'),
category: 'accessing',
fn: function (){
var self=this;
return self['@value'];
return self;},
args: [],
source: unescape('value%0A%09%5Evalue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_storeOn_'),
smalltalk.method({
selector: unescape('storeOn%3A'),
category: 'comparing',
fn: function (aStream){
var self=this;
smalltalk.send(self['@key'], "_storeOn_", [aStream]);
smalltalk.send(aStream, "_nextPutAll_", [unescape("-%3E")]);
smalltalk.send(self['@value'], "_storeOn_", [aStream]);
return self;},
args: ["aStream"],
source: unescape('storeOn%3A%20aStream%0A%09%22Store%20in%20the%20format%20%28key-%3Evalue%29%22%0A%0A%09%22aStream%20nextPutAll%3A%20%27%28%27.%22%0A%09key%20storeOn%3A%20aStream.%0A%09aStream%20nextPutAll%3A%20%27-%3E%27.%0A%09value%20storeOn%3A%20aStream.%0A%09%22aStream%20nextPutAll%3A%20%27%29%27%22'),
messageSends: ["storeOn:", "nextPutAll:"],
referencedClasses: []
}),
smalltalk.Association);


smalltalk.addMethod(
unescape('_key_value_'),
smalltalk.method({
selector: unescape('key%3Avalue%3A'),
category: 'instance creation',
fn: function (aKey, aValue){
var self=this;
return (function($rec){smalltalk.send($rec, "_key_", [aKey]);smalltalk.send($rec, "_value_", [aValue]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aKey", "aValue"],
source: unescape('key%3A%20aKey%20value%3A%20aValue%0A%09%20%20%20%20%5Eself%20new%0A%09%09key%3A%20aKey%3B%0A%09%09value%3A%20aValue%3B%0A%09%09yourself'),
messageSends: ["key:", "value:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Association.klass);


smalltalk.addClass('Dictionary', smalltalk.Collection, ['keys'], 'Kernel');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (aDictionary){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aDictionary, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
((($receiver = smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [smalltalk.send(aDictionary, "_size", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
(function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return smalltalk.send(smalltalk.send(self, "_associations", []), "__eq", [smalltalk.send(aDictionary, "_associations", [])])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}},
args: ["aDictionary"],
source: unescape('%3D%20aDictionary%0A%09self%20class%20%3D%20aDictionary%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09self%20size%20%3D%20aDictionary%20size%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09%5Eself%20associations%20%3D%20aDictionary%20associations'),
messageSends: ["ifFalse:", unescape("%3D"), "class", "size", "associations"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
category: 'copying',
fn: function (){
var self=this;
var copy=nil;
copy=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(copy, "_at_put_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return copy;
return self;},
args: [],
source: unescape('shallowCopy%0A%09%7C%20copy%20%7C%0A%09copy%20%3A%3D%20self%20class%20new.%0A%09self%20associationsDo%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20copy%20at%3A%20each%20key%20%20put%3A%20each%20value%5D.%0A%09%5Ecopy'),
messageSends: ["new", "class", "associationsDo:", "at:put:", "key", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Collection);
self['@keys']=[];
return self;},
args: [],
source: unescape('initialize%0A%20%20%20%20%09super%20initialize.%0A%20%20%20%20%09keys%20%3A%3D%20%23%28%29'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@keys'], "_size", []);
return self;},
args: [],
source: unescape('size%0A%09%5Ekeys%20size'),
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_associations'),
smalltalk.method({
selector: unescape('associations'),
category: 'accessing',
fn: function (){
var self=this;
var associations=nil;
associations=[];
smalltalk.send(self['@keys'], "_do_", [(function(each){return smalltalk.send(associations, "_add_", [smalltalk.send((smalltalk.Association || Association), "_key_value_", [each, smalltalk.send(self, "_at_", [each])])]);})]);
return associations;
return self;},
args: [],
source: unescape('associations%0A%09%7C%20associations%20%7C%0A%09associations%20%3A%3D%20%23%28%29.%0A%09keys%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20associations%20add%3A%20%28Association%20key%3A%20each%20value%3A%20%28self%20at%3A%20each%29%29%5D.%0A%09%5Eassociations'),
messageSends: ["do:", "add:", "key:value:", "at:"],
referencedClasses: ["Association"]
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_keys'),
smalltalk.method({
selector: unescape('keys'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@keys'], "_copy", []);
return self;},
args: [],
source: unescape('keys%0A%09%5Ekeys%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_values'),
smalltalk.method({
selector: unescape('values'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@keys'], "_collect_", [(function(each){return smalltalk.send(self, "_at_", [each]);})]);
return self;},
args: [],
source: unescape('values%0A%20%20%20%20%09%5Ekeys%20collect%3A%20%5B%3Aeach%20%7C%20self%20at%3A%20each%5D'),
messageSends: ["collect:", "at:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (aKey, aValue){
var self=this;
((($receiver = smalltalk.send(self['@keys'], "_includes_", [aKey])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@keys'], "_add_", [aKey]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@keys'], "_add_", [aKey]);})]));
return smalltalk.send(self, "_basicAt_put_", [aKey, aValue]);
return self;},
args: ["aKey", "aValue"],
source: unescape('at%3A%20aKey%20put%3A%20aValue%0A%09%28keys%20includes%3A%20aKey%29%20ifFalse%3A%20%5Bkeys%20add%3A%20aKey%5D.%0A%09%5Eself%20basicAt%3A%20aKey%20put%3A%20aValue'),
messageSends: ["ifFalse:", "includes:", "add:", "basicAt:put:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
category: 'accessing',
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_keys", []), "_includes_", [aKey]), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_basicAt_", [aKey]);}), aBlock]);
return self;},
args: ["aKey", "aBlock"],
source: unescape('at%3A%20aKey%20ifAbsent%3A%20aBlock%0A%09%5E%28self%20keys%20includes%3A%20aKey%29%0A%09%09ifTrue%3A%20%5Bself%20basicAt%3A%20aKey%5D%0A%09%09ifFalse%3A%20aBlock'),
messageSends: ["ifTrue:ifFalse:", "includes:", "keys", "basicAt:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_at_ifAbsentPut_'),
smalltalk.method({
selector: unescape('at%3AifAbsentPut%3A'),
category: 'accessing',
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);})]);
return self;},
args: ["aKey", "aBlock"],
source: unescape('at%3A%20aKey%20ifAbsentPut%3A%20aBlock%0A%20%20%20%20%09%5Eself%20at%3A%20aKey%20ifAbsent%3A%20%5B%0A%20%20%20%20%09%20%20%20%20self%20at%3A%20aKey%20put%3A%20aBlock%20value%5D'),
messageSends: ["at:ifAbsent:", "at:put:", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_at_ifPresent_'),
smalltalk.method({
selector: unescape('at%3AifPresent%3A'),
category: 'accessing',
fn: function (aKey, aBlock){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", [aKey])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})() : nil;
return self;},
args: ["aKey", "aBlock"],
source: unescape('at%3A%20aKey%20ifPresent%3A%20aBlock%0A%09%5E%28self%20basicAt%3A%20aKey%29%20ifNotNil%3A%20%5BaBlock%20value%3A%20%28self%20at%3A%20aKey%29%5D'),
messageSends: ["ifNotNil:", "basicAt:", "value:", "at:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_at_ifPresent_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifPresent%3AifAbsent%3A'),
category: 'accessing',
fn: function (aKey, aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicAt_", [aKey]), "_ifNil_ifNotNil_", [anotherBlock, (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})]);
return self;},
args: ["aKey", "aBlock", "anotherBlock"],
source: unescape('at%3A%20aKey%20ifPresent%3A%20aBlock%20ifAbsent%3A%20anotherBlock%0A%09%5E%28self%20basicAt%3A%20aKey%29%0A%09%20%20%20%20ifNil%3A%20anotherBlock%0A%09%20%20%20%20ifNotNil%3A%20%5BaBlock%20value%3A%20%28self%20at%3A%20aKey%29%5D'),
messageSends: ["ifNil:ifNotNil:", "basicAt:", "value:", "at:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'adding/removing',
fn: function (anAssociation){
var self=this;
smalltalk.send(self, "_at_put_", [smalltalk.send(anAssociation, "_key", []), smalltalk.send(anAssociation, "_value", [])]);
return self;},
args: ["anAssociation"],
source: unescape('add%3A%20anAssociation%0A%20%20%20%20%09self%20at%3A%20anAssociation%20key%20put%3A%20anAssociation%20value'),
messageSends: ["at:put:", "key", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_addAll_'),
smalltalk.method({
selector: unescape('addAll%3A'),
category: 'adding/removing',
fn: function (aDictionary){
var self=this;
smalltalk.send(self, "_addAll_", [smalltalk.send(aDictionary, "_associations", [])], smalltalk.Collection);
return aDictionary;
return self;},
args: ["aDictionary"],
source: unescape('addAll%3A%20aDictionary%0A%20%20%20%20%09super%20addAll%3A%20aDictionary%20associations.%0A%20%20%20%20%09%5EaDictionary'),
messageSends: ["addAll:", "associations"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('__comma'),
smalltalk.method({
selector: unescape('%2C'),
category: 'copying',
fn: function (aCollection){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;},
args: ["aCollection"],
source: unescape('%2C%20aCollection%0A%09self%20shouldNotImplement'),
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_copyFrom_to_'),
smalltalk.method({
selector: unescape('copyFrom%3Ato%3A'),
category: 'copying',
fn: function (anIndex, anotherIndex){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;},
args: ["anIndex", "anotherIndex"],
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09self%20shouldNotImplement'),
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_associationsDo_'),
smalltalk.method({
selector: unescape('associationsDo%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_associations", []), "_do_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('associationsDo%3A%20aBlock%0A%20%20%20%20%09self%20associations%20do%3A%20aBlock'),
messageSends: ["do:", "associations"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_keysAndValuesDo_'),
smalltalk.method({
selector: unescape('keysAndValuesDo%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return self;},
args: ["aBlock"],
source: unescape('keysAndValuesDo%3A%20aBlock%0A%20%20%20%20%09self%20associationsDo%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%09%20%20%20%20aBlock%20value%3A%20each%20key%20value%3A%20each%20value%5D'),
messageSends: ["associationsDo:", "value:value:", "key", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_values", []), "_do_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('do%3A%20aBlock%0A%20%20%20%20%09self%20values%20do%3A%20aBlock'),
messageSends: ["do:", "values"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_select_'),
smalltalk.method({
selector: unescape('select%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict=nil;
newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return ((($receiver = smalltalk.send(aBlock, "_value_", [value])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})]));})]);
return newDict;
return self;},
args: ["aBlock"],
source: unescape('select%3A%20aBlock%0A%20%20%20%20%09%7C%20newDict%20%7C%0A%20%20%20%20%09newDict%20%3A%3D%20self%20class%20new.%0A%20%20%20%20%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%20%20%20%20%09%20%20%20%20%28aBlock%20value%3A%20value%29%20ifTrue%3A%20%5BnewDict%20at%3A%20key%20put%3A%20value%5D%5D.%0A%20%20%20%20%09%5EnewDict'),
messageSends: ["new", "class", "keysAndValuesDo:", "ifTrue:", "value:", "at:put:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_collect_'),
smalltalk.method({
selector: unescape('collect%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict=nil;
newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(newDict, "_at_put_", [key, smalltalk.send(aBlock, "_value_", [value])]);})]);
return newDict;
return self;},
args: ["aBlock"],
source: unescape('collect%3A%20aBlock%0A%20%20%20%20%09%7C%20newDict%20%7C%0A%20%20%20%20%09newDict%20%3A%3D%20self%20class%20new.%0A%20%20%20%20%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%20%20%20%20%09%20%20%20%20newDict%20at%3A%20key%20put%3A%20%28aBlock%20value%3A%20value%29%5D.%0A%20%20%20%20%09%5EnewDict'),
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "value:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_detect_ifNone_'),
smalltalk.method({
selector: unescape('detect%3AifNone%3A'),
category: 'enumerating',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_detect_ifNone_", [aBlock, anotherBlock]);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0A%09%5Eself%20values%20detect%3A%20aBlock%20ifNone%3A%20anotherBlock'),
messageSends: ["detect:ifNone:", "values"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_includes_'),
smalltalk.method({
selector: unescape('includes%3A'),
category: 'enumerating',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_includes_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('includes%3A%20anObject%0A%09%5Eself%20values%20includes%3A%20anObject'),
messageSends: ["includes:", "values"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'adding/removing',
fn: function (aKey){
var self=this;
smalltalk.send(self, "_removeKey_", [aKey]);
return self;},
args: ["aKey"],
source: unescape('remove%3A%20aKey%0A%20%20%20%20self%20removeKey%3A%20aKey'),
messageSends: ["removeKey:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_removeKey_'),
smalltalk.method({
selector: unescape('removeKey%3A'),
category: 'adding/removing',
fn: function (aKey){
var self=this;
smalltalk.send(self['@keys'], "_remove_", [aKey]);
return self;},
args: ["aKey"],
source: unescape('removeKey%3A%20aKey%0A%20%20%20%20keys%20remove%3A%20aKey'),
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (aKey){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;},
args: ["aKey"],
source: unescape('at%3A%20aKey%0A%09%5Eself%20at%3A%20aKey%20ifAbsent%3A%20%5Bself%20errorNotFound%5D'),
messageSends: ["at:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
var object=nil;
object=smalltalk.send((smalltalk.Object || Object), "_new", []);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(object, "_basicAt_put_", [key, smalltalk.send(value, "_asJSONObject", [])]);})]);
return object;
return self;},
args: [],
source: unescape('asJSONObject%0A%09%7C%20object%20%7C%0A%09object%20%3A%3D%20Object%20new.%0A%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%09%09object%20basicAt%3A%20key%20put%3A%20value%20asJSONObject%5D.%0A%09%5Eobject'),
messageSends: ["new", "keysAndValuesDo:", "basicAt:put:", "asJSONObject"],
referencedClasses: ["Object"]
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Collection)]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%28")]);})(aStream);smalltalk.send(smalltalk.send(self, "_associations", []), "_do_separatedBy_", [(function(anAssociation){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_key", []), "_printString", [])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%20-%3E%20")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_value", []), "_printString", [])]);})(aStream);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%20%2C%20")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [unescape("%29")]);})]);
return self;},
args: [],
source: unescape('printString%0A%09%5E%20String%20streamContents%3A%20%5B%3AaStream%7C%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09aStream%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09nextPutAll%3A%20super%20printString%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09nextPutAll%3A%20%27%28%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09self%20associations%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09do%3A%20%5B%3AanAssociation%7C%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09aStream%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09nextPutAll%3A%20anAssociation%20key%20printString%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09nextPutAll%3A%20%27%20-%3E%20%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09nextPutAll%3A%20anAssociation%20value%20printString%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%20%2C%20%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09aStream%20nextPutAll%3A%20%27%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["streamContents:", "nextPutAll:", "printString", "do:separatedBy:", "associations", "key", "value"],
referencedClasses: ["String"]
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_storeOn_'),
smalltalk.method({
selector: unescape('storeOn%3A'),
category: 'printing',
fn: function (aStream){
var self=this;
smalltalk.send(aStream, "_nextPutAll_", [unescape("%23%7B")]);
smalltalk.send(smalltalk.send(self, "_associations", []), "_do_separatedBy_", [(function(each){return smalltalk.send(each, "_storeOn_", [aStream]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [". "]);})]);
smalltalk.send(aStream, "_nextPutAll_", [unescape("%7D")]);
return self;},
args: ["aStream"],
source: unescape('storeOn%3A%20aStream%0A%09aStream%20nextPutAll%3A%20%27%23%7B%27.%0A%09self%20associations%0A%09%09do%3A%20%5B%3Aeach%20%7C%20each%20storeOn%3A%20aStream%5D%0A%09%09separatedBy%3A%20%5B%20aStream%20nextPutAll%3A%20%27.%20%27%5D.%0A%09aStream%20nextPutAll%3A%20%27%7D%27'),
messageSends: ["nextPutAll:", "do:separatedBy:", "associations", "storeOn:"],
referencedClasses: []
}),
smalltalk.Dictionary);


smalltalk.addMethod(
unescape('_fromPairs_'),
smalltalk.method({
selector: unescape('fromPairs%3A'),
category: 'instance creation',
fn: function (aCollection){
var self=this;
var dict=nil;
dict=smalltalk.send(self, "_new", []);
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(dict, "_add_", [each]);})]);
return dict;
return self;},
args: ["aCollection"],
source: unescape('fromPairs%3A%20aCollection%0A%09%7C%20dict%20%7C%0A%09dict%20%3A%3D%20self%20new.%0A%09aCollection%20do%3A%20%5B%3Aeach%20%7C%20dict%20add%3A%20each%5D.%0A%09%5Edict'),
messageSends: ["new", "do:", "add:"],
referencedClasses: []
}),
smalltalk.Dictionary.klass);


smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_superclass_subclass_'),
smalltalk.method({
selector: unescape('superclass%3Asubclass%3A'),
category: 'class creation',
fn: function (aClass, aString){
var self=this;
return smalltalk.send(self, "_superclass_subclass_instanceVariableNames_package_", [aClass, aString, "", nil]);
return self;},
args: ["aClass", "aString"],
source: unescape('superclass%3A%20aClass%20subclass%3A%20aString%0A%09%5Eself%20superclass%3A%20aClass%20subclass%3A%20aString%20instanceVariableNames%3A%20%27%27%20package%3A%20nil'),
messageSends: ["superclass:subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_class_instanceVariableNames_'),
smalltalk.method({
selector: unescape('class%3AinstanceVariableNames%3A'),
category: 'class creation',
fn: function (aClass, aString){
var self=this;
((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_name", []), "__comma", [" is not a metaclass"])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_name", []), "__comma", [" is not a metaclass"])]);})]));
smalltalk.send(aClass, "_basicAt_put_", ["iVarNames", smalltalk.send(self, "_instanceVariableNamesFor_", [aString])]);
smalltalk.send(self, "_setupClass_", [aClass]);
return self;},
args: ["aClass", "aString"],
source: unescape('class%3A%20aClass%20instanceVariableNames%3A%20aString%0A%09aClass%20isMetaclass%20ifFalse%3A%20%5Bself%20error%3A%20aClass%20name%2C%20%27%20is%20not%20a%20metaclass%27%5D.%0A%09aClass%20basicAt%3A%20%27iVarNames%27%20put%3A%20%28self%20instanceVariableNamesFor%3A%20aString%29.%0A%09self%20setupClass%3A%20aClass'),
messageSends: ["ifFalse:", "isMetaclass", "error:", unescape("%2C"), "name", "basicAt:put:", "instanceVariableNamesFor:", "setupClass:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_instanceVariableNamesFor_'),
smalltalk.method({
selector: unescape('instanceVariableNamesFor%3A'),
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(aString, "_tokenize_", [" "]), "_reject_", [(function(each){return smalltalk.send(each, "_isEmpty", []);})]);
return self;},
args: ["aString"],
source: unescape('instanceVariableNamesFor%3A%20aString%0A%09%5E%28aString%20tokenize%3A%20%27%20%27%29%20reject%3A%20%5B%3Aeach%20%7C%20each%20isEmpty%5D'),
messageSends: ["reject:", "tokenize:", "isEmpty"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_addSubclassOf_named_instanceVariableNames_'),
smalltalk.method({
selector: unescape('addSubclassOf%3Anamed%3AinstanceVariableNames%3A'),
category: 'private',
fn: function (aClass, aString, aCollection){
var self=this;
smalltalk.addClass(aString, aClass, aCollection);
	    return smalltalk[aString];
return self;},
args: ["aClass", "aString", "aCollection"],
source: unescape('addSubclassOf%3A%20aClass%20named%3A%20aString%20instanceVariableNames%3A%20aCollection%0A%09%3Csmalltalk.addClass%28aString%2C%20aClass%2C%20aCollection%29%3B%0A%09%20%20%20%20return%20smalltalk%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_setupClass_'),
smalltalk.method({
selector: unescape('setupClass%3A'),
category: 'private',
fn: function (aClass){
var self=this;
smalltalk.init(aClass);;
return self;},
args: ["aClass"],
source: unescape('setupClass%3A%20aClass%0A%09%3Csmalltalk.init%28aClass%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_superclass_subclass_instanceVariableNames_package_'),
smalltalk.method({
selector: unescape('superclass%3Asubclass%3AinstanceVariableNames%3Apackage%3A'),
category: 'class creation',
fn: function (aClass, aString, aString2, aString3){
var self=this;
var newClass=nil;
newClass=smalltalk.send(self, "_addSubclassOf_named_instanceVariableNames_package_", [aClass, aString, smalltalk.send(self, "_instanceVariableNamesFor_", [aString2]), (($receiver = aString3) == nil || $receiver == undefined) ? (function(){return "unclassified";})() : $receiver]);
smalltalk.send(self, "_setupClass_", [newClass]);
return newClass;
return self;},
args: ["aClass", "aString", "aString2", "aString3"],
source: unescape('superclass%3A%20aClass%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3%0A%09%7C%20newClass%20%7C%0A%09newClass%20%3A%3D%20self%20addSubclassOf%3A%20aClass%0A%09%09%09%09named%3A%20aString%20instanceVariableNames%3A%20%28self%20instanceVariableNamesFor%3A%20aString2%29%0A%09%09%09%09package%3A%20%28aString3%20ifNil%3A%20%5B%27unclassified%27%5D%29.%0A%09self%20setupClass%3A%20newClass.%0A%09%5EnewClass'),
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "instanceVariableNamesFor:", "ifNil:", "setupClass:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_addSubclassOf_named_instanceVariableNames_package_'),
smalltalk.method({
selector: unescape('addSubclassOf%3Anamed%3AinstanceVariableNames%3Apackage%3A'),
category: 'private',
fn: function (aClass, aString, aCollection, packageName){
var self=this;
smalltalk.addClass(aString, aClass, aCollection, packageName);
	    return smalltalk[aString];
return self;},
args: ["aClass", "aString", "aCollection", "packageName"],
source: unescape('addSubclassOf%3A%20aClass%20named%3A%20aString%20instanceVariableNames%3A%20aCollection%20package%3A%20packageName%0A%09%3Csmalltalk.addClass%28aString%2C%20aClass%2C%20aCollection%2C%20packageName%29%3B%0A%09%20%20%20%20return%20smalltalk%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category', 'chunkParser'], 'Kernel');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@chunkParser']=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_new", []);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09chunkParser%20%3A%3D%20ChunkParser%20new.'),
messageSends: ["initialize", "new"],
referencedClasses: ["ChunkParser"]
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
unescape('_class_category_'),
smalltalk.method({
selector: unescape('class%3Acategory%3A'),
category: 'accessing',
fn: function (aClass, aString){
var self=this;
self['@class']=aClass;
self['@category']=aString;
return self;},
args: ["aClass", "aString"],
source: unescape('class%3A%20aClass%20category%3A%20aString%0A%09class%20%3A%3D%20aClass.%0A%09category%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
unescape('_scanFrom_'),
smalltalk.method({
selector: unescape('scanFrom%3A'),
category: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk=nil;
(function(){while(!(function(){chunk=smalltalk.send(aChunkParser, "_nextChunk", []);return smalltalk.send(chunk, "_isEmpty", []);})()) {(function(){return smalltalk.send(self, "_compileMethod_", [chunk]);})()}})();
return self;},
args: ["aChunkParser"],
source: unescape('scanFrom%3A%20aChunkParser%0A%09%7C%20chunk%20%7C%0A%09%5Bchunk%20%3A%3D%20aChunkParser%20nextChunk.%0A%09chunk%20isEmpty%5D%20whileFalse%3A%20%5B%0A%09%20%20%20%20self%20compileMethod%3A%20chunk%5D'),
messageSends: ["whileFalse:", "nextChunk", "isEmpty", "compileMethod:"],
referencedClasses: []
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
unescape('_compileMethod_'),
smalltalk.method({
selector: unescape('compileMethod%3A'),
category: 'private',
fn: function (aString){
var self=this;
var method=nil;
method=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_load_forClass_", [aString, self['@class']]);
smalltalk.send(method, "_category_", [self['@category']]);
smalltalk.send(self['@class'], "_addCompiledMethod_", [method]);
return self;},
args: ["aString"],
source: unescape('compileMethod%3A%20aString%0A%09%7C%20method%20%7C%0A%09method%20%3A%3D%20Compiler%20new%20load%3A%20aString%20forClass%3A%20class.%0A%09method%20category%3A%20category.%0A%09class%20addCompiledMethod%3A%20method'),
messageSends: ["load:forClass:", "new", "category:", "addCompiledMethod:"],
referencedClasses: ["Compiler"]
}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel');
smalltalk.addMethod(
unescape('_collection'),
smalltalk.method({
selector: unescape('collection'),
category: 'accessing',
fn: function (){
var self=this;
return self['@collection'];
return self;},
args: [],
source: unescape('collection%0A%09%5Ecollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_setCollection_'),
smalltalk.method({
selector: unescape('setCollection%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@collection']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('setCollection%3A%20aCollection%0A%09collection%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_position'),
smalltalk.method({
selector: unescape('position'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@position']) == nil || $receiver == undefined) ? (function(){return self['@position']=(0);})() : $receiver;
return self;},
args: [],
source: unescape('position%0A%09%5Eposition%20ifNil%3A%20%5Bposition%20%3A%3D%200%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_position_'),
smalltalk.method({
selector: unescape('position%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
self['@position']=anInteger;
return self;},
args: ["anInteger"],
source: unescape('position%3A%20anInteger%0A%09position%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_streamSize'),
smalltalk.method({
selector: unescape('streamSize'),
category: 'accessing',
fn: function (){
var self=this;
return self['@streamSize'];
return self;},
args: [],
source: unescape('streamSize%0A%09%5EstreamSize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_setStreamSize_'),
smalltalk.method({
selector: unescape('setStreamSize%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
self['@streamSize']=anInteger;
return self;},
args: ["anInteger"],
source: unescape('setStreamSize%3A%20anInteger%0A%09streamSize%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_contents'),
smalltalk.method({
selector: unescape('contents'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_streamSize", [])]);
return self;},
args: [],
source: unescape('contents%0A%09%5Eself%20collection%0A%09%20%20%20%20copyFrom%3A%201%20%0A%09%20%20%20%20to%3A%20self%20streamSize'),
messageSends: ["copyFrom:to:", "collection", "streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_streamSize", []);
return self;},
args: [],
source: unescape('size%0A%09%5Eself%20streamSize'),
messageSends: ["streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_reset'),
smalltalk.method({
selector: unescape('reset'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_position_", [(0)]);
return self;},
args: [],
source: unescape('reset%0A%09self%20position%3A%200'),
messageSends: ["position:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_close'),
smalltalk.method({
selector: unescape('close'),
category: 'actions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('close'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_flush'),
smalltalk.method({
selector: unescape('flush'),
category: 'actions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('flush'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_resetContents'),
smalltalk.method({
selector: unescape('resetContents'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_reset", []);
smalltalk.send(self, "_setStreamSize_", [(0)]);
return self;},
args: [],
source: unescape('resetContents%0A%09self%20reset.%0A%09self%20setStreamSize%3A%200'),
messageSends: ["reset", "setStreamSize:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
(function(){while(!(function(){return smalltalk.send(self, "_atEnd", []);})()) {(function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_next", [])]);})()}})();
return self;},
args: ["aBlock"],
source: unescape('do%3A%20aBlock%0A%09%5Bself%20atEnd%5D%20whileFalse%3A%20%5BaBlock%20value%3A%20self%20next%5D'),
messageSends: ["whileFalse:", "atEnd", "value:", "next"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_setToEnd'),
smalltalk.method({
selector: unescape('setToEnd'),
category: 'positioning',
fn: function (){
var self=this;
smalltalk.send(self, "_position_", [smalltalk.send(self, "_size", [])]);
return self;},
args: [],
source: unescape('setToEnd%0A%09self%20position%3A%20self%20size'),
messageSends: ["position:", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_skip_'),
smalltalk.method({
selector: unescape('skip%3A'),
category: 'positioning',
fn: function (anInteger){
var self=this;
smalltalk.send(self, "_position_", [smalltalk.send(((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +anInteger : smalltalk.send($receiver, "__plus", [anInteger])), "_min_max_", [smalltalk.send(self, "_size", []), (0)])]);
return self;},
args: ["anInteger"],
source: unescape('skip%3A%20anInteger%0A%09self%20position%3A%20%28%28self%20position%20+%20anInteger%29%20min%3A%20self%20size%20max%3A%200%29'),
messageSends: ["position:", "min:max:", unescape("+"), "position", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_next'),
smalltalk.method({
selector: unescape('next'),
category: 'reading',
fn: function (){
var self=this;
smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
return smalltalk.send(self['@collection'], "_at_", [smalltalk.send(self, "_position", [])]);
return self;},
args: [],
source: unescape('next%0A%09self%20position%3A%20self%20position%20+%201.%20%0A%09%5Ecollection%20at%3A%20self%20position'),
messageSends: ["position:", unescape("+"), "position", "at:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_next_'),
smalltalk.method({
selector: unescape('next%3A'),
category: 'reading',
fn: function (anInteger){
var self=this;
var tempCollection=nil;
tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []);
smalltalk.send(anInteger, "_timesRepeat_", [(function(){return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(tempCollection, "_add_", [smalltalk.send(self, "_next", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(tempCollection, "_add_", [smalltalk.send(self, "_next", [])]);})]));})]);
return tempCollection;
return self;},
args: ["anInteger"],
source: unescape('next%3A%20anInteger%0A%09%7C%20tempCollection%20%7C%0A%09tempCollection%20%3A%3D%20self%20collection%20class%20new.%0A%09anInteger%20timesRepeat%3A%20%5B%0A%09%20%20%20%20self%20atEnd%20ifFalse%3A%20%5B%0A%09%09tempCollection%20add%3A%20self%20next%5D%5D.%0A%09%5EtempCollection'),
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "atEnd", "add:", "next"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_nextPut_'),
smalltalk.method({
selector: unescape('nextPut%3A'),
category: 'writing',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
smalltalk.send(smalltalk.send(self, "_collection", []), "_at_put_", [smalltalk.send(self, "_position", []), anObject]);
smalltalk.send(self, "_setStreamSize_", [smalltalk.send(smalltalk.send(self, "_streamSize", []), "_max_", [smalltalk.send(self, "_position", [])])]);
return self;},
args: ["anObject"],
source: unescape('nextPut%3A%20anObject%0A%09self%20position%3A%20self%20position%20+%201.%0A%09self%20collection%20at%3A%20self%20position%20put%3A%20anObject.%0A%09self%20setStreamSize%3A%20%28self%20streamSize%20max%3A%20self%20position%29'),
messageSends: ["position:", unescape("+"), "position", "at:put:", "collection", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_nextPutAll_'),
smalltalk.method({
selector: unescape('nextPutAll%3A'),
category: 'writing',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(self, "_nextPut_", [each]);})]);
return self;},
args: ["aCollection"],
source: unescape('nextPutAll%3A%20aCollection%0A%09aCollection%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20nextPut%3A%20each%5D'),
messageSends: ["do:", "nextPut:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_peek'),
smalltalk.method({
selector: unescape('peek'),
category: 'reading',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})]));
return self;},
args: [],
source: unescape('peek%0A%09%5Eself%20atEnd%20ifFalse%3A%20%5B%0A%09%20%20%20%20self%20collection%20at%3A%20self%20position%20+%201%5D'),
messageSends: ["ifFalse:", "atEnd", "at:", "collection", unescape("+"), "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_atEnd'),
smalltalk.method({
selector: unescape('atEnd'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [smalltalk.send(self, "_size", [])]);
return self;},
args: [],
source: unescape('atEnd%0A%09%5Eself%20position%20%3D%20self%20size'),
messageSends: [unescape("%3D"), "position", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_atStart'),
smalltalk.method({
selector: unescape('atStart'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [(0)]);
return self;},
args: [],
source: unescape('atStart%0A%09%5Eself%20position%20%3D%200'),
messageSends: [unescape("%3D"), "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_isEmpty'),
smalltalk.method({
selector: unescape('isEmpty'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [(0)]);
return self;},
args: [],
source: unescape('isEmpty%0A%09%5Eself%20size%20%3D%200'),
messageSends: [unescape("%3D"), "size"],
referencedClasses: []
}),
smalltalk.Stream);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'instance creation',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_setCollection_", [aCollection]);smalltalk.send($rec, "_setStreamSize_", [smalltalk.send(aCollection, "_size", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aCollection"],
source: unescape('on%3A%20aCollection%0A%09%20%20%20%20%5Eself%20new%20%0A%09%09setCollection%3A%20aCollection%3B%0A%09%09setStreamSize%3A%20aCollection%20size%3B%0A%09%09yourself'),
messageSends: ["setCollection:", "setStreamSize:", "size", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel');
smalltalk.addMethod(
unescape('_next_'),
smalltalk.method({
selector: unescape('next%3A'),
category: 'reading',
fn: function (anInteger){
var self=this;
var tempCollection=nil;
tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []);
smalltalk.send(anInteger, "_timesRepeat_", [(function(){return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]);})]));})]);
return tempCollection;
return self;},
args: ["anInteger"],
source: unescape('next%3A%20anInteger%0A%09%7C%20tempCollection%20%7C%0A%09tempCollection%20%3A%3D%20self%20collection%20class%20new.%0A%09anInteger%20timesRepeat%3A%20%5B%0A%09%20%20%20%20self%20atEnd%20ifFalse%3A%20%5B%0A%09%09tempCollection%20%3A%3D%20tempCollection%2C%20self%20next%5D%5D.%0A%09%5EtempCollection'),
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "atEnd", unescape("%2C"), "next"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_nextPut_'),
smalltalk.method({
selector: unescape('nextPut%3A'),
category: 'writing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_nextPutAll_", [aString]);
return self;},
args: ["aString"],
source: unescape('nextPut%3A%20aString%0A%09self%20nextPutAll%3A%20aString'),
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_nextPutAll_'),
smalltalk.method({
selector: unescape('nextPutAll%3A'),
category: 'writing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_setCollection_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_position", [])]), "__comma", [aString]), "__comma", [smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [((($receiver = ((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])])), smalltalk.send(smalltalk.send(self, "_collection", []), "_size", [])])])]);
smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])]))]);
smalltalk.send(self, "_setStreamSize_", [smalltalk.send(smalltalk.send(self, "_streamSize", []), "_max_", [smalltalk.send(self, "_position", [])])]);
return self;},
args: ["aString"],
source: unescape('nextPutAll%3A%20aString%0A%09self%20setCollection%3A%20%0A%09%20%20%20%20%28self%20collection%20copyFrom%3A%201%20to%3A%20self%20position%29%2C%0A%09%20%20%20%20aString%2C%0A%09%20%20%20%20%28self%20collection%20copyFrom%3A%20%28self%20position%20+%201%20+%20aString%20size%29%20to%3A%20self%20collection%20size%29.%0A%09self%20position%3A%20self%20position%20+%20aString%20size.%0A%09self%20setStreamSize%3A%20%28self%20streamSize%20max%3A%20self%20position%29'),
messageSends: ["setCollection:", unescape("%2C"), "copyFrom:to:", "collection", "position", unescape("+"), "size", "position:", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
category: 'writing',
fn: function (){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_cr", [])]);
return self;},
args: [],
source: unescape('cr%0A%09%5Eself%20nextPutAll%3A%20String%20cr'),
messageSends: ["nextPutAll:", "cr"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_crlf'),
smalltalk.method({
selector: unescape('crlf'),
category: 'writing',
fn: function (){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_crlf", [])]);
return self;},
args: [],
source: unescape('crlf%0A%09%5Eself%20nextPutAll%3A%20String%20crlf'),
messageSends: ["nextPutAll:", "crlf"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_lf'),
smalltalk.method({
selector: unescape('lf'),
category: 'writing',
fn: function (){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_lf", [])]);
return self;},
args: [],
source: unescape('lf%0A%09%5Eself%20nextPutAll%3A%20String%20lf'),
messageSends: ["nextPutAll:", "lf"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_space'),
smalltalk.method({
selector: unescape('space'),
category: 'writing',
fn: function (){
var self=this;
smalltalk.send(self, "_nextPut_", [" "]);
return self;},
args: [],
source: unescape('space%0A%09self%20nextPut%3A%20%27%20%27'),
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.StringStream);



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class', 'chunkParser'], 'Kernel');
smalltalk.addMethod(
unescape('_class_'),
smalltalk.method({
selector: unescape('class%3A'),
category: 'accessing',
fn: function (aClass){
var self=this;
self['@class']=aClass;
return self;},
args: ["aClass"],
source: unescape('class%3A%20aClass%0A%09class%20%3A%3D%20aClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
unescape('_scanFrom_'),
smalltalk.method({
selector: unescape('scanFrom%3A'),
category: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk=nil;
chunk=smalltalk.send(aChunkParser, "_nextChunk", []);
((($receiver = smalltalk.send(chunk, "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_setComment_", [chunk]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_setComment_", [chunk]);})]));
return self;},
args: ["aChunkParser"],
source: unescape('scanFrom%3A%20aChunkParser%0A%09%7C%20chunk%20%7C%0A%09chunk%20%3A%3D%20aChunkParser%20nextChunk.%0A%09chunk%20isEmpty%20ifFalse%3A%20%5B%0A%09%20%20%20%20self%20setComment%3A%20chunk%5D.'),
messageSends: ["nextChunk", "ifFalse:", "isEmpty", "setComment:"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@chunkParser']=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_new", []);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09chunkParser%20%3A%3D%20ChunkParser%20new.'),
messageSends: ["initialize", "new"],
referencedClasses: ["ChunkParser"]
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
unescape('_setComment_'),
smalltalk.method({
selector: unescape('setComment%3A'),
category: 'private',
fn: function (aString){
var self=this;
smalltalk.send(self['@class'], "_comment_", [aString]);
return self;},
args: ["aString"],
source: unescape('setComment%3A%20aString%0A%20%20%20%20class%20comment%3A%20aString'),
messageSends: ["comment:"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);



smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_next'),
smalltalk.method({
selector: unescape('next'),
category: 'accessing',
fn: function (){
var self=this;
return Math.random();
return self;},
args: [],
source: unescape('next%0A%09%3Creturn%20Math.random%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Random);

smalltalk.addMethod(
unescape('_next_'),
smalltalk.method({
selector: unescape('next%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.send(smalltalk.send((1), "_to_", [anInteger]), "_collect_", [(function(each){return smalltalk.send(self, "_next", []);})]);
return self;},
args: ["anInteger"],
source: unescape('next%3A%20anInteger%0A%20%20%20%20%5E%281%20to%3A%20anInteger%29%20collect%3A%20%5B%3Aeach%20%7C%20self%20next%5D'),
messageSends: ["collect:", "to:", "next"],
referencedClasses: []
}),
smalltalk.Random);



smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel');
smalltalk.addMethod(
unescape('_x'),
smalltalk.method({
selector: unescape('x'),
category: 'accessing',
fn: function (){
var self=this;
return self['@x'];
return self;},
args: [],
source: unescape('x%0A%09%5Ex'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_y'),
smalltalk.method({
selector: unescape('y'),
category: 'accessing',
fn: function (){
var self=this;
return self['@y'];
return self;},
args: [],
source: unescape('y%0A%09%5Ey'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_y_'),
smalltalk.method({
selector: unescape('y%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@y']=aNumber;
return self;},
args: ["aNumber"],
source: unescape('y%3A%20aNumber%0A%09y%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_x_'),
smalltalk.method({
selector: unescape('x%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@x']=aNumber;
return self;},
args: ["aNumber"],
source: unescape('x%3A%20aNumber%0A%09x%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__star'),
smalltalk.method({
selector: unescape('*'),
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;},
args: ["aPoint"],
source: unescape('*%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20*%20aPoint%20asPoint%20x%20y%3A%20self%20y%20*%20aPoint%20asPoint%20y'),
messageSends: ["x:y:", unescape("*"), "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__plus'),
smalltalk.method({
selector: unescape('+'),
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;},
args: ["aPoint"],
source: unescape('+%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20+%20aPoint%20asPoint%20x%20y%3A%20self%20y%20+%20aPoint%20asPoint%20y'),
messageSends: ["x:y:", unescape("+"), "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__minus'),
smalltalk.method({
selector: unescape('-'),
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;},
args: ["aPoint"],
source: unescape('-%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20-%20aPoint%20asPoint%20x%20y%3A%20self%20y%20-%20aPoint%20asPoint%20y'),
messageSends: ["x:y:", unescape("-"), "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__slash'),
smalltalk.method({
selector: unescape('/'),
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;},
args: ["aPoint"],
source: unescape('/%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20/%20aPoint%20asPoint%20x%20y%3A%20self%20y%20/%20aPoint%20asPoint%20y'),
messageSends: ["x:y:", unescape("/"), "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_asPoint'),
smalltalk.method({
selector: unescape('asPoint'),
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('asPoint%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_class", []), "__eq", [smalltalk.send(self, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_x", []), "__eq", [smalltalk.send(self, "_x", [])]), "_&", [smalltalk.send(smalltalk.send(aPoint, "_y", []), "__eq", [smalltalk.send(self, "_y", [])])]);})]);
return self;},
args: ["aPoint"],
source: unescape('%3D%20aPoint%0A%09%5EaPoint%20class%20%3D%20self%20class%20and%3A%20%5B%0A%09%09%28aPoint%20x%20%3D%20self%20x%29%20%26%20%28aPoint%20y%20%3D%20self%20y%29%5D'),
messageSends: ["and:", unescape("%3D"), "class", unescape("%26"), "x", "y"],
referencedClasses: []
}),
smalltalk.Point);


smalltalk.addMethod(
unescape('_x_y_'),
smalltalk.method({
selector: unescape('x%3Ay%3A'),
category: 'instance creation',
fn: function (aNumber, anotherNumber){
var self=this;
return (function($rec){smalltalk.send($rec, "_x_", [aNumber]);smalltalk.send($rec, "_y_", [anotherNumber]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aNumber", "anotherNumber"],
source: unescape('x%3A%20aNumber%20y%3A%20anotherNumber%0A%09%5Eself%20new%0A%09%09x%3A%20aNumber%3B%0A%09%09y%3A%20anotherNumber%3B%0A%09%09yourself'),
messageSends: ["x:", "y:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Point.klass);


smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel');
smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
args: [],
source: unescape('selector%0A%09%5Eselector'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
unescape('_selector_'),
smalltalk.method({
selector: unescape('selector%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;},
args: ["aString"],
source: unescape('selector%3A%20aString%0A%09selector%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
unescape('_arguments_'),
smalltalk.method({
selector: unescape('arguments%3A'),
category: 'accessing',
fn: function (anArray){
var self=this;
self['@arguments']=anArray;
return self;},
args: ["anArray"],
source: unescape('arguments%3A%20anArray%0A%09arguments%20%3A%3D%20anArray'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
unescape('_arguments'),
smalltalk.method({
selector: unescape('arguments'),
category: 'accessing',
fn: function (){
var self=this;
return self['@arguments'];
return self;},
args: [],
source: unescape('arguments%0A%09%5Earguments'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Object)]);smalltalk.send($rec, "_nextPutAll_", [unescape("%28")]);smalltalk.send($rec, "_nextPutAll_", [self['@selector']]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%29")]);})(aStream);})]);
return self;},
args: [],
source: unescape('printString%0A%09%5E%20String%20streamContents%3A%20%5B%3AaStream%7C%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09aStream%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20super%20printString%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20%27%28%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20selector%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20%27%29%27%20%09%09%09%09%5D'),
messageSends: ["streamContents:", "nextPutAll:", "printString"],
referencedClasses: ["String"]
}),
smalltalk.Message);


smalltalk.addMethod(
unescape('_selector_arguments_'),
smalltalk.method({
selector: unescape('selector%3Aarguments%3A'),
category: 'instance creation',
fn: function (aString, anArray){
var self=this;
return (function($rec){smalltalk.send($rec, "_selector_", [aString]);smalltalk.send($rec, "_arguments_", [anArray]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString", "anArray"],
source: unescape('selector%3A%20aString%20arguments%3A%20anArray%0A%09%5Eself%20new%0A%09%09selector%3A%20aString%3B%0A%09%09arguments%3A%20anArray%3B%0A%09%09yourself'),
messageSends: ["selector:", "arguments:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Message.klass);


smalltalk.addClass('MessageNotUnderstood', smalltalk.Error, ['message', 'receiver'], 'Kernel');
smalltalk.addMethod(
unescape('_message'),
smalltalk.method({
selector: unescape('message'),
category: 'accessing',
fn: function (){
var self=this;
return self['@message'];
return self;},
args: [],
source: unescape('message%0A%09%5Emessage'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_message_'),
smalltalk.method({
selector: unescape('message%3A'),
category: 'accessing',
fn: function (aMessage){
var self=this;
self['@message']=aMessage;
return self;},
args: ["aMessage"],
source: unescape('message%3A%20aMessage%0A%09message%20%3A%3D%20aMessage'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
category: 'accessing',
fn: function (){
var self=this;
return self['@receiver'];
return self;},
args: [],
source: unescape('receiver%0A%09%5Ereceiver'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_receiver_'),
smalltalk.method({
selector: unescape('receiver%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
self['@receiver']=anObject;
return self;},
args: ["anObject"],
source: unescape('receiver%3A%20anObject%0A%09receiver%20%3A%3D%20anObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_messageText'),
smalltalk.method({
selector: unescape('messageText'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_asString", []), "__comma", [unescape("%20does%20not%20understand%20%23")]), "__comma", [smalltalk.send(smalltalk.send(self, "_message", []), "_selector", [])]);
return self;},
args: [],
source: unescape('messageText%0A%09%5Eself%20receiver%20asString%2C%20%27%20does%20not%20understand%20%23%27%2C%20self%20message%20selector'),
messageSends: [unescape("%2C"), "asString", "receiver", "selector", "message"],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);



smalltalk.addClass('ErrorHandler', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_handleError_'),
smalltalk.method({
selector: unescape('handleError%3A'),
category: 'error handling',
fn: function (anError){
var self=this;
(($receiver = smalltalk.send(anError, "_context", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logErrorContext_", [smalltalk.send(anError, "_context", [])]);})() : nil;
smalltalk.send(self, "_logError_", [anError]);
return self;},
args: ["anError"],
source: unescape('handleError%3A%20anError%0A%09anError%20context%20ifNotNil%3A%20%5Bself%20logErrorContext%3A%20anError%20context%5D.%0A%09self%20logError%3A%20anError'),
messageSends: ["ifNotNil:", "context", "logErrorContext:", "logError:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_logContext_'),
smalltalk.method({
selector: unescape('logContext%3A'),
category: 'private',
fn: function (aContext){
var self=this;
(($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;
smalltalk.send(self, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aContext, "_receiver", []), "_asString", []), "__comma", [unescape("%3E%3E")]), "__comma", [smalltalk.send(aContext, "_selector", [])])]);
return self;},
args: ["aContext"],
source: unescape('logContext%3A%20aContext%0A%09aContext%20home%20ifNotNil%3A%20%5B%0A%09%09self%20logContext%3A%20aContext%20home%5D.%0A%09self%20log%3A%20aContext%20receiver%20asString%2C%20%27%3E%3E%27%2C%20aContext%20selector'),
messageSends: ["ifNotNil:", "home", "logContext:", "log:", unescape("%2C"), "asString", "receiver", "selector"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_logErrorContext_'),
smalltalk.method({
selector: unescape('logErrorContext%3A'),
category: 'private',
fn: function (aContext){
var self=this;
(($receiver = aContext) != nil && $receiver != undefined) ? (function(){return (($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;})() : nil;
return self;},
args: ["aContext"],
source: unescape('logErrorContext%3A%20aContext%0A%09aContext%20ifNotNil%3A%20%5B%0A%09%09aContext%20home%20ifNotNil%3A%20%5B%0A%09%09%09self%20logContext%3A%20aContext%20home%5D%5D'),
messageSends: ["ifNotNil:", "home", "logContext:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_logError_'),
smalltalk.method({
selector: unescape('logError%3A'),
category: 'private',
fn: function (anError){
var self=this;
smalltalk.send(self, "_log_", [smalltalk.send(anError, "_messageText", [])]);
return self;},
args: ["anError"],
source: unescape('logError%3A%20anError%0A%09self%20log%3A%20anError%20messageText'),
messageSends: ["log:", "messageText"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_log_'),
smalltalk.method({
selector: unescape('log%3A'),
category: 'private',
fn: function (aString){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [aString]);
return self;},
args: ["aString"],
source: unescape('log%3A%20aString%0A%09console%20log%3A%20aString'),
messageSends: ["log:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);


smalltalk.ErrorHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return self['@current']=smalltalk.send(self, "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('current%0A%09%5Ecurrent%20ifNil%3A%20%5Bcurrent%20%3A%3D%20self%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_register", []);
return self;},
args: [],
source: unescape('initialize%0A%09self%20register'),
messageSends: ["register"],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
unescape('_register'),
smalltalk.method({
selector: unescape('register'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_setCurrent_", [smalltalk.send(self, "_new", [])]);
return self;},
args: [],
source: unescape('register%0A%09ErrorHandler%20setCurrent%3A%20self%20new'),
messageSends: ["setCurrent:", "new"],
referencedClasses: ["ErrorHandler"]
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
unescape('_setCurrent_'),
smalltalk.method({
selector: unescape('setCurrent%3A'),
category: 'accessing',
fn: function (anHandler){
var self=this;
self['@current']=anHandler;
return self;},
args: ["anHandler"],
source: unescape('setCurrent%3A%20anHandler%0A%09current%20%3A%3D%20anHandler'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel');
smalltalk.addMethod(
unescape('_jsObject_'),
smalltalk.method({
selector: unescape('jsObject%3A'),
category: 'accessing',
fn: function (aJSObject){
var self=this;
self['@jsObject']=aJSObject;
return self;},
args: ["aJSObject"],
source: unescape('jsObject%3A%20aJSObject%0A%09jsObject%20%3A%3D%20aJSObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_jsObject'),
smalltalk.method({
selector: unescape('jsObject'),
category: 'accessing',
fn: function (){
var self=this;
return self['@jsObject'];
return self;},
args: [],
source: unescape('jsObject%0A%09%5EjsObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'proxy',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_jsObject", []), "_toString", []);
return self;},
args: [],
source: unescape('printString%0A%09%5Eself%20jsObject%20toString'),
messageSends: ["toString", "jsObject"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
category: 'proxy',
fn: function (anInspector){
var self=this;
var variables=nil;
variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(variables, "_at_put_", [unescape("%23self"), smalltalk.send(self, "_jsObject", [])]);
smalltalk.send(anInspector, "_setLabel_", [smalltalk.send(self, "_printString", [])]);
for(var i in self['@jsObject']) {
		variables._at_put_(i, self['@jsObject'][i]);
	};
smalltalk.send(anInspector, "_setVariables_", [variables]);
return self;},
args: ["anInspector"],
source: unescape('inspectOn%3A%20anInspector%0A%09%7C%20variables%20%7C%0A%09variables%20%3A%3D%20Dictionary%20new.%0A%09variables%20at%3A%20%27%23self%27%20put%3A%20self%20jsObject.%0A%09anInspector%20setLabel%3A%20self%20printString.%0A%09%3Cfor%28var%20i%20in%20self%5B%27@jsObject%27%5D%29%20%7B%0A%09%09variables._at_put_%28i%2C%20self%5B%27@jsObject%27%5D%5Bi%5D%29%3B%0A%09%7D%3E.%0A%09anInspector%20setVariables%3A%20variables'),
messageSends: ["new", "at:put:", "jsObject", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
category: 'proxy',
fn: function (aMessage){
var self=this;
var obj=nil;
var selector=nil;
var jsSelector=nil;
var arguments=nil;
obj=smalltalk.send(self, "_jsObject", []);
selector=smalltalk.send(aMessage, "_selector", []);
jsSelector=smalltalk.send(selector, "_asJavaScriptSelector", []);
arguments=smalltalk.send(aMessage, "_arguments", []);
if(obj[jsSelector] != undefined) {return smalltalk.send(obj, jsSelector, arguments)};
smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Object);
return self;},
args: ["aMessage"],
source: unescape('doesNotUnderstand%3A%20aMessage%0A%09%7C%20obj%20selector%20jsSelector%20arguments%20%7C%0A%09obj%20%3A%3D%20self%20jsObject.%0A%09selector%20%3A%3D%20aMessage%20selector.%0A%09jsSelector%20%3A%3D%20selector%20asJavaScriptSelector.%0A%09arguments%20%3A%3D%20aMessage%20arguments.%0A%09%3Cif%28obj%5BjsSelector%5D%20%21%3D%20undefined%29%20%7Breturn%20smalltalk.send%28obj%2C%20jsSelector%2C%20arguments%29%7D%3E.%0A%09super%20doesNotUnderstand%3A%20aMessage'),
messageSends: ["jsObject", "selector", "asJavaScriptSelector", "arguments", "doesNotUnderstand:"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return self['@jsObject'][aString];
return self;},
args: ["aString"],
source: unescape('at%3A%20aString%0A%09%3Creturn%20self%5B%27@jsObject%27%5D%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (aString, anObject){
var self=this;
self['@jsObject'][aString] = anObject;
return self;},
args: ["aString", "anObject"],
source: unescape('at%3A%20aString%20put%3A%20anObject%0A%09%3Cself%5B%27@jsObject%27%5D%5BaString%5D%20%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'instance creation',
fn: function (aJSObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_jsObject_", [aJSObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aJSObject"],
source: unescape('on%3A%20aJSObject%0A%09%5Eself%20new%0A%09%09jsObject%3A%20aJSObject%3B%0A%09%09yourself'),
messageSends: ["jsObject:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel');
smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'adding/removing',
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
return self;},
args: ["anObject"],
source: unescape('add%3A%20anObject%0A%09%3C%0A%09%09var%20found%3B%0A%09%09for%28var%20i%20in%20self%5B%27@elements%27%5D%29%20%7B%0A%09%09%09if%28anObject%20%3D%3D%20self%5B%27@elements%27%5D%5Bi%5D%29%20%7B%0A%09%09%09%09found%20%3D%20true%3B%0A%09%09%09%09break%3B%0A%09%09%09%7D%0A%09%09%7D%0A%09%09if%28%21found%29%20%7Bself%5B%27@elements%27%5D.push%28anObject%29%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self['@elements'], "_remove_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('remove%3A%20anObject%0A%09elements%20remove%3A%20anObject'),
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Collection);
self['@elements']=[];
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09elements%20%3A%3D%20%23%28%29'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@elements'], "_size", []);
return self;},
args: [],
source: unescape('size%0A%09%5Eelements%20size'),
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_asArray'),
smalltalk.method({
selector: unescape('asArray'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self['@elements'], "_copy", []);
return self;},
args: [],
source: unescape('asArray%0A%09%5Eelements%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_detect_ifNone_'),
smalltalk.method({
selector: unescape('detect%3AifNone%3A'),
category: 'enumerating',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(self['@elements'], "_detect_ifNone_", [aBlock, anotherBlock]);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0A%09%5Eelements%20detect%3A%20aBlock%20ifNone%3A%20anotherBlock'),
messageSends: ["detect:ifNone:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@elements'], "_do_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('do%3A%20aBlock%0A%09elements%20do%3A%20aBlock'),
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_includes_'),
smalltalk.method({
selector: unescape('includes%3A'),
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.send(self['@elements'], "_includes_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('includes%3A%20anObject%0A%09%5Eelements%20includes%3A%20anObject'),
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (aCollection){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aCollection, "_class", [])]), "_and_", [(function(){return smalltalk.send(self['@elements'], "__eq", [smalltalk.send(aCollection, "_asArray", [])]);})]);
return self;},
args: ["aCollection"],
source: unescape('%3D%20aCollection%0A%09%5Eself%20class%20%3D%20aCollection%20class%20and%3A%20%5B%0A%20%20%20%20%20%20%20%20%09elements%20%3D%20aCollection%20asArray%5D'),
messageSends: ["and:", unescape("%3D"), "class", "asArray"],
referencedClasses: []
}),
smalltalk.Set);



smalltalk.addClass('Transcript', smalltalk.Object, ['textarea'], 'Kernel');

smalltalk.Transcript.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_open", []);
return self;},
args: [],
source: unescape('open%0A%20%20%20%20self%20current%20open'),
messageSends: ["open", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;},
args: [],
source: unescape('new%0A%20%20%20%20self%20shouldNotImplement'),
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'instance creation',
fn: function (){
var self=this;
return self['@current'];
return self;},
args: [],
source: unescape('current%0A%20%20%20%20%5Ecurrent'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_show_'),
smalltalk.method({
selector: unescape('show%3A'),
category: 'printing',
fn: function (anObject){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_show_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('show%3A%20anObject%0A%20%20%20%20self%20current%20show%3A%20anObject'),
messageSends: ["show:", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
category: 'printing',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_show_", [smalltalk.send((smalltalk.String || String), "_cr", [])]);
return self;},
args: [],
source: unescape('cr%0A%20%20%20%20self%20current%20show%3A%20String%20cr'),
messageSends: ["show:", "current", "cr"],
referencedClasses: ["String"]
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
category: 'printing',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_clear", []);
return self;},
args: [],
source: unescape('clear%0A%20%20%20%20self%20current%20clear'),
messageSends: ["clear", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_register_'),
smalltalk.method({
selector: unescape('register%3A'),
category: 'instance creation',
fn: function (aTranscript){
var self=this;
self['@current']=aTranscript;
return self;},
args: ["aTranscript"],
source: unescape('register%3A%20aTranscript%0A%09current%20%3A%3D%20aTranscript'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);


smalltalk.addClass('ConsoleTranscript', smalltalk.Object, ['textarea'], 'Kernel');
smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
category: 'printing',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('clear%0A%09%22no%20op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
category: 'printing',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('cr%0A%09%22no%20op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
unescape('_show_'),
smalltalk.method({
selector: unescape('show%3A'),
category: 'printing',
fn: function (anObject){
var self=this;
console.log(String(anObject._asString()));
return self;},
args: ["anObject"],
source: unescape('show%3A%20anObject%0A%09%3Cconsole.log%28String%28anObject._asString%28%29%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'actions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('open'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send((smalltalk.Transcript || Transcript), "_register_", [smalltalk.send(self, "_new", [])]);
return self;},
args: [],
source: unescape('initialize%0A%09Transcript%20register%3A%20self%20new'),
messageSends: ["register:", "new"],
referencedClasses: ["Transcript"]
}),
smalltalk.ConsoleTranscript.klass);


