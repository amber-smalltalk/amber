smalltalk.addClass('Tweet', smalltalk.Widget, ['json'], 'Examples');
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
referencedClasses: [smalltalk.HTMLCanvas]
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
