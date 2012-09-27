smalltalk.addPackage('Spaces', {});
smalltalk.addClass('ObjectSpace', smalltalk.Object, ['frame'], 'Spaces');
smalltalk.ObjectSpace.comment="I am a connection to another Smalltalk environment.\x0aThe implementation creates an iframe on the same location as the window, and connect to the Amber environment.\x0a\x0a\x0a\x0a## Usage example:\x0a\x0a    | space |\x0a    \x0a    space := ObjectSpace new.\x0a    space do: [ smalltalk ] \x22Answers aSmalltalk\x22\x0a    (space do: [ smalltalk ]) == smalltalk \x22Answers false\x22\x0a    \x0a    space release \x22Remove the object space environment\x22"
smalltalk.addMethod(
"_connectTo_",
smalltalk.method({
selector: "connectTo:",
category: 'initialization',
fn: function (aFrame) {
    var self = this;
    smalltalk.send(self, "_release", []);
    self['@frame'] = aFrame;
    return self;
},
args: ["aFrame"],
source: "connectTo: aFrame\x0a\x09self release.\x0a\x09frame := aFrame",
messageSends: ["release"],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_create",
smalltalk.method({
selector: "create",
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(window, "_jQuery_", ["body"]), "_append_", ["<iframe style=\"display: none;\"></iframe>"]);
    self['@frame'] = smalltalk.send(smalltalk.send(smalltalk.send(window, "_jQuery_", ["iframe"]), "_get", []), "_last", []);
    smalltalk.send(smalltalk.send(self['@frame'], "_contentWindow", []), "_location_", [smalltalk.send(window, "_location", [])]);
    return self;
},
args: [],
source: "create\x0a\x09(window jQuery: 'body') append: '<iframe style=\x22display: none;\x22></iframe>'.\x0a\x09frame := (window jQuery: 'iframe') get last.\x0a\x09frame contentWindow location: window location",
messageSends: ["append:", "jQuery:", "last", "get", "location:", "location", "contentWindow"],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_destroy",
smalltalk.method({
selector: "destroy",
category: 'releasing',
fn: function () {
    var self = this;
    if (($receiver = self['@frame']) == nil || $receiver == undefined) {
        return self;
    } else {
        self['@frame'];
    }
    smalltalk.send(smalltalk.send(window, "_jQuery_", [self['@frame']]), "_remove", []);
    smalltalk.send(self, "_release", []);
    return self;
},
args: [],
source: "destroy\x0a\x09frame ifNil: [ ^ self ].\x0a\x09(window jQuery: frame) remove.\x0a\x0a\x09self release",
messageSends: ["ifNil:", "remove", "jQuery:", "release"],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'evaluating',
fn: function (aBlock) {
    var self = this;
    var $1, $2, $3;
    $1 = smalltalk.send(self, "_isConnected", []);
    if (!smalltalk.assert($1)) {
        $2 = smalltalk.send(smalltalk.ObjectSpaceConnectionError ||
            ObjectSpaceConnectionError, "_signal", []);
        return $2;
    }
    $3 = smalltalk.send(smalltalk.send(self['@frame'], "_contentWindow", []), "_eval_", [smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(aBlock, "_compiledSource", [])]), "__comma", [")()"])]);
    return $3;
},
args: ["aBlock"],
source: "do: aBlock\x0a\x09self isConnected ifFalse: [ ^ ObjectSpaceConnectionError signal ].\x0a\x09^ frame contentWindow eval: '(', aBlock compiledSource, ')()'",
messageSends: ["ifFalse:", "signal", "isConnected", "eval:", ",", "compiledSource", "contentWindow"],
referencedClasses: ["ObjectSpaceConnectionError"]
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_frame",
smalltalk.method({
selector: "frame",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@frame'];
},
args: [],
source: "frame\x0a\x09^ frame",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Object);
    smalltalk.send(self, "_create", []);
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self create",
messageSends: ["initialize", "create"],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_isConnected",
smalltalk.method({
selector: "isConnected",
category: 'initialization',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_frame", []), "_notNil", []);
    return $1;
},
args: [],
source: "isConnected\x0a\x09^ self frame notNil",
messageSends: ["notNil", "frame"],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_release",
smalltalk.method({
selector: "release",
category: 'releasing',
fn: function () {
    var self = this;
    self['@frame'] = nil;
    return self;
},
args: [],
source: "release\x0a\x09frame := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_whenReadyDo_",
smalltalk.method({
selector: "whenReadyDo:",
category: 'events',
fn: function (aBlock) {
    var self = this;
    smalltalk.send(smalltalk.send(window, "_jQuery_", [self['@frame']]), "_bind_do_", ["load", aBlock]);
    return self;
},
args: ["aBlock"],
source: "whenReadyDo: aBlock\x0a\x09(window jQuery: frame) \x0a\x09\x09bind: 'load'\x0a\x09\x09do: aBlock",
messageSends: ["bind:do:", "jQuery:"],
referencedClasses: []
}),
smalltalk.ObjectSpace);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aFrame) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_basicNew", []);
    smalltalk.send($2, "_connectTo_", [aFrame]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aFrame"],
source: "on: aFrame\x0a\x09^ self basicNew\x0a\x09\x09connectTo: aFrame;\x0a\x09\x09yourself",
messageSends: ["connectTo:", "basicNew", "yourself"],
referencedClasses: []
}),
smalltalk.ObjectSpace.klass);


smalltalk.addClass('ObjectSpaceConnectionError', smalltalk.Error, [], 'Spaces');
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function () {
    var self = this;
    return "The ObjectSpace is not connected";
},
args: [],
source: "messageText\x0a\x09^ 'The ObjectSpace is not connected'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectSpaceConnectionError);



smalltalk.addClass('ObjectSpaceTest', smalltalk.TestCase, ['space'], 'Spaces');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'initialization',
fn: function () {
    var self = this;
    self['@space'] = smalltalk.send(smalltalk.ObjectSpace || ObjectSpace, "_new", []);
    return self;
},
args: [],
source: "setUp\x0a\x09space := ObjectSpace new",
messageSends: ["new"],
referencedClasses: ["ObjectSpace"]
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self['@space'], "_destroy", []);
    return self;
},
args: [],
source: "tearDown\x0a\x09space destroy",
messageSends: ["destroy"],
referencedClasses: []
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_testConnection",
smalltalk.method({
selector: "testConnection",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self['@space'], "_destroy", []);
    smalltalk.send(self, "_deny_", [smalltalk.send(self['@space'], "_isConnected", [])]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(self['@space'], "_do_", [function () {}]);}, smalltalk.ObjectSpaceConnectionError || ObjectSpaceConnectionError]);
    return self;
},
args: [],
source: "testConnection\x0a\x09space destroy.\x0a\x09self deny: space isConnected.\x0a\x09self should: [ space do: [] ] raise: ObjectSpaceConnectionError",
messageSends: ["destroy", "deny:", "isConnected", "should:raise:", "do:"],
referencedClasses: ["ObjectSpaceConnectionError"]
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_testCreate",
smalltalk.method({
selector: "testCreate",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@space'], "_frame", []), "_notNil", [])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(self['@space'], "_isConnected", [])]);
    return self;
},
args: [],
source: "testCreate\x0a\x0a\x09self assert: space frame notNil.\x0a\x09self assert: space isConnected",
messageSends: ["assert:", "notNil", "frame", "isConnected"],
referencedClasses: []
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_testEvaluation",
smalltalk.method({
selector: "testEvaluation",
category: 'tests',
fn: function () {
    var self = this;
    var result;
    smalltalk.send(self['@space'], "_whenReadyDo_", [function () {result = smalltalk.send(self['@space'], "_do_", [function () {return smalltalk;}]);result;smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(result, "_class", []), "_name", []), "Smalltalk"]);smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(result, "_class", []), "__eq", [smalltalk.Smalltalk || Smalltalk])]);return smalltalk.send(self, "_deny_", [smalltalk.send(result, "__eq_eq", [smalltalk])]);}]);
    return self;
},
args: [],
source: "testEvaluation\x0a\x09| result |\x0a\x0a\x09space whenReadyDo: [\x0a\x09\x09result := space do: [ smalltalk ].\x0a\x0a\x09\x09self assert: result class name equals: 'Smalltalk'.\x0a\x09\x09self deny: result class = Smalltalk.\x0a\x09\x09self deny: result == smalltalk ]",
messageSends: ["whenReadyDo:", "do:", "assert:equals:", "name", "class", "deny:", "=", "=="],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_testRelease",
smalltalk.method({
selector: "testRelease",
category: 'tests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(self['@space'], "_frame", []), "_isNil", [])]);
    smalltalk.send(self['@space'], "_release", []);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@space'], "_frame", []), "_isNil", [])]);
    return self;
},
args: [],
source: "testRelease\x0a\x0a\x09self deny: space frame isNil.\x0a\x0a\x09space release.\x0a\x09\x0a\x09self assert: space frame isNil",
messageSends: ["deny:", "isNil", "frame", "release", "assert:"],
referencedClasses: []
}),
smalltalk.ObjectSpaceTest);



