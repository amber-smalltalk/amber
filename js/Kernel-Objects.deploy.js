smalltalk.addPackage('Kernel-Objects', {});
smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel-Objects');
smalltalk.addMethod(
"__minus_gt",
smalltalk.method({
selector: "->",
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Association || Association, "_key_value_", [self, anObject]);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__eq_eq", [anObject]);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_identityHash", []), "__eq", [smalltalk.send(anObject, "_identityHash", [])]);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function () {
    var self = this;
    var variables;
    variables = smalltalk.send(smalltalk.HashedCollection || HashedCollection, "_new", []);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_allInstanceVariableNames", []), "_do_", [function (each) {return smalltalk.send(variables, "_at_put_", [each, smalltalk.send(smalltalk.send(self, "_instVarAt_", [each]), "_asJSON", [])]);}]);
    return variables;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJSONString",
smalltalk.method({
selector: "asJSONString",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.JSON || JSON, "_stringify_", [smalltalk.send(self, "_asJSON", [])]);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_asString", []);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_printString", []);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_",
smalltalk.method({
selector: "basicAt:",
fn: function (aString) {
    var self = this;
    return self[aString];
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_put_",
smalltalk.method({
selector: "basicAt:put:",
fn: function (aString, anObject) {
    var self = this;
    return self[aString] = anObject;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicDelete_",
smalltalk.method({
selector: "basicDelete:",
fn: function (aString) {
    var self = this;
    delete self[aString];
    return aString;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicPerform_",
smalltalk.method({
selector: "basicPerform:",
fn: function (aSymbol) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicPerform_withArguments_", [aSymbol, []]);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicPerform_withArguments_",
smalltalk.method({
selector: "basicPerform:withArguments:",
fn: function (aSymbol, aCollection) {
    var self = this;
    return self[aSymbol].apply(self, aCollection);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_class",
smalltalk.method({
selector: "class",
fn: function () {
    var self = this;
    return self.klass;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_copy",
smalltalk.method({
selector: "copy",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_shallowCopy", []), "_postCopy", []);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
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
"_deprecatedAPI",
smalltalk.method({
selector: "deprecatedAPI",
fn: function () {
    var self = this;
    smalltalk.send(console, "_warn_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(thisContext, "_home", []), "_asString", []), "__comma", [" is deprecated! (in "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(thisContext, "_home", []), "_home", []), "_asString", [])]), "__comma", [")"])]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.MessageNotUnderstood || MessageNotUnderstood, "_new", []);
    smalltalk.send($1, "_receiver_", [self]);
    smalltalk.send($1, "_message_", [aMessage]);
    $2 = smalltalk.send($1, "_signal", []);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.Error || Error, "_signal_", [aString]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_halt",
smalltalk.method({
selector: "halt",
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["Halt encountered"]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_identityHash",
smalltalk.method({
selector: "identityHash",
fn: function () {
    var self = this;
    var hash = self.identityHash;
    if (hash) {
        return hash;
    }
    hash = smalltalk.nextId();
    Object.defineProperty(self, "identityHash", {value: hash});
    return hash;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
fn: function (aBlock) {
    var self = this;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(anotherBlock, "_value", []);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
fn: function (aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aBlock, "_value", []);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aBlock, "_value", []);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_",
smalltalk.method({
selector: "instVarAt:",
fn: function (aSymbol) {
    var self = this;
    var varname;
    varname = smalltalk.send(aSymbol, "_asString", []);
    return self["@" + varname];
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_put_",
smalltalk.method({
selector: "instVarAt:put:",
fn: function (aSymbol, anObject) {
    var self = this;
    var varname;
    varname = smalltalk.send(aSymbol, "_asString", []);
    self["@" + varname] = anObject;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isClass",
smalltalk.method({
selector: "isClass",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isKindOf_",
smalltalk.method({
selector: "isKindOf:",
fn: function (aClass) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_isMemberOf_", [aClass]);
    if (smalltalk.assert($2)) {
        $1 = true;
    } else {
        $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);
    }
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isMemberOf_",
smalltalk.method({
selector: "isMemberOf:",
fn: function (aClass) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [aClass]);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isMetaclass",
smalltalk.method({
selector: "isMetaclass",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isNil",
smalltalk.method({
selector: "isNil",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isNumber",
smalltalk.method({
selector: "isNumber",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isParseFailure",
smalltalk.method({
selector: "isParseFailure",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_isSymbol",
smalltalk.method({
selector: "isSymbol",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_log_block_",
smalltalk.method({
selector: "log:block:",
fn: function (aString, aBlock) {
    var self = this;
    var result;
    smalltalk.send(console, "_log_", [smalltalk.send(smalltalk.send(aString, "__comma", [" time: "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.Date || Date, "_millisecondsToRun_", [function () {result = smalltalk.send(aBlock, "_value", []);return result;}]), "_printString", [])])]);
    return result;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_notNil",
smalltalk.method({
selector: "notNil",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_isNil", []), "_not", []);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_perform_",
smalltalk.method({
selector: "perform:",
fn: function (aSymbol) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_perform_withArguments_", [aSymbol, []]);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_perform_withArguments_",
smalltalk.method({
selector: "perform:withArguments:",
fn: function (aSymbol, aCollection) {
    var self = this;
    var selector;
    selector = smalltalk.send(aSymbol, "_asSelector", []);
    return smalltalk.send(self, selector, aCollection);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_postCopy",
smalltalk.method({
selector: "postCopy",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
fn: function () {
    var self = this;
    console.log(self);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send("a ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_respondsTo_",
smalltalk.method({
selector: "respondsTo:",
fn: function (aSelector) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_canUnderstand_", [aSelector]);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
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
"_shouldNotImplement",
smalltalk.method({
selector: "shouldNotImplement",
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", [smalltalk.send("This method should not be implemented in ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["Object not indexable"]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
fn: function (aStream) {
    var self = this;
    smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(self, "_printString", [])]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_storeString",
smalltalk.method({
selector: "storeString",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.String || String, "_streamContents_", [function (s) {return smalltalk.send(self, "_storeOn_", [s]);}]);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_subclassResponsibility",
smalltalk.method({
selector: "subclassResponsibility",
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["This method is a responsibility of a subclass"]);
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_throw_",
smalltalk.method({
selector: "throw:",
fn: function (anObject) {
    var self = this;
    throw anObject;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_try_catch_",
smalltalk.method({
selector: "try:catch:",
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
"_value",
smalltalk.method({
selector: "value",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_yourself",
smalltalk.method({
selector: "yourself",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_~_eq",
smalltalk.method({
selector: "~=",
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "__eq", [anObject]), "__eq", [false]);
    return $1;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_~~",
smalltalk.method({
selector: "~~",
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "__eq_eq", [anObject]), "__eq", [false]);
    return $1;
}
}),
smalltalk.Object);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Object.klass);


smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
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
"__eq",
smalltalk.method({
selector: "=",
fn: function (aBoolean) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(self, "_class", [])]);
    if (!smalltalk.assert($1)) {
        return false;
    }
    return Boolean(self == true) == aBoolean;
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
fn: function (aBoolean) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__eq", [aBoolean]);
    return $1;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_and_",
smalltalk.method({
selector: "and:",
fn: function (aBlock) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "__eq", [true]);
    $1 = smalltalk.send($2, "_ifTrue_ifFalse_", [aBlock, function () {return false;}]);
    return $1;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
fn: function (aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_ifTrue_ifFalse_", [function () {}, aBlock]);
    return $1;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_ifTrue_ifFalse_", [anotherBlock, aBlock]);
    return $1;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
fn: function (aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_ifTrue_ifFalse_", [aBlock, function () {}]);
    return $1;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
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
"_not",
smalltalk.method({
selector: "not",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__eq", [false]);
    return $1;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_or_",
smalltalk.method({
selector: "or:",
fn: function (aBlock) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "__eq", [true]);
    $1 = smalltalk.send($2, "_ifTrue_ifFalse_", [function () {return true;}, aBlock]);
    return $1;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
    var self = this;
    return self.toString();
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_|",
smalltalk.method({
selector: "|",
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
"__plus",
smalltalk.method({
selector: "+",
fn: function (aDate) {
    var self = this;
    return self + aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function (aDate) {
    var self = this;
    return self - aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aDate) {
    var self = this;
    return self < aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aDate) {
    var self = this;
    return self <= aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aDate) {
    var self = this;
    return self > aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aDate) {
    var self = this;
    return self >= aDate;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asDateString",
smalltalk.method({
selector: "asDateString",
fn: function () {
    var self = this;
    return self.toDateString();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asLocaleString",
smalltalk.method({
selector: "asLocaleString",
fn: function () {
    var self = this;
    return self.toLocaleString();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asMilliseconds",
smalltalk.method({
selector: "asMilliseconds",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_time", []);
    return $1;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_asMilliseconds", []);
    return $1;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function () {
    var self = this;
    return self.toString();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_asTimeString",
smalltalk.method({
selector: "asTimeString",
fn: function () {
    var self = this;
    return self.toTimeString();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_day",
smalltalk.method({
selector: "day",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_dayOfWeek", []);
    return $1;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_day_",
smalltalk.method({
selector: "day:",
fn: function (aNumber) {
    var self = this;
    smalltalk.send(self, "_dayOfWeek_", [aNumber]);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth",
smalltalk.method({
selector: "dayOfMonth",
fn: function () {
    var self = this;
    return self.getDate();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth_",
smalltalk.method({
selector: "dayOfMonth:",
fn: function (aNumber) {
    var self = this;
    self.setDate(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek",
smalltalk.method({
selector: "dayOfWeek",
fn: function () {
    var self = this;
    return self.getDay() + 1;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek_",
smalltalk.method({
selector: "dayOfWeek:",
fn: function (aNumber) {
    var self = this;
    return self.setDay(aNumber - 1);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_hours",
smalltalk.method({
selector: "hours",
fn: function () {
    var self = this;
    return self.getHours();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_hours_",
smalltalk.method({
selector: "hours:",
fn: function (aNumber) {
    var self = this;
    self.setHours(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds",
smalltalk.method({
selector: "milliseconds",
fn: function () {
    var self = this;
    return self.getMilliseconds();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds_",
smalltalk.method({
selector: "milliseconds:",
fn: function (aNumber) {
    var self = this;
    self.setMilliseconds(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes",
smalltalk.method({
selector: "minutes",
fn: function () {
    var self = this;
    return self.getMinutes();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes_",
smalltalk.method({
selector: "minutes:",
fn: function (aNumber) {
    var self = this;
    self.setMinutes(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_month",
smalltalk.method({
selector: "month",
fn: function () {
    var self = this;
    return self.getMonth() + 1;
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_month_",
smalltalk.method({
selector: "month:",
fn: function (aNumber) {
    var self = this;
    self.setMonth(aNumber - 1);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_asString", []);
    return $1;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds",
smalltalk.method({
selector: "seconds",
fn: function () {
    var self = this;
    return self.getSeconds();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds_",
smalltalk.method({
selector: "seconds:",
fn: function (aNumber) {
    var self = this;
    self.setSeconds(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_time",
smalltalk.method({
selector: "time",
fn: function () {
    var self = this;
    return self.getTime();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_time_",
smalltalk.method({
selector: "time:",
fn: function (aNumber) {
    var self = this;
    self.setTime(aNumber);
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_year",
smalltalk.method({
selector: "year",
fn: function () {
    var self = this;
    return self.getFullYear();
    return self;
}
}),
smalltalk.Date);

smalltalk.addMethod(
"_year_",
smalltalk.method({
selector: "year:",
fn: function (aNumber) {
    var self = this;
    self.setFullYear(aNumber);
    return self;
}
}),
smalltalk.Date);


smalltalk.addMethod(
"_fromMilliseconds_",
smalltalk.method({
selector: "fromMilliseconds:",
fn: function (aNumber) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_new_", [aNumber]);
    return $1;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_fromSeconds_",
smalltalk.method({
selector: "fromSeconds:",
fn: function (aNumber) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_fromMilliseconds_", [smalltalk.send(aNumber, "__star", [1000])]);
    return $1;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
fn: function (aString) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_new_", [aString]);
    return $1;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_millisecondsToRun_",
smalltalk.method({
selector: "millisecondsToRun:",
fn: function (aBlock) {
    var self = this;
    var $1;
    var t;
    t = smalltalk.send(smalltalk.Date || Date, "_now", []);
    smalltalk.send(aBlock, "_value", []);
    $1 = smalltalk.send(smalltalk.send(smalltalk.Date || Date, "_now", []), "__minus", [t]);
    return $1;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
fn: function (anObject) {
    var self = this;
    return new Date(anObject);
    return self;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_now",
smalltalk.method({
selector: "now",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_today", []);
    return $1;
}
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_today",
smalltalk.method({
selector: "today",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_new", []);
    return $1;
}
}),
smalltalk.Date.klass);


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel-Objects');
smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (aSymbol) {
    var self = this;
    var attr;
    attr = smalltalk.send(aSymbol, "_asString", []);
    return self['@jsObject'][attr];
    return self;
}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
fn: function (aSymbol, anObject) {
    var self = this;
    var attr;
    attr = smalltalk.send(aSymbol, "_asString", []);
    self['@jsObject'][attr] = anObject;
    return self;
}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage) {
    var self = this;
    var obj;
    var selector;
    var jsSelector;
    var arguments;
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
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector) {
    var self = this;
    var variables;
    variables = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(variables, "_at_put_", ["#self", smalltalk.send(self, "_jsObject", [])]);
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
"_jsObject",
smalltalk.method({
selector: "jsObject",
fn: function () {
    var self = this;
    return self['@jsObject'];
}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_jsObject_",
smalltalk.method({
selector: "jsObject:",
fn: function (aJSObject) {
    var self = this;
    self['@jsObject'] = aJSObject;
    return self;
}
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_jsObject", []), "_toString", []);
    return $1;
}
}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aJSObject) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_jsObject_", [aJSObject]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
fn: function (aNumber) {
    var self = this;
    return self & aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
fn: function (aNumber) {
    var self = this;
    return self * aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
fn: function (aNumber) {
    var self = this;
    return self + aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function (aNumber) {
    var self = this;
    return self - aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
fn: function (aNumber) {
    var self = this;
    return self / aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
fn: function (aNumber) {
    var self = this;
    return self < aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
fn: function (aNumber) {
    var self = this;
    return self <= aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aNumber) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aNumber, "_isNumber", []);
    if (!smalltalk.assert($1)) {
        return false;
    }
    return Number(self) == aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
fn: function (aNumber) {
    var self = this;
    return self > aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
fn: function (aNumber) {
    var self = this;
    return self >= aNumber;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"__at",
smalltalk.method({
selector: "@",
fn: function (aNumber) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [self, aNumber]);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_\x5c\x5c",
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
fn: function () {
    var self = this;
    var $1;
    $1 = Math.abs(self);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_printString", [])]), "__comma", [")"]);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_asPoint",
smalltalk.method({
selector: "asPoint",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [self, self]);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_printString", []);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Random || Random, "_new", []), "_next", []), "__star", [self]), "_truncated", []), "__plus", [1]);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_clearInterval",
smalltalk.method({
selector: "clearInterval",
fn: function () {
    var self = this;
    clearInterval(Number(self));
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_clearTimeout",
smalltalk.method({
selector: "clearTimeout",
fn: function () {
    var self = this;
    clearTimeout(Number(self));
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_copy",
smalltalk.method({
selector: "copy",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_copy", []);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_even",
smalltalk.method({
selector: "even",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(0, "__eq", [smalltalk.send(self, "_\\\\", [2])]);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_identityHash",
smalltalk.method({
selector: "identityHash",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_asString", []), "__comma", ["n"]);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_isNumber",
smalltalk.method({
selector: "isNumber",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_isZero",
smalltalk.method({
selector: "isZero",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__eq", [0]);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_max_",
smalltalk.method({
selector: "max:",
fn: function (aNumber) {
    var self = this;
    return Math.max(self, aNumber);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_min_",
smalltalk.method({
selector: "min:",
fn: function (aNumber) {
    var self = this;
    return Math.min(self, aNumber);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_negated",
smalltalk.method({
selector: "negated",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(0, "__minus", [self]);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_negative",
smalltalk.method({
selector: "negative",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__lt", [0]);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_odd",
smalltalk.method({
selector: "odd",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_even", []), "_not", []);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_positive",
smalltalk.method({
selector: "positive",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__gt_eq", [0]);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_printShowingDecimalPlaces_",
smalltalk.method({
selector: "printShowingDecimalPlaces:",
fn: function (placesDesired) {
    var self = this;
    return self.toFixed(placesDesired);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
    var self = this;
    return String(self);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_rounded",
smalltalk.method({
selector: "rounded",
fn: function () {
    var self = this;
    return Math.round(self);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_sqrt",
smalltalk.method({
selector: "sqrt",
fn: function () {
    var self = this;
    return Math.sqrt(self);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_squared",
smalltalk.method({
selector: "squared",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__star", [self]);
    return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_timesRepeat_",
smalltalk.method({
selector: "timesRepeat:",
fn: function (aBlock) {
    var self = this;
    var integer;
    var count;
    integer = smalltalk.send(self, "_truncated", []);
    count = 1;
    smalltalk.send(function () {return smalltalk.send(count, "__gt", [self]);}, "_whileFalse_", [function () {smalltalk.send(aBlock, "_value", []);count = smalltalk.send(count, "__plus", [1]);return count;}]);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_",
smalltalk.method({
selector: "to:",
fn: function (aNumber) {
    var self = this;
    var array;
    var first;
    var last;
    var count;
    first = smalltalk.send(self, "_truncated", []);
    last = smalltalk.send(smalltalk.send(aNumber, "_truncated", []), "__plus", [1]);
    count = 1;
    array = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(smalltalk.send(last, "__minus", [first]), "_timesRepeat_", [function () {smalltalk.send(array, "_at_put_", [count, first]);count = smalltalk.send(count, "__plus", [1]);count;first = smalltalk.send(first, "__plus", [1]);return first;}]);
    return array;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_by_",
smalltalk.method({
selector: "to:by:",
fn: function (stop, step) {
    var self = this;
    var $1, $2;
    var array;
    var value;
    var pos;
    value = self;
    array = smalltalk.send(smalltalk.Array || Array, "_new", []);
    pos = 1;
    $1 = smalltalk.send(step, "__eq", [0]);
    if (smalltalk.assert($1)) {
        smalltalk.send(self, "_error_", ["step must be non-zero"]);
    }
    $2 = smalltalk.send(step, "__lt", [0]);
    if (smalltalk.assert($2)) {
        smalltalk.send(function () {return smalltalk.send(value, "__gt_eq", [stop]);}, "_whileTrue_", [function () {smalltalk.send(array, "_at_put_", [pos, value]);pos = smalltalk.send(pos, "__plus", [1]);pos;value = smalltalk.send(value, "__plus", [step]);return value;}]);
    } else {
        smalltalk.send(function () {return smalltalk.send(value, "__lt_eq", [stop]);}, "_whileTrue_", [function () {smalltalk.send(array, "_at_put_", [pos, value]);pos = smalltalk.send(pos, "__plus", [1]);pos;value = smalltalk.send(value, "__plus", [step]);return value;}]);
    }
    return array;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_by_do_",
smalltalk.method({
selector: "to:by:do:",
fn: function (stop, step, aBlock) {
    var self = this;
    var $1, $2;
    var value;
    value = self;
    $1 = smalltalk.send(step, "__eq", [0]);
    if (smalltalk.assert($1)) {
        smalltalk.send(self, "_error_", ["step must be non-zero"]);
    }
    $2 = smalltalk.send(step, "__lt", [0]);
    if (smalltalk.assert($2)) {
        smalltalk.send(function () {return smalltalk.send(value, "__gt_eq", [stop]);}, "_whileTrue_", [function () {smalltalk.send(aBlock, "_value_", [value]);value = smalltalk.send(value, "__plus", [step]);return value;}]);
    } else {
        smalltalk.send(function () {return smalltalk.send(value, "__lt_eq", [stop]);}, "_whileTrue_", [function () {smalltalk.send(aBlock, "_value_", [value]);value = smalltalk.send(value, "__plus", [step]);return value;}]);
    }
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_do_",
smalltalk.method({
selector: "to:do:",
fn: function (stop, aBlock) {
    var self = this;
    var nextValue;
    nextValue = self;
    smalltalk.send(function () {return smalltalk.send(nextValue, "__lt_eq", [stop]);}, "_whileTrue_", [function () {smalltalk.send(aBlock, "_value_", [nextValue]);nextValue = smalltalk.send(nextValue, "__plus", [1]);return nextValue;}]);
    return self;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_truncated",
smalltalk.method({
selector: "truncated",
fn: function () {
    var self = this;
    var $1;
    var result;
    $1 = smalltalk.send(self, "__gt_eq", [0]);
    if (smalltalk.assert($1)) {
        result = Math.floor(self);
    } else {
        result = Math.floor(self * -1) * -1;
    }
    return result;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_|",
smalltalk.method({
selector: "|",
fn: function (aNumber) {
    var self = this;
    return self | aNumber;
    return self;
}
}),
smalltalk.Number);


smalltalk.addMethod(
"_pi",
smalltalk.method({
selector: "pi",
fn: function () {
    var self = this;
    return Math.PI;
    return self;
}
}),
smalltalk.Number.klass);


smalltalk.addClass('Package', smalltalk.Object, ['commitPathJs', 'commitPathSt'], 'Kernel-Objects');
smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", []), "_select_", [function (c) {return smalltalk.send(smalltalk.send(c, "_package", []), "__eq_eq", [self]);}]);
    return $1;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathJs",
smalltalk.method({
selector: "commitPathJs",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@commitPathJs']) == nil ||
        $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_defaultCommitPathJs", []);
    } else {
        $1 = self['@commitPathJs'];
    }
    return $1;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathJs_",
smalltalk.method({
selector: "commitPathJs:",
fn: function (aString) {
    var self = this;
    self['@commitPathJs'] = aString;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathSt",
smalltalk.method({
selector: "commitPathSt",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@commitPathSt']) == nil ||
        $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_defaultCommitPathSt", []);
    } else {
        $1 = self['@commitPathSt'];
    }
    return $1;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathSt_",
smalltalk.method({
selector: "commitPathSt:",
fn: function (aString) {
    var self = this;
    self['@commitPathSt'] = aString;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_dependencies",
smalltalk.method({
selector: "dependencies",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_propertyAt_ifAbsent_", ["dependencies", function () {return [];}]);
    return $1;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_dependencies_",
smalltalk.method({
selector: "dependencies:",
fn: function (anArray) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_propertyAt_put_", ["dependencies", anArray]);
    return $1;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_jsProperties",
smalltalk.method({
selector: "jsProperties",
fn: function () {
    var self = this;
    return self.properties;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_jsProperties_",
smalltalk.method({
selector: "jsProperties:",
fn: function (aJSObject) {
    var self = this;
    return self.properties = aJSObject;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return self.pkgName;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString) {
    var self = this;
    self.pkgName = aString;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_name", []);
    return $1;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_properties",
smalltalk.method({
selector: "properties",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_readJSObject_", [smalltalk.send(self, "_basicAt_", ["properties"])]);
    return $1;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_properties_",
smalltalk.method({
selector: "properties:",
fn: function (aDict) {
    var self = this;
    var object;
    object = {};
    smalltalk.send(aDict, "_keysAndValuesDo_", [function (key, value) {return object[key] = value;}]);
    return self.properties = object;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertiesAsJSON",
smalltalk.method({
selector: "propertiesAsJSON",
fn: function () {
    var self = this;
    return JSON.stringify(self.properties);
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_",
smalltalk.method({
selector: "propertyAt:",
fn: function (key) {
    var self = this;
    return self.properties[key];
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_ifAbsent_",
smalltalk.method({
selector: "propertyAt:ifAbsent:",
fn: function (key, block) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_propertyAt_", [key]);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = smalltalk.send(block, "_value", []);
    } else {
        $1 = $2;
    }
    return $1;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_put_",
smalltalk.method({
selector: "propertyAt:put:",
fn: function (key, value) {
    var self = this;
    return self.properties[key] = value;
    return self;
}
}),
smalltalk.Package);

smalltalk.addMethod(
"_sortedClasses",
smalltalk.method({
selector: "sortedClasses",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_sortedClasses_", [smalltalk.send(self, "_classes", [])]);
    return $1;
}
}),
smalltalk.Package);


smalltalk.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
"_commitToLocalStorage_",
smalltalk.method({
selector: "commitToLocalStorage:",
fn: function (aPackageName) {
    var self = this;
    var key;
    var sourceCode;
    key = smalltalk.send("smalltalk.packages.", "__comma", [aPackageName]);
    sourceCode = smalltalk.send(smalltalk.send(smalltalk.Exporter || Exporter, "_new", []), "_exportPackage_", [aPackageName]);
    localStorage[key] = escape(sourceCode);
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathJs",
smalltalk.method({
selector: "defaultCommitPathJs",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@defaultCommitPathJs']) == nil ||
        $receiver == undefined) {
        self['@defaultCommitPathJs'] = "js";
        $1 = self['@defaultCommitPathJs'];
    } else {
        $1 = self['@defaultCommitPathJs'];
    }
    return $1;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathJs_",
smalltalk.method({
selector: "defaultCommitPathJs:",
fn: function (aString) {
    var self = this;
    self['@defaultCommitPathJs'] = aString;
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathSt",
smalltalk.method({
selector: "defaultCommitPathSt",
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@defaultCommitPathSt']) == nil ||
        $receiver == undefined) {
        self['@defaultCommitPathSt'] = "st";
        $1 = self['@defaultCommitPathSt'];
    } else {
        $1 = self['@defaultCommitPathSt'];
    }
    return $1;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathSt_",
smalltalk.method({
selector: "defaultCommitPathSt:",
fn: function (aString) {
    var self = this;
    self['@defaultCommitPathSt'] = aString;
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_fetch_",
smalltalk.method({
selector: "fetch:",
fn: function (aPackageName) {
    var self = this;
    smalltalk.send(self, "_fetch_prefix_", [aPackageName, smalltalk.send(smalltalk.send(self, "_defaultCommitPathJs", []), "__comma", ["/"])]);
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_fetch_prefix_",
smalltalk.method({
selector: "fetch:prefix:",
fn: function (aPackageName, aPrefix) {
    var self = this;
    smalltalk.send(jQuery, "_getScript_onSuccess_", [smalltalk.send(smalltalk.send(aPrefix, "__comma", [aPackageName]), "__comma", [".js"]), function () {return smalltalk.send(smalltalk.Package || Package, "_init_", [aPackageName]);}]);
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_init_",
smalltalk.method({
selector: "init:",
fn: function (aPackageName) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.send(smalltalk, "_classes", []), "_select_", [function (each) {return each.pkg.pkgName == aPackageName;}]);
    smalltalk.send($1, "_do_", [function (each) {return smalltalk.init(each);}]);
    $2 = smalltalk.send($1, "_do_", [function (each) {return smalltalk.send(each, "_initialize", []);}]);
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_named_",
smalltalk.method({
selector: "named:",
fn: function (aPackageName) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_packageAt_", [aPackageName]);
    return $1;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_named_ifAbsent_",
smalltalk.method({
selector: "named:ifAbsent:",
fn: function (aPackageName, aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_packageAt_ifAbsent_", [aPackageName, aBlock]);
    return $1;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_resetCommitPaths",
smalltalk.method({
selector: "resetCommitPaths",
fn: function () {
    var self = this;
    self['@defaultCommitPathJs'] = nil;
    self['@defaultCommitPathSt'] = nil;
    return self;
}
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_sortedClasses_",
smalltalk.method({
selector: "sortedClasses:",
fn: function (classes) {
    var self = this;
    var $1;
    var children;
    var others;
    var nodes;
    var expandedClasses;
    children = [];
    others = [];
    smalltalk.send(classes, "_do_", [function (each) {$1 = smalltalk.send(classes, "_includes_", [smalltalk.send(each, "_superclass", [])]);if (smalltalk.assert($1)) {return smalltalk.send(others, "_add_", [each]);} else {return smalltalk.send(children, "_add_", [each]);}}]);
    nodes = smalltalk.send(children, "_collect_", [function (each) {return smalltalk.send(smalltalk.ClassSorterNode || ClassSorterNode, "_on_classes_level_", [each, others, 0]);}]);
    nodes = smalltalk.send(nodes, "_sorted_", [function (a, b) {return smalltalk.send(smalltalk.send(smalltalk.send(a, "_theClass", []), "_name", []), "__lt_eq", [smalltalk.send(smalltalk.send(b, "_theClass", []), "_name", [])]);}]);
    expandedClasses = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(nodes, "_do_", [function (aNode) {return smalltalk.send(aNode, "_traverseClassesWith_", [expandedClasses]);}]);
    return expandedClasses;
}
}),
smalltalk.Package.klass);


smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel-Objects');
smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [smalltalk.send(smalltalk.send(self, "_x", []), "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), smalltalk.send(smalltalk.send(self, "_y", []), "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return $1;
}
}),
smalltalk.Point);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [smalltalk.send(smalltalk.send(self, "_x", []), "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), smalltalk.send(smalltalk.send(self, "_y", []), "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return $1;
}
}),
smalltalk.Point);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [smalltalk.send(smalltalk.send(self, "_x", []), "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), smalltalk.send(smalltalk.send(self, "_y", []), "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return $1;
}
}),
smalltalk.Point);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [smalltalk.send(smalltalk.send(self, "_x", []), "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), smalltalk.send(smalltalk.send(self, "_y", []), "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return $1;
}
}),
smalltalk.Point);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_class", []), "__eq", [smalltalk.send(self, "_class", [])]), "_and_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_x", []), "__eq", [smalltalk.send(self, "_x", [])]), "_&", [smalltalk.send(smalltalk.send(aPoint, "_y", []), "__eq", [smalltalk.send(self, "_y", [])])]);}]);
    return $1;
}
}),
smalltalk.Point);

smalltalk.addMethod(
"_asPoint",
smalltalk.method({
selector: "asPoint",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.Point);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
    var self = this;
    var $2, $1;
    $1 = smalltalk.send(smalltalk.String || String, "_streamContents_", [function (stream) {smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@x'], "_printString", []), "__comma", ["@"])]);$2 = smalltalk.send(smalltalk.send(self['@y'], "_notNil", []), "_and_", [function () {return smalltalk.send(self['@y'], "_negative", []);}]);if (smalltalk.assert($2)) {smalltalk.send(stream, "_space", []);}return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self['@y'], "_printString", [])]);}]);
    return $1;
}
}),
smalltalk.Point);

smalltalk.addMethod(
"_translateBy_",
smalltalk.method({
selector: "translateBy:",
fn: function (delta) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(delta, "_x", []), "__plus", [self['@x']]), "__at", [smalltalk.send(smalltalk.send(delta, "_y", []), "__plus", [self['@y']])]);
    return $1;
}
}),
smalltalk.Point);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    return self['@x'];
}
}),
smalltalk.Point);

smalltalk.addMethod(
"_x_",
smalltalk.method({
selector: "x:",
fn: function (aNumber) {
    var self = this;
    self['@x'] = aNumber;
    return self;
}
}),
smalltalk.Point);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function () {
    var self = this;
    return self['@y'];
}
}),
smalltalk.Point);

smalltalk.addMethod(
"_y_",
smalltalk.method({
selector: "y:",
fn: function (aNumber) {
    var self = this;
    self['@y'] = aNumber;
    return self;
}
}),
smalltalk.Point);


smalltalk.addMethod(
"_x_y_",
smalltalk.method({
selector: "x:y:",
fn: function (aNumber, anotherNumber) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_x_", [aNumber]);
    smalltalk.send($2, "_y_", [anotherNumber]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.Point.klass);


smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function () {
    var self = this;
    return Math.random();
    return self;
}
}),
smalltalk.Random);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (anInteger) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(1, "_to_", [anInteger]), "_collect_", [function (each) {return smalltalk.send(self, "_next", []);}]);
    return $1;
}
}),
smalltalk.Random);



smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
fn: function (aString) {
    var self = this;
    return self[aString];
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_basicParse_",
smalltalk.method({
selector: "basicParse:",
fn: function (aString) {
    var self = this;
    return smalltalk.parser.parse(aString);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function () {
    var self = this;
    return self.classes();
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_createPackage_",
smalltalk.method({
selector: "createPackage:",
fn: function (packageName) {
    var self = this;
    return smalltalk.addPackage(packageName, nil);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_createPackage_properties_",
smalltalk.method({
selector: "createPackage:properties:",
fn: function (packageName, aDict) {
    var self = this;
    var object;
    object = {};
    smalltalk.send(aDict, "_keysAndValuesDo_", [function (key, value) {return object[key] = value;}]);
    return smalltalk.addPackage(packageName, object);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_deletePackage_",
smalltalk.method({
selector: "deletePackage:",
fn: function (packageName) {
    var self = this;
    delete smalltalk.packages[packageName];
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packageAt_",
smalltalk.method({
selector: "packageAt:",
fn: function (packageName) {
    var self = this;
    return self.packages[packageName];
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packageAt_ifAbsent_",
smalltalk.method({
selector: "packageAt:ifAbsent:",
fn: function (packageName, aBlock) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_packageAt_", [packageName]);
    $1 = smalltalk.send($2, "_ifNil_", [aBlock]);
    return $1;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function () {
    var self = this;
    return self.packages.all();
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
fn: function (aString) {
    var self = this;
    var result;
    smalltalk.send(self, "_try_catch_", [function () {result = smalltalk.send(self, "_basicParse_", [aString]);return result;}, function (ex) {return smalltalk.send(smalltalk.send(self, "_parseError_parsing_", [ex, aString]), "_signal", []);}]);
    return result;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_parseError_parsing_",
smalltalk.method({
selector: "parseError:parsing:",
fn: function (anException, aString) {
    var self = this;
    var $1;
    var row;
    var col;
    var message;
    var lines;
    var badLine;
    var code;
    row = anException.line;
    col = anException.column;
    message = anException.message;
    lines = smalltalk.send(aString, "_lines", []);
    badLine = smalltalk.send(lines, "_at_", [row]);
    badLine = smalltalk.send(smalltalk.send(smalltalk.send(badLine, "_copyFrom_to_", [1, smalltalk.send(col, "__minus", [1])]), "__comma", [" ===>"]), "__comma", [smalltalk.send(badLine, "_copyFrom_to_", [col, smalltalk.send(badLine, "_size", [])])]);
    smalltalk.send(lines, "_at_put_", [row, badLine]);
    code = smalltalk.send(smalltalk.String || String, "_streamContents_", [function (s) {return smalltalk.send(lines, "_withIndexDo_", [function (l, i) {return smalltalk.send(s, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(i, "_asString", []), "__comma", [": "]), "__comma", [l]), "__comma", [smalltalk.send(smalltalk.String || String, "_lf", [])])]);}]);}]);
    $1 = smalltalk.send(smalltalk.send(smalltalk.ParseError || ParseError, "_new", []), "_messageText_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Parse error on line ", "__comma", [row]), "__comma", [" column "]), "__comma", [col]), "__comma", [" : "]), "__comma", [message]), "__comma", [" Below is code with line numbers and ===> marker inserted:"]), "__comma", [smalltalk.send(smalltalk.String || String, "_lf", [])]), "__comma", [code])]);
    return $1;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_pseudoVariableNames",
smalltalk.method({
selector: "pseudoVariableNames",
fn: function (){
var self=this;
return ["self", "super", "nil", "true", "false", "thisContext"];
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_readJSObject_",
smalltalk.method({
selector: "readJSObject:",
fn: function (anObject) {
    var self = this;
    return self.readJSObject(anObject);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_removeClass_",
smalltalk.method({
selector: "removeClass:",
fn: function (aClass) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aClass, "_isMetaclass", []);
    if (smalltalk.assert($1)) {
        smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [" is a Metaclass and cannot be removed!"])]);
    }
    smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [function (each) {return smalltalk.send(aClass, "_removeCompiledMethod_", [each]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_methodDictionary", []), "_values", []), "_do_", [function (each) {return smalltalk.send(smalltalk.send(aClass, "_class", []), "_removeCompiledMethod_", [each]);}]);
    smalltalk.send(self, "_basicDelete_", [smalltalk.send(aClass, "_name", [])]);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_removePackage_",
smalltalk.method({
selector: "removePackage:",
fn: function (packageName) {
    var self = this;
    var pkg;
    pkg = smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, function () {return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);}]);
    smalltalk.send(smalltalk.send(pkg, "_classes", []), "_do_", [function (each) {return smalltalk.send(self, "_removeClass_", [each]);}]);
    smalltalk.send(self, "_deletePackage_", [packageName]);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_renamePackage_to_",
smalltalk.method({
selector: "renamePackage:to:",
fn: function (packageName, newName) {
    var self = this;
    var $1;
    var pkg;
    pkg = smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, function () {return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);}]);
    $1 = smalltalk.send(self, "_packageAt_", [newName]);
    if (($receiver = $1) == nil || $receiver == undefined) {
    } else {
        smalltalk.send(self, "_error_", [smalltalk.send("Already exists a package called: ", "__comma", [newName])]);
    }
    smalltalk.packages[newName] = smalltalk.packages[packageName];
    smalltalk.send(pkg, "_name_", [newName]);
    smalltalk.send(self, "_deletePackage_", [packageName]);
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_reservedWords",
smalltalk.method({
selector: "reservedWords",
fn: function () {
    var self = this;
    return self.reservedWords;
    return self;
}
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_send_to_arguments_",
smalltalk.method({
selector: "send:to:arguments:",
fn: function (aSelector, anObject, aCollection) {
    var self = this;
    var selector;
    selector = smalltalk.send(smalltalk.send(aSelector, "_asString", []), "_asSelector", []);
    return self.send(anObject, selector, aCollection);
    return self;
}
}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function () {
    var self = this;
    return smalltalk;
    return self;
}
}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
fn: function () {
    var self = this;
    return null;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
fn: function (aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_ifNil_ifNotNil_", [aBlock, function () {}]);
    return $1;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aBlock, "_value", []);
    return $1;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
fn: function (aBlock) {
    var self = this;
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(anotherBlock, "_value", []);
    return $1;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_isNil",
smalltalk.method({
selector: "isNil",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_notNil",
smalltalk.method({
selector: "notNil",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
    var self = this;
    return "nil";
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_",
smalltalk.method({
selector: "subclass:instanceVariableNames:",
fn: function (aString, anotherString) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, anotherString, nil]);
    return $1;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
fn: function (aString, aString2, aString3) {
    var self = this;
    var $1;
    smalltalk.send(self, "_deprecatedAPI", []);
    $1 = smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
    return $1;
}
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
fn: function (aString, aString2, aString3) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []), "_superclass_subclass_instanceVariableNames_package_", [self, aString, aString2, aString3]);
    return $1;
}
}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["You cannot create new instances of UndefinedObject. Use nil"]);
    return self;
}
}),
smalltalk.UndefinedObject.klass);


