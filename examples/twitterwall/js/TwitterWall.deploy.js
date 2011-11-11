smalltalk.addPackage('TwitterWall', {});
smalltalk.addClass('Tweet', smalltalk.Widget, ['json'], 'TwitterWall');
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


smalltalk.addClass('TwitterSearch', smalltalk.Object, ['queryString'], 'TwitterWall');
smalltalk.addMethod(
'_success_',
smalltalk.method({
selector: 'success:',
fn: function (tweets) {
    var self = this;
    var playground = nil;
    var table = nil;
    var tr = nil;
    playground = smalltalk.send(unescape("%23playground"), "_asJQuery", []);
    smalltalk.send(playground, "_empty", []);
    smalltalk.send(function (html) {table = smalltalk.send(html, "_table", []);smalltalk.send(smalltalk.send(table, "_element", []), "_id_", ["twitterwall"]);return smalltalk.send(tweets, "_do_", [function (tweet) {tr = smalltalk.send(html, "_tr", []);smalltalk.send(table, "_append_", [tr]);return smalltalk.send(smalltalk.Tweet || Tweet, "_openAt_with_", [tr, tweet]);}]);}, "_appendToJQuery_", [playground]);
    return self;
}
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
'_query',
smalltalk.method({
selector: 'query',
fn: function () {
    var self = this;
    var result = nil;
    var queryString = nil;
    self['@queryString'] = smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23searchQuery"), "_asJQuery", []), "_val", []), "_replace_with_", [unescape("%23"), unescape("%2523")]);
    result = smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [smalltalk.send(unescape("http%3A//search.twitter.com/search.json%3Frpp%3D5%26q%3D"), "__comma", [self['@queryString']]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("success", "__minus_gt", [function (tmp) {return smalltalk.send(self, "_success_", [smalltalk.send(tmp, "_results", [])]);}]), smalltalk.send("error", "__minus_gt", [function () {return smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", ["error"]);}]), smalltalk.send("dataType", "__minus_gt", ["jsonp"])])]);
    return self;
}
}),
smalltalk.TwitterSearch);



