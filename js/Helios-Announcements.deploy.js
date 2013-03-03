smalltalk.addPackage('Helios-Announcements', {});
smalltalk.addClass('HLAnnouncement', smalltalk.Object, [], 'Helios-Announcements');


smalltalk.addClass('HLCodeHandled', smalltalk.HLAnnouncement, ['code'], 'Helios-Announcements');
smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
fn: function () {
    var self = this;
    return self['@code'];
}
}),
smalltalk.HLCodeHandled);

smalltalk.addMethod(
"_code_",
smalltalk.method({
selector: "code:",
fn: function (aModel) {
    var self = this;
    self['@code'] = aModel;
    return self;
}
}),
smalltalk.HLCodeHandled);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aCodeModel) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_code_", [aCodeModel]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
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
fn: function () {
    var self = this;
    return self['@item'];
}
}),
smalltalk.HLItemSelected);

smalltalk.addMethod(
"_item_",
smalltalk.method({
selector: "item:",
fn: function (anObject) {
    var self = this;
    self['@item'] = anObject;
    return self;
}
}),
smalltalk.HLItemSelected);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anItem) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_item_", [anItem]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
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


