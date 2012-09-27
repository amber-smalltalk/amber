smalltalk.addPackage('Spaces', {});
smalltalk.addClass('ObjectSpace', smalltalk.Object, ['frame'], 'Spaces');
smalltalk.addMethod(
"_connectTo_",
smalltalk.method({
selector: "connectTo:",
fn: function (aFrame) {
    var self = this;
    smalltalk.send(self, "_release", []);
    self['@frame'] = aFrame;
    return self;
}
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_create",
smalltalk.method({
selector: "create",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(window, "_jQuery_", ["body"]), "_append_", ["<iframe style=\"display: none;\"></iframe>"]);
    self['@frame'] = smalltalk.send(smalltalk.send(smalltalk.send(window, "_jQuery_", ["iframe"]), "_get", []), "_last", []);
    smalltalk.send(smalltalk.send(self['@frame'], "_contentWindow", []), "_location_", [smalltalk.send(window, "_location", [])]);
    return self;
}
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_destroy",
smalltalk.method({
selector: "destroy",
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
}
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
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
}
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_frame",
smalltalk.method({
selector: "frame",
fn: function () {
    var self = this;
    return self['@frame'];
}
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Object);
    smalltalk.send(self, "_create", []);
    return self;
}
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_isConnected",
smalltalk.method({
selector: "isConnected",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_frame", []), "_notNil", []);
    return $1;
}
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_release",
smalltalk.method({
selector: "release",
fn: function () {
    var self = this;
    self['@frame'] = nil;
    return self;
}
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_whenReadyDo_",
smalltalk.method({
selector: "whenReadyDo:",
fn: function (aBlock) {
    var self = this;
    smalltalk.send(smalltalk.send(window, "_jQuery_", [self['@frame']]), "_bind_do_", ["load", aBlock]);
    return self;
}
}),
smalltalk.ObjectSpace);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aFrame) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_basicNew", []);
    smalltalk.send($2, "_connectTo_", [aFrame]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.ObjectSpace.klass);


smalltalk.addClass('ObjectSpaceConnectionError', smalltalk.Error, [], 'Spaces');
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
fn: function () {
    var self = this;
    return "The ObjectSpace is not connected";
}
}),
smalltalk.ObjectSpaceConnectionError);



smalltalk.addClass('ObjectSpaceTest', smalltalk.TestCase, ['space'], 'Spaces');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function () {
    var self = this;
    self['@space'] = smalltalk.send(smalltalk.ObjectSpace || ObjectSpace, "_new", []);
    return self;
}
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function () {
    var self = this;
    smalltalk.send(self['@space'], "_destroy", []);
    return self;
}
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_testConnection",
smalltalk.method({
selector: "testConnection",
fn: function () {
    var self = this;
    smalltalk.send(self['@space'], "_destroy", []);
    smalltalk.send(self, "_deny_", [smalltalk.send(self['@space'], "_isConnected", [])]);
    smalltalk.send(self, "_should_raise_", [function () {return smalltalk.send(self['@space'], "_do_", [function () {}]);}, smalltalk.ObjectSpaceConnectionError || ObjectSpaceConnectionError]);
    return self;
}
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_testCreate",
smalltalk.method({
selector: "testCreate",
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@space'], "_frame", []), "_notNil", [])]);
    smalltalk.send(self, "_assert_", [smalltalk.send(self['@space'], "_isConnected", [])]);
    return self;
}
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_testEvaluation",
smalltalk.method({
selector: "testEvaluation",
fn: function () {
    var self = this;
    var result;
    smalltalk.send(self['@space'], "_whenReadyDo_", [function () {result = smalltalk.send(self['@space'], "_do_", [function () {return smalltalk;}]);result;smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(result, "_class", []), "_name", []), "Smalltalk"]);smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(result, "_class", []), "__eq", [smalltalk.Smalltalk || Smalltalk])]);return smalltalk.send(self, "_deny_", [smalltalk.send(result, "__eq_eq", [smalltalk])]);}]);
    return self;
}
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_testRelease",
smalltalk.method({
selector: "testRelease",
fn: function () {
    var self = this;
    smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(self['@space'], "_frame", []), "_isNil", [])]);
    smalltalk.send(self['@space'], "_release", []);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(self['@space'], "_frame", []), "_isNil", [])]);
    return self;
}
}),
smalltalk.ObjectSpaceTest);



