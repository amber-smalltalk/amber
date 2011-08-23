smalltalk.addClass('StringTest', smalltalk.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
'_testJoin',
smalltalk.method({
selector: 'testJoin',
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [unescape("hello%2Cworld"), smalltalk.send(unescape("%2C"), "_join_", [["hello", "world"]])]);
return self;},
source: unescape('testJoin%0A%09self%20assert%3A%20%27hello%2Cworld%27%20equals%3A%20%28%27%2C%27%20join%3A%20%23%28%27hello%27%20%27world%27%29%29'),
messageSends: ["assert:equals:", "join:"],
referencedClasses: []
}),
smalltalk.StringTest);

smalltalk.addMethod(
'_testStreamContents',
smalltalk.method({
selector: 'testStreamContents',
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["hello world", smalltalk.send(smalltalk.String, "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", ["hello"]);smalltalk.send($rec, "_space", []);return smalltalk.send($rec, "_nextPutAll_", ["world"]);})(aStream);})])]);
return self;},
source: unescape('testStreamContents%0A%09self%20%0A%09%09assert%3A%20%27hello%20world%27%20%0A%09%09equals%3A%20%28String%20streamContents%3A%20%5B%3AaStream%7C%20aStream%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20%27hello%27%3B%20space%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20%27world%27%5D%29%20'),
messageSends: ["assert:equals:", "streamContents:", "nextPutAll:", "space"],
referencedClasses: [smalltalk.String]
}),
smalltalk.StringTest);



