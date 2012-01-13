smalltalk.addPackage('Kernel-Objects', {});
smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel-Objects');
smalltalk.Object.comment=unescape('*Object%20is%20the%20root%20of%20the%20Smalltalk%20class%20system*.%20All%20classes%20in%20the%20system%20are%20subclasses%20of%20Object.%0A%0AObject%20provides%20default%20behavior%20common%20to%20all%20normal%20objects%2C%20such%20as%3A%20%0A%0A-%20access%0A-%20copying%0A-%20comparison%0A-%20error%20handling%0A-%20message%20sending%0A-%20reflection%0A%0AAlso%20utility%20messages%20that%20all%20objects%20should%20respond%20to%20are%20defined%20here.%0A%0AObject%20has%20no%20instance%20variable.%0A%0A%23%23Access%0A%0AInstance%20variables%20can%20be%20accessed%20with%20%60%23instVarAt%3A%60%20and%20%60%23instVarAt%3Aput%3A%60.%20%60Object%20%3E%3E%20instanceVariableNames%60%20answers%20a%20collection%20of%20all%20instance%20variable%20names.%0AAccessing%20JavaScript%20properties%20of%20an%20object%20is%20done%20through%20%60%23basicAt%3A%60%2C%20%60%23basicAt%3Aput%3A%60%20and%20%60basicDelete%3A%60.%0A%0A%23%23Copying%0A%0ACopying%20an%20object%20is%20handled%20by%20%60%23copy%60%20and%20%60%23deepCopy%60.%20The%20first%20one%20performs%20a%20shallow%20copy%20of%20the%20receiver%2C%20while%20the%20second%20one%20performs%20a%20deep%20copy.%0AThe%20hook%20method%20%60%23postCopy%60%20can%20be%20overriden%20in%20subclasses%20to%20copy%20fields%20as%20necessary%20to%20complete%20the%20full%20copy.%20It%20will%20be%20sent%20by%20the%20copy%20of%20the%20receiver.%0A%0A%23%23Comparison%0A%0AObjects%20understand%20equality%20%20%60%23%3D%60%20and%20identity%20%60%23%3D%3D%60%20comparison.%0A%0A%23%23Error%20handling%0A%0A-%20%60%23halt%60%20is%20the%20typical%20message%20to%20use%20for%20inserting%20breakpoints%20during%20debugging.%0A-%20%60%23error%3A%60%20throws%20a%20generic%20error%20exception%0A-%20%60%23doesNotUnderstand%3A%60%20handles%20the%20fact%20that%20there%20was%20an%20attempt%20to%20send%20the%20given%20message%20to%20the%20receiver%20but%20the%20receiver%20does%20not%20understand%20this%20message.%0A%20%20Overriding%20this%20message%20can%20be%20useful%20to%20implement%20proxies%20for%20example.')
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
fn: function (aSymbol){
var self=this;
var varname=nil;
(varname=smalltalk.send(aSymbol, "_asString", []));
return self['@'+varname];
return self;},
args: ["aSymbol"],
source: unescape('instVarAt%3A%20aSymbol%0A%09%7C%20varname%20%7C%0A%09varname%20%3A%3D%20aSymbol%20asString.%0A%09%3Creturn%20self%5B%27@%27+varname%5D%3E'),
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_instVarAt_put_'),
smalltalk.method({
selector: unescape('instVarAt%3Aput%3A'),
category: 'accessing',
fn: function (aSymbol, anObject){
var self=this;
var varname=nil;
(varname=smalltalk.send(aSymbol, "_asString", []));
self['@' + varname] = anObject;
return self;},
args: ["aSymbol", "anObject"],
source: unescape('instVarAt%3A%20aSymbol%20put%3A%20anObject%0A%09%7C%20varname%20%7C%0A%09varname%20%3A%3D%20aSymbol%20asString.%0A%09%3Cself%5B%27@%27%20+%20varname%5D%20%3D%20anObject%3E'),
messageSends: ["asString"],
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
try{result = aBlock()} catch(e) {result = anotherBlock(e)};
	return result;;
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('try%3A%20aBlock%20catch%3A%20anotherBlock%0A%09%3Ctry%7Bresult%20%3D%20aBlock%28%29%7D%20catch%28e%29%20%7Bresult%20%3D%20anotherBlock%28e%29%7D%3B%0A%09return%20result%3B%3E'),
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
delete self[aString]; return aString;
return self;},
args: ["aString"],
source: unescape('basicDelete%3A%20aString%0A%20%20%20%20%3Cdelete%20self%5BaString%5D%3B%20return%20aString%3E'),
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
return smalltalk.send((smalltalk.JSON || JSON), "_parse_", [smalltalk.send(self, "_asJSONString", [])]);
return self;},
args: [],
source: unescape('asJSON%0A%09%5EJSON%20parse%3A%20self%20asJSONString'),
messageSends: ["parse:", "asJSONString"],
referencedClasses: ["JSON"]
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
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(smalltalk.send(aString, "__comma", [" time: "]), "__comma", [smalltalk.send(smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [(function(){return (result=smalltalk.send(aBlock, "_value", []));})]), "_printString", [])])]);
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
return smalltalk.send(smalltalk.send(self, "_identityHash", []), "__eq", [smalltalk.send(anObject, "_identityHash", [])]);
return self;},
args: ["anObject"],
source: unescape('%3D%3D%20anObject%0A%09%5Eself%20identityHash%20%3D%20anObject%20identityHash'),
messageSends: [unescape("%3D"), "identityHash"],
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
smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.getThisContext()), "_home", []), "_asString", []), "__comma", [unescape("%20is%20deprecated%21%20%28in%20")]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.getThisContext()), "_home", []), "_home", []), "_asString", [])]), "__comma", [unescape("%29")])]);
return self;},
args: [],
source: unescape('deprecatedAPI%0A%09%22Just%20a%20simple%20way%20to%20deprecate%20methods.%0A%09%23deprecatedAPI%20is%20in%20the%20%27error%20handling%27%20protocol%20even%20if%20it%20doesn%27t%20throw%20an%20error%2C%0A%09but%20it%20could%20in%20the%20future.%22%0A%09console%20warn%3A%20thisContext%20home%20asString%2C%20%27%20is%20deprecated%21%20%28in%20%27%2C%20thisContext%20home%20home%20asString%2C%20%27%29%27'),
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
unescape('_asJSONString'),
smalltalk.method({
selector: unescape('asJSONString'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [self]);
return self;},
args: [],
source: unescape('asJSONString%0A%09%5EJSON%20stringify%3A%20self'),
messageSends: ["stringify:"],
referencedClasses: ["JSON"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_identityHash'),
smalltalk.method({
selector: unescape('identityHash'),
category: 'accessing',
fn: function (){
var self=this;
return self.identityHash || (self.identityHash = smalltalk.nextId());;
return self;},
args: [],
source: unescape('identityHash%0A%09%3Creturn%20self.identityHash%20%7C%7C%20%28self.identityHash%20%3D%20smalltalk.nextId%28%29%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isSymbol'),
smalltalk.method({
selector: unescape('isSymbol'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isSymbol%0A%09%5Efalse'),
messageSends: [],
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


smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Smalltalk.comment=unescape('Smalltalk%20has%20only%20one%20instance%2C%20accessed%20with%20%60Smalltalk%20current%60.%20%0AIt%20represents%20the%20global%20JavaScript%20variable%20%60smalltalk%60%20declared%20in%20%60js/boot.js%60.%0A%0AThe%20%60smalltalk%60%20object%20holds%20all%20class%20and%20packages%20defined%20in%20the%20system.%0A%0A%23%23%20Classes%0A%0AClasses%20can%20be%20accessed%20using%20the%20following%20methods%3A%0A%0A-%20%60%23classes%60%20answers%20the%20full%20list%20of%20Smalltalk%20classes%20in%20the%20system%0A-%20%60%23at%3A%60%20answers%20a%20specific%20class%20of%20%60nil%60%0A%0A%23%23%20Packages%0A%0APackages%20can%20be%20accessed%20using%20the%20following%20methods%3A%0A%0A-%20%60%23packages%60%20answers%20the%20full%20list%20of%20packages%0A-%20%60%23packageAt%3A%60%20answers%20a%20specific%20class%20of%20%60nil%60%0A%0A__note%3A__%20classes%20and%20packages%20are%20accessed%20using%20strings%2C%20not%20symbols%0A%0A%23%23%20Parsing%0A%0AThe%20%60%23parse%3A%60%20method%20is%20used%20to%20parse%20Smalltalk%20source%20code.%20%0AIt%20requires%20the%20%60Compiler%60%20package%20and%20the%20%60js/parser.js%60%20parser%20file%20in%20order%20to%20work')
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
smalltalk.send(self, "_try_catch_", [(function(){return (result=smalltalk.send(self, "_basicParse_", [aString]));}), (function(ex){return smalltalk.send(smalltalk.send(self, "_parseError_parsing_", [ex, aString]), "_signal", []);})]);
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
(lines=smalltalk.send(aString, "_lines", []));
(badLine=smalltalk.send(lines, "_at_", [row]));
(badLine=smalltalk.send(smalltalk.send(smalltalk.send(badLine, "_copyFrom_to_", [(1), ((($receiver = col).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]), "__comma", [unescape("%20%3D%3D%3D%3E")]), "__comma", [smalltalk.send(badLine, "_copyFrom_to_", [col, smalltalk.send(badLine, "_size", [])])]));
smalltalk.send(lines, "_at_put_", [row, badLine]);
(code=smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(s){return smalltalk.send(lines, "_withIndexDo_", [(function(l, i){return smalltalk.send(s, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(i, "_asString", []), "__comma", [": "]), "__comma", [l]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])])]);})]);})]));
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
(pkg=smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);})]));
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
(pkg=smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);})]));
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

