smalltalk.addPackage('Kernel-Objects', {});
smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel-Objects');
smalltalk.Object.comment="*Object is the root of the Smalltalk class system*. All classes in the system are subclasses of Object.\x0a\x0aObject provides default behavior common to all normal objects, such as: \x0a\x0a- access\x0a- copying\x0a- comparison\x0a- error handling\x0a- message sending\x0a- reflection\x0a\x0aAlso utility messages that all objects should respond to are defined here.\x0a\x0aObject has no instance variable.\x0a\x0a##Access\x0a\x0aInstance variables can be accessed with `#instVarAt:` and `#instVarAt:put:`. `Object >> instanceVariableNames` answers a collection of all instance variable names.\x0aAccessing JavaScript properties of an object is done through `#basicAt:`, `#basicAt:put:` and `basicDelete:`.\x0a\x0a##Copying\x0a\x0aCopying an object is handled by `#copy` and `#deepCopy`. The first one performs a shallow copy of the receiver, while the second one performs a deep copy.\x0aThe hook method `#postCopy` can be overriden in subclasses to copy fields as necessary to complete the full copy. It will be sent by the copy of the receiver.\x0a\x0a##Comparison\x0a\x0aObjects understand equality  `#=` and identity `#==` comparison.\x0a\x0a##Error handling\x0a\x0a- `#halt` is the typical message to use for inserting breakpoints during debugging.\x0a- `#error:` throws a generic error exception\x0a- `#doesNotUnderstand:` handles the fact that there was an attempt to send the given message to the receiver but the receiver does not understand this message.\x0a  Overriding this message can be useful to implement proxies for example."
smalltalk.addMethod(
"__minus_gt",
smalltalk.method({
selector: "->",
category: 'converting',
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Association || Association, "_key_value_", [self, anObject]);
    return $1;
},
args: ["anObject"],
source: "-> anObject\x0a\x09^Association key: self value: anObject",
messageSends: ["key:value:"],
referencedClasses: ["Association"]
}),
smalltalk.Object);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__eq_eq", [anObject]);
    return $1;
},
args: ["anObject"],
source: "= anObject\x0a\x09^self == anObject",
messageSends: ["=="],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_identityHash", []), "__eq", [smalltalk.send(anObject, "_identityHash", [])]);
    return $1;
},
args: ["anObject"],
source: "== anObject\x0a\x09^self identityHash = anObject identityHash",
messageSends: ["=", "identityHash"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function () {
    var self = this;
    var variables;
    variables = smalltalk.send(smalltalk.HashedCollection || HashedCollection, "_new", []);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_allInstanceVariableNames", []), "_do_", [function (each) {return smalltalk.send(variables, "_at_put_", [each, smalltalk.send(smalltalk.send(self, "_instVarAt_", [each]), "_asJSON", [])]);}]);
    return variables;
},
args: [],
source: "asJSON\x0a\x09| variables |\x0a\x09variables := HashedCollection new.\x0a\x09self class allInstanceVariableNames do: [:each |\x0a\x09\x09variables at: each put: (self instVarAt: each) asJSON].\x0a\x09^variables",
messageSends: ["new", "do:", "at:put:", "asJSON", "instVarAt:", "allInstanceVariableNames", "class"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJSONString",
smalltalk.method({
selector: "asJSONString",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.JSON || JSON, "_stringify_", [smalltalk.send(self, "_asJSON", [])]);
    return $1;
},
args: [],
source: "asJSONString\x0a\x09^JSON stringify: self asJSON",
messageSends: ["stringify:", "asJSON"],
referencedClasses: ["JSON"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_asString", []);
    return $1;
},
args: [],
source: "asJavascript\x0a\x09^self asString",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_printString", []);
    return $1;
},
args: [],
source: "asString\x0a\x09^self printString",
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_",
smalltalk.method({
selector: "basicAt:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    return self[aString];
    return self;
},
args: ["aString"],
source: "basicAt: aString\x0a\x09<return self[aString]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_put_",
smalltalk.method({
selector: "basicAt:put:",
category: 'accessing',
fn: function (aString, anObject) {
    var self = this;
    return self[aString] = anObject;
    return self;
},
args: ["aString", "anObject"],
source: "basicAt: aString put: anObject\x0a\x09<return self[aString] = anObject>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicDelete_",
smalltalk.method({
selector: "basicDelete:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    delete self[aString];
    return aString;
    return self;
},
args: ["aString"],
source: "basicDelete: aString\x0a    <delete self[aString]; return aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicPerform_",
smalltalk.method({
selector: "basicPerform:",
category: 'message handling',
fn: function (aSymbol) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicPerform_withArguments_", [aSymbol, []]);
    return $1;
},
args: ["aSymbol"],
source: "basicPerform: aSymbol \x0a\x09^self basicPerform: aSymbol withArguments: #()",
messageSends: ["basicPerform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicPerform_withArguments_",
smalltalk.method({
selector: "basicPerform:withArguments:",
category: 'message handling',
fn: function (aSymbol, aCollection) {
    var self = this;
    return self[aSymbol].apply(self, aCollection);
    return self;
},
args: ["aSymbol", "aCollection"],
source: "basicPerform: aSymbol withArguments: aCollection\x0a\x09<return self[aSymbol].apply(self, aCollection);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_class",
smalltalk.method({
selector: "class",
category: 'accessing',
fn: function () {
    var self = this;
    return self.klass;
    return self;
},
args: [],
source: "class\x0a\x09<return self.klass>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_copy",
smalltalk.method({
selector: "copy",
category: 'copying',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_shallowCopy", []), "_postCopy", []);
    return $1;
},
args: [],
source: "copy\x0a\x09^self shallowCopy postCopy",
messageSends: ["postCopy", "shallowCopy"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
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
},
args: [],
source: "deepCopy\x0a\x09<    \x0a\x09    var copy = self.klass._new();\x0a\x09    for(var i in self) {\x0a\x09\x09if(/^@.+/.test(i)) {\x0a\x09\x09    copy[i] = self[i]._deepCopy();\x0a\x09\x09}\x0a\x09    }\x0a\x09    return copy;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_deprecatedAPI",
smalltalk.method({
selector: "deprecatedAPI",
category: 'error handling',
fn: function () {
    var self = this;
    smalltalk.send(console, "_warn_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(thisContext, "_home", []), "_asString", []), "__comma", [" is deprecated! (in "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(thisContext, "_home", []), "_home", []), "_asString", [])]), "__comma", [")"])]);
    return self;
},
args: [],
source: "deprecatedAPI\x0a\x09\x22Just a simple way to deprecate methods.\x0a\x09#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,\x0a\x09but it could in the future.\x22\x0a\x09console warn: thisContext home asString, ' is deprecated! (in ', thisContext home home asString, ')'",
messageSends: ["warn:", ",", "asString", "home"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'error handling',
fn: function (aMessage) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.MessageNotUnderstood || MessageNotUnderstood, "_new", []);
    smalltalk.send($1, "_receiver_", [self]);
    smalltalk.send($1, "_message_", [aMessage]);
    $2 = smalltalk.send($1, "_signal", []);
    return self;
},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09MessageNotUnderstood new\x0a\x09\x09receiver: self;\x0a\x09\x09message: aMessage;\x0a\x09\x09signal",
messageSends: ["receiver:", "new", "message:", "signal"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
category: 'error handling',
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.Error || Error, "_signal_", [aString]);
    return self;
},
args: ["aString"],
source: "error: aString\x0a\x09Error signal: aString",
messageSends: ["signal:"],
referencedClasses: ["Error"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_halt",
smalltalk.method({
selector: "halt",
category: 'error handling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["Halt encountered"]);
    return self;
},
args: [],
source: "halt\x0a\x09self error: 'Halt encountered'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_identityHash",
smalltalk.method({
selector: "identityHash",
category: 'accessing',
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
},
args: [],
source: "identityHash\x0a\x09<\x0a\x09var hash=self.identityHash;\x0a\x09if (hash) return hash;\x0a\x09hash=smalltalk.nextId();\x0a\x09Object.defineProperty(self, 'identityHash', {value:hash});\x0a\x09return hash;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
category: 'testing',
fn: function (aBlock) {
    var self = this;
    return self;
},
args: ["aBlock"],
source: "ifNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(anotherBlock, "_value", []);
    return $1;
},
args: ["aBlock", "anotherBlock"],
source: "ifNil: aBlock ifNotNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^anotherBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
category: 'testing',
fn: function (aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aBlock, "_value", []);
    return $1;
},
args: ["aBlock"],
source: "ifNotNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^aBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aBlock, "_value", []);
    return $1;
},
args: ["aBlock", "anotherBlock"],
source: "ifNotNil: aBlock ifNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^aBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "initialize",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_",
smalltalk.method({
selector: "instVarAt:",
category: 'accessing',
fn: function (aSymbol) {
    var self = this;
    var varname;
    varname = smalltalk.send(aSymbol, "_asString", []);
    return self["@" + varname];
    return self;
},
args: ["aSymbol"],
source: "instVarAt: aSymbol\x0a\x09| varname |\x0a\x09varname := aSymbol asString.\x0a\x09<return self['@'+varname]>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_put_",
smalltalk.method({
selector: "instVarAt:put:",
category: 'accessing',
fn: function (aSymbol, anObject) {
    var self = this;
    var varname;
    varname = smalltalk.send(aSymbol, "_asString", []);
    self["@" + varname] = anObject;
    return self;
},
args: ["aSymbol", "anObject"],
source: "instVarAt: aSymbol put: anObject\x0a\x09| varname |\x0a\x09varname := aSymbol asString.\x0a\x09<self['@' + varname] = anObject>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isClass",
smalltalk.method({
selector: "isClass",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isClass\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isKindOf_",
smalltalk.method({
selector: "isKindOf:",
category: 'testing',
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
},
args: ["aClass"],
source: "isKindOf: aClass\x0a\x09^(self isMemberOf: aClass)\x0a\x09    ifTrue: [true]\x0a\x09    ifFalse: [self class inheritsFrom: aClass]",
messageSends: ["ifTrue:ifFalse:", "inheritsFrom:", "class", "isMemberOf:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isMemberOf_",
smalltalk.method({
selector: "isMemberOf:",
category: 'testing',
fn: function (aClass) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [aClass]);
    return $1;
},
args: ["aClass"],
source: "isMemberOf: aClass\x0a\x09^self class = aClass",
messageSends: ["=", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isMetaclass",
smalltalk.method({
selector: "isMetaclass",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isMetaclass\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isNil",
smalltalk.method({
selector: "isNil",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isNil\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isNumber",
smalltalk.method({
selector: "isNumber",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isNumber\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isParseFailure",
smalltalk.method({
selector: "isParseFailure",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isParseFailure\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isString\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isSymbol",
smalltalk.method({
selector: "isSymbol",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isSymbol\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_log_block_",
smalltalk.method({
selector: "log:block:",
category: 'printing',
fn: function (aString, aBlock) {
    var self = this;
    var result;
    smalltalk.send(console, "_log_", [smalltalk.send(smalltalk.send(aString, "__comma", [" time: "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.Date || Date, "_millisecondsToRun_", [function () {result = smalltalk.send(aBlock, "_value", []);return result;}]), "_printString", [])])]);
    return result;
},
args: ["aString", "aBlock"],
source: "log: aString block: aBlock\x0a\x0a\x09| result |\x0a\x09console log:  aString,  ' time: ', (Date millisecondsToRun: [result := aBlock value]) printString.\x0a\x09^result",
messageSends: ["log:", ",", "printString", "millisecondsToRun:", "value"],
referencedClasses: ["Date"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_notNil",
smalltalk.method({
selector: "notNil",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_isNil", []), "_not", []);
    return $1;
},
args: [],
source: "notNil\x0a\x09^self isNil not",
messageSends: ["not", "isNil"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_perform_",
smalltalk.method({
selector: "perform:",
category: 'message handling',
fn: function (aSymbol) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_perform_withArguments_", [aSymbol, []]);
    return $1;
},
args: ["aSymbol"],
source: "perform: aSymbol\x0a\x09^self perform: aSymbol withArguments: #()",
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_perform_withArguments_",
smalltalk.method({
selector: "perform:withArguments:",
category: 'message handling',
fn: function (aSymbol, aCollection) {
    var self = this;
    var selector;
    selector = smalltalk.send(aSymbol, "_asSelector", []);
    return smalltalk.send(self, selector, aCollection);
    return self;
},
args: ["aSymbol", "aCollection"],
source: "perform: aSymbol withArguments: aCollection\x0a\x09| selector |\x0a\x09selector := aSymbol asSelector.\x0a\x09<return smalltalk.send(self, selector, aCollection)>",
messageSends: ["asSelector"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_postCopy",
smalltalk.method({
selector: "postCopy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "postCopy",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
category: 'printing',
fn: function () {
    var self = this;
    console.log(self);
    return self;
},
args: [],
source: "printNl\x0a\x09<console.log(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send("a ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);
    return $1;
},
args: [],
source: "printString\x0a\x09^'a ', self class name",
messageSends: [",", "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_respondsTo_",
smalltalk.method({
selector: "respondsTo:",
category: 'testing',
fn: function (aSelector) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_canUnderstand_", [aSelector]);
    return $1;
},
args: ["aSelector"],
source: "respondsTo: aSelector\x0a\x09^self class canUnderstand: aSelector",
messageSends: ["canUnderstand:", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
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
},
args: [],
source: "shallowCopy\x0a\x09<\x0a\x09    var copy = self.klass._new();\x0a\x09    for(var i in self) {\x0a\x09\x09if(/^@.+/.test(i)) {\x0a\x09\x09    copy[i] = self[i];\x0a\x09\x09}\x0a\x09    }\x0a\x09    return copy;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_shouldNotImplement",
smalltalk.method({
selector: "shouldNotImplement",
category: 'error handling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", [smalltalk.send("This method should not be implemented in ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
    return self;
},
args: [],
source: "shouldNotImplement\x0a\x09self error: 'This method should not be implemented in ', self class name",
messageSends: ["error:", ",", "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["Object not indexable"]);
    return self;
},
args: [],
source: "size\x0a\x09self error: 'Object not indexable'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
category: 'printing',
fn: function (aStream) {
    var self = this;
    smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(self, "_printString", [])]);
    return self;
},
args: ["aStream"],
source: "storeOn: aStream\x0a\x09aStream nextPutAll: self printString",
messageSends: ["nextPutAll:", "printString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_storeString",
smalltalk.method({
selector: "storeString",
category: 'printing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.String || String, "_streamContents_", [function (s) {return smalltalk.send(self, "_storeOn_", [s]);}]);
    return $1;
},
args: [],
source: "storeString\x0a\x09\x22Answer a String representation of the receiver from which the receiver \x0a\x09can be reconstructed.\x22\x0a\x0a\x09^ String streamContents: [:s | self storeOn: s]",
messageSends: ["streamContents:", "storeOn:"],
referencedClasses: ["String"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_subclassResponsibility",
smalltalk.method({
selector: "subclassResponsibility",
category: 'error handling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["This method is a responsibility of a subclass"]);
    return self;
},
args: [],
source: "subclassResponsibility\x0a\x09self error: 'This method is a responsibility of a subclass'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_throw_",
smalltalk.method({
selector: "throw:",
category: 'error handling',
fn: function (anObject) {
    var self = this;
    throw anObject;
    return self;
},
args: ["anObject"],
source: "throw: anObject\x0a\x09< throw anObject >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_try_catch_",
smalltalk.method({
selector: "try:catch:",
category: 'error handling',
fn: function (aBlock, anotherBlock) {
    var self = this;
    try {
        result = aBlock();
    } catch (e) {
        result = anotherBlock(e);
    }
    return result;
    return self;
},
args: ["aBlock", "anotherBlock"],
source: "try: aBlock catch: anotherBlock\x0a\x09<try{result = aBlock()} catch(e) {result = anotherBlock(e)};\x0a\x09return result;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "value\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_yourself",
smalltalk.method({
selector: "yourself",
category: 'accessing',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "yourself\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_~_eq",
smalltalk.method({
selector: "~=",
category: 'comparing',
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "__eq", [anObject]), "__eq", [false]);
    return $1;
},
args: ["anObject"],
source: "~= anObject\x0a\x09^(self = anObject) = false",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_~~",
smalltalk.method({
selector: "~~",
category: 'comparing',
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "__eq_eq", [anObject]), "__eq", [false]);
    return $1;
},
args: ["anObject"],
source: "~~ anObject\x0a\x09^(self == anObject) = false",
messageSends: ["=", "=="],
referencedClasses: []
}),
smalltalk.Object);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "initialize\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object.klass);


smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Boolean.comment="Boolean wraps the JavaScript `Boolean()` constructor. The `true` and `false` objects are the JavaScript boolean objects.\x0a\x0aBoolean defines the protocol for logic testing operations and conditional control structures for the logical values.\x0aBoolean instances are weither `true` or `false`."
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
category: 'controlling',
fn: function (aBoolean) {
    var self = this;
    if (self == true) {
        return aBoolean;
    } else {
        return false;
    }
    return self;
},
args: ["aBoolean"],
source: "& aBoolean\x0a\x09<\x0a\x09    if(self == true) {\x0a\x09\x09return aBoolean;\x0a\x09    } else {\x0a\x09\x09return false;\x0a\x09    }\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aBoolean) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(self, "_class", [])]);
    if (!smalltalk.assert($1)) {
        return false;
    }
    return Boolean(self == true) == aBoolean;
    return self;
},
args: ["aBoolean"],
source: "= aBoolean\x0a\x09aBoolean class = self class ifFalse: [^false].\x0a\x09<return Boolean(self == true) == aBoolean>",
messageSends: ["ifFalse:", "=", "class"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (aBoolean) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__eq", [aBoolean]);
    return $1;
},
args: ["aBoolean"],
source: "== aBoolean\x0a\x09^self = aBoolean",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_and_",
smalltalk.method({
selector: "and:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "__eq", [true]);
    $1 = smalltalk.send($2, "_ifTrue_ifFalse_", [aBlock, function () {return false;}]);
    return $1;
},
args: ["aBlock"],
source: "and: aBlock\x0a\x09^self = true\x0a\x09    ifTrue: aBlock\x0a\x09    ifFalse: [false]",
messageSends: ["ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "asJSON\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "deepCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_ifTrue_ifFalse_", [function () {}, aBlock]);
    return $1;
},
args: ["aBlock"],
source: "ifFalse: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifTrue: [] ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
category: 'controlling',
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_ifTrue_ifFalse_", [anotherBlock, aBlock]);
    return $1;
},
args: ["aBlock", "anotherBlock"],
source: "ifFalse: aBlock ifTrue: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifTrue: anotherBlock ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_ifTrue_ifFalse_", [aBlock, function () {}]);
    return $1;
},
args: ["aBlock"],
source: "ifTrue: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifTrue: aBlock ifFalse: []",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
category: 'controlling',
fn: function (aBlock, anotherBlock) {
    var self = this;
    if (self == true) {
        return aBlock();
    } else {
        return anotherBlock();
    }
    return self;
},
args: ["aBlock", "anotherBlock"],
source: "ifTrue: aBlock ifFalse: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<\x0a\x09    if(self == true) {\x0a\x09\x09return aBlock();\x0a\x09    } else {\x0a\x09\x09return anotherBlock();\x0a\x09    }\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_not",
smalltalk.method({
selector: "not",
category: 'controlling',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__eq", [false]);
    return $1;
},
args: [],
source: "not\x0a\x09^self = false",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_or_",
smalltalk.method({
selector: "or:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "__eq", [true]);
    $1 = smalltalk.send($2, "_ifTrue_ifFalse_", [function () {return true;}, aBlock]);
    return $1;
},
args: ["aBlock"],
source: "or: aBlock\x0a\x09^self = true\x0a\x09    ifTrue: [true]\x0a\x09    ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    return self.toString();
    return self;
},
args: [],
source: "printString\x0a\x09<return self.toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "shallowCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_|",
smalltalk.method({
selector: "|",
category: 'controlling',
fn: function (aBoolean) {
    var self = this;
    if (self == true) {
        return true;
    } else {
        return aBoolean;
    }
    return self;
},
args: ["aBoolean"],
source: "| aBoolean\x0a\x09<\x0a\x09    if(self == true) {\x0a\x09\x09return true;\x0a\x09    } else {\x0a\x09\x09return aBoolean;\x0a\x09    }\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Date.comment="The Date class is used to work with dates and times. Therefore `Date today` and `Date now` are both valid in\x0aAmber and answer the same date object.\x0a\x0aDate wraps the `Date()` JavaScript constructor, and Smalltalk date objects are JavaScript date objects."
smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
category: 'arithmetic',
fn: function (aDate) {
    var self = this;
    return self + aDate;
    return self;
},
args: ["aDate"],
source: "+ aDate\x0a\x09<return self + aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
category: 'arithmetic',
fn: function (aDate) {
    var self = this;
    return self - aDate;
    return self;
},
args: ["aDate"],
source: "- aDate\x0a\x09<return self - aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aDate) {
    var self = this;
    return self < aDate;
    return self;
},
args: ["aDate"],
source: "< aDate\x0a\x09<return self < aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aDate) {
    var self = this;
    return self <= aDate;
    return self;
},
args: ["aDate"],
source: "<= aDate\x0a\x09<return self <= aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aDate) {
    var self = this;
    return self > aDate;
    return self;
},
args: ["aDate"],
source: "> aDate\x0a\x09<return self >> aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aDate) {
    var self = this;
    return self >= aDate;
    return self;
},
args: ["aDate"],
source: ">= aDate\x0a\x09<return self >>= aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asDateString",
smalltalk.method({
selector: "asDateString",
category: 'converting',
fn: function () {
    var self = this;
    return self.toDateString();
    return self;
},
args: [],
source: "asDateString\x0a\x09<return self.toDateString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asLocaleString",
smalltalk.method({
selector: "asLocaleString",
category: 'converting',
fn: function () {
    var self = this;
    return self.toLocaleString();
    return self;
},
args: [],
source: "asLocaleString\x0a\x09<return self.toLocaleString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asMilliseconds",
smalltalk.method({
selector: "asMilliseconds",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_time", []);
    return $1;
},
args: [],
source: "asMilliseconds\x0a\x09^self time",
messageSends: ["time"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_asMilliseconds", []);
    return $1;
},
args: [],
source: "asNumber\x0a\x09^self asMilliseconds",
messageSends: ["asMilliseconds"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function () {
    var self = this;
    return self.toString();
    return self;
},
args: [],
source: "asString\x0a\x09<return self.toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asTimeString",
smalltalk.method({
selector: "asTimeString",
category: 'converting',
fn: function () {
    var self = this;
    return self.toTimeString();
    return self;
},
args: [],
source: "asTimeString\x0a\x09<return self.toTimeString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_day",
smalltalk.method({
selector: "day",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_dayOfWeek", []);
    return $1;
},
args: [],
source: "day\x0a\x09^self dayOfWeek",
messageSends: ["dayOfWeek"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_day_",
smalltalk.method({
selector: "day:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    smalltalk.send(self, "_dayOfWeek_", [aNumber]);
    return self;
},
args: ["aNumber"],
source: "day: aNumber\x0a\x09self dayOfWeek: aNumber",
messageSends: ["dayOfWeek:"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth",
smalltalk.method({
selector: "dayOfMonth",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getDate();
    return self;
},
args: [],
source: "dayOfMonth\x0a\x09<return self.getDate()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth_",
smalltalk.method({
selector: "dayOfMonth:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setDate(aNumber);
    return self;
},
args: ["aNumber"],
source: "dayOfMonth: aNumber\x0a\x09<self.setDate(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek",
smalltalk.method({
selector: "dayOfWeek",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getDay() + 1;
    return self;
},
args: [],
source: "dayOfWeek\x0a\x09<return self.getDay() + 1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek_",
smalltalk.method({
selector: "dayOfWeek:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    return self.setDay(aNumber - 1);
    return self;
},
args: ["aNumber"],
source: "dayOfWeek: aNumber\x0a\x09<return self.setDay(aNumber - 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_hours",
smalltalk.method({
selector: "hours",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getHours();
    return self;
},
args: [],
source: "hours\x0a\x09<return self.getHours()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_hours_",
smalltalk.method({
selector: "hours:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setHours(aNumber);
    return self;
},
args: ["aNumber"],
source: "hours: aNumber\x0a\x09<self.setHours(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds",
smalltalk.method({
selector: "milliseconds",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getMilliseconds();
    return self;
},
args: [],
source: "milliseconds\x0a\x09<return self.getMilliseconds()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds_",
smalltalk.method({
selector: "milliseconds:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setMilliseconds(aNumber);
    return self;
},
args: ["aNumber"],
source: "milliseconds: aNumber\x0a\x09<self.setMilliseconds(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes",
smalltalk.method({
selector: "minutes",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getMinutes();
    return self;
},
args: [],
source: "minutes\x0a\x09<return self.getMinutes()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes_",
smalltalk.method({
selector: "minutes:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setMinutes(aNumber);
    return self;
},
args: ["aNumber"],
source: "minutes: aNumber\x0a\x09<self.setMinutes(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_month",
smalltalk.method({
selector: "month",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getMonth() + 1;
    return self;
},
args: [],
source: "month\x0a\x09<return self.getMonth() + 1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_month_",
smalltalk.method({
selector: "month:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setMonth(aNumber - 1);
    return self;
},
args: ["aNumber"],
source: "month: aNumber\x0a\x09<self.setMonth(aNumber - 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_asString", []);
    return $1;
},
args: [],
source: "printString\x0a\x09^self asString",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds",
smalltalk.method({
selector: "seconds",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getSeconds();
    return self;
},
args: [],
source: "seconds\x0a\x09<return self.getSeconds()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds_",
smalltalk.method({
selector: "seconds:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setSeconds(aNumber);
    return self;
},
args: ["aNumber"],
source: "seconds: aNumber\x0a\x09<self.setSeconds(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_time",
smalltalk.method({
selector: "time",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getTime();
    return self;
},
args: [],
source: "time\x0a\x09<return self.getTime()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_time_",
smalltalk.method({
selector: "time:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setTime(aNumber);
    return self;
},
args: ["aNumber"],
source: "time: aNumber\x0a\x09<self.setTime(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_year",
smalltalk.method({
selector: "year",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getFullYear();
    return self;
},
args: [],
source: "year\x0a\x09<return self.getFullYear()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_year_",
smalltalk.method({
selector: "year:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setFullYear(aNumber);
    return self;
},
args: ["aNumber"],
source: "year: aNumber\x0a\x09<self.setFullYear(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);


smalltalk.addMethod(
"_fromMilliseconds_",
smalltalk.method({
selector: "fromMilliseconds:",
category: 'instance creation',
fn: function (aNumber) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_new_", [aNumber]);
    return $1;
},
args: ["aNumber"],
source: "fromMilliseconds: aNumber\x0a\x09^self new: aNumber",
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_fromSeconds_",
smalltalk.method({
selector: "fromSeconds:",
category: 'instance creation',
fn: function (aNumber) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_fromMilliseconds_", [smalltalk.send(aNumber, "__star", [1000])]);
    return $1;
},
args: ["aNumber"],
source: "fromSeconds: aNumber\x0a\x09^self fromMilliseconds: aNumber * 1000",
messageSends: ["fromMilliseconds:", "*"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_new_", [aString]);
    return $1;
},
args: ["aString"],
source: "fromString: aString\x0a\x09\x22Example: Date fromString('2011/04/15 00:00:00')\x22\x0a\x09^self new: aString",
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_millisecondsToRun_",
smalltalk.method({
selector: "millisecondsToRun:",
category: 'instance creation',
fn: function (aBlock) {
    var self = this;
    var $1;
    var t;
    t = smalltalk.send(smalltalk.Date || Date, "_now", []);
    smalltalk.send(aBlock, "_value", []);
    $1 = smalltalk.send(smalltalk.send(smalltalk.Date || Date, "_now", []), "__minus", [t]);
    return $1;
},
args: ["aBlock"],
source: "millisecondsToRun: aBlock\x0a\x09| t |\x0a\x09t := Date now.\x0a\x09aBlock value.\x0a\x09^Date now - t",
messageSends: ["now", "value", "-"],
referencedClasses: ["Date"]
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anObject) {
    var self = this;
    return new Date(anObject);
    return self;
},
args: ["anObject"],
source: "new: anObject\x0a\x09<return new Date(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_now",
smalltalk.method({
selector: "now",
category: 'instance creation',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_today", []);
    return $1;
},
args: [],
source: "now\x0a\x09^self today",
messageSends: ["today"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_today",
smalltalk.method({
selector: "today",
category: 'instance creation',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_new", []);
    return $1;
},
args: [],
source: "today\x0a\x09^self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Date.klass);


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel-Objects');
smalltalk.JSObjectProxy.comment="JSObjectProxy handles sending messages to JavaScript object, therefore accessing JavaScript objects from Amber is transparent.\x0aJSOjbectProxy makes intensive use of `#doesNotUnderstand:`.\x0a\x0a## Examples\x0a\x0aJSObjectProxy objects are instanciated by Amber when a Smalltalk message is sent to a JavaScript object.\x0a\x0a    window alert: 'hello world'.\x0a    window inspect.\x0a    (window jQuery: 'body') append: 'hello world'\x0a\x0aSmalltalk messages sends are converted to JavaScript function calls or object property access _(in this order)_. If n one of them match, a `MessageNotUnderstood` error will be thrown. \x0a\x0a## Message conversion rules\x0a\x0a- `someUser name` becomes  `someUser.name`\x0a- `someUser name: 'John'` becomes `someUser name = \x22John\x22`\x0a- `console log: 'hello world'` becomes `console.log('hello world')`\x0a- `(window jQuery: 'foo') css: 'background' color: 'red'` becomes `window.jQuery('foo').css('background', 'red')`\x0a\x0a__Note:__ For keyword-based messages, only the first keyword is kept: `window foo: 1 bar: 2` is equivalent to `window foo: 1 baz: 2`."
smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aSymbol) {
    var self = this;
    var attr;
    attr = smalltalk.send(aSymbol, "_asString", []);
    return self['@jsObject'][attr];
    return self;
},
args: ["aSymbol"],
source: "at: aSymbol\x0a\x09| attr |\x0a\x09attr := aSymbol asString.\x0a\x09<return self['@jsObject'][attr]>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (aSymbol, anObject) {
    var self = this;
    var attr;
    attr = smalltalk.send(aSymbol, "_asString", []);
    self['@jsObject'][attr] = anObject;
    return self;
},
args: ["aSymbol", "anObject"],
source: "at: aSymbol put: anObject\x0a\x09| attr |\x0a\x09attr := aSymbol asString.\x0a\x09<self['@jsObject'][attr] = anObject>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'proxy',
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
},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09| obj selector jsSelector arguments |\x0a\x09obj := self jsObject.\x0a\x09selector := aMessage selector.\x0a\x09jsSelector := selector asJavaScriptSelector.\x0a\x09arguments := aMessage arguments.\x0a\x09<if(obj[jsSelector] != undefined) {return smalltalk.send(obj, jsSelector, arguments)}>.\x0a\x09super doesNotUnderstand: aMessage",
messageSends: ["jsObject", "selector", "asJavaScriptSelector", "arguments", "doesNotUnderstand:"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
category: 'proxy',
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
},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self jsObject.\x0a\x09anInspector setLabel: self printString.\x0a\x09<for(var i in self['@jsObject']) {\x0a\x09\x09variables._at_put_(i, self['@jsObject'][i]);\x0a\x09}>.\x0a\x09anInspector setVariables: variables",
messageSends: ["new", "at:put:", "jsObject", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_jsObject",
smalltalk.method({
selector: "jsObject",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@jsObject'];
},
args: [],
source: "jsObject\x0a\x09^jsObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_jsObject_",
smalltalk.method({
selector: "jsObject:",
category: 'accessing',
fn: function (aJSObject) {
    var self = this;
    self['@jsObject'] = aJSObject;
    return self;
},
args: ["aJSObject"],
source: "jsObject: aJSObject\x0a\x09jsObject := aJSObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'proxy',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_jsObject", []), "_toString", []);
    return $1;
},
args: [],
source: "printString\x0a\x09^self jsObject toString",
messageSends: ["toString", "jsObject"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aJSObject) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_jsObject_", [aJSObject]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aJSObject"],
source: "on: aJSObject\x0a\x09^self new\x0a\x09\x09jsObject: aJSObject;\x0a\x09\x09yourself",
messageSends: ["jsObject:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Number.comment="Number holds the most general methods for dealing with numbers.  \x0aNumber is directly mapped to JavaScript Number.\x0a\x0aMost arithmetic methods like `#+` `#/` `#-` `#max:` are directly inlined into javascript. \x0a\x0a##Enumerating\x0aA Number can be used to evaluate a Block a fixed number of times:\x0a\x0a\x095 timesRepeat: [Transcript show: 'This will be printed 5 times'; cr].\x0a\x09\x0a\x091 to: 5 do: [:aNumber| Transcript show: aNumber asString; cr].\x0a\x09\x0a\x091 to: 10 by: 2 do: [:aNumber| Transcript show: aNumber asString; cr]."
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
category: 'converting',
fn: function (aNumber) {
    var self = this;
    return self & aNumber;
    return self;
},
args: ["aNumber"],
source: "& aNumber\x0a\x09<return self & aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self * aNumber;
    return self;
},
args: ["aNumber"],
source: "* aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self * aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self + aNumber;
    return self;
},
args: ["aNumber"],
source: "+ aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self + aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self - aNumber;
    return self;
},
args: ["aNumber"],
source: "- aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self - aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self / aNumber;
    return self;
},
args: ["aNumber"],
source: "/ aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self / aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return self < aNumber;
    return self;
},
args: ["aNumber"],
source: "< aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self < aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return self <= aNumber;
    return self;
},
args: ["aNumber"],
source: "<= aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self <= aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aNumber, "_isNumber", []);
    if (!smalltalk.assert($1)) {
        return false;
    }
    return Number(self) == aNumber;
    return self;
},
args: ["aNumber"],
source: "= aNumber\x0a\x09aNumber isNumber ifFalse: [^false]. \x0a\x09<return Number(self) == aNumber>",
messageSends: ["ifFalse:", "isNumber"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return self > aNumber;
    return self;
},
args: ["aNumber"],
source: "> aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self >> aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return self >= aNumber;
    return self;
},
args: ["aNumber"],
source: ">= aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self >>= aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__at",
smalltalk.method({
selector: "@",
category: 'converting',
fn: function (aNumber) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [self, aNumber]);
    return $1;
},
args: ["aNumber"],
source: "@ aNumber\x0a\x09^Point x: self y: aNumber",
messageSends: ["x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_\x5c\x5c",
smalltalk.method({
selector: "\x5c\x5c",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self % aNumber;
    return self;
},
args: ["aNumber"],
source: "\x5c\x5c aNumber\x0a\x09<return self % aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_abs",
smalltalk.method({
selector: "abs",
category: 'arithmetic',
fn: function () {
    var self = this;
    var $1;
    $1 = Math.abs(self);
    return $1;
},
args: [],
source: "abs\x0a\x09^ <Math.abs(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "asJSON\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_printString", [])]), "__comma", [")"]);
    return $1;
},
args: [],
source: "asJavascript\x0a\x09^'(', self printString, ')'",
messageSends: [",", "printString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_asPoint",
smalltalk.method({
selector: "asPoint",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [self, self]);
    return $1;
},
args: [],
source: "asPoint\x0a\x09^Point x: self y: self",
messageSends: ["x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_printString", []);
    return $1;
},
args: [],
source: "asString\x0a\x09^self printString",
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Random || Random, "_new", []), "_next", []), "__star", [self]), "_truncated", []), "__plus", [1]);
    return $1;
},
args: [],
source: "atRandom\x0a    ^(Random new next * self) truncated + 1",
messageSends: ["+", "truncated", "*", "next", "new"],
referencedClasses: ["Random"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_clearInterval",
smalltalk.method({
selector: "clearInterval",
category: 'timeouts/intervals',
fn: function () {
    var self = this;
    clearInterval(Number(self));
    return self;
},
args: [],
source: "clearInterval\x0a\x09<clearInterval(Number(self))>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_clearTimeout",
smalltalk.method({
selector: "clearTimeout",
category: 'timeouts/intervals',
fn: function () {
    var self = this;
    clearTimeout(Number(self));
    return self;
},
args: [],
source: "clearTimeout\x0a\x09<clearTimeout(Number(self))>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_copy",
smalltalk.method({
selector: "copy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "copy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_copy", []);
    return $1;
},
args: [],
source: "deepCopy\x0a\x09^self copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_even",
smalltalk.method({
selector: "even",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(0, "__eq", [smalltalk.send(self, "_\\\\", [2])]);
    return $1;
},
args: [],
source: "even\x0a\x09^ 0 = (self \x5c\x5c 2)",
messageSends: ["=", "\x5c\x5c\x5c\x5c"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_identityHash",
smalltalk.method({
selector: "identityHash",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_asString", []), "__comma", ["n"]);
    return $1;
},
args: [],
source: "identityHash\x0a\x09^self asString, 'n'",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_isNumber",
smalltalk.method({
selector: "isNumber",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isNumber\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_isZero",
smalltalk.method({
selector: "isZero",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__eq", [0]);
    return $1;
},
args: [],
source: "isZero\x0a\x09^self = 0",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_max_",
smalltalk.method({
selector: "max:",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return Math.max(self, aNumber);
    return self;
},
args: ["aNumber"],
source: "max: aNumber\x0a\x09<return Math.max(self, aNumber);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_min_",
smalltalk.method({
selector: "min:",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return Math.min(self, aNumber);
    return self;
},
args: ["aNumber"],
source: "min: aNumber\x0a\x09<return Math.min(self, aNumber);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_negated",
smalltalk.method({
selector: "negated",
category: 'arithmetic',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(0, "__minus", [self]);
    return $1;
},
args: [],
source: "negated\x0a\x09^0 - self",
messageSends: ["-"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_negative",
smalltalk.method({
selector: "negative",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__lt", [0]);
    return $1;
},
args: [],
source: "negative\x0a\x09\x22Answer whether the receiver is mathematically negative.\x22\x0a\x0a\x09^ self < 0",
messageSends: ["<"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_odd",
smalltalk.method({
selector: "odd",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_even", []), "_not", []);
    return $1;
},
args: [],
source: "odd\x0a\x09^ self even not",
messageSends: ["not", "even"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_positive",
smalltalk.method({
selector: "positive",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__gt_eq", [0]);
    return $1;
},
args: [],
source: "positive\x0a\x09\x22Answer whether the receiver is positive or equal to 0. (ST-80 protocol).\x22\x0a\x0a\x09^ self >= 0",
messageSends: [">="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_printShowingDecimalPlaces_",
smalltalk.method({
selector: "printShowingDecimalPlaces:",
category: 'printing',
fn: function (placesDesired) {
    var self = this;
    return self.toFixed(placesDesired);
    return self;
},
args: ["placesDesired"],
source: "printShowingDecimalPlaces: placesDesired\x0a\x09<return self.toFixed(placesDesired)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    return String(self);
    return self;
},
args: [],
source: "printString\x0a\x09<return String(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_rounded",
smalltalk.method({
selector: "rounded",
category: 'converting',
fn: function () {
    var self = this;
    return Math.round(self);
    return self;
},
args: [],
source: "rounded\x0a\x09<return Math.round(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_sqrt",
smalltalk.method({
selector: "sqrt",
category: 'arithmetic',
fn: function () {
    var self = this;
    return Math.sqrt(self);
    return self;
},
args: [],
source: "sqrt\x0a\x09<return Math.sqrt(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_squared",
smalltalk.method({
selector: "squared",
category: 'arithmetic',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__star", [self]);
    return $1;
},
args: [],
source: "squared\x0a\x09^self * self",
messageSends: ["*"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_timesRepeat_",
smalltalk.method({
selector: "timesRepeat:",
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    var integer;
    var count;
    integer = smalltalk.send(self, "_truncated", []);
    count = 1;
    smalltalk.send(function () {return smalltalk.send(count, "__gt", [self]);}, "_whileFalse_", [function () {smalltalk.send(aBlock, "_value", []);count = smalltalk.send(count, "__plus", [1]);return count;}]);
    return self;
},
args: ["aBlock"],
source: "timesRepeat: aBlock\x0a\x09| integer count |\x0a\x09integer := self truncated.\x0a\x09count := 1.\x0a\x09[count > self] whileFalse: [\x0a\x09    aBlock value.\x0a\x09    count := count + 1]",
messageSends: ["truncated", "whileFalse:", "value", "+", ">"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_",
smalltalk.method({
selector: "to:",
category: 'converting',
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
},
args: ["aNumber"],
source: "to: aNumber\x0a\x09| array first last count |\x0a\x09first := self truncated.\x0a\x09last := aNumber truncated + 1.\x0a\x09count := 1.\x0a\x09array := Array new.\x0a\x09(last - first) timesRepeat: [\x0a\x09    array at: count put: first.\x0a\x09    count := count + 1.\x0a\x09    first := first + 1].\x0a\x09^array",
messageSends: ["truncated", "+", "new", "timesRepeat:", "at:put:", "-"],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_by_",
smalltalk.method({
selector: "to:by:",
category: 'converting',
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
},
args: ["stop", "step"],
source: "to: stop by: step\x0a\x09| array value pos |\x0a\x09value := self.\x0a\x09array := Array new.\x0a\x09pos := 1.\x0a\x09step = 0 ifTrue: [self error: 'step must be non-zero'].\x0a\x09step < 0\x0a\x09\x09ifTrue: [[ value >= stop ] whileTrue: [\x0a\x09    \x09\x09\x09array at: pos put: value.\x0a\x09    \x09\x09\x09pos := pos + 1.\x0a\x09    \x09\x09\x09value := value + step]]\x0a\x09\x09ifFalse: [[ value <= stop ] whileTrue: [\x0a\x09    \x09\x09\x09array at: pos put: value.\x0a\x09  \x09\x09\x09pos := pos + 1.\x0a\x09    \x09\x09\x09value := value + step]].\x0a\x09^array",
messageSends: ["new", "ifTrue:", "error:", "=", "ifTrue:ifFalse:", "whileTrue:", "at:put:", "+", ">=", "<=", "<"],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_by_do_",
smalltalk.method({
selector: "to:by:do:",
category: 'enumerating',
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
},
args: ["stop", "step", "aBlock"],
source: "to: stop by: step do: aBlock\x0a\x09| value |\x0a\x09value := self.\x0a\x09step = 0 ifTrue: [self error: 'step must be non-zero'].\x0a\x09step < 0\x0a\x09\x09ifTrue: [[ value >= stop ] whileTrue: [\x0a\x09    \x09\x09\x09aBlock value: value.\x0a\x09    \x09\x09\x09value := value + step]]\x0a\x09\x09ifFalse: [[ value <= stop ] whileTrue: [\x0a\x09    \x09\x09\x09aBlock value: value.\x0a\x09    \x09\x09\x09value := value + step]]",
messageSends: ["ifTrue:", "error:", "=", "ifTrue:ifFalse:", "whileTrue:", "value:", "+", ">=", "<=", "<"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_do_",
smalltalk.method({
selector: "to:do:",
category: 'enumerating',
fn: function (stop, aBlock) {
    var self = this;
    var nextValue;
    nextValue = self;
    smalltalk.send(function () {return smalltalk.send(nextValue, "__lt_eq", [stop]);}, "_whileTrue_", [function () {smalltalk.send(aBlock, "_value_", [nextValue]);nextValue = smalltalk.send(nextValue, "__plus", [1]);return nextValue;}]);
    return self;
},
args: ["stop", "aBlock"],
source: "to: stop do: aBlock\x0a\x09\x22Evaluate aBlock for each number from self to aNumber.\x22\x0a\x09| nextValue |\x0a\x09nextValue := self.\x0a\x09[nextValue <= stop]\x0a\x09\x09whileTrue: \x0a\x09\x09\x09[aBlock value: nextValue.\x0a\x09\x09\x09nextValue := nextValue + 1]",
messageSends: ["whileTrue:", "value:", "+", "<="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_truncated",
smalltalk.method({
selector: "truncated",
category: 'converting',
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
},
args: [],
source: "truncated\x0a|result|\x0a\x0a    self >= 0 \x0a        ifTrue: [<result = Math.floor(self);>]\x0a        ifFalse: [<result = (Math.floor(self * (-1)) * (-1));>].\x0a\x0a    ^ result",
messageSends: ["ifTrue:ifFalse:", ">="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_|",
smalltalk.method({
selector: "|",
category: 'converting',
fn: function (aNumber) {
    var self = this;
    return self | aNumber;
    return self;
},
args: ["aNumber"],
source: "| aNumber\x0a\x09<return self | aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);


smalltalk.addMethod(
"_pi",
smalltalk.method({
selector: "pi",
category: 'instance creation',
fn: function () {
    var self = this;
    return Math.PI;
    return self;
},
args: [],
source: "pi\x0a\x09<return Math.PI>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number.klass);


smalltalk.addClass('Package', smalltalk.Object, ['commitPathJs', 'commitPathSt'], 'Kernel-Objects');
smalltalk.Package.comment="A Package is similar to a \x22class category\x22 typically found in other Smalltalks like Pharo or Squeak. Amber does not have class categories anymore, it had in the beginning but now each class in the system knows which package it belongs to.\x0a\x0aA Package has a name, an Array of \x22requires\x22, a comment and a Dictionary with other optional key value attributes. A Package can also be queried for its classes, but it will then resort to a reverse scan of all classes to find them.\x0aPackages are manipulated through \x22Smalltalk current\x22, like for example finding one based on a name:\x0a\x0a\x09Smalltalk current packageAt: 'Kernel'\x0a\x0a...but you can also use:\x0a\x0a\x09Package named: 'Kernel'\x0a\x0aA Package differs slightly from a Monticello package which can span multiple class categories using a naming convention based on hyphenation. But just as in Monticello a Package supports \x22class extensions\x22 so a Package\x0acan define behaviors in foreign classes using a naming convention for method categories where the category starts with an asterisk and then the name of the owning package follows. This can easily be seen in for example class\x0aString where the method category \x22*IDE\x22 defines #inspectOn: which thus is a method belonging to the IDE package.\x0a\x0aYou can fetch a package from the server:\x0a\x0a\x09Package fetch: 'Additional-Examples'"
smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
category: 'classes',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_classes", []), "_select_", [function (c) {return smalltalk.send(smalltalk.send(c, "_package", []), "__eq_eq", [self]);}]);
    return $1;
},
args: [],
source: "classes\x0a\x09\x22We need to do a reverse scan.\x22\x0a\x09^Smalltalk current classes select: [:c | c package == self]",
messageSends: ["select:", "==", "package", "classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathJs",
smalltalk.method({
selector: "commitPathJs",
category: 'accessing',
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
},
args: [],
source: "commitPathJs\x0a\x09^ commitPathJs ifNil: [self class defaultCommitPathJs]",
messageSends: ["ifNil:", "defaultCommitPathJs", "class"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathJs_",
smalltalk.method({
selector: "commitPathJs:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    self['@commitPathJs'] = aString;
    return self;
},
args: ["aString"],
source: "commitPathJs: aString\x0a\x09commitPathJs := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathSt",
smalltalk.method({
selector: "commitPathSt",
category: 'accessing',
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
},
args: [],
source: "commitPathSt\x0a\x09^ commitPathSt ifNil: [self class defaultCommitPathSt]",
messageSends: ["ifNil:", "defaultCommitPathSt", "class"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathSt_",
smalltalk.method({
selector: "commitPathSt:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    self['@commitPathSt'] = aString;
    return self;
},
args: ["aString"],
source: "commitPathSt: aString\x0a\x09commitPathSt := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_dependencies",
smalltalk.method({
selector: "dependencies",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_propertyAt_ifAbsent_", ["dependencies", function () {return [];}]);
    return $1;
},
args: [],
source: "dependencies\x0a\x09^self propertyAt: 'dependencies' ifAbsent: [#()]",
messageSends: ["propertyAt:ifAbsent:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_dependencies_",
smalltalk.method({
selector: "dependencies:",
category: 'accessing',
fn: function (anArray) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_propertyAt_put_", ["dependencies", anArray]);
    return $1;
},
args: ["anArray"],
source: "dependencies: anArray\x0a\x09^self propertyAt: 'dependencies' put: anArray",
messageSends: ["propertyAt:put:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_jsProperties",
smalltalk.method({
selector: "jsProperties",
category: 'private',
fn: function () {
    var self = this;
    return self.properties;
    return self;
},
args: [],
source: "jsProperties\x0a\x09<return self.properties>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_jsProperties_",
smalltalk.method({
selector: "jsProperties:",
category: 'private',
fn: function (aJSObject) {
    var self = this;
    return self.properties = aJSObject;
    return self;
},
args: ["aJSObject"],
source: "jsProperties: aJSObject\x0a\x09<return self.properties = aJSObject>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function () {
    var self = this;
    return self.pkgName;
    return self;
},
args: [],
source: "name\x0a\x09<return self.pkgName>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    self.pkgName = aString;
    return self;
},
args: ["aString"],
source: "name: aString\x0a\x09<self.pkgName = aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_name", []);
    return $1;
},
args: [],
source: "printString\x0a\x09^self name",
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_properties",
smalltalk.method({
selector: "properties",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_readJSObject_", [smalltalk.send(self, "_basicAt_", ["properties"])]);
    return $1;
},
args: [],
source: "properties\x0a\x09^Smalltalk current readJSObject: (self basicAt: 'properties')",
messageSends: ["readJSObject:", "basicAt:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package);

smalltalk.addMethod(
"_properties_",
smalltalk.method({
selector: "properties:",
category: 'accessing',
fn: function (aDict) {
    var self = this;
    var object;
    object = {};
    smalltalk.send(aDict, "_keysAndValuesDo_", [function (key, value) {return object[key] = value;}]);
    return self.properties = object;
    return self;
},
args: ["aDict"],
source: "properties: aDict\x0a\x09\x22We store it as a javascript object.\x22\x0a\x09\x0a\x09| object |\x0a\x09<object = {};>.\x0a\x09aDict keysAndValuesDo: [:key :value |\x0a\x09\x09<object[key] = value>.\x0a\x09].\x0a\x09<return self.properties = object>",
messageSends: ["keysAndValuesDo:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertiesAsJSON",
smalltalk.method({
selector: "propertiesAsJSON",
category: 'private',
fn: function () {
    var self = this;
    return JSON.stringify(self.properties);
    return self;
},
args: [],
source: "propertiesAsJSON\x0a\x09<return JSON.stringify(self.properties)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_",
smalltalk.method({
selector: "propertyAt:",
category: 'properties',
fn: function (key) {
    var self = this;
    return self.properties[key];
    return self;
},
args: ["key"],
source: "propertyAt: key\x0a\x0a\x09<return self.properties[key]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_ifAbsent_",
smalltalk.method({
selector: "propertyAt:ifAbsent:",
category: 'properties',
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
},
args: ["key", "block"],
source: "propertyAt: key ifAbsent: block\x0a\x0a\x09^(self propertyAt: key) ifNil: [block value]",
messageSends: ["ifNil:", "value", "propertyAt:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_put_",
smalltalk.method({
selector: "propertyAt:put:",
category: 'properties',
fn: function (key, value) {
    var self = this;
    return self.properties[key] = value;
    return self;
},
args: ["key", "value"],
source: "propertyAt: key put: value\x0a\x0a\x09<return self.properties[key] = value>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_sortedClasses",
smalltalk.method({
selector: "sortedClasses",
category: 'classes',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_sortedClasses_", [smalltalk.send(self, "_classes", [])]);
    return $1;
},
args: [],
source: "sortedClasses\x0a\x09\x22Answer all classes in the receiver, sorted by superclass/subclasses and by class name for common subclasses (Issue #143).\x22\x0a\x0a\x09^self class sortedClasses: self classes",
messageSends: ["sortedClasses:", "classes", "class"],
referencedClasses: []
}),
smalltalk.Package);


smalltalk.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
"_commitToLocalStorage_",
smalltalk.method({
selector: "commitToLocalStorage:",
category: 'loading-storing',
fn: function (aPackageName) {
    var self = this;
    var key;
    var sourceCode;
    key = smalltalk.send("smalltalk.packages.", "__comma", [aPackageName]);
    sourceCode = smalltalk.send(smalltalk.send(smalltalk.Exporter || Exporter, "_new", []), "_exportPackage_", [aPackageName]);
    localStorage[key] = escape(sourceCode);
    return self;
},
args: ["aPackageName"],
source: "commitToLocalStorage: aPackageName\x0a\x09| key sourceCode |\x0a\x09key := 'smalltalk.packages.' , aPackageName.\x0a\x09sourceCode := Exporter new exportPackage: aPackageName.\x0a\x09<localStorage[key] = escape(sourceCode)>",
messageSends: [",", "exportPackage:", "new"],
referencedClasses: ["Exporter"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathJs",
smalltalk.method({
selector: "defaultCommitPathJs",
category: 'commit paths',
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
},
args: [],
source: "defaultCommitPathJs\x0a\x09^ defaultCommitPathJs ifNil: [ defaultCommitPathJs := 'js']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathJs_",
smalltalk.method({
selector: "defaultCommitPathJs:",
category: 'commit paths',
fn: function (aString) {
    var self = this;
    self['@defaultCommitPathJs'] = aString;
    return self;
},
args: ["aString"],
source: "defaultCommitPathJs: aString\x0a\x09defaultCommitPathJs := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathSt",
smalltalk.method({
selector: "defaultCommitPathSt",
category: 'commit paths',
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
},
args: [],
source: "defaultCommitPathSt\x0a\x09^ defaultCommitPathSt ifNil: [ defaultCommitPathSt := 'st']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathSt_",
smalltalk.method({
selector: "defaultCommitPathSt:",
category: 'commit paths',
fn: function (aString) {
    var self = this;
    self['@defaultCommitPathSt'] = aString;
    return self;
},
args: ["aString"],
source: "defaultCommitPathSt: aString\x0a\x09defaultCommitPathSt := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_fetch_",
smalltalk.method({
selector: "fetch:",
category: 'loading-storing',
fn: function (aPackageName) {
    var self = this;
    smalltalk.send(self, "_fetch_prefix_", [aPackageName, smalltalk.send(smalltalk.send(self, "_defaultCommitPathJs", []), "__comma", ["/"])]);
    return self;
},
args: ["aPackageName"],
source: "fetch: aPackageName\x0a\x09self fetch: aPackageName prefix: self defaultCommitPathJs, '/'",
messageSends: ["fetch:prefix:", ",", "defaultCommitPathJs"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_fetch_prefix_",
smalltalk.method({
selector: "fetch:prefix:",
category: 'loading-storing',
fn: function (aPackageName, aPrefix) {
    var self = this;
    smalltalk.send(jQuery, "_getScript_onSuccess_", [smalltalk.send(smalltalk.send(aPrefix, "__comma", [aPackageName]), "__comma", [".js"]), function () {return smalltalk.send(smalltalk.Package || Package, "_init_", [aPackageName]);}]);
    return self;
},
args: ["aPackageName", "aPrefix"],
source: "fetch: aPackageName prefix: aPrefix\x0a\x09jQuery getScript: (aPrefix , aPackageName , '.js') onSuccess: [ Package init: aPackageName ]",
messageSends: ["getScript:onSuccess:", ",", "init:"],
referencedClasses: ["Package"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_init_",
smalltalk.method({
selector: "init:",
category: 'loading-storing',
fn: function (aPackageName) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.send(smalltalk, "_classes", []), "_select_", [function (each) {return each.pkg.pkgName == aPackageName;}]);
    smalltalk.send($1, "_do_", [function (each) {return smalltalk.init(each);}]);
    $2 = smalltalk.send($1, "_do_", [function (each) {return smalltalk.send(each, "_initialize", []);}]);
    return self;
},
args: ["aPackageName"],
source: "init: aPackageName\x0a\x09(smalltalk classes select: [ :each | <each.pkg.pkgName == aPackageName> ])\x0a\x09\x09do: [ :each | <smalltalk.init(each)> ];\x0a\x09\x09do: [ :each | each initialize ]",
messageSends: ["do:", "select:", "classes", "initialize"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_named_",
smalltalk.method({
selector: "named:",
category: 'not yet classified',
fn: function (aPackageName) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_packageAt_", [aPackageName]);
    return $1;
},
args: ["aPackageName"],
source: "named: aPackageName\x0a\x0a\x09^Smalltalk current packageAt: aPackageName",
messageSends: ["packageAt:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_named_ifAbsent_",
smalltalk.method({
selector: "named:ifAbsent:",
category: 'not yet classified',
fn: function (aPackageName, aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_packageAt_ifAbsent_", [aPackageName, aBlock]);
    return $1;
},
args: ["aPackageName", "aBlock"],
source: "named: aPackageName ifAbsent: aBlock\x0a\x0a\x09^Smalltalk current packageAt: aPackageName ifAbsent: aBlock",
messageSends: ["packageAt:ifAbsent:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_resetCommitPaths",
smalltalk.method({
selector: "resetCommitPaths",
category: 'commit paths',
fn: function () {
    var self = this;
    self['@defaultCommitPathJs'] = nil;
    self['@defaultCommitPathSt'] = nil;
    return self;
},
args: [],
source: "resetCommitPaths\x0a        defaultCommitPathJs := nil.\x0a        defaultCommitPathSt := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_sortedClasses_",
smalltalk.method({
selector: "sortedClasses:",
category: 'sorting',
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
},
args: ["classes"],
source: "sortedClasses: classes\x0a\x09\x22Answer classes, sorted by superclass/subclasses and by class name for common subclasses (Issue #143)\x22\x0a\x0a\x09| children others nodes expandedClasses |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09classes do: [:each |\x0a\x09\x09(classes includes: each superclass)\x0a\x09\x09\x09ifFalse: [children add: each]\x0a\x09\x09\x09ifTrue: [others add: each]].\x0a\x09nodes := children collect: [:each |\x0a\x09\x09ClassSorterNode on: each classes: others level: 0].\x0a\x09nodes := nodes sorted: [:a :b | a theClass name <= b theClass name ].\x0a\x09expandedClasses := Array new.\x0a\x09nodes do: [:aNode |\x0a\x09\x09aNode traverseClassesWith: expandedClasses].\x0a\x09^expandedClasses",
messageSends: ["do:", "ifFalse:ifTrue:", "add:", "includes:", "superclass", "collect:", "on:classes:level:", "sorted:", "<=", "name", "theClass", "new", "traverseClassesWith:"],
referencedClasses: ["ClassSorterNode", "Array"]
}),
smalltalk.Package.klass);


smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel-Objects');
smalltalk.Point.comment="A `Point` represents an x-y pair of numbers usually designating a geometric coordinate.\x0aPoints are traditionally created using the binary `#@` message to a number:\x0a\x0a\x09100@120\x0a\x0aPoints can then be arithmetically manipulated:\x0a\x0a\x09100@100 + (10@10)\x0a\x0a...or for example:\x0a\x0a\x09(100@100) * 2\x0a\x0a**NOTE:** Creating a Point with a negative y-value will need a space after `@` in order to avoid a parsing error:\x0a\x0a\x09100@ -100 \x22but 100@-100 would not parse\x22\x0a\x0aAmber does not have much behavior in this class out-of-the-box."
smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [smalltalk.send(smalltalk.send(self, "_x", []), "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), smalltalk.send(smalltalk.send(self, "_y", []), "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return $1;
},
args: ["aPoint"],
source: "* aPoint\x0a\x09^Point x: self x * aPoint asPoint x y: self y * aPoint asPoint y",
messageSends: ["x:y:", "*", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [smalltalk.send(smalltalk.send(self, "_x", []), "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), smalltalk.send(smalltalk.send(self, "_y", []), "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return $1;
},
args: ["aPoint"],
source: "+ aPoint\x0a\x09^Point x: self x + aPoint asPoint x y: self y + aPoint asPoint y",
messageSends: ["x:y:", "+", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [smalltalk.send(smalltalk.send(self, "_x", []), "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), smalltalk.send(smalltalk.send(self, "_y", []), "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return $1;
},
args: ["aPoint"],
source: "- aPoint\x0a\x09^Point x: self x - aPoint asPoint x y: self y - aPoint asPoint y",
messageSends: ["x:y:", "-", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [smalltalk.send(smalltalk.send(self, "_x", []), "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), smalltalk.send(smalltalk.send(self, "_y", []), "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return $1;
},
args: ["aPoint"],
source: "/ aPoint\x0a\x09^Point x: self x / aPoint asPoint x y: self y / aPoint asPoint y",
messageSends: ["x:y:", "/", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_class", []), "__eq", [smalltalk.send(self, "_class", [])]), "_and_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_x", []), "__eq", [smalltalk.send(self, "_x", [])]), "_&", [smalltalk.send(smalltalk.send(aPoint, "_y", []), "__eq", [smalltalk.send(self, "_y", [])])]);}]);
    return $1;
},
args: ["aPoint"],
source: "= aPoint\x0a\x09^aPoint class = self class and: [\x0a\x09\x09(aPoint x = self x) & (aPoint y = self y)]",
messageSends: ["and:", "&", "=", "y", "x", "class"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
"_asPoint",
smalltalk.method({
selector: "asPoint",
category: 'converting',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "asPoint\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    var $2, $1;
    $1 = smalltalk.send(smalltalk.String || String, "_streamContents_", [function (stream) {smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@x'], "_printString", []), "__comma", ["@"])]);$2 = smalltalk.send(smalltalk.send(self['@y'], "_notNil", []), "_and_", [function () {return smalltalk.send(self['@y'], "_negative", []);}]);if (smalltalk.assert($2)) {smalltalk.send(stream, "_space", []);}return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self['@y'], "_printString", [])]);}]);
    return $1;
},
args: [],
source: "printString\x0a\x09\x22Print receiver in classic x@y notation.\x22\x0a\x0a\x09^String streamContents: [:stream |\x0a\x09\x09stream nextPutAll: x printString, '@'.\x0a\x09\x09(y notNil and: [y negative])\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x22Avoid ambiguous @- construct\x22\x0a\x09\x09\x09\x09stream space].\x0a\x09\x09stream nextPutAll: y printString]",
messageSends: ["streamContents:", "nextPutAll:", ",", "printString", "ifTrue:", "space", "and:", "negative", "notNil"],
referencedClasses: ["String"]
}),
smalltalk.Point);

smalltalk.addMethod(
"_translateBy_",
smalltalk.method({
selector: "translateBy:",
category: 'transforming',
fn: function (delta) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(delta, "_x", []), "__plus", [self['@x']]), "__at", [smalltalk.send(smalltalk.send(delta, "_y", []), "__plus", [self['@y']])]);
    return $1;
},
args: ["delta"],
source: "translateBy: delta \x0a\x09\x22Answer a Point translated by delta (an instance of Point).\x22\x0a\x09^(delta x + x) @ (delta y + y)",
messageSends: ["@", "+", "y", "x"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@x'];
},
args: [],
source: "x\x0a\x09^x",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
"_x_",
smalltalk.method({
selector: "x:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self['@x'] = aNumber;
    return self;
},
args: ["aNumber"],
source: "x: aNumber\x0a\x09x := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@y'];
},
args: [],
source: "y\x0a\x09^y",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
"_y_",
smalltalk.method({
selector: "y:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self['@y'] = aNumber;
    return self;
},
args: ["aNumber"],
source: "y: aNumber\x0a\x09y := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);


smalltalk.addMethod(
"_x_y_",
smalltalk.method({
selector: "x:y:",
category: 'instance creation',
fn: function (aNumber, anotherNumber) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_x_", [aNumber]);
    smalltalk.send($2, "_y_", [anotherNumber]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aNumber", "anotherNumber"],
source: "x: aNumber y: anotherNumber\x0a\x09^self new\x0a\x09\x09x: aNumber;\x0a\x09\x09y: anotherNumber;\x0a\x09\x09yourself",
messageSends: ["x:", "new", "y:", "yourself"],
referencedClasses: []
}),
smalltalk.Point.klass);


smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Random.comment="`Random` is a random number generator and is implemented as a trivial wrapper around javascript `Math.random()` and is used like this:\x0a\x0a\x09Random new next\x0a\x0aThis will return a float x where x < 1 and x > 0. If you want a random integer from 1 to 10 you can use `#atRandom`\x0a\x0a\x0910 atRandom\x0a\x0a...and if you want a random number in a specific interval this also works:\x0a\x0a\x09(3 to: 7) atRandom\x0a\x0a...but be aware that `#to:` does not create an Interval as in other Smalltalk implementations but in fact an `Array` of numbers, so it's better to use:\x0a\x0a\x095 atRandom + 2\x0a\x0aSince `#atRandom` is implemented in `SequencableCollection` you can easy pick an element at random:\x0a\x0a\x09#('a' 'b' 'c') atRandom\x0a\x0a...or perhaps a letter from a `String`:\x0a\x0a\x09'abc' atRandom\x0a\x0aSince Amber does not have Characters this will return a `String` of length 1 like for example `'b'`."
smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'accessing',
fn: function () {
    var self = this;
    return Math.random();
    return self;
},
args: [],
source: "next\x0a\x09<return Math.random()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Random);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
category: 'accessing',
fn: function (anInteger) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(1, "_to_", [anInteger]), "_collect_", [function (each) {return smalltalk.send(self, "_next", []);}]);
    return $1;
},
args: ["anInteger"],
source: "next: anInteger\x0a    ^(1 to: anInteger) collect: [:each | self next]",
messageSends: ["collect:", "next", "to:"],
referencedClasses: []
}),
smalltalk.Random);



smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Smalltalk.comment="Smalltalk has only one instance, accessed with `Smalltalk current`. \x0aIt represents the global JavaScript variable `smalltalk` declared in `js/boot.js`.\x0a\x0aThe `smalltalk` object holds all class and packages defined in the system.\x0a\x0a## Classes\x0a\x0aClasses can be accessed using the following methods:\x0a\x0a- `#classes` answers the full list of Smalltalk classes in the system\x0a- `#at:` answers a specific class of `nil`\x0a\x0a## Packages\x0a\x0aPackages can be accessed using the following methods:\x0a\x0a- `#packages` answers the full list of packages\x0a- `#packageAt:` answers a specific class of `nil`\x0a\x0a__note:__ classes and packages are accessed using strings, not symbols\x0a\x0a## Parsing\x0a\x0aThe `#parse:` method is used to parse Smalltalk source code. \x0aIt requires the `Compiler` package and the `js/parser.js` parser file in order to work"
smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    return self[aString];
    return self;
},
args: ["aString"],
source: "at: aString\x0a\x09<return self[aString]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_basicParse_",
smalltalk.method({
selector: "basicParse:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    return smalltalk.parser.parse(aString);
    return self;
},
args: ["aString"],
source: "basicParse: aString\x0a\x09<return smalltalk.parser.parse(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
category: 'accessing',
fn: function () {
    var self = this;
    return self.classes();
    return self;
},
args: [],
source: "classes\x0a\x09<return self.classes()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_createPackage_",
smalltalk.method({
selector: "createPackage:",
category: 'private',
fn: function (packageName) {
    var self = this;
    return smalltalk.addPackage(packageName, nil);
    return self;
},
args: ["packageName"],
source: "createPackage: packageName\x0a\x09\x22Create and bind a new package with given name and return it.\x22\x0a\x0a      <return smalltalk.addPackage(packageName, nil)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_createPackage_properties_",
smalltalk.method({
selector: "createPackage:properties:",
category: 'private',
fn: function (packageName, aDict) {
    var self = this;
    var object;
    object = {};
    smalltalk.send(aDict, "_keysAndValuesDo_", [function (key, value) {return object[key] = value;}]);
    return smalltalk.addPackage(packageName, object);
    return self;
},
args: ["packageName", "aDict"],
source: "createPackage: packageName properties: aDict\x0a\x09\x22Create and bind a new package with given name and return it.\x22\x0a\x0a\x09| object |\x0a\x09<object = {};>.\x0a\x09aDict keysAndValuesDo: [:key :value |\x0a\x09\x09<object[key] = value>.\x0a\x09].\x0a       <return smalltalk.addPackage(packageName, object)>",
messageSends: ["keysAndValuesDo:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_deletePackage_",
smalltalk.method({
selector: "deletePackage:",
category: 'private',
fn: function (packageName) {
    var self = this;
    delete smalltalk.packages[packageName];
    return self;
},
args: ["packageName"],
source: "deletePackage: packageName\x0a\x09\x22Deletes a package by deleting its binding, but does not check if it contains classes etc.\x0a\x09To remove a package, use #removePackage instead.\x22\x0a\x0a       <delete smalltalk.packages[packageName]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packageAt_",
smalltalk.method({
selector: "packageAt:",
category: 'packages',
fn: function (packageName) {
    var self = this;
    return self.packages[packageName];
    return self;
},
args: ["packageName"],
source: "packageAt: packageName\x0a       <return self.packages[packageName]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packageAt_ifAbsent_",
smalltalk.method({
selector: "packageAt:ifAbsent:",
category: 'packages',
fn: function (packageName, aBlock) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_packageAt_", [packageName]);
    $1 = smalltalk.send($2, "_ifNil_", [aBlock]);
    return $1;
},
args: ["packageName", "aBlock"],
source: "packageAt: packageName ifAbsent: aBlock\x0a       ^(self packageAt: packageName) ifNil: aBlock",
messageSends: ["ifNil:", "packageAt:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'packages',
fn: function () {
    var self = this;
    return self.packages.all();
    return self;
},
args: [],
source: "packages\x0a\x09\x22Return all Package instances in the system.\x22\x0a\x0a\x09<return self.packages.all()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    var result;
    smalltalk.send(self, "_try_catch_", [function () {result = smalltalk.send(self, "_basicParse_", [aString]);return result;}, function (ex) {return smalltalk.send(smalltalk.send(self, "_parseError_parsing_", [ex, aString]), "_signal", []);}]);
    return result;
},
args: ["aString"],
source: "parse: aString\x0a\x09| result | \x0a\x09self try: [result := self basicParse: aString] catch: [:ex | (self parseError: ex parsing: aString) signal].\x0a\x09^result",
messageSends: ["try:catch:", "basicParse:", "signal", "parseError:parsing:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_parseError_parsing_",
smalltalk.method({
selector: "parseError:parsing:",
category: 'accessing',
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
},
args: ["anException", "aString"],
source: "parseError: anException parsing: aString\x0a\x09| row col message lines badLine code |\x0a\x09<row = anException.line;\x0a\x09col = anException.column;\x0a\x09message = anException.message;>.\x0a\x09lines := aString lines.\x0a\x09badLine := lines at: row.\x0a\x09badLine := (badLine copyFrom: 1 to: col - 1), ' ===>', (badLine copyFrom:  col to: badLine size).\x0a\x09lines at: row put: badLine.\x0a\x09code := String streamContents: [:s |\x0a                  lines withIndexDo: [:l :i |\x0a                     s nextPutAll: i asString, ': ', l, String lf]].\x0a\x09^ ParseError new messageText: ('Parse error on line ' , row , ' column ' , col , ' : ' , message , ' Below is code with line numbers and ===> marker inserted:' , String lf, code)",
messageSends: ["lines", "at:", ",", "copyFrom:to:", "size", "-", "at:put:", "streamContents:", "withIndexDo:", "nextPutAll:", "lf", "asString", "messageText:", "new"],
referencedClasses: ["String", "ParseError"]
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_pseudoVariableNames",
smalltalk.method({
selector: "pseudoVariableNames",
category: 'packages',
fn: function (){
var self=this;
return ["self", "super", "nil", "true", "false", "thisContext"];
},
args: [],
source: "pseudoVariableNames\x0a\x09^ #('self' 'super' 'nil' 'true' 'false' 'thisContext')",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_readJSObject_",
smalltalk.method({
selector: "readJSObject:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    return self.readJSObject(anObject);
    return self;
},
args: ["anObject"],
source: "readJSObject: anObject\x0a\x09<return self.readJSObject(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_removeClass_",
smalltalk.method({
selector: "removeClass:",
category: 'classes',
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
},
args: ["aClass"],
source: "removeClass: aClass\x0a\x09aClass isMetaclass ifTrue: [self error: aClass asString, ' is a Metaclass and cannot be removed!'].\x0a\x09aClass methodDictionary values do: [:each |\x0a\x09\x09aClass removeCompiledMethod: each].\x0a\x09aClass class methodDictionary values do: [:each |\x0a\x09\x09aClass class removeCompiledMethod: each].\x0a\x09self basicDelete: aClass name",
messageSends: ["ifTrue:", "error:", ",", "asString", "isMetaclass", "do:", "removeCompiledMethod:", "values", "methodDictionary", "class", "basicDelete:", "name"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_removePackage_",
smalltalk.method({
selector: "removePackage:",
category: 'packages',
fn: function (packageName) {
    var self = this;
    var pkg;
    pkg = smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, function () {return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);}]);
    smalltalk.send(smalltalk.send(pkg, "_classes", []), "_do_", [function (each) {return smalltalk.send(self, "_removeClass_", [each]);}]);
    smalltalk.send(self, "_deletePackage_", [packageName]);
    return self;
},
args: ["packageName"],
source: "removePackage: packageName\x0a\x09\x22Removes a package and all its classes.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [self error: 'Missing package: ', packageName].\x0a\x09pkg classes do: [:each |\x0a        \x09self removeClass: each].\x0a\x09self deletePackage: packageName",
messageSends: ["packageAt:ifAbsent:", "error:", ",", "do:", "removeClass:", "classes", "deletePackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_renamePackage_to_",
smalltalk.method({
selector: "renamePackage:to:",
category: 'packages',
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
},
args: ["packageName", "newName"],
source: "renamePackage: packageName to: newName\x0a\x09\x22Rename a package.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [self error: 'Missing package: ', packageName].\x0a\x09(self packageAt: newName) ifNotNil: [self error: 'Already exists a package called: ', newName].\x0a\x09<smalltalk.packages[newName] = smalltalk.packages[packageName]>.\x0a\x09pkg name: newName.\x0a\x09self deletePackage: packageName.",
messageSends: ["packageAt:ifAbsent:", "error:", ",", "ifNotNil:", "packageAt:", "name:", "deletePackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_reservedWords",
smalltalk.method({
selector: "reservedWords",
category: 'accessing',
fn: function () {
    var self = this;
    return self.reservedWords;
    return self;
},
args: [],
source: "reservedWords\x0a\x09\x22JavaScript reserved words\x22\x0a\x09<return self.reservedWords>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_send_to_arguments_",
smalltalk.method({
selector: "send:to:arguments:",
category: 'accessing',
fn: function (aSelector, anObject, aCollection) {
    var self = this;
    var selector;
    selector = smalltalk.send(smalltalk.send(aSelector, "_asString", []), "_asSelector", []);
    return self.send(anObject, selector, aCollection);
    return self;
},
args: ["aSelector", "anObject", "aCollection"],
source: "send: aSelector to: anObject arguments: aCollection\x0a\x09| selector |\x0a\x09selector := aSelector asString asSelector.\x0a\x09<return self.send(anObject, selector, aCollection)>",
messageSends: ["asSelector", "asString"],
referencedClasses: []
}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk;
    return self;
},
args: [],
source: "current\x0a\x09<return smalltalk>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.UndefinedObject.comment="UndefinedObject describes the behavior of its sole instance, `nil`. `nil` represents a prior value for variables that have not been initialized, or for results which are meaningless.\x0a\x0a`nil` is the Smalltalk representation of the `undefined` JavaScript object."
smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function () {
    var self = this;
    return null;
},
args: [],
source: "asJSON\x0a\x09^null",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "deepCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
category: 'testing',
fn: function (aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_ifNil_ifNotNil_", [aBlock, function () {}]);
    return $1;
},
args: ["aBlock"],
source: "ifNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifNil: aBlock ifNotNil: []",
messageSends: ["ifNil:ifNotNil:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aBlock, "_value", []);
    return $1;
},
args: ["aBlock", "anotherBlock"],
source: "ifNil: aBlock ifNotNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^aBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
category: 'testing',
fn: function (aBlock) {
    var self = this;
    return self;
},
args: ["aBlock"],
source: "ifNotNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(anotherBlock, "_value", []);
    return $1;
},
args: ["aBlock", "anotherBlock"],
source: "ifNotNil: aBlock ifNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^anotherBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_isNil",
smalltalk.method({
selector: "isNil",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isNil\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_notNil",
smalltalk.method({
selector: "notNil",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "notNil\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    return "nil";
},
args: [],
source: "printString\x0a    ^'nil'",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "shallowCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_",
smalltalk.method({
selector: "subclass:instanceVariableNames:",
category: 'class creation',
fn: function (aString, anotherString) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, anotherString, nil]);
    return $1;
},
args: ["aString", "anotherString"],
source: "subclass: aString instanceVariableNames: anotherString\x0a\x09^self subclass: aString instanceVariableNames: anotherString package: nil",
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
category: 'class creation',
fn: function (aString, aString2, aString3) {
    var self = this;
    var $1;
    smalltalk.send(self, "_deprecatedAPI", []);
    $1 = smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
    return $1;
},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 category: aString3\x0a\x09\x22Kept for compatibility.\x22\x0a\x09self deprecatedAPI.\x0a\x09^self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["deprecatedAPI", "subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
category: 'class creation',
fn: function (aString, aString2, aString3) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []), "_superclass_subclass_instanceVariableNames_package_", [self, aString, aString2, aString3]);
    return $1;
},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09^ClassBuilder new\x0a\x09    superclass: self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["superclass:subclass:instanceVariableNames:package:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["You cannot create new instances of UndefinedObject. Use nil"]);
    return self;
},
args: [],
source: "new\x0a\x09    self error: 'You cannot create new instances of UndefinedObject. Use nil'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.UndefinedObject.klass);


