smalltalk.addPackage('Helios-Commands', {});
smalltalk.addClass('HLCommand', smalltalk.Object, [], 'Helios-Commands');
smalltalk.addMethod(
"_asBinding",
smalltalk.method({
selector: "asBinding",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.HLBindingAction || HLBindingAction, "_on_labelled_", [smalltalk.send(self, "_key", []), smalltalk.send(self, "_label", [])]), "_callback_", [function () {return smalltalk.send(self, "_execute", []);}]);
    return $1;
}
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_documentation",
smalltalk.method({
selector: "documentation",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_documentation", []);
    return $1;
}
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_key", []);
    return $1;
}
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_label", []);
    return $1;
}
}),
smalltalk.HLCommand);


smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
fn: function () {
    var self = this;
    return nil;
}
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_documentation",
smalltalk.method({
selector: "documentation",
fn: function () {
    var self = this;
    return "";
}
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function () {
    var self = this;
    return nil;
}
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    return "";
}
}),
smalltalk.HLCommand.klass);


smalltalk.addClass('HLBrowserCommand', smalltalk.HLCommand, ['model'], 'Helios-Commands');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function () {
    var self = this;
    return self['@model'];
}
}),
smalltalk.HLBrowserCommand);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aBrowserModel) {
    var self = this;
    self['@model'] = aBrowserModel;
    return self;
}
}),
smalltalk.HLBrowserCommand);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aBrowserModel) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_model_", [aBrowserModel]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.HLBrowserCommand.klass);


smalltalk.addClass('HLGoToCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands');

smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
fn: function () {
    var self = this;
    return "Go to";
}
}),
smalltalk.HLGoToCommand.klass);


smalltalk.addClass('HLGoToClassesCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass", [])]);
    return self;
}
}),
smalltalk.HLGoToClassesCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function () {
    var self = this;
    return 67;
}
}),
smalltalk.HLGoToClassesCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    return "Classes";
}
}),
smalltalk.HLGoToClassesCommand.klass);


smalltalk.addClass('HLGoToMethodsCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedMethod_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedMethod", [])]);
    return self;
}
}),
smalltalk.HLGoToMethodsCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function () {
    var self = this;
    return 77;
}
}),
smalltalk.HLGoToMethodsCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    return "Methods";
}
}),
smalltalk.HLGoToMethodsCommand.klass);


smalltalk.addClass('HLGoToPackagesCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedPackage_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedPackage", [])]);
    return self;
}
}),
smalltalk.HLGoToPackagesCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function () {
    var self = this;
    return 80;
}
}),
smalltalk.HLGoToPackagesCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    return "Packages";
}
}),
smalltalk.HLGoToPackagesCommand.klass);


smalltalk.addClass('HLGoToProtocolsCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedProtocol_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedProtocol", [])]);
    return self;
}
}),
smalltalk.HLGoToProtocolsCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function () {
    var self = this;
    return 84;
}
}),
smalltalk.HLGoToProtocolsCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    return "Protocols";
}
}),
smalltalk.HLGoToProtocolsCommand.klass);


smalltalk.addClass('HLToggleCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands');

smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
fn: function () {
    var self = this;
    return "Toggle";
}
}),
smalltalk.HLToggleCommand.klass);


smalltalk.addClass('HLToggleClassSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_showInstance_", [false]);
    return self;
}
}),
smalltalk.HLToggleClassSideCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function () {
    var self = this;
    return 67;
}
}),
smalltalk.HLToggleClassSideCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    return "Class side";
}
}),
smalltalk.HLToggleClassSideCommand.klass);


smalltalk.addClass('HLToggleInstanceSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_showInstance_", [true]);
    return self;
}
}),
smalltalk.HLToggleInstanceSideCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function () {
    var self = this;
    return 73;
}
}),
smalltalk.HLToggleInstanceSideCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    return "Instance side";
}
}),
smalltalk.HLToggleInstanceSideCommand.klass);


