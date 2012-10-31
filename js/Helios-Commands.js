smalltalk.addPackage('Helios-Commands', {});
smalltalk.addClass('HLCommand', smalltalk.Object, [], 'Helios-Commands');
smalltalk.addMethod(
"_asBinding",
smalltalk.method({
selector: "asBinding",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.HLBindingAction || HLBindingAction, "_on_labelled_", [smalltalk.send(self, "_key", []), smalltalk.send(self, "_label", [])]), "_callback_", [function () {return smalltalk.send(self, "_execute", []);}]);
    return $1;
},
args: [],
source: "asBinding\x0a\x09^ (HLBindingAction on: self key labelled: self label)\x0a    \x09callback: [ self execute ]",
messageSends: ["callback:", "execute", "on:labelled:", "key", "label"],
referencedClasses: ["HLBindingAction"]
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_documentation",
smalltalk.method({
selector: "documentation",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_documentation", []);
    return $1;
},
args: [],
source: "documentation\x0a\x09^ self class documentation",
messageSends: ["documentation", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "execute\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_key", []);
    return $1;
},
args: [],
source: "key\x0a\x09^ self class key",
messageSends: ["key", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_label", []);
    return $1;
},
args: [],
source: "label\x0a\x09^ self class label",
messageSends: ["label", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);


smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
category: 'accessing',
fn: function () {
    var self = this;
    return nil;
},
args: [],
source: "bindingGroup\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_documentation",
smalltalk.method({
selector: "documentation",
category: 'accessing',
fn: function () {
    var self = this;
    return "";
},
args: [],
source: "documentation\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function () {
    var self = this;
    return nil;
},
args: [],
source: "key\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    return "";
},
args: [],
source: "label\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);


smalltalk.addClass('HLBrowserCommand', smalltalk.HLCommand, ['model'], 'Helios-Commands');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@model'];
},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserCommand);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aBrowserModel) {
    var self = this;
    self['@model'] = aBrowserModel;
    return self;
},
args: ["aBrowserModel"],
source: "model: aBrowserModel\x0a\x09model := aBrowserModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserCommand);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBrowserModel) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_model_", [aBrowserModel]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aBrowserModel"],
source: "on: aBrowserModel\x0a\x09^ self new\x0a    \x09model: aBrowserModel;\x0a        yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserCommand.klass);


smalltalk.addClass('HLGoToCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands');

smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
category: 'accessing',
fn: function () {
    var self = this;
    return "Go to";
},
args: [],
source: "bindingGroup\x0a\x09^ 'Go to'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToCommand.klass);


smalltalk.addClass('HLGoToClassesCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedClass", [])]);
    return self;
},
args: [],
source: "execute\x0a\x09self model selectedClass: self model selectedClass",
messageSends: ["selectedClass:", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function () {
    var self = this;
    return 67;
},
args: [],
source: "key\x0a\x09\x22c\x22\x0a    \x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    return "Classes";
},
args: [],
source: "label\x0a\x09^ 'Classes'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand.klass);


smalltalk.addClass('HLGoToMethodsCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedMethod_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedMethod", [])]);
    return self;
},
args: [],
source: "execute\x0a\x09self model selectedMethod: self model selectedMethod",
messageSends: ["selectedMethod:", "selectedMethod", "model"],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function () {
    var self = this;
    return 77;
},
args: [],
source: "key\x0a\x09\x22m\x22\x0a    \x0a\x09^ 77",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    return "Methods";
},
args: [],
source: "label\x0a\x09^ 'Methods'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand.klass);


smalltalk.addClass('HLGoToPackagesCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedPackage_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedPackage", [])]);
    return self;
},
args: [],
source: "execute\x0a\x09self model selectedPackage: self model selectedPackage",
messageSends: ["selectedPackage:", "selectedPackage", "model"],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function () {
    var self = this;
    return 80;
},
args: [],
source: "key\x0a\x09\x22p\x22\x0a    \x0a\x09^ 80",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    return "Packages";
},
args: [],
source: "label\x0a\x09^ 'Packages'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand.klass);


smalltalk.addClass('HLGoToProtocolsCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_selectedProtocol_", [smalltalk.send(smalltalk.send(self, "_model", []), "_selectedProtocol", [])]);
    return self;
},
args: [],
source: "execute\x0a\x09self model selectedProtocol: self model selectedProtocol",
messageSends: ["selectedProtocol:", "selectedProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function () {
    var self = this;
    return 84;
},
args: [],
source: "key\x0a\x09\x22p\x22\x0a    \x0a\x09^ 84",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    return "Protocols";
},
args: [],
source: "label\x0a\x09^ 'Protocols'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand.klass);


smalltalk.addClass('HLToggleCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands');

smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
category: 'accessing',
fn: function () {
    var self = this;
    return "Toggle";
},
args: [],
source: "bindingGroup\x0a\x09^ 'Toggle'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleCommand.klass);


smalltalk.addClass('HLToggleClassSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_showInstance_", [false]);
    return self;
},
args: [],
source: "execute\x0a\x09self model showInstance: false",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function () {
    var self = this;
    return 67;
},
args: [],
source: "key\x0a\x09\x22c\x22\x0a    \x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    return "Class side";
},
args: [],
source: "label\x0a\x09^ 'Class side'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand.klass);


smalltalk.addClass('HLToggleInstanceSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_model", []), "_showInstance_", [true]);
    return self;
},
args: [],
source: "execute\x0a\x09self model showInstance: true",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function () {
    var self = this;
    return 73;
},
args: [],
source: "key\x0a\x09\x22i\x22\x0a    \x0a\x09^ 73",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    return "Instance side";
},
args: [],
source: "label\x0a\x09^ 'Instance side'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand.klass);


