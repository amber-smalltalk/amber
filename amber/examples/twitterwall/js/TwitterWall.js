smalltalk.addPackage('TwitterWall', {});
smalltalk.addClass('Tweet', smalltalk.Widget, ['json'], 'TwitterWall');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
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
},
args: ["tr"],
source: unescape('renderOn%3A%20tr%0A%0A%7C%20tdUser%20tdMessage%20img%20a%20pMessage%20pDate%20%7C%0AtdUser%20%3A%3D%20HTMLCanvas%20new%20td.%0AtdUser%20element%20id%3A%20%27user%27.%0AtdMessage%20%3A%3D%20HTMLCanvas%20new%20td.%0AtdMessage%20element%20id%3A%20%27messageBox%27.%0A%0Atr%20append%3A%20tdUser.%0Atr%20append%3A%20tdMessage.%0A%0Aimg%20%3A%3D%20HTMLCanvas%20new%20img%20src%3A%20%28json%20at%3A%20%27profile_image_url%27%29%20.%0Aimg%20element%20title%3A%20%28json%20at%3A%20%27from_user%27%29.%0Aimg%20element%20longDesc%3A%20%28%27http%3A//twitter.com/%27%2C%20%28json%20at%3A%20%27from_user%27%29%29.%0A%0Aa%20%3A%3D%20HTMLCanvas%20new%20a%20href%3A%20%28%27http%3A//twitter.com/%27%2C%20%28json%20at%3A%20%27from_user%27%29%29.%0Aa%20append%3A%20img.%0A%0AtdUser%20append%3A%20a.%0A%0ApMessage%20%3A%3D%20HTMLCanvas%20new%20p.%0ApMessage%20element%20id%3A%20%27message%27.%0ApMessage%20append%3A%20%28json%20at%3A%20%27text%27%29.%0AtdMessage%20append%3A%20pMessage.%0A%0ApDate%20%3A%3D%20HTMLCanvas%20new%20p.%0ApDate%20element%20id%3A%20%27date%27.%0ApDate%20append%3A%20%28json%20at%3A%20%27created_at%27%29.%0AtdMessage%20append%3A%20pDate.'),
messageSends: ["td", "new", "id:", "element", "append:", "src:", "img", "at:", "title:", "longDesc:", unescape("%2C"), "href:", "a", "p"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.Tweet);

