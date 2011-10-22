smalltalk.addClass('TwitterSearch', smalltalk.Object, [], 'Examples');
smalltalk.addMethod(
unescape('_query_'),
smalltalk.method({
selector: unescape('query%3A'),
category: 'not yet classified',
fn: function (aQueryString) {
    var self = this;
    var result = nil;
    result = smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [smalltalk.send(unescape("http%3A//search.twitter.com/search.json%3Frpp%3D5%26q%3D"), "__comma", [aQueryString]), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("success", "__minus_gt", [function (tmp) {return smalltalk.send(self, "_success_", [smalltalk.send(tmp, "_results", [])]);}]), smalltalk.send("error", "__minus_gt", [function () {return smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", ["error"]);}]), smalltalk.send("dataType", "__minus_gt", ["jsonp"])])]);
    return self;
},
args: ["aQueryString"],
source: unescape('query%3A%20aQueryString%0A%7C%20result%20%7C%0Aresult%20%3A%3D%20jQuery%20%0A%09%09%09ajax%3A%20%27http%3A//search.twitter.com/search.json%3Frpp%3D5%26q%3D%27%2C%20aQueryString%0A%09%09%09options%3A%20%23%7B%0A%09%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%09%27success%27%20-%3E%20%5B%20%3Atmp%20%7C%20self%20success%3A%20%28tmp%20results%29%5D.%0A%09%09%09%09%27error%27%20-%3E%20%5Bwindow%20alert%3A%20%27error%27%5D.%0A%09%09%09%09%27dataType%27%20-%3E%20%27jsonp%27%0A%09%09%09%7D.%20%20'),
messageSends: ["ajax:options:", unescape("%2C"), unescape("-%3E"), "success:", "results", "alert:"],
referencedClasses: []
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_success_'),
smalltalk.method({
selector: unescape('success%3A'),
category: 'not yet classified',
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
},
args: ["tweets"],
source: unescape('success%3A%20tweets%0A%7C%20wall%20table%20tr%20%7C%0Awall%20%3A%3D%20%27%23playground%27.%0Atable%20%3A%3D%20%28HTMLCanvas%20onJQuery%3A%20%28wall%20asJQuery%29%29%20%20table.%0Atable%20element%20id%3A%20%27twitterwall%27.%0A%0Atweets%20do%3A%20%5B%20%3Atweet%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20tr%20%3A%3D%20HTMLCanvas%20new%20tr.%0A%20%20%20%20%20%20%20%20%20%20%20table%20append%3A%20tr.%0A%20%20%20%20%20%20%20%20%20%20%20Tweet%20openAt%3A%20tr%20with%3A%20tweet%0A%20%20%20%20%20%20%20%20%20%20%20%5D.'),
messageSends: ["table", "onJQuery:", "asJQuery", "id:", "element", "do:", "tr", "new", "append:", "openAt:with:"],
referencedClasses: [smalltalk.HTMLCanvas,smalltalk.nil]
}),
smalltalk.TwitterSearch);

