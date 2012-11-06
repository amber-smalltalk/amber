smalltalk.addPackage('Helios-Announcements', {});
smalltalk.addClass('HLAnnouncement', smalltalk.Object, [], 'Helios-Announcements');


smalltalk.addClass('HLCodeHandled', smalltalk.HLAnnouncement, ['code'], 'Helios-Announcements');
smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@code'];
},
args: [],
source: "code\x0a\x0a\x09^ code",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeHandled);

smalltalk.addMethod(
"_code_",
smalltalk.method({
selector: "code:",
category: 'accessing',
fn: function (aModel) {
    var self = this;
    self['@code'] = aModel;
    return self;
},
args: ["aModel"],
source: "code: aModel\x0a\x0a\x09code := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeHandled);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'actions',
fn: function (aCodeModel) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_code_", [aCodeModel]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aCodeModel"],
source: "on: aCodeModel\x0a\x0a\x09^ self new \x0a    \x09code: aCodeModel;\x0a        yourself",
messageSends: ["code:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLCodeHandled.klass);


smalltalk.addClass('HLDoItExecuted', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLDoItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLInspectItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLPrintItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLDiveRequested', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLItemSelected', smalltalk.HLAnnouncement, ['item'], 'Helios-Announcements');
smalltalk.addMethod(
"_item",
smalltalk.method({
selector: "item",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@item'];
},
args: [],
source: "item\x0a\x09^ item",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLItemSelected);

smalltalk.addMethod(
"_item_",
smalltalk.method({
selector: "item:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    self['@item'] = anObject;
    return self;
},
args: ["anObject"],
source: "item: anObject\x0a\x09item := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLItemSelected);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (anItem) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_item_", [anItem]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["anItem"],
source: "on: anItem\x0a\x09^ self new\x0a    \x09item: anItem;\x0a        yourself",
messageSends: ["item:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLItemSelected.klass);


smalltalk.addClass('HLClassSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLInstanceVariableSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLMethodSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLPackageSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLProtocolSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLRefreshRequested', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLShowCommentToggled', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLShowInstanceToggled', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