smalltalk.addMethod(
unescape('_readJSObject_'),
smalltalk.method({
selector: unescape('readJSObject%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
return self.readJSObject(anObject);
return self;},
args: ["anObject"],
source: unescape('readJSObject%3A%20anObject%0A%09%3Creturn%20self.readJSObject%28anObject%29%3E'),
messageSends: [],
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


smalltalk.addClass('Package', smalltalk.Object, ['commitPathJs', 'commitPathSt'], 'Kernel-Objects');
smalltalk.Package.comment=unescape('A%20Package%20is%20similar%20to%20a%20%22class%20category%22%20typically%20found%20in%20other%20Smalltalks%20like%20Pharo%20or%20Squeak.%20Amber%20does%20not%20have%20class%20categories%20anymore%2C%20it%20had%20in%20the%20beginning%20but%20now%20each%20class%20in%20the%20system%20knows%20which%20package%20it%20belongs%20to.%0A%0AA%20Package%20has%20a%20name%2C%20an%20Array%20of%20%22requires%22%2C%20a%20comment%20and%20a%20Dictionary%20with%20other%20optional%20key%20value%20attributes.%20A%20Package%20can%20also%20be%20queried%20for%20its%20classes%2C%20but%20it%20will%20then%20resort%20to%20a%20reverse%20scan%20of%20all%20classes%20to%20find%20them.%0APackages%20are%20manipulated%20through%20%22Smalltalk%20current%22%2C%20like%20for%20example%20finding%20one%20based%20on%20a%20name%3A%0A%0A%09Smalltalk%20current%20packageAt%3A%20%27Kernel%27%0A%0A...but%20you%20can%20also%20use%3A%0A%0A%09Package%20named%3A%20%27Kernel%27%0A%0AA%20Package%20differs%20slightly%20from%20a%20Monticello%20package%20which%20can%20span%20multiple%20class%20categories%20using%20a%20naming%20convention%20based%20on%20hyphenation.%20But%20just%20as%20in%20Monticello%20a%20Package%20supports%20%22class%20extensions%22%20so%20a%20Package%0Acan%20define%20behaviors%20in%20foreign%20classes%20using%20a%20naming%20convention%20for%20method%20categories%20where%20the%20category%20starts%20with%20an%20asterisk%20and%20then%20the%20name%20of%20the%20owning%20package%20follows.%20This%20can%20easily%20be%20seen%20in%20for%20example%20class%0AString%20where%20the%20method%20category%20%22*IDE%22%20defines%20%23inspectOn%3A%20which%20thus%20is%20a%20method%20belonging%20to%20the%20IDE%20package.%0A%0AYou%20can%20fetch%20a%20package%20from%20the%20server%3A%0A%0A%09Package%20fetch%3A%20%27Additional-Examples%27')
smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'accessing',
fn: function (){
var self=this;
return self.pkgName;
return self;},
args: [],
source: unescape('name%0A%09%3Creturn%20self.pkgName%3E'),
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
self.pkgName = aString;
return self;},
args: ["aString"],
source: unescape('name%3A%20aString%0A%09%3Cself.pkgName%20%3D%20aString%3E'),
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
return smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_readJSObject_", [smalltalk.send(self, "_basicAt_", ["properties"])]);
return self;},
args: [],
source: unescape('properties%0A%09%5ESmalltalk%20current%20readJSObject%3A%20%28self%20basicAt%3A%20%27properties%27%29'),
messageSends: ["readJSObject:", "current", "basicAt:"],
referencedClasses: ["Smalltalk"]
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
return self.properties;
return self;},
args: [],
source: unescape('jsProperties%0A%09%3Creturn%20self.properties%3E'),
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
unescape('_commitPathJs'),
smalltalk.method({
selector: unescape('commitPathJs'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@commitPathJs']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_defaultCommitPathJs", []);})() : $receiver;
return self;},
args: [],
source: unescape('commitPathJs%0A%09%5E%20commitPathJs%20ifNil%3A%20%5Bself%20class%20defaultCommitPathJs%5D'),
messageSends: ["ifNil:", "defaultCommitPathJs", "class"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_commitPathJs_'),
smalltalk.method({
selector: unescape('commitPathJs%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@commitPathJs']=aString);
return self;},
args: ["aString"],
source: unescape('commitPathJs%3A%20aString%0A%09commitPathJs%A0%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_commitPathSt'),
smalltalk.method({
selector: unescape('commitPathSt'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@commitPathSt']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_defaultCommitPathSt", []);})() : $receiver;
return self;},
args: [],
source: unescape('commitPathSt%0A%09%5E%20commitPathSt%20ifNil%3A%20%5Bself%20class%20defaultCommitPathSt%5D'),
messageSends: ["ifNil:", "defaultCommitPathSt", "class"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_commitPathSt_'),
smalltalk.method({
selector: unescape('commitPathSt%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@commitPathSt']=aString);
return self;},
args: ["aString"],
source: unescape('commitPathSt%3A%20aString%0A%09commitPathSt%A0%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);


smalltalk.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
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

smalltalk.addMethod(
unescape('_defaultCommitPathJs'),
smalltalk.method({
selector: unescape('defaultCommitPathJs'),
category: 'commit paths',
fn: function (){
var self=this;
return (($receiver = self['@defaultCommitPathJs']) == nil || $receiver == undefined) ? (function(){return (self['@defaultCommitPathJs']="js");})() : $receiver;
return self;},
args: [],
source: unescape('defaultCommitPathJs%0A%09%5E%20defaultCommitPathJs%20ifNil%3A%20%5B%20defaultCommitPathJs%20%3A%3D%20%27js%27%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_defaultCommitPathJs_'),
smalltalk.method({
selector: unescape('defaultCommitPathJs%3A'),
category: 'commit paths',
fn: function (aString){
var self=this;
(self['@defaultCommitPathJs']=aString);
return self;},
args: ["aString"],
source: unescape('defaultCommitPathJs%3A%20aString%0A%09defaultCommitPathJs%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_defaultCommitPathSt'),
smalltalk.method({
selector: unescape('defaultCommitPathSt'),
category: 'commit paths',
fn: function (){
var self=this;
return (($receiver = self['@defaultCommitPathSt']) == nil || $receiver == undefined) ? (function(){return (self['@defaultCommitPathSt']="st");})() : $receiver;
return self;},
args: [],
source: unescape('defaultCommitPathSt%0A%09%5E%20defaultCommitPathSt%20ifNil%3A%20%5B%20defaultCommitPathSt%20%3A%3D%20%27st%27%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_defaultCommitPathSt_'),
smalltalk.method({
selector: unescape('defaultCommitPathSt%3A'),
category: 'commit paths',
fn: function (aString){
var self=this;
(self['@defaultCommitPathSt']=aString);
return self;},
args: ["aString"],
source: unescape('defaultCommitPathSt%3A%20aString%0A%09defaultCommitPathSt%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_resetCommitPaths'),
smalltalk.method({
selector: unescape('resetCommitPaths'),
category: 'commit paths',
fn: function (){
var self=this;
(self['@defaultCommitPathJs']=nil);
(self['@defaultCommitPathSt']=nil);
return self;},
args: [],
source: unescape('resetCommitPaths%0A%20%20%20%20%20%20%20%20defaultCommitPathJs%20%3A%3D%20nil.%0A%20%20%20%20%20%20%20%20defaultCommitPathSt%20%3A%3D%20nil.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_fetch_prefix_'),
smalltalk.method({
selector: unescape('fetch%3Aprefix%3A'),
category: 'loading-storing',
fn: function (aPackageName, aPrefix){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_getScript_onSuccess_", [smalltalk.send(smalltalk.send(aPrefix, "__comma", [aPackageName]), "__comma", [".js"]), (function(){return smalltalk.send((smalltalk.Package || Package), "_init_", [aPackageName]);})]);
return self;},
args: ["aPackageName", "aPrefix"],
source: unescape('fetch%3A%20aPackageName%20prefix%3A%20aPrefix%0A%09jQuery%20getScript%3A%20%28aPrefix%20%2C%20aPackageName%20%2C%20%27.js%27%29%20onSuccess%3A%20%5B%20Package%20init%3A%20aPackageName%20%5D'),
messageSends: ["getScript:onSuccess:", unescape("%2C"), "init:"],
referencedClasses: ["Package"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_fetch_'),
smalltalk.method({
selector: unescape('fetch%3A'),
category: 'loading-storing',
fn: function (aPackageName){
var self=this;
smalltalk.send(self, "_fetch_prefix_", [aPackageName, smalltalk.send(smalltalk.send(self, "_defaultCommitPathJs", []), "__comma", [unescape("/")])]);
return self;},
args: ["aPackageName"],
source: unescape('fetch%3A%20aPackageName%0A%09self%20fetch%3A%20aPackageName%20prefix%3A%20self%20defaultCommitPathJs%2C%20%27/%27'),
messageSends: ["fetch:prefix:", unescape("%2C"), "defaultCommitPathJs"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_commitToLocalStorage_'),
smalltalk.method({
selector: unescape('commitToLocalStorage%3A'),
category: 'loading-storing',
fn: function (aPackageName){
var self=this;
var key=nil;
var sourceCode=nil;
(key=smalltalk.send("smalltalk.packages.", "__comma", [aPackageName]));
(sourceCode=smalltalk.send(smalltalk.send((smalltalk.Exporter || Exporter), "_new", []), "_exportPackage_", [aPackageName]));
localStorage[key] = escape(sourceCode);
return self;},
args: ["aPackageName"],
source: unescape('commitToLocalStorage%3A%20aPackageName%0A%09%7C%20key%20sourceCode%20%7C%0A%09key%20%3A%3D%20%27smalltalk.packages.%27%20%2C%20aPackageName.%0A%09sourceCode%20%3A%3D%20Exporter%20new%20exportPackage%3A%20aPackageName.%0A%09%3ClocalStorage%5Bkey%5D%20%3D%20escape%28sourceCode%29%3E'),
messageSends: [unescape("%2C"), "exportPackage:", "new"],
referencedClasses: ["Exporter"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_init_'),
smalltalk.method({
selector: unescape('init%3A'),
category: 'loading-storing',
fn: function (aPackageName){
var self=this;
(function($rec){smalltalk.send($rec, "_do_", [(function(each){return smalltalk.init(each);})]);return smalltalk.send($rec, "_do_", [(function(each){return smalltalk.send(each, "_initialize", []);})]);})(smalltalk.send(smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_classes", []), "_select_", [(function(each){return each.pkg.pkgName == aPackageName;})]));
return self;},
args: ["aPackageName"],
source: unescape('init%3A%20aPackageName%0A%09%28smalltalk%20classes%20select%3A%20%5B%20%3Aeach%20%7C%20%3Ceach.pkg.pkgName%20%3D%3D%20aPackageName%3E%20%5D%29%0A%09%09do%3A%20%5B%20%3Aeach%20%7C%20%3Csmalltalk.init%28each%29%3E%20%5D%3B%0A%09%09do%3A%20%5B%20%3Aeach%20%7C%20each%20initialize%20%5D'),
messageSends: ["do:", "initialize", "select:", "classes"],
referencedClasses: []
}),
smalltalk.Package.klass);


smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (aNumber){
var self=this;
try{((($receiver = smalltalk.send(aNumber, "_isNumber", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
return Number(self) == aNumber;
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}},
args: ["aNumber"],
source: unescape('%3D%20aNumber%0A%09aNumber%20isNumber%20ifFalse%3A%20%5B%5Efalse%5D.%20%0A%09%3Creturn%20Number%28self%29%20%3D%3D%20aNumber%3E'),
messageSends: ["ifFalse:", "isNumber"],
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
(first=smalltalk.send(self, "_truncated", []));
(last=((($receiver = smalltalk.send(aNumber, "_truncated", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
(count=(1));
(array=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(((($receiver = last).klass === smalltalk.Number) ? $receiver -first : smalltalk.send($receiver, "__minus", [first])), "_timesRepeat_", [(function(){smalltalk.send(array, "_at_put_", [count, first]);(count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (first=((($receiver = first).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})]);
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
(integer=smalltalk.send(self, "_truncated", []));
(count=(1));
(function(){while(!(function(){return ((($receiver = count).klass === smalltalk.Number) ? $receiver >self : smalltalk.send($receiver, "__gt", [self]));})()) {(function(){smalltalk.send(aBlock, "_value", []);return (count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})()}})();
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
(nextValue=self);
(function(){while((function(){return ((($receiver = nextValue).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [nextValue]);return (nextValue=((($receiver = nextValue).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})()}})();
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
(value=self);
(array=smalltalk.send((smalltalk.Array || Array), "_new", []));
(pos=(1));
((($receiver = smalltalk.send(step, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})]));
((($receiver = ((($receiver = step).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);(pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})() : (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);(pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);(pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();}), (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);(pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})]));
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
(value=self);
((($receiver = smalltalk.send(step, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})]));
((($receiver = ((($receiver = step).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})() : (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();}), (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return (value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step])));})()}})();})]));
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
unescape('_identityHash'),
smalltalk.method({
selector: unescape('identityHash'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asString", []), "__comma", ["n"]);
return self;},
args: [],
source: unescape('identityHash%0A%09%5Eself%20asString%2C%20%27n%27'),
messageSends: [unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_negative'),
smalltalk.method({
selector: unescape('negative'),
category: 'testing',
fn: function (){
var self=this;
return self < (0);
return self;},
args: [],
source: unescape('negative%0A%09%22Answer%20whether%20the%20receiver%20is%20mathematically%20negative.%22%0A%0A%09%5E%20self%20%3C%200'),
messageSends: [unescape("%3C")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_positive'),
smalltalk.method({
selector: unescape('positive'),
category: 'testing',
fn: function (){
var self=this;
return self >= (0);
return self;},
args: [],
source: unescape('positive%0A%09%22Answer%20whether%20the%20receiver%20is%20positive%20or%20equal%20to%200.%20%28ST-80%20protocol%29.%22%0A%0A%09%5E%20self%20%3E%3D%200'),
messageSends: [unescape("%3E%3D")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_isZero'),
smalltalk.method({
selector: unescape('isZero'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(self, "__eq", [(0)]);
return self;},
args: [],
source: unescape('isZero%0A%09%5Eself%20%3D%200'),
messageSends: [unescape("%3D")],
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


smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Boolean.comment=unescape('Boolean%20wraps%20the%20JavaScript%20%60Boolean%28%29%60%20constructor.%20The%20%60true%60%20and%20%60false%60%20objects%20are%20the%20JavaScript%20boolean%20objects.%0A%0ABoolean%20defines%20the%20protocol%20for%20logic%20testing%20operations%20and%20conditional%20control%20structures%20for%20the%20logical%20values.%0ABoolean%20instances%20are%20weither%20%60true%60%20or%20%60false%60.')
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



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Date.comment=unescape('The%20Date%20class%20is%20used%20to%20work%20with%20dates%20and%20times.%20Therefore%20%60Date%20today%60%20and%20%60Date%20now%60%20are%20both%20valid%20in%0AAmber%20and%20answer%20the%20same%20date%20object.%0A%0ADate%20wraps%20the%20%60Date%28%29%60%20JavaScript%20constructor%2C%20and%20Smalltalk%20date%20objects%20are%20JavaScript%20date%20objects.')
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
(t=smalltalk.send((smalltalk.Date || Date), "_now", []));
smalltalk.send(aBlock, "_value", []);
return ((($receiver = smalltalk.send((smalltalk.Date || Date), "_now", [])).klass === smalltalk.Number) ? $receiver -t : smalltalk.send($receiver, "__minus", [t]));
return self;},
args: ["aBlock"],
source: unescape('millisecondsToRun%3A%20aBlock%0A%09%7C%20t%20%7C%0A%09t%20%3A%3D%20Date%20now.%0A%09aBlock%20value.%0A%09%5EDate%20now%20-%20t'),
messageSends: ["now", "value", unescape("-")],
referencedClasses: ["Date"]
}),
smalltalk.Date.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.UndefinedObject.comment=unescape('UndefinedObject%20describes%20the%20behavior%20of%20its%20sole%20instance%2C%20%60nil%60.%20%60nil%60%20represents%20a%20prior%20value%20for%20variables%20that%20have%20not%20been%20initialized%2C%20or%20for%20results%20which%20are%20meaningless.%0A%0A%60nil%60%20is%20the%20Smalltalk%20representation%20of%20the%20%60undefined%60%20JavaScript%20object.')
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
smalltalk.send(self, "_deprecatedAPI", []);
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;},
args: ["aString", "aString2", "aString3"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0A%09%22Kept%20for%20compatibility.%22%0A%09self%20deprecatedAPI.%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3'),
messageSends: ["deprecatedAPI", "subclass:instanceVariableNames:package:"],
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


smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Random.comment=unescape('%60Random%60%20is%20a%20random%20number%20generator%20and%20is%20implemented%20as%20a%20trivial%20wrapper%20around%20javascript%20%60Math.random%28%29%60%20and%20is%20used%20like%20this%3A%0A%0A%09Random%20new%20next%0A%0AThis%20will%20return%20a%20float%20x%20where%20x%20%3C%201%20and%20x%20%3E%200.%20If%20you%20want%20a%20random%20integer%20from%201%20to%2010%20you%20can%20use%20%60%23atRandom%60%0A%0A%0910%20atRandom%0A%0A...and%20if%20you%20want%20a%20random%20number%20in%20a%20specific%20interval%20this%20also%20works%3A%0A%0A%09%283%20to%3A%207%29%20atRandom%0A%0A...but%20be%20aware%20that%20%60%23to%3A%60%20does%20not%20create%20an%20Interval%20as%20in%20other%20Smalltalk%20implementations%20but%20in%20fact%20an%20%60Array%60%20of%20numbers%2C%20so%20it%27s%20better%20to%20use%3A%0A%0A%095%20atRandom%20+%202%0A%0ASince%20%60%23atRandom%60%20is%20implemented%20in%20%60SequencableCollection%60%20you%20can%20easy%20pick%20an%20element%20at%20random%3A%0A%0A%09%23%28%27a%27%20%27b%27%20%27c%27%29%20atRandom%0A%0A...or%20perhaps%20a%20letter%20from%20a%20%60String%60%3A%0A%0A%09%27abc%27%20atRandom%0A%0ASince%20Amber%20does%20not%20have%20Characters%20this%20will%20return%20a%20%60String%60%20of%20length%201%20like%20for%20example%20%60%27b%27%60.')
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



smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel-Objects');
smalltalk.Point.comment=unescape('A%20%60Point%60%20represents%20an%20x-y%20pair%20of%20numbers%20usually%20designating%20a%20geometric%20coordinate.%0APoints%20are%20traditionally%20created%20using%20the%20binary%20%60%23@%60%20message%20to%20a%20number%3A%0A%0A%09100@120%0A%0APoints%20can%20then%20be%20arithmetically%20manipulated%3A%0A%0A%09100@100%20+%20%2810@10%29%0A%0A...or%20for%20example%3A%0A%0A%09%28100@100%29%20*%202%0A%0A**NOTE%3A**%20Creating%20a%20Point%20with%20a%20negative%20y-value%20will%20need%20a%20space%20after%20%60@%60%20in%20order%20to%20avoid%20a%20parsing%20error%3A%0A%0A%09100@%20-100%20%22but%20100@-100%20would%20not%20parse%22%0A%0AAmber%20does%20not%20have%20much%20behavior%20in%20this%20class%20out-of-the-box.')
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
(self['@y']=aNumber);
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
(self['@x']=aNumber);
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
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@x'], "_printString", []), "__comma", [unescape("@")])]);((($receiver = smalltalk.send(smalltalk.send(self['@y'], "_notNil", []), "_and_", [(function(){return smalltalk.send(self['@y'], "_negative", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(stream, "_space", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(stream, "_space", []);})]));return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self['@y'], "_printString", [])]);})]);
return self;},
args: [],
source: unescape('printString%0A%09%22Print%20receiver%20in%20classic%20x@y%20notation.%22%0A%0A%09%5EString%20streamContents%3A%20%5B%3Astream%20%7C%0A%09%09stream%20nextPutAll%3A%20x%20printString%2C%20%27@%27.%0A%09%09%28y%20notNil%20and%3A%20%5By%20negative%5D%29%0A%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09%22Avoid%20ambiguous%20@-%20construct%22%0A%09%09%09%09stream%20space%5D.%0A%09%09stream%20nextPutAll%3A%20y%20printString%5D'),
messageSends: ["streamContents:", "nextPutAll:", unescape("%2C"), "printString", "ifTrue:", "and:", "notNil", "negative", "space"],
referencedClasses: ["String"]
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


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel-Objects');
smalltalk.JSObjectProxy.comment=unescape('JSObjectProxy%20handles%20sending%20messages%20to%20JavaScript%20object%2C%20therefore%20accessing%20JavaScript%20objects%20from%20Amber%20is%20transparent.%0AJSOjbectProxy%20makes%20intensive%20use%20of%20%60%23doesNotUnderstand%3A%60.%0A%0A%23%23%20Examples%0A%0AJSObjectProxy%20objects%20are%20instanciated%20by%20Amber%20when%20a%20Smalltalk%20message%20is%20sent%20to%20a%20JavaScript%20object.%0A%0A%20%20%20%20window%20alert%3A%20%27hello%20world%27.%0A%20%20%20%20window%20inspect.%0A%20%20%20%20%28window%20jQuery%3A%20%27body%27%29%20append%3A%20%27hello%20world%27%0A%0ASmalltalk%20messages%20sends%20are%20converted%20to%20JavaScript%20function%20calls%20or%20object%20property%20access%20_%28in%20this%20order%29_.%20If%20n%20one%20of%20them%20match%2C%20a%20%60MessageNotUnderstood%60%20error%20will%20be%20thrown.%20%0A%0A%23%23%20Message%20conversion%20rules%0A%0A-%20%60someUser%20name%60%20becomes%20%20%60someUser.name%60%0A-%20%60someUser%20name%3A%20%27John%27%60%20becomes%20%60someUser%20name%20%3D%20%22John%22%60%0A-%20%60console%20log%3A%20%27hello%20world%27%60%20becomes%20%60console.log%28%27hello%20world%27%29%60%0A-%20%60%28window%20jQuery%3A%20%27foo%27%29%20css%3A%20%27background%27%20color%3A%20%27red%27%60%20becomes%20%60window.jQuery%28%27foo%27%29.css%28%27background%27%2C%20%27red%27%29%60%0A%0A__Note%3A__%20For%20keyword-based%20messages%2C%20only%20the%20first%20keyword%20is%20kept%3A%20%60window%20foo%3A%201%20bar%3A%202%60%20is%20equivalent%20to%20%60window%20foo%3A%201%20baz%3A%202%60.')
smalltalk.addMethod(
unescape('_jsObject_'),
smalltalk.method({
selector: unescape('jsObject%3A'),
category: 'accessing',
fn: function (aJSObject){
var self=this;
(self['@jsObject']=aJSObject);
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
(variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
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
(obj=smalltalk.send(self, "_jsObject", []));
(selector=smalltalk.send(aMessage, "_selector", []));
(jsSelector=smalltalk.send(selector, "_asJavaScriptSelector", []));
(arguments=smalltalk.send(aMessage, "_arguments", []));
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
fn: function (aSymbol){
var self=this;
var attr=nil;
(attr=smalltalk.send(aSymbol, "_asString", []));
return self['@jsObject'][attr];
return self;},
args: ["aSymbol"],
source: unescape('at%3A%20aSymbol%0A%09%7C%20attr%20%7C%0A%09attr%20%3A%3D%20aSymbol%20asString.%0A%09%3Creturn%20self%5B%27@jsObject%27%5D%5Battr%5D%3E'),
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (aSymbol, anObject){
var self=this;
var attr=nil;
(attr=smalltalk.send(aSymbol, "_asString", []));
self['@jsObject'][attr] = anObject;
return self;},
args: ["aSymbol", "anObject"],
source: unescape('at%3A%20aSymbol%20put%3A%20anObject%0A%09%7C%20attr%20%7C%0A%09attr%20%3A%3D%20aSymbol%20asString.%0A%09%3Cself%5B%27@jsObject%27%5D%5Battr%5D%20%3D%20anObject%3E'),
messageSends: ["asString"],
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


