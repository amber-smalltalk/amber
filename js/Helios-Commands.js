smalltalk.addPackage('Helios-Commands', {});
smalltalk.addClass('HLCommand', smalltalk.Object, [], 'Helios-Commands');
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
smalltalk.HLCommand);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: [],
source: "label\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.HLCommand);



