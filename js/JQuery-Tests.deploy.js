smalltalk.addClass('JQueryTest', smalltalk.TestCase, ['document'], 'JQuery-Tests');
smalltalk.addMethod(
'_testFind',
smalltalk.method({
selector: 'testFind',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", ["James", smalltalk.send(smalltalk.send(smalltalk.send(self['@document'], "_asJQuery", []), "_find_", ["li.firstname"]), "_html", [])]);
return self;}
]
}),
smalltalk.JQueryTest);

smalltalk.addMethod(
'_setUp',
smalltalk.method({
selector: 'setUp',
fn: function (){
var self=this;
self['@document']=unescape("%3Cdiv%20class%3D%22person%22%3E%0A%09%09%09%09%3Cul%3E%0A%09%09%09%09%09%3Cli%20class%3D%22firstname%22%3EJames%3C/li%3E%0A%09%09%09%09%09%3Cli%20class%3D%22lastname%22%3EBond%3C/li%3E%0A%09%09%09%09%3C/ul%3E%0A%09%09%09%3C/div%3E");
return self;}
]
}),
smalltalk.JQueryTest);

smalltalk.addMethod(
'_testEach',
smalltalk.method({
selector: 'testEach',
fn: function (){
var self=this;
var classes=nil;
classes=smalltalk.send(smalltalk.Array, "_new", []);
smalltalk.send(smalltalk.send(smalltalk.send(self['@document'], "_asJQuery", []), "_find_", ["li"]), "_each_", [(function(index, element){return smalltalk.send(classes, "_add_", [smalltalk.send(smalltalk.send(smalltalk.JQuery, "_fromElement_", [element]), "_attr_", ["class"])]);})]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(["firstname", "lastname"], "_printString", []), smalltalk.send(classes, "_printString", [])]);
return self;}
]
}),
smalltalk.JQueryTest);



