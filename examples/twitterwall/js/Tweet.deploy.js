smalltalk.addClass('Tweet', smalltalk.Widget, ['json'], 'Examples');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (tr) {
    var self = this;
    var tdUser = nil;
    var tdMessage = nil;
    var img = nil;
    var a = nil;
    var pMessage = nil;
    var pDate = nil;
    tdUser = smalltalk.send(smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_new", []), "_td", []);
    smalltalk.send(smalltalk.send(tdUser, "_element", []), "_id_", ["user"]);
    tdMessage = smalltalk.send(smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_new", []), "_td", []);
    smalltalk.send(smalltalk.send(tdMessage, "_element", []), "_id_", ["messageBox"]);
    smalltalk.send(tr, "_append_", [tdUser]);
    smalltalk.send(tr, "_append_", [tdMessage]);
    img = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_new", []), "_img", []), "_src_", [smalltalk.send(self['@json'], "_at_", ["profile_image_url"])]);
    smalltalk.send(smalltalk.send(img, "_element", []), "_title_", [smalltalk.send(self['@json'], "_at_", ["from_user"])]);
    smalltalk.send(smalltalk.send(img, "_element", []), "_longDesc_", [smalltalk.send(unescape("http%3A//twitter.com/"), "__comma", [smalltalk.send(self['@json'], "_at_", ["from_user"])])]);
    a = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_new", []), "_a", []), "_href_", [smalltalk.send(unescape("http%3A//twitter.com/"), "__comma", [smalltalk.send(self['@json'], "_at_", ["from_user"])])]);
    smalltalk.send(a, "_append_", [img]);
    smalltalk.send(tdUser, "_append_", [a]);
    pMessage = smalltalk.send(smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_new", []), "_p", []);
    smalltalk.send(smalltalk.send(pMessage, "_element", []), "_id_", ["message"]);
    smalltalk.send(pMessage, "_append_", [smalltalk.send(self['@json'], "_at_", ["text"])]);
    smalltalk.send(tdMessage, "_append_", [pMessage]);
    pDate = smalltalk.send(smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_new", []), "_p", []);
    smalltalk.send(smalltalk.send(pDate, "_element", []), "_id_", ["date"]);
    smalltalk.send(pDate, "_append_", [smalltalk.send(self['@json'], "_at_", ["created_at"])]);
    smalltalk.send(tdMessage, "_append_", [pDate]);
    return self;
}
}),
smalltalk.Tweet);

smalltalk.addMethod(
'_json',
smalltalk.method({
selector: 'json',
fn: function () {
    var self = this;
    return self['@json'];
    return self;
}
}),
smalltalk.Tweet);

smalltalk.addMethod(
'_json_',
smalltalk.method({
selector: 'json:',
fn: function (aJson) {
    var self = this;
    self['@json'] = aJson;
    return self;
}
}),
smalltalk.Tweet);


smalltalk.addMethod(
'_openAt_with_',
smalltalk.method({
selector: 'openAt:with:',
fn: function (tr, aJson) {
    var self = this;
    var tweet = nil;
    tweet = smalltalk.send(self, "_new", []);
    smalltalk.send(tweet, "_json_", [aJson]);
    smalltalk.send(tweet, "_renderOn_", [tr]);
    return tr;
    return self;
}
}),
smalltalk.Tweet.klass);

