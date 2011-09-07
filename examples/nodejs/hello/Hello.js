smalltalk.addClass('Hello', smalltalk.Object, [], 'Hello');

smalltalk.addMethod(
'_main',
smalltalk.method({
selector: 'main',
category: 'main',
fn: function (){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Hello world from JTalk in Node.js"]);
return self;},
source: unescape('main%0A%09console%20log%3A%20%27Hello%20world%20from%20JTalk%20in%20Node.js%27'),
messageSends: ["log:"],
referencedClasses: []
}),
smalltalk.Hello.klass);


