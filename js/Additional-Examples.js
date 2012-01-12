smalltalk.addPackage('Additional-Examples', {});
smalltalk.addClass('ClassInitializationExample', smalltalk.Object, [], 'Additional-Examples');
smalltalk.ClassInitializationExample.comment=unescape('This%20class%20will%20pop%20up%20an%20alert%20when%20it%20is%20loaded%20into%20Amber.')

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(smalltalk.send("Hello from inside the ", "__comma", [smalltalk.send(self, "_printString", [])]), "__comma", [" initialize method."])]);
return self;},
args: [],
source: unescape('initialize%0A%09window%20alert%3A%20%27Hello%20from%20inside%20the%20%27%2C%20self%20printString%20%2C%20%27%20initialize%20method.%27'),
messageSends: ["alert:", unescape("%2C"), "printString"],
referencedClasses: []
}),
smalltalk.ClassInitializationExample.klass);


