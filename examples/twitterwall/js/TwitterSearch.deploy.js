smalltalk.addClass('TwitterSearch', smalltalk.Object, [], 'Examples');
smalltalk.addMethod(
'_query_',
smalltalk.method({
selector: 'query:',
fn: function (aQueryString) {
    var self = this;
    var result = nil;
    result = smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [smalltalk.send(unescape("http%3A//search.twitter.com/search.json%3Frpp%3D5%26q%3D"), "__comma", [aQueryString]), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("success", "__minus_gt", [function (tmp) {return smalltalk.send(self, "_success_", [smalltalk.send(tmp, "_results", [])]);}]), smalltalk.send("error", "__minus_gt", [function () {return smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", ["error"]);}]), smalltalk.send("dataType", "__minus_gt", ["jsonp"])])]);
    return self;
}
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
'_success_',
smalltalk.method({
selector: 'success:',
fn: function (tweets) {
    var self = this;
    var wall = nil;
    var table = nil;
    var tr = nil;
    wall = unescape("%23playground");
    table = smalltalk.send(smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_onJQuery_", [smalltalk.send(wall, "_asJQuery", [])]), "_table", []);
    smalltalk.send(smalltalk.send(table, "_element", []), "_id_", ["twitterwall"]);
    smalltalk.send(tweets, "_do_", [function (tweet) {tr = smalltalk.send(smalltalk.send(smalltalk.HTMLCanvas || HTMLCanvas, "_new", []), "_tr", []);smalltalk.send(table, "_append_", [tr]);return smalltalk.send(smalltalk.Tweet || Tweet, "_openAt_with_", [tr, tweet]);}]);
    return self;
}
}),
smalltalk.TwitterSearch);

