smalltalk.addPackage('Helios-Commands', {});
smalltalk.addClass('HLCommand', smalltalk.Object, [], 'Helios-Commands');
smalltalk.addMethod(
"_documentation",
smalltalk.method({
selector: "documentation",
fn: function () {
    var self = this;
    return "";
}
}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.HLCommand);



