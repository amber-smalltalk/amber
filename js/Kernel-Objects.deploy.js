smalltalk.addPackage('Kernel-Objects', {});
smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel-Objects');
smalltalk.addMethod(
unescape('__minus_gt'),
smalltalk.method({
selector: unescape('-%3E'),
fn: function (anObject) {
    var self = this;
    return smalltalk.send(smalltalk.Association || Association, "_key_value_", [self, anObject]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (anObject) {
    var self = this;
    return smalltalk.send(self, "__eq_eq", [anObject]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('__eq_eq'),
smalltalk.method({
selector: unescape('%3D%3D'),
fn: function (anObject) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_identityHash", []), "__eq", [smalltalk.send(anObject, "_identityHash", [])]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asJSON'),
smalltalk.method({
selector: unescape('asJSON'),
fn: function (){
var self=this;
var variables=nil;
(variables=smalltalk.send((smalltalk.HashedCollection || HashedCollection), "_new", []));
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_allInstanceVariableNames", []), "_do_", [(function(each){return smalltalk.send(variables, "_at_put_", [each, smalltalk.send(smalltalk.send(self, "_instVarAt_", [each]), "_asJSON", [])]);})]);
return variables;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asJSONString'),
smalltalk.method({
selector: unescape('asJSONString'),
fn: function (){
var self=this;
return smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [smalltalk.send(self, "_asJSON", [])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_asString", []);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_printString", []);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicAt_'),
smalltalk.method({
selector: unescape('basicAt%3A'),
fn: function (aString) {
    var self = this;
    return self[aString];
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicAt_put_'),
smalltalk.method({
selector: unescape('basicAt%3Aput%3A'),
fn: function (aString, anObject) {
    var self = this;
    return self[aString] = anObject;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicDelete_'),
smalltalk.method({
selector: unescape('basicDelete%3A'),
fn: function (aString) {
    var self = this;
    delete self[aString];
    return aString;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicPerform_'),
smalltalk.method({
selector: unescape('basicPerform%3A'),
fn: function (aSymbol) {
    var self = this;
    return smalltalk.send(self, "_basicPerform_withArguments_", [aSymbol, []]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicPerform_withArguments_'),
smalltalk.method({
selector: unescape('basicPerform%3AwithArguments%3A'),
fn: function (aSymbol, aCollection) {
    var self = this;
    return self[aSymbol].apply(self, aCollection);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_class'),
smalltalk.method({
selector: unescape('class'),
fn: function () {
    var self = this;
    return self.klass;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_copy'),
smalltalk.method({
selector: unescape('copy'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_shallowCopy", []), "_postCopy", []);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
fn: function () {
    var self = this;
    var copy = self.klass._new();
    for (var i in self) {
        if (/^@.+/.test(i)) {
            copy[i] = self[i]._deepCopy();
        }
    }
    return copy;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_deprecatedAPI'),
smalltalk.method({
selector: unescape('deprecatedAPI'),
fn: function () {
    var self = this;
    smalltalk.send(typeof console == "undefined" ? nil : console, "_warn_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.getThisContext(), "_home", []), "_asString", []), "__comma", [unescape("%20is%20deprecated%21%20%28in%20")]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.getThisContext(), "_home", []), "_home", []), "_asString", [])]), "__comma", [unescape("%29")])]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
fn: function (aMessage) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_receiver_", [self]);smalltalk.send($rec, "_message_", [aMessage]);return smalltalk.send($rec, "_signal", []);}(smalltalk.send(smalltalk.MessageNotUnderstood || MessageNotUnderstood, "_new", [])));
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_error_'),
smalltalk.method({
selector: unescape('error%3A'),
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.Error || Error, "_signal_", [aString]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_halt'),
smalltalk.method({
selector: unescape('halt'),
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["Halt encountered"]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_identityHash'),
smalltalk.method({
selector: unescape('identityHash'),
fn: function () {
    var self = this;
    return self.identityHash || (self.identityHash = smalltalk.nextId());
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_ifNil_'),
smalltalk.method({
selector: unescape('ifNil%3A'),
fn: function (aBlock) {
    var self = this;
    return self;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_ifNil_ifNotNil_'),
smalltalk.method({
selector: unescape('ifNil%3AifNotNil%3A'),
fn: function (aBlock, anotherBlock) {
    var self = this;
    return smalltalk.send(anotherBlock, "_value", []);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_ifNotNil_'),
smalltalk.method({
selector: unescape('ifNotNil%3A'),
fn: function (aBlock) {
    var self = this;
    return smalltalk.send(aBlock, "_value", []);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_ifNotNil_ifNil_'),
smalltalk.method({
selector: unescape('ifNotNil%3AifNil%3A'),
fn: function (aBlock, anotherBlock) {
    var self = this;
    return smalltalk.send(aBlock, "_value", []);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_instVarAt_'),
smalltalk.method({
selector: unescape('instVarAt%3A'),
fn: function (aSymbol) {
    var self = this;
    var varname = nil;
    varname = smalltalk.send(aSymbol, "_asString", []);
    return self["@" + varname];
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_instVarAt_put_'),
smalltalk.method({
selector: unescape('instVarAt%3Aput%3A'),
fn: function (aSymbol, anObject) {
    var self = this;
    var varname = nil;
    varname = smalltalk.send(aSymbol, "_asString", []);
    self["@" + varname] = anObject;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isClass'),
smalltalk.method({
selector: unescape('isClass'),
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isKindOf_'),
smalltalk.method({
selector: unescape('isKindOf%3A'),
fn: function (aClass) {
    var self = this;
    return ($receiver = smalltalk.send(self, "_isMemberOf_", [aClass])).klass === smalltalk.Boolean ? $receiver ? function () {return true;}() : function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return true;}, function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);}]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isMemberOf_'),
smalltalk.method({
selector: unescape('isMemberOf%3A'),
fn: function (aClass) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [aClass]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isMetaclass'),
smalltalk.method({
selector: unescape('isMetaclass'),
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isNil'),
smalltalk.method({
selector: unescape('isNil'),
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isNumber'),
smalltalk.method({
selector: unescape('isNumber'),
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isParseFailure'),
smalltalk.method({
selector: unescape('isParseFailure'),
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isString'),
smalltalk.method({
selector: unescape('isString'),
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isSymbol'),
smalltalk.method({
selector: unescape('isSymbol'),
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_log_block_'),
smalltalk.method({
selector: unescape('log%3Ablock%3A'),
fn: function (aString, aBlock) {
    var self = this;
    var result = nil;
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send(smalltalk.send(aString, "__comma", [" time: "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.Date || Date, "_millisecondsToRun_", [function () {return result = smalltalk.send(aBlock, "_value", []);}]), "_printString", [])])]);
    return result;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_notNil'),
smalltalk.method({
selector: unescape('notNil'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_isNil", []), "_not", []);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_perform_'),
smalltalk.method({
selector: unescape('perform%3A'),
fn: function (aSymbol) {
    var self = this;
    return smalltalk.send(self, "_perform_withArguments_", [aSymbol, []]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_perform_withArguments_'),
smalltalk.method({
selector: unescape('perform%3AwithArguments%3A'),
fn: function (aSymbol, aCollection) {
    var self = this;
    return smalltalk.send(self, "_basicPerform_withArguments_", [smalltalk.send(aSymbol, "_asSelector", []), aCollection]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_postCopy'),
smalltalk.method({
selector: unescape('postCopy'),
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_printNl'),
smalltalk.method({
selector: unescape('printNl'),
fn: function () {
    var self = this;
    console.log(self);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
    var self = this;
    return smalltalk.send("a ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
fn: function () {
    var self = this;
    var copy = self.klass._new();
    for (var i in self) {
        if (/^@.+/.test(i)) {
            copy[i] = self[i];
        }
    }
    return copy;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_shouldNotImplement'),
smalltalk.method({
selector: unescape('shouldNotImplement'),
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", [smalltalk.send("This method should not be implemented in ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["Object not indexable"]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_storeOn_'),
smalltalk.method({
selector: unescape('storeOn%3A'),
fn: function (aStream) {
    var self = this;
    smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(self, "_printString", [])]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_storeString'),
smalltalk.method({
selector: unescape('storeString'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.String || String, "_streamContents_", [function (s) {return smalltalk.send(self, "_storeOn_", [s]);}]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_subclassResponsibility'),
smalltalk.method({
selector: unescape('subclassResponsibility'),
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["This method is a responsibility of a subclass"]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_try_catch_'),
smalltalk.method({
selector: unescape('try%3Acatch%3A'),
fn: function (aBlock, anotherBlock) {
    var self = this;
    try {
        result = aBlock();
    } catch (e) {
        result = anotherBlock(e);
    }
    return result;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_yourself'),
smalltalk.method({
selector: unescape('yourself'),
fn: function () {
    var self = this;
    return self;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_%7E_eq'),
smalltalk.method({
selector: unescape('%7E%3D'),
fn: function (anObject) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "__eq", [anObject]), "__eq", [false]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_%7E%7E'),
smalltalk.method({
selector: unescape('%7E%7E'),
fn: function (anObject) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "__eq_eq", [anObject]), "__eq", [false]);
    return self;
}
}),
smalltalk.Object);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Object.klass);


smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
unescape('_%26'),
smalltalk.method({
selector: unescape('%26'),
fn: function (aBoolean) {
    var self = this;
    if (self == true) {
        return aBoolean;
    } else {
        return false;
    }
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (aBoolean) {
    var self = this;
    try {
        ($receiver = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean ? !$receiver ? function () {return function () {throw {name: "stReturn", selector: "__eq", fn: function () {return false;}};}();}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return function () {throw {name: "stReturn", selector: "__eq", fn: function () {return false;}};}();}]);
        return Boolean(self == true) == aBoolean;
        return self;
    } catch (e) {
        if (e.name === "stReturn" && e.selector === "__eq") {
            return e.fn();
        }
        throw e;
    }
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_and_'),
smalltalk.method({
selector: unescape('and%3A'),
fn: function (aBlock) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [aBlock, function () {return false;}]);
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_asJSON'),
smalltalk.method({
selector: unescape('asJSON'),
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
fn: function () {
    var self = this;
    return self;
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_ifFalse_'),
smalltalk.method({
selector: unescape('ifFalse%3A'),
fn: function (aBlock) {
    var self = this;
    return smalltalk.send(self, "_ifTrue_ifFalse_", [function () {return nil;}, aBlock]);
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_ifFalse_ifTrue_'),
smalltalk.method({
selector: unescape('ifFalse%3AifTrue%3A'),
fn: function (aBlock, anotherBlock) {
    var self = this;
    return smalltalk.send(self, "_ifTrue_ifFalse_", [anotherBlock, aBlock]);
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_ifTrue_'),
smalltalk.method({
selector: unescape('ifTrue%3A'),
fn: function (aBlock) {
    var self = this;
    return smalltalk.send(self, "_ifTrue_ifFalse_", [aBlock, function () {return nil;}]);
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_ifTrue_ifFalse_'),
smalltalk.method({
selector: unescape('ifTrue%3AifFalse%3A'),
fn: function (aBlock, anotherBlock) {
    var self = this;
    if (self == true) {
        return aBlock();
    } else {
        return anotherBlock();
    }
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_not'),
smalltalk.method({
selector: unescape('not'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "__eq", [false]);
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_or_'),
smalltalk.method({
selector: unescape('or%3A'),
fn: function (aBlock) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [function () {return true;}, aBlock]);
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
    var self = this;
    return self.toString();
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
fn: function () {
    var self = this;
    return self;
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_%7C'),
smalltalk.method({
selector: unescape('%7C'),
fn: function (aBoolean) {
    var self = this;
    if (self == true) {
        return true;
    } else {
        return aBoolean;
    }
    return self;
}
}),
smalltalk.Boolean);



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
unescape('__plus'),
smalltalk.method({
selector: unescape('+'),
fn: function (aDate) {
    var self = this;
    return self + aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__minus'),
smalltalk.method({
selector: unescape('-'),
fn: function (aDate) {
    var self = this;
    return self - aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__lt'),
smalltalk.method({
selector: unescape('%3C'),
fn: function (aDate) {
    var self = this;
    return self < aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__lt_eq'),
smalltalk.method({
selector: unescape('%3C%3D'),
fn: function (aDate) {
    var self = this;
    return self <= aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__gt'),
smalltalk.method({
selector: unescape('%3E'),
fn: function (aDate) {
    var self = this;
    return self > aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__gt_eq'),
smalltalk.method({
selector: unescape('%3E%3D'),
fn: function (aDate) {
    var self = this;
    return self >= aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asDateString'),
smalltalk.method({
selector: unescape('asDateString'),
fn: function () {
    var self = this;
    return self.toDateString();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asLocaleString'),
smalltalk.method({
selector: unescape('asLocaleString'),
fn: function () {
    var self = this;
    return self.toLocaleString();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asMilliseconds'),
smalltalk.method({
selector: unescape('asMilliseconds'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_time", []);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asNumber'),
smalltalk.method({
selector: unescape('asNumber'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_asMilliseconds", []);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
fn: function () {
    var self = this;
    return self.toString();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asTimeString'),
smalltalk.method({
selector: unescape('asTimeString'),
fn: function () {
    var self = this;
    return self.toTimeString();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_day'),
smalltalk.method({
selector: unescape('day'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_dayOfWeek", []);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_day_'),
smalltalk.method({
selector: unescape('day%3A'),
fn: function (aNumber) {
    var self = this;
    smalltalk.send(self, "_day_", [aNumber]);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfMonth'),
smalltalk.method({
selector: unescape('dayOfMonth'),
fn: function () {
    var self = this;
    return self.getDate();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfMonth_'),
smalltalk.method({
selector: unescape('dayOfMonth%3A'),
fn: function (aNumber) {
    var self = this;
    self.setDate(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfWeek'),
smalltalk.method({
selector: unescape('dayOfWeek'),
fn: function () {
    var self = this;
    return self.getDay() + 1;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfWeek_'),
smalltalk.method({
selector: unescape('dayOfWeek%3A'),
fn: function (aNumber) {
    var self = this;
    return self.setDay(aNumber - 1);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_hours'),
smalltalk.method({
selector: unescape('hours'),
fn: function () {
    var self = this;
    return self.getHours();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_hours_'),
smalltalk.method({
selector: unescape('hours%3A'),
fn: function (aNumber) {
    var self = this;
    self.setHours(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_milliseconds'),
smalltalk.method({
selector: unescape('milliseconds'),
fn: function () {
    var self = this;
    return self.getMilliseconds();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_milliseconds_'),
smalltalk.method({
selector: unescape('milliseconds%3A'),
fn: function (aNumber) {
    var self = this;
    self.setMilliseconds(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_minutes'),
smalltalk.method({
selector: unescape('minutes'),
fn: function () {
    var self = this;
    return self.getMinutes();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_minutes_'),
smalltalk.method({
selector: unescape('minutes%3A'),
fn: function (aNumber) {
    var self = this;
    self.setMinutes(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_month'),
smalltalk.method({
selector: unescape('month'),
fn: function () {
    var self = this;
    return self.getMonth() + 1;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_month_'),
smalltalk.method({
selector: unescape('month%3A'),
fn: function (aNumber) {
    var self = this;
    self.setMonth(aNumber - 1);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_asString", []);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_seconds'),
smalltalk.method({
selector: unescape('seconds'),
fn: function () {
    var self = this;
    return self.getSeconds();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_seconds_'),
smalltalk.method({
selector: unescape('seconds%3A'),
fn: function (aNumber) {
    var self = this;
    self.setSeconds(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_time'),
smalltalk.method({
selector: unescape('time'),
fn: function () {
    var self = this;
    return self.getTime();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_time_'),
smalltalk.method({
selector: unescape('time%3A'),
fn: function (aNumber) {
    var self = this;
    self.setTime(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_year'),
smalltalk.method({
selector: unescape('year'),
fn: function () {
    var self = this;
    return self.getFullYear();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_year_'),
smalltalk.method({
selector: unescape('year%3A'),
fn: function (aNumber) {
    var self = this;
    self.setFullYear(aNumber);
    return self;
}
}),
smalltalk.Date);


smalltalk.addMethod(
unescape('_fromMilliseconds_'),
smalltalk.method({
selector: unescape('fromMilliseconds%3A'),
fn: function (aNumber) {
    var self = this;
    return smalltalk.send(self, "_new_", [aNumber]);
    return self;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_fromSeconds_'),
smalltalk.method({
selector: unescape('fromSeconds%3A'),
fn: function (aNumber) {
    var self = this;
    return smalltalk.send(self, "_fromMilliseconds_", [($receiver = aNumber).klass === smalltalk.Number ? $receiver * 1000 : smalltalk.send($receiver, "__star", [1000])]);
    return self;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_fromString_'),
smalltalk.method({
selector: unescape('fromString%3A'),
fn: function (aString) {
    var self = this;
    return smalltalk.send(self, "_new_", [aString]);
    return self;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_millisecondsToRun_'),
smalltalk.method({
selector: unescape('millisecondsToRun%3A'),
fn: function (aBlock) {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.Date || Date, "_now", []);
    smalltalk.send(aBlock, "_value", []);
    return ($receiver = smalltalk.send(smalltalk.Date || Date, "_now", [])).klass === smalltalk.Number ? $receiver - t : smalltalk.send($receiver, "__minus", [t]);
    return self;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_new_'),
smalltalk.method({
selector: unescape('new%3A'),
fn: function (anObject) {
    var self = this;
    return new Date(anObject);
    return self;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_now'),
smalltalk.method({
selector: unescape('now'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_today", []);
    return self;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_today'),
smalltalk.method({
selector: unescape('today'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_new", []);
    return self;
}
}),
smalltalk.Date.klass);


smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
unescape('__plus'),
smalltalk.method({
selector: unescape('+'),
fn: function (aDate) {
    var self = this;
    return self + aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__minus'),
smalltalk.method({
selector: unescape('-'),
fn: function (aDate) {
    var self = this;
    return self - aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__lt'),
smalltalk.method({
selector: unescape('%3C'),
fn: function (aDate) {
    var self = this;
    return self < aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__lt_eq'),
smalltalk.method({
selector: unescape('%3C%3D'),
fn: function (aDate) {
    var self = this;
    return self <= aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__gt'),
smalltalk.method({
selector: unescape('%3E'),
fn: function (aDate) {
    var self = this;
    return self > aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__gt_eq'),
smalltalk.method({
selector: unescape('%3E%3D'),
fn: function (aDate) {
    var self = this;
    return self >= aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asDateString'),
smalltalk.method({
selector: unescape('asDateString'),
fn: function () {
    var self = this;
    return self.toDateString();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asLocaleString'),
smalltalk.method({
selector: unescape('asLocaleString'),
fn: function () {
    var self = this;
    return self.toLocaleString();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asMilliseconds'),
smalltalk.method({
selector: unescape('asMilliseconds'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_time", []);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asNumber'),
smalltalk.method({
selector: unescape('asNumber'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_asMilliseconds", []);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
fn: function () {
    var self = this;
    return self.toString();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asTimeString'),
smalltalk.method({
selector: unescape('asTimeString'),
fn: function () {
    var self = this;
    return self.toTimeString();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_day'),
smalltalk.method({
selector: unescape('day'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_dayOfWeek", []);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_day_'),
smalltalk.method({
selector: unescape('day%3A'),
fn: function (aNumber) {
    var self = this;
    smalltalk.send(self, "_day_", [aNumber]);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfMonth'),
smalltalk.method({
selector: unescape('dayOfMonth'),
fn: function () {
    var self = this;
    return self.getDate();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfMonth_'),
smalltalk.method({
selector: unescape('dayOfMonth%3A'),
fn: function (aNumber) {
    var self = this;
    self.setDate(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfWeek'),
smalltalk.method({
selector: unescape('dayOfWeek'),
fn: function () {
    var self = this;
    return self.getDay() + 1;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfWeek_'),
smalltalk.method({
selector: unescape('dayOfWeek%3A'),
fn: function (aNumber) {
    var self = this;
    return self.setDay(aNumber - 1);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_hours'),
smalltalk.method({
selector: unescape('hours'),
fn: function () {
    var self = this;
    return self.getHours();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_hours_'),
smalltalk.method({
selector: unescape('hours%3A'),
fn: function (aNumber) {
    var self = this;
    self.setHours(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_milliseconds'),
smalltalk.method({
selector: unescape('milliseconds'),
fn: function () {
    var self = this;
    return self.getMilliseconds();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_milliseconds_'),
smalltalk.method({
selector: unescape('milliseconds%3A'),
fn: function (aNumber) {
    var self = this;
    self.setMilliseconds(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_minutes'),
smalltalk.method({
selector: unescape('minutes'),
fn: function () {
    var self = this;
    return self.getMinutes();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_minutes_'),
smalltalk.method({
selector: unescape('minutes%3A'),
fn: function (aNumber) {
    var self = this;
    self.setMinutes(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_month'),
smalltalk.method({
selector: unescape('month'),
fn: function () {
    var self = this;
    return self.getMonth() + 1;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_month_'),
smalltalk.method({
selector: unescape('month%3A'),
fn: function (aNumber) {
    var self = this;
    self.setMonth(aNumber - 1);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_asString", []);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_seconds'),
smalltalk.method({
selector: unescape('seconds'),
fn: function () {
    var self = this;
    return self.getSeconds();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_seconds_'),
smalltalk.method({
selector: unescape('seconds%3A'),
fn: function (aNumber) {
    var self = this;
    self.setSeconds(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_time'),
smalltalk.method({
selector: unescape('time'),
fn: function () {
    var self = this;
    return self.getTime();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_time_'),
smalltalk.method({
selector: unescape('time%3A'),
fn: function (aNumber) {
    var self = this;
    self.setTime(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_year'),
smalltalk.method({
selector: unescape('year'),
fn: function () {
    var self = this;
    return self.getFullYear();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_year_'),
smalltalk.method({
selector: unescape('year%3A'),
fn: function (aNumber) {
    var self = this;
    self.setFullYear(aNumber);
    return self;
}
}),
smalltalk.Date);


smalltalk.addMethod(
unescape('_fromMilliseconds_'),
smalltalk.method({
selector: unescape('fromMilliseconds%3A'),
fn: function (aNumber) {
    var self = this;
    return smalltalk.send(self, "_new_", [aNumber]);
    return self;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_fromSeconds_'),
smalltalk.method({
selector: unescape('fromSeconds%3A'),
fn: function (aNumber) {
    var self = this;
    return smalltalk.send(self, "_fromMilliseconds_", [($receiver = aNumber).klass === smalltalk.Number ? $receiver * 1000 : smalltalk.send($receiver, "__star", [1000])]);
    return self;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_fromString_'),
smalltalk.method({
selector: unescape('fromString%3A'),
fn: function (aString) {
    var self = this;
    return smalltalk.send(self, "_new_", [aString]);
    return self;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_millisecondsToRun_'),
smalltalk.method({
selector: unescape('millisecondsToRun%3A'),
fn: function (aBlock) {
    var self = this;
    var t = nil;
    t = smalltalk.send(smalltalk.Date || Date, "_now", []);
    smalltalk.send(aBlock, "_value", []);
    return ($receiver = smalltalk.send(smalltalk.Date || Date, "_now", [])).klass === smalltalk.Number ? $receiver - t : smalltalk.send($receiver, "__minus", [t]);
    return self;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_new_'),
smalltalk.method({
selector: unescape('new%3A'),
fn: function (anObject) {
    var self = this;
    return new Date(anObject);
    return self;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_now'),
smalltalk.method({
selector: unescape('now'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_today", []);
    return self;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_today'),
smalltalk.method({
selector: unescape('today'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_new", []);
    return self;
}
}),
smalltalk.Date.klass);


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel-Objects');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (aSymbol) {
    var self = this;
    var attr = nil;
    attr = smalltalk.send(aSymbol, "_asString", []);
    return self['@jsObject'][attr];
    return self;
}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
fn: function (aSymbol, anObject) {
    var self = this;
    var attr = nil;
    attr = smalltalk.send(aSymbol, "_asString", []);
    self['@jsObject'][attr] = anObject;
    return self;
}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
fn: function (aMessage) {
    var self = this;
    var obj = nil;
    var selector = nil;
    var jsSelector = nil;
    var arguments = nil;
    obj = smalltalk.send(self, "_jsObject", []);
    selector = smalltalk.send(aMessage, "_selector", []);
    jsSelector = smalltalk.send(selector, "_asJavaScriptSelector", []);
    arguments = smalltalk.send(aMessage, "_arguments", []);
    if (obj[jsSelector] != undefined) {
        return smalltalk.send(obj, jsSelector, arguments);
    }
    smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Object);
    return self;
}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
fn: function (anInspector) {
    var self = this;
    var variables = nil;
    variables = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(variables, "_at_put_", [unescape("%23self"), smalltalk.send(self, "_jsObject", [])]);
    smalltalk.send(anInspector, "_setLabel_", [smalltalk.send(self, "_printString", [])]);
    for (var i in self['@jsObject']) {
        variables._at_put_(i, self['@jsObject'][i]);
    }
    smalltalk.send(anInspector, "_setVariables_", [variables]);
    return self;
}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_jsObject'),
smalltalk.method({
selector: unescape('jsObject'),
fn: function () {
    var self = this;
    return self['@jsObject'];
    return self;
}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_jsObject_'),
smalltalk.method({
selector: unescape('jsObject%3A'),
fn: function (aJSObject) {
    var self = this;
    self['@jsObject'] = aJSObject;
    return self;
}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_jsObject", []), "_toString", []);
    return self;
}
}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
fn: function (aJSObject) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_jsObject_", [aJSObject]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
unescape('__star'),
smalltalk.method({
selector: unescape('*'),
fn: function (aNumber) {
    var self = this;
    return self * aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__plus'),
smalltalk.method({
selector: unescape('+'),
fn: function (aNumber) {
    var self = this;
    return self + aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__minus'),
smalltalk.method({
selector: unescape('-'),
fn: function (aNumber) {
    var self = this;
    return self - aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__slash'),
smalltalk.method({
selector: unescape('/'),
fn: function (aNumber) {
    var self = this;
    return self / aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__lt'),
smalltalk.method({
selector: unescape('%3C'),
fn: function (aNumber) {
    var self = this;
    return self < aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__lt_eq'),
smalltalk.method({
selector: unescape('%3C%3D'),
fn: function (aNumber) {
    var self = this;
    return self <= aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (aNumber) {
    var self = this;
    try {
        ($receiver = smalltalk.send(aNumber, "_isNumber", [])).klass === smalltalk.Boolean ? !$receiver ? function () {return function () {throw {name: "stReturn", selector: "__eq", fn: function () {return false;}};}();}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {return function () {throw {name: "stReturn", selector: "__eq", fn: function () {return false;}};}();}]);
        return Number(self) == aNumber;
        return self;
    } catch (e) {
        if (e.name === "stReturn" && e.selector === "__eq") {
            return e.fn();
        }
        throw e;
    }
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__gt'),
smalltalk.method({
selector: unescape('%3E'),
fn: function (aNumber) {
    var self = this;
    return self > aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__gt_eq'),
smalltalk.method({
selector: unescape('%3E%3D'),
fn: function (aNumber) {
    var self = this;
    return self >= aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__at'),
smalltalk.method({
selector: unescape('@'),
fn: function (aNumber) {
    var self = this;
    return smalltalk.send(smalltalk.Point || Point, "_x_y_", [self, aNumber]);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_%5C%5C'),
smalltalk.method({
selector: unescape('%5C%5C'),
fn: function (aNumber) {
    var self = this;
    return self % aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_asJSON'),
smalltalk.method({
selector: unescape('asJSON'),
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [smalltalk.send(self, "_printString", [])]), "__comma", [unescape("%29")]);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_asPoint'),
smalltalk.method({
selector: unescape('asPoint'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.Point || Point, "_x_y_", [self, self]);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_printString", []);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_atRandom'),
smalltalk.method({
selector: unescape('atRandom'),
fn: function () {
    var self = this;
    return ($receiver = smalltalk.send(($receiver = smalltalk.send(smalltalk.send(smalltalk.Random || Random, "_new", []), "_next", [])).klass === smalltalk.Number ? $receiver * self : smalltalk.send($receiver, "__star", [self]), "_truncated", [])).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_clearInterval'),
smalltalk.method({
selector: unescape('clearInterval'),
fn: function () {
    var self = this;
    clearInterval(Number(self));
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_clearTimeout'),
smalltalk.method({
selector: unescape('clearTimeout'),
fn: function () {
    var self = this;
    clearTimeout(Number(self));
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_copy'),
smalltalk.method({
selector: unescape('copy'),
fn: function () {
    var self = this;
    return self;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_copy", []);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_even'),
smalltalk.method({
selector: unescape('even'),
fn: function () {
    var self = this;
    return smalltalk.send(0, "__eq", [smalltalk.send(self, "_\\\\", [2])]);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_identityHash'),
smalltalk.method({
selector: unescape('identityHash'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_asString", []), "__comma", ["n"]);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_isNumber'),
smalltalk.method({
selector: unescape('isNumber'),
fn: function () {
    var self = this;
    return true;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_isZero'),
smalltalk.method({
selector: unescape('isZero'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "__eq", [0]);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_max_'),
smalltalk.method({
selector: unescape('max%3A'),
fn: function (aNumber) {
    var self = this;
    return Math.max(self, aNumber);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_min_'),
smalltalk.method({
selector: unescape('min%3A'),
fn: function (aNumber) {
    var self = this;
    return Math.min(self, aNumber);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_negated'),
smalltalk.method({
selector: unescape('negated'),
fn: function () {
    var self = this;
    return 0 - self;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_negative'),
smalltalk.method({
selector: unescape('negative'),
fn: function () {
    var self = this;
    return self < 0;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_odd'),
smalltalk.method({
selector: unescape('odd'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_even", []), "_not", []);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_positive'),
smalltalk.method({
selector: unescape('positive'),
fn: function () {
    var self = this;
    return self >= 0;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_printShowingDecimalPlaces_'),
smalltalk.method({
selector: unescape('printShowingDecimalPlaces%3A'),
fn: function (placesDesired) {
    var self = this;
    return self.toFixed(placesDesired);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
    var self = this;
    return String(self);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_rounded'),
smalltalk.method({
selector: unescape('rounded'),
fn: function () {
    var self = this;
    return Math.round(self);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_sqrt'),
smalltalk.method({
selector: unescape('sqrt'),
fn: function () {
    var self = this;
    return Math.sqrt(self);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_squared'),
smalltalk.method({
selector: unescape('squared'),
fn: function () {
    var self = this;
    return self * self;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_timesRepeat_'),
smalltalk.method({
selector: unescape('timesRepeat%3A'),
fn: function (aBlock) {
    var self = this;
    var integer = nil;
    var count = nil;
    integer = smalltalk.send(self, "_truncated", []);
    count = 1;
    (function () {while (!function () {return ($receiver = count).klass === smalltalk.Number ? $receiver > self : smalltalk.send($receiver, "__gt", [self]);}()) {(function () {smalltalk.send(aBlock, "_value", []);return count = ($receiver = count).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}());}}());
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_to_'),
smalltalk.method({
selector: unescape('to%3A'),
fn: function (aNumber) {
    var self = this;
    var array = nil;
    var first = nil;
    var last = nil;
    var count = nil;
    first = smalltalk.send(self, "_truncated", []);
    last = ($receiver = smalltalk.send(aNumber, "_truncated", [])).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);
    count = 1;
    array = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(($receiver = last).klass === smalltalk.Number ? $receiver - first : smalltalk.send($receiver, "__minus", [first]), "_timesRepeat_", [function () {smalltalk.send(array, "_at_put_", [count, first]);count = ($receiver = count).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);return first = ($receiver = first).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}]);
    return array;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_to_by_'),
smalltalk.method({
selector: unescape('to%3Aby%3A'),
fn: function (stop, step) {
    var self = this;
    var array = nil;
    var value = nil;
    var pos = nil;
    value = self;
    array = smalltalk.send(smalltalk.Array || Array, "_new", []);
    pos = 1;
    ($receiver = smalltalk.send(step, "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);}]);
    ($receiver = ($receiver = step).klass === smalltalk.Number ? $receiver < 0 : smalltalk.send($receiver, "__lt", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return function () {while (function () {return ($receiver = value).klass === smalltalk.Number ? $receiver >= stop : smalltalk.send($receiver, "__gt_eq", [stop]);}()) {(function () {smalltalk.send(array, "_at_put_", [pos, value]);pos = ($receiver = pos).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);return value = ($receiver = value).klass === smalltalk.Number ? $receiver + step : smalltalk.send($receiver, "__plus", [step]);}());}}();}() : function () {return function () {while (function () {return ($receiver = value).klass === smalltalk.Number ? $receiver <= stop : smalltalk.send($receiver, "__lt_eq", [stop]);}()) {(function () {smalltalk.send(array, "_at_put_", [pos, value]);pos = ($receiver = pos).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);return value = ($receiver = value).klass === smalltalk.Number ? $receiver + step : smalltalk.send($receiver, "__plus", [step]);}());}}();}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return function () {while (function () {return ($receiver = value).klass === smalltalk.Number ? $receiver >= stop : smalltalk.send($receiver, "__gt_eq", [stop]);}()) {(function () {smalltalk.send(array, "_at_put_", [pos, value]);pos = ($receiver = pos).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);return value = ($receiver = value).klass === smalltalk.Number ? $receiver + step : smalltalk.send($receiver, "__plus", [step]);}());}}();}, function () {return function () {while (function () {return ($receiver = value).klass === smalltalk.Number ? $receiver <= stop : smalltalk.send($receiver, "__lt_eq", [stop]);}()) {(function () {smalltalk.send(array, "_at_put_", [pos, value]);pos = ($receiver = pos).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);return value = ($receiver = value).klass === smalltalk.Number ? $receiver + step : smalltalk.send($receiver, "__plus", [step]);}());}}();}]);
    return array;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_to_by_do_'),
smalltalk.method({
selector: unescape('to%3Aby%3Ado%3A'),
fn: function (stop, step, aBlock) {
    var self = this;
    var value = nil;
    value = self;
    ($receiver = smalltalk.send(step, "__eq", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);}]);
    ($receiver = ($receiver = step).klass === smalltalk.Number ? $receiver < 0 : smalltalk.send($receiver, "__lt", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return function () {while (function () {return ($receiver = value).klass === smalltalk.Number ? $receiver >= stop : smalltalk.send($receiver, "__gt_eq", [stop]);}()) {(function () {smalltalk.send(aBlock, "_value_", [value]);return value = ($receiver = value).klass === smalltalk.Number ? $receiver + step : smalltalk.send($receiver, "__plus", [step]);}());}}();}() : function () {return function () {while (function () {return ($receiver = value).klass === smalltalk.Number ? $receiver <= stop : smalltalk.send($receiver, "__lt_eq", [stop]);}()) {(function () {smalltalk.send(aBlock, "_value_", [value]);return value = ($receiver = value).klass === smalltalk.Number ? $receiver + step : smalltalk.send($receiver, "__plus", [step]);}());}}();}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return function () {while (function () {return ($receiver = value).klass === smalltalk.Number ? $receiver >= stop : smalltalk.send($receiver, "__gt_eq", [stop]);}()) {(function () {smalltalk.send(aBlock, "_value_", [value]);return value = ($receiver = value).klass === smalltalk.Number ? $receiver + step : smalltalk.send($receiver, "__plus", [step]);}());}}();}, function () {return function () {while (function () {return ($receiver = value).klass === smalltalk.Number ? $receiver <= stop : smalltalk.send($receiver, "__lt_eq", [stop]);}()) {(function () {smalltalk.send(aBlock, "_value_", [value]);return value = ($receiver = value).klass === smalltalk.Number ? $receiver + step : smalltalk.send($receiver, "__plus", [step]);}());}}();}]);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_to_do_'),
smalltalk.method({
selector: unescape('to%3Ado%3A'),
fn: function (stop, aBlock) {
    var self = this;
    var nextValue = nil;
    nextValue = self;
    (function () {while (function () {return ($receiver = nextValue).klass === smalltalk.Number ? $receiver <= stop : smalltalk.send($receiver, "__lt_eq", [stop]);}()) {(function () {smalltalk.send(aBlock, "_value_", [nextValue]);return nextValue = ($receiver = nextValue).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]);}());}}());
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_truncated'),
smalltalk.method({
selector: unescape('truncated'),
fn: function () {
    var self = this;
    var result = nil;
    ($receiver = self >= 0).klass === smalltalk.Boolean ? $receiver ? function () {return result = Math.floor(self);}() : function () {return result = Math.floor(self * -1) * -1;}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return result = Math.floor(self);}, function () {return result = Math.floor(self * -1) * -1;}]);
    return result;
    return self;
}
}),
smalltalk.Number);


smalltalk.addMethod(
unescape('_pi'),
smalltalk.method({
selector: unescape('pi'),
fn: function () {
    var self = this;
    return Math.PI;
    return self;
}
}),
smalltalk.Number.klass);


smalltalk.addClass('Package', smalltalk.Object, ['commitPathJs', 'commitPathSt'], 'Kernel-Objects');
smalltalk.addMethod(
unescape('_classes'),
smalltalk.method({
selector: unescape('classes'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", []), "_select_", [function (c) {return smalltalk.send(smalltalk.send(c, "_package", []), "__eq_eq", [self]);}]);
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_commitPathJs'),
smalltalk.method({
selector: unescape('commitPathJs'),
fn: function () {
    var self = this;
    return ($receiver = self['@commitPathJs']) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_defaultCommitPathJs", []);}() : $receiver;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_commitPathJs_'),
smalltalk.method({
selector: unescape('commitPathJs%3A'),
fn: function (aString) {
    var self = this;
    self['@commitPathJs'] = aString;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_commitPathSt'),
smalltalk.method({
selector: unescape('commitPathSt'),
fn: function () {
    var self = this;
    return ($receiver = self['@commitPathSt']) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(smalltalk.send(self, "_class", []), "_defaultCommitPathSt", []);}() : $receiver;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_commitPathSt_'),
smalltalk.method({
selector: unescape('commitPathSt%3A'),
fn: function (aString) {
    var self = this;
    self['@commitPathSt'] = aString;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_dependencies'),
smalltalk.method({
selector: unescape('dependencies'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_propertyAt_ifAbsent_", ["dependencies", function () {return [];}]);
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_dependencies_'),
smalltalk.method({
selector: unescape('dependencies%3A'),
fn: function (anArray) {
    var self = this;
    return smalltalk.send(self, "_propertyAt_put_", ["dependencies", anArray]);
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_jsProperties'),
smalltalk.method({
selector: unescape('jsProperties'),
fn: function () {
    var self = this;
    return self.properties;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_jsProperties_'),
smalltalk.method({
selector: unescape('jsProperties%3A'),
fn: function (aJSObject) {
    var self = this;
    return self.properties = aJSObject;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
fn: function () {
    var self = this;
    return self.pkgName;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_name_'),
smalltalk.method({
selector: unescape('name%3A'),
fn: function (aString) {
    var self = this;
    self.pkgName = aString;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
    var self = this;
    return smalltalk.send(self, "_name", []);
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_properties'),
smalltalk.method({
selector: unescape('properties'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_readJSObject_", [smalltalk.send(self, "_basicAt_", ["properties"])]);
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_properties_'),
smalltalk.method({
selector: unescape('properties%3A'),
fn: function (aDict) {
    var self = this;
    var object = nil;
    object = {};
    smalltalk.send(aDict, "_keysAndValuesDo_", [function (key, value) {return object[key] = value;}]);
    return self.properties = object;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_propertiesAsJSON'),
smalltalk.method({
selector: unescape('propertiesAsJSON'),
fn: function () {
    var self = this;
    return JSON.stringify(self.properties);
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_propertyAt_'),
smalltalk.method({
selector: unescape('propertyAt%3A'),
fn: function (key) {
    var self = this;
    return self.properties[key];
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_propertyAt_ifAbsent_'),
smalltalk.method({
selector: unescape('propertyAt%3AifAbsent%3A'),
fn: function (key, block) {
    var self = this;
    return ($receiver = smalltalk.send(self, "_propertyAt_", [key])) == nil ||
        $receiver == undefined ? function () {return smalltalk.send(block, "_value", []);}() : $receiver;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_propertyAt_put_'),
smalltalk.method({
selector: unescape('propertyAt%3Aput%3A'),
fn: function (key, value) {
    var self = this;
    return self.properties[key] = value;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_sortedClasses'),
smalltalk.method({
selector: unescape('sortedClasses'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_sortedClasses_", [smalltalk.send(self, "_classes", [])]);
return self;}
}),
smalltalk.Package);


smalltalk.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
unescape('_commitToLocalStorage_'),
smalltalk.method({
selector: unescape('commitToLocalStorage%3A'),
fn: function (aPackageName) {
    var self = this;
    var key = nil;
    var sourceCode = nil;
    key = smalltalk.send("smalltalk.packages.", "__comma", [aPackageName]);
    sourceCode = smalltalk.send(smalltalk.send(smalltalk.Exporter || Exporter, "_new", []), "_exportPackage_", [aPackageName]);
    localStorage[key] = escape(sourceCode);
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_defaultCommitPathJs'),
smalltalk.method({
selector: unescape('defaultCommitPathJs'),
fn: function () {
    var self = this;
    return ($receiver = self['@defaultCommitPathJs']) == nil ||
        $receiver == undefined ? function () {return self['@defaultCommitPathJs'] = "js";}() : $receiver;
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_defaultCommitPathJs_'),
smalltalk.method({
selector: unescape('defaultCommitPathJs%3A'),
fn: function (aString) {
    var self = this;
    self['@defaultCommitPathJs'] = aString;
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_defaultCommitPathSt'),
smalltalk.method({
selector: unescape('defaultCommitPathSt'),
fn: function () {
    var self = this;
    return ($receiver = self['@defaultCommitPathSt']) == nil ||
        $receiver == undefined ? function () {return self['@defaultCommitPathSt'] = "st";}() : $receiver;
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_defaultCommitPathSt_'),
smalltalk.method({
selector: unescape('defaultCommitPathSt%3A'),
fn: function (aString) {
    var self = this;
    self['@defaultCommitPathSt'] = aString;
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_fetch_'),
smalltalk.method({
selector: unescape('fetch%3A'),
fn: function (aPackageName) {
    var self = this;
    smalltalk.send(self, "_fetch_prefix_", [aPackageName, smalltalk.send(smalltalk.send(self, "_defaultCommitPathJs", []), "__comma", [unescape("/")])]);
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_fetch_prefix_'),
smalltalk.method({
selector: unescape('fetch%3Aprefix%3A'),
fn: function (aPackageName, aPrefix) {
    var self = this;
    smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_getScript_onSuccess_", [smalltalk.send(smalltalk.send(aPrefix, "__comma", [aPackageName]), "__comma", [".js"]), function () {return smalltalk.send(smalltalk.Package || Package, "_init_", [aPackageName]);}]);
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_init_'),
smalltalk.method({
selector: unescape('init%3A'),
fn: function (aPackageName) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_do_", [function (each) {return smalltalk.init(each);}]);return smalltalk.send($rec, "_do_", [function (each) {return smalltalk.send(each, "_initialize", []);}]);}(smalltalk.send(smalltalk.send(typeof smalltalk == "undefined" ? nil : smalltalk, "_classes", []), "_select_", [function (each) {return each.pkg.pkgName == aPackageName;}])));
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_named_'),
smalltalk.method({
selector: unescape('named%3A'),
fn: function (aPackageName) {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_packageAt_", [aPackageName]);
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_named_ifAbsent_'),
smalltalk.method({
selector: unescape('named%3AifAbsent%3A'),
fn: function (aPackageName, aBlock) {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_packageAt_ifAbsent_", [aPackageName, aBlock]);
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_resetCommitPaths'),
smalltalk.method({
selector: unescape('resetCommitPaths'),
fn: function () {
    var self = this;
    self['@defaultCommitPathJs'] = nil;
    self['@defaultCommitPathSt'] = nil;
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_sortedClasses_'),
smalltalk.method({
selector: unescape('sortedClasses%3A'),
fn: function (classes){
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
unescape('__star'),
smalltalk.method({
selector: unescape('*'),
fn: function (aPoint) {
    var self = this;
    return smalltalk.send(smalltalk.Point || Point, "_x_y_", [($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number ? $receiver * smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), ($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number ? $receiver * smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return self;
}
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__plus'),
smalltalk.method({
selector: unescape('+'),
fn: function (aPoint) {
    var self = this;
    return smalltalk.send(smalltalk.Point || Point, "_x_y_", [($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number ? $receiver + smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), ($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number ? $receiver + smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return self;
}
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__minus'),
smalltalk.method({
selector: unescape('-'),
fn: function (aPoint) {
    var self = this;
    return smalltalk.send(smalltalk.Point || Point, "_x_y_", [($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number ? $receiver - smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), ($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number ? $receiver - smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return self;
}
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__slash'),
smalltalk.method({
selector: unescape('/'),
fn: function (aPoint) {
    var self = this;
    return smalltalk.send(smalltalk.Point || Point, "_x_y_", [($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number ? $receiver / smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), ($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number ? $receiver / smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return self;
}
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (aPoint) {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_class", []), "__eq", [smalltalk.send(self, "_class", [])]), "_and_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_x", []), "__eq", [smalltalk.send(self, "_x", [])]), "_&", [smalltalk.send(smalltalk.send(aPoint, "_y", []), "__eq", [smalltalk.send(self, "_y", [])])]);}]);
    return self;
}
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_asPoint'),
smalltalk.method({
selector: unescape('asPoint'),
fn: function () {
    var self = this;
    return self;
    return self;
}
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.String || String, "_streamContents_", [function (stream) {smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@x'], "_printString", []), "__comma", [unescape("@")])]);($receiver = smalltalk.send(smalltalk.send(self['@y'], "_notNil", []), "_and_", [function () {return smalltalk.send(self['@y'], "_negative", []);}])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(stream, "_space", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(stream, "_space", []);}]);return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self['@y'], "_printString", [])]);}]);
    return self;
}
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_translateBy_'),
smalltalk.method({
selector: unescape('translateBy%3A'),
fn: function (delta){
var self=this;
return smalltalk.send(((($receiver = smalltalk.send(delta, "_x", [])).klass === smalltalk.Number) ? $receiver +self['@x'] : smalltalk.send($receiver, "__plus", [self['@x']])), "__at", [((($receiver = smalltalk.send(delta, "_y", [])).klass === smalltalk.Number) ? $receiver +self['@y'] : smalltalk.send($receiver, "__plus", [self['@y']]))]);
return self;}
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_x'),
smalltalk.method({
selector: unescape('x'),
fn: function () {
    var self = this;
    return self['@x'];
    return self;
}
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_x_'),
smalltalk.method({
selector: unescape('x%3A'),
fn: function (aNumber) {
    var self = this;
    self['@x'] = aNumber;
    return self;
}
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_y'),
smalltalk.method({
selector: unescape('y'),
fn: function () {
    var self = this;
    return self['@y'];
    return self;
}
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_y_'),
smalltalk.method({
selector: unescape('y%3A'),
fn: function (aNumber) {
    var self = this;
    self['@y'] = aNumber;
    return self;
}
}),
smalltalk.Point);


smalltalk.addMethod(
unescape('_x_y_'),
smalltalk.method({
selector: unescape('x%3Ay%3A'),
fn: function (aNumber, anotherNumber) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_x_", [aNumber]);smalltalk.send($rec, "_y_", [anotherNumber]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Point.klass);


smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
unescape('_next'),
smalltalk.method({
selector: unescape('next'),
fn: function () {
    var self = this;
    return Math.random();
    return self;
}
}),
smalltalk.Random);

smalltalk.addMethod(
unescape('_next_'),
smalltalk.method({
selector: unescape('next%3A'),
fn: function (anInteger) {
    var self = this;
    return smalltalk.send(smalltalk.send(1, "_to_", [anInteger]), "_collect_", [function (each) {return smalltalk.send(self, "_next", []);}]);
    return self;
}
}),
smalltalk.Random);



smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (aString) {
    var self = this;
    return self[aString];
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_basicParse_'),
smalltalk.method({
selector: unescape('basicParse%3A'),
fn: function (aString) {
    var self = this;
    return smalltalk.parser.parse(aString);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_classes'),
smalltalk.method({
selector: unescape('classes'),
fn: function () {
    var self = this;
    return self.classes();
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_createPackage_'),
smalltalk.method({
selector: unescape('createPackage%3A'),
fn: function (packageName) {
    var self = this;
    return smalltalk.addPackage(packageName, nil);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_createPackage_properties_'),
smalltalk.method({
selector: unescape('createPackage%3Aproperties%3A'),
fn: function (packageName, aDict) {
    var self = this;
    var object = nil;
    object = {};
    smalltalk.send(aDict, "_keysAndValuesDo_", [function (key, value) {return object[key] = value;}]);
    return smalltalk.addPackage(packageName, object);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_deletePackage_'),
smalltalk.method({
selector: unescape('deletePackage%3A'),
fn: function (packageName) {
    var self = this;
    delete smalltalk.packages[packageName];
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_packageAt_'),
smalltalk.method({
selector: unescape('packageAt%3A'),
fn: function (packageName) {
    var self = this;
    return self.packages[packageName];
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_packageAt_ifAbsent_'),
smalltalk.method({
selector: unescape('packageAt%3AifAbsent%3A'),
fn: function (packageName, aBlock) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_packageAt_", [packageName]), "_ifNil_", [aBlock]);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_packages'),
smalltalk.method({
selector: unescape('packages'),
fn: function () {
    var self = this;
    return self.packages.all();
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_parse_'),
smalltalk.method({
selector: unescape('parse%3A'),
fn: function (aString) {
    var self = this;
    var result = nil;
    smalltalk.send(self, "_try_catch_", [function () {return result = smalltalk.send(self, "_basicParse_", [aString]);}, function (ex) {return smalltalk.send(smalltalk.send(self, "_parseError_parsing_", [ex, aString]), "_signal", []);}]);
    return result;
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_parseError_parsing_'),
smalltalk.method({
selector: unescape('parseError%3Aparsing%3A'),
fn: function (anException, aString) {
    var self = this;
    var row = nil;
    var col = nil;
    var message = nil;
    var lines = nil;
    var badLine = nil;
    var code = nil;
    row = anException.line;
    col = anException.column;
    message = anException.message;
    lines = smalltalk.send(aString, "_lines", []);
    badLine = smalltalk.send(lines, "_at_", [row]);
    badLine = smalltalk.send(smalltalk.send(smalltalk.send(badLine, "_copyFrom_to_", [1, ($receiver = col).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1])]), "__comma", [unescape("%20%3D%3D%3D%3E")]), "__comma", [smalltalk.send(badLine, "_copyFrom_to_", [col, smalltalk.send(badLine, "_size", [])])]);
    smalltalk.send(lines, "_at_put_", [row, badLine]);
    code = smalltalk.send(smalltalk.String || String, "_streamContents_", [function (s) {return smalltalk.send(lines, "_withIndexDo_", [function (l, i) {return smalltalk.send(s, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(i, "_asString", []), "__comma", [": "]), "__comma", [l]), "__comma", [smalltalk.send(smalltalk.String || String, "_lf", [])])]);}]);}]);
    return smalltalk.send(smalltalk.send(smalltalk.Error || Error, "_new", []), "_messageText_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Parse error on line ", "__comma", [row]), "__comma", [" column "]), "__comma", [col]), "__comma", [" : "]), "__comma", [message]), "__comma", [unescape("%20Below%20is%20code%20with%20line%20numbers%20and%20%3D%3D%3D%3E%20marker%20inserted%3A")]), "__comma", [smalltalk.send(smalltalk.String || String, "_lf", [])]), "__comma", [code])]);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_readJSObject_'),
smalltalk.method({
selector: unescape('readJSObject%3A'),
fn: function (anObject) {
    var self = this;
    return self.readJSObject(anObject);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_removeClass_'),
smalltalk.method({
selector: unescape('removeClass%3A'),
fn: function (aClass) {
    var self = this;
    ($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [unescape("%20is%20a%20Metaclass%20and%20cannot%20be%20removed%21")])]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [unescape("%20is%20a%20Metaclass%20and%20cannot%20be%20removed%21")])]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [function (each) {return smalltalk.send(aClass, "_removeCompiledMethod_", [each]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_methodDictionary", []), "_values", []), "_do_", [function (each) {return smalltalk.send(smalltalk.send(aClass, "_class", []), "_removeCompiledMethod_", [each]);}]);
    smalltalk.send(self, "_basicDelete_", [smalltalk.send(aClass, "_name", [])]);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_removePackage_'),
smalltalk.method({
selector: unescape('removePackage%3A'),
fn: function (packageName) {
    var self = this;
    var pkg = nil;
    pkg = smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, function () {return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);}]);
    smalltalk.send(smalltalk.send(pkg, "_classes", []), "_do_", [function (each) {return smalltalk.send(self, "_removeClass_", [each]);}]);
    smalltalk.send(self, "_deletePackage_", [packageName]);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_renamePackage_to_'),
smalltalk.method({
selector: unescape('renamePackage%3Ato%3A'),
fn: function (packageName, newName) {
    var self = this;
    var pkg = nil;
    pkg = smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, function () {return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);}]);
    ($receiver = smalltalk.send(self, "_packageAt_", [newName])) != nil &&
        $receiver != undefined ? function () {return smalltalk.send(self, "_error_", [smalltalk.send("Already exists a package called: ", "__comma", [newName])]);}() : nil;
    smalltalk.packages[newName] = smalltalk.packages[packageName];
    smalltalk.send(pkg, "_name_", [newName]);
    smalltalk.send(self, "_deletePackage_", [packageName]);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_reservedWords'),
smalltalk.method({
selector: unescape('reservedWords'),
fn: function () {
    var self = this;
    return self.reservedWords;
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_send_to_arguments_'),
smalltalk.method({
selector: unescape('send%3Ato%3Aarguments%3A'),
fn: function (aSelector, anObject, aCollection) {
    var self = this;
    var selector = nil;
    selector = smalltalk.send(smalltalk.send(aSelector, "_asString", []), "_asSelector", []);
    self.send(anObject, selector, aCollection);
    return self;
}
}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
fn: function () {
    var self = this;
    return smalltalk;
    return self;
}
}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
unescape('_asJSON'),
smalltalk.method({
selector: unescape('asJSON'),
fn: function (){
var self=this;
return (typeof null == 'undefined' ? nil : null);
return self;}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
fn: function () {
    var self = this;
    return self;
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_ifNil_'),
smalltalk.method({
selector: unescape('ifNil%3A'),
fn: function (aBlock) {
    var self = this;
    return smalltalk.send(self, "_ifNil_ifNotNil_", [aBlock, function () {return nil;}]);
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_ifNil_ifNotNil_'),
smalltalk.method({
selector: unescape('ifNil%3AifNotNil%3A'),
fn: function (aBlock, anotherBlock) {
    var self = this;
    return smalltalk.send(aBlock, "_value", []);
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_ifNotNil_'),
smalltalk.method({
selector: unescape('ifNotNil%3A'),
fn: function (aBlock) {
    var self = this;
    return self;
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_ifNotNil_ifNil_'),
smalltalk.method({
selector: unescape('ifNotNil%3AifNil%3A'),
fn: function (aBlock, anotherBlock) {
    var self = this;
    return smalltalk.send(anotherBlock, "_value", []);
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_isNil'),
smalltalk.method({
selector: unescape('isNil'),
fn: function () {
    var self = this;
    return true;
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_notNil'),
smalltalk.method({
selector: unescape('notNil'),
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function () {
    var self = this;
    return "nil";
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
fn: function () {
    var self = this;
    return self;
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3A'),
fn: function (aString, anotherString) {
    var self = this;
    return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, anotherString, nil]);
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_category_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3Acategory%3A'),
fn: function (aString, aString2, aString3) {
    var self = this;
    smalltalk.send(self, "_deprecatedAPI", []);
    return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_package_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3Apackage%3A'),
fn: function (aString, aString2, aString3) {
    var self = this;
    return smalltalk.send(smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []), "_superclass_subclass_instanceVariableNames_package_", [self, aString, aString2, aString3]);
    return self;
}
}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["You cannot create new instances of UndefinedObject. Use nil"]);
    return self;
}
}),
smalltalk.UndefinedObject.klass);