smalltalk.addMethod(
unescape('_json'),
smalltalk.method({
selector: unescape('json'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@json'];
    return self;
},
args: [],
source: unescape('json%0A%5Ejson'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Tweet);

smalltalk.addMethod(
unescape('_json_'),
smalltalk.method({
selector: unescape('json%3A'),
category: 'not yet classified',
fn: function (aJson) {
    var self = this;
    self['@json'] = aJson;
    return self;
},
args: ["aJson"],
source: unescape('json%3A%20aJson%0Ajson%20%3A%3D%20aJson'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Tweet);


smalltalk.addMethod(
unescape('_openAt_with_'),
smalltalk.method({
selector: unescape('openAt%3Awith%3A'),
category: 'not yet classified',
fn: function (tr, aJson) {
    var self = this;
    var tweet = nil;
    tweet = smalltalk.send(self, "_new", []);
    smalltalk.send(tweet, "_json_", [aJson]);
    smalltalk.send(tweet, "_renderOn_", [tr]);
    return tr;
    return self;
},
args: ["tr", "aJson"],
source: unescape('openAt%3A%20tr%20with%3A%20aJson%0A%7C%20tweet%20%7C%0Atweet%20%3A%3D%20self%20new.%0Atweet%20json%3A%20aJson.%0Atweet%20renderOn%3A%20tr.%0A%5Etr'),
messageSends: ["new", "json:", "renderOn:"],
referencedClasses: []
}),
smalltalk.Tweet.klass);


smalltalk.addClass('TwitterSearch', smalltalk.Object, ['queryString'], 'TwitterWall');
smalltalk.addMethod(
unescape('_success_'),
smalltalk.method({
selector: unescape('success%3A'),
category: 'not yet classified',
fn: function (tweets) {
    var self = this;
    var playground = nil;
    var table = nil;
    var tr = nil;
    playground = smalltalk.send(unescape("%23playground"), "_asJQuery", []);
    smalltalk.send(playground, "_empty", []);
    smalltalk.send(function (html) {table = smalltalk.send(html, "_table", []);smalltalk.send(smalltalk.send(table, "_element", []), "_id_", ["twitterwall"]);return smalltalk.send(tweets, "_do_", [function (tweet) {tr = smalltalk.send(html, "_tr", []);smalltalk.send(table, "_append_", [tr]);return smalltalk.send(smalltalk.Tweet || Tweet, "_openAt_with_", [tr, tweet]);}]);}, "_appendToJQuery_", [playground]);
    return self;
},
args: ["tweets"],
source: unescape('success%3A%20tweets%0A%7C%20playground%20table%20tr%20%7C%0Aplayground%20%3A%3D%20%27%23playground%27%20asJQuery.%0Aplayground%20empty.%0A%20%5B%3Ahtml%20%7C%20%0A%09table%20%3A%3D%20html%20table.%0A%09table%20element%20id%3A%20%27twitterwall%27.%0A%0A%09tweets%20do%3A%20%5B%20%3Atweet%20%7C%20%0A%20%20%20%20%20%20%20%20%09%20%20%20tr%20%3A%3D%20html%20tr.%0A%09%20%20%20%20%20%20%20%20%20%20%20table%20append%3A%20tr.%0A%20%20%20%20%20%20%20%20%09%20%20%20Tweet%20openAt%3A%20tr%20with%3A%20tweet%0A%20%20%20%20%20%20%20%20%5D%0A%5D%20appendToJQuery%3A%20playground.'),
messageSends: ["asJQuery", "empty", "appendToJQuery:", "table", "id:", "element", "do:", "tr", "append:", "openAt:with:"],
referencedClasses: ["Tweet"]
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
unescape('_query'),
smalltalk.method({
selector: unescape('query'),
category: 'not yet classified',
fn: function () {
    var self = this;
    var result = nil;
    var queryString = nil;
    self['@queryString'] = smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23searchQuery"), "_asJQuery", []), "_val", []), "_replace_with_", [unescape("%23"), unescape("%2523")]);
    result = smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [smalltalk.send(unescape("http%3A//search.twitter.com/search.json%3Frpp%3D5%26q%3D"), "__comma", [self['@queryString']]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("success", "__minus_gt", [function (tmp) {return smalltalk.send(self, "_success_", [smalltalk.send(tmp, "_results", [])]);}]), smalltalk.send("error", "__minus_gt", [function () {return smalltalk.send(typeof window == "undefined" ? nil : window, "_alert_", ["error"]);}]), smalltalk.send("dataType", "__minus_gt", ["jsonp"])])]);
    return self;
},
args: [],
source: unescape('query%0A%7C%20result%20queryString%20%7C%0AqueryString%20%3A%3D%20%28%27%23searchQuery%27%20%20asJQuery%20val%29%20replace%3A%20%27%23%27%20with%3A%20%27%2523%27.%0Aresult%20%3A%3D%20jQuery%20%0A%09%09%09ajax%3A%20%27http%3A//search.twitter.com/search.json%3Frpp%3D5%26q%3D%27%2C%20queryString%0A%09%09%09options%3A%20%23%7B%0A%09%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%09%27success%27%20-%3E%20%5B%20%3Atmp%20%7C%20self%20success%3A%20%28tmp%20results%29%5D.%0A%09%09%09%09%27error%27%20-%3E%20%5Bwindow%20alert%3A%20%27error%27%5D.%0A%09%09%09%09%27dataType%27%20-%3E%20%27jsonp%27%0A%09%09%09%7D.'),
messageSends: ["replace:with:", "val", "asJQuery", "ajax:options:", unescape("%2C"), unescape("-%3E"), "success:", "results", "alert:"],
referencedClasses: []
}),
smalltalk.TwitterSearch);



