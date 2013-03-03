smalltalk.addPackage('Helios-Environments', {});
smalltalk.addClass('HLEnvironment', smalltalk.Object, [], 'Helios-Environments');
smalltalk.HLEnvironment.comment="Abstract class defining common behavior for local and remote environments"
smalltalk.addMethod(
"_eval_on_",
smalltalk.method({
selector: "eval:on:",
category: 'actions',
fn: function (someCode, aReceiver) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_subclassResponsibility", []);
    return $1;
},
args: ["someCode", "aReceiver"],
source: "eval: someCode on: aReceiver\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_subclassResponsibility", []);
    return $1;
},
args: [],
source: "packages\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLEnvironment);



smalltalk.addClass('HLLocalEnvironment', smalltalk.HLEnvironment, [], 'Helios-Environments');
smalltalk.addMethod(
"_eval_on_",
smalltalk.method({
selector: "eval:on:",
category: 'actions',
fn: function (someCode, aReceiver) {
    var self = this;
    var $1, $2;
    var $early = {};
    try {
        var compiler;
        compiler = smalltalk.send(smalltalk.Compiler || Compiler, "_new", []);
        smalltalk.send(function () {return smalltalk.send(compiler, "_parseExpression_", [someCode]);}, "_on_do_", [smalltalk.Error || Error, function (ex) {$1 = smalltalk.send(window, "_alert_", [smalltalk.send(ex, "_messageText", [])]);throw $early = [$1];}]);
        $2 = smalltalk.send(smalltalk.send(smalltalk.send(compiler, "_eval_", [smalltalk.send(compiler, "_compile_forClass_", [smalltalk.send(smalltalk.send("doIt ^[", "__comma", [someCode]), "__comma", ["] value"]), smalltalk.DoIt || DoIt])]), "_fn", []), "_applyTo_arguments_", [aReceiver, []]);
        return $2;
    } catch (e) {
        if (e === $early) {
            return e[0];
        }
        throw e;
    }
},
args: ["someCode", "aReceiver"],
source: "eval: someCode on: aReceiver\x0a\x09| compiler  |\x0a\x09compiler := Compiler new.\x0a\x09[compiler parseExpression: someCode] on: Error do: [:ex |\x0a\x09\x09^window alert: ex messageText].\x0a\x09^(compiler eval: (compiler compile: 'doIt ^[', someCode, '] value' forClass: DoIt)) fn applyTo: aReceiver arguments: #()",
messageSends: ["new", "on:do:", "alert:", "messageText", "parseExpression:", "applyTo:arguments:", "fn", "eval:", "compile:forClass:", ","],
referencedClasses: ["Compiler", "Error", "DoIt"]
}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_packages", []);
    return $1;
},
args: [],
source: "packages\x0a\x0a\x09^ Smalltalk current packages",
messageSends: ["packages", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.HLLocalEnvironment);



smalltalk.addClass('HLRemoteEnvironment', smalltalk.HLEnvironment, [], 'Helios-Environments');
smalltalk.addMethod(
"_eval_on_",
smalltalk.method({
selector: "eval:on:",
category: 'actions',
fn: function (someCode, aReceiver) {
    var self = this;
    smalltalk.send(self, "_notYetImplemented", []);
    return self;
},
args: ["someCode", "aReceiver"],
source: "eval: someCode on: aReceiver\x0a\x0a\x09\x22Note for future self and friends:\x0a    whatever way this compilation happens on the other side, \x0a    it should return a proxy to the remote resulting object\x22\x0a    \x0a    self notYetImplemented",
messageSends: ["notYetImplemented"],
referencedClasses: []
}),
smalltalk.HLRemoteEnvironment);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "packages\x0a\x09\x22Answer the remote environment's packages\x22\x0a  \x0a\x09\x22to-do\x22\x0a    \x0a    \x22Note for future self and friends:\x0a    the problem with remote stuff is that the answers shouldn't be expected to be\x0a    received in a syncrhonous fashion. Everything network is asyc, so you *are going to deal with callbacks* here\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoteEnvironment);



smalltalk.addClass('HLRemoteObject', smalltalk.Object, [], 'Helios-Environments');
smalltalk.HLRemoteObject.comment="This is a local proxy to a remote object.\x0aTipically useful for evaluating and inspecting and interacting with instances of a remote VM.\x0a"
smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'actions',
fn: function (aMessage) {
    var self = this;
    return self;
},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x0a\x09\x22to-do\x0a\x0a\x09aham, blah blah\x0a\x0a\x09super doesNotUnderstand: aMessage\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoteObject);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
category: 'actions',
fn: function (anInspector) {
    var self = this;
    return self;
},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x0a\x09\x22to-do\x22\x0a\x0a\x09\x22this is a source of so much fun...\x22\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoteObject);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'actions',
fn: function () {
    var self = this;
    return "this is a remote object";
},
args: [],
source: "printString\x0a\x09^ 'this is a remote object'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoteObject);



