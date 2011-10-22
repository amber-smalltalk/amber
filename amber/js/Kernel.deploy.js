smalltalk.addPackage('Kernel', {});
smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (anObject){
var self=this;
return smalltalk.send(self, "__eq_eq", [anObject]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_~_eq',
smalltalk.method({
selector: '~=',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [anObject]), "__eq", [false]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;

return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_yourself',
smalltalk.method({
selector: 'yourself',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_class',
smalltalk.method({
selector: 'class',
fn: function (){
var self=this;
return self.klass;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["Object not indexable"]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_copy',
smalltalk.method({
selector: 'copy',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_shallowCopy", []), "_postCopy", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
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
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
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
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_postCopy',
smalltalk.method({
selector: 'postCopy',
fn: function (){
var self=this;

return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'__minus_gt',
smalltalk.method({
selector: '->',
fn: function (anObject){
var self=this;
return smalltalk.send((smalltalk.Association || Association), "_key_value_", [self, anObject]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
fn: function (){
var self=this;
return smalltalk.send(self, "_printString", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_asJavascript',
smalltalk.method({
selector: 'asJavascript',
fn: function (){
var self=this;
return smalltalk.send(self, "_asString", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_perform_',
smalltalk.method({
selector: 'perform:',
fn: function (aSymbol){
var self=this;
return smalltalk.send(self, "_perform_withArguments_", [aSymbol, []]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_perform_withArguments_',
smalltalk.method({
selector: 'perform:withArguments:',
fn: function (aSymbol, aCollection){
var self=this;
return smalltalk.send(self, "_basicPerform_withArguments_", [smalltalk.send(aSymbol, "_asSelector", []), aCollection]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_instVarAt_',
smalltalk.method({
selector: 'instVarAt:',
fn: function (aString){
var self=this;
return self['@'+aString];
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_instVarAt_put_',
smalltalk.method({
selector: 'instVarAt:put:',
fn: function (aString, anObject){
var self=this;
self['@' + aString] = anObject;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_basicAt_',
smalltalk.method({
selector: 'basicAt:',
fn: function (aString){
var self=this;
return self[aString];
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_basicAt_put_',
smalltalk.method({
selector: 'basicAt:put:',
fn: function (aString, anObject){
var self=this;
return self[aString] = anObject;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_error_',
smalltalk.method({
selector: 'error:',
fn: function (aString){
var self=this;
smalltalk.send((smalltalk.Error || Error), "_signal_", [aString]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_subclassResponsibility',
smalltalk.method({
selector: 'subclassResponsibility',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["This method is a responsibility of a subclass"]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_shouldNotImplement',
smalltalk.method({
selector: 'shouldNotImplement',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", [smalltalk.send("This method should not be implemented in ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_try_catch_',
smalltalk.method({
selector: 'try:catch:',
fn: function (aBlock, anotherBlock){
var self=this;
try{aBlock()} catch(e) {anotherBlock(e)};
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send("a ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_printNl',
smalltalk.method({
selector: 'printNl',
fn: function (){
var self=this;
console.log(self);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_isKindOf_',
smalltalk.method({
selector: 'isKindOf:',
fn: function (aClass){
var self=this;
return ((($receiver = smalltalk.send(self, "_isMemberOf_", [aClass])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return true;})() : (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return true;}), (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);})]));
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_isMemberOf_',
smalltalk.method({
selector: 'isMemberOf:',
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [aClass]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_ifNil_',
smalltalk.method({
selector: 'ifNil:',
fn: function (aBlock){
var self=this;
return self;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_ifNil_ifNotNil_',
smalltalk.method({
selector: 'ifNil:ifNotNil:',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(anotherBlock, "_value", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_ifNotNil_',
smalltalk.method({
selector: 'ifNotNil:',
fn: function (aBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_ifNotNil_ifNil_',
smalltalk.method({
selector: 'ifNotNil:ifNil:',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_isNil',
smalltalk.method({
selector: 'isNil',
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_notNil',
smalltalk.method({
selector: 'notNil',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_isNil", []), "_not", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_isClass',
smalltalk.method({
selector: 'isClass',
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_isMetaclass',
smalltalk.method({
selector: 'isMetaclass',
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_isNumber',
smalltalk.method({
selector: 'isNumber',
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_isString',
smalltalk.method({
selector: 'isString',
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_isParseFailure',
smalltalk.method({
selector: 'isParseFailure',
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_basicPerform_',
smalltalk.method({
selector: 'basicPerform:',
fn: function (aSymbol){
var self=this;
return smalltalk.send(self, "_basicPerform_withArguments_", [aSymbol, []]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_basicPerform_withArguments_',
smalltalk.method({
selector: 'basicPerform:withArguments:',
fn: function (aSymbol, aCollection){
var self=this;
return self[aSymbol].apply(self, aCollection);;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_basicDelete_',
smalltalk.method({
selector: 'basicDelete:',
fn: function (aString){
var self=this;
delete self[aString];
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_doesNotUnderstand_',
smalltalk.method({
selector: 'doesNotUnderstand:',
fn: function (aMessage){
var self=this;
(function($rec){smalltalk.send($rec, "_receiver_", [self]);smalltalk.send($rec, "_message_", [aMessage]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.MessageNotUnderstood || MessageNotUnderstood), "_new", []));
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_asJSON',
smalltalk.method({
selector: 'asJSON',
fn: function (){
var self=this;
return JSON.stringify(self._asJSONObject());
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
fn: function (){
var self=this;
var object=nil;
object=smalltalk.send((smalltalk.Object || Object), "_new", []);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_instanceVariableNames", []), "_do_", [(function(each){return smalltalk.send(object, "_basicAt_put_", [each, smalltalk.send(smalltalk.send(self, "_instVarAt_", [each]), "_asJSONObject", [])]);})]);
return object;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_halt',
smalltalk.method({
selector: 'halt',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["Halt encountered"]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_log_block_',
smalltalk.method({
selector: 'log:block:',
fn: function (aString, aBlock){
var self=this;
var result=nil;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(smalltalk.send(aString, "__comma", [" time: "]), "__comma", [smalltalk.send(smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [(function(){return result=smalltalk.send(aBlock, "_value", []);})]), "_printString", [])])]);
return result;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'__eq_eq',
smalltalk.method({
selector: '==',
fn: function (anObject){
var self=this;
return self === anObject;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_~~',
smalltalk.method({
selector: '~~',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq_eq", [anObject]), "__eq", [false]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_deprecatedAPI',
smalltalk.method({
selector: 'deprecatedAPI',
fn: function (){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.getThisContext()), "_home", []), "_asString", []), "__comma", [unescape("%20is%20deprecated%21")])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_storeString',
smalltalk.method({
selector: 'storeString',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(s){return smalltalk.send(self, "_storeOn_", [s]);})]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
'_storeOn_',
smalltalk.method({
selector: 'storeOn:',
fn: function (aStream){
var self=this;
smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(self, "_printString", [])]);
return self;}
}),
smalltalk.Object);


smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;

return self;}
}),
smalltalk.Object.klass);


smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_classes',
smalltalk.method({
selector: 'classes',
fn: function (){
var self=this;
return self.classes();
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_readJSON_',
smalltalk.method({
selector: 'readJSON:',
fn: function (anObject){
var self=this;
return self.readJSObject(anObject);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_at_',
smalltalk.method({
selector: 'at:',
fn: function (aString){
var self=this;
return self[aString];
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_removeClass_',
smalltalk.method({
selector: 'removeClass:',
fn: function (aClass){
var self=this;
((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [unescape("%20is%20a%20Metaclass%20and%20cannot%20be%20removed%21")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [unescape("%20is%20a%20Metaclass%20and%20cannot%20be%20removed%21")])]);})]));
smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [(function(each){return smalltalk.send(aClass, "_removeCompiledMethod_", [each]);})]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_methodDictionary", []), "_values", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(aClass, "_class", []), "_removeCompiledMethod_", [each]);})]);
smalltalk.send(self, "_basicDelete_", [smalltalk.send(aClass, "_name", [])]);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_basicParse_',
smalltalk.method({
selector: 'basicParse:',
fn: function (aString){
var self=this;
return smalltalk.parser.parse(aString);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aString){
var self=this;
var result=nil;
smalltalk.send(self, "_try_catch_", [(function(){return result=smalltalk.send(self, "_basicParse_", [aString]);}), (function(ex){return smalltalk.send(smalltalk.send(self, "_parseError_parsing_", [ex, aString]), "_signal", []);})]);
return result;
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_parseError_parsing_',
smalltalk.method({
selector: 'parseError:parsing:',
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
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_packages',
smalltalk.method({
selector: 'packages',
fn: function (){
var self=this;
return self.packages.all();
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_packageAt_',
smalltalk.method({
selector: 'packageAt:',
fn: function (packageName){
var self=this;
return self.packages[packageName];
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_packageAt_ifAbsent_',
smalltalk.method({
selector: 'packageAt:ifAbsent:',
fn: function (packageName, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_packageAt_", [packageName]), "_ifNil_", [aBlock]);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_createPackage_',
smalltalk.method({
selector: 'createPackage:',
fn: function (packageName){
var self=this;
return smalltalk.addPackage(packageName, nil);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_deletePackage_',
smalltalk.method({
selector: 'deletePackage:',
fn: function (packageName){
var self=this;
delete smalltalk.packages[packageName];
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_removePackage_',
smalltalk.method({
selector: 'removePackage:',
fn: function (packageName){
var self=this;
var pkg=nil;
pkg=smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);})]);
smalltalk.send(smalltalk.send(pkg, "_classes", []), "_do_", [(function(each){return smalltalk.send(self, "_removeClass_", [each]);})]);
smalltalk.send(self, "_deletePackage_", [packageName]);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_renamePackage_to_',
smalltalk.method({
selector: 'renamePackage:to:',
fn: function (packageName, newName){
var self=this;
var pkg=nil;
pkg=smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);})]);
(($receiver = smalltalk.send(self, "_packageAt_", [newName])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Already exists a package called: ", "__comma", [newName])]);})() : nil;
smalltalk.packages[newName] = smalltalk.packages[packageName];
smalltalk.send(pkg, "_name_", [newName]);
smalltalk.send(self, "_deletePackage_", [packageName]);
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_reservedWords',
smalltalk.method({
selector: 'reservedWords',
fn: function (){
var self=this;
return self.reservedWords;
return self;}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_createPackage_properties_',
smalltalk.method({
selector: 'createPackage:properties:',
fn: function (packageName, aDict){
var self=this;
var object=nil;
object = {};;
smalltalk.send(aDict, "_keysAndValuesDo_", [(function(key, value){return object[key] = value;})]);
return smalltalk.addPackage(packageName, object);
return self;}
}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_current',
smalltalk.method({
selector: 'current',
fn: function (){
var self=this;
return smalltalk;
return self;}
}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('Package', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_name',
smalltalk.method({
selector: 'name',
fn: function (){
var self=this;
return self.pkgName || nil;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
'_name_',
smalltalk.method({
selector: 'name:',
fn: function (aString){
var self=this;
return self.pkgName = aString;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
'_classes',
smalltalk.method({
selector: 'classes',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_select_", [(function(c){return smalltalk.send(smalltalk.send(c, "_package", []), "__eq_eq", [self]);})]);
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send(self, "_name", []);
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
'_dependencies',
smalltalk.method({
selector: 'dependencies',
fn: function (){
var self=this;
return smalltalk.send(self, "_propertyAt_ifAbsent_", ["dependencies", (function(){return [];})]);
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
'_dependencies_',
smalltalk.method({
selector: 'dependencies:',
fn: function (anArray){
var self=this;
return smalltalk.send(self, "_propertyAt_put_", ["dependencies", anArray]);
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
'_properties',
smalltalk.method({
selector: 'properties',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
for (var i in self.properties) {
		result._at_put_(i, self.properties[i]);
	}
	return result;;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
'_propertiesAsJSON',
smalltalk.method({
selector: 'propertiesAsJSON',
fn: function (){
var self=this;
return JSON.stringify(self.properties);
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
'_properties_',
smalltalk.method({
selector: 'properties:',
fn: function (aDict){
var self=this;
var object=nil;
object = {};;
smalltalk.send(aDict, "_keysAndValuesDo_", [(function(key, value){return object[key] = value;})]);
return self.properties = object;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
'_jsProperties',
smalltalk.method({
selector: 'jsProperties',
fn: function (){
var self=this;
return self.properties || nil;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
'_jsProperties_',
smalltalk.method({
selector: 'jsProperties:',
fn: function (aJSObject){
var self=this;
return self.properties = aJSObject;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
'_propertyAt_',
smalltalk.method({
selector: 'propertyAt:',
fn: function (key){
var self=this;
return self.properties[key];
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
'_propertyAt_put_',
smalltalk.method({
selector: 'propertyAt:put:',
fn: function (key, value){
var self=this;
return self.properties[key] = value;
return self;}
}),
smalltalk.Package);

smalltalk.addMethod(
'_propertyAt_ifAbsent_',
smalltalk.method({
selector: 'propertyAt:ifAbsent:',
fn: function (key, block){
var self=this;
return (($receiver = smalltalk.send(self, "_propertyAt_", [key])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(block, "_value", []);})() : $receiver;
return self;}
}),
smalltalk.Package);


smalltalk.addMethod(
'_named_',
smalltalk.method({
selector: 'named:',
fn: function (aPackageName){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_packageAt_", [aPackageName]);
return self;}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
'_named_ifAbsent_',
smalltalk.method({
selector: 'named:ifAbsent:',
fn: function (aPackageName, aBlock){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_packageAt_ifAbsent_", [aPackageName, aBlock]);
return self;}
}),
smalltalk.Package.klass);


smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initialize", []);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_basicNew',
smalltalk.method({
selector: 'basicNew',
fn: function (){
var self=this;
return new self.fn();
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_name',
smalltalk.method({
selector: 'name',
fn: function (){
var self=this;
return self.className || nil;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_superclass',
smalltalk.method({
selector: 'superclass',
fn: function (){
var self=this;
return self.superclass || nil;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_subclasses',
smalltalk.method({
selector: 'subclasses',
fn: function (){
var self=this;
return smalltalk.subclasses(self);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_allSubclasses',
smalltalk.method({
selector: 'allSubclasses',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send(self, "_subclasses", []);
smalltalk.send(smalltalk.send(self, "_subclasses", []), "_do_", [(function(each){return smalltalk.send(result, "_addAll_", [smalltalk.send(each, "_allSubclasses", [])]);})]);
return result;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_withAllSubclasses',
smalltalk.method({
selector: 'withAllSubclasses',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_allSubclasses", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_with_", [self]));
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_prototype',
smalltalk.method({
selector: 'prototype',
fn: function (){
var self=this;
return self.fn.prototype;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_methodDictionary',
smalltalk.method({
selector: 'methodDictionary',
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
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_methodsFor_',
smalltalk.method({
selector: 'methodsFor:',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_class_category_", [self, aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassCategoryReader || ClassCategoryReader), "_new", []));
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_addCompiledMethod_',
smalltalk.method({
selector: 'addCompiledMethod:',
fn: function (aMethod){
var self=this;
smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_instanceVariableNames',
smalltalk.method({
selector: 'instanceVariableNames',
fn: function (){
var self=this;
return self.iVarNames;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_comment',
smalltalk.method({
selector: 'comment',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["comment"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_comment_',
smalltalk.method({
selector: 'comment:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["comment", aString]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_commentStamp',
smalltalk.method({
selector: 'commentStamp',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_class_", [self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassCommentReader || ClassCommentReader), "_new", []));
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_removeCompiledMethod_',
smalltalk.method({
selector: 'removeCompiledMethod:',
fn: function (aMethod){
var self=this;
delete self.fn.prototype[aMethod.selector._asSelector()];
	delete self.fn.prototype.methods[aMethod.selector];
	smalltalk.init(self);;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_inheritsFrom_',
smalltalk.method({
selector: 'inheritsFrom:',
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(aClass, "_allSubclasses", []), "_includes_", [self]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_protocols',
smalltalk.method({
selector: 'protocols',
fn: function (){
var self=this;
var protocols=nil;
protocols=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(protocols, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(protocols, "_add_", [smalltalk.send(each, "_category", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(protocols, "_add_", [smalltalk.send(each, "_category", [])]);})]));})]);
return smalltalk.send(protocols, "_sort", []);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_protocolsDo_',
smalltalk.method({
selector: 'protocolsDo:',
fn: function (aBlock){
var self=this;
var methodsByCategory=nil;
methodsByCategory=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_values", []), "_do_", [(function(m){return smalltalk.send(smalltalk.send(methodsByCategory, "_at_ifAbsentPut_", [smalltalk.send(m, "_category", []), (function(){return smalltalk.send((smalltalk.Array || Array), "_new", []);})]), "_add_", [m]);})]);
smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [(function(category){return smalltalk.send(aBlock, "_value_value_", [category, smalltalk.send(methodsByCategory, "_at_", [category])]);})]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_allInstanceVariableNames',
smalltalk.method({
selector: 'allInstanceVariableNames',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send(smalltalk.send(self, "_instanceVariableNames", []), "_copy", []);
(($receiver = smalltalk.send(self, "_superclass", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(result, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allInstanceVariableNames", [])]);})() : nil;
return result;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_methodAt_',
smalltalk.method({
selector: 'methodAt:',
fn: function (aString){
var self=this;
return smalltalk.methods(self)[aString];
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_methodsFor_stamp_',
smalltalk.method({
selector: 'methodsFor:stamp:',
fn: function (aString, aStamp){
var self=this;
return smalltalk.send(self, "_methodsFor_", [aString]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_commentStamp_prior_',
smalltalk.method({
selector: 'commentStamp:prior:',
fn: function (aStamp, prior){
var self=this;
return smalltalk.send(self, "_commentStamp", []);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_compile_',
smalltalk.method({
selector: 'compile:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_compile_category_", [aString, ""]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_compile_category_',
smalltalk.method({
selector: 'compile:category:',
fn: function (aString, anotherString){
var self=this;
var method=nil;
method=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_load_forClass_", [aString, self]);
smalltalk.send(method, "_category_", [anotherString]);
smalltalk.send(self, "_addCompiledMethod_", [method]);
return self;}
}),
smalltalk.Behavior);



smalltalk.addClass('Class', smalltalk.Behavior, [], 'Kernel');
smalltalk.addMethod(
'_category',
smalltalk.method({
selector: 'category',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_package", [])) == nil || $receiver == undefined) ? (function(){return "Unclassified";})() : (function(){return smalltalk.send(smalltalk.send(self, "_package", []), "_name", []);})();
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
'_subclass_instanceVariableNames_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:',
fn: function (aString, anotherString){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, anotherString, nil]);
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
'_subclass_instanceVariableNames_category_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:category:',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
'_isClass',
smalltalk.method({
selector: 'isClass',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send(self, "_name", []);
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
'_rename_',
smalltalk.method({
selector: 'rename:',
fn: function (aString){
var self=this;

		smalltalk[aString] = self;
		delete smalltalk[self.className];
		self.className = aString;
	;
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
'_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:',
fn: function (aString, aString2, classVars, pools, aString3){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
'_package',
smalltalk.method({
selector: 'package',
fn: function (){
var self=this;
return self.pkg;
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
'_package_',
smalltalk.method({
selector: 'package:',
fn: function (aPackage){
var self=this;
self.pkg = aPackage;
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
'_subclass_instanceVariableNames_package_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:package:',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_superclass_subclass_instanceVariableNames_package_", [self, aString, aString2, aString3]);
return self;}
}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel');
smalltalk.addMethod(
'_instanceClass',
smalltalk.method({
selector: 'instanceClass',
fn: function (){
var self=this;
return self.instanceClass;
return self;}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
'_instanceVariableNames_',
smalltalk.method({
selector: 'instanceVariableNames:',
fn: function (aCollection){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_class_instanceVariableNames_", [self, aCollection]);
return self;}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
'_isMetaclass',
smalltalk.method({
selector: 'isMetaclass',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_instanceClass", []), "_name", []), "__comma", [" class"]);
return self;}
}),
smalltalk.Metaclass);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_source',
smalltalk.method({
selector: 'source',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["source"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_source_',
smalltalk.method({
selector: 'source:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["source", aString]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_category',
smalltalk.method({
selector: 'category',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["category"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_category_',
smalltalk.method({
selector: 'category:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["category", aString]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["selector"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_selector_',
smalltalk.method({
selector: 'selector:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["selector", aString]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_fn',
smalltalk.method({
selector: 'fn',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["fn"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_fn_',
smalltalk.method({
selector: 'fn:',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["fn", aBlock]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_messageSends',
smalltalk.method({
selector: 'messageSends',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["messageSends"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_methodClass',
smalltalk.method({
selector: 'methodClass',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["methodClass"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_referencedClasses',
smalltalk.method({
selector: 'referencedClasses',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["referencedClasses"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_arguments',
smalltalk.method({
selector: 'arguments',
fn: function (){
var self=this;
return self.args || [];
return self;}
}),
smalltalk.CompiledMethod);



smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (aNumber){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aNumber, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
return Number(self) == aNumber;
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}}
}),
smalltalk.Number);

smalltalk.addMethod(
'__gt',
smalltalk.method({
selector: '>',
fn: function (aNumber){
var self=this;
return self > aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'__lt',
smalltalk.method({
selector: '<',
fn: function (aNumber){
var self=this;
return self < aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'__gt_eq',
smalltalk.method({
selector: '>=',
fn: function (aNumber){
var self=this;
return self >= aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'__lt_eq',
smalltalk.method({
selector: '<=',
fn: function (aNumber){
var self=this;
return self <= aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'__plus',
smalltalk.method({
selector: '+',
fn: function (aNumber){
var self=this;
return self + aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'__minus',
smalltalk.method({
selector: '-',
fn: function (aNumber){
var self=this;
return self - aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'__star',
smalltalk.method({
selector: '*',
fn: function (aNumber){
var self=this;
return self * aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'__slash',
smalltalk.method({
selector: '/',
fn: function (aNumber){
var self=this;
return self / aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_max_',
smalltalk.method({
selector: 'max:',
fn: function (aNumber){
var self=this;
return Math.max(self, aNumber);;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_min_',
smalltalk.method({
selector: 'min:',
fn: function (aNumber){
var self=this;
return Math.min(self, aNumber);;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_rounded',
smalltalk.method({
selector: 'rounded',
fn: function (){
var self=this;
return Math.round(self);;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_truncated',
smalltalk.method({
selector: 'truncated',
fn: function (){
var self=this;
var result=nil;
((($receiver = self >= (0)).klass === smalltalk.Boolean) ? ($receiver ? (function(){return result = Math.floor(self);;})() : (function(){return result = (Math.floor(self * (-1)) * (-1));;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return result = Math.floor(self);;}), (function(){return result = (Math.floor(self * (-1)) * (-1));;})]));
return result;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_to_',
smalltalk.method({
selector: 'to:',
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
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_timesRepeat_',
smalltalk.method({
selector: 'timesRepeat:',
fn: function (aBlock){
var self=this;
var integer=nil;
var count=nil;
integer=smalltalk.send(self, "_truncated", []);
count=(1);
(function(){while(!(function(){return ((($receiver = count).klass === smalltalk.Number) ? $receiver >self : smalltalk.send($receiver, "__gt", [self]));})()) {(function(){smalltalk.send(aBlock, "_value", []);return count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()}})();
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_to_do_',
smalltalk.method({
selector: 'to:do:',
fn: function (stop, aBlock){
var self=this;
var nextValue=nil;
nextValue=self;
(function(){while((function(){return ((($receiver = nextValue).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [nextValue]);return nextValue=((($receiver = nextValue).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()}})();
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
fn: function (){
var self=this;
return smalltalk.send(self, "_printString", []);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_asJavascript',
smalltalk.method({
selector: 'asJavascript',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [smalltalk.send(self, "_printString", [])]), "__comma", [unescape("%29")]);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return String(self);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_isNumber',
smalltalk.method({
selector: 'isNumber',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_atRandom',
smalltalk.method({
selector: 'atRandom',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(((($receiver = smalltalk.send(smalltalk.send((smalltalk.Random || Random), "_new", []), "_next", [])).klass === smalltalk.Number) ? $receiver *self : smalltalk.send($receiver, "__star", [self])), "_truncated", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'__at',
smalltalk.method({
selector: '@',
fn: function (aNumber){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [self, aNumber]);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_asPoint',
smalltalk.method({
selector: 'asPoint',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [self, self]);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_clearInterval',
smalltalk.method({
selector: 'clearInterval',
fn: function (){
var self=this;
clearInterval(Number(self));
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_clearTimeout',
smalltalk.method({
selector: 'clearTimeout',
fn: function (){
var self=this;
clearTimeout(Number(self));
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_even',
smalltalk.method({
selector: 'even',
fn: function (){
var self=this;
return smalltalk.send((0), "__eq", [smalltalk.send(self, "_\\\\", [(2)])]);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_odd',
smalltalk.method({
selector: 'odd',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_even", []), "_not", []);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_negated',
smalltalk.method({
selector: 'negated',
fn: function (){
var self=this;
return (0) - self;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'__eq_eq',
smalltalk.method({
selector: '==',
fn: function (aNumber){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aNumber, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})]));
return Number(self) === Number(aNumber);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq_eq'){return e.fn()} throw(e)}}
}),
smalltalk.Number);

smalltalk.addMethod(
'_printShowingDecimalPlaces_',
smalltalk.method({
selector: 'printShowingDecimalPlaces:',
fn: function (placesDesired){
var self=this;
return self.toFixed(placesDesired);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_\',
smalltalk.method({
selector: '\',
fn: function (aNumber){
var self=this;
return self % aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_to_by_',
smalltalk.method({
selector: 'to:by:',
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
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_to_by_do_',
smalltalk.method({
selector: 'to:by:do:',
fn: function (stop, step, aBlock){
var self=this;
var value=nil;
value=self;
((($receiver = smalltalk.send(step, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})]));
((($receiver = ((($receiver = step).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})() : (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();}), (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})]));
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
fn: function (){
var self=this;
return smalltalk.send(self, "_copy", []);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_copy',
smalltalk.method({
selector: 'copy',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_\\',
smalltalk.method({
selector: '\\',
fn: function (aNumber){
var self=this;
return self % aNumber;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_sqrt',
smalltalk.method({
selector: 'sqrt',
fn: function (){
var self=this;
return Math.sqrt(self);
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
'_squared',
smalltalk.method({
selector: 'squared',
fn: function (){
var self=this;
return self * self;
return self;}
}),
smalltalk.Number);


smalltalk.addMethod(
'_pi',
smalltalk.method({
selector: 'pi',
fn: function (){
var self=this;
return Math.PI;
return self;}
}),
smalltalk.Number.klass);


smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_compiledSource',
smalltalk.method({
selector: 'compiledSource',
fn: function (){
var self=this;
return self.toString();
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileTrue_',
smalltalk.method({
selector: 'whileTrue:',
fn: function (aBlock){
var self=this;
while(self()) {aBlock()};
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileFalse_',
smalltalk.method({
selector: 'whileFalse:',
fn: function (aBlock){
var self=this;
while(!self()) {aBlock()};
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value',
smalltalk.method({
selector: 'value',
fn: function (){
var self=this;
return self();;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value_',
smalltalk.method({
selector: 'value:',
fn: function (anArg){
var self=this;
return self(anArg);;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value_value_',
smalltalk.method({
selector: 'value:value:',
fn: function (firstArg, secondArg){
var self=this;
return self(firstArg, secondArg);;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value_value_value_',
smalltalk.method({
selector: 'value:value:value:',
fn: function (firstArg, secondArg, thirdArg){
var self=this;
return self(firstArg, secondArg, thirdArg);;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_valueWithPossibleArguments_',
smalltalk.method({
selector: 'valueWithPossibleArguments:',
fn: function (aCollection){
var self=this;
return self.apply(null, aCollection);;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_on_do_',
smalltalk.method({
selector: 'on:do:',
fn: function (anErrorClass, aBlock){
var self=this;
smalltalk.send(self, "_try_catch_", [self, (function(error){return ((($receiver = smalltalk.send(error, "_isKindOf_", [anErrorClass])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aBlock, "_value_", [error]);})() : (function(){return smalltalk.send(error, "_signal", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value_", [error]);}), (function(){return smalltalk.send(error, "_signal", []);})]));})]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_valueWithTimeout_',
smalltalk.method({
selector: 'valueWithTimeout:',
fn: function (aNumber){
var self=this;
return setTimeout(self, aNumber);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_valueWithInterval_',
smalltalk.method({
selector: 'valueWithInterval:',
fn: function (aNumber){
var self=this;
return setInterval(self, aNumber);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileFalse',
smalltalk.method({
selector: 'whileFalse',
fn: function (){
var self=this;
smalltalk.send(self, "_whileFalse_", [(function(){return nil;})]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileTrue',
smalltalk.method({
selector: 'whileTrue',
fn: function (){
var self=this;
smalltalk.send(self, "_whileTrue_", [(function(){return nil;})]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
fn: function (){
var self=this;
return new self();
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_applyTo_arguments_',
smalltalk.method({
selector: 'applyTo:arguments:',
fn: function (anObject, aCollection){
var self=this;
return self.apply(anObject, aCollection);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_timeToRun',
smalltalk.method({
selector: 'timeToRun',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [self]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_numArgs',
smalltalk.method({
selector: 'numArgs',
fn: function (){
var self=this;
return self.length;
return self;}
}),
smalltalk.BlockClosure);



smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (aBoolean){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
return Boolean(self == true) == aBoolean;
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}}
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_ifTrue_',
smalltalk.method({
selector: 'ifTrue:',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [aBlock, (function(){return nil;})]);
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_ifFalse_',
smalltalk.method({
selector: 'ifFalse:',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [(function(){return nil;}), aBlock]);
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_ifFalse_ifTrue_',
smalltalk.method({
selector: 'ifFalse:ifTrue:',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [anotherBlock, aBlock]);
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_ifTrue_ifFalse_',
smalltalk.method({
selector: 'ifTrue:ifFalse:',
fn: function (aBlock, anotherBlock){
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
'_and_',
smalltalk.method({
selector: 'and:',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [aBlock, (function(){return false;})]);
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_or_',
smalltalk.method({
selector: 'or:',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [(function(){return true;}), aBlock]);
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_not',
smalltalk.method({
selector: 'not',
fn: function (){
var self=this;
return smalltalk.send(self, "__eq", [false]);
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return self.toString();
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_&',
smalltalk.method({
selector: '&',
fn: function (aBoolean){
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
'_|',
smalltalk.method({
selector: '|',
fn: function (aBoolean){
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

smalltalk.addMethod(
'__eq_eq',
smalltalk.method({
selector: '==',
fn: function (aBoolean){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})]));
return Boolean(self == true) === Boolean(aBoolean == true);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq_eq'){return e.fn()} throw(e)}}
}),
smalltalk.Boolean);



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_year',
smalltalk.method({
selector: 'year',
fn: function (){
var self=this;
return self.getFullYear();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_month',
smalltalk.method({
selector: 'month',
fn: function (){
var self=this;
return self.getMonth() + 1;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_month_',
smalltalk.method({
selector: 'month:',
fn: function (aNumber){
var self=this;
self.setMonth(aNumber - 1);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_day',
smalltalk.method({
selector: 'day',
fn: function (){
var self=this;
return smalltalk.send(self, "_dayOfWeek", []);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_dayOfWeek',
smalltalk.method({
selector: 'dayOfWeek',
fn: function (){
var self=this;
return self.getDay() + 1;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_dayOfWeek_',
smalltalk.method({
selector: 'dayOfWeek:',
fn: function (aNumber){
var self=this;
return self.setDay(aNumber - 1);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_day_',
smalltalk.method({
selector: 'day:',
fn: function (aNumber){
var self=this;
smalltalk.send(self, "_day_", [aNumber]);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_year_',
smalltalk.method({
selector: 'year:',
fn: function (aNumber){
var self=this;
self.setFullYear(aNumber);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_dayOfMonth',
smalltalk.method({
selector: 'dayOfMonth',
fn: function (){
var self=this;
return self.getDate();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_dayOfMonth_',
smalltalk.method({
selector: 'dayOfMonth:',
fn: function (aNumber){
var self=this;
self.setDate(aNumber);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
fn: function (){
var self=this;
return self.toString();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send(self, "_asString", []);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_asMilliseconds',
smalltalk.method({
selector: 'asMilliseconds',
fn: function (){
var self=this;
return smalltalk.send(self, "_time", []);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_time',
smalltalk.method({
selector: 'time',
fn: function (){
var self=this;
return self.getTime();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_time_',
smalltalk.method({
selector: 'time:',
fn: function (aNumber){
var self=this;
self.setTime(aNumber);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_asDateString',
smalltalk.method({
selector: 'asDateString',
fn: function (){
var self=this;
return self.toDateString();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_asTimeString',
smalltalk.method({
selector: 'asTimeString',
fn: function (){
var self=this;
return self.toTimeString();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_asLocaleString',
smalltalk.method({
selector: 'asLocaleString',
fn: function (){
var self=this;
return self.toLocaleString();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_asNumber',
smalltalk.method({
selector: 'asNumber',
fn: function (){
var self=this;
return smalltalk.send(self, "_asMilliseconds", []);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_hours_',
smalltalk.method({
selector: 'hours:',
fn: function (aNumber){
var self=this;
self.setHours(aNumber);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_minutes_',
smalltalk.method({
selector: 'minutes:',
fn: function (aNumber){
var self=this;
self.setMinutes(aNumber);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_seconds_',
smalltalk.method({
selector: 'seconds:',
fn: function (aNumber){
var self=this;
self.setSeconds(aNumber);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_milliseconds_',
smalltalk.method({
selector: 'milliseconds:',
fn: function (aNumber){
var self=this;
self.setMilliseconds(aNumber);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_hours',
smalltalk.method({
selector: 'hours',
fn: function (){
var self=this;
return self.getHours();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_minutes',
smalltalk.method({
selector: 'minutes',
fn: function (){
var self=this;
return self.getMinutes();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_seconds',
smalltalk.method({
selector: 'seconds',
fn: function (){
var self=this;
return self.getSeconds();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_milliseconds',
smalltalk.method({
selector: 'milliseconds',
fn: function (){
var self=this;
return self.getMilliseconds();
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'__lt',
smalltalk.method({
selector: '<',
fn: function (aDate){
var self=this;
return self < aDate;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'__gt',
smalltalk.method({
selector: '>',
fn: function (aDate){
var self=this;
return self > aDate;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'__lt_eq',
smalltalk.method({
selector: '<=',
fn: function (aDate){
var self=this;
return self <= aDate;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'__gt_eq',
smalltalk.method({
selector: '>=',
fn: function (aDate){
var self=this;
return self >= aDate;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'__minus',
smalltalk.method({
selector: '-',
fn: function (aDate){
var self=this;
return self - aDate;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'__plus',
smalltalk.method({
selector: '+',
fn: function (aDate){
var self=this;
return self + aDate;
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.Date);


smalltalk.addMethod(
'_new_',
smalltalk.method({
selector: 'new:',
fn: function (anObject){
var self=this;
return new Date(anObject);
return self;}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
'_fromString_',
smalltalk.method({
selector: 'fromString:',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_new_", [aString]);
return self;}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
'_fromSeconds_',
smalltalk.method({
selector: 'fromSeconds:',
fn: function (aNumber){
var self=this;
return smalltalk.send(self, "_fromMilliseconds_", [((($receiver = aNumber).klass === smalltalk.Number) ? $receiver *(1000) : smalltalk.send($receiver, "__star", [(1000)]))]);
return self;}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
'_fromMilliseconds_',
smalltalk.method({
selector: 'fromMilliseconds:',
fn: function (aNumber){
var self=this;
return smalltalk.send(self, "_new_", [aNumber]);
return self;}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
'_today',
smalltalk.method({
selector: 'today',
fn: function (){
var self=this;
return smalltalk.send(self, "_new", []);
return self;}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
'_now',
smalltalk.method({
selector: 'now',
fn: function (){
var self=this;
return smalltalk.send(self, "_today", []);
return self;}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
'_millisecondsToRun_',
smalltalk.method({
selector: 'millisecondsToRun:',
fn: function (aBlock){
var self=this;
var t=nil;
t=smalltalk.send((smalltalk.Date || Date), "_now", []);
smalltalk.send(aBlock, "_value", []);
return ((($receiver = smalltalk.send((smalltalk.Date || Date), "_now", [])).klass === smalltalk.Number) ? $receiver -t : smalltalk.send($receiver, "__minus", [t]));
return self;}
}),
smalltalk.Date.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_subclass_instanceVariableNames_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:',
fn: function (aString, anotherString){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, anotherString, nil]);
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_subclass_instanceVariableNames_category_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:category:',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_ifNil_',
smalltalk.method({
selector: 'ifNil:',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_ifNil_ifNotNil_", [aBlock, (function(){return nil;})]);
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_ifNotNil_',
smalltalk.method({
selector: 'ifNotNil:',
fn: function (aBlock){
var self=this;
return self;
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_ifNil_ifNotNil_',
smalltalk.method({
selector: 'ifNil:ifNotNil:',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_ifNotNil_ifNil_',
smalltalk.method({
selector: 'ifNotNil:ifNil:',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(anotherBlock, "_value", []);
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_isNil',
smalltalk.method({
selector: 'isNil',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_notNil',
smalltalk.method({
selector: 'notNil',
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return "nil";
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_subclass_instanceVariableNames_package_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:package:',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_superclass_subclass_instanceVariableNames_package_", [self, aString, aString2, aString3]);
return self;}
}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["You cannot create new instances of UndefinedObject. Use nil"]);
return self;}
}),
smalltalk.UndefinedObject.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel');
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
var array=nil;
var index=nil;
array=smalltalk.send((smalltalk.Array || Array), "_new", []);
index=(0);
smalltalk.send(self, "_do_", [(function(each){index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return smalltalk.send(array, "_at_put_", [index, each]);})]);
return array;
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
newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
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
first=true;
smalltalk.send(self, "_do_", [(function(each){((($receiver = first).klass === smalltalk.Boolean) ? ($receiver ? (function(){return first=false;})() : (function(){return smalltalk.send(anotherBlock, "_value", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return first=false;}), (function(){return smalltalk.send(anotherBlock, "_value", []);})]));return smalltalk.send(aBlock, "_value_", [each]);})]);
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
result=anObject;
smalltalk.send(self, "_do_", [(function(each){return result=smalltalk.send(aBlock, "_value_value_", [result, each]);})]);
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
stream=smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_new", []), "_writeStream", []);
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
smalltalk.send(self, "_subclassResponsibility", []);
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


smalltalk.addClass('SequenceableCollection', smalltalk.Collection, [], 'Kernel');
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
smalltalk.send(self, "_subclassResponsibility", []);
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



smalltalk.addClass('String', smalltalk.SequenceableCollection, [], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (aString){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aString, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
return String(self) == aString;
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
'_at_',
smalltalk.method({
selector: 'at:',
fn: function (anIndex){
var self=this;
return self[anIndex - 1];
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
fn: function (anIndex, anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
fn: function (anIndex, aBlock){
var self=this;
(($receiver = smalltalk.send(self, "_at_", [anIndex])) == nil || $receiver == undefined) ? (function(){return aBlock;})() : $receiver;
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
'_add_',
smalltalk.method({
selector: 'add:',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
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
'_errorReadOnly',
smalltalk.method({
selector: 'errorReadOnly',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", [unescape("Object%20is%20read-only")]);
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
return String(self) > aString;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'__lt',
smalltalk.method({
selector: '<',
fn: function (aString){
var self=this;
return String(self) < aString;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'__gt_eq',
smalltalk.method({
selector: '>=',
fn: function (aString){
var self=this;
return String(self) >= aString;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'__lt_eq',
smalltalk.method({
selector: '<=',
fn: function (aString){
var self=this;
return String(self) <= aString;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
fn: function (){
var self=this;
return self;
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
start=(1);
sz=smalltalk.send(self, "_size", []);
cr=smalltalk.send((smalltalk.String || String), "_cr", []);
nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, (1)]);
lf=smalltalk.send((smalltalk.String || String), "_lf", []);
nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, (1)]);
(function(){while((function(){return ((($receiver = start).klass === smalltalk.Number) ? $receiver <=sz : smalltalk.send($receiver, "__lt_eq", [sz]));})()) {(function(){((($receiver = smalltalk.send(smalltalk.send(nextLF, "__eq", [(0)]), "_and_", [(function(){return smalltalk.send(nextCR, "__eq", [(0)]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, sz, sz]);return (function(){throw({name: 'stReturn', selector: '_lineIndicesDo_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, sz, sz]);return (function(){throw({name: 'stReturn', selector: '_lineIndicesDo_', fn: function(){return self}})})();})]));return ((($receiver = smalltalk.send(smalltalk.send(nextCR, "__eq", [(0)]), "_or_", [(function(){return smalltalk.send((0) < nextLF, "_and_", [(function(){return ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver <nextCR : smalltalk.send($receiver, "__lt", [nextCR]));})]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);})() : (function(){return ((($receiver = smalltalk.send((1) + nextCR, "__eq", [nextLF])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);})() : (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);start=(1) + nextCR;return nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);}), (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);start=(1) + nextCR;return nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);}), (function(){return ((($receiver = smalltalk.send((1) + nextCR, "__eq", [nextLF])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);})() : (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);start=(1) + nextCR;return nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);}), (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);start=(1) + nextCR;return nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);})]));})]));})()}})();
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
lines=smalltalk.send((smalltalk.Array || Array), "_new", []);
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
lineCount=(0);
smalltalk.send(self, "_lineIndicesDo_", [(function(start, endWithoutDelimiters, end){return ((($receiver = smalltalk.send(lineCount=((($receiver = lineCount).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])), "__eq", [anIndex])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_lineNumber_', fn: function(){return smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_lineNumber_', fn: function(){return smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])}})})();})]));})]);
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
'__eq_eq',
smalltalk.method({
selector: '==',
fn: function (aString){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aString, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})]));
return String(self) === String(aString);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq_eq'){return e.fn()} throw(e)}}
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
stream=smalltalk.send(smalltalk.send(self, "_streamClass", []), "_on_", [smalltalk.send((smalltalk.String || String), "_new", [])]);
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


smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel');
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
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
fn: function (){
var self=this;
var newCollection=nil;
newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [each]);})]);
return newCollection;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
fn: function (){
var self=this;
var newCollection=nil;
newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [smalltalk.send(each, "_deepCopy", [])]);})]);
return newCollection;
return self;}
}),
smalltalk.Array);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
fn: function (anIndex, anotherIndex){
var self=this;
var array=nil;
array=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(anIndex, "_to_do_", [anotherIndex, (function(each){return smalltalk.send(array, "_add_", [smalltalk.send(self, "_at_", [each])]);})]);
return array;
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
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
fn: function (){
var self=this;
return smalltalk.send(self, "_collect_", [(function(each){return smalltalk.send(each, "_asJSONObject", []);})]);
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
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
var str=nil;
str=smalltalk.send("", "_writeStream", []);
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.SequenceableCollection), "__comma", [unescape("%20%28")])]);
smalltalk.send(self, "_do_separatedBy_", [(function(each){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(each, "_printString", [])]);}), (function(){return smalltalk.send(str, "_nextPutAll_", [" "]);})]);
smalltalk.send(str, "_nextPutAll_", [unescape("%29")]);
return smalltalk.send(str, "_contents", []);
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
smalltalk.Array);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel');
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


smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel');
smalltalk.addMethod(
'_messageText',
smalltalk.method({
selector: 'messageText',
fn: function (){
var self=this;
return self['@messageText'];
return self;}
}),
smalltalk.Error);

smalltalk.addMethod(
'_messageText_',
smalltalk.method({
selector: 'messageText:',
fn: function (aString){
var self=this;
self['@messageText']=aString;
return self;}
}),
smalltalk.Error);

smalltalk.addMethod(
'_signal',
smalltalk.method({
selector: 'signal',
fn: function (){
var self=this;
self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self);
return self;}
}),
smalltalk.Error);

smalltalk.addMethod(
'_context',
smalltalk.method({
selector: 'context',
fn: function (){
var self=this;
return self.context;
return self;}
}),
smalltalk.Error);


smalltalk.addMethod(
'_signal_',
smalltalk.method({
selector: 'signal:',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Error.klass);


smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_receiver',
smalltalk.method({
selector: 'receiver',
fn: function (){
var self=this;
return self.receiver;
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
fn: function (){
var self=this;
return smalltalk.convertSelector(self.selector);
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_home',
smalltalk.method({
selector: 'home',
fn: function (){
var self=this;
return self.homeContext;
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_temps',
smalltalk.method({
selector: 'temps',
fn: function (){
var self=this;
return self.temps;
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.Object), "__comma", [unescape("%28")]), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [unescape("%29")]);
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_class", []), "_printString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(self, "_selector", [])]);
return self;}
}),
smalltalk.MethodContext);



smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel');
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
self['@key']=aKey;
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
self['@value']=aValue;
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


smalltalk.addClass('Dictionary', smalltalk.Collection, ['keys'], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (aDictionary){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aDictionary, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
((($receiver = smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [smalltalk.send(aDictionary, "_size", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
(function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return smalltalk.send(smalltalk.send(self, "_associations", []), "__eq", [smalltalk.send(aDictionary, "_associations", [])])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
fn: function (){
var self=this;
var copy=nil;
copy=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(copy, "_at_put_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return copy;
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Collection);
self['@keys']=[];
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
fn: function (){
var self=this;
return smalltalk.send(self['@keys'], "_size", []);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_associations',
smalltalk.method({
selector: 'associations',
fn: function (){
var self=this;
var associations=nil;
associations=[];
smalltalk.send(self['@keys'], "_do_", [(function(each){return smalltalk.send(associations, "_add_", [smalltalk.send((smalltalk.Association || Association), "_key_value_", [each, smalltalk.send(self, "_at_", [each])])]);})]);
return associations;
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
return smalltalk.send(self['@keys'], "_collect_", [(function(each){return smalltalk.send(self, "_at_", [each]);})]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
fn: function (aKey, aValue){
var self=this;
((($receiver = smalltalk.send(self['@keys'], "_includes_", [aKey])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@keys'], "_add_", [aKey]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@keys'], "_add_", [aKey]);})]));
return smalltalk.send(self, "_basicAt_put_", [aKey, aValue]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_keys", []), "_includes_", [aKey]), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_basicAt_", [aKey]);}), aBlock]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_ifAbsentPut_',
smalltalk.method({
selector: 'at:ifAbsentPut:',
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);})]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_ifPresent_',
smalltalk.method({
selector: 'at:ifPresent:',
fn: function (aKey, aBlock){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", [aKey])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})() : nil;
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_ifPresent_ifAbsent_',
smalltalk.method({
selector: 'at:ifPresent:ifAbsent:',
fn: function (aKey, aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicAt_", [aKey]), "_ifNil_ifNotNil_", [anotherBlock, (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
fn: function (anAssociation){
var self=this;
smalltalk.send(self, "_at_put_", [smalltalk.send(anAssociation, "_key", []), smalltalk.send(anAssociation, "_value", [])]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_addAll_',
smalltalk.method({
selector: 'addAll:',
fn: function (aDictionary){
var self=this;
smalltalk.send(self, "_addAll_", [smalltalk.send(aDictionary, "_associations", [])], smalltalk.Collection);
return aDictionary;
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
fn: function (aCollection){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
fn: function (anIndex, anotherIndex){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_associationsDo_',
smalltalk.method({
selector: 'associationsDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_associations", []), "_do_", [aBlock]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_keysAndValuesDo_',
smalltalk.method({
selector: 'keysAndValuesDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_values", []), "_do_", [aBlock]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_select_',
smalltalk.method({
selector: 'select:',
fn: function (aBlock){
var self=this;
var newDict=nil;
newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return ((($receiver = smalltalk.send(aBlock, "_value_", [value])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})]));})]);
return newDict;
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_collect_',
smalltalk.method({
selector: 'collect:',
fn: function (aBlock){
var self=this;
var newDict=nil;
newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(newDict, "_at_put_", [key, smalltalk.send(aBlock, "_value_", [value])]);})]);
return newDict;
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_detect_ifNone_',
smalltalk.method({
selector: 'detect:ifNone:',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_detect_ifNone_", [aBlock, anotherBlock]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_includes_',
smalltalk.method({
selector: 'includes:',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_includes_", [anObject]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
fn: function (aKey){
var self=this;
smalltalk.send(self, "_removeKey_", [aKey]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_removeKey_',
smalltalk.method({
selector: 'removeKey:',
fn: function (aKey){
var self=this;
smalltalk.send(self['@keys'], "_remove_", [aKey]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_',
smalltalk.method({
selector: 'at:',
fn: function (aKey){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
fn: function (){
var self=this;
var object=nil;
object=smalltalk.send((smalltalk.Object || Object), "_new", []);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(object, "_basicAt_put_", [key, smalltalk.send(value, "_asJSONObject", [])]);})]);
return object;
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Collection)]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%28")]);})(aStream);smalltalk.send(smalltalk.send(self, "_associations", []), "_do_separatedBy_", [(function(anAssociation){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_key", []), "_printString", [])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%20-%3E%20")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_value", []), "_printString", [])]);})(aStream);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%20%2C%20")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [unescape("%29")]);})]);
return self;}
}),
smalltalk.Dictionary);

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
smalltalk.Dictionary);


smalltalk.addMethod(
'_fromPairs_',
smalltalk.method({
selector: 'fromPairs:',
fn: function (aCollection){
var self=this;
var dict=nil;
dict=smalltalk.send(self, "_new", []);
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(dict, "_add_", [each]);})]);
return dict;
return self;}
}),
smalltalk.Dictionary.klass);


smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_superclass_subclass_',
smalltalk.method({
selector: 'superclass:subclass:',
fn: function (aClass, aString){
var self=this;
return smalltalk.send(self, "_superclass_subclass_instanceVariableNames_package_", [aClass, aString, "", nil]);
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_class_instanceVariableNames_',
smalltalk.method({
selector: 'class:instanceVariableNames:',
fn: function (aClass, aString){
var self=this;
((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_name", []), "__comma", [" is not a metaclass"])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_name", []), "__comma", [" is not a metaclass"])]);})]));
smalltalk.send(aClass, "_basicAt_put_", ["iVarNames", smalltalk.send(self, "_instanceVariableNamesFor_", [aString])]);
smalltalk.send(self, "_setupClass_", [aClass]);
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_instanceVariableNamesFor_',
smalltalk.method({
selector: 'instanceVariableNamesFor:',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(aString, "_tokenize_", [" "]), "_reject_", [(function(each){return smalltalk.send(each, "_isEmpty", []);})]);
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_addSubclassOf_named_instanceVariableNames_',
smalltalk.method({
selector: 'addSubclassOf:named:instanceVariableNames:',
fn: function (aClass, aString, aCollection){
var self=this;
smalltalk.addClass(aString, aClass, aCollection);
	    return smalltalk[aString];
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_setupClass_',
smalltalk.method({
selector: 'setupClass:',
fn: function (aClass){
var self=this;
smalltalk.init(aClass);;
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_superclass_subclass_instanceVariableNames_package_',
smalltalk.method({
selector: 'superclass:subclass:instanceVariableNames:package:',
fn: function (aClass, aString, aString2, aString3){
var self=this;
var newClass=nil;
newClass=smalltalk.send(self, "_addSubclassOf_named_instanceVariableNames_package_", [aClass, aString, smalltalk.send(self, "_instanceVariableNamesFor_", [aString2]), (($receiver = aString3) == nil || $receiver == undefined) ? (function(){return "unclassified";})() : $receiver]);
smalltalk.send(self, "_setupClass_", [newClass]);
return newClass;
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_addSubclassOf_named_instanceVariableNames_package_',
smalltalk.method({
selector: 'addSubclassOf:named:instanceVariableNames:package:',
fn: function (aClass, aString, aCollection, packageName){
var self=this;
smalltalk.addClass(aString, aClass, aCollection, packageName);
	    return smalltalk[aString];
return self;}
}),
smalltalk.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category', 'chunkParser'], 'Kernel');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@chunkParser']=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_new", []);
return self;}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
'_class_category_',
smalltalk.method({
selector: 'class:category:',
fn: function (aClass, aString){
var self=this;
self['@class']=aClass;
self['@category']=aString;
return self;}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
'_scanFrom_',
smalltalk.method({
selector: 'scanFrom:',
fn: function (aChunkParser){
var self=this;
var chunk=nil;
(function(){while(!(function(){chunk=smalltalk.send(aChunkParser, "_nextChunk", []);return smalltalk.send(chunk, "_isEmpty", []);})()) {(function(){return smalltalk.send(self, "_compileMethod_", [chunk]);})()}})();
return self;}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
'_compileMethod_',
smalltalk.method({
selector: 'compileMethod:',
fn: function (aString){
var self=this;
var method=nil;
method=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_load_forClass_", [aString, self['@class']]);
smalltalk.send(method, "_category_", [self['@category']]);
smalltalk.send(self['@class'], "_addCompiledMethod_", [method]);
return self;}
}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel');
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
self['@collection']=aCollection;
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_position',
smalltalk.method({
selector: 'position',
fn: function (){
var self=this;
return (($receiver = self['@position']) == nil || $receiver == undefined) ? (function(){return self['@position']=(0);})() : $receiver;
return self;}
}),
smalltalk.Stream);

smalltalk.addMethod(
'_position_',
smalltalk.method({
selector: 'position:',
fn: function (anInteger){
var self=this;
self['@position']=anInteger;
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
self['@streamSize']=anInteger;
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
smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
return smalltalk.send(self['@collection'], "_at_", [smalltalk.send(self, "_position", [])]);
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
tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []);
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


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel');
smalltalk.addMethod(
'_next_',
smalltalk.method({
selector: 'next:',
fn: function (anInteger){
var self=this;
var tempCollection=nil;
tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []);
smalltalk.send(anInteger, "_timesRepeat_", [(function(){return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]);})]));})]);
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



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class', 'chunkParser'], 'Kernel');
smalltalk.addMethod(
'_class_',
smalltalk.method({
selector: 'class:',
fn: function (aClass){
var self=this;
self['@class']=aClass;
return self;}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
'_scanFrom_',
smalltalk.method({
selector: 'scanFrom:',
fn: function (aChunkParser){
var self=this;
var chunk=nil;
chunk=smalltalk.send(aChunkParser, "_nextChunk", []);
((($receiver = smalltalk.send(chunk, "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_setComment_", [chunk]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_setComment_", [chunk]);})]));
return self;}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@chunkParser']=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_new", []);
return self;}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
'_setComment_',
smalltalk.method({
selector: 'setComment:',
fn: function (aString){
var self=this;
smalltalk.send(self['@class'], "_comment_", [aString]);
return self;}
}),
smalltalk.ClassCommentReader);



smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_next',
smalltalk.method({
selector: 'next',
fn: function (){
var self=this;
return Math.random();
return self;}
}),
smalltalk.Random);

smalltalk.addMethod(
'_next_',
smalltalk.method({
selector: 'next:',
fn: function (anInteger){
var self=this;
return smalltalk.send(smalltalk.send((1), "_to_", [anInteger]), "_collect_", [(function(each){return smalltalk.send(self, "_next", []);})]);
return self;}
}),
smalltalk.Random);



smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel');
smalltalk.addMethod(
'_x',
smalltalk.method({
selector: 'x',
fn: function (){
var self=this;
return self['@x'];
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
'_y',
smalltalk.method({
selector: 'y',
fn: function (){
var self=this;
return self['@y'];
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
'_y_',
smalltalk.method({
selector: 'y:',
fn: function (aNumber){
var self=this;
self['@y']=aNumber;
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
'_x_',
smalltalk.method({
selector: 'x:',
fn: function (aNumber){
var self=this;
self['@x']=aNumber;
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
'__star',
smalltalk.method({
selector: '*',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
'__plus',
smalltalk.method({
selector: '+',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
'__minus',
smalltalk.method({
selector: '-',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
'__slash',
smalltalk.method({
selector: '/',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
'_asPoint',
smalltalk.method({
selector: 'asPoint',
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (aPoint){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_class", []), "__eq", [smalltalk.send(self, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_x", []), "__eq", [smalltalk.send(self, "_x", [])]), "_&", [smalltalk.send(smalltalk.send(aPoint, "_y", []), "__eq", [smalltalk.send(self, "_y", [])])]);})]);
return self;}
}),
smalltalk.Point);


smalltalk.addMethod(
'_x_y_',
smalltalk.method({
selector: 'x:y:',
fn: function (aNumber, anotherNumber){
var self=this;
return (function($rec){smalltalk.send($rec, "_x_", [aNumber]);smalltalk.send($rec, "_y_", [anotherNumber]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Point.klass);


smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel');
smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
fn: function (){
var self=this;
return self['@selector'];
return self;}
}),
smalltalk.Message);

smalltalk.addMethod(
'_selector_',
smalltalk.method({
selector: 'selector:',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;}
}),
smalltalk.Message);

smalltalk.addMethod(
'_arguments_',
smalltalk.method({
selector: 'arguments:',
fn: function (anArray){
var self=this;
self['@arguments']=anArray;
return self;}
}),
smalltalk.Message);

smalltalk.addMethod(
'_arguments',
smalltalk.method({
selector: 'arguments',
fn: function (){
var self=this;
return self['@arguments'];
return self;}
}),
smalltalk.Message);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Object)]);smalltalk.send($rec, "_nextPutAll_", [unescape("%28")]);smalltalk.send($rec, "_nextPutAll_", [self['@selector']]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%29")]);})(aStream);})]);
return self;}
}),
smalltalk.Message);


smalltalk.addMethod(
'_selector_arguments_',
smalltalk.method({
selector: 'selector:arguments:',
fn: function (aString, anArray){
var self=this;
return (function($rec){smalltalk.send($rec, "_selector_", [aString]);smalltalk.send($rec, "_arguments_", [anArray]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Message.klass);


smalltalk.addClass('MessageNotUnderstood', smalltalk.Error, ['message', 'receiver'], 'Kernel');
smalltalk.addMethod(
'_message',
smalltalk.method({
selector: 'message',
fn: function (){
var self=this;
return self['@message'];
return self;}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
'_message_',
smalltalk.method({
selector: 'message:',
fn: function (aMessage){
var self=this;
self['@message']=aMessage;
return self;}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
'_receiver',
smalltalk.method({
selector: 'receiver',
fn: function (){
var self=this;
return self['@receiver'];
return self;}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
'_receiver_',
smalltalk.method({
selector: 'receiver:',
fn: function (anObject){
var self=this;
self['@receiver']=anObject;
return self;}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
'_messageText',
smalltalk.method({
selector: 'messageText',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_asString", []), "__comma", [unescape("%20does%20not%20understand%20%23")]), "__comma", [smalltalk.send(smalltalk.send(self, "_message", []), "_selector", [])]);
return self;}
}),
smalltalk.MessageNotUnderstood);



smalltalk.addClass('ErrorHandler', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_handleError_',
smalltalk.method({
selector: 'handleError:',
fn: function (anError){
var self=this;
(($receiver = smalltalk.send(anError, "_context", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logErrorContext_", [smalltalk.send(anError, "_context", [])]);})() : nil;
smalltalk.send(self, "_logError_", [anError]);
return self;}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
'_logContext_',
smalltalk.method({
selector: 'logContext:',
fn: function (aContext){
var self=this;
(($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;
smalltalk.send(self, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aContext, "_receiver", []), "_asString", []), "__comma", [unescape("%3E%3E")]), "__comma", [smalltalk.send(aContext, "_selector", [])])]);
return self;}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
'_logErrorContext_',
smalltalk.method({
selector: 'logErrorContext:',
fn: function (aContext){
var self=this;
(($receiver = aContext) != nil && $receiver != undefined) ? (function(){return (($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;})() : nil;
return self;}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
'_logError_',
smalltalk.method({
selector: 'logError:',
fn: function (anError){
var self=this;
smalltalk.send(self, "_log_", [smalltalk.send(anError, "_messageText", [])]);
return self;}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
'_log_',
smalltalk.method({
selector: 'log:',
fn: function (aString){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [aString]);
return self;}
}),
smalltalk.ErrorHandler);


smalltalk.ErrorHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_current',
smalltalk.method({
selector: 'current',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return self['@current']=smalltalk.send(self, "_new", []);})() : $receiver;
return self;}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_register", []);
return self;}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
'_register',
smalltalk.method({
selector: 'register',
fn: function (){
var self=this;
smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_setCurrent_", [smalltalk.send(self, "_new", [])]);
return self;}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
'_setCurrent_',
smalltalk.method({
selector: 'setCurrent:',
fn: function (anHandler){
var self=this;
self['@current']=anHandler;
return self;}
}),
smalltalk.ErrorHandler.klass);


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel');
smalltalk.addMethod(
'_jsObject_',
smalltalk.method({
selector: 'jsObject:',
fn: function (aJSObject){
var self=this;
self['@jsObject']=aJSObject;
return self;}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
'_jsObject',
smalltalk.method({
selector: 'jsObject',
fn: function (){
var self=this;
return self['@jsObject'];
return self;}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_jsObject", []), "_toString", []);
return self;}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
'_inspectOn_',
smalltalk.method({
selector: 'inspectOn:',
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
return self;}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
'_doesNotUnderstand_',
smalltalk.method({
selector: 'doesNotUnderstand:',
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
return self;}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
'_at_',
smalltalk.method({
selector: 'at:',
fn: function (aString){
var self=this;
return self['@jsObject'][aString];
return self;}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
fn: function (aString, anObject){
var self=this;
self['@jsObject'][aString] = anObject;
return self;}
}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aJSObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_jsObject_", [aJSObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel');
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
self['@elements']=[];
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



smalltalk.addClass('Transcript', smalltalk.Object, ['textarea'], 'Kernel');

smalltalk.Transcript.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_open", []);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
fn: function (){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_current',
smalltalk.method({
selector: 'current',
fn: function (){
var self=this;
return self['@current'];
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_show_',
smalltalk.method({
selector: 'show:',
fn: function (anObject){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_show_", [anObject]);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_cr',
smalltalk.method({
selector: 'cr',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_show_", [smalltalk.send((smalltalk.String || String), "_cr", [])]);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_clear',
smalltalk.method({
selector: 'clear',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_clear", []);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
'_register_',
smalltalk.method({
selector: 'register:',
fn: function (aTranscript){
var self=this;
self['@current']=aTranscript;
return self;}
}),
smalltalk.Transcript.klass);


smalltalk.addClass('ConsoleTranscript', smalltalk.Object, ['textarea'], 'Kernel');
smalltalk.addMethod(
'_clear',
smalltalk.method({
selector: 'clear',
fn: function (){
var self=this;

return self;}
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
'_cr',
smalltalk.method({
selector: 'cr',
fn: function (){
var self=this;

return self;}
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
'_show_',
smalltalk.method({
selector: 'show:',
fn: function (anObject){
var self=this;
console.log(String(anObject._asString()));
return self;}
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
fn: function (){
var self=this;

return self;}
}),
smalltalk.ConsoleTranscript);


smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send((smalltalk.Transcript || Transcript), "_register_", [smalltalk.send(self, "_new", [])]);
return self;}
}),
smalltalk.ConsoleTranscript.klass);


